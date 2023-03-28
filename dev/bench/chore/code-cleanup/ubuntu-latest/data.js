window.BENCHMARK_DATA = {
  "lastUpdate": 1679984580126,
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
        "date": 1679984572613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111224.70967741935,
            "unit": "ns",
            "range": "± 8359.02351482028"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4510965.59609375,
            "unit": "ns",
            "range": "± 51832.669485514925"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6293114.538461538,
            "unit": "ns",
            "range": "± 83313.15505530463"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25855146.14285714,
            "unit": "ns",
            "range": "± 308071.5917047797"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6837612.333333333,
            "unit": "ns",
            "range": "± 95455.17921042963"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29077634.23529412,
            "unit": "ns",
            "range": "± 557304.9319770471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6066526.78125,
            "unit": "ns",
            "range": "± 26063.95034444134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896126.3407552084,
            "unit": "ns",
            "range": "± 7105.292171628865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330830.2642728365,
            "unit": "ns",
            "range": "± 659.2524366903399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579168.218191964,
            "unit": "ns",
            "range": "± 2200.120177852119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809357.904436384,
            "unit": "ns",
            "range": "± 580.6100340144602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746854.6695033482,
            "unit": "ns",
            "range": "± 460.38365069758623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95514.72631578948,
            "unit": "ns",
            "range": "± 9035.677981417586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196428.55952380953,
            "unit": "ns",
            "range": "± 10514.090308748095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170610.52631578947,
            "unit": "ns",
            "range": "± 3632.7055630208097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3767459.6666666665,
            "unit": "ns",
            "range": "± 23568.956888448072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9872927.42857143,
            "unit": "ns",
            "range": "± 62801.30173040179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17429.473684210527,
            "unit": "ns",
            "range": "± 1739.0920646723955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50535.95505617977,
            "unit": "ns",
            "range": "± 4263.088061034971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47682.65306122449,
            "unit": "ns",
            "range": "± 2939.2482912418022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96539.98947368421,
            "unit": "ns",
            "range": "± 15816.66340563401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5123.404255319149,
            "unit": "ns",
            "range": "± 633.0376556967877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14960.67415730337,
            "unit": "ns",
            "range": "± 1269.0921932203141"
          }
        ]
      }
    ]
  }
}