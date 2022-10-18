using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blocks
{
    public class BlockCommitTest
    {
        private readonly ITestOutputHelper _output;

        public BlockCommitTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Marshalling()
        {
            var fx = new MemoryStoreFixture();
            var votes = Enumerable.Range(0, 4)
                .Select(x => new VoteMetadata(
                    1,
                    0,
                    fx.Hash1,
                    DateTimeOffset.Now,
                    new PrivateKey().PublicKey,
                    VoteFlag.Null).Sign(null))
                .ToImmutableArray();
            var blockCommit = new BlockCommit(1, 0, fx.Hash1, votes);

            byte[] marshaled = blockCommit.ByteArray;
            var unMarshaled = new BlockCommit(marshaled);

            Assert.Equal(blockCommit, unMarshaled);
        }

        [Fact]
        public void ConstructorInvalidValues()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            var privateKey = new PrivateKey();
            var votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    0,
                    0,
                    hash,
                    DateTimeOffset.UtcNow,
                    privateKey.PublicKey,
                    VoteFlag.Null).Sign(privateKey));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(1, 1, hash, ImmutableArray<Vote>.Empty));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockCommit(-1, 0, hash, votes));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockCommit(1, -1, hash, votes));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockCommit(1, -1, default, votes));
         }

        [Fact]
        public void EveryVoteMustHaveValidHeightAndRound()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(
                    2,
                    0,
                    hash,
                    new[]
                    {
                        new VoteMetadata(
                            2,
                            0,
                            hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.ConsensusPeer0PrivateKey.PublicKey,
                            VoteFlag.Commit).Sign(TestUtils.ConsensusPeer0PrivateKey),
                        new VoteMetadata(
                            1,
                            0,
                            hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.ConsensusPeer1PrivateKey.PublicKey,
                            VoteFlag.Commit).Sign(TestUtils.ConsensusPeer1PrivateKey),
                    }.ToImmutableArray()));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(
                    2,
                    0,
                    hash,
                    new[]
                    {
                        new VoteMetadata(
                            2,
                            0,
                            hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.ConsensusPeer0PrivateKey.PublicKey,
                            VoteFlag.Commit).Sign(TestUtils.ConsensusPeer0PrivateKey),
                        new VoteMetadata(
                            2,
                            1,
                            hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.ConsensusPeer1PrivateKey.PublicKey,
                            VoteFlag.Commit).Sign(TestUtils.ConsensusPeer1PrivateKey),
                    }.ToImmutableArray()));
         }

        [Fact]
        public void AllVotesShouldHaveMatchingHash()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            var badHash = new BlockHash(TestUtils.GetRandomBytes(32));

            var votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    2,
                    0,
                    hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.ConsensusPeer0PrivateKey.PublicKey,
                    VoteFlag.Commit).Sign(TestUtils.ConsensusPeer0PrivateKey))
                .Add(new VoteMetadata(
                    2,
                    0,
                    badHash,
                    DateTimeOffset.UtcNow,
                    TestUtils.ConsensusPeer1PrivateKey.PublicKey,
                    VoteFlag.Commit).Sign(TestUtils.ConsensusPeer1PrivateKey));

            Assert.Throws<ArgumentException>(() => new BlockCommit(2, 0, hash, votes));
        }

        [Fact]
        public void DecodeFailsNegativeHeight()
        {
            var fx = new MemoryStoreFixture();
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(BlockCommit.HeightKey, -1)
                .Add(BlockCommit.RoundKey, 0)
                .Add(BlockCommit.BlockHashKey, fx.Hash1.ByteArray);

            Assert.Throws<ArgumentOutOfRangeException>(() => new BlockCommit(dict));
        }

        [Fact]
        public void DecodeFailsNegativeRound()
        {
            var fx = new MemoryStoreFixture();
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(BlockCommit.HeightKey, 1)
                .Add(BlockCommit.RoundKey, -1)
                .Add(BlockCommit.BlockHashKey, fx.Hash1.ByteArray);

            Assert.Throws<ArgumentOutOfRangeException>(() => new BlockCommit(dict));
        }

        [Fact]
        public void DecodeFailsNullHash()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(BlockCommit.HeightKey, 1)
                .Add(BlockCommit.RoundKey, 0)
                .Add(BlockCommit.BlockHashKey, default(BlockHash).ByteArray);

            Assert.Throws<ArgumentException>(() => new BlockCommit(dict));
        }
    }
}
