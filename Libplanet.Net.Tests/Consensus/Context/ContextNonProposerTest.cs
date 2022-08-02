using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextNonProposerTest : ContextTestBase
    {
        private const int NodeId = 0;

        public ContextNonProposerTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 0, Step.Default)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlockOneThird()
        {
            var block = await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            var stateChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1 && state.Step == Step.PreVote)
                {
                    stateChangedToRoundOnePreVote.Set();
                }
            };
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[2], round: 1));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            // Wait for round 1 prevote step.
            await stateChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlockTwoThird()
        {
            var block = await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            var blockHash = block.Hash;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusCommit commit)
                {
                    Assert.Equal(commit.BlockHash, blockHash);
                    commitSent.Set();
                }
            };
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);

            var json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                Context.ToString());

            Assert.Equal(0, json["locked_round"].GetInt64());
            Assert.Equal(0, json["valid_round"].GetInt64());
            Assert.Equal(block.Hash.ToString(), json["locked_value"].GetString());
            Assert.Equal(block.Hash.ToString(), json["valid_value"].GetString());
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNilTwoThird()
        {
            var block = GetInvalidBlock();
            var blockHash = block.Hash;
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusCommit commit)
                {
                    Assert.Null(commit.BlockHash);
                    commitSent.Set();
                }
            };
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNilOneThird()
        {
            var block = await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            var stepChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, stage) =>
            {
                if (stage.Round == 1 && stage.Step == Step.PreVote)
                {
                    stepChangedToRoundOnePreVote.Set();
                }
            };
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[2], round: 1));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            await stepChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPropose()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var voteSent = new AsyncAutoResetEvent();
            Context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusVote)
                {
                    voteSent.Set();
                }
            };
            Context.StartAsync();

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreVote()
        {
            var block = await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            var timeoutProcessed = new AsyncAutoResetEvent();
            Context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(0, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreCommit()
        {
            var block = await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            var timeoutProcessed = new AsyncAutoResetEvent();
            Context.TimeoutProcessed += (sender, message) => timeoutProcessed.Set();
            Context.StartAsync();

            Context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.PrivateKeys[1], round: 0));

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[1], 1, 0, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[1]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.ProduceMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.Propose, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(1, Context.Round);
        }
    }
}
