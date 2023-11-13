window.BENCHMARK_DATA = {
  "lastUpdate": 1699883659270,
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
      }
    ]
  }
}