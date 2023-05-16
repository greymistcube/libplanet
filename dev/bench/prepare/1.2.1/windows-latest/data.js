window.BENCHMARK_DATA = {
  "lastUpdate": 1684228753969,
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
          "id": "08a655440560c84133dc3ab77232015512ec2f44",
          "message": "Prepare 1.2.1",
          "timestamp": "2023-05-16T17:59:22+09:00",
          "tree_id": "42e66b107c4b4ca1ce58e4c972c15d296fb64218",
          "url": "https://github.com/greymistcube/libplanet/commit/08a655440560c84133dc3ab77232015512ec2f44"
        },
        "date": 1684228722448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639177.894736842,
            "unit": "ns",
            "range": "± 135338.5024700653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3114407.2463768115,
            "unit": "ns",
            "range": "± 149886.1286589419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2624642.7083333335,
            "unit": "ns",
            "range": "± 183903.6010321378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6461765.909090909,
            "unit": "ns",
            "range": "± 340897.6247329825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57095.555555555555,
            "unit": "ns",
            "range": "± 3925.654918841278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9059970.588235294,
            "unit": "ns",
            "range": "± 175747.15063375098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24095271.42857143,
            "unit": "ns",
            "range": "± 379369.899516739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60055775,
            "unit": "ns",
            "range": "± 1479890.3188647344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121619647.36842105,
            "unit": "ns",
            "range": "± 2653614.371500045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248139718.75,
            "unit": "ns",
            "range": "± 7510895.1757811485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6163761.752717392,
            "unit": "ns",
            "range": "± 153783.21578685308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932937.0963541667,
            "unit": "ns",
            "range": "± 31105.827360291016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426490.5831473214,
            "unit": "ns",
            "range": "± 17422.781684400532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3258930.5078125,
            "unit": "ns",
            "range": "± 84668.24053190112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040027.7688419118,
            "unit": "ns",
            "range": "± 20536.155838287596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949655.4947916666,
            "unit": "ns",
            "range": "± 16183.002518951596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3892025,
            "unit": "ns",
            "range": "± 249027.3044851124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4059017.7966101696,
            "unit": "ns",
            "range": "± 178290.89794459208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5033640.816326531,
            "unit": "ns",
            "range": "± 198334.21174704007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4994989.285714285,
            "unit": "ns",
            "range": "± 213296.5939109811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8259148.6486486485,
            "unit": "ns",
            "range": "± 412147.39159117464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313760.6060606061,
            "unit": "ns",
            "range": "± 9847.237537564131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303147.5,
            "unit": "ns",
            "range": "± 10703.246272474102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285406.6666666667,
            "unit": "ns",
            "range": "± 10762.400881182262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4847976.923076923,
            "unit": "ns",
            "range": "± 45188.36785881506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4422014.705882353,
            "unit": "ns",
            "range": "± 130646.29587427441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24427.472527472528,
            "unit": "ns",
            "range": "± 1653.21679253683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107244.56521739131,
            "unit": "ns",
            "range": "± 6814.341117366508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96198.94736842105,
            "unit": "ns",
            "range": "± 8455.949620625832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114863.15789473684,
            "unit": "ns",
            "range": "± 15895.088580610123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7454.639175257732,
            "unit": "ns",
            "range": "± 1351.4668434208734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24357.14285714286,
            "unit": "ns",
            "range": "± 2615.5758664971013"
          }
        ]
      }
    ]
  }
}