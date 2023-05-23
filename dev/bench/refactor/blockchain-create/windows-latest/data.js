window.BENCHMARK_DATA = {
  "lastUpdate": 1684852638182,
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
          "id": "ef9b7fec3272cc9e82f994b5aaebab995dfe308a",
          "message": "General API cleanup",
          "timestamp": "2023-05-23T23:18:54+09:00",
          "tree_id": "565b5fb8fbdef0e8a1818599d15cee840714f42b",
          "url": "https://github.com/greymistcube/libplanet/commit/ef9b7fec3272cc9e82f994b5aaebab995dfe308a"
        },
        "date": 1684852615197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428719,
            "unit": "ns",
            "range": "± 145852.20255069475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2674235.714285714,
            "unit": "ns",
            "range": "± 114538.91983009163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235773.737373737,
            "unit": "ns",
            "range": "± 152718.18622966047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5468052.542372881,
            "unit": "ns",
            "range": "± 234526.06821941858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53003.092783505155,
            "unit": "ns",
            "range": "± 4233.139438019755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7783706.666666667,
            "unit": "ns",
            "range": "± 134595.55005734065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20512820,
            "unit": "ns",
            "range": "± 215650.1969128974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51599950,
            "unit": "ns",
            "range": "± 327797.101291919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104380366.66666667,
            "unit": "ns",
            "range": "± 950235.2563344261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203500492.85714287,
            "unit": "ns",
            "range": "± 912523.4281201398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893139.693509615,
            "unit": "ns",
            "range": "± 25642.65848705857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533215.3515625,
            "unit": "ns",
            "range": "± 5107.846566161547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166207.8580729167,
            "unit": "ns",
            "range": "± 3128.76994843357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639259.598214286,
            "unit": "ns",
            "range": "± 10856.797536997694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845630.7552083334,
            "unit": "ns",
            "range": "± 2520.643558563371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774893.4049479166,
            "unit": "ns",
            "range": "± 2012.6991294859372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361960.8695652173,
            "unit": "ns",
            "range": "± 82337.00559358821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3490869.230769231,
            "unit": "ns",
            "range": "± 85672.02469525636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218592.857142857,
            "unit": "ns",
            "range": "± 73967.67968080814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4271007.692307692,
            "unit": "ns",
            "range": "± 165965.2525009599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6788433.333333333,
            "unit": "ns",
            "range": "± 183210.49264543943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278556.0975609756,
            "unit": "ns",
            "range": "± 8981.03693290724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270184.693877551,
            "unit": "ns",
            "range": "± 10634.33023710646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258308.88888888888,
            "unit": "ns",
            "range": "± 9630.156758429179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180314.285714286,
            "unit": "ns",
            "range": "± 54546.16756110731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3880300,
            "unit": "ns",
            "range": "± 23709.316031186278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24784.042553191488,
            "unit": "ns",
            "range": "± 2455.772361324004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105737.8947368421,
            "unit": "ns",
            "range": "± 8380.082502861129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95763.54166666667,
            "unit": "ns",
            "range": "± 6633.092789652528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111332.79569892473,
            "unit": "ns",
            "range": "± 12027.338637778825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7156.060606060606,
            "unit": "ns",
            "range": "± 1185.5265068020374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21754.255319148935,
            "unit": "ns",
            "range": "± 2354.1619467966925"
          }
        ]
      }
    ]
  }
}