window.BENCHMARK_DATA = {
  "lastUpdate": 1681801564570,
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
          "id": "b755fdc73e3f970d5d02ebfbd9c7f61e28e70526",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T15:38:00+09:00",
          "tree_id": "3bb489379865002ce0123b6b0768d7f297ed0326",
          "url": "https://github.com/greymistcube/libplanet/commit/b755fdc73e3f970d5d02ebfbd9c7f61e28e70526"
        },
        "date": 1681801533633,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8403588.958333334,
            "unit": "ns",
            "range": "± 179767.57469661356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21995133.11764706,
            "unit": "ns",
            "range": "± 1003521.5432328391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55022361.68518519,
            "unit": "ns",
            "range": "± 2311319.075878132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105560373.9736842,
            "unit": "ns",
            "range": "± 2323350.0024127364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236088482.7777778,
            "unit": "ns",
            "range": "± 10783292.962617204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72642.908045977,
            "unit": "ns",
            "range": "± 9351.881417017528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 424148.3791208791,
            "unit": "ns",
            "range": "± 37220.579865873835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353392.23333333334,
            "unit": "ns",
            "range": "± 29752.779161587616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342164,
            "unit": "ns",
            "range": "± 24511.560754374343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6044292.15625,
            "unit": "ns",
            "range": "± 268775.96006441244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4323453.590909091,
            "unit": "ns",
            "range": "± 180893.1196866621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25350.206521739132,
            "unit": "ns",
            "range": "± 3392.431273569307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120393.0425531915,
            "unit": "ns",
            "range": "± 14981.84143534661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119376.16304347826,
            "unit": "ns",
            "range": "± 12184.641780732542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 272668.3387096774,
            "unit": "ns",
            "range": "± 26110.06228294668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10628.427083333334,
            "unit": "ns",
            "range": "± 1143.4801196789024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25171.84946236559,
            "unit": "ns",
            "range": "± 3782.700024729968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1602337.7741935484,
            "unit": "ns",
            "range": "± 161358.26110675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3065364.234939759,
            "unit": "ns",
            "range": "± 270842.9660658883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589482.8191489363,
            "unit": "ns",
            "range": "± 239350.0163691629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7841993.261363637,
            "unit": "ns",
            "range": "± 1406641.7752438143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4972861.106666666,
            "unit": "ns",
            "range": "± 247997.1946146129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797296.6914893617,
            "unit": "ns",
            "range": "± 341598.34484713426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4842322.217391305,
            "unit": "ns",
            "range": "± 278258.09484365076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4972576.730337079,
            "unit": "ns",
            "range": "± 468389.70668328984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8159497.841463415,
            "unit": "ns",
            "range": "± 245444.90459435186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7315107.082490809,
            "unit": "ns",
            "range": "± 348759.09767206514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2209555.2502741227,
            "unit": "ns",
            "range": "± 90416.45961822807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1419334.2771853886,
            "unit": "ns",
            "range": "± 47973.90021112588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3261026.871390965,
            "unit": "ns",
            "range": "± 182289.69791169796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855654.6789165296,
            "unit": "ns",
            "range": "± 29152.193750239083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789181.6442599826,
            "unit": "ns",
            "range": "± 33204.111922990545"
          }
        ]
      }
    ]
  }
}