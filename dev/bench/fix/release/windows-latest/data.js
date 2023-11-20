window.BENCHMARK_DATA = {
  "lastUpdate": 1700480840333,
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
      }
    ]
  }
}