window.BENCHMARK_DATA = {
  "lastUpdate": 1687761130333,
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
          "id": "9463d85e43c39306971b4f49db1d9287e70e293b",
          "message": "Removed unused Signer private property",
          "timestamp": "2023-06-26T11:36:57+09:00",
          "tree_id": "da7b9469c295569b1549280bbc10673b1fa97f46",
          "url": "https://github.com/greymistcube/libplanet/commit/9463d85e43c39306971b4f49db1d9287e70e293b"
        },
        "date": 1687756520353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497623.469387755,
            "unit": "ns",
            "range": "± 130848.7604194368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2624375.342465753,
            "unit": "ns",
            "range": "± 130667.04908619837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2373863.2653061226,
            "unit": "ns",
            "range": "± 187294.79238678058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5485817.647058823,
            "unit": "ns",
            "range": "± 254185.58559198288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52194.73684210526,
            "unit": "ns",
            "range": "± 6845.706348415378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8017128.571428572,
            "unit": "ns",
            "range": "± 66601.64503132878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20677126.315789472,
            "unit": "ns",
            "range": "± 448339.08774758776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48969070,
            "unit": "ns",
            "range": "± 1127146.1032182118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105522788.8888889,
            "unit": "ns",
            "range": "± 2216589.5438153706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206249746.66666666,
            "unit": "ns",
            "range": "± 2266889.3601669436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4881067.367788462,
            "unit": "ns",
            "range": "± 35876.241297715125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518834.1238839286,
            "unit": "ns",
            "range": "± 18756.959406878617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178922.890625,
            "unit": "ns",
            "range": "± 9274.876795535429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678068.329326923,
            "unit": "ns",
            "range": "± 11197.748260370887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820114.3619791666,
            "unit": "ns",
            "range": "± 5929.892042531762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759116.5169270834,
            "unit": "ns",
            "range": "± 4430.1063632692585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371906,
            "unit": "ns",
            "range": "± 133513.0207056944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3413176,
            "unit": "ns",
            "range": "± 128874.3583051781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4272431.666666667,
            "unit": "ns",
            "range": "± 189152.7465372863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4531657.142857143,
            "unit": "ns",
            "range": "± 72658.55568538171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6985653.333333333,
            "unit": "ns",
            "range": "± 262415.1409157219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274249.4117647059,
            "unit": "ns",
            "range": "± 14831.655524662137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271090.625,
            "unit": "ns",
            "range": "± 17932.423314238727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268161.1111111111,
            "unit": "ns",
            "range": "± 25862.319485324544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3979018.5185185187,
            "unit": "ns",
            "range": "± 165286.07113417436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783246.6666666665,
            "unit": "ns",
            "range": "± 24153.43414407941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27033.333333333332,
            "unit": "ns",
            "range": "± 3525.5359179523234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116802,
            "unit": "ns",
            "range": "± 10946.167448846278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84351,
            "unit": "ns",
            "range": "± 15029.00559221764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114621.73913043478,
            "unit": "ns",
            "range": "± 18114.445853807945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6526.041666666667,
            "unit": "ns",
            "range": "± 1367.151844773164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20417.525773195877,
            "unit": "ns",
            "range": "± 4704.65218138029"
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
          "id": "8581a13927baef9d93e13bae426720bdb6502dd9",
          "message": "Changelog",
          "timestamp": "2023-06-26T14:07:20+09:00",
          "tree_id": "e37edb61297c65896e4ff10848dc812439df6d36",
          "url": "https://github.com/greymistcube/libplanet/commit/8581a13927baef9d93e13bae426720bdb6502dd9"
        },
        "date": 1687757048059,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422473.469387755,
            "unit": "ns",
            "range": "± 97506.25943536327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2640264,
            "unit": "ns",
            "range": "± 102299.6194857966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283610.1265822784,
            "unit": "ns",
            "range": "± 117820.85335746472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5428751.428571428,
            "unit": "ns",
            "range": "± 176171.79678709438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49453.40909090909,
            "unit": "ns",
            "range": "± 2723.5013326381763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8263940,
            "unit": "ns",
            "range": "± 134256.0496109686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20885407.14285714,
            "unit": "ns",
            "range": "± 193879.9528030196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52449006.666666664,
            "unit": "ns",
            "range": "± 464227.0310752621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106020323.33333333,
            "unit": "ns",
            "range": "± 1393283.5453738496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212012000,
            "unit": "ns",
            "range": "± 1996553.0041978422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4922878.125,
            "unit": "ns",
            "range": "± 11920.249721121607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1557514.9348958333,
            "unit": "ns",
            "range": "± 5027.616509583414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210495.0455729167,
            "unit": "ns",
            "range": "± 5753.593937985781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677220.958533654,
            "unit": "ns",
            "range": "± 9749.232260769677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859818.10546875,
            "unit": "ns",
            "range": "± 2969.816825561212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773198.0338541666,
            "unit": "ns",
            "range": "± 2554.08815641814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3267625,
            "unit": "ns",
            "range": "± 106702.19538509974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631293.75,
            "unit": "ns",
            "range": "± 70564.66980720592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4331705.555555556,
            "unit": "ns",
            "range": "± 142653.04552243318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407449.275362318,
            "unit": "ns",
            "range": "± 212046.18297131048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6889750,
            "unit": "ns",
            "range": "± 209396.96519352437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271529.4117647059,
            "unit": "ns",
            "range": "± 9373.842203016799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265259.0909090909,
            "unit": "ns",
            "range": "± 9872.638208748747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249539.39393939395,
            "unit": "ns",
            "range": "± 15543.801298672597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291521.428571428,
            "unit": "ns",
            "range": "± 29904.05628702538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3908057.1428571427,
            "unit": "ns",
            "range": "± 15732.118752398243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21549.473684210527,
            "unit": "ns",
            "range": "± 1913.6616168681917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102570.70707070707,
            "unit": "ns",
            "range": "± 9188.060714809797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89178.78787878787,
            "unit": "ns",
            "range": "± 9214.44377192536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98902.15053763441,
            "unit": "ns",
            "range": "± 12820.66079229168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6105.154639175258,
            "unit": "ns",
            "range": "± 822.6445078247928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20012.63157894737,
            "unit": "ns",
            "range": "± 1717.7572033411645"
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
          "id": "91b768284294b5dca70e81c297f5dbcc5a733588",
          "message": "Changelog",
          "timestamp": "2023-06-26T15:16:01+09:00",
          "tree_id": "1fedf46fd1341cd48d05cb47808ba084d1b40f41",
          "url": "https://github.com/greymistcube/libplanet/commit/91b768284294b5dca70e81c297f5dbcc5a733588"
        },
        "date": 1687761108697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1130141,
            "unit": "ns",
            "range": "± 116624.83587308598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916767.857142857,
            "unit": "ns",
            "range": "± 74317.0923864707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1727088,
            "unit": "ns",
            "range": "± 149081.33518656887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3983526.086956522,
            "unit": "ns",
            "range": "± 219318.12854799427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37258.94736842105,
            "unit": "ns",
            "range": "± 2499.8508354156065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5332260,
            "unit": "ns",
            "range": "± 69826.46653362483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13577733.333333334,
            "unit": "ns",
            "range": "± 131115.63961778532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34198693.333333336,
            "unit": "ns",
            "range": "± 325659.79502425244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69512120,
            "unit": "ns",
            "range": "± 506664.69780319213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137094242.85714287,
            "unit": "ns",
            "range": "± 745502.014354484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3482665.8761160714,
            "unit": "ns",
            "range": "± 8378.550782264943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1112686.1328125,
            "unit": "ns",
            "range": "± 1420.9898911967719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 836599.6028645834,
            "unit": "ns",
            "range": "± 1410.2990908589695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926413.6783854167,
            "unit": "ns",
            "range": "± 10160.5291873342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 580290.5794270834,
            "unit": "ns",
            "range": "± 1633.8282995890584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 528762.6725260416,
            "unit": "ns",
            "range": "± 1086.8237191725339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2320312.222222222,
            "unit": "ns",
            "range": "± 83590.47979962379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486457.1428571427,
            "unit": "ns",
            "range": "± 41065.94535782499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3001907.8947368423,
            "unit": "ns",
            "range": "± 77904.7525926959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2942297.8260869565,
            "unit": "ns",
            "range": "± 113305.69366713795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4707132.352941177,
            "unit": "ns",
            "range": "± 102666.42873030742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211013.33333333334,
            "unit": "ns",
            "range": "± 9430.629266469015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191382.8125,
            "unit": "ns",
            "range": "± 8511.832188335304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178581.6326530612,
            "unit": "ns",
            "range": "± 12744.817802233134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2913943.3333333335,
            "unit": "ns",
            "range": "± 44816.15567542367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2687900,
            "unit": "ns",
            "range": "± 61399.34038733641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17662.5,
            "unit": "ns",
            "range": "± 2400.9318366439575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69081.6091954023,
            "unit": "ns",
            "range": "± 4271.716847151745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54432.530120481926,
            "unit": "ns",
            "range": "± 2880.0028977684833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70482.55813953489,
            "unit": "ns",
            "range": "± 8030.005374849349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4432.98969072165,
            "unit": "ns",
            "range": "± 692.176767145463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15989.130434782608,
            "unit": "ns",
            "range": "± 1385.835450148293"
          }
        ]
      }
    ]
  }
}