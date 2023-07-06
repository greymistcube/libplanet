window.BENCHMARK_DATA = {
  "lastUpdate": 1688658372464,
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
          "id": "89a25a4b080cbe374d3980a9597553c31d3a0b36",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T00:28:26+09:00",
          "tree_id": "6712e28f56ebe2d34846870b23e67ddbe59dca6c",
          "url": "https://github.com/greymistcube/libplanet/commit/89a25a4b080cbe374d3980a9597553c31d3a0b36"
        },
        "date": 1688658359948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8693817.11827957,
            "unit": "ns",
            "range": "± 503678.1574724955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21282432.95652174,
            "unit": "ns",
            "range": "± 493428.4203526179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57159898.02542373,
            "unit": "ns",
            "range": "± 2532247.075846854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107847627.5,
            "unit": "ns",
            "range": "± 1794102.7261082884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219689768.25,
            "unit": "ns",
            "range": "± 5017670.09294856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68170.32989690722,
            "unit": "ns",
            "range": "± 11238.826233124511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329431.275862069,
            "unit": "ns",
            "range": "± 25814.552867267885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375353.10869565216,
            "unit": "ns",
            "range": "± 50956.08954678669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329011.98387096776,
            "unit": "ns",
            "range": "± 38690.9651822065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4192641.730769231,
            "unit": "ns",
            "range": "± 114386.95392414564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756606.9285714286,
            "unit": "ns",
            "range": "± 64362.77480119925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15750.78947368421,
            "unit": "ns",
            "range": "± 1336.2279068470896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91198.33333333333,
            "unit": "ns",
            "range": "± 12747.96487479392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109450.53125,
            "unit": "ns",
            "range": "± 11874.663939358341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120358.48913043478,
            "unit": "ns",
            "range": "± 10080.429216937282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6169.787234042553,
            "unit": "ns",
            "range": "± 1253.7210496649216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21696,
            "unit": "ns",
            "range": "± 4365.020852929758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609714.18,
            "unit": "ns",
            "range": "± 164021.81097276503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2803440.8,
            "unit": "ns",
            "range": "± 123414.55413290497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2009761.4895833333,
            "unit": "ns",
            "range": "± 135254.75872044652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5950072.830985916,
            "unit": "ns",
            "range": "± 251550.14185826626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640299.714285714,
            "unit": "ns",
            "range": "± 380363.40256776527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3814175.214285714,
            "unit": "ns",
            "range": "± 450106.5408764381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4862795.547368421,
            "unit": "ns",
            "range": "± 342050.5172510301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159821.0918367347,
            "unit": "ns",
            "range": "± 343955.62635700696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8649220.8814433,
            "unit": "ns",
            "range": "± 954754.9594247603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7433073.433948863,
            "unit": "ns",
            "range": "± 178050.74194841395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2011494.0389364918,
            "unit": "ns",
            "range": "± 60815.143928495236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377179.3255208333,
            "unit": "ns",
            "range": "± 18559.517472829404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3029465.775546875,
            "unit": "ns",
            "range": "± 212337.2774356288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854128.3619791666,
            "unit": "ns",
            "range": "± 15775.026982495585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764430.3876953125,
            "unit": "ns",
            "range": "± 4727.937131087943"
          }
        ]
      }
    ]
  }
}