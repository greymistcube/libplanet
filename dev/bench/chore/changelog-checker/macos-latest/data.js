window.BENCHMARK_DATA = {
  "lastUpdate": 1707184228530,
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
          "id": "eebea10b6c19f838c7378de055d759e33d09fc32",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:48:12+09:00",
          "tree_id": "35d56191c462f4ee3a7b9749431d77f05fa78129",
          "url": "https://github.com/greymistcube/libplanet/commit/eebea10b6c19f838c7378de055d759e33d09fc32"
        },
        "date": 1707152919112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8665770.642857144,
            "unit": "ns",
            "range": "± 142413.98749939565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21647786.28358209,
            "unit": "ns",
            "range": "± 1027784.7696851623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56179820.65686274,
            "unit": "ns",
            "range": "± 2273029.0306622162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113681766.8611111,
            "unit": "ns",
            "range": "± 3690950.1349106627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227383196.7222222,
            "unit": "ns",
            "range": "± 4819948.213741535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73905.73333333334,
            "unit": "ns",
            "range": "± 11521.551792575023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367488.1145833333,
            "unit": "ns",
            "range": "± 58693.235342821106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361032.7826086957,
            "unit": "ns",
            "range": "± 46944.33622927442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331214.6595744681,
            "unit": "ns",
            "range": "± 40271.98253870695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4955335.914141414,
            "unit": "ns",
            "range": "± 463086.90567359724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4160729.881443299,
            "unit": "ns",
            "range": "± 310347.9257774129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27385.80459770115,
            "unit": "ns",
            "range": "± 3971.2633097450807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114376.76923076923,
            "unit": "ns",
            "range": "± 18544.99274022621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134461.91397849462,
            "unit": "ns",
            "range": "± 19766.298481119164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117339.6,
            "unit": "ns",
            "range": "± 16859.52193052468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9522.666666666666,
            "unit": "ns",
            "range": "± 1662.7421846046268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26815.18181818182,
            "unit": "ns",
            "range": "± 5687.35976873065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598761.5806451612,
            "unit": "ns",
            "range": "± 205638.13040869948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110996.977272727,
            "unit": "ns",
            "range": "± 368634.5500830002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2750276.6483516484,
            "unit": "ns",
            "range": "± 309832.97698854795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 40469370.11578947,
            "unit": "ns",
            "range": "± 11536760.726721123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3422640.763157895,
            "unit": "ns",
            "range": "± 257431.61866287419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4510720.855555556,
            "unit": "ns",
            "range": "± 886664.7209745665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5018442.49,
            "unit": "ns",
            "range": "± 527930.2112950061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4924260.802083333,
            "unit": "ns",
            "range": "± 511535.7159671283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32959086.255102042,
            "unit": "ns",
            "range": "± 4371100.460314368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5828913.406510416,
            "unit": "ns",
            "range": "± 94437.79459254505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898610.1492300725,
            "unit": "ns",
            "range": "± 90672.36569272974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140585.0506347655,
            "unit": "ns",
            "range": "± 40211.81197811147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124989.0459960937,
            "unit": "ns",
            "range": "± 110310.35618141471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853834.978140024,
            "unit": "ns",
            "range": "± 7110.240271965627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835509.0348307291,
            "unit": "ns",
            "range": "± 15606.879952082461"
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
          "id": "c6efe396e23da3d9e41db6102a08ad21d9df55f6",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:53:10+09:00",
          "tree_id": "4e11e1eb93f48b099fc8b2a621e4e276f8fa31a6",
          "url": "https://github.com/greymistcube/libplanet/commit/c6efe396e23da3d9e41db6102a08ad21d9df55f6"
        },
        "date": 1707153197993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7811633.117647059,
            "unit": "ns",
            "range": "± 371227.9968890475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20515116.122222222,
            "unit": "ns",
            "range": "± 1613202.1122583859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48375341.34375,
            "unit": "ns",
            "range": "± 1504955.7728748259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102972321.91304348,
            "unit": "ns",
            "range": "± 6935792.520201359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257745915.29032257,
            "unit": "ns",
            "range": "± 44062309.127256505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51582.213483146064,
            "unit": "ns",
            "range": "± 11319.794846831881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248199.1947368421,
            "unit": "ns",
            "range": "± 19646.856745011773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233036.5652173913,
            "unit": "ns",
            "range": "± 16667.256037838524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225297.60215053763,
            "unit": "ns",
            "range": "± 19300.04267293085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4563948.325396826,
            "unit": "ns",
            "range": "± 201682.37508778417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3971071.617647059,
            "unit": "ns",
            "range": "± 81085.86981472354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16402.541666666668,
            "unit": "ns",
            "range": "± 2809.6649731602356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83748.86781609195,
            "unit": "ns",
            "range": "± 19061.74035900975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77252.99462365592,
            "unit": "ns",
            "range": "± 10289.836422437154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82446.76041666667,
            "unit": "ns",
            "range": "± 14141.94992007805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3629.8333333333335,
            "unit": "ns",
            "range": "± 585.6063243069299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12641.258064516129,
            "unit": "ns",
            "range": "± 1299.2970248429642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383287.6022727273,
            "unit": "ns",
            "range": "± 188848.87985839637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866591.1627906975,
            "unit": "ns",
            "range": "± 364898.667233162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2127589.7696629213,
            "unit": "ns",
            "range": "± 247954.58595434387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 25783371.84375,
            "unit": "ns",
            "range": "± 6211159.10699738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4823529.62371134,
            "unit": "ns",
            "range": "± 1239069.957178428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4840605.99,
            "unit": "ns",
            "range": "± 1044267.3275651935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5271108.54040404,
            "unit": "ns",
            "range": "± 1178624.7861267747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4759457.315789473,
            "unit": "ns",
            "range": "± 1039913.0886076158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26767113.40425532,
            "unit": "ns",
            "range": "± 6460297.501669692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4392772.078559028,
            "unit": "ns",
            "range": "± 93128.67723859465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409718.5143229167,
            "unit": "ns",
            "range": "± 22372.476894277268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 966251.3122877039,
            "unit": "ns",
            "range": "± 24276.69518092174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2261505.982252038,
            "unit": "ns",
            "range": "± 160599.624942765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 682363.9663941688,
            "unit": "ns",
            "range": "± 42073.267931630835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 626388.4376717033,
            "unit": "ns",
            "range": "± 46827.8616681992"
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
          "id": "5dbfb0384307cfa2a0826a5a8bc975862f8b8b76",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:58:19+09:00",
          "tree_id": "a772813d589691ef608dc18f3e41cd487ddb65fc",
          "url": "https://github.com/greymistcube/libplanet/commit/5dbfb0384307cfa2a0826a5a8bc975862f8b8b76"
        },
        "date": 1707153471478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7628812.692307692,
            "unit": "ns",
            "range": "± 126987.01079991386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20806020.204545453,
            "unit": "ns",
            "range": "± 2934839.998690278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51391906.8625,
            "unit": "ns",
            "range": "± 2598255.027270553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130703458.9623656,
            "unit": "ns",
            "range": "± 18747965.906701904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272432988.11290324,
            "unit": "ns",
            "range": "± 45304998.0174241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51992.27777777778,
            "unit": "ns",
            "range": "± 13561.561523085918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245336.2888888889,
            "unit": "ns",
            "range": "± 18481.079286084107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248875.25274725276,
            "unit": "ns",
            "range": "± 25913.467534852476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222100.15168539327,
            "unit": "ns",
            "range": "± 26063.454870714144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4171402.307017544,
            "unit": "ns",
            "range": "± 180151.93137484562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3821551.2441860465,
            "unit": "ns",
            "range": "± 346654.42440841265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18275.23232323232,
            "unit": "ns",
            "range": "± 4481.305715398461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92418.06842105264,
            "unit": "ns",
            "range": "± 17077.936899946864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108302.77173913043,
            "unit": "ns",
            "range": "± 21445.271026193277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85610.3829787234,
            "unit": "ns",
            "range": "± 20847.514830932334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5278.34375,
            "unit": "ns",
            "range": "± 1440.6171800792442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16655.252688172044,
            "unit": "ns",
            "range": "± 4060.9507605333497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1083805.9175257732,
            "unit": "ns",
            "range": "± 113062.58017950632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2394357.6685393257,
            "unit": "ns",
            "range": "± 136703.17628909758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1875909.9777777777,
            "unit": "ns",
            "range": "± 222740.7400378941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 22152135.12105263,
            "unit": "ns",
            "range": "± 4531689.391210932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3003952,
            "unit": "ns",
            "range": "± 240557.56327351663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3018652.3225806453,
            "unit": "ns",
            "range": "± 137351.89573330825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4591169.827956989,
            "unit": "ns",
            "range": "± 1099174.2979256276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4088998.977272727,
            "unit": "ns",
            "range": "± 446868.2285918088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24208709.085106384,
            "unit": "ns",
            "range": "± 3170627.3128097183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4807165.200034341,
            "unit": "ns",
            "range": "± 348880.94229860866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1734114.9579190342,
            "unit": "ns",
            "range": "± 327318.03179460013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 944521.2519309304,
            "unit": "ns",
            "range": "± 35364.33934061982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2213624.909917092,
            "unit": "ns",
            "range": "± 224958.17614802372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653802.878125,
            "unit": "ns",
            "range": "± 14601.342033996189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573451.4637974331,
            "unit": "ns",
            "range": "± 7557.970218443448"
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
          "id": "ba3e8609d30d572d5dfa8170984e9227f7714b0f",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T02:04:20+09:00",
          "tree_id": "a57b5d9db877a70376170edd3a1c97114c4f86bc",
          "url": "https://github.com/greymistcube/libplanet/commit/ba3e8609d30d572d5dfa8170984e9227f7714b0f"
        },
        "date": 1707154529077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14203912.810526315,
            "unit": "ns",
            "range": "± 2383481.778926266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 35498477.58510638,
            "unit": "ns",
            "range": "± 4478425.537556498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 89021729.51086956,
            "unit": "ns",
            "range": "± 6685750.055633515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 171729223.57142857,
            "unit": "ns",
            "range": "± 13369299.499463925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 366861144.8988764,
            "unit": "ns",
            "range": "± 37205653.44663899"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89181.43333333333,
            "unit": "ns",
            "range": "± 20497.174861949836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396184.9166666667,
            "unit": "ns",
            "range": "± 91164.04897345821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 388940.7113402062,
            "unit": "ns",
            "range": "± 83948.65031386731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 375630.2878787879,
            "unit": "ns",
            "range": "± 86911.94339713495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6964517.755102041,
            "unit": "ns",
            "range": "± 1497736.0829765722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6335399.080808081,
            "unit": "ns",
            "range": "± 1177668.4859194933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31327.79292929293,
            "unit": "ns",
            "range": "± 5722.557272745066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 143982.0164835165,
            "unit": "ns",
            "range": "± 28108.98638567888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102653.72222222222,
            "unit": "ns",
            "range": "± 16488.282512052414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130382.70879120879,
            "unit": "ns",
            "range": "± 29889.680475046334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10835.31914893617,
            "unit": "ns",
            "range": "± 1841.7881619795123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31969.46875,
            "unit": "ns",
            "range": "± 5866.112065707082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2111180.755319149,
            "unit": "ns",
            "range": "± 555862.195662258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4276368.75,
            "unit": "ns",
            "range": "± 1008826.6014698567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3427248.5625,
            "unit": "ns",
            "range": "± 903415.6074646901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 36485065.67021277,
            "unit": "ns",
            "range": "± 7813018.806376188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4170633.157303371,
            "unit": "ns",
            "range": "± 669898.0159649455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5189768.172043011,
            "unit": "ns",
            "range": "± 1334836.3714814784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6116613.958333333,
            "unit": "ns",
            "range": "± 1251950.8650135465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7324299.489795919,
            "unit": "ns",
            "range": "± 1416914.45941581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39149664.86734694,
            "unit": "ns",
            "range": "± 7105411.655519779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8772425.669056056,
            "unit": "ns",
            "range": "± 702758.5417512469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2520245.9979029605,
            "unit": "ns",
            "range": "± 169591.502088702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346425.7198675096,
            "unit": "ns",
            "range": "± 234418.6095546389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2773339.386328125,
            "unit": "ns",
            "range": "± 63384.62691570628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 719777.2948878089,
            "unit": "ns",
            "range": "± 38823.91691219397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 626530.5133463541,
            "unit": "ns",
            "range": "± 34306.144935404"
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
          "id": "74d8fbcbb0cc43266cafe7e5b39ecdf7073f65da",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T10:18:06+09:00",
          "tree_id": "d8093f71bda1d6357463a066a3fc42579702174f",
          "url": "https://github.com/greymistcube/libplanet/commit/74d8fbcbb0cc43266cafe7e5b39ecdf7073f65da"
        },
        "date": 1707184206837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12322913.42857143,
            "unit": "ns",
            "range": "± 2290090.866639862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29731677.35263158,
            "unit": "ns",
            "range": "± 5236958.244159508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 88337452.51136364,
            "unit": "ns",
            "range": "± 27805303.336442944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 172099439.16292134,
            "unit": "ns",
            "range": "± 23529150.443772633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 407177571.6631579,
            "unit": "ns",
            "range": "± 77840030.37036344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106867.59340659341,
            "unit": "ns",
            "range": "± 40234.83825353844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409226.5360824742,
            "unit": "ns",
            "range": "± 94427.83765329105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343778.8218390805,
            "unit": "ns",
            "range": "± 39568.256294924046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320622.9597701149,
            "unit": "ns",
            "range": "± 36099.437034779556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6704062.198924731,
            "unit": "ns",
            "range": "± 1557313.9913213153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5274675.797752809,
            "unit": "ns",
            "range": "± 517029.2608030512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26742.026315789473,
            "unit": "ns",
            "range": "± 4630.195645979205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120772.94444444444,
            "unit": "ns",
            "range": "± 13894.647955247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123525.60227272728,
            "unit": "ns",
            "range": "± 35455.392844199974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121507.87912087912,
            "unit": "ns",
            "range": "± 34311.6478051907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9904.564516129032,
            "unit": "ns",
            "range": "± 2284.0720730578664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26787.804347826088,
            "unit": "ns",
            "range": "± 5899.70518492169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744086.6210526316,
            "unit": "ns",
            "range": "± 529592.299921006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3503364.388888889,
            "unit": "ns",
            "range": "± 535434.59273082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3049007.1276595746,
            "unit": "ns",
            "range": "± 696975.7363138559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 42736328.74226804,
            "unit": "ns",
            "range": "± 15694250.516852876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5349588.326530612,
            "unit": "ns",
            "range": "± 1264705.9095439224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5239438.853535353,
            "unit": "ns",
            "range": "± 1182464.3876848402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6739485.336842106,
            "unit": "ns",
            "range": "± 1520322.7802549638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6812878.855670103,
            "unit": "ns",
            "range": "± 1491942.46097503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 42083372.526315786,
            "unit": "ns",
            "range": "± 9188777.853675805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9275671.30859375,
            "unit": "ns",
            "range": "± 1577948.4323640962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2896926.6534830728,
            "unit": "ns",
            "range": "± 296230.8366822687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1626095.6340650476,
            "unit": "ns",
            "range": "± 325090.3582320384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3591592.050820707,
            "unit": "ns",
            "range": "± 324836.6330358357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 891348.4618489583,
            "unit": "ns",
            "range": "± 24773.922705506804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706003.6310467961,
            "unit": "ns",
            "range": "± 92763.7584642908"
          }
        ]
      }
    ]
  }
}