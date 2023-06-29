window.BENCHMARK_DATA = {
  "lastUpdate": 1688029099832,
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
          "id": "e2dadf94467a6098b1c7b90c6b50bbdf80e5a1d9",
          "message": "Prepare 2.4.0",
          "timestamp": "2023-06-29T17:41:58+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/greymistcube/libplanet/commit/e2dadf94467a6098b1c7b90c6b50bbdf80e5a1d9"
        },
        "date": 1688029080552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9273879.007042253,
            "unit": "ns",
            "range": "± 437473.76643029775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22672221.61235955,
            "unit": "ns",
            "range": "± 1165078.4435369815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55566426.571428575,
            "unit": "ns",
            "range": "± 2216941.1074839793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105797365.26666667,
            "unit": "ns",
            "range": "± 4661108.736816312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210971731.38235295,
            "unit": "ns",
            "range": "± 6545887.231929703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69708.88202247191,
            "unit": "ns",
            "range": "± 9381.199797885927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336537.6685393258,
            "unit": "ns",
            "range": "± 34126.22293087956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318743.45263157896,
            "unit": "ns",
            "range": "± 25024.466893706678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313003.5,
            "unit": "ns",
            "range": "± 14173.22984321233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4297759.192307692,
            "unit": "ns",
            "range": "± 58828.66993423163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3694184.595238095,
            "unit": "ns",
            "range": "± 86169.93368101474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21168.591836734693,
            "unit": "ns",
            "range": "± 3407.5428666982725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107133.92708333333,
            "unit": "ns",
            "range": "± 15911.894075779846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107073.05208333333,
            "unit": "ns",
            "range": "± 9043.81176725109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113772.37912087912,
            "unit": "ns",
            "range": "± 10137.114874268455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7059.84375,
            "unit": "ns",
            "range": "± 840.023124094306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20357.123711340206,
            "unit": "ns",
            "range": "± 4077.615876285564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1620358.0206185568,
            "unit": "ns",
            "range": "± 159530.73344558745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3010182.789473684,
            "unit": "ns",
            "range": "± 204209.11915567872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2524520.2555555557,
            "unit": "ns",
            "range": "± 230304.74688588144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6469808.4772727275,
            "unit": "ns",
            "range": "± 353507.6650794584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3238682.785714286,
            "unit": "ns",
            "range": "± 44953.82265627794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532014.375,
            "unit": "ns",
            "range": "± 151272.91434785404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4451777.514285714,
            "unit": "ns",
            "range": "± 143336.98575700622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323073.579545454,
            "unit": "ns",
            "range": "± 250443.82860028837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7598545.396825396,
            "unit": "ns",
            "range": "± 312301.0968871041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6920166.681303879,
            "unit": "ns",
            "range": "± 302782.5176541649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960839.3546316964,
            "unit": "ns",
            "range": "± 30064.344446347666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301001.0110212055,
            "unit": "ns",
            "range": "± 11916.276695061035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644853.9039884866,
            "unit": "ns",
            "range": "± 87320.03349753801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787525.3614783654,
            "unit": "ns",
            "range": "± 7699.627420254034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822306.3283854167,
            "unit": "ns",
            "range": "± 10864.836214143064"
          }
        ]
      }
    ]
  }
}