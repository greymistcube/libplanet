window.BENCHMARK_DATA = {
  "lastUpdate": 1678672854406,
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
          "id": "9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad",
          "message": "Added test for forking",
          "timestamp": "2023-03-13T10:44:44+09:00",
          "tree_id": "f9eb705af2c77b510ecdaf84c43ffe709d979a1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad"
        },
        "date": 1678672828501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1087707.4468085107,
            "unit": "ns",
            "range": "± 111565.37838248107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1810205.5555555555,
            "unit": "ns",
            "range": "± 75390.92687681927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1657108,
            "unit": "ns",
            "range": "± 143991.46697501265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3669514.705882353,
            "unit": "ns",
            "range": "± 110000.12984111605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33858.02469135803,
            "unit": "ns",
            "range": "± 1795.5406008728166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5266393.333333333,
            "unit": "ns",
            "range": "± 38221.50603795622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 13935564.285714285,
            "unit": "ns",
            "range": "± 186957.44726517875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 32644900,
            "unit": "ns",
            "range": "± 198682.16182780836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 66654078.571428575,
            "unit": "ns",
            "range": "± 384502.6301371911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 133227733.33333333,
            "unit": "ns",
            "range": "± 966175.3971692915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3661635.1041666665,
            "unit": "ns",
            "range": "± 11561.55592420806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1127170.1041666667,
            "unit": "ns",
            "range": "± 3087.021807294624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 807211.2374441965,
            "unit": "ns",
            "range": "± 1681.1505546379744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003851.9270833333,
            "unit": "ns",
            "range": "± 3277.627861890618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623441.4518229166,
            "unit": "ns",
            "range": "± 1118.4445455798689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575712.1243990385,
            "unit": "ns",
            "range": "± 397.1037375156685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226185.294117647,
            "unit": "ns",
            "range": "± 69938.28938884728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583747.5,
            "unit": "ns",
            "range": "± 96183.69974249195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15543452.94117647,
            "unit": "ns",
            "range": "± 317869.8281483457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4428072,
            "unit": "ns",
            "range": "± 117373.38042901097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18379096.296296295,
            "unit": "ns",
            "range": "± 326392.27988782205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 128284.88372093023,
            "unit": "ns",
            "range": "± 6978.007762912082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 127981.70731707317,
            "unit": "ns",
            "range": "± 6669.612831393328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 102919.10112359551,
            "unit": "ns",
            "range": "± 5676.2238649174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7956700,
            "unit": "ns",
            "range": "± 62739.48403631366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6471186.666666667,
            "unit": "ns",
            "range": "± 89809.026484509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11589.473684210527,
            "unit": "ns",
            "range": "± 1405.042112203783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 33132.94117647059,
            "unit": "ns",
            "range": "± 2282.8234520359356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25684.782608695652,
            "unit": "ns",
            "range": "± 2001.3146658589526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71765.93406593407,
            "unit": "ns",
            "range": "± 11332.129541756922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3104.1237113402062,
            "unit": "ns",
            "range": "± 547.897026094091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10219.565217391304,
            "unit": "ns",
            "range": "± 1410.4195565044758"
          }
        ]
      }
    ]
  }
}