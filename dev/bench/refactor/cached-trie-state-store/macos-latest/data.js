window.BENCHMARK_DATA = {
  "lastUpdate": 1700049897504,
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
          "id": "36edcf8fc51a39ee63c4511f91b090c07a38d2e3",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-15T10:59:12+09:00",
          "tree_id": "018584c062bbc4b3e74bb6135651e788b8e16e58",
          "url": "https://github.com/greymistcube/libplanet/commit/36edcf8fc51a39ee63c4511f91b090c07a38d2e3"
        },
        "date": 1700031515761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703330.884615385,
            "unit": "ns",
            "range": "± 77816.25247823498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18848900.766666666,
            "unit": "ns",
            "range": "± 258996.85818294805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47328505.61904762,
            "unit": "ns",
            "range": "± 1532258.4413798645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94464673.85714285,
            "unit": "ns",
            "range": "± 2228542.735390176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190434140.2142857,
            "unit": "ns",
            "range": "± 3327147.3410959537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41089.811111111114,
            "unit": "ns",
            "range": "± 9849.260308614117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226234.71134020618,
            "unit": "ns",
            "range": "± 17543.93155051458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221358.875,
            "unit": "ns",
            "range": "± 21326.311976794743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201830.88764044945,
            "unit": "ns",
            "range": "± 23912.581748393368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3738315.230769231,
            "unit": "ns",
            "range": "± 52025.04249262055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3535021.1875,
            "unit": "ns",
            "range": "± 96874.05842620463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13925.247126436781,
            "unit": "ns",
            "range": "± 2046.5090879200416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59327.663043478264,
            "unit": "ns",
            "range": "± 6186.6059048137495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54994.8,
            "unit": "ns",
            "range": "± 8043.058059489226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61532.586021505376,
            "unit": "ns",
            "range": "± 11689.559180753822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3340.5494505494507,
            "unit": "ns",
            "range": "± 716.2499139226051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12401.46590909091,
            "unit": "ns",
            "range": "± 1441.4723351758523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062118.5505617978,
            "unit": "ns",
            "range": "± 73690.11188570368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2290347.589285714,
            "unit": "ns",
            "range": "± 98224.0063749048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1735569.0526315789,
            "unit": "ns",
            "range": "± 118132.20941848563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8513120.217391305,
            "unit": "ns",
            "range": "± 724782.2625452379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2922809.777777778,
            "unit": "ns",
            "range": "± 61413.64824436834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2963511.1714285715,
            "unit": "ns",
            "range": "± 94026.66797196913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3584140.6129032257,
            "unit": "ns",
            "range": "± 96886.41376294801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3559332.383116883,
            "unit": "ns",
            "range": "± 182029.33498622038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12642672.693548387,
            "unit": "ns",
            "range": "± 1189091.7546361692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4170415.7522321427,
            "unit": "ns",
            "range": "± 58264.30201651273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1355080.1294270833,
            "unit": "ns",
            "range": "± 24130.08323154852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 900507.2103160511,
            "unit": "ns",
            "range": "± 21530.75388577185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2183921.466796875,
            "unit": "ns",
            "range": "± 144491.11091626793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 669502.190669545,
            "unit": "ns",
            "range": "± 28670.934485519443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 619837.2456942472,
            "unit": "ns",
            "range": "± 22145.64689294372"
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
          "id": "2cb9598b3c4da87ba22bcac76efd64c3b8cea0b1",
          "message": "Cleanup",
          "timestamp": "2023-11-15T16:17:53+09:00",
          "tree_id": "95f237df7f8055061a247e7af3498a539678ae8e",
          "url": "https://github.com/greymistcube/libplanet/commit/2cb9598b3c4da87ba22bcac76efd64c3b8cea0b1"
        },
        "date": 1700033751056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12884614.101123596,
            "unit": "ns",
            "range": "± 2605151.766407709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23165935.2,
            "unit": "ns",
            "range": "± 286242.56824942824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57356797.60526316,
            "unit": "ns",
            "range": "± 964585.4956112205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112326776.57142857,
            "unit": "ns",
            "range": "± 1086569.6619452443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209810705.14583334,
            "unit": "ns",
            "range": "± 12509874.083442168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65780.87640449438,
            "unit": "ns",
            "range": "± 12081.03293185064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243219.1494845361,
            "unit": "ns",
            "range": "± 25900.489468123167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258093.96666666667,
            "unit": "ns",
            "range": "± 29551.116209816297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234310.9255319149,
            "unit": "ns",
            "range": "± 33406.30127878277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4311113.066666666,
            "unit": "ns",
            "range": "± 421876.25007399445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4203598.615384615,
            "unit": "ns",
            "range": "± 40472.74204230641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18039.119565217392,
            "unit": "ns",
            "range": "± 3659.7137396081584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85626.29569892473,
            "unit": "ns",
            "range": "± 13973.021626753478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76752.37096774194,
            "unit": "ns",
            "range": "± 9645.21883835154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75075.17582417582,
            "unit": "ns",
            "range": "± 12491.27737582724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5935.038461538462,
            "unit": "ns",
            "range": "± 1330.9114613484694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16638.010638297874,
            "unit": "ns",
            "range": "± 3218.8792629676295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1844776.0714285714,
            "unit": "ns",
            "range": "± 566359.8823734625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3129279.3105263156,
            "unit": "ns",
            "range": "± 726469.2717818716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2585426.8608247424,
            "unit": "ns",
            "range": "± 663334.3685497657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12431246.113402061,
            "unit": "ns",
            "range": "± 3239579.2501253216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376205.4833333334,
            "unit": "ns",
            "range": "± 150735.5339709526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3598750.2608695654,
            "unit": "ns",
            "range": "± 227722.45469251368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4048172.14516129,
            "unit": "ns",
            "range": "± 347623.1741994997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3648467.285714286,
            "unit": "ns",
            "range": "± 118588.79517836894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13714945.46875,
            "unit": "ns",
            "range": "± 1870809.3183189824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878558.136217949,
            "unit": "ns",
            "range": "± 169113.69159949003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1480314.5693359375,
            "unit": "ns",
            "range": "± 18908.675948609085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883514.0901884191,
            "unit": "ns",
            "range": "± 17526.046456307176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1995582.6046875,
            "unit": "ns",
            "range": "± 28411.267949925765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631117.2525390625,
            "unit": "ns",
            "range": "± 3627.1139291279337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577505.5350060096,
            "unit": "ns",
            "range": "± 1911.2339059808194"
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
          "id": "2f672581a1746aaca795d8b7bc847c7c2c0f5fc4",
          "message": "Changelog",
          "timestamp": "2023-11-15T16:23:58+09:00",
          "tree_id": "cd6f6db03c14e8819c3fdf2657dc233041eb38f2",
          "url": "https://github.com/greymistcube/libplanet/commit/2f672581a1746aaca795d8b7bc847c7c2c0f5fc4"
        },
        "date": 1700034185700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7706702.642857143,
            "unit": "ns",
            "range": "± 136131.27448425948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20960290.46551724,
            "unit": "ns",
            "range": "± 1639019.0308659703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53255160.71428572,
            "unit": "ns",
            "range": "± 4578977.906899395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107162116.1632653,
            "unit": "ns",
            "range": "± 8227326.927250345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233847495.34042552,
            "unit": "ns",
            "range": "± 26304985.81794436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46904.22471910113,
            "unit": "ns",
            "range": "± 8909.444324771339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290732.36315789475,
            "unit": "ns",
            "range": "± 51755.7741292227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258851.5,
            "unit": "ns",
            "range": "± 38531.01814246202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236732.8085106383,
            "unit": "ns",
            "range": "± 26174.536605166395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3910267.923076923,
            "unit": "ns",
            "range": "± 154593.318685035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3689645.5212765955,
            "unit": "ns",
            "range": "± 324662.30033463205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17923.5,
            "unit": "ns",
            "range": "± 5860.0994684023835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95226.94565217392,
            "unit": "ns",
            "range": "± 19677.940290993745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81116.9494949495,
            "unit": "ns",
            "range": "± 24507.987898731346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75006.78723404255,
            "unit": "ns",
            "range": "± 13916.191278176764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7249.91052631579,
            "unit": "ns",
            "range": "± 1171.333305534328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14545.355670103092,
            "unit": "ns",
            "range": "± 3087.8019420161254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1271601.682795699,
            "unit": "ns",
            "range": "± 258955.91200799053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693690.430107527,
            "unit": "ns",
            "range": "± 408668.88429149106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1878169.4210526317,
            "unit": "ns",
            "range": "± 251758.32392786886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8350287.193181818,
            "unit": "ns",
            "range": "± 720583.5539494595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3158514.6024096385,
            "unit": "ns",
            "range": "± 167497.71659993954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3208085.8928571427,
            "unit": "ns",
            "range": "± 138108.90273583887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3862292.6,
            "unit": "ns",
            "range": "± 111497.7848406369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4024365.8444444444,
            "unit": "ns",
            "range": "± 467795.433767151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13433267.79787234,
            "unit": "ns",
            "range": "± 1716651.3631338004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4555727.408631859,
            "unit": "ns",
            "range": "± 235246.69890861848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1373224.9263139204,
            "unit": "ns",
            "range": "± 62049.01285305638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869785.3101981027,
            "unit": "ns",
            "range": "± 10017.644509634558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2140666.8717041016,
            "unit": "ns",
            "range": "± 126424.01865114833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 654355.1135498047,
            "unit": "ns",
            "range": "± 14276.342768791961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581021.2411411831,
            "unit": "ns",
            "range": "± 5858.650390007404"
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
          "id": "316688799b1c0a9e252a0a84717234b9415001c4",
          "message": "Typo",
          "timestamp": "2023-11-15T16:27:27+09:00",
          "tree_id": "e6875f10e551179de674c6806cd3642dddd95e7a",
          "url": "https://github.com/greymistcube/libplanet/commit/316688799b1c0a9e252a0a84717234b9415001c4"
        },
        "date": 1700034456449,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8478000.270588236,
            "unit": "ns",
            "range": "± 672291.0297558283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22074132.33870968,
            "unit": "ns",
            "range": "± 1901697.5359793927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53506958.07608695,
            "unit": "ns",
            "range": "± 4223510.410444939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110517175.73404256,
            "unit": "ns",
            "range": "± 11951071.637680661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215876419.13043478,
            "unit": "ns",
            "range": "± 8234576.1902093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66010.35789473684,
            "unit": "ns",
            "range": "± 22132.684338795454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248166.28260869565,
            "unit": "ns",
            "range": "± 39423.284733834254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236026.97701149425,
            "unit": "ns",
            "range": "± 25265.563451748883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231049.54347826086,
            "unit": "ns",
            "range": "± 24566.381397900263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804161.3055555555,
            "unit": "ns",
            "range": "± 114308.25703129472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500417,
            "unit": "ns",
            "range": "± 33518.28410274469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14437.239130434782,
            "unit": "ns",
            "range": "± 2357.043885092974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63851.12631578947,
            "unit": "ns",
            "range": "± 9095.713455274981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63357.770833333336,
            "unit": "ns",
            "range": "± 13854.628649682894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61001.1935483871,
            "unit": "ns",
            "range": "± 10370.021881929519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3846.989010989011,
            "unit": "ns",
            "range": "± 1097.3348672984976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13319.54255319149,
            "unit": "ns",
            "range": "± 2369.033262814242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433950.2551020407,
            "unit": "ns",
            "range": "± 354893.8184853821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3235008.855670103,
            "unit": "ns",
            "range": "± 783038.2623494525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093334.1170212766,
            "unit": "ns",
            "range": "± 456413.69686158915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10913046.43478261,
            "unit": "ns",
            "range": "± 2328608.180196905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3006934.411764706,
            "unit": "ns",
            "range": "± 58122.44495680953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3208317.1904761903,
            "unit": "ns",
            "range": "± 221644.7135555185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3867740.7213114756,
            "unit": "ns",
            "range": "± 174337.39756710563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4081001.4782608696,
            "unit": "ns",
            "range": "± 387655.3045169528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13603423.972527472,
            "unit": "ns",
            "range": "± 1859043.2089229864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4578485.253794643,
            "unit": "ns",
            "range": "± 149039.39680711148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582067.9380817818,
            "unit": "ns",
            "range": "± 107587.9421499636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915012.0311881922,
            "unit": "ns",
            "range": "± 47464.56225341001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972332.9663085938,
            "unit": "ns",
            "range": "± 29541.16212370495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 678795.3673551925,
            "unit": "ns",
            "range": "± 40277.831914049006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579741.874860491,
            "unit": "ns",
            "range": "± 5629.709206643624"
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
          "id": "3c4519f6d162c0f2926f6f14abf229f8de2d8e51",
          "message": "Typo",
          "timestamp": "2023-11-15T16:49:43+09:00",
          "tree_id": "82c1ccaa01b1171d086a8f0aca00ae959936273e",
          "url": "https://github.com/greymistcube/libplanet/commit/3c4519f6d162c0f2926f6f14abf229f8de2d8e51"
        },
        "date": 1700035590038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7553038.6,
            "unit": "ns",
            "range": "± 36139.03453687083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18959807.615384616,
            "unit": "ns",
            "range": "± 515235.7204719469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46176535.166666664,
            "unit": "ns",
            "range": "± 949277.6470714146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91785476.28571428,
            "unit": "ns",
            "range": "± 1302039.450045518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187759078.66666666,
            "unit": "ns",
            "range": "± 3470660.911706931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37773,
            "unit": "ns",
            "range": "± 6798.973258668769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223220.59677419355,
            "unit": "ns",
            "range": "± 22307.676801098587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220057.65625,
            "unit": "ns",
            "range": "± 22791.341727127372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197112.05913978495,
            "unit": "ns",
            "range": "± 22603.073408500255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3718447.8928571427,
            "unit": "ns",
            "range": "± 101178.74456599598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3432509.404761905,
            "unit": "ns",
            "range": "± 79430.99221393673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12524.70652173913,
            "unit": "ns",
            "range": "± 985.4604049008408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58866.81182795699,
            "unit": "ns",
            "range": "± 6977.7472990283695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54500,
            "unit": "ns",
            "range": "± 7932.460774235357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60605.709677419356,
            "unit": "ns",
            "range": "± 9482.340011810336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3198.75,
            "unit": "ns",
            "range": "± 490.19330236572034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11787.385542168675,
            "unit": "ns",
            "range": "± 609.0565841654216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169652.2040816327,
            "unit": "ns",
            "range": "± 183653.35803645456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2239422.2716049384,
            "unit": "ns",
            "range": "± 116779.28241163034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718644.8817204302,
            "unit": "ns",
            "range": "± 167468.44192277006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7737906.977777778,
            "unit": "ns",
            "range": "± 292430.28315492166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2895846.9285714286,
            "unit": "ns",
            "range": "± 139045.6861855876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3008536.8113207547,
            "unit": "ns",
            "range": "± 123911.21111910001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3508295.54,
            "unit": "ns",
            "range": "± 67791.38298208213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3498730.5090909093,
            "unit": "ns",
            "range": "± 141279.6042343866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12708560.447916666,
            "unit": "ns",
            "range": "± 1600216.2783932833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4248171.3157327585,
            "unit": "ns",
            "range": "± 122130.59267620344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1352123.5935724431,
            "unit": "ns",
            "range": "± 32256.773691016246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1039320.3307519532,
            "unit": "ns",
            "range": "± 143507.3026066283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2053794.3657769097,
            "unit": "ns",
            "range": "± 68607.71613023986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658583.8938131894,
            "unit": "ns",
            "range": "± 21239.12694350044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584704.6080114977,
            "unit": "ns",
            "range": "± 24363.353196274104"
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
          "id": "23b1be42b36c12727a64a63b85e4d317a2d3f736",
          "message": "Changelog",
          "timestamp": "2023-11-15T17:23:30+09:00",
          "tree_id": "25bdddc3ac7afa6fd129895558155d71c42a27d9",
          "url": "https://github.com/greymistcube/libplanet/commit/23b1be42b36c12727a64a63b85e4d317a2d3f736"
        },
        "date": 1700037702465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8100398.552631579,
            "unit": "ns",
            "range": "± 174643.6606552114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20041330.129032258,
            "unit": "ns",
            "range": "± 600301.8970795579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52230638.935294114,
            "unit": "ns",
            "range": "± 3936078.227216973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109904233.25,
            "unit": "ns",
            "range": "± 2116403.772986982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297720174.59183675,
            "unit": "ns",
            "range": "± 37729377.77361533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59650.5,
            "unit": "ns",
            "range": "± 18418.63081434852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243527.7258064516,
            "unit": "ns",
            "range": "± 18743.700627682792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242167.8,
            "unit": "ns",
            "range": "± 15926.772990538127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224568.85483870967,
            "unit": "ns",
            "range": "± 16036.092648368825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3982347,
            "unit": "ns",
            "range": "± 113327.04483828112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3945489.230769231,
            "unit": "ns",
            "range": "± 30121.646427870455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17068.41052631579,
            "unit": "ns",
            "range": "± 2578.660894830167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79181.9375,
            "unit": "ns",
            "range": "± 9528.486839403422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71760.75,
            "unit": "ns",
            "range": "± 5748.881786396033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84919.15625,
            "unit": "ns",
            "range": "± 18923.271531345028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5199.840425531915,
            "unit": "ns",
            "range": "± 709.2165797962435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14503.60606060606,
            "unit": "ns",
            "range": "± 2829.58413984329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1209246.4333333333,
            "unit": "ns",
            "range": "± 110942.80772380687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638554.1951219514,
            "unit": "ns",
            "range": "± 193996.7827706816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1980398.3275862068,
            "unit": "ns",
            "range": "± 276679.8510648795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11035656.791666666,
            "unit": "ns",
            "range": "± 2559345.972148151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4213510.47368421,
            "unit": "ns",
            "range": "± 990336.0281555076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3775556.053763441,
            "unit": "ns",
            "range": "± 325583.7963883647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3834795.2391304346,
            "unit": "ns",
            "range": "± 257655.26326289948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3554300.8039215687,
            "unit": "ns",
            "range": "± 144790.64117103972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12620332.084210526,
            "unit": "ns",
            "range": "± 1444402.0825365963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4393917.861032197,
            "unit": "ns",
            "range": "± 107082.84380821863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1423915.825727983,
            "unit": "ns",
            "range": "± 30885.445047101653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 971716.59765625,
            "unit": "ns",
            "range": "± 12966.093455280157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2383501.100954861,
            "unit": "ns",
            "range": "± 141596.99775450208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 733246.891031901,
            "unit": "ns",
            "range": "± 10438.813674772127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 655690.1944247159,
            "unit": "ns",
            "range": "± 15394.74696157609"
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
          "id": "d57b1205354d9b11d090b28a31c4c81a5958352a",
          "message": "Changelog",
          "timestamp": "2023-11-15T20:43:36+09:00",
          "tree_id": "ad5ef5bf6df2e09d80ee6c2f2112dff99fe5aee8",
          "url": "https://github.com/greymistcube/libplanet/commit/d57b1205354d9b11d090b28a31c4c81a5958352a"
        },
        "date": 1700049882812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8533930.602040816,
            "unit": "ns",
            "range": "± 500316.40306977247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19945993.03448276,
            "unit": "ns",
            "range": "± 1084810.0186443476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49869252.86,
            "unit": "ns",
            "range": "± 3143602.386915632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100724243.37,
            "unit": "ns",
            "range": "± 6304777.676503705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198378845.9526316,
            "unit": "ns",
            "range": "± 10954878.860103512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39735.38202247191,
            "unit": "ns",
            "range": "± 8467.08724267842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226724.47916666666,
            "unit": "ns",
            "range": "± 14625.476024626678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207754.47727272726,
            "unit": "ns",
            "range": "± 11194.666203231627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200899.27319587627,
            "unit": "ns",
            "range": "± 22505.951891252174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3694056.3571428573,
            "unit": "ns",
            "range": "± 52056.946264654245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3377235.714285714,
            "unit": "ns",
            "range": "± 49684.749121417946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12202.011494252874,
            "unit": "ns",
            "range": "± 986.4436887269018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57828.79120879121,
            "unit": "ns",
            "range": "± 4392.045733207764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66267.82,
            "unit": "ns",
            "range": "± 17883.438022444858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59949.4,
            "unit": "ns",
            "range": "± 7999.843570811045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3253.9761904761904,
            "unit": "ns",
            "range": "± 487.44016565002846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11562.704545454546,
            "unit": "ns",
            "range": "± 675.6859802357507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1729525.663265306,
            "unit": "ns",
            "range": "± 551945.3521042257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2769704.4945054944,
            "unit": "ns",
            "range": "± 297824.36369035335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2249182,
            "unit": "ns",
            "range": "± 484978.1316018499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10417883.148351649,
            "unit": "ns",
            "range": "± 1347036.7329022735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2858820.596153846,
            "unit": "ns",
            "range": "± 102521.65020709847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2986609.222222222,
            "unit": "ns",
            "range": "± 95324.44247009746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3530199.9482758623,
            "unit": "ns",
            "range": "± 100552.02683386853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3539049.339285714,
            "unit": "ns",
            "range": "± 151265.57271552412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12427316.978021977,
            "unit": "ns",
            "range": "± 1272870.6589691227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4300427.6175986845,
            "unit": "ns",
            "range": "± 139054.00167943627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1330902.9548177083,
            "unit": "ns",
            "range": "± 16341.22145369916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 960441.1948535156,
            "unit": "ns",
            "range": "± 70381.18078995845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998742.7457932692,
            "unit": "ns",
            "range": "± 25142.072202451698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627739.4851459704,
            "unit": "ns",
            "range": "± 11582.477474791069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582328.071105957,
            "unit": "ns",
            "range": "± 10999.593898156498"
          }
        ]
      }
    ]
  }
}