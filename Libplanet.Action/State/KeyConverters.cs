using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;

namespace Libplanet.Action.State
{
    internal static class KeyConverters
    {
        // "___"
        internal static readonly KeyBytes ValidatorSetKey =
            new KeyBytes(new byte[] { _underScore, _underScore, _underScore });

        private const byte _underScore = 95;  // '_'

        // $"{ByteUtil.Hex(address.ByteArray)}"
        internal static KeyBytes ToStateKey(Address address)
        {
            return new KeyBytes(address.ByteArray);
        }

        // $"_{ByteUtil.Hex(address.ByteArray)}_{ByteUtil.Hex(currency.Hash.ByteArray)}"
        internal static KeyBytes ToFungibleAssetKey(Address address, Currency currency)
        {
            var addressBytes = address.ByteArray;
            var currencyBytes = currency.Hash.ByteArray;
            byte[] buffer = new byte[addressBytes.Length + currencyBytes.Length + 2];

            buffer[0] = _underScore;
            for (int i = 0; i < addressBytes.Length; i++)
            {
                buffer[1 + i] = addressBytes[i];
            }

            var offset = addressBytes.Length;
            buffer[offset + 1] = _underScore;
            for (int i = 0; i < currencyBytes.Length; i++)
            {
                buffer[offset + 2 + i] = currencyBytes[i];
            }

            return new KeyBytes(buffer);
        }

        internal static KeyBytes ToFungibleAssetKey(
            (Address Address, Currency Currency) pair) =>
            ToFungibleAssetKey(pair.Address, pair.Currency);

        // $"__{ByteUtil.Hex(currency.Hash.ByteArray)}"
        internal static KeyBytes ToTotalSupplyKey(Currency currency)
        {
            var currencyBytes = currency.Hash.ByteArray;
            byte[] buffer = new byte[currencyBytes.Length + 2];

            buffer[0] = _underScore;
            buffer[1] = _underScore;

            for (int i = 0; i < currencyBytes.Length; i++)
            {
                buffer[2 + i] = currencyBytes[i];
            }

            return new KeyBytes(buffer);
        }
    }
}
