window.BENCHMARK_DATA = {
  "lastUpdate": 1684377342255,
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
          "id": "146c3cce8685b6fddd790da5468455850ea6d7e8",
          "message": "Port 1.2.1 to main",
          "timestamp": "2023-05-18T11:19:38+09:00",
          "tree_id": "bea99444bda741c3202cf1b8d0c83d398b176647",
          "url": "https://github.com/greymistcube/libplanet/commit/146c3cce8685b6fddd790da5468455850ea6d7e8"
        },
        "date": 1684377313598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1315082.7586206896,
            "unit": "ns",
            "range": "± 57082.03434433712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562805.084745763,
            "unit": "ns",
            "range": "± 113522.38184867398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180222.448979592,
            "unit": "ns",
            "range": "± 135450.29638142898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5349158.73015873,
            "unit": "ns",
            "range": "± 244273.88821336927"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46410.52631578947,
            "unit": "ns",
            "range": "± 3094.4175433853056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6986150,
            "unit": "ns",
            "range": "± 179338.39279539333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19643364.285714287,
            "unit": "ns",
            "range": "± 137443.23923347052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47786789.655172415,
            "unit": "ns",
            "range": "± 1377957.9716649114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93917340,
            "unit": "ns",
            "range": "± 1577099.7861354782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183877621.42857143,
            "unit": "ns",
            "range": "± 1299363.0783986032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4756909.654017857,
            "unit": "ns",
            "range": "± 13310.388064942834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1495360.0130208333,
            "unit": "ns",
            "range": "± 9348.868448159961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149279.4270833333,
            "unit": "ns",
            "range": "± 10029.392529762177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616818.2161458335,
            "unit": "ns",
            "range": "± 12232.189981801917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815145.17578125,
            "unit": "ns",
            "range": "± 3214.5636040771683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762724.3098958334,
            "unit": "ns",
            "range": "± 3410.808067637838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2952148,
            "unit": "ns",
            "range": "± 76137.03719828697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3187685.294117647,
            "unit": "ns",
            "range": "± 99719.50094185535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3905300,
            "unit": "ns",
            "range": "± 85169.8694766328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3902952.0408163266,
            "unit": "ns",
            "range": "± 227212.47707390581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6306340.625,
            "unit": "ns",
            "range": "± 196304.5475610414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249034.0909090909,
            "unit": "ns",
            "range": "± 8208.587199116353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246006.25,
            "unit": "ns",
            "range": "± 4697.725513479901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215928,
            "unit": "ns",
            "range": "± 5538.46549145158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3843690.909090909,
            "unit": "ns",
            "range": "± 120848.53475434746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3374390,
            "unit": "ns",
            "range": "± 59776.46216171904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17874.736842105263,
            "unit": "ns",
            "range": "± 1564.1576089882628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82973.40425531915,
            "unit": "ns",
            "range": "± 5175.317257573765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70290.56603773584,
            "unit": "ns",
            "range": "± 2896.6335998709446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91715.78947368421,
            "unit": "ns",
            "range": "± 16235.52262321186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4961.702127659574,
            "unit": "ns",
            "range": "± 751.2149847605261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17961.855670103094,
            "unit": "ns",
            "range": "± 1787.0741508450503"
          }
        ]
      }
    ]
  }
}