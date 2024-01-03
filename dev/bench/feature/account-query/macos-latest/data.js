window.BENCHMARK_DATA = {
  "lastUpdate": 1704252941197,
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
        "date": 1702821259734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599669.692307692,
            "unit": "ns",
            "range": "± 33835.678059273014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18482799.42857143,
            "unit": "ns",
            "range": "± 222863.13032354607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46130728.14285714,
            "unit": "ns",
            "range": "± 342020.3913342026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94526498.9,
            "unit": "ns",
            "range": "± 1953528.8439534209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188052708.30769232,
            "unit": "ns",
            "range": "± 1961854.0787193878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34173.04494382023,
            "unit": "ns",
            "range": "± 2778.389571603209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222945.96666666667,
            "unit": "ns",
            "range": "± 19046.89435149675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215410.61956521738,
            "unit": "ns",
            "range": "± 16883.945835128972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197303.94565217392,
            "unit": "ns",
            "range": "± 19517.141978194806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3684149.3421052634,
            "unit": "ns",
            "range": "± 74090.64095586879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3421818.4285714286,
            "unit": "ns",
            "range": "± 56483.83343075226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12092.103448275862,
            "unit": "ns",
            "range": "± 778.5211537578386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59026.62087912088,
            "unit": "ns",
            "range": "± 5180.702575338096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51504.04,
            "unit": "ns",
            "range": "± 2597.2004909652765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59744.71875,
            "unit": "ns",
            "range": "± 10889.313752678647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3127.9767441860463,
            "unit": "ns",
            "range": "± 183.59994724747327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12274.854838709678,
            "unit": "ns",
            "range": "± 1142.0345940580107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046340.0204081633,
            "unit": "ns",
            "range": "± 95126.50290951201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2206384.9620253164,
            "unit": "ns",
            "range": "± 114306.12198866814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567449.4948453608,
            "unit": "ns",
            "range": "± 130447.87081644626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7062856.825581395,
            "unit": "ns",
            "range": "± 420780.16707079025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2918255.4857142856,
            "unit": "ns",
            "range": "± 139829.86045043007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3277696.714285714,
            "unit": "ns",
            "range": "± 47797.52129303612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3535994,
            "unit": "ns",
            "range": "± 60946.97325599251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3411719.9166666665,
            "unit": "ns",
            "range": "± 134218.9776645317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14190971.91919192,
            "unit": "ns",
            "range": "± 2502619.359453785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4223976.022836538,
            "unit": "ns",
            "range": "± 45430.93396217473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1333271.323404948,
            "unit": "ns",
            "range": "± 7473.808919981012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863218.7180524553,
            "unit": "ns",
            "range": "± 9036.953509987336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957534.7459716797,
            "unit": "ns",
            "range": "± 36287.555821730166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627365.3923527644,
            "unit": "ns",
            "range": "± 4230.7717629431445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559092.2347935268,
            "unit": "ns",
            "range": "± 6500.738451809359"
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
        "date": 1702860523420,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9307878.604651162,
            "unit": "ns",
            "range": "± 936435.5515012582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22207592.47826087,
            "unit": "ns",
            "range": "± 2111506.822064447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52632260.78888889,
            "unit": "ns",
            "range": "± 4123386.1887664758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113597551.59302326,
            "unit": "ns",
            "range": "± 3825566.7123094564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220307164.2043011,
            "unit": "ns",
            "range": "± 18978790.318513036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51249.333333333336,
            "unit": "ns",
            "range": "± 11447.259313471282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353406.4948453608,
            "unit": "ns",
            "range": "± 105139.25059753333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294182.03225806454,
            "unit": "ns",
            "range": "± 65252.849616178115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306239.8020833333,
            "unit": "ns",
            "range": "± 73324.74128669269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4388189.184210527,
            "unit": "ns",
            "range": "± 93739.177139463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4282629.069767442,
            "unit": "ns",
            "range": "± 450118.42770188017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24402.815217391304,
            "unit": "ns",
            "range": "± 4076.0246953531237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82401.86458333333,
            "unit": "ns",
            "range": "± 13302.923485673356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73718.38888888889,
            "unit": "ns",
            "range": "± 12693.82528336491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79458.4255319149,
            "unit": "ns",
            "range": "± 13940.007159899553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6709.0204081632655,
            "unit": "ns",
            "range": "± 1178.729022221238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20460.43820224719,
            "unit": "ns",
            "range": "± 2575.6648874834073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1263577.0217391304,
            "unit": "ns",
            "range": "± 179247.36778860207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638840.0760869565,
            "unit": "ns",
            "range": "± 166367.8900405802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2367172.762626263,
            "unit": "ns",
            "range": "± 647463.4071901179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11579570.989473684,
            "unit": "ns",
            "range": "± 2209578.0831036237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3108025.8484848486,
            "unit": "ns",
            "range": "± 145090.03581156002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3240559.6944444445,
            "unit": "ns",
            "range": "± 158524.41425935473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3979416.2333333334,
            "unit": "ns",
            "range": "± 235460.17013546097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3780944.7666666666,
            "unit": "ns",
            "range": "± 249511.39106049837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16491150.231578948,
            "unit": "ns",
            "range": "± 4175331.5158294705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5420808.558722528,
            "unit": "ns",
            "range": "± 332413.05867590307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555955.8832310268,
            "unit": "ns",
            "range": "± 24086.73342001722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1045970.7739514803,
            "unit": "ns",
            "range": "± 34069.96025736642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2444785.49845097,
            "unit": "ns",
            "range": "± 66602.16299577193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 732888.6461684284,
            "unit": "ns",
            "range": "± 23022.25178496979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 648766.3811645508,
            "unit": "ns",
            "range": "± 10424.960677273632"
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
        "date": 1702883323430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9916293.85,
            "unit": "ns",
            "range": "± 215283.16893956324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24667078.5,
            "unit": "ns",
            "range": "± 589114.1085004347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61710045.56,
            "unit": "ns",
            "range": "± 1628858.7359688398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122819753.85714285,
            "unit": "ns",
            "range": "± 787093.365114658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252094731.91379312,
            "unit": "ns",
            "range": "± 7005125.278634736"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64654.927710843374,
            "unit": "ns",
            "range": "± 10495.300907599174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258165.26086956522,
            "unit": "ns",
            "range": "± 17841.064301932907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240701.48979591837,
            "unit": "ns",
            "range": "± 23344.36488538415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275988.31707317074,
            "unit": "ns",
            "range": "± 9732.298933034846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4493436.648351648,
            "unit": "ns",
            "range": "± 327417.1304428504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4027128.6129032257,
            "unit": "ns",
            "range": "± 355144.3175981583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14729.98947368421,
            "unit": "ns",
            "range": "± 1978.620524693677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68113.408045977,
            "unit": "ns",
            "range": "± 10676.683053022693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63785.22631578947,
            "unit": "ns",
            "range": "± 11735.91845252429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92423.2052631579,
            "unit": "ns",
            "range": "± 15282.301732809477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6747.979381443299,
            "unit": "ns",
            "range": "± 1742.8713316642493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13203.731958762886,
            "unit": "ns",
            "range": "± 2198.3221514537317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2008683.2659574468,
            "unit": "ns",
            "range": "± 642361.5841165755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4140266.43877551,
            "unit": "ns",
            "range": "± 1131000.3577328664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163182.153846154,
            "unit": "ns",
            "range": "± 371032.0543871864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13034381.782352941,
            "unit": "ns",
            "range": "± 3828259.7487635096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3694932.75,
            "unit": "ns",
            "range": "± 161330.08798900372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3814853.840659341,
            "unit": "ns",
            "range": "± 213525.97438111572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4169853.13,
            "unit": "ns",
            "range": "± 327394.001639783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562692.022222222,
            "unit": "ns",
            "range": "± 172241.50123346748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17553472.55670103,
            "unit": "ns",
            "range": "± 3191130.5521221496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4521902.744921875,
            "unit": "ns",
            "range": "± 146786.343171191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381290.1123046875,
            "unit": "ns",
            "range": "± 18113.247937513057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891985.7094319662,
            "unit": "ns",
            "range": "± 22767.747495379383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2026843.755859375,
            "unit": "ns",
            "range": "± 45501.49441009761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642254.0490234375,
            "unit": "ns",
            "range": "± 17094.563159755868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576301.0200892857,
            "unit": "ns",
            "range": "± 22615.71910299658"
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
        "date": 1703580068481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7601121.866666666,
            "unit": "ns",
            "range": "± 42516.95334110293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18707746.066666666,
            "unit": "ns",
            "range": "± 175841.21801275585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47368361.428571425,
            "unit": "ns",
            "range": "± 518001.9615270946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93630937.9375,
            "unit": "ns",
            "range": "± 1660925.878227782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188658031.56666666,
            "unit": "ns",
            "range": "± 3041068.9989144434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33907.13483146067,
            "unit": "ns",
            "range": "± 1930.4413543340245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219544.08163265305,
            "unit": "ns",
            "range": "± 15472.92810367562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210605.93617021278,
            "unit": "ns",
            "range": "± 13989.16099677645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186400.53846153847,
            "unit": "ns",
            "range": "± 5397.73808302658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3691113.35,
            "unit": "ns",
            "range": "± 83250.34757713122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3488653.15,
            "unit": "ns",
            "range": "± 77895.8086976477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12781.8,
            "unit": "ns",
            "range": "± 994.6546399675562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59335.68085106383,
            "unit": "ns",
            "range": "± 7549.186796570996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52817.67415730337,
            "unit": "ns",
            "range": "± 3756.4707922562857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58440.45054945055,
            "unit": "ns",
            "range": "± 8017.615163935716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3313.967032967033,
            "unit": "ns",
            "range": "± 473.3657606392157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12420.063829787234,
            "unit": "ns",
            "range": "± 1218.9459822772733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1082749.6666666667,
            "unit": "ns",
            "range": "± 108810.59496066491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2271216.378787879,
            "unit": "ns",
            "range": "± 106645.47207118117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551961.1894736842,
            "unit": "ns",
            "range": "± 113910.23628337328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6833318.538461538,
            "unit": "ns",
            "range": "± 349447.3101717221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3037116.4583333335,
            "unit": "ns",
            "range": "± 77480.37164226998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2946844.827586207,
            "unit": "ns",
            "range": "± 84331.51295337305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3555278.3636363638,
            "unit": "ns",
            "range": "± 84696.00621468887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3416831.098360656,
            "unit": "ns",
            "range": "± 151759.64348850067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12929302.396907216,
            "unit": "ns",
            "range": "± 1793240.3593786901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4377838.881990132,
            "unit": "ns",
            "range": "± 97058.45850307534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1339093.6178385417,
            "unit": "ns",
            "range": "± 21416.709298326434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883814.7895507812,
            "unit": "ns",
            "range": "± 10045.649366075006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948858.9489583333,
            "unit": "ns",
            "range": "± 32959.02391694336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625593.1124348958,
            "unit": "ns",
            "range": "± 10402.03272788131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 595726.3339453125,
            "unit": "ns",
            "range": "± 36360.41804974145"
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
        "date": 1703582127720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7664612.692307692,
            "unit": "ns",
            "range": "± 65597.84219696128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19793436.14814815,
            "unit": "ns",
            "range": "± 828681.2889336025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46235825.75,
            "unit": "ns",
            "range": "± 516019.4623706507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92376033.33333333,
            "unit": "ns",
            "range": "± 1282504.7429238763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190071263.7142857,
            "unit": "ns",
            "range": "± 2279099.203167379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34408,
            "unit": "ns",
            "range": "± 2772.509143256015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213495.36585365853,
            "unit": "ns",
            "range": "± 11091.854207738812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215069.0918367347,
            "unit": "ns",
            "range": "± 18120.277212830646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196521.02631578947,
            "unit": "ns",
            "range": "± 20968.626921047726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3686859.7,
            "unit": "ns",
            "range": "± 52506.710790417754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3361036,
            "unit": "ns",
            "range": "± 71171.36883627721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12298.47311827957,
            "unit": "ns",
            "range": "± 956.3781609643324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58084.28421052632,
            "unit": "ns",
            "range": "± 4250.586734625919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50835.417721518985,
            "unit": "ns",
            "range": "± 2646.357039343316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59447.75555555556,
            "unit": "ns",
            "range": "± 9084.9908121887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3418.1720430107525,
            "unit": "ns",
            "range": "± 536.91418275614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12626.59677419355,
            "unit": "ns",
            "range": "± 1554.4666152491868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1024918.3979591837,
            "unit": "ns",
            "range": "± 84140.63927669876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2222875.805970149,
            "unit": "ns",
            "range": "± 105503.30870759297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1523976.1326530613,
            "unit": "ns",
            "range": "± 109501.80482132045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6846014.033333333,
            "unit": "ns",
            "range": "± 421571.5000111228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2963953.6145833335,
            "unit": "ns",
            "range": "± 191071.5117565518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2946480.1627906975,
            "unit": "ns",
            "range": "± 107898.95221410373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3550781.275,
            "unit": "ns",
            "range": "± 124755.97526545674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3370574.3220338984,
            "unit": "ns",
            "range": "± 140349.39219165477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12865994.397959184,
            "unit": "ns",
            "range": "± 1794049.9326985818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4348102.532552083,
            "unit": "ns",
            "range": "± 63262.406614713334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1340296.5920410156,
            "unit": "ns",
            "range": "± 26256.82304748596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 866020.1130208333,
            "unit": "ns",
            "range": "± 12786.508615178916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942200.556919643,
            "unit": "ns",
            "range": "± 18331.940150099086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614987.639453125,
            "unit": "ns",
            "range": "± 5367.907337004152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558986.5438802083,
            "unit": "ns",
            "range": "± 7701.257933901835"
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
          "id": "4ab9e783ab386df73cd874f28124b5aa2e8ea08d",
          "message": "Removed contextual interpretation of ValidatorSet",
          "timestamp": "2024-01-02T18:09:41+09:00",
          "tree_id": "b79598f5c032dd205dba84e439af0ecfcef59222",
          "url": "https://github.com/greymistcube/libplanet/commit/4ab9e783ab386df73cd874f28124b5aa2e8ea08d"
        },
        "date": 1704187667752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7682854.724137931,
            "unit": "ns",
            "range": "± 221368.355083928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18733842.333333332,
            "unit": "ns",
            "range": "± 207426.27491116888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46770081.88,
            "unit": "ns",
            "range": "± 1198607.809007646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92385595.35714285,
            "unit": "ns",
            "range": "± 693227.9157713637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190320520.2857143,
            "unit": "ns",
            "range": "± 2547775.733543135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34943.123529411765,
            "unit": "ns",
            "range": "± 2880.2553250597443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255550.30107526883,
            "unit": "ns",
            "range": "± 28504.68606546961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251596.91666666666,
            "unit": "ns",
            "range": "± 28638.807628687726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241051.23469387754,
            "unit": "ns",
            "range": "± 19714.038444330912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4216683.791666667,
            "unit": "ns",
            "range": "± 297090.205703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733760.0808080807,
            "unit": "ns",
            "range": "± 241730.3734187681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19453.33695652174,
            "unit": "ns",
            "range": "± 5186.301051761104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84395.0306122449,
            "unit": "ns",
            "range": "± 14209.732695675813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89500.73076923077,
            "unit": "ns",
            "range": "± 8693.133770813894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89944.06593406593,
            "unit": "ns",
            "range": "± 12733.072632411671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6637.489583333333,
            "unit": "ns",
            "range": "± 1371.2566767657179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17908.5,
            "unit": "ns",
            "range": "± 5613.458524132029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029631.2653061225,
            "unit": "ns",
            "range": "± 74290.46072791581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2226743.3855421687,
            "unit": "ns",
            "range": "± 116225.71473979576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1564076.8505154639,
            "unit": "ns",
            "range": "± 123596.35015377348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6412448.25,
            "unit": "ns",
            "range": "± 123556.34545879597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2892963.015151515,
            "unit": "ns",
            "range": "± 136030.93919167432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3005959.875,
            "unit": "ns",
            "range": "± 133679.93343228562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3665093.4583333335,
            "unit": "ns",
            "range": "± 166370.16942733433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3404558.0434782607,
            "unit": "ns",
            "range": "± 113693.87725446619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12789856.666666666,
            "unit": "ns",
            "range": "± 1692999.3370706488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4315756.602083334,
            "unit": "ns",
            "range": "± 77215.08839721455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1631996.864673371,
            "unit": "ns",
            "range": "± 118653.43265088563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1019997.6296488444,
            "unit": "ns",
            "range": "± 64461.206658643525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2225188.005006602,
            "unit": "ns",
            "range": "± 107628.35058255737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 706884.4244260204,
            "unit": "ns",
            "range": "± 49933.69872227935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 666771.3240464154,
            "unit": "ns",
            "range": "± 21386.719629066683"
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
          "id": "caea73296066c5c325a7900ced8474a61ef87ac9",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:23:12+09:00",
          "tree_id": "8e478b623d06dc3968e581eb4e406af51401037a",
          "url": "https://github.com/greymistcube/libplanet/commit/caea73296066c5c325a7900ced8474a61ef87ac9"
        },
        "date": 1704202844442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10568515.866666667,
            "unit": "ns",
            "range": "± 146059.3022595698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23699702.214285713,
            "unit": "ns",
            "range": "± 307768.5002448902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56373802.95918367,
            "unit": "ns",
            "range": "± 7696909.234522742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119669762,
            "unit": "ns",
            "range": "± 14707261.830243852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261169150.34946236,
            "unit": "ns",
            "range": "± 23688497.130034015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58441.35555555556,
            "unit": "ns",
            "range": "± 10186.531405459218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267180.54210526316,
            "unit": "ns",
            "range": "± 22486.33413777477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254818.6530612245,
            "unit": "ns",
            "range": "± 36678.069312278836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270702.86559139786,
            "unit": "ns",
            "range": "± 39966.09236720574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4561147.043010753,
            "unit": "ns",
            "range": "± 437621.2931115042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4396137.320754717,
            "unit": "ns",
            "range": "± 181085.59828506666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17717.467391304348,
            "unit": "ns",
            "range": "± 2320.7932115535673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80753.13829787234,
            "unit": "ns",
            "range": "± 16122.344393045945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85258.13043478261,
            "unit": "ns",
            "range": "± 10744.749534271534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89213.79347826086,
            "unit": "ns",
            "range": "± 12035.959721078729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6447.43956043956,
            "unit": "ns",
            "range": "± 1301.5199081483431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19111.65625,
            "unit": "ns",
            "range": "± 3053.0091793201605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318533.2222222222,
            "unit": "ns",
            "range": "± 73493.82496903584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860861.663043478,
            "unit": "ns",
            "range": "± 245384.28891628564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037623.8125,
            "unit": "ns",
            "range": "± 138274.84456539998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8937194.333333334,
            "unit": "ns",
            "range": "± 550643.462019128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3022997.220588235,
            "unit": "ns",
            "range": "± 143184.67171796176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3659339.2021276597,
            "unit": "ns",
            "range": "± 486568.5522949018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4361449.350515464,
            "unit": "ns",
            "range": "± 309359.7288065318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3932379.4285714286,
            "unit": "ns",
            "range": "± 343114.1312788534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16790918.0625,
            "unit": "ns",
            "range": "± 2961846.994662479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5593716.8128125,
            "unit": "ns",
            "range": "± 222845.37856354893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1729694.325420673,
            "unit": "ns",
            "range": "± 28073.749798999026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 968737.4030664063,
            "unit": "ns",
            "range": "± 93195.06297725365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946793.4765625,
            "unit": "ns",
            "range": "± 48806.244300065424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632845.722280649,
            "unit": "ns",
            "range": "± 8463.765061934591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564747.0383649553,
            "unit": "ns",
            "range": "± 13003.609555803137"
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
          "id": "dd94b60bffd9c13b5c931007727e46007c8c57cf",
          "message": "Fixed build and tests",
          "timestamp": "2024-01-02T22:33:08+09:00",
          "tree_id": "77c96e969c033a597997a9476440cf4559067f94",
          "url": "https://github.com/greymistcube/libplanet/commit/dd94b60bffd9c13b5c931007727e46007c8c57cf"
        },
        "date": 1704203368803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7496455.866666666,
            "unit": "ns",
            "range": "± 121649.95005745358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18776884.846153848,
            "unit": "ns",
            "range": "± 311354.23538440536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48049033.94736842,
            "unit": "ns",
            "range": "± 1067640.8804847086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93904445.42857143,
            "unit": "ns",
            "range": "± 1332106.7295814792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194771715.31428573,
            "unit": "ns",
            "range": "± 6257463.358456556"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35388.25,
            "unit": "ns",
            "range": "± 3706.5649795737017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223306.07731958764,
            "unit": "ns",
            "range": "± 18242.66582015168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211832.93157894738,
            "unit": "ns",
            "range": "± 14340.063762620215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197466.12637362638,
            "unit": "ns",
            "range": "± 14264.056303752803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3714871.75,
            "unit": "ns",
            "range": "± 85082.4363382361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3446942.7333333334,
            "unit": "ns",
            "range": "± 62616.76569129146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12531.421348314607,
            "unit": "ns",
            "range": "± 831.2136557293129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59673.94680851064,
            "unit": "ns",
            "range": "± 6093.664593652652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56164.471264367814,
            "unit": "ns",
            "range": "± 7823.931906952524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62804.41836734694,
            "unit": "ns",
            "range": "± 9831.306698526087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3752.0384615384614,
            "unit": "ns",
            "range": "± 549.4104377055728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12060.826086956522,
            "unit": "ns",
            "range": "± 834.363475340527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061277.1313131314,
            "unit": "ns",
            "range": "± 108257.35806906996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2268029.6913580247,
            "unit": "ns",
            "range": "± 118362.8300410059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1533988.8298969073,
            "unit": "ns",
            "range": "± 93360.62623144477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6912263.775280898,
            "unit": "ns",
            "range": "± 516448.2757366272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2878116.6315789474,
            "unit": "ns",
            "range": "± 120976.35876980728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3024831.093023256,
            "unit": "ns",
            "range": "± 162889.64062591057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3572483.8571428573,
            "unit": "ns",
            "range": "± 50424.402364189846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3431379.9647887326,
            "unit": "ns",
            "range": "± 166752.50102676387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12949411.08,
            "unit": "ns",
            "range": "± 1939791.653063936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4554548.379971591,
            "unit": "ns",
            "range": "± 164615.95307627117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1345903.9370117188,
            "unit": "ns",
            "range": "± 28204.80055973283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 907479.9791666666,
            "unit": "ns",
            "range": "± 30307.172941468623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1995462.8753348214,
            "unit": "ns",
            "range": "± 64985.87007681267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934209.8201152147,
            "unit": "ns",
            "range": "± 158865.8365580069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727484.2055362654,
            "unit": "ns",
            "range": "± 38197.55161786236"
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
          "id": "e9e8b050287042248890cfaedd5eb913d3aaf857",
          "message": "Fixed build and tests",
          "timestamp": "2024-01-03T11:56:47+09:00",
          "tree_id": "bef4aab36a2e388c93e6a686c04250c020bfd275",
          "url": "https://github.com/greymistcube/libplanet/commit/e9e8b050287042248890cfaedd5eb913d3aaf857"
        },
        "date": 1704252926125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911305.769230769,
            "unit": "ns",
            "range": "± 93335.65387724193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21741439.664705884,
            "unit": "ns",
            "range": "± 1170576.7266776974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53475738.222222224,
            "unit": "ns",
            "range": "± 2350444.4190026466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108600218.07692307,
            "unit": "ns",
            "range": "± 2893021.664746535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226165650.39130434,
            "unit": "ns",
            "range": "± 5631936.065446182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69478.12087912088,
            "unit": "ns",
            "range": "± 9175.35455789059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308689.2571428571,
            "unit": "ns",
            "range": "± 12233.784975395947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307136.765625,
            "unit": "ns",
            "range": "± 14118.314492842253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296206.7962962963,
            "unit": "ns",
            "range": "± 8100.5215492812795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099828.5714285714,
            "unit": "ns",
            "range": "± 49819.823773681295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3701427.5,
            "unit": "ns",
            "range": "± 65612.79451565712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22358.18888888889,
            "unit": "ns",
            "range": "± 3484.702078554156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118109.80412371134,
            "unit": "ns",
            "range": "± 19512.62720097295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111789.23595505618,
            "unit": "ns",
            "range": "± 10588.40443171688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120586.96808510639,
            "unit": "ns",
            "range": "± 23906.46638327075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7044.010638297872,
            "unit": "ns",
            "range": "± 1138.1647153380077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21418.614942528737,
            "unit": "ns",
            "range": "± 2595.1851501152623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390514.4897959183,
            "unit": "ns",
            "range": "± 121971.756092015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475249.822222222,
            "unit": "ns",
            "range": "± 93899.24880067633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2018484.3152173914,
            "unit": "ns",
            "range": "± 132040.45019205866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9408918.013888888,
            "unit": "ns",
            "range": "± 463442.589457877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335658.7040816327,
            "unit": "ns",
            "range": "± 240204.00728118027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3540138.1157894735,
            "unit": "ns",
            "range": "± 217223.70962276123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573896.221649485,
            "unit": "ns",
            "range": "± 352263.6960909854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4441847.45959596,
            "unit": "ns",
            "range": "± 448762.3220915708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18799009.13265306,
            "unit": "ns",
            "range": "± 2564158.609227622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6525847.082248264,
            "unit": "ns",
            "range": "± 217539.34146228887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808743.2324776787,
            "unit": "ns",
            "range": "± 59315.694690130396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056727.4091796875,
            "unit": "ns",
            "range": "± 6752.0953462288335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2839909.699479167,
            "unit": "ns",
            "range": "± 38437.27351505879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849070.2535574777,
            "unit": "ns",
            "range": "± 8326.375996958173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748985.4899291992,
            "unit": "ns",
            "range": "± 22761.165850426936"
          }
        ]
      }
    ]
  }
}