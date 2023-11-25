window.BENCHMARK_DATA = {
  "lastUpdate": 1700901972037,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0fcd4d7b6b8719507c713585f521d4de60ba5f70",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-25T17:34:56+09:00",
          "tree_id": "cff9a84c80c43d1a30d8377791ae1ddd00e5e020",
          "url": "https://github.com/greymistcube/libplanet/commit/0fcd4d7b6b8719507c713585f521d4de60ba5f70"
        },
        "date": 1700901965652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209681.8764044944,
            "unit": "ns",
            "range": "± 12064.397238286996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202098.0185185185,
            "unit": "ns",
            "range": "± 8497.01698986566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175017.75,
            "unit": "ns",
            "range": "± 2603.019719305044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3216363.769230769,
            "unit": "ns",
            "range": "± 36304.94720226122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2968513.4285714286,
            "unit": "ns",
            "range": "± 15730.671894859935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13967.717391304348,
            "unit": "ns",
            "range": "± 1848.8449576685482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76987.12121212122,
            "unit": "ns",
            "range": "± 15102.651312899841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72020.83,
            "unit": "ns",
            "range": "± 14979.471509642182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64708.34375,
            "unit": "ns",
            "range": "± 11538.468264054467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4126.50505050505,
            "unit": "ns",
            "range": "± 1681.5165796468657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14302.278350515464,
            "unit": "ns",
            "range": "± 2682.7680075121266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3623482.249739583,
            "unit": "ns",
            "range": "± 55350.60119563501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1140685.9854266827,
            "unit": "ns",
            "range": "± 3283.9609914600624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750685.1729166667,
            "unit": "ns",
            "range": "± 12657.298334498566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941781.7021484375,
            "unit": "ns",
            "range": "± 2696.801431099335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615735.2857259115,
            "unit": "ns",
            "range": "± 1950.5222122353923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569773.2791341146,
            "unit": "ns",
            "range": "± 1204.6038170502463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42341.084210526315,
            "unit": "ns",
            "range": "± 5434.431393191125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2484524.5476190476,
            "unit": "ns",
            "range": "± 76633.0455775945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547612.754237288,
            "unit": "ns",
            "range": "± 106356.10238488065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224037.1428571427,
            "unit": "ns",
            "range": "± 103697.20331646106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3024083.1086956523,
            "unit": "ns",
            "range": "± 140210.2136701109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7450421.4375,
            "unit": "ns",
            "range": "± 226990.65265583884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5691783.433333334,
            "unit": "ns",
            "range": "± 60502.60963494133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15690110.8,
            "unit": "ns",
            "range": "± 135016.89092596632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37611375.9,
            "unit": "ns",
            "range": "± 162830.05242750142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76859467.65384616,
            "unit": "ns",
            "range": "± 191099.2357781013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154664951.14285713,
            "unit": "ns",
            "range": "± 638699.5449352063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078050.2,
            "unit": "ns",
            "range": "± 139766.09928514084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1950042.6739130435,
            "unit": "ns",
            "range": "± 73615.03426468879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545875.4545454546,
            "unit": "ns",
            "range": "± 132461.4575883647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6507503.313953488,
            "unit": "ns",
            "range": "± 191622.60739478024"
          }
        ]
      }
    ]
  }
}