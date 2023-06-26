window.BENCHMARK_DATA = {
  "lastUpdate": 1687783193021,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-26T21:18:27+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39"
        },
        "date": 1687783168604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9108189.476190476,
            "unit": "ns",
            "range": "± 453397.7361465523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24055715.985714287,
            "unit": "ns",
            "range": "± 782999.9994825472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58786419.94444445,
            "unit": "ns",
            "range": "± 1224338.1018728865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122289981.375,
            "unit": "ns",
            "range": "± 2328557.1669849944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230190850.74358973,
            "unit": "ns",
            "range": "± 7893637.741052169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71853.44565217392,
            "unit": "ns",
            "range": "± 8816.560186630973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369185.33928571426,
            "unit": "ns",
            "range": "± 15627.837941869557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356736.44615384616,
            "unit": "ns",
            "range": "± 16508.778518971703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337257.4166666667,
            "unit": "ns",
            "range": "± 14893.489160227675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4795579.52,
            "unit": "ns",
            "range": "± 122996.67751885281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4341756.944444444,
            "unit": "ns",
            "range": "± 92806.73324423892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19965.697916666668,
            "unit": "ns",
            "range": "± 2409.9573139691724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100406.92857142857,
            "unit": "ns",
            "range": "± 7570.8586981818025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100772.69696969698,
            "unit": "ns",
            "range": "± 15712.82896264312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112609.61458333333,
            "unit": "ns",
            "range": "± 13102.886402677435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5621.663157894737,
            "unit": "ns",
            "range": "± 970.2247667918526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19357.870967741936,
            "unit": "ns",
            "range": "± 1886.462880780062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797684.1666666667,
            "unit": "ns",
            "range": "± 154864.23683354104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3525666.814285714,
            "unit": "ns",
            "range": "± 165023.79304407415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2942084.9896907215,
            "unit": "ns",
            "range": "± 210763.03263328972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7440935.2549019605,
            "unit": "ns",
            "range": "± 303982.95265970705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3835752.659090909,
            "unit": "ns",
            "range": "± 204310.57249917326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3917250.753164557,
            "unit": "ns",
            "range": "± 195420.6447079307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5201509.391304348,
            "unit": "ns",
            "range": "± 83594.56518640167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4928350.803030303,
            "unit": "ns",
            "range": "± 228956.73385107704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10080490.908045977,
            "unit": "ns",
            "range": "± 1649316.7343194294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6883090.948102678,
            "unit": "ns",
            "range": "± 75987.54743260067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175767.0811298075,
            "unit": "ns",
            "range": "± 14812.213179027594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448131.201171875,
            "unit": "ns",
            "range": "± 9128.430533925026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3117322.7014508927,
            "unit": "ns",
            "range": "± 33554.83692361511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938249.9059012277,
            "unit": "ns",
            "range": "± 4878.535780934602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860132.9190027574,
            "unit": "ns",
            "range": "± 17005.870989416915"
          }
        ]
      }
    ]
  }
}