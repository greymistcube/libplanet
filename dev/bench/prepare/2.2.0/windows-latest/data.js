window.BENCHMARK_DATA = {
  "lastUpdate": 1687252883033,
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
          "id": "a773290c3c3a18d5b2b87a7a12c0ea77f49f885b",
          "message": "Prepare 2.2.0",
          "timestamp": "2023-06-20T18:01:12+09:00",
          "tree_id": "3d26d1121715b7705e92c24024b98f0ed814593b",
          "url": "https://github.com/greymistcube/libplanet/commit/a773290c3c3a18d5b2b87a7a12c0ea77f49f885b"
        },
        "date": 1687252861793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704435.7142857143,
            "unit": "ns",
            "range": "± 166859.3933974005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3266856.25,
            "unit": "ns",
            "range": "± 317579.53560361936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2604014.1414141413,
            "unit": "ns",
            "range": "± 282415.3053500093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6637418.556701031,
            "unit": "ns",
            "range": "± 596696.6268077343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58453.1914893617,
            "unit": "ns",
            "range": "± 14822.26385657418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9213376.288659794,
            "unit": "ns",
            "range": "± 609211.3321700573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25290938.383838385,
            "unit": "ns",
            "range": "± 1545918.076459387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74690594.44444445,
            "unit": "ns",
            "range": "± 2427958.367252435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118382949.18032786,
            "unit": "ns",
            "range": "± 5325451.54084368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230700660.49382716,
            "unit": "ns",
            "range": "± 12086261.72424376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5335190.78125,
            "unit": "ns",
            "range": "± 97424.61743091633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747594.4661458333,
            "unit": "ns",
            "range": "± 44146.026389146304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404558.3463541667,
            "unit": "ns",
            "range": "± 24525.8589299561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3044208.8802083335,
            "unit": "ns",
            "range": "± 48733.78672823941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008459.3889508928,
            "unit": "ns",
            "range": "± 11197.575180240352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853600.0402113971,
            "unit": "ns",
            "range": "± 17387.17332906266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3205825,
            "unit": "ns",
            "range": "± 303031.65580686886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3600251.5463917525,
            "unit": "ns",
            "range": "± 387638.6924146747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4975074.489795919,
            "unit": "ns",
            "range": "± 459084.4479760214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4870653.608247423,
            "unit": "ns",
            "range": "± 516834.49943338084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8309145.833333333,
            "unit": "ns",
            "range": "± 604906.6494168931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315753.125,
            "unit": "ns",
            "range": "± 47004.16096502857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321415.625,
            "unit": "ns",
            "range": "± 49888.87087818284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272817.8947368421,
            "unit": "ns",
            "range": "± 30787.15184821376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4633200,
            "unit": "ns",
            "range": "± 348130.87194329663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4139079.1208791207,
            "unit": "ns",
            "range": "± 272538.5830041047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18153.488372093023,
            "unit": "ns",
            "range": "± 2115.1942018708132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102425,
            "unit": "ns",
            "range": "± 17306.17778348773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96984.21052631579,
            "unit": "ns",
            "range": "± 21526.45732724245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116708.42105263157,
            "unit": "ns",
            "range": "± 21861.496625676056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5594.186046511628,
            "unit": "ns",
            "range": "± 1170.9578433324716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27693.939393939392,
            "unit": "ns",
            "range": "± 11701.81233287564"
          }
        ]
      }
    ]
  }
}