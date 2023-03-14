window.BENCHMARK_DATA = {
  "lastUpdate": 1678783197497,
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
      },
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
          "id": "03fcc72859324bb7bd5f9db0d9c41573e561299f",
          "message": "Merge tag '0.47.1' into port/0.47.1-to-0.48.1\n\nLibplanet 0.47.1",
          "timestamp": "2023-03-14T17:22:25+09:00",
          "tree_id": "c3d45cc6b68d2656a589d93c7acf4e48ca385b66",
          "url": "https://github.com/greymistcube/libplanet/commit/03fcc72859324bb7bd5f9db0d9c41573e561299f"
        },
        "date": 1678783174387,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114800,
            "unit": "ns",
            "range": "± 3865.2296180175376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5468325,
            "unit": "ns",
            "range": "± 67502.5110265672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1748417.6478794643,
            "unit": "ns",
            "range": "± 15340.061348260191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211134.4360351562,
            "unit": "ns",
            "range": "± 46670.1589344095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2734877.0263671875,
            "unit": "ns",
            "range": "± 50277.68949765603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857191.4506392046,
            "unit": "ns",
            "range": "± 20751.550931293306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776955.5696614584,
            "unit": "ns",
            "range": "± 9580.425325704557"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5332510.2294921875,
            "unit": "ns",
            "range": "± 330048.4550990223"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6280288.659793815,
            "unit": "ns",
            "range": "± 616998.4818789213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31272097.979797978,
            "unit": "ns",
            "range": "± 2059367.4831384807"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6664661.688311689,
            "unit": "ns",
            "range": "± 338073.69679827045"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35213356.565656565,
            "unit": "ns",
            "range": "± 2753076.622326435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99975.2688172043,
            "unit": "ns",
            "range": "± 8843.858786874043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204627.77777777778,
            "unit": "ns",
            "range": "± 15336.187855121965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182544.8275862069,
            "unit": "ns",
            "range": "± 9941.301662709848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4006740.476190476,
            "unit": "ns",
            "range": "± 143082.83940247702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10166675,
            "unit": "ns",
            "range": "± 313649.57742575527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19437.23404255319,
            "unit": "ns",
            "range": "± 2147.578483428384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52152.57731958763,
            "unit": "ns",
            "range": "± 5886.6213566496335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42286.36363636364,
            "unit": "ns",
            "range": "± 2829.328412989122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105294.79166666667,
            "unit": "ns",
            "range": "± 20427.805455937112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5619.791666666667,
            "unit": "ns",
            "range": "± 723.2412120981443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17856.043956043955,
            "unit": "ns",
            "range": "± 1639.8650887062352"
          }
        ]
      }
    ]
  }
}