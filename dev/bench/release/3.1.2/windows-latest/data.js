window.BENCHMARK_DATA = {
  "lastUpdate": 1691649419210,
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
          "id": "e6a9c088de78199baade8ba9db605f9b638d2f6d",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:24:55+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/e6a9c088de78199baade8ba9db605f9b638d2f6d"
        },
        "date": 1691649401151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029927.5510204082,
            "unit": "ns",
            "range": "± 116776.60740593397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1784531.8181818181,
            "unit": "ns",
            "range": "± 81573.41414397767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1313220.8333333333,
            "unit": "ns",
            "range": "± 146793.24372568642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3239952.1126760566,
            "unit": "ns",
            "range": "± 151770.65955781995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34543.181818181816,
            "unit": "ns",
            "range": "± 1912.138806974244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4974553.333333333,
            "unit": "ns",
            "range": "± 40007.37193972893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13299506.666666666,
            "unit": "ns",
            "range": "± 188608.37531269714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32352035.714285713,
            "unit": "ns",
            "range": "± 412407.91905987536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64590673.333333336,
            "unit": "ns",
            "range": "± 666311.5256680582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129281628.57142857,
            "unit": "ns",
            "range": "± 1088251.7401273062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3185744.7916666665,
            "unit": "ns",
            "range": "± 9435.383990542774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1001318.0438701923,
            "unit": "ns",
            "range": "± 1824.8013994308228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 689232.12890625,
            "unit": "ns",
            "range": "± 1662.7567621550738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942661.2109375,
            "unit": "ns",
            "range": "± 2960.9164326044474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621142.96875,
            "unit": "ns",
            "range": "± 691.476447211132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580951.1648995535,
            "unit": "ns",
            "range": "± 825.1430871690281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147145,
            "unit": "ns",
            "range": "± 49311.506877465385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2373682.8571428573,
            "unit": "ns",
            "range": "± 76419.9446006938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2992113.3333333335,
            "unit": "ns",
            "range": "± 47639.37247197752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2583938.75,
            "unit": "ns",
            "range": "± 131062.0236721936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4185886.9565217393,
            "unit": "ns",
            "range": "± 135480.47109568663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172857.57575757575,
            "unit": "ns",
            "range": "± 6149.973373452319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167754.09836065574,
            "unit": "ns",
            "range": "± 6748.421389986743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142261.90476190476,
            "unit": "ns",
            "range": "± 2615.4304025296083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2777500,
            "unit": "ns",
            "range": "± 38995.915537033216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2544880,
            "unit": "ns",
            "range": "± 41001.5365565731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12260.416666666666,
            "unit": "ns",
            "range": "± 1472.8761098910252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57423.07692307692,
            "unit": "ns",
            "range": "± 3756.655632136321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53661.22448979592,
            "unit": "ns",
            "range": "± 7111.391074976101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66110.20408163265,
            "unit": "ns",
            "range": "± 13304.913361068917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3532.9896907216494,
            "unit": "ns",
            "range": "± 660.6060426930804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13086.95652173913,
            "unit": "ns",
            "range": "± 1536.4592799576526"
          }
        ]
      }
    ]
  }
}