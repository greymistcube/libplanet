using System;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A options class to configure <see cref="Context"/> timeout
    /// for each <see cref="ConsensusStep"/>.
    /// </summary>
    public class ContextTimeoutOption
    {
        public ContextTimeoutOption(
            int proposeSecondBase = 8,
            int preVoteSecondBase = 8,
            int preCommitSecondBase = 8,
            int proposeMultiplier = 8,
            int preVoteMultiplier = 8,
            int preCommitMultiplier = 8)
        {
            if (proposeSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(proposeSecondBase),
                    "ProposeSecondBase must be greater than 0.");
            }

            ProposeSecondBase = proposeSecondBase;

            if (preVoteSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preVoteSecondBase),
                    "PreVoteSecondBase must be greater than 0.");
            }

            PreVoteSecondBase = preVoteSecondBase;

            if (preCommitSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preCommitSecondBase),
                    "PreCommitSecondBase must be greater than 0.");
            }

            PreCommitSecondBase = preCommitSecondBase;

            if (proposeMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(proposeMultiplier),
                    "ProposeMultiplier must be greater than 0.");
            }

            ProposeMultiplier = proposeMultiplier;

            if (preVoteMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preVoteMultiplier),
                    "PreVoteMultiplier must be greater than 0.");
            }

            PreVoteMultiplier = preVoteMultiplier;

            if (preCommitMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preCommitMultiplier),
                    "PreCommitMultiplier must be greater than 0.");
            }

            PreCommitMultiplier = preCommitMultiplier;
        }

        public int ProposeSecondBase { get; }

        public int PreVoteSecondBase { get; }

        public int PreCommitSecondBase { get; }

        public int ProposeMultiplier { get; }

        public int PreVoteMultiplier { get; }

        public int PreCommitMultiplier { get; }
    }
}
