window.BENCHMARK_DATA = {
  "lastUpdate": 1693793239370,
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
          "id": "06d288e10ab42d4c0d44ef20ef909b3ce5937896",
          "message": "Cleanup",
          "timestamp": "2023-09-04T10:42:36+09:00",
          "tree_id": "0282daa55f3754af880a2bddc6126756ea723363",
          "url": "https://github.com/greymistcube/libplanet/commit/06d288e10ab42d4c0d44ef20ef909b3ce5937896"
        },
        "date": 1693792662503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1453090.0795454546,
            "unit": "ns",
            "range": "± 72982.81942957638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800768.7352941176,
            "unit": "ns",
            "range": "± 82417.43125360653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1933952.15625,
            "unit": "ns",
            "range": "± 115063.99979392046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234230.58974359,
            "unit": "ns",
            "range": "± 268799.0909021634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287689.51851851854,
            "unit": "ns",
            "range": "± 7406.306945229287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284978.2105263158,
            "unit": "ns",
            "range": "± 6172.462920809807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254430.2131147541,
            "unit": "ns",
            "range": "± 11371.278947586554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656463.4,
            "unit": "ns",
            "range": "± 48939.114748838685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109937.466666667,
            "unit": "ns",
            "range": "± 57736.64722423045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23662.515789473684,
            "unit": "ns",
            "range": "± 1831.427061663895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98148.39583333333,
            "unit": "ns",
            "range": "± 7301.849945090218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80450.1914893617,
            "unit": "ns",
            "range": "± 5135.633853889616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92479.793814433,
            "unit": "ns",
            "range": "± 13237.224903451051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6136.1752577319585,
            "unit": "ns",
            "range": "± 983.3238171535578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23104.546391752578,
            "unit": "ns",
            "range": "± 2574.913501866853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54404.05434782609,
            "unit": "ns",
            "range": "± 3713.832277288117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8707973.294117646,
            "unit": "ns",
            "range": "± 177366.49953724517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23031904.533333335,
            "unit": "ns",
            "range": "± 283478.552435596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58593018,
            "unit": "ns",
            "range": "± 232642.71276475748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116805995.57142857,
            "unit": "ns",
            "range": "± 500445.2918405174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230606858,
            "unit": "ns",
            "range": "± 1392958.3325166006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3719888.769230769,
            "unit": "ns",
            "range": "± 52855.52533739786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3875942.705882353,
            "unit": "ns",
            "range": "± 78795.18630027845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4539053.043478261,
            "unit": "ns",
            "range": "± 110931.07644449496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229360.545454546,
            "unit": "ns",
            "range": "± 102998.34492924873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6647934.28,
            "unit": "ns",
            "range": "± 173116.60132877686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5189988.692908654,
            "unit": "ns",
            "range": "± 33384.81143389916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586781.9126674107,
            "unit": "ns",
            "range": "± 1133.6021800393216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091113.7475260417,
            "unit": "ns",
            "range": "± 1012.2328223246742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617927.920052083,
            "unit": "ns",
            "range": "± 2693.290564057847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844576.7375,
            "unit": "ns",
            "range": "± 1077.4283041228744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759483.3831380209,
            "unit": "ns",
            "range": "± 566.3506360079235"
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
          "id": "4c9242b0ddc85ac71c2743b148f11d94c4404d60",
          "message": "Changelog",
          "timestamp": "2023-09-04T10:47:58+09:00",
          "tree_id": "8b179a404dc20856cf5631d621abbc7c4fcf84dd",
          "url": "https://github.com/greymistcube/libplanet/commit/4c9242b0ddc85ac71c2743b148f11d94c4404d60"
        },
        "date": 1693793230605,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1696252.8453608248,
            "unit": "ns",
            "range": "± 188851.80735088186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3032608.092783505,
            "unit": "ns",
            "range": "± 331453.73763996345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051135.9278350514,
            "unit": "ns",
            "range": "± 265084.03276297153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5928003.898989899,
            "unit": "ns",
            "range": "± 604556.5046691715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324681.4,
            "unit": "ns",
            "range": "± 47097.19886041921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320893.44897959183,
            "unit": "ns",
            "range": "± 43701.58149987428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278890.25,
            "unit": "ns",
            "range": "± 42827.18118450625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4819764.357142857,
            "unit": "ns",
            "range": "± 560043.4745541875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4317318.08,
            "unit": "ns",
            "range": "± 413823.41749534797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33601.255102040814,
            "unit": "ns",
            "range": "± 11021.934582665664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115714.58510638298,
            "unit": "ns",
            "range": "± 20859.096795573096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118390.43298969071,
            "unit": "ns",
            "range": "± 28215.251529502035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119336.66666666667,
            "unit": "ns",
            "range": "± 24198.404668888776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11414.11,
            "unit": "ns",
            "range": "± 8425.882144741327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31467.309278350516,
            "unit": "ns",
            "range": "± 8851.2739000299"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69859.23913043478,
            "unit": "ns",
            "range": "± 12776.256479677291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8927694.721649485,
            "unit": "ns",
            "range": "± 739159.8410527311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24755370.818181816,
            "unit": "ns",
            "range": "± 1779794.9926670778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64519984.77922078,
            "unit": "ns",
            "range": "± 3293294.4769083853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127379978.49206349,
            "unit": "ns",
            "range": "± 5547753.5838193735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257816109.35,
            "unit": "ns",
            "range": "± 5935737.703081797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368419.989361702,
            "unit": "ns",
            "range": "± 293612.51972466096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3820591.8645833335,
            "unit": "ns",
            "range": "± 398461.17716053646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5193374.4387755105,
            "unit": "ns",
            "range": "± 622339.8223793793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4401393.37755102,
            "unit": "ns",
            "range": "± 446472.1914162991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8184659.268041237,
            "unit": "ns",
            "range": "± 627915.8651539151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5619650.407778532,
            "unit": "ns",
            "range": "± 204777.6823285126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869215.297265625,
            "unit": "ns",
            "range": "± 48768.2367534274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288736.0036621094,
            "unit": "ns",
            "range": "± 23597.496944167684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3020505.4346454325,
            "unit": "ns",
            "range": "± 79491.42924928646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971210.7629925272,
            "unit": "ns",
            "range": "± 24548.8739290072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927531.5350260417,
            "unit": "ns",
            "range": "± 17310.884983374966"
          }
        ]
      }
    ]
  }
}