window.BENCHMARK_DATA = {
  "lastUpdate": 1679042982572,
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
          "id": "c88d92e42eaf0f92f832242ec182e0edb1526d4c",
          "message": "Changelog",
          "timestamp": "2023-03-17T17:30:21+09:00",
          "tree_id": "6c36baaf4c24339c0dc0ba1ef9b36b853d3e936d",
          "url": "https://github.com/greymistcube/libplanet/commit/c88d92e42eaf0f92f832242ec182e0edb1526d4c"
        },
        "date": 1679042959579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416492.857142857,
            "unit": "ns",
            "range": "± 125907.70470107372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2554645,
            "unit": "ns",
            "range": "± 89113.02805555858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2188731.6326530613,
            "unit": "ns",
            "range": "± 156006.00543353317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4955705.555555556,
            "unit": "ns",
            "range": "± 106030.66965975803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55166.84210526316,
            "unit": "ns",
            "range": "± 4161.977144507136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7566691.666666667,
            "unit": "ns",
            "range": "± 191429.56001954182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20562600,
            "unit": "ns",
            "range": "± 132474.51423982246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51171560,
            "unit": "ns",
            "range": "± 447589.30601293733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102470453.33333333,
            "unit": "ns",
            "range": "± 816285.7429204788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204465073.33333334,
            "unit": "ns",
            "range": "± 1256132.086700318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4903275.751201923,
            "unit": "ns",
            "range": "± 15473.324573526039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528845.01953125,
            "unit": "ns",
            "range": "± 3630.1413578189376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170947.34375,
            "unit": "ns",
            "range": "± 4128.088915900163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625583.231026786,
            "unit": "ns",
            "range": "± 8089.452151349221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832655.7686941965,
            "unit": "ns",
            "range": "± 1031.0655573617696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768406.9580078125,
            "unit": "ns",
            "range": "± 1308.359698665169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355976.923076923,
            "unit": "ns",
            "range": "± 89550.34475731429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5250731.25,
            "unit": "ns",
            "range": "± 100200.9562080123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24153157.14285714,
            "unit": "ns",
            "range": "± 248808.5322377143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6447907.692307692,
            "unit": "ns",
            "range": "± 222181.98134414072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27124013.333333332,
            "unit": "ns",
            "range": "± 326974.5181567052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192191.17647058822,
            "unit": "ns",
            "range": "± 8709.571596882888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192055.55555555556,
            "unit": "ns",
            "range": "± 6242.913442773995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182795.91836734695,
            "unit": "ns",
            "range": "± 10691.252020528898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11498786.666666666,
            "unit": "ns",
            "range": "± 161005.93097623394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9321166.666666666,
            "unit": "ns",
            "range": "± 94243.73921355403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24167.021276595744,
            "unit": "ns",
            "range": "± 2146.835044715792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59741.836734693876,
            "unit": "ns",
            "range": "± 5983.257111623341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47786.73469387755,
            "unit": "ns",
            "range": "± 3972.2916015899773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114337.5,
            "unit": "ns",
            "range": "± 17729.69706156134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7609.79381443299,
            "unit": "ns",
            "range": "± 963.5718916500246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22389.79591836735,
            "unit": "ns",
            "range": "± 2978.184938000262"
          }
        ]
      }
    ]
  }
}