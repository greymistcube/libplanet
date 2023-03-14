window.BENCHMARK_DATA = {
  "lastUpdate": 1678781740844,
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
          "id": "65fbbca087136714fdb6af354a7ae63f33e2338c",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:01:42+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/greymistcube/libplanet/commit/65fbbca087136714fdb6af354a7ae63f33e2338c"
        },
        "date": 1678781723219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128668.13265306123,
            "unit": "ns",
            "range": "± 15229.07702670502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129032.02688172043,
            "unit": "ns",
            "range": "± 13345.021665474616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248672.52222222224,
            "unit": "ns",
            "range": "± 16012.04063115186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247450.98979591837,
            "unit": "ns",
            "range": "± 16374.426557202372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3682539.1,
            "unit": "ns",
            "range": "± 54188.6521789519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10308154.8,
            "unit": "ns",
            "range": "± 158712.93961615104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26281.371134020617,
            "unit": "ns",
            "range": "± 4581.225225761998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69162.21649484536,
            "unit": "ns",
            "range": "± 11886.376220301898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59705.645833333336,
            "unit": "ns",
            "range": "± 9891.827178326415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119227.3125,
            "unit": "ns",
            "range": "± 18908.733313534474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5793.6292134831465,
            "unit": "ns",
            "range": "± 1078.9488822462863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22519.380434782608,
            "unit": "ns",
            "range": "± 3505.012570222137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5049925.7019314235,
            "unit": "ns",
            "range": "± 247384.2649711994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6034248.345679012,
            "unit": "ns",
            "range": "± 315322.8686150975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27044948.8,
            "unit": "ns",
            "range": "± 460896.23368721857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7665024.285714285,
            "unit": "ns",
            "range": "± 213231.3477105815"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31001656.98148148,
            "unit": "ns",
            "range": "± 1304279.6701591394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6406530.898958334,
            "unit": "ns",
            "range": "± 104063.41248467396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037419.3912760417,
            "unit": "ns",
            "range": "± 11164.46325432137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236833.3090122768,
            "unit": "ns",
            "range": "± 16403.335291472766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2505618.1356770834,
            "unit": "ns",
            "range": "± 28388.115289619804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782205.8507421875,
            "unit": "ns",
            "range": "± 20576.859965532065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727093.1643415178,
            "unit": "ns",
            "range": "± 2723.0797742704312"
          }
        ]
      }
    ]
  }
}