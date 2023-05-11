window.BENCHMARK_DATA = {
  "lastUpdate": 1683783575549,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720154038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036813.2653061225,
            "unit": "ns",
            "range": "± 117341.12983115767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809396.4285714286,
            "unit": "ns",
            "range": "± 68676.47199146739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586405.0505050505,
            "unit": "ns",
            "range": "± 130259.41493156551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3614891.0256410255,
            "unit": "ns",
            "range": "± 124402.21845616384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33697.46835443038,
            "unit": "ns",
            "range": "± 1753.4562706884046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5007114.285714285,
            "unit": "ns",
            "range": "± 30936.830356833143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12931146.666666666,
            "unit": "ns",
            "range": "± 125039.0959812551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33097070,
            "unit": "ns",
            "range": "± 296319.42031723616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65457906.666666664,
            "unit": "ns",
            "range": "± 994252.7060681352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131993733.33333333,
            "unit": "ns",
            "range": "± 1148999.258775508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3478317.578125,
            "unit": "ns",
            "range": "± 8902.129018697324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094728.9778645833,
            "unit": "ns",
            "range": "± 3215.494379627109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 847873.2770647322,
            "unit": "ns",
            "range": "± 1250.524349044664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882855.6119791667,
            "unit": "ns",
            "range": "± 9263.894012867346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 591109.8828125,
            "unit": "ns",
            "range": "± 2721.076058784416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 528952.8971354166,
            "unit": "ns",
            "range": "± 794.251779749112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189841.1764705884,
            "unit": "ns",
            "range": "± 43707.6383148166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179064,
            "unit": "ns",
            "range": "± 78752.21735783387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2833478.947368421,
            "unit": "ns",
            "range": "± 60213.46821422898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2807341.6666666665,
            "unit": "ns",
            "range": "± 63576.59479554643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4410465.517241379,
            "unit": "ns",
            "range": "± 123744.24164340527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192410.16949152542,
            "unit": "ns",
            "range": "± 8461.081183770992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178520.83333333334,
            "unit": "ns",
            "range": "± 6867.343576771038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167216.1616161616,
            "unit": "ns",
            "range": "± 10279.300649906332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2795092.8571428573,
            "unit": "ns",
            "range": "± 23501.99547291232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519573.076923077,
            "unit": "ns",
            "range": "± 27453.8143629792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14547.474747474747,
            "unit": "ns",
            "range": "± 1816.55333172711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62254.545454545456,
            "unit": "ns",
            "range": "± 3552.2668524497963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56956.382978723406,
            "unit": "ns",
            "range": "± 5620.575842205737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70503.15789473684,
            "unit": "ns",
            "range": "± 10108.711775068066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3934.6938775510203,
            "unit": "ns",
            "range": "± 874.4190461155061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14062.244897959185,
            "unit": "ns",
            "range": "± 2051.1256806844845"
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
          "id": "5f85225bb96e54fbe23cd41fe123b5f91ed91cad",
          "message": "Added tests",
          "timestamp": "2023-05-11T13:47:25+09:00",
          "tree_id": "46f8b8a7f885fcc208e20c8d727a992ffe6aa996",
          "url": "https://github.com/greymistcube/libplanet/commit/5f85225bb96e54fbe23cd41fe123b5f91ed91cad"
        },
        "date": 1683782955940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524060,
            "unit": "ns",
            "range": "± 137132.753974993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2884324.705882353,
            "unit": "ns",
            "range": "± 155582.7095194082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2438470.652173913,
            "unit": "ns",
            "range": "± 139525.33311119443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5965851.612903226,
            "unit": "ns",
            "range": "± 178802.1772256847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55942.666666666664,
            "unit": "ns",
            "range": "± 2782.7253476332085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8362737.142857143,
            "unit": "ns",
            "range": "± 273009.8329253904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23144993.333333332,
            "unit": "ns",
            "range": "± 429620.91839645046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58717408.333333336,
            "unit": "ns",
            "range": "± 769543.2783131626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113657944.44444445,
            "unit": "ns",
            "range": "± 4265633.033408648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220575927.7777778,
            "unit": "ns",
            "range": "± 4525803.237880159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5645132.916666667,
            "unit": "ns",
            "range": "± 36450.55717850249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833736.6080729167,
            "unit": "ns",
            "range": "± 17432.00952435578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391267.4088541667,
            "unit": "ns",
            "range": "± 12664.369898699595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107842.65625,
            "unit": "ns",
            "range": "± 26327.84545499577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975535.8816964285,
            "unit": "ns",
            "range": "± 5758.668061632444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898636.42578125,
            "unit": "ns",
            "range": "± 6875.7926138218745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3540765.625,
            "unit": "ns",
            "range": "± 164124.59380503176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3656876.4150943398,
            "unit": "ns",
            "range": "± 146007.98206702922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653807.692307692,
            "unit": "ns",
            "range": "± 160762.633758456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4743772.5,
            "unit": "ns",
            "range": "± 158952.34891110912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7811703.896103896,
            "unit": "ns",
            "range": "± 395301.4670514666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292161.90476190473,
            "unit": "ns",
            "range": "± 13291.695546728133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283462.1621621622,
            "unit": "ns",
            "range": "± 14187.865765753559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259309.0909090909,
            "unit": "ns",
            "range": "± 12047.939208048783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4631164.285714285,
            "unit": "ns",
            "range": "± 81598.90513163347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4101623.8095238097,
            "unit": "ns",
            "range": "± 93490.34123780865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21414.736842105263,
            "unit": "ns",
            "range": "± 1578.712673860238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97692.70833333333,
            "unit": "ns",
            "range": "± 6975.1701702187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83844.08602150538,
            "unit": "ns",
            "range": "± 6485.526735431605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109519.79166666667,
            "unit": "ns",
            "range": "± 18840.2627079218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5585.263157894737,
            "unit": "ns",
            "range": "± 854.0228235841754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21306.382978723403,
            "unit": "ns",
            "range": "± 2212.6619258229966"
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
          "id": "fe317ba5eac6d7b8038772df6772515155e5c863",
          "message": "Simple renaming",
          "timestamp": "2023-05-11T14:18:31+09:00",
          "tree_id": "add43c9de0533eb4bf46a9fcf89c94180ef0279e",
          "url": "https://github.com/greymistcube/libplanet/commit/fe317ba5eac6d7b8038772df6772515155e5c863"
        },
        "date": 1683783325364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1348540,
            "unit": "ns",
            "range": "± 89248.19850378053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495088.888888889,
            "unit": "ns",
            "range": "± 103374.28362858563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185048.9795918367,
            "unit": "ns",
            "range": "± 179520.93307277336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101874.117647059,
            "unit": "ns",
            "range": "± 272697.0555103843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43537.77777777778,
            "unit": "ns",
            "range": "± 2855.8466651382955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7014735.714285715,
            "unit": "ns",
            "range": "± 70769.56763536643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17779400,
            "unit": "ns",
            "range": "± 149555.06391579373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45867542.307692304,
            "unit": "ns",
            "range": "± 249930.07175854364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90096286.66666667,
            "unit": "ns",
            "range": "± 528451.2855865668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183354191.66666666,
            "unit": "ns",
            "range": "± 915835.9514259321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4814791.075721154,
            "unit": "ns",
            "range": "± 20845.254597328654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510572.5961538462,
            "unit": "ns",
            "range": "± 2026.398288831064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159381.8294270833,
            "unit": "ns",
            "range": "± 1785.7545329472075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578030.050223214,
            "unit": "ns",
            "range": "± 6150.41464473938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819145.5013020834,
            "unit": "ns",
            "range": "± 2761.400808083378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737740.1334635416,
            "unit": "ns",
            "range": "± 968.6058822290589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2922704.8780487804,
            "unit": "ns",
            "range": "± 91475.3954657194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256934.6153846155,
            "unit": "ns",
            "range": "± 30330.42603706291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3980566.6666666665,
            "unit": "ns",
            "range": "± 51686.813276373185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3858900,
            "unit": "ns",
            "range": "± 110355.2898596166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6494242.424242424,
            "unit": "ns",
            "range": "± 189986.51272903397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253886.0655737705,
            "unit": "ns",
            "range": "± 10684.92758962963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241172.3404255319,
            "unit": "ns",
            "range": "± 8857.389499799381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220786,
            "unit": "ns",
            "range": "± 14633.70966590012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3936783.7837837837,
            "unit": "ns",
            "range": "± 129651.94328044758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3575507.1428571427,
            "unit": "ns",
            "range": "± 26263.032348376455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17932.978723404256,
            "unit": "ns",
            "range": "± 2763.758866980124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80274.48979591837,
            "unit": "ns",
            "range": "± 6942.879037160094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64521.348314606745,
            "unit": "ns",
            "range": "± 3842.687030703207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86007.21649484536,
            "unit": "ns",
            "range": "± 14499.700050221447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4613.541666666667,
            "unit": "ns",
            "range": "± 803.6259658463357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15922.448979591836,
            "unit": "ns",
            "range": "± 1795.3422332478797"
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
          "id": "79683e7ea42c28878db9410dae50381eb3443fc3",
          "message": "Changelog",
          "timestamp": "2023-05-11T14:22:53+09:00",
          "tree_id": "895f0a56b78b1b401ca20452e4807092a9c7f7be",
          "url": "https://github.com/greymistcube/libplanet/commit/79683e7ea42c28878db9410dae50381eb3443fc3"
        },
        "date": 1683783553411,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422532.3232323232,
            "unit": "ns",
            "range": "± 129633.4304548263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2561723.3766233767,
            "unit": "ns",
            "range": "± 130190.57276092158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165727.3684210526,
            "unit": "ns",
            "range": "± 157392.12208387352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5241538.888888889,
            "unit": "ns",
            "range": "± 220505.34192533765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49374.46808510638,
            "unit": "ns",
            "range": "± 3446.829185563792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6795669.230769231,
            "unit": "ns",
            "range": "± 79673.48350837294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19392540.90909091,
            "unit": "ns",
            "range": "± 466062.90568578517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49557461.76470588,
            "unit": "ns",
            "range": "± 1483817.4889840642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98833130.76923077,
            "unit": "ns",
            "range": "± 1587904.1382614041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195572686.66666666,
            "unit": "ns",
            "range": "± 2245512.9461301477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4865485.572916667,
            "unit": "ns",
            "range": "± 83283.950380488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553853.501674107,
            "unit": "ns",
            "range": "± 14485.27828859407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174082.4916294643,
            "unit": "ns",
            "range": "± 10615.649285390326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658425.8649553573,
            "unit": "ns",
            "range": "± 23585.585837925602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828671.69921875,
            "unit": "ns",
            "range": "± 5464.694418460147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788181.77734375,
            "unit": "ns",
            "range": "± 13417.863580964806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147835.227272727,
            "unit": "ns",
            "range": "± 177436.87887853145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3260968.115942029,
            "unit": "ns",
            "range": "± 154388.6801442782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4088110.8695652173,
            "unit": "ns",
            "range": "± 156033.94107730518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4148288.095238095,
            "unit": "ns",
            "range": "± 151169.54494287074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6715767.307692308,
            "unit": "ns",
            "range": "± 274057.57282728364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271530.76923076925,
            "unit": "ns",
            "range": "± 10754.25202659784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252003.92156862744,
            "unit": "ns",
            "range": "± 9398.892717428233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228997.9797979798,
            "unit": "ns",
            "range": "± 14603.976113583532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4027780,
            "unit": "ns",
            "range": "± 74997.82092072503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3694959.523809524,
            "unit": "ns",
            "range": "± 131790.0715375224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20159.79381443299,
            "unit": "ns",
            "range": "± 2651.5584958745812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91811.34020618557,
            "unit": "ns",
            "range": "± 8909.12308966512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73844.31818181818,
            "unit": "ns",
            "range": "± 4081.183566062118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101978.35051546391,
            "unit": "ns",
            "range": "± 15276.52220186887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5627.777777777777,
            "unit": "ns",
            "range": "± 1055.3610036724695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20536.73469387755,
            "unit": "ns",
            "range": "± 3246.3583961268846"
          }
        ]
      }
    ]
  }
}