window.BENCHMARK_DATA = {
  "lastUpdate": 1709021249650,
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
          "id": "944369e564459c008868c197e3dad60be589a32d",
          "message": "Changed ITrie.IterateNodes() to use a stack instead of a queue",
          "timestamp": "2024-02-27T16:52:46+09:00",
          "tree_id": "2f8d8ac0f86ec7b61eecae2b1b8a34ddcc03056d",
          "url": "https://github.com/greymistcube/libplanet/commit/944369e564459c008868c197e3dad60be589a32d"
        },
        "date": 1709021110843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5705087.2,
            "unit": "ns",
            "range": "± 72712.11151147478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14475799.366666667,
            "unit": "ns",
            "range": "± 175931.3152462252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38122843.06666667,
            "unit": "ns",
            "range": "± 288428.75270914374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78726675.73333333,
            "unit": "ns",
            "range": "± 880092.2310534493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151898777.35714287,
            "unit": "ns",
            "range": "± 1030522.5895041056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199903.55555555556,
            "unit": "ns",
            "range": "± 5470.132056719354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191915.0810810811,
            "unit": "ns",
            "range": "± 6482.684673542018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167859.34285714285,
            "unit": "ns",
            "range": "± 5416.229011269835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3246414,
            "unit": "ns",
            "range": "± 58109.04359416502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811421.9285714286,
            "unit": "ns",
            "range": "± 37516.61209787203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15595.691919191919,
            "unit": "ns",
            "range": "± 2267.126423006273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62477.375,
            "unit": "ns",
            "range": "± 7390.467721471035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51651.346153846156,
            "unit": "ns",
            "range": "± 739.6993585407797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65202.260416666664,
            "unit": "ns",
            "range": "± 9790.13845259315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3357.1098901098903,
            "unit": "ns",
            "range": "± 550.8304931958944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13981.540816326531,
            "unit": "ns",
            "range": "± 3189.922893320019"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41845.295918367345,
            "unit": "ns",
            "range": "± 5694.0409204986445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990949.4646464647,
            "unit": "ns",
            "range": "± 83455.09214851179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861175.7571428572,
            "unit": "ns",
            "range": "± 60327.929144333284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651938.5561797754,
            "unit": "ns",
            "range": "± 177635.4076306272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7824054.046511628,
            "unit": "ns",
            "range": "± 278815.5118325987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3813627.2890625,
            "unit": "ns",
            "range": "± 43358.73607654063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218980.6787860577,
            "unit": "ns",
            "range": "± 2221.9012880474893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772202.2410016741,
            "unit": "ns",
            "range": "± 2557.1061014130796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964803.1103515625,
            "unit": "ns",
            "range": "± 4727.7444825006705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616243.8982747396,
            "unit": "ns",
            "range": "± 644.0304095693514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594940.4329176683,
            "unit": "ns",
            "range": "± 8782.429086154485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2341751.011627907,
            "unit": "ns",
            "range": "± 59423.02283722158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2604672.6666666665,
            "unit": "ns",
            "range": "± 98393.52938190229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3106968.620689655,
            "unit": "ns",
            "range": "± 89635.9159658089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3186082.0555555555,
            "unit": "ns",
            "range": "± 146047.43773147243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8866952.075,
            "unit": "ns",
            "range": "± 241076.33147587517"
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
          "id": "7803237599b7726afe7dba31bc0fcefd5110038a",
          "message": "Changelog",
          "timestamp": "2024-02-27T16:56:26+09:00",
          "tree_id": "c98df0332e776053d82280efe54629ec56ba5988",
          "url": "https://github.com/greymistcube/libplanet/commit/7803237599b7726afe7dba31bc0fcefd5110038a"
        },
        "date": 1709021243156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5647730.533333333,
            "unit": "ns",
            "range": "± 18441.20352388975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14388437.923076924,
            "unit": "ns",
            "range": "± 145999.7985623391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36523657.266666666,
            "unit": "ns",
            "range": "± 100743.0170713489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76977207.07142857,
            "unit": "ns",
            "range": "± 1314659.9734397815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150829037.14285713,
            "unit": "ns",
            "range": "± 927703.0723015981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198628.88709677418,
            "unit": "ns",
            "range": "± 8971.576369892551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191436.6896551724,
            "unit": "ns",
            "range": "± 8087.408296520459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164540.85714285713,
            "unit": "ns",
            "range": "± 3906.4740660308275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3303908.6666666665,
            "unit": "ns",
            "range": "± 57061.57864055621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876462.5714285714,
            "unit": "ns",
            "range": "± 49873.27376571433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12834.41304347826,
            "unit": "ns",
            "range": "± 1122.8964915863837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60191.22580645161,
            "unit": "ns",
            "range": "± 4078.8699845215874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52174.153846153844,
            "unit": "ns",
            "range": "± 662.2382308195248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64315.030927835054,
            "unit": "ns",
            "range": "± 12773.00063810837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3035.8453608247423,
            "unit": "ns",
            "range": "± 452.16125304397275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14604.685567010309,
            "unit": "ns",
            "range": "± 2583.637512992006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39778.242268041235,
            "unit": "ns",
            "range": "± 6129.62800203234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999338.2604166666,
            "unit": "ns",
            "range": "± 95399.86116328249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868775.705882353,
            "unit": "ns",
            "range": "± 71414.49308376951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643173.180851064,
            "unit": "ns",
            "range": "± 155124.647454043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7750109.024390244,
            "unit": "ns",
            "range": "± 276411.8626826179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727040.814903846,
            "unit": "ns",
            "range": "± 10529.527314931443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226828.8570498512,
            "unit": "ns",
            "range": "± 28364.876864372367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767488.8312049279,
            "unit": "ns",
            "range": "± 2770.818751321197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954391.9038783482,
            "unit": "ns",
            "range": "± 7602.737497297386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616678.2167217548,
            "unit": "ns",
            "range": "± 1545.9388109062904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587819.1232722356,
            "unit": "ns",
            "range": "± 8458.555295832219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425095.878787879,
            "unit": "ns",
            "range": "± 75859.31524735343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2513118.156862745,
            "unit": "ns",
            "range": "± 98083.05881983342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3115516.5,
            "unit": "ns",
            "range": "± 64886.11323582991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3514637.1,
            "unit": "ns",
            "range": "± 64712.18217814281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8856118.475,
            "unit": "ns",
            "range": "± 251537.0925282971"
          }
        ]
      }
    ]
  }
}