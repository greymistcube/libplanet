using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Numerics;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.JsonDiffPatch.Xunit;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using Bencodex.Types;
using DiffPlex.DiffBuilder;
using DiffPlex.DiffBuilder.Model;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Sys;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Xunit;
using Xunit.Abstractions;
using Xunit.Sdk;
using Random = System.Random;

namespace Libplanet.Tests
{
    public static class TestUtils
    {
        public static readonly PrivateKey GenesisProposer = PrivateKey.FromString(
            "2a15e7deaac09ce631e1faa184efadb175b6b90989cf1faed9dfc321ad1db5ac");

        public static readonly PrivateKey ChainPrivateKey = PrivateKey.FromString(
            "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76");

        public static readonly List<PrivateKey> ValidatorPrivateKeys = new List<PrivateKey>
        {
            PrivateKey.FromString(
                "e5792a1518d9c7f7ecc35cd352899211a05164c9dde059c9811e0654860549ef"),
            PrivateKey.FromString(
                "91d61834be824c952754510fcf545180eca38e036d3d9b66564f0667b30d5b93"),
            PrivateKey.FromString(
                "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550"),
            PrivateKey.FromString(
                "91602d7091c5c7837ac8e71a8d6b1ed1355cfe311914d9a76107899add0ad56a"),
        };  // The ordering here should match the ordering by address.

        public static readonly ValidatorSet ValidatorSet = new ValidatorSet(
            ValidatorPrivateKeys.Select(
                privateKey => new Validator(privateKey.PublicKey, BigInteger.One)).ToList());

