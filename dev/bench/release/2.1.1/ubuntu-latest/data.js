window.BENCHMARK_DATA = {
  "lastUpdate": 1687440551519,
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
        "date": 1687440542594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3659230.722222222,
            "unit": "ns",
            "range": "± 74870.19218055738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3870490.3333333335,
            "unit": "ns",
            "range": "± 106716.4687568094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4649360.733333333,
            "unit": "ns",
            "range": "± 54842.30183049091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4742306.756097561,
            "unit": "ns",
            "range": "± 169425.29183902568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7411880.333333333,
            "unit": "ns",
            "range": "± 199815.424200782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8263033.3125,
            "unit": "ns",
            "range": "± 158735.36783788662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22055810.42857143,
            "unit": "ns",
            "range": "± 191985.31462937643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56094174.266666666,
            "unit": "ns",
            "range": "± 425205.7185177658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111932228.66666667,
            "unit": "ns",
            "range": "± 522752.72217787727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227055358.93333334,
            "unit": "ns",
            "range": "± 698535.2048133565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305139.09523809527,
            "unit": "ns",
            "range": "± 10786.57668023147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292703.4,
            "unit": "ns",
            "range": "± 11731.281284302604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289286.7755102041,
            "unit": "ns",
            "range": "± 11552.924689707557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4619765.428571428,
            "unit": "ns",
            "range": "± 18964.820239730056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162899.066666667,
            "unit": "ns",
            "range": "± 46681.24414498621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24286.301075268817,
            "unit": "ns",
            "range": "± 2581.0045515893453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110579.78350515464,
            "unit": "ns",
            "range": "± 7114.75006768041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85630.85567010309,
            "unit": "ns",
            "range": "± 8858.996458391053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107227.97938144329,
            "unit": "ns",
            "range": "± 13628.355936841283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6421.958333333333,
            "unit": "ns",
            "range": "± 955.6200513049844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19363.802083333332,
            "unit": "ns",
            "range": "± 1872.1072766146463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50901.585106382976,
            "unit": "ns",
            "range": "± 4181.345948889176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5901900.526785715,
            "unit": "ns",
            "range": "± 20342.88877520779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885142.6407552084,
            "unit": "ns",
            "range": "± 4143.207820685723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375795.5881510417,
            "unit": "ns",
            "range": "± 3613.8260452272198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614907.775,
            "unit": "ns",
            "range": "± 4120.794920313722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838169.8844866072,
            "unit": "ns",
            "range": "± 340.18250011713013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775731.9485677084,
            "unit": "ns",
            "range": "± 376.8837551074538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557190.8484848484,
            "unit": "ns",
            "range": "± 111281.75148366745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2934902.6470588236,
            "unit": "ns",
            "range": "± 83526.09792585873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488152.9787234045,
            "unit": "ns",
            "range": "± 140747.91766751464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5779682.757575758,
            "unit": "ns",
            "range": "± 178236.46397798878"
          }
        ]
      }
    ]
  }
}