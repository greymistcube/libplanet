window.BENCHMARK_DATA = {
  "lastUpdate": 1705571849029,
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
          "id": "93d8326c18a2645b78951215485e432d2447f372",
          "message": "Removed IStateStore.PruneStates()",
          "timestamp": "2024-01-18T18:43:16+09:00",
          "tree_id": "13ba707ced2bbac5cac8e6e607cd96971834bd13",
          "url": "https://github.com/greymistcube/libplanet/commit/93d8326c18a2645b78951215485e432d2447f372"
        },
        "date": 1705571661093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3780469.2505208333,
            "unit": "ns",
            "range": "± 46059.36804907087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1249597.2256610577,
            "unit": "ns",
            "range": "± 2634.442483649713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778570.0013020834,
            "unit": "ns",
            "range": "± 12897.46462326583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928084.413783482,
            "unit": "ns",
            "range": "± 3991.7057279698647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633144.7058293269,
            "unit": "ns",
            "range": "± 869.5787062094431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572957.2639723558,
            "unit": "ns",
            "range": "± 1009.5712557448529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2448927.704225352,
            "unit": "ns",
            "range": "± 91852.19221077715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2592479.314285714,
            "unit": "ns",
            "range": "± 69330.24800176726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3402781.3157894737,
            "unit": "ns",
            "range": "± 74314.79587093799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3177925.3076923075,
            "unit": "ns",
            "range": "± 109061.76079904012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7198829.25,
            "unit": "ns",
            "range": "± 219828.28535443515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41246.177083333336,
            "unit": "ns",
            "range": "± 4549.05291472225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244023.60344827586,
            "unit": "ns",
            "range": "± 10641.091971633354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215893.75789473683,
            "unit": "ns",
            "range": "± 19789.84015917935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174695.3,
            "unit": "ns",
            "range": "± 2910.347529567069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3125387.3,
            "unit": "ns",
            "range": "± 32668.802844828664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2849517.4285714286,
            "unit": "ns",
            "range": "± 22025.051490254267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20426.262626262625,
            "unit": "ns",
            "range": "± 3690.9585823813118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81545.0505050505,
            "unit": "ns",
            "range": "± 8770.286943358911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96723.23711340207,
            "unit": "ns",
            "range": "± 10515.272629582252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94976.61111111111,
            "unit": "ns",
            "range": "± 14474.426856150782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7062.183673469388,
            "unit": "ns",
            "range": "± 1100.8653610845656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18314.860215053763,
            "unit": "ns",
            "range": "± 1995.3205397466181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5829393.233333333,
            "unit": "ns",
            "range": "± 51161.80380555493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14737877.666666666,
            "unit": "ns",
            "range": "± 65612.13158449133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36972983.833333336,
            "unit": "ns",
            "range": "± 111512.9224548628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75563780,
            "unit": "ns",
            "range": "± 405089.6330621515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152799880.5,
            "unit": "ns",
            "range": "± 1224951.283807646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1019346.0604395604,
            "unit": "ns",
            "range": "± 86333.2220065188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1982353,
            "unit": "ns",
            "range": "± 67515.1836054712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542412.1855670102,
            "unit": "ns",
            "range": "± 103803.68227325098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6009358.386792453,
            "unit": "ns",
            "range": "± 247577.35083183605"
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
          "id": "8eb0b14be7fd75d992cc66c2804255634511bb9e",
          "message": "Changelog",
          "timestamp": "2024-01-18T18:46:04+09:00",
          "tree_id": "05f426243e74952e5002224a4fb35d5dabe69e4c",
          "url": "https://github.com/greymistcube/libplanet/commit/8eb0b14be7fd75d992cc66c2804255634511bb9e"
        },
        "date": 1705571842688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733338.021484375,
            "unit": "ns",
            "range": "± 9652.139435153214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194394.4195033482,
            "unit": "ns",
            "range": "± 2212.79638653731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753207.8752253606,
            "unit": "ns",
            "range": "± 1386.3788096369042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934136.7579752605,
            "unit": "ns",
            "range": "± 2823.088765337696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620325.6267277644,
            "unit": "ns",
            "range": "± 1590.766640161709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570299.0221354166,
            "unit": "ns",
            "range": "± 1047.0334464905452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390866.037037037,
            "unit": "ns",
            "range": "± 96542.08635473452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554358.7333333334,
            "unit": "ns",
            "range": "± 44826.70735728019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3181445.25,
            "unit": "ns",
            "range": "± 90245.50821226917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2908635.9056603773,
            "unit": "ns",
            "range": "± 121221.99864778672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6882689.586206896,
            "unit": "ns",
            "range": "± 198591.67151136982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37836.97872340425,
            "unit": "ns",
            "range": "± 4334.998294027329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203663.90217391305,
            "unit": "ns",
            "range": "± 13154.223404896593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194731.9712643678,
            "unit": "ns",
            "range": "± 10663.073171528644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171774.04761904763,
            "unit": "ns",
            "range": "± 3987.079312933096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3297456.3571428573,
            "unit": "ns",
            "range": "± 40496.46384297911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804075.3076923075,
            "unit": "ns",
            "range": "± 26214.428820736033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14334.561224489797,
            "unit": "ns",
            "range": "± 2339.8619433074878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59499.13043478261,
            "unit": "ns",
            "range": "± 4764.083626048835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57819.67032967033,
            "unit": "ns",
            "range": "± 5317.1263689556245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89294.28723404255,
            "unit": "ns",
            "range": "± 10486.843538988896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3210.574712643678,
            "unit": "ns",
            "range": "± 532.8536522366637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12283.395604395604,
            "unit": "ns",
            "range": "± 1557.963406210677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5596175.9,
            "unit": "ns",
            "range": "± 22104.047369526827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14266723.066666666,
            "unit": "ns",
            "range": "± 220683.9821931762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36859769.8,
            "unit": "ns",
            "range": "± 297688.20389513974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74464772.66666667,
            "unit": "ns",
            "range": "± 431542.198233046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149009315.2,
            "unit": "ns",
            "range": "± 635395.1177249813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935370.4943820224,
            "unit": "ns",
            "range": "± 60561.65687322369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895972.3472222222,
            "unit": "ns",
            "range": "± 93603.30057247358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1380708.3448275863,
            "unit": "ns",
            "range": "± 95706.66663577242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5860021.788732395,
            "unit": "ns",
            "range": "± 285314.31141962495"
          }
        ]
      }
    ]
  }
}