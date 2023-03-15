window.BENCHMARK_DATA = {
  "lastUpdate": 1678868748585,
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
          "id": "6699718613fe2592545afbc8a13afa8ae7494b7a",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:12:52+09:00",
          "tree_id": "b9aa048ef68261e6178dff40c5331176afa8c1db",
          "url": "https://github.com/greymistcube/libplanet/commit/6699718613fe2592545afbc8a13afa8ae7494b7a"
        },
        "date": 1678868708776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197731.125,
            "unit": "ns",
            "range": "± 7772.917666351056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200140,
            "unit": "ns",
            "range": "± 5051.158965678245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160608.33333333334,
            "unit": "ns",
            "range": "± 2212.5502904744985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11385914.2,
            "unit": "ns",
            "range": "± 109641.55621270093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9050598.666666666,
            "unit": "ns",
            "range": "± 95741.33523022679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17908.23711340206,
            "unit": "ns",
            "range": "± 1593.1344221193579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53009.267441860466,
            "unit": "ns",
            "range": "± 2852.9720661069086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37850,
            "unit": "ns",
            "range": "± 633.6706254344299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87585.05319148937,
            "unit": "ns",
            "range": "± 11556.74304154605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4615.789473684211,
            "unit": "ns",
            "range": "± 568.558421458536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17537.23404255319,
            "unit": "ns",
            "range": "± 1452.934297780651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271063.1764705884,
            "unit": "ns",
            "range": "± 66669.88975189184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5115003.933333334,
            "unit": "ns",
            "range": "± 82881.66861036338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23591748.2,
            "unit": "ns",
            "range": "± 251116.1484883041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6078732.714285715,
            "unit": "ns",
            "range": "± 65325.74715805585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27160253.066666666,
            "unit": "ns",
            "range": "± 301601.75647661765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6035963.575892857,
            "unit": "ns",
            "range": "± 26214.78379503166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846082.7427083333,
            "unit": "ns",
            "range": "± 3680.794799300827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350551.5852399555,
            "unit": "ns",
            "range": "± 540.2554394974196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587622.0719866073,
            "unit": "ns",
            "range": "± 6721.108359907257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791957.9861979167,
            "unit": "ns",
            "range": "± 536.8225543957184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745522.7053786058,
            "unit": "ns",
            "range": "± 391.4585579445762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7680332.428571428,
            "unit": "ns",
            "range": "± 55748.87679546597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19605827.42857143,
            "unit": "ns",
            "range": "± 91041.30196760174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50648311.8,
            "unit": "ns",
            "range": "± 322401.21384812257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101586327.26666667,
            "unit": "ns",
            "range": "± 756926.4982561731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201261252.46666667,
            "unit": "ns",
            "range": "± 1008638.1488467412"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45589.65517241379,
            "unit": "ns",
            "range": "± 1738.0862287749098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366250.9247311829,
            "unit": "ns",
            "range": "± 88992.40920758556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2500784.3571428573,
            "unit": "ns",
            "range": "± 41930.66952006728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160922.695652174,
            "unit": "ns",
            "range": "± 121246.30411330948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5004666.25,
            "unit": "ns",
            "range": "± 95417.41255452277"
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
          "id": "8eca045037afe35820c64f54f556c3d96723ad86",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:13:13+09:00",
          "tree_id": "73ecc7d5746324bbbdab21cef6f31d1c2b82ce1b",
          "url": "https://github.com/greymistcube/libplanet/commit/8eca045037afe35820c64f54f556c3d96723ad86"
        },
        "date": 1678868741451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198131.0338983051,
            "unit": "ns",
            "range": "± 8246.979035121143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199292.46875,
            "unit": "ns",
            "range": "± 5824.199914507848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179637.37179487178,
            "unit": "ns",
            "range": "± 9194.162575100352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11411171.333333334,
            "unit": "ns",
            "range": "± 70237.1990397708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9189464.666666666,
            "unit": "ns",
            "range": "± 91424.37179179199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18820.290322580644,
            "unit": "ns",
            "range": "± 1350.530190418347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52610.95,
            "unit": "ns",
            "range": "± 2751.260313733336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38929.6,
            "unit": "ns",
            "range": "± 889.5973305526021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87278,
            "unit": "ns",
            "range": "± 10170.423764681169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4620.8125,
            "unit": "ns",
            "range": "± 463.3722912121072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18076.979166666668,
            "unit": "ns",
            "range": "± 1599.9399132083659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285820,
            "unit": "ns",
            "range": "± 43660.45759527231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5058596,
            "unit": "ns",
            "range": "± 55455.329558380334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24777616.8,
            "unit": "ns",
            "range": "± 194586.29820622006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6099497.551724138,
            "unit": "ns",
            "range": "± 176322.26707014674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26713243,
            "unit": "ns",
            "range": "± 349902.74374269583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5975498.500600962,
            "unit": "ns",
            "range": "± 14056.793484465275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827711.2198660714,
            "unit": "ns",
            "range": "± 1795.6041249810496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359598.5805288462,
            "unit": "ns",
            "range": "± 772.7058325809878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528042.1684895833,
            "unit": "ns",
            "range": "± 1730.3018553521479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820893.27578125,
            "unit": "ns",
            "range": "± 2562.0160653680323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754732.2919921875,
            "unit": "ns",
            "range": "± 1784.3316869973935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7666139.5,
            "unit": "ns",
            "range": "± 28302.646600219618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19344010.4,
            "unit": "ns",
            "range": "± 272298.96904342895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50129926.85714286,
            "unit": "ns",
            "range": "± 235089.88306892884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99820342.73333333,
            "unit": "ns",
            "range": "± 602526.6489302084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198065375.93333334,
            "unit": "ns",
            "range": "± 1002160.8148870453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44944.36923076923,
            "unit": "ns",
            "range": "± 1927.745830377662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334976.5494505495,
            "unit": "ns",
            "range": "± 76144.78331212391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477956.523809524,
            "unit": "ns",
            "range": "± 57824.55472255626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2126006.7682926827,
            "unit": "ns",
            "range": "± 105663.68835694013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5084257,
            "unit": "ns",
            "range": "± 96247.90945262136"
          }
        ]
      }
    ]
  }
}