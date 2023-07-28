window.BENCHMARK_DATA = {
  "lastUpdate": 1690509243866,
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
          "id": "a677c8c39ee17b94ce8e041afcbff558ff97f7c1",
          "message": "Prepare 3.1.1",
          "timestamp": "2023-07-28T10:36:34+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/greymistcube/libplanet/commit/a677c8c39ee17b94ce8e041afcbff558ff97f7c1"
        },
        "date": 1690509234543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359849.0333333333,
            "unit": "ns",
            "range": "± 7530.669982024237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346822.90476190473,
            "unit": "ns",
            "range": "± 8020.4167030445615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318100.3888888889,
            "unit": "ns",
            "range": "± 10479.947364311052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5470128.6,
            "unit": "ns",
            "range": "± 38876.42844743549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5038481.566666666,
            "unit": "ns",
            "range": "± 51995.879057131155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26770.443298969072,
            "unit": "ns",
            "range": "± 2388.86968551147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118732.44329896907,
            "unit": "ns",
            "range": "± 9511.653420463887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107597.46875,
            "unit": "ns",
            "range": "± 7118.210603727116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126564.05102040817,
            "unit": "ns",
            "range": "± 13386.683644479319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8575.760416666666,
            "unit": "ns",
            "range": "± 808.8762021574541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27725.63157894737,
            "unit": "ns",
            "range": "± 2184.273563709413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1776576.1012658228,
            "unit": "ns",
            "range": "± 86979.52811387683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3374168.95,
            "unit": "ns",
            "range": "± 76145.13008893297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324963.782051282,
            "unit": "ns",
            "range": "± 115231.24449103152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6074013.05882353,
            "unit": "ns",
            "range": "± 123718.8767900187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7391589.852163462,
            "unit": "ns",
            "range": "± 45806.04001012158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2348624.840104167,
            "unit": "ns",
            "range": "± 2906.8110443734913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1663266.8416666666,
            "unit": "ns",
            "range": "± 3145.004785127005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163030.343619792,
            "unit": "ns",
            "range": "± 1856.432515322491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997970.73984375,
            "unit": "ns",
            "range": "± 754.3748544880269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914942.8833705357,
            "unit": "ns",
            "range": "± 407.4439691413023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4383815.6,
            "unit": "ns",
            "range": "± 65538.30043112196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4720461.25,
            "unit": "ns",
            "range": "± 85517.78413211294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5517461.111111111,
            "unit": "ns",
            "range": "± 96488.55171950765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5043442.475,
            "unit": "ns",
            "range": "± 263333.6733086027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8454840.311111111,
            "unit": "ns",
            "range": "± 296707.2625598582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10325129.333333334,
            "unit": "ns",
            "range": "± 110984.05958171694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27158554.5,
            "unit": "ns",
            "range": "± 205630.3048900923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68256643.46666667,
            "unit": "ns",
            "range": "± 242887.44841412414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138803357.44680852,
            "unit": "ns",
            "range": "± 5355532.360679423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269949468.2,
            "unit": "ns",
            "range": "± 566702.8083066115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60048.591397849465,
            "unit": "ns",
            "range": "± 3792.1812675572555"
          }
        ]
      }
    ]
  }
}