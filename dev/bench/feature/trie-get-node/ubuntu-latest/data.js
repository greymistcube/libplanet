window.BENCHMARK_DATA = {
  "lastUpdate": 1693389902921,
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
          "id": "bcf41b70659cb9ed7cc4b1f9356a9c3cbced9ac8",
          "message": "Added GetNode()",
          "timestamp": "2023-08-30T18:21:44+09:00",
          "tree_id": "b0bb9a04e0e0c54709954050c192fd94bc462e12",
          "url": "https://github.com/greymistcube/libplanet/commit/bcf41b70659cb9ed7cc4b1f9356a9c3cbced9ac8"
        },
        "date": 1693388186549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401006.55,
            "unit": "ns",
            "range": "± 70678.64160792688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2726508.2352941176,
            "unit": "ns",
            "range": "± 109256.28710798993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843405.7234042552,
            "unit": "ns",
            "range": "± 104170.44929205028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5039274.111111111,
            "unit": "ns",
            "range": "± 231153.00985746403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279940,
            "unit": "ns",
            "range": "± 9098.503325028549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264816.25,
            "unit": "ns",
            "range": "± 4316.680643308674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229546.68181818182,
            "unit": "ns",
            "range": "± 5525.868148870483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4397566.866666666,
            "unit": "ns",
            "range": "± 79412.66762467223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4071181.533333333,
            "unit": "ns",
            "range": "± 62838.86875046443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19718.4578313253,
            "unit": "ns",
            "range": "± 1071.190098375939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87965.1506849315,
            "unit": "ns",
            "range": "± 4342.226587923249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72251.85,
            "unit": "ns",
            "range": "± 1667.470548149912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78985.89772727272,
            "unit": "ns",
            "range": "± 8089.920932281693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5251.163265306122,
            "unit": "ns",
            "range": "± 636.1018639471691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18207.935483870966,
            "unit": "ns",
            "range": "± 1141.1463611349582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50547.5,
            "unit": "ns",
            "range": "± 2648.550212446066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8689757.72413793,
            "unit": "ns",
            "range": "± 250525.88386359494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22923512.533333335,
            "unit": "ns",
            "range": "± 283342.0968553906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57268380.35714286,
            "unit": "ns",
            "range": "± 358786.49236507196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115078667.4,
            "unit": "ns",
            "range": "± 692143.9985108178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226057907.53333333,
            "unit": "ns",
            "range": "± 3750548.580790756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448899,
            "unit": "ns",
            "range": "± 143076.05686540934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3823637.464285714,
            "unit": "ns",
            "range": "± 105696.25830669557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4324570.642857143,
            "unit": "ns",
            "range": "± 70415.77289500627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3971752.419354839,
            "unit": "ns",
            "range": "± 120005.99972078457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6343158.62962963,
            "unit": "ns",
            "range": "± 172118.64341475177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5025675.327524038,
            "unit": "ns",
            "range": "± 12504.377909492594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1597594.8913225445,
            "unit": "ns",
            "range": "± 1866.1315407421512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079931.855859375,
            "unit": "ns",
            "range": "± 947.272341654034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618687.251822917,
            "unit": "ns",
            "range": "± 5840.475184676035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831684.0741536458,
            "unit": "ns",
            "range": "± 1735.382936223246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758182.3899088542,
            "unit": "ns",
            "range": "± 1088.8533930189074"
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
          "id": "41b89963cd043efea056756c69554e0e62b52536",
          "message": "Added GetNode() tests",
          "timestamp": "2023-08-30T18:41:51+09:00",
          "tree_id": "8329dc5d8e0f474765cbe0ed1952be30facfc0ee",
          "url": "https://github.com/greymistcube/libplanet/commit/41b89963cd043efea056756c69554e0e62b52536"
        },
        "date": 1693389327694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353709.175257732,
            "unit": "ns",
            "range": "± 75820.71016164964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637564.6774193547,
            "unit": "ns",
            "range": "± 112790.00394840457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1760603.25,
            "unit": "ns",
            "range": "± 92231.21000473076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4884639.387096774,
            "unit": "ns",
            "range": "± 222071.011818023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267626.5306122449,
            "unit": "ns",
            "range": "± 10116.611267905788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261647.71739130435,
            "unit": "ns",
            "range": "± 10014.634286689417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223829.36842105264,
            "unit": "ns",
            "range": "± 4819.26106842263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206106,
            "unit": "ns",
            "range": "± 45102.905239019805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3978887.6666666665,
            "unit": "ns",
            "range": "± 72097.24068790376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18334.042105263157,
            "unit": "ns",
            "range": "± 1733.0330742678166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79945.14634146342,
            "unit": "ns",
            "range": "± 4189.050704572609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71518,
            "unit": "ns",
            "range": "± 861.9816492457155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70984.46428571429,
            "unit": "ns",
            "range": "± 6813.212043383554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4698.030612244898,
            "unit": "ns",
            "range": "± 602.7533638312862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17621.83870967742,
            "unit": "ns",
            "range": "± 1272.4602863053935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49561.27160493827,
            "unit": "ns",
            "range": "± 2464.352785278245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7934269.857142857,
            "unit": "ns",
            "range": "± 36670.76151137546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20793710.769230768,
            "unit": "ns",
            "range": "± 298535.1950837494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53219525.86666667,
            "unit": "ns",
            "range": "± 886014.1577890009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104864527.06666666,
            "unit": "ns",
            "range": "± 1181661.2803743398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207235546.85714287,
            "unit": "ns",
            "range": "± 2369415.8803897332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342269.3076923075,
            "unit": "ns",
            "range": "± 43687.6860632845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469763.6153846155,
            "unit": "ns",
            "range": "± 121399.0937802419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4209096.357142857,
            "unit": "ns",
            "range": "± 66529.30132783846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3865655.6666666665,
            "unit": "ns",
            "range": "± 160020.77695500362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6301756.956521739,
            "unit": "ns",
            "range": "± 157295.06081839206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4943411.452604166,
            "unit": "ns",
            "range": "± 44503.875698617456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1550921.9223257212,
            "unit": "ns",
            "range": "± 3291.264627228636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069986.7010416666,
            "unit": "ns",
            "range": "± 6010.200651098661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573585.2369791665,
            "unit": "ns",
            "range": "± 5689.1931845617855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845897.1305803572,
            "unit": "ns",
            "range": "± 2432.2566057828317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740889.908203125,
            "unit": "ns",
            "range": "± 2407.719179316646"
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
          "id": "13e2f9cc3a4abdc56b6bfb1b4ee2f7e8e25266d6",
          "message": "Changelog",
          "timestamp": "2023-08-30T18:46:04+09:00",
          "tree_id": "de827fa041fc2b6807286f32b67cc6adfb761921",
          "url": "https://github.com/greymistcube/libplanet/commit/13e2f9cc3a4abdc56b6bfb1b4ee2f7e8e25266d6"
        },
        "date": 1693389609214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1453050.1237113401,
            "unit": "ns",
            "range": "± 105861.33649469417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2730609.896551724,
            "unit": "ns",
            "range": "± 76015.97792022074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1815247.1609195403,
            "unit": "ns",
            "range": "± 99311.4710666178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4920220.744680851,
            "unit": "ns",
            "range": "± 191587.40966830694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278351.0909090909,
            "unit": "ns",
            "range": "± 10425.011074263666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272092.69444444444,
            "unit": "ns",
            "range": "± 8218.164406864465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240338.67567567568,
            "unit": "ns",
            "range": "± 8045.127383336705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4477435.2,
            "unit": "ns",
            "range": "± 70923.92941052104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4087359.6,
            "unit": "ns",
            "range": "± 43524.73158167829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20864.273684210526,
            "unit": "ns",
            "range": "± 1397.434392644936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92861.96296296296,
            "unit": "ns",
            "range": "± 4860.1985901927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80889.86458333333,
            "unit": "ns",
            "range": "± 4861.524089851468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85728.74226804124,
            "unit": "ns",
            "range": "± 12468.099969086401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5638.7959183673465,
            "unit": "ns",
            "range": "± 813.990424716139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19889.56842105263,
            "unit": "ns",
            "range": "± 1253.905691019418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51978.97647058823,
            "unit": "ns",
            "range": "± 2828.9663389759203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8690334.666666666,
            "unit": "ns",
            "range": "± 152705.4801938624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23202975.8,
            "unit": "ns",
            "range": "± 302166.48961297574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57219654.86666667,
            "unit": "ns",
            "range": "± 402423.1939639212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113099965.46666667,
            "unit": "ns",
            "range": "± 1218039.6556874178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231583025.93333334,
            "unit": "ns",
            "range": "± 2175180.443967464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3508364.8235294116,
            "unit": "ns",
            "range": "± 71296.23822933726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3697272,
            "unit": "ns",
            "range": "± 92237.07997848003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4517840,
            "unit": "ns",
            "range": "± 115409.009254766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4167862,
            "unit": "ns",
            "range": "± 92249.0152088357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6428961.4,
            "unit": "ns",
            "range": "± 102741.92075417485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5057597.260602678,
            "unit": "ns",
            "range": "± 16060.14415740177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1589942.59453125,
            "unit": "ns",
            "range": "± 1275.7706015589397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086278.9655412945,
            "unit": "ns",
            "range": "± 881.1120314200275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641104.869010417,
            "unit": "ns",
            "range": "± 10980.048234434083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824728.5703776042,
            "unit": "ns",
            "range": "± 622.2912756786674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760168.3088727678,
            "unit": "ns",
            "range": "± 396.74395632053483"
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
          "id": "07beb209fec0f6681d443df8f8fcb572c6139a4f",
          "message": "Changelog",
          "timestamp": "2023-08-30T18:50:02+09:00",
          "tree_id": "ff8b7a19b0e76438c647b54c313565ba1afa0140",
          "url": "https://github.com/greymistcube/libplanet/commit/07beb209fec0f6681d443df8f8fcb572c6139a4f"
        },
        "date": 1693389895476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1468562.03,
            "unit": "ns",
            "range": "± 110542.13474887067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2827015.527027027,
            "unit": "ns",
            "range": "± 141783.52382042707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855483.6,
            "unit": "ns",
            "range": "± 103316.13589147663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5074903.3877551025,
            "unit": "ns",
            "range": "± 294389.65788229427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282908.5945945946,
            "unit": "ns",
            "range": "± 9421.077626080609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274458.1951219512,
            "unit": "ns",
            "range": "± 9819.470472534433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246660.75,
            "unit": "ns",
            "range": "± 15777.161619095195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4477041.6,
            "unit": "ns",
            "range": "± 79902.27666146764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4102632.7,
            "unit": "ns",
            "range": "± 62593.55262234054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21017.88172043011,
            "unit": "ns",
            "range": "± 1820.31269918506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89705.2643678161,
            "unit": "ns",
            "range": "± 4801.827373716323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81044.24489795919,
            "unit": "ns",
            "range": "± 6066.274647949527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91220.53191489361,
            "unit": "ns",
            "range": "± 13990.402876213231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.9473684210525,
            "unit": "ns",
            "range": "± 598.9742538497927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21878.075268817203,
            "unit": "ns",
            "range": "± 1958.4903138617804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54148.3052631579,
            "unit": "ns",
            "range": "± 3731.402369065231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8574554.263157895,
            "unit": "ns",
            "range": "± 293219.1538148127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23052234.85714286,
            "unit": "ns",
            "range": "± 305012.84900169674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58840879.384615384,
            "unit": "ns",
            "range": "± 1553865.635009902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112353568.93333334,
            "unit": "ns",
            "range": "± 1958700.6456061436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227697625.53333333,
            "unit": "ns",
            "range": "± 3295881.390442902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433895.269230769,
            "unit": "ns",
            "range": "± 92975.43434372659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3841480.25,
            "unit": "ns",
            "range": "± 72730.83615587912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4900177.354838709,
            "unit": "ns",
            "range": "± 149571.11761512165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4067572.1764705884,
            "unit": "ns",
            "range": "± 164288.00372306016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6555623.774193549,
            "unit": "ns",
            "range": "± 197900.07408449173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5133613.96484375,
            "unit": "ns",
            "range": "± 58983.08828444162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1596951.409877232,
            "unit": "ns",
            "range": "± 1390.191990244547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080833.8674479167,
            "unit": "ns",
            "range": "± 1394.3593785447972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641140.41484375,
            "unit": "ns",
            "range": "± 2091.765910573266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839420.0664760044,
            "unit": "ns",
            "range": "± 1325.1157009122617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754587.8719401042,
            "unit": "ns",
            "range": "± 1223.7584410705342"
          }
        ]
      }
    ]
  }
}