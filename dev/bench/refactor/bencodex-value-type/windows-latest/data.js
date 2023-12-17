window.BENCHMARK_DATA = {
  "lastUpdate": 1702797238939,
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
          "id": "036ce412e50c6df0be53f97821ade6a96bad4d2a",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:56:39+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/036ce412e50c6df0be53f97821ade6a96bad4d2a"
        },
        "date": 1702519749207,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1096138.383838384,
            "unit": "ns",
            "range": "± 139041.64088287432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887539.4736842106,
            "unit": "ns",
            "range": "± 95304.3728677719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1483101.0638297873,
            "unit": "ns",
            "range": "± 126000.2336101955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5512082,
            "unit": "ns",
            "range": "± 194599.96821318194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42568.085106382976,
            "unit": "ns",
            "range": "± 6492.712420346691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5501506.666666667,
            "unit": "ns",
            "range": "± 62973.0607557897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13856506.666666666,
            "unit": "ns",
            "range": "± 202082.99732912667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35760535.71428572,
            "unit": "ns",
            "range": "± 234724.09616117668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70993514.28571428,
            "unit": "ns",
            "range": "± 528366.9541537948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140682013.33333334,
            "unit": "ns",
            "range": "± 953478.8902200394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303462.723214286,
            "unit": "ns",
            "range": "± 29496.200129278048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055913.30078125,
            "unit": "ns",
            "range": "± 7523.518614950371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737701.2486049107,
            "unit": "ns",
            "range": "± 3166.498368011254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1985256.6145833333,
            "unit": "ns",
            "range": "± 4140.323564106408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623962.3814174107,
            "unit": "ns",
            "range": "± 1813.4046646101062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563865.6110491072,
            "unit": "ns",
            "range": "± 2793.837619906754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2362576.470588235,
            "unit": "ns",
            "range": "± 96115.46512031306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564189.7959183673,
            "unit": "ns",
            "range": "± 101661.39722320439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3022577.419354839,
            "unit": "ns",
            "range": "± 91918.45556316903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2980005.882352941,
            "unit": "ns",
            "range": "± 93789.54823587099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6384559.375,
            "unit": "ns",
            "range": "± 197490.36866572965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208956.84210526315,
            "unit": "ns",
            "range": "± 16428.877356600122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192758.06451612903,
            "unit": "ns",
            "range": "± 14161.025222194135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149018.94736842104,
            "unit": "ns",
            "range": "± 8545.352036830938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811213.3333333335,
            "unit": "ns",
            "range": "± 39823.75218503698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2630014.285714286,
            "unit": "ns",
            "range": "± 38721.09059857247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11345.744680851063,
            "unit": "ns",
            "range": "± 1568.1414856630204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59800,
            "unit": "ns",
            "range": "± 6973.999330847879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49022.58064516129,
            "unit": "ns",
            "range": "± 4643.511813652934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66982.25806451614,
            "unit": "ns",
            "range": "± 10629.043080270398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3878.787878787879,
            "unit": "ns",
            "range": "± 1105.207776870783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14329.166666666666,
            "unit": "ns",
            "range": "± 2665.803588400658"
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
          "id": "9dc6ae2bd558d913b25a18a94aa052a747d8d7db",
          "message": "Changelog",
          "timestamp": "2023-12-17T16:03:29+09:00",
          "tree_id": "88f79895e70175a13d674a8d17214fe3f008f307",
          "url": "https://github.com/greymistcube/libplanet/commit/9dc6ae2bd558d913b25a18a94aa052a747d8d7db"
        },
        "date": 1702797221776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 903919.387755102,
            "unit": "ns",
            "range": "± 93432.67785064784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1624235.7142857143,
            "unit": "ns",
            "range": "± 57958.4200050118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1287824.2424242424,
            "unit": "ns",
            "range": "± 126889.0412685945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5400481.690140845,
            "unit": "ns",
            "range": "± 260901.2913015513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32621.052631578947,
            "unit": "ns",
            "range": "± 1423.4937957245074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4999660,
            "unit": "ns",
            "range": "± 28761.228863076863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13070428.57142857,
            "unit": "ns",
            "range": "± 161089.9566108301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32292992.307692308,
            "unit": "ns",
            "range": "± 101725.97555474268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63767860,
            "unit": "ns",
            "range": "± 430518.9854781585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127663453.33333333,
            "unit": "ns",
            "range": "± 827569.5049503755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3233380.859375,
            "unit": "ns",
            "range": "± 3978.7794353765426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1019457.5871394231,
            "unit": "ns",
            "range": "± 1691.4565580947128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735655.4912860577,
            "unit": "ns",
            "range": "± 2336.3327369557583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910842.7473958333,
            "unit": "ns",
            "range": "± 5039.343700445445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620881.25,
            "unit": "ns",
            "range": "± 1064.320057802193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566076.5276227678,
            "unit": "ns",
            "range": "± 1414.306016105249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2033804.761904762,
            "unit": "ns",
            "range": "± 48244.4968487648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2175820,
            "unit": "ns",
            "range": "± 35745.43916435538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2722610,
            "unit": "ns",
            "range": "± 60957.65484506869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2532169.879518072,
            "unit": "ns",
            "range": "± 134596.5821830226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5846895.238095238,
            "unit": "ns",
            "range": "± 138178.5456436363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163535.48387096773,
            "unit": "ns",
            "range": "± 6162.395126609207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156685.45454545456,
            "unit": "ns",
            "range": "± 6236.583174861833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139596.15384615384,
            "unit": "ns",
            "range": "± 2853.521441199385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2662564.285714286,
            "unit": "ns",
            "range": "± 36153.10620004992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2443971.4285714286,
            "unit": "ns",
            "range": "± 29598.036020380412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9360.439560439561,
            "unit": "ns",
            "range": "± 855.2945068972989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48482.79569892473,
            "unit": "ns",
            "range": "± 3196.7586728051924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43285.416666666664,
            "unit": "ns",
            "range": "± 1556.3171999789613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46595.833333333336,
            "unit": "ns",
            "range": "± 8197.58522424573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2217.3469387755104,
            "unit": "ns",
            "range": "± 379.6432156329142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9255.555555555555,
            "unit": "ns",
            "range": "± 962.8038538164694"
          }
        ]
      }
    ]
  }
}