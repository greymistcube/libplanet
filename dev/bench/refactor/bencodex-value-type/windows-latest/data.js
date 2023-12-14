window.BENCHMARK_DATA = {
  "lastUpdate": 1702517711943,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517153379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990785.7142857143,
            "unit": "ns",
            "range": "± 115017.22685853107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1756055.8823529412,
            "unit": "ns",
            "range": "± 80398.28724386575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1409353.7634408602,
            "unit": "ns",
            "range": "± 113951.34121646125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5298997.872340426,
            "unit": "ns",
            "range": "± 205279.90592842578"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34946.739130434784,
            "unit": "ns",
            "range": "± 2262.5207709304113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5097773.684210527,
            "unit": "ns",
            "range": "± 105206.14072754321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13292878.57142857,
            "unit": "ns",
            "range": "± 159656.40596929696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32990257.14285714,
            "unit": "ns",
            "range": "± 263321.8759041305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67052685.71428572,
            "unit": "ns",
            "range": "± 390984.580862887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135812966.66666666,
            "unit": "ns",
            "range": "± 1233711.586848324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303697.1540178573,
            "unit": "ns",
            "range": "± 6097.5569104189935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068719.7265625,
            "unit": "ns",
            "range": "± 1643.5176501051583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744808.96484375,
            "unit": "ns",
            "range": "± 1531.4393028043921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913401.5234375,
            "unit": "ns",
            "range": "± 3447.8004703844576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602961.23046875,
            "unit": "ns",
            "range": "± 1538.9507262150053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564875.2859933035,
            "unit": "ns",
            "range": "± 961.1407049454015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226986.9565217393,
            "unit": "ns",
            "range": "± 54649.21445287393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2378288.2352941176,
            "unit": "ns",
            "range": "± 80202.90679784324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2860378.947368421,
            "unit": "ns",
            "range": "± 62816.457317660956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702040.3846153845,
            "unit": "ns",
            "range": "± 111034.32124332916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6232078.571428572,
            "unit": "ns",
            "range": "± 227642.83271325342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180440.35087719298,
            "unit": "ns",
            "range": "± 7341.026097242878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174600,
            "unit": "ns",
            "range": "± 7660.864994177641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143850,
            "unit": "ns",
            "range": "± 2439.341020723551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2810016.6666666665,
            "unit": "ns",
            "range": "± 24991.465209813796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2599106.25,
            "unit": "ns",
            "range": "± 39978.46868419716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12958.247422680412,
            "unit": "ns",
            "range": "± 2096.657563395685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59273.11827956989,
            "unit": "ns",
            "range": "± 5832.687869184853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47569.89247311828,
            "unit": "ns",
            "range": "± 4062.414813721892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65136.36363636364,
            "unit": "ns",
            "range": "± 15619.444021471721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2889.6907216494847,
            "unit": "ns",
            "range": "± 518.3074489951391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12134.408602150537,
            "unit": "ns",
            "range": "± 1625.4427238819737"
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
          "id": "94ab506bcd153ff3d15d4961f03b4c20e94ab411",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:19:12+09:00",
          "tree_id": "0121cc3330c21941378a8b93fc4bb14de81402ba",
          "url": "https://github.com/greymistcube/libplanet/commit/94ab506bcd153ff3d15d4961f03b4c20e94ab411"
        },
        "date": 1702517461384,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934869.191919192,
            "unit": "ns",
            "range": "± 103648.82199707415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1636387.7551020407,
            "unit": "ns",
            "range": "± 62424.52653889689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1303638,
            "unit": "ns",
            "range": "± 102735.27595355222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5247087.179487179,
            "unit": "ns",
            "range": "± 180953.14627576532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33578.260869565216,
            "unit": "ns",
            "range": "± 1615.8106293033914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4893935.714285715,
            "unit": "ns",
            "range": "± 42288.34367753141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13111235.714285715,
            "unit": "ns",
            "range": "± 73323.93467077715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31639857.14285714,
            "unit": "ns",
            "range": "± 165236.27704819318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63451946.666666664,
            "unit": "ns",
            "range": "± 750622.7946242532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127362926.66666667,
            "unit": "ns",
            "range": "± 1124625.24708498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277459.8214285714,
            "unit": "ns",
            "range": "± 4804.133119735621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042414.8577008928,
            "unit": "ns",
            "range": "± 2644.832225684747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739148.1166294643,
            "unit": "ns",
            "range": "± 1776.2055909701483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915441.9020432692,
            "unit": "ns",
            "range": "± 3576.3229008687445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615704.7526041666,
            "unit": "ns",
            "range": "± 2286.970236722217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557986.0677083334,
            "unit": "ns",
            "range": "± 1219.2816152196986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2102526,
            "unit": "ns",
            "range": "± 84779.57447982144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2184795.4545454546,
            "unit": "ns",
            "range": "± 37900.33895152777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759772.8571428573,
            "unit": "ns",
            "range": "± 89742.20623447995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2613285.1063829786,
            "unit": "ns",
            "range": "± 97623.05273618478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6355242.307692308,
            "unit": "ns",
            "range": "± 327572.0503748956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168016.66666666666,
            "unit": "ns",
            "range": "± 7826.082295923299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161745.2380952381,
            "unit": "ns",
            "range": "± 8668.755761275765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141555.55555555556,
            "unit": "ns",
            "range": "± 3378.931707978054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2704060,
            "unit": "ns",
            "range": "± 46828.544408603724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458820,
            "unit": "ns",
            "range": "± 42813.28565493927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10027.173913043478,
            "unit": "ns",
            "range": "± 1054.6707481504832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51047.05882352941,
            "unit": "ns",
            "range": "± 2757.180592186005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44137.3417721519,
            "unit": "ns",
            "range": "± 2204.794722034149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53081.52173913043,
            "unit": "ns",
            "range": "± 11382.596406601007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2354.639175257732,
            "unit": "ns",
            "range": "± 369.12639506359614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10084.69387755102,
            "unit": "ns",
            "range": "± 1732.1164005085175"
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
          "id": "f5a81643918efef744a1a7f883191d66384c3830",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:23:23+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/f5a81643918efef744a1a7f883191d66384c3830"
        },
        "date": 1702517695551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973016.3265306122,
            "unit": "ns",
            "range": "± 116920.28118926508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724494.1176470588,
            "unit": "ns",
            "range": "± 69204.15713456729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1339831.3186813188,
            "unit": "ns",
            "range": "± 93773.20265416733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5309738.888888889,
            "unit": "ns",
            "range": "± 199920.87892034397"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34717.77777777778,
            "unit": "ns",
            "range": "± 1904.6116580657458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5114985.714285715,
            "unit": "ns",
            "range": "± 65796.30404797541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13589078.57142857,
            "unit": "ns",
            "range": "± 157251.3332636223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32288793.333333332,
            "unit": "ns",
            "range": "± 257359.9937460218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66502892.307692304,
            "unit": "ns",
            "range": "± 460571.6926848242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132470340,
            "unit": "ns",
            "range": "± 1649077.9829953464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277535.323660714,
            "unit": "ns",
            "range": "± 6778.836382258533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055440.4166666667,
            "unit": "ns",
            "range": "± 3207.474552284799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728909.9609375,
            "unit": "ns",
            "range": "± 1831.6678690554122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962781.9010416667,
            "unit": "ns",
            "range": "± 4244.659760779644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622310.56640625,
            "unit": "ns",
            "range": "± 975.6685418618559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566198.59375,
            "unit": "ns",
            "range": "± 1584.9883674858295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146684.090909091,
            "unit": "ns",
            "range": "± 73113.02477792578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290240.909090909,
            "unit": "ns",
            "range": "± 38916.26736727028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2851755.882352941,
            "unit": "ns",
            "range": "± 91292.09926708773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2616748.6486486485,
            "unit": "ns",
            "range": "± 88854.45534262327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6268717.647058823,
            "unit": "ns",
            "range": "± 196900.44626600124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177786.79245283018,
            "unit": "ns",
            "range": "± 6434.882036329835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169998.18181818182,
            "unit": "ns",
            "range": "± 6950.925622056892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139900,
            "unit": "ns",
            "range": "± 2336.9495786887087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2792653.3333333335,
            "unit": "ns",
            "range": "± 31019.73718841111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520528.5714285714,
            "unit": "ns",
            "range": "± 31260.135059785713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12529.38144329897,
            "unit": "ns",
            "range": "± 1828.816679368218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55608.988764044945,
            "unit": "ns",
            "range": "± 4747.765992582919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45203.846153846156,
            "unit": "ns",
            "range": "± 1522.7824522107987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64965.30612244898,
            "unit": "ns",
            "range": "± 15921.865287560368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2752.6315789473683,
            "unit": "ns",
            "range": "± 614.1664659750901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11593.406593406593,
            "unit": "ns",
            "range": "± 1471.6432386056824"
          }
        ]
      }
    ]
  }
}