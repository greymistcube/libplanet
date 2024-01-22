window.BENCHMARK_DATA = {
  "lastUpdate": 1705903013348,
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
          "id": "2492963ab81141a40d92fca3e8a1b7cf63e3d07e",
          "message": "Removed EnumerableExtensions",
          "timestamp": "2024-01-22T14:45:02+09:00",
          "tree_id": "5f0010686140c2cef7ccc8649fdd5c2f99f01253",
          "url": "https://github.com/greymistcube/libplanet/commit/2492963ab81141a40d92fca3e8a1b7cf63e3d07e"
        },
        "date": 1705903007177,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720809.7391826925,
            "unit": "ns",
            "range": "± 20365.96117430533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1179302.5279447115,
            "unit": "ns",
            "range": "± 2962.0042508743663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758223.2065429688,
            "unit": "ns",
            "range": "± 4290.37977636048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936682.0280412945,
            "unit": "ns",
            "range": "± 5178.477053884745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628171.2344876803,
            "unit": "ns",
            "range": "± 2477.4960424884175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568227.9408854167,
            "unit": "ns",
            "range": "± 973.7557505180449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420848.4583333335,
            "unit": "ns",
            "range": "± 94400.0544263633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2467991.519230769,
            "unit": "ns",
            "range": "± 96857.09605180129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3095489.0625,
            "unit": "ns",
            "range": "± 57952.41505749207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3234265.71875,
            "unit": "ns",
            "range": "± 99624.71500092295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13883271.196629213,
            "unit": "ns",
            "range": "± 973891.3917516372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37799.95789473684,
            "unit": "ns",
            "range": "± 3939.5824325541325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200138.1923076923,
            "unit": "ns",
            "range": "± 6988.125161390218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189445.46666666667,
            "unit": "ns",
            "range": "± 8470.443702917444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170546.5,
            "unit": "ns",
            "range": "± 2989.7653276278584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3210406.1666666665,
            "unit": "ns",
            "range": "± 20396.050211697737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785010.6,
            "unit": "ns",
            "range": "± 34550.23173542297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19551.222222222223,
            "unit": "ns",
            "range": "± 3779.6077340886536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70737.30526315789,
            "unit": "ns",
            "range": "± 7116.800956372995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52139.205882352944,
            "unit": "ns",
            "range": "± 1396.5295264239269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81375.17708333333,
            "unit": "ns",
            "range": "± 13145.378264858196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5504.50505050505,
            "unit": "ns",
            "range": "± 2062.773738785524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12787.39156626506,
            "unit": "ns",
            "range": "± 1166.7609115341936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5667964.133333334,
            "unit": "ns",
            "range": "± 22371.462800588055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14447896.033333333,
            "unit": "ns",
            "range": "± 259931.61621771287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36751718.84615385,
            "unit": "ns",
            "range": "± 304001.33905868634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73598267.75,
            "unit": "ns",
            "range": "± 227586.54203865756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148534046.57142857,
            "unit": "ns",
            "range": "± 796358.6346532103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982870.62,
            "unit": "ns",
            "range": "± 85761.05371977927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850580.9186046512,
            "unit": "ns",
            "range": "± 66627.68544475606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626991.4270833333,
            "unit": "ns",
            "range": "± 201956.15147307518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12528100.644444445,
            "unit": "ns",
            "range": "± 818748.8264156344"
          }
        ]
      }
    ]
  }
}