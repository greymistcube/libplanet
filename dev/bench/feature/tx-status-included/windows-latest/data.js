window.BENCHMARK_DATA = {
  "lastUpdate": 1702002179856,
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
          "id": "718d7eab7705a0ccf84634c14106a58dbfe3fad0",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:09:49+09:00",
          "tree_id": "1a9ea1ff57502e6c167c79e20296575b0a8644cc",
          "url": "https://github.com/greymistcube/libplanet/commit/718d7eab7705a0ccf84634c14106a58dbfe3fad0"
        },
        "date": 1702002159813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932154.7368421053,
            "unit": "ns",
            "range": "± 74384.83139872838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757363.3333333333,
            "unit": "ns",
            "range": "± 100397.6368964032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1383520,
            "unit": "ns",
            "range": "± 118209.92198866242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5220896.96969697,
            "unit": "ns",
            "range": "± 162085.47607059154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33910.71428571428,
            "unit": "ns",
            "range": "± 1773.70471029186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5102233.333333333,
            "unit": "ns",
            "range": "± 38000.087719197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13265553.846153846,
            "unit": "ns",
            "range": "± 81525.24778031051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33011600,
            "unit": "ns",
            "range": "± 391811.37337715493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65868364.28571428,
            "unit": "ns",
            "range": "± 1031762.1189813256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134007235.71428572,
            "unit": "ns",
            "range": "± 951933.6310148637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3233317.0833333335,
            "unit": "ns",
            "range": "± 9504.136237366942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063866.4620535714,
            "unit": "ns",
            "range": "± 1668.7130891104573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747729.8302283654,
            "unit": "ns",
            "range": "± 1356.3136433702718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950509.21875,
            "unit": "ns",
            "range": "± 4718.9651987020525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612572.0005580357,
            "unit": "ns",
            "range": "± 1360.8994140408956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576105.4059709822,
            "unit": "ns",
            "range": "± 904.1923420557285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139196.3414634145,
            "unit": "ns",
            "range": "± 76395.83135734887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311272.727272727,
            "unit": "ns",
            "range": "± 85388.10810846259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783602.777777778,
            "unit": "ns",
            "range": "± 82152.96703140729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2741555.172413793,
            "unit": "ns",
            "range": "± 79882.02723931127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6127117.647058823,
            "unit": "ns",
            "range": "± 194007.35298559623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173484.90566037735,
            "unit": "ns",
            "range": "± 6848.705555022088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169390,
            "unit": "ns",
            "range": "± 6838.762568578306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140580.55555555556,
            "unit": "ns",
            "range": "± 3985.6757408388244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763607.6923076925,
            "unit": "ns",
            "range": "± 42949.00971963656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2607358.3333333335,
            "unit": "ns",
            "range": "± 25860.305079172573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11875.510204081633,
            "unit": "ns",
            "range": "± 1935.2434634384897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56473.913043478264,
            "unit": "ns",
            "range": "± 5020.022975412977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45936.48648648649,
            "unit": "ns",
            "range": "± 2274.1895635693522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58613.63636363636,
            "unit": "ns",
            "range": "± 8694.207105859741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2570.408163265306,
            "unit": "ns",
            "range": "± 591.9057433450358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10803.225806451614,
            "unit": "ns",
            "range": "± 1286.50618992607"
          }
        ]
      }
    ]
  }
}