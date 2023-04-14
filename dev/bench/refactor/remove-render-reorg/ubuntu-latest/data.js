window.BENCHMARK_DATA = {
  "lastUpdate": 1681462773383,
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
          "id": "91bdd549a29b070504f0670e33108f82ad57b082",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:22:38+09:00",
          "tree_id": "772c48669284e9f79b6634c1db15ff7daed361b0",
          "url": "https://github.com/greymistcube/libplanet/commit/91bdd549a29b070504f0670e33108f82ad57b082"
        },
        "date": 1681461402412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7528900,
            "unit": "ns",
            "range": "± 73498.21770142262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21251724.533333335,
            "unit": "ns",
            "range": "± 339445.1630383379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53501811.526315786,
            "unit": "ns",
            "range": "± 1133152.9460495205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105284075.93333334,
            "unit": "ns",
            "range": "± 1880453.5015519324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214096237.66666666,
            "unit": "ns",
            "range": "± 3368706.356681293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50922.032258064515,
            "unit": "ns",
            "range": "± 2910.5596931190016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519318.293478261,
            "unit": "ns",
            "range": "± 87399.14742002971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2783745.1944444445,
            "unit": "ns",
            "range": "± 91958.19900766075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2432991.411764706,
            "unit": "ns",
            "range": "± 119863.58003841723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6165444.19047619,
            "unit": "ns",
            "range": "± 280726.4561590883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5932432.031770834,
            "unit": "ns",
            "range": "± 61518.75677450611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880496.14375,
            "unit": "ns",
            "range": "± 4804.956665511314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335182.4770833333,
            "unit": "ns",
            "range": "± 7664.987924187222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631232.8744791667,
            "unit": "ns",
            "range": "± 3653.9444540399354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822289.98828125,
            "unit": "ns",
            "range": "± 771.1139110520252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750989.1715959822,
            "unit": "ns",
            "range": "± 851.3862561468045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342867.42424242425,
            "unit": "ns",
            "range": "± 10868.762090362176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289248.0243902439,
            "unit": "ns",
            "range": "± 10168.898405156295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235122.4,
            "unit": "ns",
            "range": "± 3872.6288929946722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5765967.307692308,
            "unit": "ns",
            "range": "± 37671.898911046446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4014848.785714286,
            "unit": "ns",
            "range": "± 55483.88058662218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19136.268041237112,
            "unit": "ns",
            "range": "± 1887.051897777456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94684.22105263158,
            "unit": "ns",
            "range": "± 6729.52960826299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79612.46315789473,
            "unit": "ns",
            "range": "± 5015.806003855119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202485.55670103093,
            "unit": "ns",
            "range": "± 19535.08419270371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6161.336734693878,
            "unit": "ns",
            "range": "± 866.2843744403663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20309.462365591397,
            "unit": "ns",
            "range": "± 2071.4818344402843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419390.090909091,
            "unit": "ns",
            "range": "± 80673.30312935541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514585.7321428573,
            "unit": "ns",
            "range": "± 150806.61389167386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4224358.133333334,
            "unit": "ns",
            "range": "± 42121.74484899468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622359.685714286,
            "unit": "ns",
            "range": "± 151228.82205681707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7414543.34375,
            "unit": "ns",
            "range": "± 225082.1131893453"
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
          "id": "a878c60896e7335a8a60941cd3bd7a42448e3358",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:20:20+09:00",
          "tree_id": "c254f45f3ec7cfd35c874b44f4bbbf61dda135af",
          "url": "https://github.com/greymistcube/libplanet/commit/a878c60896e7335a8a60941cd3bd7a42448e3358"
        },
        "date": 1681461545778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9554223.494949495,
            "unit": "ns",
            "range": "± 606328.8093745998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25437971.068181816,
            "unit": "ns",
            "range": "± 1401276.968023258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66982531.9661017,
            "unit": "ns",
            "range": "± 2935719.6821254687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128874414.7361111,
            "unit": "ns",
            "range": "± 6070997.203330254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264774751.33333334,
            "unit": "ns",
            "range": "± 8331787.674225782"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72377.15151515152,
            "unit": "ns",
            "range": "± 20094.535746938076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1694391.2525252525,
            "unit": "ns",
            "range": "± 200130.8647055284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3477948.38,
            "unit": "ns",
            "range": "± 351072.29247675545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2712589.05,
            "unit": "ns",
            "range": "± 279741.39514524036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7567153.77,
            "unit": "ns",
            "range": "± 473226.819091748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6950369.618566177,
            "unit": "ns",
            "range": "± 141552.88075716933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2220809.9811197915,
            "unit": "ns",
            "range": "± 43189.24339031487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1655570.716796875,
            "unit": "ns",
            "range": "± 26685.15068194877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3196039.755974265,
            "unit": "ns",
            "range": "± 61771.11472400409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013814.9071451823,
            "unit": "ns",
            "range": "± 25454.06888101746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949437.49765625,
            "unit": "ns",
            "range": "± 15770.596522935542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 443975.29591836734,
            "unit": "ns",
            "range": "± 53756.75994090901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355550.54639175255,
            "unit": "ns",
            "range": "± 50038.60332845961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342470.5918367347,
            "unit": "ns",
            "range": "± 56099.44553465394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6938834.888888889,
            "unit": "ns",
            "range": "± 488043.9618152072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4931213.979591837,
            "unit": "ns",
            "range": "± 378600.3123308404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29924.9587628866,
            "unit": "ns",
            "range": "± 11478.698022421728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117547.25510204081,
            "unit": "ns",
            "range": "± 23837.369921824902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99041.83157894737,
            "unit": "ns",
            "range": "± 18740.909752579013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 246199.7789473684,
            "unit": "ns",
            "range": "± 43758.04198018894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5694.720430107527,
            "unit": "ns",
            "range": "± 1099.1143506358776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28853.2,
            "unit": "ns",
            "range": "± 12634.990215167309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3860739.4242424243,
            "unit": "ns",
            "range": "± 356001.0917801159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4390559.9375,
            "unit": "ns",
            "range": "± 337160.90524823096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5284920.357894737,
            "unit": "ns",
            "range": "± 394183.68187961355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5233588.704081632,
            "unit": "ns",
            "range": "± 466320.5495701276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9177324.835051546,
            "unit": "ns",
            "range": "± 722067.5036841212"
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
          "id": "d903106676c5c142b8adc716321cc6527fa648b4",
          "message": "Changelog",
          "timestamp": "2023-04-14T17:46:14+09:00",
          "tree_id": "d879dbb029cf49fb8dce802a83de172200fccda5",
          "url": "https://github.com/greymistcube/libplanet/commit/d903106676c5c142b8adc716321cc6527fa648b4"
        },
        "date": 1681462766553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7527221.615384615,
            "unit": "ns",
            "range": "± 42131.512374030404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20541917.625,
            "unit": "ns",
            "range": "± 393684.60502418684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51214689.875,
            "unit": "ns",
            "range": "± 986448.2016028938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101556187.2,
            "unit": "ns",
            "range": "± 1555858.369776412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200974460.30769232,
            "unit": "ns",
            "range": "± 2325212.876808107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46816.25842696629,
            "unit": "ns",
            "range": "± 2578.302214143367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357144.01,
            "unit": "ns",
            "range": "± 97809.58565606961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2646697.1739130435,
            "unit": "ns",
            "range": "± 96908.28074841452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2208676.0375,
            "unit": "ns",
            "range": "± 113417.97395401676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5395149.333333333,
            "unit": "ns",
            "range": "± 144457.49617128534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5825295.37890625,
            "unit": "ns",
            "range": "± 28299.957755792333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822715.3522600445,
            "unit": "ns",
            "range": "± 5073.7865206285305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341185.8317708333,
            "unit": "ns",
            "range": "± 4471.026349492607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540900.345572917,
            "unit": "ns",
            "range": "± 8229.43917037782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808949.918108259,
            "unit": "ns",
            "range": "± 1700.2906609190475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743618.4675130208,
            "unit": "ns",
            "range": "± 1533.9196161813686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322613.1904761905,
            "unit": "ns",
            "range": "± 11604.087238803435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268072.4915254237,
            "unit": "ns",
            "range": "± 11837.886790640903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229617.23076923078,
            "unit": "ns",
            "range": "± 2099.22196515146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5655030.466666667,
            "unit": "ns",
            "range": "± 44308.745739198625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923809.6666666665,
            "unit": "ns",
            "range": "± 43741.039480212676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18073.926315789475,
            "unit": "ns",
            "range": "± 1175.103610118222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85181.83561643836,
            "unit": "ns",
            "range": "± 3486.6590822642916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73094.88235294117,
            "unit": "ns",
            "range": "± 1493.0498937725147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184872.33673469388,
            "unit": "ns",
            "range": "± 15694.262922458487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5495.895833333333,
            "unit": "ns",
            "range": "± 581.0914318702198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17368.64210526316,
            "unit": "ns",
            "range": "± 1171.674587346597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307572.5434782607,
            "unit": "ns",
            "range": "± 127396.3381187852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3520618.4864864866,
            "unit": "ns",
            "range": "± 118996.11318923674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4140384.945945946,
            "unit": "ns",
            "range": "± 131218.25787699962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4315523.446153847,
            "unit": "ns",
            "range": "± 193685.82435117627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7055042.95,
            "unit": "ns",
            "range": "± 142119.14470629915"
          }
        ]
      }
    ]
  }
}