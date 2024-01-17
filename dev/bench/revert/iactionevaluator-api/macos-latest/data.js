window.BENCHMARK_DATA = {
  "lastUpdate": 1705469232563,
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
          "id": "a190c93147e682b08d5f6764040a3851eecc7e4b",
          "message": "Fixed tests",
          "timestamp": "2024-01-17T14:07:58+09:00",
          "tree_id": "40cbc79c3543accf5d4b6d0edc973ee3cadad634",
          "url": "https://github.com/greymistcube/libplanet/commit/a190c93147e682b08d5f6764040a3851eecc7e4b"
        },
        "date": 1705469205785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10641310.764705881,
            "unit": "ns",
            "range": "± 310254.38374187244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24636292.35714286,
            "unit": "ns",
            "range": "± 352592.70705923944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61704047,
            "unit": "ns",
            "range": "± 1330753.422401939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125984577.8125,
            "unit": "ns",
            "range": "± 2351846.010797241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254795993.33333334,
            "unit": "ns",
            "range": "± 3315528.90613977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62759.17857142857,
            "unit": "ns",
            "range": "± 7466.14074783775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306636.23863636365,
            "unit": "ns",
            "range": "± 26029.39562909522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299235.17741935485,
            "unit": "ns",
            "range": "± 13617.00023388579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287281.39743589744,
            "unit": "ns",
            "range": "± 22471.908847760827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5094355.733333333,
            "unit": "ns",
            "range": "± 149963.10139766298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4514940.183333334,
            "unit": "ns",
            "range": "± 201111.52782587413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22221.673684210527,
            "unit": "ns",
            "range": "± 3508.3663636116153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97072.1294117647,
            "unit": "ns",
            "range": "± 13537.994660344988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97181.0786516854,
            "unit": "ns",
            "range": "± 7856.722119284397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100252.56315789474,
            "unit": "ns",
            "range": "± 14721.5465760807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7236.080645161291,
            "unit": "ns",
            "range": "± 880.3751710465439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23426.217391304348,
            "unit": "ns",
            "range": "± 3838.9872672276438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1224423.7608695652,
            "unit": "ns",
            "range": "± 135876.02872450382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661204.290322581,
            "unit": "ns",
            "range": "± 247446.77360528425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2025682.2121212122,
            "unit": "ns",
            "range": "± 273608.47030734253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 25512238,
            "unit": "ns",
            "range": "± 5046429.924090512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683950.8484848486,
            "unit": "ns",
            "range": "± 106154.69686474111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988438.625,
            "unit": "ns",
            "range": "± 122510.30649487308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631373.379310345,
            "unit": "ns",
            "range": "± 133360.11521210792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785258.111111111,
            "unit": "ns",
            "range": "± 101257.58286442429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29137862.42268041,
            "unit": "ns",
            "range": "± 4809886.997715174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5833227.332682292,
            "unit": "ns",
            "range": "± 59123.685291943555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747588.3307976974,
            "unit": "ns",
            "range": "± 33643.73982357831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155185.6627775494,
            "unit": "ns",
            "range": "± 25561.960032361305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2745014.32125,
            "unit": "ns",
            "range": "± 72621.33079132572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852496.1741333008,
            "unit": "ns",
            "range": "± 16035.646993134515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735484.1649925595,
            "unit": "ns",
            "range": "± 17420.088967159805"
          }
        ]
      }
    ]
  }
}