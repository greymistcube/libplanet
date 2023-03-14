window.BENCHMARK_DATA = {
  "lastUpdate": 1678785698977,
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
        "date": 1678785678240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103551.02040816327,
            "unit": "ns",
            "range": "± 6110.734933071441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4795336.71875,
            "unit": "ns",
            "range": "± 11762.038886896076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525110.2864583333,
            "unit": "ns",
            "range": "± 4178.849856393104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173494.0755208333,
            "unit": "ns",
            "range": "± 2125.3490240440124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669255.6119791665,
            "unit": "ns",
            "range": "± 8413.110482118282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828986.8424479166,
            "unit": "ns",
            "range": "± 1810.2367783629684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754681.8424479166,
            "unit": "ns",
            "range": "± 1323.6068333989183"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4659765.262276785,
            "unit": "ns",
            "range": "± 29382.43557016888"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5757540,
            "unit": "ns",
            "range": "± 103412.8259522414"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25299000,
            "unit": "ns",
            "range": "± 517991.00151166605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5956490,
            "unit": "ns",
            "range": "± 66170.80495635087"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28009600,
            "unit": "ns",
            "range": "± 578052.9438402273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93926.8817204301,
            "unit": "ns",
            "range": "± 6965.304384636789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180823.07692307694,
            "unit": "ns",
            "range": "± 6151.271222424018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164923.63636363635,
            "unit": "ns",
            "range": "± 6908.7964229283825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3546243.75,
            "unit": "ns",
            "range": "± 64842.01280805524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8810795.454545455,
            "unit": "ns",
            "range": "± 211132.8434834396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21779.787234042553,
            "unit": "ns",
            "range": "± 2214.5452596260147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52336.55913978495,
            "unit": "ns",
            "range": "± 4806.2184571529315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41604.0404040404,
            "unit": "ns",
            "range": "± 3229.137725048352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104638.65979381443,
            "unit": "ns",
            "range": "± 18694.355633723706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6574.736842105263,
            "unit": "ns",
            "range": "± 874.6997565186306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20177.894736842107,
            "unit": "ns",
            "range": "± 2243.8653459888033"
          }
        ]
      }
    ]
  }
}