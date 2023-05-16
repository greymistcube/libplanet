window.BENCHMARK_DATA = {
  "lastUpdate": 1684226839298,
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
          "id": "677c66337b332a9e1966f6d61ca2312d04090702",
          "message": "Removed IActionContext.Rehearsal property",
          "timestamp": "2023-05-16T17:28:31+09:00",
          "tree_id": "9ffcc97be1fa4ee52e06a68f2d8e8fe744d2a162",
          "url": "https://github.com/greymistcube/libplanet/commit/677c66337b332a9e1966f6d61ca2312d04090702"
        },
        "date": 1684226792561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7760747.578947368,
            "unit": "ns",
            "range": "± 267276.9653933387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20515113.11627907,
            "unit": "ns",
            "range": "± 760376.2919539437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49911772.72727273,
            "unit": "ns",
            "range": "± 2119407.382531603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98915254.1764706,
            "unit": "ns",
            "range": "± 1967326.2456597735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200289471.42857143,
            "unit": "ns",
            "range": "± 4378251.309620687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66935.91666666667,
            "unit": "ns",
            "range": "± 7646.895410855399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298571.7012987013,
            "unit": "ns",
            "range": "± 15133.649406002973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300323.2978723404,
            "unit": "ns",
            "range": "± 19371.992809057847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289581.1111111111,
            "unit": "ns",
            "range": "± 19564.328065683036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4007957.272727273,
            "unit": "ns",
            "range": "± 82507.39358727152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3755607.2,
            "unit": "ns",
            "range": "± 70222.60656471574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16362.67816091954,
            "unit": "ns",
            "range": "± 1879.0037160640811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83069.55670103093,
            "unit": "ns",
            "range": "± 9559.720853195575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80564.19191919192,
            "unit": "ns",
            "range": "± 10997.93008602423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92986.76344086022,
            "unit": "ns",
            "range": "± 14259.792778082936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4113.093023255814,
            "unit": "ns",
            "range": "± 565.9898019847641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16052.247126436781,
            "unit": "ns",
            "range": "± 1464.4793837893292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587018.121212121,
            "unit": "ns",
            "range": "± 182531.92128570404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3002452.4727272727,
            "unit": "ns",
            "range": "± 126511.534080502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2585712.3163265307,
            "unit": "ns",
            "range": "± 293589.3903989319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6292039.445454545,
            "unit": "ns",
            "range": "± 248442.06745797553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250336.242424242,
            "unit": "ns",
            "range": "± 92697.64592447532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409071.3076923075,
            "unit": "ns",
            "range": "± 114253.32109399753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4379709.785714285,
            "unit": "ns",
            "range": "± 74070.53867681553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4383233.428571428,
            "unit": "ns",
            "range": "± 174597.41839502766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7586194.492063492,
            "unit": "ns",
            "range": "± 299794.1854118219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194633.252604167,
            "unit": "ns",
            "range": "± 45934.58597959183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954491.8523995536,
            "unit": "ns",
            "range": "± 18459.961944208066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1282620.1225260417,
            "unit": "ns",
            "range": "± 7645.852148249215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509535.2491629464,
            "unit": "ns",
            "range": "± 18676.52285236917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841531.7035435268,
            "unit": "ns",
            "range": "± 2863.064123461054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771604.7839192708,
            "unit": "ns",
            "range": "± 6516.014562366593"
          }
        ]
      }
    ]
  }
}