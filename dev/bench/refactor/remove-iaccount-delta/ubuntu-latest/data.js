window.BENCHMARK_DATA = {
  "lastUpdate": 1701747038729,
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
      }
    ]
  }
}