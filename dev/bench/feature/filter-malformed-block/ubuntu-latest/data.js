window.BENCHMARK_DATA = {
  "lastUpdate": 1683537751309,
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
          "id": "b91b19a69521ad081afb31944c288d98ebbce4f8",
          "message": "Added test",
          "timestamp": "2023-05-08T17:26:06+09:00",
          "tree_id": "3084fc63159fadeeff50ba744a90f6f4c5c3efde",
          "url": "https://github.com/greymistcube/libplanet/commit/b91b19a69521ad081afb31944c288d98ebbce4f8"
        },
        "date": 1683536954210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367730.8541666667,
            "unit": "ns",
            "range": "± 46018.53999170315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340955.8144329897,
            "unit": "ns",
            "range": "± 46657.44055085826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307407.8494623656,
            "unit": "ns",
            "range": "± 40033.81335412284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5056863.367346939,
            "unit": "ns",
            "range": "± 468897.371995335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4636603.715789474,
            "unit": "ns",
            "range": "± 438031.828584521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33511.27272727273,
            "unit": "ns",
            "range": "± 9595.203965479139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123639.86458333333,
            "unit": "ns",
            "range": "± 25652.133476316005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98216.20408163265,
            "unit": "ns",
            "range": "± 17391.424051982045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141321.25773195876,
            "unit": "ns",
            "range": "± 31414.820822967176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5721.79347826087,
            "unit": "ns",
            "range": "± 1103.280866853854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32798.181818181816,
            "unit": "ns",
            "range": "± 11887.929692539745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3797107.53125,
            "unit": "ns",
            "range": "± 365515.55748935894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3946247.505263158,
            "unit": "ns",
            "range": "± 384664.8287678751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4837608.241758241,
            "unit": "ns",
            "range": "± 500181.8714707535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4820552.958762887,
            "unit": "ns",
            "range": "± 475867.6553760535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8895707.95,
            "unit": "ns",
            "range": "± 1012550.1194175391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7254700.244081439,
            "unit": "ns",
            "range": "± 227601.75399277333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2266949.223704268,
            "unit": "ns",
            "range": "± 81129.29501039819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1650833.2415364583,
            "unit": "ns",
            "range": "± 57709.35059861716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032580.4895148026,
            "unit": "ns",
            "range": "± 65391.03144964866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025951.7360913826,
            "unit": "ns",
            "range": "± 32213.6132761578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935321.3809244792,
            "unit": "ns",
            "range": "± 34943.27382571917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73272.45918367348,
            "unit": "ns",
            "range": "± 15110.101446211793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9433825.295918368,
            "unit": "ns",
            "range": "± 685988.7057585818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24203978.12,
            "unit": "ns",
            "range": "± 1922582.372731221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62242648.4040404,
            "unit": "ns",
            "range": "± 4706427.442675757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124809735.11,
            "unit": "ns",
            "range": "± 8631996.750128234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254841019.82,
            "unit": "ns",
            "range": "± 15117534.0697055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737155.1030927836,
            "unit": "ns",
            "range": "± 245058.78388445242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3542949.06185567,
            "unit": "ns",
            "range": "± 340529.77163503435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2789661.852631579,
            "unit": "ns",
            "range": "± 302374.47454580286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7214002.105263158,
            "unit": "ns",
            "range": "± 585640.5713728011"
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
          "id": "adcfdffcc09b7116c29c07ea9fd0473ecd47c4ec",
          "message": "Changelog",
          "timestamp": "2023-05-08T18:06:30+09:00",
          "tree_id": "91749c8cdb65247dad97992d65ca7198e5e84269",
          "url": "https://github.com/greymistcube/libplanet/commit/adcfdffcc09b7116c29c07ea9fd0473ecd47c4ec"
        },
        "date": 1683537743405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340903.43333333335,
            "unit": "ns",
            "range": "± 15161.214168505001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316771.0857142857,
            "unit": "ns",
            "range": "± 14881.940187074972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278095.20930232556,
            "unit": "ns",
            "range": "± 10155.811963876924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5092626.3125,
            "unit": "ns",
            "range": "± 97929.4236442543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4593284.307692308,
            "unit": "ns",
            "range": "± 56654.948679682304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22386.5,
            "unit": "ns",
            "range": "± 2110.0835724671424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101821.62105263158,
            "unit": "ns",
            "range": "± 7154.9455165104455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91143.88888888889,
            "unit": "ns",
            "range": "± 7212.640080893259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109979.29591836735,
            "unit": "ns",
            "range": "± 16614.623703485937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6788.897959183673,
            "unit": "ns",
            "range": "± 600.3378170954811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22214.855555555554,
            "unit": "ns",
            "range": "± 1718.53077804302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4014441.688888889,
            "unit": "ns",
            "range": "± 152766.55383353302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4185083.6153846155,
            "unit": "ns",
            "range": "± 144406.01004762403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4950611.428571428,
            "unit": "ns",
            "range": "± 137393.18016942756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4978507.318181818,
            "unit": "ns",
            "range": "± 273756.5823927689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8102208.5,
            "unit": "ns",
            "range": "± 326887.5940695542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6850781.411458333,
            "unit": "ns",
            "range": "± 69335.77827783268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2129449.469010417,
            "unit": "ns",
            "range": "± 17513.365922207322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1562359.3913225445,
            "unit": "ns",
            "range": "± 17109.208616696593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3002357.5091145835,
            "unit": "ns",
            "range": "± 14322.671036727988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 963862.825390625,
            "unit": "ns",
            "range": "± 9805.894873789473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877469.5580078125,
            "unit": "ns",
            "range": "± 7968.884281653042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56162.211764705884,
            "unit": "ns",
            "range": "± 3055.9250142497094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8931867.96226415,
            "unit": "ns",
            "range": "± 369728.2724826417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25451019.789473683,
            "unit": "ns",
            "range": "± 562277.333552045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63972168.06666667,
            "unit": "ns",
            "range": "± 1114993.04174065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128786424.86666666,
            "unit": "ns",
            "range": "± 1450568.2137457558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254964037.44444445,
            "unit": "ns",
            "range": "± 7102318.657447013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716817.494736842,
            "unit": "ns",
            "range": "± 116221.85331665905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3314303.7721518986,
            "unit": "ns",
            "range": "± 171145.6535719292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641747.0169491526,
            "unit": "ns",
            "range": "± 115618.11658071638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6178627.05,
            "unit": "ns",
            "range": "± 135572.0602847042"
          }
        ]
      }
    ]
  }
}