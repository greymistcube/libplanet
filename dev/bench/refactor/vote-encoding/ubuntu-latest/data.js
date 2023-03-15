window.BENCHMARK_DATA = {
  "lastUpdate": 1678868916278,
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
          "id": "ecf372205ae8a2af7dc0a83eae4a253349dec33d",
          "message": "Updated Vote.Encoded and Proposal.Encoded",
          "timestamp": "2023-03-15T17:11:34+09:00",
          "tree_id": "f0357afcb5074dbb5f4705f164f6606bb105f856",
          "url": "https://github.com/greymistcube/libplanet/commit/ecf372205ae8a2af7dc0a83eae4a253349dec33d"
        },
        "date": 1678868825848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229536.9512195122,
            "unit": "ns",
            "range": "± 8021.882618660096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230747.83333333334,
            "unit": "ns",
            "range": "± 8305.873202407533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194165.0625,
            "unit": "ns",
            "range": "± 3599.2454296004876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14268621.533333333,
            "unit": "ns",
            "range": "± 261628.52598917164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11652669.42857143,
            "unit": "ns",
            "range": "± 186556.21895648685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26043.74193548387,
            "unit": "ns",
            "range": "± 1895.2426878166025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69204.29787234042,
            "unit": "ns",
            "range": "± 5101.675735301829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49516.245614035084,
            "unit": "ns",
            "range": "± 2150.466081380481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111295.15217391304,
            "unit": "ns",
            "range": "± 11889.32724918139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6309.625,
            "unit": "ns",
            "range": "± 729.2529017678587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21303.725274725275,
            "unit": "ns",
            "range": "± 1345.801001187967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4081807.6486486485,
            "unit": "ns",
            "range": "± 135076.49469410043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6554035.857142857,
            "unit": "ns",
            "range": "± 94288.4667846148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29728199.866666667,
            "unit": "ns",
            "range": "± 484478.7216599576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7955549.571428572,
            "unit": "ns",
            "range": "± 110951.34911421192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32882206.411764707,
            "unit": "ns",
            "range": "± 664369.3585100138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7063123.333854167,
            "unit": "ns",
            "range": "± 44433.373513113285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2185255.66015625,
            "unit": "ns",
            "range": "± 7010.868752257859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1623914.1510416667,
            "unit": "ns",
            "range": "± 3662.869023554916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3091717.832291667,
            "unit": "ns",
            "range": "± 23284.00948700302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971485.5778459822,
            "unit": "ns",
            "range": "± 5091.582117083692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892613.1694335938,
            "unit": "ns",
            "range": "± 4005.704686879733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9593918.892857144,
            "unit": "ns",
            "range": "± 266182.5684480122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25540988.8,
            "unit": "ns",
            "range": "± 452225.40364658233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 64229800.53333333,
            "unit": "ns",
            "range": "± 1015941.1410429718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 128861753.26666667,
            "unit": "ns",
            "range": "± 1777014.9570759493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 261198920.66666666,
            "unit": "ns",
            "range": "± 3313999.3262938717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56510.83720930233,
            "unit": "ns",
            "range": "± 3088.4329735338188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1644535.4615384615,
            "unit": "ns",
            "range": "± 90483.96846640327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3130585.7391304346,
            "unit": "ns",
            "range": "± 65245.399247914494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2642590.1971830986,
            "unit": "ns",
            "range": "± 129242.93674268953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6596538.057142857,
            "unit": "ns",
            "range": "± 319148.6442593426"
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
          "id": "2d4047674b5f838cf461806ce0c6442baedc8b69",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:16:01+09:00",
          "tree_id": "5f1e0dc67d0e5ebed283e11d5b73d4e0dc48ab97",
          "url": "https://github.com/greymistcube/libplanet/commit/2d4047674b5f838cf461806ce0c6442baedc8b69"
        },
        "date": 1678868909398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186707.4375,
            "unit": "ns",
            "range": "± 7038.421709888049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185912.76363636364,
            "unit": "ns",
            "range": "± 7854.407344885669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156478.08333333334,
            "unit": "ns",
            "range": "± 2038.425214733326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11396453.285714285,
            "unit": "ns",
            "range": "± 155089.2295340026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9218639.857142856,
            "unit": "ns",
            "range": "± 85521.07242852007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16146.5375,
            "unit": "ns",
            "range": "± 853.2837826689446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48694.84146341463,
            "unit": "ns",
            "range": "± 2583.32137856021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38543.57142857143,
            "unit": "ns",
            "range": "± 371.46605897044344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84192.54081632652,
            "unit": "ns",
            "range": "± 14170.524611179671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5162.357142857143,
            "unit": "ns",
            "range": "± 498.7773349871736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15834.404255319148,
            "unit": "ns",
            "range": "± 984.3985699389382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250685.95,
            "unit": "ns",
            "range": "± 71917.99678762427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4970289,
            "unit": "ns",
            "range": "± 44416.386037887714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23600572.866666667,
            "unit": "ns",
            "range": "± 429824.3503081673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6057555.6875,
            "unit": "ns",
            "range": "± 187690.10924315016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26533541.611111112,
            "unit": "ns",
            "range": "± 459558.53730946657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5729901.247916667,
            "unit": "ns",
            "range": "± 14167.601678460109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1813466.431361607,
            "unit": "ns",
            "range": "± 3383.9768069958277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314127.8318917411,
            "unit": "ns",
            "range": "± 3635.2591930147073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546218.9263020833,
            "unit": "ns",
            "range": "± 4615.798390860798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803537.3424944197,
            "unit": "ns",
            "range": "± 1183.3973528305305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757019.7072265625,
            "unit": "ns",
            "range": "± 1143.3558390582334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7694631.785714285,
            "unit": "ns",
            "range": "± 30069.23546693421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20659919.266666666,
            "unit": "ns",
            "range": "± 385269.2260934399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52005807.733333334,
            "unit": "ns",
            "range": "± 942310.0627285561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101532361.21428572,
            "unit": "ns",
            "range": "± 692969.1842138636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202482155.86666667,
            "unit": "ns",
            "range": "± 1340428.694505651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47532.298507462685,
            "unit": "ns",
            "range": "± 2196.750982528553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347186.8139534884,
            "unit": "ns",
            "range": "± 72908.70711650478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2428132,
            "unit": "ns",
            "range": "± 33351.43335750354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133387.024390244,
            "unit": "ns",
            "range": "± 75941.97780097902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5523704.303030303,
            "unit": "ns",
            "range": "± 382420.871963756"
          }
        ]
      }
    ]
  }
}