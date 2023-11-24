window.BENCHMARK_DATA = {
  "lastUpdate": 1700793138900,
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
        "date": 1700793119712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949735.7142857143,
            "unit": "ns",
            "range": "± 118790.85775680694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1779848.9361702127,
            "unit": "ns",
            "range": "± 109762.49016019965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1343387.0967741935,
            "unit": "ns",
            "range": "± 107232.56646167675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5141668.131868131,
            "unit": "ns",
            "range": "± 281520.4551001661"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33695.3125,
            "unit": "ns",
            "range": "± 1568.4821990479072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4879700,
            "unit": "ns",
            "range": "± 32327.46510322144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13391360,
            "unit": "ns",
            "range": "± 175072.5759710608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32493430.769230768,
            "unit": "ns",
            "range": "± 261901.0162402817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64473360,
            "unit": "ns",
            "range": "± 909584.0649125605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133222338.46153846,
            "unit": "ns",
            "range": "± 1356557.69108091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334528.0729166665,
            "unit": "ns",
            "range": "± 6724.746880639139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045803.4895833334,
            "unit": "ns",
            "range": "± 2911.2691825517536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745500.2022879465,
            "unit": "ns",
            "range": "± 3406.557244628425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1884628.4114583333,
            "unit": "ns",
            "range": "± 12186.29098670398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603013.1673177084,
            "unit": "ns",
            "range": "± 1084.7083385821682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570769.8660714285,
            "unit": "ns",
            "range": "± 2036.602636256642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183127.5862068967,
            "unit": "ns",
            "range": "± 63296.145767064816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2233833.3333333335,
            "unit": "ns",
            "range": "± 94401.17811435687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2765010,
            "unit": "ns",
            "range": "± 63431.686420158054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2740894.9494949495,
            "unit": "ns",
            "range": "± 295295.7626231906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5995606.666666667,
            "unit": "ns",
            "range": "± 222862.23771648708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182543.75,
            "unit": "ns",
            "range": "± 7877.61294519385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170180.23255813954,
            "unit": "ns",
            "range": "± 11097.310959575556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141449.01960784313,
            "unit": "ns",
            "range": "± 5765.427045727648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2759913.3333333335,
            "unit": "ns",
            "range": "± 44696.21055632388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2627053.846153846,
            "unit": "ns",
            "range": "± 34027.79783707764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10264.835164835165,
            "unit": "ns",
            "range": "± 1312.2816115769617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60082.10526315789,
            "unit": "ns",
            "range": "± 6326.842157895948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46135.416666666664,
            "unit": "ns",
            "range": "± 4117.024453519458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61591.919191919194,
            "unit": "ns",
            "range": "± 16379.477432842457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2385.714285714286,
            "unit": "ns",
            "range": "± 621.272389088151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10204.255319148937,
            "unit": "ns",
            "range": "± 1599.456553784604"
          }
        ]
      }
    ]
  }
}