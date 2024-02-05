window.BENCHMARK_DATA = {
  "lastUpdate": 1707152934672,
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
          "id": "eebea10b6c19f838c7378de055d759e33d09fc32",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:48:12+09:00",
          "tree_id": "35d56191c462f4ee3a7b9749431d77f05fa78129",
          "url": "https://github.com/greymistcube/libplanet/commit/eebea10b6c19f838c7378de055d759e33d09fc32"
        },
        "date": 1707152919112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8665770.642857144,
            "unit": "ns",
            "range": "± 142413.98749939565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21647786.28358209,
            "unit": "ns",
            "range": "± 1027784.7696851623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56179820.65686274,
            "unit": "ns",
            "range": "± 2273029.0306622162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113681766.8611111,
            "unit": "ns",
            "range": "± 3690950.1349106627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227383196.7222222,
            "unit": "ns",
            "range": "± 4819948.213741535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73905.73333333334,
            "unit": "ns",
            "range": "± 11521.551792575023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367488.1145833333,
            "unit": "ns",
            "range": "± 58693.235342821106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361032.7826086957,
            "unit": "ns",
            "range": "± 46944.33622927442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331214.6595744681,
            "unit": "ns",
            "range": "± 40271.98253870695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4955335.914141414,
            "unit": "ns",
            "range": "± 463086.90567359724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4160729.881443299,
            "unit": "ns",
            "range": "± 310347.9257774129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27385.80459770115,
            "unit": "ns",
            "range": "± 3971.2633097450807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114376.76923076923,
            "unit": "ns",
            "range": "± 18544.99274022621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134461.91397849462,
            "unit": "ns",
            "range": "± 19766.298481119164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117339.6,
            "unit": "ns",
            "range": "± 16859.52193052468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9522.666666666666,
            "unit": "ns",
            "range": "± 1662.7421846046268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26815.18181818182,
            "unit": "ns",
            "range": "± 5687.35976873065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598761.5806451612,
            "unit": "ns",
            "range": "± 205638.13040869948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110996.977272727,
            "unit": "ns",
            "range": "± 368634.5500830002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2750276.6483516484,
            "unit": "ns",
            "range": "± 309832.97698854795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 40469370.11578947,
            "unit": "ns",
            "range": "± 11536760.726721123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3422640.763157895,
            "unit": "ns",
            "range": "± 257431.61866287419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4510720.855555556,
            "unit": "ns",
            "range": "± 886664.7209745665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5018442.49,
            "unit": "ns",
            "range": "± 527930.2112950061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4924260.802083333,
            "unit": "ns",
            "range": "± 511535.7159671283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32959086.255102042,
            "unit": "ns",
            "range": "± 4371100.460314368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5828913.406510416,
            "unit": "ns",
            "range": "± 94437.79459254505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898610.1492300725,
            "unit": "ns",
            "range": "± 90672.36569272974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140585.0506347655,
            "unit": "ns",
            "range": "± 40211.81197811147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124989.0459960937,
            "unit": "ns",
            "range": "± 110310.35618141471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853834.978140024,
            "unit": "ns",
            "range": "± 7110.240271965627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835509.0348307291,
            "unit": "ns",
            "range": "± 15606.879952082461"
          }
        ]
      }
    ]
  }
}