window.BENCHMARK_DATA = {
  "lastUpdate": 1679617963224,
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
          "id": "f538f484557cd8661e871aa47925b2262bb986c6",
          "message": "Added caching to AccountStateDeltaImpl",
          "timestamp": "2023-03-24T09:17:52+09:00",
          "tree_id": "c3296d57c93f2484d8a6daaf2ff57cefa8e546e2",
          "url": "https://github.com/greymistcube/libplanet/commit/f538f484557cd8661e871aa47925b2262bb986c6"
        },
        "date": 1679617937277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132408.14130434784,
            "unit": "ns",
            "range": "± 12497.855237170264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101114.38043478261,
            "unit": "ns",
            "range": "± 11085.989346861827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221261.71717171717,
            "unit": "ns",
            "range": "± 30428.737117268684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178425.70618556702,
            "unit": "ns",
            "range": "± 14953.39995267112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3462193.4516129033,
            "unit": "ns",
            "range": "± 104728.91467270431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9742380.625,
            "unit": "ns",
            "range": "± 295973.8136164981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16387.285714285714,
            "unit": "ns",
            "range": "± 1927.1843596132771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51500.90625,
            "unit": "ns",
            "range": "± 6812.728913126516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45923.65979381443,
            "unit": "ns",
            "range": "± 5113.253084075159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100162.33333333333,
            "unit": "ns",
            "range": "± 14872.624952761611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7029.762886597938,
            "unit": "ns",
            "range": "± 999.6167471127359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16630.15625,
            "unit": "ns",
            "range": "± 2095.830499012767"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4676774.306134259,
            "unit": "ns",
            "range": "± 241902.38324297944"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6286896.384615385,
            "unit": "ns",
            "range": "± 65447.26029985068"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27269689.203125,
            "unit": "ns",
            "range": "± 1225986.9384150167"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7190796.935483871,
            "unit": "ns",
            "range": "± 214547.52523002692"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32445751.782608695,
            "unit": "ns",
            "range": "± 785529.7153560519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6297166.088169643,
            "unit": "ns",
            "range": "± 54669.50324229205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963444.405970982,
            "unit": "ns",
            "range": "± 24448.939656669456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313822.4610677084,
            "unit": "ns",
            "range": "± 16649.302361020083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553268.6400240385,
            "unit": "ns",
            "range": "± 24405.08881245402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854094.4509765625,
            "unit": "ns",
            "range": "± 6273.755665412835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733090.5708705357,
            "unit": "ns",
            "range": "± 6946.848907507077"
          }
        ]
      }
    ]
  }
}