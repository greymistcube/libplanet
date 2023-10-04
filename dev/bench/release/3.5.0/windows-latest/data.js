window.BENCHMARK_DATA = {
  "lastUpdate": 1696401918319,
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
          "id": "e141590210a6e5f95fa8f369d3ffea84eb95acf4",
          "message": "Release 3.5.0",
          "timestamp": "2023-10-04T15:29:44+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/greymistcube/libplanet/commit/e141590210a6e5f95fa8f369d3ffea84eb95acf4"
        },
        "date": 1696401886067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294760.2040816327,
            "unit": "ns",
            "range": "± 116702.31734710636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2384708,
            "unit": "ns",
            "range": "± 94790.99907756248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1898854,
            "unit": "ns",
            "range": "± 138171.1085443105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7914346.987951808,
            "unit": "ns",
            "range": "± 421198.48236395034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44645.78313253012,
            "unit": "ns",
            "range": "± 2394.5721754865644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7192035.714285715,
            "unit": "ns",
            "range": "± 63559.24682642847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18059660,
            "unit": "ns",
            "range": "± 141428.41601723063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46501928.571428575,
            "unit": "ns",
            "range": "± 227197.65514963947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92219686.66666667,
            "unit": "ns",
            "range": "± 376798.8111648418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186412940,
            "unit": "ns",
            "range": "± 1158512.7891272623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4322889.388020833,
            "unit": "ns",
            "range": "± 4464.180100581672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1401084.3489583333,
            "unit": "ns",
            "range": "± 1264.705583949697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1026924.3489583334,
            "unit": "ns",
            "range": "± 1474.63966136905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528416.9140625,
            "unit": "ns",
            "range": "± 1760.9172308576465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800724.1908482143,
            "unit": "ns",
            "range": "± 1164.6913700015111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733062.7790178572,
            "unit": "ns",
            "range": "± 580.5039063697286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3182278.5714285714,
            "unit": "ns",
            "range": "± 51167.61563831063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3112793.9393939395,
            "unit": "ns",
            "range": "± 98145.50085012156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3868153.3333333335,
            "unit": "ns",
            "range": "± 58580.88262841223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3699367.2131147543,
            "unit": "ns",
            "range": "± 165979.69827794348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9002586.486486487,
            "unit": "ns",
            "range": "± 269944.821689094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245300,
            "unit": "ns",
            "range": "± 7199.305522062527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234930.64516129033,
            "unit": "ns",
            "range": "± 10601.632857681618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204728.125,
            "unit": "ns",
            "range": "± 9477.114770070022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841653.846153846,
            "unit": "ns",
            "range": "± 10958.75718201471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3534646.6666666665,
            "unit": "ns",
            "range": "± 28717.810965786837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18730.434782608696,
            "unit": "ns",
            "range": "± 1557.8048185966074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80862.5,
            "unit": "ns",
            "range": "± 3988.1316003827947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64706.849315068495,
            "unit": "ns",
            "range": "± 2954.5317718494043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77846.31578947368,
            "unit": "ns",
            "range": "± 10763.984575507777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4545.360824742268,
            "unit": "ns",
            "range": "± 726.1514733162171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18823.40425531915,
            "unit": "ns",
            "range": "± 1582.6461801661799"
          }
        ]
      }
    ]
  }
}