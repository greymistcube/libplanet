window.BENCHMARK_DATA = {
  "lastUpdate": 1702861680817,
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
          "id": "ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:23:08+09:00",
          "tree_id": "6d61ab432ba0e1be66424d63f8c2401df9e7828e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69"
        },
        "date": 1702802208999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 930185,
            "unit": "ns",
            "range": "± 118981.96228204024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748800,
            "unit": "ns",
            "range": "± 85184.30684893393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1308761,
            "unit": "ns",
            "range": "± 118922.56702781373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5138581.481481481,
            "unit": "ns",
            "range": "± 141433.66489966796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34104.166666666664,
            "unit": "ns",
            "range": "± 1689.1899467071007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5054464.285714285,
            "unit": "ns",
            "range": "± 22499.866910473294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12945061.538461538,
            "unit": "ns",
            "range": "± 130778.14253193293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32467716.666666668,
            "unit": "ns",
            "range": "± 231389.7001453032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65299971.428571425,
            "unit": "ns",
            "range": "± 369112.88960794266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130481378.57142857,
            "unit": "ns",
            "range": "± 548899.4179664941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329165.206473214,
            "unit": "ns",
            "range": "± 11137.813191853858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1033900.1171875,
            "unit": "ns",
            "range": "± 3814.1262342158097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731590.5691964285,
            "unit": "ns",
            "range": "± 2495.3217696811257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926532.338169643,
            "unit": "ns",
            "range": "± 2987.886535286864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604318.8411458334,
            "unit": "ns",
            "range": "± 819.8810319518615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576813.3858816965,
            "unit": "ns",
            "range": "± 1269.2222369530007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2062648.2142857143,
            "unit": "ns",
            "range": "± 72038.22467922891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179800,
            "unit": "ns",
            "range": "± 38524.80507492032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774527.777777778,
            "unit": "ns",
            "range": "± 56650.879288701304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2556222.807017544,
            "unit": "ns",
            "range": "± 106168.9506291469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6229605.263157895,
            "unit": "ns",
            "range": "± 314348.1491996782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169488.46153846153,
            "unit": "ns",
            "range": "± 8678.413745314585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159836.79245283018,
            "unit": "ns",
            "range": "± 6630.437905710331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136771.42857142858,
            "unit": "ns",
            "range": "± 3830.1297862989163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2700985.714285714,
            "unit": "ns",
            "range": "± 33803.04053558718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2700246.6666666665,
            "unit": "ns",
            "range": "± 45329.09609049084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9377.906976744185,
            "unit": "ns",
            "range": "± 1100.0963768250913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55542.10526315789,
            "unit": "ns",
            "range": "± 5908.766997911689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45454.651162790695,
            "unit": "ns",
            "range": "± 2466.226313585629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60583.67346938775,
            "unit": "ns",
            "range": "± 12029.428638834626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2398.9473684210525,
            "unit": "ns",
            "range": "± 454.64382525087245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10944.21052631579,
            "unit": "ns",
            "range": "± 1346.2094767186745"
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
          "id": "6b5f6607eb743676bd8bdd4086e51973828d3ba3",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:26:18+09:00",
          "tree_id": "eb2b1eee3447ce5267dacd08576a272bff97ff42",
          "url": "https://github.com/greymistcube/libplanet/commit/6b5f6607eb743676bd8bdd4086e51973828d3ba3"
        },
        "date": 1702802345094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974192.2680412371,
            "unit": "ns",
            "range": "± 108993.44765765694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1747990,
            "unit": "ns",
            "range": "± 77168.34491957903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1355403.092783505,
            "unit": "ns",
            "range": "± 126291.5908833009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5222717.647058823,
            "unit": "ns",
            "range": "± 155231.2672943536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34594.117647058825,
            "unit": "ns",
            "range": "± 1882.01721445852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5267797.05882353,
            "unit": "ns",
            "range": "± 105420.60470827714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13463207.142857144,
            "unit": "ns",
            "range": "± 138424.01672612093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33734780.76923077,
            "unit": "ns",
            "range": "± 333011.57984023966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65006985.71428572,
            "unit": "ns",
            "range": "± 1044870.9981893185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136162435.7142857,
            "unit": "ns",
            "range": "± 1149704.0974543393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3377429.84375,
            "unit": "ns",
            "range": "± 6240.142695433735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052328.4737723214,
            "unit": "ns",
            "range": "± 3333.992520209195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739247.3958333334,
            "unit": "ns",
            "range": "± 1819.1226349645954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973995.8072916667,
            "unit": "ns",
            "range": "± 5570.2711568093155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627279.2513020834,
            "unit": "ns",
            "range": "± 1237.747195693771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558044.7200520834,
            "unit": "ns",
            "range": "± 1383.1350996575322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160378.5714285714,
            "unit": "ns",
            "range": "± 60988.64713506178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299100,
            "unit": "ns",
            "range": "± 34670.1600803919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2816274.193548387,
            "unit": "ns",
            "range": "± 83646.46223936365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2686448.3870967743,
            "unit": "ns",
            "range": "± 79260.71271850362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6254985.714285715,
            "unit": "ns",
            "range": "± 199307.15748615275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180330.30303030304,
            "unit": "ns",
            "range": "± 7420.801733525723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171953.2258064516,
            "unit": "ns",
            "range": "± 7838.884115592204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143617.64705882352,
            "unit": "ns",
            "range": "± 5797.713545264303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2745478.5714285714,
            "unit": "ns",
            "range": "± 38953.328653490105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2590900,
            "unit": "ns",
            "range": "± 42843.719326341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11507.865168539325,
            "unit": "ns",
            "range": "± 1326.5835065293516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56104.597701149425,
            "unit": "ns",
            "range": "± 3687.4680304795334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45796.72131147541,
            "unit": "ns",
            "range": "± 2073.5611246608864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60102.15053763441,
            "unit": "ns",
            "range": "± 11830.514878120899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2958.1632653061224,
            "unit": "ns",
            "range": "± 642.9512285920223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11146.153846153846,
            "unit": "ns",
            "range": "± 1468.0529578933747"
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
          "id": "5075a20c564790141be3da4cb8bf272955e1107d",
          "message": "Changelog",
          "timestamp": "2023-12-17T20:01:58+09:00",
          "tree_id": "26d672d2c7ef1653d612add104911d0112611adc",
          "url": "https://github.com/greymistcube/libplanet/commit/5075a20c564790141be3da4cb8bf272955e1107d"
        },
        "date": 1702811562121,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954468.75,
            "unit": "ns",
            "range": "± 92887.7503821286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1721908.3333333333,
            "unit": "ns",
            "range": "± 64901.21407687596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1374695.918367347,
            "unit": "ns",
            "range": "± 126680.20286375261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5285857.142857143,
            "unit": "ns",
            "range": "± 144765.17493173512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34231.03448275862,
            "unit": "ns",
            "range": "± 1509.0611577194102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5102850,
            "unit": "ns",
            "range": "± 42884.760606860014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13327743.333333334,
            "unit": "ns",
            "range": "± 79756.58921875687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32454614.285714287,
            "unit": "ns",
            "range": "± 376530.71150079736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67379513.33333333,
            "unit": "ns",
            "range": "± 657389.3191651207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132817140,
            "unit": "ns",
            "range": "± 1391331.8659266226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3317945.340401786,
            "unit": "ns",
            "range": "± 7322.281880862187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058962.681361607,
            "unit": "ns",
            "range": "± 1649.299884687502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748245.2278645834,
            "unit": "ns",
            "range": "± 1894.803154915365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924035.772235577,
            "unit": "ns",
            "range": "± 4236.325214105978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617003.2854352678,
            "unit": "ns",
            "range": "± 1543.9123436522673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559448.41796875,
            "unit": "ns",
            "range": "± 777.4084727884257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154070.212765957,
            "unit": "ns",
            "range": "± 83094.68385363987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2331423.529411765,
            "unit": "ns",
            "range": "± 47576.800142135515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821564.5833333335,
            "unit": "ns",
            "range": "± 109902.72002051542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2710028.947368421,
            "unit": "ns",
            "range": "± 86225.91291671825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6284541.071428572,
            "unit": "ns",
            "range": "± 266199.79494342604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179313.51351351352,
            "unit": "ns",
            "range": "± 5954.604295191438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175088.23529411765,
            "unit": "ns",
            "range": "± 3446.7162548107253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145675.60975609755,
            "unit": "ns",
            "range": "± 5209.212055954571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2805814.285714286,
            "unit": "ns",
            "range": "± 23069.989068146428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2539057.1428571427,
            "unit": "ns",
            "range": "± 27915.248501510763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12423.333333333334,
            "unit": "ns",
            "range": "± 1551.6609440832294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57114.77272727273,
            "unit": "ns",
            "range": "± 3493.6243991027814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46364.83516483517,
            "unit": "ns",
            "range": "± 2950.0799848431084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60523.59550561798,
            "unit": "ns",
            "range": "± 9935.050698410128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2645.360824742268,
            "unit": "ns",
            "range": "± 447.21839802566933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10809.19540229885,
            "unit": "ns",
            "range": "± 1037.621630181482"
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
          "id": "0b56ea5a3c2dcc7962e8c5514d223ec459c04e28",
          "message": "Changelog",
          "timestamp": "2023-12-18T09:55:28+09:00",
          "tree_id": "bb91dfc788764d68cf62ade0d144340ff6a81ded",
          "url": "https://github.com/greymistcube/libplanet/commit/0b56ea5a3c2dcc7962e8c5514d223ec459c04e28"
        },
        "date": 1702861654131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929754.1666666666,
            "unit": "ns",
            "range": "± 91523.3912196815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718749.4505494505,
            "unit": "ns",
            "range": "± 112281.66999275268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1361029.292929293,
            "unit": "ns",
            "range": "± 143363.90350100672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5201686.842105263,
            "unit": "ns",
            "range": "± 176207.80295489362"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33778.94736842105,
            "unit": "ns",
            "range": "± 1724.6693046860653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5174946.666666667,
            "unit": "ns",
            "range": "± 39490.46660120582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13042837.5,
            "unit": "ns",
            "range": "± 236037.42888222905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32346293.333333332,
            "unit": "ns",
            "range": "± 549145.5069556008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64423714.28571428,
            "unit": "ns",
            "range": "± 447466.7544283948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130784620,
            "unit": "ns",
            "range": "± 887514.8684468818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3269496.796875,
            "unit": "ns",
            "range": "± 8034.765657827226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050675.2511160714,
            "unit": "ns",
            "range": "± 2539.0076309582823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739200.8649553572,
            "unit": "ns",
            "range": "± 1407.684895075525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1884819.1127232143,
            "unit": "ns",
            "range": "± 3007.5875298854057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626164.599609375,
            "unit": "ns",
            "range": "± 1822.133750776511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568342.9387019231,
            "unit": "ns",
            "range": "± 1399.8813484551706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195492,
            "unit": "ns",
            "range": "± 58514.463454203644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215436.0465116277,
            "unit": "ns",
            "range": "± 80270.4226539602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2793833.3333333335,
            "unit": "ns",
            "range": "± 51123.724806543956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2608640.5405405406,
            "unit": "ns",
            "range": "± 80926.97139829032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6080485.185185186,
            "unit": "ns",
            "range": "± 169158.06605226165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165611.3924050633,
            "unit": "ns",
            "range": "± 8036.231853009605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162775.67567567568,
            "unit": "ns",
            "range": "± 4314.922775503469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141540.74074074073,
            "unit": "ns",
            "range": "± 3908.5959764501763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2710346.6666666665,
            "unit": "ns",
            "range": "± 44996.88666478837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2381673.3333333335,
            "unit": "ns",
            "range": "± 37898.89683028229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9659.139784946237,
            "unit": "ns",
            "range": "± 945.0369856047025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51223.40425531915,
            "unit": "ns",
            "range": "± 4236.158371543597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42908.92857142857,
            "unit": "ns",
            "range": "± 1731.7649206112649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52368.0412371134,
            "unit": "ns",
            "range": "± 11965.93730128492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2348.4210526315787,
            "unit": "ns",
            "range": "± 451.44287777358636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9288.04347826087,
            "unit": "ns",
            "range": "± 1131.3555412540436"
          }
        ]
      }
    ]
  }
}