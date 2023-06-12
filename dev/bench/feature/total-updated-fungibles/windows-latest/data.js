window.BENCHMARK_DATA = {
  "lastUpdate": 1686582164722,
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
          "id": "027ba3ba808661370a6a9cf8513c2fe070d6923d",
          "message": "Added scenario test for ActionEvaluator",
          "timestamp": "2023-06-12T21:37:56+09:00",
          "tree_id": "ab5b77322cdbdb42324db5a1c7723b949d9ce77d",
          "url": "https://github.com/greymistcube/libplanet/commit/027ba3ba808661370a6a9cf8513c2fe070d6923d"
        },
        "date": 1686574404275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389064,
            "unit": "ns",
            "range": "± 126489.21503113188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497641.463414634,
            "unit": "ns",
            "range": "± 84466.40153223574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179855.2083333335,
            "unit": "ns",
            "range": "± 142963.17072279152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5084002.702702703,
            "unit": "ns",
            "range": "± 152314.0204506001"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44323.80952380953,
            "unit": "ns",
            "range": "± 2047.5567096573106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7042400,
            "unit": "ns",
            "range": "± 98661.60781754399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17668706.666666668,
            "unit": "ns",
            "range": "± 155071.3083283515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45399630,
            "unit": "ns",
            "range": "± 469828.73201686103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91771246.66666667,
            "unit": "ns",
            "range": "± 433344.57729002065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180874050,
            "unit": "ns",
            "range": "± 1436984.137137434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4850394.891826923,
            "unit": "ns",
            "range": "± 10602.932192705373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502762.109375,
            "unit": "ns",
            "range": "± 1543.185638131022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152345.390625,
            "unit": "ns",
            "range": "± 2599.2680124966387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541020.5729166665,
            "unit": "ns",
            "range": "± 4235.792285921184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813797.1223958334,
            "unit": "ns",
            "range": "± 2057.0330699822707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774540.2971540178,
            "unit": "ns",
            "range": "± 1438.4966768272145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3041477.777777778,
            "unit": "ns",
            "range": "± 63989.14940698982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3306213.3333333335,
            "unit": "ns",
            "range": "± 56186.40998201138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4087073.6842105263,
            "unit": "ns",
            "range": "± 79869.12101199105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4153659.090909091,
            "unit": "ns",
            "range": "± 102015.39407219691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6408733.333333333,
            "unit": "ns",
            "range": "± 178524.07292963215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266765.45454545453,
            "unit": "ns",
            "range": "± 10725.622112351792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257747.42268041236,
            "unit": "ns",
            "range": "± 15646.998466049763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237690.9090909091,
            "unit": "ns",
            "range": "± 16111.55049550484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3875515.3846153845,
            "unit": "ns",
            "range": "± 43633.66143536903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492685.714285714,
            "unit": "ns",
            "range": "± 52673.0971638764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18712.121212121212,
            "unit": "ns",
            "range": "± 2479.6836832207387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91792,
            "unit": "ns",
            "range": "± 10993.48457179538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74648.95833333333,
            "unit": "ns",
            "range": "± 9685.529029832045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95811.85567010309,
            "unit": "ns",
            "range": "± 15281.759574318832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5115.306122448979,
            "unit": "ns",
            "range": "± 1089.3440796551172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18237.755102040817,
            "unit": "ns",
            "range": "± 2720.8062520246044"
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
          "id": "4a902e578173a6468f95578930d4b5cec7f0c744",
          "message": "Changelog",
          "timestamp": "2023-06-12T21:55:38+09:00",
          "tree_id": "bd7080a1804ddc6ee932b2e9b0ef6367f6d7e42e",
          "url": "https://github.com/greymistcube/libplanet/commit/4a902e578173a6468f95578930d4b5cec7f0c744"
        },
        "date": 1686575580403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405851.5463917525,
            "unit": "ns",
            "range": "± 113325.81909532104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604785.1063829786,
            "unit": "ns",
            "range": "± 100429.44089979271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2230985.714285714,
            "unit": "ns",
            "range": "± 161794.3425412351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5626092.134831461,
            "unit": "ns",
            "range": "± 311354.982742119"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48822.34042553192,
            "unit": "ns",
            "range": "± 3157.629581036442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7473964.285714285,
            "unit": "ns",
            "range": "± 90327.72474242256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20733185.714285713,
            "unit": "ns",
            "range": "± 202505.7856994665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52890600,
            "unit": "ns",
            "range": "± 850394.0326514707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105652968.75,
            "unit": "ns",
            "range": "± 2029248.493315937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210061757.14285713,
            "unit": "ns",
            "range": "± 1526050.8710717678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4808339.508928572,
            "unit": "ns",
            "range": "± 43680.27050051099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574027.3697916667,
            "unit": "ns",
            "range": "± 26507.741541427567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168560.1111778845,
            "unit": "ns",
            "range": "± 5896.801464714008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673575.362723214,
            "unit": "ns",
            "range": "± 28479.42074838387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832701.0807291666,
            "unit": "ns",
            "range": "± 12564.178270942028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767885.2957589285,
            "unit": "ns",
            "range": "± 3018.220121319615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3293635.714285714,
            "unit": "ns",
            "range": "± 60161.60467647681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3488537.5,
            "unit": "ns",
            "range": "± 52575.582101707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4360000,
            "unit": "ns",
            "range": "± 129774.818236343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4440625,
            "unit": "ns",
            "range": "± 67044.7493029164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7126229.508196721,
            "unit": "ns",
            "range": "± 317666.24589562666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277288.46153846156,
            "unit": "ns",
            "range": "± 11257.009212497624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263889.74358974356,
            "unit": "ns",
            "range": "± 13148.300860484425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253993.75,
            "unit": "ns",
            "range": "± 11796.069765170174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4258626.923076923,
            "unit": "ns",
            "range": "± 20523.9759730806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3948326.923076923,
            "unit": "ns",
            "range": "± 57579.729561802014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22757.44680851064,
            "unit": "ns",
            "range": "± 2318.9490278819057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89270.96774193548,
            "unit": "ns",
            "range": "± 5197.607740798547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77442.55319148937,
            "unit": "ns",
            "range": "± 5286.409627001304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88750.72463768115,
            "unit": "ns",
            "range": "± 3348.512540201105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5967.391304347826,
            "unit": "ns",
            "range": "± 731.1151644302138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16614.583333333332,
            "unit": "ns",
            "range": "± 1657.1363484013566"
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
          "id": "b67b82b40ee01923b572ffb9ad3d26a3dd6f8b28",
          "message": "Changelog\n\nTypo",
          "timestamp": "2023-06-12T22:07:26+09:00",
          "tree_id": "a06ac8e75ad288a4e49fdd25a481c33ec7d3dde7",
          "url": "https://github.com/greymistcube/libplanet/commit/b67b82b40ee01923b572ffb9ad3d26a3dd6f8b28"
        },
        "date": 1686576247461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500964.6464646466,
            "unit": "ns",
            "range": "± 131194.15376559924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823991.935483871,
            "unit": "ns",
            "range": "± 127944.96421635216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2343159.793814433,
            "unit": "ns",
            "range": "± 179684.25354156768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5652780,
            "unit": "ns",
            "range": "± 274962.0430194853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55950.52631578947,
            "unit": "ns",
            "range": "± 5713.326595239815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8295171.428571428,
            "unit": "ns",
            "range": "± 135128.72739367068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21257620,
            "unit": "ns",
            "range": "± 284590.7542921439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54042173.333333336,
            "unit": "ns",
            "range": "± 565713.2936980239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107774473.33333333,
            "unit": "ns",
            "range": "± 1134036.5618108658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216379792.85714287,
            "unit": "ns",
            "range": "± 1347904.6938827718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5065722.1875,
            "unit": "ns",
            "range": "± 52156.668433828774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1597311.7838541667,
            "unit": "ns",
            "range": "± 8091.388415570381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217037.7604166667,
            "unit": "ns",
            "range": "± 5617.883392365968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692225.78125,
            "unit": "ns",
            "range": "± 10378.510768155687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855778.9388020834,
            "unit": "ns",
            "range": "± 3536.250512129604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782104.1090745192,
            "unit": "ns",
            "range": "± 2184.33423073343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506506.6666666665,
            "unit": "ns",
            "range": "± 44658.7132222444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3657892.3076923075,
            "unit": "ns",
            "range": "± 49932.829239864186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4491421.428571428,
            "unit": "ns",
            "range": "± 41205.104772839244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4614615.384615385,
            "unit": "ns",
            "range": "± 66786.8605609647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7002480,
            "unit": "ns",
            "range": "± 156168.86474515166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292561.90476190473,
            "unit": "ns",
            "range": "± 10680.525984603084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277453.07692307694,
            "unit": "ns",
            "range": "± 12984.401329465114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269331.7073170732,
            "unit": "ns",
            "range": "± 14179.180773918215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347086.666666667,
            "unit": "ns",
            "range": "± 48639.13572227126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3985360,
            "unit": "ns",
            "range": "± 48462.02931898628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26445.454545454544,
            "unit": "ns",
            "range": "± 2861.256778498679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114563.26530612246,
            "unit": "ns",
            "range": "± 11413.704800330752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98908.33333333333,
            "unit": "ns",
            "range": "± 10691.331133376645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122770.40816326531,
            "unit": "ns",
            "range": "± 15986.832269629034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8960.309278350516,
            "unit": "ns",
            "range": "± 1484.1162168163185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26009.375,
            "unit": "ns",
            "range": "± 2547.7989726945016"
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
          "id": "1803c0d627f1df34a924019cb1127718164e8de8",
          "message": "Code readability",
          "timestamp": "2023-06-12T23:48:09+09:00",
          "tree_id": "b48d076401b6c7b3a69f0a8aac48034c4c960382",
          "url": "https://github.com/greymistcube/libplanet/commit/1803c0d627f1df34a924019cb1127718164e8de8"
        },
        "date": 1686582136162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352716.3265306123,
            "unit": "ns",
            "range": "± 99947.51580836522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2468965.8536585364,
            "unit": "ns",
            "range": "± 88578.19316783363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176296.9696969697,
            "unit": "ns",
            "range": "± 149813.27728859033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5102358.333333333,
            "unit": "ns",
            "range": "± 168015.2720524451"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43487.64705882353,
            "unit": "ns",
            "range": "± 2362.5539283634926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6982964.285714285,
            "unit": "ns",
            "range": "± 31553.589510371257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17573685.714285713,
            "unit": "ns",
            "range": "± 127372.07674394702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45165196.15384615,
            "unit": "ns",
            "range": "± 191379.22481896434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91360269.23076923,
            "unit": "ns",
            "range": "± 264936.2230947144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181305100,
            "unit": "ns",
            "range": "± 776114.2966268379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4833502.708333333,
            "unit": "ns",
            "range": "± 9000.481694324155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512755.9044471155,
            "unit": "ns",
            "range": "± 1474.1142979156791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152138.7137276786,
            "unit": "ns",
            "range": "± 1089.013603898203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602545.3645833335,
            "unit": "ns",
            "range": "± 28370.32027255509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829926.9391741072,
            "unit": "ns",
            "range": "± 1485.520626580404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733779.5963541666,
            "unit": "ns",
            "range": "± 725.6961256650773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019867.3913043477,
            "unit": "ns",
            "range": "± 115090.88786085122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3133421.4285714286,
            "unit": "ns",
            "range": "± 42667.42909403502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4007606.6666666665,
            "unit": "ns",
            "range": "± 54377.71952695682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3997845.714285714,
            "unit": "ns",
            "range": "± 129720.78236794312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6324111.764705882,
            "unit": "ns",
            "range": "± 128636.64856074715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253590.47619047618,
            "unit": "ns",
            "range": "± 9274.402472996662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240989.36170212767,
            "unit": "ns",
            "range": "± 8504.506070123194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223267.39130434784,
            "unit": "ns",
            "range": "± 12471.736034463293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854953.846153846,
            "unit": "ns",
            "range": "± 15181.93089303945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3522200,
            "unit": "ns",
            "range": "± 38601.25830665554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17500,
            "unit": "ns",
            "range": "± 1574.7332936839048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81093.47826086957,
            "unit": "ns",
            "range": "± 4883.518015561469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68076.92307692308,
            "unit": "ns",
            "range": "± 3977.773719140363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86952.57731958762,
            "unit": "ns",
            "range": "± 12867.692851863418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4240.217391304348,
            "unit": "ns",
            "range": "± 609.0994582364108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16292.47311827957,
            "unit": "ns",
            "range": "± 1675.3478911362663"
          }
        ]
      }
    ]
  }
}