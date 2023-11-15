window.BENCHMARK_DATA = {
  "lastUpdate": 1700007863382,
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
          "id": "dc9ce15013e30eaa5d96943193a5b49c9b74c1ed",
          "message": "Tuned cache size and report period",
          "timestamp": "2023-11-14T18:14:55+09:00",
          "tree_id": "979f040ca4b75b7084ff6b3fcaa50dac3556c19b",
          "url": "https://github.com/greymistcube/libplanet/commit/dc9ce15013e30eaa5d96943193a5b49c9b74c1ed"
        },
        "date": 1699954292899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9055328.224489795,
            "unit": "ns",
            "range": "± 600570.7504779431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21822643.58163265,
            "unit": "ns",
            "range": "± 1263155.4685669113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55312863.5,
            "unit": "ns",
            "range": "± 1933408.6505724466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108474992.22727273,
            "unit": "ns",
            "range": "± 2620088.669552874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219591193.4375,
            "unit": "ns",
            "range": "± 4126762.9997362974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77622.88372093023,
            "unit": "ns",
            "range": "± 6817.813312403816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331095.26923076925,
            "unit": "ns",
            "range": "± 17107.949374010794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312574.25294117647,
            "unit": "ns",
            "range": "± 17705.937075231144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305824.125,
            "unit": "ns",
            "range": "± 8675.758019313207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4053999.1,
            "unit": "ns",
            "range": "± 46116.82013074437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3746352.3235294116,
            "unit": "ns",
            "range": "± 74211.59537029514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23172.897959183672,
            "unit": "ns",
            "range": "± 3931.899080753842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101583.70430107527,
            "unit": "ns",
            "range": "± 9371.195049956497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108939.73684210527,
            "unit": "ns",
            "range": "± 6641.821334752776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114802.17204301075,
            "unit": "ns",
            "range": "± 13747.2797140124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7437.572916666667,
            "unit": "ns",
            "range": "± 1881.5491783146854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23157.20224719101,
            "unit": "ns",
            "range": "± 5655.964079021074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436196.88,
            "unit": "ns",
            "range": "± 135080.49817167796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2739803.306451613,
            "unit": "ns",
            "range": "± 118571.1431329536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2234781.75,
            "unit": "ns",
            "range": "± 130029.03775922312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10589143.757575758,
            "unit": "ns",
            "range": "± 326403.7730244005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3499774.5,
            "unit": "ns",
            "range": "± 313852.31175379286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3723396.3571428573,
            "unit": "ns",
            "range": "± 328224.8638555508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4698777.907216495,
            "unit": "ns",
            "range": "± 337244.74900242715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668128.489361702,
            "unit": "ns",
            "range": "± 379649.09729350614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18604522.265306123,
            "unit": "ns",
            "range": "± 2480919.7261224557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910035.725643382,
            "unit": "ns",
            "range": "± 238064.58288619106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1716945.3186848958,
            "unit": "ns",
            "range": "± 35488.72054532109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1011153.5651041666,
            "unit": "ns",
            "range": "± 7555.113070173944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2480827.3046875,
            "unit": "ns",
            "range": "± 37809.22175397616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860668.7365722656,
            "unit": "ns",
            "range": "± 16178.383897125295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780962.4954876078,
            "unit": "ns",
            "range": "± 22088.343010719316"
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
          "id": "1c0f1225d6bdfa95a7a6f6f750da372b430b5b65",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-14T21:18:03+09:00",
          "tree_id": "b8d1e1f389a6ba89e36642eb75b042f5045a6623",
          "url": "https://github.com/greymistcube/libplanet/commit/1c0f1225d6bdfa95a7a6f6f750da372b430b5b65"
        },
        "date": 1699966833442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13248998.193877552,
            "unit": "ns",
            "range": "± 2311048.422323445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32221207.18131868,
            "unit": "ns",
            "range": "± 3412518.9447960155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76663720.12365592,
            "unit": "ns",
            "range": "± 9998813.621425956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 154295931.00574714,
            "unit": "ns",
            "range": "± 22286771.921708602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288855358.5280899,
            "unit": "ns",
            "range": "± 37249145.13645599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69257.69767441861,
            "unit": "ns",
            "range": "± 12633.240839681885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 504460.2291666667,
            "unit": "ns",
            "range": "± 142947.80173413167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 432035.63483146066,
            "unit": "ns",
            "range": "± 124901.6353697973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 389385.9183673469,
            "unit": "ns",
            "range": "± 92776.1448156758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7073205.072916667,
            "unit": "ns",
            "range": "± 1568967.1926883033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6664488.979166667,
            "unit": "ns",
            "range": "± 1369159.7502534094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32310.97474747475,
            "unit": "ns",
            "range": "± 5908.221016383649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 147035.0306122449,
            "unit": "ns",
            "range": "± 29422.161591398974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129845.37878787878,
            "unit": "ns",
            "range": "± 25349.602047060645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121452.89361702128,
            "unit": "ns",
            "range": "± 28948.66205915988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9704.478947368421,
            "unit": "ns",
            "range": "± 1468.164326263846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27083.456521739132,
            "unit": "ns",
            "range": "± 6360.032483870745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2400279.8444444444,
            "unit": "ns",
            "range": "± 526394.488494462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4440888.638297873,
            "unit": "ns",
            "range": "± 1127810.0111029777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3055829.404040404,
            "unit": "ns",
            "range": "± 729183.5439206314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14160799.731578948,
            "unit": "ns",
            "range": "± 3024745.8339572344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4126760.11627907,
            "unit": "ns",
            "range": "± 517571.687253976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3974219.7,
            "unit": "ns",
            "range": "± 117466.54874718317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6237318.69072165,
            "unit": "ns",
            "range": "± 1318936.60180215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6901753.784946237,
            "unit": "ns",
            "range": "± 1556562.266364253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23793149.031914894,
            "unit": "ns",
            "range": "± 4271428.121023742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6315953.681618679,
            "unit": "ns",
            "range": "± 729231.9595632942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1931193.317841199,
            "unit": "ns",
            "range": "± 289126.29167871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140603.510913086,
            "unit": "ns",
            "range": "± 39902.84288936162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2775756.595381181,
            "unit": "ns",
            "range": "± 172737.88642621314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898933.3702326949,
            "unit": "ns",
            "range": "± 63523.48123678158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753104.2429394531,
            "unit": "ns",
            "range": "± 156996.20663620174"
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
          "id": "9bf13c32dc2e2202d8309242096cdee0f16fc264",
          "message": "Reduce cache capacity",
          "timestamp": "2023-11-15T09:10:30+09:00",
          "tree_id": "80701eb04440b820d5a7ec0634874e8de51b709b",
          "url": "https://github.com/greymistcube/libplanet/commit/9bf13c32dc2e2202d8309242096cdee0f16fc264"
        },
        "date": 1700007850111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591787.769230769,
            "unit": "ns",
            "range": "± 62146.149068350496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18684834.966666665,
            "unit": "ns",
            "range": "± 274392.80558505555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46007775.307692304,
            "unit": "ns",
            "range": "± 733080.3787458991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92671222,
            "unit": "ns",
            "range": "± 2463633.82602308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192965776.96666667,
            "unit": "ns",
            "range": "± 2930733.3476339495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33830.03658536585,
            "unit": "ns",
            "range": "± 1804.5285229120132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224559.50537634408,
            "unit": "ns",
            "range": "± 22793.714303091303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215084.21649484537,
            "unit": "ns",
            "range": "± 20232.941700575615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198605.46808510637,
            "unit": "ns",
            "range": "± 23075.933809878534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3783818.4166666665,
            "unit": "ns",
            "range": "± 96356.6444314024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3561462.285714286,
            "unit": "ns",
            "range": "± 60043.633783375306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16749.23033707865,
            "unit": "ns",
            "range": "± 3344.6848668108855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89076.28260869565,
            "unit": "ns",
            "range": "± 10242.161330571418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81905.26530612246,
            "unit": "ns",
            "range": "± 21512.513470670838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59075.142105263156,
            "unit": "ns",
            "range": "± 9881.771369671716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4234.093406593406,
            "unit": "ns",
            "range": "± 761.2102203147298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12968.155913978495,
            "unit": "ns",
            "range": "± 1568.5270402419208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188332.7472527472,
            "unit": "ns",
            "range": "± 134803.32675523945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2524921.125,
            "unit": "ns",
            "range": "± 131638.08245244354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1863305.6739130435,
            "unit": "ns",
            "range": "± 199924.74950954158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8998814.78313253,
            "unit": "ns",
            "range": "± 1046480.515134152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2887955.2352941176,
            "unit": "ns",
            "range": "± 132098.30472446702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3028614.075949367,
            "unit": "ns",
            "range": "± 157173.69167423339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3607926.2441860465,
            "unit": "ns",
            "range": "± 131487.693748284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3507702.68,
            "unit": "ns",
            "range": "± 141320.6275738071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12506059.510638298,
            "unit": "ns",
            "range": "± 1422570.5625845124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4270924.789583334,
            "unit": "ns",
            "range": "± 54031.5820524017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1283268.0729166667,
            "unit": "ns",
            "range": "± 12659.215874538086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 849058.883188101,
            "unit": "ns",
            "range": "± 7064.156524881565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987507.078125,
            "unit": "ns",
            "range": "± 26512.76856825962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647700.0639322917,
            "unit": "ns",
            "range": "± 6729.725536614968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568171.3343331473,
            "unit": "ns",
            "range": "± 4510.629043601971"
          }
        ]
      }
    ]
  }
}