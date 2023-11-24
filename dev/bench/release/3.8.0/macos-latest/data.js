window.BENCHMARK_DATA = {
  "lastUpdate": 1700793154985,
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
          "id": "afa6f76ff7291e0356f53b26bf9498d4b0746495",
          "message": "Release 3.8.0",
          "timestamp": "2023-11-24T11:20:03+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/greymistcube/libplanet/commit/afa6f76ff7291e0356f53b26bf9498d4b0746495"
        },
        "date": 1700793137850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8072194.357142857,
            "unit": "ns",
            "range": "± 27373.707468206514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18464645.884615384,
            "unit": "ns",
            "range": "± 146699.10049743459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45321681.73076923,
            "unit": "ns",
            "range": "± 382649.7956507042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90487770.23333333,
            "unit": "ns",
            "range": "± 1288810.890221152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186538408.66666666,
            "unit": "ns",
            "range": "± 4293515.428584103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34100.04705882353,
            "unit": "ns",
            "range": "± 3399.0869779211876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222958.72916666666,
            "unit": "ns",
            "range": "± 20418.757902054647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213727.51086956522,
            "unit": "ns",
            "range": "± 20515.58317688758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205189.76041666666,
            "unit": "ns",
            "range": "± 25162.849672000182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3662327.0625,
            "unit": "ns",
            "range": "± 58276.671122006446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3438911.9444444445,
            "unit": "ns",
            "range": "± 71194.85755344662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12247.280898876405,
            "unit": "ns",
            "range": "± 776.4158326561759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58839.936170212764,
            "unit": "ns",
            "range": "± 6746.799093793366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50566.08860759494,
            "unit": "ns",
            "range": "± 2625.6610458978657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60473.583333333336,
            "unit": "ns",
            "range": "± 11696.75391017045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3220.1744186046512,
            "unit": "ns",
            "range": "± 433.83760696860554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11934.032967032967,
            "unit": "ns",
            "range": "± 990.9132090097436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027718.9489795918,
            "unit": "ns",
            "range": "± 94442.43824978462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2144871.7551020407,
            "unit": "ns",
            "range": "± 84322.08815595378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513555.35,
            "unit": "ns",
            "range": "± 126373.41731945636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6582138.135416667,
            "unit": "ns",
            "range": "± 461325.2074357232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2861145.3278688523,
            "unit": "ns",
            "range": "± 125663.5969553529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3165256.6470588236,
            "unit": "ns",
            "range": "± 61316.61626135812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3591812.1866666665,
            "unit": "ns",
            "range": "± 180476.70110628664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3345889.302325581,
            "unit": "ns",
            "range": "± 123230.35255985221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12057854.135416666,
            "unit": "ns",
            "range": "± 1991199.0733151436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4243913.8046875,
            "unit": "ns",
            "range": "± 79816.62242279114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1384871.1309956396,
            "unit": "ns",
            "range": "± 50758.3789303245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896203.9440354567,
            "unit": "ns",
            "range": "± 10023.67674455609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2051828.1164607557,
            "unit": "ns",
            "range": "± 69342.07556396454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632840.0557291667,
            "unit": "ns",
            "range": "± 4808.291637738228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568697.9008091518,
            "unit": "ns",
            "range": "± 2950.2226558860825"
          }
        ]
      }
    ]
  }
}