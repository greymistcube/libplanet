window.BENCHMARK_DATA = {
  "lastUpdate": 1691649177376,
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
          "id": "a6f332b868049573eac1ea2d202dfd18c35de0cf",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-10T15:07:06+09:00",
          "tree_id": "2fd4fb29c11262bfa240ed8ebc6a274ff8869231",
          "url": "https://github.com/greymistcube/libplanet/commit/a6f332b868049573eac1ea2d202dfd18c35de0cf"
        },
        "date": 1691649143292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1949145.1612903227,
            "unit": "ns",
            "range": "± 297315.7443717577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3535067.8160919542,
            "unit": "ns",
            "range": "± 345067.2585245378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2358605.4945054944,
            "unit": "ns",
            "range": "± 340138.3007485949"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6656593.548387097,
            "unit": "ns",
            "range": "± 652255.6110389831"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58010,
            "unit": "ns",
            "range": "± 8615.090627315183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9421868.085106382,
            "unit": "ns",
            "range": "± 944976.7499230965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28446645.833333332,
            "unit": "ns",
            "range": "± 2594671.9149225242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76145131.57894737,
            "unit": "ns",
            "range": "± 6810385.145578758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140971004.76190478,
            "unit": "ns",
            "range": "± 6434226.698163817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283884595.08196723,
            "unit": "ns",
            "range": "± 12620178.799267285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5814650.0390625,
            "unit": "ns",
            "range": "± 189569.66460720316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887924.1268382352,
            "unit": "ns",
            "range": "± 36407.24820222361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377739.109205163,
            "unit": "ns",
            "range": "± 52180.45039403184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3530199.2447916665,
            "unit": "ns",
            "range": "± 63334.75262832645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1121016.1743164062,
            "unit": "ns",
            "range": "± 34059.94686295612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1055069.5963541667,
            "unit": "ns",
            "range": "± 27248.76967101584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3893287.912087912,
            "unit": "ns",
            "range": "± 290811.4527911187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4314010.869565218,
            "unit": "ns",
            "range": "± 327081.9104510222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5690651.612903226,
            "unit": "ns",
            "range": "± 529729.2394136476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4608425.806451613,
            "unit": "ns",
            "range": "± 389121.3599958875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8432332.258064516,
            "unit": "ns",
            "range": "± 670971.6418489667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323748.83720930235,
            "unit": "ns",
            "range": "± 21038.875748234692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316973.62637362635,
            "unit": "ns",
            "range": "± 25963.738967023626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296360.2150537634,
            "unit": "ns",
            "range": "± 32472.624389412347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5156143.956043956,
            "unit": "ns",
            "range": "± 294828.6391971487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5010963.953488372,
            "unit": "ns",
            "range": "± 522370.4297352915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26396.236559139787,
            "unit": "ns",
            "range": "± 3566.0098008773407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111051.57894736843,
            "unit": "ns",
            "range": "± 18403.236666978682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121536.95652173914,
            "unit": "ns",
            "range": "± 13510.807374475324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122930.21978021978,
            "unit": "ns",
            "range": "± 22065.3636059384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8775.268817204302,
            "unit": "ns",
            "range": "± 1637.7779162752206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23825,
            "unit": "ns",
            "range": "± 5460.0975115069905"
          }
        ]
      }
    ]
  }
}