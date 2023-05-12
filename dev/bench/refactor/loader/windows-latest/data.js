window.BENCHMARK_DATA = {
  "lastUpdate": 1683886733959,
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
          "id": "3e5ebae41403367a100bc0482c371392b73c7c38",
          "message": "Changelog",
          "timestamp": "2023-05-11T20:57:45+09:00",
          "tree_id": "153388e3a0fd97dc00b3a1a2c13be7066c042582",
          "url": "https://github.com/greymistcube/libplanet/commit/3e5ebae41403367a100bc0482c371392b73c7c38"
        },
        "date": 1683807641795,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1877572.1649484537,
            "unit": "ns",
            "range": "± 211429.99124132283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3729004.255319149,
            "unit": "ns",
            "range": "± 381104.26392484456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2975513.6842105263,
            "unit": "ns",
            "range": "± 348917.2933184994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7776574.742268041,
            "unit": "ns",
            "range": "± 894506.9001307052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77180.43478260869,
            "unit": "ns",
            "range": "± 11465.928880104397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10542290.217391305,
            "unit": "ns",
            "range": "± 740264.1022716422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27295942,
            "unit": "ns",
            "range": "± 2386947.6907167826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66943092.682926826,
            "unit": "ns",
            "range": "± 3542339.5306373676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135621752,
            "unit": "ns",
            "range": "± 5427458.604519377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279063625.5319149,
            "unit": "ns",
            "range": "± 10708659.612028506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6526578.203125,
            "unit": "ns",
            "range": "± 148061.8908018282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064317.1274038462,
            "unit": "ns",
            "range": "± 55106.954372262975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1590423.129111842,
            "unit": "ns",
            "range": "± 68689.4125836786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3379948.4933035714,
            "unit": "ns",
            "range": "± 53966.63070050675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1087640.8072916667,
            "unit": "ns",
            "range": "± 18608.416333945188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1028292.1740301724,
            "unit": "ns",
            "range": "± 29666.575485972015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4263505.154639175,
            "unit": "ns",
            "range": "± 316564.99673945777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4445271.91011236,
            "unit": "ns",
            "range": "± 317587.87580933055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5529831.746031746,
            "unit": "ns",
            "range": "± 252564.35131779703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5612669.892473118,
            "unit": "ns",
            "range": "± 438701.014553922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8932502.54237288,
            "unit": "ns",
            "range": "± 392211.0007231471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354351.06382978725,
            "unit": "ns",
            "range": "± 30580.318164975826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345873.62637362635,
            "unit": "ns",
            "range": "± 38380.17380299027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334680.6451612903,
            "unit": "ns",
            "range": "± 30810.70627749992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5252418.75,
            "unit": "ns",
            "range": "± 162320.7983364444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4795682.051282051,
            "unit": "ns",
            "range": "± 167949.3687360551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26569.767441860466,
            "unit": "ns",
            "range": "± 4454.734949993344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129418.47826086957,
            "unit": "ns",
            "range": "± 19633.106875147165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131383.5164835165,
            "unit": "ns",
            "range": "± 12872.004624474897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144678.125,
            "unit": "ns",
            "range": "± 22657.092316465547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9950,
            "unit": "ns",
            "range": "± 1553.4191678716697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26512.79069767442,
            "unit": "ns",
            "range": "± 4331.629132775848"
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
          "id": "9a214d79183982ac100c7407d3eaf97566b99f5f",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:35:47+09:00",
          "tree_id": "872e4a36ff416633275d7c1777113ed0d3841682",
          "url": "https://github.com/greymistcube/libplanet/commit/9a214d79183982ac100c7407d3eaf97566b99f5f"
        },
        "date": 1683881386758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169436,
            "unit": "ns",
            "range": "± 121036.74833902656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2084654.347826087,
            "unit": "ns",
            "range": "± 76270.35744718109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1818206,
            "unit": "ns",
            "range": "± 120733.1566519799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4454630,
            "unit": "ns",
            "range": "± 132880.839541453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31810.63829787234,
            "unit": "ns",
            "range": "± 2221.9563251278287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6908892.307692308,
            "unit": "ns",
            "range": "± 65085.71862729003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17169273.333333332,
            "unit": "ns",
            "range": "± 230274.5456644142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42497528.571428575,
            "unit": "ns",
            "range": "± 287856.2232690571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 84231635.71428572,
            "unit": "ns",
            "range": "± 478610.69068895467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 172604660,
            "unit": "ns",
            "range": "± 1304012.7216732644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4835006.614583333,
            "unit": "ns",
            "range": "± 12263.87289104712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1488676.8489583333,
            "unit": "ns",
            "range": "± 4109.01929244619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1032082.0442708334,
            "unit": "ns",
            "range": "± 3283.69903263243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2533488.046875,
            "unit": "ns",
            "range": "± 6573.390326115154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821951.7903645834,
            "unit": "ns",
            "range": "± 2147.4700822199534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713906.2565104166,
            "unit": "ns",
            "range": "± 1550.0603169543463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2803961.7647058824,
            "unit": "ns",
            "range": "± 71223.71929863561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2883871.212121212,
            "unit": "ns",
            "range": "± 135465.4991730384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3577271.4285714286,
            "unit": "ns",
            "range": "± 98507.01744938016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3633536.5853658537,
            "unit": "ns",
            "range": "± 192399.53062761662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5751361.111111111,
            "unit": "ns",
            "range": "± 115502.16773564895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201889.33333333334,
            "unit": "ns",
            "range": "± 9537.218322620769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188940.6779661017,
            "unit": "ns",
            "range": "± 7613.149211183735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157122.22222222222,
            "unit": "ns",
            "range": "± 3240.6527221162523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3528000,
            "unit": "ns",
            "range": "± 23216.00906536429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3238935.294117647,
            "unit": "ns",
            "range": "± 64816.47110473223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9439.78494623656,
            "unit": "ns",
            "range": "± 1015.6535468171345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53634.0206185567,
            "unit": "ns",
            "range": "± 5850.087011424454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41545.882352941175,
            "unit": "ns",
            "range": "± 2219.692864917538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59154.166666666664,
            "unit": "ns",
            "range": "± 10560.760704923992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2465.3061224489797,
            "unit": "ns",
            "range": "± 622.8223159792179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8614.285714285714,
            "unit": "ns",
            "range": "± 908.4261638890059"
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
          "id": "b003710d0bc5b2f0a2aee3875c2c7490a04c25c5",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:34:50+09:00",
          "tree_id": "f5254e30a552a57037b7e700e8600789629f6456",
          "url": "https://github.com/greymistcube/libplanet/commit/b003710d0bc5b2f0a2aee3875c2c7490a04c25c5"
        },
        "date": 1683881400345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062497.9797979798,
            "unit": "ns",
            "range": "± 128252.91656770243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843212.5,
            "unit": "ns",
            "range": "± 78042.39887860492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651904.0404040404,
            "unit": "ns",
            "range": "± 166515.55110264855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3805254.411764706,
            "unit": "ns",
            "range": "± 181363.92327806816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34309.230769230766,
            "unit": "ns",
            "range": "± 1598.7028997091552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4985033.333333333,
            "unit": "ns",
            "range": "± 46183.00037686512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13033533.333333334,
            "unit": "ns",
            "range": "± 112455.75426213932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32249860,
            "unit": "ns",
            "range": "± 174274.17151472234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64647773.333333336,
            "unit": "ns",
            "range": "± 779860.3881159633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129083273.33333333,
            "unit": "ns",
            "range": "± 1913872.1357748113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3644127.2600446427,
            "unit": "ns",
            "range": "± 10973.638517331765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1117158.7760416667,
            "unit": "ns",
            "range": "± 2167.1657719873347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 811458.1705729166,
            "unit": "ns",
            "range": "± 2562.476200343251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925831.0997596155,
            "unit": "ns",
            "range": "± 1862.979433201515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631118.3463541666,
            "unit": "ns",
            "range": "± 1435.9752993948168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586436.6145833334,
            "unit": "ns",
            "range": "± 1095.8263835724595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174480.5555555555,
            "unit": "ns",
            "range": "± 46198.607396725994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2356735.714285714,
            "unit": "ns",
            "range": "± 52155.19017733386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879667.5675675673,
            "unit": "ns",
            "range": "± 96335.21928388638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2877105.6603773586,
            "unit": "ns",
            "range": "± 118203.56205600823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4602983.783783784,
            "unit": "ns",
            "range": "± 74821.12191945057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179437.83783783784,
            "unit": "ns",
            "range": "± 7972.103806187603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170716.94915254237,
            "unit": "ns",
            "range": "± 7537.70184821225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145877.27272727274,
            "unit": "ns",
            "range": "± 3436.3507523980284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763800,
            "unit": "ns",
            "range": "± 57024.24664896813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519583.3333333335,
            "unit": "ns",
            "range": "± 51089.44002778795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10891.666666666666,
            "unit": "ns",
            "range": "± 1367.0303324449542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54495.555555555555,
            "unit": "ns",
            "range": "± 3814.487790466824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46466.12903225807,
            "unit": "ns",
            "range": "± 2637.080497138284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61540.425531914894,
            "unit": "ns",
            "range": "± 10904.091361462726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2737.1134020618556,
            "unit": "ns",
            "range": "± 558.5173056907132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9896.808510638299,
            "unit": "ns",
            "range": "± 1475.2766919382454"
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
          "id": "8a9bbff0287122d587caf7f3f45e79c272a900c3",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:33:30+09:00",
          "tree_id": "793f87d9639df2f454bc44f46fb33421b935b592",
          "url": "https://github.com/greymistcube/libplanet/commit/8a9bbff0287122d587caf7f3f45e79c272a900c3"
        },
        "date": 1683881534359,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1712976.3157894737,
            "unit": "ns",
            "range": "± 182409.36555050433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133698.9795918367,
            "unit": "ns",
            "range": "± 260162.32462366106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2618033.3333333335,
            "unit": "ns",
            "range": "± 176237.12952882945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6711287.368421053,
            "unit": "ns",
            "range": "± 407630.2974672195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62688.65979381443,
            "unit": "ns",
            "range": "± 7914.555108162268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8904951.020408163,
            "unit": "ns",
            "range": "± 347148.1042739834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23870383.333333332,
            "unit": "ns",
            "range": "± 509476.87848015473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59974455.55555555,
            "unit": "ns",
            "range": "± 1212929.4878987726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124332136.95652173,
            "unit": "ns",
            "range": "± 4551436.44931569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241366700,
            "unit": "ns",
            "range": "± 3865776.1742282454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6165252.511160715,
            "unit": "ns",
            "range": "± 95000.35699676453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878582.8844572369,
            "unit": "ns",
            "range": "± 40192.937837320475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1418034.6614583333,
            "unit": "ns",
            "range": "± 24166.719038993324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3141955.5555555555,
            "unit": "ns",
            "range": "± 62155.37847280618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002912.8348214285,
            "unit": "ns",
            "range": "± 16465.946386863583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953326.58203125,
            "unit": "ns",
            "range": "± 13383.237696903547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4317324.657534246,
            "unit": "ns",
            "range": "± 203448.71711237886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4063566.6666666665,
            "unit": "ns",
            "range": "± 222934.04778750453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4840417.307692308,
            "unit": "ns",
            "range": "± 197454.9407235452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5005773.076923077,
            "unit": "ns",
            "range": "± 201543.6313540235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8088368.085106383,
            "unit": "ns",
            "range": "± 313648.3409574868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305471.0144927536,
            "unit": "ns",
            "range": "± 14621.208422027748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294881.0344827586,
            "unit": "ns",
            "range": "± 12930.264469915066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287335.29411764705,
            "unit": "ns",
            "range": "± 11349.904378970103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4842981.578947368,
            "unit": "ns",
            "range": "± 159477.63904132863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4387574.074074074,
            "unit": "ns",
            "range": "± 183742.63500597188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20631.91489361702,
            "unit": "ns",
            "range": "± 2665.1560008389847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96845.65217391304,
            "unit": "ns",
            "range": "± 10578.398194490695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111369.07216494845,
            "unit": "ns",
            "range": "± 15501.682441114404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122764.89361702128,
            "unit": "ns",
            "range": "± 17266.99697101853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8135.1648351648355,
            "unit": "ns",
            "range": "± 1721.9093811730975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18500,
            "unit": "ns",
            "range": "± 2474.8737341529163"
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
          "id": "06038597e939a054280cda2f978f015d512871b3",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:19:00+09:00",
          "tree_id": "b8546126da778de818316db9781d517fc6723861",
          "url": "https://github.com/greymistcube/libplanet/commit/06038597e939a054280cda2f978f015d512871b3"
        },
        "date": 1683884079392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1324523.2323232323,
            "unit": "ns",
            "range": "± 113101.95944483812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2463554.901960784,
            "unit": "ns",
            "range": "± 99408.07676185168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2140312,
            "unit": "ns",
            "range": "± 140210.9934449802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5285035,
            "unit": "ns",
            "range": "± 322091.1064960322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45943.15789473684,
            "unit": "ns",
            "range": "± 2868.747692960791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6842030,
            "unit": "ns",
            "range": "± 71692.47021629458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18606100,
            "unit": "ns",
            "range": "± 326515.0626752863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47265286.666666664,
            "unit": "ns",
            "range": "± 744756.3195594983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93079076.92307693,
            "unit": "ns",
            "range": "± 645759.8665575387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191291306.66666666,
            "unit": "ns",
            "range": "± 2243477.0419617677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4689872.291666667,
            "unit": "ns",
            "range": "± 20422.33098921758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1501867.0833333333,
            "unit": "ns",
            "range": "± 11252.210941342973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147117.3046875,
            "unit": "ns",
            "range": "± 7791.10323387627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645174.5703125,
            "unit": "ns",
            "range": "± 9610.360359794902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824352.3018973215,
            "unit": "ns",
            "range": "± 3000.9984574540417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754454.43359375,
            "unit": "ns",
            "range": "± 3039.113295439865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2939847.3684210526,
            "unit": "ns",
            "range": "± 44039.09082244814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3134758.536585366,
            "unit": "ns",
            "range": "± 112347.96387921268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3864356,
            "unit": "ns",
            "range": "± 100836.27026025903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3999346.9135802467,
            "unit": "ns",
            "range": "± 210538.4549710692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6397056.25,
            "unit": "ns",
            "range": "± 195619.97380949065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254093.02325581395,
            "unit": "ns",
            "range": "± 8316.775798945317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244344.44444444444,
            "unit": "ns",
            "range": "± 10014.115485681872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219194.3396226415,
            "unit": "ns",
            "range": "± 9071.43477529538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862738.888888889,
            "unit": "ns",
            "range": "± 78550.86691316943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3528600,
            "unit": "ns",
            "range": "± 81318.28822595812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17393.75,
            "unit": "ns",
            "range": "± 1434.8895061072967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82357.60869565218,
            "unit": "ns",
            "range": "± 4989.004034052457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70258.33333333333,
            "unit": "ns",
            "range": "± 3158.217243666447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80808,
            "unit": "ns",
            "range": "± 4018.7318155613975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4811.578947368421,
            "unit": "ns",
            "range": "± 644.9250587990555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17227.083333333332,
            "unit": "ns",
            "range": "± 1520.7670617620406"
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
          "id": "38460f58fec90972abc9cde7a3a7b891e23d966e",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:25:28+09:00",
          "tree_id": "03152d618a43c66948349a07c8fd0dc1eb3ff367",
          "url": "https://github.com/greymistcube/libplanet/commit/38460f58fec90972abc9cde7a3a7b891e23d966e"
        },
        "date": 1683884387117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318412,
            "unit": "ns",
            "range": "± 125600.75377757472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2441016.417910448,
            "unit": "ns",
            "range": "± 115525.6610573244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087442,
            "unit": "ns",
            "range": "± 141214.3436214765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4913520.454545454,
            "unit": "ns",
            "range": "± 179494.09082654797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41622.72727272727,
            "unit": "ns",
            "range": "± 1949.5794776977261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6778166.666666667,
            "unit": "ns",
            "range": "± 48504.7518536169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17306135.714285713,
            "unit": "ns",
            "range": "± 113272.2985834296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44679033.333333336,
            "unit": "ns",
            "range": "± 414550.4754148362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88924260,
            "unit": "ns",
            "range": "± 670708.2384635343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175667000,
            "unit": "ns",
            "range": "± 695492.2363112551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4825144.831730769,
            "unit": "ns",
            "range": "± 22934.39677501911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1483489.7395833333,
            "unit": "ns",
            "range": "± 4875.2792518012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121835.4771205357,
            "unit": "ns",
            "range": "± 1946.8290374860271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518374.8828125,
            "unit": "ns",
            "range": "± 10258.580527082155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828237.451171875,
            "unit": "ns",
            "range": "± 997.08868458874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743231.6861979166,
            "unit": "ns",
            "range": "± 1522.7716531472038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2947400,
            "unit": "ns",
            "range": "± 86802.81657594552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3051013.3333333335,
            "unit": "ns",
            "range": "± 91053.82448872199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3957474.074074074,
            "unit": "ns",
            "range": "± 110777.38450324109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3891706.4102564105,
            "unit": "ns",
            "range": "± 133455.0383479726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6409827.9069767445,
            "unit": "ns",
            "range": "± 235804.56630093508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244924.5283018868,
            "unit": "ns",
            "range": "± 6885.098336272702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235027.58620689655,
            "unit": "ns",
            "range": "± 10242.340623109858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209109.0909090909,
            "unit": "ns",
            "range": "± 10657.30762161001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3791096.6666666665,
            "unit": "ns",
            "range": "± 40381.48208322839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505846.6666666665,
            "unit": "ns",
            "range": "± 35830.59081420844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16520.43010752688,
            "unit": "ns",
            "range": "± 1456.9592471237265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77495.12195121951,
            "unit": "ns",
            "range": "± 3881.076356972122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63164.705882352944,
            "unit": "ns",
            "range": "± 1998.92127771701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81065.30612244898,
            "unit": "ns",
            "range": "± 12581.864726995587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4191.666666666667,
            "unit": "ns",
            "range": "± 531.4660293479512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15364.21052631579,
            "unit": "ns",
            "range": "± 1180.5079856330226"
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
          "id": "7186c0f9a484b8d7920ae49ab4f2228b703c837e",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:59:58+09:00",
          "tree_id": "134074edad80e65e02320fb202544224a6c95a32",
          "url": "https://github.com/greymistcube/libplanet/commit/7186c0f9a484b8d7920ae49ab4f2228b703c837e"
        },
        "date": 1683886710600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574887.7777777778,
            "unit": "ns",
            "range": "± 99260.14716506802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3094258.510638298,
            "unit": "ns",
            "range": "± 199071.3350338681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2486348.888888889,
            "unit": "ns",
            "range": "± 246097.5052238507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6312107.368421053,
            "unit": "ns",
            "range": "± 360361.16346884286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60021.05263157895,
            "unit": "ns",
            "range": "± 5920.643559341748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8855931.333333334,
            "unit": "ns",
            "range": "± 446815.1064775861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23563643.75,
            "unit": "ns",
            "range": "± 432647.9923582989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58490430.76923077,
            "unit": "ns",
            "range": "± 1464005.6775215676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118898892.85714285,
            "unit": "ns",
            "range": "± 1610722.8976524728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237641662.16216215,
            "unit": "ns",
            "range": "± 7751846.249634533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5754021.651785715,
            "unit": "ns",
            "range": "± 100494.40647292137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859042.2265625,
            "unit": "ns",
            "range": "± 34190.7649751063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383904.6760110294,
            "unit": "ns",
            "range": "± 27228.735887293307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3077930.6770833335,
            "unit": "ns",
            "range": "± 55598.12447811508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983981.923828125,
            "unit": "ns",
            "range": "± 22259.98930116646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898809.091796875,
            "unit": "ns",
            "range": "± 28686.070004553534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3823486.6666666665,
            "unit": "ns",
            "range": "± 145169.679090617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3922886.813186813,
            "unit": "ns",
            "range": "± 220148.17545805185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4853778,
            "unit": "ns",
            "range": "± 193660.0190424193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4774275.263157895,
            "unit": "ns",
            "range": "± 290034.6703297402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8049234.343434343,
            "unit": "ns",
            "range": "± 516738.97945686826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309415.625,
            "unit": "ns",
            "range": "± 18311.778367315506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299764.83516483515,
            "unit": "ns",
            "range": "± 16835.190482546925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289011.3402061856,
            "unit": "ns",
            "range": "± 19285.388879325303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4796354.545454546,
            "unit": "ns",
            "range": "± 148620.06739272524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4307214.814814814,
            "unit": "ns",
            "range": "± 178839.6534976866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26660.82474226804,
            "unit": "ns",
            "range": "± 3632.938339606309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114690.625,
            "unit": "ns",
            "range": "± 11080.319947166641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103244.89795918367,
            "unit": "ns",
            "range": "± 16931.122580772677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122749.48453608247,
            "unit": "ns",
            "range": "± 21747.495659037675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7450.537634408603,
            "unit": "ns",
            "range": "± 1665.6128037918095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24325.25773195876,
            "unit": "ns",
            "range": "± 3214.9400891202163"
          }
        ]
      }
    ]
  }
}