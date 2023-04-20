using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Action
{
    /// <summary>
    /// Class responsible for handling of <see cref="IAction"/> evaluations.
    /// </summary>
    public class ActionEvaluator : IActionEvaluator
    {
        private readonly BlockHash? _genesisHash;
        private readonly ILogger _logger;
        private readonly PolicyBlockActionGetter _policyBlockActionGetter;
        private readonly IBlockChainStates _blockChainStates;
        private readonly Func<BlockHash, ITrie>? _trieGetter;
        private readonly Predicate<Currency> _nativeTokenPredicate;
        private readonly IActionTypeLoader _actionTypeLoader;
        private readonly IFeeCalculator? _feeCalculator;

#pragma warning disable MEN002
#pragma warning disable CS1573
        /// <summary>
        /// Creates a new <see cref="ActionEvaluator"/>.
        /// </summary>
        /// <param name="policyBlockActionGetter">A delegator to get policy block action to evaluate
        /// at the end for each <see cref="IPreEvaluationBlock"/> that gets evaluated.</param>
        /// <param name="blockChainStates">The <see cref="IBlockChainStates"/> to use to retrieve
        /// the states for a provided <see cref="Address"/>.</param>
        /// <param name="trieGetter">The function to retrieve a trie for
        /// a provided <see cref="BlockHash"/>.</param>
        /// <param name="genesisHash"> A <see cref="BlockHash"/> value of the genesis block.
        /// </param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <param name="actionTypeLoader"> A <see cref="IActionTypeLoader"/> implementation using action type lookup.</param>
        /// <param name="feeCalculator">Fee calculator.</param>
        public ActionEvaluator(
            PolicyBlockActionGetter policyBlockActionGetter,
            IBlockChainStates blockChainStates,
            Func<BlockHash, ITrie>? trieGetter,
            BlockHash? genesisHash,
            Predicate<Currency> nativeTokenPredicate,
            IActionTypeLoader actionTypeLoader,
            IFeeCalculator? feeCalculator
        )
#pragma warning restore MEN002
#pragma warning restore CS1573
        {
            _logger = Log.ForContext<ActionEvaluator>()
                .ForContext("Source", nameof(ActionEvaluator));
            _policyBlockActionGetter = policyBlockActionGetter;
            _blockChainStates = blockChainStates;
            _trieGetter = trieGetter;
            _genesisHash = genesisHash;
            _nativeTokenPredicate = nativeTokenPredicate;
            _actionTypeLoader = actionTypeLoader;
            _feeCalculator = feeCalculator;
        }

        /// <summary>
        /// Creates a random seed.
        /// </summary>
        /// <param name="preEvaluationHashBytes">The previous evaluation hash turned into bytes.
        /// </param>
        /// <param name="hashedSignature">The hashed signature.</param>
        /// <param name="signature">The signature.</param>
        /// <param name="actionOffset">The offset of the action.</param>
        /// <returns>An integer of the random seed.
        /// </returns>
        [Pure]
        public static int GenerateRandomSeed(
            byte[] preEvaluationHashBytes,
            byte[] hashedSignature,
            byte[] signature,
            int actionOffset)
        {
            return (preEvaluationHashBytes.Length > 0
                    ? BitConverter.ToInt32(preEvaluationHashBytes, 0) : 0)
                ^ (signature.Any() ? BitConverter.ToInt32(hashedSignature, 0) : 0) - actionOffset;
        }

        /// <inheritdoc/>
        [Pure]
        public IReadOnlyList<ActionEvaluation> Evaluate(IPreEvaluationBlock block)
        {
            _logger.Information(
                "Evaluating actions in the block #{BlockIndex} " +
                "pre-evaluation hash {PreEvaluationHash}...",
                block.Index,
                ByteUtil.Hex(block.PreEvaluationHash.ByteArray)
            );
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            try
            {
                ITrie? previousBlockStatesTrie =
                    !(_trieGetter is null) && block.PreviousHash is { } h
                    ? _trieGetter(h)
                    : null;
                IAccountStateDelta previousStates = GetPreviousBlockOutputStates(block);

                ImmutableList<ActionEvaluation> evaluations = EvaluateBlock(
                    block: block,
                    previousStates: previousStates,
                    previousBlockStatesTrie: previousBlockStatesTrie).ToImmutableList();

                var policyBlockAction = _policyBlockActionGetter(block);
                if (policyBlockAction is null)
                {
                    return evaluations;
                }
                else
                {
                    previousStates = evaluations.Count > 0
                        ? evaluations.Last().OutputStates
                        : previousStates;
                    return evaluations.Add(
                        EvaluatePolicyBlockAction(
                            blockHeader: block,
                            previousStates: previousStates,
                            previousBlockStatesTrie: previousBlockStatesTrie
                        )
                    );
                }
            }
            finally
            {
                _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "BlockEvaluationDuration")
                    .Information(
                        "Actions in {TxCount} transactions for block #{BlockIndex} " +
                        "pre-evaluation hash {PreEvaluationHash} evaluated in {DurationMs} ms",
                        block.Transactions.Count,
                        block.Index,
                        ByteUtil.Hex(block.PreEvaluationHash.ByteArray),
                        stopwatch.ElapsedMilliseconds);
            }
        }

        [Pure]
        internal static IReadOnlyList<IValue?> NullAccountStateGetter(
            IReadOnlyList<Address> addresses
        ) =>
            new IValue?[addresses.Count];

        [Pure]
        internal static FungibleAssetValue NullAccountBalanceGetter(
            Address address,
            Currency currency
        ) =>
            currency * 0;

        [Pure]
        internal static FungibleAssetValue NullTotalSupplyGetter(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            return currency * 0;
        }

        [Pure]
        internal static ValidatorSet NullValidatorSetGetter()
        {
            return new ValidatorSet();
        }

        /// <summary>
        /// Retrieves the set of <see cref="Address"/>es that will be updated when
        /// a given <see cref="Transaction{T}"/> is evaluated.
        /// </summary>
        /// <param name="tx">The <see cref="Transaction{T}"/> to evaluate.</param>
        /// <returns>An <see cref="IImmutableSet{T}"/> of updated <see cref="Address"/>es.
        /// </returns>
        /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
        /// the <see cref="Transaction{T}"/>'s type parameter.</typeparam>
        /// <remarks>
        /// A mock evaluation is performed on <paramref name="tx"/> using a mock
        /// <see cref="Block{T}"/> for its evaluation context and a mock
        /// <see cref="IAccountStateDelta"/> as its previous state to obtain the
        /// <see cref="IImmutableSet{T}"/> of updated <see cref="Address"/>es.
        /// </remarks>
        internal static IImmutableSet<Address> GetUpdatedAddresses<T>(Transaction<T> tx)
            where T : IAction, new()
        {
            // TODO: This method should take IUnsignedTx instead of Transaction<T>
            // FIXME this static method(and related APIs) should be removed since it doesn't
            // compatible with action type loader.
            // see also:
            // - https://github.com/planetarium/libplanet/issues/368
            // - https://github.com/planetarium/libplanet/discussions/2440
            // - https://github.com/planetarium/libplanet/pull/2703#discussion_r1130315141
            IAccountStateDelta previousStates = new AccountStateDeltaImpl(
                NullAccountStateGetter,
                NullAccountBalanceGetter,
                NullTotalSupplyGetter,
                NullValidatorSetGetter,
                tx.Signer);
            ImmutableList<IAction> actions = tx.SystemAction is { } sa
                ? ImmutableList.Create(sa)
                : ImmutableList.CreateRange<IAction>(tx.CustomActions!.Cast<IAction>());
            IEnumerable<ActionEvaluation> evaluations = EvaluateActions(
                genesisHash: tx.GenesisHash,
                preEvaluationHash: new HashDigest<SHA256>(new byte[HashDigest<SHA256>.Size]),
                blockIndex: default,
                txid: tx.Id,
                previousStates: previousStates,
                miner: default,
                signer: tx.Signer,
                signature: tx.Signature,
                actions: actions,
                rehearsal: true,
                previousBlockStatesTrie: null,
                nativeTokenPredicate: _ => true,
                feeCalculator: null);

            if (evaluations.Any())
            {
                return evaluations.Last().OutputStates.UpdatedAddresses;
            }
            else
            {
                return previousStates.UpdatedAddresses;
            }
        }

        /// <summary>
        /// Executes <see cref="IAction"/>s in <paramref name="actions"/>.  All other evaluation
        /// calls resolve to this method.
        /// </summary>
        /// <param name="genesisHash"> A <see cref="BlockHash"/> value of the genesis block.
        /// </param>
        /// <param name="preEvaluationHash">The
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/> of
        /// the <see cref="IPreEvaluationBlock"/> that <paramref name="actions"/> belong to.</param>
        /// <param name="blockIndex">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// that <paramref name="actions"/> belong to.</param>
        /// <param name="txid">The <see cref="ITransaction.Id"/> of the
        /// <see cref="ITransaction"/> that <paramref name="actions"/> belong to.
        /// This can be <see langword="null"/> on rehearsal mode or if an <see cref="IAction"/> is a
        /// <see cref="IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="previousStates">The states immediately before <paramref name="actions"/>
        /// being executed.</param>
        /// <param name="miner">An address of block miner.</param>
        /// <param name="signer">Signer of the <paramref name="actions"/>.</param>
        /// <param name="signature"><see cref="ITransaction"/> signature used to generate random
        /// seeds.</param>
        /// <param name="actions">Actions to evaluate.</param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <param name="rehearsal">Pass <see langword="true"/> if it is intended
        /// to be dry-run (i.e., the returned result will be never used).
        /// The default value is <see langword="false"/>.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <param name="blockAction">Pass <see langword="true"/> if it is
        /// <see cref="IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="feeCalculator">Fee calculator.</param>
        /// <param name="logger">An optional logger.</param>
        /// <returns>An enumeration of <see cref="ActionEvaluation"/>s for each
        /// <see cref="IAction"/> in <paramref name="actions"/>.
        /// </returns>
        /// <remarks>
        /// <para>Each <see cref="IActionContext.Random"/> object has an unconsumed state.</para>
        /// <para>
        /// The returned enumeration has the following properties:
        /// <list type="bullet">
        /// <item><description>The first <see cref="ActionEvaluation"/> in the enumerated result,
        /// if any, has <see cref="ActionEvaluation.OutputStates"/> with
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> that is a
        /// superset of <paramref name="previousStates"/>'s
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/>.</description></item>
        /// <item><description>Each <see cref="ActionEvaluation"/> in the enumerated result
        /// has <see cref="ActionEvaluation.OutputStates"/> with
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> that is a super set
        /// of the previous one, if any.</description></item>
        /// </list>
        /// </para>
        /// </remarks>
        [Pure]
        internal static IEnumerable<ActionEvaluation> EvaluateActions(
            BlockHash? genesisHash,
            HashDigest<SHA256> preEvaluationHash,
            long blockIndex,
            TxId? txid,
            IAccountStateDelta previousStates,
            Address miner,
            Address signer,
            byte[] signature,
            IImmutableList<IAction> actions,
            Predicate<Currency> nativeTokenPredicate,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null,
            bool blockAction = false,
            IFeeCalculator? feeCalculator = null,
            ILogger? logger = null)
        {
            ActionContext CreateActionContext(
                IAccountStateDelta prevStates,
                int randomSeed,
                List<string>? logs = null
            )
            {
                return new ActionContext(
                    genesisHash: genesisHash,
                    signer: signer,
                    txid: txid,
                    miner: miner,
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    rehearsal: rehearsal,
                    previousBlockStatesTrie: previousBlockStatesTrie,
                    blockAction: blockAction,
                    nativeTokenPredicate: nativeTokenPredicate,
                    logs: logs);
            }

            byte[] hashedSignature;
            using (var hasher = SHA1.Create())
            {
                hashedSignature = hasher.ComputeHash(signature);
            }

            byte[] preEvaluationHashBytes = preEvaluationHash.ToByteArray();
            int seed = GenerateRandomSeed(preEvaluationHashBytes, hashedSignature, signature, 0);

            IAccountStateDelta states = previousStates;
            foreach (IAction action in actions)
            {
                Exception? exc = null;
                IAccountStateDelta nextStates = states;
                ActionContext context = CreateActionContext(states, seed);
                try
                {
                    Stopwatch stopwatch = new Stopwatch();
                    stopwatch.Start();

                    if (blockIndex == 0)
                    {
                        logger?.Verbose("The actions in the genesis block don't be charged");
                    }
                    else if (rehearsal)
                    {
                        logger?.Verbose("rehearsal don't be charged");
                    }
                    else if (blockAction)
                    {
                        logger?.Verbose("blockAction don't be charged");
                    }
                    else if (feeCalculator is null)
                    {
                        logger?.Verbose("No fee calculator given, skip charging");
                    }
                    else
                    {
                        logger?.Verbose($"Measuring fee of {action} started");
                        FungibleAssetValue fee = feeCalculator.CalculateFee(action);
                        logger?.Verbose($"Measured fee of {action} is {fee}");
                        nextStates = states = states.TransferAsset(signer, miner, fee);
                        context = CreateActionContext(states, seed);
                    }

                    nextStates = action.Execute(context);
                    logger?
                        .ForContext("Tag", "Metric")
                        .ForContext("Subtag", "ActionExecutionTime")
                        .Information(
                            "Action {Action} took {DurationMs} ms to execute, " +
                            "GetState called {GetStateCount} times " +
                            "and took {GetStateDurationMs} ms",
                            action,
                            stopwatch.ElapsedMilliseconds,
                            ActionContext.GetStateCount.Value,
                            ActionContext.GetStateTimer.Value?.ElapsedMilliseconds);
                }
                catch (OutOfMemoryException e)
                {
                    // Because OutOfMemory is thrown non-deterministically depending on the state
                    // of the node, we should throw without further handling.
                    var message =
                        "Action {Action} of tx {TxId} of block #{BlockIndex} with " +
                        "pre-evaluation hash {PreEvaluationHash} threw an exception " +
                        "during execution";
                    logger?.Error(
                        e,
                        message,
                        action,
                        txid,
                        blockIndex,
                        ByteUtil.Hex(preEvaluationHash.ByteArray));
                    throw;
                }
                catch (Exception e)
                {
                    if (rehearsal)
                    {
                        var message =
                            $"The action {action} threw an exception during its " +
                            "rehearsal.  It is probably because the logic of the " +
                            $"action {action} is not enough generic so that it " +
                            "can cover every case including rehearsal mode.\n" +
                            "The IActionContext.Rehearsal property also might be " +
                            "useful to make the action can deal with the case of " +
                            "rehearsal mode.\n" +
                            "See also this exception's InnerException property.";
                        exc = new UnexpectedlyTerminatedActionException(
                            message, null, null, null, null, action, e);
                    }
                    else
                    {
                        var message =
                            "Action {Action} of tx {TxId} of block #{BlockIndex} with " +
                            "pre-evaluation hash {PreEvaluationHash} and previous " +
                            "state root hash {StateRootHash} threw an exception " +
                            "during execution";
                        HashDigest<SHA256>? stateRootHash = context.PreviousStateRootHash;
                        logger?.Error(
                            e,
                            message,
                            action,
                            txid,
                            blockIndex,
                            ByteUtil.Hex(preEvaluationHash.ByteArray),
                            stateRootHash);
                        var innerMessage =
                            $"The action {action} (block #{blockIndex}, " +
                            $"pre-evaluation hash {ByteUtil.Hex(preEvaluationHash.ByteArray)}, " +
                            $"tx {txid}, previous state root hash {stateRootHash}) threw " +
                            "an exception during execution.  " +
                            "See also this exception's InnerException property";
                        logger?.Error(
                            "{Message}\nInnerException: {ExcMessage}", innerMessage, e.Message);
                        exc = new UnexpectedlyTerminatedActionException(
                            innerMessage,
                            preEvaluationHash,
                            blockIndex,
                            txid,
                            stateRootHash,
                            action,
                            e);
                    }
                }

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext = CreateActionContext(states, seed);

                yield return new ActionEvaluation(
                    action: action,
                    inputContext: equivalentContext,
                    outputStates: nextStates,
                    exception: exc,
                    logs: context.Logs);

                if (exc is { })
                {
                    yield break;
                }

                states = nextStates;
                unchecked
                {
                    seed++;
                }
            }
        }

        /// <summary>
        /// Deterministically shuffles <paramref name="txs"/> for evaluation using
        /// <paramref name="preEvaluationHashBytes"/> as a random seed.
        /// </summary>
        /// <param name="protocolVersion">The <see cref="IBlockMetadata.ProtocolVersion"/>
        /// that <paramref name="txs"/> belong to.</param>
        /// <param name="txs">The list of <see cref="ITransaction"/>s to shuffle.</param>
        /// <param name="preEvaluationHashBytes">The
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        /// to use as a random seed when
        /// shuffling.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ITransaction"/>s in evaluation
        /// order with the following properties:
        /// <list type="bullet">
        /// <item><see cref="ITransaction"/>s with the same <see cref="ITxSigningMetadata.Signer"/>
        /// value appear consecutive in the list.</item>
        /// <item><see cref="ITransaction"/>s with the same <see cref="ITxSigningMetadata.Signer"/>
        /// value are ordered by <see cref="ITxSigningMetadata.Nonce"/> value in ascending order.
        /// </item>
        /// </list>
        /// </returns>
        /// <remarks>
        /// This is to prevent an attempt to gain a first move advantage by participants.
        /// </remarks>
        [Pure]
        internal static IEnumerable<ITransaction> OrderTxsForEvaluation(
            int protocolVersion,
            IEnumerable<ITransaction> txs,
            ImmutableArray<byte> preEvaluationHashBytes)
        {
            return protocolVersion >= 3
                ? OrderTxsForEvaluationV3(txs, preEvaluationHashBytes)
                : OrderTxsForEvaluationV0(txs, preEvaluationHashBytes);
        }

        /// <summary>
        /// Evaluates <see cref="IAction"/>s in <see cref="IBlockContent.Transactions"/>
        /// of a given <see cref="IPreEvaluationBlock"/>.
        /// </summary>
        /// <param name="block">The block to evaluate.</param>
        /// <param name="previousStates">The states immediately before an execution of any
        /// <see cref="IAction"/>s.</param>
        /// <param name="previousBlockStatesTrie">The <see cref="ITrie"/> containing the states
        /// at the previous block of <paramref name="block"/>.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="ActionEvaluation"/>s
        /// where each <see cref="ActionEvaluation"/> is the evaluation of an <see cref="IAction"/>.
        /// </returns>
        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateBlock(
            IPreEvaluationBlock block,
            IAccountStateDelta previousStates,
            ITrie? previousBlockStatesTrie = null)
        {
            IAccountStateDelta delta = previousStates;
            IEnumerable<ITransaction> orderedTxs = OrderTxsForEvaluation(
                block.ProtocolVersion,
                block.Transactions,
                block.PreEvaluationHash.ByteArray
            ).WithMeasuringTime(
                sw => _logger.Verbose(
                    "Took {ElapsedMilliseconds} ms to order transactions",
                    sw.ElapsedMilliseconds
                )
            );

            foreach (ITransaction tx in orderedTxs)
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                delta = AccountStateDeltaImpl.ChooseVersion(
                    block.ProtocolVersion,
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet,
                    tx.Signer);

                IEnumerable<ActionEvaluation> evaluations = EvaluateTx(
                    blockHeader: block,
                    tx: tx,
                    previousStates: delta,
                    previousBlockStatesTrie: previousBlockStatesTrie
                );

                var actions = new List<IAction>();
                foreach (ActionEvaluation evaluation in evaluations)
                {
                    yield return evaluation;
                    delta = evaluation.OutputStates;
                    actions.Add(evaluation.Action);
                }

                // FIXME: This is dependant on when the returned value is enumerated.
                ILogger logger = _logger
                    .ForContext("Tag", "Metric")
                    .ForContext("Subtag", "TxEvaluationDuration");
                logger.Information(
                    "Took {DurationMs} ms to evaluate {ActionCount} actions {ActionTypes} " +
                    "in transaction {TxId} by {Signer} as a part of block #{Index} " +
                    "pre-evaluation hash {PreEvaluationHash}",
                    stopwatch.ElapsedMilliseconds,
                    actions.Count,
                    actions.Select(action => action.ToString()!.Split('.')
                        .LastOrDefault()?.Replace(">", string.Empty)),
                    tx.Id,
                    tx.Signer,
                    block.Index,
                    ByteUtil.Hex(block.PreEvaluationHash.ByteArray));
            }
        }

        [Pure]
        internal IEnumerable<ActionEvaluation> EvaluateTx(
            IPreEvaluationBlockHeader blockHeader,
            ITransaction tx,
            IAccountStateDelta previousStates,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null)
        {
            IAction? systemAction = CreateSystemAction(tx);
            IEnumerable<IAction> customActions = CreateCustomActions(
                ActionTypeLoaderContext.From(blockHeader), tx);
            ImmutableList<IAction> actions = systemAction is { }
                ? ImmutableList.Create(systemAction)
                : ImmutableList.CreateRange(customActions);
            return EvaluateActions(
                genesisHash: _genesisHash,
                preEvaluationHash: blockHeader.PreEvaluationHash,
                blockIndex: blockHeader.Index,
                txid: tx.Id,
                previousStates: previousStates,
                miner: blockHeader.Miner,
                signer: tx.Signer,
                signature: tx.Signature,
                actions: actions,
                rehearsal: rehearsal,
                previousBlockStatesTrie: previousBlockStatesTrie,
                nativeTokenPredicate: _nativeTokenPredicate,
                feeCalculator: _feeCalculator,
                logger: _logger);
        }

        /// <summary>
        /// Evaluates the <see cref="IBlockPolicy{T}.BlockAction"/> set by the policy when
        /// this <see cref="ActionEvaluator"/> was instantiated for a given
        /// <see cref="IPreEvaluationBlockHeader"/>.
        /// </summary>
        /// <param name="blockHeader">The header of the block to evaluate.</param>
        /// <param name="previousStates">The states immediately before the evaluation of
        /// the <see cref="IBlockPolicy{T}.BlockAction"/> held by the instance.</param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
        /// <returns>The <see cref="ActionEvaluation"/> of evaluating
        /// the <see cref="IBlockPolicy{T}.BlockAction"/> held by the instance
        /// for the <paramref name="blockHeader"/>.</returns>
        [Pure]
        internal ActionEvaluation EvaluatePolicyBlockAction(
            IPreEvaluationBlockHeader blockHeader,
            IAccountStateDelta previousStates,
            ITrie? previousBlockStatesTrie)
        {
            var policyBlockAction = _policyBlockActionGetter(blockHeader);
            if (policyBlockAction is null)
            {
                var message =
                    "To evaluate policy block action, " +
                    "policyBlockAction must not be null.";
                throw new InvalidOperationException(message);
            }

            _logger.Information(
                $"Evaluating policy block action for block #{blockHeader.Index} " +
                $"{ByteUtil.Hex(blockHeader.PreEvaluationHash.ByteArray)}");

            return EvaluateActions(
                genesisHash: _genesisHash,
                preEvaluationHash: blockHeader.PreEvaluationHash,
                blockIndex: blockHeader.Index,
                txid: null,
                previousStates: previousStates,
                miner: blockHeader.Miner,
                signer: blockHeader.Miner,
                signature: Array.Empty<byte>(),
                actions: new[] { policyBlockAction }.ToImmutableList(),
                rehearsal: false,
                previousBlockStatesTrie: previousBlockStatesTrie,
                blockAction: true,
                nativeTokenPredicate: _nativeTokenPredicate
            ).Single();
        }

        [Pure]
        private static IEnumerable<ITransaction> OrderTxsForEvaluationV0(
            IEnumerable<ITransaction> txs,
            ImmutableArray<byte> preEvaluationHashBytes)
        {
            // As the order of transactions should be unpredictable until a block is mined,
            // the sorter key should be derived from both a block hash and a txid.
            var maskInteger = new BigInteger(preEvaluationHashBytes.ToArray());

            // Transactions with the same signers are grouped first and the ordering of the groups
            // is determined by the XOR aggregate of the txid's in the group with XOR bitmask
            // applied using the pre-evaluation hash provided.  Then within each group,
            // transactions are ordered by nonce.
            return txs
                .GroupBy(tx => tx.Signer)
                .OrderBy(
                    group => maskInteger ^ group
                        .Select(tx => new BigInteger(tx.Id.ToByteArray()))
                        .Aggregate((first, second) => first ^ second))
                .SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }

        [Pure]
        private static IEnumerable<ITransaction> OrderTxsForEvaluationV3(
            IEnumerable<ITransaction> txs,
            ImmutableArray<byte> preEvaluationHashBytes)
        {
            using SHA256 sha256 = SHA256.Create();

            // Some deterministic preordering is necessary.
            var groups = txs.GroupBy(tx => tx.Signer).OrderBy(group => group.Key).ToList();

            // Although strictly not necessary, additional hash computation removes zero padding
            // just in case.
            byte[] reHash = sha256.ComputeHash(preEvaluationHashBytes.ToArray());

            // As BigInteger uses little-endian, we take the last byte for parity to prevent
            // the value of reverse directly tied to the parity of startIndex below.
            bool reverse = reHash.Last() % 2 == 1;

            // This assumes the entropy of preEvaluationHash, thus reHash, is large enough and
            // its range with BigInteger conversion also is large enough that selection of
            // startIndex is approximately uniform.
            int startIndex = groups.Count <= 1
                ? 0
                : (int)(new BigInteger(reHash) % groups.Count);
            startIndex = startIndex >= 0 ? startIndex : -startIndex;

            var result = groups
                .Skip(startIndex)
                .Concat(groups.Take(startIndex));
            if (reverse)
            {
                result = result.Reverse();
            }

            return result.SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }

        /// <summary>
        /// Retrieves the last previous states for the previous block of
        /// <paramref name="blockHeader"/>.
        /// </summary>
        /// <param name="blockHeader">The header of block to reference.</param>
        /// <returns>The last previous <see cref="IAccountStateDelta"/> for the previous
        /// <see cref="Block{T}"/>.
        /// </returns>
        private IAccountStateDelta GetPreviousBlockOutputStates(
            IPreEvaluationBlockHeader blockHeader)
        {
            var (accountStateGetter, accountBalanceGetter, totalSupplyGetter, validatorSetGetter) =
                InitializeAccountGettersPair(blockHeader);
            Address miner = blockHeader.Miner;

            return AccountStateDeltaImpl.ChooseVersion(
                blockHeader.ProtocolVersion,
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                miner);
        }

        private (AccountStateGetter, AccountBalanceGetter, TotalSupplyGetter, ValidatorSetGetter)
            InitializeAccountGettersPair(
            IPreEvaluationBlockHeader blockHeader)
        {
            AccountStateGetter accountStateGetter;
            AccountBalanceGetter accountBalanceGetter;
            TotalSupplyGetter totalSupplyGetter;
            ValidatorSetGetter validatorSetGetter;

            if (blockHeader.PreviousHash is { } previousHash)
            {
                accountStateGetter = addresses => _blockChainStates.GetStates(
                    addresses,
                    previousHash
                );
                accountBalanceGetter = (address, currency) => _blockChainStates.GetBalance(
                    address,
                    currency,
                    previousHash
                );
                totalSupplyGetter = currency => _blockChainStates.GetTotalSupply(
                    currency,
                    previousHash
                );
                validatorSetGetter = () => _blockChainStates.GetValidatorSet(previousHash);
            }
            else
            {
                accountStateGetter = NullAccountStateGetter;
                accountBalanceGetter = NullAccountBalanceGetter;
                totalSupplyGetter = NullTotalSupplyGetter;
                validatorSetGetter = NullValidatorSetGetter;
            }

            return (accountStateGetter, accountBalanceGetter, totalSupplyGetter,
                validatorSetGetter);
        }

        private IEnumerable<IAction> CreateCustomActions(
            IActionTypeLoaderContext actionTypeLoaderContext,
            ITransaction tx
        )
        {
            if (tx.CustomActions is { } customActions)
            {
                IDictionary<string, Type> types = _actionTypeLoader.Load(actionTypeLoaderContext);

                foreach (IValue rawAction in customActions)
                {
                    IAction action;

                    // it means that, we will bypass PolymorphicAction....
                    if (rawAction is Dictionary pv &&
                        pv.TryGetValue((Text)"type_id", out IValue rawTypeId) &&
                        rawTypeId is Text typeId &&
                        types.TryGetValue(typeId, out Type? actionType))
                    {
                        action = (IAction)Activator.CreateInstance(actionType)!;
                        action.LoadPlainValue(pv["values"]);
                    }
                    else if (_actionTypeLoader is StaticActionTypeLoader loader &&
                             loader.BaseType is { } baseActionType)
                    {
                        action = (IAction)Activator.CreateInstance(baseActionType)!;
                        action.LoadPlainValue(rawAction);
                    }
                    else
                    {
                        throw new InvalidOperationException(
                            $"Failed to instantiate given action: {rawAction}"
                        );
                    }

                    yield return action;
                }
            }
        }

        private IAction? CreateSystemAction(ITransaction tx)
        {
            if (tx.SystemAction is Dictionary sa)
            {
                return Registry.Deserialize(sa);
            }

            return null;
        }
    }
}