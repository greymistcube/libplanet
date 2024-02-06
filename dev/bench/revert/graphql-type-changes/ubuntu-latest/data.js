window.BENCHMARK_DATA = {
  "lastUpdate": 1707207354073,
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
      }
    ]
  }
}