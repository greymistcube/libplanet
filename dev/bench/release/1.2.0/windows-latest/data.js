window.BENCHMARK_DATA = {
  "lastUpdate": 1684211941950,
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
          "id": "67095a318905220de755f1bdc333bf41106d38a8",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:26:31+09:00",
          "tree_id": "9b93bd801f7c90769d2c2ecbc0ee7ad86ce2f3d1",
          "url": "https://github.com/greymistcube/libplanet/commit/67095a318905220de755f1bdc333bf41106d38a8"
        },
        "date": 1684211921038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003635,
            "unit": "ns",
            "range": "± 99917.26008871723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831307.2727272727,
            "unit": "ns",
            "range": "± 76833.5402613397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774964.6341463414,
            "unit": "ns",
            "range": "± 63626.68685769993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3854753.0864197533,
            "unit": "ns",
            "range": "± 201983.09278651254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33650.68493150685,
            "unit": "ns",
            "range": "± 1679.3784637040933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5050684.615384615,
            "unit": "ns",
            "range": "± 23415.05378148305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13052893.333333334,
            "unit": "ns",
            "range": "± 102939.37513109818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31938664.285714287,
            "unit": "ns",
            "range": "± 309687.3897910672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64398692.85714286,
            "unit": "ns",
            "range": "± 435623.35613072145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129892578.57142857,
            "unit": "ns",
            "range": "± 1038917.0161416029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3641630.078125,
            "unit": "ns",
            "range": "± 7200.792534727869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1126415.78125,
            "unit": "ns",
            "range": "± 4767.197307682501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 798766.93359375,
            "unit": "ns",
            "range": "± 1081.6488881895905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948755.7421875,
            "unit": "ns",
            "range": "± 2373.866422268002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633742.890625,
            "unit": "ns",
            "range": "± 949.2117768244015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591322.5,
            "unit": "ns",
            "range": "± 981.0030068712106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145715.3846153845,
            "unit": "ns",
            "range": "± 75084.44207221323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274631.5789473685,
            "unit": "ns",
            "range": "± 48222.148583768925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821378.5714285714,
            "unit": "ns",
            "range": "± 53780.45464280961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2956361.111111111,
            "unit": "ns",
            "range": "± 117526.22576318176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4627023.404255319,
            "unit": "ns",
            "range": "± 178308.42016349814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182623.5294117647,
            "unit": "ns",
            "range": "± 8093.725553012053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170942.3076923077,
            "unit": "ns",
            "range": "± 8612.819186866422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146683.33333333334,
            "unit": "ns",
            "range": "± 3795.955131757861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2772457.1428571427,
            "unit": "ns",
            "range": "± 33298.91345618709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557307.1428571427,
            "unit": "ns",
            "range": "± 34090.04962619567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10588.297872340425,
            "unit": "ns",
            "range": "± 1596.4918787517072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57382.291666666664,
            "unit": "ns",
            "range": "± 4858.156349278509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44725,
            "unit": "ns",
            "range": "± 2034.7509104570106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59664.10256410256,
            "unit": "ns",
            "range": "± 4401.504298900558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2724.4897959183672,
            "unit": "ns",
            "range": "± 639.7585279788049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9803.225806451614,
            "unit": "ns",
            "range": "± 1319.45736647134"
          }
        ]
      }
    ]
  }
}