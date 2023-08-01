window.BENCHMARK_DATA = {
  "lastUpdate": 1690874230036,
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
          "id": "97d0159a1bc6953ac6c44c96cbdfe29a75db0436",
          "message": "Cleanup and optimize Get()",
          "timestamp": "2023-08-01T16:03:20+09:00",
          "tree_id": "839690871fa2434a8c18fc659198a5124016dda8",
          "url": "https://github.com/greymistcube/libplanet/commit/97d0159a1bc6953ac6c44c96cbdfe29a75db0436"
        },
        "date": 1690874222401,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292087.85714285716,
            "unit": "ns",
            "range": "± 5539.585736187448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281304.8947368421,
            "unit": "ns",
            "range": "± 8352.87147839389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243886.61538461538,
            "unit": "ns",
            "range": "± 8097.781000845344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4335100.615384615,
            "unit": "ns",
            "range": "± 36203.98117504588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4043016,
            "unit": "ns",
            "range": "± 7725.792315943453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21293.684782608696,
            "unit": "ns",
            "range": "± 1434.640322725547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93515.45263157894,
            "unit": "ns",
            "range": "± 5473.4680976826185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75875.09302325582,
            "unit": "ns",
            "range": "± 2788.1917404685123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86358.78378378379,
            "unit": "ns",
            "range": "± 3404.534728818819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5450.547368421053,
            "unit": "ns",
            "range": "± 625.8447358336256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18826.208333333332,
            "unit": "ns",
            "range": "± 1706.993897665328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399043.8979591837,
            "unit": "ns",
            "range": "± 112950.1712046721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2630694.5263157897,
            "unit": "ns",
            "range": "± 89592.30445799396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1795932.757894737,
            "unit": "ns",
            "range": "± 131086.67930197745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4680847.277777778,
            "unit": "ns",
            "range": "± 94006.56883293757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6330468.7578125,
            "unit": "ns",
            "range": "± 17207.47991680834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888482.013950893,
            "unit": "ns",
            "range": "± 5337.702231167253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375655.5571614583,
            "unit": "ns",
            "range": "± 1145.6928452022041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594992.336237981,
            "unit": "ns",
            "range": "± 2629.0343608936982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816133.5176432292,
            "unit": "ns",
            "range": "± 2202.6540640355306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732259.5583844866,
            "unit": "ns",
            "range": "± 602.6092361974968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300798.727272727,
            "unit": "ns",
            "range": "± 67590.54746689406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577073,
            "unit": "ns",
            "range": "± 102165.46671558979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345566.869565218,
            "unit": "ns",
            "range": "± 109101.03063228902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3891780.6,
            "unit": "ns",
            "range": "± 89358.07129650672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6265744.105263158,
            "unit": "ns",
            "range": "± 124976.98667350043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7729124,
            "unit": "ns",
            "range": "± 65729.32063177197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19749055.285714287,
            "unit": "ns",
            "range": "± 77322.73882135296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50277988.266666666,
            "unit": "ns",
            "range": "± 393981.31658556504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100863765.8,
            "unit": "ns",
            "range": "± 393661.6891846892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201253674.8,
            "unit": "ns",
            "range": "± 353319.61577913316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47898.12359550562,
            "unit": "ns",
            "range": "± 2653.390882951922"
          }
        ]
      }
    ]
  }
}