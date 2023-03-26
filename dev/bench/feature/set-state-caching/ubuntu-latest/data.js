window.BENCHMARK_DATA = {
  "lastUpdate": 1679836197387,
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
          "id": "a3a3a05bbd9141cd110fc544a4725588b0b71c4b",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T21:52:29+09:00",
          "tree_id": "9e82adaed50e472317a77409dbc78eda575f2d6f",
          "url": "https://github.com/greymistcube/libplanet/commit/a3a3a05bbd9141cd110fc544a4725588b0b71c4b"
        },
        "date": 1679836188860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129504.23655913978,
            "unit": "ns",
            "range": "± 14274.730994494104"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6274899.268465909,
            "unit": "ns",
            "range": "± 410352.35334113066"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7104599.214285715,
            "unit": "ns",
            "range": "± 257990.03065447955"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34658303.39393939,
            "unit": "ns",
            "range": "± 2170471.47631579"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7691989.395604395,
            "unit": "ns",
            "range": "± 582127.0098954329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39458940.8877551,
            "unit": "ns",
            "range": "± 2644407.4745900906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7163307.395089285,
            "unit": "ns",
            "range": "± 98991.81562592501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2307963.6859375,
            "unit": "ns",
            "range": "± 32195.42765746943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1676832.7927083333,
            "unit": "ns",
            "range": "± 23601.774561878054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3283179.5920410156,
            "unit": "ns",
            "range": "± 59492.438348043266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047199.3371465774,
            "unit": "ns",
            "range": "± 24351.72921308795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982577.2700805664,
            "unit": "ns",
            "range": "± 18725.70701093804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117584.51546391753,
            "unit": "ns",
            "range": "± 21424.75474972108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242171.20212765958,
            "unit": "ns",
            "range": "± 31763.126564496975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231131.20833333334,
            "unit": "ns",
            "range": "± 35362.230476185716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4892998.969072165,
            "unit": "ns",
            "range": "± 311338.8680161408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12265391.285714285,
            "unit": "ns",
            "range": "± 728041.9734733776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23814.11111111111,
            "unit": "ns",
            "range": "± 8614.152741083248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64356.37234042553,
            "unit": "ns",
            "range": "± 11566.893191656249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55143.032258064515,
            "unit": "ns",
            "range": "± 11119.371065897658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121757.10752688172,
            "unit": "ns",
            "range": "± 26497.290287820146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5796.666666666667,
            "unit": "ns",
            "range": "± 650.0561773476699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23974.99,
            "unit": "ns",
            "range": "± 8592.203096435986"
          }
        ]
      }
    ]
  }
}