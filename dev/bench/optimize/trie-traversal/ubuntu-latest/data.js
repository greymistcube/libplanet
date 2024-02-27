window.BENCHMARK_DATA = {
  "lastUpdate": 1709021118204,
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
      }
    ]
  }
}