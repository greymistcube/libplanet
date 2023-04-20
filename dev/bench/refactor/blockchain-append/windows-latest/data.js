window.BENCHMARK_DATA = {
  "lastUpdate": 1681989976596,
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
      }
    ]
  }
}