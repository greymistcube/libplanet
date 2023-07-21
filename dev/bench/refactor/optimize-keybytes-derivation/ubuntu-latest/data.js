window.BENCHMARK_DATA = {
  "lastUpdate": 1689905990823,
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
          "id": "50c7bf0f779840a1b7f19a41e4de6df58e355c3f",
          "message": "Added tests",
          "timestamp": "2023-07-20T14:18:57+09:00",
          "tree_id": "2685be5ffad386f4a3f05ce76a8fa78fda3ff178",
          "url": "https://github.com/greymistcube/libplanet/commit/50c7bf0f779840a1b7f19a41e4de6df58e355c3f"
        },
        "date": 1689831199724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293761.3243243243,
            "unit": "ns",
            "range": "± 8302.800792684538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285849.15789473685,
            "unit": "ns",
            "range": "± 9671.763199117358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250752.37647058823,
            "unit": "ns",
            "range": "± 13473.839739761383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4644643.866666666,
            "unit": "ns",
            "range": "± 75494.73499983452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4302231.8,
            "unit": "ns",
            "range": "± 41024.73476400722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23713.18085106383,
            "unit": "ns",
            "range": "± 1575.0272498940915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95353.29629629629,
            "unit": "ns",
            "range": "± 5030.55030400364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81561.93617021276,
            "unit": "ns",
            "range": "± 5753.283107236335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93942.98876404495,
            "unit": "ns",
            "range": "± 9136.9642716903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5333.7959183673465,
            "unit": "ns",
            "range": "± 644.4647736837533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19523.736842105263,
            "unit": "ns",
            "range": "± 1358.5980274621206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1448413,
            "unit": "ns",
            "range": "± 96178.1812843292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2734929.236842105,
            "unit": "ns",
            "range": "± 92965.44307354916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1918301.430379747,
            "unit": "ns",
            "range": "± 99540.44201970907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5404945.17,
            "unit": "ns",
            "range": "± 376326.8669407964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6253955.481026785,
            "unit": "ns",
            "range": "± 25908.140524175527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962556.2427083333,
            "unit": "ns",
            "range": "± 1450.4933474945026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410533.9552083334,
            "unit": "ns",
            "range": "± 4981.334820240281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654920.005598958,
            "unit": "ns",
            "range": "± 6186.007696215831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836268.7915364583,
            "unit": "ns",
            "range": "± 1866.9491654453452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772481.1602260044,
            "unit": "ns",
            "range": "± 593.1466862675741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611155.076923077,
            "unit": "ns",
            "range": "± 52624.138482990136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3818217.7407407407,
            "unit": "ns",
            "range": "± 103316.43415277931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4501594.777777778,
            "unit": "ns",
            "range": "± 126186.30270764593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4282256.617647059,
            "unit": "ns",
            "range": "± 120407.95201113605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6789200.214285715,
            "unit": "ns",
            "range": "± 185926.3020092673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8422897.51724138,
            "unit": "ns",
            "range": "± 239523.6222802641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22498803.133333333,
            "unit": "ns",
            "range": "± 279551.5252828733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56607449.571428575,
            "unit": "ns",
            "range": "± 650655.744279417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113569955.93333334,
            "unit": "ns",
            "range": "± 840755.6389910267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225732562.53333333,
            "unit": "ns",
            "range": "± 2758267.871235804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51745.3734939759,
            "unit": "ns",
            "range": "± 2676.1252236133487"
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
          "id": "a850c52d735b3f00eb7a961cbd370dddcba0396a",
          "message": "Added tests",
          "timestamp": "2023-07-21T11:02:38+09:00",
          "tree_id": "dba981747d10ddc484e6b5abb9b05011f45a7def",
          "url": "https://github.com/greymistcube/libplanet/commit/a850c52d735b3f00eb7a961cbd370dddcba0396a"
        },
        "date": 1689905982025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350592.3857142857,
            "unit": "ns",
            "range": "± 16332.580827054146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341236.63265306124,
            "unit": "ns",
            "range": "± 13236.842269926447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301525.4090909091,
            "unit": "ns",
            "range": "± 14059.47248707025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5215957.964285715,
            "unit": "ns",
            "range": "± 143884.7756424054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4879105.466666667,
            "unit": "ns",
            "range": "± 73568.61706972873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26105.795698924732,
            "unit": "ns",
            "range": "± 2375.079191170081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115803.8350515464,
            "unit": "ns",
            "range": "± 8777.693007562328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126692.05102040817,
            "unit": "ns",
            "range": "± 8292.976400225052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122436.02040816327,
            "unit": "ns",
            "range": "± 20769.376682336308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7391.680412371134,
            "unit": "ns",
            "range": "± 1074.2215742340256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26354.833333333332,
            "unit": "ns",
            "range": "± 2386.584221353614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1805854.8214285714,
            "unit": "ns",
            "range": "± 95140.83757481645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3446113.238095238,
            "unit": "ns",
            "range": "± 124998.18011822714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250062.435294118,
            "unit": "ns",
            "range": "± 119638.13818736572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6111385.960784313,
            "unit": "ns",
            "range": "± 247904.35429350252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7417203.645052084,
            "unit": "ns",
            "range": "± 42507.08089206801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2284042.4796316964,
            "unit": "ns",
            "range": "± 3038.983929696945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1654336.1583333334,
            "unit": "ns",
            "range": "± 2935.7696758011425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3169418.214583333,
            "unit": "ns",
            "range": "± 1968.7091350941232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016536.2251302083,
            "unit": "ns",
            "range": "± 1972.2784081051195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917728.7080729167,
            "unit": "ns",
            "range": "± 1396.2869856615598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4342031.266666667,
            "unit": "ns",
            "range": "± 45962.84585474083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4601326.033333333,
            "unit": "ns",
            "range": "± 61446.423119037696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5486284.333333333,
            "unit": "ns",
            "range": "± 82023.70497141723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4998233.052631579,
            "unit": "ns",
            "range": "± 109547.7590624664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8072225.857142857,
            "unit": "ns",
            "range": "± 108562.0409059738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9520525.695652174,
            "unit": "ns",
            "range": "± 223219.9823709246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25524216.523809522,
            "unit": "ns",
            "range": "± 576095.996360643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63831942.93333333,
            "unit": "ns",
            "range": "± 1149077.0388141002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129777507.1764706,
            "unit": "ns",
            "range": "± 2660362.891475551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266624766.7142857,
            "unit": "ns",
            "range": "± 2792440.9435323626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58127.336956521736,
            "unit": "ns",
            "range": "± 3663.941243342087"
          }
        ]
      }
    ]
  }
}