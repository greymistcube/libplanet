window.BENCHMARK_DATA = {
  "lastUpdate": 1687782806393,
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
          "id": "7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-26T21:18:27+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39"
        },
        "date": 1687782799051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760437.375,
            "unit": "ns",
            "range": "± 109904.26034295604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4075483.785714286,
            "unit": "ns",
            "range": "± 68660.1266565174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4664365.9375,
            "unit": "ns",
            "range": "± 79929.98550353825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4850537,
            "unit": "ns",
            "range": "± 92817.2855467486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7274131.846153846,
            "unit": "ns",
            "range": "± 163635.57005680454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8175270.214285715,
            "unit": "ns",
            "range": "± 112612.68834589205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23114364.07142857,
            "unit": "ns",
            "range": "± 224060.00821052873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57832016.53333333,
            "unit": "ns",
            "range": "± 396415.75746752607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114513479.33333333,
            "unit": "ns",
            "range": "± 1407404.53908486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232899289.6,
            "unit": "ns",
            "range": "± 620285.5473915449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327638.28571428574,
            "unit": "ns",
            "range": "± 13076.017047760886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288301.7297297297,
            "unit": "ns",
            "range": "± 14325.481695788254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281811.0888888889,
            "unit": "ns",
            "range": "± 15474.819178224716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4753551,
            "unit": "ns",
            "range": "± 61216.45607771072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196878.666666667,
            "unit": "ns",
            "range": "± 45210.34247613618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21306.945054945056,
            "unit": "ns",
            "range": "± 2226.290493986389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110123.44897959183,
            "unit": "ns",
            "range": "± 11277.289441020184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102724.92,
            "unit": "ns",
            "range": "± 15089.410674330073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120685.4947368421,
            "unit": "ns",
            "range": "± 11920.67718506394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7594.741935483871,
            "unit": "ns",
            "range": "± 1240.9771737313706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25942.96875,
            "unit": "ns",
            "range": "± 2743.959449804434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51992.10752688172,
            "unit": "ns",
            "range": "± 4368.193678175388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6302067.542708334,
            "unit": "ns",
            "range": "± 47344.534841208435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902539.1502604166,
            "unit": "ns",
            "range": "± 1546.0229529121395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397522.0958333334,
            "unit": "ns",
            "range": "± 3951.6609500528943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692257.0411658655,
            "unit": "ns",
            "range": "± 10022.253811284589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856767.7916015625,
            "unit": "ns",
            "range": "± 643.4758732031897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766059.3037760417,
            "unit": "ns",
            "range": "± 985.5327314534386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619376.4302325582,
            "unit": "ns",
            "range": "± 87545.09214846547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2981658.53125,
            "unit": "ns",
            "range": "± 82246.17350290505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558976.0568181816,
            "unit": "ns",
            "range": "± 140914.82946616903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910282.090909091,
            "unit": "ns",
            "range": "± 216702.30722994675"
          }
        ]
      }
    ]
  }
}