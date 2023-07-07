window.BENCHMARK_DATA = {
  "lastUpdate": 1688714330166,
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
          "id": "aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee",
          "message": "Removed IFeeCalculator",
          "timestamp": "2023-07-07T16:02:07+09:00",
          "tree_id": "76cc5bf139a9e106b2356c034b64eb761e2b55f5",
          "url": "https://github.com/greymistcube/libplanet/commit/aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee"
        },
        "date": 1688714316939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9029430.66,
            "unit": "ns",
            "range": "± 554323.4625604936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21366732.662162162,
            "unit": "ns",
            "range": "± 713027.420271382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56270399.425925925,
            "unit": "ns",
            "range": "± 2248037.394097287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106383339.76315789,
            "unit": "ns",
            "range": "± 2358534.8084143456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219353196.03333333,
            "unit": "ns",
            "range": "± 3308061.029830009"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69049.69767441861,
            "unit": "ns",
            "range": "± 9859.673615669228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363813.7752808989,
            "unit": "ns",
            "range": "± 38158.26738870646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341443.07608695654,
            "unit": "ns",
            "range": "± 38382.8507285362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313121.597826087,
            "unit": "ns",
            "range": "± 21424.855684466464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4311016.509803922,
            "unit": "ns",
            "range": "± 175648.0512266928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867459.214285714,
            "unit": "ns",
            "range": "± 68146.64082293822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22902.063829787236,
            "unit": "ns",
            "range": "± 5066.318374011813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102884.52083333333,
            "unit": "ns",
            "range": "± 12296.293226633417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109481.13,
            "unit": "ns",
            "range": "± 14053.49029845568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116860.14285714286,
            "unit": "ns",
            "range": "± 18578.938797055718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6064.65625,
            "unit": "ns",
            "range": "± 1108.435624302866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17941.932584269663,
            "unit": "ns",
            "range": "± 2645.6393788035816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1748623.6666666667,
            "unit": "ns",
            "range": "± 25994.146057104765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905026.524590164,
            "unit": "ns",
            "range": "± 129079.18708291776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139854.551020408,
            "unit": "ns",
            "range": "± 184555.66627259678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5905182.121212121,
            "unit": "ns",
            "range": "± 268267.60590835504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444524.523255814,
            "unit": "ns",
            "range": "± 179119.78845756213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3801509.207070707,
            "unit": "ns",
            "range": "± 405844.64513020526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4618450.904040404,
            "unit": "ns",
            "range": "± 301138.26782772737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4271861.861702127,
            "unit": "ns",
            "range": "± 421917.3432312408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7904038.265957447,
            "unit": "ns",
            "range": "± 617655.7425802619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6495261.249441965,
            "unit": "ns",
            "range": "± 60971.693082138336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2205532.7559375,
            "unit": "ns",
            "range": "± 144514.16111170274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371979.3082217262,
            "unit": "ns",
            "range": "± 32658.251834943912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2820318.302408854,
            "unit": "ns",
            "range": "± 20507.750992550653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833822.5113389757,
            "unit": "ns",
            "range": "± 16833.280664170805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864028.8058182566,
            "unit": "ns",
            "range": "± 18588.411945096785"
          }
        ]
      }
    ]
  }
}