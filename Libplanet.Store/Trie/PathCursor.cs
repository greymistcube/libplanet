using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Store.Trie
{
    public readonly struct PathCursor
    {
        public readonly Nibbles Nibbles;
        public readonly int NibbleLength;
        public readonly int NibbleOffset;

        public PathCursor(in KeyBytes keyBytes, bool secure)
            : this(
                Nibbles.FromBytes(
                    secure
                        ? HashDigest<SHA256>.DeriveFrom(keyBytes.ByteArray).ByteArray
                        : keyBytes.ByteArray),
                0)
        {
        }

        /// <summary>
        /// Creates a <see cref="PathCursor"/> from <paramref name="nibbles"/>.
        /// </summary>
        /// <param name="nibbles">The <see cref="Nibbles"/> from which to derive
        /// a <see cref="PathCursor"/>.</param>
        public PathCursor(in Nibbles nibbles)
            : this(nibbles, 0)
        {
        }

        private PathCursor(in Nibbles nibbles, int nibbleOffset)
        {
            if (nibbleOffset < 0 || nibbleOffset > nibbles.Length)
            {
                throw new ArgumentOutOfRangeException(nameof(nibbleOffset));
            }

            Nibbles = nibbles;
            NibbleOffset = nibbleOffset;
            NibbleLength = nibbles.Length;
        }

        [Pure]
        public int RemainingNibbleLength => NibbleLength - NibbleOffset;

        [Pure]
        public bool RemainingAnyNibbles => NibbleLength > NibbleOffset;

        [Pure]
        public byte NextNibble => Nibbles[NibbleOffset];

        [Pure]
        public Nibbles GetRemainingNibbles() =>
            new Nibbles(Nibbles.ByteArray.Skip(NibbleOffset).ToImmutableArray());

        [Pure]
        public PathCursor Next(int nibbleOffset) => nibbleOffset < 0
            ? throw new ArgumentOutOfRangeException(nameof(nibbleOffset))
            : new PathCursor(Nibbles, NibbleOffset + nibbleOffset);

        [Pure]
        public bool RemainingNibblesStartWith(in Nibbles nibbles)
        {
            if (NibbleLength < nibbles.Length)
            {
                return false;
            }

            return CountCommonStartingNibbles(nibbles) >= nibbles.Length;
        }

        /// <summary>
        /// Counts the number of common starting nibbles.
        /// </summary>
        /// <param name="nibbles">The set of nibbles to compare.</param>
        /// <returns>The number of common starting nibbles from
        /// current <see cref="NibbleOffset"/>.</returns>
        [Pure]
        public int CountCommonStartingNibbles(in Nibbles nibbles)
        {
            int i = 0;
            for (; i < Math.Min(RemainingNibbleLength, nibbles.Length); i++)
            {
                int offset = NibbleOffset + i;
                if (Nibbles[offset] != nibbles[i])
                {
                    return i;
                }
            }

            return i;
        }
    }
}
