window.BENCHMARK_DATA = {
  "lastUpdate": 1687769312860,
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
          "id": "38760ca734d2cb1d46c8098904887f1b9efb5b7b",
          "message": "Changelog",
          "timestamp": "2023-06-26T17:31:05+09:00",
          "tree_id": "ad06312248e71ce0ee14c0f626ec5f22fe6c6aa2",
          "url": "https://github.com/greymistcube/libplanet/commit/38760ca734d2cb1d46c8098904887f1b9efb5b7b"
        },
        "date": 1687769293111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440736.3636363635,
            "unit": "ns",
            "range": "± 118447.27876935975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2666652,
            "unit": "ns",
            "range": "± 103113.38813289425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2239664.864864865,
            "unit": "ns",
            "range": "± 111919.83240515475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5247955.172413793,
            "unit": "ns",
            "range": "± 151685.39949091742"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51036.17021276596,
            "unit": "ns",
            "range": "± 3808.0235345298597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7631633.333333333,
            "unit": "ns",
            "range": "± 263300.276184049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20786680,
            "unit": "ns",
            "range": "± 209482.6525378312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52477823.07692308,
            "unit": "ns",
            "range": "± 538461.5974450518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106457840,
            "unit": "ns",
            "range": "± 1339999.1704688263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210177060,
            "unit": "ns",
            "range": "± 1244378.4810096966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4905998.158482143,
            "unit": "ns",
            "range": "± 14869.653756567905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1561147.7120535714,
            "unit": "ns",
            "range": "± 6165.241231827491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224067.2135416667,
            "unit": "ns",
            "range": "± 3426.50883179477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670637.6302083335,
            "unit": "ns",
            "range": "± 4089.454406629076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846224.8395647322,
            "unit": "ns",
            "range": "± 1934.1612387056352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795052.0572916666,
            "unit": "ns",
            "range": "± 2339.0862273670273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3389968.1818181816,
            "unit": "ns",
            "range": "± 69671.6013497037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3481890.625,
            "unit": "ns",
            "range": "± 104827.90615706389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366846.666666667,
            "unit": "ns",
            "range": "± 79206.76257804783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4336986.486486486,
            "unit": "ns",
            "range": "± 133151.98117223073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6723625,
            "unit": "ns",
            "range": "± 185429.79628919365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270479.5918367347,
            "unit": "ns",
            "range": "± 10776.749270068965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262135.29411764705,
            "unit": "ns",
            "range": "± 10671.547657756333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234333.70786516854,
            "unit": "ns",
            "range": "± 12949.859106115127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4326425,
            "unit": "ns",
            "range": "± 61196.39212478877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970064.285714286,
            "unit": "ns",
            "range": "± 22493.88317342695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23115.957446808512,
            "unit": "ns",
            "range": "± 2876.7254080705334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90923.07692307692,
            "unit": "ns",
            "range": "± 4122.843334743289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77591.66666666667,
            "unit": "ns",
            "range": "± 3774.3668436470953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98972.1649484536,
            "unit": "ns",
            "range": "± 13818.93132526928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6260.416666666667,
            "unit": "ns",
            "range": "± 1081.857969729237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21022.82608695652,
            "unit": "ns",
            "range": "± 2385.998685595539"
          }
        ]
      }
    ]
  }
}