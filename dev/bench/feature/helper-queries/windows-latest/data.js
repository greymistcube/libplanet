window.BENCHMARK_DATA = {
  "lastUpdate": 1702802231240,
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
          "id": "ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:23:08+09:00",
          "tree_id": "6d61ab432ba0e1be66424d63f8c2401df9e7828e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69"
        },
        "date": 1702802208999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 930185,
            "unit": "ns",
            "range": "± 118981.96228204024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748800,
            "unit": "ns",
            "range": "± 85184.30684893393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1308761,
            "unit": "ns",
            "range": "± 118922.56702781373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5138581.481481481,
            "unit": "ns",
            "range": "± 141433.66489966796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34104.166666666664,
            "unit": "ns",
            "range": "± 1689.1899467071007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5054464.285714285,
            "unit": "ns",
            "range": "± 22499.866910473294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12945061.538461538,
            "unit": "ns",
            "range": "± 130778.14253193293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32467716.666666668,
            "unit": "ns",
            "range": "± 231389.7001453032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65299971.428571425,
            "unit": "ns",
            "range": "± 369112.88960794266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130481378.57142857,
            "unit": "ns",
            "range": "± 548899.4179664941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329165.206473214,
            "unit": "ns",
            "range": "± 11137.813191853858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1033900.1171875,
            "unit": "ns",
            "range": "± 3814.1262342158097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731590.5691964285,
            "unit": "ns",
            "range": "± 2495.3217696811257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926532.338169643,
            "unit": "ns",
            "range": "± 2987.886535286864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604318.8411458334,
            "unit": "ns",
            "range": "± 819.8810319518615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576813.3858816965,
            "unit": "ns",
            "range": "± 1269.2222369530007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2062648.2142857143,
            "unit": "ns",
            "range": "± 72038.22467922891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179800,
            "unit": "ns",
            "range": "± 38524.80507492032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774527.777777778,
            "unit": "ns",
            "range": "± 56650.879288701304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2556222.807017544,
            "unit": "ns",
            "range": "± 106168.9506291469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6229605.263157895,
            "unit": "ns",
            "range": "± 314348.1491996782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169488.46153846153,
            "unit": "ns",
            "range": "± 8678.413745314585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159836.79245283018,
            "unit": "ns",
            "range": "± 6630.437905710331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136771.42857142858,
            "unit": "ns",
            "range": "± 3830.1297862989163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2700985.714285714,
            "unit": "ns",
            "range": "± 33803.04053558718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2700246.6666666665,
            "unit": "ns",
            "range": "± 45329.09609049084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9377.906976744185,
            "unit": "ns",
            "range": "± 1100.0963768250913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55542.10526315789,
            "unit": "ns",
            "range": "± 5908.766997911689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45454.651162790695,
            "unit": "ns",
            "range": "± 2466.226313585629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60583.67346938775,
            "unit": "ns",
            "range": "± 12029.428638834626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2398.9473684210525,
            "unit": "ns",
            "range": "± 454.64382525087245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10944.21052631579,
            "unit": "ns",
            "range": "± 1346.2094767186745"
          }
        ]
      }
    ]
  }
}