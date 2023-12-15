window.BENCHMARK_DATA = {
  "lastUpdate": 1702618319950,
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
          "id": "9860c2020284ee06366fe4a6297f552a05539fe0",
          "message": "Prepare 3.9.3",
          "timestamp": "2023-12-15T14:17:36+09:00",
          "tree_id": "10171e9d05502bea7fd706aa57892745ff0e2867",
          "url": "https://github.com/greymistcube/libplanet/commit/9860c2020284ee06366fe4a6297f552a05539fe0"
        },
        "date": 1702618284877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988182.4742268041,
            "unit": "ns",
            "range": "± 141588.37788514906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749324.4680851065,
            "unit": "ns",
            "range": "± 117395.40912253494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1324011,
            "unit": "ns",
            "range": "± 131931.61443671788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5168623.9130434785,
            "unit": "ns",
            "range": "± 197568.07230227438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34853.333333333336,
            "unit": "ns",
            "range": "± 2164.5353966027137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5256142.857142857,
            "unit": "ns",
            "range": "± 75833.46850207332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13129764.285714285,
            "unit": "ns",
            "range": "± 146356.89049581642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34204933.333333336,
            "unit": "ns",
            "range": "± 489154.7325549988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64829550,
            "unit": "ns",
            "range": "± 561961.4806810435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132322486.66666667,
            "unit": "ns",
            "range": "± 1176971.3091943518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254492.097355769,
            "unit": "ns",
            "range": "± 10358.731224686386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051460.2213541667,
            "unit": "ns",
            "range": "± 3793.5449676640173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727573.0208333334,
            "unit": "ns",
            "range": "± 4528.877484685322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918105.4966517857,
            "unit": "ns",
            "range": "± 9200.871923477056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615827.1158854166,
            "unit": "ns",
            "range": "± 1050.5897346585314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577749.6544471154,
            "unit": "ns",
            "range": "± 551.4745058399055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195119.0476190476,
            "unit": "ns",
            "range": "± 51843.047933619986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258360.465116279,
            "unit": "ns",
            "range": "± 82887.35367822113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775933.3333333335,
            "unit": "ns",
            "range": "± 71756.67620305545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2584644.6153846155,
            "unit": "ns",
            "range": "± 119633.2468823587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6097035.714285715,
            "unit": "ns",
            "range": "± 169892.25063373792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174540,
            "unit": "ns",
            "range": "± 7418.435494441209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171617.02127659574,
            "unit": "ns",
            "range": "± 6661.744096899921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140635.10638297873,
            "unit": "ns",
            "range": "± 5053.538524526297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714400,
            "unit": "ns",
            "range": "± 26101.947564629474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2563385.714285714,
            "unit": "ns",
            "range": "± 21900.706245825364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9918.08510638298,
            "unit": "ns",
            "range": "± 1089.8320642020456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51792.47311827957,
            "unit": "ns",
            "range": "± 3438.377921382083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44085.5421686747,
            "unit": "ns",
            "range": "± 2263.9342256519217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52354.545454545456,
            "unit": "ns",
            "range": "± 12481.318879219036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2744.0860215053763,
            "unit": "ns",
            "range": "± 535.1680690073789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11019.58762886598,
            "unit": "ns",
            "range": "± 2339.766689546637"
          }
        ]
      }
    ]
  }
}