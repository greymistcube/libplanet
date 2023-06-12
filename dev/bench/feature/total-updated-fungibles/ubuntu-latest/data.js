window.BENCHMARK_DATA = {
  "lastUpdate": 1686574191767,
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
          "id": "027ba3ba808661370a6a9cf8513c2fe070d6923d",
          "message": "Added scenario test for ActionEvaluator",
          "timestamp": "2023-06-12T21:37:56+09:00",
          "tree_id": "ab5b77322cdbdb42324db5a1c7723b949d9ce77d",
          "url": "https://github.com/greymistcube/libplanet/commit/027ba3ba808661370a6a9cf8513c2fe070d6923d"
        },
        "date": 1686574183617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305172.0112359552,
            "unit": "ns",
            "range": "± 70515.3944005547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577575.11627907,
            "unit": "ns",
            "range": "± 94931.34048935158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153687.5274725277,
            "unit": "ns",
            "range": "± 118347.42595269994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5154659.8,
            "unit": "ns",
            "range": "± 109798.11453390264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101910.64,
            "unit": "ns",
            "range": "± 39446.031729947186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3306500.533333333,
            "unit": "ns",
            "range": "± 48318.98621492482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109280.8,
            "unit": "ns",
            "range": "± 49057.1924844578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4050905.272727273,
            "unit": "ns",
            "range": "± 94116.91847412416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6557491,
            "unit": "ns",
            "range": "± 128001.14443482527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7541248.666666667,
            "unit": "ns",
            "range": "± 24463.423924202394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19391397.333333332,
            "unit": "ns",
            "range": "± 171785.0109055197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49122421.2,
            "unit": "ns",
            "range": "± 316993.942316884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97838226.4,
            "unit": "ns",
            "range": "± 708647.3847877679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195525364.92857143,
            "unit": "ns",
            "range": "± 1131538.890936142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6222081.410714285,
            "unit": "ns",
            "range": "± 21432.289016432504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836576.8072415865,
            "unit": "ns",
            "range": "± 1893.9949067688096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339400.7046595982,
            "unit": "ns",
            "range": "± 1156.6367360127795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556586.4931640625,
            "unit": "ns",
            "range": "± 1920.3302239858992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798575.2220982143,
            "unit": "ns",
            "range": "± 717.8673682895134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741311.7737862723,
            "unit": "ns",
            "range": "± 688.4264182720868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45616.132352941175,
            "unit": "ns",
            "range": "± 2131.614572035429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276277.0909090909,
            "unit": "ns",
            "range": "± 6434.324835332771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262869,
            "unit": "ns",
            "range": "± 2958.151308954068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231992.15384615384,
            "unit": "ns",
            "range": "± 2709.5141276052254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173061.8571428573,
            "unit": "ns",
            "range": "± 28389.188242268305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742304.6153846155,
            "unit": "ns",
            "range": "± 29911.03844051128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15958.652173913044,
            "unit": "ns",
            "range": "± 1074.6137403152554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82228.11538461539,
            "unit": "ns",
            "range": "± 4233.246198382972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69434.95,
            "unit": "ns",
            "range": "± 1501.6652326842463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82417.59793814433,
            "unit": "ns",
            "range": "± 11425.832836767117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4169.367346938776,
            "unit": "ns",
            "range": "± 536.3569627590429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15295.121951219513,
            "unit": "ns",
            "range": "± 750.7859978541978"
          }
        ]
      }
    ]
  }
}