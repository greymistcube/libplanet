window.BENCHMARK_DATA = {
  "lastUpdate": 1679740864208,
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
          "id": "ddd8a9e6efec65cb2a48cbba4501188f0ebe3982",
          "message": "Removed state delta caching",
          "timestamp": "2023-03-25T19:27:36+09:00",
          "tree_id": "51067fb468ca59e1b776c0eb20895db4da154a8b",
          "url": "https://github.com/greymistcube/libplanet/commit/ddd8a9e6efec65cb2a48cbba4501188f0ebe3982"
        },
        "date": 1679740841720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99900,
            "unit": "ns",
            "range": "± 1492.2019523732927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4780222.395833333,
            "unit": "ns",
            "range": "± 35176.31933566921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492345.1953125,
            "unit": "ns",
            "range": "± 8585.420599036312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151435.21484375,
            "unit": "ns",
            "range": "± 5065.37350395475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623727.1484375,
            "unit": "ns",
            "range": "± 5036.400897196954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822217.7176339285,
            "unit": "ns",
            "range": "± 3033.0043546458423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747591.7578125,
            "unit": "ns",
            "range": "± 1419.788823303653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4649778.4375,
            "unit": "ns",
            "range": "± 45973.6983892538"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5652000,
            "unit": "ns",
            "range": "± 126206.43698655828"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24422641.379310343,
            "unit": "ns",
            "range": "± 712056.8950568695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5920400,
            "unit": "ns",
            "range": "± 112653.04256876509"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27181247.61904762,
            "unit": "ns",
            "range": "± 563528.1116493193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90477.08333333333,
            "unit": "ns",
            "range": "± 9009.112102598845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187886.31578947368,
            "unit": "ns",
            "range": "± 12967.837551044504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160100,
            "unit": "ns",
            "range": "± 8315.97165792336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3499000,
            "unit": "ns",
            "range": "± 65110.762770615955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8663885.714285715,
            "unit": "ns",
            "range": "± 205348.58968523325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19303.030303030304,
            "unit": "ns",
            "range": "± 2645.5759970590934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52227,
            "unit": "ns",
            "range": "± 8823.715232545217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37458.90410958904,
            "unit": "ns",
            "range": "± 1812.1377505003397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94194.84536082474,
            "unit": "ns",
            "range": "± 18143.52140534616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5807.216494845361,
            "unit": "ns",
            "range": "± 794.0202850421513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16803.061224489797,
            "unit": "ns",
            "range": "± 1829.3401481562187"
          }
        ]
      }
    ]
  }
}