using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal static class WorldExtensions
    {
        internal static IAccount GetFungibleAssetsAccount(this IWorldState world) =>
            world.GetAccount(ReservedAddresses.DefaultAccount);

        internal static IAccount GetValidatorSetAccount(this IWorldState world) =>
            world.GetAccount(ReservedAddresses.DefaultAccount);

        internal static IWorld SetFungibleAssetsAccount(
            this IWorld world,
            IAccount account) =>
            world.SetAccount(ReservedAddresses.DefaultAccount, account);
    }
}
