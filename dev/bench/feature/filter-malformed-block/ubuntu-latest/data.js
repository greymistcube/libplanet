window.BENCHMARK_DATA = {
  "lastUpdate": 1683609194229,
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
          "id": "3409656fff1d7e69f5c398619f989df77dc0aa6f",
          "message": "Changelog",
          "timestamp": "2023-05-09T13:53:18+09:00",
          "tree_id": "593b943c1f7328ababea9de3d3f08cfed1792324",
          "url": "https://github.com/greymistcube/libplanet/commit/3409656fff1d7e69f5c398619f989df77dc0aa6f"
        },
        "date": 1683608759020,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269439.5,
            "unit": "ns",
            "range": "± 6553.838495401723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259665.26829268291,
            "unit": "ns",
            "range": "± 9085.760306722796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221505.84615384616,
            "unit": "ns",
            "range": "± 863.0856317262544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116078.4375,
            "unit": "ns",
            "range": "± 68973.97224264503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756027.6,
            "unit": "ns",
            "range": "± 40438.37840432562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16285.786516853932,
            "unit": "ns",
            "range": "± 887.45585641702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79073.63529411764,
            "unit": "ns",
            "range": "± 3922.9984670592235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71306.88888888889,
            "unit": "ns",
            "range": "± 957.6466337660248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76801.07608695653,
            "unit": "ns",
            "range": "± 8087.548250763817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4973.642857142857,
            "unit": "ns",
            "range": "± 436.60990751494194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16593.441860465115,
            "unit": "ns",
            "range": "± 915.1505000580495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145635.076923077,
            "unit": "ns",
            "range": "± 37596.71364064848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3379217.722222222,
            "unit": "ns",
            "range": "± 112209.99314464214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4046254.1428571427,
            "unit": "ns",
            "range": "± 43227.17132840113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4216928.5,
            "unit": "ns",
            "range": "± 84498.92834701584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6619566.9,
            "unit": "ns",
            "range": "± 194232.36641045037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5688519.444754465,
            "unit": "ns",
            "range": "± 9917.526615978884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1791786.972935268,
            "unit": "ns",
            "range": "± 4973.758989861825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333321.4247395834,
            "unit": "ns",
            "range": "± 6426.325096262044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604123.5015625,
            "unit": "ns",
            "range": "± 8003.879043129465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796387.0715494792,
            "unit": "ns",
            "range": "± 2165.6696632639887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753748.3763671875,
            "unit": "ns",
            "range": "± 1590.5141640108745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46186.48148148148,
            "unit": "ns",
            "range": "± 2437.4149990877177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7597275.666666667,
            "unit": "ns",
            "range": "± 30256.496364220613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19821523.933333334,
            "unit": "ns",
            "range": "± 147844.8775630664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49559391.071428575,
            "unit": "ns",
            "range": "± 425830.3771016495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98205572.6,
            "unit": "ns",
            "range": "± 718917.9021491556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195650404.7857143,
            "unit": "ns",
            "range": "± 942668.9735306123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316459.375,
            "unit": "ns",
            "range": "± 72435.48383427858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2520928.777777778,
            "unit": "ns",
            "range": "± 69146.60537100381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141807.64,
            "unit": "ns",
            "range": "± 96682.4991897958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4966807.066666666,
            "unit": "ns",
            "range": "± 88719.36280644125"
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
          "id": "2fa1b9f4a9df8f74b0c591af84b69bc6be5d882d",
          "message": "Changelog\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-05-09T13:56:12+09:00",
          "tree_id": "20ca298679e0f0d825d80b728910e4013fb33ab0",
          "url": "https://github.com/greymistcube/libplanet/commit/2fa1b9f4a9df8f74b0c591af84b69bc6be5d882d"
        },
        "date": 1683609185364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350208.89743589744,
            "unit": "ns",
            "range": "± 12088.671107574171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340056.7368421053,
            "unit": "ns",
            "range": "± 5051.503404841256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296174.5,
            "unit": "ns",
            "range": "± 4745.44573167871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5200170.866666666,
            "unit": "ns",
            "range": "± 30885.20008923985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4792187.428571428,
            "unit": "ns",
            "range": "± 43546.76313099302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27487.81914893617,
            "unit": "ns",
            "range": "± 1842.0340846715462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117798.94827586207,
            "unit": "ns",
            "range": "± 6372.845063524521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110811.73684210527,
            "unit": "ns",
            "range": "± 8315.144815476855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116087.5890410959,
            "unit": "ns",
            "range": "± 4608.013122797963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7880.086021505376,
            "unit": "ns",
            "range": "± 696.8435613834774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26099.427083333332,
            "unit": "ns",
            "range": "± 1675.428653680771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4297907.16,
            "unit": "ns",
            "range": "± 90233.1588643554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4505267.688888889,
            "unit": "ns",
            "range": "± 171281.323640222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5178176.2,
            "unit": "ns",
            "range": "± 83927.436253162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5636028.50617284,
            "unit": "ns",
            "range": "± 292802.2862497885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8617377.736842105,
            "unit": "ns",
            "range": "± 189840.40814292236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7105598.075,
            "unit": "ns",
            "range": "± 24794.368562171636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2224064.38203125,
            "unit": "ns",
            "range": "± 1007.4091160451596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1633421.1962139423,
            "unit": "ns",
            "range": "± 3704.0984191930856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3141287.04296875,
            "unit": "ns",
            "range": "± 1867.543644598906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986749.1042131697,
            "unit": "ns",
            "range": "± 700.354601729939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892119.0893930289,
            "unit": "ns",
            "range": "± 222.83337351709562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62246.065217391304,
            "unit": "ns",
            "range": "± 4153.295846831086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10075589.2,
            "unit": "ns",
            "range": "± 39933.28533084005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28865508,
            "unit": "ns",
            "range": "± 171347.24672138738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66217615.333333336,
            "unit": "ns",
            "range": "± 309789.7957073166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144128367.46666667,
            "unit": "ns",
            "range": "± 230150.19102467684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263925414.93333334,
            "unit": "ns",
            "range": "± 891296.8206976736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774667.40625,
            "unit": "ns",
            "range": "± 146113.13358869182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431278.3066666666,
            "unit": "ns",
            "range": "± 172246.43455620093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2796507.6707317075,
            "unit": "ns",
            "range": "± 147515.21269330825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6816849.083333333,
            "unit": "ns",
            "range": "± 254483.93857313477"
          }
        ]
      }
    ]
  }
}