window.BENCHMARK_DATA = {
  "lastUpdate": 1689327409934,
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
          "id": "0ee43d09d85c3cd2c092779fe5b704aa29c47f1a",
          "message": "Removed ExtractableException",
          "timestamp": "2023-07-14T17:03:42+09:00",
          "tree_id": "0a1ba4efd74af218d73d91db6b8377c76ab76028",
          "url": "https://github.com/greymistcube/libplanet/commit/0ee43d09d85c3cd2c092779fe5b704aa29c47f1a"
        },
        "date": 1689322890954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8727805.826530613,
            "unit": "ns",
            "range": "± 345645.49793221353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21790893.173913043,
            "unit": "ns",
            "range": "± 1161290.1193476575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51221327.57692308,
            "unit": "ns",
            "range": "± 1399649.5812529698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103031123.94444445,
            "unit": "ns",
            "range": "± 2156142.519004837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209584340.16666666,
            "unit": "ns",
            "range": "± 4420436.628264186"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70431.34042553192,
            "unit": "ns",
            "range": "± 9117.224758491086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359572.8461538461,
            "unit": "ns",
            "range": "± 36082.41496103764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340333.8695652174,
            "unit": "ns",
            "range": "± 31550.13686172833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333554.4888888889,
            "unit": "ns",
            "range": "± 32291.65236454244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4465363.170103093,
            "unit": "ns",
            "range": "± 303262.25618306705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3957868.840909091,
            "unit": "ns",
            "range": "± 211731.39627290884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17316.75,
            "unit": "ns",
            "range": "± 1945.2577592699638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88163.09574468085,
            "unit": "ns",
            "range": "± 8320.995604550542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97503.74226804124,
            "unit": "ns",
            "range": "± 15170.18126902133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129849.74468085106,
            "unit": "ns",
            "range": "± 25765.059135412743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7088.063829787234,
            "unit": "ns",
            "range": "± 1383.674442787712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19825.043010752688,
            "unit": "ns",
            "range": "± 4189.970843817772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640319.616161616,
            "unit": "ns",
            "range": "± 158756.03220567052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110781.647368421,
            "unit": "ns",
            "range": "± 265238.34097419627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291328.791208791,
            "unit": "ns",
            "range": "± 223592.28943997927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6368215.939560439,
            "unit": "ns",
            "range": "± 775191.9861544868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3462478.2352941176,
            "unit": "ns",
            "range": "± 278702.34051350533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3705308.264367816,
            "unit": "ns",
            "range": "± 322926.3824194286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4657273.611111111,
            "unit": "ns",
            "range": "± 265709.4956562162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4297832.161290322,
            "unit": "ns",
            "range": "± 411841.13851457887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8149933.833333333,
            "unit": "ns",
            "range": "± 1029239.5414652168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7463672.1609375,
            "unit": "ns",
            "range": "± 165074.46935659202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2050008.5712139423,
            "unit": "ns",
            "range": "± 28258.107780401613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402658.6671006945,
            "unit": "ns",
            "range": "± 44846.49395277486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2743642.6944754464,
            "unit": "ns",
            "range": "± 36557.92788133803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806222.146484375,
            "unit": "ns",
            "range": "± 5254.242896077756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738275.3895670573,
            "unit": "ns",
            "range": "± 6293.2659608182175"
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
          "id": "18521af1592775aa4ddc17220d920178c411c073",
          "message": "Changelog",
          "timestamp": "2023-07-14T17:16:58+09:00",
          "tree_id": "dddb239702524e76d9542f81534dc6cf32f15203",
          "url": "https://github.com/greymistcube/libplanet/commit/18521af1592775aa4ddc17220d920178c411c073"
        },
        "date": 1689323690609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8925903.977777777,
            "unit": "ns",
            "range": "± 338790.58882687194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21563139.884615384,
            "unit": "ns",
            "range": "± 337726.1134490833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54099077.1,
            "unit": "ns",
            "range": "± 778224.2846156517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108781912.56666666,
            "unit": "ns",
            "range": "± 1012783.8360550352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221186211.65,
            "unit": "ns",
            "range": "± 4786423.487817735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73889.3440860215,
            "unit": "ns",
            "range": "± 7755.915072990957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346709.54347826086,
            "unit": "ns",
            "range": "± 23468.78735889415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381304.75274725276,
            "unit": "ns",
            "range": "± 67437.61784586031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325096.9888888889,
            "unit": "ns",
            "range": "± 21778.354058299243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4328279.72,
            "unit": "ns",
            "range": "± 113876.19231374339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3877403.34375,
            "unit": "ns",
            "range": "± 113092.49781087971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20556.18085106383,
            "unit": "ns",
            "range": "± 3574.110089142023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109312.09793814433,
            "unit": "ns",
            "range": "± 17118.107932865878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112820.63636363637,
            "unit": "ns",
            "range": "± 10811.809263227391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113820.06521739131,
            "unit": "ns",
            "range": "± 14290.225936820256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6271.282608695652,
            "unit": "ns",
            "range": "± 1562.6949132131106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19041.75773195876,
            "unit": "ns",
            "range": "± 4088.3666213781476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740448.7840909092,
            "unit": "ns",
            "range": "± 192271.30124081933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3215960.2,
            "unit": "ns",
            "range": "± 301696.15472401556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2239985.097826087,
            "unit": "ns",
            "range": "± 238188.30460456474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6504456.987654321,
            "unit": "ns",
            "range": "± 998234.9221288731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3459771.0421686745,
            "unit": "ns",
            "range": "± 183764.37173425482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3671141.5576923075,
            "unit": "ns",
            "range": "± 140577.56831496817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4669869.416666667,
            "unit": "ns",
            "range": "± 208289.79747411175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3944179.95,
            "unit": "ns",
            "range": "± 195177.4999768484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7493310.403508772,
            "unit": "ns",
            "range": "± 324017.7745814406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6706111.954927885,
            "unit": "ns",
            "range": "± 52502.53729897337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955465.4311197917,
            "unit": "ns",
            "range": "± 11777.814569966542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290562.9739118305,
            "unit": "ns",
            "range": "± 14616.353797482949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2935708.094308036,
            "unit": "ns",
            "range": "± 50977.81658773914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785171.6076531662,
            "unit": "ns",
            "range": "± 26661.38789086092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730447.5803385417,
            "unit": "ns",
            "range": "± 8767.467325250118"
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
          "id": "a0dd018c89f67acd0fff170b47e45c08d2b0f501",
          "message": "Changelog",
          "timestamp": "2023-07-14T17:54:28+09:00",
          "tree_id": "0cba744ac764cd3dcfd16840c1f92f94633eccac",
          "url": "https://github.com/greymistcube/libplanet/commit/a0dd018c89f67acd0fff170b47e45c08d2b0f501"
        },
        "date": 1689325773507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604723.366666666,
            "unit": "ns",
            "range": "± 38188.038239118556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19097724.166666668,
            "unit": "ns",
            "range": "± 287416.26647317817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47316311.428571425,
            "unit": "ns",
            "range": "± 573236.3075617532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93751225.64285715,
            "unit": "ns",
            "range": "± 731064.8325060988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199832811.47368422,
            "unit": "ns",
            "range": "± 4418732.14566283"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56922.752808988764,
            "unit": "ns",
            "range": "± 6865.474500718827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320505.7604166667,
            "unit": "ns",
            "range": "± 26642.501219606474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307373.3645833333,
            "unit": "ns",
            "range": "± 22442.582679558916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285960.9482758621,
            "unit": "ns",
            "range": "± 12541.44793981549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4139086.1,
            "unit": "ns",
            "range": "± 63135.199821833594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3747962.033333333,
            "unit": "ns",
            "range": "± 67665.22451416518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18883.738636363636,
            "unit": "ns",
            "range": "± 2321.2835579030893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90642,
            "unit": "ns",
            "range": "± 9827.495902996056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95493.92857142857,
            "unit": "ns",
            "range": "± 14149.322207365096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105087.23655913978,
            "unit": "ns",
            "range": "± 12172.687051433106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6047.129032258064,
            "unit": "ns",
            "range": "± 1063.5073764160945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18052.431034482757,
            "unit": "ns",
            "range": "± 2187.1763350881993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1594060.0315789473,
            "unit": "ns",
            "range": "± 160725.19356894735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2870450.0476190476,
            "unit": "ns",
            "range": "± 131855.60843888295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2089371,
            "unit": "ns",
            "range": "± 185818.54829329596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5874172.3965517245,
            "unit": "ns",
            "range": "± 255754.3538305087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3176477.380952381,
            "unit": "ns",
            "range": "± 71880.21368532247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3322043.5272727273,
            "unit": "ns",
            "range": "± 139676.6368095934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253985.425531914,
            "unit": "ns",
            "range": "± 144907.57283159986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4093264.9615384615,
            "unit": "ns",
            "range": "± 107481.69206054797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6993324.775,
            "unit": "ns",
            "range": "± 237214.42210182315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6427954.054427084,
            "unit": "ns",
            "range": "± 93330.43409793806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977635.7667410714,
            "unit": "ns",
            "range": "± 15547.474712040454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261109.4487680288,
            "unit": "ns",
            "range": "± 11513.668426232078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2486948.5011160714,
            "unit": "ns",
            "range": "± 25729.730936628705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789021.552734375,
            "unit": "ns",
            "range": "± 5724.2798584019365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740441.8875558035,
            "unit": "ns",
            "range": "± 5363.015654697595"
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
          "id": "6bae21f351c93f6699893ff8956ea9f5645bd158",
          "message": "Fix tests",
          "timestamp": "2023-07-14T18:19:25+09:00",
          "tree_id": "948d990eac0e6dab1817ab41c82024d73f5921e1",
          "url": "https://github.com/greymistcube/libplanet/commit/6bae21f351c93f6699893ff8956ea9f5645bd158"
        },
        "date": 1689327393254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9396126.06122449,
            "unit": "ns",
            "range": "± 572891.739501422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22320893.964285713,
            "unit": "ns",
            "range": "± 630794.3610541706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54898264.87037037,
            "unit": "ns",
            "range": "± 2286114.739209425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115822388.93589744,
            "unit": "ns",
            "range": "± 3975311.5793584283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225046216.2631579,
            "unit": "ns",
            "range": "± 4912761.666855719"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76742.1404494382,
            "unit": "ns",
            "range": "± 9439.916134121868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363985.5319148936,
            "unit": "ns",
            "range": "± 45510.35627276762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 386211.78571428574,
            "unit": "ns",
            "range": "± 63017.26917237289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319098.02173913043,
            "unit": "ns",
            "range": "± 32220.158557013387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168115.9375,
            "unit": "ns",
            "range": "± 113549.06690656162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3862916.3157894737,
            "unit": "ns",
            "range": "± 130555.26306927184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20467.505263157895,
            "unit": "ns",
            "range": "± 4252.509634180949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108028.5612244898,
            "unit": "ns",
            "range": "± 19174.071420178603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120039.29032258065,
            "unit": "ns",
            "range": "± 18165.715328117087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121248.88541666667,
            "unit": "ns",
            "range": "± 24170.623076640954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7431.4315789473685,
            "unit": "ns",
            "range": "± 974.0737187864472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20097.027472527472,
            "unit": "ns",
            "range": "± 2119.6646922497453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605395.1391752576,
            "unit": "ns",
            "range": "± 137118.76916208336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196046.157303371,
            "unit": "ns",
            "range": "± 217248.21038147187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103732.0833333335,
            "unit": "ns",
            "range": "± 142715.79196465344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5937581.611111111,
            "unit": "ns",
            "range": "± 228923.7385624565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3596679.9680851065,
            "unit": "ns",
            "range": "± 271509.9622126588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3438720.9857142856,
            "unit": "ns",
            "range": "± 154252.88074530225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4376077.366666666,
            "unit": "ns",
            "range": "± 78159.66735093953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3808420.7297297297,
            "unit": "ns",
            "range": "± 129138.54530087029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7525680.381443299,
            "unit": "ns",
            "range": "± 586833.3224219464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6933616.503024193,
            "unit": "ns",
            "range": "± 204513.4160044236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2157417.1520647323,
            "unit": "ns",
            "range": "± 36635.742984021526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390067.4291294643,
            "unit": "ns",
            "range": "± 24328.974055449267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2890762.6122395834,
            "unit": "ns",
            "range": "± 84954.33608599527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941351.5430536685,
            "unit": "ns",
            "range": "± 23081.41426782626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894617.493046875,
            "unit": "ns",
            "range": "± 22942.808494038258"
          }
        ]
      }
    ]
  }
}