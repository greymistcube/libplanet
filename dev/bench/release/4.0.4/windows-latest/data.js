window.BENCHMARK_DATA = {
  "lastUpdate": 1707289333183,
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
          "id": "936cae2dc655caf280c893eab7e22f028ca67efe",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:45:59+09:00",
          "tree_id": "1aa9b62a8c2eac4e5a79b8ae47618099457f6eda",
          "url": "https://github.com/greymistcube/libplanet/commit/936cae2dc655caf280c893eab7e22f028ca67efe"
        },
        "date": 1707289059281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924200,
            "unit": "ns",
            "range": "± 78785.45233734461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1667542.3076923077,
            "unit": "ns",
            "range": "± 57666.39809351664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489266.3265306123,
            "unit": "ns",
            "range": "± 168974.72204285258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10998784.042553192,
            "unit": "ns",
            "range": "± 1176024.6693249682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34719.17808219178,
            "unit": "ns",
            "range": "± 1733.4661434894101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4922433.333333333,
            "unit": "ns",
            "range": "± 42263.1833475268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12842623.076923076,
            "unit": "ns",
            "range": "± 111787.43335639412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31589438.46153846,
            "unit": "ns",
            "range": "± 221551.83192826284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63970828.571428575,
            "unit": "ns",
            "range": "± 339746.03507862805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127781106.66666667,
            "unit": "ns",
            "range": "± 836557.3940404863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373091.9270833335,
            "unit": "ns",
            "range": "± 14534.106035385386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097361.7838541667,
            "unit": "ns",
            "range": "± 2553.1468716862432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740536.5443638393,
            "unit": "ns",
            "range": "± 1057.000039805003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1986895.4427083333,
            "unit": "ns",
            "range": "± 1822.9538148585211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609679.921875,
            "unit": "ns",
            "range": "± 811.4945940620488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560170.1102120535,
            "unit": "ns",
            "range": "± 1387.5858068676232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106564.864864865,
            "unit": "ns",
            "range": "± 70637.10551597989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287728,
            "unit": "ns",
            "range": "± 91712.563490728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2704090.3225806453,
            "unit": "ns",
            "range": "± 55422.67499161157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2717563.095238095,
            "unit": "ns",
            "range": "± 131728.18196131833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12377775.268817205,
            "unit": "ns",
            "range": "± 1550490.9888312598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166515.625,
            "unit": "ns",
            "range": "± 7468.945629037864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159521.79487179487,
            "unit": "ns",
            "range": "± 7901.859840846897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143090.32258064515,
            "unit": "ns",
            "range": "± 4259.292182097058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2792792.8571428573,
            "unit": "ns",
            "range": "± 38520.91767989308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2420726.6666666665,
            "unit": "ns",
            "range": "± 36759.67252043364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9633.333333333334,
            "unit": "ns",
            "range": "± 754.637602857548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51629.12087912088,
            "unit": "ns",
            "range": "± 4433.747260965016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44433.333333333336,
            "unit": "ns",
            "range": "± 1824.9018238433173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56882.32323232323,
            "unit": "ns",
            "range": "± 11112.273305534909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2307.3684210526317,
            "unit": "ns",
            "range": "± 437.89683650112516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9824.725274725275,
            "unit": "ns",
            "range": "± 930.9008070553558"
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
          "id": "64c3d37f522affc57f1837edce888aebf1a08be7",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:49:45+09:00",
          "tree_id": "6334141a92893468fe729e7e55eb13bb97e411f1",
          "url": "https://github.com/greymistcube/libplanet/commit/64c3d37f522affc57f1837edce888aebf1a08be7"
        },
        "date": 1707289305841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953775,
            "unit": "ns",
            "range": "± 117834.88090499662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689490.3846153845,
            "unit": "ns",
            "range": "± 66559.05312420202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1465674,
            "unit": "ns",
            "range": "± 168777.33261324046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10703865.217391305,
            "unit": "ns",
            "range": "± 959270.015549803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34487.5,
            "unit": "ns",
            "range": "± 1607.2751268321592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4837550,
            "unit": "ns",
            "range": "± 23884.07097112731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13173900,
            "unit": "ns",
            "range": "± 97169.41589108882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31425625,
            "unit": "ns",
            "range": "± 102575.60515408755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64283628.571428575,
            "unit": "ns",
            "range": "± 485818.3000457482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129374207.6923077,
            "unit": "ns",
            "range": "± 761028.8972410295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3370154.921875,
            "unit": "ns",
            "range": "± 22645.852493032704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078455.829326923,
            "unit": "ns",
            "range": "± 1720.7869175021156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741307.1010044643,
            "unit": "ns",
            "range": "± 1693.6149958849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933452.65625,
            "unit": "ns",
            "range": "± 5863.796038025922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605784.1421274039,
            "unit": "ns",
            "range": "± 624.638003151119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561186.572265625,
            "unit": "ns",
            "range": "± 1785.1496135830384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161016.923076923,
            "unit": "ns",
            "range": "± 94354.52521148424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294863.3333333335,
            "unit": "ns",
            "range": "± 66662.23913458639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2768083.7209302327,
            "unit": "ns",
            "range": "± 82498.96083106732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2758009.6774193547,
            "unit": "ns",
            "range": "± 116946.09758721259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12051461.538461538,
            "unit": "ns",
            "range": "± 1374670.764847531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164820.89552238805,
            "unit": "ns",
            "range": "± 7739.382508322687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158123.7288135593,
            "unit": "ns",
            "range": "± 6734.223939187126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141075,
            "unit": "ns",
            "range": "± 3099.893886129517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2749171.4285714286,
            "unit": "ns",
            "range": "± 29234.474606096577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431900,
            "unit": "ns",
            "range": "± 43522.45725730896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9985.869565217392,
            "unit": "ns",
            "range": "± 1114.9909103004186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49577.27272727273,
            "unit": "ns",
            "range": "± 3060.565918397584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43669.767441860466,
            "unit": "ns",
            "range": "± 1576.5445765254694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49104.21052631579,
            "unit": "ns",
            "range": "± 9059.295400123376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2397.872340425532,
            "unit": "ns",
            "range": "± 375.30739326820515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9661.290322580646,
            "unit": "ns",
            "range": "± 1012.3189326088755"
          }
        ]
      }
    ]
  }
}