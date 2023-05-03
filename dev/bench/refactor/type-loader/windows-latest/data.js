window.BENCHMARK_DATA = {
  "lastUpdate": 1683107915656,
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
          "id": "4c2ca5ac4b94e7846843416973a58b75e87c266d",
          "message": "Changed IActionTypeLoader to IActionLoader",
          "timestamp": "2023-05-03T18:42:43+09:00",
          "tree_id": "df79e2790e2a2a3e14665657538de57183736d5a",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2ca5ac4b94e7846843416973a58b75e87c266d"
        },
        "date": 1683107893822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1330943.298969072,
            "unit": "ns",
            "range": "± 105723.66585744542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2385806.896551724,
            "unit": "ns",
            "range": "± 57355.53237130713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2111934.375,
            "unit": "ns",
            "range": "± 142199.17079344066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4876407.894736842,
            "unit": "ns",
            "range": "± 146099.19692248153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42539.47368421053,
            "unit": "ns",
            "range": "± 2162.688385466473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6969800,
            "unit": "ns",
            "range": "± 68035.28496302488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17924671.42857143,
            "unit": "ns",
            "range": "± 67231.29340706463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45580642.85714286,
            "unit": "ns",
            "range": "± 267521.7481145892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91515033.33333333,
            "unit": "ns",
            "range": "± 462298.1762991542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183414540,
            "unit": "ns",
            "range": "± 834591.7503272397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4809773.948317308,
            "unit": "ns",
            "range": "± 3890.346308183715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508595.6966145833,
            "unit": "ns",
            "range": "± 1976.9560949951992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143242.885044643,
            "unit": "ns",
            "range": "± 1183.8011223571566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559381.4903846155,
            "unit": "ns",
            "range": "± 14326.632841065088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821813.7834821428,
            "unit": "ns",
            "range": "± 4697.840971527403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727417.7311197916,
            "unit": "ns",
            "range": "± 862.7412908424295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927700,
            "unit": "ns",
            "range": "± 36932.24565648248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3034837.2093023257,
            "unit": "ns",
            "range": "± 66630.36639070741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3921120,
            "unit": "ns",
            "range": "± 64768.53512977689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3917831.111111111,
            "unit": "ns",
            "range": "± 141115.3393862659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6148550,
            "unit": "ns",
            "range": "± 111413.27285571075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258134.78260869565,
            "unit": "ns",
            "range": "± 9251.695757867055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241104.7619047619,
            "unit": "ns",
            "range": "± 8318.623021048508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222742.1875,
            "unit": "ns",
            "range": "± 10321.034227239114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3820933.3333333335,
            "unit": "ns",
            "range": "± 42050.32132825531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3469286.6666666665,
            "unit": "ns",
            "range": "± 24675.837420054308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18774.736842105263,
            "unit": "ns",
            "range": "± 1547.7484278682516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80624.13793103448,
            "unit": "ns",
            "range": "± 4327.117454972295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72896.9696969697,
            "unit": "ns",
            "range": "± 6915.413936073216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85879.78723404255,
            "unit": "ns",
            "range": "± 11834.018575833341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4851.0204081632655,
            "unit": "ns",
            "range": "± 957.4714227340727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17760.60606060606,
            "unit": "ns",
            "range": "± 1889.7585517849964"
          }
        ]
      }
    ]
  }
}