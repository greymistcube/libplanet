window.BENCHMARK_DATA = {
  "lastUpdate": 1689322588623,
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
          "id": "639b3c048cc8a77e48c723374264fcd3544a0b1e",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:42:36+09:00",
          "tree_id": "968f82627aae9c0bbbdeff1c7db89e4204d978b2",
          "url": "https://github.com/greymistcube/libplanet/commit/639b3c048cc8a77e48c723374264fcd3544a0b1e"
        },
        "date": 1689321471284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360894,
            "unit": "ns",
            "range": "± 110647.23160850552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2490440.350877193,
            "unit": "ns",
            "range": "± 106619.29579390859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1741851.0869565217,
            "unit": "ns",
            "range": "± 97692.87543569108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4645349.295774648,
            "unit": "ns",
            "range": "± 223833.34544971457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44341.46341463415,
            "unit": "ns",
            "range": "± 2362.670137293256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6845773.333333333,
            "unit": "ns",
            "range": "± 34384.474625012015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17759086.666666668,
            "unit": "ns",
            "range": "± 111043.13747797465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45584726.666666664,
            "unit": "ns",
            "range": "± 378102.53232738463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90561986.66666667,
            "unit": "ns",
            "range": "± 617371.2518952164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181864836.66666666,
            "unit": "ns",
            "range": "± 990313.5599154345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4879340.513392857,
            "unit": "ns",
            "range": "± 7588.6600455864145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514401.0611979167,
            "unit": "ns",
            "range": "± 2002.9848624419378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174440.390625,
            "unit": "ns",
            "range": "± 947.017917377814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601868.9583333335,
            "unit": "ns",
            "range": "± 6976.602938516788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806558.37890625,
            "unit": "ns",
            "range": "± 2049.9953167559465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736822.6911272322,
            "unit": "ns",
            "range": "± 801.2171606543072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992171.4285714286,
            "unit": "ns",
            "range": "± 42312.513315434044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3149720,
            "unit": "ns",
            "range": "± 47178.93294984229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3962700,
            "unit": "ns",
            "range": "± 44246.049056868986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3557915.3846153845,
            "unit": "ns",
            "range": "± 93244.53739413453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5841941.891891892,
            "unit": "ns",
            "range": "± 185685.5307268752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260085.36585365853,
            "unit": "ns",
            "range": "± 9376.181551559508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240897.5,
            "unit": "ns",
            "range": "± 8262.503733658337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222122.61904761905,
            "unit": "ns",
            "range": "± 11846.9491898184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3843793.3333333335,
            "unit": "ns",
            "range": "± 33561.53126650184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525721.4285714286,
            "unit": "ns",
            "range": "± 42311.0129066513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19201.03092783505,
            "unit": "ns",
            "range": "± 2054.9987249266537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86397.22222222222,
            "unit": "ns",
            "range": "± 4273.929228299563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69043.02325581395,
            "unit": "ns",
            "range": "± 3700.931224552082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90770.40816326531,
            "unit": "ns",
            "range": "± 13539.222968640846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4767.368421052632,
            "unit": "ns",
            "range": "± 736.6459505345628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17374.444444444445,
            "unit": "ns",
            "range": "± 1308.426545499895"
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
          "id": "9915b1153986d8444b41c256f6c4bb33747105f9",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:55:04+09:00",
          "tree_id": "56464697796c2a6fcb34286edce2ff533972e4d4",
          "url": "https://github.com/greymistcube/libplanet/commit/9915b1153986d8444b41c256f6c4bb33747105f9"
        },
        "date": 1689322562924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1832798.969072165,
            "unit": "ns",
            "range": "± 194393.62102383774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3468398.969072165,
            "unit": "ns",
            "range": "± 243028.80937540333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2322227.0833333335,
            "unit": "ns",
            "range": "± 218838.40203707473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6606004,
            "unit": "ns",
            "range": "± 486339.65911103983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62932.291666666664,
            "unit": "ns",
            "range": "± 15173.796629936318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8596340.404040404,
            "unit": "ns",
            "range": "± 936499.6299637732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23009629.896907218,
            "unit": "ns",
            "range": "± 1829505.8028721027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59167737.234042555,
            "unit": "ns",
            "range": "± 3344269.254960489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120064869,
            "unit": "ns",
            "range": "± 7327708.461346141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258461485.7142857,
            "unit": "ns",
            "range": "± 13129133.712350063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5693293.092105263,
            "unit": "ns",
            "range": "± 122728.13126851538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1937236.9395380435,
            "unit": "ns",
            "range": "± 48167.426897580044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410885.546875,
            "unit": "ns",
            "range": "± 50437.44285354054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3215371.5885416665,
            "unit": "ns",
            "range": "± 58332.59224013639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013750.3540039062,
            "unit": "ns",
            "range": "± 18469.08326770343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953759.74609375,
            "unit": "ns",
            "range": "± 13260.232542939848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3771064.6464646463,
            "unit": "ns",
            "range": "± 345129.1377101583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3878391.9191919193,
            "unit": "ns",
            "range": "± 403891.4442143389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5109518.367346939,
            "unit": "ns",
            "range": "± 452853.52570299915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137845.9183673467,
            "unit": "ns",
            "range": "± 474171.9452297471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7770602.02020202,
            "unit": "ns",
            "range": "± 692457.8145229039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330021.4285714286,
            "unit": "ns",
            "range": "± 51362.38795954892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315152.5252525252,
            "unit": "ns",
            "range": "± 49052.81273724862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280462.2448979592,
            "unit": "ns",
            "range": "± 50178.69000871737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4671133.333333333,
            "unit": "ns",
            "range": "± 459145.2222202898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174255,
            "unit": "ns",
            "range": "± 469690.5743479564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28748.958333333332,
            "unit": "ns",
            "range": "± 9244.526059317672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103894.79166666667,
            "unit": "ns",
            "range": "± 21810.7668717789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120916,
            "unit": "ns",
            "range": "± 30879.23600352859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139474,
            "unit": "ns",
            "range": "± 35031.34417557332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6996.774193548387,
            "unit": "ns",
            "range": "± 1523.1868489184421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25136.363636363636,
            "unit": "ns",
            "range": "± 9435.511023499603"
          }
        ]
      }
    ]
  }
}