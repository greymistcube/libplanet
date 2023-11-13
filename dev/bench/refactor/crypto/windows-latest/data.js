window.BENCHMARK_DATA = {
  "lastUpdate": 1699884334651,
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
          "id": "d7dd743710bea5b0cd847bab5775c61b6c9911f1",
          "message": "Refactor PrivateKey, PublicKey, and Address API",
          "timestamp": "2023-11-09T11:17:10+09:00",
          "tree_id": "bda7fd877681a41b13a83512f04fc7a10aab41ad",
          "url": "https://github.com/greymistcube/libplanet/commit/d7dd743710bea5b0cd847bab5775c61b6c9911f1"
        },
        "date": 1699883637226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990616.8421052631,
            "unit": "ns",
            "range": "± 98866.59252538839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1693039.4736842106,
            "unit": "ns",
            "range": "± 52532.592403006056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1452946.9387755103,
            "unit": "ns",
            "range": "± 145223.42275371935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5442270,
            "unit": "ns",
            "range": "± 161901.02159376093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35020,
            "unit": "ns",
            "range": "± 1892.3907781277253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5028242.857142857,
            "unit": "ns",
            "range": "± 34798.53476768845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13193943.333333334,
            "unit": "ns",
            "range": "± 203302.07105496514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32840841.666666668,
            "unit": "ns",
            "range": "± 841296.924741622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67328573.33333333,
            "unit": "ns",
            "range": "± 1194066.3671832045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130604114.28571428,
            "unit": "ns",
            "range": "± 1676413.2021657443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3312847.0833333335,
            "unit": "ns",
            "range": "± 18885.812608028587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1032550.1674107143,
            "unit": "ns",
            "range": "± 2639.6690445943086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724789.7135416666,
            "unit": "ns",
            "range": "± 2200.5287518610057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2048866.328125,
            "unit": "ns",
            "range": "± 6503.033274746557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622722.6236979166,
            "unit": "ns",
            "range": "± 2764.488699268625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553792.8776041666,
            "unit": "ns",
            "range": "± 1404.4504251241626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156992.1052631577,
            "unit": "ns",
            "range": "± 74185.09131777394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319217.3913043477,
            "unit": "ns",
            "range": "± 110753.61759663513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2802788,
            "unit": "ns",
            "range": "± 74406.34112762165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2701563.698630137,
            "unit": "ns",
            "range": "± 134373.22331132262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6579576.923076923,
            "unit": "ns",
            "range": "± 269167.3206684591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176463.9344262295,
            "unit": "ns",
            "range": "± 7569.655051297147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166018.9189189189,
            "unit": "ns",
            "range": "± 5572.394151222306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139283.33333333334,
            "unit": "ns",
            "range": "± 3340.094592082382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2774957.1428571427,
            "unit": "ns",
            "range": "± 30279.663505032913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2459104.347826087,
            "unit": "ns",
            "range": "± 60971.97178928624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10416.091954022988,
            "unit": "ns",
            "range": "± 775.4778816539576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53402.63157894737,
            "unit": "ns",
            "range": "± 4821.270294895212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45050.84745762712,
            "unit": "ns",
            "range": "± 1903.1165801676318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53756.043956043955,
            "unit": "ns",
            "range": "± 9655.478684160023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2641.0526315789475,
            "unit": "ns",
            "range": "± 489.35361987580535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9773.91304347826,
            "unit": "ns",
            "range": "± 1002.509989012457"
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
          "id": "6216e5db6e1a7793d519c621258ea69263a644af",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:44:41+09:00",
          "tree_id": "8dfcfa63381c04b875930b6fc5ea593aaf97847d",
          "url": "https://github.com/greymistcube/libplanet/commit/6216e5db6e1a7793d519c621258ea69263a644af"
        },
        "date": 1699884307233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405900,
            "unit": "ns",
            "range": "± 239516.28990804183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2698797.9591836734,
            "unit": "ns",
            "range": "± 275499.14026082173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155566.326530612,
            "unit": "ns",
            "range": "± 264221.0012739365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9443450.537634408,
            "unit": "ns",
            "range": "± 1182317.3706404662"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59242.42424242424,
            "unit": "ns",
            "range": "± 12872.008001141357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7028175,
            "unit": "ns",
            "range": "± 422310.2339326038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21980541,
            "unit": "ns",
            "range": "± 2112598.3873135466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58341647,
            "unit": "ns",
            "range": "± 6902837.360165746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95953361.1111111,
            "unit": "ns",
            "range": "± 8981900.891155992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193247924.17582417,
            "unit": "ns",
            "range": "± 10735371.742105015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5012968.136160715,
            "unit": "ns",
            "range": "± 72840.13118654804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566437.3565673828,
            "unit": "ns",
            "range": "± 72232.2217787754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1112450.8213141025,
            "unit": "ns",
            "range": "± 38646.632583749015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528379.131155303,
            "unit": "ns",
            "range": "± 78413.44118652782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839176.5950520834,
            "unit": "ns",
            "range": "± 19246.438507301875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805967.041015625,
            "unit": "ns",
            "range": "± 40085.254787329955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2847216.326530612,
            "unit": "ns",
            "range": "± 277880.8443348014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3030991.489361702,
            "unit": "ns",
            "range": "± 269187.64637153817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3906781.052631579,
            "unit": "ns",
            "range": "± 432538.2153316449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4066388.775510204,
            "unit": "ns",
            "range": "± 668608.5285964331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10910581.111111112,
            "unit": "ns",
            "range": "± 1430794.2422991868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293007.44680851063,
            "unit": "ns",
            "range": "± 29294.992927383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281644.5652173913,
            "unit": "ns",
            "range": "± 30380.619777263353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226214.43298969071,
            "unit": "ns",
            "range": "± 46464.811931742865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3660140.206185567,
            "unit": "ns",
            "range": "± 333475.89013918786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3699458.2474226803,
            "unit": "ns",
            "range": "± 353043.9242237027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24987.878787878788,
            "unit": "ns",
            "range": "± 11284.821598756887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79962.5,
            "unit": "ns",
            "range": "± 15762.769259772918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85789.47368421052,
            "unit": "ns",
            "range": "± 18706.566566282767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89083.68421052632,
            "unit": "ns",
            "range": "± 22828.95516069457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4574.468085106383,
            "unit": "ns",
            "range": "± 750.0446108901299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32805.0505050505,
            "unit": "ns",
            "range": "± 9130.542753134174"
          }
        ]
      }
    ]
  }
}