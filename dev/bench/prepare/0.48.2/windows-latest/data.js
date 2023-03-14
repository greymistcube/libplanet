window.BENCHMARK_DATA = {
  "lastUpdate": 1678784339504,
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
          "id": "eee8f0fcf937af35f9ce1470fba2c1bef7a1b4d9",
          "message": "Prepare 0.48.2",
          "timestamp": "2023-03-14T17:38:33+09:00",
          "tree_id": "2707579eaddea6b47f6fd7f83e96f64d1a52c34d",
          "url": "https://github.com/greymistcube/libplanet/commit/eee8f0fcf937af35f9ce1470fba2c1bef7a1b4d9"
        },
        "date": 1678784317472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128865.9574468085,
            "unit": "ns",
            "range": "± 14644.412881482514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5793250.334821428,
            "unit": "ns",
            "range": "± 81586.29885686887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1786862.7872242648,
            "unit": "ns",
            "range": "± 33545.20854221278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314231.4713541667,
            "unit": "ns",
            "range": "± 17378.013527007868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2955715.7180059524,
            "unit": "ns",
            "range": "± 69890.46207050954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972722.1809895834,
            "unit": "ns",
            "range": "± 18157.4135087492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908664.1471354166,
            "unit": "ns",
            "range": "± 12675.066629325847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5580397.985839844,
            "unit": "ns",
            "range": "± 256886.13315118145"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6191846.875,
            "unit": "ns",
            "range": "± 639345.2700270184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30726379.3814433,
            "unit": "ns",
            "range": "± 2463077.2907896703"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7199563.888888889,
            "unit": "ns",
            "range": "± 355928.86585785745"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35828988.65979382,
            "unit": "ns",
            "range": "± 2355628.983983378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103009.793814433,
            "unit": "ns",
            "range": "± 12188.396631921883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212497.7011494253,
            "unit": "ns",
            "range": "± 12766.206999945747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185455.31914893616,
            "unit": "ns",
            "range": "± 16851.174088965392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4026498.8372093025,
            "unit": "ns",
            "range": "± 218677.34140895994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10245703.296703296,
            "unit": "ns",
            "range": "± 573780.9383477577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23896,
            "unit": "ns",
            "range": "± 6496.882235955858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56402.083333333336,
            "unit": "ns",
            "range": "± 10234.029706576373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50468.36734693877,
            "unit": "ns",
            "range": "± 10033.383421058637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119567.70833333333,
            "unit": "ns",
            "range": "± 21190.293183891965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12355,
            "unit": "ns",
            "range": "± 5915.642250197626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23218.18181818182,
            "unit": "ns",
            "range": "± 6729.65359263082"
          }
        ]
      }
    ]
  }
}