window.BENCHMARK_DATA = {
  "lastUpdate": 1706511853000,
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
          "id": "0260c38d672dc87ffaec6b4432e9da1bae36bfd2",
          "message": "Removed old mock implementation",
          "timestamp": "2024-01-29T15:51:46+09:00",
          "tree_id": "6cc0d42fcbe6db2688a869016e15ade9b9e2573c",
          "url": "https://github.com/greymistcube/libplanet/commit/0260c38d672dc87ffaec6b4432e9da1bae36bfd2"
        },
        "date": 1706511836289,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944425.5102040817,
            "unit": "ns",
            "range": "± 90571.67044308285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734642.857142857,
            "unit": "ns",
            "range": "± 61900.669759435295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1537513.4020618557,
            "unit": "ns",
            "range": "± 143313.11409874677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10921745.263157895,
            "unit": "ns",
            "range": "± 843267.4650490808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34688.23529411765,
            "unit": "ns",
            "range": "± 1661.9112726432531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5090521.428571428,
            "unit": "ns",
            "range": "± 35538.498703657846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13010792.857142856,
            "unit": "ns",
            "range": "± 95411.33995080873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33314707.692307692,
            "unit": "ns",
            "range": "± 324740.225568937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65663153.333333336,
            "unit": "ns",
            "range": "± 905204.4030151949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131101864.28571428,
            "unit": "ns",
            "range": "± 1913413.8124977418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342813.1975446427,
            "unit": "ns",
            "range": "± 11889.268388337912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1091169.8697916667,
            "unit": "ns",
            "range": "± 2404.0163453530786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746474.6028645834,
            "unit": "ns",
            "range": "± 2940.2826057960365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958613.75,
            "unit": "ns",
            "range": "± 6846.311094551293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624780.1339285715,
            "unit": "ns",
            "range": "± 1254.0224397078541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571498.7530048077,
            "unit": "ns",
            "range": "± 1755.784899284165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2223257.6923076925,
            "unit": "ns",
            "range": "± 32591.60069553866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255060.606060606,
            "unit": "ns",
            "range": "± 104933.34276693192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767923.3333333335,
            "unit": "ns",
            "range": "± 81536.59505604421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958231.3131313133,
            "unit": "ns",
            "range": "± 285564.4127082381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12512348.863636363,
            "unit": "ns",
            "range": "± 1554625.4963147226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181935.59322033898,
            "unit": "ns",
            "range": "± 6954.798956212362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175443.01075268816,
            "unit": "ns",
            "range": "± 11802.094488483834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143180,
            "unit": "ns",
            "range": "± 4706.616119264206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2857786.6666666665,
            "unit": "ns",
            "range": "± 41369.171866891185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484586.6666666665,
            "unit": "ns",
            "range": "± 27476.246017935115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12177.41935483871,
            "unit": "ns",
            "range": "± 1613.2689627408874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59156.382978723406,
            "unit": "ns",
            "range": "± 7777.726103150016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45764.89361702128,
            "unit": "ns",
            "range": "± 3437.145522581154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64276.5306122449,
            "unit": "ns",
            "range": "± 15175.596260439916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2851.546391752577,
            "unit": "ns",
            "range": "± 688.6147631994394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12492.307692307691,
            "unit": "ns",
            "range": "± 2268.001115482323"
          }
        ]
      }
    ]
  }
}