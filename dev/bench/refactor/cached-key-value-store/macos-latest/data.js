window.BENCHMARK_DATA = {
  "lastUpdate": 1699954233373,
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
          "id": "0f9075efda158932155ab958a4efe01d5336e91b",
          "message": "Added logging",
          "timestamp": "2023-11-14T15:40:51+09:00",
          "tree_id": "6c7453fc44533f705b7c7c8d0ddfdef09a0f7838",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9075efda158932155ab958a4efe01d5336e91b"
        },
        "date": 1699946611706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9038282.489690721,
            "unit": "ns",
            "range": "± 549941.1436193174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21695388.05882353,
            "unit": "ns",
            "range": "± 883580.9136058432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53063313.11764706,
            "unit": "ns",
            "range": "± 1712111.7180423005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111030800.10655738,
            "unit": "ns",
            "range": "± 4722137.031955868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223910338.65,
            "unit": "ns",
            "range": "± 5076061.457711318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72637.89772727272,
            "unit": "ns",
            "range": "± 9027.379888128806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349974.4193548387,
            "unit": "ns",
            "range": "± 53675.7739935938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345029.2052631579,
            "unit": "ns",
            "range": "± 49050.52249312311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322473.97826086957,
            "unit": "ns",
            "range": "± 36852.220372362215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4036102.1707317075,
            "unit": "ns",
            "range": "± 144172.97248754746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3691174.6896551726,
            "unit": "ns",
            "range": "± 100361.74245024967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18262.860215053763,
            "unit": "ns",
            "range": "± 2223.042502827648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86358.85106382979,
            "unit": "ns",
            "range": "± 11117.885379222818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108340.29569892473,
            "unit": "ns",
            "range": "± 13700.22374504625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108898.9623655914,
            "unit": "ns",
            "range": "± 15912.33470596832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6965.139784946236,
            "unit": "ns",
            "range": "± 1418.392527011674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18005.695652173912,
            "unit": "ns",
            "range": "± 2584.184653606807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384751,
            "unit": "ns",
            "range": "± 107327.82459612994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2674571.9365079366,
            "unit": "ns",
            "range": "± 121472.1334937031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2292245.580645161,
            "unit": "ns",
            "range": "± 178564.68528143855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10808493.92,
            "unit": "ns",
            "range": "± 435657.4124981406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3369359.5894736843,
            "unit": "ns",
            "range": "± 264791.1642397784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3884349.8421052634,
            "unit": "ns",
            "range": "± 537104.9526899077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749587.244680851,
            "unit": "ns",
            "range": "± 471502.9703459257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4415744.948453608,
            "unit": "ns",
            "range": "± 316200.2037570294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19466689.22,
            "unit": "ns",
            "range": "± 2349822.5243224646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001263.418308424,
            "unit": "ns",
            "range": "± 289542.1958303441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1780186.0918996711,
            "unit": "ns",
            "range": "± 38983.3089763563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053684.2299479167,
            "unit": "ns",
            "range": "± 17239.229690019747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2525529.908653846,
            "unit": "ns",
            "range": "± 88085.66225931955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907821.4302394701,
            "unit": "ns",
            "range": "± 22252.6624490308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828935.58828125,
            "unit": "ns",
            "range": "± 5326.25443768748"
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
          "id": "afa25e4a5cf588c43c32aa4bb319e908ab6151bd",
          "message": "Tuned cache size and report period",
          "timestamp": "2023-11-14T18:16:02+09:00",
          "tree_id": "437d32b40becebf2b160befc86a6c16a4ecca2d2",
          "url": "https://github.com/greymistcube/libplanet/commit/afa25e4a5cf588c43c32aa4bb319e908ab6151bd"
        },
        "date": 1699954220473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8179714.583333333,
            "unit": "ns",
            "range": "± 90720.5132305291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19891078.545454547,
            "unit": "ns",
            "range": "± 732134.2430913234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49079472.166666664,
            "unit": "ns",
            "range": "± 1274932.6561381728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101461886.375,
            "unit": "ns",
            "range": "± 4659913.845823452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208199977.09375,
            "unit": "ns",
            "range": "± 6472454.377493264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50131.717391304344,
            "unit": "ns",
            "range": "± 12079.202665289822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224830.86315789472,
            "unit": "ns",
            "range": "± 21484.29447175681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216254.42105263157,
            "unit": "ns",
            "range": "± 17664.135043700986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200388.2052631579,
            "unit": "ns",
            "range": "± 17523.112460267577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3701758.8684210526,
            "unit": "ns",
            "range": "± 81831.66040938388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3431881.864864865,
            "unit": "ns",
            "range": "± 114946.23242754322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13772.621052631579,
            "unit": "ns",
            "range": "± 1958.5892077356227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80759.30645161291,
            "unit": "ns",
            "range": "± 13594.412510498942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85904.25,
            "unit": "ns",
            "range": "± 8094.5351271884265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74930.64736842105,
            "unit": "ns",
            "range": "± 15047.208574073418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4274.716494845361,
            "unit": "ns",
            "range": "± 1334.4881370991725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16030.065656565657,
            "unit": "ns",
            "range": "± 3530.4114813698543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1108831.0353535353,
            "unit": "ns",
            "range": "± 144837.92324485994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481405.125,
            "unit": "ns",
            "range": "± 236008.08847751762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1882817.8333333333,
            "unit": "ns",
            "range": "± 126739.4768694856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8385987.255319149,
            "unit": "ns",
            "range": "± 693153.8789874808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2986952.794117647,
            "unit": "ns",
            "range": "± 95672.21595272481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3157774.476744186,
            "unit": "ns",
            "range": "± 189090.14286002057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3598461.088235294,
            "unit": "ns",
            "range": "± 97977.25963290563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3688291.569892473,
            "unit": "ns",
            "range": "± 210608.32960881997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13772443.744444445,
            "unit": "ns",
            "range": "± 1947527.7727141131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4244440.25,
            "unit": "ns",
            "range": "± 12220.639861264632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1329328.3279747595,
            "unit": "ns",
            "range": "± 9658.218757554061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 843261.9081380208,
            "unit": "ns",
            "range": "± 5254.713812090091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2042857.0537860577,
            "unit": "ns",
            "range": "± 26140.698729082982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 659794.182421875,
            "unit": "ns",
            "range": "± 4062.1691464027854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571583.1427283654,
            "unit": "ns",
            "range": "± 4446.242656435766"
          }
        ]
      }
    ]
  }
}