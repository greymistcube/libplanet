window.BENCHMARK_DATA = {
  "lastUpdate": 1693298994664,
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
          "id": "5d14d199aa77b76bae7c611bf121ea9de702df23",
          "message": "Remove Set() from IRecordableTrie",
          "timestamp": "2023-08-29T17:23:26+09:00",
          "tree_id": "6eb0630752eb3a2d5f6adff105778ceb565a0fc7",
          "url": "https://github.com/greymistcube/libplanet/commit/5d14d199aa77b76bae7c611bf121ea9de702df23"
        },
        "date": 1693298974580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583241.548192771,
            "unit": "ns",
            "range": "± 671911.5674116156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26776056.036842104,
            "unit": "ns",
            "range": "± 8317968.046882016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66461986.030612245,
            "unit": "ns",
            "range": "± 16708044.807996891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149684271.2020202,
            "unit": "ns",
            "range": "± 30638678.797562517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258576081.6736842,
            "unit": "ns",
            "range": "± 59837933.50846168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77071.70689655172,
            "unit": "ns",
            "range": "± 8829.495862689679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314024.97191011236,
            "unit": "ns",
            "range": "± 23333.852742260486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320274.1808510638,
            "unit": "ns",
            "range": "± 30937.421795869534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312257.48863636365,
            "unit": "ns",
            "range": "± 19571.420250177674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174988.125,
            "unit": "ns",
            "range": "± 122112.36221103113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3679051.772727273,
            "unit": "ns",
            "range": "± 89496.33293361765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18414.55319148936,
            "unit": "ns",
            "range": "± 2459.6534838430193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86574.35567010309,
            "unit": "ns",
            "range": "± 11888.98798345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96504.66842105263,
            "unit": "ns",
            "range": "± 15666.480528234326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113173.21134020618,
            "unit": "ns",
            "range": "± 19341.884680100527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8799.20618556701,
            "unit": "ns",
            "range": "± 1258.2500822748527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28187.455555555556,
            "unit": "ns",
            "range": "± 3398.454698106354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612405.4655172413,
            "unit": "ns",
            "range": "± 204743.63616946468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3220324.0274725277,
            "unit": "ns",
            "range": "± 397360.30443309643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2478983.88172043,
            "unit": "ns",
            "range": "± 460154.06515717163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7018705.989361702,
            "unit": "ns",
            "range": "± 1594532.0427439024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248950.565217391,
            "unit": "ns",
            "range": "± 201793.52519066317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3666325.405263158,
            "unit": "ns",
            "range": "± 412545.743539005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5114436.792207792,
            "unit": "ns",
            "range": "± 262074.0973083425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3998085.6224489794,
            "unit": "ns",
            "range": "± 365928.71177094115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6909504.7450980395,
            "unit": "ns",
            "range": "± 277818.97594670113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8118679.853535353,
            "unit": "ns",
            "range": "± 1426585.6267497966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2320236.890625,
            "unit": "ns",
            "range": "± 384316.1659730515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339124.6837910353,
            "unit": "ns",
            "range": "± 284513.85087136587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3807895.157426075,
            "unit": "ns",
            "range": "± 1057909.6370309931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907814.4566836599,
            "unit": "ns",
            "range": "± 40182.80102464091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837356.2344665527,
            "unit": "ns",
            "range": "± 22505.656991618875"
          }
        ]
      }
    ]
  }
}