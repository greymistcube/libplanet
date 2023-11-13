window.BENCHMARK_DATA = {
  "lastUpdate": 1699883522389,
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
          "id": "e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb",
          "message": "More cleanup",
          "timestamp": "2023-11-13T22:30:12+09:00",
          "tree_id": "7a0fd03c1f94e4318c5ac397ab25ec869b9f15b8",
          "url": "https://github.com/greymistcube/libplanet/commit/e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb"
        },
        "date": 1699883491152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622901.0416666667,
            "unit": "ns",
            "range": "± 200723.0411837699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196439.175257732,
            "unit": "ns",
            "range": "± 421637.04784563155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2618494.736842105,
            "unit": "ns",
            "range": "± 312016.198559456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11606416.279069768,
            "unit": "ns",
            "range": "± 845697.4833703438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64853.76344086022,
            "unit": "ns",
            "range": "± 14274.312281764913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9111971.05263158,
            "unit": "ns",
            "range": "± 759750.9951677948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25331090.69767442,
            "unit": "ns",
            "range": "± 1377173.0330540428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67288127.4509804,
            "unit": "ns",
            "range": "± 2700811.93066666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130532875,
            "unit": "ns",
            "range": "± 2532024.0545197567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262670334.4827586,
            "unit": "ns",
            "range": "± 7562566.505269598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132026.110197368,
            "unit": "ns",
            "range": "± 208957.08963641463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854030.37109375,
            "unit": "ns",
            "range": "± 41658.379711366106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356832.0182291667,
            "unit": "ns",
            "range": "± 19193.2491500613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203056.9921875,
            "unit": "ns",
            "range": "± 51943.68951262154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044005.6353400735,
            "unit": "ns",
            "range": "± 19373.49935084601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1010770.263671875,
            "unit": "ns",
            "range": "± 31237.27823987844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783359.793814433,
            "unit": "ns",
            "range": "± 419446.794316582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033019.587628866,
            "unit": "ns",
            "range": "± 356893.9731206289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5223066.666666667,
            "unit": "ns",
            "range": "± 311476.3248499458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5284006.060606061,
            "unit": "ns",
            "range": "± 445951.4876650254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13935254.945054945,
            "unit": "ns",
            "range": "± 1115302.0458117798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343784.44444444444,
            "unit": "ns",
            "range": "± 13092.224541090924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334298.4375,
            "unit": "ns",
            "range": "± 15397.221891116777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275917.7083333333,
            "unit": "ns",
            "range": "± 32302.28929410965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4806624.468085106,
            "unit": "ns",
            "range": "± 374807.9366754062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4407720.652173913,
            "unit": "ns",
            "range": "± 331989.7372099879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30472.448979591838,
            "unit": "ns",
            "range": "± 8787.300825415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113705.10204081633,
            "unit": "ns",
            "range": "± 21175.29864417248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127656.04395604396,
            "unit": "ns",
            "range": "± 16533.092799266495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128160.21505376344,
            "unit": "ns",
            "range": "± 15184.661452647213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9171.91011235955,
            "unit": "ns",
            "range": "± 1170.177605405279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33346.23655913978,
            "unit": "ns",
            "range": "± 3513.655322600697"
          }
        ]
      }
    ]
  }
}