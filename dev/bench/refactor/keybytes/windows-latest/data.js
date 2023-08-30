window.BENCHMARK_DATA = {
  "lastUpdate": 1693402494124,
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
          "id": "39627a9e924bc1f1b1014d7348b5ca8a94fe8d78",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:09:21+09:00",
          "tree_id": "8e5ea6425b49c1e8d6b3377dfff3c93746040037",
          "url": "https://github.com/greymistcube/libplanet/commit/39627a9e924bc1f1b1014d7348b5ca8a94fe8d78"
        },
        "date": 1693402251864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648124.1758241758,
            "unit": "ns",
            "range": "± 170369.14844645062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3325751.5789473685,
            "unit": "ns",
            "range": "± 215984.92355932438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2092054.347826087,
            "unit": "ns",
            "range": "± 210016.06239620136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5791695.833333333,
            "unit": "ns",
            "range": "± 532370.2965174101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78575.51020408163,
            "unit": "ns",
            "range": "± 16000.283897123656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9380365.656565657,
            "unit": "ns",
            "range": "± 955616.6773945584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23971344.776119404,
            "unit": "ns",
            "range": "± 1137844.060824066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60340367.6056338,
            "unit": "ns",
            "range": "± 2955759.542209783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127165869.23076923,
            "unit": "ns",
            "range": "± 6509616.000750181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256293804.3478261,
            "unit": "ns",
            "range": "± 5507687.634527369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5103661.565290178,
            "unit": "ns",
            "range": "± 217778.63057156288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1698157.2021484375,
            "unit": "ns",
            "range": "± 51149.70547439698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256605.3645833333,
            "unit": "ns",
            "range": "± 21998.979409419877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3006752.7217741935,
            "unit": "ns",
            "range": "± 91473.33347720352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982948.7477022059,
            "unit": "ns",
            "range": "± 19782.638123373534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941303.7434895834,
            "unit": "ns",
            "range": "± 20099.38927399575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3723158.163265306,
            "unit": "ns",
            "range": "± 379313.48048687354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4213993.617021277,
            "unit": "ns",
            "range": "± 238789.8346247382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5264100,
            "unit": "ns",
            "range": "± 186457.02811461233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680140,
            "unit": "ns",
            "range": "± 269147.00539043394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7692996.385542168,
            "unit": "ns",
            "range": "± 406809.0732271677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319005.376344086,
            "unit": "ns",
            "range": "± 34066.065499362056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298916.84210526315,
            "unit": "ns",
            "range": "± 32151.984990942357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257772.44897959183,
            "unit": "ns",
            "range": "± 43104.004001379944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4910538.29787234,
            "unit": "ns",
            "range": "± 418513.9599183449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4620905.405405405,
            "unit": "ns",
            "range": "± 229254.98285132684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33721,
            "unit": "ns",
            "range": "± 10025.626709043725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134188.65979381444,
            "unit": "ns",
            "range": "± 20481.449311351742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136218.75,
            "unit": "ns",
            "range": "± 16239.784238260776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123521.64948453609,
            "unit": "ns",
            "range": "± 21183.052516517197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9093.589743589744,
            "unit": "ns",
            "range": "± 2748.4276375510563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33253,
            "unit": "ns",
            "range": "± 10318.919125528211"
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
          "id": "6e453835cb77c6b3f3dc321227f3bfdfd448483f",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:08:35+09:00",
          "tree_id": "29dfaa733ed61c9dde318a47a1c6e553e87117a4",
          "url": "https://github.com/greymistcube/libplanet/commit/6e453835cb77c6b3f3dc321227f3bfdfd448483f"
        },
        "date": 1693402361956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384780,
            "unit": "ns",
            "range": "± 111054.13549301535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2713520.430107527,
            "unit": "ns",
            "range": "± 153814.52874155584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1781107.3684210526,
            "unit": "ns",
            "range": "± 114877.32424625778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4456098.780487805,
            "unit": "ns",
            "range": "± 160091.50995907187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51135.10638297872,
            "unit": "ns",
            "range": "± 4006.814288340445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7807357.142857143,
            "unit": "ns",
            "range": "± 184278.34808090876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21269100,
            "unit": "ns",
            "range": "± 369557.78593185823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53862903.333333336,
            "unit": "ns",
            "range": "± 510094.21099953493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107219076.92307693,
            "unit": "ns",
            "range": "± 600288.4836391113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216830306.66666666,
            "unit": "ns",
            "range": "± 3209119.2470980627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4647707.213541667,
            "unit": "ns",
            "range": "± 38182.92678156376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1439640.7421875,
            "unit": "ns",
            "range": "± 7301.533537136658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097387.5065104167,
            "unit": "ns",
            "range": "± 9962.58871934827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644883.59375,
            "unit": "ns",
            "range": "± 14023.41012746657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843325.4622395834,
            "unit": "ns",
            "range": "± 3982.317216008461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772985.2120535715,
            "unit": "ns",
            "range": "± 2169.6184462069073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3352975.8620689656,
            "unit": "ns",
            "range": "± 97097.27690448384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3731515.789473684,
            "unit": "ns",
            "range": "± 81914.84238835337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4242384,
            "unit": "ns",
            "range": "± 108886.90110997435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3916603.5714285714,
            "unit": "ns",
            "range": "± 109188.60502934345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6059009.375,
            "unit": "ns",
            "range": "± 185615.0966457809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268477.9069767442,
            "unit": "ns",
            "range": "± 14541.651343743928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253760.60606060605,
            "unit": "ns",
            "range": "± 7363.250784891963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245879.29292929292,
            "unit": "ns",
            "range": "± 18690.051116019968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4275450,
            "unit": "ns",
            "range": "± 29968.02841817805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927875,
            "unit": "ns",
            "range": "± 73624.01329276565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25812.244897959183,
            "unit": "ns",
            "range": "± 2511.181810171575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97062.1052631579,
            "unit": "ns",
            "range": "± 7451.019906588378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87134.0425531915,
            "unit": "ns",
            "range": "± 8944.843570057188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95391.75257731958,
            "unit": "ns",
            "range": "± 11893.263763078003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6543.75,
            "unit": "ns",
            "range": "± 847.8843640124767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24430.107526881722,
            "unit": "ns",
            "range": "± 2509.3644157278136"
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
          "id": "561388db874ed37d12dbe138a5506e189cb10b0e",
          "message": "Changelog",
          "timestamp": "2023-08-30T22:14:32+09:00",
          "tree_id": "74e2f45a3550b297940bb27b9019f6ac47b420ba",
          "url": "https://github.com/greymistcube/libplanet/commit/561388db874ed37d12dbe138a5506e189cb10b0e"
        },
        "date": 1693402465234,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657705.5555555555,
            "unit": "ns",
            "range": "± 35417.50102823415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3016542.8571428573,
            "unit": "ns",
            "range": "± 200461.23878188586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2041980.2197802197,
            "unit": "ns",
            "range": "± 138439.65409743637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5351181.25,
            "unit": "ns",
            "range": "± 209463.3392553964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56259.77011494253,
            "unit": "ns",
            "range": "± 3321.0204291338537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9497294.444444444,
            "unit": "ns",
            "range": "± 193020.527625865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25626082.5,
            "unit": "ns",
            "range": "± 863771.8199069616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64005456.25,
            "unit": "ns",
            "range": "± 1219370.8112349035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128917834.28571428,
            "unit": "ns",
            "range": "± 4225439.120301954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254025205,
            "unit": "ns",
            "range": "± 5336753.868319797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5653177.560763889,
            "unit": "ns",
            "range": "± 105832.82120762112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1791634.5703125,
            "unit": "ns",
            "range": "± 36664.39743340952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328260.4557291667,
            "unit": "ns",
            "range": "± 24099.58111171895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3263482.2135416665,
            "unit": "ns",
            "range": "± 55925.96076319196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029036.0546875,
            "unit": "ns",
            "range": "± 14833.865344990267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938889.51171875,
            "unit": "ns",
            "range": "± 10947.786020497453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3871504.054054054,
            "unit": "ns",
            "range": "± 129977.06762390089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4105818.604651163,
            "unit": "ns",
            "range": "± 151574.89309596844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4998300,
            "unit": "ns",
            "range": "± 115887.76898361622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4527403.896103896,
            "unit": "ns",
            "range": "± 213533.51298761318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7059421.428571428,
            "unit": "ns",
            "range": "± 123212.73771921366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306473.6842105263,
            "unit": "ns",
            "range": "± 9279.960513969068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296950,
            "unit": "ns",
            "range": "± 9189.124006128113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265411.1111111111,
            "unit": "ns",
            "range": "± 12173.876196542558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4996528.571428572,
            "unit": "ns",
            "range": "± 84621.12328192356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4612957.142857143,
            "unit": "ns",
            "range": "± 49965.96863844453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24360.869565217392,
            "unit": "ns",
            "range": "± 1826.7220700646685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98296.73913043478,
            "unit": "ns",
            "range": "± 6151.698614471222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86931.1320754717,
            "unit": "ns",
            "range": "± 3607.740428779679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98483.15789473684,
            "unit": "ns",
            "range": "± 17303.896084663895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5970.526315789473,
            "unit": "ns",
            "range": "± 693.5682764424469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23736.842105263157,
            "unit": "ns",
            "range": "± 1840.2157962944702"
          }
        ]
      }
    ]
  }
}