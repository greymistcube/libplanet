window.BENCHMARK_DATA = {
  "lastUpdate": 1679888286273,
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
          "id": "0c671e16f82fa186b33d165e1cc535f621434a0a",
          "message": "Reintroduced cache during commit",
          "timestamp": "2023-03-27T12:20:31+09:00",
          "tree_id": "fe738e78b4353bc36fcbc3b06b14e8466f83bfd4",
          "url": "https://github.com/greymistcube/libplanet/commit/0c671e16f82fa186b33d165e1cc535f621434a0a"
        },
        "date": 1679888279304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111140,
            "unit": "ns",
            "range": "± 2146.720040744329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5041767.6959375,
            "unit": "ns",
            "range": "± 337212.76083263324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5735637.164705883,
            "unit": "ns",
            "range": "± 309742.5396587596"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27506012.352941178,
            "unit": "ns",
            "range": "± 541919.5164602329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6548525.775,
            "unit": "ns",
            "range": "± 228036.14964484362"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30243103.2,
            "unit": "ns",
            "range": "± 464952.6642911697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5977942.631770833,
            "unit": "ns",
            "range": "± 14025.0519736199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880668.5364118305,
            "unit": "ns",
            "range": "± 5648.542577564349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352738.1844308036,
            "unit": "ns",
            "range": "± 2912.3732191511817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629398.43671875,
            "unit": "ns",
            "range": "± 1945.5689039004712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825514.1987630208,
            "unit": "ns",
            "range": "± 922.755459367671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774608.0658052885,
            "unit": "ns",
            "range": "± 433.76673778749495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93106.41304347826,
            "unit": "ns",
            "range": "± 6596.865238154971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197529.7142857143,
            "unit": "ns",
            "range": "± 9049.331790388424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174758.156626506,
            "unit": "ns",
            "range": "± 9319.354487330913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3806839.65,
            "unit": "ns",
            "range": "± 86428.1279568996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9614376.083333334,
            "unit": "ns",
            "range": "± 239888.03021390166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17672.239583333332,
            "unit": "ns",
            "range": "± 1963.008575710102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53032.68421052631,
            "unit": "ns",
            "range": "± 6775.183942330098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40845.333333333336,
            "unit": "ns",
            "range": "± 876.0212191896885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90895.60638297872,
            "unit": "ns",
            "range": "± 14230.036680914562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5113.515463917526,
            "unit": "ns",
            "range": "± 657.1203928473656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16940.630434782608,
            "unit": "ns",
            "range": "± 1397.9921293729876"
          }
        ]
      }
    ]
  }
}