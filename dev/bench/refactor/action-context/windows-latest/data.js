window.BENCHMARK_DATA = {
  "lastUpdate": 1686576266178,
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
          "id": "d34f81fcdc5110778e15209b674451cf0f8e1951",
          "message": "Derive ActionContext.BlockAction instead of assigning",
          "timestamp": "2023-06-12T22:04:14+09:00",
          "tree_id": "86d1e01d5b015b0e21d3b4082135395949884e73",
          "url": "https://github.com/greymistcube/libplanet/commit/d34f81fcdc5110778e15209b674451cf0f8e1951"
        },
        "date": 1686576242371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703393.8775510204,
            "unit": "ns",
            "range": "± 142612.10805605195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3128571.875,
            "unit": "ns",
            "range": "± 94578.73059119548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668590.625,
            "unit": "ns",
            "range": "± 189727.06383984725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6655252.631578947,
            "unit": "ns",
            "range": "± 462379.4943278908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56452.12765957447,
            "unit": "ns",
            "range": "± 3535.7765560758417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9078194.444444444,
            "unit": "ns",
            "range": "± 189325.2926523778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24441206.666666668,
            "unit": "ns",
            "range": "± 213052.21179884748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65174310.71428572,
            "unit": "ns",
            "range": "± 1812045.7576062283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125508335.71428572,
            "unit": "ns",
            "range": "± 2042763.6369190346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257588104.76190478,
            "unit": "ns",
            "range": "± 6091159.043357527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6266199.278846154,
            "unit": "ns",
            "range": "± 219482.4855874223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901395.2669270833,
            "unit": "ns",
            "range": "± 34612.37050311288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1457650.8231026786,
            "unit": "ns",
            "range": "± 16758.703026818428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3318251.729910714,
            "unit": "ns",
            "range": "± 36872.26692950292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032528.6808894231,
            "unit": "ns",
            "range": "± 27579.110556912256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954687.7018229166,
            "unit": "ns",
            "range": "± 14938.729986133483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4042002.7027027025,
            "unit": "ns",
            "range": "± 134818.4550639334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4175042.3076923075,
            "unit": "ns",
            "range": "± 171068.25532191488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5179962.5,
            "unit": "ns",
            "range": "± 221832.50402253744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5211503.333333333,
            "unit": "ns",
            "range": "± 95053.89348504704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8278977.5,
            "unit": "ns",
            "range": "± 290040.429089481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321748.93617021275,
            "unit": "ns",
            "range": "± 12465.933968749732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311284.2105263158,
            "unit": "ns",
            "range": "± 13362.658384383863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284034.06593406596,
            "unit": "ns",
            "range": "± 16109.101773567638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5156636.111111111,
            "unit": "ns",
            "range": "± 150074.88635968717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4532841.666666667,
            "unit": "ns",
            "range": "± 48448.03135757161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24855.913978494624,
            "unit": "ns",
            "range": "± 2444.401872495396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104460,
            "unit": "ns",
            "range": "± 7949.9551718259745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99401.03092783505,
            "unit": "ns",
            "range": "± 7378.184268014964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115294.5054945055,
            "unit": "ns",
            "range": "± 13567.34120057232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6871.875,
            "unit": "ns",
            "range": "± 1342.4018635110333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23554.639175257733,
            "unit": "ns",
            "range": "± 2913.72544386037"
          }
        ]
      }
    ]
  }
}