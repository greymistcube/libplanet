window.BENCHMARK_DATA = {
  "lastUpdate": 1679709397118,
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
          "id": "bf8224e710511a3fa9bd6c938e3722c71b63d103",
          "message": "Improved KeyConverters performance",
          "timestamp": "2023-03-25T10:37:43+09:00",
          "tree_id": "adb4e0426a83696735a7801c1ad275c5aa15b795",
          "url": "https://github.com/greymistcube/libplanet/commit/bf8224e710511a3fa9bd6c938e3722c71b63d103"
        },
        "date": 1679709374535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107707.29166666667,
            "unit": "ns",
            "range": "± 8037.2454667617585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900806.138392857,
            "unit": "ns",
            "range": "± 30255.231871667962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1550757.647235577,
            "unit": "ns",
            "range": "± 3847.820901231787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1191138.7586805555,
            "unit": "ns",
            "range": "± 20132.917638543422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665670.7868303573,
            "unit": "ns",
            "range": "± 6346.5184375553845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824602.1728515625,
            "unit": "ns",
            "range": "± 8756.573170567248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766205.8349609375,
            "unit": "ns",
            "range": "± 1758.3217524662523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4900089.633413462,
            "unit": "ns",
            "range": "± 41611.67147345957"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5781760,
            "unit": "ns",
            "range": "± 92104.20961373822"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26420276.923076924,
            "unit": "ns",
            "range": "± 307720.7558643771"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6442394.285714285,
            "unit": "ns",
            "range": "± 202596.4576992128"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29263590,
            "unit": "ns",
            "range": "± 659537.205686086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104785.71428571429,
            "unit": "ns",
            "range": "± 11459.683643379918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206004.34782608695,
            "unit": "ns",
            "range": "± 12327.454511570113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201207.0707070707,
            "unit": "ns",
            "range": "± 15019.9204631529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724092.8571428573,
            "unit": "ns",
            "range": "± 55182.894705985374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9260894.444444444,
            "unit": "ns",
            "range": "± 188611.11398923828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26469.473684210527,
            "unit": "ns",
            "range": "± 3783.083108411865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60246.666666666664,
            "unit": "ns",
            "range": "± 6592.93459067007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47759.375,
            "unit": "ns",
            "range": "± 5462.9580983392625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121784.69387755102,
            "unit": "ns",
            "range": "± 24232.2284845617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7557.894736842105,
            "unit": "ns",
            "range": "± 1466.9101226560297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23704.123711340206,
            "unit": "ns",
            "range": "± 3120.1935545522524"
          }
        ]
      }
    ]
  }
}