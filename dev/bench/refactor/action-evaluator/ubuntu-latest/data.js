window.BENCHMARK_DATA = {
  "lastUpdate": 1686310543741,
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
          "id": "f28a269cff6f1064e1e13d1a7630c2c05652dc1c",
          "message": "Remove null getters",
          "timestamp": "2023-06-09T20:20:20+09:00",
          "tree_id": "62330eb54892a69fe99510199b799e3ce891914e",
          "url": "https://github.com/greymistcube/libplanet/commit/f28a269cff6f1064e1e13d1a7630c2c05652dc1c"
        },
        "date": 1686310535381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740176.7352941176,
            "unit": "ns",
            "range": "± 83186.42693957748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3334662.875,
            "unit": "ns",
            "range": "± 64771.254787778606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2844247.2739726026,
            "unit": "ns",
            "range": "± 137426.56733964226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6802810.814814814,
            "unit": "ns",
            "range": "± 190535.52713218948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4205076.125,
            "unit": "ns",
            "range": "± 79091.1679594083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4458473.148148148,
            "unit": "ns",
            "range": "± 120365.8998083324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5421052.84375,
            "unit": "ns",
            "range": "± 167254.28884787098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5479623.285714285,
            "unit": "ns",
            "range": "± 154792.01520890495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9179645.625,
            "unit": "ns",
            "range": "± 178764.59885442458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10063365.692307692,
            "unit": "ns",
            "range": "± 93556.1071633707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27523091.8,
            "unit": "ns",
            "range": "± 451204.8112246968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67347715,
            "unit": "ns",
            "range": "± 950469.9713093067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135600894.4,
            "unit": "ns",
            "range": "± 1444728.673512079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269828161.93333334,
            "unit": "ns",
            "range": "± 2748571.9597215117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7490245.795833333,
            "unit": "ns",
            "range": "± 29269.62794413976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2327370.7583333333,
            "unit": "ns",
            "range": "± 5090.432638003063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1692112.071986607,
            "unit": "ns",
            "range": "± 5071.1693788217335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3240635.5416666665,
            "unit": "ns",
            "range": "± 6845.360275028364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045274.3184895833,
            "unit": "ns",
            "range": "± 1655.1130515327623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978953.2764322917,
            "unit": "ns",
            "range": "± 1264.6048825465807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56947.48809523809,
            "unit": "ns",
            "range": "± 2989.57344136289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349759.46153846156,
            "unit": "ns",
            "range": "± 9336.157441820566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336669.64864864864,
            "unit": "ns",
            "range": "± 11286.205262807965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293795.5714285714,
            "unit": "ns",
            "range": "± 4459.867964832173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5460340.4,
            "unit": "ns",
            "range": "± 59626.46470174608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4860960.533333333,
            "unit": "ns",
            "range": "± 45099.78416145163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21360.913978494624,
            "unit": "ns",
            "range": "± 1251.0362370582689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102923.83516483517,
            "unit": "ns",
            "range": "± 5760.442722692099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89985.78571428571,
            "unit": "ns",
            "range": "± 1243.3856495980535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103498.23711340207,
            "unit": "ns",
            "range": "± 11901.572067704958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5717.969072164949,
            "unit": "ns",
            "range": "± 555.9219342229372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19468.473684210527,
            "unit": "ns",
            "range": "± 1464.6459658057902"
          }
        ]
      }
    ]
  }
}