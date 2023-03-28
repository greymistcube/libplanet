window.BENCHMARK_DATA = {
  "lastUpdate": 1679986404190,
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
      }
    ]
  }
}