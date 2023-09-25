window.BENCHMARK_DATA = {
  "lastUpdate": 1695632966357,
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
          "id": "9e2337db7082191af93ca9d37398767723023f8a",
          "message": "Prepare 3.5.0",
          "timestamp": "2023-09-25T17:56:05+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/greymistcube/libplanet/commit/9e2337db7082191af93ca9d37398767723023f8a"
        },
        "date": 1695632958247,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263677.88372093026,
            "unit": "ns",
            "range": "± 7238.288462551741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255102.4814814815,
            "unit": "ns",
            "range": "± 6749.343782178272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228582.33333333334,
            "unit": "ns",
            "range": "± 1824.4966096948165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4149217.8666666667,
            "unit": "ns",
            "range": "± 22486.66019750588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868761.214285714,
            "unit": "ns",
            "range": "± 41672.91488979488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18749.351648351647,
            "unit": "ns",
            "range": "± 1338.7654792019432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84766.7032967033,
            "unit": "ns",
            "range": "± 4585.002533610121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67306.85714285714,
            "unit": "ns",
            "range": "± 1136.5854976228552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74314,
            "unit": "ns",
            "range": "± 11995.916839689338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4431.521739130435,
            "unit": "ns",
            "range": "± 358.5469294543156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16472.547368421052,
            "unit": "ns",
            "range": "± 1051.96175167526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3302935.85,
            "unit": "ns",
            "range": "± 72381.65095430646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532951.3333333335,
            "unit": "ns",
            "range": "± 66669.35516324088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4138532.1428571427,
            "unit": "ns",
            "range": "± 38131.97124331627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4102362,
            "unit": "ns",
            "range": "± 157687.3078973419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10178806.575,
            "unit": "ns",
            "range": "± 264043.89098579297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1269758.6931818181,
            "unit": "ns",
            "range": "± 69625.22479533788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2472050.7555555557,
            "unit": "ns",
            "range": "± 94038.96996945555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1945108.142857143,
            "unit": "ns",
            "range": "± 90836.86144845265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8503220.219512194,
            "unit": "ns",
            "range": "± 300242.42805743765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46766.38888888889,
            "unit": "ns",
            "range": "± 2601.427765689425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7688392.692307692,
            "unit": "ns",
            "range": "± 26897.684752857494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19773167.8,
            "unit": "ns",
            "range": "± 55075.85544916341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50122421.071428575,
            "unit": "ns",
            "range": "± 220177.8538093044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100755911.28571428,
            "unit": "ns",
            "range": "± 403622.3836057713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201988253.35714287,
            "unit": "ns",
            "range": "± 675378.1717749644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4976852.76171875,
            "unit": "ns",
            "range": "± 17774.78438145458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577344.9775390625,
            "unit": "ns",
            "range": "± 1026.6775103567927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065327.8861979167,
            "unit": "ns",
            "range": "± 569.9024699991198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550242.3889508927,
            "unit": "ns",
            "range": "± 1912.6720733888972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788310.1996372768,
            "unit": "ns",
            "range": "± 1056.4507375541937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745065.7490985577,
            "unit": "ns",
            "range": "± 469.8281661484161"
          }
        ]
      }
    ]
  }
}