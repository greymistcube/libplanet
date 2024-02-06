window.BENCHMARK_DATA = {
  "lastUpdate": 1707209939000,
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
          "id": "56dd7505d467e709c43a9af85f1c983e9a5dc996",
          "message": "Changelog",
          "timestamp": "2024-02-06T17:12:33+09:00",
          "tree_id": "5b637c52617f362907427984fcbdbec649c027cd",
          "url": "https://github.com/greymistcube/libplanet/commit/56dd7505d467e709c43a9af85f1c983e9a5dc996"
        },
        "date": 1707207812137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196294,
            "unit": "ns",
            "range": "± 7444.945445122554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193684.98305084746,
            "unit": "ns",
            "range": "± 8586.961143042488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164165.77272727274,
            "unit": "ns",
            "range": "± 3209.5630756169344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3173630.714285714,
            "unit": "ns",
            "range": "± 43091.679772369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811432.705882353,
            "unit": "ns",
            "range": "± 57369.01373647266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16563.435294117648,
            "unit": "ns",
            "range": "± 880.8898429464165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64394.82105263158,
            "unit": "ns",
            "range": "± 5642.250682618553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51785.53125,
            "unit": "ns",
            "range": "± 1323.6111889966392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57232.69587628866,
            "unit": "ns",
            "range": "± 9408.353063500688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2998.2473118279568,
            "unit": "ns",
            "range": "± 487.77241342912964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13216.520408163266,
            "unit": "ns",
            "range": "± 2370.551304922535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40193.65979381443,
            "unit": "ns",
            "range": "± 4274.719744435978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2490836.527027027,
            "unit": "ns",
            "range": "± 84073.93800052376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2749748.888888889,
            "unit": "ns",
            "range": "± 77097.71833765118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3085040.966666667,
            "unit": "ns",
            "range": "± 51094.213756642974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3206435.15625,
            "unit": "ns",
            "range": "± 98399.0970339862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14010469.510638298,
            "unit": "ns",
            "range": "± 946829.783408219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955563.0430107526,
            "unit": "ns",
            "range": "± 68288.11381691578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867197.2954545454,
            "unit": "ns",
            "range": "± 68603.16040336102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1548799.7444444445,
            "unit": "ns",
            "range": "± 86150.70554355929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12692489.148936171,
            "unit": "ns",
            "range": "± 1057377.2686018825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5641360.5,
            "unit": "ns",
            "range": "± 50603.48119637924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14179023,
            "unit": "ns",
            "range": "± 250030.01847801273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36919305.84615385,
            "unit": "ns",
            "range": "± 209680.9150526287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74797951.14285715,
            "unit": "ns",
            "range": "± 940276.8025738982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152405007.46666667,
            "unit": "ns",
            "range": "± 1025355.5319337405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698777.3428485575,
            "unit": "ns",
            "range": "± 9503.876704919969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203146.041294643,
            "unit": "ns",
            "range": "± 2382.30857669791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754367.3305288461,
            "unit": "ns",
            "range": "± 1880.8547070942723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973601.4248046875,
            "unit": "ns",
            "range": "± 5591.398699688822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619924.8771033654,
            "unit": "ns",
            "range": "± 553.0870812585684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569088.40625,
            "unit": "ns",
            "range": "± 846.1525315102136"
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
          "id": "cd673e930e69d9bb5d8b30142309f290e377f707",
          "message": "Revert rest",
          "timestamp": "2024-02-06T17:47:51+09:00",
          "tree_id": "958311acadc0b8cce6ebec4f5fc0e200ae4f6e8a",
          "url": "https://github.com/greymistcube/libplanet/commit/cd673e930e69d9bb5d8b30142309f290e377f707"
        },
        "date": 1707209932272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202092.16666666666,
            "unit": "ns",
            "range": "± 8202.806506718702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197801.46,
            "unit": "ns",
            "range": "± 9652.729439568557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169356.0344827586,
            "unit": "ns",
            "range": "± 4895.26191830105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3242873.5,
            "unit": "ns",
            "range": "± 43350.53397550644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2874232.933333333,
            "unit": "ns",
            "range": "± 51146.508836962894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16547.061224489797,
            "unit": "ns",
            "range": "± 1759.271198778657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68804.27319587629,
            "unit": "ns",
            "range": "± 8563.194332560175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52372.57777777778,
            "unit": "ns",
            "range": "± 1768.651354318118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57613.48936170213,
            "unit": "ns",
            "range": "± 8091.317685456577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3474.022988505747,
            "unit": "ns",
            "range": "± 768.5380712152418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14389.979591836734,
            "unit": "ns",
            "range": "± 2544.2208131313937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43501.117021276594,
            "unit": "ns",
            "range": "± 5268.696088220474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398671.714285714,
            "unit": "ns",
            "range": "± 65254.70230898201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2460660.5454545454,
            "unit": "ns",
            "range": "± 56473.44384223966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3190811.5833333335,
            "unit": "ns",
            "range": "± 71909.98655802518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3237452.591954023,
            "unit": "ns",
            "range": "± 176231.9622082843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13824490.577777777,
            "unit": "ns",
            "range": "± 803060.1437614931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991121.2826086957,
            "unit": "ns",
            "range": "± 83436.74296423425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887593.4811320754,
            "unit": "ns",
            "range": "± 75846.78802120926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1621541.0210526315,
            "unit": "ns",
            "range": "± 156292.15263130525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12817485.4375,
            "unit": "ns",
            "range": "± 1005268.0768058747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5626083.133333334,
            "unit": "ns",
            "range": "± 22546.260566940608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14207698,
            "unit": "ns",
            "range": "± 159261.75248784624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36815537.78571428,
            "unit": "ns",
            "range": "± 265839.56695437385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74895058.92857143,
            "unit": "ns",
            "range": "± 275355.29603166674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149071653,
            "unit": "ns",
            "range": "± 536609.098296804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742461.3125,
            "unit": "ns",
            "range": "± 45765.70672783261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194787.8009314905,
            "unit": "ns",
            "range": "± 2922.1682206452683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766282.4347956731,
            "unit": "ns",
            "range": "± 2954.7750705019675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929870.7486478365,
            "unit": "ns",
            "range": "± 2128.2481493169253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618938.9466145834,
            "unit": "ns",
            "range": "± 700.8227091834282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567430.9084635417,
            "unit": "ns",
            "range": "± 1025.9126104208456"
          }
        ]
      }
    ]
  }
}