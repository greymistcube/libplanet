window.BENCHMARK_DATA = {
  "lastUpdate": 1689903232729,
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
          "id": "af86f2410462b8ca09b8023e578a566d3d066f6a",
          "message": "Removed KeyValuePairExtensions",
          "timestamp": "2023-07-20T20:05:07+09:00",
          "tree_id": "256acdd1ba23fd837a2a0a0fe8e2e6555f3c5e7c",
          "url": "https://github.com/greymistcube/libplanet/commit/af86f2410462b8ca09b8023e578a566d3d066f6a"
        },
        "date": 1689903225391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304637.3409090909,
            "unit": "ns",
            "range": "± 10472.475687277249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291071,
            "unit": "ns",
            "range": "± 4404.258450636156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278643.5,
            "unit": "ns",
            "range": "± 14507.013259851905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4734756.933333334,
            "unit": "ns",
            "range": "± 46421.551721258984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4294008.866666666,
            "unit": "ns",
            "range": "± 48579.19561009435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25119.9587628866,
            "unit": "ns",
            "range": "± 1972.773523058789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102543.22680412371,
            "unit": "ns",
            "range": "± 6837.802891684144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91774.3111111111,
            "unit": "ns",
            "range": "± 5880.06200694288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109635.5,
            "unit": "ns",
            "range": "± 13413.721313404578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7236.154639175258,
            "unit": "ns",
            "range": "± 1055.8823950079047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24870.432989690722,
            "unit": "ns",
            "range": "± 2344.3314474636495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585733.9368421054,
            "unit": "ns",
            "range": "± 96054.46459168865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2914317.923076923,
            "unit": "ns",
            "range": "± 100811.98769397277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1990203.6363636365,
            "unit": "ns",
            "range": "± 103714.91520832886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5461901.0625,
            "unit": "ns",
            "range": "± 211641.4715029457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199643.911979167,
            "unit": "ns",
            "range": "± 34705.70588653867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892436.3865885416,
            "unit": "ns",
            "range": "± 607.518669543245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407555.8748697916,
            "unit": "ns",
            "range": "± 3082.510773078239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669234.850060096,
            "unit": "ns",
            "range": "± 2069.250204297016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843052.9000418527,
            "unit": "ns",
            "range": "± 369.003149233787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765813.6829427084,
            "unit": "ns",
            "range": "± 332.2638666161161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3780320.2608695654,
            "unit": "ns",
            "range": "± 92025.77286391883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3953466.1481481483,
            "unit": "ns",
            "range": "± 97652.56245159071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4744109.769230769,
            "unit": "ns",
            "range": "± 46538.62287955716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4443302.117647059,
            "unit": "ns",
            "range": "± 86689.93101485485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6967864.25,
            "unit": "ns",
            "range": "± 158266.81936223863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8732326.8,
            "unit": "ns",
            "range": "± 144674.68316793666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22887250.133333333,
            "unit": "ns",
            "range": "± 296359.9584884346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58044076.07692308,
            "unit": "ns",
            "range": "± 161238.42230708202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114500671.66666667,
            "unit": "ns",
            "range": "± 559192.0007870625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231606834.46153846,
            "unit": "ns",
            "range": "± 928252.8633740391"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51658.347368421055,
            "unit": "ns",
            "range": "± 3584.411621999328"
          }
        ]
      }
    ]
  }
}