window.BENCHMARK_DATA = {
  "lastUpdate": 1707207560989,
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
          "id": "821612336001a189e8158560c8bd7ab6c30fdbf5",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:05:31+09:00",
          "tree_id": "3b657185cdafd5d397b3874c403f15af42c58d29",
          "url": "https://github.com/greymistcube/libplanet/commit/821612336001a189e8158560c8bd7ab6c30fdbf5"
        },
        "date": 1707207437912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973038.8888888889,
            "unit": "ns",
            "range": "± 102395.17874580565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723776.2711864407,
            "unit": "ns",
            "range": "± 71976.33312890989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1472005,
            "unit": "ns",
            "range": "± 118268.58696042733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10932028.260869564,
            "unit": "ns",
            "range": "± 857267.0571790419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34667.24137931035,
            "unit": "ns",
            "range": "± 1534.445203017928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5308246.153846154,
            "unit": "ns",
            "range": "± 42450.66971172963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13254107.142857144,
            "unit": "ns",
            "range": "± 194580.15340445467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33345721.42857143,
            "unit": "ns",
            "range": "± 317258.2669798109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66995971.428571425,
            "unit": "ns",
            "range": "± 739836.2411616937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130611840,
            "unit": "ns",
            "range": "± 1353306.0644214966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364241.7217548075,
            "unit": "ns",
            "range": "± 9054.405301317694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076559.8958333333,
            "unit": "ns",
            "range": "± 3138.823315074397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745839.0764508928,
            "unit": "ns",
            "range": "± 2556.424671396867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945234.654017857,
            "unit": "ns",
            "range": "± 3606.474017301677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616232.421875,
            "unit": "ns",
            "range": "± 1987.5445681568453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576062.12890625,
            "unit": "ns",
            "range": "± 820.898521477533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158919.565217391,
            "unit": "ns",
            "range": "± 73115.64240469482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259867.5675675673,
            "unit": "ns",
            "range": "± 48406.36467595085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2836348.6486486485,
            "unit": "ns",
            "range": "± 95615.45848292994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2807115.8536585364,
            "unit": "ns",
            "range": "± 148457.24784232187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12360877.528089888,
            "unit": "ns",
            "range": "± 1478044.753732014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174047.61904761905,
            "unit": "ns",
            "range": "± 7088.037563225512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165647.61904761905,
            "unit": "ns",
            "range": "± 7939.2493983847935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142925.67567567568,
            "unit": "ns",
            "range": "± 4814.41154852372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2810280.769230769,
            "unit": "ns",
            "range": "± 44402.20311004445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485246.6666666665,
            "unit": "ns",
            "range": "± 38083.32718557833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11375.78947368421,
            "unit": "ns",
            "range": "± 1758.7904323694738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56366.31578947369,
            "unit": "ns",
            "range": "± 6456.7070608344075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45157.97101449275,
            "unit": "ns",
            "range": "± 2186.2811425893065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62962.886597938144,
            "unit": "ns",
            "range": "± 13770.78217026019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2939.5833333333335,
            "unit": "ns",
            "range": "± 746.1450637378438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11338.297872340425,
            "unit": "ns",
            "range": "± 1662.172848107161"
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
          "id": "40ab0cee84b3b942a8ca8b05d223d94cc787bbd3",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:01:43+09:00",
          "tree_id": "443a9a9a1176659d366f0d228e4fd11922a4db79",
          "url": "https://github.com/greymistcube/libplanet/commit/40ab0cee84b3b942a8ca8b05d223d94cc787bbd3"
        },
        "date": 1707207538073,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963963.0434782609,
            "unit": "ns",
            "range": "± 104834.04123482249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1742666.6666666667,
            "unit": "ns",
            "range": "± 89822.10508984169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1527592.7835051545,
            "unit": "ns",
            "range": "± 144637.56589563118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10848335.164835164,
            "unit": "ns",
            "range": "± 887515.1658639889"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34500,
            "unit": "ns",
            "range": "± 1812.6539343499314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5195806.666666667,
            "unit": "ns",
            "range": "± 49091.49572360728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13256135.714285715,
            "unit": "ns",
            "range": "± 108686.04472829674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32929785.714285713,
            "unit": "ns",
            "range": "± 223459.85306999987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65862493.333333336,
            "unit": "ns",
            "range": "± 467609.4470307256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138610913.33333334,
            "unit": "ns",
            "range": "± 900047.764499725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3365120.089285714,
            "unit": "ns",
            "range": "± 4321.016648136886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080281.4603365385,
            "unit": "ns",
            "range": "± 1550.681769162607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740482.568359375,
            "unit": "ns",
            "range": "± 2732.176439690832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926912.806919643,
            "unit": "ns",
            "range": "± 1960.438317725353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625033.37890625,
            "unit": "ns",
            "range": "± 1696.2450203168385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561288.8392857143,
            "unit": "ns",
            "range": "± 747.7402908276935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097385.714285714,
            "unit": "ns",
            "range": "± 26902.984025021266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249312,
            "unit": "ns",
            "range": "± 53704.30088301433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2830550,
            "unit": "ns",
            "range": "± 72859.34633131213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2882424.1379310344,
            "unit": "ns",
            "range": "± 75380.02603556961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12494007.954545455,
            "unit": "ns",
            "range": "± 1455865.986413505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174442.85714285713,
            "unit": "ns",
            "range": "± 7628.9602959176145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169232.87671232875,
            "unit": "ns",
            "range": "± 8168.776169634534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143410.86956521738,
            "unit": "ns",
            "range": "± 5416.281145700928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2820561.5384615385,
            "unit": "ns",
            "range": "± 36152.72093175327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2453093.3333333335,
            "unit": "ns",
            "range": "± 28237.904279447474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11197.802197802197,
            "unit": "ns",
            "range": "± 1364.7936776897022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54754.945054945056,
            "unit": "ns",
            "range": "± 5232.74441986365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44340.57971014493,
            "unit": "ns",
            "range": "± 2150.6031192763326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55306.976744186046,
            "unit": "ns",
            "range": "± 7119.480990628697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2625.773195876289,
            "unit": "ns",
            "range": "± 464.6410690243114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10381.318681318682,
            "unit": "ns",
            "range": "± 976.0364392004687"
          }
        ]
      }
    ]
  }
}