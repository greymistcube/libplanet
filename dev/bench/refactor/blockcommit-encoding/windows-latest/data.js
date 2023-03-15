window.BENCHMARK_DATA = {
  "lastUpdate": 1678864893776,
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
          "id": "957935b3c131a2bd3b40a0af0c79827c262cca80",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:05:02+09:00",
          "tree_id": "ca9f0634fd837ee89a922165df92d7cf9c503206",
          "url": "https://github.com/greymistcube/libplanet/commit/957935b3c131a2bd3b40a0af0c79827c262cca80"
        },
        "date": 1678861368548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363734,
            "unit": "ns",
            "range": "± 81733.2996193514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2484357.1428571427,
            "unit": "ns",
            "range": "± 80599.48286841215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251941.6666666665,
            "unit": "ns",
            "range": "± 58331.779068320575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5063082.857142857,
            "unit": "ns",
            "range": "± 163135.44983110396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48373.28767123288,
            "unit": "ns",
            "range": "± 2275.504861438275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7078640,
            "unit": "ns",
            "range": "± 83506.86712566133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19673466.666666668,
            "unit": "ns",
            "range": "± 181645.8668739285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49969560,
            "unit": "ns",
            "range": "± 554704.6367212014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96825540,
            "unit": "ns",
            "range": "± 1652779.5206862893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 196510386.66666666,
            "unit": "ns",
            "range": "± 2353308.326549992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4807303.292410715,
            "unit": "ns",
            "range": "± 24189.269837690998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509002.05078125,
            "unit": "ns",
            "range": "± 5483.246131884925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167402.8776041667,
            "unit": "ns",
            "range": "± 6074.248213885295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675325.78125,
            "unit": "ns",
            "range": "± 6788.099162142466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821442.3549107143,
            "unit": "ns",
            "range": "± 1268.8303564186808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760602.0856584822,
            "unit": "ns",
            "range": "± 1102.9446180573918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3067385.714285714,
            "unit": "ns",
            "range": "± 88523.48356711424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4929817.073170732,
            "unit": "ns",
            "range": "± 176340.52271448984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22685226.666666668,
            "unit": "ns",
            "range": "± 413572.2107731726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6018944.262295082,
            "unit": "ns",
            "range": "± 267808.0354312209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25740141.17647059,
            "unit": "ns",
            "range": "± 504139.1599286148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180986.07594936708,
            "unit": "ns",
            "range": "± 9381.032885250841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176818.75,
            "unit": "ns",
            "range": "± 3390.6181835568964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157650,
            "unit": "ns",
            "range": "± 6468.036038557488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10973123.333333334,
            "unit": "ns",
            "range": "± 320116.04650483397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8657213.333333334,
            "unit": "ns",
            "range": "± 127090.84976991103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19956.521739130436,
            "unit": "ns",
            "range": "± 1389.228922648178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55974.73684210526,
            "unit": "ns",
            "range": "± 5044.419044235024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41641.333333333336,
            "unit": "ns",
            "range": "± 2123.8728860353285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96755.55555555556,
            "unit": "ns",
            "range": "± 11378.395762906488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5544.210526315789,
            "unit": "ns",
            "range": "± 682.5664630523263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18925.263157894737,
            "unit": "ns",
            "range": "± 1763.577627163736"
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
          "id": "f0a4d366e3d4d6558eb4568a1aae46ad136b5fa0",
          "message": "Fixed tests",
          "timestamp": "2023-03-15T15:02:14+09:00",
          "tree_id": "a7d8c5e42b5615ece555830b147d030d43dfbdd4",
          "url": "https://github.com/greymistcube/libplanet/commit/f0a4d366e3d4d6558eb4568a1aae46ad136b5fa0"
        },
        "date": 1678861358124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671973.9583333333,
            "unit": "ns",
            "range": "± 161884.5496641237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3085043.1818181816,
            "unit": "ns",
            "range": "± 227812.78500217965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2621739.175257732,
            "unit": "ns",
            "range": "± 201887.8997719098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6560560.638297873,
            "unit": "ns",
            "range": "± 539818.2890641909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63667.74193548387,
            "unit": "ns",
            "range": "± 8814.269079789867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8410043.75,
            "unit": "ns",
            "range": "± 155211.32677202826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23408819.56521739,
            "unit": "ns",
            "range": "± 901269.5903543981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59779474.576271184,
            "unit": "ns",
            "range": "± 2625029.785748464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 123497429.62962963,
            "unit": "ns",
            "range": "± 5066550.609659159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 247148953.33333334,
            "unit": "ns",
            "range": "± 4207790.260740303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6106860.052083333,
            "unit": "ns",
            "range": "± 76375.91261918459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928562.8627232143,
            "unit": "ns",
            "range": "± 18811.45086264478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403121.8098958333,
            "unit": "ns",
            "range": "± 14177.740327174703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3104486.7708333335,
            "unit": "ns",
            "range": "± 38564.161098920405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021983.1891741072,
            "unit": "ns",
            "range": "± 8982.173243964968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961570.0927734375,
            "unit": "ns",
            "range": "± 17926.77983549498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3749364.383561644,
            "unit": "ns",
            "range": "± 185332.093348567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5646180.6122448975,
            "unit": "ns",
            "range": "± 512163.7553562847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28314031.64556962,
            "unit": "ns",
            "range": "± 1469603.2728688193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7187632.978723404,
            "unit": "ns",
            "range": "± 492561.8638921656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32329992.1875,
            "unit": "ns",
            "range": "± 1493391.6967022624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201442.2077922078,
            "unit": "ns",
            "range": "± 10280.100427445224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203825,
            "unit": "ns",
            "range": "± 13467.132354222775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195410.41666666666,
            "unit": "ns",
            "range": "± 14266.216841982186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13870380,
            "unit": "ns",
            "range": "± 318717.7527134892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11239640.425531914,
            "unit": "ns",
            "range": "± 663451.3526046467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24982.474226804123,
            "unit": "ns",
            "range": "± 4446.815581338289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62138.38383838384,
            "unit": "ns",
            "range": "± 8066.783835147775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47101.086956521736,
            "unit": "ns",
            "range": "± 6016.031596341532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129587.5,
            "unit": "ns",
            "range": "± 21783.659979564112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7159.79381443299,
            "unit": "ns",
            "range": "± 1369.2044370283083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23950.526315789473,
            "unit": "ns",
            "range": "± 3578.8644842520284"
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
          "id": "1d18531e11f75250a447b2a0c2e7b7b5296c3ff1",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:58:48+09:00",
          "tree_id": "f1a76ecc24619636b246c8f654731b40b288d6fe",
          "url": "https://github.com/greymistcube/libplanet/commit/1d18531e11f75250a447b2a0c2e7b7b5296c3ff1"
        },
        "date": 1678864867947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692665.625,
            "unit": "ns",
            "range": "± 187829.6164238245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3127862.626262626,
            "unit": "ns",
            "range": "± 352935.40704799566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2604726.8041237113,
            "unit": "ns",
            "range": "± 286379.2941317306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6408065.979381443,
            "unit": "ns",
            "range": "± 492270.4697552365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71348.95833333333,
            "unit": "ns",
            "range": "± 15653.965327751826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8758928.57142857,
            "unit": "ns",
            "range": "± 729548.1582854773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24594392.85714286,
            "unit": "ns",
            "range": "± 404764.64664768364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61022821.62162162,
            "unit": "ns",
            "range": "± 2038916.414031828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 123984512,
            "unit": "ns",
            "range": "± 3208329.5724203065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 247381555.1724138,
            "unit": "ns",
            "range": "± 7112400.72878682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5785646.448863637,
            "unit": "ns",
            "range": "± 136346.01057028014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846066.07421875,
            "unit": "ns",
            "range": "± 41379.766201156366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392468.84765625,
            "unit": "ns",
            "range": "± 37577.95612696146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3055630.2604166665,
            "unit": "ns",
            "range": "± 48970.327086287434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995791.2239583334,
            "unit": "ns",
            "range": "± 18578.890970869015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956771.9593394886,
            "unit": "ns",
            "range": "± 23438.60524027228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3801467.7083333335,
            "unit": "ns",
            "range": "± 375591.00698128983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5991449,
            "unit": "ns",
            "range": "± 422742.29045649554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30519130,
            "unit": "ns",
            "range": "± 1590065.5234011146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7142731.632653061,
            "unit": "ns",
            "range": "± 571339.1389266727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35215047.43589743,
            "unit": "ns",
            "range": "± 1812390.2606258735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240570,
            "unit": "ns",
            "range": "± 35327.9426991374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234865.9793814433,
            "unit": "ns",
            "range": "± 37471.8585702378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209688.77551020408,
            "unit": "ns",
            "range": "± 28893.158618953596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13635956.565656565,
            "unit": "ns",
            "range": "± 974936.2524593667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11223550,
            "unit": "ns",
            "range": "± 1050108.7487376046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36832.989690721646,
            "unit": "ns",
            "range": "± 10856.331885600648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80543.43434343435,
            "unit": "ns",
            "range": "± 17873.71894433997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58923,
            "unit": "ns",
            "range": "± 14785.61855864056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138383.67346938775,
            "unit": "ns",
            "range": "± 29781.131831591443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6655.421686746988,
            "unit": "ns",
            "range": "± 1182.6234800736497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 38615.463917525776,
            "unit": "ns",
            "range": "± 11692.352737706613"
          }
        ]
      }
    ]
  }
}