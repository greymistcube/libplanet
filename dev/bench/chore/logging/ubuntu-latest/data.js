window.BENCHMARK_DATA = {
  "lastUpdate": 1679986247232,
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
      }
    ]
  }
}