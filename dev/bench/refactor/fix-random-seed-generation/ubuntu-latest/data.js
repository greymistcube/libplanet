window.BENCHMARK_DATA = {
  "lastUpdate": 1701062957928,
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
          "id": "4a56d8893481517f81dc94973411460905ab698b",
          "message": "Better readability; test fix",
          "timestamp": "2023-11-27T13:27:12+09:00",
          "tree_id": "08072e7d8152ced75702896a41267846d5496111",
          "url": "https://github.com/greymistcube/libplanet/commit/4a56d8893481517f81dc94973411460905ab698b"
        },
        "date": 1701059892896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202493.7875,
            "unit": "ns",
            "range": "± 10586.560434831896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200551.47777777776,
            "unit": "ns",
            "range": "± 12621.793777527108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164239.54545454544,
            "unit": "ns",
            "range": "± 3839.6979355062213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080952.566666667,
            "unit": "ns",
            "range": "± 24803.24830819736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762788.214285714,
            "unit": "ns",
            "range": "± 24699.175418122053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15977.698924731183,
            "unit": "ns",
            "range": "± 2167.805195327785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66527.10204081633,
            "unit": "ns",
            "range": "± 8505.569498245271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64248.515789473684,
            "unit": "ns",
            "range": "± 10990.75704792214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76302.77551020408,
            "unit": "ns",
            "range": "± 12906.440661630053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3972.156626506024,
            "unit": "ns",
            "range": "± 566.3659396609165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15141.19387755102,
            "unit": "ns",
            "range": "± 2986.9221915742687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3686787.8755208333,
            "unit": "ns",
            "range": "± 41377.307318009814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234034.8857421875,
            "unit": "ns",
            "range": "± 2951.08981992775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771008.8694010417,
            "unit": "ns",
            "range": "± 10954.235649841612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960717.9596354167,
            "unit": "ns",
            "range": "± 3472.318280936769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628605.5731670673,
            "unit": "ns",
            "range": "± 754.623422268698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 604121.853108724,
            "unit": "ns",
            "range": "± 2177.267753042833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39672.010416666664,
            "unit": "ns",
            "range": "± 5132.721186547904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407666.15625,
            "unit": "ns",
            "range": "± 74170.39405994184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2586283,
            "unit": "ns",
            "range": "± 46210.199073673895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3169308.4782608696,
            "unit": "ns",
            "range": "± 120924.96608517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2922965.4791666665,
            "unit": "ns",
            "range": "± 106209.60520312564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6611302.655172414,
            "unit": "ns",
            "range": "± 191096.68130561477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573573.066666666,
            "unit": "ns",
            "range": "± 99990.91359823414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14993861.133333333,
            "unit": "ns",
            "range": "± 109687.58488925762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36978936.428571425,
            "unit": "ns",
            "range": "± 164261.7216918988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79478997.85714285,
            "unit": "ns",
            "range": "± 544187.5472337507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151373639.15384614,
            "unit": "ns",
            "range": "± 915409.6128842947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972648.3469387755,
            "unit": "ns",
            "range": "± 83680.42307288332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1965495.7,
            "unit": "ns",
            "range": "± 69646.92863447306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1422619.9431818181,
            "unit": "ns",
            "range": "± 89661.04787416488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5586258.389830508,
            "unit": "ns",
            "range": "± 245507.11061863555"
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
          "id": "4c2287d9d7d61d7c5526bbf27ca27359c2b9c4a0",
          "message": "Updated description",
          "timestamp": "2023-11-27T13:47:18+09:00",
          "tree_id": "e17bca4417313edd56dde3daef28ae3f0c9dc05d",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2287d9d7d61d7c5526bbf27ca27359c2b9c4a0"
        },
        "date": 1701061158732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217333.79896907217,
            "unit": "ns",
            "range": "± 16799.981642577364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200293.9125,
            "unit": "ns",
            "range": "± 9596.424596842291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165546.22222222222,
            "unit": "ns",
            "range": "± 3505.9313909859466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3067166.1666666665,
            "unit": "ns",
            "range": "± 14738.204805158188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2898347.285714286,
            "unit": "ns",
            "range": "± 39455.223488499876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17049.76,
            "unit": "ns",
            "range": "± 3679.860908438599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77249.101010101,
            "unit": "ns",
            "range": "± 14010.423170563563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72704.07,
            "unit": "ns",
            "range": "± 21964.77589887909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71224.80612244898,
            "unit": "ns",
            "range": "± 14245.470518084392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3183.4210526315787,
            "unit": "ns",
            "range": "± 692.2493336779773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13354.360824742267,
            "unit": "ns",
            "range": "± 2288.9043011229874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3791090.3825683594,
            "unit": "ns",
            "range": "± 68841.92066944712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201192.7161458333,
            "unit": "ns",
            "range": "± 2883.534556159862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783871.7873697917,
            "unit": "ns",
            "range": "± 12207.711260810769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948871.7778645833,
            "unit": "ns",
            "range": "± 15852.524174264858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620481.8651592548,
            "unit": "ns",
            "range": "± 2008.1856659432483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580022.1944861779,
            "unit": "ns",
            "range": "± 923.1823384432787"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42833.302083333336,
            "unit": "ns",
            "range": "± 5990.353109915081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387374.340909091,
            "unit": "ns",
            "range": "± 88690.52001067983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541558.409090909,
            "unit": "ns",
            "range": "± 62231.64338001252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203365.211111111,
            "unit": "ns",
            "range": "± 119720.83154660303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3128028.4166666665,
            "unit": "ns",
            "range": "± 194501.55602774498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6817417.074074074,
            "unit": "ns",
            "range": "± 149833.73694966696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5523714.8,
            "unit": "ns",
            "range": "± 31728.404838566974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14457043.733333332,
            "unit": "ns",
            "range": "± 177080.47891020248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36071680.06666667,
            "unit": "ns",
            "range": "± 196358.24660424943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75064806.46153846,
            "unit": "ns",
            "range": "± 455654.4444440354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151559659.15384614,
            "unit": "ns",
            "range": "± 672936.7539507763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003040.0531914893,
            "unit": "ns",
            "range": "± 65447.893416465704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1965733.640625,
            "unit": "ns",
            "range": "± 90491.81238589861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1446314.9793814432,
            "unit": "ns",
            "range": "± 141468.6726864511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5581668,
            "unit": "ns",
            "range": "± 205152.3870998383"
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
          "id": "711a0dca1882be2f8c85784ef549edf4d02458d2",
          "message": "Changelog",
          "timestamp": "2023-11-27T14:17:59+09:00",
          "tree_id": "f8b7d238cc9a39cea5dff593eae21973aea26ca1",
          "url": "https://github.com/greymistcube/libplanet/commit/711a0dca1882be2f8c85784ef549edf4d02458d2"
        },
        "date": 1701062951698,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195609.5754716981,
            "unit": "ns",
            "range": "± 7968.60061995507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195927.94444444444,
            "unit": "ns",
            "range": "± 8207.56659561064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168533.13513513515,
            "unit": "ns",
            "range": "± 5610.538591506771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026393.076923077,
            "unit": "ns",
            "range": "± 36209.762644121125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851520,
            "unit": "ns",
            "range": "± 46087.0299619566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13326.777777777777,
            "unit": "ns",
            "range": "± 2908.873874099649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65700.3829787234,
            "unit": "ns",
            "range": "± 7900.627904618344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50838.24590163935,
            "unit": "ns",
            "range": "± 2035.9380447002613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64436.93877551021,
            "unit": "ns",
            "range": "± 12657.500580676311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2725.2448979591836,
            "unit": "ns",
            "range": "± 285.54155677204665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12616.38947368421,
            "unit": "ns",
            "range": "± 2484.399059555864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3781103.0091145835,
            "unit": "ns",
            "range": "± 16436.36415119608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1239261.3923527645,
            "unit": "ns",
            "range": "± 11063.376256954594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778817.7030498798,
            "unit": "ns",
            "range": "± 3613.4172808404355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916449.2888997395,
            "unit": "ns",
            "range": "± 5503.875019585515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618495.4631159856,
            "unit": "ns",
            "range": "± 865.7215631792826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571460.632405599,
            "unit": "ns",
            "range": "± 744.1358964695215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38895.27368421053,
            "unit": "ns",
            "range": "± 4652.387020458413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403537.1363636362,
            "unit": "ns",
            "range": "± 58132.73173444622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538331.282051282,
            "unit": "ns",
            "range": "± 86310.57639983053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3092287.566666667,
            "unit": "ns",
            "range": "± 55080.62729498933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2884133.2615384613,
            "unit": "ns",
            "range": "± 133077.31700022137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6759797.333333333,
            "unit": "ns",
            "range": "± 274017.79193371127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5575143.142857143,
            "unit": "ns",
            "range": "± 26610.857144744925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14325834.285714285,
            "unit": "ns",
            "range": "± 102616.38848582437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36770204.416666664,
            "unit": "ns",
            "range": "± 190535.9549703073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74814485.58333333,
            "unit": "ns",
            "range": "± 287934.6454367911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147715560.92307693,
            "unit": "ns",
            "range": "± 905501.6427038717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946207.2826086957,
            "unit": "ns",
            "range": "± 75887.27061425976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1794037.3333333333,
            "unit": "ns",
            "range": "± 65593.93747367826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1346751.5274725275,
            "unit": "ns",
            "range": "± 101250.11787552433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5591668.166666667,
            "unit": "ns",
            "range": "± 309743.14270775643"
          }
        ]
      }
    ]
  }
}