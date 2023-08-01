window.BENCHMARK_DATA = {
  "lastUpdate": 1690857425728,
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
          "id": "a40682ffd34f05ff76cf32151f4cb14e5a4eb214",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-01T11:20:04+09:00",
          "tree_id": "8e44e21bd65dfad89e80b457d02f8433363502ad",
          "url": "https://github.com/greymistcube/libplanet/commit/a40682ffd34f05ff76cf32151f4cb14e5a4eb214"
        },
        "date": 1690857416652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355188.15625,
            "unit": "ns",
            "range": "± 10963.907712564764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344879.9736842105,
            "unit": "ns",
            "range": "± 10630.257517632424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300284.85714285716,
            "unit": "ns",
            "range": "± 4920.914124852803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5500985.642857143,
            "unit": "ns",
            "range": "± 62922.51501233896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5234038.923076923,
            "unit": "ns",
            "range": "± 36093.48770083401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23125.75824175824,
            "unit": "ns",
            "range": "± 1451.654483995259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106009.2,
            "unit": "ns",
            "range": "± 4734.051050543555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90801.8,
            "unit": "ns",
            "range": "± 2361.7155134915524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107891.06666666667,
            "unit": "ns",
            "range": "± 9961.590312097129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7057.865979381443,
            "unit": "ns",
            "range": "± 886.794386503832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23917.436170212764,
            "unit": "ns",
            "range": "± 1403.1096843100079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1789562.671875,
            "unit": "ns",
            "range": "± 82609.5432392179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3422243.9583333335,
            "unit": "ns",
            "range": "± 87371.87870569917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2323062.976744186,
            "unit": "ns",
            "range": "± 125242.62662030205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6491616.315217392,
            "unit": "ns",
            "range": "± 365615.32678185235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7641118.104352678,
            "unit": "ns",
            "range": "± 24059.48662196169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2366709.316666667,
            "unit": "ns",
            "range": "± 4485.357663149181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1719004.5489583334,
            "unit": "ns",
            "range": "± 5881.849820405419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3291800.0192522323,
            "unit": "ns",
            "range": "± 2998.596734333191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047244.4513020833,
            "unit": "ns",
            "range": "± 1566.3810326441424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948852.0367838541,
            "unit": "ns",
            "range": "± 532.3054784215503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4279471.733333333,
            "unit": "ns",
            "range": "± 77363.26370577655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4496760.714285715,
            "unit": "ns",
            "range": "± 101060.00417333399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5496762.642857143,
            "unit": "ns",
            "range": "± 144431.75069938722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4998132.705882353,
            "unit": "ns",
            "range": "± 98497.42477265885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8104961.741935484,
            "unit": "ns",
            "range": "± 240802.44565964135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9839015.692307692,
            "unit": "ns",
            "range": "± 30503.07732668027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27163912,
            "unit": "ns",
            "range": "± 248299.25034752494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67888415.06666666,
            "unit": "ns",
            "range": "± 678321.3643768466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136426262.93333334,
            "unit": "ns",
            "range": "± 1036714.7679725375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274137484.8666667,
            "unit": "ns",
            "range": "± 3507389.9335698104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58492.976744186046,
            "unit": "ns",
            "range": "± 3194.853722056012"
          }
        ]
      }
    ]
  }
}