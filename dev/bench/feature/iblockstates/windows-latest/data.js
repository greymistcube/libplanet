window.BENCHMARK_DATA = {
  "lastUpdate": 1686807651686,
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
          "id": "4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19",
          "message": "Added back in caching",
          "timestamp": "2023-06-15T14:05:24+09:00",
          "tree_id": "110b574e04752f39a883ac7f751da8fc894a7002",
          "url": "https://github.com/greymistcube/libplanet/commit/4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19"
        },
        "date": 1686807627445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704072.1649484537,
            "unit": "ns",
            "range": "± 224261.67413977033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139492.6315789474,
            "unit": "ns",
            "range": "± 278459.3874823467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2624606.1224489794,
            "unit": "ns",
            "range": "± 248681.5923930013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6650768.75,
            "unit": "ns",
            "range": "± 534828.905905529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58854.63917525773,
            "unit": "ns",
            "range": "± 12938.452224365918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8323914.814814814,
            "unit": "ns",
            "range": "± 346988.59391150315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23862284.210526317,
            "unit": "ns",
            "range": "± 1675840.9094195697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62538721.05263158,
            "unit": "ns",
            "range": "± 2155891.0670667756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125312215.27777778,
            "unit": "ns",
            "range": "± 6125585.823911157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256246924.3243243,
            "unit": "ns",
            "range": "± 8544064.606640533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950086.767578125,
            "unit": "ns",
            "range": "± 111475.12543987119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892103.3723958333,
            "unit": "ns",
            "range": "± 27644.66549655791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451748.9955357143,
            "unit": "ns",
            "range": "± 22288.955717412086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3167563.9583333335,
            "unit": "ns",
            "range": "± 50806.43335472885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040954.9272017046,
            "unit": "ns",
            "range": "± 22339.495843713423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938964.9658203125,
            "unit": "ns",
            "range": "± 10598.27076473489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3884287.6288659796,
            "unit": "ns",
            "range": "± 271285.39410313667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4038527.551020408,
            "unit": "ns",
            "range": "± 403625.92148033297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5099109.183673469,
            "unit": "ns",
            "range": "± 375756.0483251535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4806372.631578947,
            "unit": "ns",
            "range": "± 515975.2965887123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8412810.30927835,
            "unit": "ns",
            "range": "± 548099.5867321423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323494.3298969072,
            "unit": "ns",
            "range": "± 52771.46081823047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314650,
            "unit": "ns",
            "range": "± 40681.92667382823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273775,
            "unit": "ns",
            "range": "± 36747.717437170235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4634322.916666667,
            "unit": "ns",
            "range": "± 375950.7651077302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4353996.875,
            "unit": "ns",
            "range": "± 360525.90518008696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21206.521739130436,
            "unit": "ns",
            "range": "± 6647.891582601788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107545.36082474227,
            "unit": "ns",
            "range": "± 21372.06617594251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112612.24489795919,
            "unit": "ns",
            "range": "± 22409.940105387064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127621.97802197802,
            "unit": "ns",
            "range": "± 24172.57767801174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6211.702127659574,
            "unit": "ns",
            "range": "± 1625.1290359341574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22962.244897959183,
            "unit": "ns",
            "range": "± 6916.69898183997"
          }
        ]
      }
    ]
  }
}