        // These keys are used to generate a situation that two adjacent peers generated by these
        // keys are in different buckets in routing table of Kademlia Protocol.
        public static readonly PrivateKey[] AdjacentKeys = new PrivateKey[10]
        {
            new PrivateKey(new byte[]
            {
                0x98, 0x66, 0x98, 0x50, 0x72, 0x8c, 0x6c, 0x41, 0x0b, 0xf4,
                0x2c, 0x45, 0xfe, 0x7c, 0x49, 0x23, 0x2d, 0x14, 0xcf, 0xb5,
                0x5b, 0x78, 0x4d, 0x81, 0x35, 0xae, 0x40, 0x4c, 0x7c, 0x24,
                0x3f, 0xc7,
            }),
            new PrivateKey(new byte[]
            {
                0xd2, 0x47, 0x6f, 0xf3, 0x1a, 0xf3, 0x4f, 0x00, 0x5a, 0xe2,
                0xd9, 0x24, 0x18, 0x60, 0xe9, 0xb9, 0xd0, 0x42, 0x9a, 0x30,
                0x67, 0x81, 0x2b, 0x00, 0xf0, 0x45, 0x87, 0x70, 0x3f, 0xd5,
                0x51, 0x93,
            }),
            new PrivateKey(new byte[]
            {
                0x9e, 0xd4, 0xdb, 0x20, 0xfd, 0x4d, 0x1c, 0x52, 0x55, 0x24,
                0x80, 0x52, 0xc6, 0x1f, 0x95, 0x1c, 0xf1, 0x49, 0x4a, 0xd6,
                0xf9, 0x1d, 0x29, 0xb9, 0xa3, 0x0b, 0x0e, 0x0c, 0xc8, 0xaa,
                0xb0, 0x79,
            }),
            new PrivateKey(new byte[]
            {
                0x0a, 0x4f, 0x84, 0xeb, 0x69, 0x4d, 0xc1, 0xf0, 0xf3, 0x15,
                0x97, 0xcc, 0x95, 0x53, 0x66, 0x01, 0x27, 0x2a, 0xc1, 0xcd,
                0x0f, 0xf6, 0x02, 0x6f, 0x08, 0x29, 0x1d, 0xd0, 0x79, 0xda,
                0xcc, 0x36,
            }),
            new PrivateKey(new byte[]
            {
                0x68, 0xbd, 0xc3, 0xda, 0xf1, 0xa1, 0x67, 0x9c, 0xa1, 0x1e,
                0x5a, 0x64, 0x10, 0xe6, 0x74, 0x95, 0x77, 0xbc, 0x47, 0x1c,
                0x55, 0xd7, 0x38, 0xa3, 0x67, 0x48, 0x73, 0x08, 0xcd, 0x74,
                0x3c, 0x4b,
            }),
            new PrivateKey(new byte[]
            {
                0x02, 0x40, 0xa6, 0x72, 0xdd, 0xc0, 0x65, 0x04, 0x54, 0xfb,
                0x34, 0x29, 0x05, 0xaa, 0xa6, 0x1e, 0x94, 0x30, 0x89, 0x26,
                0xfd, 0x30, 0xd1, 0x61, 0x8c, 0x1b, 0x75, 0x79, 0x86, 0xf8,
                0x8a, 0x6a,
            }),
            new PrivateKey(new byte[]
            {
                0x74, 0x6d, 0x07, 0xb0, 0xb9, 0x7e, 0x0d, 0xb9, 0x1f, 0x96,
                0x59, 0xe1, 0x20, 0x8d, 0x31, 0xac, 0x94, 0xcd, 0xc8, 0xaa,
                0x0c, 0x0d, 0xeb, 0x35, 0xab, 0x93, 0x95, 0x65, 0xae, 0x5f,
                0xc1, 0x4b,
            }),
            new PrivateKey(new byte[]
            {
                0xc5, 0x1e, 0xc4, 0x6c, 0x81, 0x6a, 0x9d, 0x41, 0xc2, 0xae,
                0x61, 0x51, 0x0f, 0x97, 0xd0, 0x0e, 0x3a, 0x7b, 0x86, 0xd3,
                0xbd, 0xf1, 0x1e, 0xfe, 0x55, 0x67, 0x8f, 0x31, 0x92, 0xc1,
                0xdf, 0xe4,
            }),
            new PrivateKey(new byte[]
            {
                0x0a, 0x9e, 0x67, 0x59, 0x4b, 0xfc, 0xdd, 0x81, 0xcd, 0x86,
                0xa0, 0xf1, 0x79, 0x74, 0x56, 0x0f, 0x56, 0x85, 0xff, 0x3f,
                0x75, 0xd3, 0xbc, 0xaa, 0xf0, 0xa2, 0xec, 0xdb, 0x05, 0xa5,
                0x59, 0x79,
            }),
            new PrivateKey(new byte[]
            {
                0x3d, 0xae, 0x2d, 0x2f, 0x87, 0x1b, 0x11, 0xaa, 0x41, 0xbd,
                0xec, 0x81, 0x4c, 0x4d, 0x27, 0xf3, 0xba, 0xd9, 0x1f, 0x61,
                0xc3, 0x57, 0xab, 0x43, 0xa0, 0x0c, 0x63, 0x1b, 0x2b, 0x15,
                0x13, 0xf2,
            }),
        };

        private static readonly Random _random = new Random();

