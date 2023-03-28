window.BENCHMARK_DATA = {
  "lastUpdate": 1679984960018,
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
      }
    ]
  }
}