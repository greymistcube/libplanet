window.BENCHMARK_DATA = {
  "lastUpdate": 1689323712373,
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
      }
    ]
  }
}