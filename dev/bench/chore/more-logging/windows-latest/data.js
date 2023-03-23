window.BENCHMARK_DATA = {
  "lastUpdate": 1679539970930,
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
          "id": "84428e00852ef16add1099d89d31c03d15575164",
          "message": "Added info",
          "timestamp": "2023-03-23T11:38:16+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/greymistcube/libplanet/commit/84428e00852ef16add1099d89d31c03d15575164"
        },
        "date": 1679539949704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93613.33333333333,
            "unit": "ns",
            "range": "± 3521.6602489579986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4781256.473214285,
            "unit": "ns",
            "range": "± 6420.322029807958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509281.805889423,
            "unit": "ns",
            "range": "± 1058.5644102149822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154257.4916294643,
            "unit": "ns",
            "range": "± 563.4886967261353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622339.9553571427,
            "unit": "ns",
            "range": "± 6585.287186212114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854340.3483072916,
            "unit": "ns",
            "range": "± 1198.371835190499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772416.7220052084,
            "unit": "ns",
            "range": "± 746.5899532591274"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3923976.534598214,
            "unit": "ns",
            "range": "± 9118.635218898728"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5453620,
            "unit": "ns",
            "range": "± 48271.37868343932"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23007725,
            "unit": "ns",
            "range": "± 328050.69210551755"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6101903.846153846,
            "unit": "ns",
            "range": "± 95581.11402873666"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25863870,
            "unit": "ns",
            "range": "± 408202.465870623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84937.5,
            "unit": "ns",
            "range": "± 7559.841964374374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181736.95652173914,
            "unit": "ns",
            "range": "± 11764.00467613248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147852.63157894736,
            "unit": "ns",
            "range": "± 1423.7542004825877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3344378.5714285714,
            "unit": "ns",
            "range": "± 28662.01395499004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8363285.714285715,
            "unit": "ns",
            "range": "± 52159.85572689547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17019.38775510204,
            "unit": "ns",
            "range": "± 2124.5573541772696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46994.565217391304,
            "unit": "ns",
            "range": "± 4288.557843881243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40971.71717171717,
            "unit": "ns",
            "range": "± 3018.955097111514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92800,
            "unit": "ns",
            "range": "± 14703.633636120805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5759.183673469388,
            "unit": "ns",
            "range": "± 801.3952696936745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15797.872340425532,
            "unit": "ns",
            "range": "± 1929.2167179500905"
          }
        ]
      }
    ]
  }
}