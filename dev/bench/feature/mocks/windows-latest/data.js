window.BENCHMARK_DATA = {
  "lastUpdate": 1706513839468,
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
          "id": "0260c38d672dc87ffaec6b4432e9da1bae36bfd2",
          "message": "Removed old mock implementation",
          "timestamp": "2024-01-29T15:51:46+09:00",
          "tree_id": "6cc0d42fcbe6db2688a869016e15ade9b9e2573c",
          "url": "https://github.com/greymistcube/libplanet/commit/0260c38d672dc87ffaec6b4432e9da1bae36bfd2"
        },
        "date": 1706511836289,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944425.5102040817,
            "unit": "ns",
            "range": "± 90571.67044308285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734642.857142857,
            "unit": "ns",
            "range": "± 61900.669759435295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1537513.4020618557,
            "unit": "ns",
            "range": "± 143313.11409874677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10921745.263157895,
            "unit": "ns",
            "range": "± 843267.4650490808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34688.23529411765,
            "unit": "ns",
            "range": "± 1661.9112726432531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5090521.428571428,
            "unit": "ns",
            "range": "± 35538.498703657846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13010792.857142856,
            "unit": "ns",
            "range": "± 95411.33995080873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33314707.692307692,
            "unit": "ns",
            "range": "± 324740.225568937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65663153.333333336,
            "unit": "ns",
            "range": "± 905204.4030151949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131101864.28571428,
            "unit": "ns",
            "range": "± 1913413.8124977418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342813.1975446427,
            "unit": "ns",
            "range": "± 11889.268388337912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1091169.8697916667,
            "unit": "ns",
            "range": "± 2404.0163453530786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746474.6028645834,
            "unit": "ns",
            "range": "± 2940.2826057960365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958613.75,
            "unit": "ns",
            "range": "± 6846.311094551293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624780.1339285715,
            "unit": "ns",
            "range": "± 1254.0224397078541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571498.7530048077,
            "unit": "ns",
            "range": "± 1755.784899284165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2223257.6923076925,
            "unit": "ns",
            "range": "± 32591.60069553866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255060.606060606,
            "unit": "ns",
            "range": "± 104933.34276693192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767923.3333333335,
            "unit": "ns",
            "range": "± 81536.59505604421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958231.3131313133,
            "unit": "ns",
            "range": "± 285564.4127082381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12512348.863636363,
            "unit": "ns",
            "range": "± 1554625.4963147226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181935.59322033898,
            "unit": "ns",
            "range": "± 6954.798956212362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175443.01075268816,
            "unit": "ns",
            "range": "± 11802.094488483834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143180,
            "unit": "ns",
            "range": "± 4706.616119264206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2857786.6666666665,
            "unit": "ns",
            "range": "± 41369.171866891185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484586.6666666665,
            "unit": "ns",
            "range": "± 27476.246017935115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12177.41935483871,
            "unit": "ns",
            "range": "± 1613.2689627408874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59156.382978723406,
            "unit": "ns",
            "range": "± 7777.726103150016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45764.89361702128,
            "unit": "ns",
            "range": "± 3437.145522581154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64276.5306122449,
            "unit": "ns",
            "range": "± 15175.596260439916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2851.546391752577,
            "unit": "ns",
            "range": "± 688.6147631994394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12492.307692307691,
            "unit": "ns",
            "range": "± 2268.001115482323"
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
          "id": "4cc06c954011980341cb82e2db6f2cacbfee6131",
          "message": "Changelog",
          "timestamp": "2024-01-29T16:14:56+09:00",
          "tree_id": "f6699468bc0f77065708208c3740c32cef6976ea",
          "url": "https://github.com/greymistcube/libplanet/commit/4cc06c954011980341cb82e2db6f2cacbfee6131"
        },
        "date": 1706513292185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997171.4285714285,
            "unit": "ns",
            "range": "± 127088.04258076489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729011.5384615385,
            "unit": "ns",
            "range": "± 70901.54912394343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554224.2424242424,
            "unit": "ns",
            "range": "± 131518.8246717658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10936176.59574468,
            "unit": "ns",
            "range": "± 920112.3373941062"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34381.08108108108,
            "unit": "ns",
            "range": "± 1633.944355759817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5107800,
            "unit": "ns",
            "range": "± 45125.14223288899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13548392.857142856,
            "unit": "ns",
            "range": "± 95202.68632510578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32320292.307692308,
            "unit": "ns",
            "range": "± 175406.22595154398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64841957.14285714,
            "unit": "ns",
            "range": "± 699894.0411170885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130550508.33333333,
            "unit": "ns",
            "range": "± 712841.4071463752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3341051.2555803573,
            "unit": "ns",
            "range": "± 12487.302612594998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068423.8839285714,
            "unit": "ns",
            "range": "± 2365.342513880159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747890.6389508928,
            "unit": "ns",
            "range": "± 2754.2222278537656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924857.03125,
            "unit": "ns",
            "range": "± 5442.042819146832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620045.4310825893,
            "unit": "ns",
            "range": "± 1500.4895175320846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563993.3854166666,
            "unit": "ns",
            "range": "± 1073.9328197655161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2115097.0588235296,
            "unit": "ns",
            "range": "± 55507.779882201925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282244.827586207,
            "unit": "ns",
            "range": "± 100043.19448243569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2766084.375,
            "unit": "ns",
            "range": "± 68475.26565153572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2764237.5,
            "unit": "ns",
            "range": "± 151694.85122419626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12243502.247191012,
            "unit": "ns",
            "range": "± 1435282.2805175367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174312.6436781609,
            "unit": "ns",
            "range": "± 9528.937623472171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168890.80459770115,
            "unit": "ns",
            "range": "± 9556.254888010772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147634.0909090909,
            "unit": "ns",
            "range": "± 5536.72488120441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2817113.3333333335,
            "unit": "ns",
            "range": "± 39636.07423739618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2517906.6666666665,
            "unit": "ns",
            "range": "± 33357.31803767603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12497.894736842105,
            "unit": "ns",
            "range": "± 2137.75478498276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58026.80412371134,
            "unit": "ns",
            "range": "± 8373.11565199296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46095.97701149425,
            "unit": "ns",
            "range": "± 2397.6153170948232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56138.20224719101,
            "unit": "ns",
            "range": "± 8731.428416124361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2945.1612903225805,
            "unit": "ns",
            "range": "± 625.4591581272703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11492.307692307691,
            "unit": "ns",
            "range": "± 1588.4465345621154"
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
          "id": "f4b597edecfacb13f24a121e518d696e3ed95f8d",
          "message": "Docs",
          "timestamp": "2024-01-29T16:25:47+09:00",
          "tree_id": "e10dd81feb732c8dcbeff0e808abdc7ac0cb363d",
          "url": "https://github.com/greymistcube/libplanet/commit/f4b597edecfacb13f24a121e518d696e3ed95f8d"
        },
        "date": 1706513821246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970464.1414141414,
            "unit": "ns",
            "range": "± 115010.06966570542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1711206.0606060605,
            "unit": "ns",
            "range": "± 80329.26448022993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542942.268041237,
            "unit": "ns",
            "range": "± 164366.52439178646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11009683.516483517,
            "unit": "ns",
            "range": "± 948749.1602998754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34513.23529411765,
            "unit": "ns",
            "range": "± 1647.1508111149471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5067350,
            "unit": "ns",
            "range": "± 30295.182404518986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13105164.285714285,
            "unit": "ns",
            "range": "± 190555.99866279107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34000920,
            "unit": "ns",
            "range": "± 551453.6740030196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65692892.85714286,
            "unit": "ns",
            "range": "± 456517.6763184628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130463000,
            "unit": "ns",
            "range": "± 1666544.6558673428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368329.0234375,
            "unit": "ns",
            "range": "± 7534.935584288824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062985.2734375,
            "unit": "ns",
            "range": "± 2676.0788393969856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730954.58984375,
            "unit": "ns",
            "range": "± 1663.4775174569334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911575.767299107,
            "unit": "ns",
            "range": "± 3302.587536383166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607985.44921875,
            "unit": "ns",
            "range": "± 795.8011486004691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557662.8255208334,
            "unit": "ns",
            "range": "± 1308.5317939021859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2144557.1428571427,
            "unit": "ns",
            "range": "± 61458.690905604955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253683.870967742,
            "unit": "ns",
            "range": "± 59325.52062855801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2765862.5,
            "unit": "ns",
            "range": "± 96578.22838879345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2732705.1948051946,
            "unit": "ns",
            "range": "± 139347.13459568282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12396932.954545455,
            "unit": "ns",
            "range": "± 1781786.5131818363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172464.0625,
            "unit": "ns",
            "range": "± 7816.27051869551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166035.22727272726,
            "unit": "ns",
            "range": "± 8618.691793051627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142759.52380952382,
            "unit": "ns",
            "range": "± 5212.745146545524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806773.3333333335,
            "unit": "ns",
            "range": "± 45573.166708157594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2538292.8571428573,
            "unit": "ns",
            "range": "± 44356.08906748472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10005.555555555555,
            "unit": "ns",
            "range": "± 1162.9448392447912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52855.78947368421,
            "unit": "ns",
            "range": "± 5159.26590088728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44114.28571428572,
            "unit": "ns",
            "range": "± 1193.4122524227762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55888.541666666664,
            "unit": "ns",
            "range": "± 11303.077082595151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2671.4285714285716,
            "unit": "ns",
            "range": "± 518.1250893823061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10053.191489361701,
            "unit": "ns",
            "range": "± 1292.7175782556264"
          }
        ]
      }
    ]
  }
}