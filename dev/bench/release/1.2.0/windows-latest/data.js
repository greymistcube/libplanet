window.BENCHMARK_DATA = {
  "lastUpdate": 1684212159500,
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
          "id": "67095a318905220de755f1bdc333bf41106d38a8",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:26:31+09:00",
          "tree_id": "9b93bd801f7c90769d2c2ecbc0ee7ad86ce2f3d1",
          "url": "https://github.com/greymistcube/libplanet/commit/67095a318905220de755f1bdc333bf41106d38a8"
        },
        "date": 1684211921038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003635,
            "unit": "ns",
            "range": "± 99917.26008871723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831307.2727272727,
            "unit": "ns",
            "range": "± 76833.5402613397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774964.6341463414,
            "unit": "ns",
            "range": "± 63626.68685769993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3854753.0864197533,
            "unit": "ns",
            "range": "± 201983.09278651254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33650.68493150685,
            "unit": "ns",
            "range": "± 1679.3784637040933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5050684.615384615,
            "unit": "ns",
            "range": "± 23415.05378148305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13052893.333333334,
            "unit": "ns",
            "range": "± 102939.37513109818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31938664.285714287,
            "unit": "ns",
            "range": "± 309687.3897910672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64398692.85714286,
            "unit": "ns",
            "range": "± 435623.35613072145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129892578.57142857,
            "unit": "ns",
            "range": "± 1038917.0161416029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3641630.078125,
            "unit": "ns",
            "range": "± 7200.792534727869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1126415.78125,
            "unit": "ns",
            "range": "± 4767.197307682501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 798766.93359375,
            "unit": "ns",
            "range": "± 1081.6488881895905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948755.7421875,
            "unit": "ns",
            "range": "± 2373.866422268002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633742.890625,
            "unit": "ns",
            "range": "± 949.2117768244015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591322.5,
            "unit": "ns",
            "range": "± 981.0030068712106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145715.3846153845,
            "unit": "ns",
            "range": "± 75084.44207221323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274631.5789473685,
            "unit": "ns",
            "range": "± 48222.148583768925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821378.5714285714,
            "unit": "ns",
            "range": "± 53780.45464280961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2956361.111111111,
            "unit": "ns",
            "range": "± 117526.22576318176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4627023.404255319,
            "unit": "ns",
            "range": "± 178308.42016349814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182623.5294117647,
            "unit": "ns",
            "range": "± 8093.725553012053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170942.3076923077,
            "unit": "ns",
            "range": "± 8612.819186866422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146683.33333333334,
            "unit": "ns",
            "range": "± 3795.955131757861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2772457.1428571427,
            "unit": "ns",
            "range": "± 33298.91345618709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557307.1428571427,
            "unit": "ns",
            "range": "± 34090.04962619567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10588.297872340425,
            "unit": "ns",
            "range": "± 1596.4918787517072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57382.291666666664,
            "unit": "ns",
            "range": "± 4858.156349278509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44725,
            "unit": "ns",
            "range": "± 2034.7509104570106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59664.10256410256,
            "unit": "ns",
            "range": "± 4401.504298900558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2724.4897959183672,
            "unit": "ns",
            "range": "± 639.7585279788049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9803.225806451614,
            "unit": "ns",
            "range": "± 1319.45736647134"
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
          "id": "cea4a5752a563ddb2b7e85eaac110aff3047349e",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:23:52+09:00",
          "tree_id": "d379f6d07130960ff174b24bd1135526adb623d0",
          "url": "https://github.com/greymistcube/libplanet/commit/cea4a5752a563ddb2b7e85eaac110aff3047349e"
        },
        "date": 1684212137752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392939.7959183673,
            "unit": "ns",
            "range": "± 126924.04396346817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542525,
            "unit": "ns",
            "range": "± 93830.3717502531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106878.723404255,
            "unit": "ns",
            "range": "± 118666.27903072524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5498810.30927835,
            "unit": "ns",
            "range": "± 318681.0338739113"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49932.63157894737,
            "unit": "ns",
            "range": "± 3510.9991941818153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7451638.235294118,
            "unit": "ns",
            "range": "± 225513.96115446894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19870060,
            "unit": "ns",
            "range": "± 267603.37068131263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49415657.14285714,
            "unit": "ns",
            "range": "± 738366.3013335961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100224406.66666667,
            "unit": "ns",
            "range": "± 1618625.8283171062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202736020,
            "unit": "ns",
            "range": "± 2348325.7276499905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4923810.807291667,
            "unit": "ns",
            "range": "± 26963.254215120873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529051.5206473214,
            "unit": "ns",
            "range": "± 5062.341927159231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180271.7317708333,
            "unit": "ns",
            "range": "± 6591.790876099562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636270.7291666665,
            "unit": "ns",
            "range": "± 11783.357300635389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829466.6276041666,
            "unit": "ns",
            "range": "± 3194.293460665545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769340.48828125,
            "unit": "ns",
            "range": "± 2837.0767081518757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3323864.705882353,
            "unit": "ns",
            "range": "± 63445.7341077443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3413276.923076923,
            "unit": "ns",
            "range": "± 138533.89564047963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220442.105263158,
            "unit": "ns",
            "range": "± 90175.66385049345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4404386.956521739,
            "unit": "ns",
            "range": "± 110769.11000466374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6790790,
            "unit": "ns",
            "range": "± 185810.6569639624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275463.8888888889,
            "unit": "ns",
            "range": "± 13536.422494858507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253935.13513513515,
            "unit": "ns",
            "range": "± 8618.55930910524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246916,
            "unit": "ns",
            "range": "± 16062.810551963901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4122635.714285714,
            "unit": "ns",
            "range": "± 68276.98798213119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3787135.714285714,
            "unit": "ns",
            "range": "± 35187.139415129786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22325.77319587629,
            "unit": "ns",
            "range": "± 2273.1346909112212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100346.875,
            "unit": "ns",
            "range": "± 6942.848696775394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88833,
            "unit": "ns",
            "range": "± 9455.77750810732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113869.07216494845,
            "unit": "ns",
            "range": "± 14487.396539929274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7263.917525773196,
            "unit": "ns",
            "range": "± 1387.457624503832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20979.347826086956,
            "unit": "ns",
            "range": "± 2729.4300835493536"
          }
        ]
      }
    ]
  }
}