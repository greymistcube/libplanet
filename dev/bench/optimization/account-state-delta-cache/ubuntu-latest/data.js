window.BENCHMARK_DATA = {
  "lastUpdate": 1679704345302,
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
          "id": "424c67432ee2b0bb6df56928dda99c30da81ed5e",
          "message": "Removed call to lower level GetStates() with empty addresses",
          "timestamp": "2023-03-25T09:19:21+09:00",
          "tree_id": "244138a8f31b2b5fc77932bfb2137ac88923d21b",
          "url": "https://github.com/greymistcube/libplanet/commit/424c67432ee2b0bb6df56928dda99c30da81ed5e"
        },
        "date": 1679704338564,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109423,
            "unit": "ns",
            "range": "± 1879.186485198807"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5225290.733854166,
            "unit": "ns",
            "range": "± 68205.83125442501"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6256950.071428572,
            "unit": "ns",
            "range": "± 39879.22095617501"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28009498.555555556,
            "unit": "ns",
            "range": "± 582376.2323022931"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6594339.395833333,
            "unit": "ns",
            "range": "± 461022.5064921046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31203983.14285714,
            "unit": "ns",
            "range": "± 317632.5169494936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5903563.021935096,
            "unit": "ns",
            "range": "± 11147.642708055633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879295.2369791667,
            "unit": "ns",
            "range": "± 1397.39486955243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361843.1981770834,
            "unit": "ns",
            "range": "± 2689.489632461669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658717.544921875,
            "unit": "ns",
            "range": "± 1888.9615374279413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816606.1215444711,
            "unit": "ns",
            "range": "± 403.4062785766127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768051.7606770833,
            "unit": "ns",
            "range": "± 346.4561032688198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100212.08333333333,
            "unit": "ns",
            "range": "± 9626.2465064795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207417.25862068965,
            "unit": "ns",
            "range": "± 9058.244219243083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185672.52173913043,
            "unit": "ns",
            "range": "± 10488.920767536292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3960404.466666667,
            "unit": "ns",
            "range": "± 55855.66581552169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9840320.733333332,
            "unit": "ns",
            "range": "± 176819.60808343894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20674.797872340427,
            "unit": "ns",
            "range": "± 2080.35544719216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54882.29213483146,
            "unit": "ns",
            "range": "± 3657.7894255778656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42590.86956521739,
            "unit": "ns",
            "range": "± 2420.474457246848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102099.52577319587,
            "unit": "ns",
            "range": "± 18122.387700882566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6805.5,
            "unit": "ns",
            "range": "± 763.9301432305599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20400.408163265307,
            "unit": "ns",
            "range": "± 2139.0185235421372"
          }
        ]
      }
    ]
  }
}