window.BENCHMARK_DATA = {
  "lastUpdate": 1688363939580,
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
          "id": "40e474810f4076eb8ae7203ff0398dd16bf6761c",
          "message": "Removed unnecessary test code",
          "timestamp": "2023-07-03T14:32:26+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/40e474810f4076eb8ae7203ff0398dd16bf6761c"
        },
        "date": 1688363435828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8061322.5,
            "unit": "ns",
            "range": "± 101077.8210099297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20911215.060606062,
            "unit": "ns",
            "range": "± 977894.6534662991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52097632.21428572,
            "unit": "ns",
            "range": "± 1459158.7053601674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102036687.17857143,
            "unit": "ns",
            "range": "± 2706303.9264501887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222012230.4347826,
            "unit": "ns",
            "range": "± 8438419.324575668"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72191.46590909091,
            "unit": "ns",
            "range": "± 10792.940554057646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323316.45,
            "unit": "ns",
            "range": "± 32231.321907839396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298053.35164835164,
            "unit": "ns",
            "range": "± 18674.420139963073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287610.0416666667,
            "unit": "ns",
            "range": "± 21179.751216627774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4232494,
            "unit": "ns",
            "range": "± 126438.7706097712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772020.95,
            "unit": "ns",
            "range": "± 85868.71181449958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18817.011494252874,
            "unit": "ns",
            "range": "± 3419.7219882046743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95819.47422680413,
            "unit": "ns",
            "range": "± 17847.00964044396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97550.09375,
            "unit": "ns",
            "range": "± 16232.170705490102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104826.6649484536,
            "unit": "ns",
            "range": "± 16983.83266133831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5029.298969072165,
            "unit": "ns",
            "range": "± 790.3716710740753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15889.010869565218,
            "unit": "ns",
            "range": "± 1371.8817548648658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655119.8541666667,
            "unit": "ns",
            "range": "± 188231.95847598466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3075754.1075268816,
            "unit": "ns",
            "range": "± 197753.20871872985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183255.922222222,
            "unit": "ns",
            "range": "± 228236.20757620636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6549685.239583333,
            "unit": "ns",
            "range": "± 623761.8626229884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3629608.1666666665,
            "unit": "ns",
            "range": "± 386130.70130723924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745822.2688172045,
            "unit": "ns",
            "range": "± 336911.2567365265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4613652.666666667,
            "unit": "ns",
            "range": "± 235803.1900737814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3854826.138297872,
            "unit": "ns",
            "range": "± 218746.24042620466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7028987.607142857,
            "unit": "ns",
            "range": "± 264807.9295508473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6811682.563392857,
            "unit": "ns",
            "range": "± 217305.13896876495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2082878.821875,
            "unit": "ns",
            "range": "± 66561.34554277362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403315.9583333333,
            "unit": "ns",
            "range": "± 13863.011849956072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3035445.3910030243,
            "unit": "ns",
            "range": "± 172000.5108245978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870963.831624349,
            "unit": "ns",
            "range": "± 3951.60988735502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790300.0940867456,
            "unit": "ns",
            "range": "± 43129.703050240154"
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
          "id": "24dbb50f814adebef9dae0ca37c233ca05f08c1b",
          "message": "[skip changelog] Removed unnecessary test code",
          "timestamp": "2023-07-03T14:33:06+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/24dbb50f814adebef9dae0ca37c233ca05f08c1b"
        },
        "date": 1688363483374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8144293.035714285,
            "unit": "ns",
            "range": "± 227933.51171152265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19863693.65,
            "unit": "ns",
            "range": "± 457390.0478494402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49615307.94444445,
            "unit": "ns",
            "range": "± 1050730.7504890682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102055083.425,
            "unit": "ns",
            "range": "± 3574383.600438965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205443176.92857143,
            "unit": "ns",
            "range": "± 2256028.0145908482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66251.96808510639,
            "unit": "ns",
            "range": "± 9674.456801124286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357151.2886597938,
            "unit": "ns",
            "range": "± 45507.66800701439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317023.6808510638,
            "unit": "ns",
            "range": "± 23506.90895017191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321418.9,
            "unit": "ns",
            "range": "± 26711.554704507842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4424871.28125,
            "unit": "ns",
            "range": "± 285629.73947985633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4179140.621212121,
            "unit": "ns",
            "range": "± 275360.9599212653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32246.63157894737,
            "unit": "ns",
            "range": "± 8643.757985245931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 149406.8125,
            "unit": "ns",
            "range": "± 31240.14499134508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 154186.67741935485,
            "unit": "ns",
            "range": "± 30892.63874930095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153711.55208333334,
            "unit": "ns",
            "range": "± 32996.265477800196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10113.091954022988,
            "unit": "ns",
            "range": "± 890.69226581147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27876.469387755104,
            "unit": "ns",
            "range": "± 9277.156116914814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615149.8608247424,
            "unit": "ns",
            "range": "± 162079.232601565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196797.170212766,
            "unit": "ns",
            "range": "± 258244.5331390839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139522.948979592,
            "unit": "ns",
            "range": "± 208270.71588982514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6119550.138461539,
            "unit": "ns",
            "range": "± 281009.5206240171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285736.8309859154,
            "unit": "ns",
            "range": "± 161098.44013024957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3500644.6,
            "unit": "ns",
            "range": "± 123454.0444695401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4469954.585365853,
            "unit": "ns",
            "range": "± 155202.34495634653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3883880.3174603176,
            "unit": "ns",
            "range": "± 172804.0257605675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7645142.787234043,
            "unit": "ns",
            "range": "± 433921.7856685243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6904698.4246875,
            "unit": "ns",
            "range": "± 168119.76690857214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2242095.5701032365,
            "unit": "ns",
            "range": "± 93507.79172602354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486986.9921264648,
            "unit": "ns",
            "range": "± 45371.50210254196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2896943.4344223486,
            "unit": "ns",
            "range": "± 264398.05247228703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886831.2115885416,
            "unit": "ns",
            "range": "± 10145.251471647422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838814.8452845982,
            "unit": "ns",
            "range": "± 12495.559869690886"
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
          "id": "8cec0688a9dda82cdf498dea569c01dbdf1fa625",
          "message": "[skip changelog] Removed unnecessary test code",
          "timestamp": "2023-07-03T14:39:28+09:00",
          "tree_id": "645c8d34b8ffd2a91ad83144a49ff20cdf353fc0",
          "url": "https://github.com/greymistcube/libplanet/commit/8cec0688a9dda82cdf498dea569c01dbdf1fa625"
        },
        "date": 1688363924620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8599754.824175823,
            "unit": "ns",
            "range": "± 655692.5780909085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21866103.702127658,
            "unit": "ns",
            "range": "± 1239448.3842378508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52187877.71,
            "unit": "ns",
            "range": "± 3364261.0132500674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99834061.02941176,
            "unit": "ns",
            "range": "± 1917403.411172324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204298509.07407406,
            "unit": "ns",
            "range": "± 4693260.089000706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64780.086021505376,
            "unit": "ns",
            "range": "± 12175.643431489805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336762.15625,
            "unit": "ns",
            "range": "± 31858.92561023499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322497.56842105265,
            "unit": "ns",
            "range": "± 27391.904244142443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323567.5714285714,
            "unit": "ns",
            "range": "± 25384.564246426453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4330393.412280702,
            "unit": "ns",
            "range": "± 187021.26029719957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909059.37654321,
            "unit": "ns",
            "range": "± 205403.73743473992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22619.36559139785,
            "unit": "ns",
            "range": "± 3979.1462892154505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105750.8817204301,
            "unit": "ns",
            "range": "± 16158.221916310209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120886.93023255814,
            "unit": "ns",
            "range": "± 11185.484334924433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117234.72105263158,
            "unit": "ns",
            "range": "± 21194.770356668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7942.5053763440865,
            "unit": "ns",
            "range": "± 1231.8395454488586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16925.911111111112,
            "unit": "ns",
            "range": "± 2426.389010950104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615068.0714285714,
            "unit": "ns",
            "range": "± 194216.12323363387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962786.789473684,
            "unit": "ns",
            "range": "± 124794.31197470741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029968.1414141415,
            "unit": "ns",
            "range": "± 265524.35747342213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5777641.371428572,
            "unit": "ns",
            "range": "± 280595.40789491753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265018.5757575757,
            "unit": "ns",
            "range": "± 100399.83019595649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338857.3913043477,
            "unit": "ns",
            "range": "± 126483.37101777949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4555731.288659794,
            "unit": "ns",
            "range": "± 269463.5745033918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3963598.8333333335,
            "unit": "ns",
            "range": "± 262407.4112704845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8083281.32,
            "unit": "ns",
            "range": "± 619976.1353281527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6634861.762073863,
            "unit": "ns",
            "range": "± 161226.2916498932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2105141.3818359375,
            "unit": "ns",
            "range": "± 38567.58168819223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396745.3049479167,
            "unit": "ns",
            "range": "± 19472.087786605225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619976.065518466,
            "unit": "ns",
            "range": "± 59172.28760305287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862361.9359199438,
            "unit": "ns",
            "range": "± 47541.797047683795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819969.743359375,
            "unit": "ns",
            "range": "± 14577.122857163402"
          }
        ]
      }
    ]
  }
}