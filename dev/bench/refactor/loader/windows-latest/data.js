window.BENCHMARK_DATA = {
  "lastUpdate": 1683720168732,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720154038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036813.2653061225,
            "unit": "ns",
            "range": "± 117341.12983115767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809396.4285714286,
            "unit": "ns",
            "range": "± 68676.47199146739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586405.0505050505,
            "unit": "ns",
            "range": "± 130259.41493156551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3614891.0256410255,
            "unit": "ns",
            "range": "± 124402.21845616384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33697.46835443038,
            "unit": "ns",
            "range": "± 1753.4562706884046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5007114.285714285,
            "unit": "ns",
            "range": "± 30936.830356833143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12931146.666666666,
            "unit": "ns",
            "range": "± 125039.0959812551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33097070,
            "unit": "ns",
            "range": "± 296319.42031723616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65457906.666666664,
            "unit": "ns",
            "range": "± 994252.7060681352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131993733.33333333,
            "unit": "ns",
            "range": "± 1148999.258775508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3478317.578125,
            "unit": "ns",
            "range": "± 8902.129018697324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094728.9778645833,
            "unit": "ns",
            "range": "± 3215.494379627109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 847873.2770647322,
            "unit": "ns",
            "range": "± 1250.524349044664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882855.6119791667,
            "unit": "ns",
            "range": "± 9263.894012867346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 591109.8828125,
            "unit": "ns",
            "range": "± 2721.076058784416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 528952.8971354166,
            "unit": "ns",
            "range": "± 794.251779749112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189841.1764705884,
            "unit": "ns",
            "range": "± 43707.6383148166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179064,
            "unit": "ns",
            "range": "± 78752.21735783387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2833478.947368421,
            "unit": "ns",
            "range": "± 60213.46821422898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2807341.6666666665,
            "unit": "ns",
            "range": "± 63576.59479554643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4410465.517241379,
            "unit": "ns",
            "range": "± 123744.24164340527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192410.16949152542,
            "unit": "ns",
            "range": "± 8461.081183770992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178520.83333333334,
            "unit": "ns",
            "range": "± 6867.343576771038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167216.1616161616,
            "unit": "ns",
            "range": "± 10279.300649906332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2795092.8571428573,
            "unit": "ns",
            "range": "± 23501.99547291232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519573.076923077,
            "unit": "ns",
            "range": "± 27453.8143629792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14547.474747474747,
            "unit": "ns",
            "range": "± 1816.55333172711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62254.545454545456,
            "unit": "ns",
            "range": "± 3552.2668524497963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56956.382978723406,
            "unit": "ns",
            "range": "± 5620.575842205737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70503.15789473684,
            "unit": "ns",
            "range": "± 10108.711775068066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3934.6938775510203,
            "unit": "ns",
            "range": "± 874.4190461155061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14062.244897959185,
            "unit": "ns",
            "range": "± 2051.1256806844845"
          }
        ]
      }
    ]
  }
}