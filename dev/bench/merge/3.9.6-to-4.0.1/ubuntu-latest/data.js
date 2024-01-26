window.BENCHMARK_DATA = {
  "lastUpdate": 1706249609106,
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
          "id": "990ba3f09df22e475923bd96d5ebb62a17e6e2d1",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T15:02:22+09:00",
          "tree_id": "325a2bcac55fa63637e4047806c84fe2ec7ad395",
          "url": "https://github.com/greymistcube/libplanet/commit/990ba3f09df22e475923bd96d5ebb62a17e6e2d1"
        },
        "date": 1706249602975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2227259.4565217393,
            "unit": "ns",
            "range": "± 85712.66235917577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2371110.1428571427,
            "unit": "ns",
            "range": "± 94237.93670633216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2912688.527777778,
            "unit": "ns",
            "range": "± 95083.15204357743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888939.597826087,
            "unit": "ns",
            "range": "± 162151.57324553258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12994635.257894738,
            "unit": "ns",
            "range": "± 941138.3362886707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37256.270833333336,
            "unit": "ns",
            "range": "± 5438.880547510464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 918965.5303030303,
            "unit": "ns",
            "range": "± 88339.89910375912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1765216.9216867469,
            "unit": "ns",
            "range": "± 93397.29031755406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481654.4795918367,
            "unit": "ns",
            "range": "± 128120.11954333539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11961101.489130436,
            "unit": "ns",
            "range": "± 1040604.707645506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5246443.142857143,
            "unit": "ns",
            "range": "± 87650.36934549162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13337588,
            "unit": "ns",
            "range": "± 224159.40988533775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33694474.64285714,
            "unit": "ns",
            "range": "± 355690.41501669295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69851735.92857143,
            "unit": "ns",
            "range": "± 1077202.3848533053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136779726.3846154,
            "unit": "ns",
            "range": "± 748097.4553257904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3440731.6346153845,
            "unit": "ns",
            "range": "± 12503.728606379598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1106988.8208333333,
            "unit": "ns",
            "range": "± 4764.274665768124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 696181.3908503606,
            "unit": "ns",
            "range": "± 3444.6912753792594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1789639.9795673077,
            "unit": "ns",
            "range": "± 4100.513118605276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 562238.2928385417,
            "unit": "ns",
            "range": "± 3402.461145867038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 531343.9483119419,
            "unit": "ns",
            "range": "± 2957.7365018542755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187134.32142857142,
            "unit": "ns",
            "range": "± 7610.302290274063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182430.7258064516,
            "unit": "ns",
            "range": "± 7895.699273778483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163665.58333333334,
            "unit": "ns",
            "range": "± 1510.440782043641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2971029.346153846,
            "unit": "ns",
            "range": "± 79409.02532820425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2630342.8571428573,
            "unit": "ns",
            "range": "± 43039.5795069128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14389.925287356322,
            "unit": "ns",
            "range": "± 1715.7734009883595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65418.12765957447,
            "unit": "ns",
            "range": "± 5254.77673166585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57473.13888888889,
            "unit": "ns",
            "range": "± 1904.8279735267852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61268.93877551021,
            "unit": "ns",
            "range": "± 11698.578375889589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3006.9578947368423,
            "unit": "ns",
            "range": "± 362.0963759033349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13012.814432989691,
            "unit": "ns",
            "range": "± 2656.036377017363"
          }
        ]
      }
    ]
  }
}