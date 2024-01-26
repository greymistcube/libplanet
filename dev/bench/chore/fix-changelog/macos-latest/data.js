window.BENCHMARK_DATA = {
  "lastUpdate": 1706252921719,
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
          "id": "db7cb09ecce1660e1709f3dfb4d7ca72e1d69fd1",
          "message": "Changelog",
          "timestamp": "2024-01-26T15:50:37+09:00",
          "tree_id": "f4c0a18daa555aea8fd3e2452632ee0bd7a5d7b3",
          "url": "https://github.com/greymistcube/libplanet/commit/db7cb09ecce1660e1709f3dfb4d7ca72e1d69fd1"
        },
        "date": 1706252905290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8009907.580645162,
            "unit": "ns",
            "range": "± 241726.25595850832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19977863.967741936,
            "unit": "ns",
            "range": "± 604542.167761714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52231934.74210526,
            "unit": "ns",
            "range": "± 2963594.7815540214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101179848.6891892,
            "unit": "ns",
            "range": "± 3431232.3505132142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212529328.2,
            "unit": "ns",
            "range": "± 2880295.151698103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47374.52127659575,
            "unit": "ns",
            "range": "± 11794.745937979247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253228.38461538462,
            "unit": "ns",
            "range": "± 29919.187468085216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240066.24175824175,
            "unit": "ns",
            "range": "± 26678.788016924882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236405.38383838383,
            "unit": "ns",
            "range": "± 35664.194203970335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069650.125,
            "unit": "ns",
            "range": "± 125825.61114949993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3576637.375,
            "unit": "ns",
            "range": "± 90778.91114959154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15701.554347826086,
            "unit": "ns",
            "range": "± 2780.216097080298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70774.39361702128,
            "unit": "ns",
            "range": "± 13358.318816432859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64375.95789473684,
            "unit": "ns",
            "range": "± 10791.727515285294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74124.52105263158,
            "unit": "ns",
            "range": "± 13467.176246047471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4925.09793814433,
            "unit": "ns",
            "range": "± 1090.717774562102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13938.84375,
            "unit": "ns",
            "range": "± 2471.1372848532933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316420.9574468085,
            "unit": "ns",
            "range": "± 274371.46122465417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894741.1021505375,
            "unit": "ns",
            "range": "± 546609.815385136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2494651.415789474,
            "unit": "ns",
            "range": "± 564406.5856054681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 26674540.086956523,
            "unit": "ns",
            "range": "± 5831672.827740727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3141091.0274725277,
            "unit": "ns",
            "range": "± 273377.19838800427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3216630.0918367347,
            "unit": "ns",
            "range": "± 380329.79996519285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3718131.619047619,
            "unit": "ns",
            "range": "± 134596.34834411685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4091414.7731958763,
            "unit": "ns",
            "range": "± 382598.50582100917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24241760.244897958,
            "unit": "ns",
            "range": "± 3719413.672913033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4502320.721540178,
            "unit": "ns",
            "range": "± 39350.248765357785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1375220.1128305288,
            "unit": "ns",
            "range": "± 6234.604262494687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 895921.1978290265,
            "unit": "ns",
            "range": "± 7088.557785985925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2097512.0920758927,
            "unit": "ns",
            "range": "± 18321.453669628077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656573.8943219866,
            "unit": "ns",
            "range": "± 10443.141467304531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575539.0415736607,
            "unit": "ns",
            "range": "± 6094.625011677162"
          }
        ]
      }
    ]
  }
}