window.BENCHMARK_DATA = {
  "lastUpdate": 1678781847925,
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
          "id": "65fbbca087136714fdb6af354a7ae63f33e2338c",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:01:42+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/greymistcube/libplanet/commit/65fbbca087136714fdb6af354a7ae63f33e2338c"
        },
        "date": 1678781723219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128668.13265306123,
            "unit": "ns",
            "range": "± 15229.07702670502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129032.02688172043,
            "unit": "ns",
            "range": "± 13345.021665474616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248672.52222222224,
            "unit": "ns",
            "range": "± 16012.04063115186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247450.98979591837,
            "unit": "ns",
            "range": "± 16374.426557202372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3682539.1,
            "unit": "ns",
            "range": "± 54188.6521789519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10308154.8,
            "unit": "ns",
            "range": "± 158712.93961615104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26281.371134020617,
            "unit": "ns",
            "range": "± 4581.225225761998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69162.21649484536,
            "unit": "ns",
            "range": "± 11886.376220301898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59705.645833333336,
            "unit": "ns",
            "range": "± 9891.827178326415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119227.3125,
            "unit": "ns",
            "range": "± 18908.733313534474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5793.6292134831465,
            "unit": "ns",
            "range": "± 1078.9488822462863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22519.380434782608,
            "unit": "ns",
            "range": "± 3505.012570222137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5049925.7019314235,
            "unit": "ns",
            "range": "± 247384.2649711994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6034248.345679012,
            "unit": "ns",
            "range": "± 315322.8686150975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27044948.8,
            "unit": "ns",
            "range": "± 460896.23368721857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7665024.285714285,
            "unit": "ns",
            "range": "± 213231.3477105815"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31001656.98148148,
            "unit": "ns",
            "range": "± 1304279.6701591394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6406530.898958334,
            "unit": "ns",
            "range": "± 104063.41248467396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037419.3912760417,
            "unit": "ns",
            "range": "± 11164.46325432137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236833.3090122768,
            "unit": "ns",
            "range": "± 16403.335291472766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2505618.1356770834,
            "unit": "ns",
            "range": "± 28388.115289619804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782205.8507421875,
            "unit": "ns",
            "range": "± 20576.859965532065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727093.1643415178,
            "unit": "ns",
            "range": "± 2723.0797742704312"
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
          "id": "15e8aa9300901d906c32851c3067495627bb9b0a",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T16:58:32+09:00",
          "tree_id": "e22bb2dfdbcce2ddc09d8af07e56b858f778b345",
          "url": "https://github.com/greymistcube/libplanet/commit/15e8aa9300901d906c32851c3067495627bb9b0a"
        },
        "date": 1678781829564,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 142739.77586206896,
            "unit": "ns",
            "range": "± 11839.243502593941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130323.02173913043,
            "unit": "ns",
            "range": "± 13860.829045720426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275863.48484848486,
            "unit": "ns",
            "range": "± 34514.42143580329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244784.6875,
            "unit": "ns",
            "range": "± 17401.328065053873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3675902.6333333333,
            "unit": "ns",
            "range": "± 46085.803652173265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10222749.472222222,
            "unit": "ns",
            "range": "± 334373.89769465185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30406.93157894737,
            "unit": "ns",
            "range": "± 8164.590182224273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77478.81720430107,
            "unit": "ns",
            "range": "± 13809.019870412234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69764.50561797753,
            "unit": "ns",
            "range": "± 13163.059601437302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147526.0806451613,
            "unit": "ns",
            "range": "± 26714.847036856954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9996.58762886598,
            "unit": "ns",
            "range": "± 2566.5613455903786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31102.428571428572,
            "unit": "ns",
            "range": "± 7398.517052928528"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5571119.723819814,
            "unit": "ns",
            "range": "± 449567.8084380127"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6972249.943298969,
            "unit": "ns",
            "range": "± 879877.6870585713"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29525526.53125,
            "unit": "ns",
            "range": "± 2005200.8472468571"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7565041.96,
            "unit": "ns",
            "range": "± 787211.7784472993"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37772629.53448276,
            "unit": "ns",
            "range": "± 7075878.424861493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7604396.662828947,
            "unit": "ns",
            "range": "± 255441.23078682623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115164.3033854165,
            "unit": "ns",
            "range": "± 46000.10900245042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366556.680438702,
            "unit": "ns",
            "range": "± 15830.495234901045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2905577.4967250633,
            "unit": "ns",
            "range": "± 235889.32719037437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932092.7811748798,
            "unit": "ns",
            "range": "± 13879.483474875495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783742.0231224798,
            "unit": "ns",
            "range": "± 22734.977619255187"
          }
        ]
      }
    ]
  }
}