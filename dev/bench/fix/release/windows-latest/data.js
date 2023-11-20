window.BENCHMARK_DATA = {
  "lastUpdate": 1700480896030,
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
          "id": "a773b1e3352c423c8b1d3e5a8458b2eb80511f05",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:35:00+09:00",
          "tree_id": "30cc4f94e623cf3b676e1211b9e1635f7d073bc6",
          "url": "https://github.com/greymistcube/libplanet/commit/a773b1e3352c423c8b1d3e5a8458b2eb80511f05"
        },
        "date": 1700480823674,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934728.125,
            "unit": "ns",
            "range": "± 81016.03636334177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758957.9545454546,
            "unit": "ns",
            "range": "± 99753.13865553352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1361303,
            "unit": "ns",
            "range": "± 171079.2919447682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5179076.404494382,
            "unit": "ns",
            "range": "± 281653.4395407009"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34003.125,
            "unit": "ns",
            "range": "± 1573.1848951365234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5126771.428571428,
            "unit": "ns",
            "range": "± 69003.60557548846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13502413.333333334,
            "unit": "ns",
            "range": "± 235449.77889340304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34711857.14285714,
            "unit": "ns",
            "range": "± 302425.0923510093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66976710,
            "unit": "ns",
            "range": "± 749689.8947469642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131927546.66666667,
            "unit": "ns",
            "range": "± 974358.8330403791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3148998.2096354165,
            "unit": "ns",
            "range": "± 8560.275135364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1013235.5859375,
            "unit": "ns",
            "range": "± 9020.73119293486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 678037.4302455357,
            "unit": "ns",
            "range": "± 852.9855290532911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958936.8088942308,
            "unit": "ns",
            "range": "± 3608.9811270265914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614922.2981770834,
            "unit": "ns",
            "range": "± 1815.6300333549066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573387.2395833334,
            "unit": "ns",
            "range": "± 1422.6800211281648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139559.2592592593,
            "unit": "ns",
            "range": "± 59546.44121161786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2269179.6296296297,
            "unit": "ns",
            "range": "± 91307.33376821512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2807856.25,
            "unit": "ns",
            "range": "± 86571.94262577224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2721141.379310345,
            "unit": "ns",
            "range": "± 78526.70845570123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5979023.684210527,
            "unit": "ns",
            "range": "± 202617.50202438163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176052.23880597015,
            "unit": "ns",
            "range": "± 7560.891365780753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172131.25,
            "unit": "ns",
            "range": "± 7983.611686170336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143392.22222222222,
            "unit": "ns",
            "range": "± 5385.8184525697125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2733300,
            "unit": "ns",
            "range": "± 22122.352079705757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2482242.8571428573,
            "unit": "ns",
            "range": "± 31758.892498751477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11753.333333333334,
            "unit": "ns",
            "range": "± 1350.6927061759288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57668.085106382976,
            "unit": "ns",
            "range": "± 5373.990783292765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46052.94117647059,
            "unit": "ns",
            "range": "± 2178.2144260931673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61544.444444444445,
            "unit": "ns",
            "range": "± 15469.029112326492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2547.422680412371,
            "unit": "ns",
            "range": "± 441.1379186039673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11122.988505747126,
            "unit": "ns",
            "range": "± 1153.0244505591702"
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
          "id": "4f79b61f37a3c78189e4e9b3ce7197dc0836a77a",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:36:46+09:00",
          "tree_id": "4ab1130a8fe8964c78fd960543263fe9019b43bf",
          "url": "https://github.com/greymistcube/libplanet/commit/4f79b61f37a3c78189e4e9b3ce7197dc0836a77a"
        },
        "date": 1700480880075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951968.3673469388,
            "unit": "ns",
            "range": "± 97330.41248882646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1747561.3636363635,
            "unit": "ns",
            "range": "± 104004.52513565856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1363249.4845360825,
            "unit": "ns",
            "range": "± 142579.92796711088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5105498.958333333,
            "unit": "ns",
            "range": "± 327035.22536644654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33814.10256410256,
            "unit": "ns",
            "range": "± 1726.5478174575314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5152666.666666667,
            "unit": "ns",
            "range": "± 49543.8574348406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13787014.285714285,
            "unit": "ns",
            "range": "± 165743.5814148463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34042558.333333336,
            "unit": "ns",
            "range": "± 452440.30938965426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66839053.333333336,
            "unit": "ns",
            "range": "± 1172831.0722756446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133077633.33333333,
            "unit": "ns",
            "range": "± 3054394.46393771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3201019.2708333335,
            "unit": "ns",
            "range": "± 14816.6086433505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1000744.5703125,
            "unit": "ns",
            "range": "± 2768.0607593933373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 697665.5533854166,
            "unit": "ns",
            "range": "± 3570.564657961211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002465.15625,
            "unit": "ns",
            "range": "± 8861.148996062133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611344.3638392857,
            "unit": "ns",
            "range": "± 1837.0112718579096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566128.8541666666,
            "unit": "ns",
            "range": "± 1602.4083131842824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188919.4444444445,
            "unit": "ns",
            "range": "± 65132.45765117834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2345160.465116279,
            "unit": "ns",
            "range": "± 85234.51162062869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2744980,
            "unit": "ns",
            "range": "± 48079.4164452345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2677433.3333333335,
            "unit": "ns",
            "range": "± 112795.75129158884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6100529.333333333,
            "unit": "ns",
            "range": "± 307427.7703669479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174440,
            "unit": "ns",
            "range": "± 8807.183799971843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167529.78723404257,
            "unit": "ns",
            "range": "± 12544.31996543073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140737.77777777778,
            "unit": "ns",
            "range": "± 5321.8797468943285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2759058.3333333335,
            "unit": "ns",
            "range": "± 30436.385472096725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2567538.095238095,
            "unit": "ns",
            "range": "± 58535.72820244467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12088.659793814433,
            "unit": "ns",
            "range": "± 2997.737907178921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54703.15789473684,
            "unit": "ns",
            "range": "± 6119.474539943507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45000,
            "unit": "ns",
            "range": "± 2679.842449763709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58788.88888888889,
            "unit": "ns",
            "range": "± 12324.73776588096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2476.2886597938145,
            "unit": "ns",
            "range": "± 455.2410524190016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11105.376344086022,
            "unit": "ns",
            "range": "± 1570.4032707914794"
          }
        ]
      }
    ]
  }
}