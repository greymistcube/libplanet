window.BENCHMARK_DATA = {
  "lastUpdate": 1702617479497,
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
          "id": "ed514fd04c280163e3dd02cdfb78dc90105e5c95",
          "message": "Release 3.9.2",
          "timestamp": "2023-12-15T14:05:36+09:00",
          "tree_id": "1dc3d85314af7613e4e013cb5bf0ffe3c279cd5b",
          "url": "https://github.com/greymistcube/libplanet/commit/ed514fd04c280163e3dd02cdfb78dc90105e5c95"
        },
        "date": 1702617455349,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925143.1578947369,
            "unit": "ns",
            "range": "± 84775.36481362562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1651730.357142857,
            "unit": "ns",
            "range": "± 68446.90289730988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1316821.6494845361,
            "unit": "ns",
            "range": "± 94930.20377581377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5111368,
            "unit": "ns",
            "range": "± 133991.99826855335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34041.25,
            "unit": "ns",
            "range": "± 1712.07134522462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4890500,
            "unit": "ns",
            "range": "± 21678.330193997877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13280442.857142856,
            "unit": "ns",
            "range": "± 85255.76645767555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31551213.333333332,
            "unit": "ns",
            "range": "± 259741.51400043487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64796413.333333336,
            "unit": "ns",
            "range": "± 553784.4499012057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127820421.42857143,
            "unit": "ns",
            "range": "± 850741.4170805743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3269691.3225446427,
            "unit": "ns",
            "range": "± 6382.090719054121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1032470.4427083334,
            "unit": "ns",
            "range": "± 2824.597720613704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747112.0256696428,
            "unit": "ns",
            "range": "± 1476.2321487572597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898080.3385416667,
            "unit": "ns",
            "range": "± 1386.8360534106278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610936.7788461539,
            "unit": "ns",
            "range": "± 1665.8073175397421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564545.5338541666,
            "unit": "ns",
            "range": "± 1102.5247231790338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2079410,
            "unit": "ns",
            "range": "± 37486.47482588614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223366.6666666665,
            "unit": "ns",
            "range": "± 64829.60867473704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756209.6774193547,
            "unit": "ns",
            "range": "± 82259.65132772652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2569580.303030303,
            "unit": "ns",
            "range": "± 69713.04345694788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6238436.363636363,
            "unit": "ns",
            "range": "± 291928.6971090787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170664.0625,
            "unit": "ns",
            "range": "± 7399.021110448134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161990.6976744186,
            "unit": "ns",
            "range": "± 8747.0146558627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143145.45454545456,
            "unit": "ns",
            "range": "± 3417.0061070959086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2675285.714285714,
            "unit": "ns",
            "range": "± 25907.968989151912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2448735.714285714,
            "unit": "ns",
            "range": "± 28328.36597266631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10445.263157894737,
            "unit": "ns",
            "range": "± 1419.1523107387125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52313.04347826087,
            "unit": "ns",
            "range": "± 4932.405012453871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43624.39024390244,
            "unit": "ns",
            "range": "± 1562.654870373634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53161.11111111111,
            "unit": "ns",
            "range": "± 9181.511643238891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2478.3505154639174,
            "unit": "ns",
            "range": "± 459.6708070555564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9628.40909090909,
            "unit": "ns",
            "range": "± 944.0617629849216"
          }
        ]
      }
    ]
  }
}