window.BENCHMARK_DATA = {
  "lastUpdate": 1703650675534,
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
          "id": "938aabdadb2386ae59955429b57526892249e438",
          "message": "Cleaned up ShortNode internal implementation",
          "timestamp": "2023-12-27T11:18:21+09:00",
          "tree_id": "69943ff6e6d38f5e91e2c20aff61552354c1487d",
          "url": "https://github.com/greymistcube/libplanet/commit/938aabdadb2386ae59955429b57526892249e438"
        },
        "date": 1703647522638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952572,
            "unit": "ns",
            "range": "± 89680.14439657141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798406.25,
            "unit": "ns",
            "range": "± 117344.53617894884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1379295.918367347,
            "unit": "ns",
            "range": "± 149930.71590170372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5289031.746031746,
            "unit": "ns",
            "range": "± 242081.28521914664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34024.096385542165,
            "unit": "ns",
            "range": "± 1774.7270735858187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5249813.333333333,
            "unit": "ns",
            "range": "± 81965.54037840421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13331692.857142856,
            "unit": "ns",
            "range": "± 175132.68141298214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32339807.14285714,
            "unit": "ns",
            "range": "± 425010.2396310103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66415536.84210526,
            "unit": "ns",
            "range": "± 1450149.7402416093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125803485.71428572,
            "unit": "ns",
            "range": "± 978440.3608704109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323287.4441964286,
            "unit": "ns",
            "range": "± 8270.04544767257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056705.234375,
            "unit": "ns",
            "range": "± 3126.7716676779796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739389.35546875,
            "unit": "ns",
            "range": "± 1220.5549453332483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1869541.6145833333,
            "unit": "ns",
            "range": "± 7039.457767735257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619982.1158854166,
            "unit": "ns",
            "range": "± 2003.8916221997627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543252.8878348215,
            "unit": "ns",
            "range": "± 1087.6422176673775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2077842.105263158,
            "unit": "ns",
            "range": "± 45471.179099017994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2252050.819672131,
            "unit": "ns",
            "range": "± 95518.62230816708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790479.1666666665,
            "unit": "ns",
            "range": "± 71784.2478734271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2637906.4516129033,
            "unit": "ns",
            "range": "± 119365.37498194186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6296917.24137931,
            "unit": "ns",
            "range": "± 343583.7842394509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177551.31578947368,
            "unit": "ns",
            "range": "± 7623.1838216684355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168272.85714285713,
            "unit": "ns",
            "range": "± 8179.298212845548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139572.72727272726,
            "unit": "ns",
            "range": "± 3418.3234289538877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714094.4444444445,
            "unit": "ns",
            "range": "± 57990.46039420644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2456870,
            "unit": "ns",
            "range": "± 39676.08491630335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11772.043010752688,
            "unit": "ns",
            "range": "± 1393.6475126208618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53460,
            "unit": "ns",
            "range": "± 3564.9290457347947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44504.545454545456,
            "unit": "ns",
            "range": "± 2346.134462781357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62277.77777777778,
            "unit": "ns",
            "range": "± 14635.500281190447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2497.938144329897,
            "unit": "ns",
            "range": "± 364.2856541241876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10601.08695652174,
            "unit": "ns",
            "range": "± 1235.8646539588879"
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
          "id": "9c432c5a336c4d5c216722103c691b710b1deeb2",
          "message": "Added documnetation and changelog",
          "timestamp": "2023-12-27T13:05:26+09:00",
          "tree_id": "8f7a6ce44c81de6991ac82263f5cf2d2e81e079f",
          "url": "https://github.com/greymistcube/libplanet/commit/9c432c5a336c4d5c216722103c691b710b1deeb2"
        },
        "date": 1703650633707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928815,
            "unit": "ns",
            "range": "± 78690.69532227448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728578.75,
            "unit": "ns",
            "range": "± 88865.62704051436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1328849.494949495,
            "unit": "ns",
            "range": "± 129689.54717979975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5057574.074074074,
            "unit": "ns",
            "range": "± 138196.60630529968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34387.20930232558,
            "unit": "ns",
            "range": "± 1850.2652599418666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5041464.285714285,
            "unit": "ns",
            "range": "± 56711.92531141464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13066226.666666666,
            "unit": "ns",
            "range": "± 208366.53647793236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32781385.714285713,
            "unit": "ns",
            "range": "± 325176.4629980345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63769993.333333336,
            "unit": "ns",
            "range": "± 607626.100335991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130144883.33333333,
            "unit": "ns",
            "range": "± 1142572.67769255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3259583.4821428573,
            "unit": "ns",
            "range": "± 11457.060437913358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043558.0338541666,
            "unit": "ns",
            "range": "± 3593.5970175205625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741903.18359375,
            "unit": "ns",
            "range": "± 1573.3268621183079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893325.5859375,
            "unit": "ns",
            "range": "± 1757.9854443279887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619462.0833333334,
            "unit": "ns",
            "range": "± 1240.7759377804941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558471.4192708334,
            "unit": "ns",
            "range": "± 855.4929627908908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112319.35483871,
            "unit": "ns",
            "range": "± 59307.13514890002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271505.5555555555,
            "unit": "ns",
            "range": "± 74983.14837136769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810569.230769231,
            "unit": "ns",
            "range": "± 30023.973327309202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2610186.8421052634,
            "unit": "ns",
            "range": "± 129609.18521165106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5845529.166666667,
            "unit": "ns",
            "range": "± 151198.74475889892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180586.31578947368,
            "unit": "ns",
            "range": "± 17293.78569071091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164400,
            "unit": "ns",
            "range": "± 6842.884963731721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139565.5172413793,
            "unit": "ns",
            "range": "± 4081.1654377211003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2704820,
            "unit": "ns",
            "range": "± 49300.59692481276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2466592.8571428573,
            "unit": "ns",
            "range": "± 32540.210965362985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11798.969072164948,
            "unit": "ns",
            "range": "± 2168.0201627560664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52991.379310344826,
            "unit": "ns",
            "range": "± 4007.9732082651963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43879.41176470588,
            "unit": "ns",
            "range": "± 2099.1511307455385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57309.574468085106,
            "unit": "ns",
            "range": "± 12968.771997718346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2427.3684210526317,
            "unit": "ns",
            "range": "± 381.3308457045906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10247.872340425532,
            "unit": "ns",
            "range": "± 1299.1087700539254"
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
          "id": "b16de5803ed328efb2737589f13906141bfc6da4",
          "message": "Added documnetation and changelog",
          "timestamp": "2023-12-27T13:06:40+09:00",
          "tree_id": "9a6c9abd10c9c5f186ad70cb60d91371c7b633dd",
          "url": "https://github.com/greymistcube/libplanet/commit/b16de5803ed328efb2737589f13906141bfc6da4"
        },
        "date": 1703650658403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 923064.1304347826,
            "unit": "ns",
            "range": "± 73738.201263722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1797616.6666666667,
            "unit": "ns",
            "range": "± 116117.23371787729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1288962.6262626264,
            "unit": "ns",
            "range": "± 119164.82889717752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5361091.111111111,
            "unit": "ns",
            "range": "± 297511.85403423244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35570.32967032967,
            "unit": "ns",
            "range": "± 2834.8033247669737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5168978.571428572,
            "unit": "ns",
            "range": "± 24582.019024902314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13038500,
            "unit": "ns",
            "range": "± 100216.9480011573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32523853.333333332,
            "unit": "ns",
            "range": "± 392371.40726369864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67059564.28571428,
            "unit": "ns",
            "range": "± 680908.3950668602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127865000,
            "unit": "ns",
            "range": "± 1019889.3891760254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3243905.6490384615,
            "unit": "ns",
            "range": "± 20766.696837011164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057444.126674107,
            "unit": "ns",
            "range": "± 10328.30930121985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 715518.3035714285,
            "unit": "ns",
            "range": "± 1821.91878658708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901816.6536458333,
            "unit": "ns",
            "range": "± 9254.682467874914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600389.3294270834,
            "unit": "ns",
            "range": "± 2003.26790329579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560480.80078125,
            "unit": "ns",
            "range": "± 3477.7689237374047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2092152.5,
            "unit": "ns",
            "range": "± 66763.33243399634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258488.679245283,
            "unit": "ns",
            "range": "± 91644.46699563683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2738425,
            "unit": "ns",
            "range": "± 78215.28042903505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2530679.365079365,
            "unit": "ns",
            "range": "± 115946.4547702254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6209513.333333333,
            "unit": "ns",
            "range": "± 311003.0856426979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174282.79569892472,
            "unit": "ns",
            "range": "± 12754.211782233673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167564.44444444444,
            "unit": "ns",
            "range": "± 11786.864819457287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139834.2857142857,
            "unit": "ns",
            "range": "± 4545.0000231115555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2663542.8571428573,
            "unit": "ns",
            "range": "± 28369.857088268727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2425485.714285714,
            "unit": "ns",
            "range": "± 32843.354488631856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9270.212765957447,
            "unit": "ns",
            "range": "± 976.4792789408639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53869.38775510204,
            "unit": "ns",
            "range": "± 10346.974338994338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43009.333333333336,
            "unit": "ns",
            "range": "± 2175.301987940695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50835.051546391755,
            "unit": "ns",
            "range": "± 9108.181318155597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3111.2244897959185,
            "unit": "ns",
            "range": "± 844.1286183648322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9648.387096774193,
            "unit": "ns",
            "range": "± 1170.3411712927991"
          }
        ]
      }
    ]
  }
}