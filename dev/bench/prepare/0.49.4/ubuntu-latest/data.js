window.BENCHMARK_DATA = {
  "lastUpdate": 1678785469849,
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
          "id": "efd3ed8c3476d9e7fbd90b1c1ad042968eaf4423",
          "message": "Prepare 0.49.4",
          "timestamp": "2023-03-14T18:05:54+09:00",
          "tree_id": "9290aa301194d7219b456e1828960afa26f1f90a",
          "url": "https://github.com/greymistcube/libplanet/commit/efd3ed8c3476d9e7fbd90b1c1ad042968eaf4423"
        },
        "date": 1678785462221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104005.45555555556,
            "unit": "ns",
            "range": "± 8640.328793890994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206078.94666666666,
            "unit": "ns",
            "range": "± 10384.209036871389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172950.33333333334,
            "unit": "ns",
            "range": "± 6268.31049578311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3793634.8666666667,
            "unit": "ns",
            "range": "± 41938.62550180862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9646991.666666666,
            "unit": "ns",
            "range": "± 60931.283980594155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20008.083333333332,
            "unit": "ns",
            "range": "± 2591.866938050911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45965.77108433735,
            "unit": "ns",
            "range": "± 2294.480643319599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39474.03921568627,
            "unit": "ns",
            "range": "± 1608.2590085030995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85955.71134020618,
            "unit": "ns",
            "range": "± 15103.773689572003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7250.948979591837,
            "unit": "ns",
            "range": "± 1126.2666122664582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14889.064516129032,
            "unit": "ns",
            "range": "± 1092.8020207988234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6237119.234375,
            "unit": "ns",
            "range": "± 44052.260946946735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860092.1641927084,
            "unit": "ns",
            "range": "± 4284.845661830764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367015.3477864584,
            "unit": "ns",
            "range": "± 2629.3925861179705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599511.3057291666,
            "unit": "ns",
            "range": "± 4179.388582757291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814411.9211077009,
            "unit": "ns",
            "range": "± 1181.8594185824513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740568.283984375,
            "unit": "ns",
            "range": "± 2135.0821973402467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102230.63636363637,
            "unit": "ns",
            "range": "± 4510.581670272229"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4544019.437760416,
            "unit": "ns",
            "range": "± 34990.06293437699"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6069366,
            "unit": "ns",
            "range": "± 44333.37929258269"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26278136.615384616,
            "unit": "ns",
            "range": "± 272791.7031242392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6562212.193548387,
            "unit": "ns",
            "range": "± 197738.92166126854"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29050238.714285713,
            "unit": "ns",
            "range": "± 380250.62954672583"
          }
        ]
      }
    ]
  }
}