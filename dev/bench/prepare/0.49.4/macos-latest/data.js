window.BENCHMARK_DATA = {
  "lastUpdate": 1678785956838,
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
          "id": "efd3ed8c3476d9e7fbd90b1c1ad042968eaf4423",
          "message": "Prepare 0.49.4",
          "timestamp": "2023-03-14T18:05:54+09:00",
          "tree_id": "9290aa301194d7219b456e1828960afa26f1f90a",
          "url": "https://github.com/greymistcube/libplanet/commit/efd3ed8c3476d9e7fbd90b1c1ad042968eaf4423"
        },
        "date": 1678785942610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138294.85555555555,
            "unit": "ns",
            "range": "± 8417.521268112489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125623.31868131868,
            "unit": "ns",
            "range": "± 23729.805032152715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241331.52173913043,
            "unit": "ns",
            "range": "± 38568.51001033233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232723.08421052631,
            "unit": "ns",
            "range": "± 18183.221658618426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3848587.067010309,
            "unit": "ns",
            "range": "± 237771.7243222262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11114416.342105264,
            "unit": "ns",
            "range": "± 559232.5260713424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21213.291666666668,
            "unit": "ns",
            "range": "± 4750.991643672467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66124.48969072165,
            "unit": "ns",
            "range": "± 11380.193396400431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60879.91764705882,
            "unit": "ns",
            "range": "± 3736.4920721235335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129666.2688172043,
            "unit": "ns",
            "range": "± 19235.093899105006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8040.3421052631575,
            "unit": "ns",
            "range": "± 1440.8901084368877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22339.239583333332,
            "unit": "ns",
            "range": "± 6105.1619293922795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5069226.395330256,
            "unit": "ns",
            "range": "± 277754.5939375019"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6132953.489583333,
            "unit": "ns",
            "range": "± 412098.69388247514"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30535442.85714286,
            "unit": "ns",
            "range": "± 1987530.8582910022"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7780105.706521739,
            "unit": "ns",
            "range": "± 501250.35505668365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34907978.79120879,
            "unit": "ns",
            "range": "± 2156031.4295941433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7743902.439397321,
            "unit": "ns",
            "range": "± 239161.74808195914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2372659.7739257812,
            "unit": "ns",
            "range": "± 83534.29276099897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1406800.2336774555,
            "unit": "ns",
            "range": "± 22675.32779271425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3399245.88109375,
            "unit": "ns",
            "range": "± 136177.436838844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924824.2435546875,
            "unit": "ns",
            "range": "± 16354.897227396581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803089.8290201823,
            "unit": "ns",
            "range": "± 26543.21700766838"
          }
        ]
      }
    ]
  }
}