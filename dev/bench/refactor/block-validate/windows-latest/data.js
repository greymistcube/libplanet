window.BENCHMARK_DATA = {
  "lastUpdate": 1680579574679,
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
          "id": "4522501c5d9593b0aeaa57efde43b2e524ebe847",
          "message": "Removed unnecessary logic",
          "timestamp": "2023-04-04T12:23:14+09:00",
          "tree_id": "329e28668ace483029c1d1ac545049c75aa9c27a",
          "url": "https://github.com/greymistcube/libplanet/commit/4522501c5d9593b0aeaa57efde43b2e524ebe847"
        },
        "date": 1680579549201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316340,
            "unit": "ns",
            "range": "± 99391.31112563476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2394119.230769231,
            "unit": "ns",
            "range": "± 64179.66668178182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232617.6470588236,
            "unit": "ns",
            "range": "± 42737.443116284434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5009988.888888889,
            "unit": "ns",
            "range": "± 138815.40131060977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43421.05263157895,
            "unit": "ns",
            "range": "± 2221.9100365510562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6852093.333333333,
            "unit": "ns",
            "range": "± 27873.219780864587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17657592.85714286,
            "unit": "ns",
            "range": "± 94036.47789993082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44808000,
            "unit": "ns",
            "range": "± 207915.56255808787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89668090,
            "unit": "ns",
            "range": "± 570042.629734203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178919678.57142857,
            "unit": "ns",
            "range": "± 1518362.447445664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4979662.6953125,
            "unit": "ns",
            "range": "± 7013.461970131817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526698.353794643,
            "unit": "ns",
            "range": "± 2749.2095926051984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144523.37890625,
            "unit": "ns",
            "range": "± 2270.764759846536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559099.8372395835,
            "unit": "ns",
            "range": "± 3459.683803791171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798969.2522321428,
            "unit": "ns",
            "range": "± 1252.1603322690603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751597.2806490385,
            "unit": "ns",
            "range": "± 1091.2758160379187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2906450,
            "unit": "ns",
            "range": "± 42891.21749800929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3062663.1578947366,
            "unit": "ns",
            "range": "± 54614.17409149301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3936825,
            "unit": "ns",
            "range": "± 120823.7078850702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4048642.8571428573,
            "unit": "ns",
            "range": "± 159196.62239926239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7031491.935483871,
            "unit": "ns",
            "range": "± 212153.50381927635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291219.04761904763,
            "unit": "ns",
            "range": "± 6659.55096441337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236614.8148148148,
            "unit": "ns",
            "range": "± 6279.496776978213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207844.73684210525,
            "unit": "ns",
            "range": "± 6585.844663281715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5212773.333333333,
            "unit": "ns",
            "range": "± 48533.05893433681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3553235.714285714,
            "unit": "ns",
            "range": "± 39338.469274174415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16780.80808080808,
            "unit": "ns",
            "range": "± 1697.6981275182382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78085.55555555556,
            "unit": "ns",
            "range": "± 4277.647970532434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69788.76404494382,
            "unit": "ns",
            "range": "± 4220.2282952640235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150663.63636363635,
            "unit": "ns",
            "range": "± 16275.582403106097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4838.541666666667,
            "unit": "ns",
            "range": "± 659.8835290638982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15537.5,
            "unit": "ns",
            "range": "± 1659.375278768933"
          }
        ]
      }
    ]
  }
}