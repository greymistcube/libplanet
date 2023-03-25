window.BENCHMARK_DATA = {
  "lastUpdate": 1679741082281,
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
        "date": 1679741067986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 161906.85714285713,
            "unit": "ns",
            "range": "± 21077.982680497797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 143985.56842105262,
            "unit": "ns",
            "range": "± 28698.146192502165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281097.3020833333,
            "unit": "ns",
            "range": "± 42635.62211667852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272345.6170212766,
            "unit": "ns",
            "range": "± 36620.588108552634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3945259.494845361,
            "unit": "ns",
            "range": "± 228822.89141195553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10384683.23076923,
            "unit": "ns",
            "range": "± 147098.8380648387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27875.393617021276,
            "unit": "ns",
            "range": "± 2735.9628820191947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70675.83333333333,
            "unit": "ns",
            "range": "± 9247.214080271786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65209.086956521736,
            "unit": "ns",
            "range": "± 2499.7017384398923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139480.32291666666,
            "unit": "ns",
            "range": "± 17376.131300084755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9737.265957446809,
            "unit": "ns",
            "range": "± 672.396007477479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26379.68947368421,
            "unit": "ns",
            "range": "± 4078.7563506506644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5889037.931265783,
            "unit": "ns",
            "range": "± 385988.0922981732"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7010821.15625,
            "unit": "ns",
            "range": "± 591997.618173921"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30666770.0625,
            "unit": "ns",
            "range": "± 1412508.985499598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7976574.288659794,
            "unit": "ns",
            "range": "± 606577.2430102155"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36297444.37755102,
            "unit": "ns",
            "range": "± 2142187.6065651597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6984643.253645834,
            "unit": "ns",
            "range": "± 77249.38685592308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008500.5465745192,
            "unit": "ns",
            "range": "± 10737.228802880587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310857.8528180805,
            "unit": "ns",
            "range": "± 4807.422082286595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664874.4708533655,
            "unit": "ns",
            "range": "± 32599.46442231064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866752.1545572917,
            "unit": "ns",
            "range": "± 3030.3937003244246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739837.1511230469,
            "unit": "ns",
            "range": "± 1238.309057101163"
          }
        ]
      }
    ]
  }
}