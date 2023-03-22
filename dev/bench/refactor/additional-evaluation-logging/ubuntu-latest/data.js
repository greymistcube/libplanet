window.BENCHMARK_DATA = {
  "lastUpdate": 1679470130634,
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
        "date": 1679470122640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101115.25,
            "unit": "ns",
            "range": "± 2301.1822333428163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4404594.50234375,
            "unit": "ns",
            "range": "± 49771.28331281395"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6022384.538461538,
            "unit": "ns",
            "range": "± 37402.76164183465"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24564421.8,
            "unit": "ns",
            "range": "± 200258.12585018508"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6665515.583333333,
            "unit": "ns",
            "range": "± 25500.766125597565"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27930128.63157895,
            "unit": "ns",
            "range": "± 609142.9457357106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5909500.777083334,
            "unit": "ns",
            "range": "± 34995.300428207775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814367.1277901786,
            "unit": "ns",
            "range": "± 4307.584952965135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354318.6494891827,
            "unit": "ns",
            "range": "± 2648.235325958922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540250.8582589286,
            "unit": "ns",
            "range": "± 4172.994566002553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803018.4714192708,
            "unit": "ns",
            "range": "± 1376.6315623517119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749525.7164963942,
            "unit": "ns",
            "range": "± 450.85940734873475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84765.22680412371,
            "unit": "ns",
            "range": "± 7779.6071137209365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184613.5185185185,
            "unit": "ns",
            "range": "± 6545.785856624297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166708.83333333334,
            "unit": "ns",
            "range": "± 2130.148728624508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3705004.2,
            "unit": "ns",
            "range": "± 34663.21836966177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9279564.6,
            "unit": "ns",
            "range": "± 96032.66872848159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14343.43373493976,
            "unit": "ns",
            "range": "± 762.4385331925818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44627.744680851065,
            "unit": "ns",
            "range": "± 2521.2129054794937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38207,
            "unit": "ns",
            "range": "± 1124.9886031168746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78599.17021276595,
            "unit": "ns",
            "range": "± 10364.855816640596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4550.030612244898,
            "unit": "ns",
            "range": "± 474.1188561688714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13524.351351351352,
            "unit": "ns",
            "range": "± 668.2395688946481"
          }
        ]
      }
    ]
  }
}