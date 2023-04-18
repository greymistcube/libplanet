window.BENCHMARK_DATA = {
  "lastUpdate": 1681822858200,
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
      },
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
          "id": "6d1ed34be0a2b1ef25a434e1faf2ce21b931c133",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T21:35:11+09:00",
          "tree_id": "2309b1715d61ffc5efbf0bb5093b8ab9c26ab025",
          "url": "https://github.com/greymistcube/libplanet/commit/6d1ed34be0a2b1ef25a434e1faf2ce21b931c133"
        },
        "date": 1681822829018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9554129.63095238,
            "unit": "ns",
            "range": "± 1587884.9396246613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21887578.16883117,
            "unit": "ns",
            "range": "± 1087317.0135598425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55652943.15,
            "unit": "ns",
            "range": "± 1066953.3641649345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116132940.07777777,
            "unit": "ns",
            "range": "± 11481413.796319537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234613302.03424656,
            "unit": "ns",
            "range": "± 10640926.100286717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79022.591954023,
            "unit": "ns",
            "range": "± 6134.311431255523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417378.7684210526,
            "unit": "ns",
            "range": "± 24418.69083063158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360976.5106382979,
            "unit": "ns",
            "range": "± 27099.289077190442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339841.0408163265,
            "unit": "ns",
            "range": "± 13441.329152033266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5697965.625,
            "unit": "ns",
            "range": "± 89984.96250661367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3986171.304347826,
            "unit": "ns",
            "range": "± 99738.39346439116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28554.36559139785,
            "unit": "ns",
            "range": "± 2688.525568867693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127171.35869565218,
            "unit": "ns",
            "range": "± 10538.867938226293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130518.39887640449,
            "unit": "ns",
            "range": "± 8853.968891823886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146632.03191489363,
            "unit": "ns",
            "range": "± 17636.490284733147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11244.878947368421,
            "unit": "ns",
            "range": "± 1018.5132069558849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26546.706521739132,
            "unit": "ns",
            "range": "± 2964.169399950912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1929309.6333333333,
            "unit": "ns",
            "range": "± 325668.29729082045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3554878.6404494382,
            "unit": "ns",
            "range": "± 574786.0831428003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3181515.0168539328,
            "unit": "ns",
            "range": "± 551890.8529532833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7732682.449438202,
            "unit": "ns",
            "range": "± 727767.8922906547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4447724.543478261,
            "unit": "ns",
            "range": "± 420207.34032459307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3910760.8924731184,
            "unit": "ns",
            "range": "± 328921.14529339515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4751139.294117647,
            "unit": "ns",
            "range": "± 134601.88807436396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4675627.586206896,
            "unit": "ns",
            "range": "± 201956.18949264017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8827798.942857143,
            "unit": "ns",
            "range": "± 288047.72806091607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7019919.8671875,
            "unit": "ns",
            "range": "± 92015.01210390122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2144963.353515625,
            "unit": "ns",
            "range": "± 41920.12802033707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397582.1196986607,
            "unit": "ns",
            "range": "± 50255.67098079473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2925201.4363724226,
            "unit": "ns",
            "range": "± 198894.34063928056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848202.4114118303,
            "unit": "ns",
            "range": "± 38325.15898913576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781156.7863808284,
            "unit": "ns",
            "range": "± 34360.77719357003"
          }
        ]
      }
    ]
  }
}