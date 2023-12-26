window.BENCHMARK_DATA = {
  "lastUpdate": 1703582141620,
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
      }
    ]
  }
}