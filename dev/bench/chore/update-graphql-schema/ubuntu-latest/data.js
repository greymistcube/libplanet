window.BENCHMARK_DATA = {
  "lastUpdate": 1707152018814,
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
      }
    ]
  }
}