        public static void AssertBytesEqual(byte[] expected, byte[] actual)
        {
            if (expected is null)
            {
                Assert.Null(actual);
                return;
            }

            Assert.NotNull(actual);

            string msg;
            if (expected.LongLength < 1024 && actual.LongLength < 1024 &&
                expected.All(b => b < 0x80) && actual.All(b => b < 0x80))
            {
                // If both arrays can be ASCII encoding, print them directly.
                string expectedStr = Encoding.ASCII.GetString(expected);
                string actualStr = Encoding.ASCII.GetString(actual);
                msg = $@"Two byte arrays do not equal
Expected length: ({expected.LongLength}) {expectedStr}
Actual length:   ({actual.LongLength}) {actualStr}";
            }
            else
            {
                string expectedRepr = Repr(expected);
                string actualRepr = Repr(actual);
                msg = $@"Two byte arrays do not equal
Expected (C# array lit): new byte[{expected.LongLength}] {{ {expectedRepr} }}
Actual (C# array lit):   new byte[{actual.LongLength}] {{ {actualRepr} }}";
            }

            if (!expected.SequenceEqual(actual))
            {
                throw new AssertActualExpectedException(
                    ByteUtil.Hex(expected),
                    ByteUtil.Hex(actual),
                    msg,
                    "Expected (hex)",
                    "Actual (hex)"
                );
            }

            string Repr(byte[] bytes)
            {
                const int limit = 1024;
                if (bytes.LongLength > limit)
                {
                    bytes = bytes.Take(limit).ToArray();
                }

                string s = string.Join(
                    ", ",
                    bytes.Select(b => b < 0x10 ? $"0x0{b:x}" : $"0x{b:x}")
                );
                return bytes.LongLength > limit ? $"{s}, ..." : s;
            }
        }

        public static void AssertBytesEqual(
            string expectedHex,
            ImmutableArray<byte> actual
        ) =>
            AssertBytesEqual(ByteUtil.ParseHex(expectedHex), actual.ToArray());

        public static void AssertBytesEqual(
            ImmutableArray<byte> expected,
            ImmutableArray<byte> actual
        ) =>
            AssertBytesEqual(expected.ToArray(), actual.ToArray());

        public static void AssertBytesEqual(
            ImmutableArray<byte>? expected,
            ImmutableArray<byte>? actual
        ) =>
            AssertBytesEqual(expected?.ToArray(), actual?.ToArray());

        public static void AssertBytesEqual(string expectedHex, TxId actual) =>
            AssertBytesEqual(ByteUtil.ParseHex(expectedHex), actual.ToByteArray());

        public static void AssertBytesEqual(TxId expected, TxId actual) =>
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());

        public static void AssertBytesEqual(TxId? expected, TxId? actual) =>
            AssertBytesEqual(expected?.ToByteArray(), actual?.ToByteArray());

        public static void AssertBytesEqual(BlockHash expected, BlockHash actual) =>
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());

        public static void AssertBytesEqual(BlockHash? expected, BlockHash? actual) =>
            AssertBytesEqual(expected?.ToByteArray(), actual?.ToByteArray());

        public static void AssertBytesEqual<T>(
            HashDigest<T> expected,
            HashDigest<T> actual
        )
            where T : HashAlgorithm
        {
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());
        }

        public static void AssertBytesEqual<T>(
            HashDigest<T>? expected,
            HashDigest<T>? actual
        )
            where T : HashAlgorithm
        {
            AssertBytesEqual(expected?.ToByteArray(), actual?.ToByteArray());
        }

