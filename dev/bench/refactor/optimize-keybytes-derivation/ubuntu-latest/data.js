window.BENCHMARK_DATA = {
  "lastUpdate": 1689823685778,
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
          "id": "032a859e1d95812aacd99ccb608d965bfce3d5b2",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T00:50:49+09:00",
          "tree_id": "0074298ada438a2572c19c5e026f603c1ccc74bc",
          "url": "https://github.com/greymistcube/libplanet/commit/032a859e1d95812aacd99ccb608d965bfce3d5b2"
        },
        "date": 1689784510211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360592.4375,
            "unit": "ns",
            "range": "± 6963.646707185826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341125.32258064515,
            "unit": "ns",
            "range": "± 9022.621966986082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310972.9696969697,
            "unit": "ns",
            "range": "± 9817.9102202456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5449684.666666667,
            "unit": "ns",
            "range": "± 43463.46311503929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4969972,
            "unit": "ns",
            "range": "± 24421.449276593532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24806.27894736842,
            "unit": "ns",
            "range": "± 1918.0606793750917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111611.19587628866,
            "unit": "ns",
            "range": "± 7036.014336432439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94191.8,
            "unit": "ns",
            "range": "± 3655.1392167573526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115871.46391752578,
            "unit": "ns",
            "range": "± 13596.04634095719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6226.873684210526,
            "unit": "ns",
            "range": "± 673.6297714479097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23703.0412371134,
            "unit": "ns",
            "range": "± 1822.7752073733948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1778261.690140845,
            "unit": "ns",
            "range": "± 83008.70115761386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3397512,
            "unit": "ns",
            "range": "± 110566.71202783892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2334660.658227848,
            "unit": "ns",
            "range": "± 121358.73543615946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6237259.25,
            "unit": "ns",
            "range": "± 203325.4509037701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7298468.276041667,
            "unit": "ns",
            "range": "± 25355.182246975313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2290793.7510416666,
            "unit": "ns",
            "range": "± 3555.504603552702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1675993.7477864583,
            "unit": "ns",
            "range": "± 3444.015197743386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3187407.6763822115,
            "unit": "ns",
            "range": "± 874.716691347887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003837.0008370535,
            "unit": "ns",
            "range": "± 459.03772844277916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922773.0648716518,
            "unit": "ns",
            "range": "± 182.42820047206908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4569087.423076923,
            "unit": "ns",
            "range": "± 120078.68508313141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4613934.214285715,
            "unit": "ns",
            "range": "± 70065.46787900866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5536074.038461538,
            "unit": "ns",
            "range": "± 148657.7905918101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5034327.714285715,
            "unit": "ns",
            "range": "± 73705.39446641982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7953822.428571428,
            "unit": "ns",
            "range": "± 102332.26950457047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10357448.066666666,
            "unit": "ns",
            "range": "± 162508.48219069614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26932970.533333335,
            "unit": "ns",
            "range": "± 190991.81968415994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67619986.93333334,
            "unit": "ns",
            "range": "± 180483.9204240591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134103524.73333333,
            "unit": "ns",
            "range": "± 445943.51404081064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268332891.2142857,
            "unit": "ns",
            "range": "± 442367.2506660881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58512.920454545456,
            "unit": "ns",
            "range": "± 3391.411567310454"
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
          "id": "8b60cd32ce822883bd543daa20bc7de6137d9b6e",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T12:13:29+09:00",
          "tree_id": "a012fd5e7c0f05bc58c4fefefa3234c3785eb83a",
          "url": "https://github.com/greymistcube/libplanet/commit/8b60cd32ce822883bd543daa20bc7de6137d9b6e"
        },
        "date": 1689823678698,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286361.85714285716,
            "unit": "ns",
            "range": "± 10477.589253471426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280193.17647058825,
            "unit": "ns",
            "range": "± 8906.34873821491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238577.33333333334,
            "unit": "ns",
            "range": "± 2697.2798194185234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4366239.6,
            "unit": "ns",
            "range": "± 48793.56909587867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3993645.3846153845,
            "unit": "ns",
            "range": "± 31218.55176957675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19307.40625,
            "unit": "ns",
            "range": "± 1226.115582927388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86794.18666666666,
            "unit": "ns",
            "range": "± 4374.938654993342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73077.76923076923,
            "unit": "ns",
            "range": "± 1923.9518976875136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89787.46391752578,
            "unit": "ns",
            "range": "± 10197.051678734822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4544.252631578947,
            "unit": "ns",
            "range": "± 505.4255205021963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17878.052631578947,
            "unit": "ns",
            "range": "± 1170.2039044762719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1421675.1666666667,
            "unit": "ns",
            "range": "± 76135.75198539466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2722118.6222222224,
            "unit": "ns",
            "range": "± 102861.66195679092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1826783.607142857,
            "unit": "ns",
            "range": "± 97002.48734980263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4905787.04,
            "unit": "ns",
            "range": "± 129544.70587036737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6121678.905133928,
            "unit": "ns",
            "range": "± 18639.944303645065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899756.3686197917,
            "unit": "ns",
            "range": "± 4563.330672699363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378856.4424479166,
            "unit": "ns",
            "range": "± 4344.321817105958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655171.3169270833,
            "unit": "ns",
            "range": "± 5230.4414596105935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827396.3533854167,
            "unit": "ns",
            "range": "± 2448.7224331792268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765175.3240885417,
            "unit": "ns",
            "range": "± 1230.9515016892387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421977.4210526315,
            "unit": "ns",
            "range": "± 73267.83022454579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3618866.625,
            "unit": "ns",
            "range": "± 92795.04127625546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4386141.481481481,
            "unit": "ns",
            "range": "± 121075.20263467863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4024750.724137931,
            "unit": "ns",
            "range": "± 114214.20219854338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6643570.568181818,
            "unit": "ns",
            "range": "± 245001.760901161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7941469.933333334,
            "unit": "ns",
            "range": "± 48751.663225058524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21703994.785714287,
            "unit": "ns",
            "range": "± 269124.1215562293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53742245.2,
            "unit": "ns",
            "range": "± 805438.7217226222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108426416.13333334,
            "unit": "ns",
            "range": "± 2022784.1228057737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213158125.92857143,
            "unit": "ns",
            "range": "± 1578075.1225374085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47228.67058823529,
            "unit": "ns",
            "range": "± 2479.0881742911774"
          }
        ]
      }
    ]
  }
}