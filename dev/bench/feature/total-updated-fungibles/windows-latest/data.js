window.BENCHMARK_DATA = {
  "lastUpdate": 1686575603506,
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
      }
    ]
  }
}