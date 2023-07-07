window.BENCHMARK_DATA = {
  "lastUpdate": 1688714646808,
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
          "id": "821b18baccee3a44b79a453ff19634129082eb18",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:04:01+09:00",
          "tree_id": "a4935ead63aa78ea06f2e84ff0b0ba87af8b14b7",
          "url": "https://github.com/greymistcube/libplanet/commit/821b18baccee3a44b79a453ff19634129082eb18"
        },
        "date": 1688714632119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8808780.826530613,
            "unit": "ns",
            "range": "± 589388.507891136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22411618.15,
            "unit": "ns",
            "range": "± 1587750.689339777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55888202.06521739,
            "unit": "ns",
            "range": "± 2001491.273597125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109681022.5,
            "unit": "ns",
            "range": "± 3343350.851085663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220592676.22727272,
            "unit": "ns",
            "range": "± 5338915.319548701"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73454.63440860216,
            "unit": "ns",
            "range": "± 17381.007636888768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395790.60204081633,
            "unit": "ns",
            "range": "± 57948.79445095797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357952.35714285716,
            "unit": "ns",
            "range": "± 39336.37732338649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 351436.9895833333,
            "unit": "ns",
            "range": "± 59113.15815246031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4490492.510204081,
            "unit": "ns",
            "range": "± 273696.6115232883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4150907.705882353,
            "unit": "ns",
            "range": "± 222064.64734556488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23678.244444444445,
            "unit": "ns",
            "range": "± 4824.318661939225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133821.28125,
            "unit": "ns",
            "range": "± 26259.736883759448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136661.193877551,
            "unit": "ns",
            "range": "± 23627.67269719418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146144.375,
            "unit": "ns",
            "range": "± 28869.714275745057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8479.54347826087,
            "unit": "ns",
            "range": "± 887.1758552219891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25175.64457831325,
            "unit": "ns",
            "range": "± 3082.7376538163007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1826791.3775510204,
            "unit": "ns",
            "range": "± 236687.17400859634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945669.7422680412,
            "unit": "ns",
            "range": "± 206390.6983890665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2136489.0833333335,
            "unit": "ns",
            "range": "± 211171.154950554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6237404.608108108,
            "unit": "ns",
            "range": "± 310267.71619682736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425933.5,
            "unit": "ns",
            "range": "± 185360.8228119035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626656.7684210525,
            "unit": "ns",
            "range": "± 218240.23590224874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4721263.408163265,
            "unit": "ns",
            "range": "± 286095.4061792009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4142544.7021276597,
            "unit": "ns",
            "range": "± 314765.38652025204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7948046.232323232,
            "unit": "ns",
            "range": "± 725463.0012639053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8189733.947916667,
            "unit": "ns",
            "range": "± 421641.3013021822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2367336.43116714,
            "unit": "ns",
            "range": "± 74105.91927212574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352855.0201704546,
            "unit": "ns",
            "range": "± 57630.00004498145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3293025.9167455807,
            "unit": "ns",
            "range": "± 254362.43680444732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790001.4344401042,
            "unit": "ns",
            "range": "± 4536.209211401749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784682.1815755208,
            "unit": "ns",
            "range": "± 5062.305945479012"
          }
        ]
      }
    ]
  }
}