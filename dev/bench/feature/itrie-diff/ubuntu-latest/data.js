window.BENCHMARK_DATA = {
  "lastUpdate": 1693811168982,
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
          "id": "f984db1955e7006b449dc8eac5c3e9a3c6afb1d7",
          "message": "Fix broken PR",
          "timestamp": "2023-09-04T12:17:45+09:00",
          "tree_id": "81ddc7a7a5d6bede749a438531c39e5f1e4d0f2f",
          "url": "https://github.com/greymistcube/libplanet/commit/f984db1955e7006b449dc8eac5c3e9a3c6afb1d7"
        },
        "date": 1693798691217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1736562.8709677418,
            "unit": "ns",
            "range": "± 125427.06989991764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3585450.6966292136,
            "unit": "ns",
            "range": "± 288463.06358162314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2382010.6703296704,
            "unit": "ns",
            "range": "± 180319.8715224978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6604913.714285715,
            "unit": "ns",
            "range": "± 300170.58385527023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376004.73195876286,
            "unit": "ns",
            "range": "± 38427.672018220226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371485.48913043475,
            "unit": "ns",
            "range": "± 33976.26151051128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336938.9292929293,
            "unit": "ns",
            "range": "± 37266.83899170581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5583392.697674419,
            "unit": "ns",
            "range": "± 204881.96439106044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5169978.12,
            "unit": "ns",
            "range": "± 205146.7465069663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23820.382978723403,
            "unit": "ns",
            "range": "± 3064.5990497324674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120188.43157894736,
            "unit": "ns",
            "range": "± 16791.50456405036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133938.44680851063,
            "unit": "ns",
            "range": "± 13536.578087328588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131815.0744680851,
            "unit": "ns",
            "range": "± 20009.88655545395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8520.234042553191,
            "unit": "ns",
            "range": "± 1227.858161623403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24809.757894736842,
            "unit": "ns",
            "range": "± 4010.5156741591695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68796.97872340426,
            "unit": "ns",
            "range": "± 12128.496931029586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10659013.020833334,
            "unit": "ns",
            "range": "± 744501.6847876167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28191158.645833332,
            "unit": "ns",
            "range": "± 1090805.711292433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75249501.42105263,
            "unit": "ns",
            "range": "± 2544340.9884188254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148564907.3939394,
            "unit": "ns",
            "range": "± 4653426.691614121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301000540.88235295,
            "unit": "ns",
            "range": "± 6025136.7568359375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4265489.32967033,
            "unit": "ns",
            "range": "± 283388.1607529407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4440705.3432835825,
            "unit": "ns",
            "range": "± 210335.15705110665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5978495.605263158,
            "unit": "ns",
            "range": "± 204909.38475408938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5104043.795454546,
            "unit": "ns",
            "range": "± 274435.9197533264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8752876.23076923,
            "unit": "ns",
            "range": "± 354301.8529582807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6512833.809151785,
            "unit": "ns",
            "range": "± 82550.00716521789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2117577.1674479167,
            "unit": "ns",
            "range": "± 29214.868481664333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401763.3407552084,
            "unit": "ns",
            "range": "± 23727.97396836865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3514793.611328125,
            "unit": "ns",
            "range": "± 32323.705012509203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1089828.3344184028,
            "unit": "ns",
            "range": "± 21294.394095155552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1031321.9430989583,
            "unit": "ns",
            "range": "± 18573.97771907673"
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
          "id": "885a676c5b563d97f15170f92507349290baeffb",
          "message": "Fix broken PR",
          "timestamp": "2023-09-04T15:52:46+09:00",
          "tree_id": "35aed0d72f996bf76d82c332808d2fb6406ced25",
          "url": "https://github.com/greymistcube/libplanet/commit/885a676c5b563d97f15170f92507349290baeffb"
        },
        "date": 1693811161365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339983.6565656567,
            "unit": "ns",
            "range": "± 99696.40355079256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495089.64516129,
            "unit": "ns",
            "range": "± 75544.24716528646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701261.9052631578,
            "unit": "ns",
            "range": "± 97333.74464106797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4519600,
            "unit": "ns",
            "range": "± 101702.45759802593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266738.5135135135,
            "unit": "ns",
            "range": "± 7280.168922115376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259726.38461538462,
            "unit": "ns",
            "range": "± 8930.262976075359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219595.55,
            "unit": "ns",
            "range": "± 4509.305086794358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179284.1333333333,
            "unit": "ns",
            "range": "± 40066.81043290902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3884631.533333333,
            "unit": "ns",
            "range": "± 35018.917422009545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19142.58510638298,
            "unit": "ns",
            "range": "± 1835.4541051873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85769.77173913043,
            "unit": "ns",
            "range": "± 6958.28445622181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67783.41666666667,
            "unit": "ns",
            "range": "± 1437.561368570329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73937.69791666667,
            "unit": "ns",
            "range": "± 9763.727173488176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4725.510204081633,
            "unit": "ns",
            "range": "± 522.5455585109738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18318.78125,
            "unit": "ns",
            "range": "± 1516.5773112896095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46687.15217391304,
            "unit": "ns",
            "range": "± 2800.055007053021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7840006.538461538,
            "unit": "ns",
            "range": "± 23924.543696851648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20112434.266666666,
            "unit": "ns",
            "range": "± 84306.09081577734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51862693.28571428,
            "unit": "ns",
            "range": "± 160850.85838915338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102493118.2,
            "unit": "ns",
            "range": "± 403890.6291177989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205211755.85714287,
            "unit": "ns",
            "range": "± 994251.254528665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250233.411764706,
            "unit": "ns",
            "range": "± 63411.41029327729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3370543.5,
            "unit": "ns",
            "range": "± 100407.94211262924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4162505.4285714286,
            "unit": "ns",
            "range": "± 44651.78039643468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796534.5384615385,
            "unit": "ns",
            "range": "± 42935.61517282861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6024344.954545454,
            "unit": "ns",
            "range": "± 140409.36809523287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4981412.076450893,
            "unit": "ns",
            "range": "± 21655.630385493412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1605333.2798177083,
            "unit": "ns",
            "range": "± 1600.364072592303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1100112.6261160714,
            "unit": "ns",
            "range": "± 894.2906771419119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559590.902604167,
            "unit": "ns",
            "range": "± 2885.3724597098944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919484.0724748884,
            "unit": "ns",
            "range": "± 639.0686288293347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728388.2297014509,
            "unit": "ns",
            "range": "± 557.5864882317462"
          }
        ]
      }
    ]
  }
}