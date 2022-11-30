using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using Libplanet.Action;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// <para>
    /// An in memory implementation of the <see cref="IStagePolicy{T}"/>.
    /// </para>
    /// <para>
    /// This implementation holds on to every unconfirmed <see cref="Transaction{T}"/> except
    /// for the following reasons:
    /// <list type="bullet">
    ///     <item>
    ///         <description>A <see cref="Transaction{T}"/> has been specifically marked to
    ///         be ignored due to <see cref="Transaction{T}"/> not being valid.</description>
    ///     </item>
    ///     <item>
    ///         <description>A <see cref="Transaction{T}"/> has expired due to its staleness.
    ///         </description>
    ///     </item>
    /// </list>
    /// </para>
    /// <para>
    /// Additionally, any <see cref="Transaction{T}"/> with a lower nonce than that of returned by
    /// the <see cref="BlockChain{T}"/> is masked and filtered by default.
    /// </para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class VolatileStagePolicy<T> : IStagePolicy<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<TxId, Transaction<T>> _staged;
        private readonly HashSet<TxId> _ignored;
        private readonly ReaderWriterLockSlim _lock;
        private readonly ILogger _logger;

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// By default, <see cref="Lifetime"/> is set to 10 minutes.
        /// </summary>
        public VolatileStagePolicy()
            : this(TimeSpan.FromSeconds(10 * 60))
        {
        }

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// </summary>
        /// <param name="lifetime">Volatilizes staged transactions older than this
        /// <see cref="TimeSpan"/>.  See also <see cref="Lifetime"/>.</param>
        public VolatileStagePolicy(TimeSpan lifetime)
        {
            _logger = Log.ForContext<VolatileStagePolicy<T>>();
            Lifetime = lifetime;
            _staged = new ConcurrentDictionary<TxId, Transaction<T>>();
            _ignored = new HashSet<TxId>();
            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
        }

        /// <summary>
        /// Lifespan for <see cref="Transaction{T}"/>s.  Any <see cref="Transaction{T}"/> older
        /// than this <see cref="TimeSpan"/> will be considered expired.
        /// </summary>
        /// <remarks>
        /// Expired <see cref="Transaction{T}"/>s cannot be staged.
        /// </remarks>
        public TimeSpan Lifetime { get; }

        /// <inheritdoc/>
        public bool Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            if (Expired(transaction))
            {
                return false;
            }

            bool result;
            _lock.EnterUpgradeableReadLock();
            try
            {
                if (_ignored.Contains(transaction.Id))
                {
                    return false;
                }
                else
                {
                    _lock.EnterWriteLock();
                    try
                    {
                        result = _staged.TryAdd(transaction.Id, transaction);
                        if (result)
                        {
                            const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
                            _logger
                                .ForContext("Tag", "Metric")
                                .ForContext("Subtag", "TxStageTimestamp")
                                .Debug(
                                    "Transaction {TxId} by {Signer} " +
                                    "with timestamp {TxTimestamp} staged at {StagedTimestamp}.",
                                    transaction.Id,
                                    transaction.Signer,
                                    transaction.Timestamp.ToString(
                                        TimestampFormat, CultureInfo.InvariantCulture),
                                    DateTimeOffset.UtcNow.ToString(
                                        TimestampFormat, CultureInfo.InvariantCulture));
                        }
                    }
                    finally
                    {
                        _lock.ExitWriteLock();
                    }
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }

            return result;
        }

        /// <inheritdoc/>
        public bool Unstage(BlockChain<T> blockChain, TxId id)
        {
            bool result;
            _lock.EnterWriteLock();
            try
            {
                result = _staged.TryRemove(id, out _);
            }
            finally
            {
                _lock.ExitWriteLock();
            }

            return result;
        }

        /// <inheritdoc/>
        public void Ignore(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterUpgradeableReadLock();
            try
            {
                if (_ignored.Contains(id))
                {
                    return;
                }

                _lock.EnterWriteLock();
                try
                {
                    _ignored.Add(id);
                    _staged.TryRemove(id, out _);
                }
                finally
                {
                    _lock.ExitWriteLock();
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }
        }

        /// <inheritdoc/>
        public bool Ignores(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterReadLock();
            try
            {
                return _ignored.Contains(id);
            }
            finally
            {
                _lock.ExitReadLock();
            }
        }

        /// <inheritdoc/>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool filtered = true)
        {
            _lock.EnterUpgradeableReadLock();
            try
            {
                if (GetInner(blockChain, id, filtered) is { } result)
                {
                    if (result.Expired)
                    {
                        _lock.EnterWriteLock();
                        try
                        {
                            _staged.TryRemove(result.Transaction.Id, out _);
                            return null;
                        }
                        finally
                        {
                            _lock.ExitWriteLock();
                        }
                    }
                    else
                    {
                        return result.Transaction;
                    }
                }
                else
                {
                    return null;
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }
        }

        /// <inheritdoc/>
        public IEnumerable<Transaction<T>> Iterate(BlockChain<T> blockChain, bool filtered = true)
        {
            List<Transaction<T>> transactions = new List<Transaction<T>>();
            List<TxId> expiredList = new List<TxId>();

            _lock.EnterUpgradeableReadLock();
            try
            {
                List<TxId> txIds = _staged.Keys.ToList();
                foreach (TxId txId in txIds)
                {
                    if (GetInner(blockChain, txId, filtered) is { } result)
                    {
                        if (result.Expired)
                        {
                            expiredList.Add(result.Transaction.Id);
                        }
                        else
                        {
                            transactions.Add(result.Transaction);
                        }
                    }
                }

                _lock.EnterWriteLock();
                try
                {
                    foreach (TxId txId in expiredList)
                    {
                        _staged.TryRemove(txId, out _);
                    }
                }
                finally
                {
                    _lock.ExitWriteLock();
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }

            return transactions;
        }

        /// <inheritdoc/>
        public long GetNextTxNonce(BlockChain<T> blockChain, Address address)
        {
            long nonce = blockChain.Store.GetTxNonce(blockChain.Id, address);
            IEnumerable<Transaction<T>> orderedTxs = Iterate(blockChain, filtered: true)
                .Where(tx => tx.Signer.Equals(address))
                .OrderBy(tx => tx.Nonce);

            foreach (Transaction<T> tx in orderedTxs)
            {
                if (nonce < tx.Nonce)
                {
                    break;
                }
                else if (nonce == tx.Nonce)
                {
                    nonce++;
                }
            }

            return nonce;
        }

        /// <summary>
        /// Retrieves a staged <see cref="Transaction{T}"/> matching given <paramref name="id"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain{T}"/> to use
        /// as a reference when filtering.</param>
        /// <param name="id">The <see cref="TxId"/> to look up.</param>
        /// <param name="filtered">Whether to return filtered result or not.</param>
        /// <returns>
        /// Returned value is decided according to the following rule:
        /// <list type="bullet">
        ///   <item><description>
        ///     If <paramref name="id"/> is not staged, returns <see langword="null"/>.
        ///   </description></item>
        ///   <item><description>
        ///     If <paramref name="id"/> is staged and expired, returns the found
        ///     <see cref="Transaction{T}"/> earmarked with <see langword="true"/>.
        ///     This bypasses filtering.
        ///   </description></item>
        ///   <item><description>
        ///     If <paramref name="id"/> is staged, not expired, and filtered,
        ///     returns <see langword="null"/>.  This is treating the same as if
        ///     the <see cref="Transaction{T}"/> was not staged in the first place.
        ///   </description></item>
        ///   <item><description>
        ///     If <paramref name="id"/> is staged, not expired, and not filtered,
        ///     returns the found <see cref="Transaction{T}"/> earmarked
        ///     with <see langword="false"/>.
        ///   </description></item>
        /// </list>
        /// </returns>
        /// <remarks>
        /// <para>
        /// This has been intended to avoid recursive lock, hence doesn't hold any synchronous
        /// scope.  Therefore, we should manage the lock from its caller side.
        /// </para>
        /// <para>
        /// Earmarking is done to defer removal of the expired <see cref="Transaction{T}"/> so
        /// the act of inner retrieval can be write-lock-free.  This allows the caller to
        /// aggregate expired <see cref="Transaction{T}"/>s and remove them in bulk.
        /// </para>
        /// </remarks>
        private (Transaction<T> Transaction, bool Expired)? GetInner(
            BlockChain<T> blockChain, TxId id, bool filtered)
        {
            if (_staged.TryGetValue(id, out Transaction<T>? tx) && tx is { })
            {
                if (Expired(tx))
                {
                    return (tx, true);
                }
                else if (filtered &&
                    tx.Nonce < blockChain.Store.GetTxNonce(blockChain.Id, tx.Signer))
                {
                    return null;
                }
                else
                {
                    return (tx, false);
                }
            }
            else
            {
                return null;
            }
        }

        private bool Expired(Transaction<T> transaction) =>
            transaction.Timestamp + Lifetime < DateTimeOffset.UtcNow;
    }
}
