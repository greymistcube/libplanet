window.BENCHMARK_DATA = {
  "lastUpdate": 1678783065908,
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
          "id": "5ef9f1ef99a463d5242b24d9e762b897c9a5b53d",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:24:38+09:00",
          "tree_id": "31b6d98621737af23a276f132a8b63b5cd97fe45",
          "url": "https://github.com/greymistcube/libplanet/commit/5ef9f1ef99a463d5242b24d9e762b897c9a5b53d"
        },
        "date": 1678783044238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90384.61538461539,
            "unit": "ns",
            "range": "± 2399.7820413849768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4793813.723958333,
            "unit": "ns",
            "range": "± 10567.164831442244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533780.5889423077,
            "unit": "ns",
            "range": "± 2277.8526342718606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143449.1927083333,
            "unit": "ns",
            "range": "± 1451.0367475831886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545099.7209821427,
            "unit": "ns",
            "range": "± 13635.587399582606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813501.025390625,
            "unit": "ns",
            "range": "± 640.120474303674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718924.6712239584,
            "unit": "ns",
            "range": "± 849.8938958009227"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3929471.3641826925,
            "unit": "ns",
            "range": "± 8221.914218276343"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5387266.666666667,
            "unit": "ns",
            "range": "± 43739.711715469515"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23152086.666666668,
            "unit": "ns",
            "range": "± 301241.6444998141"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6088125,
            "unit": "ns",
            "range": "± 116831.76794005987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25685900,
            "unit": "ns",
            "range": "± 318592.9220808272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81796.8085106383,
            "unit": "ns",
            "range": "± 6417.792005121548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178481.35593220338,
            "unit": "ns",
            "range": "± 7879.1185087277545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153841.66666666666,
            "unit": "ns",
            "range": "± 1960.2682253078315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3372160,
            "unit": "ns",
            "range": "± 19696.801770845945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8565813.333333334,
            "unit": "ns",
            "range": "± 53406.017139145166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15518.817204301075,
            "unit": "ns",
            "range": "± 1395.4100608644274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43803.48837209302,
            "unit": "ns",
            "range": "± 2252.603600773146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42479.661016949154,
            "unit": "ns",
            "range": "± 1873.1109712709222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89078.26086956522,
            "unit": "ns",
            "range": "± 12512.7963168695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4062.5,
            "unit": "ns",
            "range": "± 643.5510039902371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13374.683544303798,
            "unit": "ns",
            "range": "± 708.0975513032338"
          }
        ]
      }
    ]
  }
}