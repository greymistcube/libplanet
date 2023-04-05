window.BENCHMARK_DATA = {
  "lastUpdate": 1680673286211,
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
          "id": "e6554b5d179b9c992fffe18c19fff6753cc53236",
          "message": "Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:29+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/e6554b5d179b9c992fffe18c19fff6753cc53236"
        },
        "date": 1680584623918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618960.6382978724,
            "unit": "ns",
            "range": "± 154255.41953364937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905523.3333333335,
            "unit": "ns",
            "range": "± 86124.35649460142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2568012.5,
            "unit": "ns",
            "range": "± 177555.1651859515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668268.75,
            "unit": "ns",
            "range": "± 439484.02864519495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55874.72527472527,
            "unit": "ns",
            "range": "± 3971.526250325025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7916035.714285715,
            "unit": "ns",
            "range": "± 137874.09310472562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23747213.636363637,
            "unit": "ns",
            "range": "± 560289.3821142399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58007630,
            "unit": "ns",
            "range": "± 1174588.5542113078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115352379.16666667,
            "unit": "ns",
            "range": "± 2964388.0327442857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239531596.2962963,
            "unit": "ns",
            "range": "± 6455660.664068484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5838460.714285715,
            "unit": "ns",
            "range": "± 95635.36000856732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855792.1614583333,
            "unit": "ns",
            "range": "± 30223.468001999034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1429772.775607639,
            "unit": "ns",
            "range": "± 30064.148742625704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3220062.2421875,
            "unit": "ns",
            "range": "± 85841.05498541662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006529.1328125,
            "unit": "ns",
            "range": "± 26737.91984314557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943785.234375,
            "unit": "ns",
            "range": "± 16681.516288457675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3779617.5824175826,
            "unit": "ns",
            "range": "± 222864.23500189357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4031866.6666666665,
            "unit": "ns",
            "range": "± 194303.69018525575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625404.545454546,
            "unit": "ns",
            "range": "± 172353.98802511263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5178431.578947368,
            "unit": "ns",
            "range": "± 175377.96997968786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8594223.076923076,
            "unit": "ns",
            "range": "± 299865.04987686017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357662.22222222225,
            "unit": "ns",
            "range": "± 13405.515976114406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297744.0677966102,
            "unit": "ns",
            "range": "± 13121.478459413087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267729.78723404254,
            "unit": "ns",
            "range": "± 15248.555932243553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6226061.111111111,
            "unit": "ns",
            "range": "± 131202.421690746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4314550,
            "unit": "ns",
            "range": "± 120576.42881253858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25055.913978494624,
            "unit": "ns",
            "range": "± 2243.5638558170267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110442.70833333333,
            "unit": "ns",
            "range": "± 9201.0496516964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103239.36170212766,
            "unit": "ns",
            "range": "± 11141.979304145263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 206413.33333333334,
            "unit": "ns",
            "range": "± 19212.467861998226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8632.608695652174,
            "unit": "ns",
            "range": "± 1124.2686214203295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24035.483870967742,
            "unit": "ns",
            "range": "± 2285.2383170028234"
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680586552360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394410.101010101,
            "unit": "ns",
            "range": "± 158214.81553922864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604310.101010101,
            "unit": "ns",
            "range": "± 201540.833708781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2216702.1052631577,
            "unit": "ns",
            "range": "± 161862.32853810067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384916.666666667,
            "unit": "ns",
            "range": "± 226482.83266191732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49466.12903225807,
            "unit": "ns",
            "range": "± 3232.252220658579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7008325,
            "unit": "ns",
            "range": "± 152120.73070599654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19461211.76470588,
            "unit": "ns",
            "range": "± 389425.2622172079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49694113.333333336,
            "unit": "ns",
            "range": "± 463183.1338939378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99845600,
            "unit": "ns",
            "range": "± 1047159.348632562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198990425,
            "unit": "ns",
            "range": "± 3663787.244823768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824758.928571428,
            "unit": "ns",
            "range": "± 30829.481820850666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520641.7317708333,
            "unit": "ns",
            "range": "± 5911.397240500898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167379.4224330357,
            "unit": "ns",
            "range": "± 3382.48439327137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674326.2276785714,
            "unit": "ns",
            "range": "± 11803.534762753683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833700.8998325893,
            "unit": "ns",
            "range": "± 3556.1074488998734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761012.744140625,
            "unit": "ns",
            "range": "± 4401.830745471189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3144770.8333333335,
            "unit": "ns",
            "range": "± 106538.80715062475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338668.9655172415,
            "unit": "ns",
            "range": "± 94538.71506065753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3901323.8095238097,
            "unit": "ns",
            "range": "± 92719.04283782218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4258340,
            "unit": "ns",
            "range": "± 127240.7265098664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7323742.105263158,
            "unit": "ns",
            "range": "± 247484.67889414888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307050,
            "unit": "ns",
            "range": "± 9367.56661827532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253175.40983606558,
            "unit": "ns",
            "range": "± 11317.532942853239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213193.5483870968,
            "unit": "ns",
            "range": "± 6428.31940110171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5247976.923076923,
            "unit": "ns",
            "range": "± 47364.511219656044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3571138.4615384615,
            "unit": "ns",
            "range": "± 40601.263085063794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20919.072164948455,
            "unit": "ns",
            "range": "± 2303.3201047953885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97012.24489795919,
            "unit": "ns",
            "range": "± 5894.384280185629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82133.68421052632,
            "unit": "ns",
            "range": "± 6431.978130029172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 188212.5,
            "unit": "ns",
            "range": "± 19054.85847701177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9009.09090909091,
            "unit": "ns",
            "range": "± 1367.4115954031697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24470.103092783505,
            "unit": "ns",
            "range": "± 2074.204915365846"
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
          "id": "74e4d416e7ffdbacf023f60149719f43311df8ca",
          "message": "Separate nonce check for genesis",
          "timestamp": "2023-04-03T18:14:20+09:00",
          "tree_id": "b52734325a8d6def243b06c8dde39849f103fd77",
          "url": "https://github.com/greymistcube/libplanet/commit/74e4d416e7ffdbacf023f60149719f43311df8ca"
        },
        "date": 1680590428268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364345,
            "unit": "ns",
            "range": "± 125072.21217191195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2541786,
            "unit": "ns",
            "range": "± 160545.56263194597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130094.845360825,
            "unit": "ns",
            "range": "± 135641.93394369696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4981637.5,
            "unit": "ns",
            "range": "± 85614.20345557934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54822.448979591834,
            "unit": "ns",
            "range": "± 6678.2116967375505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7944006.666666667,
            "unit": "ns",
            "range": "± 136400.96599294862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20733326.666666668,
            "unit": "ns",
            "range": "± 182099.42914583255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51613120,
            "unit": "ns",
            "range": "± 329754.71230251476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102086391.66666667,
            "unit": "ns",
            "range": "± 586803.5918250568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198510400,
            "unit": "ns",
            "range": "± 4424651.456627016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4815632.738095238,
            "unit": "ns",
            "range": "± 113642.4832273291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527835.435267857,
            "unit": "ns",
            "range": "± 7615.25688423019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154926.171875,
            "unit": "ns",
            "range": "± 8184.926873308286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633503.22265625,
            "unit": "ns",
            "range": "± 6925.940705052844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845485.46875,
            "unit": "ns",
            "range": "± 3451.3156110482105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767804.7526041666,
            "unit": "ns",
            "range": "± 2364.0180143019275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3040429.6875,
            "unit": "ns",
            "range": "± 139078.89696446827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3147636.7647058824,
            "unit": "ns",
            "range": "± 150208.09039205377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3941726.086956522,
            "unit": "ns",
            "range": "± 151691.60884253524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4132958.6666666665,
            "unit": "ns",
            "range": "± 208080.23146836396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7158359.375,
            "unit": "ns",
            "range": "± 213426.48936082676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310160,
            "unit": "ns",
            "range": "± 6968.757345995656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249809.75609756098,
            "unit": "ns",
            "range": "± 8006.678614695634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209997.36842105264,
            "unit": "ns",
            "range": "± 6271.707679089388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5479685.714285715,
            "unit": "ns",
            "range": "± 94510.85291479132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3663456,
            "unit": "ns",
            "range": "± 94952.2997790645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22015.9793814433,
            "unit": "ns",
            "range": "± 3738.3676974365585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88856.52173913043,
            "unit": "ns",
            "range": "± 4975.705910442711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85592.70833333333,
            "unit": "ns",
            "range": "± 15104.884151137943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184855.20833333334,
            "unit": "ns",
            "range": "± 17719.185972698848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7183.505154639175,
            "unit": "ns",
            "range": "± 1284.5784337973762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20647.36842105263,
            "unit": "ns",
            "range": "± 1844.3035994860682"
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
          "id": "609e7adb2a7a9a9f67d6a7686cf61066542b5380",
          "message": "Changed to throw exceptions instead of returning for validation\n\nCleanup",
          "timestamp": "2023-04-04T15:38:40+09:00",
          "tree_id": "b63ea20cd158d6be05c640962054866b6b5ebb27",
          "url": "https://github.com/greymistcube/libplanet/commit/609e7adb2a7a9a9f67d6a7686cf61066542b5380"
        },
        "date": 1680591587032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410673.1958762887,
            "unit": "ns",
            "range": "± 99564.05759972647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2545898,
            "unit": "ns",
            "range": "± 102721.12135013213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2278359.375,
            "unit": "ns",
            "range": "± 153052.75497658006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5499173.1707317075,
            "unit": "ns",
            "range": "± 186587.68719343492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52812.121212121216,
            "unit": "ns",
            "range": "± 4362.415374941393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7558011.764705882,
            "unit": "ns",
            "range": "± 149495.34224497154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19965973.333333332,
            "unit": "ns",
            "range": "± 131604.84938235514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50584761.538461536,
            "unit": "ns",
            "range": "± 302567.70740464446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101603673.33333333,
            "unit": "ns",
            "range": "± 921849.7812757213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202228838.46153846,
            "unit": "ns",
            "range": "± 717638.8036917336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4832721.354166667,
            "unit": "ns",
            "range": "± 15298.209920122603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537360.5989583333,
            "unit": "ns",
            "range": "± 4249.858627190578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161965.1432291667,
            "unit": "ns",
            "range": "± 4474.2213558142585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667270.870535714,
            "unit": "ns",
            "range": "± 7538.933912928982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824098.3919270834,
            "unit": "ns",
            "range": "± 2324.621273980117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777609.951171875,
            "unit": "ns",
            "range": "± 1916.0892070097325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294317.3913043477,
            "unit": "ns",
            "range": "± 59175.483653390176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583083.3333333335,
            "unit": "ns",
            "range": "± 104099.90669886618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4003020,
            "unit": "ns",
            "range": "± 118479.88451413497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4683975,
            "unit": "ns",
            "range": "± 107819.89307222143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7522150,
            "unit": "ns",
            "range": "± 203888.03299850633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326966.6666666667,
            "unit": "ns",
            "range": "± 6932.63806845816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273110,
            "unit": "ns",
            "range": "± 9639.815936108494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232511.11111111112,
            "unit": "ns",
            "range": "± 7770.926687808963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5333370,
            "unit": "ns",
            "range": "± 72274.44915044321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772773.3333333335,
            "unit": "ns",
            "range": "± 51622.3853252314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24050.515463917527,
            "unit": "ns",
            "range": "± 2244.1648275462912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100556.70103092784,
            "unit": "ns",
            "range": "± 7120.830757018671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97860.82474226804,
            "unit": "ns",
            "range": "± 8846.627849791963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 200572.1649484536,
            "unit": "ns",
            "range": "± 19315.951645531433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9227.083333333334,
            "unit": "ns",
            "range": "± 1091.8337223190088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23285.106382978724,
            "unit": "ns",
            "range": "± 2199.851287584163"
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
          "id": "a2dbcf82e0321da87a527ebf0b627e86971605d6",
          "message": "Changed to throw exceptions instead of returning for validation",
          "timestamp": "2023-04-04T15:57:07+09:00",
          "tree_id": "10d9bb6df7318e2b51b42cb3deb90bfb48f3159a",
          "url": "https://github.com/greymistcube/libplanet/commit/a2dbcf82e0321da87a527ebf0b627e86971605d6"
        },
        "date": 1680592605997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1102725.2525252525,
            "unit": "ns",
            "range": "± 114100.70055002734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1961574.0740740742,
            "unit": "ns",
            "range": "± 102941.32767962749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1853280.4347826086,
            "unit": "ns",
            "range": "± 46644.84220519806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3942877.777777778,
            "unit": "ns",
            "range": "± 148561.04788771167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36666.666666666664,
            "unit": "ns",
            "range": "± 3120.969310679336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5295900,
            "unit": "ns",
            "range": "± 56870.5296516319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13636900,
            "unit": "ns",
            "range": "± 58951.18036703478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34808000,
            "unit": "ns",
            "range": "± 243161.59868886182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70337106.66666667,
            "unit": "ns",
            "range": "± 995524.4062923869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138022753.33333334,
            "unit": "ns",
            "range": "± 843141.502161213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3581413.1770833335,
            "unit": "ns",
            "range": "± 10570.185457917441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1104521.1653645833,
            "unit": "ns",
            "range": "± 1528.4554400745253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 828434.7428385416,
            "unit": "ns",
            "range": "± 1550.1157337114948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1863922.7799479167,
            "unit": "ns",
            "range": "± 9225.844065682693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609738.1770833334,
            "unit": "ns",
            "range": "± 3474.6823134206807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523171.9168526786,
            "unit": "ns",
            "range": "± 1045.3529040183646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2249771.4285714286,
            "unit": "ns",
            "range": "± 89279.85961757184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2365928.1690140846,
            "unit": "ns",
            "range": "± 102124.39359232249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3005978.125,
            "unit": "ns",
            "range": "± 91263.40726736202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3180413.6363636362,
            "unit": "ns",
            "range": "± 148149.4109506851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5428434.2105263155,
            "unit": "ns",
            "range": "± 183032.59977881622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235120,
            "unit": "ns",
            "range": "± 9977.333570908871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195725.27472527474,
            "unit": "ns",
            "range": "± 11024.010093191975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191809.18367346938,
            "unit": "ns",
            "range": "± 11475.424990307954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3993606.6666666665,
            "unit": "ns",
            "range": "± 50667.55043088886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2737973.3333333335,
            "unit": "ns",
            "range": "± 43080.596670935396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18350,
            "unit": "ns",
            "range": "± 2384.1076049886983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77182.47422680413,
            "unit": "ns",
            "range": "± 9064.020105951862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74824,
            "unit": "ns",
            "range": "± 9658.838209409843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150314.58333333334,
            "unit": "ns",
            "range": "± 16244.428869561578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5955.102040816327,
            "unit": "ns",
            "range": "± 1115.0444907197436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15969.387755102041,
            "unit": "ns",
            "range": "± 2057.443522455948"
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
          "id": "bcc4772395a25b3ff32dd441fc2d429e4876f7e9",
          "message": "Code reorganization and renaming for consistency",
          "timestamp": "2023-04-04T16:00:01+09:00",
          "tree_id": "e3ae7aa6eb72b7c46d47c8186f88e83b660a83fe",
          "url": "https://github.com/greymistcube/libplanet/commit/bcc4772395a25b3ff32dd441fc2d429e4876f7e9"
        },
        "date": 1680593031803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692396.8421052631,
            "unit": "ns",
            "range": "± 236568.93667265843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3273543.8775510206,
            "unit": "ns",
            "range": "± 382926.9226039254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692373.737373737,
            "unit": "ns",
            "range": "± 354271.31208798516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7217879.787234043,
            "unit": "ns",
            "range": "± 602100.653997353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65093.406593406595,
            "unit": "ns",
            "range": "± 14571.660487991387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9123951.612903226,
            "unit": "ns",
            "range": "± 733855.7621893126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25091284.285714287,
            "unit": "ns",
            "range": "± 1208244.4700120501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63288195.71428572,
            "unit": "ns",
            "range": "± 3066900.063366431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126772424,
            "unit": "ns",
            "range": "± 6375079.230686026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253116450.76923078,
            "unit": "ns",
            "range": "± 11742296.028901288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5820093.092105263,
            "unit": "ns",
            "range": "± 127854.83279164381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904224.0169270833,
            "unit": "ns",
            "range": "± 31173.110691040638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415868.2396673388,
            "unit": "ns",
            "range": "± 43229.39026604518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3178386.9544719825,
            "unit": "ns",
            "range": "± 90752.37094947182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071087.1940104167,
            "unit": "ns",
            "range": "± 19568.237530018632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945210.5050223215,
            "unit": "ns",
            "range": "± 15726.800043736852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3519504.0404040404,
            "unit": "ns",
            "range": "± 425905.028677634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3808004.0816326533,
            "unit": "ns",
            "range": "± 498122.5843658701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4781722.916666667,
            "unit": "ns",
            "range": "± 430482.810336968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5383796.9387755105,
            "unit": "ns",
            "range": "± 852908.571193463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9241329.166666666,
            "unit": "ns",
            "range": "± 862245.2012857774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394063.2653061224,
            "unit": "ns",
            "range": "± 62513.84611618586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329771.5789473684,
            "unit": "ns",
            "range": "± 61155.561433846015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295064.28571428574,
            "unit": "ns",
            "range": "± 52029.53413860644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6437506.382978723,
            "unit": "ns",
            "range": "± 568214.2528686874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4774289.898989899,
            "unit": "ns",
            "range": "± 489724.6970252984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28191.57894736842,
            "unit": "ns",
            "range": "± 9934.708801457888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110219.79166666667,
            "unit": "ns",
            "range": "± 23776.072092897655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95483.15789473684,
            "unit": "ns",
            "range": "± 23427.16486797751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239834.693877551,
            "unit": "ns",
            "range": "± 45816.87462519444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6004.6511627906975,
            "unit": "ns",
            "range": "± 1098.3310308607206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26835.05154639175,
            "unit": "ns",
            "range": "± 8648.892525890156"
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
          "id": "efbfa4d05e76436dbfb9df3d89430b8630d13e62",
          "message": "[skip changelog] Extract policy validation from internal method",
          "timestamp": "2023-04-04T16:11:20+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/greymistcube/libplanet/commit/efbfa4d05e76436dbfb9df3d89430b8630d13e62"
        },
        "date": 1680593299771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398583.3333333333,
            "unit": "ns",
            "range": "± 76579.23157008803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651541,
            "unit": "ns",
            "range": "± 177923.11987161334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2208438.0434782607,
            "unit": "ns",
            "range": "± 120559.89423199098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5506506.382978723,
            "unit": "ns",
            "range": "± 208510.5423299256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56578.57142857143,
            "unit": "ns",
            "range": "± 6497.56893475211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8051926.666666667,
            "unit": "ns",
            "range": "± 39143.079422378956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20555550,
            "unit": "ns",
            "range": "± 90899.13260142974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50906246.666666664,
            "unit": "ns",
            "range": "± 278963.366429221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102632123.07692307,
            "unit": "ns",
            "range": "± 716643.0935896499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203830884.6153846,
            "unit": "ns",
            "range": "± 820566.2342209736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4881129.520089285,
            "unit": "ns",
            "range": "± 23994.211765441898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538963.359375,
            "unit": "ns",
            "range": "± 3547.286651749205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179146.5625,
            "unit": "ns",
            "range": "± 7488.677008178728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633576.7578125,
            "unit": "ns",
            "range": "± 5662.227045840086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845806.1104910715,
            "unit": "ns",
            "range": "± 1983.0834923427753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775679.5247395834,
            "unit": "ns",
            "range": "± 1740.3514550910957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3420078.5714285714,
            "unit": "ns",
            "range": "± 54647.47412800915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3662206.6666666665,
            "unit": "ns",
            "range": "± 56481.216430985354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4282646.666666667,
            "unit": "ns",
            "range": "± 76144.84192892486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4693005.882352941,
            "unit": "ns",
            "range": "± 64413.75503908536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7734831.578947368,
            "unit": "ns",
            "range": "± 164579.32586726674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341453.4482758621,
            "unit": "ns",
            "range": "± 9933.15094442489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283582.22222222225,
            "unit": "ns",
            "range": "± 10574.374877050843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257875.75757575757,
            "unit": "ns",
            "range": "± 7989.721142780513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5486953.846153846,
            "unit": "ns",
            "range": "± 35915.284939809295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846092.3076923075,
            "unit": "ns",
            "range": "± 29755.628642282725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27905.102040816328,
            "unit": "ns",
            "range": "± 2446.3889841244127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125464.28571428571,
            "unit": "ns",
            "range": "± 7353.479434513599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122106.77966101695,
            "unit": "ns",
            "range": "± 5372.113961573313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211580.68181818182,
            "unit": "ns",
            "range": "± 13196.184209486473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11063.265306122448,
            "unit": "ns",
            "range": "± 1282.6669827670912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28245.918367346938,
            "unit": "ns",
            "range": "± 2404.5132978324277"
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
          "id": "050416c796e9af50793ff1c9074dc9135238e031",
          "message": "Extract policy validation from internal method",
          "timestamp": "2023-04-04T16:10:28+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/greymistcube/libplanet/commit/050416c796e9af50793ff1c9074dc9135238e031"
        },
        "date": 1680593430073,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655968,
            "unit": "ns",
            "range": "± 154758.71991554787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3098461.7021276597,
            "unit": "ns",
            "range": "± 209941.23351131956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2592152.1505376343,
            "unit": "ns",
            "range": "± 195286.19687775453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6613919.587628866,
            "unit": "ns",
            "range": "± 393800.9294150555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54360,
            "unit": "ns",
            "range": "± 4344.754724610041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8586238.461538462,
            "unit": "ns",
            "range": "± 479648.43972069357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23732260.606060605,
            "unit": "ns",
            "range": "± 736322.3037244772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56735009.375,
            "unit": "ns",
            "range": "± 1742966.9529114808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115200817.64705883,
            "unit": "ns",
            "range": "± 3708967.230217956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229918273.33333334,
            "unit": "ns",
            "range": "± 3926832.7363459333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5572300.833333333,
            "unit": "ns",
            "range": "± 103105.49603316125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865818.5772235577,
            "unit": "ns",
            "range": "± 24615.048033381623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381250.8333333333,
            "unit": "ns",
            "range": "± 23457.84665046857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3119440.4052734375,
            "unit": "ns",
            "range": "± 56897.14608398754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987801.3881138393,
            "unit": "ns",
            "range": "± 11944.974668699224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920999.90234375,
            "unit": "ns",
            "range": "± 21807.600121614298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3629991.7647058824,
            "unit": "ns",
            "range": "± 195985.84327625777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3913494.5945945946,
            "unit": "ns",
            "range": "± 130535.37397525187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4542267.213114754,
            "unit": "ns",
            "range": "± 204316.75548953513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4899450.574712643,
            "unit": "ns",
            "range": "± 263494.1898982423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8572676.086956521,
            "unit": "ns",
            "range": "± 316610.762212519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359217.5,
            "unit": "ns",
            "range": "± 17920.58271402263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306369.44444444444,
            "unit": "ns",
            "range": "± 14984.561434261328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261929.34782608695,
            "unit": "ns",
            "range": "± 14964.900605064027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6053156.25,
            "unit": "ns",
            "range": "± 114628.14063309236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4402714.285714285,
            "unit": "ns",
            "range": "± 102264.7802799883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25967.021276595744,
            "unit": "ns",
            "range": "± 2399.7037585032645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108537.5,
            "unit": "ns",
            "range": "± 9296.45376644121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103817.52577319587,
            "unit": "ns",
            "range": "± 10137.512950148719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216973.95833333334,
            "unit": "ns",
            "range": "± 25990.217774311554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9403.157894736842,
            "unit": "ns",
            "range": "± 1443.0650470866449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24090.816326530614,
            "unit": "ns",
            "range": "± 2484.9686979585454"
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
          "id": "e69cbf5dc50d60c6f48fa63a3ffc0d23a8f6f1f0",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T16:40:39+09:00",
          "tree_id": "5d3d0c4d2af044b4fcc2bd04951becd21e60a71c",
          "url": "https://github.com/greymistcube/libplanet/commit/e69cbf5dc50d60c6f48fa63a3ffc0d23a8f6f1f0"
        },
        "date": 1680595276057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679846,
            "unit": "ns",
            "range": "± 173383.40035652756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2960868.656716418,
            "unit": "ns",
            "range": "± 138647.47231187188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2541607.6923076925,
            "unit": "ns",
            "range": "± 128657.09561368254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6589044,
            "unit": "ns",
            "range": "± 436619.6655991102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53686.567164179105,
            "unit": "ns",
            "range": "± 2418.6081348193975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8116071.428571428,
            "unit": "ns",
            "range": "± 136363.594445548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22801343.75,
            "unit": "ns",
            "range": "± 437516.99543179653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57820617.39130435,
            "unit": "ns",
            "range": "± 1436896.8365107856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116867122.72727273,
            "unit": "ns",
            "range": "± 2786245.307446636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232383386.66666666,
            "unit": "ns",
            "range": "± 3814716.8288216675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5798515.885416667,
            "unit": "ns",
            "range": "± 91678.9693585618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838436.9559151786,
            "unit": "ns",
            "range": "± 14927.124178825004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402118.7220982143,
            "unit": "ns",
            "range": "± 11291.107530850057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107843.2756696427,
            "unit": "ns",
            "range": "± 24100.43838712441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977340.2473958334,
            "unit": "ns",
            "range": "± 7792.834337658256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906294.6358816965,
            "unit": "ns",
            "range": "± 4876.62520252254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3719672,
            "unit": "ns",
            "range": "± 149608.50139546188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3847417.073170732,
            "unit": "ns",
            "range": "± 136621.84653714614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4623117.391304348,
            "unit": "ns",
            "range": "± 113474.48512640873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4951909.411764706,
            "unit": "ns",
            "range": "± 260311.61803076082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8396536.842105264,
            "unit": "ns",
            "range": "± 289469.3583382967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376468.4210526316,
            "unit": "ns",
            "range": "± 8177.27560115898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300650,
            "unit": "ns",
            "range": "± 9990.855575072199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258057.5,
            "unit": "ns",
            "range": "± 9035.283756700868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6181169.230769231,
            "unit": "ns",
            "range": "± 84666.77215822219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4885961.764705882,
            "unit": "ns",
            "range": "± 99369.10914837255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24954.736842105263,
            "unit": "ns",
            "range": "± 2454.729192545402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108427.27272727272,
            "unit": "ns",
            "range": "± 8120.870293436536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100806.12244897959,
            "unit": "ns",
            "range": "± 10042.228531643703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 212829.8969072165,
            "unit": "ns",
            "range": "± 21123.54612821739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8552.083333333334,
            "unit": "ns",
            "range": "± 1157.2180039957595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24889.690721649484,
            "unit": "ns",
            "range": "± 2495.6413895063492"
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
          "id": "480aa31a0236c07694ec54dabd4afa2865ad5724",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T16:52:06+09:00",
          "tree_id": "5503b6b48e0c4ca4a169424b9b53cb78ec9d22db",
          "url": "https://github.com/greymistcube/libplanet/commit/480aa31a0236c07694ec54dabd4afa2865ad5724"
        },
        "date": 1680595666765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1644720,
            "unit": "ns",
            "range": "± 30675.58824677555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615474.285714286,
            "unit": "ns",
            "range": "± 126998.74863666769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2344752,
            "unit": "ns",
            "range": "± 203717.22056702903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5856473.232323232,
            "unit": "ns",
            "range": "± 371899.5296703632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55446.31578947369,
            "unit": "ns",
            "range": "± 4383.03816048154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8082338.461538462,
            "unit": "ns",
            "range": "± 116876.08493943162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20200826.666666668,
            "unit": "ns",
            "range": "± 218165.66269913418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51090450,
            "unit": "ns",
            "range": "± 354845.346052875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101555600,
            "unit": "ns",
            "range": "± 1242374.993999109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205003913.33333334,
            "unit": "ns",
            "range": "± 2808651.9847140363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4906346.694711538,
            "unit": "ns",
            "range": "± 19528.22999608446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538284.849330357,
            "unit": "ns",
            "range": "± 11182.485737796153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167371.1263020833,
            "unit": "ns",
            "range": "± 9873.875060110326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688493.0078125,
            "unit": "ns",
            "range": "± 42966.40212634752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845852.9672475961,
            "unit": "ns",
            "range": "± 3547.8822862602656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778633.4114583334,
            "unit": "ns",
            "range": "± 8166.92003504734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370841.6666666665,
            "unit": "ns",
            "range": "± 109582.85938698886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608542.8571428573,
            "unit": "ns",
            "range": "± 84618.94924559494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4003943.75,
            "unit": "ns",
            "range": "± 73989.01692143233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4544455.263157895,
            "unit": "ns",
            "range": "± 155086.4269896478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7499200,
            "unit": "ns",
            "range": "± 185435.43819650664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328772.97297297296,
            "unit": "ns",
            "range": "± 10062.240987657457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274637.9310344828,
            "unit": "ns",
            "range": "± 11568.345005686808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247787.5,
            "unit": "ns",
            "range": "± 12985.068104206695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5380842.857142857,
            "unit": "ns",
            "range": "± 56630.78415743256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3812271.4285714286,
            "unit": "ns",
            "range": "± 51062.441843618944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24426.288659793816,
            "unit": "ns",
            "range": "± 2763.2172219728873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107241.23711340207,
            "unit": "ns",
            "range": "± 7922.15712123966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105121,
            "unit": "ns",
            "range": "± 10930.57333049522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202151.02040816325,
            "unit": "ns",
            "range": "± 21493.788337386286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9265.30612244898,
            "unit": "ns",
            "range": "± 1404.6573519748417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25132.65306122449,
            "unit": "ns",
            "range": "± 3633.9117405609077"
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
          "id": "065b9547bba5f11d2ab78eb4e5527130aa4e6322",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T17:08:47+09:00",
          "tree_id": "7aef8e6de3de38f753c5cd5fcc741ff6b981714e",
          "url": "https://github.com/greymistcube/libplanet/commit/065b9547bba5f11d2ab78eb4e5527130aa4e6322"
        },
        "date": 1680596634922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312593.8144329898,
            "unit": "ns",
            "range": "± 124006.20516600588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2401077.1428571427,
            "unit": "ns",
            "range": "± 77223.62898717969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2040778.3505154639,
            "unit": "ns",
            "range": "± 125817.57066847828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5038041.860465116,
            "unit": "ns",
            "range": "± 176489.17980129106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42627.86885245902,
            "unit": "ns",
            "range": "± 1814.490851225304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6817150,
            "unit": "ns",
            "range": "± 15424.992207952153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17245506.666666668,
            "unit": "ns",
            "range": "± 110143.36415175753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43799326.666666664,
            "unit": "ns",
            "range": "± 229594.115363447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88113913.33333333,
            "unit": "ns",
            "range": "± 796687.8595308262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174625814.2857143,
            "unit": "ns",
            "range": "± 802104.0445239996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4783537.682291667,
            "unit": "ns",
            "range": "± 14028.389018603091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497492.12890625,
            "unit": "ns",
            "range": "± 3289.6960872026657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144419.3619791667,
            "unit": "ns",
            "range": "± 2429.512304412055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629318.9583333335,
            "unit": "ns",
            "range": "± 4626.900873026535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827433.5221354166,
            "unit": "ns",
            "range": "± 3856.477010194923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742972.685546875,
            "unit": "ns",
            "range": "± 1091.9494283365193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2857623.529411765,
            "unit": "ns",
            "range": "± 81093.72825886939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3015565.3846153845,
            "unit": "ns",
            "range": "± 34955.61104586421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3849580,
            "unit": "ns",
            "range": "± 62394.69070819591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4043042.8571428573,
            "unit": "ns",
            "range": "± 49695.483687163156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6987055.555555556,
            "unit": "ns",
            "range": "± 154184.72120793373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286654.54545454547,
            "unit": "ns",
            "range": "± 12219.198891450354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232997.5,
            "unit": "ns",
            "range": "± 7960.237320904962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215123.5294117647,
            "unit": "ns",
            "range": "± 6949.735500679991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5150236.666666667,
            "unit": "ns",
            "range": "± 44953.43410792148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551592.8571428573,
            "unit": "ns",
            "range": "± 39729.1496217869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15768.421052631578,
            "unit": "ns",
            "range": "± 1409.4108591056186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76756,
            "unit": "ns",
            "range": "± 3886.714724719496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67483.51648351649,
            "unit": "ns",
            "range": "± 3790.551520594441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143386.14457831325,
            "unit": "ns",
            "range": "± 7924.823277451819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4629.787234042553,
            "unit": "ns",
            "range": "± 538.1828819824484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14852.083333333334,
            "unit": "ns",
            "range": "± 1322.1178517950234"
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
          "id": "a54cfa7f4a65c52d69e47bc4a79e3dbc5e66b7c0",
          "message": "Revert logic",
          "timestamp": "2023-04-04T17:26:07+09:00",
          "tree_id": "a0a3eb35d8de4442dd0c85c0b01ee9bc8f1a55cb",
          "url": "https://github.com/greymistcube/libplanet/commit/a54cfa7f4a65c52d69e47bc4a79e3dbc5e66b7c0"
        },
        "date": 1680597644443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1459584.0909090908,
            "unit": "ns",
            "range": "± 54647.08312895732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2426428,
            "unit": "ns",
            "range": "± 89947.64018866868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345083.3333333335,
            "unit": "ns",
            "range": "± 32440.76653430577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5178078.787878788,
            "unit": "ns",
            "range": "± 162003.84786629252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43018.055555555555,
            "unit": "ns",
            "range": "± 2136.75589231643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6958125,
            "unit": "ns",
            "range": "± 24764.899096760466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17686153.333333332,
            "unit": "ns",
            "range": "± 124434.66941484174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45079333.333333336,
            "unit": "ns",
            "range": "± 274452.69086640334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90841780,
            "unit": "ns",
            "range": "± 402429.93569422385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179292693.33333334,
            "unit": "ns",
            "range": "± 1784307.5757706072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876851.322115385,
            "unit": "ns",
            "range": "± 4447.23094707027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512292.0619419643,
            "unit": "ns",
            "range": "± 1875.6887880256647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149914.3229166667,
            "unit": "ns",
            "range": "± 2069.867753919909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708117.3046875,
            "unit": "ns",
            "range": "± 11769.518719841251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823731.7122395834,
            "unit": "ns",
            "range": "± 1487.769020119728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749047.9296875,
            "unit": "ns",
            "range": "± 726.6780818294255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2917582.4324324327,
            "unit": "ns",
            "range": "± 97739.56339298969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3002635,
            "unit": "ns",
            "range": "± 76793.39097497842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3854212.5,
            "unit": "ns",
            "range": "± 70472.79262240145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3878400,
            "unit": "ns",
            "range": "± 160723.8309167667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7024400,
            "unit": "ns",
            "range": "± 172450.83357293464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292230.30303030304,
            "unit": "ns",
            "range": "± 8927.46761575213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252926.31578947368,
            "unit": "ns",
            "range": "± 5404.200229169814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218249.23076923078,
            "unit": "ns",
            "range": "± 10216.394959159441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5203813.333333333,
            "unit": "ns",
            "range": "± 65461.96132833465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729840,
            "unit": "ns",
            "range": "± 46643.01815767439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17803.092783505155,
            "unit": "ns",
            "range": "± 2154.1362155285224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80030.52631578948,
            "unit": "ns",
            "range": "± 4995.33982155476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81180.80808080808,
            "unit": "ns",
            "range": "± 10241.150253951733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154201.03092783506,
            "unit": "ns",
            "range": "± 15616.574360577615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5391.7525773195875,
            "unit": "ns",
            "range": "± 697.8643169062285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16503.125,
            "unit": "ns",
            "range": "± 1775.2362704128918"
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
          "id": "d03672cbbf35c6aedf46d26a44b568d4e23d6e35",
          "message": "Revert logic",
          "timestamp": "2023-04-05T10:14:09+09:00",
          "tree_id": "a3c48c096313c865f71392128948bff85e69cd83",
          "url": "https://github.com/greymistcube/libplanet/commit/d03672cbbf35c6aedf46d26a44b568d4e23d6e35"
        },
        "date": 1680658214213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314301.1904761905,
            "unit": "ns",
            "range": "± 69188.62552602233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2404634.210526316,
            "unit": "ns",
            "range": "± 82925.79970954753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187835.714285714,
            "unit": "ns",
            "range": "± 156777.4160900615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5126790.322580645,
            "unit": "ns",
            "range": "± 156262.23761109338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47358.02469135803,
            "unit": "ns",
            "range": "± 2497.491951815404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6826413.333333333,
            "unit": "ns",
            "range": "± 35757.53400467149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18979155,
            "unit": "ns",
            "range": "± 422663.45386943745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47661963.333333336,
            "unit": "ns",
            "range": "± 797839.2040529279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93388000,
            "unit": "ns",
            "range": "± 1886264.4266005824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185699206.66666666,
            "unit": "ns",
            "range": "± 2605888.926606336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4769828.854166667,
            "unit": "ns",
            "range": "± 21240.817974775295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1599701.7838541667,
            "unit": "ns",
            "range": "± 6411.322173307611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149856.3541666667,
            "unit": "ns",
            "range": "± 4984.996317133172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683752.6822916665,
            "unit": "ns",
            "range": "± 7376.739603981038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812137.6171875,
            "unit": "ns",
            "range": "± 1729.5929827965065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764331.5234375,
            "unit": "ns",
            "range": "± 2302.382018834395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3003906.6666666665,
            "unit": "ns",
            "range": "± 49501.276558815945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3112592.4242424243,
            "unit": "ns",
            "range": "± 146097.65786634857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912504.761904762,
            "unit": "ns",
            "range": "± 90309.66435653759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4043132.967032967,
            "unit": "ns",
            "range": "± 225751.06253223313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7044178.378378378,
            "unit": "ns",
            "range": "± 223972.60637945976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310100,
            "unit": "ns",
            "range": "± 6060.940521074266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248095.2380952381,
            "unit": "ns",
            "range": "± 11339.844519777107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210674.07407407407,
            "unit": "ns",
            "range": "± 5717.556806928624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5166037.5,
            "unit": "ns",
            "range": "± 99316.79867978024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3552876.923076923,
            "unit": "ns",
            "range": "± 46707.58599781827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18816.842105263157,
            "unit": "ns",
            "range": "± 1515.6385236521603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86803.26086956522,
            "unit": "ns",
            "range": "± 6240.323517377036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78759.1836734694,
            "unit": "ns",
            "range": "± 7202.374132268747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 174526.04166666666,
            "unit": "ns",
            "range": "± 18314.036864436246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6432.98969072165,
            "unit": "ns",
            "range": "± 956.5260113082545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19181.052631578947,
            "unit": "ns",
            "range": "± 1630.0564366187295"
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
          "id": "3d40dfd2b845c3fd17184cec15d4c4649234121b",
          "message": "Revert logic",
          "timestamp": "2023-04-05T11:59:06+09:00",
          "tree_id": "d5695dc031f3ab84fe5407544e7651a49e6b3c70",
          "url": "https://github.com/greymistcube/libplanet/commit/3d40dfd2b845c3fd17184cec15d4c4649234121b"
        },
        "date": 1680664487652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425542.268041237,
            "unit": "ns",
            "range": "± 104682.34075351841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762787.3684210526,
            "unit": "ns",
            "range": "± 160662.3029320402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2284185.1063829786,
            "unit": "ns",
            "range": "± 159344.45137624707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5664515.294117647,
            "unit": "ns",
            "range": "± 305970.7469311258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52772.52747252747,
            "unit": "ns",
            "range": "± 3671.756041704355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7517390,
            "unit": "ns",
            "range": "± 110240.87134219194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20193673.333333332,
            "unit": "ns",
            "range": "± 257818.98541049156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50926800,
            "unit": "ns",
            "range": "± 248860.82224037164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103155760,
            "unit": "ns",
            "range": "± 1155734.1030086214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202579691.66666666,
            "unit": "ns",
            "range": "± 634497.3091974369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4911180.15625,
            "unit": "ns",
            "range": "± 50667.83726902607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546140.44921875,
            "unit": "ns",
            "range": "± 17833.123589301285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190209.5963541667,
            "unit": "ns",
            "range": "± 14205.586780229354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696039.1015625,
            "unit": "ns",
            "range": "± 27943.291211948435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861008.45703125,
            "unit": "ns",
            "range": "± 11473.455749308403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776641.3155691965,
            "unit": "ns",
            "range": "± 10610.204945847978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3377957.1428571427,
            "unit": "ns",
            "range": "± 96789.16540441156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483668.253968254,
            "unit": "ns",
            "range": "± 131878.70260865064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4017213.3333333335,
            "unit": "ns",
            "range": "± 141599.80996391972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4408055.072463769,
            "unit": "ns",
            "range": "± 203945.67942889908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7468450,
            "unit": "ns",
            "range": "± 216378.8707098158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326631.1111111111,
            "unit": "ns",
            "range": "± 11179.604445397681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267468.25396825396,
            "unit": "ns",
            "range": "± 12287.744030285407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238241.23711340205,
            "unit": "ns",
            "range": "± 18428.435639529336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5407607.142857143,
            "unit": "ns",
            "range": "± 63397.142186084675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3818500,
            "unit": "ns",
            "range": "± 62673.21331052579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24752.577319587628,
            "unit": "ns",
            "range": "± 2660.8697193267917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101907.36842105263,
            "unit": "ns",
            "range": "± 8375.435741033638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104490.8163265306,
            "unit": "ns",
            "range": "± 10710.463972302918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 200658.76288659795,
            "unit": "ns",
            "range": "± 18114.34602150852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9129.032258064517,
            "unit": "ns",
            "range": "± 1307.551698633855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23169.791666666668,
            "unit": "ns",
            "range": "± 2455.503798308765"
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
          "id": "ed8b6f936ff5b507eeb1d78a90bd6b3dcd80c09f",
          "message": "Remove special treatment for self proposed block",
          "timestamp": "2023-04-05T13:41:21+09:00",
          "tree_id": "7bc319be35283a9fdc87e682163f22705b826c5f",
          "url": "https://github.com/greymistcube/libplanet/commit/ed8b6f936ff5b507eeb1d78a90bd6b3dcd80c09f"
        },
        "date": 1680670756148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478022.3404255318,
            "unit": "ns",
            "range": "± 119201.93506607083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2883694,
            "unit": "ns",
            "range": "± 261528.15512527962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2346466.326530612,
            "unit": "ns",
            "range": "± 214108.32451729572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6309194,
            "unit": "ns",
            "range": "± 652325.4304688448"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52806.45161290323,
            "unit": "ns",
            "range": "± 5502.347452631563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7569209.574468086,
            "unit": "ns",
            "range": "± 428300.8381638541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20791696.774193548,
            "unit": "ns",
            "range": "± 945122.9729975798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51236915.90909091,
            "unit": "ns",
            "range": "± 1888973.833635506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106031129.26829268,
            "unit": "ns",
            "range": "± 3796367.1616588864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208320376.59574467,
            "unit": "ns",
            "range": "± 8113681.540117306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5493157.8125,
            "unit": "ns",
            "range": "± 141877.85561514032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1813003.0989583333,
            "unit": "ns",
            "range": "± 17839.866430628517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316141.4888822115,
            "unit": "ns",
            "range": "± 34869.81269980514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2953080.050223214,
            "unit": "ns",
            "range": "± 35616.04309434842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929680.263671875,
            "unit": "ns",
            "range": "± 11594.880391652368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864339.501953125,
            "unit": "ns",
            "range": "± 20146.425031952993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3223838.383838384,
            "unit": "ns",
            "range": "± 226612.75911404396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3397352.6315789474,
            "unit": "ns",
            "range": "± 238316.75544084635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275811.70212766,
            "unit": "ns",
            "range": "± 265631.6383282356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4616103.03030303,
            "unit": "ns",
            "range": "± 216690.02388715188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8105906.12244898,
            "unit": "ns",
            "range": "± 602854.2112004603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338741.3043478261,
            "unit": "ns",
            "range": "± 24158.397407794822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278038.1443298969,
            "unit": "ns",
            "range": "± 21027.969683747844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245388.42105263157,
            "unit": "ns",
            "range": "± 14405.413160734644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5980709.090909091,
            "unit": "ns",
            "range": "± 145815.96329454175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4016590.5263157897,
            "unit": "ns",
            "range": "± 240164.53405932523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22397.95918367347,
            "unit": "ns",
            "range": "± 2089.491606485794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98547.91666666667,
            "unit": "ns",
            "range": "± 10219.403414111357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87616.66666666667,
            "unit": "ns",
            "range": "± 8899.765421706548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197992.85714285713,
            "unit": "ns",
            "range": "± 22549.333087264742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6943.877551020408,
            "unit": "ns",
            "range": "± 1215.7952152686855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20217.894736842107,
            "unit": "ns",
            "range": "± 2140.4403477833275"
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
          "id": "f328cbab3729a7d8a8b6a00aaea2778178c28405",
          "message": "Changed test",
          "timestamp": "2023-04-05T14:22:46+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/greymistcube/libplanet/commit/f328cbab3729a7d8a8b6a00aaea2778178c28405"
        },
        "date": 1680673265208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483619.3548387096,
            "unit": "ns",
            "range": "± 121275.82043143791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2737804.347826087,
            "unit": "ns",
            "range": "± 131956.92973219644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2444662.626262626,
            "unit": "ns",
            "range": "± 226711.15876224104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6076108.433734939,
            "unit": "ns",
            "range": "± 311956.7352760672"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62436.458333333336,
            "unit": "ns",
            "range": "± 7339.821018779635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210869.230769231,
            "unit": "ns",
            "range": "± 30257.268675349856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20195040,
            "unit": "ns",
            "range": "± 149658.68692270614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50985486.666666664,
            "unit": "ns",
            "range": "± 413308.7100576563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93635010.71428572,
            "unit": "ns",
            "range": "± 2668861.9919552184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197593146.31578946,
            "unit": "ns",
            "range": "± 11259159.977384754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4771977.447916667,
            "unit": "ns",
            "range": "± 32312.951494241526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504515.625,
            "unit": "ns",
            "range": "± 9620.29661999847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137644.0234375,
            "unit": "ns",
            "range": "± 10006.744211300107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644110.4427083335,
            "unit": "ns",
            "range": "± 10740.68711566007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806935.7421875,
            "unit": "ns",
            "range": "± 2936.7522294932623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762359.7795758928,
            "unit": "ns",
            "range": "± 2235.3482918179743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394646.0784313725,
            "unit": "ns",
            "range": "± 120860.84222904342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3619478.5714285714,
            "unit": "ns",
            "range": "± 82903.32324636333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4413428.571428572,
            "unit": "ns",
            "range": "± 76397.66839546699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4549211.594202898,
            "unit": "ns",
            "range": "± 218611.96655814874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7882535.714285715,
            "unit": "ns",
            "range": "± 113830.01231352259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349635.48387096776,
            "unit": "ns",
            "range": "± 10534.215629306776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247496.51162790696,
            "unit": "ns",
            "range": "± 12597.641681020803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207937.93103448275,
            "unit": "ns",
            "range": "± 5461.319424115087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5061292.857142857,
            "unit": "ns",
            "range": "± 42408.55255335096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936471.4285714286,
            "unit": "ns",
            "range": "± 56447.53082521623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24771.428571428572,
            "unit": "ns",
            "range": "± 5410.985389612314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85308.0808080808,
            "unit": "ns",
            "range": "± 6542.041071497376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77910.75268817204,
            "unit": "ns",
            "range": "± 4545.410068208593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 163423.40425531915,
            "unit": "ns",
            "range": "± 15380.23047167051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10586.842105263158,
            "unit": "ns",
            "range": "± 1318.1267035907151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30373.469387755104,
            "unit": "ns",
            "range": "± 3219.4816455546907"
          }
        ]
      }
    ]
  }
}