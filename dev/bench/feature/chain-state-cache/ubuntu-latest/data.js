window.BENCHMARK_DATA = {
  "lastUpdate": 1680059079766,
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
          "id": "7669de38b6d6e1af3fa179eae36a5abf91f81fa4",
          "message": "Introduce state cache",
          "timestamp": "2023-03-29T11:51:25+09:00",
          "tree_id": "f1c8e9d1a35ba2d4258366bbd2a7bc2347b3cd52",
          "url": "https://github.com/greymistcube/libplanet/commit/7669de38b6d6e1af3fa179eae36a5abf91f81fa4"
        },
        "date": 1680059065970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104672.60416666667,
            "unit": "ns",
            "range": "± 7243.745163175959"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4495715.537560096,
            "unit": "ns",
            "range": "± 30004.58902648092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6068986.153846154,
            "unit": "ns",
            "range": "± 61227.72547472013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25563291.214285713,
            "unit": "ns",
            "range": "± 204067.21405993006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6362415.278350515,
            "unit": "ns",
            "range": "± 386060.4737169247"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28931802.42105263,
            "unit": "ns",
            "range": "± 621235.5281696768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6120901.984375,
            "unit": "ns",
            "range": "± 59570.08623820445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845441.4553786058,
            "unit": "ns",
            "range": "± 1249.255987285421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343738.3583233173,
            "unit": "ns",
            "range": "± 777.708445423069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566793.5865384615,
            "unit": "ns",
            "range": "± 3315.5703675778386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819484.3275669643,
            "unit": "ns",
            "range": "± 416.4409380124195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741766.8478190104,
            "unit": "ns",
            "range": "± 536.0786377937577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92114.19587628866,
            "unit": "ns",
            "range": "± 8656.470529849305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206794.32894736843,
            "unit": "ns",
            "range": "± 10430.759631510587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175006.24444444446,
            "unit": "ns",
            "range": "± 6532.55077618493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3853837.6666666665,
            "unit": "ns",
            "range": "± 25350.03146424271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9641492,
            "unit": "ns",
            "range": "± 59307.73348197713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16716.978723404256,
            "unit": "ns",
            "range": "± 1751.8810350114418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51077.979166666664,
            "unit": "ns",
            "range": "± 7028.772942217269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43086.9,
            "unit": "ns",
            "range": "± 3779.8533574783573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104064.72043010753,
            "unit": "ns",
            "range": "± 12328.848318305068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6972.418367346939,
            "unit": "ns",
            "range": "± 994.3907104453398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17164.275510204083,
            "unit": "ns",
            "range": "± 2459.2256965159536"
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
          "id": "ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7",
          "message": "Changelog",
          "timestamp": "2023-03-29T11:53:47+09:00",
          "tree_id": "8a4fce51c0995d6db5798e321be3c78cbac9254d",
          "url": "https://github.com/greymistcube/libplanet/commit/ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7"
        },
        "date": 1680059071426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112174.84615384616,
            "unit": "ns",
            "range": "± 3647.7712845146357"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4440035.477399553,
            "unit": "ns",
            "range": "± 30340.50055524721"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6073162.785714285,
            "unit": "ns",
            "range": "± 63192.03946722618"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25391719.6,
            "unit": "ns",
            "range": "± 339481.72245914594"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6198754.5121951215,
            "unit": "ns",
            "range": "± 201895.6854064893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28599871.733333334,
            "unit": "ns",
            "range": "± 531539.5121962064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5906923.770089285,
            "unit": "ns",
            "range": "± 19132.747795412433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831842.5884915865,
            "unit": "ns",
            "range": "± 1897.3687902628926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333638.3157087055,
            "unit": "ns",
            "range": "± 635.6025922934344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542084.4734933036,
            "unit": "ns",
            "range": "± 1450.032277760283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792666.7473493303,
            "unit": "ns",
            "range": "± 322.6883925142371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737149.6923177083,
            "unit": "ns",
            "range": "± 1254.4732398128444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87292.62886597938,
            "unit": "ns",
            "range": "± 9046.077283275408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197897.98591549296,
            "unit": "ns",
            "range": "± 8843.11222605797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170825.875,
            "unit": "ns",
            "range": "± 3239.4454437964123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4055884.6666666665,
            "unit": "ns",
            "range": "± 28438.094839409303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9589741.916666666,
            "unit": "ns",
            "range": "± 34914.94913086092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17381.494845360823,
            "unit": "ns",
            "range": "± 1830.8450583206984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50444.71111111111,
            "unit": "ns",
            "range": "± 3006.8948978708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46870.010416666664,
            "unit": "ns",
            "range": "± 3276.2486265618254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98137.1530612245,
            "unit": "ns",
            "range": "± 13409.791878080887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7230.65306122449,
            "unit": "ns",
            "range": "± 929.4756431322444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17553.827956989247,
            "unit": "ns",
            "range": "± 2278.713269749323"
          }
        ]
      }
    ]
  }
}