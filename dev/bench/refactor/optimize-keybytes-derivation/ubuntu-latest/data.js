window.BENCHMARK_DATA = {
  "lastUpdate": 1689826264095,
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
          "id": "564935623500069b7886004298a8bd7d9e61f45e",
          "message": "Added tests",
          "timestamp": "2023-07-20T12:34:10+09:00",
          "tree_id": "be853d6f7bc833b40a9e17c4e2a791f04bc17903",
          "url": "https://github.com/greymistcube/libplanet/commit/564935623500069b7886004298a8bd7d9e61f45e"
        },
        "date": 1689824915375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289244.3793103448,
            "unit": "ns",
            "range": "± 6676.478821813792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279153,
            "unit": "ns",
            "range": "± 8407.21051750902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240841.92857142858,
            "unit": "ns",
            "range": "± 6727.052565346225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4429859.318181818,
            "unit": "ns",
            "range": "± 106953.85091283257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4053447.6153846155,
            "unit": "ns",
            "range": "± 39656.273882658345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19606.59375,
            "unit": "ns",
            "range": "± 1599.1354873518048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89541.93243243243,
            "unit": "ns",
            "range": "± 4280.1917839859525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75153.48,
            "unit": "ns",
            "range": "± 1960.2546416218481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93426.78947368421,
            "unit": "ns",
            "range": "± 11044.453727853475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4864.271739130435,
            "unit": "ns",
            "range": "± 530.9743708402976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18407.129032258064,
            "unit": "ns",
            "range": "± 1178.7554990955362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492009.253164557,
            "unit": "ns",
            "range": "± 76952.6637091601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2803093.722222222,
            "unit": "ns",
            "range": "± 92746.43236838542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1900228.2025316455,
            "unit": "ns",
            "range": "± 94171.72180164627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4975647.5,
            "unit": "ns",
            "range": "± 121271.59355004232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6061640.157451923,
            "unit": "ns",
            "range": "± 31860.65450515279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890260.5859375,
            "unit": "ns",
            "range": "± 3157.3843375548704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379997.7108072916,
            "unit": "ns",
            "range": "± 3756.5943342850915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669001.5557291666,
            "unit": "ns",
            "range": "± 2910.2677107667782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832453.6322916667,
            "unit": "ns",
            "range": "± 1020.9532767029423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770176.3897135417,
            "unit": "ns",
            "range": "± 556.5470182392567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3474210.2333333334,
            "unit": "ns",
            "range": "± 103965.08517889082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695289.1764705884,
            "unit": "ns",
            "range": "± 117312.3784386695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4402483.552631579,
            "unit": "ns",
            "range": "± 148744.3444060797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4034676,
            "unit": "ns",
            "range": "± 144297.1287247255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6631551.228571429,
            "unit": "ns",
            "range": "± 216979.97814410622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8134913.130434782,
            "unit": "ns",
            "range": "± 202633.7966070599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22235651.266666666,
            "unit": "ns",
            "range": "± 322360.63896256377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55479693.11764706,
            "unit": "ns",
            "range": "± 1077340.2932130985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109740023.73333333,
            "unit": "ns",
            "range": "± 1433071.119268907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219151325.86666667,
            "unit": "ns",
            "range": "± 2762212.937387337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46710.47777777778,
            "unit": "ns",
            "range": "± 2477.9725367241363"
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
          "id": "5153c9d758e7962c00cbbba035f4e6d298fc1abb",
          "message": "Added tests",
          "timestamp": "2023-07-20T12:56:07+09:00",
          "tree_id": "7970b8635c49be8a523de796d2ff83435753f9c6",
          "url": "https://github.com/greymistcube/libplanet/commit/5153c9d758e7962c00cbbba035f4e6d298fc1abb"
        },
        "date": 1689826256633,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304023.5789473684,
            "unit": "ns",
            "range": "± 6638.852656193183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283014.3181818182,
            "unit": "ns",
            "range": "± 9010.509888710263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256290.5294117647,
            "unit": "ns",
            "range": "± 10410.446008414705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4550480.2,
            "unit": "ns",
            "range": "± 70686.62591547488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4275690.933333334,
            "unit": "ns",
            "range": "± 78553.64533095172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22039.563829787236,
            "unit": "ns",
            "range": "± 2108.914211578064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94964.38823529411,
            "unit": "ns",
            "range": "± 4921.354435359373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80310.76136363637,
            "unit": "ns",
            "range": "± 4422.760172120943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100237.84782608696,
            "unit": "ns",
            "range": "± 9699.153410359459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5645.347368421053,
            "unit": "ns",
            "range": "± 787.0295050894213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21548.621052631577,
            "unit": "ns",
            "range": "± 2013.5240578316823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517077.4157303371,
            "unit": "ns",
            "range": "± 81315.57606574986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894464.8863636362,
            "unit": "ns",
            "range": "± 107281.60542804786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1946764.8823529412,
            "unit": "ns",
            "range": "± 105254.41460263381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5365161.0394736845,
            "unit": "ns",
            "range": "± 272825.56883148814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6067829.032366072,
            "unit": "ns",
            "range": "± 26977.68599803378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907727.443359375,
            "unit": "ns",
            "range": "± 1414.4143848931571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404275.2768229167,
            "unit": "ns",
            "range": "± 2621.094664015505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663671.9314903845,
            "unit": "ns",
            "range": "± 1131.6745575364644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847159.2369791666,
            "unit": "ns",
            "range": "± 352.34971538544244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775645.8331380208,
            "unit": "ns",
            "range": "± 332.65650925799116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585614.236842105,
            "unit": "ns",
            "range": "± 122076.8619421596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3829631.769230769,
            "unit": "ns",
            "range": "± 29069.338661075653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4494127.5,
            "unit": "ns",
            "range": "± 143805.15894489552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229487.588235294,
            "unit": "ns",
            "range": "± 135176.43266130908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6740137.235294118,
            "unit": "ns",
            "range": "± 213611.28524042023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8331723.741935484,
            "unit": "ns",
            "range": "± 249597.65203008457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22317262.666666668,
            "unit": "ns",
            "range": "± 271589.69463056553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57002789.6,
            "unit": "ns",
            "range": "± 659189.3127754726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111918018.4,
            "unit": "ns",
            "range": "± 1421887.2609102915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226101487.26666668,
            "unit": "ns",
            "range": "± 1888754.8755630546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47231.6129032258,
            "unit": "ns",
            "range": "± 2799.62089449182"
          }
        ]
      }
    ]
  }
}