window.BENCHMARK_DATA = {
  "lastUpdate": 1681991110207,
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
          "id": "7d4b5b60a38872ddfec0219cc7eaa548c043e4ce",
          "message": "Removed unnecessary parameter",
          "timestamp": "2023-04-20T19:36:11+09:00",
          "tree_id": "a0bfe316525f740b16a78054e4210e2e299290b3",
          "url": "https://github.com/greymistcube/libplanet/commit/7d4b5b60a38872ddfec0219cc7eaa548c043e4ce"
        },
        "date": 1681988038557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1453209.375,
            "unit": "ns",
            "range": "± 94277.76327441332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612558.620689655,
            "unit": "ns",
            "range": "± 75974.65515947397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2415236.0824742266,
            "unit": "ns",
            "range": "± 191934.74432818685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5943077.922077922,
            "unit": "ns",
            "range": "± 304202.6015595945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62575,
            "unit": "ns",
            "range": "± 8040.227805099476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7807253.571428572,
            "unit": "ns",
            "range": "± 210293.40611022295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20494938.46153846,
            "unit": "ns",
            "range": "± 190628.09139990158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52284940,
            "unit": "ns",
            "range": "± 667390.8587070355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103845453.33333333,
            "unit": "ns",
            "range": "± 597832.781047709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206496533.33333334,
            "unit": "ns",
            "range": "± 1459144.8071028586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4982684.074519231,
            "unit": "ns",
            "range": "± 52702.55311145355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582504.2317708333,
            "unit": "ns",
            "range": "± 22532.70693822251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190098.8839285714,
            "unit": "ns",
            "range": "± 5507.595613307507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681475.9014423075,
            "unit": "ns",
            "range": "± 14720.390801688196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837417.0758928572,
            "unit": "ns",
            "range": "± 2246.982999530384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787492.939453125,
            "unit": "ns",
            "range": "± 3277.0836114772155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438952.9411764704,
            "unit": "ns",
            "range": "± 109737.33166422589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3662162.5,
            "unit": "ns",
            "range": "± 69353.56635867161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4180796.875,
            "unit": "ns",
            "range": "± 129611.77386874707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4573378.431372549,
            "unit": "ns",
            "range": "± 185758.8913766719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7277331.25,
            "unit": "ns",
            "range": "± 122079.51899615813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347814.28571428574,
            "unit": "ns",
            "range": "± 12622.44557937095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289661.17647058825,
            "unit": "ns",
            "range": "± 15204.205982287292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259581,
            "unit": "ns",
            "range": "± 15947.411651545162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5572092.307692308,
            "unit": "ns",
            "range": "± 44929.026652014574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3786342.8571428573,
            "unit": "ns",
            "range": "± 62136.87700163635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28768.367346938776,
            "unit": "ns",
            "range": "± 2533.3892761456527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126594.44444444444,
            "unit": "ns",
            "range": "± 11883.483841391664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123924.24242424243,
            "unit": "ns",
            "range": "± 10152.732525608522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146967.01030927835,
            "unit": "ns",
            "range": "± 17929.739736268046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11679.79797979798,
            "unit": "ns",
            "range": "± 1808.1436978959323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30342.708333333332,
            "unit": "ns",
            "range": "± 2636.0554579130126"
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
          "id": "07a0bfe33087eea170e6ab99ce1fc100448c72dd",
          "message": "Combined render options",
          "timestamp": "2023-04-20T20:11:53+09:00",
          "tree_id": "f21ee4839635d60f4b5b7580e473117b28f48f2d",
          "url": "https://github.com/greymistcube/libplanet/commit/07a0bfe33087eea170e6ab99ce1fc100448c72dd"
        },
        "date": 1681989954943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294011,
            "unit": "ns",
            "range": "± 114544.21306405946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2392750,
            "unit": "ns",
            "range": "± 71509.89683133087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053304.347826087,
            "unit": "ns",
            "range": "± 115287.15025472576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5007615.625,
            "unit": "ns",
            "range": "± 154470.231205333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43141.379310344826,
            "unit": "ns",
            "range": "± 1871.2069922874596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6915978.571428572,
            "unit": "ns",
            "range": "± 20352.94076545691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17496485.714285713,
            "unit": "ns",
            "range": "± 98369.67838909318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43750125,
            "unit": "ns",
            "range": "± 166152.47720638468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87144786.66666667,
            "unit": "ns",
            "range": "± 589899.2248882935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175904666.66666666,
            "unit": "ns",
            "range": "± 1045399.2714110081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4759002.5,
            "unit": "ns",
            "range": "± 12430.883386312109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528095.0260416667,
            "unit": "ns",
            "range": "± 3020.3651409463946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127550.5078125,
            "unit": "ns",
            "range": "± 2425.7989635255176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536732.7734375,
            "unit": "ns",
            "range": "± 5765.415925255524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831482.6171875,
            "unit": "ns",
            "range": "± 1851.5545348765818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730906.7173549107,
            "unit": "ns",
            "range": "± 751.5349894382091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2866746.6666666665,
            "unit": "ns",
            "range": "± 38834.22398324643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3250750,
            "unit": "ns",
            "range": "± 63497.978970462784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3856066.6666666665,
            "unit": "ns",
            "range": "± 60178.706090000516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3836500,
            "unit": "ns",
            "range": "± 149487.3290231033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6670407.894736842,
            "unit": "ns",
            "range": "± 227703.06960812275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285750,
            "unit": "ns",
            "range": "± 6535.933066719057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231896.2962962963,
            "unit": "ns",
            "range": "± 5696.590173177249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206403.33333333334,
            "unit": "ns",
            "range": "± 5636.426070709587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5103940,
            "unit": "ns",
            "range": "± 48302.126542952836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3310871.4285714286,
            "unit": "ns",
            "range": "± 36763.03387018894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15339.130434782608,
            "unit": "ns",
            "range": "± 1128.643698509155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76720,
            "unit": "ns",
            "range": "± 3842.1910978545084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65905.26315789473,
            "unit": "ns",
            "range": "± 1457.727944519799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84713.26530612246,
            "unit": "ns",
            "range": "± 10949.148041564855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4517.894736842105,
            "unit": "ns",
            "range": "± 520.6336048546226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14593.258426966293,
            "unit": "ns",
            "range": "± 900.1007207288462"
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
          "id": "6721ce3b08e9324f50b146e197a443e95a1b2837",
          "message": "Combined render options",
          "timestamp": "2023-04-20T20:21:27+09:00",
          "tree_id": "5af8ba9308be94e705e44f41780c581976ad4fd5",
          "url": "https://github.com/greymistcube/libplanet/commit/6721ce3b08e9324f50b146e197a443e95a1b2837"
        },
        "date": 1681991023145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684350,
            "unit": "ns",
            "range": "± 209583.63686630037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3034711.224489796,
            "unit": "ns",
            "range": "± 212240.03862707742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2639913.5416666665,
            "unit": "ns",
            "range": "± 218565.31078341516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6514328.865979382,
            "unit": "ns",
            "range": "± 418305.5962647511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55635.16483516483,
            "unit": "ns",
            "range": "± 3664.131657823011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8185307.142857143,
            "unit": "ns",
            "range": "± 143062.3826506127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22812182.19178082,
            "unit": "ns",
            "range": "± 1129884.8704062316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58017856.75675676,
            "unit": "ns",
            "range": "± 1968264.5471385503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110622202.94117647,
            "unit": "ns",
            "range": "± 3527976.550159586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224642033.33333334,
            "unit": "ns",
            "range": "± 3938478.3038026006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873393.333333333,
            "unit": "ns",
            "range": "± 95166.46854259695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854019.7981770833,
            "unit": "ns",
            "range": "± 23738.929347002588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388016.89453125,
            "unit": "ns",
            "range": "± 29576.367788366228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3262906.6592261903,
            "unit": "ns",
            "range": "± 76170.46159019963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993320.46875,
            "unit": "ns",
            "range": "± 15357.086168093307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913172.2200520834,
            "unit": "ns",
            "range": "± 7663.787627005826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530595.652173913,
            "unit": "ns",
            "range": "± 170359.21601374674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3697337.3626373624,
            "unit": "ns",
            "range": "± 200078.2972562668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4583031.707317073,
            "unit": "ns",
            "range": "± 159239.13532643975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4841944.444444444,
            "unit": "ns",
            "range": "± 299651.0389559701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8235628.75,
            "unit": "ns",
            "range": "± 430616.4307464329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361748.5714285714,
            "unit": "ns",
            "range": "± 11823.19185102815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294926.76056338026,
            "unit": "ns",
            "range": "± 14322.489386041789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256122.0779220779,
            "unit": "ns",
            "range": "± 13049.59793065453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6428075.862068965,
            "unit": "ns",
            "range": "± 188248.30421389954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257890.625,
            "unit": "ns",
            "range": "± 110571.08167519471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23813.541666666668,
            "unit": "ns",
            "range": "± 2390.7109619334524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103896.9387755102,
            "unit": "ns",
            "range": "± 8135.444330202326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93020.83333333333,
            "unit": "ns",
            "range": "± 9933.35599903219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127138.94736842105,
            "unit": "ns",
            "range": "± 16705.600377914052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6922.916666666667,
            "unit": "ns",
            "range": "± 1040.2913728138274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21152.127659574468,
            "unit": "ns",
            "range": "± 2203.5030138202433"
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
          "id": "0502d279af0a906c6d238c1a6cafb84283534766",
          "message": "Changelog",
          "timestamp": "2023-04-20T20:25:26+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/greymistcube/libplanet/commit/0502d279af0a906c6d238c1a6cafb84283534766"
        },
        "date": 1681991087001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1754380.412371134,
            "unit": "ns",
            "range": "± 198484.8082133614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3194242.7083333335,
            "unit": "ns",
            "range": "± 351114.493470747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2710198.9795918367,
            "unit": "ns",
            "range": "± 285648.9535043377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6982951.515151516,
            "unit": "ns",
            "range": "± 609583.515291406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59581.818181818184,
            "unit": "ns",
            "range": "± 13099.013544697016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9011829.487179488,
            "unit": "ns",
            "range": "± 463183.6678448142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24912297.777777776,
            "unit": "ns",
            "range": "± 1374727.3307560268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61612948.97959184,
            "unit": "ns",
            "range": "± 4800305.658056802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128571414.03508772,
            "unit": "ns",
            "range": "± 5567528.28299438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247056932.30769232,
            "unit": "ns",
            "range": "± 11541343.3109261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5729592.857142857,
            "unit": "ns",
            "range": "± 91840.32312765109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822670.689174107,
            "unit": "ns",
            "range": "± 22418.77552811061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370734.6809895833,
            "unit": "ns",
            "range": "± 20077.583589553597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163734.2838541665,
            "unit": "ns",
            "range": "± 46025.838349443475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984392.2786458334,
            "unit": "ns",
            "range": "± 11558.255013884742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915511.8024553572,
            "unit": "ns",
            "range": "± 8860.85740641357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3627507.1428571427,
            "unit": "ns",
            "range": "± 333809.21529594535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3733743.1578947366,
            "unit": "ns",
            "range": "± 342088.26055741555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4725683.673469388,
            "unit": "ns",
            "range": "± 454505.1501174367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4645951.546391753,
            "unit": "ns",
            "range": "± 386623.3223137978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8570377.31958763,
            "unit": "ns",
            "range": "± 643253.609833302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408836.95652173914,
            "unit": "ns",
            "range": "± 53184.54232466237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309874.7368421053,
            "unit": "ns",
            "range": "± 39179.491401402396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276261.61616161617,
            "unit": "ns",
            "range": "± 43593.4082900266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6278152.127659574,
            "unit": "ns",
            "range": "± 400628.5144723571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4208851.041666667,
            "unit": "ns",
            "range": "± 301112.8478773336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23302.04081632653,
            "unit": "ns",
            "range": "± 9761.780930043036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103238.14432989691,
            "unit": "ns",
            "range": "± 25918.286832928447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86600,
            "unit": "ns",
            "range": "± 20803.53535660065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122725.26315789473,
            "unit": "ns",
            "range": "± 28414.601312514667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5612.903225806452,
            "unit": "ns",
            "range": "± 653.2903020815697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21475,
            "unit": "ns",
            "range": "± 4202.605923914844"
          }
        ]
      }
    ]
  }
}