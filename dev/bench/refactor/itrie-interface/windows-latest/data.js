window.BENCHMARK_DATA = {
  "lastUpdate": 1693307280451,
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
          "id": "235f128d5ffc87ba8324c8cc04993d505ee1ce8d",
          "message": "Removed VolatileKeyValueStore and readonly option",
          "timestamp": "2023-08-29T19:49:28+09:00",
          "tree_id": "83918d471894c27b21eff46190d39511b400b241",
          "url": "https://github.com/greymistcube/libplanet/commit/235f128d5ffc87ba8324c8cc04993d505ee1ce8d"
        },
        "date": 1693307149607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1249343.4782608696,
            "unit": "ns",
            "range": "± 59810.76648667685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477923.4375,
            "unit": "ns",
            "range": "± 110775.42238181287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1750103.0303030303,
            "unit": "ns",
            "range": "± 124079.79612753277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4505535.384615385,
            "unit": "ns",
            "range": "± 210280.23893037453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47228.985507246376,
            "unit": "ns",
            "range": "± 2285.8967508768246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7328807.142857143,
            "unit": "ns",
            "range": "± 69973.69246625932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20164338.46153846,
            "unit": "ns",
            "range": "± 98937.15630356423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51603280,
            "unit": "ns",
            "range": "± 685407.745381223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101996993.33333333,
            "unit": "ns",
            "range": "± 1841975.3342798157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201938107.14285713,
            "unit": "ns",
            "range": "± 2208881.8272755407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4485110.364583333,
            "unit": "ns",
            "range": "± 27510.34763795663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410033.5546875,
            "unit": "ns",
            "range": "± 4232.360121858975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073326.3020833333,
            "unit": "ns",
            "range": "± 4174.786938445632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646694.7823660714,
            "unit": "ns",
            "range": "± 7332.688149027636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831654.3596540178,
            "unit": "ns",
            "range": "± 6299.022031760125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754868.37890625,
            "unit": "ns",
            "range": "± 5564.042458557256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188033.3333333335,
            "unit": "ns",
            "range": "± 82497.19187140049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498312.8205128205,
            "unit": "ns",
            "range": "± 119543.62819420933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4044439.4736842103,
            "unit": "ns",
            "range": "± 128750.93185592702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3674233.3333333335,
            "unit": "ns",
            "range": "± 136470.61319810455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5940561.538461538,
            "unit": "ns",
            "range": "± 158945.45498861696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267540.9090909091,
            "unit": "ns",
            "range": "± 6531.510369403674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246135.7142857143,
            "unit": "ns",
            "range": "± 7033.107647022273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213392.95774647887,
            "unit": "ns",
            "range": "± 10465.90824594191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4067500,
            "unit": "ns",
            "range": "± 88369.79121849276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3798540.909090909,
            "unit": "ns",
            "range": "± 90280.51342286498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22739.78494623656,
            "unit": "ns",
            "range": "± 2136.5422993068596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89196.90721649484,
            "unit": "ns",
            "range": "± 7794.127778978963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67769.33333333333,
            "unit": "ns",
            "range": "± 3410.277524306899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80258.94736842105,
            "unit": "ns",
            "range": "± 12620.217608947973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5331.958762886598,
            "unit": "ns",
            "range": "± 670.2838937955975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20072.164948453606,
            "unit": "ns",
            "range": "± 2544.714385906975"
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
          "id": "9b583597c1581017f0c14fb3c0da0eda4248b776",
          "message": "Removed VolatileKeyValueStore and readonly option",
          "timestamp": "2023-08-29T19:51:50+09:00",
          "tree_id": "6827c39f849230f82333e50a670bc65fc498be41",
          "url": "https://github.com/greymistcube/libplanet/commit/9b583597c1581017f0c14fb3c0da0eda4248b776"
        },
        "date": 1693307256525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300300,
            "unit": "ns",
            "range": "± 118990.86144062904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2520891.6666666665,
            "unit": "ns",
            "range": "± 124442.01630693392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681851.0416666667,
            "unit": "ns",
            "range": "± 129935.20814118466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4645639.795918368,
            "unit": "ns",
            "range": "± 268844.4565209031"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50133.68421052631,
            "unit": "ns",
            "range": "± 3427.877282688744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7448504.545454546,
            "unit": "ns",
            "range": "± 179394.8331720598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20930586.666666668,
            "unit": "ns",
            "range": "± 275388.3125092034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52309771.428571425,
            "unit": "ns",
            "range": "± 409746.51531548967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104742400,
            "unit": "ns",
            "range": "± 2438131.414218684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206981666.66666666,
            "unit": "ns",
            "range": "± 4904455.805319621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4593919.471153846,
            "unit": "ns",
            "range": "± 18574.61745831914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1425300.8333333333,
            "unit": "ns",
            "range": "± 5948.067732343815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1071655.078125,
            "unit": "ns",
            "range": "± 6166.915409172409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672429.5833333335,
            "unit": "ns",
            "range": "± 9549.27728749156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847638.2286658654,
            "unit": "ns",
            "range": "± 1790.539121145289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766667.65625,
            "unit": "ns",
            "range": "± 3553.7795431424256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291284,
            "unit": "ns",
            "range": "± 85309.23494362534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3600800,
            "unit": "ns",
            "range": "± 62429.40628606658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4026961.3636363638,
            "unit": "ns",
            "range": "± 150926.22903939107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3707748,
            "unit": "ns",
            "range": "± 98392.28086254193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5784815.7894736845,
            "unit": "ns",
            "range": "± 198518.6389592291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257566.66666666666,
            "unit": "ns",
            "range": "± 5289.834868989435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245279.45205479453,
            "unit": "ns",
            "range": "± 11363.403232699231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211521.73913043478,
            "unit": "ns",
            "range": "± 10155.581912907297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3971176.470588235,
            "unit": "ns",
            "range": "± 77749.52193913932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739637.5,
            "unit": "ns",
            "range": "± 93356.76688871055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19461.052631578947,
            "unit": "ns",
            "range": "± 2042.8544244091668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87348.95833333333,
            "unit": "ns",
            "range": "± 6065.016072207916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69996.92307692308,
            "unit": "ns",
            "range": "± 3253.3621662236415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81326.04166666667,
            "unit": "ns",
            "range": "± 10339.746966176755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5770.967741935484,
            "unit": "ns",
            "range": "± 752.3269185841801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20319.14893617021,
            "unit": "ns",
            "range": "± 1638.992386222593"
          }
        ]
      }
    ]
  }
}