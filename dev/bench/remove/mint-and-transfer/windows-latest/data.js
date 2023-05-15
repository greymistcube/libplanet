window.BENCHMARK_DATA = {
  "lastUpdate": 1684133948731,
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
          "id": "445e4d68e25d8322a38c01e059769dce027b0ead",
          "message": "Changelog",
          "timestamp": "2023-05-15T15:47:51+09:00",
          "tree_id": "93e901805fd0f4bf5d6425385e28af3603dccc18",
          "url": "https://github.com/greymistcube/libplanet/commit/445e4d68e25d8322a38c01e059769dce027b0ead"
        },
        "date": 1684133931125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062410.4166666667,
            "unit": "ns",
            "range": "± 83185.0840363845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855911.7647058824,
            "unit": "ns",
            "range": "± 87844.22700288764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1710161.3636363635,
            "unit": "ns",
            "range": "± 57171.96912745969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3870153.947368421,
            "unit": "ns",
            "range": "± 192455.89308776835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33938.27160493827,
            "unit": "ns",
            "range": "± 1793.63931025963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5047771.428571428,
            "unit": "ns",
            "range": "± 31333.182916013364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12963950,
            "unit": "ns",
            "range": "± 147205.5139365823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33215360,
            "unit": "ns",
            "range": "± 362165.5852546693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67150690,
            "unit": "ns",
            "range": "± 421186.19703336497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133541660,
            "unit": "ns",
            "range": "± 1389741.1371495463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3453492.606026786,
            "unit": "ns",
            "range": "± 8329.446844829616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094871.89453125,
            "unit": "ns",
            "range": "± 3568.2759411183833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 825767.8841145834,
            "unit": "ns",
            "range": "± 1221.5010722724662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900430.6919642857,
            "unit": "ns",
            "range": "± 15652.784617508441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594050.6770833334,
            "unit": "ns",
            "range": "± 1082.5574619535353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 533589.9204799107,
            "unit": "ns",
            "range": "± 695.260774002764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163848.275862069,
            "unit": "ns",
            "range": "± 55988.64438877415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307087.5,
            "unit": "ns",
            "range": "± 71632.36676071743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2878640,
            "unit": "ns",
            "range": "± 85354.6725003796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939685.714285714,
            "unit": "ns",
            "range": "± 92055.1629470617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4716090.384615385,
            "unit": "ns",
            "range": "± 192600.77195253375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191259.18367346938,
            "unit": "ns",
            "range": "± 7424.562792047841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182912.7659574468,
            "unit": "ns",
            "range": "± 7076.741359560929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163568.3673469388,
            "unit": "ns",
            "range": "± 9488.295523756586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838485.714285714,
            "unit": "ns",
            "range": "± 31019.295660873788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555513.3333333335,
            "unit": "ns",
            "range": "± 40802.71116108877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15402.127659574468,
            "unit": "ns",
            "range": "± 1465.4426997015075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65048.83720930233,
            "unit": "ns",
            "range": "± 3788.240137305619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52109.41176470588,
            "unit": "ns",
            "range": "± 2831.734431043134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67883.14606741573,
            "unit": "ns",
            "range": "± 9112.344723144635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3909.183673469388,
            "unit": "ns",
            "range": "± 649.6766419628611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13605.31914893617,
            "unit": "ns",
            "range": "± 1430.7203254783594"
          }
        ]
      }
    ]
  }
}