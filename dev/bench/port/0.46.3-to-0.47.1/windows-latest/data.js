window.BENCHMARK_DATA = {
  "lastUpdate": 1678781646596,
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
          "id": "15e8aa9300901d906c32851c3067495627bb9b0a",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T16:58:32+09:00",
          "tree_id": "e22bb2dfdbcce2ddc09d8af07e56b858f778b345",
          "url": "https://github.com/greymistcube/libplanet/commit/15e8aa9300901d906c32851c3067495627bb9b0a"
        },
        "date": 1678781618474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86565.21739130435,
            "unit": "ns",
            "range": "± 4915.783835915942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844361.171875,
            "unit": "ns",
            "range": "± 23869.058434019684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524933.1770833333,
            "unit": "ns",
            "range": "± 6851.91147574644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1044417.0703125,
            "unit": "ns",
            "range": "± 4910.537681562748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554711.4583333335,
            "unit": "ns",
            "range": "± 9616.12456077358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813098.02734375,
            "unit": "ns",
            "range": "± 2734.853441929848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741425.56640625,
            "unit": "ns",
            "range": "± 3856.348425387882"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3951776.796875,
            "unit": "ns",
            "range": "± 55127.957013074025"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5309442.857142857,
            "unit": "ns",
            "range": "± 93459.73805528581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22461690,
            "unit": "ns",
            "range": "± 280203.54795347305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5447182.835820896,
            "unit": "ns",
            "range": "± 256433.20731637615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25730726.666666668,
            "unit": "ns",
            "range": "± 364972.66525173135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 72664.64646464646,
            "unit": "ns",
            "range": "± 12276.69364126565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164591.66666666666,
            "unit": "ns",
            "range": "± 18531.45074371315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140346,
            "unit": "ns",
            "range": "± 16147.348157677548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3336835.294117647,
            "unit": "ns",
            "range": "± 66901.49420207735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8570166.666666666,
            "unit": "ns",
            "range": "± 180421.86511552503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14467,
            "unit": "ns",
            "range": "± 3356.617314794732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40809.09090909091,
            "unit": "ns",
            "range": "± 8200.623307682676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25571.764705882353,
            "unit": "ns",
            "range": "± 1736.2803540290129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83625.51020408163,
            "unit": "ns",
            "range": "± 17001.717992175432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3888.5416666666665,
            "unit": "ns",
            "range": "± 733.6813867020087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16570.70707070707,
            "unit": "ns",
            "range": "± 5478.198954096482"
          }
        ]
      }
    ]
  }
}