        public static void AssertBytesEqual(Nonce expected, Nonce actual) =>
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());

        public static void AssertBytesEqual(Nonce? expected, Nonce? actual) =>
            AssertBytesEqual(expected?.ToByteArray(), actual?.ToByteArray());

        public static void AssertBytesEqual(Address expected, Address actual) =>
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());

        public static void AssertBytesEqual(Address? expected, Address? actual) =>
            AssertBytesEqual(expected?.ToByteArray(), actual?.ToByteArray());

        public static void AssertBytesEqual(KeyBytes expected, KeyBytes actual) =>
            AssertBytesEqual(expected.ToByteArray(), actual.ToByteArray());

        public static void AssertBytesEqual(KeyBytes? expected, KeyBytes? actual) =>
            AssertBytesEqual(expected?.ToByteArray(), actual?.ToByteArray());

        public static void AssertBencodexEqual(IValue expected, IValue actual)
        {
            bool equal = (expected is null && actual is null) ||
                (expected is Null && actual is Null) ||
                (expected is Bencodex.Types.Boolean && actual is Bencodex.Types.Boolean &&
                    expected.Equals(actual)) ||
                (expected is Integer && actual is Integer && expected.Equals(actual)) ||
                (expected is Binary && actual is Binary && expected.Equals(actual)) ||
                (expected is Text && actual is Text && expected.Equals(actual)) ||
                (expected is List && actual is List && expected.Equals(actual)) ||
                (expected is Dictionary && actual is Dictionary && expected.Equals(actual));
            if (equal)
            {
                return;
            }

            string expectedInspection = expected?.ToString() ?? "(null)";
            string actualInspection = actual?.ToString() ?? "(null)";
            DiffPaneModel diffModel = InlineDiffBuilder.Diff(expectedInspection, actualInspection);
            var prefixes = new Dictionary<ChangeType, string>
            {
                [ChangeType.Deleted] = "-",
                [ChangeType.Inserted] = "+",
                [ChangeType.Unchanged] = " ",
            };

            string diff = string.Join(
                Environment.NewLine,
                diffModel.Lines.Select(line =>
                    (prefixes.TryGetValue(line.Type, out string prefix) ? prefix : " ") + line.Text
                )
            );
            throw new XunitException(
                "Two Bencodex values are not equal.\n--- Expected\n+++ Actual\n\n" + diff
            );
        }

        public static void AssertSorted<T>(IEnumerable<T> expected)
            where T : IComparable<T>
        {
            // Was implemented by `.Zip()`, but the method has different
            // overloads in .NET Framework, so cannot be used.
            T[] arr = expected.ToArray();
            foreach ((int i, (T first, T second)) in Enumerable
                         .Range(0, arr.Length - 1)
                         .Select(i => (i, (arr[i], arr[i + 1]))))
            {
                string errorMessage =
                    $"Given list is not sorted since item {first} at {i} " +
                    $"is greater than item {second} at {i + 1}";
                Assert.True(first.CompareTo(second) <= 0, errorMessage);
            }
        }

        public static void AssertBlockMetadataEqual(IBlockMetadata expected, IBlockMetadata actual)
        {
            Assert.NotNull(expected);
            Assert.NotNull(actual);
            Assert.Equal(expected.ProtocolVersion, actual.ProtocolVersion);
            Assert.Equal(expected.Index, actual.Index);
            Assert.Equal(expected.Timestamp, actual.Timestamp);
            AssertBytesEqual(expected.Miner, actual.Miner);
            AssertBytesEqual(expected.PreviousHash, actual.PreviousHash);
            AssertBytesEqual(expected.TxHash, actual.TxHash);
        }

        public static void AssertBlockContentsEqual(
            IBlockContent expected, IBlockContent actual)
        {
            AssertBlockMetadataEqual(expected, actual);
            Assert.Equal(expected.Transactions, actual.Transactions);
        }

        public static void AssertPreEvaluationBlockHeadersEqual(
            IPreEvaluationBlockHeader expected,
            IPreEvaluationBlockHeader actual
        )
        {
            AssertBlockMetadataEqual(expected, actual);
            AssertBytesEqual(expected.PreEvaluationHash, actual.PreEvaluationHash);
        }

        public static void AssertPreEvaluationBlocksEqual(
            IPreEvaluationBlock expected,
            IPreEvaluationBlock actual)
        {
            AssertPreEvaluationBlockHeadersEqual(expected, actual);
            AssertBlockContentsEqual(expected, actual);
        }

        public static byte[] GetRandomBytes(int size)
        {
            var bytes = new byte[size];
            _random.NextBytes(bytes);

            return bytes;
        }

        public static T ToAction<T>(IValue plainValue)
            where T : IAction, new()
        {
            var action = new T();
            action.LoadPlainValue(plainValue);
            return action;
        }

        public static BlockCommit CreateBlockCommit(
            Block block,
            bool deterministicTimestamp = false) =>
                block.Index > 0 &&
                block.ProtocolVersion > BlockMetadata.PoWProtocolVersion
                    ? CreateBlockCommit(block.Hash, block.Index, 0, deterministicTimestamp)
                    : null;

        public static BlockCommit CreateBlockCommit(
            BlockHash blockHash,
            long height,
            int round,
            bool deterministicTimestamp = false)
        {
            // Index #1 block cannot have lastCommit: There was no consensus of genesis block.
            if (height == 0)
            {
                return null;
            }

            // Using the unix epoch time as the timestamp of the vote if deterministicTimestamp is
            // flagged for getting a deterministic random value from PreEvaluationHash.
            var votes = ValidatorPrivateKeys.Select(key => new VoteMetadata(
                height,
                round,
                blockHash,
                deterministicTimestamp ? DateTimeOffset.UnixEpoch : DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();

            return new BlockCommit(
                height, round, blockHash, votes);
        }

        public static PreEvaluationBlock ProposeGenesis(
            PublicKey proposer = null,
            IReadOnlyList<Transaction> transactions = null,
            ValidatorSet validatorSet = null,
            DateTimeOffset? timestamp = null,
            int protocolVersion = Block.CurrentProtocolVersion
        )
        {
            var txs = transactions?.ToList() ?? new List<Transaction>();
            long nonce = 0;
            validatorSet = validatorSet ?? ValidatorSet;
            txs.AddRange(
                validatorSet.Validators.Select(
                    validator => Transaction.Create(
                        nonce++,
                        GenesisProposer,
                        null,
                        actions: new IAction[]
                            {
                                new Initialize(
                                    validatorSet: validatorSet,
                                    states: ImmutableDictionary.Create<Address, IValue>()),
                            }.Select(x => x.PlainValue),
                        timestamp: DateTimeOffset.MinValue)));
            txs = txs.OrderBy(tx => tx.Id).ToList();

            var content = new BlockContent(
                new BlockMetadata(
                    protocolVersion: protocolVersion,
                    index: 0,
                    timestamp: timestamp ??
                        new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero),
                    miner: (proposer ?? GenesisProposer.PublicKey).Address,
                    publicKey: protocolVersion >= 2 ? proposer ?? GenesisProposer.PublicKey : null,
                    previousHash: null,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null),
                transactions: txs);
            return content.Propose();
        }

        public static Block ProposeGenesisBlock(
            PrivateKey miner,
            IReadOnlyList<Transaction> transactions = null,
            DateTimeOffset? timestamp = null,
            int protocolVersion = Block.CurrentProtocolVersion,
            HashDigest<SHA256> stateRootHash = default
        )
        {
            PreEvaluationBlock preEval = ProposeGenesis(
                miner?.PublicKey,
                transactions,
                null,
                timestamp,
                protocolVersion
            );
            return preEval.Sign(miner, stateRootHash);
        }

        public static Block ProposeGenesisBlock(
            IActionEvaluator actionEvaluator,
            PreEvaluationBlock preEval,
            PrivateKey privateKey)
        {
            return preEval.Sign(
                privateKey,
                BlockChain.DetermineGenesisStateRootHash(
                    actionEvaluator, preEval, out _));
        }

        public static PreEvaluationBlock ProposeNext(
            Block previousBlock,
            IReadOnlyList<Transaction> transactions = null,
            PublicKey miner = null,
            TimeSpan? blockInterval = null,
            int protocolVersion = Block.CurrentProtocolVersion,
            BlockCommit lastCommit = null)
        {
            var txs = transactions is null
                ? new List<Transaction>()
                : transactions.OrderBy(tx => tx.Id).ToList();

            var content = new BlockContent(
                new BlockMetadata(
                    protocolVersion: protocolVersion,
                    index: previousBlock.Index + 1,
                    timestamp: previousBlock.Timestamp.Add(
                        blockInterval ?? TimeSpan.FromSeconds(15)),
                    miner: miner?.Address ?? previousBlock.Miner,
                    publicKey: protocolVersion >= 2 ? miner ?? previousBlock.PublicKey : null,
                    previousHash: previousBlock.Hash,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: lastCommit),
                transactions: txs);
            var preEval = content.Propose();
            preEval.ValidateTimestamp();
            return preEval;
        }

        public static Block ProposeNextBlock(
            Block previousBlock,
            PrivateKey miner,
            IReadOnlyList<Transaction> txs = null,
            TimeSpan? blockInterval = null,
            int protocolVersion = Block.CurrentProtocolVersion,
            HashDigest<SHA256> stateRootHash = default,
            BlockCommit lastCommit = null)
        {
            Skip.IfNot(
                Environment.GetEnvironmentVariable("XUNIT_UNITY_RUNNER") is null,
                "Flaky test : Libplanet.Blocks.InvalidBlockSignatureException"
            );

            PreEvaluationBlock preEval = ProposeNext(
                previousBlock,
                txs,
                miner?.PublicKey,
                blockInterval,
                protocolVersion,
                lastCommit);
            return preEval.Sign(miner, stateRootHash);
        }

        /// <summary>
        /// Creates a <see cref="BlockChain"/> instance.
        /// </summary>
        /// <param name="policy">A <see cref="BlockPolicy"/> of the chain.</param>
        /// <param name="store">An <see cref="IStore"/> instance to store blocks and txs.</param>
        /// <param name="stateStore">An <see cref="IStateStore"/> instance to store states.</param>
        /// <param name="actions"><see cref="Action{T}"/>s to be included in genesis block.
        /// Works only if <paramref name="genesisBlock"/> is null.</param>
        /// <param name="validatorSet"><see cref="ValidatorSet"/> to be included in genesis block.
        /// Works only if <paramref name="genesisBlock"/> is null.</param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> to sign genesis actions.
        /// Works only if <paramref name="genesisBlock"/> is null.</param>
        /// <param name="timestamp"><see cref="DateTimeOffset"/> of the genesis block.
        /// Works only if <paramref name="genesisBlock"/> is null.</param>
        /// <param name="renderers">
        /// An <see cref="IEnumerable{T}"/> of <see cref="IRenderer"/>s.</param>
        /// <param name="genesisBlock">Genesis <see cref="Block"/> of the chain.
        /// If null is given, a genesis will be generated.</param>
        /// <param name="protocolVersion">Block protocol version of genesis block.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type.</typeparam>
        /// <returns>A <see cref="BlockChain"/> instance.</returns>
        public static BlockChain MakeBlockChain<T>(
            IBlockPolicy policy,
            IStore store,
            IStateStore stateStore,
            IEnumerable<IAction> actions = null,
            ValidatorSet validatorSet = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null,
            IEnumerable<IRenderer> renderers = null,
            Block genesisBlock = null,
            int protocolVersion = Block.CurrentProtocolVersion
        )
            where T : IAction, new()
        {
            return MakeBlockChainAndActionEvaluator<T>(
                policy,
                store,
                stateStore,
                actions,
                validatorSet,
                privateKey,
                timestamp,
                renderers,
                genesisBlock,
                protocolVersion
            ).BlockChain;
        }

        public static (BlockChain BlockChain, ActionEvaluator ActionEvaluator)
            MakeBlockChainAndActionEvaluator<T>(
            IBlockPolicy policy,
            IStore store,
            IStateStore stateStore,
            IEnumerable<IAction> actions = null,
            ValidatorSet validatorSet = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null,
            IEnumerable<IRenderer> renderers = null,
            Block genesisBlock = null,
            int protocolVersion = Block.CurrentProtocolVersion
        )
            where T : IAction, new()
        {
            actions = actions ?? ImmutableArray<IAction>.Empty;
            privateKey = privateKey ?? ChainPrivateKey;

            var txs = new[]
            {
                Transaction.Create(
                    0,
                    privateKey,
                    null,
                    actions.Select(x => x.PlainValue),
                    timestamp: timestamp ?? DateTimeOffset.MinValue),
            };

            var blockChainStates = new BlockChainStates(store, stateStore);
            var actionEvaluator = new ActionEvaluator(
                    _ => policy.BlockAction,
                    stateStore: stateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(T)));

            if (genesisBlock is null)
            {
                var preEval = ProposeGenesis(
                    GenesisProposer.PublicKey,
                    txs,
                    validatorSet,
                    timestamp,
                    protocolVersion);
                var stateRootHash = BlockChain.DetermineGenesisStateRootHash(
                    actionEvaluator,
                    preEval,
                    out _);
                genesisBlock = protocolVersion < 2
                    ? new Block(
                        preEval,
                        (
                            stateRootHash,
                            null,
                            preEval.Header.DeriveBlockHash(stateRootHash, null)
                        ))
                    : preEval.Sign(GenesisProposer, stateRootHash);
            }

            ValidatingActionRenderer validator = null;
#pragma warning disable S1121
            var chain = BlockChain.Create(
                policy,
                new VolatileStagePolicy(),
                store,
                stateStore,
                genesisBlock,
                renderers: renderers ?? new[] { validator = new ValidatingActionRenderer() },
                blockChainStates: blockChainStates,
                actionEvaluator: actionEvaluator
            );
#pragma warning restore S1121

            return (chain, actionEvaluator);
        }

        public static async Task AssertThatEventually(
            Expression<Func<bool>> condition,
            TimeSpan timeout,
            TimeSpan delay,
            ITestOutputHelper output = null,
            string conditionLabel = null
        )
        {
            Func<bool> conditionFunc = condition.Compile();
            DateTimeOffset started = DateTimeOffset.UtcNow;
            DateTimeOffset until = started + timeout;
            while (!conditionFunc() && DateTimeOffset.UtcNow <= until)
            {
                output?.WriteLine(
                    "[{0}/{1}] Waiting for {2}...",
                    DateTimeOffset.UtcNow - started,
                    timeout,
                    conditionLabel is string c1
                        ? c1
                        : $"satisfying the condition ({condition.Body})"
                );
                await Task.Delay(delay);
            }

            Assert.True(
                conditionFunc(),
                $"Waited {timeout} but the condition (" +
                    (conditionLabel is string l ? l : condition.Body.ToString()) +
                    ") has never been satisfied."
            );

            output?.WriteLine(
                "[{0}/{1}] Done {2}...",
                DateTimeOffset.UtcNow - started,
                timeout,
                conditionLabel is string c2 ? c2 : $"satisfying the condition ({condition.Body})"
            );
        }

        public static Task AssertThatEventually(
            Expression<Func<bool>> condition,
            int timeoutMilliseconds,
            int delayMilliseconds = 100,
            ITestOutputHelper output = null,
            string conditionLabel = null
        ) =>
            AssertThatEventually(
                condition,
                TimeSpan.FromMilliseconds(timeoutMilliseconds),
                TimeSpan.FromMilliseconds(delayMilliseconds),
                output,
                conditionLabel
            );

        public static T BinarySerializeDeserialize<T>(T obj)
            where T : ISerializable
        {
            var formatter = new BinaryFormatter();
            using (var memoryStream = new MemoryStream())
            {
                formatter.Serialize(memoryStream, obj);
                memoryStream.Seek(0, SeekOrigin.Begin);
                return (T)formatter.Deserialize(memoryStream);
            }
        }

        public static void AssertJsonSerializable<T>(
            T obj,
            string expectedJson,
            bool testDeserializable = true)
            where T : IEquatable<T>
        {
            Skip.IfNot(
                Environment.GetEnvironmentVariable("XUNIT_UNITY_RUNNER") is null,
                "System.Text.Json 6.0.0+ does not work well with Unity/Mono."
            );

            var buffer = new MemoryStream();
            JsonSerializer.Serialize(buffer, obj);
            buffer.Seek(0L, SeekOrigin.Begin);
            var options = new JsonSerializerOptions
            {
                AllowTrailingCommas = true,
                ReadCommentHandling = JsonCommentHandling.Skip,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };
            JsonNode actual = JsonSerializer.SerializeToNode(obj, options);
            JsonNode expected = JsonNode.Parse(expectedJson, null, new JsonDocumentOptions
            {
                AllowTrailingCommas = true,
                CommentHandling = JsonCommentHandling.Skip,
            });
            JsonAssert.Equal(expected, actual, true);
            if (testDeserializable)
            {
                var deserialized = JsonSerializer.Deserialize<T>(expectedJson, options);
                Assert.Equal(obj, deserialized);
            }
        }

        public static bool IsDumbAction(IValue action)
        {
            return action is Dictionary dictionary &&
                dictionary.Keys.ToHashSet().IsSubsetOf(new IKey[]
                {
                    (Text)"item",
                    (Text)"target_address",
                    (Text)"record_random",
                    (Text)"idempotent",
                    (Text)"transfer_from",
                    (Text)"transfer_to",
                    (Text)"transfer_amount",
                    (Text)"validators",
                }.ToHashSet());
        }

        public static bool IsMinerReward(IValue action)
        {
            return action is Dictionary dictionary &&
                   dictionary.TryGetValue((Text)"reward", out IValue rewards) &&
                   rewards is Integer;
        }

        public static DumbAction ToDumbAction(IValue plainValue)
        {
            var action = new DumbAction();
            action.LoadPlainValue(plainValue);
            return action;
        }
    }
}
