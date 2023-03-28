window.BENCHMARK_DATA = {
  "lastUpdate": 1679984978441,
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
          "id": "d20ce8e90ef5020f8aeabb1c4ac1551800aeb070",
          "message": "General code readability",
          "timestamp": "2023-03-28T15:09:31+09:00",
          "tree_id": "403e18a60d3f7ac84b15452a40c86933e655ca73",
          "url": "https://github.com/greymistcube/libplanet/commit/d20ce8e90ef5020f8aeabb1c4ac1551800aeb070"
        },
        "date": 1679984943921,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135414.77777777778,
            "unit": "ns",
            "range": "± 11005.727886405923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127809.83157894737,
            "unit": "ns",
            "range": "± 24646.329475393097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266777.21875,
            "unit": "ns",
            "range": "± 45639.203489452404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266185.9375,
            "unit": "ns",
            "range": "± 40085.063009558355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4181753.9226804124,
            "unit": "ns",
            "range": "± 351646.019562015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11850371.102040816,
            "unit": "ns",
            "range": "± 959214.188024701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23341.588888888888,
            "unit": "ns",
            "range": "± 3937.0742285070055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76392.5989010989,
            "unit": "ns",
            "range": "± 14193.86087015161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64346.931818181816,
            "unit": "ns",
            "range": "± 5327.183592648235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133609.3817204301,
            "unit": "ns",
            "range": "± 23116.07493472955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9006.511111111111,
            "unit": "ns",
            "range": "± 1246.2780768427951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25987.522471910113,
            "unit": "ns",
            "range": "± 4096.917821466878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5726766.741844093,
            "unit": "ns",
            "range": "± 715971.0781120615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8234516.221649485,
            "unit": "ns",
            "range": "± 1347207.5465234697"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30357614.479381442,
            "unit": "ns",
            "range": "± 1963348.0512319915"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8732168.372340426,
            "unit": "ns",
            "range": "± 1613003.1073743992"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35146024.52173913,
            "unit": "ns",
            "range": "± 2785254.6924989657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7784938.184495192,
            "unit": "ns",
            "range": "± 125831.26432776553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2453601.631640625,
            "unit": "ns",
            "range": "± 56416.96323456716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1459662.675998264,
            "unit": "ns",
            "range": "± 31161.4289323069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108161.5416135206,
            "unit": "ns",
            "range": "± 314844.71774350264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912117.4297560307,
            "unit": "ns",
            "range": "± 39624.73104071863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819420.6946910511,
            "unit": "ns",
            "range": "± 25405.06368736779"
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
          "id": "ff2d212eadb50f3fd0c2ebe0af687d029dc1b79a",
          "message": "[skip changelog] General code readability",
          "timestamp": "2023-03-28T15:10:15+09:00",
          "tree_id": "403e18a60d3f7ac84b15452a40c86933e655ca73",
          "url": "https://github.com/greymistcube/libplanet/commit/ff2d212eadb50f3fd0c2ebe0af687d029dc1b79a"
        },
        "date": 1679984965641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128059.20454545454,
            "unit": "ns",
            "range": "± 7053.722058404376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97996.88541666667,
            "unit": "ns",
            "range": "± 14540.505520691462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223520.81632653062,
            "unit": "ns",
            "range": "± 28166.65319547137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214987.86170212767,
            "unit": "ns",
            "range": "± 22719.912415400366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4052798.533333333,
            "unit": "ns",
            "range": "± 261642.32825815314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11425053.90425532,
            "unit": "ns",
            "range": "± 879825.1380925849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21276.394736842107,
            "unit": "ns",
            "range": "± 4603.424154501581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60022.62359550562,
            "unit": "ns",
            "range": "± 6466.268837415622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48397.30927835051,
            "unit": "ns",
            "range": "± 6668.059989858408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132135.9387755102,
            "unit": "ns",
            "range": "± 25281.87615626556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7724.6505376344085,
            "unit": "ns",
            "range": "± 903.4508714324754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19567.195652173912,
            "unit": "ns",
            "range": "± 2833.368529689675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5127683.727921195,
            "unit": "ns",
            "range": "± 308280.1410470552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6417104.555555556,
            "unit": "ns",
            "range": "± 637641.2057574227"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28759605.14285714,
            "unit": "ns",
            "range": "± 1046405.681970746"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7794580.59375,
            "unit": "ns",
            "range": "± 707621.4843282878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34526651.551020406,
            "unit": "ns",
            "range": "± 2334348.698677196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7106919.531558388,
            "unit": "ns",
            "range": "± 361707.45152212813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2067284.4359375,
            "unit": "ns",
            "range": "± 26967.314814182173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400993.506480824,
            "unit": "ns",
            "range": "± 52247.27134730517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3204581.5543686226,
            "unit": "ns",
            "range": "± 297627.2264227164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911478.0748506434,
            "unit": "ns",
            "range": "± 29270.799190173002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776007.6376953125,
            "unit": "ns",
            "range": "± 25954.143380370813"
          }
        ]
      }
    ]
  }
}