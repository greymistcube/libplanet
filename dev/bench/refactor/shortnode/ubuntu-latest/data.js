window.BENCHMARK_DATA = {
  "lastUpdate": 1703650794454,
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
          "id": "938aabdadb2386ae59955429b57526892249e438",
          "message": "Cleaned up ShortNode internal implementation",
          "timestamp": "2023-12-27T11:18:21+09:00",
          "tree_id": "69943ff6e6d38f5e91e2c20aff61552354c1487d",
          "url": "https://github.com/greymistcube/libplanet/commit/938aabdadb2386ae59955429b57526892249e438"
        },
        "date": 1703647407934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702796.859635417,
            "unit": "ns",
            "range": "± 55998.840101715905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211840.4651041667,
            "unit": "ns",
            "range": "± 3769.65542405528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772745.548828125,
            "unit": "ns",
            "range": "± 858.4767084316436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963310.0564903845,
            "unit": "ns",
            "range": "± 8562.03516063491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621263.0169270834,
            "unit": "ns",
            "range": "± 1945.1753860011308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576999.0913461539,
            "unit": "ns",
            "range": "± 2207.1846655798727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442324.5555555555,
            "unit": "ns",
            "range": "± 50996.21112739331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514799.8958333335,
            "unit": "ns",
            "range": "± 99060.36442927746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3301834.095238095,
            "unit": "ns",
            "range": "± 76424.32655045431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3049049.205882353,
            "unit": "ns",
            "range": "± 61002.667595119055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7338888.879310345,
            "unit": "ns",
            "range": "± 317259.8958865311"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42427.98387096774,
            "unit": "ns",
            "range": "± 5105.822055374635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197426.85483870967,
            "unit": "ns",
            "range": "± 8250.409553364903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196542.80555555556,
            "unit": "ns",
            "range": "± 6452.920897079729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170855.23076923078,
            "unit": "ns",
            "range": "± 2405.202145137568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026449.7333333334,
            "unit": "ns",
            "range": "± 35611.53388894965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855541.3076923075,
            "unit": "ns",
            "range": "± 46292.91569161279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13232.816091954022,
            "unit": "ns",
            "range": "± 1390.9991016058461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61886.1976744186,
            "unit": "ns",
            "range": "± 4925.871374857608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53946.27173913043,
            "unit": "ns",
            "range": "± 3285.6653602295423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68164.04301075269,
            "unit": "ns",
            "range": "± 10544.535522697732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3393.5729166666665,
            "unit": "ns",
            "range": "± 876.3919964657928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14644.030927835052,
            "unit": "ns",
            "range": "± 3057.6870120430635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5475125.866666666,
            "unit": "ns",
            "range": "± 38714.803873724486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14314129.866666667,
            "unit": "ns",
            "range": "± 124163.71928389357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36918057.78571428,
            "unit": "ns",
            "range": "± 146319.77522177427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77292263.33333333,
            "unit": "ns",
            "range": "± 1353563.9240513314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151344145.8846154,
            "unit": "ns",
            "range": "± 2130578.0677653165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962296.8296703297,
            "unit": "ns",
            "range": "± 64409.821886288766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860827.8857142858,
            "unit": "ns",
            "range": "± 60421.130922770346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1406608.682795699,
            "unit": "ns",
            "range": "± 91477.74393402858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5728650.583333333,
            "unit": "ns",
            "range": "± 142188.6861022037"
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
          "id": "b16de5803ed328efb2737589f13906141bfc6da4",
          "message": "Added documnetation and changelog",
          "timestamp": "2023-12-27T13:06:40+09:00",
          "tree_id": "9a6c9abd10c9c5f186ad70cb60d91371c7b633dd",
          "url": "https://github.com/greymistcube/libplanet/commit/b16de5803ed328efb2737589f13906141bfc6da4"
        },
        "date": 1703650679818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800219.08203125,
            "unit": "ns",
            "range": "± 50954.862942461026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212774.9135742188,
            "unit": "ns",
            "range": "± 2230.099290479228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763694.11640625,
            "unit": "ns",
            "range": "± 13026.904041075364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947294.9005859375,
            "unit": "ns",
            "range": "± 20758.047872724772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624582.9595947266,
            "unit": "ns",
            "range": "± 11891.292699246034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579332.8973307292,
            "unit": "ns",
            "range": "± 1509.926788258512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2600389.7714285715,
            "unit": "ns",
            "range": "± 125892.48644004014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2649322.3214285714,
            "unit": "ns",
            "range": "± 106865.68538958477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3252666.595238095,
            "unit": "ns",
            "range": "± 76599.39129255843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173469.1,
            "unit": "ns",
            "range": "± 141610.24277766477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7099200.75,
            "unit": "ns",
            "range": "± 154825.1473525011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43078.23655913978,
            "unit": "ns",
            "range": "± 5204.438317849591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223730.4387755102,
            "unit": "ns",
            "range": "± 27800.781926653188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217731.48979591837,
            "unit": "ns",
            "range": "± 13568.246992838009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169034.5873015873,
            "unit": "ns",
            "range": "± 7738.557166583529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3120690.4285714286,
            "unit": "ns",
            "range": "± 26675.048421019525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2749871.6875,
            "unit": "ns",
            "range": "± 51465.25078110958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13624.242268041236,
            "unit": "ns",
            "range": "± 2296.318567649598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61220.084210526315,
            "unit": "ns",
            "range": "± 5173.2854918385465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56094.28571428572,
            "unit": "ns",
            "range": "± 6541.569550507507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100104.78350515464,
            "unit": "ns",
            "range": "± 16083.963123394838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4683.858585858586,
            "unit": "ns",
            "range": "± 1480.7131418236986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14736.173469387755,
            "unit": "ns",
            "range": "± 2911.0777719498346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5743844.2,
            "unit": "ns",
            "range": "± 68226.51781926773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15058040.333333334,
            "unit": "ns",
            "range": "± 169676.2628754563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38090026.961538464,
            "unit": "ns",
            "range": "± 203308.17149695652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75992293.73333333,
            "unit": "ns",
            "range": "± 370221.65641264664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153693441.41666666,
            "unit": "ns",
            "range": "± 558969.1655817647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968801.8186813187,
            "unit": "ns",
            "range": "± 82827.55615023019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907359.65625,
            "unit": "ns",
            "range": "± 88281.49570409971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384520.3131868131,
            "unit": "ns",
            "range": "± 76894.76661240234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5895088.016666667,
            "unit": "ns",
            "range": "± 262170.74291116645"
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
          "id": "9c432c5a336c4d5c216722103c691b710b1deeb2",
          "message": "Added documnetation and changelog",
          "timestamp": "2023-12-27T13:05:26+09:00",
          "tree_id": "8f7a6ce44c81de6991ac82263f5cf2d2e81e079f",
          "url": "https://github.com/greymistcube/libplanet/commit/9c432c5a336c4d5c216722103c691b710b1deeb2"
        },
        "date": 1703650787346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3672097.5924479165,
            "unit": "ns",
            "range": "± 7302.798352383656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200228.1647135417,
            "unit": "ns",
            "range": "± 3348.3567657728026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777825.8713191106,
            "unit": "ns",
            "range": "± 5361.4367030167605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945333.5061598558,
            "unit": "ns",
            "range": "± 2392.990545542265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622888.4674246652,
            "unit": "ns",
            "range": "± 803.473813234637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571532.9659016927,
            "unit": "ns",
            "range": "± 512.723532494702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403938.933333333,
            "unit": "ns",
            "range": "± 39046.742405676276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2459125.119402985,
            "unit": "ns",
            "range": "± 101267.307614105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3038705.1153846155,
            "unit": "ns",
            "range": "± 41479.317586275174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2927460.804347826,
            "unit": "ns",
            "range": "± 111573.30789552564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6701278,
            "unit": "ns",
            "range": "± 182181.2246959055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40876.989583333336,
            "unit": "ns",
            "range": "± 5683.1683935428155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197307.3469387755,
            "unit": "ns",
            "range": "± 7764.039910464945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188971.85135135136,
            "unit": "ns",
            "range": "± 8383.969572912267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161514.66666666666,
            "unit": "ns",
            "range": "± 3007.1511356067476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090871.533333333,
            "unit": "ns",
            "range": "± 37649.4616369528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746831,
            "unit": "ns",
            "range": "± 40174.37385467737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11902.327956989247,
            "unit": "ns",
            "range": "± 1061.030268629996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59820.4367816092,
            "unit": "ns",
            "range": "± 3260.1617191345667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62043.8275862069,
            "unit": "ns",
            "range": "± 1802.7189201109827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58809.60824742268,
            "unit": "ns",
            "range": "± 11118.51227360318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3226.053191489362,
            "unit": "ns",
            "range": "± 721.4826038636531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11886.005263157895,
            "unit": "ns",
            "range": "± 1296.253339712838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5625364.8,
            "unit": "ns",
            "range": "± 29153.685349491287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14148399.666666666,
            "unit": "ns",
            "range": "± 92498.64487089733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36001754.76923077,
            "unit": "ns",
            "range": "± 126484.16158762979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73681252,
            "unit": "ns",
            "range": "± 281087.8754929972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147847104.1,
            "unit": "ns",
            "range": "± 957384.9107549466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963940.6808510638,
            "unit": "ns",
            "range": "± 78165.18774622386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826378.1379310344,
            "unit": "ns",
            "range": "± 52722.98808037299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378177.71875,
            "unit": "ns",
            "range": "± 90695.9719236345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5969085.597826087,
            "unit": "ns",
            "range": "± 336238.3542267957"
          }
        ]
      }
    ]
  }
}