window.BENCHMARK_DATA = {
  "lastUpdate": 1680508811709,
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
          "id": "feb9a091c2bf34984c125cb6fa6641b2d70b6620",
          "message": "[skip changelog] Separate block validation related code",
          "timestamp": "2023-04-03T16:39:37+09:00",
          "tree_id": "68febb310cb06ee0c765e5c728e72392a040515b",
          "url": "https://github.com/greymistcube/libplanet/commit/feb9a091c2bf34984c125cb6fa6641b2d70b6620"
        },
        "date": 1680508789466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9228936.108108109,
            "unit": "ns",
            "range": "± 313008.6158364037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23296468.4375,
            "unit": "ns",
            "range": "± 445256.419285632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58909292.63333333,
            "unit": "ns",
            "range": "± 392946.75155999494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117980734.71428572,
            "unit": "ns",
            "range": "± 996800.5935889567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236309978.35714287,
            "unit": "ns",
            "range": "± 2960984.1260988945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71956.61224489796,
            "unit": "ns",
            "range": "± 9529.731669000314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 451826.1081081081,
            "unit": "ns",
            "range": "± 15343.214842731304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372728.4915254237,
            "unit": "ns",
            "range": "± 16154.555209378499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342319.2448979592,
            "unit": "ns",
            "range": "± 22196.1002844264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6764609.96,
            "unit": "ns",
            "range": "± 179167.13993491294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4765118.533333333,
            "unit": "ns",
            "range": "± 85424.6693876011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21207.85714285714,
            "unit": "ns",
            "range": "± 2007.448937064312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107856.76086956522,
            "unit": "ns",
            "range": "± 6750.853837522691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103655.4375,
            "unit": "ns",
            "range": "± 10339.6125121455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 267845.39784946234,
            "unit": "ns",
            "range": "± 27808.517364344305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6911.71875,
            "unit": "ns",
            "range": "± 876.1003031151291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20221.20879120879,
            "unit": "ns",
            "range": "± 2296.9802423398496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1960061.2795698924,
            "unit": "ns",
            "range": "± 238395.82217261227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3616317.7837837837,
            "unit": "ns",
            "range": "± 180296.6941047542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3014790.3,
            "unit": "ns",
            "range": "± 306776.6405976896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7908567.160714285,
            "unit": "ns",
            "range": "± 319526.92399706825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3853170.4897959186,
            "unit": "ns",
            "range": "± 136420.0816827876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4096043.15,
            "unit": "ns",
            "range": "± 89346.62786631391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5203919.478260869,
            "unit": "ns",
            "range": "± 199831.73713821662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5237258.209090909,
            "unit": "ns",
            "range": "± 218632.3708341939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10378121.869565217,
            "unit": "ns",
            "range": "± 233940.34103519647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7084884.161621094,
            "unit": "ns",
            "range": "± 216099.57587651568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2227112.7946428573,
            "unit": "ns",
            "range": "± 10720.890782011862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1464720.6774338942,
            "unit": "ns",
            "range": "± 4564.359469653696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124737.3765625,
            "unit": "ns",
            "range": "± 32485.60884295258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016135.2121394231,
            "unit": "ns",
            "range": "± 6736.3708698549835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848794.7184244791,
            "unit": "ns",
            "range": "± 17783.350236992905"
          }
        ]
      }
    ]
  }
}