window.BENCHMARK_DATA = {
  "lastUpdate": 1679986831419,
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
        "date": 1679986381015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89415,
            "unit": "ns",
            "range": "± 3177.7713525725494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4880506.4453125,
            "unit": "ns",
            "range": "± 4148.112924473504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505917.0340401786,
            "unit": "ns",
            "range": "± 937.7965719889692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157038.4635416667,
            "unit": "ns",
            "range": "± 1367.8818797618858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571079.6037946427,
            "unit": "ns",
            "range": "± 12396.774666870962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792059.7795758928,
            "unit": "ns",
            "range": "± 1082.3626805520448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716062.0963541666,
            "unit": "ns",
            "range": "± 577.2959792729662"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3938000.7552083335,
            "unit": "ns",
            "range": "± 8719.479546753644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5521786.666666667,
            "unit": "ns",
            "range": "± 71478.76674396457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23433480,
            "unit": "ns",
            "range": "± 245026.29363280296"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5670365,
            "unit": "ns",
            "range": "± 199039.6140831241"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26241633.333333332,
            "unit": "ns",
            "range": "± 363870.7495539486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86218.27956989247,
            "unit": "ns",
            "range": "± 7067.71511932588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178203.33333333334,
            "unit": "ns",
            "range": "± 10155.691933673716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147806.25,
            "unit": "ns",
            "range": "± 2721.878946610227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3364993.3333333335,
            "unit": "ns",
            "range": "± 22069.321520630227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8396453.333333334,
            "unit": "ns",
            "range": "± 43776.50815981862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16065.625,
            "unit": "ns",
            "range": "± 2104.5728720299066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46319.10112359551,
            "unit": "ns",
            "range": "± 3440.727869760805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41012.903225806454,
            "unit": "ns",
            "range": "± 2700.6128856102764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95419.58762886598,
            "unit": "ns",
            "range": "± 15743.905164481226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5635.714285714285,
            "unit": "ns",
            "range": "± 775.2950884836071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15661.052631578947,
            "unit": "ns",
            "range": "± 1829.3293002326864"
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
        "date": 1679986807226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 145716.30434782608,
            "unit": "ns",
            "range": "± 13070.235266755244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6315895.424107143,
            "unit": "ns",
            "range": "± 109634.65677770272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946859.8958333333,
            "unit": "ns",
            "range": "± 35997.116191244066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522345.2706473214,
            "unit": "ns",
            "range": "± 18348.665432230653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3362421.9010416665,
            "unit": "ns",
            "range": "± 45371.99200888326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1086158.9693509615,
            "unit": "ns",
            "range": "± 9423.358191226374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993658.4735576923,
            "unit": "ns",
            "range": "± 12095.492773410926"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6266325.7265625,
            "unit": "ns",
            "range": "± 377440.37387492857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7760895,
            "unit": "ns",
            "range": "± 739663.740742161"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34215283.333333336,
            "unit": "ns",
            "range": "± 952102.1461005092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8546990,
            "unit": "ns",
            "range": "± 332883.9120137094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38160002.631578945,
            "unit": "ns",
            "range": "± 1315449.345997321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139276.28865979382,
            "unit": "ns",
            "range": "± 17210.133722581613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271235.71428571426,
            "unit": "ns",
            "range": "± 29786.32236446789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251713.04347826086,
            "unit": "ns",
            "range": "± 23363.429285917955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4814545,
            "unit": "ns",
            "range": "± 108943.85069962947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12272372.222222222,
            "unit": "ns",
            "range": "± 252115.38162832268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27622.340425531915,
            "unit": "ns",
            "range": "± 5500.618816709199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68992.63157894737,
            "unit": "ns",
            "range": "± 9341.866892847116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77962.1052631579,
            "unit": "ns",
            "range": "± 9800.67495447481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149841.48936170212,
            "unit": "ns",
            "range": "± 17717.5838153111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11239.772727272728,
            "unit": "ns",
            "range": "± 1076.3432957389255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30266.666666666668,
            "unit": "ns",
            "range": "± 10060.460086042645"
          }
        ]
      }
    ]
  }
}