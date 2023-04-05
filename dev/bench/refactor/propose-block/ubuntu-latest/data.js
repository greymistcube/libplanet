window.BENCHMARK_DATA = {
  "lastUpdate": 1680683456318,
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
          "id": "1faba70c08b30f355a4a8e72c7f5ebd93ceb071b",
          "message": "Remove tx execution update from propose",
          "timestamp": "2023-04-05T17:18:33+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/1faba70c08b30f355a4a8e72c7f5ebd93ceb071b"
        },
        "date": 1680683449185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7473933.846153846,
            "unit": "ns",
            "range": "± 19872.823154776615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19019132.8,
            "unit": "ns",
            "range": "± 107315.03320677597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49377067.4,
            "unit": "ns",
            "range": "± 308565.1116242498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97688277.33333333,
            "unit": "ns",
            "range": "± 432525.2653571096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196322414.08333334,
            "unit": "ns",
            "range": "± 694674.5301188907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45608.15517241379,
            "unit": "ns",
            "range": "± 2005.8719484914052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378941.72,
            "unit": "ns",
            "range": "± 111666.0213064191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532828.1764705884,
            "unit": "ns",
            "range": "± 49364.67660209486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2421276,
            "unit": "ns",
            "range": "± 44341.52375434501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5448558.9130434785,
            "unit": "ns",
            "range": "± 133330.49750147975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995242.45234375,
            "unit": "ns",
            "range": "± 17531.39225291899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936402.431919643,
            "unit": "ns",
            "range": "± 6490.344785700877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350527.1334635417,
            "unit": "ns",
            "range": "± 525.8589325199538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544327.6330915177,
            "unit": "ns",
            "range": "± 1077.5396108154084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810282.7655552456,
            "unit": "ns",
            "range": "± 559.5129347378082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797410.185546875,
            "unit": "ns",
            "range": "± 909.3855951097053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319911.0714285714,
            "unit": "ns",
            "range": "± 8107.632576449736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265286.6216216216,
            "unit": "ns",
            "range": "± 8274.23717649264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237683.08333333334,
            "unit": "ns",
            "range": "± 6105.2889182545905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5616853.357142857,
            "unit": "ns",
            "range": "± 42889.589028300135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4031691.0714285714,
            "unit": "ns",
            "range": "± 42431.424525959505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17115.536842105263,
            "unit": "ns",
            "range": "± 1447.646261383044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85614.7,
            "unit": "ns",
            "range": "± 3883.7928695571795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74557.20930232559,
            "unit": "ns",
            "range": "± 2701.982099251087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175319.94805194804,
            "unit": "ns",
            "range": "± 8697.209865504818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5149.958333333333,
            "unit": "ns",
            "range": "± 755.019719737824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17193.625,
            "unit": "ns",
            "range": "± 1598.4476367302186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230434.8518518517,
            "unit": "ns",
            "range": "± 88658.40581420169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3337162.15,
            "unit": "ns",
            "range": "± 64197.54059092673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4233774.933333334,
            "unit": "ns",
            "range": "± 42321.36103919065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4228933.975609756,
            "unit": "ns",
            "range": "± 150525.32033174482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7202646.260869565,
            "unit": "ns",
            "range": "± 170849.8703554507"
          }
        ]
      }
    ]
  }
}