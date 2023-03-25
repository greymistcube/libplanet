window.BENCHMARK_DATA = {
  "lastUpdate": 1679705033815,
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
          "id": "424c67432ee2b0bb6df56928dda99c30da81ed5e",
          "message": "Removed call to lower level GetStates() with empty addresses",
          "timestamp": "2023-03-25T09:19:21+09:00",
          "tree_id": "244138a8f31b2b5fc77932bfb2137ac88923d21b",
          "url": "https://github.com/greymistcube/libplanet/commit/424c67432ee2b0bb6df56928dda99c30da81ed5e"
        },
        "date": 1679705002273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119786.02150537634,
            "unit": "ns",
            "range": "± 8204.142529948293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876618.478260869,
            "unit": "ns",
            "range": "± 148384.6273047987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820695.6640625,
            "unit": "ns",
            "range": "± 27279.754156324158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389038.90625,
            "unit": "ns",
            "range": "± 15051.487381285719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214374.8046875,
            "unit": "ns",
            "range": "± 68693.76019189708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980551.826171875,
            "unit": "ns",
            "range": "± 21971.791913397763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913039.6549479166,
            "unit": "ns",
            "range": "± 12586.942982912647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5445942.4140625,
            "unit": "ns",
            "range": "± 322819.322932172"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6944185.714285715,
            "unit": "ns",
            "range": "± 163816.95359673336"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32117851.724137932,
            "unit": "ns",
            "range": "± 1404203.5016762286"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6873275.555555556,
            "unit": "ns",
            "range": "± 380942.9021213733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36880720,
            "unit": "ns",
            "range": "± 2778110.060287516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105502.12765957447,
            "unit": "ns",
            "range": "± 10519.85300526319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219359.79381443298,
            "unit": "ns",
            "range": "± 24350.229549712898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211437.5,
            "unit": "ns",
            "range": "± 13975.717663523626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4226893.75,
            "unit": "ns",
            "range": "± 81485.49538619332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10890571.42857143,
            "unit": "ns",
            "range": "± 187809.13973242347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23048.387096774193,
            "unit": "ns",
            "range": "± 2360.297185747822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59493.406593406595,
            "unit": "ns",
            "range": "± 5601.860845544536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50046.666666666664,
            "unit": "ns",
            "range": "± 5162.923133351771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116711.45833333333,
            "unit": "ns",
            "range": "± 19932.184340601492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6927.083333333333,
            "unit": "ns",
            "range": "± 806.7451389988325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22728.125,
            "unit": "ns",
            "range": "± 1946.4787708226252"
          }
        ]
      }
    ]
  }
}