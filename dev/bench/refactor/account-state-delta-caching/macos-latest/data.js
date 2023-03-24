window.BENCHMARK_DATA = {
  "lastUpdate": 1679618532773,
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
          "id": "b1116e9d097b3b696572b0eaa77a2eec90c1143e",
          "message": "Added caching to AccountStateDeltaImpl",
          "timestamp": "2023-03-24T09:21:59+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/greymistcube/libplanet/commit/b1116e9d097b3b696572b0eaa77a2eec90c1143e"
        },
        "date": 1679618520129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 142356.79213483146,
            "unit": "ns",
            "range": "± 8366.864420550226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132352.85555555555,
            "unit": "ns",
            "range": "± 12650.521584984543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273823.7842105263,
            "unit": "ns",
            "range": "± 43066.41970671042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267094.1530612245,
            "unit": "ns",
            "range": "± 43718.805840633046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937926.4791666665,
            "unit": "ns",
            "range": "± 273251.02176007663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11357640.594936708,
            "unit": "ns",
            "range": "± 590070.6308361284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25934.113636363636,
            "unit": "ns",
            "range": "± 4497.977500625559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61002.81914893617,
            "unit": "ns",
            "range": "± 8413.190141002497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64883.206896551725,
            "unit": "ns",
            "range": "± 6524.721116980441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134711.05208333334,
            "unit": "ns",
            "range": "± 21343.509390257157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8106.532608695652,
            "unit": "ns",
            "range": "± 835.2144878312573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22770.065217391304,
            "unit": "ns",
            "range": "± 3214.146128656768"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5248614.893623738,
            "unit": "ns",
            "range": "± 438427.1837488646"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7332756.09139785,
            "unit": "ns",
            "range": "± 773926.9032679917"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30598527.507692307,
            "unit": "ns",
            "range": "± 1426226.1270936658"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8932460.20212766,
            "unit": "ns",
            "range": "± 668593.1677367886"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34548414.0106383,
            "unit": "ns",
            "range": "± 2133533.490786878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7119002.1328125,
            "unit": "ns",
            "range": "± 138047.84616131094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2190971.920940897,
            "unit": "ns",
            "range": "± 83051.42187306329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335214.1685546874,
            "unit": "ns",
            "range": "± 39811.696357757755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2927647.7881266274,
            "unit": "ns",
            "range": "± 182476.6313589428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885829.2372558594,
            "unit": "ns",
            "range": "± 19815.82150928305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771057.234375,
            "unit": "ns",
            "range": "± 19512.258061857512"
          }
        ]
      }
    ]
  }
}