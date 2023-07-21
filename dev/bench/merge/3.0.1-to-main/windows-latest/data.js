window.BENCHMARK_DATA = {
  "lastUpdate": 1689919960444,
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
          "id": "6bbafd31a9daab47402fd5d80d24b95c9187d413",
          "message": "Merge tag '3.0.1' into merge/3.0.1-to-main\n\nLibplanet 3.0.1",
          "timestamp": "2023-07-21T14:53:07+09:00",
          "tree_id": "9d84defa3b64351c0e86182649cfc86d69ca680d",
          "url": "https://github.com/greymistcube/libplanet/commit/6bbafd31a9daab47402fd5d80d24b95c9187d413"
        },
        "date": 1689919937162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1696208.9473684211,
            "unit": "ns",
            "range": "± 120806.40614155206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3185553.3333333335,
            "unit": "ns",
            "range": "± 135008.47866239536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186887.5,
            "unit": "ns",
            "range": "± 170827.50872398188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5836262.5,
            "unit": "ns",
            "range": "± 228386.0371565764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64048.936170212764,
            "unit": "ns",
            "range": "± 5005.690196163559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9576546.666666666,
            "unit": "ns",
            "range": "± 162575.30064850682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25057306.666666668,
            "unit": "ns",
            "range": "± 296081.90581726027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62568623.07692308,
            "unit": "ns",
            "range": "± 275645.4732497469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126684773.33333333,
            "unit": "ns",
            "range": "± 2165364.7305664127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250706391.66666666,
            "unit": "ns",
            "range": "± 2545100.6897239517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6020820.479910715,
            "unit": "ns",
            "range": "± 21232.929020122643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907097.8365384615,
            "unit": "ns",
            "range": "± 5755.674142414905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1440458.2310267857,
            "unit": "ns",
            "range": "± 15639.43706447535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189603.683035714,
            "unit": "ns",
            "range": "± 28000.145443429286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035826.6659007353,
            "unit": "ns",
            "range": "± 20236.81039090187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937548.0747767857,
            "unit": "ns",
            "range": "± 7152.320335460164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4159330.769230769,
            "unit": "ns",
            "range": "± 60072.97485302611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4318456.578947368,
            "unit": "ns",
            "range": "± 219119.55417718203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5321865,
            "unit": "ns",
            "range": "± 122054.58345390091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4718350.980392157,
            "unit": "ns",
            "range": "± 176192.08197027358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7748756.097560976,
            "unit": "ns",
            "range": "± 250770.31826831153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329185.29411764705,
            "unit": "ns",
            "range": "± 9893.528106581693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321412.3287671233,
            "unit": "ns",
            "range": "± 15387.331957792418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309850,
            "unit": "ns",
            "range": "± 9800.471540912837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5533053.333333333,
            "unit": "ns",
            "range": "± 37109.75741281659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4623507.142857143,
            "unit": "ns",
            "range": "± 53557.840254693365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29647.916666666668,
            "unit": "ns",
            "range": "± 2617.0284139264213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124744.44444444444,
            "unit": "ns",
            "range": "± 12443.58881088294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112962.24489795919,
            "unit": "ns",
            "range": "± 9673.862279530562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128534.73684210527,
            "unit": "ns",
            "range": "± 15691.363449302178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8960,
            "unit": "ns",
            "range": "± 1136.8489485920693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28710.526315789473,
            "unit": "ns",
            "range": "± 2198.3298149649754"
          }
        ]
      }
    ]
  }
}