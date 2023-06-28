window.BENCHMARK_DATA = {
  "lastUpdate": 1687940959189,
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
          "id": "764c06906d561a03f2c1da52d32456d46cc6055f",
          "message": "Release 2.3.0",
          "timestamp": "2023-06-28T17:09:03+09:00",
          "tree_id": "e73d3fb6303de55230d2e5a46b9e5b507b528da9",
          "url": "https://github.com/greymistcube/libplanet/commit/764c06906d561a03f2c1da52d32456d46cc6055f"
        },
        "date": 1687940926526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700507.142857143,
            "unit": "ns",
            "range": "± 218416.56466863837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022502.1276595746,
            "unit": "ns",
            "range": "± 310620.7537876316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2477041.758241758,
            "unit": "ns",
            "range": "± 187501.94551046018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6515457.142857143,
            "unit": "ns",
            "range": "± 633785.9741513121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55236.95652173913,
            "unit": "ns",
            "range": "± 13334.889521384848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8273417.204301075,
            "unit": "ns",
            "range": "± 468849.98194556864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21382951.020408165,
            "unit": "ns",
            "range": "± 1398824.6115453243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57044768.817204304,
            "unit": "ns",
            "range": "± 3227894.675493964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112858347.6923077,
            "unit": "ns",
            "range": "± 5241388.874176973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238880615.2173913,
            "unit": "ns",
            "range": "± 9103830.385526191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5650095.416666667,
            "unit": "ns",
            "range": "± 91099.7748094104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1828278.2421875,
            "unit": "ns",
            "range": "± 19023.79583917302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400252.5,
            "unit": "ns",
            "range": "± 22557.91893077425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3011857.059151786,
            "unit": "ns",
            "range": "± 31949.506781677275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028937.7864583334,
            "unit": "ns",
            "range": "± 19121.831400826195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943088.623046875,
            "unit": "ns",
            "range": "± 6708.570397373079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3717160.4166666665,
            "unit": "ns",
            "range": "± 417159.81223385176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3812568.3673469387,
            "unit": "ns",
            "range": "± 314395.3606583477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4694792.708333333,
            "unit": "ns",
            "range": "± 372617.00309956813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4505962.244897959,
            "unit": "ns",
            "range": "± 396986.8429914404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8533257.142857144,
            "unit": "ns",
            "range": "± 846783.9732302375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303502.12765957444,
            "unit": "ns",
            "range": "± 40148.70471195857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307570.1030927835,
            "unit": "ns",
            "range": "± 60560.983666859254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253250.51546391752,
            "unit": "ns",
            "range": "± 43301.52307682947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4693353.0612244895,
            "unit": "ns",
            "range": "± 388653.01202154456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4119524.242424242,
            "unit": "ns",
            "range": "± 341733.09196067305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22384,
            "unit": "ns",
            "range": "± 9580.901878637564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97994.84536082474,
            "unit": "ns",
            "range": "± 19573.245829948275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90491.83673469388,
            "unit": "ns",
            "range": "± 20685.70736946483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111411.70212765958,
            "unit": "ns",
            "range": "± 24617.638821739787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5456.25,
            "unit": "ns",
            "range": "± 1017.40769657627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21536.73469387755,
            "unit": "ns",
            "range": "± 8651.874092376189"
          }
        ]
      }
    ]
  }
}