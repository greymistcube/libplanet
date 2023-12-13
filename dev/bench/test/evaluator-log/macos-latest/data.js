window.BENCHMARK_DATA = {
  "lastUpdate": 1702438693096,
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
          "id": "75829b976afeecadfb6476fd0014e92850b63fa7",
          "message": "More logging",
          "timestamp": "2023-12-13T12:22:26+09:00",
          "tree_id": "70f98720fd85a03c40578e4cd45ba6c0b468464c",
          "url": "https://github.com/greymistcube/libplanet/commit/75829b976afeecadfb6476fd0014e92850b63fa7"
        },
        "date": 1702438670755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8362132.333333333,
            "unit": "ns",
            "range": "± 151607.6119991844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20703706.0625,
            "unit": "ns",
            "range": "± 349910.0687071787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54101910.782608695,
            "unit": "ns",
            "range": "± 1970632.169080117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110173018.125,
            "unit": "ns",
            "range": "± 2819610.2202631673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209114131.8263158,
            "unit": "ns",
            "range": "± 15009939.578313695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51770.9375,
            "unit": "ns",
            "range": "± 14886.883704730077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254889.20212765958,
            "unit": "ns",
            "range": "± 33278.48400471772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245094.20618556702,
            "unit": "ns",
            "range": "± 38511.63559290073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253135.71875,
            "unit": "ns",
            "range": "± 37084.51406044055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937087.6836734693,
            "unit": "ns",
            "range": "± 231800.07052957825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3553625.85483871,
            "unit": "ns",
            "range": "± 161833.44133903325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22638.918367346938,
            "unit": "ns",
            "range": "± 9539.464913913302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75565.29591836735,
            "unit": "ns",
            "range": "± 16910.640553115787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83861.67708333333,
            "unit": "ns",
            "range": "± 20340.88750094759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87267.293814433,
            "unit": "ns",
            "range": "± 15866.734485327406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5525.489361702128,
            "unit": "ns",
            "range": "± 1109.835178547483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15191.69540229885,
            "unit": "ns",
            "range": "± 2576.1201078775757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1231750.9742268042,
            "unit": "ns",
            "range": "± 205008.67772065834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460391.8908045976,
            "unit": "ns",
            "range": "± 184656.46824541176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655681.6914893617,
            "unit": "ns",
            "range": "± 168944.2195611287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7381674.804347826,
            "unit": "ns",
            "range": "± 493112.02805004845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2905207.2564102565,
            "unit": "ns",
            "range": "± 139139.8647170029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3222820.8444444444,
            "unit": "ns",
            "range": "± 238980.20941798572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3955270.315217391,
            "unit": "ns",
            "range": "± 222628.70833206314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3438928.630769231,
            "unit": "ns",
            "range": "± 145771.94257036073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16085945.051020408,
            "unit": "ns",
            "range": "± 3042010.48692663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4631935.954589844,
            "unit": "ns",
            "range": "± 142748.90846407673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1374807.347935268,
            "unit": "ns",
            "range": "± 16436.385218846088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905017.017578125,
            "unit": "ns",
            "range": "± 12593.504700293037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2206275.447668331,
            "unit": "ns",
            "range": "± 144153.0297460407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 669690.1814313616,
            "unit": "ns",
            "range": "± 7994.075261627459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594815.3551432291,
            "unit": "ns",
            "range": "± 8649.15072222622"
          }
        ]
      }
    ]
  }
}