window.BENCHMARK_DATA = {
  "lastUpdate": 1707290285400,
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
          "id": "b601a8368715d02bd5b819a8dfa54b89e8488656",
          "message": "Merge tag '4.0.4' into merge/4.0.4-to-main\n\nLibplanet 4.0.4",
          "timestamp": "2024-02-07T16:06:28+09:00",
          "tree_id": "4063e79e09cf7026189cd482874f9a0e47716b23",
          "url": "https://github.com/greymistcube/libplanet/commit/b601a8368715d02bd5b819a8dfa54b89e8488656"
        },
        "date": 1707290278957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1104797.4368421054,
            "unit": "ns",
            "range": "± 101946.20126945665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2085560.4,
            "unit": "ns",
            "range": "± 92887.17154392478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1806332.816091954,
            "unit": "ns",
            "range": "± 98576.0911160002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13150581.385416666,
            "unit": "ns",
            "range": "± 1084917.9997121526"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44611.20212765958,
            "unit": "ns",
            "range": "± 6629.349986510845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251457.3679245283,
            "unit": "ns",
            "range": "± 9025.35942186011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241207.78205128206,
            "unit": "ns",
            "range": "± 8076.453585802171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187494.90526315788,
            "unit": "ns",
            "range": "± 10570.160888762939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3335662.847826087,
            "unit": "ns",
            "range": "± 57557.54017550903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2930908.5384615385,
            "unit": "ns",
            "range": "± 38686.46150704272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25992.81,
            "unit": "ns",
            "range": "± 3437.990935212899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107157.79591836735,
            "unit": "ns",
            "range": "± 9598.895995324428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97342.07692307692,
            "unit": "ns",
            "range": "± 1823.4891647186046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106673.72916666667,
            "unit": "ns",
            "range": "± 9934.174101744542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7434.9375,
            "unit": "ns",
            "range": "± 640.8937150162798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24617.010101010103,
            "unit": "ns",
            "range": "± 3156.282418285563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6034449.214285715,
            "unit": "ns",
            "range": "± 36199.560295732816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15191774.692307692,
            "unit": "ns",
            "range": "± 82862.24145369693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37674315.071428575,
            "unit": "ns",
            "range": "± 131774.51940017976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76251364.58333333,
            "unit": "ns",
            "range": "± 474485.94509052316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152045516.7857143,
            "unit": "ns",
            "range": "± 744505.9559972722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2501072.0454545454,
            "unit": "ns",
            "range": "± 137591.1921420785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2615740.533333333,
            "unit": "ns",
            "range": "± 95694.14875899722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3247488.566666667,
            "unit": "ns",
            "range": "± 38483.04432096717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3441484.7910447763,
            "unit": "ns",
            "range": "± 162986.34372115976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14156089.115384616,
            "unit": "ns",
            "range": "± 992413.222695743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3851930.8219866073,
            "unit": "ns",
            "range": "± 50387.270045055884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219574.9682992788,
            "unit": "ns",
            "range": "± 7457.122781415476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771561.1025390625,
            "unit": "ns",
            "range": "± 4197.159807670758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2040795.5673177084,
            "unit": "ns",
            "range": "± 60358.07714963333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618926.9640299479,
            "unit": "ns",
            "range": "± 1006.2193823912912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574616.0418619792,
            "unit": "ns",
            "range": "± 1896.6901776295224"
          }
        ]
      }
    ]
  }
}