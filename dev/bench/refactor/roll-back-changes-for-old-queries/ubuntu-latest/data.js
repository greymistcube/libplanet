window.BENCHMARK_DATA = {
  "lastUpdate": 1704203505208,
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
          "id": "f12184e29d683f480dd46778870e43c10233e50a",
          "message": "Roll back exposed GraphQL API changes by adding LegacyBencodexValueType",
          "timestamp": "2024-01-02T22:40:20+09:00",
          "tree_id": "f983da298ebf7f6783db8aa8342ab7ceefac443f",
          "url": "https://github.com/greymistcube/libplanet/commit/f12184e29d683f480dd46778870e43c10233e50a"
        },
        "date": 1704203499014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701977.183293269,
            "unit": "ns",
            "range": "± 6016.528981893205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200448.7898995536,
            "unit": "ns",
            "range": "± 3320.760920063571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774776.3430989584,
            "unit": "ns",
            "range": "± 14101.769166409238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970972.9150390625,
            "unit": "ns",
            "range": "± 4362.436855982901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621249.9772949219,
            "unit": "ns",
            "range": "± 1174.9010125974064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586662.3102463942,
            "unit": "ns",
            "range": "± 1127.8006854051723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429949.777777778,
            "unit": "ns",
            "range": "± 50931.18125910405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2483511.637681159,
            "unit": "ns",
            "range": "± 93169.60012193624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3207174.3636363638,
            "unit": "ns",
            "range": "± 75849.24678192449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2970295.0172413792,
            "unit": "ns",
            "range": "± 129133.86646646434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7123977.142857143,
            "unit": "ns",
            "range": "± 190868.47463879883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40991.427083333336,
            "unit": "ns",
            "range": "± 6530.298343704143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197624.425,
            "unit": "ns",
            "range": "± 6726.684971973898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195234.98214285713,
            "unit": "ns",
            "range": "± 6128.486249374003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169958.16666666666,
            "unit": "ns",
            "range": "± 5580.931563304259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060735.3571428573,
            "unit": "ns",
            "range": "± 39643.99432372526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776798.4285714286,
            "unit": "ns",
            "range": "± 22460.385570066333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13956.810526315789,
            "unit": "ns",
            "range": "± 2170.8449002033935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67691.02105263158,
            "unit": "ns",
            "range": "± 8234.741940664522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57853.9793814433,
            "unit": "ns",
            "range": "± 6057.767575565314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60687.35051546392,
            "unit": "ns",
            "range": "± 11813.190604187299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3568.4137931034484,
            "unit": "ns",
            "range": "± 457.8305909832765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12972.708333333334,
            "unit": "ns",
            "range": "± 1971.9290577431864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5653353,
            "unit": "ns",
            "range": "± 59846.30708859868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14644071.357142856,
            "unit": "ns",
            "range": "± 195198.89684414287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36592220,
            "unit": "ns",
            "range": "± 191765.10869691195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76760219.42857143,
            "unit": "ns",
            "range": "± 754214.1586531502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151043621,
            "unit": "ns",
            "range": "± 957348.8071876897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955120,
            "unit": "ns",
            "range": "± 70700.95461920346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875611.5454545454,
            "unit": "ns",
            "range": "± 83468.00478565365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1396695.5263157894,
            "unit": "ns",
            "range": "± 87495.42580795748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6114255.6875,
            "unit": "ns",
            "range": "± 371108.2543271625"
          }
        ]
      }
    ]
  }
}