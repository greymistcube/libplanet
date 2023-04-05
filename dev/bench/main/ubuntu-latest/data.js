window.BENCHMARK_DATA = {
  "lastUpdate": 1680684585822,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "839e4da7af33f2a177ead2dd7db2b0f05158ce4e",
          "message": "Merge pull request #3059 from greymistcube/refactor/block-validate\n\n♻️ Refactor block validate",
          "timestamp": "2023-04-05T15:32:20+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/greymistcube/libplanet/commit/839e4da7af33f2a177ead2dd7db2b0f05158ce4e"
        },
        "date": 1680684575585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3932678.9081632653,
            "unit": "ns",
            "range": "± 348982.7681295786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4273245.649484536,
            "unit": "ns",
            "range": "± 373603.15637309366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5183853.77,
            "unit": "ns",
            "range": "± 391567.63400673633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5505077.5578947365,
            "unit": "ns",
            "range": "± 440210.72045989946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10099043.030303031,
            "unit": "ns",
            "range": "± 800599.112286561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9736173.516483517,
            "unit": "ns",
            "range": "± 593195.3285235699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25640947.97777778,
            "unit": "ns",
            "range": "± 961166.8350015444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67795284.25,
            "unit": "ns",
            "range": "± 1715769.571084047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134955259.5625,
            "unit": "ns",
            "range": "± 2621957.328474841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270367915.1851852,
            "unit": "ns",
            "range": "± 7518694.978199583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1885816.2424242424,
            "unit": "ns",
            "range": "± 195790.608574782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3670342.170212766,
            "unit": "ns",
            "range": "± 231257.01338687193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2864300.094736842,
            "unit": "ns",
            "range": "± 187361.19213462522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7877741.787878788,
            "unit": "ns",
            "range": "± 562596.5641374743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77258.88421052632,
            "unit": "ns",
            "range": "± 17059.84951410466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7093288.624441965,
            "unit": "ns",
            "range": "± 104886.01653458405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2280648.3671875,
            "unit": "ns",
            "range": "± 42356.739082662294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1724749.724609375,
            "unit": "ns",
            "range": "± 30124.737960986913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3232104.909895833,
            "unit": "ns",
            "range": "± 36427.05022793873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062051.6807291666,
            "unit": "ns",
            "range": "± 16017.629258642339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962859.5739889706,
            "unit": "ns",
            "range": "± 18786.291225847763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 436873.51,
            "unit": "ns",
            "range": "± 71113.3649866688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370603.35353535356,
            "unit": "ns",
            "range": "± 56859.94369076174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338385.1836734694,
            "unit": "ns",
            "range": "± 41769.36022363389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6618618.762886598,
            "unit": "ns",
            "range": "± 506257.01200880035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5232768.642857143,
            "unit": "ns",
            "range": "± 338395.2853469997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32189.08080808081,
            "unit": "ns",
            "range": "± 11437.60982565919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131995.61458333334,
            "unit": "ns",
            "range": "± 23305.627202287338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105265.9693877551,
            "unit": "ns",
            "range": "± 19763.543228829592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 272873.4583333333,
            "unit": "ns",
            "range": "± 40475.7177160557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6689.073170731707,
            "unit": "ns",
            "range": "± 925.140053200993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33169.15306122449,
            "unit": "ns",
            "range": "± 12248.74168698463"
          }
        ]
      }
    ]
  }
}