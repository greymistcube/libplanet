window.BENCHMARK_DATA = {
  "lastUpdate": 1705409053199,
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
          "id": "06fd4dd9c5d9888d1b7d2669c577f00520eb28ff",
          "message": "Docs",
          "timestamp": "2024-01-16T21:32:53+09:00",
          "tree_id": "5f14fdac4e17e4c8f554b2c10337981b433570d5",
          "url": "https://github.com/greymistcube/libplanet/commit/06fd4dd9c5d9888d1b7d2669c577f00520eb28ff"
        },
        "date": 1705409046990,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730296.9892578125,
            "unit": "ns",
            "range": "± 3571.484573816295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209800.04296875,
            "unit": "ns",
            "range": "± 4008.786331374093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767259.0044642857,
            "unit": "ns",
            "range": "± 4519.037740756465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965786.6995192308,
            "unit": "ns",
            "range": "± 12506.29499652236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613207.0371844952,
            "unit": "ns",
            "range": "± 3509.1766138095495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568630.8305664062,
            "unit": "ns",
            "range": "± 1781.743525055902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411530.794117647,
            "unit": "ns",
            "range": "± 63942.94581548764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2544467.210526316,
            "unit": "ns",
            "range": "± 50732.249107532894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3199294.4375,
            "unit": "ns",
            "range": "± 61153.873928496956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3286365.0476190476,
            "unit": "ns",
            "range": "± 117710.10743869611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14009953.71875,
            "unit": "ns",
            "range": "± 1147715.0605711897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39235.36082474227,
            "unit": "ns",
            "range": "± 4682.760019443588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205506.27922077922,
            "unit": "ns",
            "range": "± 10482.86504331734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193979.72222222222,
            "unit": "ns",
            "range": "± 8413.568630780363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168972.90476190476,
            "unit": "ns",
            "range": "± 6084.773037471304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214314.5,
            "unit": "ns",
            "range": "± 36005.31930947042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2913271.846153846,
            "unit": "ns",
            "range": "± 32208.11451804797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15541.857142857143,
            "unit": "ns",
            "range": "± 3041.9374692801152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71935.50515463918,
            "unit": "ns",
            "range": "± 5748.213719140117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55100.49411764706,
            "unit": "ns",
            "range": "± 5347.559596104896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70785.74489795919,
            "unit": "ns",
            "range": "± 19627.198821759852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4023.546391752577,
            "unit": "ns",
            "range": "± 1317.1804800771306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12760.07142857143,
            "unit": "ns",
            "range": "± 1238.6695832658268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577477.933333334,
            "unit": "ns",
            "range": "± 30396.963528960463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14697356.866666667,
            "unit": "ns",
            "range": "± 161105.7777862849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37025161.615384616,
            "unit": "ns",
            "range": "± 229718.7722968886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74454615.92857143,
            "unit": "ns",
            "range": "± 449775.07875154226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151874545.69230768,
            "unit": "ns",
            "range": "± 340772.1920001162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981454.6666666666,
            "unit": "ns",
            "range": "± 79458.3737136924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913280.023076923,
            "unit": "ns",
            "range": "± 88595.68082536313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1563379.7127659575,
            "unit": "ns",
            "range": "± 99976.6240089574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12934372.561797753,
            "unit": "ns",
            "range": "± 926135.4074062643"
          }
        ]
      }
    ]
  }
}