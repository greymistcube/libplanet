window.BENCHMARK_DATA = {
  "lastUpdate": 1679984492654,
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
        "date": 1679984484513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108298.05882352941,
            "unit": "ns",
            "range": "± 5157.984122255842"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4836174.374739584,
            "unit": "ns",
            "range": "± 87692.80924337085"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6056597.133333334,
            "unit": "ns",
            "range": "± 47769.110685622334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26222934.863636363,
            "unit": "ns",
            "range": "± 635219.6055312416"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6232955.75,
            "unit": "ns",
            "range": "± 174302.09388170982"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29496548.95,
            "unit": "ns",
            "range": "± 663277.5272906409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5796949.354910715,
            "unit": "ns",
            "range": "± 24666.272682425373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803780.8602864584,
            "unit": "ns",
            "range": "± 7470.677663850238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328874.8811197917,
            "unit": "ns",
            "range": "± 6034.8237489420335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589189.409598214,
            "unit": "ns",
            "range": "± 7123.953280606146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829485.4569614956,
            "unit": "ns",
            "range": "± 2529.3578493394184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752763.1412109375,
            "unit": "ns",
            "range": "± 1198.5050403150804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90386.41237113402,
            "unit": "ns",
            "range": "± 8028.4879319839565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191013.2131147541,
            "unit": "ns",
            "range": "± 8567.364575555997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170834.66666666666,
            "unit": "ns",
            "range": "± 2193.2790451050614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3772865.1052631577,
            "unit": "ns",
            "range": "± 80908.48301829443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9509526.73076923,
            "unit": "ns",
            "range": "± 253366.62671071067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18900.15625,
            "unit": "ns",
            "range": "± 2111.7725472025677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47874.375,
            "unit": "ns",
            "range": "± 3687.976770248795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38643.142857142855,
            "unit": "ns",
            "range": "± 680.3362129398689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86502.81443298969,
            "unit": "ns",
            "range": "± 14961.46783917628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5171.652631578947,
            "unit": "ns",
            "range": "± 495.89021109088964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16753.444444444445,
            "unit": "ns",
            "range": "± 1382.9407772960183"
          }
        ]
      }
    ]
  }
}