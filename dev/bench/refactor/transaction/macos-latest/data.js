window.BENCHMARK_DATA = {
  "lastUpdate": 1682677633680,
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
          "id": "f968d0d2810ed3d7da353c446b7a06b2c8d87765",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:44:43+09:00",
          "tree_id": "127ee6961fcd950dd8c6c5f5f420c747bde944c0",
          "url": "https://github.com/greymistcube/libplanet/commit/f968d0d2810ed3d7da353c446b7a06b2c8d87765"
        },
        "date": 1682673041208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9634801.255555555,
            "unit": "ns",
            "range": "± 1298448.1492097373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26855532.395604394,
            "unit": "ns",
            "range": "± 5934885.634455574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71163567.34705882,
            "unit": "ns",
            "range": "± 15485539.65713767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121643967.4775281,
            "unit": "ns",
            "range": "± 20277068.77301131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246959227.91573033,
            "unit": "ns",
            "range": "± 44939307.186717145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78045.59550561798,
            "unit": "ns",
            "range": "± 5175.643841633049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406889.1477272727,
            "unit": "ns",
            "range": "± 68287.00906805543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 394288.1111111111,
            "unit": "ns",
            "range": "± 78549.50619226904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363031.06741573033,
            "unit": "ns",
            "range": "± 52666.01905550195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4971989.170454546,
            "unit": "ns",
            "range": "± 599977.4608479241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4379534.544444445,
            "unit": "ns",
            "range": "± 465900.20669455186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27614.70930232558,
            "unit": "ns",
            "range": "± 3659.1466664053514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128274.57692307692,
            "unit": "ns",
            "range": "± 16210.008619663737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121960.62790697675,
            "unit": "ns",
            "range": "± 9181.184257902953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125559.1978021978,
            "unit": "ns",
            "range": "± 20744.430715104547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9053.322580645161,
            "unit": "ns",
            "range": "± 1244.6991531157967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25226.166666666668,
            "unit": "ns",
            "range": "± 6151.040849237265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731129.6630434783,
            "unit": "ns",
            "range": "± 223511.3875379216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3428554.623529412,
            "unit": "ns",
            "range": "± 414474.37983845954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2565713.956043956,
            "unit": "ns",
            "range": "± 265078.2881509583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9099728.125,
            "unit": "ns",
            "range": "± 3232347.743070872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3803864.6836734693,
            "unit": "ns",
            "range": "± 682211.5192839864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4440008.324175824,
            "unit": "ns",
            "range": "± 911703.3944442872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5653558.776595744,
            "unit": "ns",
            "range": "± 1229421.179840187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5032707.104651162,
            "unit": "ns",
            "range": "± 1041706.2103832519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11275232.569892474,
            "unit": "ns",
            "range": "± 3623122.9596072063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7392560.576426631,
            "unit": "ns",
            "range": "± 176636.93695508584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2317064.835571289,
            "unit": "ns",
            "range": "± 158335.630079586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1527473.5243941327,
            "unit": "ns",
            "range": "± 96918.7186915403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3091979.6485583116,
            "unit": "ns",
            "range": "± 333772.67257509206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013779.0478081597,
            "unit": "ns",
            "range": "± 60622.22579360103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 988933.8104492187,
            "unit": "ns",
            "range": "± 34978.83802702959"
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
          "id": "accd7994dff96146b8932106afcf5eff0a4d3fc1",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:50:03+09:00",
          "tree_id": "9f67cb987aa229965a42d7cbc3c169fd5e49dd8d",
          "url": "https://github.com/greymistcube/libplanet/commit/accd7994dff96146b8932106afcf5eff0a4d3fc1"
        },
        "date": 1682673386700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9528359.469696969,
            "unit": "ns",
            "range": "± 739504.720931495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23746959.521276597,
            "unit": "ns",
            "range": "± 2065358.25173835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56121647.32608695,
            "unit": "ns",
            "range": "± 2139483.0665742117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115402031.58426966,
            "unit": "ns",
            "range": "± 7921535.915897947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 308429320.81914896,
            "unit": "ns",
            "range": "± 78049708.58563708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80713.31868131868,
            "unit": "ns",
            "range": "± 11934.305919285443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375333.5,
            "unit": "ns",
            "range": "± 43889.523040688546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385595.816091954,
            "unit": "ns",
            "range": "± 70775.98613288312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352870.8823529412,
            "unit": "ns",
            "range": "± 35870.01750315255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4809269.738636363,
            "unit": "ns",
            "range": "± 501309.1917288675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000333.1720430106,
            "unit": "ns",
            "range": "± 352659.6440153835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28528.123529411765,
            "unit": "ns",
            "range": "± 3012.917629524067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129416.40909090909,
            "unit": "ns",
            "range": "± 22896.505673587097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127388.69662921349,
            "unit": "ns",
            "range": "± 11928.90027450951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150095.37368421053,
            "unit": "ns",
            "range": "± 30113.00947962599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11057.693181818182,
            "unit": "ns",
            "range": "± 1449.5437955182283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28572.869047619046,
            "unit": "ns",
            "range": "± 4016.1474549915647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1912601.5326086956,
            "unit": "ns",
            "range": "± 362981.77777441347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3425310.933333333,
            "unit": "ns",
            "range": "± 351335.4679886911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2902135.6063829786,
            "unit": "ns",
            "range": "± 523541.7272402339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10599842.086021505,
            "unit": "ns",
            "range": "± 3649278.868483717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3912978.956043956,
            "unit": "ns",
            "range": "± 715051.855049034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4040712.060240964,
            "unit": "ns",
            "range": "± 636666.0958543905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5030284.764367816,
            "unit": "ns",
            "range": "± 754234.7727562896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5073939.978723404,
            "unit": "ns",
            "range": "± 928889.0583066915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8764479.44047619,
            "unit": "ns",
            "range": "± 1791944.8951802852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8114335.454513889,
            "unit": "ns",
            "range": "± 783136.8185628284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2313545.082589286,
            "unit": "ns",
            "range": "± 189303.00590354338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1532927.5375422842,
            "unit": "ns",
            "range": "± 94018.52672350168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3431324.342578125,
            "unit": "ns",
            "range": "± 330235.5821240599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999233.049921875,
            "unit": "ns",
            "range": "± 60780.116317524444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819679.5634142287,
            "unit": "ns",
            "range": "± 31658.486312329565"
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
          "id": "1a0f6e374ec8615c5942618ff3cb376d9c3d2c0e",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:59:02+09:00",
          "tree_id": "fdf46e68a57d060947ec961a30142d0b536ccb4a",
          "url": "https://github.com/greymistcube/libplanet/commit/1a0f6e374ec8615c5942618ff3cb376d9c3d2c0e"
        },
        "date": 1682673889392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9158064.25,
            "unit": "ns",
            "range": "± 1409436.5838132384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22351686.469387755,
            "unit": "ns",
            "range": "± 1462123.456721676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51978973.333333336,
            "unit": "ns",
            "range": "± 1002086.9187207147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114576234.68,
            "unit": "ns",
            "range": "± 5474255.880981455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234379329.11764705,
            "unit": "ns",
            "range": "± 7532666.772069612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75734.06976744186,
            "unit": "ns",
            "range": "± 6112.633368285328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355746.63333333336,
            "unit": "ns",
            "range": "± 47988.338581449825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354291.8695652174,
            "unit": "ns",
            "range": "± 45887.90871654976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312719.91071428574,
            "unit": "ns",
            "range": "± 13284.308077614503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4505426.073033708,
            "unit": "ns",
            "range": "± 270625.7198138186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4219864.211111112,
            "unit": "ns",
            "range": "± 638409.9761708068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25798.89010989011,
            "unit": "ns",
            "range": "± 4480.483390217201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127069.51136363637,
            "unit": "ns",
            "range": "± 23600.49910488906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121495.69047619047,
            "unit": "ns",
            "range": "± 9337.106740127518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127171.40425531915,
            "unit": "ns",
            "range": "± 16821.606727159196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9608.201030927836,
            "unit": "ns",
            "range": "± 1251.1585311634544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25860.126436781607,
            "unit": "ns",
            "range": "± 3395.93745937906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1696022.9719101123,
            "unit": "ns",
            "range": "± 210460.49986458753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3166472.005376344,
            "unit": "ns",
            "range": "± 210786.58548912866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2771316.0631578946,
            "unit": "ns",
            "range": "± 287574.7304499065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7743589.7,
            "unit": "ns",
            "range": "± 1742008.5342058232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611543.198924731,
            "unit": "ns",
            "range": "± 355026.92839649145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3759371.525773196,
            "unit": "ns",
            "range": "± 341818.91873552394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4764316.479591837,
            "unit": "ns",
            "range": "± 360718.13399429957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5184466.172043011,
            "unit": "ns",
            "range": "± 415788.10057344125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8417374.958333334,
            "unit": "ns",
            "range": "± 641546.3391828728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8000846.499467329,
            "unit": "ns",
            "range": "± 680454.9613860368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2262622.2863343256,
            "unit": "ns",
            "range": "± 102300.16192953009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1516642.1321022727,
            "unit": "ns",
            "range": "± 36335.11093317005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3441990.7447265624,
            "unit": "ns",
            "range": "± 391456.6094672373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024696.3932557398,
            "unit": "ns",
            "range": "± 70073.09568441093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886292.9155273438,
            "unit": "ns",
            "range": "± 41077.635335751336"
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
          "id": "a0c482a631acb0b32fb582c3f52edfa01ca5dfa3",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T18:16:25+09:00",
          "tree_id": "d78939a65a4ffebdcf9d16fd2c60c156db1e8e74",
          "url": "https://github.com/greymistcube/libplanet/commit/a0c482a631acb0b32fb582c3f52edfa01ca5dfa3"
        },
        "date": 1682674937187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11032393.213483145,
            "unit": "ns",
            "range": "± 3140885.899406623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23395458.28021978,
            "unit": "ns",
            "range": "± 3223724.699929797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58529038.35869565,
            "unit": "ns",
            "range": "± 11726700.478068283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136597748.84946236,
            "unit": "ns",
            "range": "± 44756161.61954869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242383824.25531915,
            "unit": "ns",
            "range": "± 44593094.51137191"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74163.33146067416,
            "unit": "ns",
            "range": "± 7700.411428258462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332008.8870967742,
            "unit": "ns",
            "range": "± 28531.532531353052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332880.22340425535,
            "unit": "ns",
            "range": "± 35230.05232749365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337433.5,
            "unit": "ns",
            "range": "± 34354.602589259186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4501697.380434782,
            "unit": "ns",
            "range": "± 289819.62975077383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3898056.988888889,
            "unit": "ns",
            "range": "± 147321.8086723172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21339.108695652172,
            "unit": "ns",
            "range": "± 3380.4651313893096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118623.83908045977,
            "unit": "ns",
            "range": "± 15831.269532070371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115667.79069767441,
            "unit": "ns",
            "range": "± 12416.899384559147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119469.77777777778,
            "unit": "ns",
            "range": "± 16042.64630288596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9203.91304347826,
            "unit": "ns",
            "range": "± 1202.8838758288753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26142.920454545456,
            "unit": "ns",
            "range": "± 3026.114016288349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660732.8369565217,
            "unit": "ns",
            "range": "± 144713.03458704302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3254137.623529412,
            "unit": "ns",
            "range": "± 247391.01327068184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2691829.564705882,
            "unit": "ns",
            "range": "± 267622.56731362257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7377691.1477272725,
            "unit": "ns",
            "range": "± 1022847.5738911224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3774500.263736264,
            "unit": "ns",
            "range": "± 491192.06002530974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583206.3947368423,
            "unit": "ns",
            "range": "± 266873.5503329394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4580176.3369565215,
            "unit": "ns",
            "range": "± 282864.41339026985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470710.537634409,
            "unit": "ns",
            "range": "± 284791.7805982026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7961095.095238095,
            "unit": "ns",
            "range": "± 424926.6173100163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8006471.6875,
            "unit": "ns",
            "range": "± 1020072.7695282898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2225801.911569149,
            "unit": "ns",
            "range": "± 147819.85649183576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428032.3121027541,
            "unit": "ns",
            "range": "± 63089.562750158504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3406767.794189453,
            "unit": "ns",
            "range": "± 264660.5365613556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1152525.5089638159,
            "unit": "ns",
            "range": "± 74421.39952622469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900677.3449959591,
            "unit": "ns",
            "range": "± 49281.806250404305"
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
          "id": "96d0699e4e3011bb85f881195d1c7bbd6aa7e318",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T18:18:26+09:00",
          "tree_id": "6b6ef1d28313ee888b115e67bf374a313efc8cf9",
          "url": "https://github.com/greymistcube/libplanet/commit/96d0699e4e3011bb85f881195d1c7bbd6aa7e318"
        },
        "date": 1682675007276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10496764.923529413,
            "unit": "ns",
            "range": "± 1486604.9494478651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22842621.69148936,
            "unit": "ns",
            "range": "± 1741683.291066453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57189522.02040816,
            "unit": "ns",
            "range": "± 3963691.835017175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114324213.28082192,
            "unit": "ns",
            "range": "± 5625847.869845406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245322731.4390244,
            "unit": "ns",
            "range": "± 12570725.445985222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75789.27272727272,
            "unit": "ns",
            "range": "± 7217.929454000352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399668.5,
            "unit": "ns",
            "range": "± 67465.0792823611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378561.97826086957,
            "unit": "ns",
            "range": "± 48791.04866312952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345484.8977272727,
            "unit": "ns",
            "range": "± 24130.48634825277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4575125.030927835,
            "unit": "ns",
            "range": "± 358038.62325018016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4293616.055555556,
            "unit": "ns",
            "range": "± 442987.3875629432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27323.3417721519,
            "unit": "ns",
            "range": "± 2645.7239903240675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126911.30434782608,
            "unit": "ns",
            "range": "± 14122.511985283863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124705.48913043478,
            "unit": "ns",
            "range": "± 10969.021160507478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135942.67021276595,
            "unit": "ns",
            "range": "± 31457.958938786414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9705.721649484536,
            "unit": "ns",
            "range": "± 1336.469491969015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22723.255319148935,
            "unit": "ns",
            "range": "± 5527.542730582213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1847878.8370786516,
            "unit": "ns",
            "range": "± 283042.0771415262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3225864.204301075,
            "unit": "ns",
            "range": "± 266186.7302326858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2953293.104395604,
            "unit": "ns",
            "range": "± 503200.7084086137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823760.056818182,
            "unit": "ns",
            "range": "± 401008.9607186215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3685787.7157894736,
            "unit": "ns",
            "range": "± 423532.41676125705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4087533.0408163266,
            "unit": "ns",
            "range": "± 546197.6037552552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4827453.8125,
            "unit": "ns",
            "range": "± 457315.23721507494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4544908.967032967,
            "unit": "ns",
            "range": "± 304225.54549556924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8377266.260416667,
            "unit": "ns",
            "range": "± 646217.8654561886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7101289.859375,
            "unit": "ns",
            "range": "± 244918.12670858795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2106866.996433424,
            "unit": "ns",
            "range": "± 52139.97893894474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428313.0350341797,
            "unit": "ns",
            "range": "± 43865.554303945624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116182.664654356,
            "unit": "ns",
            "range": "± 234250.2240118492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976157.7331157484,
            "unit": "ns",
            "range": "± 33163.023143136954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 885048.8540581597,
            "unit": "ns",
            "range": "± 28872.043728866152"
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
          "id": "7442d7cc43c5e6d6560cfc870f825c2b4c9cc1af",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T18:31:35+09:00",
          "tree_id": "ddd62d25c03e750ed1f19fc0ac680b0c91dbd472",
          "url": "https://github.com/greymistcube/libplanet/commit/7442d7cc43c5e6d6560cfc870f825c2b4c9cc1af"
        },
        "date": 1682675777856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11881454.135416666,
            "unit": "ns",
            "range": "± 2626864.3000810705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31118181.36842105,
            "unit": "ns",
            "range": "± 4502063.170709803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70318283.68390805,
            "unit": "ns",
            "range": "± 13775521.875402363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135785481.35416666,
            "unit": "ns",
            "range": "± 26006486.338976998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265782250.35869566,
            "unit": "ns",
            "range": "± 38890223.05485006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76164.13829787234,
            "unit": "ns",
            "range": "± 15120.9067749167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409377.7816091954,
            "unit": "ns",
            "range": "± 40164.722493873785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 393447.0632183908,
            "unit": "ns",
            "range": "± 44443.30001528761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329644.478021978,
            "unit": "ns",
            "range": "± 24446.399950357616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4957819.357142857,
            "unit": "ns",
            "range": "± 75180.04765751159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4627554.585365853,
            "unit": "ns",
            "range": "± 165009.66989679355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21041.372340425532,
            "unit": "ns",
            "range": "± 1815.797688887354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107251.46774193548,
            "unit": "ns",
            "range": "± 10456.576383405401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91635.91011235955,
            "unit": "ns",
            "range": "± 7477.620028276573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116492.48936170213,
            "unit": "ns",
            "range": "± 14600.259900282585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7073.489361702128,
            "unit": "ns",
            "range": "± 1058.2891929971893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20454.155913978495,
            "unit": "ns",
            "range": "± 2118.4114407951583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2051561.930107527,
            "unit": "ns",
            "range": "± 264201.4249932936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4187766.873493976,
            "unit": "ns",
            "range": "± 736648.5939083929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3418640.659090909,
            "unit": "ns",
            "range": "± 552454.8638922914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16732545.625,
            "unit": "ns",
            "range": "± 6505810.6243509045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4289178.697802198,
            "unit": "ns",
            "range": "± 637336.0525553605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4492356.784090909,
            "unit": "ns",
            "range": "± 564220.5212975665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5436439.8375,
            "unit": "ns",
            "range": "± 264262.2854844777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6258048.252747253,
            "unit": "ns",
            "range": "± 1394856.040398615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12694466.631578946,
            "unit": "ns",
            "range": "± 3752630.378249876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7603310.580202793,
            "unit": "ns",
            "range": "± 293733.8256958431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2269513.518329327,
            "unit": "ns",
            "range": "± 21540.63580468701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1520441.7975725445,
            "unit": "ns",
            "range": "± 21582.773059005714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3011275.595252404,
            "unit": "ns",
            "range": "± 38642.83010983659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 953487.5641276041,
            "unit": "ns",
            "range": "± 4123.817898937102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894292.2503551136,
            "unit": "ns",
            "range": "± 21510.283674032686"
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
          "id": "866ad6cc0f8fbff4464eb29516b23da11655bcae",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T18:48:46+09:00",
          "tree_id": "4657e6c865b152b723774737bb46cf651aba8e8b",
          "url": "https://github.com/greymistcube/libplanet/commit/866ad6cc0f8fbff4464eb29516b23da11655bcae"
        },
        "date": 1682677589242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11886144.962962963,
            "unit": "ns",
            "range": "± 5219890.07239275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29955008.091836736,
            "unit": "ns",
            "range": "± 2737139.938762877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67334352.25316456,
            "unit": "ns",
            "range": "± 12656372.28154774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122777457.59770115,
            "unit": "ns",
            "range": "± 11767763.233100988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273396034.2346939,
            "unit": "ns",
            "range": "± 22762050.654413156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86168.1046511628,
            "unit": "ns",
            "range": "± 10702.069792146662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412050.5543478261,
            "unit": "ns",
            "range": "± 59769.66704699885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 401905.27419354836,
            "unit": "ns",
            "range": "± 62407.79585031113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 444355.79347826086,
            "unit": "ns",
            "range": "± 90759.38977857256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5719796.924731183,
            "unit": "ns",
            "range": "± 1166654.7471549683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4373919.439560439,
            "unit": "ns",
            "range": "± 316799.8469523062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32763.404761904763,
            "unit": "ns",
            "range": "± 3159.4576346324534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140861.25531914894,
            "unit": "ns",
            "range": "± 19619.166356674927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128680.12790697675,
            "unit": "ns",
            "range": "± 11743.048764415793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155893.47826086957,
            "unit": "ns",
            "range": "± 30076.102316257402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11558.989130434782,
            "unit": "ns",
            "range": "± 1899.8449878615181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29688.692771084337,
            "unit": "ns",
            "range": "± 4804.924027870331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1954937.5823529412,
            "unit": "ns",
            "range": "± 525899.9798298652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4505678.802325581,
            "unit": "ns",
            "range": "± 1695315.9611547675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4176778.0977011495,
            "unit": "ns",
            "range": "± 2100326.2100409353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11597803.120879121,
            "unit": "ns",
            "range": "± 4191146.292959024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3875006.7717391304,
            "unit": "ns",
            "range": "± 519275.95160258625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4045127.069892473,
            "unit": "ns",
            "range": "± 503970.70168742246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5338485.786516854,
            "unit": "ns",
            "range": "± 677927.7815964831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5053800.395833333,
            "unit": "ns",
            "range": "± 444512.4217372151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9199610.483516483,
            "unit": "ns",
            "range": "± 858937.2038246434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8490388.671463815,
            "unit": "ns",
            "range": "± 894074.8924210551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2495267.7236032197,
            "unit": "ns",
            "range": "± 175396.81000293297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1510390.2710640824,
            "unit": "ns",
            "range": "± 78229.71258892525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3746037.9186480977,
            "unit": "ns",
            "range": "± 240099.44164973634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1132026.6971638997,
            "unit": "ns",
            "range": "± 84934.10243272036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 958769.405049642,
            "unit": "ns",
            "range": "± 98111.4722288132"
          }
        ]
      }
    ]
  }
}