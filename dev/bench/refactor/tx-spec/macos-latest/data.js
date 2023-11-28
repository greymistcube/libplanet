window.BENCHMARK_DATA = {
  "lastUpdate": 1701155028262,
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
          "id": "7c4d1cff60e49dcfaf20f5cde3ca660998a9fede",
          "message": "Update TxInvoice specification",
          "timestamp": "2023-11-28T15:43:22+09:00",
          "tree_id": "135093997f2cdf1d6426d6599a5f96dca0a7c2e9",
          "url": "https://github.com/greymistcube/libplanet/commit/7c4d1cff60e49dcfaf20f5cde3ca660998a9fede"
        },
        "date": 1701155014399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8794093.59375,
            "unit": "ns",
            "range": "± 270249.5249581763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21734994.282352943,
            "unit": "ns",
            "range": "± 1168023.8838379425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55017594.872340426,
            "unit": "ns",
            "range": "± 3566279.646045635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106210401.89285715,
            "unit": "ns",
            "range": "± 2955949.5463830275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221781649.5,
            "unit": "ns",
            "range": "± 5486868.1449628025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74281.37096774194,
            "unit": "ns",
            "range": "± 10234.594546275292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334856.8510638298,
            "unit": "ns",
            "range": "± 37908.01973196549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332297.7842105263,
            "unit": "ns",
            "range": "± 51176.16688431791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319393.56666666665,
            "unit": "ns",
            "range": "± 33355.731517009655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256522.9655172415,
            "unit": "ns",
            "range": "± 233046.7478850566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970696.0215053763,
            "unit": "ns",
            "range": "± 267045.53789088916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18736.706521739132,
            "unit": "ns",
            "range": "± 2406.522430734301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96212.59183673469,
            "unit": "ns",
            "range": "± 18434.982973094473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98689.62631578947,
            "unit": "ns",
            "range": "± 15260.254387217732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120724.21875,
            "unit": "ns",
            "range": "± 22659.89611241254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8133.344444444445,
            "unit": "ns",
            "range": "± 1702.6981045038924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22933.82967032967,
            "unit": "ns",
            "range": "± 4074.154123673186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506960.744680851,
            "unit": "ns",
            "range": "± 177177.0045379828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806801.316666667,
            "unit": "ns",
            "range": "± 123858.47247242759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393569.34,
            "unit": "ns",
            "range": "± 342436.4026020669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8754997.822580645,
            "unit": "ns",
            "range": "± 263870.9864733632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316678.1276595746,
            "unit": "ns",
            "range": "± 200671.75280531304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579775.6052631577,
            "unit": "ns",
            "range": "± 304825.09426308627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4559509.659793815,
            "unit": "ns",
            "range": "± 267604.6325717322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4299218.603092783,
            "unit": "ns",
            "range": "± 318574.45595468354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19767788.783505153,
            "unit": "ns",
            "range": "± 4295048.762435972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6295795.674252718,
            "unit": "ns",
            "range": "± 242246.98117757528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2146598.2880284926,
            "unit": "ns",
            "range": "± 68045.22802907677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187396.009375,
            "unit": "ns",
            "range": "± 27183.983588666615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197671.2675978537,
            "unit": "ns",
            "range": "± 193476.75039002165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 917655.7877929688,
            "unit": "ns",
            "range": "± 20687.786763104363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784223.5466657366,
            "unit": "ns",
            "range": "± 22067.57949726606"
          }
        ]
      }
    ]
  }
}