window.BENCHMARK_DATA = {
  "lastUpdate": 1683612072768,
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
          "id": "91d33f81554ca3f163862959b90c19fa88462e24",
          "message": "Prepare 1.1.1",
          "timestamp": "2023-05-09T14:44:50+09:00",
          "tree_id": "9ff5ffbfabad77d319356ce49de1521fd6203f2d",
          "url": "https://github.com/greymistcube/libplanet/commit/91d33f81554ca3f163862959b90c19fa88462e24"
        },
        "date": 1683612065441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306282.3333333333,
            "unit": "ns",
            "range": "± 11171.439335116214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297519.8448275862,
            "unit": "ns",
            "range": "± 12902.323099405938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242656.9024390244,
            "unit": "ns",
            "range": "± 8706.255058303996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4349415.25,
            "unit": "ns",
            "range": "± 31630.045127220415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914370.285714286,
            "unit": "ns",
            "range": "± 43444.84350464226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25117.157894736843,
            "unit": "ns",
            "range": "± 2677.8171934642105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103875.85106382979,
            "unit": "ns",
            "range": "± 8514.360029312966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92307.91489361702,
            "unit": "ns",
            "range": "± 7707.363156838316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112712.76923076923,
            "unit": "ns",
            "range": "± 11899.862762118939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6828.270833333333,
            "unit": "ns",
            "range": "± 929.5176279200062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24417.125,
            "unit": "ns",
            "range": "± 2325.6385438932907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760090.375,
            "unit": "ns",
            "range": "± 86195.74309715447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3917022.125,
            "unit": "ns",
            "range": "± 75690.99629787229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4339639.869565218,
            "unit": "ns",
            "range": "± 104418.57688183492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4762979.428571428,
            "unit": "ns",
            "range": "± 71834.90883077164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7102038.384615385,
            "unit": "ns",
            "range": "± 111097.66868281444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6049931.919270833,
            "unit": "ns",
            "range": "± 46089.240609403154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875624.8094951923,
            "unit": "ns",
            "range": "± 1830.4728631113355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355302.8278645833,
            "unit": "ns",
            "range": "± 3635.4383032799633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642239.8255208335,
            "unit": "ns",
            "range": "± 1645.6546818991771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815793.3231608073,
            "unit": "ns",
            "range": "± 288.0065586784802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757661.2854166667,
            "unit": "ns",
            "range": "± 487.9131186138482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52631.63829787234,
            "unit": "ns",
            "range": "± 4294.597243126303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8131171.027027027,
            "unit": "ns",
            "range": "± 270068.869164524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22420826.2,
            "unit": "ns",
            "range": "± 163309.4023555988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56174065.4,
            "unit": "ns",
            "range": "± 535268.1681137303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111280460.33333333,
            "unit": "ns",
            "range": "± 629010.4283406103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224802575.06666666,
            "unit": "ns",
            "range": "± 1221070.6852822397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538026.0408163266,
            "unit": "ns",
            "range": "± 111555.24262338011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2781709.103448276,
            "unit": "ns",
            "range": "± 80894.23950016678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2436174.2954545454,
            "unit": "ns",
            "range": "± 132509.55077095728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5973740.968421052,
            "unit": "ns",
            "range": "± 340728.2932167085"
          }
        ]
      }
    ]
  }
}