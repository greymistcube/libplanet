using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.State;
using Libplanet.Store;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A minimal interface to get states from a <see cref="BlockChain"/>.
    /// <para>Note that <see cref="BlockChain"/> implements this interface.</para>
    /// </summary>
    public interface IBlockChainStates
    {
        /// <summary>
        /// Gets multiple states associated to specified <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es of the states to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The states associated to specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="offset"/> is not
        /// <see langword="null"/> and one of the following is true.
        /// <list type="bullet">
        ///     <item><description>
        ///         Corresponding <see cref="Block"/> is not found in the <see cref="IStore"/>.
        ///     </description></item>
        ///     <item><description>
        ///         Corresponding <see cref="Block"/> is found but its state root is not found
        ///         in the <see cref="IStateStore"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash? offset);

        /// <summary>
        /// Gets <paramref name="address"/>'s balance for given <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The <paramref name="address"/>'s balance for <paramref name="currency"/>
        /// at <paramref name="offset"/>.  If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IBlockStates"/> at
        /// <paramref name="offset"/> cannot be created.</exception>
        FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash? offset);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>, and if not found, returns 0.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> in <see cref="FungibleAssetValue"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IBlockStates"/> at
        /// <paramref name="offset"/> cannot be created.</exception>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when
        /// given <paramref name="currency"/>'s <see cref="Currency.TotalSupplyTrackable"/>
        /// is <see langword="false"/>.</exception>
        /// <seealso cref="GetBlockStates"/>
        FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash? offset);

        /// <summary>
        /// Returns the validator set in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <paramref name="offset"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IBlockStates"/> at
        /// <paramref name="offset"/> cannot be created.</exception>
        /// <seealso cref="GetBlockStates"/>
        ValidatorSet GetValidatorSet(BlockHash? offset);

        /// <summary>
        /// Returns the <see cref="IBlockStates"/> in the <see cref="BlockChain"/>
        /// at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to create
        /// for which to create an <see cref="IBlockStates"/>.</param>
        /// <returns>
        /// The <see cref="IBlockStates"/> at <paramref name="offset"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="offset"/> is not
        /// <see langword="null"/> and one of the following is true.
        /// <list type="bullet">
        ///     <item><description>
        ///         Corresponding <see cref="Block"/> is not found in the <see cref="IStore"/>.
        ///     </description></item>
        ///     <item><description>
        ///         Corresponding <see cref="Block"/> is found but its state root is not found
        ///         in the <see cref="IStateStore"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        /// <seealso cref="IBlockStates"/>
        IBlockStates GetBlockStates(BlockHash? offset);
    }
}
