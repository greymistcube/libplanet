window.BENCHMARK_DATA = {
  "lastUpdate": 1706064041163,
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
          "id": "b1b89e1352beda6d98cf3364169c503b376bacf3",
          "message": "Better explanation for block query arguments",
          "timestamp": "2024-01-24T11:25:25+09:00",
          "tree_id": "e199c212de2f35bc7831f9b023ddda2fc04c0d0a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1b89e1352beda6d98cf3364169c503b376bacf3"
        },
        "date": 1706064021197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977224.7422680412,
            "unit": "ns",
            "range": "± 96809.17874755798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1721557.142857143,
            "unit": "ns",
            "range": "± 67472.00345328424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552884.5360824743,
            "unit": "ns",
            "range": "± 140752.31151166323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11077462.5,
            "unit": "ns",
            "range": "± 971154.8516168601"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34984.61538461538,
            "unit": "ns",
            "range": "± 2132.2874038575505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5008873.333333333,
            "unit": "ns",
            "range": "± 22475.112161381236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13242900,
            "unit": "ns",
            "range": "± 100042.85235683911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34192225,
            "unit": "ns",
            "range": "± 693556.0698124444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64203492.85714286,
            "unit": "ns",
            "range": "± 624478.6557469491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135365792.30769232,
            "unit": "ns",
            "range": "± 886476.3490561367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3287484.8772321427,
            "unit": "ns",
            "range": "± 7817.9589122717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063016.826923077,
            "unit": "ns",
            "range": "± 2724.177237896344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744773.5560825893,
            "unit": "ns",
            "range": "± 2784.960533471074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965422.8125,
            "unit": "ns",
            "range": "± 5354.245349576597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606867.4525669643,
            "unit": "ns",
            "range": "± 2097.3555768179062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565533.3844866072,
            "unit": "ns",
            "range": "± 1114.0277832740273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145902.6315789474,
            "unit": "ns",
            "range": "± 73200.78085110807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265837.5,
            "unit": "ns",
            "range": "± 90948.95393693224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2779905,
            "unit": "ns",
            "range": "± 62303.77596903738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2690078.481012658,
            "unit": "ns",
            "range": "± 138585.6059337407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12515463.333333334,
            "unit": "ns",
            "range": "± 1529545.662599691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179301.49253731343,
            "unit": "ns",
            "range": "± 7966.511204340509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170486.36363636365,
            "unit": "ns",
            "range": "± 7639.631210664886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149327.6595744681,
            "unit": "ns",
            "range": "± 5656.958090538842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2843628.5714285714,
            "unit": "ns",
            "range": "± 36017.9747555926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2449806.6666666665,
            "unit": "ns",
            "range": "± 29686.684525140863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12139.772727272728,
            "unit": "ns",
            "range": "± 1538.773938923362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53770.65217391304,
            "unit": "ns",
            "range": "± 5061.154323519364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49083.333333333336,
            "unit": "ns",
            "range": "± 4875.02046779329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59842.857142857145,
            "unit": "ns",
            "range": "± 11024.265644009614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2315.7303370786517,
            "unit": "ns",
            "range": "± 221.5128132988403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11332.291666666666,
            "unit": "ns",
            "range": "± 1283.3750562823477"
          }
        ]
      }
    ]
  }
}