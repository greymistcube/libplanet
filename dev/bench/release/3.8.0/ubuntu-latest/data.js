window.BENCHMARK_DATA = {
  "lastUpdate": 1700793067382,
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
          "id": "afa6f76ff7291e0356f53b26bf9498d4b0746495",
          "message": "Release 3.8.0",
          "timestamp": "2023-11-24T11:20:03+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/greymistcube/libplanet/commit/afa6f76ff7291e0356f53b26bf9498d4b0746495"
        },
        "date": 1700793059283,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199920.67741935485,
            "unit": "ns",
            "range": "± 9079.215534059538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195378.10227272726,
            "unit": "ns",
            "range": "± 11390.73654692154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171741.79411764705,
            "unit": "ns",
            "range": "± 5446.245539036914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117644.4285714286,
            "unit": "ns",
            "range": "± 25501.826799464583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2873213.8,
            "unit": "ns",
            "range": "± 26804.511766278665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16519.35714285714,
            "unit": "ns",
            "range": "± 2699.1018322825335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71367.45918367348,
            "unit": "ns",
            "range": "± 10638.60801894642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90682.5,
            "unit": "ns",
            "range": "± 1237.3322916662282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69078.31958762887,
            "unit": "ns",
            "range": "± 14471.188534281366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3578.061855670103,
            "unit": "ns",
            "range": "± 756.4765199929785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15278.39393939394,
            "unit": "ns",
            "range": "± 3358.1403649304384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786207.8200334823,
            "unit": "ns",
            "range": "± 33125.30360137806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1225938.0428292411,
            "unit": "ns",
            "range": "± 5868.801790806185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764239.8743722098,
            "unit": "ns",
            "range": "± 2459.669366237159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919757.209798177,
            "unit": "ns",
            "range": "± 5602.40778588463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612863.5021158854,
            "unit": "ns",
            "range": "± 2006.6565174355912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564831.7590144231,
            "unit": "ns",
            "range": "± 498.9354217808333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41984.54838709677,
            "unit": "ns",
            "range": "± 5523.014495718425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442047.3333333335,
            "unit": "ns",
            "range": "± 59982.42769345036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625064.375,
            "unit": "ns",
            "range": "± 91476.32871143462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186980.3666666667,
            "unit": "ns",
            "range": "± 59266.21385490419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3118735.2666666666,
            "unit": "ns",
            "range": "± 55217.092495332414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6561691.611111111,
            "unit": "ns",
            "range": "± 181558.27912828885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5674985.7,
            "unit": "ns",
            "range": "± 29117.011272744716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14338886.6,
            "unit": "ns",
            "range": "± 61171.98182968595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37504846.692307696,
            "unit": "ns",
            "range": "± 209862.96020196317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76185499.07142857,
            "unit": "ns",
            "range": "± 899459.8854779004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149886521.42857143,
            "unit": "ns",
            "range": "± 716540.1022507355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969380.0224719101,
            "unit": "ns",
            "range": "± 92760.09250026963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1884259.2209302327,
            "unit": "ns",
            "range": "± 67182.08910307568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1482497.5,
            "unit": "ns",
            "range": "± 151257.7369204456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5650799.32,
            "unit": "ns",
            "range": "± 224367.2644590433"
          }
        ]
      }
    ]
  }
}