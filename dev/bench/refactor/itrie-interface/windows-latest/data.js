window.BENCHMARK_DATA = {
  "lastUpdate": 1693307926067,
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
          "id": "3db250238e98ac1f2cfe74ce90f596d0ccec24c6",
          "message": "Changelog",
          "timestamp": "2023-08-29T19:55:39+09:00",
          "tree_id": "d92c57f29354696c1ff88c1d03f95f8f66c1a87d",
          "url": "https://github.com/greymistcube/libplanet/commit/3db250238e98ac1f2cfe74ce90f596d0ccec24c6"
        },
        "date": 1693307643390,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325916.3265306123,
            "unit": "ns",
            "range": "± 107793.89716852654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539057.1428571427,
            "unit": "ns",
            "range": "± 92070.50358644738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1750969.387755102,
            "unit": "ns",
            "range": "± 114198.97575520902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4541914.285714285,
            "unit": "ns",
            "range": "± 206643.80204027166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51553.260869565216,
            "unit": "ns",
            "range": "± 3303.359964048477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750325,
            "unit": "ns",
            "range": "± 287924.1931279344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20742613.333333332,
            "unit": "ns",
            "range": "± 256291.46874677856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53019380,
            "unit": "ns",
            "range": "± 738922.4811459299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104237333.33333333,
            "unit": "ns",
            "range": "± 1331385.567566289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211309713.33333334,
            "unit": "ns",
            "range": "± 2419894.3772306223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4543668.582589285,
            "unit": "ns",
            "range": "± 19935.598627108866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421735.8333333333,
            "unit": "ns",
            "range": "± 5228.490921316902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092443.125,
            "unit": "ns",
            "range": "± 4235.70231221638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645814.8177083335,
            "unit": "ns",
            "range": "± 12541.627589061842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836756.4522879465,
            "unit": "ns",
            "range": "± 1673.9465028145855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764662.2721354166,
            "unit": "ns",
            "range": "± 2475.9908566123045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3227294.4444444445,
            "unit": "ns",
            "range": "± 68628.5866712752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487107.407407407,
            "unit": "ns",
            "range": "± 57849.1867233966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4215059.090909091,
            "unit": "ns",
            "range": "± 101435.62189689769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3918836.7346938774,
            "unit": "ns",
            "range": "± 143524.94657416057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6135739.393939394,
            "unit": "ns",
            "range": "± 193441.20705558368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258553.125,
            "unit": "ns",
            "range": "± 7886.369800423529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256178.57142857142,
            "unit": "ns",
            "range": "± 7154.6854444848805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234541.83673469388,
            "unit": "ns",
            "range": "± 14000.55907182228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4154346.6666666665,
            "unit": "ns",
            "range": "± 73822.31434490588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3804783.3333333335,
            "unit": "ns",
            "range": "± 76381.00510713688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22418.367346938776,
            "unit": "ns",
            "range": "± 2494.4617806262854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90523.95833333333,
            "unit": "ns",
            "range": "± 6488.244345967748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69128.57142857143,
            "unit": "ns",
            "range": "± 2698.1731317407944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79343.82022471911,
            "unit": "ns",
            "range": "± 9600.993734743623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5537.113402061856,
            "unit": "ns",
            "range": "± 792.191000173578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22329.29292929293,
            "unit": "ns",
            "range": "± 3446.3897858736154"
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
          "id": "055c43d5d5e64347b1cab4809fbc73dc647d2f41",
          "message": "Changelog",
          "timestamp": "2023-08-29T19:57:12+09:00",
          "tree_id": "0f74dff10c5f5e73c50fd1c25d1ae65c107fae24",
          "url": "https://github.com/greymistcube/libplanet/commit/055c43d5d5e64347b1cab4809fbc73dc647d2f41"
        },
        "date": 1693307899821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394610.101010101,
            "unit": "ns",
            "range": "± 133947.47942334428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605937.8378378376,
            "unit": "ns",
            "range": "± 86659.62584012667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1810311.111111111,
            "unit": "ns",
            "range": "± 136728.09445779223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4626265.454545454,
            "unit": "ns",
            "range": "± 197003.37675070055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55758.333333333336,
            "unit": "ns",
            "range": "± 5682.561814175876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7727846.666666667,
            "unit": "ns",
            "range": "± 97557.68159450713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21001580,
            "unit": "ns",
            "range": "± 384898.3691462313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53418483.333333336,
            "unit": "ns",
            "range": "± 451177.61234217713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106697706.25,
            "unit": "ns",
            "range": "± 2046854.9378558805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213316693.33333334,
            "unit": "ns",
            "range": "± 3555866.9990527458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4626536.941964285,
            "unit": "ns",
            "range": "± 23082.76158353256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1435957.6171875,
            "unit": "ns",
            "range": "± 5698.2288591815295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085091.2760416667,
            "unit": "ns",
            "range": "± 8466.059475178206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634925.2604166665,
            "unit": "ns",
            "range": "± 20135.60321527013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848739.6484375,
            "unit": "ns",
            "range": "± 2408.279330122218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788073.6328125,
            "unit": "ns",
            "range": "± 4243.4156209465455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3398573.076923077,
            "unit": "ns",
            "range": "± 91124.16389824296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3500341.935483871,
            "unit": "ns",
            "range": "± 92901.67481157539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4207313.636363637,
            "unit": "ns",
            "range": "± 98352.82597171966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3963172.4137931033,
            "unit": "ns",
            "range": "± 112899.1961775501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6136830,
            "unit": "ns",
            "range": "± 151943.74900623245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262584.90566037735,
            "unit": "ns",
            "range": "± 10886.201503003967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259065,
            "unit": "ns",
            "range": "± 11590.54004971588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238246.39175257733,
            "unit": "ns",
            "range": "± 16984.9508257535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262955.555555556,
            "unit": "ns",
            "range": "± 69087.99352762535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3884905.5555555555,
            "unit": "ns",
            "range": "± 82882.35618827606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22727.956989247312,
            "unit": "ns",
            "range": "± 1933.9285086038828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94776.04166666667,
            "unit": "ns",
            "range": "± 7099.840543675192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74686.45833333333,
            "unit": "ns",
            "range": "± 6057.680983966452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104383.15789473684,
            "unit": "ns",
            "range": "± 14127.900964626464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6632.98969072165,
            "unit": "ns",
            "range": "± 1195.4533353401735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21604.395604395606,
            "unit": "ns",
            "range": "± 2311.512832560437"
          }
        ]
      }
    ]
  }
}