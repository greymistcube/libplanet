using System;
using System.Linq;
using System.Threading;
using Libplanet.Blockchain.Policies;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class VolatileStagePolicyTest : StagePolicyTest
    {
        private readonly VolatileStagePolicy<DumbAction> _stagePolicy =
            new VolatileStagePolicy<DumbAction>();

        protected override IStagePolicy<DumbAction> StagePolicy =>
            _stagePolicy;

        [Fact]
        public void Lifetime()
        {
            TimeSpan timeBuffer = TimeSpan.FromSeconds(2.5);

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>(),
                timestamp: (DateTimeOffset.UtcNow - _stagePolicy.Lifetime) + timeBuffer
            );
            _stagePolicy.Stage(_chain, tx);
            Assert.Equal(tx, _stagePolicy.Get(_chain, tx.Id));
            Assert.Contains(tx, _stagePolicy.Iterate(_chain));

            // On some targets TimeSpan * int does not exist.
            Thread.Sleep(timeBuffer);
            Thread.Sleep(timeBuffer);
            Assert.Null(_stagePolicy.Get(_chain, tx.Id));
            Assert.DoesNotContain(tx, _stagePolicy.Iterate(_chain));
        }
    }
}
