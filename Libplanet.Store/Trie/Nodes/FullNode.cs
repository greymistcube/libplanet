using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public sealed class FullNode : INode, IEquatable<FullNode>
    {
        // Children 0x10
        public const byte ChildrenCount = 0x10;

        public static readonly FullNode Empty =
            new FullNode(new INode?[ChildrenCount].ToImmutableArray(), null);

        public FullNode(ImmutableArray<INode?> children, INode? value)
        {
            if (children.Length != ChildrenCount)
            {
                throw new InvalidTrieNodeException(
                    $"The number of {nameof(FullNode)}'s children should be {ChildrenCount}.");
            }

            Children = children;
            Value = value;
        }

        public ImmutableArray<INode?> Children { get; }

        /// <summary>
        /// Represents an <see cref="INode"/> at the base of a <see cref="FullNode"/>.
        /// This can be <see langword="null"/>, a <see cref="ValueNode"/>,
        /// or a <see cref="HashNode"/> of a <see cref="ValueNode"/>.
        /// </summary>
        public INode? Value { get; }

        public FullNode SetChild(int index, INode childNode) =>
            new FullNode(Children.SetItem(index, childNode), Value);

        public FullNode SetValue(INode valueNode) =>
            new FullNode(Children, valueNode);

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(FullNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node &&
                Children
                    .Select((n, i) => (n, i))
                    .Where(pair => pair.n is { })
                    .SequenceEqual(
                        node.Children.Select((n, i) => (n, i)).Where(pair => pair.n is { })) &&
                (Value is { } value
                    ? value.Equals(node.Value)
                    : node.Value is null);
        }

        public override bool Equals(object? obj) =>
            obj is FullNode other && Equals(other);

        public override int GetHashCode() => Children.GetHashCode();

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public IValue ToBencodex() =>
            new List(Children.Select(child => child?.ToBencodex() ?? Null.Value))
                .Add(Value?.ToBencodex() ?? Null.Value);
    }
}
