window.BENCHMARK_DATA = {
  "lastUpdate": 1678932685381,
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
          "id": "60b245f9c0e189779cbc848e3b80f9961312f83d",
          "message": "Release 0.50.4",
          "timestamp": "2023-03-16T10:52:53+09:00",
          "tree_id": "57ef9e014cc1b48431b2c2f83edb7b48977a1b79",
          "url": "https://github.com/greymistcube/libplanet/commit/60b245f9c0e189779cbc848e3b80f9961312f83d"
        },
        "date": 1678932655065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97713.15789473684,
            "unit": "ns",
            "range": "± 4986.617881363764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862395.052083333,
            "unit": "ns",
            "range": "± 15354.373747692422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528157.98828125,
            "unit": "ns",
            "range": "± 6595.062636296233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160544.7786458333,
            "unit": "ns",
            "range": "± 6634.352511895825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618391.953125,
            "unit": "ns",
            "range": "± 9416.790896721935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811643.8411458334,
            "unit": "ns",
            "range": "± 1688.2253286801047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746785.0846354166,
            "unit": "ns",
            "range": "± 1271.0935744705457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4671390.52734375,
            "unit": "ns",
            "range": "± 21557.56680892137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5564813.333333333,
            "unit": "ns",
            "range": "± 67854.75945688983"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25374508.333333332,
            "unit": "ns",
            "range": "± 733991.2270300939"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5801477.777777778,
            "unit": "ns",
            "range": "± 118863.51815301624"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27988100,
            "unit": "ns",
            "range": "± 464994.497663298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88617.20430107527,
            "unit": "ns",
            "range": "± 5433.183542220855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183354.66666666666,
            "unit": "ns",
            "range": "± 9160.92308185762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164287.9120879121,
            "unit": "ns",
            "range": "± 8846.591750057509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3571278.5714285714,
            "unit": "ns",
            "range": "± 56509.81097352686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8779762.5,
            "unit": "ns",
            "range": "± 165037.23973697572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19387.23404255319,
            "unit": "ns",
            "range": "± 2246.3941975689963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51908.24742268041,
            "unit": "ns",
            "range": "± 7634.443197649998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38138.75,
            "unit": "ns",
            "range": "± 1990.5150882260843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98418.27956989247,
            "unit": "ns",
            "range": "± 16246.209900723998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5635.416666666667,
            "unit": "ns",
            "range": "± 924.9727354919758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18645.918367346938,
            "unit": "ns",
            "range": "± 2049.59982854823"
          }
        ]
      }
    ]
  }
}