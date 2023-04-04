window.BENCHMARK_DATA = {
  "lastUpdate": 1680584632204,
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
      },
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
          "id": "af91da6d3bfa9210229b69530940ca3750a8363d",
          "message": "[skip changelog] Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:50+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/af91da6d3bfa9210229b69530940ca3750a8363d"
        },
        "date": 1680584609944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626566.6666666667,
            "unit": "ns",
            "range": "± 122279.39075538762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2885432.9896907215,
            "unit": "ns",
            "range": "± 249593.8983803029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2463039.5833333335,
            "unit": "ns",
            "range": "± 203303.6766587915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6354165.306122449,
            "unit": "ns",
            "range": "± 538892.489345125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56751.063829787236,
            "unit": "ns",
            "range": "± 7654.666784862669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8475075.757575758,
            "unit": "ns",
            "range": "± 396940.1416065753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22266844.827586208,
            "unit": "ns",
            "range": "± 961511.1868910504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58143211.11111111,
            "unit": "ns",
            "range": "± 1238538.5509632803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111311453,
            "unit": "ns",
            "range": "± 7084355.856683959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224429761.1111111,
            "unit": "ns",
            "range": "± 9398481.691639438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5317068.630826271,
            "unit": "ns",
            "range": "± 235153.6119017848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819265.6364889706,
            "unit": "ns",
            "range": "± 53960.612413166535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298949.9561543367,
            "unit": "ns",
            "range": "± 76007.7446854088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2934720.28125,
            "unit": "ns",
            "range": "± 76797.63952392108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943335.263671875,
            "unit": "ns",
            "range": "± 26776.87924339226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864918.5400390625,
            "unit": "ns",
            "range": "± 29237.661267008505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229693.81443299,
            "unit": "ns",
            "range": "± 274790.3541089829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3457221.052631579,
            "unit": "ns",
            "range": "± 258956.127022097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4398451.063829787,
            "unit": "ns",
            "range": "± 291114.0462122738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4538640.404040404,
            "unit": "ns",
            "range": "± 451894.1491370793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8502951.05263158,
            "unit": "ns",
            "range": "± 678533.0797522174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367826.3157894737,
            "unit": "ns",
            "range": "± 30305.5791876548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286470.1030927835,
            "unit": "ns",
            "range": "± 33703.40352789702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252135.10638297873,
            "unit": "ns",
            "range": "± 17096.259462905025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6220650.666666667,
            "unit": "ns",
            "range": "± 312169.425746935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4079960,
            "unit": "ns",
            "range": "± 220602.56398803537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20813.131313131315,
            "unit": "ns",
            "range": "± 7115.52838350452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88758.94736842105,
            "unit": "ns",
            "range": "± 11326.512812741634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82136.84210526316,
            "unit": "ns",
            "range": "± 11257.754326454455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 206585.05154639174,
            "unit": "ns",
            "range": "± 26691.470396446854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11117.171717171717,
            "unit": "ns",
            "range": "± 5976.246183835147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25322,
            "unit": "ns",
            "range": "± 6025.293152682081"
          }
        ]
      }
    ]
  }
}