window.BENCHMARK_DATA = {
  "lastUpdate": 1699887888968,
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
          "id": "e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb",
          "message": "More cleanup",
          "timestamp": "2023-11-13T22:30:12+09:00",
          "tree_id": "7a0fd03c1f94e4318c5ac397ab25ec869b9f15b8",
          "url": "https://github.com/greymistcube/libplanet/commit/e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb"
        },
        "date": 1699883491152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622901.0416666667,
            "unit": "ns",
            "range": "± 200723.0411837699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196439.175257732,
            "unit": "ns",
            "range": "± 421637.04784563155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2618494.736842105,
            "unit": "ns",
            "range": "± 312016.198559456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11606416.279069768,
            "unit": "ns",
            "range": "± 845697.4833703438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64853.76344086022,
            "unit": "ns",
            "range": "± 14274.312281764913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9111971.05263158,
            "unit": "ns",
            "range": "± 759750.9951677948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25331090.69767442,
            "unit": "ns",
            "range": "± 1377173.0330540428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67288127.4509804,
            "unit": "ns",
            "range": "± 2700811.93066666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130532875,
            "unit": "ns",
            "range": "± 2532024.0545197567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262670334.4827586,
            "unit": "ns",
            "range": "± 7562566.505269598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132026.110197368,
            "unit": "ns",
            "range": "± 208957.08963641463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854030.37109375,
            "unit": "ns",
            "range": "± 41658.379711366106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356832.0182291667,
            "unit": "ns",
            "range": "± 19193.2491500613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203056.9921875,
            "unit": "ns",
            "range": "± 51943.68951262154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044005.6353400735,
            "unit": "ns",
            "range": "± 19373.49935084601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1010770.263671875,
            "unit": "ns",
            "range": "± 31237.27823987844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783359.793814433,
            "unit": "ns",
            "range": "± 419446.794316582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033019.587628866,
            "unit": "ns",
            "range": "± 356893.9731206289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5223066.666666667,
            "unit": "ns",
            "range": "± 311476.3248499458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5284006.060606061,
            "unit": "ns",
            "range": "± 445951.4876650254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13935254.945054945,
            "unit": "ns",
            "range": "± 1115302.0458117798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343784.44444444444,
            "unit": "ns",
            "range": "± 13092.224541090924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334298.4375,
            "unit": "ns",
            "range": "± 15397.221891116777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275917.7083333333,
            "unit": "ns",
            "range": "± 32302.28929410965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4806624.468085106,
            "unit": "ns",
            "range": "± 374807.9366754062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4407720.652173913,
            "unit": "ns",
            "range": "± 331989.7372099879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30472.448979591838,
            "unit": "ns",
            "range": "± 8787.300825415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113705.10204081633,
            "unit": "ns",
            "range": "± 21175.29864417248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127656.04395604396,
            "unit": "ns",
            "range": "± 16533.092799266495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128160.21505376344,
            "unit": "ns",
            "range": "± 15184.661452647213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9171.91011235955,
            "unit": "ns",
            "range": "± 1170.177605405279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33346.23655913978,
            "unit": "ns",
            "range": "± 3513.655322600697"
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
          "id": "4e657671079e61ee97e92a87749c25254b73e619",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:35:58+09:00",
          "tree_id": "ffc87d30a0b081f79f43c2ec82fa9d3e084c909c",
          "url": "https://github.com/greymistcube/libplanet/commit/4e657671079e61ee97e92a87749c25254b73e619"
        },
        "date": 1699883782149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569952.688172043,
            "unit": "ns",
            "range": "± 103021.70369835947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3106681.318681319,
            "unit": "ns",
            "range": "± 190817.9574079779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350848.9583333335,
            "unit": "ns",
            "range": "± 177125.9694441645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10795697.701149425,
            "unit": "ns",
            "range": "± 981991.9894971212"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60022.47191011236,
            "unit": "ns",
            "range": "± 5336.127997157012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9654072.222222222,
            "unit": "ns",
            "range": "± 405044.74545117863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26356800,
            "unit": "ns",
            "range": "± 1023052.18193234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66210939.13043478,
            "unit": "ns",
            "range": "± 1642585.2328069839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135832490,
            "unit": "ns",
            "range": "± 2379379.6699980437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268444766.6666667,
            "unit": "ns",
            "range": "± 5638961.916565015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900819.270833333,
            "unit": "ns",
            "range": "± 103960.85714050564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873021.09375,
            "unit": "ns",
            "range": "± 31318.40471184536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399408.3608774038,
            "unit": "ns",
            "range": "± 37178.01430417414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3448474.1666666665,
            "unit": "ns",
            "range": "± 59253.25546047222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1074159.970703125,
            "unit": "ns",
            "range": "± 24644.385948717885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 995228.4886853448,
            "unit": "ns",
            "range": "± 28298.46354683129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4037805.4054054054,
            "unit": "ns",
            "range": "± 117243.89334001802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4213113.1147540985,
            "unit": "ns",
            "range": "± 184707.70736076485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5179259.677419355,
            "unit": "ns",
            "range": "± 233974.029285778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5179718.947368421,
            "unit": "ns",
            "range": "± 476086.2880610313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13454382.417582417,
            "unit": "ns",
            "range": "± 1326655.7871910194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303242.22222222225,
            "unit": "ns",
            "range": "± 11514.920930705694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296752,
            "unit": "ns",
            "range": "± 11960.397918436784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274414.28571428574,
            "unit": "ns",
            "range": "± 15296.968264830717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5090620.689655173,
            "unit": "ns",
            "range": "± 138867.1368593282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4603865.7894736845,
            "unit": "ns",
            "range": "± 155501.20756690376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26021.505376344085,
            "unit": "ns",
            "range": "± 3247.335009778272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103884.0425531915,
            "unit": "ns",
            "range": "± 8796.655072883557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88927.08333333333,
            "unit": "ns",
            "range": "± 7297.216183935331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102162.5,
            "unit": "ns",
            "range": "± 12323.928372329814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6893.684210526316,
            "unit": "ns",
            "range": "± 1097.658099533477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25738.297872340427,
            "unit": "ns",
            "range": "± 3251.4713421484475"
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
          "id": "fdbad5642027d694244a1449b94edb94f098dc46",
          "message": "Changelog",
          "timestamp": "2023-11-13T23:53:14+09:00",
          "tree_id": "ba2912dd11fe2a26c28195cddb7aeebcd4aaf042",
          "url": "https://github.com/greymistcube/libplanet/commit/fdbad5642027d694244a1449b94edb94f098dc46"
        },
        "date": 1699887864134,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986617.3469387755,
            "unit": "ns",
            "range": "± 104333.63023020148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702084.4827586208,
            "unit": "ns",
            "range": "± 63849.02368217046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1460946.4646464647,
            "unit": "ns",
            "range": "± 166168.61261684287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5541568.055555556,
            "unit": "ns",
            "range": "± 272262.16851005884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34252.45901639344,
            "unit": "ns",
            "range": "± 1535.8609482824336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4852178.571428572,
            "unit": "ns",
            "range": "± 38290.85407110301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13119385.714285715,
            "unit": "ns",
            "range": "± 139377.43365046225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31811700,
            "unit": "ns",
            "range": "± 332587.539496854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63800607.14285714,
            "unit": "ns",
            "range": "± 535355.264451396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126002586.66666667,
            "unit": "ns",
            "range": "± 1019570.3001521676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306987.8125,
            "unit": "ns",
            "range": "± 8578.714409039692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075492.857142857,
            "unit": "ns",
            "range": "± 1392.8169334543145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740661.015625,
            "unit": "ns",
            "range": "± 1704.8897564472845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968175.2604166667,
            "unit": "ns",
            "range": "± 3368.088680453389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623875.2213541666,
            "unit": "ns",
            "range": "± 2121.5057823799593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571056.8960336539,
            "unit": "ns",
            "range": "± 719.7338011486155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113407.8947368423,
            "unit": "ns",
            "range": "± 71561.3567075587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288848.3333333335,
            "unit": "ns",
            "range": "± 102004.45070327488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817914.285714286,
            "unit": "ns",
            "range": "± 41418.01646520615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2773943.75,
            "unit": "ns",
            "range": "± 51894.58505791653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6437555.813953488,
            "unit": "ns",
            "range": "± 198727.73346648543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173164.91228070174,
            "unit": "ns",
            "range": "± 6005.904571695322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168092.42424242425,
            "unit": "ns",
            "range": "± 7361.193686772038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137662.96296296295,
            "unit": "ns",
            "range": "± 3462.230067028625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2751500,
            "unit": "ns",
            "range": "± 40841.29562797229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2568915.3846153845,
            "unit": "ns",
            "range": "± 24964.202576016927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10522.35294117647,
            "unit": "ns",
            "range": "± 1011.0551384554648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54126.344086021505,
            "unit": "ns",
            "range": "± 3899.648753677315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44420.833333333336,
            "unit": "ns",
            "range": "± 1746.4807572547122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54343.68421052631,
            "unit": "ns",
            "range": "± 8907.023412421733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2305.1546391752577,
            "unit": "ns",
            "range": "± 414.6713392406436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10185.106382978724,
            "unit": "ns",
            "range": "± 1661.6941378953616"
          }
        ]
      }
    ]
  }
}