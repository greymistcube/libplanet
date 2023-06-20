window.BENCHMARK_DATA = {
  "lastUpdate": 1687232929038,
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
          "id": "7ab8839a22265afd7efcd957840a5738b5c60503",
          "message": "Reorganize tests",
          "timestamp": "2023-06-20T11:34:58+09:00",
          "tree_id": "81260a7a807266e524111433ca408a398f66a401",
          "url": "https://github.com/greymistcube/libplanet/commit/7ab8839a22265afd7efcd957840a5738b5c60503"
        },
        "date": 1687232898008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1209453.5353535353,
            "unit": "ns",
            "range": "± 117997.52878174286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2266353.6082474226,
            "unit": "ns",
            "range": "± 145012.13962246955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524879.347826087,
            "unit": "ns",
            "range": "± 105070.5984931173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4680280.412371134,
            "unit": "ns",
            "range": "± 350652.2516561028"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42492.307692307695,
            "unit": "ns",
            "range": "± 2553.22152797993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6030266.666666667,
            "unit": "ns",
            "range": "± 121106.19064178636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17684688,
            "unit": "ns",
            "range": "± 462432.93686760677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42458676,
            "unit": "ns",
            "range": "± 1128887.9492225966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 82950296.42857143,
            "unit": "ns",
            "range": "± 2281616.1973936358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 162845455.55555555,
            "unit": "ns",
            "range": "± 3476980.471653736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4187830.5208333335,
            "unit": "ns",
            "range": "± 51586.84549924807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1327447.6953125,
            "unit": "ns",
            "range": "± 21462.820734988192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1013630.2994791666,
            "unit": "ns",
            "range": "± 15919.378336105745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2341813.3928571427,
            "unit": "ns",
            "range": "± 15894.339767072883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 722864.8995535715,
            "unit": "ns",
            "range": "± 5040.689324669145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 659267.96875,
            "unit": "ns",
            "range": "± 4039.3779354602157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2641762.5,
            "unit": "ns",
            "range": "± 112712.08947418358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2799343.373493976,
            "unit": "ns",
            "range": "± 147810.7352720075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3481337.1428571427,
            "unit": "ns",
            "range": "± 167094.02470814958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3114494.827586207,
            "unit": "ns",
            "range": "± 135951.58119314804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5226455.882352941,
            "unit": "ns",
            "range": "± 166532.61568101757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246818.18181818182,
            "unit": "ns",
            "range": "± 11613.002117532666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225478.65168539327,
            "unit": "ns",
            "range": "± 12369.119097668123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204816.32653061225,
            "unit": "ns",
            "range": "± 17175.328108797687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3392205.263157895,
            "unit": "ns",
            "range": "± 115339.4753158913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3055712.9032258065,
            "unit": "ns",
            "range": "± 85931.91002933848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18378.947368421053,
            "unit": "ns",
            "range": "± 2045.1236625379865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80473.4693877551,
            "unit": "ns",
            "range": "± 8202.483292830064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67666.66666666667,
            "unit": "ns",
            "range": "± 6837.736298012626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95192.92929292929,
            "unit": "ns",
            "range": "± 19408.378437586747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5336.170212765957,
            "unit": "ns",
            "range": "± 1059.097918430402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17689.79591836735,
            "unit": "ns",
            "range": "± 3135.4471489567"
          }
        ]
      }
    ]
  }
}