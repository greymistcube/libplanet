window.BENCHMARK_DATA = {
  "lastUpdate": 1698491515700,
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
          "id": "d513aa040397dea6f1673fd73b03d7ceec5b4e04",
          "message": "Fixed trie key conversion",
          "timestamp": "2023-10-28T19:52:12+09:00",
          "tree_id": "07ce30e41caa5c9406c7e657fa5b57405dd93423",
          "url": "https://github.com/greymistcube/libplanet/commit/d513aa040397dea6f1673fd73b03d7ceec5b4e04"
        },
        "date": 1698491250493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7695658.643835616,
            "unit": "ns",
            "range": "± 364342.31190969946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18570754,
            "unit": "ns",
            "range": "± 255893.3473389015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47739273.89655172,
            "unit": "ns",
            "range": "± 2069822.9797771438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94379687.41666667,
            "unit": "ns",
            "range": "± 4978325.200628609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202998259.0892857,
            "unit": "ns",
            "range": "± 8665426.879354615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37102.6404494382,
            "unit": "ns",
            "range": "± 4330.683830232376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226396.60824742267,
            "unit": "ns",
            "range": "± 19700.864971787352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226830.58163265305,
            "unit": "ns",
            "range": "± 25459.447627924703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200332.62886597938,
            "unit": "ns",
            "range": "± 23272.04841933039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3674129.5,
            "unit": "ns",
            "range": "± 93727.20526126315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3426888.74,
            "unit": "ns",
            "range": "± 90174.37665909683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12799.445054945056,
            "unit": "ns",
            "range": "± 1136.181111957825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59237.71264367816,
            "unit": "ns",
            "range": "± 5461.416450795921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53194.45054945055,
            "unit": "ns",
            "range": "± 4697.4125129662525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57694.60638297872,
            "unit": "ns",
            "range": "± 9752.923602990299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3289.769230769231,
            "unit": "ns",
            "range": "± 487.49568834385207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11970.684782608696,
            "unit": "ns",
            "range": "± 984.275556982687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1108540.64,
            "unit": "ns",
            "range": "± 108422.83622028575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2282344.6836734693,
            "unit": "ns",
            "range": "± 138104.16426907905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575481.0333333334,
            "unit": "ns",
            "range": "± 127742.70908594686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6406041.779661017,
            "unit": "ns",
            "range": "± 281740.0380980401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2858668.5098039214,
            "unit": "ns",
            "range": "± 97791.51786517531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2990563.563380282,
            "unit": "ns",
            "range": "± 144644.09615967565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3608761.58,
            "unit": "ns",
            "range": "± 144053.48325702944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3653368.305263158,
            "unit": "ns",
            "range": "± 282172.1441195478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9971868.17977528,
            "unit": "ns",
            "range": "± 1045646.7448011603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4373315.731222588,
            "unit": "ns",
            "range": "± 190129.91735804314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1387402.5360604746,
            "unit": "ns",
            "range": "± 56178.33850504708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 868765.4919921875,
            "unit": "ns",
            "range": "± 33553.60085460838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2027943.1687127976,
            "unit": "ns",
            "range": "± 92448.90732267563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663611.4151429521,
            "unit": "ns",
            "range": "± 25801.227649316155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583529.6746981534,
            "unit": "ns",
            "range": "± 24522.131503838613"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1698491493466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8075358.38,
            "unit": "ns",
            "range": "± 172674.98387730247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21097616.41780822,
            "unit": "ns",
            "range": "± 945839.043521996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50331721.3125,
            "unit": "ns",
            "range": "± 955735.1585929524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98273846.7,
            "unit": "ns",
            "range": "± 1480338.5310324025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213171210.78,
            "unit": "ns",
            "range": "± 4904955.8081277395"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63033.09782608696,
            "unit": "ns",
            "range": "± 9977.779766974063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324212.7653061224,
            "unit": "ns",
            "range": "± 41041.08502478171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310824.13684210525,
            "unit": "ns",
            "range": "± 33025.57776536838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301056,
            "unit": "ns",
            "range": "± 21194.809151706762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4097601.947368421,
            "unit": "ns",
            "range": "± 112357.28970341512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3905935.3402061854,
            "unit": "ns",
            "range": "± 255199.99818222172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19730.252808988764,
            "unit": "ns",
            "range": "± 1906.0070249375626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88221.8,
            "unit": "ns",
            "range": "± 10333.6050707121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93669.68131868132,
            "unit": "ns",
            "range": "± 13450.358455263991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104555.94623655915,
            "unit": "ns",
            "range": "± 16914.03491981784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5775.556818181818,
            "unit": "ns",
            "range": "± 514.0336398928418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19426.545977011494,
            "unit": "ns",
            "range": "± 2913.0106774888177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599669.9791666667,
            "unit": "ns",
            "range": "± 229309.4183706685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866038.212765957,
            "unit": "ns",
            "range": "± 196636.11866475668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2435945.1063829786,
            "unit": "ns",
            "range": "± 263244.3079082446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10646353.17721519,
            "unit": "ns",
            "range": "± 865173.5689600651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484766.8139534886,
            "unit": "ns",
            "range": "± 189516.47724721563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3751783.7666666666,
            "unit": "ns",
            "range": "± 223487.09430229056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4756280.697916667,
            "unit": "ns",
            "range": "± 274321.7710208452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4454412.885416667,
            "unit": "ns",
            "range": "± 314290.2947107598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16038356.711340206,
            "unit": "ns",
            "range": "± 2141506.2823181595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003173.30703125,
            "unit": "ns",
            "range": "± 85605.34753406317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835904.7723958334,
            "unit": "ns",
            "range": "± 17079.805282885864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1090424.1242675781,
            "unit": "ns",
            "range": "± 20920.264433192715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2753578.7892922796,
            "unit": "ns",
            "range": "± 51946.4344711037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847759.3590494791,
            "unit": "ns",
            "range": "± 14751.908593607455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775516.182306463,
            "unit": "ns",
            "range": "± 18138.520997966203"
          }
        ]
      }
    ]
  }
}