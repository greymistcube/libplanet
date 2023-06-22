window.BENCHMARK_DATA = {
  "lastUpdate": 1687440618843,
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
          "id": "18f486c1265b058fd2042e1802d29cb22cb09679",
          "message": "Release 2.1.1",
          "timestamp": "2023-06-22T22:14:41+09:00",
          "tree_id": "544a06c065337a6185577753894cdc601e3d170c",
          "url": "https://github.com/greymistcube/libplanet/commit/18f486c1265b058fd2042e1802d29cb22cb09679"
        },
        "date": 1687440599240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508257.731958763,
            "unit": "ns",
            "range": "± 122710.3609071747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2742555.882352941,
            "unit": "ns",
            "range": "± 88180.06780610215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2357650.5494505493,
            "unit": "ns",
            "range": "± 131942.3740995594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5699911.764705882,
            "unit": "ns",
            "range": "± 232526.6011853773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51947.87234042553,
            "unit": "ns",
            "range": "± 3827.229232281628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7804481.25,
            "unit": "ns",
            "range": "± 150242.6802154878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21516806.666666668,
            "unit": "ns",
            "range": "± 327901.9049015959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53110410,
            "unit": "ns",
            "range": "± 313248.8896343335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108724273.33333333,
            "unit": "ns",
            "range": "± 1335041.72190913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214113515.3846154,
            "unit": "ns",
            "range": "± 944773.4912367037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4925843.645833333,
            "unit": "ns",
            "range": "± 12193.80671824435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1559232.5911458333,
            "unit": "ns",
            "range": "± 6211.032025734162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206894.6354166667,
            "unit": "ns",
            "range": "± 4504.4139672542515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677535.3515625,
            "unit": "ns",
            "range": "± 7113.92539979072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858611.1783854166,
            "unit": "ns",
            "range": "± 1970.9803535252931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767391.9696514423,
            "unit": "ns",
            "range": "± 1907.6801918191686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3541422.222222222,
            "unit": "ns",
            "range": "± 71096.71586322358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3606690.425531915,
            "unit": "ns",
            "range": "± 130141.49934586161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452684,
            "unit": "ns",
            "range": "± 116934.45699764178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4662288.461538462,
            "unit": "ns",
            "range": "± 124046.57617821808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127675,
            "unit": "ns",
            "range": "± 276286.3119486971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284111.4285714286,
            "unit": "ns",
            "range": "± 13735.414323028584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273441.8604651163,
            "unit": "ns",
            "range": "± 9176.52887373775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257293.75,
            "unit": "ns",
            "range": "± 14185.68450011638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4319485.714285715,
            "unit": "ns",
            "range": "± 60177.56874633421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909887.5,
            "unit": "ns",
            "range": "± 73400.4984088437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23017.525773195877,
            "unit": "ns",
            "range": "± 2698.0320879793708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103596.8085106383,
            "unit": "ns",
            "range": "± 8207.4376461613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91877.55102040817,
            "unit": "ns",
            "range": "± 8717.035467561831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113385.10638297872,
            "unit": "ns",
            "range": "± 14532.995143397777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7274.489795918367,
            "unit": "ns",
            "range": "± 1197.446701522697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23076.59574468085,
            "unit": "ns",
            "range": "± 2033.029707557087"
          }
        ]
      }
    ]
  }
}