using System;
using System.Collections.Immutable;
using Libplanet.Blocks;

namespace Libplanet.Tx
{
    /// <summary>
    /// Content of a transaction without any information related to author or signature.
    /// The content is ready to be signed by any account.  It can be made a fully fledged
    /// <see cref="ITransaction"/> by being combined with an <see cref="ITxSigningMetadata"/>
    /// and a signature.
    /// </summary>
    /// <seealso cref="TxInvoice" />
    /// <seealso cref="ITxSigningMetadata" />
    /// <seealso cref="IUnsignedTx" />
    /// <seealso cref="ITransaction" />
    public interface ITxInvoice : IEquatable<ITxInvoice>
    {
        /// <summary>
        /// An approximated list of addresses whose states would be affected by actions in this
        /// transaction.  However, it could be wrong.
        /// </summary>
        // See also https://github.com/planetarium/libplanet/issues/368
        IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// The time this transaction is created and signed.
        /// </summary>
        DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="HashDigest{SHA256}"/> value of the genesis which this transaction is made
        /// from.  This can be <see langword="null"/> iff the transaction is contained in
        /// the genesis block.
        /// </summary>
        BlockHash? GenesisHash { get; }

        /// <summary>
        /// A list of actions in this transaction.
        /// </summary>
        TxActionList Actions { get; }
    }
}