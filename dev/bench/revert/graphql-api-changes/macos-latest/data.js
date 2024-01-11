window.BENCHMARK_DATA = {
  "lastUpdate": 1704943402058,
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
          "id": "4adc1b0389c971a214c9a9c83951525691b1a123",
          "message": "Roll back some name changes; code cleanup for more consistency",
          "timestamp": "2024-01-11T11:29:02+09:00",
          "tree_id": "cc892825a37f09f4260b2d6020b8e93e6242046f",
          "url": "https://github.com/greymistcube/libplanet/commit/4adc1b0389c971a214c9a9c83951525691b1a123"
        },
        "date": 1704941515389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8254334.558139535,
            "unit": "ns",
            "range": "± 302660.8177917904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20264984.474025972,
            "unit": "ns",
            "range": "± 985846.5885549702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51341377.87912088,
            "unit": "ns",
            "range": "± 4894352.203570645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105109511.18181819,
            "unit": "ns",
            "range": "± 6565195.39383391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202949621.16666666,
            "unit": "ns",
            "range": "± 7270150.316563314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50078.01111111111,
            "unit": "ns",
            "range": "± 8258.180106999995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266001.5517241379,
            "unit": "ns",
            "range": "± 26481.823727315666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255090.65853658537,
            "unit": "ns",
            "range": "± 18304.040007044732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263664.1931818182,
            "unit": "ns",
            "range": "± 48690.76466512819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5276910.632653061,
            "unit": "ns",
            "range": "± 1113471.4896444192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4474688.778947368,
            "unit": "ns",
            "range": "± 869330.2033814894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26504.27659574468,
            "unit": "ns",
            "range": "± 5003.518416169938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108178.25510204081,
            "unit": "ns",
            "range": "± 31181.502484683024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100505.03846153847,
            "unit": "ns",
            "range": "± 29901.245804335336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96597.58241758242,
            "unit": "ns",
            "range": "± 27958.639490848673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6774.893617021276,
            "unit": "ns",
            "range": "± 1588.3193759990065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24799.065217391304,
            "unit": "ns",
            "range": "± 10731.001890695832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169119.0454545454,
            "unit": "ns",
            "range": "± 97065.316498075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2256765.5428571426,
            "unit": "ns",
            "range": "± 108933.96909345889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641314.6290322582,
            "unit": "ns",
            "range": "± 49126.874528267406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7209338.945783133,
            "unit": "ns",
            "range": "± 468650.8531305908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2910116.029411765,
            "unit": "ns",
            "range": "± 117028.46337833424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3088246.8636363638,
            "unit": "ns",
            "range": "± 163689.616786482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959991.5217391304,
            "unit": "ns",
            "range": "± 377190.35973188636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141777.554347826,
            "unit": "ns",
            "range": "± 654467.1167294349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16130404.378947368,
            "unit": "ns",
            "range": "± 3252904.3389992206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5795212.179766414,
            "unit": "ns",
            "range": "± 1179188.604981067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490806.0807913449,
            "unit": "ns",
            "range": "± 85104.61843607512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 979552.9734598795,
            "unit": "ns",
            "range": "± 64884.4513982134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2152302.785456731,
            "unit": "ns",
            "range": "± 88243.40168691728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645969.5233677456,
            "unit": "ns",
            "range": "± 8280.859622101792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581756.6955078125,
            "unit": "ns",
            "range": "± 9338.97418870726"
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
          "id": "d3a1b3976816edd578bc70ffb5cd02fa993ec781",
          "message": "Changelog",
          "timestamp": "2024-01-11T11:58:34+09:00",
          "tree_id": "a9e887058197498f932b05ae76e541545ce4c948",
          "url": "https://github.com/greymistcube/libplanet/commit/d3a1b3976816edd578bc70ffb5cd02fa993ec781"
        },
        "date": 1704943387511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9310304.457894737,
            "unit": "ns",
            "range": "± 654010.0597755963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22783611.83,
            "unit": "ns",
            "range": "± 1533073.5217196338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51383729.06666667,
            "unit": "ns",
            "range": "± 958532.0893712924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106964840.18181819,
            "unit": "ns",
            "range": "± 2528293.7941261306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221324260.2142857,
            "unit": "ns",
            "range": "± 3811887.352351375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75216.19318181818,
            "unit": "ns",
            "range": "± 8923.043498302397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356157.8402061856,
            "unit": "ns",
            "range": "± 56369.910313830595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324810.79347826086,
            "unit": "ns",
            "range": "± 25822.456657220337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304458.59493670886,
            "unit": "ns",
            "range": "± 15040.353582449523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4431372.855932203,
            "unit": "ns",
            "range": "± 196038.2970183476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174543.413043478,
            "unit": "ns",
            "range": "± 250856.31426230248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25900.325581395347,
            "unit": "ns",
            "range": "± 3425.3444839791123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115442.47872340426,
            "unit": "ns",
            "range": "± 14760.748389781056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119526.77272727272,
            "unit": "ns",
            "range": "± 14384.938380147029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134370.33684210526,
            "unit": "ns",
            "range": "± 26630.284616535188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8833.563218390804,
            "unit": "ns",
            "range": "± 1222.0432917877645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24239.668674698794,
            "unit": "ns",
            "range": "± 3267.72122366522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440304.144329897,
            "unit": "ns",
            "range": "± 125092.58158992931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2889819.8181818184,
            "unit": "ns",
            "range": "± 189019.35519554943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2152367.467032967,
            "unit": "ns",
            "range": "± 190168.03485551933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11103326.739130436,
            "unit": "ns",
            "range": "± 2847789.1901404443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311152.4677419355,
            "unit": "ns",
            "range": "± 202660.46755989877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480632.4606741574,
            "unit": "ns",
            "range": "± 192650.45307765045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4378455.05882353,
            "unit": "ns",
            "range": "± 176155.0792458068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4369160.724489796,
            "unit": "ns",
            "range": "± 386493.59556995693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18315301.03,
            "unit": "ns",
            "range": "± 3051739.595007257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6619212.442734375,
            "unit": "ns",
            "range": "± 412808.8492863119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992469.1709192155,
            "unit": "ns",
            "range": "± 77610.39696703418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244620.9193025914,
            "unit": "ns",
            "range": "± 44539.20351186577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2521028.201171875,
            "unit": "ns",
            "range": "± 78074.91523633667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865538.2126953125,
            "unit": "ns",
            "range": "± 56395.659268951655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747733.4729132401,
            "unit": "ns",
            "range": "± 13634.61773086784"
          }
        ]
      }
    ]
  }
}