window.BENCHMARK_DATA = {
  "lastUpdate": 1692336026499,
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
          "id": "fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:03:47+09:00",
          "tree_id": "f8d4e920eefba0d306e903ac9034f3c4cc0c3174",
          "url": "https://github.com/greymistcube/libplanet/commit/fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c"
        },
        "date": 1692332341739,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483167.2386363635,
            "unit": "ns",
            "range": "± 80901.86971185173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2784315.2580645164,
            "unit": "ns",
            "range": "± 84583.62893884677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1835411.9375,
            "unit": "ns",
            "range": "± 95010.31222262989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4835718.230769231,
            "unit": "ns",
            "range": "± 165912.04313152473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283529.9032258064,
            "unit": "ns",
            "range": "± 8607.130673090534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274951.3617021277,
            "unit": "ns",
            "range": "± 9404.64287842315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244119.65714285715,
            "unit": "ns",
            "range": "± 7809.530557341485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4611156.133333334,
            "unit": "ns",
            "range": "± 44450.90096928241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4129208.4285714286,
            "unit": "ns",
            "range": "± 52741.12053112941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22000.597826086956,
            "unit": "ns",
            "range": "± 1606.863787656917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93410.05319148937,
            "unit": "ns",
            "range": "± 5440.665053368631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80953.79569892473,
            "unit": "ns",
            "range": "± 5257.09036436618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88248.37373737374,
            "unit": "ns",
            "range": "± 14040.63045315845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5849.655913978495,
            "unit": "ns",
            "range": "± 729.9814395291403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20684.542553191488,
            "unit": "ns",
            "range": "± 1411.0485208798748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48588.59574468085,
            "unit": "ns",
            "range": "± 2699.4276188164426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8791456.833333334,
            "unit": "ns",
            "range": "± 177906.2449187443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22832887.2,
            "unit": "ns",
            "range": "± 196769.5142909955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57587612.333333336,
            "unit": "ns",
            "range": "± 377495.40796141134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115363721.26666667,
            "unit": "ns",
            "range": "± 688950.6205088252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229274817.86666667,
            "unit": "ns",
            "range": "± 896438.0288563388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3711468.8666666667,
            "unit": "ns",
            "range": "± 55552.92518833687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3798577.1153846155,
            "unit": "ns",
            "range": "± 99996.99383214556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4877697.692307692,
            "unit": "ns",
            "range": "± 132111.88737786445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4169032.8571428573,
            "unit": "ns",
            "range": "± 72737.72741935143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6570152.055555556,
            "unit": "ns",
            "range": "± 218511.59969065315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4983163.743990385,
            "unit": "ns",
            "range": "± 22157.934416278324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612522.364453125,
            "unit": "ns",
            "range": "± 881.5727482292962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1093490.853236607,
            "unit": "ns",
            "range": "± 588.3259619661461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596106.16484375,
            "unit": "ns",
            "range": "± 5972.62885093837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838958.8857421875,
            "unit": "ns",
            "range": "± 320.7539938302904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745033.4972330729,
            "unit": "ns",
            "range": "± 231.69994891920933"
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
          "id": "b327162b0138de3d8d4152ec0c253021c659619a",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:06:35+09:00",
          "tree_id": "1dff3457ca856391c36cd0caec5a2543921a250f",
          "url": "https://github.com/greymistcube/libplanet/commit/b327162b0138de3d8d4152ec0c253021c659619a"
        },
        "date": 1692332396464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222313.9375,
            "unit": "ns",
            "range": "± 93831.10716633628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411976.5142857144,
            "unit": "ns",
            "range": "± 104801.2616808796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4223661.533333333,
            "unit": "ns",
            "range": "± 43743.533663954535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3679886,
            "unit": "ns",
            "range": "± 137703.64279233527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5994137.916666667,
            "unit": "ns",
            "range": "± 177354.33966745378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7572920.230769231,
            "unit": "ns",
            "range": "± 20582.017175817367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19542447.2,
            "unit": "ns",
            "range": "± 115736.77445899133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50688316.4,
            "unit": "ns",
            "range": "± 328059.1275473284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102439069.35714285,
            "unit": "ns",
            "range": "± 510965.77241136174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202897168.64285713,
            "unit": "ns",
            "range": "± 1377425.8163792682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46578.93406593407,
            "unit": "ns",
            "range": "± 2743.8011622248832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4913236.076322115,
            "unit": "ns",
            "range": "± 4574.298364353228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593966.2280970982,
            "unit": "ns",
            "range": "± 3927.702776122389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072541.3381911058,
            "unit": "ns",
            "range": "± 348.5636859060764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559818.137276786,
            "unit": "ns",
            "range": "± 7349.060155900468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859629.9405598958,
            "unit": "ns",
            "range": "± 13829.323965837582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726738.3518229167,
            "unit": "ns",
            "range": "± 392.8719374511808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261826.18181818182,
            "unit": "ns",
            "range": "± 8198.100311069597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253318.9,
            "unit": "ns",
            "range": "± 8330.993051282232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222620.42857142858,
            "unit": "ns",
            "range": "± 2224.4026238446654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4148661.6,
            "unit": "ns",
            "range": "± 31943.63357496183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3885236.923076923,
            "unit": "ns",
            "range": "± 21227.606241486337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19720.957894736843,
            "unit": "ns",
            "range": "± 1325.6844150932197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86107.50980392157,
            "unit": "ns",
            "range": "± 3523.95726632744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71549.59375,
            "unit": "ns",
            "range": "± 2077.639073554326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72512.27011494253,
            "unit": "ns",
            "range": "± 8206.057797410724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4517.010638297872,
            "unit": "ns",
            "range": "± 518.5878363128385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17865.917525773195,
            "unit": "ns",
            "range": "± 1840.8719892016252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355042.4315789475,
            "unit": "ns",
            "range": "± 89509.29477477586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546304.5263157897,
            "unit": "ns",
            "range": "± 55601.63847742501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1713974.5666666667,
            "unit": "ns",
            "range": "± 94486.71889873368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4526215.419354838,
            "unit": "ns",
            "range": "± 135177.49866077915"
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
          "id": "e308ec59605017506ac6455c471c3ff973ffd035",
          "message": "Changelog",
          "timestamp": "2023-08-18T13:09:35+09:00",
          "tree_id": "faa628bbaaf525b8cfdb32ff2ab8dc2dd3577a12",
          "url": "https://github.com/greymistcube/libplanet/commit/e308ec59605017506ac6455c471c3ff973ffd035"
        },
        "date": 1692332975865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3880534.8068181816,
            "unit": "ns",
            "range": "± 267700.9216581826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4080229.1224489794,
            "unit": "ns",
            "range": "± 345267.63684859866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5340959.989010989,
            "unit": "ns",
            "range": "± 464757.4011744789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4534025.840425532,
            "unit": "ns",
            "range": "± 398549.86392264545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8137904.084210526,
            "unit": "ns",
            "range": "± 709464.7751796235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9700925.6,
            "unit": "ns",
            "range": "± 657107.0359927058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28137094.721649483,
            "unit": "ns",
            "range": "± 1983747.2412771187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67666331.19672132,
            "unit": "ns",
            "range": "± 3018965.7563695707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133766112.75675675,
            "unit": "ns",
            "range": "± 4114652.986615784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277407439.6865672,
            "unit": "ns",
            "range": "± 13054644.115588764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61819.617021276594,
            "unit": "ns",
            "range": "± 15831.581975650764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6159468.2475,
            "unit": "ns",
            "range": "± 161158.859005216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2026767.3967285156,
            "unit": "ns",
            "range": "± 33994.99913873688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335883.0864257812,
            "unit": "ns",
            "range": "± 41275.22830837482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144779.6111778845,
            "unit": "ns",
            "range": "± 26416.004466628623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030262.0633370535,
            "unit": "ns",
            "range": "± 13320.357011011822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955476.0124080882,
            "unit": "ns",
            "range": "± 19201.887557676186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347370.3829787234,
            "unit": "ns",
            "range": "± 50043.88348070367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327969.2989690722,
            "unit": "ns",
            "range": "± 55332.32173181063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285880.9696969697,
            "unit": "ns",
            "range": "± 52517.200802904015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4841277.819148936,
            "unit": "ns",
            "range": "± 342879.1683784416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4526982.673913044,
            "unit": "ns",
            "range": "± 331278.34221103304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25705.385416666668,
            "unit": "ns",
            "range": "± 10369.601643234135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113224.3469387755,
            "unit": "ns",
            "range": "± 23477.509177013286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102939.5376344086,
            "unit": "ns",
            "range": "± 20971.606763182135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126251.03125,
            "unit": "ns",
            "range": "± 35431.20003626097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6031.045977011494,
            "unit": "ns",
            "range": "± 993.2700622017085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21884.945652173912,
            "unit": "ns",
            "range": "± 6762.400140213127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685884,
            "unit": "ns",
            "range": "± 199770.09201616584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3321694.4516129033,
            "unit": "ns",
            "range": "± 369361.0755524627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2129671.21875,
            "unit": "ns",
            "range": "± 264196.2287056706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6050831.869565218,
            "unit": "ns",
            "range": "± 574133.4945879999"
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
          "id": "4634f1d0a23f40b39d8d1b80853933151dbbedcf",
          "message": "Fix FullNode equality",
          "timestamp": "2023-08-18T14:00:26+09:00",
          "tree_id": "d5a4068ddcce9d9edfc735c6064f1cb2c5d5b8c5",
          "url": "https://github.com/greymistcube/libplanet/commit/4634f1d0a23f40b39d8d1b80853933151dbbedcf"
        },
        "date": 1692335620943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321004,
            "unit": "ns",
            "range": "± 50311.00504575799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3420384.8,
            "unit": "ns",
            "range": "± 51394.67454513162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4239224.333333333,
            "unit": "ns",
            "range": "± 76411.72523120731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3711561.1666666665,
            "unit": "ns",
            "range": "± 112141.01396507116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5928556.074074074,
            "unit": "ns",
            "range": "± 134553.21840530264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7788123.266666667,
            "unit": "ns",
            "range": "± 21893.948349998016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19613902.4,
            "unit": "ns",
            "range": "± 49641.43950773386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50392174.46666667,
            "unit": "ns",
            "range": "± 235881.42529635117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100933128.13333334,
            "unit": "ns",
            "range": "± 882619.1563635931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203457255,
            "unit": "ns",
            "range": "± 970845.0533183806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46044.74725274725,
            "unit": "ns",
            "range": "± 2604.3502477944116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4884069.955729167,
            "unit": "ns",
            "range": "± 3383.315677217481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1691704.7022235577,
            "unit": "ns",
            "range": "± 929.981922687893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060883.5620814732,
            "unit": "ns",
            "range": "± 517.1514648230748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2515953.4834635416,
            "unit": "ns",
            "range": "± 2145.5316680052742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825880.3294503348,
            "unit": "ns",
            "range": "± 616.2410542088758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751178.6943359375,
            "unit": "ns",
            "range": "± 494.63116016901813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265096.2,
            "unit": "ns",
            "range": "± 6706.140504924936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254656.68421052632,
            "unit": "ns",
            "range": "± 4637.749586606652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218634.7857142857,
            "unit": "ns",
            "range": "± 3556.3061254961954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4115895.5,
            "unit": "ns",
            "range": "± 15878.21695933433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857960.846153846,
            "unit": "ns",
            "range": "± 18962.5148466044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17420.685393258427,
            "unit": "ns",
            "range": "± 912.4338530882617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81724.23076923077,
            "unit": "ns",
            "range": "± 3771.943012101119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68126.84615384616,
            "unit": "ns",
            "range": "± 985.1493834400485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74371.45454545454,
            "unit": "ns",
            "range": "± 11988.179108275639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4468.5360824742265,
            "unit": "ns",
            "range": "± 456.2491338314989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17967.16129032258,
            "unit": "ns",
            "range": "± 1101.4408280137918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1303523.085106383,
            "unit": "ns",
            "range": "± 77468.47520643403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462048.576923077,
            "unit": "ns",
            "range": "± 67394.84175761412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1662374.0210526315,
            "unit": "ns",
            "range": "± 106327.88665896287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4383012.517241379,
            "unit": "ns",
            "range": "± 95900.49347765956"
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
          "id": "b2170cb6de33d05d5d46f8d5ab7d278e14394ea8",
          "message": "Fix FullNode equality",
          "timestamp": "2023-08-18T13:59:27+09:00",
          "tree_id": "fdc59496aa611b4c22af88ff97abb9b64ee66f32",
          "url": "https://github.com/greymistcube/libplanet/commit/b2170cb6de33d05d5d46f8d5ab7d278e14394ea8"
        },
        "date": 1692336017235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1803787.1979166667,
            "unit": "ns",
            "range": "± 147083.33723305658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3485341.9565217393,
            "unit": "ns",
            "range": "± 167387.05997182932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2247505.0206185565,
            "unit": "ns",
            "range": "± 167125.44626186864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6110864.391752577,
            "unit": "ns",
            "range": "± 433484.3613223348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393715.5833333333,
            "unit": "ns",
            "range": "± 50376.53174219054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389570.8947368421,
            "unit": "ns",
            "range": "± 29956.296950892953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356030.8461538461,
            "unit": "ns",
            "range": "± 5265.960118948773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5490151.882978723,
            "unit": "ns",
            "range": "± 505727.9269034077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5063202.5813953485,
            "unit": "ns",
            "range": "± 364321.7686161334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36118.16483516483,
            "unit": "ns",
            "range": "± 3313.767537826046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 169151.1847826087,
            "unit": "ns",
            "range": "± 23879.082317085376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135940.4347826087,
            "unit": "ns",
            "range": "± 24768.563912153346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119298.0625,
            "unit": "ns",
            "range": "± 27894.979901809726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5614.115384615385,
            "unit": "ns",
            "range": "± 816.8267708189254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28833.40404040404,
            "unit": "ns",
            "range": "± 12296.559722896443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65110.614583333336,
            "unit": "ns",
            "range": "± 15868.659812327069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8539747.87628866,
            "unit": "ns",
            "range": "± 610394.8863517619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23936101.484848484,
            "unit": "ns",
            "range": "± 1574338.8734260146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63076117.20253164,
            "unit": "ns",
            "range": "± 3278484.40366708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121445067.04166667,
            "unit": "ns",
            "range": "± 8456604.984299693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269267890.3469388,
            "unit": "ns",
            "range": "± 18748589.562971555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4181093.9285714286,
            "unit": "ns",
            "range": "± 289902.7588329822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4398110.150537634,
            "unit": "ns",
            "range": "± 419415.51845252834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5605310.052083333,
            "unit": "ns",
            "range": "± 380870.49059377733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4761407.44,
            "unit": "ns",
            "range": "± 545715.8581310457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7938917.459183673,
            "unit": "ns",
            "range": "± 629233.318958467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6099353.601207387,
            "unit": "ns",
            "range": "± 149447.21038245666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1805464.5391015625,
            "unit": "ns",
            "range": "± 166010.04762683122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339410.6748560856,
            "unit": "ns",
            "range": "± 29054.32606355563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3327860.7744791666,
            "unit": "ns",
            "range": "± 50063.73327560908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038505.3681640625,
            "unit": "ns",
            "range": "± 12834.481868933986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1016331.140234375,
            "unit": "ns",
            "range": "± 16390.217543107214"
          }
        ]
      }
    ]
  }
}