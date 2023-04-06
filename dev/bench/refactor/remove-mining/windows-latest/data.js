window.BENCHMARK_DATA = {
  "lastUpdate": 1680757779757,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680757334863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608362.7659574468,
            "unit": "ns",
            "range": "± 138790.00536049463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014598.947368421,
            "unit": "ns",
            "range": "± 198464.93580368554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2601254.347826087,
            "unit": "ns",
            "range": "± 215260.02850273563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6394987.62886598,
            "unit": "ns",
            "range": "± 423519.188186353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58966.31578947369,
            "unit": "ns",
            "range": "± 5817.190418690215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8262884.615384615,
            "unit": "ns",
            "range": "± 329703.72165384813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23275696.226415094,
            "unit": "ns",
            "range": "± 962875.7618082375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58745567.94871795,
            "unit": "ns",
            "range": "± 3003207.1040370488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117421600,
            "unit": "ns",
            "range": "± 4336818.8915588595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236244171.42857143,
            "unit": "ns",
            "range": "± 6605975.584488422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5740466.796875,
            "unit": "ns",
            "range": "± 72588.27927159963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854819.9479166667,
            "unit": "ns",
            "range": "± 29431.27534235207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422743.1119791667,
            "unit": "ns",
            "range": "± 22556.23956708419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3171747.9631696427,
            "unit": "ns",
            "range": "± 50489.410474657154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999862.1940104166,
            "unit": "ns",
            "range": "± 15152.402703910497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939464.19921875,
            "unit": "ns",
            "range": "± 21175.95712178648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530941.975308642,
            "unit": "ns",
            "range": "± 184465.09687756482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882884,
            "unit": "ns",
            "range": "± 195238.4336055705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531662.962962963,
            "unit": "ns",
            "range": "± 188283.2253335347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4875465.306122449,
            "unit": "ns",
            "range": "± 193005.02751549895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8336081.720430108,
            "unit": "ns",
            "range": "± 481507.34405574406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371817.7419354839,
            "unit": "ns",
            "range": "± 16754.657039834474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305851.92307692306,
            "unit": "ns",
            "range": "± 12465.332166981452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260593.67088607594,
            "unit": "ns",
            "range": "± 13563.869255206886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6122895.918367347,
            "unit": "ns",
            "range": "± 241222.9328159463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4433914.814814814,
            "unit": "ns",
            "range": "± 119305.24749470192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25144.086021505376,
            "unit": "ns",
            "range": "± 2770.5933427301707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106990.72164948453,
            "unit": "ns",
            "range": "± 10991.76853447451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105254.25531914894,
            "unit": "ns",
            "range": "± 12649.840960312822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211001.03092783506,
            "unit": "ns",
            "range": "± 21561.233029663454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8584.69387755102,
            "unit": "ns",
            "range": "± 1358.0118913601348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24218.947368421053,
            "unit": "ns",
            "range": "± 2493.4507720265096"
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
          "id": "2da78731588597800cc25bf5e5ee336ffab1b965",
          "message": "Remove mining",
          "timestamp": "2023-04-06T13:45:24+09:00",
          "tree_id": "c19cda80e6181d02f1edc94274a212e9c9e3677b",
          "url": "https://github.com/greymistcube/libplanet/commit/2da78731588597800cc25bf5e5ee336ffab1b965"
        },
        "date": 1680757435146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1736202.1276595744,
            "unit": "ns",
            "range": "± 190607.31009615306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3414760.638297872,
            "unit": "ns",
            "range": "± 209713.1703311475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2782691.6666666665,
            "unit": "ns",
            "range": "± 260351.779295737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7201168.421052632,
            "unit": "ns",
            "range": "± 416954.5172050462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65353.06122448979,
            "unit": "ns",
            "range": "± 9376.194951546646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8848040,
            "unit": "ns",
            "range": "± 260132.60623686953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23963335,
            "unit": "ns",
            "range": "± 551907.6708395879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60365390.47619048,
            "unit": "ns",
            "range": "± 1434390.1125233546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118715846.15384616,
            "unit": "ns",
            "range": "± 1841484.2200497696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248708871.0526316,
            "unit": "ns",
            "range": "± 8568070.30007208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6115265.520833333,
            "unit": "ns",
            "range": "± 105421.74542425359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976797.1744791667,
            "unit": "ns",
            "range": "± 32422.875298789146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1429290.1302083333,
            "unit": "ns",
            "range": "± 22602.95732199334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3175453.4895833335,
            "unit": "ns",
            "range": "± 40257.35395172797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1057707.5106534092,
            "unit": "ns",
            "range": "± 25636.751569596312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 936743.2161458334,
            "unit": "ns",
            "range": "± 10817.551698525996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3785974.6835443038,
            "unit": "ns",
            "range": "± 194377.36326758866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4006659.139784946,
            "unit": "ns",
            "range": "± 226315.50228202448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5072625.757575758,
            "unit": "ns",
            "range": "± 236719.05666396779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4948767.105263158,
            "unit": "ns",
            "range": "± 249948.03800692005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9025560.46511628,
            "unit": "ns",
            "range": "± 332675.21565945394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370167.5324675325,
            "unit": "ns",
            "range": "± 18956.28240229026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300443.05555555556,
            "unit": "ns",
            "range": "± 14780.648048352428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255578.46153846153,
            "unit": "ns",
            "range": "± 11881.031261896158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6548115.7894736845,
            "unit": "ns",
            "range": "± 225220.22078859303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4697535.714285715,
            "unit": "ns",
            "range": "± 168354.24733525084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22011.340206185567,
            "unit": "ns",
            "range": "± 3513.0078603390743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97957,
            "unit": "ns",
            "range": "± 11080.278731497541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104869.07216494845,
            "unit": "ns",
            "range": "± 15825.331492214875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221304.34782608695,
            "unit": "ns",
            "range": "± 18237.673320394348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8218.08510638298,
            "unit": "ns",
            "range": "± 1569.8751930364647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21570.526315789473,
            "unit": "ns",
            "range": "± 3296.609272990689"
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
          "id": "01050906a03605f36e1f804d985efea217f19791",
          "message": "Additional changelog",
          "timestamp": "2023-04-06T13:54:21+09:00",
          "tree_id": "486653c5b207b6caa4dcc32c38e8142a14e1ce40",
          "url": "https://github.com/greymistcube/libplanet/commit/01050906a03605f36e1f804d985efea217f19791"
        },
        "date": 1680757758504,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1289259,
            "unit": "ns",
            "range": "± 132681.32102328815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498298.9795918367,
            "unit": "ns",
            "range": "± 158587.73190347428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026054.7368421052,
            "unit": "ns",
            "range": "± 120244.48743804649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5388888,
            "unit": "ns",
            "range": "± 363407.7983964482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46892.307692307695,
            "unit": "ns",
            "range": "± 2419.282346673714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6807664.285714285,
            "unit": "ns",
            "range": "± 102993.11110004365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18348878.57142857,
            "unit": "ns",
            "range": "± 238719.81703234452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45853769.23076923,
            "unit": "ns",
            "range": "± 566863.2600910255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92049922.72727273,
            "unit": "ns",
            "range": "± 2251670.198971214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185071696.66666666,
            "unit": "ns",
            "range": "± 2778869.3910773615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869379.739583333,
            "unit": "ns",
            "range": "± 29001.836954902396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512950.15625,
            "unit": "ns",
            "range": "± 9471.508500687238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149782.7734375,
            "unit": "ns",
            "range": "± 11605.725276473868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609342.4386160714,
            "unit": "ns",
            "range": "± 15853.383130904735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861780.76171875,
            "unit": "ns",
            "range": "± 2637.5941348210117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777800.0520833334,
            "unit": "ns",
            "range": "± 2860.9036670910664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128655.5555555555,
            "unit": "ns",
            "range": "± 65592.62173555644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3341406.896551724,
            "unit": "ns",
            "range": "± 87361.49008996421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876540.5405405406,
            "unit": "ns",
            "range": "± 119749.28777208623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960360,
            "unit": "ns",
            "range": "± 149377.31420801487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6609784.848484849,
            "unit": "ns",
            "range": "± 207623.31895949834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290202.0833333333,
            "unit": "ns",
            "range": "± 11373.326195922864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248811.76470588235,
            "unit": "ns",
            "range": "± 7999.195592356596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208115.625,
            "unit": "ns",
            "range": "± 6479.202926635045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5113692.307692308,
            "unit": "ns",
            "range": "± 51245.52763475172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3613240,
            "unit": "ns",
            "range": "± 62623.475744210446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20007.36842105263,
            "unit": "ns",
            "range": "± 1944.3448880466171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88189.79591836735,
            "unit": "ns",
            "range": "± 5661.3081763139935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80313.1313131313,
            "unit": "ns",
            "range": "± 7143.694900366315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 171555.10204081633,
            "unit": "ns",
            "range": "± 22454.219737280982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5830.851063829788,
            "unit": "ns",
            "range": "± 791.7622370036933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17614.736842105263,
            "unit": "ns",
            "range": "± 1409.0111532600436"
          }
        ]
      }
    ]
  }
}