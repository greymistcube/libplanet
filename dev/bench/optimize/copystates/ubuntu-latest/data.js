window.BENCHMARK_DATA = {
  "lastUpdate": 1706246375119,
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
          "id": "5cd331a36bb4120f25597dd64c068da738482897",
          "message": "Use Stack instead of Queue internally",
          "timestamp": "2024-01-26T14:08:20+09:00",
          "tree_id": "49577e08dc19e0fe9c4d3cb94ecd84e64d090d7a",
          "url": "https://github.com/greymistcube/libplanet/commit/5cd331a36bb4120f25597dd64c068da738482897"
        },
        "date": 1706246368923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2643715.2333333334,
            "unit": "ns",
            "range": "± 79006.31320024622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2634290.3421052634,
            "unit": "ns",
            "range": "± 88983.85498520757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3302675.35,
            "unit": "ns",
            "range": "± 68346.68315463065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3041654.0714285714,
            "unit": "ns",
            "range": "± 84032.74183313733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6912729.769230769,
            "unit": "ns",
            "range": "± 105403.53043356267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50482.5625,
            "unit": "ns",
            "range": "± 7205.0356963394925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1111381.116161616,
            "unit": "ns",
            "range": "± 109445.83014681115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2068525.1971830986,
            "unit": "ns",
            "range": "± 99107.2389071007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579993.03125,
            "unit": "ns",
            "range": "± 111066.10907467897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6195543.693333333,
            "unit": "ns",
            "range": "± 309890.9293418422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6010282.433333334,
            "unit": "ns",
            "range": "± 37405.742822014196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14806641.666666666,
            "unit": "ns",
            "range": "± 199538.12700250212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36859217.071428575,
            "unit": "ns",
            "range": "± 122247.74170100038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75645066.85714285,
            "unit": "ns",
            "range": "± 468478.5513164039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151865457.84615386,
            "unit": "ns",
            "range": "± 774224.1439156844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3770014.3741629464,
            "unit": "ns",
            "range": "± 12733.20708656793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214337.3721354166,
            "unit": "ns",
            "range": "± 19113.293873470597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760678.0355747768,
            "unit": "ns",
            "range": "± 1655.276492404888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927226.79296875,
            "unit": "ns",
            "range": "± 27530.883696501383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617478.0431189904,
            "unit": "ns",
            "range": "± 6164.589205040677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582995.7106584822,
            "unit": "ns",
            "range": "± 2485.6306844055016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241219.2619047619,
            "unit": "ns",
            "range": "± 12916.58707171449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233693.8,
            "unit": "ns",
            "range": "± 13639.330442724915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167369.2857142857,
            "unit": "ns",
            "range": "± 5160.635428523547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149528.5,
            "unit": "ns",
            "range": "± 35757.955598934685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2896460.433333333,
            "unit": "ns",
            "range": "± 23705.527138703528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24354.050505050505,
            "unit": "ns",
            "range": "± 3029.96451576763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96847.87,
            "unit": "ns",
            "range": "± 16838.88786585049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69331.69,
            "unit": "ns",
            "range": "± 20078.80001127628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74112.98484848485,
            "unit": "ns",
            "range": "± 21099.675017501002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5835.406976744186,
            "unit": "ns",
            "range": "± 1132.0408886598625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14082.08510638298,
            "unit": "ns",
            "range": "± 1959.941536376112"
          }
        ]
      }
    ]
  }
}