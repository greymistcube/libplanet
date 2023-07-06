window.BENCHMARK_DATA = {
  "lastUpdate": 1688657976200,
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
          "id": "1e826afd74a68a4c93f625498c1b0cfbf58b3636",
          "message": "Use mock state as intended",
          "timestamp": "2023-07-07T00:21:54+09:00",
          "tree_id": "6a013380116525dd68f340aaf5d5418577dd03f1",
          "url": "https://github.com/greymistcube/libplanet/commit/1e826afd74a68a4c93f625498c1b0cfbf58b3636"
        },
        "date": 1688657965759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341288.4130434783,
            "unit": "ns",
            "range": "± 12863.798745274942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335125.0512820513,
            "unit": "ns",
            "range": "± 11436.418858763893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296765.56097560975,
            "unit": "ns",
            "range": "± 10565.353624107383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5452482.066666666,
            "unit": "ns",
            "range": "± 58662.51167783716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4983529.642857143,
            "unit": "ns",
            "range": "± 46181.9968296124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23027.956989247312,
            "unit": "ns",
            "range": "± 1856.4346257999762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109264.4,
            "unit": "ns",
            "range": "± 7387.301300060281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94666.77586206897,
            "unit": "ns",
            "range": "± 4073.186299826138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115853.01041666667,
            "unit": "ns",
            "range": "± 13038.78681997418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6988.063157894737,
            "unit": "ns",
            "range": "± 883.8475464300091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22691.604166666668,
            "unit": "ns",
            "range": "± 1921.2436623415883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1839717.7083333333,
            "unit": "ns",
            "range": "± 121423.60572136374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3395403.1818181816,
            "unit": "ns",
            "range": "± 106911.66392940204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317404.430232558,
            "unit": "ns",
            "range": "± 116662.67511122329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6182605.260869565,
            "unit": "ns",
            "range": "± 237388.50851682253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7234896.26953125,
            "unit": "ns",
            "range": "± 36948.457958950334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2276398.3825334823,
            "unit": "ns",
            "range": "± 5743.16661208371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1669983.1740885417,
            "unit": "ns",
            "range": "± 3591.612821558806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3200817.502213542,
            "unit": "ns",
            "range": "± 5201.311209412849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999276.278125,
            "unit": "ns",
            "range": "± 1511.1521979005495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915941.5026041666,
            "unit": "ns",
            "range": "± 836.8114171731768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4341020.333333333,
            "unit": "ns",
            "range": "± 71835.5760052079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4625138.8,
            "unit": "ns",
            "range": "± 77657.008784232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5527924.285714285,
            "unit": "ns",
            "range": "± 129627.57832928257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4987274.176470588,
            "unit": "ns",
            "range": "± 99169.01253745756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8049136.892857143,
            "unit": "ns",
            "range": "± 227258.4569325385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10086517.466666667,
            "unit": "ns",
            "range": "± 140756.19136490012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27391038.8,
            "unit": "ns",
            "range": "± 275262.75269333896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69041356.86666666,
            "unit": "ns",
            "range": "± 557360.824486496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137612194.42857143,
            "unit": "ns",
            "range": "± 748205.5522727709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271382481.06666666,
            "unit": "ns",
            "range": "± 1070602.2880540832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58786.645833333336,
            "unit": "ns",
            "range": "± 4912.321468520532"
          }
        ]
      }
    ]
  }
}