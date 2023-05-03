window.BENCHMARK_DATA = {
  "lastUpdate": 1683108072200,
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
      },
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
          "id": "864e180510f11f376012591f9151d7d00c7902e0",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:47:13+09:00",
          "tree_id": "be97148de5a6bf45e2dd0858c79572a5b3145a21",
          "url": "https://github.com/greymistcube/libplanet/commit/864e180510f11f376012591f9151d7d00c7902e0"
        },
        "date": 1683108048756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1291154,
            "unit": "ns",
            "range": "± 91332.06194647058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2350405.714285714,
            "unit": "ns",
            "range": "± 77081.13732355299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2222405.5555555555,
            "unit": "ns",
            "range": "± 45815.56981975119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4799658.974358974,
            "unit": "ns",
            "range": "± 165773.23718665034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41710.769230769234,
            "unit": "ns",
            "range": "± 1939.323583504945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6651866.666666667,
            "unit": "ns",
            "range": "± 14126.250471407915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17269085.714285713,
            "unit": "ns",
            "range": "± 81172.13293264607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44455600,
            "unit": "ns",
            "range": "± 230967.47023702777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87859413.33333333,
            "unit": "ns",
            "range": "± 915566.0987815654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175724046.66666666,
            "unit": "ns",
            "range": "± 949418.3677138234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4783351.450892857,
            "unit": "ns",
            "range": "± 5592.095118461588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481388.7760416667,
            "unit": "ns",
            "range": "± 2251.491365861803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135502.3763020833,
            "unit": "ns",
            "range": "± 1579.7988076906013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564849.7786458335,
            "unit": "ns",
            "range": "± 5987.329003493557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822646.5053013393,
            "unit": "ns",
            "range": "± 2115.010985085114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751037.4372209822,
            "unit": "ns",
            "range": "± 1126.7112378041152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2882106.25,
            "unit": "ns",
            "range": "± 36945.680284258764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2976547.8260869565,
            "unit": "ns",
            "range": "± 45581.833199055975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3755121.4285714286,
            "unit": "ns",
            "range": "± 56764.549860622705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3860856,
            "unit": "ns",
            "range": "± 91456.16472751669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6104389.189189189,
            "unit": "ns",
            "range": "± 204187.71154637722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246994.87179487178,
            "unit": "ns",
            "range": "± 7736.140364955176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231824.39024390245,
            "unit": "ns",
            "range": "± 8005.772307772839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219614.40677966102,
            "unit": "ns",
            "range": "± 9635.687308160372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3733440,
            "unit": "ns",
            "range": "± 30862.964397940963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3470633.3333333335,
            "unit": "ns",
            "range": "± 58497.49282376696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15998.924731182795,
            "unit": "ns",
            "range": "± 1554.69098171336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75932.8947368421,
            "unit": "ns",
            "range": "± 3882.4180835451757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66489.58333333333,
            "unit": "ns",
            "range": "± 4100.923622966357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76826.8817204301,
            "unit": "ns",
            "range": "± 10039.986789625667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3631.4606741573034,
            "unit": "ns",
            "range": "± 525.3993082361216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14650,
            "unit": "ns",
            "range": "± 1301.1987855704033"
          }
        ]
      }
    ]
  }
}