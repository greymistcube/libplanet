window.BENCHMARK_DATA = {
  "lastUpdate": 1682075597707,
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
          "id": "4ee580e3e4ec96cd2b43c9bcaf2362fc1efefbd7",
          "message": "Changelog",
          "timestamp": "2023-04-21T19:55:04+09:00",
          "tree_id": "4c3757f3c5445664085b52318ce8f6ddb44f02aa",
          "url": "https://github.com/greymistcube/libplanet/commit/4ee580e3e4ec96cd2b43c9bcaf2362fc1efefbd7"
        },
        "date": 1682075577038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352538.2978723405,
            "unit": "ns",
            "range": "± 114385.73498021545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2515846.835443038,
            "unit": "ns",
            "range": "± 130750.55114404901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2143340.8163265307,
            "unit": "ns",
            "range": "± 136846.58415613827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5530883,
            "unit": "ns",
            "range": "± 339816.2162392959"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47681.05263157895,
            "unit": "ns",
            "range": "± 3203.764233391387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6860100,
            "unit": "ns",
            "range": "± 106326.37087222126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19320000,
            "unit": "ns",
            "range": "± 181366.98523527742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47522141.8367347,
            "unit": "ns",
            "range": "± 1891996.9112065972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98580469.23076923,
            "unit": "ns",
            "range": "± 1102952.2431370388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190772539.02439025,
            "unit": "ns",
            "range": "± 6816730.687539226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4666710.3125,
            "unit": "ns",
            "range": "± 44124.33488043965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1491530.9440104167,
            "unit": "ns",
            "range": "± 15764.160573625908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164287.1223958333,
            "unit": "ns",
            "range": "± 7783.999028942829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610896.2890625,
            "unit": "ns",
            "range": "± 13691.221464898334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849515.33203125,
            "unit": "ns",
            "range": "± 3870.195890962774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765183.59375,
            "unit": "ns",
            "range": "± 2507.5516533594573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065870.588235294,
            "unit": "ns",
            "range": "± 124544.64949425592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3313106,
            "unit": "ns",
            "range": "± 128342.48570420744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3861994.4444444445,
            "unit": "ns",
            "range": "± 76845.23386209623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4185281.081081081,
            "unit": "ns",
            "range": "± 125163.30851650894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6519500,
            "unit": "ns",
            "range": "± 183561.84748430664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266972.4137931034,
            "unit": "ns",
            "range": "± 10544.089441083132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248601.3698630137,
            "unit": "ns",
            "range": "± 11777.680081298375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210940,
            "unit": "ns",
            "range": "± 6772.227020968023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3940800,
            "unit": "ns",
            "range": "± 60164.95274212005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3466533.3333333335,
            "unit": "ns",
            "range": "± 59395.4263110104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19977.319587628866,
            "unit": "ns",
            "range": "± 2050.1780997147125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85929.03225806452,
            "unit": "ns",
            "range": "± 4917.041807860947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77992.42424242424,
            "unit": "ns",
            "range": "± 7978.6589189357155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92633.67346938775,
            "unit": "ns",
            "range": "± 12161.447823784349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5914.432989690722,
            "unit": "ns",
            "range": "± 836.1605820058393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17777.083333333332,
            "unit": "ns",
            "range": "± 1612.2216882084872"
          }
        ]
      }
    ]
  }
}