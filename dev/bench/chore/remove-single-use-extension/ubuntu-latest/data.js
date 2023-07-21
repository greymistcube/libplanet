window.BENCHMARK_DATA = {
  "lastUpdate": 1689903387581,
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
      },
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
          "id": "11fb62c7f7f55e8cefa32e2ae5b7fbe2ace6e968",
          "message": "Changelog",
          "timestamp": "2023-07-21T10:23:40+09:00",
          "tree_id": "8e3d883ff8074edfc138c9d935e9de390f595bd1",
          "url": "https://github.com/greymistcube/libplanet/commit/11fb62c7f7f55e8cefa32e2ae5b7fbe2ace6e968"
        },
        "date": 1689903378347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280865.34426229505,
            "unit": "ns",
            "range": "± 12053.585153921696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265706.5,
            "unit": "ns",
            "range": "± 6263.20899607952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233212.6923076923,
            "unit": "ns",
            "range": "± 2346.5720169577644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4160279.285714286,
            "unit": "ns",
            "range": "± 24076.744091881155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3810962.1428571427,
            "unit": "ns",
            "range": "± 26264.14331250042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17390.05319148936,
            "unit": "ns",
            "range": "± 1220.5347353316067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83095.10256410256,
            "unit": "ns",
            "range": "± 4210.9320268556385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69853.25,
            "unit": "ns",
            "range": "± 814.979210554701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79693.93827160494,
            "unit": "ns",
            "range": "± 4480.3066562057975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3949.185567010309,
            "unit": "ns",
            "range": "± 404.2399846702273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17048.56842105263,
            "unit": "ns",
            "range": "± 1337.1320106428452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380444.359375,
            "unit": "ns",
            "range": "± 63263.611190296855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2492030.96875,
            "unit": "ns",
            "range": "± 77512.30870725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1704662.388235294,
            "unit": "ns",
            "range": "± 91954.16472715583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4733636.96969697,
            "unit": "ns",
            "range": "± 148398.16535769674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6251804.674479167,
            "unit": "ns",
            "range": "± 28195.196801926922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876252.3799479166,
            "unit": "ns",
            "range": "± 3589.2708831598698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398530.078404018,
            "unit": "ns",
            "range": "± 1543.1758539974446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572516.7295673075,
            "unit": "ns",
            "range": "± 1252.554650282721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810735.1394981971,
            "unit": "ns",
            "range": "± 467.41820825496893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738626.1168870192,
            "unit": "ns",
            "range": "± 599.1215919259191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3251205.1333333333,
            "unit": "ns",
            "range": "± 53316.71872856536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424158.6428571427,
            "unit": "ns",
            "range": "± 123044.96932161486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269645.529411765,
            "unit": "ns",
            "range": "± 85386.2096821829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3717922.4,
            "unit": "ns",
            "range": "± 102362.91964567153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6293059.36,
            "unit": "ns",
            "range": "± 150603.7210363343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7596113.533333333,
            "unit": "ns",
            "range": "± 24913.78410171098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19212078.785714287,
            "unit": "ns",
            "range": "± 103559.74776106385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49273579.86666667,
            "unit": "ns",
            "range": "± 628958.6295385262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97419563.65384616,
            "unit": "ns",
            "range": "± 550350.1004687601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200294440.7142857,
            "unit": "ns",
            "range": "± 2457011.07732954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46175.30985915493,
            "unit": "ns",
            "range": "± 2266.8232875328877"
          }
        ]
      }
    ]
  }
}