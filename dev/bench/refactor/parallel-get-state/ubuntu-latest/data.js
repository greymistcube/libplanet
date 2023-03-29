window.BENCHMARK_DATA = {
  "lastUpdate": 1680060623517,
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
          "id": "8e3f12002927a9d888c0466473dcbbb5903b6811",
          "message": "[skip changelog] Parallel get states",
          "timestamp": "2023-03-29T12:16:03+09:00",
          "tree_id": "463e60baa8a77caf695b11642322bf26c5c77d20",
          "url": "https://github.com/greymistcube/libplanet/commit/8e3f12002927a9d888c0466473dcbbb5903b6811"
        },
        "date": 1680060405067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114713.23076923077,
            "unit": "ns",
            "range": "± 1440.9911030170724"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5115229.858333333,
            "unit": "ns",
            "range": "± 80737.06360905815"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5797575.833333333,
            "unit": "ns",
            "range": "± 244098.5814910706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27482360.433333334,
            "unit": "ns",
            "range": "± 801687.174549795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6362550.666666667,
            "unit": "ns",
            "range": "± 230001.36658487614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30639768.476190478,
            "unit": "ns",
            "range": "± 621867.0698284819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6080193.345424107,
            "unit": "ns",
            "range": "± 22697.165421431586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857114.703125,
            "unit": "ns",
            "range": "± 4355.221404431113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365771.0768229167,
            "unit": "ns",
            "range": "± 2970.525487238984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607573.1559709823,
            "unit": "ns",
            "range": "± 1370.8480327676814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839404.6610630581,
            "unit": "ns",
            "range": "± 1350.6008057160302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757714.259375,
            "unit": "ns",
            "range": "± 608.8524269688618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91304.32608695653,
            "unit": "ns",
            "range": "± 6426.231774187399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197699.57746478874,
            "unit": "ns",
            "range": "± 9336.146965519052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188831.9120879121,
            "unit": "ns",
            "range": "± 10603.363303581611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3935699.533333333,
            "unit": "ns",
            "range": "± 56686.65187913877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9781335.733333332,
            "unit": "ns",
            "range": "± 150173.00209257068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20431.771739130436,
            "unit": "ns",
            "range": "± 2171.0873717784466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53613.382978723406,
            "unit": "ns",
            "range": "± 5089.526270509053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41609.67441860465,
            "unit": "ns",
            "range": "± 1356.5624574624928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102256.96590909091,
            "unit": "ns",
            "range": "± 10122.366149773916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6753.778947368421,
            "unit": "ns",
            "range": "± 673.0120636734114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18906.67021276596,
            "unit": "ns",
            "range": "± 2221.9512029150055"
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
          "id": "bcf3a522c5c9123b8abe8dff392a629c578065ff",
          "message": "Cleanup",
          "timestamp": "2023-03-29T12:20:05+09:00",
          "tree_id": "53a12b681c5c39d08102169a09d791e726fae45a",
          "url": "https://github.com/greymistcube/libplanet/commit/bcf3a522c5c9123b8abe8dff392a629c578065ff"
        },
        "date": 1680060615542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104771.4,
            "unit": "ns",
            "range": "± 2740.451346645901"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4422011.839583334,
            "unit": "ns",
            "range": "± 35266.88462278411"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5998270.357142857,
            "unit": "ns",
            "range": "± 64931.497185178094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25326422.6,
            "unit": "ns",
            "range": "± 433497.9958810469"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6756238.066666666,
            "unit": "ns",
            "range": "± 78240.50022067185"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28180911.666666668,
            "unit": "ns",
            "range": "± 454413.267337857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6391290.805729167,
            "unit": "ns",
            "range": "± 36993.765955110866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919875.7133091518,
            "unit": "ns",
            "range": "± 7826.2558143515735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362820.6734375,
            "unit": "ns",
            "range": "± 885.7596369250056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609646.459309896,
            "unit": "ns",
            "range": "± 1853.6976481762633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834075.8430739183,
            "unit": "ns",
            "range": "± 568.6121929268845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733214.5682291667,
            "unit": "ns",
            "range": "± 455.4031529512762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88132.80208333333,
            "unit": "ns",
            "range": "± 7488.856955320936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193684.22916666666,
            "unit": "ns",
            "range": "± 7650.637487663485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176792.6875,
            "unit": "ns",
            "range": "± 3336.9723147138434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3752053.923076923,
            "unit": "ns",
            "range": "± 23161.323862787358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9390029.133333333,
            "unit": "ns",
            "range": "± 47858.50344186745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16241.725274725275,
            "unit": "ns",
            "range": "± 1422.7757382894893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48564.53191489362,
            "unit": "ns",
            "range": "± 3701.825448276583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39024.34426229508,
            "unit": "ns",
            "range": "± 1641.4041944348128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84655.94680851063,
            "unit": "ns",
            "range": "± 12143.802843086836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4983.322916666667,
            "unit": "ns",
            "range": "± 465.79983265441103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14651.537634408602,
            "unit": "ns",
            "range": "± 1022.8295531338096"
          }
        ]
      }
    ]
  }
}