using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class that contains <see cref="BlockHash"/>es for a series of blocks.
    /// </summary>
    public class BlockLocator : IEnumerable<BlockHash>
    {
        private readonly List<BlockHash> _impl;

        /// <summary>
        /// Initializes a new instance of <see cref="BlockLocator"/> from <paramref name="hashes"/>.
        /// </summary>
        /// <param name="hashes">Enumerable of <see cref="BlockHash"/>es to convert from.</param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="hashes"/> is empty.
        /// </exception>
        public BlockLocator(IEnumerable<BlockHash> hashes)
        {
            _impl = hashes.Any()
                ? hashes.ToList()
                : throw new ArgumentException(
                    $"Given {nameof(hashes)} cannot be empty.", nameof(hashes));
        }

        public static BlockLocator Create(
            long startIndex,
            Func<long, BlockHash?> indexToBlockHash,
            long sampleAfter = 10)
        {
            if (startIndex < 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"Given {nameof(startIndex)} cannot be negative: {startIndex}",
                    nameof(startIndex));
            }

            BlockHash genesisHash = indexToBlockHash(0) ??
                throw new ArgumentException(
                    $"Given {nameof(indexToBlockHash)} should not be null at zero index.",
                    nameof(indexToBlockHash));
            var hashes = new List<BlockHash>();

            foreach (long index in GetEnumeratedIndices(startIndex, sampleAfter))
            {
                if (indexToBlockHash(index) is { } hash)
                {
                    hashes.Add(hash);
                }
                else
                {
                    hashes.Add(genesisHash);
                    break;
                }
            }

            return new BlockLocator(hashes);
        }

        /// <summary>
        /// Gets the enumerator.
        /// </summary>
        /// <returns>The enumerator.</returns>
        public IEnumerator<BlockHash> GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        private static IEnumerable<long> GetEnumeratedIndices(long startIndex, long sampleAfter)
        {
            long currentIndex = startIndex;
            long step = 1;
            while (currentIndex > 0)
            {
                yield return currentIndex;
                currentIndex = Math.Max(currentIndex - step, 0);
                step = startIndex - currentIndex <= sampleAfter - 1 ? step : step * 2;
            }

            yield return currentIndex;
        }
    }
}
