window.BENCHMARK_DATA = {
  "lastUpdate": 1680662773228,
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
          "id": "f49dfaa339aaffdb66c83f210d97837dce3c2835",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:17:13+09:00",
          "tree_id": "219fa0924074c1e940bb2bcfe5a9724834bf7855",
          "url": "https://github.com/greymistcube/libplanet/commit/f49dfaa339aaffdb66c83f210d97837dce3c2835"
        },
        "date": 1680661881955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1270234.3434343433,
            "unit": "ns",
            "range": "± 93187.75775952652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2349754.285714286,
            "unit": "ns",
            "range": "± 75470.44354407555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033092.6315789474,
            "unit": "ns",
            "range": "± 124081.89149183941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5012178.787878788,
            "unit": "ns",
            "range": "± 139229.39649544144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42967.74193548387,
            "unit": "ns",
            "range": "± 1943.7604414182376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6764960,
            "unit": "ns",
            "range": "± 21425.912215952772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17044183.333333332,
            "unit": "ns",
            "range": "± 83454.16763252807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43368133.333333336,
            "unit": "ns",
            "range": "± 214873.0810324573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87746420,
            "unit": "ns",
            "range": "± 916129.0677940215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 173082050,
            "unit": "ns",
            "range": "± 445772.94970905053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4825316.953125,
            "unit": "ns",
            "range": "± 13620.948907035412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500952.5669642857,
            "unit": "ns",
            "range": "± 3379.8116864143585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147771.7317708333,
            "unit": "ns",
            "range": "± 2370.4382357160334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577083.1640625,
            "unit": "ns",
            "range": "± 5918.034352535964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803407.71484375,
            "unit": "ns",
            "range": "± 2446.753909979777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731484.7786458334,
            "unit": "ns",
            "range": "± 1132.2843132393573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2932426.6666666665,
            "unit": "ns",
            "range": "± 42620.27462984969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3013986.6666666665,
            "unit": "ns",
            "range": "± 37507.272945517165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3799262.5,
            "unit": "ns",
            "range": "± 73238.80460520912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3843891.208791209,
            "unit": "ns",
            "range": "± 213280.51150661323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6888250,
            "unit": "ns",
            "range": "± 181021.6052822076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285659.375,
            "unit": "ns",
            "range": "± 8876.440705416457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230650,
            "unit": "ns",
            "range": "± 8075.128005653675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207510.3448275862,
            "unit": "ns",
            "range": "± 6045.916262095917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5171960,
            "unit": "ns",
            "range": "± 52763.68881288397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530953.846153846,
            "unit": "ns",
            "range": "± 23264.65901263887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15616.842105263158,
            "unit": "ns",
            "range": "± 1289.3716622117418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74606.25,
            "unit": "ns",
            "range": "± 3374.1138077044425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65801.78571428571,
            "unit": "ns",
            "range": "± 2816.1541197125607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143657.57575757575,
            "unit": "ns",
            "range": "± 14626.8629785642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4395.876288659794,
            "unit": "ns",
            "range": "± 480.65006453352566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14352.083333333334,
            "unit": "ns",
            "range": "± 1397.665660394364"
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
          "id": "fb76686b4182016bc58f8f9c7ddcaad65f667177",
          "message": "Merge tag '0.53.3' into port/0.53.4-to-main",
          "timestamp": "2023-04-05T11:13:46+09:00",
          "tree_id": "59bc08dfe2b68ab052100fa319209ce2d4dc57b2",
          "url": "https://github.com/greymistcube/libplanet/commit/fb76686b4182016bc58f8f9c7ddcaad65f667177"
        },
        "date": 1680662137767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598329.5918367347,
            "unit": "ns",
            "range": "± 220709.71148583738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2979555.2083333335,
            "unit": "ns",
            "range": "± 225769.66877995097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2567491.836734694,
            "unit": "ns",
            "range": "± 230839.32184529063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6666973,
            "unit": "ns",
            "range": "± 600627.1770651848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59069.791666666664,
            "unit": "ns",
            "range": "± 9629.604788213948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8248409.47368421,
            "unit": "ns",
            "range": "± 678988.1476848683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21532212.63157895,
            "unit": "ns",
            "range": "± 1763529.060094047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56597741.2371134,
            "unit": "ns",
            "range": "± 5035318.879027437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117931157.57575758,
            "unit": "ns",
            "range": "± 8806954.392457979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241361403.19148937,
            "unit": "ns",
            "range": "± 13707804.145433346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5974314.527027027,
            "unit": "ns",
            "range": "± 201169.30945273288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825284.1160973837,
            "unit": "ns",
            "range": "± 67304.83156469931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353509.3880208333,
            "unit": "ns",
            "range": "± 51008.742555859986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3055215.9405048075,
            "unit": "ns",
            "range": "± 82160.50974293245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986032.1380208334,
            "unit": "ns",
            "range": "± 49514.101131427815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891116.1223234953,
            "unit": "ns",
            "range": "± 24802.038269111024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3568200,
            "unit": "ns",
            "range": "± 314396.75046194566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3816541.237113402,
            "unit": "ns",
            "range": "± 290521.9339656134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531496.9387755105,
            "unit": "ns",
            "range": "± 386463.596785023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4612739.175257732,
            "unit": "ns",
            "range": "± 394184.3433906435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8851648.936170213,
            "unit": "ns",
            "range": "± 573172.608831742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365118.94736842107,
            "unit": "ns",
            "range": "± 29963.450411831865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290359.1397849462,
            "unit": "ns",
            "range": "± 30555.17901222931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243966.31578947368,
            "unit": "ns",
            "range": "± 18480.608644107557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6087885.263157895,
            "unit": "ns",
            "range": "± 359599.5162968668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4281008.24742268,
            "unit": "ns",
            "range": "± 277030.093382659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23525.77319587629,
            "unit": "ns",
            "range": "± 6361.7391219978035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97857.29166666667,
            "unit": "ns",
            "range": "± 10011.853446281792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83590.4255319149,
            "unit": "ns",
            "range": "± 13441.902620296527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 205106.31578947368,
            "unit": "ns",
            "range": "± 22751.346981523628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11456,
            "unit": "ns",
            "range": "± 6072.746204531066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24766.666666666668,
            "unit": "ns",
            "range": "± 6899.068260072721"
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
          "id": "bfdd3c8b55c312741f9b8f7e1ce2beff203cdaba",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:18:46+09:00",
          "tree_id": "a4b00b995832db5c85d18c48c8c43b22da786aeb",
          "url": "https://github.com/greymistcube/libplanet/commit/bfdd3c8b55c312741f9b8f7e1ce2beff203cdaba"
        },
        "date": 1680662192834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697209.375,
            "unit": "ns",
            "range": "± 179734.73499525848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3100374.736842105,
            "unit": "ns",
            "range": "± 177840.46638108767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2541926.0416666665,
            "unit": "ns",
            "range": "± 152790.09147040616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6660694.845360825,
            "unit": "ns",
            "range": "± 455201.825515144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53845.744680851065,
            "unit": "ns",
            "range": "± 3589.670512139532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8284058.024691358,
            "unit": "ns",
            "range": "± 406136.9756203557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22604833.333333332,
            "unit": "ns",
            "range": "± 356897.74579335883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59004737.5,
            "unit": "ns",
            "range": "± 813592.8538484918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111600921.42857143,
            "unit": "ns",
            "range": "± 1708622.3263556163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224559695.23809522,
            "unit": "ns",
            "range": "± 5072742.900884707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5593289.94140625,
            "unit": "ns",
            "range": "± 103846.58346115958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1806124.3706597222,
            "unit": "ns",
            "range": "± 38241.357670687285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407333.7660845588,
            "unit": "ns",
            "range": "± 27707.233959883913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3213095.859375,
            "unit": "ns",
            "range": "± 50374.74988479482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037097.4437040441,
            "unit": "ns",
            "range": "± 33092.26278834825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954622.316261574,
            "unit": "ns",
            "range": "± 26284.728149141192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3527658.1818181816,
            "unit": "ns",
            "range": "± 140547.86938700135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3672363.6363636362,
            "unit": "ns",
            "range": "± 141877.7791225751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4494158,
            "unit": "ns",
            "range": "± 179157.17286158292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4871919.047619048,
            "unit": "ns",
            "range": "± 176517.02224016315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8321009.090909091,
            "unit": "ns",
            "range": "± 263175.58820542746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346757.6923076923,
            "unit": "ns",
            "range": "± 17756.136815349073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299475.43859649124,
            "unit": "ns",
            "range": "± 12492.573232321365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253802.9411764706,
            "unit": "ns",
            "range": "± 12018.020928641463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6290650,
            "unit": "ns",
            "range": "± 229302.69402648736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4732277.2727272725,
            "unit": "ns",
            "range": "± 116111.60448882659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25117.021276595744,
            "unit": "ns",
            "range": "± 2458.7626181568785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108740.206185567,
            "unit": "ns",
            "range": "± 9144.16548718606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106523.4693877551,
            "unit": "ns",
            "range": "± 10207.312933568535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 214800,
            "unit": "ns",
            "range": "± 22852.98952948569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7991.578947368421,
            "unit": "ns",
            "range": "± 1116.2878411202564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23289.473684210527,
            "unit": "ns",
            "range": "± 2300.1606643334544"
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
          "id": "09ca699d803f15f61f917e0bfd5cf199d4fd0039",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:19:56+09:00",
          "tree_id": "a20713c79a422ffa1deb62d6590816c2570af5a4",
          "url": "https://github.com/greymistcube/libplanet/commit/09ca699d803f15f61f917e0bfd5cf199d4fd0039"
        },
        "date": 1680662260822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607688.043478261,
            "unit": "ns",
            "range": "± 165828.27861175773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007715.1515151514,
            "unit": "ns",
            "range": "± 360846.9516612148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2456115.3061224488,
            "unit": "ns",
            "range": "± 185126.60552331674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6128667.346938776,
            "unit": "ns",
            "range": "± 455942.4357262455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51063.9175257732,
            "unit": "ns",
            "range": "± 8934.369330090427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8127236.065573771,
            "unit": "ns",
            "range": "± 361364.4084267232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21932265.30612245,
            "unit": "ns",
            "range": "± 1642557.972809988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50981822.916666664,
            "unit": "ns",
            "range": "± 3175524.8809234733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108732734.375,
            "unit": "ns",
            "range": "± 6193322.164988052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194324906.06060606,
            "unit": "ns",
            "range": "± 6080268.802134666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5617182.004310345,
            "unit": "ns",
            "range": "± 162949.66275352208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1683633.701171875,
            "unit": "ns",
            "range": "± 36961.854767904086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212482.1875,
            "unit": "ns",
            "range": "± 19395.22771498571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2836643.8802083335,
            "unit": "ns",
            "range": "± 42056.67110863683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901205.2133413461,
            "unit": "ns",
            "range": "± 8843.423415314128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831100.771484375,
            "unit": "ns",
            "range": "± 14399.053519881996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3167236.0824742266,
            "unit": "ns",
            "range": "± 246933.4703693685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3349381.7204301073,
            "unit": "ns",
            "range": "± 224719.1561010033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4364900,
            "unit": "ns",
            "range": "± 346040.7617856664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4298176.842105263,
            "unit": "ns",
            "range": "± 271437.094492476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8336855.7894736845,
            "unit": "ns",
            "range": "± 625585.5732943317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345343.6170212766,
            "unit": "ns",
            "range": "± 32465.748894682998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276307.5268817204,
            "unit": "ns",
            "range": "± 26360.161131984016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247303.26086956522,
            "unit": "ns",
            "range": "± 19858.601541496988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5874809.375,
            "unit": "ns",
            "range": "± 367286.5254891895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4004188.775510204,
            "unit": "ns",
            "range": "± 270126.7815677198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20892,
            "unit": "ns",
            "range": "± 7407.34933983974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87609.09090909091,
            "unit": "ns",
            "range": "± 12011.304971746586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78502.06185567011,
            "unit": "ns",
            "range": "± 10849.807788057848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 170502.0618556701,
            "unit": "ns",
            "range": "± 24358.242014517396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11761.224489795919,
            "unit": "ns",
            "range": "± 5716.365232808169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22074.48979591837,
            "unit": "ns",
            "range": "± 5635.881204701093"
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
          "id": "aa104cbc89b7cb5a824928768eabb35e23f6840d",
          "message": "Merge fix",
          "timestamp": "2023-04-05T11:27:25+09:00",
          "tree_id": "b8e10152fa0f22ef74a635454380aa248cf9b5d6",
          "url": "https://github.com/greymistcube/libplanet/commit/aa104cbc89b7cb5a824928768eabb35e23f6840d"
        },
        "date": 1680662751941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354590.8163265307,
            "unit": "ns",
            "range": "± 121031.48698841021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2636658,
            "unit": "ns",
            "range": "± 176411.90675361015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209393.3333333335,
            "unit": "ns",
            "range": "± 123115.249559741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5730021,
            "unit": "ns",
            "range": "± 389815.92115103285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52188.14432989691,
            "unit": "ns",
            "range": "± 5151.909906751594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7063083.333333333,
            "unit": "ns",
            "range": "± 62787.43118771077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19599873.333333332,
            "unit": "ns",
            "range": "± 235304.8705302083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49677235.71428572,
            "unit": "ns",
            "range": "± 499467.8177160826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101084484.61538461,
            "unit": "ns",
            "range": "± 435750.4825894323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192174537.5,
            "unit": "ns",
            "range": "± 3599424.214486719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4865656.927083333,
            "unit": "ns",
            "range": "± 70210.78503001362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519529.8697916667,
            "unit": "ns",
            "range": "± 14407.825962103523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172211.1588541667,
            "unit": "ns",
            "range": "± 10632.215108206921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636079.9739583335,
            "unit": "ns",
            "range": "± 12541.492974549734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829598.5630580357,
            "unit": "ns",
            "range": "± 4580.668306875152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766472.9296875,
            "unit": "ns",
            "range": "± 2594.752332459216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147472.1649484537,
            "unit": "ns",
            "range": "± 190165.56368851988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3225653.1914893617,
            "unit": "ns",
            "range": "± 125042.47252531895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3993840,
            "unit": "ns",
            "range": "± 149543.9193621119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4269337.301587301,
            "unit": "ns",
            "range": "± 194690.46855413064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7491581.25,
            "unit": "ns",
            "range": "± 229443.58845314913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321929.03225806454,
            "unit": "ns",
            "range": "± 8452.69951153228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259883.72093023255,
            "unit": "ns",
            "range": "± 14080.498491051303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227398.95833333334,
            "unit": "ns",
            "range": "± 16267.076823362977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5414944,
            "unit": "ns",
            "range": "± 140950.95506357285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3640323.076923077,
            "unit": "ns",
            "range": "± 24408.985840128422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22341.41414141414,
            "unit": "ns",
            "range": "± 2871.1801634203293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97640.625,
            "unit": "ns",
            "range": "± 10968.611466361637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91988,
            "unit": "ns",
            "range": "± 13736.306533115703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183405.61797752808,
            "unit": "ns",
            "range": "± 14683.210569392772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7015.217391304348,
            "unit": "ns",
            "range": "± 1310.3925074763908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23058.163265306124,
            "unit": "ns",
            "range": "± 3927.668794416944"
          }
        ]
      }
    ]
  }
}