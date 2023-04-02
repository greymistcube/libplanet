window.BENCHMARK_DATA = {
  "lastUpdate": 1680421342572,
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
          "id": "265300407ee130b2853963ce8382c321e4570673",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:27:07+09:00",
          "tree_id": "e367f0043a44abc981b7f55b69d973d07fa9015f",
          "url": "https://github.com/greymistcube/libplanet/commit/265300407ee130b2853963ce8382c321e4570673"
        },
        "date": 1680421319285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341768,
            "unit": "ns",
            "range": "± 123808.03965344207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479109.090909091,
            "unit": "ns",
            "range": "± 59312.80203167343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2084587.3684210526,
            "unit": "ns",
            "range": "± 124743.87823815139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5027294.736842105,
            "unit": "ns",
            "range": "± 106473.3794256376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42738.46153846154,
            "unit": "ns",
            "range": "± 1756.796755925101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6857464.285714285,
            "unit": "ns",
            "range": "± 22183.868260269915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17582180,
            "unit": "ns",
            "range": "± 157402.33343705095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44686253.84615385,
            "unit": "ns",
            "range": "± 179289.23380664652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89959060,
            "unit": "ns",
            "range": "± 496272.3011181894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177820586.66666666,
            "unit": "ns",
            "range": "± 1251008.519365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893705.970982143,
            "unit": "ns",
            "range": "± 13720.400394388693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526727.9427083333,
            "unit": "ns",
            "range": "± 3422.425161999942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152353.06640625,
            "unit": "ns",
            "range": "± 1776.6955855514227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716902.9854910714,
            "unit": "ns",
            "range": "± 13001.117139009877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859885.2669270834,
            "unit": "ns",
            "range": "± 3940.7685297233165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729477.9947916666,
            "unit": "ns",
            "range": "± 912.0126827687849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2921942.3076923075,
            "unit": "ns",
            "range": "± 79660.41010728943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089477.777777778,
            "unit": "ns",
            "range": "± 103119.14637547359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3915609.523809524,
            "unit": "ns",
            "range": "± 92428.46912484219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3998815.3846153845,
            "unit": "ns",
            "range": "± 52628.601953593105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7054030.303030303,
            "unit": "ns",
            "range": "± 196459.29680987433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293342.42424242425,
            "unit": "ns",
            "range": "± 9160.616460664312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238292.85714285713,
            "unit": "ns",
            "range": "± 6829.588598391591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218479.01234567902,
            "unit": "ns",
            "range": "± 11415.359346614792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5179846.153846154,
            "unit": "ns",
            "range": "± 35497.33828952567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572593.3333333335,
            "unit": "ns",
            "range": "± 49059.591557711974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16716.842105263157,
            "unit": "ns",
            "range": "± 1748.4128140748262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79306.25,
            "unit": "ns",
            "range": "± 5382.4629952036685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73251.54639175258,
            "unit": "ns",
            "range": "± 6421.482717573584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153820,
            "unit": "ns",
            "range": "± 12948.6103747969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5325.510204081633,
            "unit": "ns",
            "range": "± 778.4879905568197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15926.041666666666,
            "unit": "ns",
            "range": "± 1682.7449249533158"
          }
        ]
      }
    ]
  }
}