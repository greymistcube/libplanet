window.BENCHMARK_DATA = {
  "lastUpdate": 1679964549119,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679897298110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121804.34782608696,
            "unit": "ns",
            "range": "± 11824.057363571448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6131030.818965517,
            "unit": "ns",
            "range": "± 177473.0604288378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869717.5,
            "unit": "ns",
            "range": "± 34369.74685034725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359520.396205357,
            "unit": "ns",
            "range": "± 16191.893595961881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3025372.9817708335,
            "unit": "ns",
            "range": "± 63287.71988360643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023995.1083096591,
            "unit": "ns",
            "range": "± 24473.67366998911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942711.5783691406,
            "unit": "ns",
            "range": "± 27530.19018438693"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5694384.303042763,
            "unit": "ns",
            "range": "± 288669.8140822683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6481509.411764706,
            "unit": "ns",
            "range": "± 349601.9446059603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29265826.153846152,
            "unit": "ns",
            "range": "± 1360583.1311055706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7312391.919191919,
            "unit": "ns",
            "range": "± 605239.9331411702"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35055210.824742265,
            "unit": "ns",
            "range": "± 2637143.285733822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103685.41666666667,
            "unit": "ns",
            "range": "± 12931.01517703741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225213.40206185568,
            "unit": "ns",
            "range": "± 23014.84859854059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187791.39784946237,
            "unit": "ns",
            "range": "± 13445.571890386835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4354474.666666667,
            "unit": "ns",
            "range": "± 210389.19732141562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10950553.125,
            "unit": "ns",
            "range": "± 503704.69553850667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24516.494845360823,
            "unit": "ns",
            "range": "± 6488.012671014444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58887.62886597938,
            "unit": "ns",
            "range": "± 9614.770080150543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53460.82474226804,
            "unit": "ns",
            "range": "± 9260.158348864674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124618.08510638298,
            "unit": "ns",
            "range": "± 23911.831609423192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11929.29292929293,
            "unit": "ns",
            "range": "± 5919.291403490734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23672.727272727272,
            "unit": "ns",
            "range": "± 6877.630378912674"
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
          "id": "2f8a60c05e7b3fc510f23b380297522d9535e538",
          "message": "Fix concurrency problem",
          "timestamp": "2023-03-28T08:58:51+09:00",
          "tree_id": "8572d562fabed0e96ae33533976c9ed38c8f00f6",
          "url": "https://github.com/greymistcube/libplanet/commit/2f8a60c05e7b3fc510f23b380297522d9535e538"
        },
        "date": 1679962643976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106821.64948453609,
            "unit": "ns",
            "range": "± 8739.949308635934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4798754.270833333,
            "unit": "ns",
            "range": "± 26904.13090371523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579805.5729166667,
            "unit": "ns",
            "range": "± 6863.457313594171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176034.4205729167,
            "unit": "ns",
            "range": "± 3888.934787166255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671790.4447115385,
            "unit": "ns",
            "range": "± 8543.36869011401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819851.8973214285,
            "unit": "ns",
            "range": "± 1170.7643247473677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754021.9856770834,
            "unit": "ns",
            "range": "± 1764.4193750933491"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4777045.260416667,
            "unit": "ns",
            "range": "± 72021.88121286959"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5546107.692307692,
            "unit": "ns",
            "range": "± 66497.67491597559"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25480026.666666668,
            "unit": "ns",
            "range": "± 456662.0467614765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5913845.348837209,
            "unit": "ns",
            "range": "± 319528.5069329778"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28478059.09090909,
            "unit": "ns",
            "range": "± 683602.5855081445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103092.55319148937,
            "unit": "ns",
            "range": "± 10902.621164189299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197200,
            "unit": "ns",
            "range": "± 12100.335435311652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187885,
            "unit": "ns",
            "range": "± 13822.864786616807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3687706.6666666665,
            "unit": "ns",
            "range": "± 49444.95448283397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9188366.666666666,
            "unit": "ns",
            "range": "± 52395.841842881404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25325.252525252527,
            "unit": "ns",
            "range": "± 2852.329639848067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52849.43820224719,
            "unit": "ns",
            "range": "± 3589.7620709806483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37978.846153846156,
            "unit": "ns",
            "range": "± 1445.5254202445394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110594.84536082474,
            "unit": "ns",
            "range": "± 17511.290233815464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6448.453608247422,
            "unit": "ns",
            "range": "± 983.6277880527537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26047.95918367347,
            "unit": "ns",
            "range": "± 3106.6350540643793"
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
          "id": "b8c0e711e2feb42e0acde7dffcc6b269f962493e",
          "message": "Cleanup",
          "timestamp": "2023-03-28T09:07:31+09:00",
          "tree_id": "1e8c807b6f2c966f7069feb76d4545506195a22b",
          "url": "https://github.com/greymistcube/libplanet/commit/b8c0e711e2feb42e0acde7dffcc6b269f962493e"
        },
        "date": 1679963091365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94415.38461538461,
            "unit": "ns",
            "range": "± 4886.472897972258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900453.841145833,
            "unit": "ns",
            "range": "± 7076.024841593809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509209.5145089286,
            "unit": "ns",
            "range": "± 1724.6219593789249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151521.6927083333,
            "unit": "ns",
            "range": "± 2041.5519396222878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543348.75,
            "unit": "ns",
            "range": "± 6771.2938469837545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824821.8401227678,
            "unit": "ns",
            "range": "± 950.7376356226885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755644.0852864584,
            "unit": "ns",
            "range": "± 781.0801708082622"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4004559.8958333335,
            "unit": "ns",
            "range": "± 24426.55819803556"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4897027.9069767445,
            "unit": "ns",
            "range": "± 177335.68158879524"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22886046.153846152,
            "unit": "ns",
            "range": "± 193203.043520647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5547389.361702127,
            "unit": "ns",
            "range": "± 201836.36638973118"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25933706.666666668,
            "unit": "ns",
            "range": "± 366744.5188346215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89651.54639175258,
            "unit": "ns",
            "range": "± 10198.80623531154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182304,
            "unit": "ns",
            "range": "± 7353.493130784158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154313.9534883721,
            "unit": "ns",
            "range": "± 5689.90674437551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3398070,
            "unit": "ns",
            "range": "± 37277.26614746005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8451063.333333334,
            "unit": "ns",
            "range": "± 51562.78927768782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16671.134020618556,
            "unit": "ns",
            "range": "± 1917.4070361475262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43150,
            "unit": "ns",
            "range": "± 3277.8004673278174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37782.47422680412,
            "unit": "ns",
            "range": "± 2840.518229906823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88570.43010752689,
            "unit": "ns",
            "range": "± 11058.909050092332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5758.762886597938,
            "unit": "ns",
            "range": "± 973.262616293729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15503.225806451614,
            "unit": "ns",
            "range": "± 1456.5781530177255"
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
          "id": "3e7edb6447107f08b34c883d7696c6d9b0166b21",
          "message": "Higher depth",
          "timestamp": "2023-03-28T09:31:23+09:00",
          "tree_id": "1b9ace8cc9e53989f79a8993abbf9e304d431720",
          "url": "https://github.com/greymistcube/libplanet/commit/3e7edb6447107f08b34c883d7696c6d9b0166b21"
        },
        "date": 1679964526917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97082.47422680413,
            "unit": "ns",
            "range": "± 7017.285359341815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5166637.65625,
            "unit": "ns",
            "range": "± 16513.755488272524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515064.1927083333,
            "unit": "ns",
            "range": "± 2438.377982019702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134010.9830729167,
            "unit": "ns",
            "range": "± 2330.703296605687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677698.184742647,
            "unit": "ns",
            "range": "± 54471.55880888037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828328.02734375,
            "unit": "ns",
            "range": "± 2057.6076368384824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728891.2630208334,
            "unit": "ns",
            "range": "± 1212.3496864793494"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4082381.2760416665,
            "unit": "ns",
            "range": "± 72155.4148454885"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5503653.333333333,
            "unit": "ns",
            "range": "± 60721.54085503367"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23433433.333333332,
            "unit": "ns",
            "range": "± 372348.8162360409"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5858719.76744186,
            "unit": "ns",
            "range": "± 311202.62618722813"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26810246.666666668,
            "unit": "ns",
            "range": "± 473932.95617880486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84241.48936170213,
            "unit": "ns",
            "range": "± 7532.630230408076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185630.1204819277,
            "unit": "ns",
            "range": "± 9841.013418711424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155208.60215053763,
            "unit": "ns",
            "range": "± 8805.095559242194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3413726.6666666665,
            "unit": "ns",
            "range": "± 40333.06808255952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8498173.333333334,
            "unit": "ns",
            "range": "± 52900.33036173736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19748.958333333332,
            "unit": "ns",
            "range": "± 2042.9594009757238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52291.919191919194,
            "unit": "ns",
            "range": "± 5679.387664026941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46408.79120879121,
            "unit": "ns",
            "range": "± 3863.6381344142005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87433.33333333333,
            "unit": "ns",
            "range": "± 14399.787413396782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5889.393939393939,
            "unit": "ns",
            "range": "± 909.3413384196347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16944.565217391304,
            "unit": "ns",
            "range": "± 1649.8660705175457"
          }
        ]
      }
    ]
  }
}