window.BENCHMARK_DATA = {
  "lastUpdate": 1689324207228,
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
          "id": "f2c4aee1803596e177022ea1920efaac6587e0ef",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:22:48+09:00",
          "tree_id": "29f5b2dadb9582f291c89f15d3058758bae66af2",
          "url": "https://github.com/greymistcube/libplanet/commit/f2c4aee1803596e177022ea1920efaac6587e0ef"
        },
        "date": 1689323770610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7420212.142857143,
            "unit": "ns",
            "range": "± 124490.59332017336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18937700.45652174,
            "unit": "ns",
            "range": "± 443742.9776426151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46312677.166666664,
            "unit": "ns",
            "range": "± 984291.5639082611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94586079.86666666,
            "unit": "ns",
            "range": "± 804817.1288052129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192862737.26923078,
            "unit": "ns",
            "range": "± 1848532.5920037741"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54223.45652173913,
            "unit": "ns",
            "range": "± 5621.173737299182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300799.92424242425,
            "unit": "ns",
            "range": "± 13944.973657818413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299274.94680851063,
            "unit": "ns",
            "range": "± 17743.81072547992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279284.2397260274,
            "unit": "ns",
            "range": "± 13898.301834744052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180686.25,
            "unit": "ns",
            "range": "± 107959.57109683719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3832666.277777778,
            "unit": "ns",
            "range": "± 80907.834953843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17889.532967032967,
            "unit": "ns",
            "range": "± 2031.85563491192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84108.2947368421,
            "unit": "ns",
            "range": "± 7541.918700049975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79856.97849462366,
            "unit": "ns",
            "range": "± 6191.305613130777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99610.10416666667,
            "unit": "ns",
            "range": "± 12523.794709507065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4930.423529411764,
            "unit": "ns",
            "range": "± 553.7518005231523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17005.10975609756,
            "unit": "ns",
            "range": "± 1937.0940690243524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526970.28125,
            "unit": "ns",
            "range": "± 162124.49973407882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810862.8815789474,
            "unit": "ns",
            "range": "± 135226.94191626823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035632.3195876288,
            "unit": "ns",
            "range": "± 209899.53682444265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5518305.111111111,
            "unit": "ns",
            "range": "± 111082.94325142223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3044725.679245283,
            "unit": "ns",
            "range": "± 121414.45310663636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333764.7045454546,
            "unit": "ns",
            "range": "± 124364.73809194517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4263474.926829268,
            "unit": "ns",
            "range": "± 152442.2648761475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3790553.8936170214,
            "unit": "ns",
            "range": "± 229753.7356609008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6774802.162162162,
            "unit": "ns",
            "range": "± 142059.32545526995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6274601.965144231,
            "unit": "ns",
            "range": "± 43598.465760054234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926693.9921875,
            "unit": "ns",
            "range": "± 8363.358360249587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226316.1061197917,
            "unit": "ns",
            "range": "± 7862.255004447377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2388341.471875,
            "unit": "ns",
            "range": "± 20636.242187335596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826319.7501953125,
            "unit": "ns",
            "range": "± 3504.1104268030663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737870.3503255208,
            "unit": "ns",
            "range": "± 3795.6576556134596"
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
          "id": "f16dcf2de27aaa03bf5448c06e7c1089506aab0f",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:23:37+09:00",
          "tree_id": "517c6b292d84287d60461f4e3faf83a43b97c6a6",
          "url": "https://github.com/greymistcube/libplanet/commit/f16dcf2de27aaa03bf5448c06e7c1089506aab0f"
        },
        "date": 1689324193609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9919651.260416666,
            "unit": "ns",
            "range": "± 618490.2052184776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21599011.173913043,
            "unit": "ns",
            "range": "± 826367.1949721208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52434042.63333333,
            "unit": "ns",
            "range": "± 2328515.613856979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105764882.81578948,
            "unit": "ns",
            "range": "± 3573145.4914382766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215071319.07894737,
            "unit": "ns",
            "range": "± 4604923.812942805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71542.52173913043,
            "unit": "ns",
            "range": "± 10734.820481952273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323864.5,
            "unit": "ns",
            "range": "± 24371.8312877527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313123.93548387097,
            "unit": "ns",
            "range": "± 29483.932798333775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312011.161971831,
            "unit": "ns",
            "range": "± 15245.661142899136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333343.470588235,
            "unit": "ns",
            "range": "± 138991.78337263383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4551645.60989011,
            "unit": "ns",
            "range": "± 754437.8242991185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21504.637362637364,
            "unit": "ns",
            "range": "± 3815.7266455682634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113001.58421052631,
            "unit": "ns",
            "range": "± 21914.94281557345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107739.76086956522,
            "unit": "ns",
            "range": "± 11758.158243655664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122657.59793814433,
            "unit": "ns",
            "range": "± 22503.931816953216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6397.477777777778,
            "unit": "ns",
            "range": "± 1210.0803133136094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17846.010869565216,
            "unit": "ns",
            "range": "± 2585.5732822108816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655277.3210526316,
            "unit": "ns",
            "range": "± 178807.70557274946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3172783.5894736843,
            "unit": "ns",
            "range": "± 262988.4268874872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345665.4565217393,
            "unit": "ns",
            "range": "± 283976.49739833135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6560658.638297873,
            "unit": "ns",
            "range": "± 557220.5746333709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346424.4395604394,
            "unit": "ns",
            "range": "± 216577.52161366088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487798.0211267606,
            "unit": "ns",
            "range": "± 165347.44514505198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4572641.0227272725,
            "unit": "ns",
            "range": "± 165818.9264775353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3956532.272727273,
            "unit": "ns",
            "range": "± 259284.71013331012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7484167.4130434785,
            "unit": "ns",
            "range": "± 470874.25372784043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6960968.986979167,
            "unit": "ns",
            "range": "± 145893.38928954257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2140227.861586085,
            "unit": "ns",
            "range": "± 87693.95301603226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403390.0177083334,
            "unit": "ns",
            "range": "± 19772.4428149017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3064183.167416351,
            "unit": "ns",
            "range": "± 198068.9688035728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941123.0208675987,
            "unit": "ns",
            "range": "± 31595.398024125778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870240.2073877729,
            "unit": "ns",
            "range": "± 39809.127817114015"
          }
        ]
      }
    ]
  }
}