window.BENCHMARK_DATA = {
  "lastUpdate": 1707198293135,
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
          "id": "fa5c59e9034f5db4c36a914a9cd344df727f757d",
          "message": "Merge tag '4.0.2' into merge/4.0.2-to-main\n\nLibplanet 4.0.2",
          "timestamp": "2024-02-06T14:33:31+09:00",
          "tree_id": "1962cabcefac60b16dcc0d70eadaa10d61f02fac",
          "url": "https://github.com/greymistcube/libplanet/commit/fa5c59e9034f5db4c36a914a9cd344df727f757d"
        },
        "date": 1707198286805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962343.9239130435,
            "unit": "ns",
            "range": "± 69501.58093865325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1893531.88,
            "unit": "ns",
            "range": "± 92559.76937691141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642380.2083333333,
            "unit": "ns",
            "range": "± 176004.14312898053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12731020.43478261,
            "unit": "ns",
            "range": "± 1086702.926922728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40274.34693877551,
            "unit": "ns",
            "range": "± 4957.741760411556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197820.3875,
            "unit": "ns",
            "range": "± 9928.44934734925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190640.81666666668,
            "unit": "ns",
            "range": "± 8481.807943048956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162302.7142857143,
            "unit": "ns",
            "range": "± 2747.2372535826844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205303.714285714,
            "unit": "ns",
            "range": "± 39133.220145919644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850332.7333333334,
            "unit": "ns",
            "range": "± 45151.55774637028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14335.020408163266,
            "unit": "ns",
            "range": "± 2724.0782531851246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65179,
            "unit": "ns",
            "range": "± 3818.363411173031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59587.49462365591,
            "unit": "ns",
            "range": "± 4736.17306212804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61895.34375,
            "unit": "ns",
            "range": "± 10411.215966020416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3030.282608695652,
            "unit": "ns",
            "range": "± 686.4643420317126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13133.396907216495,
            "unit": "ns",
            "range": "± 2283.6761960549125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5552012.428571428,
            "unit": "ns",
            "range": "± 21002.18533579591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14251793.642857144,
            "unit": "ns",
            "range": "± 120645.48564005276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38252398.21428572,
            "unit": "ns",
            "range": "± 230212.07348749565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74832695.33333333,
            "unit": "ns",
            "range": "± 645220.6350809296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150022076.5,
            "unit": "ns",
            "range": "± 1214525.7147169076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419834.5833333335,
            "unit": "ns",
            "range": "± 82987.64840518554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2483927.6923076925,
            "unit": "ns",
            "range": "± 52255.95942417993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101698.2083333335,
            "unit": "ns",
            "range": "± 79791.5274988948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3099521.1829268294,
            "unit": "ns",
            "range": "± 163861.6700449022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13659406.378947368,
            "unit": "ns",
            "range": "± 962642.443919574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748070.8203125,
            "unit": "ns",
            "range": "± 39066.307655868965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224790.4625,
            "unit": "ns",
            "range": "± 2007.2519839938884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770083.4577287947,
            "unit": "ns",
            "range": "± 2237.7797606979616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945226.3816964286,
            "unit": "ns",
            "range": "± 20809.475777544845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620911.1203776042,
            "unit": "ns",
            "range": "± 11080.711989784328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566640.3239397322,
            "unit": "ns",
            "range": "± 4437.840165028505"
          }
        ]
      }
    ]
  }
}