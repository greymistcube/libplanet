window.BENCHMARK_DATA = {
  "lastUpdate": 1684303266915,
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
          "id": "aef86503e565e1d28a3e2e8bf517c061cc31ebae",
          "message": "Require ActionEvaluator for Create",
          "timestamp": "2023-05-17T14:45:39+09:00",
          "tree_id": "62175bf7f8fa04bb04747b339acf8468137b30ac",
          "url": "https://github.com/greymistcube/libplanet/commit/aef86503e565e1d28a3e2e8bf517c061cc31ebae"
        },
        "date": 1684303245365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397340,
            "unit": "ns",
            "range": "± 105318.85784692985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642374.418604651,
            "unit": "ns",
            "range": "± 95829.90410350655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2240643,
            "unit": "ns",
            "range": "± 152381.5017373079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5328439.534883721,
            "unit": "ns",
            "range": "± 190771.43783862566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49158.333333333336,
            "unit": "ns",
            "range": "± 4120.415581152405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7343861.538461538,
            "unit": "ns",
            "range": "± 105634.23954430004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19767521.42857143,
            "unit": "ns",
            "range": "± 202373.8930356818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50675771.428571425,
            "unit": "ns",
            "range": "± 329657.0279001436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100718606.66666667,
            "unit": "ns",
            "range": "± 678462.6618494267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202010266.66666666,
            "unit": "ns",
            "range": "± 1691228.0528263084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841856.584821428,
            "unit": "ns",
            "range": "± 12531.454073165845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521021.1588541667,
            "unit": "ns",
            "range": "± 3823.2189442559597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183307.017299107,
            "unit": "ns",
            "range": "± 4146.877462113307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610515.3645833335,
            "unit": "ns",
            "range": "± 4850.926413657437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836188.2942708334,
            "unit": "ns",
            "range": "± 2712.7116762650467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754780.9375,
            "unit": "ns",
            "range": "± 2470.55248473222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271994.4444444445,
            "unit": "ns",
            "range": "± 66718.04784686623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423200,
            "unit": "ns",
            "range": "± 89893.2700484302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4228216.666666667,
            "unit": "ns",
            "range": "± 83154.3868886274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390775,
            "unit": "ns",
            "range": "± 79746.7951289162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6708830.303030303,
            "unit": "ns",
            "range": "± 198355.32745058878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270706.77966101695,
            "unit": "ns",
            "range": "± 11361.578696866754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257396.15384615384,
            "unit": "ns",
            "range": "± 6984.0664813119165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253658.06451612903,
            "unit": "ns",
            "range": "± 14256.488397588479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4048640,
            "unit": "ns",
            "range": "± 25514.50007908668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759660,
            "unit": "ns",
            "range": "± 47398.80649491986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21447.95918367347,
            "unit": "ns",
            "range": "± 2372.9675879738825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92097.82608695653,
            "unit": "ns",
            "range": "± 6307.678527713847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80656.12244897959,
            "unit": "ns",
            "range": "± 6154.355867984896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102929.89690721649,
            "unit": "ns",
            "range": "± 16523.500719609263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6247.959183673469,
            "unit": "ns",
            "range": "± 1218.4348242713952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21418.478260869564,
            "unit": "ns",
            "range": "± 2368.93490917708"
          }
        ]
      }
    ]
  }
}