window.BENCHMARK_DATA = {
  "lastUpdate": 1679986644619,
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
          "id": "8902e1d814122f6a7b5c54230844e9bf49094bdf",
          "message": "Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:40:24+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/8902e1d814122f6a7b5c54230844e9bf49094bdf"
        },
        "date": 1679986240428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112403.125,
            "unit": "ns",
            "range": "± 2099.002203429048"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4974857.085658482,
            "unit": "ns",
            "range": "± 52875.46040789277"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5609732.677419355,
            "unit": "ns",
            "range": "± 109617.0390253836"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26817875.95238095,
            "unit": "ns",
            "range": "± 608842.2945280228"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6831073.5,
            "unit": "ns",
            "range": "± 35961.34112804016"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29840049.57142857,
            "unit": "ns",
            "range": "± 395956.6511333347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5788186.323660715,
            "unit": "ns",
            "range": "± 43429.22822076312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851344.2709635417,
            "unit": "ns",
            "range": "± 5973.20638940054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329338.8854166667,
            "unit": "ns",
            "range": "± 3831.0142194503214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559865.4260602677,
            "unit": "ns",
            "range": "± 8470.876406869615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839186.9447916667,
            "unit": "ns",
            "range": "± 2610.4464310977824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760270.1839192709,
            "unit": "ns",
            "range": "± 1014.48081834345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99826.73737373737,
            "unit": "ns",
            "range": "± 11575.786158858922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209999.41176470587,
            "unit": "ns",
            "range": "± 4252.871633655658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174738.60317460317,
            "unit": "ns",
            "range": "± 7959.55724076547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3820733.2,
            "unit": "ns",
            "range": "± 40482.994821812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9571914.214285715,
            "unit": "ns",
            "range": "± 144409.57703175026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16908.08695652174,
            "unit": "ns",
            "range": "± 992.9633045705177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50351.25555555556,
            "unit": "ns",
            "range": "± 4145.589936634062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41481,
            "unit": "ns",
            "range": "± 741.8124522315019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109528.67708333333,
            "unit": "ns",
            "range": "± 22360.842362673004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5895.826086956522,
            "unit": "ns",
            "range": "± 555.541644588803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16059.010869565218,
            "unit": "ns",
            "range": "± 1154.7477674687061"
          }
        ]
      },
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
          "id": "eb69f758d4a8760b522726611ef3782e919b6455",
          "message": "[skip changelog] Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:41:23+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/eb69f758d4a8760b522726611ef3782e919b6455"
        },
        "date": 1679986637301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 150529.55102040817,
            "unit": "ns",
            "range": "± 19576.90862052907"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6001417.439110825,
            "unit": "ns",
            "range": "± 347472.2275079612"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7066479.117647059,
            "unit": "ns",
            "range": "± 380004.5171314669"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33783425.5,
            "unit": "ns",
            "range": "± 359994.4711406103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7830248.933333334,
            "unit": "ns",
            "range": "± 349502.6691128587"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37108827.86666667,
            "unit": "ns",
            "range": "± 673838.9365466103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6599911.838727678,
            "unit": "ns",
            "range": "± 45813.410654654785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988743.0966145834,
            "unit": "ns",
            "range": "± 4049.953487496888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434497.32734375,
            "unit": "ns",
            "range": "± 4844.341517065732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2743805.1346153845,
            "unit": "ns",
            "range": "± 1292.539589235489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862456.0711588542,
            "unit": "ns",
            "range": "± 691.177888720394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800257.5968889509,
            "unit": "ns",
            "range": "± 418.8964289365183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 145103.91578947369,
            "unit": "ns",
            "range": "± 12601.747461282483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279372.57446808513,
            "unit": "ns",
            "range": "± 17234.12338499506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269524.8142857143,
            "unit": "ns",
            "range": "± 13111.776936909473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4538885.285714285,
            "unit": "ns",
            "range": "± 52860.03172883674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12022124.733333332,
            "unit": "ns",
            "range": "± 150277.65769518897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34153.72340425532,
            "unit": "ns",
            "range": "± 3828.1955473145063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77740.42857142857,
            "unit": "ns",
            "range": "± 6686.702012440408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67384.68686868687,
            "unit": "ns",
            "range": "± 9545.108945879212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160783.52040816325,
            "unit": "ns",
            "range": "± 28305.59047737346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10940.791666666666,
            "unit": "ns",
            "range": "± 1529.556096021716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32322.547368421052,
            "unit": "ns",
            "range": "± 4431.882249300915"
          }
        ]
      }
    ]
  }
}