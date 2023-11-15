window.BENCHMARK_DATA = {
  "lastUpdate": 1700049378072,
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
          "id": "940516c5d078a4221f7e79310c434d6ce092693c",
          "message": "Cleanup",
          "timestamp": "2023-11-15T20:41:24+09:00",
          "tree_id": "bc7fab57fc5bef2010e0d6fbf18063c358077a44",
          "url": "https://github.com/greymistcube/libplanet/commit/940516c5d078a4221f7e79310c434d6ce092693c"
        },
        "date": 1700049177979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953879,
            "unit": "ns",
            "range": "± 92001.40786691771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729021.7391304348,
            "unit": "ns",
            "range": "± 71761.04725276309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1371912,
            "unit": "ns",
            "range": "± 125090.69459695024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549709.090909091,
            "unit": "ns",
            "range": "± 308447.57584205817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34004.109589041094,
            "unit": "ns",
            "range": "± 1704.4417753626021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4907146.666666667,
            "unit": "ns",
            "range": "± 38874.13511516855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12724823.076923076,
            "unit": "ns",
            "range": "± 95744.41806049892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32015128.57142857,
            "unit": "ns",
            "range": "± 179694.5717624189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62864020,
            "unit": "ns",
            "range": "± 648617.1336004006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 124511350,
            "unit": "ns",
            "range": "± 725052.1941424418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3220382.4544270835,
            "unit": "ns",
            "range": "± 4529.310531183882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054076.8833705357,
            "unit": "ns",
            "range": "± 1892.9488050764016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735494.1824776785,
            "unit": "ns",
            "range": "± 1983.3395439166018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912358.2421875,
            "unit": "ns",
            "range": "± 3616.7920211889614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604806.8498883928,
            "unit": "ns",
            "range": "± 1260.2813877498818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548088.3928571428,
            "unit": "ns",
            "range": "± 961.5872286911354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097769.7674418604,
            "unit": "ns",
            "range": "± 75965.26629505068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2225160,
            "unit": "ns",
            "range": "± 78058.67221322886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2743000,
            "unit": "ns",
            "range": "± 49609.05735275133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2819966.6666666665,
            "unit": "ns",
            "range": "± 59480.15981623373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6192170.588235294,
            "unit": "ns",
            "range": "± 197868.00854535354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169196.7213114754,
            "unit": "ns",
            "range": "± 6996.283947285034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162498.14814814815,
            "unit": "ns",
            "range": "± 5541.5579425345895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138462.7906976744,
            "unit": "ns",
            "range": "± 4579.718397238705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2713850,
            "unit": "ns",
            "range": "± 49337.24759246304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2514086.6666666665,
            "unit": "ns",
            "range": "± 46549.34197274155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11428.865979381444,
            "unit": "ns",
            "range": "± 2107.4253032870956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52668.68686868687,
            "unit": "ns",
            "range": "± 5812.559351720616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43340.57971014493,
            "unit": "ns",
            "range": "± 1795.7727191919448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52981.05263157895,
            "unit": "ns",
            "range": "± 9245.450804709677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2315.7894736842104,
            "unit": "ns",
            "range": "± 420.8188040540308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9762.35294117647,
            "unit": "ns",
            "range": "± 801.0374925218982"
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
          "id": "792befc69c0157a5a6eb4cca987b6fefeebbf8b3",
          "message": "Cleanup",
          "timestamp": "2023-11-15T20:42:41+09:00",
          "tree_id": "1d836628c15c8b224767dd18173fc31e3b974e69",
          "url": "https://github.com/greymistcube/libplanet/commit/792befc69c0157a5a6eb4cca987b6fefeebbf8b3"
        },
        "date": 1700049356509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008134.7368421053,
            "unit": "ns",
            "range": "± 102388.22527093698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814012,
            "unit": "ns",
            "range": "± 90622.92228373152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1454936.559139785,
            "unit": "ns",
            "range": "± 93643.01987142708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5638258.695652174,
            "unit": "ns",
            "range": "± 336378.55642156804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35206.666666666664,
            "unit": "ns",
            "range": "± 2335.6446551340337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5281046.666666667,
            "unit": "ns",
            "range": "± 82450.55545742609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12878721.42857143,
            "unit": "ns",
            "range": "± 135818.82263669343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33393466.666666668,
            "unit": "ns",
            "range": "± 479084.7489397535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67133940,
            "unit": "ns",
            "range": "± 877199.4795125809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131968233.33333333,
            "unit": "ns",
            "range": "± 1203525.106668304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294843.4709821427,
            "unit": "ns",
            "range": "± 13389.911832177695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075908.3203125,
            "unit": "ns",
            "range": "± 3911.4031347470523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734493.1640625,
            "unit": "ns",
            "range": "± 2319.197101401477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1889806.5885416667,
            "unit": "ns",
            "range": "± 14106.039849872968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 596266.6015625,
            "unit": "ns",
            "range": "± 935.9999528107808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 547232.5911458334,
            "unit": "ns",
            "range": "± 1558.9586968378212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196121.875,
            "unit": "ns",
            "range": "± 62415.36584163519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278200,
            "unit": "ns",
            "range": "± 37705.8350921976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2689705.5555555555,
            "unit": "ns",
            "range": "± 74186.97445972022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3123423.076923077,
            "unit": "ns",
            "range": "± 50216.50050607791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6304214.705882353,
            "unit": "ns",
            "range": "± 193947.49856965424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 162961.01694915254,
            "unit": "ns",
            "range": "± 5808.199226811049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156452.85714285713,
            "unit": "ns",
            "range": "± 7433.038691019617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137715.625,
            "unit": "ns",
            "range": "± 4202.77246243093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731460,
            "unit": "ns",
            "range": "± 49954.247638642875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2573792.8571428573,
            "unit": "ns",
            "range": "± 24329.325903137946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9553.763440860215,
            "unit": "ns",
            "range": "± 1321.441829460874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48569.04761904762,
            "unit": "ns",
            "range": "± 2659.829516707052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44860.215053763444,
            "unit": "ns",
            "range": "± 2577.7534786568403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49191.666666666664,
            "unit": "ns",
            "range": "± 7727.172379496665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2221.1111111111113,
            "unit": "ns",
            "range": "± 436.6610915388731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11503.092783505155,
            "unit": "ns",
            "range": "± 1808.513063739992"
          }
        ]
      }
    ]
  }
}