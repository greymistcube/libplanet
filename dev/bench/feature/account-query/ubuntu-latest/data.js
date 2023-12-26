window.BENCHMARK_DATA = {
  "lastUpdate": 1703582049990,
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
          "id": "9191997b8ad9ba2908b17b5e53132722c0540cdd",
          "message": "Added account state queries",
          "timestamp": "2023-12-17T22:33:47+09:00",
          "tree_id": "ddd3bedabc865246b56b66d0c27114b6723994e3",
          "url": "https://github.com/greymistcube/libplanet/commit/9191997b8ad9ba2908b17b5e53132722c0540cdd"
        },
        "date": 1702821132693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739313.540690104,
            "unit": "ns",
            "range": "± 5314.514363596877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197608.55390625,
            "unit": "ns",
            "range": "± 21676.611272440867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769871.437124399,
            "unit": "ns",
            "range": "± 8030.187091483762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2001931.2663574219,
            "unit": "ns",
            "range": "± 6139.021316859043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611450.8021647135,
            "unit": "ns",
            "range": "± 1294.5373185600688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573377.8592936198,
            "unit": "ns",
            "range": "± 1940.234777922406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383302.6363636362,
            "unit": "ns",
            "range": "± 61204.25885192661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547300.8666666667,
            "unit": "ns",
            "range": "± 45264.53963229726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130819.0384615385,
            "unit": "ns",
            "range": "± 83284.91015086984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2869612.159090909,
            "unit": "ns",
            "range": "± 97784.44882708069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776473.642857143,
            "unit": "ns",
            "range": "± 193105.67653762255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40234.76804123711,
            "unit": "ns",
            "range": "± 4916.186933902347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199479,
            "unit": "ns",
            "range": "± 5771.425672580186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191436.33333333334,
            "unit": "ns",
            "range": "± 7832.514496930903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166091.7619047619,
            "unit": "ns",
            "range": "± 3794.1874875230124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060864,
            "unit": "ns",
            "range": "± 57895.865045211416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2778370.230769231,
            "unit": "ns",
            "range": "± 34302.00330435976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15992.939393939394,
            "unit": "ns",
            "range": "± 2681.1760320159456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67055.39024390244,
            "unit": "ns",
            "range": "± 3563.347478598878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52739,
            "unit": "ns",
            "range": "± 1438.3528148545474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62400.22680412371,
            "unit": "ns",
            "range": "± 13621.22197888369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3374.705263157895,
            "unit": "ns",
            "range": "± 641.1523182401904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13811.515151515152,
            "unit": "ns",
            "range": "± 2613.504951185311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5604682.8,
            "unit": "ns",
            "range": "± 23646.630769368752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14279283.357142856,
            "unit": "ns",
            "range": "± 101183.8443701191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36276755.416666664,
            "unit": "ns",
            "range": "± 193067.20905305975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73606189.21428572,
            "unit": "ns",
            "range": "± 644095.7394463578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150523126.46666667,
            "unit": "ns",
            "range": "± 1114990.7456045074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947568.5384615385,
            "unit": "ns",
            "range": "± 74351.18934389202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875538.6712328766,
            "unit": "ns",
            "range": "± 92438.02932746871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1397669.3,
            "unit": "ns",
            "range": "± 92352.56732997898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6125587.957894737,
            "unit": "ns",
            "range": "± 376387.1857377073"
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
          "id": "0376f4a2c3f86b0b89d62971c3e6b357fe51cbdb",
          "message": "Added account state queries",
          "timestamp": "2023-12-18T09:30:27+09:00",
          "tree_id": "e7f43002d0f2f5363f2d5c97543bd3dd2556bcbc",
          "url": "https://github.com/greymistcube/libplanet/commit/0376f4a2c3f86b0b89d62971c3e6b357fe51cbdb"
        },
        "date": 1702860074247,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3818643.23828125,
            "unit": "ns",
            "range": "± 62152.646557964305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218392.1702223558,
            "unit": "ns",
            "range": "± 2512.6275437253425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766762.076547476,
            "unit": "ns",
            "range": "± 1510.1551345921348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940262.8236177885,
            "unit": "ns",
            "range": "± 5895.0182061304595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619673.4521484375,
            "unit": "ns",
            "range": "± 5006.577209286712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573800.6129324777,
            "unit": "ns",
            "range": "± 841.4581806618264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2329986.8,
            "unit": "ns",
            "range": "± 29956.73934955443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2592003.9383561644,
            "unit": "ns",
            "range": "± 110410.22172725099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111962.66,
            "unit": "ns",
            "range": "± 79291.92304373335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3010327.1612903224,
            "unit": "ns",
            "range": "± 91480.26028132947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6895176.318181818,
            "unit": "ns",
            "range": "± 255459.45133928952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41559.3125,
            "unit": "ns",
            "range": "± 5483.515346376571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199813.55357142858,
            "unit": "ns",
            "range": "± 8608.879647137373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190158.52083333334,
            "unit": "ns",
            "range": "± 6967.006915545504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161885.5,
            "unit": "ns",
            "range": "± 4056.6784656801483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068465.888888889,
            "unit": "ns",
            "range": "± 61989.37995561051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2932162.714285714,
            "unit": "ns",
            "range": "± 48519.95017346128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13120.61855670103,
            "unit": "ns",
            "range": "± 1884.967121968461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64168.1030927835,
            "unit": "ns",
            "range": "± 7087.542281597184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62859.36363636364,
            "unit": "ns",
            "range": "± 1535.912085016728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58403.54639175258,
            "unit": "ns",
            "range": "± 11493.854399580801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3407.8105263157895,
            "unit": "ns",
            "range": "± 635.4450826621505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13803.224489795919,
            "unit": "ns",
            "range": "± 2603.5668219785466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5536564.866666666,
            "unit": "ns",
            "range": "± 19750.359092094168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14575224.642857144,
            "unit": "ns",
            "range": "± 100485.07767563313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37225327.8,
            "unit": "ns",
            "range": "± 277719.10828651517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74366286.5,
            "unit": "ns",
            "range": "± 385347.8792882628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 158448311.7142857,
            "unit": "ns",
            "range": "± 1123933.5617317373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971218.1958762887,
            "unit": "ns",
            "range": "± 97087.52654849635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855321.48,
            "unit": "ns",
            "range": "± 74888.35186925581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1351917.8988764044,
            "unit": "ns",
            "range": "± 70448.5339429116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5912611,
            "unit": "ns",
            "range": "± 240638.4781439805"
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
          "id": "488a6ffbd213ba1e187e2350e68fc3a37e7adeef",
          "message": "Added account state queries",
          "timestamp": "2023-12-18T15:46:28+09:00",
          "tree_id": "98d7b9f8feb54900d52556e6e7fd2d6f6235c105",
          "url": "https://github.com/greymistcube/libplanet/commit/488a6ffbd213ba1e187e2350e68fc3a37e7adeef"
        },
        "date": 1702882653442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3726122.948828125,
            "unit": "ns",
            "range": "± 46804.33790746977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194867.5830829327,
            "unit": "ns",
            "range": "± 8288.238547341552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778170.558186849,
            "unit": "ns",
            "range": "± 2636.6288050701532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925282.3629557292,
            "unit": "ns",
            "range": "± 3384.755895627466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619162.9730747768,
            "unit": "ns",
            "range": "± 2421.0079649261515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579023.3331580529,
            "unit": "ns",
            "range": "± 1156.2518930386586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404266.6666666665,
            "unit": "ns",
            "range": "± 38801.85159364484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532882.875,
            "unit": "ns",
            "range": "± 63054.607777229234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3072491.5,
            "unit": "ns",
            "range": "± 42251.98969142891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3030452.888888889,
            "unit": "ns",
            "range": "± 102572.24876159293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6998415.088235294,
            "unit": "ns",
            "range": "± 221423.32298171465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39326.221649484534,
            "unit": "ns",
            "range": "± 6030.789142569203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206507.67894736843,
            "unit": "ns",
            "range": "± 12794.234971665574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189231.70833333334,
            "unit": "ns",
            "range": "± 8799.314313775001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168791.52,
            "unit": "ns",
            "range": "± 4487.336237680434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113938,
            "unit": "ns",
            "range": "± 57061.45173991516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2797614.153846154,
            "unit": "ns",
            "range": "± 32719.144237602333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15872.04347826087,
            "unit": "ns",
            "range": "± 1602.7096109370425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64885.989795918365,
            "unit": "ns",
            "range": "± 7736.778264052246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59566.74418604651,
            "unit": "ns",
            "range": "± 5092.491536707389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62425.31313131313,
            "unit": "ns",
            "range": "± 13607.467624655597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3474.595744680851,
            "unit": "ns",
            "range": "± 981.5114558914805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12756.086021505376,
            "unit": "ns",
            "range": "± 2141.934439868266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5574951.133333334,
            "unit": "ns",
            "range": "± 61665.38034524566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14701209,
            "unit": "ns",
            "range": "± 94793.08707616063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36821056.71428572,
            "unit": "ns",
            "range": "± 246673.89674611317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75109726.57142857,
            "unit": "ns",
            "range": "± 293926.5385991526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148968076.69230768,
            "unit": "ns",
            "range": "± 751932.1747089721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951535.9193548387,
            "unit": "ns",
            "range": "± 81942.0886440835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898621.8723404256,
            "unit": "ns",
            "range": "± 73375.63556723983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420329.4677419355,
            "unit": "ns",
            "range": "± 112350.27142819049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5921061.575,
            "unit": "ns",
            "range": "± 210461.17493292692"
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
          "id": "dbb5fbd8017b7997941dce5b5d8665a1450fc6ba",
          "message": "Added tests",
          "timestamp": "2023-12-26T17:23:22+09:00",
          "tree_id": "02e8908239dafe56300a8e7c34f8b00d2756d29d",
          "url": "https://github.com/greymistcube/libplanet/commit/dbb5fbd8017b7997941dce5b5d8665a1450fc6ba"
        },
        "date": 1703579950315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3677946.310096154,
            "unit": "ns",
            "range": "± 12061.88092443908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213289.2943638393,
            "unit": "ns",
            "range": "± 1944.3180750176812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762067.6009347098,
            "unit": "ns",
            "range": "± 2493.7169987320317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941746.2232572115,
            "unit": "ns",
            "range": "± 6787.03177580018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625010.0219350961,
            "unit": "ns",
            "range": "± 4798.866647919094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575875.3766526442,
            "unit": "ns",
            "range": "± 1030.91834344721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521831.214285714,
            "unit": "ns",
            "range": "± 59621.82664020187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2691509.9857142856,
            "unit": "ns",
            "range": "± 87081.64238412115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3160107.5714285714,
            "unit": "ns",
            "range": "± 33612.49504325686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3039677.875,
            "unit": "ns",
            "range": "± 105570.14413969644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7255872.5625,
            "unit": "ns",
            "range": "± 139400.87576241823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42361.302083333336,
            "unit": "ns",
            "range": "± 6233.517464599686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213142.55789473685,
            "unit": "ns",
            "range": "± 13390.12783591098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213234.55319148937,
            "unit": "ns",
            "range": "± 17191.742788932028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172988.86842105264,
            "unit": "ns",
            "range": "± 3740.5003113149673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070276.25,
            "unit": "ns",
            "range": "± 38481.52589614209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798722.0384615385,
            "unit": "ns",
            "range": "± 17817.43677606941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23725.68,
            "unit": "ns",
            "range": "± 4968.611323340179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82510.76288659793,
            "unit": "ns",
            "range": "± 13457.956822215185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95865.75,
            "unit": "ns",
            "range": "± 4493.252411680723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104709.25510204081,
            "unit": "ns",
            "range": "± 13689.977035149175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7460.438775510204,
            "unit": "ns",
            "range": "± 913.3540778201246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17704.454545454544,
            "unit": "ns",
            "range": "± 5490.986523892211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5872515.375,
            "unit": "ns",
            "range": "± 109616.05957271955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14551754.538461538,
            "unit": "ns",
            "range": "± 38319.47161825909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36900370.538461536,
            "unit": "ns",
            "range": "± 155989.30951436778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74670217.21428572,
            "unit": "ns",
            "range": "± 324616.133175355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153663007.42857143,
            "unit": "ns",
            "range": "± 596428.8497702503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040295.4191919192,
            "unit": "ns",
            "range": "± 129551.52611311956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2027486.7818181817,
            "unit": "ns",
            "range": "± 84436.53174353765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499954.5393258426,
            "unit": "ns",
            "range": "± 104162.87301276787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6250061.394736842,
            "unit": "ns",
            "range": "± 358231.34179636324"
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
          "id": "1d1966520dd42daa5be368e081e2b6710bf2986a",
          "message": "Removed contextual interpretation of ValidatorSet",
          "timestamp": "2023-12-26T18:03:13+09:00",
          "tree_id": "52ea834676b0283949ccc8072b36aaaafca2e372",
          "url": "https://github.com/greymistcube/libplanet/commit/1d1966520dd42daa5be368e081e2b6710bf2986a"
        },
        "date": 1703582043132,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760433.91015625,
            "unit": "ns",
            "range": "± 12982.037179080591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234013.3950892857,
            "unit": "ns",
            "range": "± 19523.49366482274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767251.670297476,
            "unit": "ns",
            "range": "± 3843.1093782064213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951821.139453125,
            "unit": "ns",
            "range": "± 22738.406062060167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614688.9934430803,
            "unit": "ns",
            "range": "± 880.2570425129775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577229.1648297991,
            "unit": "ns",
            "range": "± 6325.957111319806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2336662.3488372094,
            "unit": "ns",
            "range": "± 65154.014550098625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501167.342857143,
            "unit": "ns",
            "range": "± 79318.96587306916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3137565.375,
            "unit": "ns",
            "range": "± 61496.57133843588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2994772.816666667,
            "unit": "ns",
            "range": "± 133740.35112624985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6941520.107142857,
            "unit": "ns",
            "range": "± 197229.60770040273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40597.60526315789,
            "unit": "ns",
            "range": "± 5231.430347253368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195392.11666666667,
            "unit": "ns",
            "range": "± 8281.45095387351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191335.24576271186,
            "unit": "ns",
            "range": "± 7166.656264985497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168781.2857142857,
            "unit": "ns",
            "range": "± 2599.2752962958857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3034137.6428571427,
            "unit": "ns",
            "range": "± 34542.85406587712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868874.3,
            "unit": "ns",
            "range": "± 49784.79760529312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16900.133333333335,
            "unit": "ns",
            "range": "± 2488.886417657503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64883.52040816326,
            "unit": "ns",
            "range": "± 8749.062656102307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61464.625,
            "unit": "ns",
            "range": "± 1865.7306058347187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61992.36734693877,
            "unit": "ns",
            "range": "± 15163.800000882295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3107.438202247191,
            "unit": "ns",
            "range": "± 979.965792017254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11885.857142857143,
            "unit": "ns",
            "range": "± 798.994375886597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5643857.083333333,
            "unit": "ns",
            "range": "± 24541.361518347807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14190093.785714285,
            "unit": "ns",
            "range": "± 77096.9025299965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37254291.4375,
            "unit": "ns",
            "range": "± 709708.9704677515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74086562.71428572,
            "unit": "ns",
            "range": "± 581783.3891725879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153086114.08333334,
            "unit": "ns",
            "range": "± 599113.9490167517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958710.1894736842,
            "unit": "ns",
            "range": "± 82265.02106442128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929555.4567901234,
            "unit": "ns",
            "range": "± 101172.16227587622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1396006.1666666667,
            "unit": "ns",
            "range": "± 84975.68851283488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6061378.79787234,
            "unit": "ns",
            "range": "± 381538.79276378563"
          }
        ]
      }
    ]
  }
}