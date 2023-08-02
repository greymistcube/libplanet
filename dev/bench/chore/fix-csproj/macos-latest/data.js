window.BENCHMARK_DATA = {
  "lastUpdate": 1690940264156,
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
          "id": "85126addabf82295fa629727043a6fd2869ca007",
          "message": "Fix csproj",
          "timestamp": "2023-08-02T10:14:40+09:00",
          "tree_id": "e5b156d072a466456a1865a22fa6abd8553e0b40",
          "url": "https://github.com/greymistcube/libplanet/commit/85126addabf82295fa629727043a6fd2869ca007"
        },
        "date": 1690940231926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9247241.1,
            "unit": "ns",
            "range": "± 196387.02966146372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23813695.514285713,
            "unit": "ns",
            "range": "± 1146957.3791025716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60054350.84210526,
            "unit": "ns",
            "range": "± 2045918.3848929126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120595448.73333333,
            "unit": "ns",
            "range": "± 2102801.230543828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249413041.58333334,
            "unit": "ns",
            "range": "± 1041376.849933295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79990.54736842106,
            "unit": "ns",
            "range": "± 9765.305572855515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376842.33544303797,
            "unit": "ns",
            "range": "± 19575.403979477753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362663.44444444444,
            "unit": "ns",
            "range": "± 26753.05339261931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315228.6024096386,
            "unit": "ns",
            "range": "± 16593.52740175147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4939705.214285715,
            "unit": "ns",
            "range": "± 82817.46306851228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4434680.666666667,
            "unit": "ns",
            "range": "± 91554.57720430379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21395.639784946237,
            "unit": "ns",
            "range": "± 2034.5257571077186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97567.13978494624,
            "unit": "ns",
            "range": "± 7705.912868913795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104352.38043478261,
            "unit": "ns",
            "range": "± 11927.583636392137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121555.44897959183,
            "unit": "ns",
            "range": "± 18032.34276659606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6558.542105263158,
            "unit": "ns",
            "range": "± 902.5416819017219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20176.41304347826,
            "unit": "ns",
            "range": "± 1255.2778174367922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800548.6578947369,
            "unit": "ns",
            "range": "± 180605.80992241116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3424745.7083333335,
            "unit": "ns",
            "range": "± 150999.73969713945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2411386.3191489363,
            "unit": "ns",
            "range": "± 159168.806611852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6717861.3977272725,
            "unit": "ns",
            "range": "± 356361.7678093054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3994907.0816326533,
            "unit": "ns",
            "range": "± 154768.63643675743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4229441.933962264,
            "unit": "ns",
            "range": "± 163174.3510483742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5365648.4375,
            "unit": "ns",
            "range": "± 143149.5635297927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4791521.204545454,
            "unit": "ns",
            "range": "± 172510.24458242307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9661611.153846154,
            "unit": "ns",
            "range": "± 1446786.596330425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7019890.428125,
            "unit": "ns",
            "range": "± 86413.20924870498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2331703.4485294116,
            "unit": "ns",
            "range": "± 46958.13402028031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482834.5983072917,
            "unit": "ns",
            "range": "± 17530.974207567997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124669.501822917,
            "unit": "ns",
            "range": "± 23777.799313888543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952241.61015625,
            "unit": "ns",
            "range": "± 7824.0198708562575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860280.6141276042,
            "unit": "ns",
            "range": "± 5835.685160130037"
          }
        ]
      }
    ]
  }
}