window.BENCHMARK_DATA = {
  "lastUpdate": 1704760564421,
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
          "id": "47423efb53fe7d199ca1c6a6c65d71408d84ba05",
          "message": "Removed arguments to redirect to legacy by default; removed GetAccountState()",
          "timestamp": "2024-01-06T19:37:09+09:00",
          "tree_id": "8d0db7b7b7b68a376e7c8289e76431a2128dd358",
          "url": "https://github.com/greymistcube/libplanet/commit/47423efb53fe7d199ca1c6a6c65d71408d84ba05"
        },
        "date": 1704594444952,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744386.4051339286,
            "unit": "ns",
            "range": "± 10012.126336890404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216855.6219308036,
            "unit": "ns",
            "range": "± 2032.262151451629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776177.6052734375,
            "unit": "ns",
            "range": "± 12071.106468664477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1907017.286733774,
            "unit": "ns",
            "range": "± 2333.5212999818623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615797.1775251116,
            "unit": "ns",
            "range": "± 1367.9540189110971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573822.7631835938,
            "unit": "ns",
            "range": "± 2235.28846002001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2348892.3902439023,
            "unit": "ns",
            "range": "± 82991.46536387884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510203.5454545454,
            "unit": "ns",
            "range": "± 59796.16393770174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3099263.2352941176,
            "unit": "ns",
            "range": "± 99737.69694130238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153751,
            "unit": "ns",
            "range": "± 85873.54981778552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13726098.346153846,
            "unit": "ns",
            "range": "± 978622.0448861404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39115.104166666664,
            "unit": "ns",
            "range": "± 4992.10974592415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203229.68085106384,
            "unit": "ns",
            "range": "± 7855.3842296815565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186727.95238095237,
            "unit": "ns",
            "range": "± 6819.142839891819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168579.67647058822,
            "unit": "ns",
            "range": "± 2360.071297527209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169869.5,
            "unit": "ns",
            "range": "± 31886.01203023526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2794981,
            "unit": "ns",
            "range": "± 51210.46692815835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14953.641414141413,
            "unit": "ns",
            "range": "± 2998.1416251217647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61070.15517241379,
            "unit": "ns",
            "range": "± 4996.245778553263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51125.38461538462,
            "unit": "ns",
            "range": "± 805.6799962828023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61463.38144329897,
            "unit": "ns",
            "range": "± 9172.373170108996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3106.755319148936,
            "unit": "ns",
            "range": "± 364.8533270236406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11813.239130434782,
            "unit": "ns",
            "range": "± 869.4643970816987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5593427.333333333,
            "unit": "ns",
            "range": "± 20458.83936250065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14348881.8,
            "unit": "ns",
            "range": "± 107028.81701952984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36439148.166666664,
            "unit": "ns",
            "range": "± 258896.63411198521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75328742.13333334,
            "unit": "ns",
            "range": "± 966869.3190651735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150720162,
            "unit": "ns",
            "range": "± 1091427.6223683234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006659.4278350516,
            "unit": "ns",
            "range": "± 104700.46173710738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1961494.925531915,
            "unit": "ns",
            "range": "± 111061.4335895809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1582767.5112359552,
            "unit": "ns",
            "range": "± 119969.87398722745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12745358.366666667,
            "unit": "ns",
            "range": "± 990903.609233925"
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
          "id": "74cdc54b8909688ab3000808a3bbdecc052476a8",
          "message": "Changelog",
          "timestamp": "2024-01-07T11:18:21+09:00",
          "tree_id": "63a306cd17f2b45b0a1dff2f1d00badac83d7391",
          "url": "https://github.com/greymistcube/libplanet/commit/74cdc54b8909688ab3000808a3bbdecc052476a8"
        },
        "date": 1704594760124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702419.9654947915,
            "unit": "ns",
            "range": "± 7235.481875748643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214533.8214285714,
            "unit": "ns",
            "range": "± 2801.6163464325887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778266.8092215402,
            "unit": "ns",
            "range": "± 5068.2349660521195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975418.93046875,
            "unit": "ns",
            "range": "± 44135.504409325746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629234.7290852865,
            "unit": "ns",
            "range": "± 3240.2894927982984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583144.0487583706,
            "unit": "ns",
            "range": "± 1208.965745621126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2293519.5,
            "unit": "ns",
            "range": "± 43588.15473267938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2482346.2,
            "unit": "ns",
            "range": "± 65788.06432464275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3107658.772727273,
            "unit": "ns",
            "range": "± 75769.13395241012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3329624.8333333335,
            "unit": "ns",
            "range": "± 48771.261576973004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13944464.596774194,
            "unit": "ns",
            "range": "± 1067625.3327755833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40972.8085106383,
            "unit": "ns",
            "range": "± 5689.040743973755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195774.2,
            "unit": "ns",
            "range": "± 5729.4592520315255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191587,
            "unit": "ns",
            "range": "± 7380.163942774051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174769,
            "unit": "ns",
            "range": "± 1538.0525565359158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106336.4166666665,
            "unit": "ns",
            "range": "± 21877.457790064655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2915441.5714285714,
            "unit": "ns",
            "range": "± 47759.73747304842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14889,
            "unit": "ns",
            "range": "± 2654.00161865752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66003.23232323233,
            "unit": "ns",
            "range": "± 7954.109614004425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52666.53571428572,
            "unit": "ns",
            "range": "± 694.7483680970723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64747.30927835051,
            "unit": "ns",
            "range": "± 9884.674413328807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2837.5108695652175,
            "unit": "ns",
            "range": "± 263.0080638284613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13539.551020408164,
            "unit": "ns",
            "range": "± 2180.834064989715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5516650.357142857,
            "unit": "ns",
            "range": "± 10382.378344743876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14166677.388888888,
            "unit": "ns",
            "range": "± 253203.7689369941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38669797.766666666,
            "unit": "ns",
            "range": "± 331445.84330722585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73074566.15384616,
            "unit": "ns",
            "range": "± 253127.46701870917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147048929.25,
            "unit": "ns",
            "range": "± 385560.1579916786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997568.6875,
            "unit": "ns",
            "range": "± 97437.7218992308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1926555.9107142857,
            "unit": "ns",
            "range": "± 79303.53044400224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649815.4375,
            "unit": "ns",
            "range": "± 184142.18179375542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12918220.611111112,
            "unit": "ns",
            "range": "± 1075503.932452045"
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
          "id": "077e3f72ba03285187d2f1c3071f9bd4014f72f2",
          "message": "Remove direct access to lower level data",
          "timestamp": "2024-01-09T09:23:39+09:00",
          "tree_id": "779d437ba8029b16cf2eb6d461e57fc93d041c3d",
          "url": "https://github.com/greymistcube/libplanet/commit/077e3f72ba03285187d2f1c3071f9bd4014f72f2"
        },
        "date": 1704760506001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3732809.443810096,
            "unit": "ns",
            "range": "± 12965.491511842025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194056.2934194712,
            "unit": "ns",
            "range": "± 5842.262818047719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774514.5233677456,
            "unit": "ns",
            "range": "± 3205.1055064094653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953774.4388950893,
            "unit": "ns",
            "range": "± 4892.767468229818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 670139.4569769965,
            "unit": "ns",
            "range": "± 13708.967843649141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576937.21953125,
            "unit": "ns",
            "range": "± 1823.2925494077379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2568772.714285714,
            "unit": "ns",
            "range": "± 71999.8131576059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2596671.6341463416,
            "unit": "ns",
            "range": "± 90409.613860683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3229502.9024390243,
            "unit": "ns",
            "range": "± 114870.05020604911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3284561.4,
            "unit": "ns",
            "range": "± 145791.52405522676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14114065.233333332,
            "unit": "ns",
            "range": "± 968989.0128680808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41053.9175257732,
            "unit": "ns",
            "range": "± 5138.548104097806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218334.96875,
            "unit": "ns",
            "range": "± 14289.855333106714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200576.25,
            "unit": "ns",
            "range": "± 8553.067267467162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174773.39393939395,
            "unit": "ns",
            "range": "± 5419.712964836064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3265689.9,
            "unit": "ns",
            "range": "± 38680.811336962855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825368.8333333335,
            "unit": "ns",
            "range": "± 34809.83277479976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19970.27319587629,
            "unit": "ns",
            "range": "± 4195.215271853248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70352.06593406593,
            "unit": "ns",
            "range": "± 6786.0578489236095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99512.33333333333,
            "unit": "ns",
            "range": "± 1866.0656728095332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94122.07216494845,
            "unit": "ns",
            "range": "± 13768.051444866407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6979.207070707071,
            "unit": "ns",
            "range": "± 970.8381635717944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17024.627659574468,
            "unit": "ns",
            "range": "± 2127.4188218925888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5662889.466666667,
            "unit": "ns",
            "range": "± 47854.03634844291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14642622.73076923,
            "unit": "ns",
            "range": "± 71562.38474943132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37488664.928571425,
            "unit": "ns",
            "range": "± 179065.445576348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75743055.03333333,
            "unit": "ns",
            "range": "± 272643.2323966528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150114808.07142857,
            "unit": "ns",
            "range": "± 477747.84766837384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038714.4536082475,
            "unit": "ns",
            "range": "± 107265.65707450558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2022803.677419355,
            "unit": "ns",
            "range": "± 91669.25471869574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1727701.1145833333,
            "unit": "ns",
            "range": "± 128044.21988301497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12889363.25,
            "unit": "ns",
            "range": "± 1026144.3688768039"
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
          "id": "4ef421f019a4d18b6b904a749791f29e31fd9e43",
          "message": "Remove direct access to lower level data",
          "timestamp": "2024-01-09T09:24:36+09:00",
          "tree_id": "e2a7d595b94e704435fbe64917636259acd9f815",
          "url": "https://github.com/greymistcube/libplanet/commit/4ef421f019a4d18b6b904a749791f29e31fd9e43"
        },
        "date": 1704760558219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3648251.4248046875,
            "unit": "ns",
            "range": "± 3746.559553280284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211735.9868489583,
            "unit": "ns",
            "range": "± 3310.9797129429003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775792.7385817308,
            "unit": "ns",
            "range": "± 2134.86576591502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943199.9517299107,
            "unit": "ns",
            "range": "± 4657.394458305642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614762.1424278846,
            "unit": "ns",
            "range": "± 952.8017302469325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574220.3209635416,
            "unit": "ns",
            "range": "± 1661.408267280255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2352251.4418604653,
            "unit": "ns",
            "range": "± 86517.60279913928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2487779.4,
            "unit": "ns",
            "range": "± 68080.00232863294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121855.4210526315,
            "unit": "ns",
            "range": "± 65744.36597011844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3110250.5555555555,
            "unit": "ns",
            "range": "± 114899.18866031204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13874605.90425532,
            "unit": "ns",
            "range": "± 974252.1736493236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40328.71134020619,
            "unit": "ns",
            "range": "± 5010.091942267549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193831.5892857143,
            "unit": "ns",
            "range": "± 7504.545092570806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192509.68604651163,
            "unit": "ns",
            "range": "± 6969.574552349163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168863.26315789475,
            "unit": "ns",
            "range": "± 3624.840867650534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3157456.076923077,
            "unit": "ns",
            "range": "± 40593.238855055526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2836365.3333333335,
            "unit": "ns",
            "range": "± 43473.95716594783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15129.278350515464,
            "unit": "ns",
            "range": "± 2524.1624796746446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63766.65979381443,
            "unit": "ns",
            "range": "± 8254.068889148195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57793.875,
            "unit": "ns",
            "range": "± 5410.900106558787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58593.53191489362,
            "unit": "ns",
            "range": "± 11202.552990232649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3423.840425531915,
            "unit": "ns",
            "range": "± 509.3996161029555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11674.511111111111,
            "unit": "ns",
            "range": "± 829.9974041443697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5667724.083333333,
            "unit": "ns",
            "range": "± 10131.822239928766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14061351.857142856,
            "unit": "ns",
            "range": "± 161811.47872832522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36873426.21428572,
            "unit": "ns",
            "range": "± 162014.3993245323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74810813.56666666,
            "unit": "ns",
            "range": "± 1024935.3580295036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149233979.5,
            "unit": "ns",
            "range": "± 729476.5289732664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992387.4166666666,
            "unit": "ns",
            "range": "± 92916.17708911696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1894036.4166666667,
            "unit": "ns",
            "range": "± 73690.87268890553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604515.6129032257,
            "unit": "ns",
            "range": "± 160438.03139665944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12968457.806451613,
            "unit": "ns",
            "range": "± 1040500.4617854444"
          }
        ]
      }
    ]
  }
}