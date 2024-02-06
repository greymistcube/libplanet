window.BENCHMARK_DATA = {
  "lastUpdate": 1707184736083,
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
          "id": "9f60eeef9e4d848990aa140c25ac59840172a624",
          "message": "Updated graphql schema",
          "timestamp": "2024-02-06T01:36:10+09:00",
          "tree_id": "04e35806d84d3c33f6d6c16daeafa124a4123e97",
          "url": "https://github.com/greymistcube/libplanet/commit/9f60eeef9e4d848990aa140c25ac59840172a624"
        },
        "date": 1707151685632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205649.48076923078,
            "unit": "ns",
            "range": "± 8475.389459477305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195100.4255319149,
            "unit": "ns",
            "range": "± 7493.987603825515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174335.35714285713,
            "unit": "ns",
            "range": "± 5960.737942617297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219398.466666667,
            "unit": "ns",
            "range": "± 30348.560062020984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2784208.785714286,
            "unit": "ns",
            "range": "± 25473.46831940598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13777.455555555556,
            "unit": "ns",
            "range": "± 1986.9765025278994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65135.22826086957,
            "unit": "ns",
            "range": "± 5848.732288871227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59561.70212765958,
            "unit": "ns",
            "range": "± 6475.209148994435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67087.58510638298,
            "unit": "ns",
            "range": "± 9298.685825068194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3672.7555555555555,
            "unit": "ns",
            "range": "± 644.6962582629334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16190.79347826087,
            "unit": "ns",
            "range": "± 1219.2078633370659"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42863.95698924731,
            "unit": "ns",
            "range": "± 4560.492536124031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2430151.8488372094,
            "unit": "ns",
            "range": "± 89152.85315544516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2603650.375,
            "unit": "ns",
            "range": "± 67011.09982896896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170522.45,
            "unit": "ns",
            "range": "± 59210.44695293044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3271154.342857143,
            "unit": "ns",
            "range": "± 99340.81821183393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13890782.590909092,
            "unit": "ns",
            "range": "± 1179469.1101305797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979071.6391752578,
            "unit": "ns",
            "range": "± 92583.89208309329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925655.9615384615,
            "unit": "ns",
            "range": "± 98466.7683022126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1689002.551020408,
            "unit": "ns",
            "range": "± 187293.5362447799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12862065.838709677,
            "unit": "ns",
            "range": "± 1052110.389176133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5516530.346153846,
            "unit": "ns",
            "range": "± 37283.49140447676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464334.807692308,
            "unit": "ns",
            "range": "± 106239.91658143736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37426598.8,
            "unit": "ns",
            "range": "± 345755.50636937487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75067684.71428572,
            "unit": "ns",
            "range": "± 478524.28611906234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148680918.7857143,
            "unit": "ns",
            "range": "± 430862.82385914156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3704384.021935096,
            "unit": "ns",
            "range": "± 19052.917938571158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184247.389811198,
            "unit": "ns",
            "range": "± 2014.5841116648362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755257.7786458334,
            "unit": "ns",
            "range": "± 2270.2965737013055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910925.3575846355,
            "unit": "ns",
            "range": "± 4050.735758123323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622733.5415736607,
            "unit": "ns",
            "range": "± 3393.1660226158633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587536.697265625,
            "unit": "ns",
            "range": "± 1150.6767802452673"
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
          "id": "09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e",
          "message": "Changelog",
          "timestamp": "2024-02-06T01:41:57+09:00",
          "tree_id": "93d7af9b7f4b535356bfb463ce92adf87db6d382",
          "url": "https://github.com/greymistcube/libplanet/commit/09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e"
        },
        "date": 1707152012364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202064.77192982455,
            "unit": "ns",
            "range": "± 8791.607719088748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195368.6,
            "unit": "ns",
            "range": "± 7961.821442656559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170898.36363636365,
            "unit": "ns",
            "range": "± 6423.9106907216465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3206900.6923076925,
            "unit": "ns",
            "range": "± 23590.665591799283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857230.0625,
            "unit": "ns",
            "range": "± 54584.003906478865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15645.15625,
            "unit": "ns",
            "range": "± 2249.2498460744173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68249.60204081633,
            "unit": "ns",
            "range": "± 9454.291857707665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54366.1935483871,
            "unit": "ns",
            "range": "± 5273.099950936509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70993.89361702128,
            "unit": "ns",
            "range": "± 7709.2186381024585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2977.2526881720432,
            "unit": "ns",
            "range": "± 376.29661796750463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14623.59595959596,
            "unit": "ns",
            "range": "± 2081.754842156168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40909.270833333336,
            "unit": "ns",
            "range": "± 5244.0322562723195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465528.8,
            "unit": "ns",
            "range": "± 78051.07533185449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535316.3225806453,
            "unit": "ns",
            "range": "± 75061.568484539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126036.7,
            "unit": "ns",
            "range": "± 52255.89975468251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3193877.9583333335,
            "unit": "ns",
            "range": "± 156973.8154037376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13835369.945652174,
            "unit": "ns",
            "range": "± 1063001.9685602332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977048.7234042553,
            "unit": "ns",
            "range": "± 70973.40404325545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1873291.4512195121,
            "unit": "ns",
            "range": "± 66602.02922695044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604762.2150537635,
            "unit": "ns",
            "range": "± 145483.55740851216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12929270.152173912,
            "unit": "ns",
            "range": "± 1145328.5640599972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615087.066666666,
            "unit": "ns",
            "range": "± 24526.057986402564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464322.23076923,
            "unit": "ns",
            "range": "± 95906.64109621904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36957813.25,
            "unit": "ns",
            "range": "± 270529.1495156466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74935152.07692307,
            "unit": "ns",
            "range": "± 399601.56912176526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149012614.53846154,
            "unit": "ns",
            "range": "± 642864.1113375121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3716378.990985577,
            "unit": "ns",
            "range": "± 9840.608623664777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210198.5270432692,
            "unit": "ns",
            "range": "± 7967.114110194974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781352.170061384,
            "unit": "ns",
            "range": "± 8357.217175363057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964124.9986979167,
            "unit": "ns",
            "range": "± 3446.9980194150226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610945.9390024039,
            "unit": "ns",
            "range": "± 6696.875376457488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563552.8673502604,
            "unit": "ns",
            "range": "± 649.5691107494429"
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
          "id": "760f5dd2116e520dc240acf0d5e8874848263403",
          "message": "Changelog",
          "timestamp": "2024-02-06T10:24:44+09:00",
          "tree_id": "f0e5de52ed83706efda65e4dad0641b337fb76e0",
          "url": "https://github.com/greymistcube/libplanet/commit/760f5dd2116e520dc240acf0d5e8874848263403"
        },
        "date": 1707183342095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195459.36363636365,
            "unit": "ns",
            "range": "± 7295.969553469817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195244.01219512196,
            "unit": "ns",
            "range": "± 6510.924063149375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167064.65217391305,
            "unit": "ns",
            "range": "± 4148.23907447152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3208224.8076923075,
            "unit": "ns",
            "range": "± 25158.19160957525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805869.5,
            "unit": "ns",
            "range": "± 31654.47190103372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13182.938144329897,
            "unit": "ns",
            "range": "± 1571.52498796573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63260.010309278354,
            "unit": "ns",
            "range": "± 7686.98747139016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52873.44366197183,
            "unit": "ns",
            "range": "± 2462.907050547752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63334.77659574468,
            "unit": "ns",
            "range": "± 10789.22545592598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3163.2526315789473,
            "unit": "ns",
            "range": "± 421.8768845422634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12827.755102040815,
            "unit": "ns",
            "range": "± 2014.2640430894305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39343.9375,
            "unit": "ns",
            "range": "± 4725.728969247969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2356712.066666667,
            "unit": "ns",
            "range": "± 71090.50623657653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2509417.0217391304,
            "unit": "ns",
            "range": "± 54885.88117992854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120537.238095238,
            "unit": "ns",
            "range": "± 65398.30953159627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3176588.8125,
            "unit": "ns",
            "range": "± 146249.70185191426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13794363.086956521,
            "unit": "ns",
            "range": "± 869734.2304133588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991966.8541666666,
            "unit": "ns",
            "range": "± 105026.78584276831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1842291.1363636365,
            "unit": "ns",
            "range": "± 69083.60308320432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590594.5326086956,
            "unit": "ns",
            "range": "± 126150.51844718447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12689857.747252747,
            "unit": "ns",
            "range": "± 859353.8599588338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5692812.785714285,
            "unit": "ns",
            "range": "± 27734.04221468508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14141572.6,
            "unit": "ns",
            "range": "± 88283.34122245261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36316221.961538464,
            "unit": "ns",
            "range": "± 234043.32427943597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74997152.41666667,
            "unit": "ns",
            "range": "± 268663.30302323774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149004912.92307693,
            "unit": "ns",
            "range": "± 1131169.435800731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662016.744591346,
            "unit": "ns",
            "range": "± 10964.00599483948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205538.919170673,
            "unit": "ns",
            "range": "± 1962.5533480342772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759078.1133510044,
            "unit": "ns",
            "range": "± 2302.1650254873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980073.6240234375,
            "unit": "ns",
            "range": "± 8305.115471529876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617638.9250300481,
            "unit": "ns",
            "range": "± 934.1226199097903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592530.7620442709,
            "unit": "ns",
            "range": "± 3444.3038520285463"
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
          "id": "ffc833d3ca61e68bd3a00d678337f4bc9ae4239c",
          "message": "Changelog",
          "timestamp": "2024-02-06T10:47:37+09:00",
          "tree_id": "73ebd0ce727580667e70013cc894375f97c0ab4d",
          "url": "https://github.com/greymistcube/libplanet/commit/ffc833d3ca61e68bd3a00d678337f4bc9ae4239c"
        },
        "date": 1707184729874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225999.83333333334,
            "unit": "ns",
            "range": "± 16649.89718237544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234307.92682926828,
            "unit": "ns",
            "range": "± 6376.901604189309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168629.75609756098,
            "unit": "ns",
            "range": "± 5971.275658435506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3209873.4615384615,
            "unit": "ns",
            "range": "± 36550.32465112402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2884159.653846154,
            "unit": "ns",
            "range": "± 39884.084442389954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16125.666666666666,
            "unit": "ns",
            "range": "± 3885.9089630854405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66383.85227272728,
            "unit": "ns",
            "range": "± 4974.2600709842145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58365.42268041237,
            "unit": "ns",
            "range": "± 5932.930643231633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64708.37234042553,
            "unit": "ns",
            "range": "± 6270.162068499363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2817.6989247311826,
            "unit": "ns",
            "range": "± 423.3290370217802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11773.151515151516,
            "unit": "ns",
            "range": "± 566.8364705823757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40498.857894736844,
            "unit": "ns",
            "range": "± 6030.048311291226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2522731.3157894737,
            "unit": "ns",
            "range": "± 49322.80246955046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2607006.1333333333,
            "unit": "ns",
            "range": "± 37601.229867550624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3228210.533333333,
            "unit": "ns",
            "range": "± 49981.212564417874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3275791.787878788,
            "unit": "ns",
            "range": "± 142978.35120222977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13879387.626436781,
            "unit": "ns",
            "range": "± 883299.7279963959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960689.8260869565,
            "unit": "ns",
            "range": "± 71831.36674697658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839753.3823529412,
            "unit": "ns",
            "range": "± 57634.08623060884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552805.3870967743,
            "unit": "ns",
            "range": "± 140085.7434703934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12736775.117977528,
            "unit": "ns",
            "range": "± 790334.6073954937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5655071,
            "unit": "ns",
            "range": "± 41568.659593840304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14613263.233333332,
            "unit": "ns",
            "range": "± 81301.92747975787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36517103.86666667,
            "unit": "ns",
            "range": "± 126466.45316777923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75586606,
            "unit": "ns",
            "range": "± 1055937.3408023387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151377921.66666666,
            "unit": "ns",
            "range": "± 543076.4829134998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3732017.168229167,
            "unit": "ns",
            "range": "± 41938.440036244014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199913.7298177083,
            "unit": "ns",
            "range": "± 4440.532224009673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758036.0970865885,
            "unit": "ns",
            "range": "± 2343.828235176636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936157.3052884615,
            "unit": "ns",
            "range": "± 4097.304069648308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617838.9107055664,
            "unit": "ns",
            "range": "± 12124.282486577731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576241.7019981971,
            "unit": "ns",
            "range": "± 1044.2326283805553"
          }
        ]
      }
    ]
  }
}