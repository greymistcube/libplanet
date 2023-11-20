window.BENCHMARK_DATA = {
  "lastUpdate": 1700474414560,
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
          "id": "585f4ed3ed66691c663e6e789ea87a50001ec8ea",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T18:48:09+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/greymistcube/libplanet/commit/585f4ed3ed66691c663e6e789ea87a50001ec8ea"
        },
        "date": 1700474394172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937952.7472527473,
            "unit": "ns",
            "range": "± 90378.9114299217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1680509.4594594594,
            "unit": "ns",
            "range": "± 83623.10614833435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1300282.6530612244,
            "unit": "ns",
            "range": "± 108800.37525093547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5029275.806451613,
            "unit": "ns",
            "range": "± 228175.556287355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33620.25316455696,
            "unit": "ns",
            "range": "± 1755.7509713930247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5119786.666666667,
            "unit": "ns",
            "range": "± 21572.7959200824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12988128.57142857,
            "unit": "ns",
            "range": "± 115363.6353087417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32217008.333333332,
            "unit": "ns",
            "range": "± 303889.6942771814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64265661.538461536,
            "unit": "ns",
            "range": "± 636809.5797783163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128019333.33333333,
            "unit": "ns",
            "range": "± 662317.1194123451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3131558.1510416665,
            "unit": "ns",
            "range": "± 12195.379663280077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1006622.890625,
            "unit": "ns",
            "range": "± 2756.428464419907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 675045.5208333334,
            "unit": "ns",
            "range": "± 1304.5973543123594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920989.8158482143,
            "unit": "ns",
            "range": "± 4432.461209721162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623086.9838169643,
            "unit": "ns",
            "range": "± 1448.5543754707926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590013.28125,
            "unit": "ns",
            "range": "± 1014.4576820620775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2127196.3855421687,
            "unit": "ns",
            "range": "± 113000.2454624823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211671.4285714286,
            "unit": "ns",
            "range": "± 21024.095281785194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727809.375,
            "unit": "ns",
            "range": "± 80704.00861201622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598197.222222222,
            "unit": "ns",
            "range": "± 85785.01196466535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5572388.888888889,
            "unit": "ns",
            "range": "± 115131.85734262867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168947.14285714287,
            "unit": "ns",
            "range": "± 7979.352366088027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162755.29411764705,
            "unit": "ns",
            "range": "± 8779.175927841337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143038.88888888888,
            "unit": "ns",
            "range": "± 2935.009547812687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2688780,
            "unit": "ns",
            "range": "± 41171.751758422215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2446406.6666666665,
            "unit": "ns",
            "range": "± 34307.15182970843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10390.322580645161,
            "unit": "ns",
            "range": "± 1445.9887933392963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51269.47368421053,
            "unit": "ns",
            "range": "± 4328.826524792478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43053.57142857143,
            "unit": "ns",
            "range": "± 1843.2150060265783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45238.20224719101,
            "unit": "ns",
            "range": "± 7299.571992713893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2169.7916666666665,
            "unit": "ns",
            "range": "± 389.0933568578074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9398.91304347826,
            "unit": "ns",
            "range": "± 1094.9930568516281"
          }
        ]
      }
    ]
  }
}