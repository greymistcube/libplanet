window.BENCHMARK_DATA = {
  "lastUpdate": 1682073705997,
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
          "id": "fb1f05d14a652b8cf81d7e9cc57aa2bb7ee3e788",
          "message": "Simplify Json serialization",
          "timestamp": "2023-04-21T19:19:47+09:00",
          "tree_id": "eebad80cc7d31c5ff14e2488e3e233994bcd08dd",
          "url": "https://github.com/greymistcube/libplanet/commit/fb1f05d14a652b8cf81d7e9cc57aa2bb7ee3e788"
        },
        "date": 1682073682075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624516,
            "unit": "ns",
            "range": "± 146451.90110535861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023207.462686567,
            "unit": "ns",
            "range": "± 143435.97063058216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2546684.090909091,
            "unit": "ns",
            "range": "± 138678.57642795297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6464212.244897959,
            "unit": "ns",
            "range": "± 416033.3866621631"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55487.234042553195,
            "unit": "ns",
            "range": "± 3507.2653944042545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8749383.333333334,
            "unit": "ns",
            "range": "± 83802.00511089255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22913842.85714286,
            "unit": "ns",
            "range": "± 285556.28493894485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58123146.666666664,
            "unit": "ns",
            "range": "± 1035567.3799328329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118177426.1904762,
            "unit": "ns",
            "range": "± 4315688.321724929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232020600,
            "unit": "ns",
            "range": "± 2894913.8442645036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5810921.302083333,
            "unit": "ns",
            "range": "± 56008.765684817445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895189.5182291667,
            "unit": "ns",
            "range": "± 17871.531211814137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448549.9088541667,
            "unit": "ns",
            "range": "± 23230.331412105006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214891.484375,
            "unit": "ns",
            "range": "± 45894.02750926536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987528.2421875,
            "unit": "ns",
            "range": "± 13869.588233539753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926838.7630208334,
            "unit": "ns",
            "range": "± 12043.22601053291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3716526.1904761903,
            "unit": "ns",
            "range": "± 129548.03621658102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3931433.3333333335,
            "unit": "ns",
            "range": "± 99139.11467211625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4693179.487179487,
            "unit": "ns",
            "range": "± 160567.18249526253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4962597.142857143,
            "unit": "ns",
            "range": "± 153575.22871202105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7800563.636363637,
            "unit": "ns",
            "range": "± 239114.43627761924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308340.42553191487,
            "unit": "ns",
            "range": "± 10959.622723879173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297185.3658536585,
            "unit": "ns",
            "range": "± 10618.322866055865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249347.36842105264,
            "unit": "ns",
            "range": "± 5450.929423405459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4685264.285714285,
            "unit": "ns",
            "range": "± 58950.681566398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4229464.285714285,
            "unit": "ns",
            "range": "± 52367.394540773275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23042.268041237112,
            "unit": "ns",
            "range": "± 1714.936530139089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100498.83720930232,
            "unit": "ns",
            "range": "± 5430.621114645586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91861.05263157895,
            "unit": "ns",
            "range": "± 7441.07768929014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108036.66666666667,
            "unit": "ns",
            "range": "± 10332.249610925584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8281.91489361702,
            "unit": "ns",
            "range": "± 1026.630647946318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22819.14893617021,
            "unit": "ns",
            "range": "± 1950.8077508573997"
          }
        ]
      }
    ]
  }
}