window.BENCHMARK_DATA = {
  "lastUpdate": 1702617614282,
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
          "id": "ed514fd04c280163e3dd02cdfb78dc90105e5c95",
          "message": "Release 3.9.2",
          "timestamp": "2023-12-15T14:05:36+09:00",
          "tree_id": "1dc3d85314af7613e4e013cb5bf0ffe3c279cd5b",
          "url": "https://github.com/greymistcube/libplanet/commit/ed514fd04c280163e3dd02cdfb78dc90105e5c95"
        },
        "date": 1702617596744,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7732885.8125,
            "unit": "ns",
            "range": "± 143649.19984704346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19017462.0625,
            "unit": "ns",
            "range": "± 363895.8237870593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47891383.4375,
            "unit": "ns",
            "range": "± 903553.8250176333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96148973.86956522,
            "unit": "ns",
            "range": "± 2426847.006960515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202307792.76666668,
            "unit": "ns",
            "range": "± 3111274.8371250024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35621.08888888889,
            "unit": "ns",
            "range": "± 4678.054624591474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236548.55789473685,
            "unit": "ns",
            "range": "± 16285.064643432075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235287.82222222222,
            "unit": "ns",
            "range": "± 17697.204272050756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226649.47311827957,
            "unit": "ns",
            "range": "± 15153.708518401778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3850204.3666666667,
            "unit": "ns",
            "range": "± 51802.68612570293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525097.5454545454,
            "unit": "ns",
            "range": "± 84984.65966095476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17427.020408163266,
            "unit": "ns",
            "range": "± 4479.150244404662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76164.90217391304,
            "unit": "ns",
            "range": "± 15728.060628830595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78925.92105263157,
            "unit": "ns",
            "range": "± 15279.38510624966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82146.32417582418,
            "unit": "ns",
            "range": "± 15312.237369425518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4805.84693877551,
            "unit": "ns",
            "range": "± 1807.836163729291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19596.04081632653,
            "unit": "ns",
            "range": "± 3859.123663057516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048250.7835051547,
            "unit": "ns",
            "range": "± 91030.86288740515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2232888.0454545454,
            "unit": "ns",
            "range": "± 122610.15749112269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591723.7424242424,
            "unit": "ns",
            "range": "± 116228.26163597312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7086212.160919541,
            "unit": "ns",
            "range": "± 428070.3847512581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2999374.9583333335,
            "unit": "ns",
            "range": "± 114096.88009998968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3119887.1764705884,
            "unit": "ns",
            "range": "± 121399.93918313234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3656520.1666666665,
            "unit": "ns",
            "range": "± 62599.43088361411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3581670.123076923,
            "unit": "ns",
            "range": "± 165077.2489965406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14535920.36,
            "unit": "ns",
            "range": "± 2283497.3800641014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4813775.12890625,
            "unit": "ns",
            "range": "± 119673.01769029368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1444551.2451923077,
            "unit": "ns",
            "range": "± 38187.08128636567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 926631.9104817709,
            "unit": "ns",
            "range": "± 16684.117290595204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2219476.180013021,
            "unit": "ns",
            "range": "± 182122.70095343993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644768.4622896635,
            "unit": "ns",
            "range": "± 4972.37059714077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587564.3727620443,
            "unit": "ns",
            "range": "± 15258.2710905935"
          }
        ]
      }
    ]
  }
}