window.BENCHMARK_DATA = {
  "lastUpdate": 1687446729836,
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
          "id": "014d1b096260bad7983ec840cdb396cfa0f86b4a",
          "message": "Merge tag '2.1.1' into port/2.1.1-to-main\n\nLibplanet 2.1.1",
          "timestamp": "2023-06-22T23:51:12+09:00",
          "tree_id": "9196c9c310d0445ca571a6d6dcee293a2fe6da21",
          "url": "https://github.com/greymistcube/libplanet/commit/014d1b096260bad7983ec840cdb396cfa0f86b4a"
        },
        "date": 1687446714140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9377080.207070706,
            "unit": "ns",
            "range": "± 546510.5113838767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23200680.18556701,
            "unit": "ns",
            "range": "± 1482252.3886756864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54296350.375,
            "unit": "ns",
            "range": "± 1313081.8761362543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110064776.53846154,
            "unit": "ns",
            "range": "± 3609971.2315504663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230515676.8125,
            "unit": "ns",
            "range": "± 5710885.077150972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79860.20114942528,
            "unit": "ns",
            "range": "± 8518.353407209339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373577.5681818182,
            "unit": "ns",
            "range": "± 36460.901343766796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355952.32352941175,
            "unit": "ns",
            "range": "± 45932.06658289643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355304.8645833333,
            "unit": "ns",
            "range": "± 45592.753253726114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4513771.471910113,
            "unit": "ns",
            "range": "± 286145.5566475935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4164224.7802197803,
            "unit": "ns",
            "range": "± 315412.6464649057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27399.224137931036,
            "unit": "ns",
            "range": "± 3601.5057951893787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130914.15789473684,
            "unit": "ns",
            "range": "± 16970.711417224647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121180.78125,
            "unit": "ns",
            "range": "± 5604.768908957572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127760.1875,
            "unit": "ns",
            "range": "± 18105.330470282996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8913.430107526881,
            "unit": "ns",
            "range": "± 1394.329591111406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25973.588888888888,
            "unit": "ns",
            "range": "± 3024.196249964959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1793332.3469387756,
            "unit": "ns",
            "range": "± 279335.83446728246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3407024.023255814,
            "unit": "ns",
            "range": "± 498297.8873000444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3051612.880952381,
            "unit": "ns",
            "range": "± 516258.32695977984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7483821.950549451,
            "unit": "ns",
            "range": "± 1123820.4720282534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3602127.6914893617,
            "unit": "ns",
            "range": "± 337899.4090564043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3718580.4,
            "unit": "ns",
            "range": "± 286146.9753722169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4662204.864583333,
            "unit": "ns",
            "range": "± 292853.88225303794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4705783.333333333,
            "unit": "ns",
            "range": "± 359563.2447641932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11020584.468085106,
            "unit": "ns",
            "range": "± 3578192.9307047054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8437061.536805555,
            "unit": "ns",
            "range": "± 1234260.199477254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271744.267838542,
            "unit": "ns",
            "range": "± 169167.4572367842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366884.7101004464,
            "unit": "ns",
            "range": "± 22826.482889566105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163281.1201636903,
            "unit": "ns",
            "range": "± 74997.94661912076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946011.7774586397,
            "unit": "ns",
            "range": "± 14577.56199502934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770845.9908353365,
            "unit": "ns",
            "range": "± 10366.653318723385"
          }
        ]
      }
    ]
  }
}