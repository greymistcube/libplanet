window.BENCHMARK_DATA = {
  "lastUpdate": 1706591533769,
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
          "id": "3bfb177dea4fbeab3cfe3d2d096125167ffb01d8",
          "message": "Docs",
          "timestamp": "2024-01-29T16:27:36+09:00",
          "tree_id": "fdad3c26c9ec0916fac7160a6edbc1a55e75d984",
          "url": "https://github.com/greymistcube/libplanet/commit/3bfb177dea4fbeab3cfe3d2d096125167ffb01d8"
        },
        "date": 1706513958373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956675.5102040817,
            "unit": "ns",
            "range": "± 98297.83514435556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1676100,
            "unit": "ns",
            "range": "± 72975.89364051378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1472889.6907216494,
            "unit": "ns",
            "range": "± 148182.63610359913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10798589.361702127,
            "unit": "ns",
            "range": "± 979386.1128847072"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34096.875,
            "unit": "ns",
            "range": "± 1591.3425249599886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4982714.285714285,
            "unit": "ns",
            "range": "± 17686.92942620263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12920300,
            "unit": "ns",
            "range": "± 86944.49157585899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32334914.285714287,
            "unit": "ns",
            "range": "± 225000.1841269088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64622060,
            "unit": "ns",
            "range": "± 305378.4836652941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130337084.61538461,
            "unit": "ns",
            "range": "± 781844.4717953329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3300005.703125,
            "unit": "ns",
            "range": "± 4394.711912953062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082753.2161458333,
            "unit": "ns",
            "range": "± 7062.275245790821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747098.4309895834,
            "unit": "ns",
            "range": "± 4259.969451474102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949807.8450520833,
            "unit": "ns",
            "range": "± 1288.46190014039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620294.1471354166,
            "unit": "ns",
            "range": "± 2590.2516201235353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579315.5729166666,
            "unit": "ns",
            "range": "± 1171.0172205157469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166620.6896551726,
            "unit": "ns",
            "range": "± 61301.70342139387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254072.5490196077,
            "unit": "ns",
            "range": "± 92044.44595613876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2732141.935483871,
            "unit": "ns",
            "range": "± 48203.13803196875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2873920,
            "unit": "ns",
            "range": "± 65742.56690644407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12150306.451612903,
            "unit": "ns",
            "range": "± 1466862.0417486923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167932.35294117648,
            "unit": "ns",
            "range": "± 8054.134771553641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158085.48387096773,
            "unit": "ns",
            "range": "± 7164.755421773582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137185.29411764705,
            "unit": "ns",
            "range": "± 3270.263853032229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2814314.285714286,
            "unit": "ns",
            "range": "± 18739.46297329442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484493.75,
            "unit": "ns",
            "range": "± 46930.84939568002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9448.91304347826,
            "unit": "ns",
            "range": "± 1184.4685890766868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49298.7012987013,
            "unit": "ns",
            "range": "± 2524.7456102438637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43097.5,
            "unit": "ns",
            "range": "± 1400.4555119766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49621.42857142857,
            "unit": "ns",
            "range": "± 10174.926226334037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2110.6382978723404,
            "unit": "ns",
            "range": "± 244.60549106558747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10706.666666666666,
            "unit": "ns",
            "range": "± 1472.504554465401"
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
          "id": "b44b0e951509bfbac62e1775439e93326a535805",
          "message": "Docs",
          "timestamp": "2024-01-30T14:00:18+09:00",
          "tree_id": "47eead3d02e7f7c2fa50f1115d0fa13d499ca7ed",
          "url": "https://github.com/greymistcube/libplanet/commit/b44b0e951509bfbac62e1775439e93326a535805"
        },
        "date": 1706591515419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 907486.8686868687,
            "unit": "ns",
            "range": "± 67361.30519856342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1687002.8985507246,
            "unit": "ns",
            "range": "± 77744.81062881397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1434162.7659574468,
            "unit": "ns",
            "range": "± 132951.15198362365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11092913.978494624,
            "unit": "ns",
            "range": "± 998599.45680366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33701.11111111111,
            "unit": "ns",
            "range": "± 1971.2822750028279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5112246.666666667,
            "unit": "ns",
            "range": "± 25543.544520419764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13120884.615384616,
            "unit": "ns",
            "range": "± 57634.89750365147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32498438.46153846,
            "unit": "ns",
            "range": "± 301027.2566243283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65698673.333333336,
            "unit": "ns",
            "range": "± 605531.3905590535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130581753.33333333,
            "unit": "ns",
            "range": "± 2279163.9083747566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3271813.4895833335,
            "unit": "ns",
            "range": "± 15581.229424704494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058534.8046875,
            "unit": "ns",
            "range": "± 3708.240302113453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735473.2356770834,
            "unit": "ns",
            "range": "± 2158.0756635643534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945607.34375,
            "unit": "ns",
            "range": "± 2443.8278267244427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601928.7890625,
            "unit": "ns",
            "range": "± 663.6658994501414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568968.4919084822,
            "unit": "ns",
            "range": "± 2718.0544309608595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113453.3333333335,
            "unit": "ns",
            "range": "± 78856.71586088046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301906.779661017,
            "unit": "ns",
            "range": "± 98825.73458018251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810516.6666666665,
            "unit": "ns",
            "range": "± 130525.90374824368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2761768.1818181816,
            "unit": "ns",
            "range": "± 130132.75843607489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12264648.888888888,
            "unit": "ns",
            "range": "± 1308999.4928363962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165820.96774193548,
            "unit": "ns",
            "range": "± 6558.066915720936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159181.81818181818,
            "unit": "ns",
            "range": "± 7930.881136297916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139576.92307692306,
            "unit": "ns",
            "range": "± 3328.580200903405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2819560,
            "unit": "ns",
            "range": "± 34839.75151625346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2394023.076923077,
            "unit": "ns",
            "range": "± 22144.342913641016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10816.494845360825,
            "unit": "ns",
            "range": "± 2335.5798892874523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52587.6404494382,
            "unit": "ns",
            "range": "± 3023.161358003749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43758.730158730155,
            "unit": "ns",
            "range": "± 2020.750014118434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48527.95698924731,
            "unit": "ns",
            "range": "± 8516.472090466521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2220.618556701031,
            "unit": "ns",
            "range": "± 341.2410390550867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10218.75,
            "unit": "ns",
            "range": "± 1173.3274770587504"
          }
        ]
      }
    ]
  }
}