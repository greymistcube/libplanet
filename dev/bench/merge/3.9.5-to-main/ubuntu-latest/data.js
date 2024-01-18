window.BENCHMARK_DATA = {
  "lastUpdate": 1705577810267,
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
          "id": "9831daffbd0096dfd13fb562ee8aa1d0f6beda36",
          "message": "Merge fix",
          "timestamp": "2024-01-18T20:25:19+09:00",
          "tree_id": "eefc446389a4bcddee5ed9fe742777ad6904810a",
          "url": "https://github.com/greymistcube/libplanet/commit/9831daffbd0096dfd13fb562ee8aa1d0f6beda36"
        },
        "date": 1705577803925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734884.1243489585,
            "unit": "ns",
            "range": "± 13722.086285997288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1182691.07734375,
            "unit": "ns",
            "range": "± 3169.278974925386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760697.7415865385,
            "unit": "ns",
            "range": "± 2824.8889923254023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909773.1001302083,
            "unit": "ns",
            "range": "± 19436.679617457023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615968.5568659856,
            "unit": "ns",
            "range": "± 698.4890635072917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578311.7198567708,
            "unit": "ns",
            "range": "± 1898.1656450240832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399573.2,
            "unit": "ns",
            "range": "± 63053.839846065945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2590684.12295082,
            "unit": "ns",
            "range": "± 112282.36590506455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3168487.1875,
            "unit": "ns",
            "range": "± 59523.9851070908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3263103.847826087,
            "unit": "ns",
            "range": "± 156383.86643738748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14180588.204301076,
            "unit": "ns",
            "range": "± 971767.0298050569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41223.12244897959,
            "unit": "ns",
            "range": "± 6023.13793831977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199291.35714285713,
            "unit": "ns",
            "range": "± 10193.925524435832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189841.97674418605,
            "unit": "ns",
            "range": "± 7001.736099297674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170316.88461538462,
            "unit": "ns",
            "range": "± 2333.017878859252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3241041.3529411764,
            "unit": "ns",
            "range": "± 63309.38901531626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2886843.8571428573,
            "unit": "ns",
            "range": "± 43702.156198974444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15239.030303030304,
            "unit": "ns",
            "range": "± 2917.4644129985836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60741.98901098901,
            "unit": "ns",
            "range": "± 5891.623104967681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60777.42,
            "unit": "ns",
            "range": "± 2432.079288785375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65221.586956521736,
            "unit": "ns",
            "range": "± 8324.493054758896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3125.9574468085107,
            "unit": "ns",
            "range": "± 813.8688524095535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14596.262626262625,
            "unit": "ns",
            "range": "± 2803.9569437793693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5524048.071428572,
            "unit": "ns",
            "range": "± 17556.147397878725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14363918.285714285,
            "unit": "ns",
            "range": "± 90343.31191982536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36904501.571428575,
            "unit": "ns",
            "range": "± 195116.7768055697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74808954.35714285,
            "unit": "ns",
            "range": "± 948275.5871169404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149271262.2142857,
            "unit": "ns",
            "range": "± 1053092.5252048534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981451.1212121212,
            "unit": "ns",
            "range": "± 90789.05584726729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889860.103448276,
            "unit": "ns",
            "range": "± 74535.07622746973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660888.4,
            "unit": "ns",
            "range": "± 179059.18087589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12792163.64516129,
            "unit": "ns",
            "range": "± 882259.0290525772"
          }
        ]
      }
    ]
  }
}