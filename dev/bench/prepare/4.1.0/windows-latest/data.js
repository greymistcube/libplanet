window.BENCHMARK_DATA = {
  "lastUpdate": 1705915202601,
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
          "id": "9ba4ed4d5c71ca82a1450e3bb12375df97d26159",
          "message": "Prepare 4.1.0",
          "timestamp": "2024-01-22T18:04:22+09:00",
          "tree_id": "ee3961a7236680095a3aa7512074e6094fd39dae",
          "url": "https://github.com/greymistcube/libplanet/commit/9ba4ed4d5c71ca82a1450e3bb12375df97d26159"
        },
        "date": 1705915181063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1064275,
            "unit": "ns",
            "range": "± 110114.01937608987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1808307.5,
            "unit": "ns",
            "range": "± 94560.78451638624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647479.8969072164,
            "unit": "ns",
            "range": "± 141959.83892530165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11226960.43956044,
            "unit": "ns",
            "range": "± 928423.209997481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37642.857142857145,
            "unit": "ns",
            "range": "± 4192.033260500549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5223133.333333333,
            "unit": "ns",
            "range": "± 91311.70842360849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14116246.666666666,
            "unit": "ns",
            "range": "± 121538.970038812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34176400,
            "unit": "ns",
            "range": "± 284237.1042432205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68703278.57142857,
            "unit": "ns",
            "range": "± 508194.29533711495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139530193.33333334,
            "unit": "ns",
            "range": "± 1669681.7530238966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3361697.265625,
            "unit": "ns",
            "range": "± 18966.71927369455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1090387.890625,
            "unit": "ns",
            "range": "± 1463.365433931674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775499.6614583334,
            "unit": "ns",
            "range": "± 770.3163006420807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961275.2734375,
            "unit": "ns",
            "range": "± 10686.386020462076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624983.4123883928,
            "unit": "ns",
            "range": "± 1732.7882059396688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558505.5338541666,
            "unit": "ns",
            "range": "± 1141.406621013161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221512.5,
            "unit": "ns",
            "range": "± 101904.97986180519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2376859.210526316,
            "unit": "ns",
            "range": "± 106065.08967312676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2945772.340425532,
            "unit": "ns",
            "range": "± 114487.8666480458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2900973.6263736263,
            "unit": "ns",
            "range": "± 159662.13621628558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12679972.527472528,
            "unit": "ns",
            "range": "± 1572531.0896107682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189900,
            "unit": "ns",
            "range": "± 11934.258119126323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175774.1573033708,
            "unit": "ns",
            "range": "± 9610.511859534185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148332.63157894736,
            "unit": "ns",
            "range": "± 10672.528286324494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2929666.6666666665,
            "unit": "ns",
            "range": "± 33359.82756607256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2638553.3333333335,
            "unit": "ns",
            "range": "± 37396.33035218193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14555.31914893617,
            "unit": "ns",
            "range": "± 2267.9447861362737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62483.15789473684,
            "unit": "ns",
            "range": "± 7502.391854511055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55765.26315789474,
            "unit": "ns",
            "range": "± 9675.707334867626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76798.9898989899,
            "unit": "ns",
            "range": "± 21483.413131660694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4228.282828282829,
            "unit": "ns",
            "range": "± 1180.975073095767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14900,
            "unit": "ns",
            "range": "± 3401.830239678611"
          }
        ]
      }
    ]
  }
}