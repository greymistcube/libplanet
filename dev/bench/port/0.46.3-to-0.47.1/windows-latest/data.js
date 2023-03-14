window.BENCHMARK_DATA = {
  "lastUpdate": 1678782186670,
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
          "id": "15e8aa9300901d906c32851c3067495627bb9b0a",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T16:58:32+09:00",
          "tree_id": "e22bb2dfdbcce2ddc09d8af07e56b858f778b345",
          "url": "https://github.com/greymistcube/libplanet/commit/15e8aa9300901d906c32851c3067495627bb9b0a"
        },
        "date": 1678781618474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86565.21739130435,
            "unit": "ns",
            "range": "± 4915.783835915942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844361.171875,
            "unit": "ns",
            "range": "± 23869.058434019684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524933.1770833333,
            "unit": "ns",
            "range": "± 6851.91147574644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1044417.0703125,
            "unit": "ns",
            "range": "± 4910.537681562748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554711.4583333335,
            "unit": "ns",
            "range": "± 9616.12456077358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813098.02734375,
            "unit": "ns",
            "range": "± 2734.853441929848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741425.56640625,
            "unit": "ns",
            "range": "± 3856.348425387882"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3951776.796875,
            "unit": "ns",
            "range": "± 55127.957013074025"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5309442.857142857,
            "unit": "ns",
            "range": "± 93459.73805528581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22461690,
            "unit": "ns",
            "range": "± 280203.54795347305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5447182.835820896,
            "unit": "ns",
            "range": "± 256433.20731637615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25730726.666666668,
            "unit": "ns",
            "range": "± 364972.66525173135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 72664.64646464646,
            "unit": "ns",
            "range": "± 12276.69364126565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164591.66666666666,
            "unit": "ns",
            "range": "± 18531.45074371315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140346,
            "unit": "ns",
            "range": "± 16147.348157677548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3336835.294117647,
            "unit": "ns",
            "range": "± 66901.49420207735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8570166.666666666,
            "unit": "ns",
            "range": "± 180421.86511552503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14467,
            "unit": "ns",
            "range": "± 3356.617314794732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40809.09090909091,
            "unit": "ns",
            "range": "± 8200.623307682676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25571.764705882353,
            "unit": "ns",
            "range": "± 1736.2803540290129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83625.51020408163,
            "unit": "ns",
            "range": "± 17001.717992175432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3888.5416666666665,
            "unit": "ns",
            "range": "± 733.6813867020087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16570.70707070707,
            "unit": "ns",
            "range": "± 5478.198954096482"
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
          "id": "65fbbca087136714fdb6af354a7ae63f33e2338c",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:01:42+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/greymistcube/libplanet/commit/65fbbca087136714fdb6af354a7ae63f33e2338c"
        },
        "date": 1678782162362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 113465.93406593407,
            "unit": "ns",
            "range": "± 9378.133192346022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5264011.363636363,
            "unit": "ns",
            "range": "± 129044.39532909192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1660117.91015625,
            "unit": "ns",
            "range": "± 36755.72927956726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280692.0166015625,
            "unit": "ns",
            "range": "± 32037.701955376593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2921952.0399305555,
            "unit": "ns",
            "range": "± 79228.46316883537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907385.2506510416,
            "unit": "ns",
            "range": "± 13675.114204817859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831198.7484580592,
            "unit": "ns",
            "range": "± 17498.748843382655"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5081651.546223958,
            "unit": "ns",
            "range": "± 373668.2652146392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5615250,
            "unit": "ns",
            "range": "± 450011.78140605974"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29477856.565656565,
            "unit": "ns",
            "range": "± 2013132.607794031"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6483026.804123712,
            "unit": "ns",
            "range": "± 670233.3509239313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33691858,
            "unit": "ns",
            "range": "± 3117998.7027805857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101166.32653061225,
            "unit": "ns",
            "range": "± 13402.684327822082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205795.74468085106,
            "unit": "ns",
            "range": "± 24200.49281864512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188229.8969072165,
            "unit": "ns",
            "range": "± 19203.41855931545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3819484.6938775512,
            "unit": "ns",
            "range": "± 261970.3880141743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9478769.072164949,
            "unit": "ns",
            "range": "± 630906.4963673342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21414.21052631579,
            "unit": "ns",
            "range": "± 2752.0945906814745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54820.833333333336,
            "unit": "ns",
            "range": "± 6945.455411792157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42591.86046511628,
            "unit": "ns",
            "range": "± 3859.456380990923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105126.80412371134,
            "unit": "ns",
            "range": "± 20313.883365529007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5493.75,
            "unit": "ns",
            "range": "± 762.6563687809244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24097.872340425532,
            "unit": "ns",
            "range": "± 3003.6171284795173"
          }
        ]
      }
    ]
  }
}