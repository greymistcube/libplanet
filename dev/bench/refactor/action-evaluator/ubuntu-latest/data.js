window.BENCHMARK_DATA = {
  "lastUpdate": 1686536589991,
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
          "id": "f28a269cff6f1064e1e13d1a7630c2c05652dc1c",
          "message": "Remove null getters",
          "timestamp": "2023-06-09T20:20:20+09:00",
          "tree_id": "62330eb54892a69fe99510199b799e3ce891914e",
          "url": "https://github.com/greymistcube/libplanet/commit/f28a269cff6f1064e1e13d1a7630c2c05652dc1c"
        },
        "date": 1686310535381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740176.7352941176,
            "unit": "ns",
            "range": "± 83186.42693957748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3334662.875,
            "unit": "ns",
            "range": "± 64771.254787778606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2844247.2739726026,
            "unit": "ns",
            "range": "± 137426.56733964226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6802810.814814814,
            "unit": "ns",
            "range": "± 190535.52713218948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4205076.125,
            "unit": "ns",
            "range": "± 79091.1679594083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4458473.148148148,
            "unit": "ns",
            "range": "± 120365.8998083324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5421052.84375,
            "unit": "ns",
            "range": "± 167254.28884787098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5479623.285714285,
            "unit": "ns",
            "range": "± 154792.01520890495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9179645.625,
            "unit": "ns",
            "range": "± 178764.59885442458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10063365.692307692,
            "unit": "ns",
            "range": "± 93556.1071633707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27523091.8,
            "unit": "ns",
            "range": "± 451204.8112246968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67347715,
            "unit": "ns",
            "range": "± 950469.9713093067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135600894.4,
            "unit": "ns",
            "range": "± 1444728.673512079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269828161.93333334,
            "unit": "ns",
            "range": "± 2748571.9597215117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7490245.795833333,
            "unit": "ns",
            "range": "± 29269.62794413976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2327370.7583333333,
            "unit": "ns",
            "range": "± 5090.432638003063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1692112.071986607,
            "unit": "ns",
            "range": "± 5071.1693788217335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3240635.5416666665,
            "unit": "ns",
            "range": "± 6845.360275028364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045274.3184895833,
            "unit": "ns",
            "range": "± 1655.1130515327623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978953.2764322917,
            "unit": "ns",
            "range": "± 1264.6048825465807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56947.48809523809,
            "unit": "ns",
            "range": "± 2989.57344136289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349759.46153846156,
            "unit": "ns",
            "range": "± 9336.157441820566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336669.64864864864,
            "unit": "ns",
            "range": "± 11286.205262807965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293795.5714285714,
            "unit": "ns",
            "range": "± 4459.867964832173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5460340.4,
            "unit": "ns",
            "range": "± 59626.46470174608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4860960.533333333,
            "unit": "ns",
            "range": "± 45099.78416145163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21360.913978494624,
            "unit": "ns",
            "range": "± 1251.0362370582689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102923.83516483517,
            "unit": "ns",
            "range": "± 5760.442722692099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89985.78571428571,
            "unit": "ns",
            "range": "± 1243.3856495980535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103498.23711340207,
            "unit": "ns",
            "range": "± 11901.572067704958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5717.969072164949,
            "unit": "ns",
            "range": "± 555.9219342229372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19468.473684210527,
            "unit": "ns",
            "range": "± 1464.6459658057902"
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
          "id": "f093145991322c716962ed3426f05a34016400bb",
          "message": "Changelog",
          "timestamp": "2023-06-09T20:27:12+09:00",
          "tree_id": "49ab16f949a88086deb57f05377c77ae2eb27f63",
          "url": "https://github.com/greymistcube/libplanet/commit/f093145991322c716962ed3426f05a34016400bb"
        },
        "date": 1686310768549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339118.4081632653,
            "unit": "ns",
            "range": "± 89378.88688280364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2594034.5405405406,
            "unit": "ns",
            "range": "± 78294.37594481859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2399934.7647058824,
            "unit": "ns",
            "range": "± 48595.58716788158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5230691.65,
            "unit": "ns",
            "range": "± 119042.83697466351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3114950.6923076925,
            "unit": "ns",
            "range": "± 19254.054427507883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376906.794117647,
            "unit": "ns",
            "range": "± 104512.37868970628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4227479.692307692,
            "unit": "ns",
            "range": "± 34458.48130089459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4271824.733333333,
            "unit": "ns",
            "range": "± 60340.30676382397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6759267.956521739,
            "unit": "ns",
            "range": "± 160126.74060468428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591992.357142857,
            "unit": "ns",
            "range": "± 53201.079767248135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19522675.92857143,
            "unit": "ns",
            "range": "± 57340.43921844108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50246247.461538464,
            "unit": "ns",
            "range": "± 187249.18634252035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100342370.53333333,
            "unit": "ns",
            "range": "± 592077.7083647125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201644031.86666667,
            "unit": "ns",
            "range": "± 1139692.7710750364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5895155.611979167,
            "unit": "ns",
            "range": "± 13169.573087514222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844488.4753069195,
            "unit": "ns",
            "range": "± 2700.257110014148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340482.2901141827,
            "unit": "ns",
            "range": "± 1500.0955131581093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547979.3440290177,
            "unit": "ns",
            "range": "± 1603.5070436396857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793876.5184151785,
            "unit": "ns",
            "range": "± 746.9836862117367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738537.170703125,
            "unit": "ns",
            "range": "± 810.0525101263419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45161.054945054944,
            "unit": "ns",
            "range": "± 2411.079570845288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276309.7619047619,
            "unit": "ns",
            "range": "± 9485.748228480616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268171.5789473684,
            "unit": "ns",
            "range": "± 9167.011475147763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226836.53846153847,
            "unit": "ns",
            "range": "± 2312.8858818722774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4267078.428571428,
            "unit": "ns",
            "range": "± 32210.968148023225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835468.8,
            "unit": "ns",
            "range": "± 43807.89737381019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17420.2688172043,
            "unit": "ns",
            "range": "± 1314.2166135712291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85319.69892473119,
            "unit": "ns",
            "range": "± 5245.394646289727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71291.76923076923,
            "unit": "ns",
            "range": "± 2466.5295186550597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89303.26530612246,
            "unit": "ns",
            "range": "± 12663.438090795187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4306.081632653061,
            "unit": "ns",
            "range": "± 552.1745143506155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17310.25,
            "unit": "ns",
            "range": "± 1370.4756377565457"
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
          "id": "6ec9b2b335398ce6efa28e284ec5a2f2f802d406",
          "message": "Cleanup",
          "timestamp": "2023-06-12T11:09:41+09:00",
          "tree_id": "0e946c993f13e08624bcfdeb01f94132442c9a85",
          "url": "https://github.com/greymistcube/libplanet/commit/6ec9b2b335398ce6efa28e284ec5a2f2f802d406"
        },
        "date": 1686536582909,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393562.2631578948,
            "unit": "ns",
            "range": "± 95648.87588012803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2674369.3035714286,
            "unit": "ns",
            "range": "± 113822.18027590543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2237961.423076923,
            "unit": "ns",
            "range": "± 114778.41620502075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5468508.1,
            "unit": "ns",
            "range": "± 180980.27620764336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3303410.6666666665,
            "unit": "ns",
            "range": "± 55194.17349512106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3619900.55,
            "unit": "ns",
            "range": "± 78637.5562166972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4392860.730769231,
            "unit": "ns",
            "range": "± 117927.79235669858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4394913.042857143,
            "unit": "ns",
            "range": "± 213163.8504058971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7086763.410714285,
            "unit": "ns",
            "range": "± 299312.69750071666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7666323.666666667,
            "unit": "ns",
            "range": "± 92365.7368041903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21608765.933333334,
            "unit": "ns",
            "range": "± 246867.39633844685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52211071.86666667,
            "unit": "ns",
            "range": "± 753493.4301998037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106100893.8,
            "unit": "ns",
            "range": "± 1466951.2164632566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213647795.8,
            "unit": "ns",
            "range": "± 2330197.4550973205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5858486.034375,
            "unit": "ns",
            "range": "± 21909.06108735864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904835.0309895833,
            "unit": "ns",
            "range": "± 4579.3459782085365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368016.6639322916,
            "unit": "ns",
            "range": "± 2945.398035901608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665547.9075520835,
            "unit": "ns",
            "range": "± 2939.5418917169395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845601.9511021206,
            "unit": "ns",
            "range": "± 1498.3721576158216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748623.0833333334,
            "unit": "ns",
            "range": "± 719.6672280872126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47085.55714285714,
            "unit": "ns",
            "range": "± 2008.2631159945606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281967.16363636364,
            "unit": "ns",
            "range": "± 11858.191525291917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268495.31481481483,
            "unit": "ns",
            "range": "± 10340.691611890821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243927.75757575757,
            "unit": "ns",
            "range": "± 7678.8841882720135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4331772.266666667,
            "unit": "ns",
            "range": "± 66289.50895392407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4013531,
            "unit": "ns",
            "range": "± 69955.84143790792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18417.531914893618,
            "unit": "ns",
            "range": "± 1188.2098010151876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86288.31944444444,
            "unit": "ns",
            "range": "± 4268.4755659463935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75299.36842105263,
            "unit": "ns",
            "range": "± 1449.2789092252556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94595.22680412371,
            "unit": "ns",
            "range": "± 12040.956752290245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5129.775510204082,
            "unit": "ns",
            "range": "± 612.9675414055357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17996.119565217392,
            "unit": "ns",
            "range": "± 1104.3025628794976"
          }
        ]
      }
    ]
  }
}