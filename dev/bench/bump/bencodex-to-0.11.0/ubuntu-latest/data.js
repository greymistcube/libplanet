window.BENCHMARK_DATA = {
  "lastUpdate": 1689321352084,
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
          "id": "639b3c048cc8a77e48c723374264fcd3544a0b1e",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:42:36+09:00",
          "tree_id": "968f82627aae9c0bbbdeff1c7db89e4204d978b2",
          "url": "https://github.com/greymistcube/libplanet/commit/639b3c048cc8a77e48c723374264fcd3544a0b1e"
        },
        "date": 1689321344196,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285526.0256410256,
            "unit": "ns",
            "range": "± 9049.179955539965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273084.8787878788,
            "unit": "ns",
            "range": "± 7221.856702735695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243612.38271604938,
            "unit": "ns",
            "range": "± 12768.150601758953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273247.2,
            "unit": "ns",
            "range": "± 42244.29056131221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824047,
            "unit": "ns",
            "range": "± 23460.121294798682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18606.336842105262,
            "unit": "ns",
            "range": "± 1905.7560827746227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89941.5,
            "unit": "ns",
            "range": "± 6580.828223115274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72436.66666666667,
            "unit": "ns",
            "range": "± 1755.48074431996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91429.21348314607,
            "unit": "ns",
            "range": "± 7243.322979368827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4814.285714285715,
            "unit": "ns",
            "range": "± 551.2755770980264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19501.041666666668,
            "unit": "ns",
            "range": "± 2149.3937843845356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388646.4444444445,
            "unit": "ns",
            "range": "± 101882.02531461876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691879.7959183673,
            "unit": "ns",
            "range": "± 106447.62569842729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1801405.2210526315,
            "unit": "ns",
            "range": "± 109288.8592273548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4902932.833333333,
            "unit": "ns",
            "range": "± 146031.09221057218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6314924.9796875,
            "unit": "ns",
            "range": "± 20816.70680908778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889479.1291666667,
            "unit": "ns",
            "range": "± 6040.307738239917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377944.655970982,
            "unit": "ns",
            "range": "± 1945.7691871573707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583651.5165264425,
            "unit": "ns",
            "range": "± 1508.9459195155903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806832.775530134,
            "unit": "ns",
            "range": "± 1179.513316231775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742383.7659737723,
            "unit": "ns",
            "range": "± 441.00482690782326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343096.6,
            "unit": "ns",
            "range": "± 46231.684870567165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494692.923076923,
            "unit": "ns",
            "range": "± 56678.20036319304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4349214.066666666,
            "unit": "ns",
            "range": "± 51880.793337731266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3872593,
            "unit": "ns",
            "range": "± 69324.72583841518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322968.578947368,
            "unit": "ns",
            "range": "± 137578.30183503818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7814955.4,
            "unit": "ns",
            "range": "± 68354.1692884515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19503107.733333334,
            "unit": "ns",
            "range": "± 137878.33801708076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50729649.46666667,
            "unit": "ns",
            "range": "± 264185.3236725707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101339667.78571428,
            "unit": "ns",
            "range": "± 185293.64953632117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201038079.2857143,
            "unit": "ns",
            "range": "± 623864.4772511992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46654.43037974684,
            "unit": "ns",
            "range": "± 2437.2008675545862"
          }
        ]
      }
    ]
  }
}