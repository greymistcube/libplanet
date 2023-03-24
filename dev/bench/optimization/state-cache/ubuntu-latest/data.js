window.BENCHMARK_DATA = {
  "lastUpdate": 1679662861895,
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
          "id": "2efe9205751fc8816dd122f4f4386a14477dc614",
          "message": "Refactored to more granular caching scheme",
          "timestamp": "2023-03-24T21:42:31+09:00",
          "tree_id": "3ef82fcb07ac2f63eacca5bb11dd399b5a8d8a7c",
          "url": "https://github.com/greymistcube/libplanet/commit/2efe9205751fc8816dd122f4f4386a14477dc614"
        },
        "date": 1679662853081,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132576.23684210525,
            "unit": "ns",
            "range": "± 12476.2277980289"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6132994.451171875,
            "unit": "ns",
            "range": "± 320326.69325744425"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6703490.355555556,
            "unit": "ns",
            "range": "± 397286.62709373015"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34341158.31944445,
            "unit": "ns",
            "range": "± 1674172.702213547"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8078754.315217392,
            "unit": "ns",
            "range": "± 574846.5337154985"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38749628.510526314,
            "unit": "ns",
            "range": "± 2217764.3005625056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7524126.046354166,
            "unit": "ns",
            "range": "± 220911.72797264726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2232133.0061383927,
            "unit": "ns",
            "range": "± 35757.67158515311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1652805.6263427734,
            "unit": "ns",
            "range": "± 30460.571856023224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3170759.8846958703,
            "unit": "ns",
            "range": "± 136288.60647819468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031410.8260416667,
            "unit": "ns",
            "range": "± 17654.41229557884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949386.9961480035,
            "unit": "ns",
            "range": "± 20045.39587776223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116576.39795918367,
            "unit": "ns",
            "range": "± 16655.323941697512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244809.16666666666,
            "unit": "ns",
            "range": "± 19125.722702215004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218098.6,
            "unit": "ns",
            "range": "± 18565.15612726667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4456879.711538462,
            "unit": "ns",
            "range": "± 183667.22444974232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11862989.289156627,
            "unit": "ns",
            "range": "± 631685.695247452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27172.73469387755,
            "unit": "ns",
            "range": "± 6379.011760632604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67133.29787234042,
            "unit": "ns",
            "range": "± 7158.386072127561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64357.88421052632,
            "unit": "ns",
            "range": "± 7645.563424770921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134558,
            "unit": "ns",
            "range": "± 22151.944755411623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14342.02,
            "unit": "ns",
            "range": "± 6313.3089900333825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21604.75824175824,
            "unit": "ns",
            "range": "± 2858.602530921784"
          }
        ]
      }
    ]
  }
}