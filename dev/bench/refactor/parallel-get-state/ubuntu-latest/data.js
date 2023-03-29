window.BENCHMARK_DATA = {
  "lastUpdate": 1680060412356,
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
      }
    ]
  }
}