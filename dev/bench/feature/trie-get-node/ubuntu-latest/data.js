window.BENCHMARK_DATA = {
  "lastUpdate": 1693389334709,
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
      }
    ]
  }
}