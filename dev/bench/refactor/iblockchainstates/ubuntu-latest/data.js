window.BENCHMARK_DATA = {
  "lastUpdate": 1704594767102,
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
      }
    ]
  }
}