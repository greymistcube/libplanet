window.BENCHMARK_DATA = {
  "lastUpdate": 1678780844895,
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
          "id": "fe20a94d0194a3b54224a695e15347d7a3a86ecc",
          "message": "Prepare 0.46.4",
          "timestamp": "2023-03-14T16:48:59+09:00",
          "tree_id": "d4e7792b6442bf1cbf3b9a276a46e7b3aeb4333d",
          "url": "https://github.com/greymistcube/libplanet/commit/fe20a94d0194a3b54224a695e15347d7a3a86ecc"
        },
        "date": 1678780838027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101016.51041666667,
            "unit": "ns",
            "range": "± 9749.603499624503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207471.20895522388,
            "unit": "ns",
            "range": "± 9105.647738824238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183131.9655172414,
            "unit": "ns",
            "range": "± 5324.822213549606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3976048.6428571427,
            "unit": "ns",
            "range": "± 64141.916310159926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9880856.263157895,
            "unit": "ns",
            "range": "± 207335.17077772142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20961.130434782608,
            "unit": "ns",
            "range": "± 2239.7174724563324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52956.77108433735,
            "unit": "ns",
            "range": "± 3517.7446777289388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40842,
            "unit": "ns",
            "range": "± 845.7033315530925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100306.60606060606,
            "unit": "ns",
            "range": "± 19634.121441302123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5492.648936170212,
            "unit": "ns",
            "range": "± 564.1753846777397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19832.295454545456,
            "unit": "ns",
            "range": "± 1504.4113612596616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6015672.194196428,
            "unit": "ns",
            "range": "± 23661.588447512328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919371.5810546875,
            "unit": "ns",
            "range": "± 3547.9301346985358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355417.537388393,
            "unit": "ns",
            "range": "± 3794.638580300506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619432.564453125,
            "unit": "ns",
            "range": "± 5036.864023144258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826627.879296875,
            "unit": "ns",
            "range": "± 1082.5172755086412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772025.2739955357,
            "unit": "ns",
            "range": "± 679.3924539683183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 113493.35555555555,
            "unit": "ns",
            "range": "± 4165.499665300209"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5048246.733333333,
            "unit": "ns",
            "range": "± 52357.72126388028"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6169106.933333334,
            "unit": "ns",
            "range": "± 58556.759194412225"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27563365.2,
            "unit": "ns",
            "range": "± 611755.3799628875"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7138315.133333334,
            "unit": "ns",
            "range": "± 126197.74817034838"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31188764.88235294,
            "unit": "ns",
            "range": "± 424785.173287022"
          }
        ]
      }
    ]
  }
}