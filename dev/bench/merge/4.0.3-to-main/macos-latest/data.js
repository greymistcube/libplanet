window.BENCHMARK_DATA = {
  "lastUpdate": 1707241614208,
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
          "id": "94b7570a20c8644514310375f106cb11e0f810b6",
          "message": "Merge 4.0.3 to main",
          "timestamp": "2024-02-06T22:58:51+09:00",
          "tree_id": "36cb7e1ba8c8877a0e4aa31a7d106fe92dffd071",
          "url": "https://github.com/greymistcube/libplanet/commit/94b7570a20c8644514310375f106cb11e0f810b6"
        },
        "date": 1707229512152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 15145285.541237114,
            "unit": "ns",
            "range": "± 2316219.391023103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 37976640.40449438,
            "unit": "ns",
            "range": "± 7952379.988577921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68002936.91935484,
            "unit": "ns",
            "range": "± 14160912.607973084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126939042.8045977,
            "unit": "ns",
            "range": "± 10380318.303469878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265441647.45833334,
            "unit": "ns",
            "range": "± 6800166.679889743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75580.45263157894,
            "unit": "ns",
            "range": "± 16604.66299847561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393220.10101010103,
            "unit": "ns",
            "range": "± 97724.32865938997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 401090.3787878788,
            "unit": "ns",
            "range": "± 99957.0053696836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265072.5119047619,
            "unit": "ns",
            "range": "± 17251.700758827978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4948133.35,
            "unit": "ns",
            "range": "± 101419.33128731321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4548049.682926829,
            "unit": "ns",
            "range": "± 323663.7900891312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22244.005494505494,
            "unit": "ns",
            "range": "± 3806.2304839817175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90670.17741935483,
            "unit": "ns",
            "range": "± 14592.313463632063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75855.10824742269,
            "unit": "ns",
            "range": "± 16326.273016698102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77416.96808510639,
            "unit": "ns",
            "range": "± 13989.026301902308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5350.010416666667,
            "unit": "ns",
            "range": "± 1690.8997479995928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15243.957894736843,
            "unit": "ns",
            "range": "± 3684.183459623819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383573.9285714286,
            "unit": "ns",
            "range": "± 198899.70569237723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2893378.2359550563,
            "unit": "ns",
            "range": "± 223266.99825407888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2301157.0301204817,
            "unit": "ns",
            "range": "± 284328.19721811084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 27283046.989361703,
            "unit": "ns",
            "range": "± 4661834.745665209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3908949.088235294,
            "unit": "ns",
            "range": "± 125882.19655287568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4264715.666666667,
            "unit": "ns",
            "range": "± 390644.10209174006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 7109578.479166667,
            "unit": "ns",
            "range": "± 1588476.1466877817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7069395.244897959,
            "unit": "ns",
            "range": "± 1353343.6320555946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34019688.889473684,
            "unit": "ns",
            "range": "± 6365674.368749921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6597861.266453599,
            "unit": "ns",
            "range": "± 1404828.8387481323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1629163.1341210937,
            "unit": "ns",
            "range": "± 215897.6885318495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 930380.6528320312,
            "unit": "ns",
            "range": "± 28845.084889190548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2142041.5955255684,
            "unit": "ns",
            "range": "± 59274.2425993673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 675942.291015625,
            "unit": "ns",
            "range": "± 28891.640289397004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 668484.1054292929,
            "unit": "ns",
            "range": "± 68782.22781836317"
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
          "id": "a6715fa1d331991a1ea4c0f27681e3d1c2a56d1d",
          "message": "Merge tag '4.0.3' into merge/4.0.3-to-main\n\nLibplanet 4.0.3",
          "timestamp": "2024-02-07T02:23:56+09:00",
          "tree_id": "982be82ca572f1d131b6b0bab59e583faeb5460d",
          "url": "https://github.com/greymistcube/libplanet/commit/a6715fa1d331991a1ea4c0f27681e3d1c2a56d1d"
        },
        "date": 1707241600144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7898030.75,
            "unit": "ns",
            "range": "± 154111.99567132987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20610117.410256412,
            "unit": "ns",
            "range": "± 706367.4605734133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56574904.703296706,
            "unit": "ns",
            "range": "± 3139191.6467148797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105595410.5,
            "unit": "ns",
            "range": "± 2777920.1871873047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221526866.43137255,
            "unit": "ns",
            "range": "± 8923864.788722014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69759.38043478261,
            "unit": "ns",
            "range": "± 10876.638841115047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320997.3777777778,
            "unit": "ns",
            "range": "± 22605.626471031836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303783.8736842105,
            "unit": "ns",
            "range": "± 29073.12187316594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298345.1728395062,
            "unit": "ns",
            "range": "± 15631.89623157578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4817176.9948453605,
            "unit": "ns",
            "range": "± 403373.40091931063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4524918.95959596,
            "unit": "ns",
            "range": "± 486912.9359192552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24689.408045977012,
            "unit": "ns",
            "range": "± 5611.714865852699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93540.41304347826,
            "unit": "ns",
            "range": "± 19402.755529723134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91313.41836734694,
            "unit": "ns",
            "range": "± 13343.371093453008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101870.13917525773,
            "unit": "ns",
            "range": "± 18421.083722862215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7251.239583333333,
            "unit": "ns",
            "range": "± 1205.0792613791593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23424.080459770114,
            "unit": "ns",
            "range": "± 2572.8405585971664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1459639.8548387096,
            "unit": "ns",
            "range": "± 169488.4267039471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2900832.355555556,
            "unit": "ns",
            "range": "± 247900.16892527754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2611296.337078652,
            "unit": "ns",
            "range": "± 202234.8437263506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 32484790.142105263,
            "unit": "ns",
            "range": "± 8056175.852651894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445425.3085106383,
            "unit": "ns",
            "range": "± 298956.2003732544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202357.510416667,
            "unit": "ns",
            "range": "± 820042.7845819546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4700891.510638298,
            "unit": "ns",
            "range": "± 378130.7669727681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4548743.619565218,
            "unit": "ns",
            "range": "± 259461.2510063858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32274390.843434345,
            "unit": "ns",
            "range": "± 4486378.057701196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5812262.387088816,
            "unit": "ns",
            "range": "± 332772.24610696646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2051338.7387058423,
            "unit": "ns",
            "range": "± 78084.17250813385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197596.7764559658,
            "unit": "ns",
            "range": "± 44748.77454321518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2961814.3976924936,
            "unit": "ns",
            "range": "± 171574.22887189093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802696.3185096154,
            "unit": "ns",
            "range": "± 8345.943141111227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741482.5645282452,
            "unit": "ns",
            "range": "± 6176.212834056563"
          }
        ]
      }
    ]
  }
}