window.BENCHMARK_DATA = {
  "lastUpdate": 1701747194710,
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
          "id": "994021d4014c1a3eff9336c73c55959c1de602c0",
          "message": "Remove IAccountDelta and AccountDelta",
          "timestamp": "2023-12-05T12:19:24+09:00",
          "tree_id": "e063b5281a3b9b71847ed41dda78efc7329a6b5f",
          "url": "https://github.com/greymistcube/libplanet/commit/994021d4014c1a3eff9336c73c55959c1de602c0"
        },
        "date": 1701747031055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240342.34,
            "unit": "ns",
            "range": "± 8682.223211381108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232334.33333333334,
            "unit": "ns",
            "range": "± 9131.781499065046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169132.75757575757,
            "unit": "ns",
            "range": "± 5301.94796767131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3125643.6923076925,
            "unit": "ns",
            "range": "± 25366.906736877394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905654.5714285714,
            "unit": "ns",
            "range": "± 26154.84731868523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19050.45918367347,
            "unit": "ns",
            "range": "± 3479.6059615711356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88670.27083333333,
            "unit": "ns",
            "range": "± 8806.293844361862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94496.58333333333,
            "unit": "ns",
            "range": "± 3116.874216033016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98175.89583333333,
            "unit": "ns",
            "range": "± 11980.491150180836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7141.854166666667,
            "unit": "ns",
            "range": "± 746.883926431279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27793.50704225352,
            "unit": "ns",
            "range": "± 1350.879838932913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760826.3680245536,
            "unit": "ns",
            "range": "± 14626.278850936378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203358.1399739583,
            "unit": "ns",
            "range": "± 6604.4180584608785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782466.2636021206,
            "unit": "ns",
            "range": "± 6251.69361341825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946165.494140625,
            "unit": "ns",
            "range": "± 4860.530287304786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616066.5441894531,
            "unit": "ns",
            "range": "± 3470.41859911865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589833.2275390625,
            "unit": "ns",
            "range": "± 7744.696941887582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42503.22631578947,
            "unit": "ns",
            "range": "± 6217.16981592467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2536563.9444444445,
            "unit": "ns",
            "range": "± 53140.23399234744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2627173.3775510206,
            "unit": "ns",
            "range": "± 94988.02626112776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3214048.210526316,
            "unit": "ns",
            "range": "± 106588.07600211601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3126673.5454545454,
            "unit": "ns",
            "range": "± 85326.60788372629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7063195.462962963,
            "unit": "ns",
            "range": "± 195092.47904253026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5719190.066666666,
            "unit": "ns",
            "range": "± 74132.16342015374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14759353.285714285,
            "unit": "ns",
            "range": "± 38400.39410941302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37437072.4,
            "unit": "ns",
            "range": "± 132259.43424724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75336112.46153846,
            "unit": "ns",
            "range": "± 350740.0616010893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151081909.26923078,
            "unit": "ns",
            "range": "± 363870.6214032111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1049402.5222222223,
            "unit": "ns",
            "range": "± 91131.39951163341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2015415.6818181819,
            "unit": "ns",
            "range": "± 75688.2285962351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594646.1979166667,
            "unit": "ns",
            "range": "± 133873.8902547838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6100379.02,
            "unit": "ns",
            "range": "± 243290.8494156896"
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
          "id": "a00f6ec71287403ef187b3abf4e88cf75d8ce188",
          "message": "Changelog",
          "timestamp": "2023-12-05T12:22:22+09:00",
          "tree_id": "7cef5086b6450859deb782f56a7fce91ad1f9bbf",
          "url": "https://github.com/greymistcube/libplanet/commit/a00f6ec71287403ef187b3abf4e88cf75d8ce188"
        },
        "date": 1701747188551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198279.29166666666,
            "unit": "ns",
            "range": "± 9694.868833690573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191510.24324324325,
            "unit": "ns",
            "range": "± 9592.004188793417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170312.40740740742,
            "unit": "ns",
            "range": "± 4770.41168405072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3053949.5714285714,
            "unit": "ns",
            "range": "± 19579.33929000075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795944.769230769,
            "unit": "ns",
            "range": "± 11971.369589941427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14327.242424242424,
            "unit": "ns",
            "range": "± 3047.3303843270824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61962.19587628866,
            "unit": "ns",
            "range": "± 7525.345561887251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61410.69565217391,
            "unit": "ns",
            "range": "± 9222.63342733115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64835.163265306124,
            "unit": "ns",
            "range": "± 13129.774340829737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3429.6021505376343,
            "unit": "ns",
            "range": "± 415.684117627194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12529.466666666667,
            "unit": "ns",
            "range": "± 1921.8321501845953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3699050.0903645833,
            "unit": "ns",
            "range": "± 43416.9844398942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207979.8678850445,
            "unit": "ns",
            "range": "± 5602.697134265455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762460.1189778646,
            "unit": "ns",
            "range": "± 2527.2857510171357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918832.0814302885,
            "unit": "ns",
            "range": "± 10860.276648927857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615070.9145507812,
            "unit": "ns",
            "range": "± 2162.7970038814847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570823.5691964285,
            "unit": "ns",
            "range": "± 2375.8972054594824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40455.78125,
            "unit": "ns",
            "range": "± 4684.613502460391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2362521.52,
            "unit": "ns",
            "range": "± 60778.74116218598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502658.6829268294,
            "unit": "ns",
            "range": "± 80426.615716577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121045.4545454546,
            "unit": "ns",
            "range": "± 76332.11689198801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2940306.6415094337,
            "unit": "ns",
            "range": "± 119283.75819578841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7008131.403225807,
            "unit": "ns",
            "range": "± 211235.6458615756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5589058.153846154,
            "unit": "ns",
            "range": "± 92485.72511640753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14648256.333333334,
            "unit": "ns",
            "range": "± 94703.28007343077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36253439.615384616,
            "unit": "ns",
            "range": "± 497552.1793819784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73326023.92857143,
            "unit": "ns",
            "range": "± 623861.6515915472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149102563.42857143,
            "unit": "ns",
            "range": "± 744438.2375597274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979527,
            "unit": "ns",
            "range": "± 66021.7902852727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2008377.543478261,
            "unit": "ns",
            "range": "± 74598.91073041708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515339.6304347827,
            "unit": "ns",
            "range": "± 126836.78430403063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5770720.045454546,
            "unit": "ns",
            "range": "± 138832.35274165584"
          }
        ]
      }
    ]
  }
}