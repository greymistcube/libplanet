window.BENCHMARK_DATA = {
  "lastUpdate": 1702005239308,
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
          "id": "88249371b08e6728369e085f41db075312dab916",
          "message": "Release 3.9.1",
          "timestamp": "2023-12-08T12:02:54+09:00",
          "tree_id": "9bee94af45c895ba31e0991f1abcb83f913c2b87",
          "url": "https://github.com/greymistcube/libplanet/commit/88249371b08e6728369e085f41db075312dab916"
        },
        "date": 1702005233452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196673.45,
            "unit": "ns",
            "range": "± 8711.642679994302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179890.55319148937,
            "unit": "ns",
            "range": "± 10305.373017218832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159499.08974358975,
            "unit": "ns",
            "range": "± 8232.006438974766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2954576.2666666666,
            "unit": "ns",
            "range": "± 109794.08688735141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2672728.3076923075,
            "unit": "ns",
            "range": "± 91527.22729708525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14797.13,
            "unit": "ns",
            "range": "± 2081.508328670157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62308.67741935484,
            "unit": "ns",
            "range": "± 5285.49220109671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50322.637931034486,
            "unit": "ns",
            "range": "± 2210.865571927087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56965.255319148935,
            "unit": "ns",
            "range": "± 9552.014440117786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2912.5833333333335,
            "unit": "ns",
            "range": "± 465.62486971621877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12692.102040816326,
            "unit": "ns",
            "range": "± 3296.871436351567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3569011.43828125,
            "unit": "ns",
            "range": "± 63430.49369565707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1145237.0857747395,
            "unit": "ns",
            "range": "± 8355.829786546143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735193.2983398438,
            "unit": "ns",
            "range": "± 6572.808622770772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1837278.1032151442,
            "unit": "ns",
            "range": "± 10171.226780554722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 598504.4547776442,
            "unit": "ns",
            "range": "± 5727.305477795318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554446.3599609375,
            "unit": "ns",
            "range": "± 6958.217046309604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37453.14736842105,
            "unit": "ns",
            "range": "± 4969.699040436915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2260765.101265823,
            "unit": "ns",
            "range": "± 117489.40233273142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2385173.9897959186,
            "unit": "ns",
            "range": "± 94400.19984466895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3000532.861702128,
            "unit": "ns",
            "range": "± 115242.05531240406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2787033.293103448,
            "unit": "ns",
            "range": "± 120844.73052346874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6600052.742424242,
            "unit": "ns",
            "range": "± 207597.0728130924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5614372.823529412,
            "unit": "ns",
            "range": "± 108266.66817009938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13530662.9,
            "unit": "ns",
            "range": "± 153113.64953654524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37325904.85,
            "unit": "ns",
            "range": "± 845651.8047995053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71849941.93333334,
            "unit": "ns",
            "range": "± 2137966.1751449946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 141420189.43333334,
            "unit": "ns",
            "range": "± 2245070.098348235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929506.4489795918,
            "unit": "ns",
            "range": "± 82124.01045327951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1792048.9010989012,
            "unit": "ns",
            "range": "± 100170.96131415143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1370052.4343434344,
            "unit": "ns",
            "range": "± 130658.12168818642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6020668.857894737,
            "unit": "ns",
            "range": "± 365955.2243007599"
          }
        ]
      }
    ]
  }
}