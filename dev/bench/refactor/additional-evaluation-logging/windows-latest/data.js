window.BENCHMARK_DATA = {
  "lastUpdate": 1679470512635,
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
          "id": "f6ac8a5d544ba18c52622609a2147ec901799f70",
          "message": "Added additional metrics to measure evaluation duration",
          "timestamp": "2023-03-22T16:18:52+09:00",
          "tree_id": "31f691be0aaf62e39e260347c1ac0ce65a4cae9f",
          "url": "https://github.com/greymistcube/libplanet/commit/f6ac8a5d544ba18c52622609a2147ec901799f70"
        },
        "date": 1679470491846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109513.40206185567,
            "unit": "ns",
            "range": "± 11263.553214405556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4819028.020833333,
            "unit": "ns",
            "range": "± 21310.494171970968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530625.6385216345,
            "unit": "ns",
            "range": "± 2857.3647026387516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172484.1080729167,
            "unit": "ns",
            "range": "± 3934.1748586490435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620096.3802083335,
            "unit": "ns",
            "range": "± 5989.337767149973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825386.9140625,
            "unit": "ns",
            "range": "± 1758.0672992414452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758156.1383928572,
            "unit": "ns",
            "range": "± 1149.5898238383072"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4800391.256009615,
            "unit": "ns",
            "range": "± 40144.15619058053"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5394796.774193549,
            "unit": "ns",
            "range": "± 242848.08444904632"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26621300,
            "unit": "ns",
            "range": "± 564572.4004006197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7153666.666666667,
            "unit": "ns",
            "range": "± 129679.57580495234"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29278785.29411765,
            "unit": "ns",
            "range": "± 592157.3755569296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104224.21052631579,
            "unit": "ns",
            "range": "± 12795.59195864843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197579.7619047619,
            "unit": "ns",
            "range": "± 12552.010156894085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186285,
            "unit": "ns",
            "range": "± 15098.84854128709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4056992.8571428573,
            "unit": "ns",
            "range": "± 66094.68108805631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10594157.142857144,
            "unit": "ns",
            "range": "± 78765.29608991429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23105.434782608696,
            "unit": "ns",
            "range": "± 3366.328555081172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65172.41379310345,
            "unit": "ns",
            "range": "± 5967.09367251359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47061.290322580644,
            "unit": "ns",
            "range": "± 4292.891805776262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124741.83673469388,
            "unit": "ns",
            "range": "± 25337.466343644897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7611.578947368421,
            "unit": "ns",
            "range": "± 1072.3669542924451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24365.909090909092,
            "unit": "ns",
            "range": "± 3029.69541975231"
          }
        ]
      }
    ]
  }
}