window.BENCHMARK_DATA = {
  "lastUpdate": 1707207403365,
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
          "id": "40ab0cee84b3b942a8ca8b05d223d94cc787bbd3",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:01:43+09:00",
          "tree_id": "443a9a9a1176659d366f0d228e4fd11922a4db79",
          "url": "https://github.com/greymistcube/libplanet/commit/40ab0cee84b3b942a8ca8b05d223d94cc787bbd3"
        },
        "date": 1707207346976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984831.048192771,
            "unit": "ns",
            "range": "± 65166.84020676647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1930534.2931034483,
            "unit": "ns",
            "range": "± 83504.98028907768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663871.1597938144,
            "unit": "ns",
            "range": "± 162809.36125956525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12700373.855555555,
            "unit": "ns",
            "range": "± 1021952.8687231154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38836.27368421053,
            "unit": "ns",
            "range": "± 4532.20336120069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213556.9516129032,
            "unit": "ns",
            "range": "± 13778.61845358529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201692.5810810811,
            "unit": "ns",
            "range": "± 10103.569748587312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173476.85714285713,
            "unit": "ns",
            "range": "± 1504.5719865255244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3191597.4285714286,
            "unit": "ns",
            "range": "± 36703.772062417374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2895949.5,
            "unit": "ns",
            "range": "± 29399.20672885094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14882.70652173913,
            "unit": "ns",
            "range": "± 1974.586664429195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72599.45054945054,
            "unit": "ns",
            "range": "± 7580.210064904733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59291.94623655914,
            "unit": "ns",
            "range": "± 6690.387995451891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93134.5306122449,
            "unit": "ns",
            "range": "± 15922.578889710465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5359.757575757576,
            "unit": "ns",
            "range": "± 1770.6490283077346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18549.40404040404,
            "unit": "ns",
            "range": "± 4566.913497791483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5792817.078947368,
            "unit": "ns",
            "range": "± 124630.4295802932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14364453.538461538,
            "unit": "ns",
            "range": "± 213145.0625718767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37383871.083333336,
            "unit": "ns",
            "range": "± 261938.0547313562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75290648.2,
            "unit": "ns",
            "range": "± 426748.67083435156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150756202.26923078,
            "unit": "ns",
            "range": "± 1125969.143374287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453436.710526316,
            "unit": "ns",
            "range": "± 78225.31539359526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2622157.423076923,
            "unit": "ns",
            "range": "± 40653.02100595055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3252109.54,
            "unit": "ns",
            "range": "± 85599.3907836966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3321710.775280899,
            "unit": "ns",
            "range": "± 183811.39604625077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13899006.98901099,
            "unit": "ns",
            "range": "± 843257.865016594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715605.48828125,
            "unit": "ns",
            "range": "± 45110.634906792184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195863.7682291667,
            "unit": "ns",
            "range": "± 3948.842254202146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763100.3181152344,
            "unit": "ns",
            "range": "± 2267.8315708061864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926320.3602120536,
            "unit": "ns",
            "range": "± 3369.102200444707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622102.285531851,
            "unit": "ns",
            "range": "± 5058.520401911176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571109.6400669643,
            "unit": "ns",
            "range": "± 743.6212824865356"
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
          "id": "821612336001a189e8158560c8bd7ab6c30fdbf5",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:05:31+09:00",
          "tree_id": "3b657185cdafd5d397b3874c403f15af42c58d29",
          "url": "https://github.com/greymistcube/libplanet/commit/821612336001a189e8158560c8bd7ab6c30fdbf5"
        },
        "date": 1707207397005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200060.2808219178,
            "unit": "ns",
            "range": "± 9817.037883822433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192243.94936708861,
            "unit": "ns",
            "range": "± 8947.00497788654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174286.84615384616,
            "unit": "ns",
            "range": "± 4672.067499018461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214285.8571428573,
            "unit": "ns",
            "range": "± 47003.02186988725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766559.923076923,
            "unit": "ns",
            "range": "± 26257.47433418257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14784.144329896908,
            "unit": "ns",
            "range": "± 3133.5189550171685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60591.510416666664,
            "unit": "ns",
            "range": "± 4962.293966545781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60352.67816091954,
            "unit": "ns",
            "range": "± 4352.344261387624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62165.375,
            "unit": "ns",
            "range": "± 11999.838621063991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3395.9395604395604,
            "unit": "ns",
            "range": "± 707.6299128278097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13642.367346938776,
            "unit": "ns",
            "range": "± 3168.8602113256406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39190.34042553192,
            "unit": "ns",
            "range": "± 5355.1741727509425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380302.7358490564,
            "unit": "ns",
            "range": "± 98000.52146861867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2482352.0701754387,
            "unit": "ns",
            "range": "± 101004.35178122272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3202894.695652174,
            "unit": "ns",
            "range": "± 80663.32696767515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3183087.98989899,
            "unit": "ns",
            "range": "± 201323.15758189568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13789809.923913043,
            "unit": "ns",
            "range": "± 912817.7422387272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955171.7333333333,
            "unit": "ns",
            "range": "± 68504.51700399442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1885490.4927536233,
            "unit": "ns",
            "range": "± 90552.8905410637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610772.1129032257,
            "unit": "ns",
            "range": "± 184172.84156117614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12692722.849462366,
            "unit": "ns",
            "range": "± 1003654.788963067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5617770.285714285,
            "unit": "ns",
            "range": "± 29917.68857132097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14431856.07142857,
            "unit": "ns",
            "range": "± 103710.55447918076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36514378.92307692,
            "unit": "ns",
            "range": "± 321811.26192160667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74649740.28571428,
            "unit": "ns",
            "range": "± 278467.7616911816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148029362.42857143,
            "unit": "ns",
            "range": "± 749175.0589329484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3827404.087139423,
            "unit": "ns",
            "range": "± 7147.054579093645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210331.5130709135,
            "unit": "ns",
            "range": "± 2448.2410178966643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767736.2022298177,
            "unit": "ns",
            "range": "± 1268.6053706929033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971492.237079327,
            "unit": "ns",
            "range": "± 6179.91856104604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613491.6678385417,
            "unit": "ns",
            "range": "± 692.9332288825027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581080.4029947916,
            "unit": "ns",
            "range": "± 632.5743508216141"
          }
        ]
      }
    ]
  }
}