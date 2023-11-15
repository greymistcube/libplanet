window.BENCHMARK_DATA = {
  "lastUpdate": 1700033767292,
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
      }
    ]
  }
}