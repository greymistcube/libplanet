window.BENCHMARK_DATA = {
  "lastUpdate": 1700147013246,
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
          "id": "230112d213d64abb0a6d51bbb0b61790bd7cd397",
          "message": "Remove unnecessary extensions",
          "timestamp": "2023-11-16T22:21:59+09:00",
          "tree_id": "4940d84801c8aca15903cc63aa02253da0eac664",
          "url": "https://github.com/greymistcube/libplanet/commit/230112d213d64abb0a6d51bbb0b61790bd7cd397"
        },
        "date": 1700146995610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996275.5319148937,
            "unit": "ns",
            "range": "± 88886.69807007146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798730,
            "unit": "ns",
            "range": "± 71713.82256537979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1361295.8333333333,
            "unit": "ns",
            "range": "± 116757.55259390845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9042078.350515464,
            "unit": "ns",
            "range": "± 797872.6799311934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35170.11494252874,
            "unit": "ns",
            "range": "± 2712.5511437694263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5142876.923076923,
            "unit": "ns",
            "range": "± 55038.94308950942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13924826.666666666,
            "unit": "ns",
            "range": "± 98790.6839641028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34083233.333333336,
            "unit": "ns",
            "range": "± 445167.3789015714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69870653.84615384,
            "unit": "ns",
            "range": "± 622884.1179216037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138085061.53846154,
            "unit": "ns",
            "range": "± 612485.8930871545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3190975.8333333335,
            "unit": "ns",
            "range": "± 6798.905766812761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1021750.3348214285,
            "unit": "ns",
            "range": "± 1920.5813742237492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693215.3948102678,
            "unit": "ns",
            "range": "± 1019.4281391611272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919861.40625,
            "unit": "ns",
            "range": "± 2345.8805139432384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615787.8776041666,
            "unit": "ns",
            "range": "± 1874.7185264636582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565005.8072916666,
            "unit": "ns",
            "range": "± 860.4186966655601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2236180.9523809524,
            "unit": "ns",
            "range": "± 77082.08243954745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2391569.230769231,
            "unit": "ns",
            "range": "± 98656.8613406729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2917568.9655172415,
            "unit": "ns",
            "range": "± 73891.05930571165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2729333.3333333335,
            "unit": "ns",
            "range": "± 137243.4464869037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10202823.711340206,
            "unit": "ns",
            "range": "± 1131746.779758801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185842.02898550723,
            "unit": "ns",
            "range": "± 8487.402529928097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178329.0909090909,
            "unit": "ns",
            "range": "± 7480.064188852945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146577.08333333334,
            "unit": "ns",
            "range": "± 5761.251326228672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771178.5714285714,
            "unit": "ns",
            "range": "± 27368.85311588925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2513053.3333333335,
            "unit": "ns",
            "range": "± 40802.326030801356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12905.61797752809,
            "unit": "ns",
            "range": "± 1510.8967498687805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62771.42857142857,
            "unit": "ns",
            "range": "± 7053.609151480941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50734.375,
            "unit": "ns",
            "range": "± 3971.0883600290103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62181.720430107525,
            "unit": "ns",
            "range": "± 11604.833571634663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3341.935483870968,
            "unit": "ns",
            "range": "± 646.6170462399507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13015.90909090909,
            "unit": "ns",
            "range": "± 1853.7868272366013"
          }
        ]
      }
    ]
  }
}