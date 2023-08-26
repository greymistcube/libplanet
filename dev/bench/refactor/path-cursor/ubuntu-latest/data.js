window.BENCHMARK_DATA = {
  "lastUpdate": 1693049748467,
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
          "id": "cc132b5f96291ccfa235896df2d330a294d911e2",
          "message": "Added tests for Nibbles",
          "timestamp": "2023-08-25T10:07:07+09:00",
          "tree_id": "b06e47738ed0635ac7dc4a7169bbfe7bef373e64",
          "url": "https://github.com/greymistcube/libplanet/commit/cc132b5f96291ccfa235896df2d330a294d911e2"
        },
        "date": 1692927375851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732757.4,
            "unit": "ns",
            "range": "± 87012.92335050006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240306.3125,
            "unit": "ns",
            "range": "± 63645.41834645942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160092.6774193547,
            "unit": "ns",
            "range": "± 117046.49389109937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5625427,
            "unit": "ns",
            "range": "± 182138.96483971342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329291.6129032258,
            "unit": "ns",
            "range": "± 9310.155181941273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312821.0689655172,
            "unit": "ns",
            "range": "± 9175.368945213495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276367.55555555556,
            "unit": "ns",
            "range": "± 13549.027418854466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5222460.217391305,
            "unit": "ns",
            "range": "± 126124.7735775809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4835607.1,
            "unit": "ns",
            "range": "± 107925.33482234739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23704.757894736842,
            "unit": "ns",
            "range": "± 2142.2222043187703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97158.453125,
            "unit": "ns",
            "range": "± 4143.536653363629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83817.578125,
            "unit": "ns",
            "range": "± 3810.6160640309063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96052.78787878787,
            "unit": "ns",
            "range": "± 14722.235741559623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6547.556701030928,
            "unit": "ns",
            "range": "± 784.3683362143515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23387.90425531915,
            "unit": "ns",
            "range": "± 1667.0807339568426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56768.37234042553,
            "unit": "ns",
            "range": "± 4150.0358386431335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9444970.032258065,
            "unit": "ns",
            "range": "± 287998.01075510733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25621014.125,
            "unit": "ns",
            "range": "± 787343.1993370121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62633490.44444445,
            "unit": "ns",
            "range": "± 1688238.3544991354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126719572.11764705,
            "unit": "ns",
            "range": "± 2464820.277021706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252990569.5,
            "unit": "ns",
            "range": "± 4683165.603983115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3976875.5319148935,
            "unit": "ns",
            "range": "± 154863.220202588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4159962.5970149254,
            "unit": "ns",
            "range": "± 196326.36009508156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5109553.685714286,
            "unit": "ns",
            "range": "± 165363.79436808437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4964059.617647059,
            "unit": "ns",
            "range": "± 156347.6667229091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7628920.733333333,
            "unit": "ns",
            "range": "± 137066.52194696595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194087.397321428,
            "unit": "ns",
            "range": "± 30501.603117358627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883739.7721354167,
            "unit": "ns",
            "range": "± 6833.028957753905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266872.2279947917,
            "unit": "ns",
            "range": "± 9156.380447611597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3067531.5594308036,
            "unit": "ns",
            "range": "± 10492.896951800034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983356.7200520834,
            "unit": "ns",
            "range": "± 4142.043881681903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 966411.7064453125,
            "unit": "ns",
            "range": "± 2218.1054540830805"
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
          "id": "a2fd2a4e159333d8f0029b1d740961f3c626bdfb",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T12:44:09+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/a2fd2a4e159333d8f0029b1d740961f3c626bdfb"
        },
        "date": 1692935944550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397443.6352941177,
            "unit": "ns",
            "range": "± 75048.39452771016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652043.2916666665,
            "unit": "ns",
            "range": "± 103694.82996077467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746357.6351351351,
            "unit": "ns",
            "range": "± 86896.89378980761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4907998.521739131,
            "unit": "ns",
            "range": "± 274700.6698037846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270478.7916666667,
            "unit": "ns",
            "range": "± 10070.578284137926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255988.55319148937,
            "unit": "ns",
            "range": "± 9153.17321267546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220373.92857142858,
            "unit": "ns",
            "range": "± 3902.63213868411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289842.066666666,
            "unit": "ns",
            "range": "± 80147.79381106477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870488.066666667,
            "unit": "ns",
            "range": "± 49041.38858798857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19773.58510638298,
            "unit": "ns",
            "range": "± 1449.8024664083557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80467.08620689655,
            "unit": "ns",
            "range": "± 3492.261431324793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69263.54166666667,
            "unit": "ns",
            "range": "± 2574.117704316133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76072.9191919192,
            "unit": "ns",
            "range": "± 12081.466897755698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.90625,
            "unit": "ns",
            "range": "± 453.7347724717602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18345.43010752688,
            "unit": "ns",
            "range": "± 1650.7537237501508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49164.243902439026,
            "unit": "ns",
            "range": "± 2574.661994169646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8110737.466666667,
            "unit": "ns",
            "range": "± 107418.5638783876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21958562.2,
            "unit": "ns",
            "range": "± 265116.41876142967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53450618.083333336,
            "unit": "ns",
            "range": "± 267970.0710281105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111971278,
            "unit": "ns",
            "range": "± 1946585.4798869519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220442439.8,
            "unit": "ns",
            "range": "± 4079537.5460713715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397821.659090909,
            "unit": "ns",
            "range": "± 125456.0960336219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528038.785714286,
            "unit": "ns",
            "range": "± 127044.73413579915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4667148.4375,
            "unit": "ns",
            "range": "± 83669.63088079909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4187917.736842105,
            "unit": "ns",
            "range": "± 81959.0232289839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6423933.8965517245,
            "unit": "ns",
            "range": "± 176235.10533929727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4973318.704799107,
            "unit": "ns",
            "range": "± 34170.26641722266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562697.8375,
            "unit": "ns",
            "range": "± 5988.697535524224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068963.412890625,
            "unit": "ns",
            "range": "± 5379.589177800113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664787.2195870536,
            "unit": "ns",
            "range": "± 10718.495067904529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828008.4104166667,
            "unit": "ns",
            "range": "± 747.0984426990545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754143.0337890625,
            "unit": "ns",
            "range": "± 630.5543587954513"
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
          "id": "6acc2e881bbc5f01c32244539464172d961227b4",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-26T17:32:19+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/6acc2e881bbc5f01c32244539464172d961227b4"
        },
        "date": 1693039813516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671444.7790697673,
            "unit": "ns",
            "range": "± 90419.60145577508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3291583.04,
            "unit": "ns",
            "range": "± 212126.10406043136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2084417.5252525252,
            "unit": "ns",
            "range": "± 141046.48373174228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5693919.45,
            "unit": "ns",
            "range": "± 376377.2037715843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315589.7866666667,
            "unit": "ns",
            "range": "± 15963.313367110744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306561.6666666667,
            "unit": "ns",
            "range": "± 16894.725848190235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265296.88,
            "unit": "ns",
            "range": "± 20886.227665776973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4933327.05,
            "unit": "ns",
            "range": "± 220410.77713349383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4768136.833333333,
            "unit": "ns",
            "range": "± 158630.356110136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22697.333333333332,
            "unit": "ns",
            "range": "± 1640.913600898608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96677.92391304347,
            "unit": "ns",
            "range": "± 7056.417794677995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82677.39784946236,
            "unit": "ns",
            "range": "± 5650.8281254200965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94912.27551020408,
            "unit": "ns",
            "range": "± 13842.623490830003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6389.061855670103,
            "unit": "ns",
            "range": "± 649.8319785149752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23175.94680851064,
            "unit": "ns",
            "range": "± 1636.1292004548732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56464.913978494624,
            "unit": "ns",
            "range": "± 3511.407430745368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9475146.1875,
            "unit": "ns",
            "range": "± 178223.30001292154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26738717.466666665,
            "unit": "ns",
            "range": "± 338003.64342855976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65121052.6,
            "unit": "ns",
            "range": "± 1449746.1868304433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126965474,
            "unit": "ns",
            "range": "± 4944126.646797248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248895007.67857143,
            "unit": "ns",
            "range": "± 6889012.17680915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3874131.9545454546,
            "unit": "ns",
            "range": "± 213327.631011087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4062739.39,
            "unit": "ns",
            "range": "± 279135.96284157445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4959770.438202247,
            "unit": "ns",
            "range": "± 274784.3237467405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4466471.323232323,
            "unit": "ns",
            "range": "± 263708.7059503279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7367887.573170732,
            "unit": "ns",
            "range": "± 390640.57963046466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876724.9515625,
            "unit": "ns",
            "range": "± 71989.75949259356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862581.4513020834,
            "unit": "ns",
            "range": "± 27184.0573614824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231292.8744140626,
            "unit": "ns",
            "range": "± 17979.483486790734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3007722.248177083,
            "unit": "ns",
            "range": "± 40072.43503919942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 958954.6724283855,
            "unit": "ns",
            "range": "± 6707.8279185225965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 871689.6982421875,
            "unit": "ns",
            "range": "± 8861.77203173477"
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
          "id": "091c8cade02e5b9a1fbbe8e0fc3b6c27795c479a",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-26T19:52:29+09:00",
          "tree_id": "12b9d5c5cc927c8a7ea5781b4c5a7245697a1363",
          "url": "https://github.com/greymistcube/libplanet/commit/091c8cade02e5b9a1fbbe8e0fc3b6c27795c479a"
        },
        "date": 1693049739628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695264.6914893617,
            "unit": "ns",
            "range": "± 110019.22331257227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3280589.4693877553,
            "unit": "ns",
            "range": "± 127292.99998708721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119980.584269663,
            "unit": "ns",
            "range": "± 116305.66646740594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5436673.703703703,
            "unit": "ns",
            "range": "± 150771.15675236855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319963.5263157895,
            "unit": "ns",
            "range": "± 13833.815227686082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310114.8947368421,
            "unit": "ns",
            "range": "± 17758.995916049098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266719.0909090909,
            "unit": "ns",
            "range": "± 4480.6132967654685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5175652.705882353,
            "unit": "ns",
            "range": "± 103574.41015205247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4865821.777777778,
            "unit": "ns",
            "range": "± 101406.45452166047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22922.139784946237,
            "unit": "ns",
            "range": "± 1861.6644760944782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98595.7741935484,
            "unit": "ns",
            "range": "± 5621.729391444517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85551.41052631578,
            "unit": "ns",
            "range": "± 5624.310197883441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95577.29591836735,
            "unit": "ns",
            "range": "± 14056.340112744067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6386.1752577319585,
            "unit": "ns",
            "range": "± 789.1656988331264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22542.042553191488,
            "unit": "ns",
            "range": "± 1615.1797257756957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55584.413043478264,
            "unit": "ns",
            "range": "± 3974.946991566311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9843196.933333334,
            "unit": "ns",
            "range": "± 162120.8907775159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26543346.35714286,
            "unit": "ns",
            "range": "± 266184.1266707653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67126538.35714285,
            "unit": "ns",
            "range": "± 892598.8689299446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132566164.53333333,
            "unit": "ns",
            "range": "± 2138816.660219346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260363968.23076922,
            "unit": "ns",
            "range": "± 6926411.121089381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4158509.777777778,
            "unit": "ns",
            "range": "± 174312.92189315974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4366150.869565218,
            "unit": "ns",
            "range": "± 167287.0501416464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5100079.58974359,
            "unit": "ns",
            "range": "± 174599.5643795009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635793.256756756,
            "unit": "ns",
            "range": "± 231422.66761414174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7288211.2558139535,
            "unit": "ns",
            "range": "± 268817.64979487954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950492.390066965,
            "unit": "ns",
            "range": "± 36343.18455958901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920552.7424479167,
            "unit": "ns",
            "range": "± 4133.299362866014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289893.758203125,
            "unit": "ns",
            "range": "± 4415.3234630022735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078434.683723958,
            "unit": "ns",
            "range": "± 16357.804388894901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015517.8295572917,
            "unit": "ns",
            "range": "± 3821.574652211585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902214.4150390625,
            "unit": "ns",
            "range": "± 3586.0915512621777"
          }
        ]
      }
    ]
  }
}