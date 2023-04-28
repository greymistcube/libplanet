window.BENCHMARK_DATA = {
  "lastUpdate": 1682671946024,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682502014147,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8087072,
            "unit": "ns",
            "range": "± 142993.802919667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19899612.74509804,
            "unit": "ns",
            "range": "± 812514.6576581089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47967870.928571425,
            "unit": "ns",
            "range": "± 581993.1560280207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100119491.08888888,
            "unit": "ns",
            "range": "± 3474800.7368445983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197693630.3846154,
            "unit": "ns",
            "range": "± 1487876.5951442646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65245.65979381443,
            "unit": "ns",
            "range": "± 10034.29076642378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313314.8775510204,
            "unit": "ns",
            "range": "± 25253.10021929748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300618.60869565216,
            "unit": "ns",
            "range": "± 20198.048934693546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284574.6105263158,
            "unit": "ns",
            "range": "± 34096.61677242215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065849.238095238,
            "unit": "ns",
            "range": "± 147169.19575500043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3634579.875,
            "unit": "ns",
            "range": "± 112177.3925515355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19278.565217391304,
            "unit": "ns",
            "range": "± 2376.5665801709965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95370.39583333333,
            "unit": "ns",
            "range": "± 13462.818177233385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104011.21649484536,
            "unit": "ns",
            "range": "± 12842.91351065735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111994.2,
            "unit": "ns",
            "range": "± 9650.035400994622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7030.329787234043,
            "unit": "ns",
            "range": "± 1039.6963513325168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18893.5,
            "unit": "ns",
            "range": "± 2737.1413193605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660190.9897959183,
            "unit": "ns",
            "range": "± 208044.16368614108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011812.4395604394,
            "unit": "ns",
            "range": "± 168121.79948545303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2541171.373737374,
            "unit": "ns",
            "range": "± 254431.9974177209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6555670.065217392,
            "unit": "ns",
            "range": "± 420698.9526508642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225712.569767442,
            "unit": "ns",
            "range": "± 175527.51705795407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3464853.1340206186,
            "unit": "ns",
            "range": "± 285096.41265491326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476602.177777777,
            "unit": "ns",
            "range": "± 164659.90268322613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4344926.712765957,
            "unit": "ns",
            "range": "± 289786.3709364331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7270512.714285715,
            "unit": "ns",
            "range": "± 203259.42710238416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6259725.822172619,
            "unit": "ns",
            "range": "± 143179.12062718105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939658.5786830357,
            "unit": "ns",
            "range": "± 17514.527622706788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290748.293247768,
            "unit": "ns",
            "range": "± 13839.722643896677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2409709.170673077,
            "unit": "ns",
            "range": "± 10135.36670629802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849371.6682942709,
            "unit": "ns",
            "range": "± 5480.083456985531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719225.94296875,
            "unit": "ns",
            "range": "± 4640.535789520324"
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
          "id": "7c5826ddffe796f0bf864a730a00e2033503021f",
          "message": "Simplified JSON serialization",
          "timestamp": "2023-04-27T11:25:31+09:00",
          "tree_id": "5a71e80f98801528503d3c2898074ec13f4284ad",
          "url": "https://github.com/greymistcube/libplanet/commit/7c5826ddffe796f0bf864a730a00e2033503021f"
        },
        "date": 1682564035120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8952744.394736841,
            "unit": "ns",
            "range": "± 179476.91914000612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23244700.791666668,
            "unit": "ns",
            "range": "± 602940.1374646667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57841486.5,
            "unit": "ns",
            "range": "± 683759.5860848202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116092834.27777778,
            "unit": "ns",
            "range": "± 2325170.4361638627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251824526.3,
            "unit": "ns",
            "range": "± 5538745.983312345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66464.01648351649,
            "unit": "ns",
            "range": "± 7725.250333754221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392605.26666666666,
            "unit": "ns",
            "range": "± 27260.181361890205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364349.6506024096,
            "unit": "ns",
            "range": "± 18768.872113177786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318676.75,
            "unit": "ns",
            "range": "± 13082.072942841214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4779986.433333334,
            "unit": "ns",
            "range": "± 43396.32267578616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4381379.466666667,
            "unit": "ns",
            "range": "± 57134.535691604586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21389.926315789475,
            "unit": "ns",
            "range": "± 2363.1551899864057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104850.32291666667,
            "unit": "ns",
            "range": "± 9034.755221097776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94029.95789473684,
            "unit": "ns",
            "range": "± 9039.016678203807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112399,
            "unit": "ns",
            "range": "± 12339.648029172913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6289.684782608696,
            "unit": "ns",
            "range": "± 594.1376043920292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20038.136842105265,
            "unit": "ns",
            "range": "± 2134.6042515797308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1884429.1666666667,
            "unit": "ns",
            "range": "± 199518.8644432119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3586622.1428571427,
            "unit": "ns",
            "range": "± 128229.34326708663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3245532.389473684,
            "unit": "ns",
            "range": "± 478678.2698863499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7839583.889830508,
            "unit": "ns",
            "range": "± 337746.9945776091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4001972.0555555555,
            "unit": "ns",
            "range": "± 313758.13894636545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4173931.0303030303,
            "unit": "ns",
            "range": "± 194995.12886872285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5385371.822033898,
            "unit": "ns",
            "range": "± 238239.96159113658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5371027.119565218,
            "unit": "ns",
            "range": "± 580307.9533976112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9244666.448717948,
            "unit": "ns",
            "range": "± 444195.77830878575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7061360.786658654,
            "unit": "ns",
            "range": "± 54648.61721324118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175030.3484933036,
            "unit": "ns",
            "range": "± 19669.871173909363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1480667.847265625,
            "unit": "ns",
            "range": "± 10194.637899261925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2932445.09375,
            "unit": "ns",
            "range": "± 17253.71016184326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 930254.7104492188,
            "unit": "ns",
            "range": "± 4957.962884170653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858007.1327427456,
            "unit": "ns",
            "range": "± 4901.893581251137"
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
          "id": "02d952425f3d96a08ff88962bd1b44837d803de6",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:37:14+09:00",
          "tree_id": "410ed249ccab831d6b47f5153120ca037b791f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/02d952425f3d96a08ff88962bd1b44837d803de6"
        },
        "date": 1682574739029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634888.5,
            "unit": "ns",
            "range": "± 113283.83757471251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19182509.396551725,
            "unit": "ns",
            "range": "± 548143.2462056627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47494814.684210524,
            "unit": "ns",
            "range": "± 1569170.250250183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93258189.46153846,
            "unit": "ns",
            "range": "± 1323636.5486635428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200959608.05555555,
            "unit": "ns",
            "range": "± 4216657.5322503615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56857.29213483146,
            "unit": "ns",
            "range": "± 7609.7238783412195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303036.6373626374,
            "unit": "ns",
            "range": "± 18155.255215022138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303919,
            "unit": "ns",
            "range": "± 22735.10687574803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264001.1842105263,
            "unit": "ns",
            "range": "± 12977.452171835608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4081741.6666666665,
            "unit": "ns",
            "range": "± 82882.35608396646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3581245.9285714286,
            "unit": "ns",
            "range": "± 61216.85474726998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17889.477272727272,
            "unit": "ns",
            "range": "± 1691.5591119918306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86223.4010989011,
            "unit": "ns",
            "range": "± 8609.504022435445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81405.40697674418,
            "unit": "ns",
            "range": "± 7313.37906994138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103213.36956521739,
            "unit": "ns",
            "range": "± 13647.934224972418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6173.626436781609,
            "unit": "ns",
            "range": "± 789.2343184436728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17347.972527472528,
            "unit": "ns",
            "range": "± 1890.7120665720938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1522531.9270833333,
            "unit": "ns",
            "range": "± 146171.64616596582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993468.369047619,
            "unit": "ns",
            "range": "± 157645.00030710147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2518781.445652174,
            "unit": "ns",
            "range": "± 225652.94956657648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6614051.161290322,
            "unit": "ns",
            "range": "± 486183.9977291942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3185920.4623655914,
            "unit": "ns",
            "range": "± 263096.9125055797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3361515.227272727,
            "unit": "ns",
            "range": "± 308990.9863562302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185573.533333333,
            "unit": "ns",
            "range": "± 156191.2950368874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4189528.89010989,
            "unit": "ns",
            "range": "± 236809.62571025745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7582506.965909091,
            "unit": "ns",
            "range": "± 417090.58273991355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6153845.301930147,
            "unit": "ns",
            "range": "± 121251.84250672629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902142.7660435268,
            "unit": "ns",
            "range": "± 20413.10688206313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1247934.4110677084,
            "unit": "ns",
            "range": "± 10957.331427848552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611124.5390625,
            "unit": "ns",
            "range": "± 21358.483949968657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784261.4380580357,
            "unit": "ns",
            "range": "± 7723.530987378227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 703157.9013020833,
            "unit": "ns",
            "range": "± 12352.118102002876"
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
          "id": "b2b216263f442f9fca4808241970d8cb5b817e86",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:38:58+09:00",
          "tree_id": "d0ab92b60b7e688c2dc495c16f76f9c9f033b744",
          "url": "https://github.com/greymistcube/libplanet/commit/b2b216263f442f9fca4808241970d8cb5b817e86"
        },
        "date": 1682575011323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8157175.368421053,
            "unit": "ns",
            "range": "± 172538.06919930276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21909124.38607595,
            "unit": "ns",
            "range": "± 1128987.3199986652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53303308.94186047,
            "unit": "ns",
            "range": "± 1961683.9618401024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105741423.45121951,
            "unit": "ns",
            "range": "± 3745057.222301616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216228075.19230768,
            "unit": "ns",
            "range": "± 2975331.341366772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65614.36315789474,
            "unit": "ns",
            "range": "± 8028.9152556994095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334197.4947368421,
            "unit": "ns",
            "range": "± 34119.34223658022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323780.2291666667,
            "unit": "ns",
            "range": "± 36288.28413355275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284901.7555555556,
            "unit": "ns",
            "range": "± 23999.17307075444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161476.2,
            "unit": "ns",
            "range": "± 110226.29982563145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3912546.7529411763,
            "unit": "ns",
            "range": "± 238764.01198991772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20934.126315789475,
            "unit": "ns",
            "range": "± 3345.7057813507663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105412.08762886598,
            "unit": "ns",
            "range": "± 14830.892369443318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108303.44623655915,
            "unit": "ns",
            "range": "± 7924.0898851507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122953.51041666667,
            "unit": "ns",
            "range": "± 18153.880041406715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7413.164948453608,
            "unit": "ns",
            "range": "± 1302.089640094692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20102.878947368423,
            "unit": "ns",
            "range": "± 3463.6475552206684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658615.5252525252,
            "unit": "ns",
            "range": "± 192574.10133956673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3055163.35483871,
            "unit": "ns",
            "range": "± 138014.2360364484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2611153.4895833335,
            "unit": "ns",
            "range": "± 259118.43741970864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6951376.211340206,
            "unit": "ns",
            "range": "± 504862.67314525665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3455029.142105263,
            "unit": "ns",
            "range": "± 289627.2440887878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3442068.2835820895,
            "unit": "ns",
            "range": "± 162769.8745568935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4885385.967032967,
            "unit": "ns",
            "range": "± 482230.7220256353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4866645.456043956,
            "unit": "ns",
            "range": "± 375986.1475746713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7780917.773972603,
            "unit": "ns",
            "range": "± 383675.8344500263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6756885.977711397,
            "unit": "ns",
            "range": "± 133198.08811895474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2078643.421875,
            "unit": "ns",
            "range": "± 24766.85811323483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358675.7609863281,
            "unit": "ns",
            "range": "± 25691.125168974126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2875494.154036458,
            "unit": "ns",
            "range": "± 72166.76551500347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909387.0536358173,
            "unit": "ns",
            "range": "± 18972.594810444814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776464.9980957031,
            "unit": "ns",
            "range": "± 17348.724366402315"
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
          "id": "3b41d96394fdabaa4492532c4ed143bbca2f4384",
          "message": "Fix ts tests",
          "timestamp": "2023-04-28T17:23:49+09:00",
          "tree_id": "14bc447b7bce10597997c252b35de7100d185be3",
          "url": "https://github.com/greymistcube/libplanet/commit/3b41d96394fdabaa4492532c4ed143bbca2f4384"
        },
        "date": 1682671613268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7788790.461538462,
            "unit": "ns",
            "range": "± 119307.18980962224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20443856.8,
            "unit": "ns",
            "range": "± 1568908.0717455253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50492432.42465753,
            "unit": "ns",
            "range": "± 2501387.096063896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100071106.45882353,
            "unit": "ns",
            "range": "± 5200921.74599073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223849010.56185567,
            "unit": "ns",
            "range": "± 14538174.197418265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70475.79347826086,
            "unit": "ns",
            "range": "± 13088.80008649123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335399.4301075269,
            "unit": "ns",
            "range": "± 35442.889758031204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365390.9583333333,
            "unit": "ns",
            "range": "± 42192.64851953457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350374.26373626373,
            "unit": "ns",
            "range": "± 38436.958097595816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4791332.414893617,
            "unit": "ns",
            "range": "± 339408.237071854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4212474.360824742,
            "unit": "ns",
            "range": "± 361915.020664819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24625.544943820223,
            "unit": "ns",
            "range": "± 3546.4711651485095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119849.90425531915,
            "unit": "ns",
            "range": "± 19264.132680770952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106984.5,
            "unit": "ns",
            "range": "± 15623.965516300446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129630.75531914894,
            "unit": "ns",
            "range": "± 19441.831694391247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8632.433333333332,
            "unit": "ns",
            "range": "± 1038.988075111894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23367.66304347826,
            "unit": "ns",
            "range": "± 4339.335028504738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1998162.168539326,
            "unit": "ns",
            "range": "± 427678.99910838064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3481986.215909091,
            "unit": "ns",
            "range": "± 478248.9828845935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3092252,
            "unit": "ns",
            "range": "± 805810.7327568254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8840038.08064516,
            "unit": "ns",
            "range": "± 1968864.0570295823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640989.4791666665,
            "unit": "ns",
            "range": "± 433378.9881719787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550337.6505376343,
            "unit": "ns",
            "range": "± 221531.51733919838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4594969.752747253,
            "unit": "ns",
            "range": "± 306809.7040254248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4458139.03125,
            "unit": "ns",
            "range": "± 269533.0870820658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8162231.979591837,
            "unit": "ns",
            "range": "± 584408.5837525263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7493717.3347942075,
            "unit": "ns",
            "range": "± 265118.6104406495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2134219.152452257,
            "unit": "ns",
            "range": "± 70886.22045508336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386896.0337775736,
            "unit": "ns",
            "range": "± 28290.56518066623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3309348.8479352677,
            "unit": "ns",
            "range": "± 92417.82083460486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919908.9882061298,
            "unit": "ns",
            "range": "± 12480.592000430226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790453.4975585938,
            "unit": "ns",
            "range": "± 15204.691332910648"
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
          "id": "979e41c7df359212c0377fbd0c31f1b964e4b4ba",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:33:10+09:00",
          "tree_id": "8610bb5a528524d6c08047e0f2796178a8391232",
          "url": "https://github.com/greymistcube/libplanet/commit/979e41c7df359212c0377fbd0c31f1b964e4b4ba"
        },
        "date": 1682671920919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7886087.439393939,
            "unit": "ns",
            "range": "± 242730.9520257124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19825136.03846154,
            "unit": "ns",
            "range": "± 521039.6563869764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48994583.6875,
            "unit": "ns",
            "range": "± 927049.4601304879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98944372.73913044,
            "unit": "ns",
            "range": "± 2470947.64852299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201217774.0625,
            "unit": "ns",
            "range": "± 3552919.88086673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59768.71578947368,
            "unit": "ns",
            "range": "± 9084.0548679484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309276.18131868134,
            "unit": "ns",
            "range": "± 18472.91701015247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313801.05102040817,
            "unit": "ns",
            "range": "± 31789.49054094828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275514.4157894737,
            "unit": "ns",
            "range": "± 17938.774492442495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4140253.222222222,
            "unit": "ns",
            "range": "± 79078.29642870008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3838753.361111111,
            "unit": "ns",
            "range": "± 126491.92800201077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16952.54651162791,
            "unit": "ns",
            "range": "± 1493.7545011064983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88516.89247311828,
            "unit": "ns",
            "range": "± 8192.29892545215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90717,
            "unit": "ns",
            "range": "± 10926.291587458512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110060.9052631579,
            "unit": "ns",
            "range": "± 15345.357638888629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6805,
            "unit": "ns",
            "range": "± 756.8940681725433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17229.021739130436,
            "unit": "ns",
            "range": "± 1997.3398461605573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746228.2555555555,
            "unit": "ns",
            "range": "± 204581.56794634112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3187053.0795454546,
            "unit": "ns",
            "range": "± 277839.94535782986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2897377.433333333,
            "unit": "ns",
            "range": "± 557106.2261354852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6916345.67816092,
            "unit": "ns",
            "range": "± 497656.3996432864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358681,
            "unit": "ns",
            "range": "± 229926.94873447108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3363843.6666666665,
            "unit": "ns",
            "range": "± 105932.12589038863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4400741.5,
            "unit": "ns",
            "range": "± 223649.99801237052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4302320.795698925,
            "unit": "ns",
            "range": "± 236686.51258241394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7629766.121212121,
            "unit": "ns",
            "range": "± 358621.0524615091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6778886.963169643,
            "unit": "ns",
            "range": "± 49150.99824914424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969717.9046875,
            "unit": "ns",
            "range": "± 31003.93839197312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312256.8270733173,
            "unit": "ns",
            "range": "± 8948.580896511006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526014.7971540177,
            "unit": "ns",
            "range": "± 38823.20740769661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787877.8095052083,
            "unit": "ns",
            "range": "± 7024.8426285361065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723639.4444056919,
            "unit": "ns",
            "range": "± 6062.719879924868"
          }
        ]
      }
    ]
  }
}