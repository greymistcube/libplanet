window.BENCHMARK_DATA = {
  "lastUpdate": 1692332404884,
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
          "id": "fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:03:47+09:00",
          "tree_id": "f8d4e920eefba0d306e903ac9034f3c4cc0c3174",
          "url": "https://github.com/greymistcube/libplanet/commit/fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c"
        },
        "date": 1692332341739,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483167.2386363635,
            "unit": "ns",
            "range": "± 80901.86971185173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2784315.2580645164,
            "unit": "ns",
            "range": "± 84583.62893884677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1835411.9375,
            "unit": "ns",
            "range": "± 95010.31222262989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4835718.230769231,
            "unit": "ns",
            "range": "± 165912.04313152473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283529.9032258064,
            "unit": "ns",
            "range": "± 8607.130673090534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274951.3617021277,
            "unit": "ns",
            "range": "± 9404.64287842315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244119.65714285715,
            "unit": "ns",
            "range": "± 7809.530557341485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4611156.133333334,
            "unit": "ns",
            "range": "± 44450.90096928241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4129208.4285714286,
            "unit": "ns",
            "range": "± 52741.12053112941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22000.597826086956,
            "unit": "ns",
            "range": "± 1606.863787656917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93410.05319148937,
            "unit": "ns",
            "range": "± 5440.665053368631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80953.79569892473,
            "unit": "ns",
            "range": "± 5257.09036436618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88248.37373737374,
            "unit": "ns",
            "range": "± 14040.63045315845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5849.655913978495,
            "unit": "ns",
            "range": "± 729.9814395291403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20684.542553191488,
            "unit": "ns",
            "range": "± 1411.0485208798748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48588.59574468085,
            "unit": "ns",
            "range": "± 2699.4276188164426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8791456.833333334,
            "unit": "ns",
            "range": "± 177906.2449187443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22832887.2,
            "unit": "ns",
            "range": "± 196769.5142909955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57587612.333333336,
            "unit": "ns",
            "range": "± 377495.40796141134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115363721.26666667,
            "unit": "ns",
            "range": "± 688950.6205088252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229274817.86666667,
            "unit": "ns",
            "range": "± 896438.0288563388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3711468.8666666667,
            "unit": "ns",
            "range": "± 55552.92518833687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3798577.1153846155,
            "unit": "ns",
            "range": "± 99996.99383214556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4877697.692307692,
            "unit": "ns",
            "range": "± 132111.88737786445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4169032.8571428573,
            "unit": "ns",
            "range": "± 72737.72741935143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6570152.055555556,
            "unit": "ns",
            "range": "± 218511.59969065315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4983163.743990385,
            "unit": "ns",
            "range": "± 22157.934416278324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612522.364453125,
            "unit": "ns",
            "range": "± 881.5727482292962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1093490.853236607,
            "unit": "ns",
            "range": "± 588.3259619661461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596106.16484375,
            "unit": "ns",
            "range": "± 5972.62885093837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838958.8857421875,
            "unit": "ns",
            "range": "± 320.7539938302904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745033.4972330729,
            "unit": "ns",
            "range": "± 231.69994891920933"
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
          "id": "b327162b0138de3d8d4152ec0c253021c659619a",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:06:35+09:00",
          "tree_id": "1dff3457ca856391c36cd0caec5a2543921a250f",
          "url": "https://github.com/greymistcube/libplanet/commit/b327162b0138de3d8d4152ec0c253021c659619a"
        },
        "date": 1692332396464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222313.9375,
            "unit": "ns",
            "range": "± 93831.10716633628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411976.5142857144,
            "unit": "ns",
            "range": "± 104801.2616808796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4223661.533333333,
            "unit": "ns",
            "range": "± 43743.533663954535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3679886,
            "unit": "ns",
            "range": "± 137703.64279233527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5994137.916666667,
            "unit": "ns",
            "range": "± 177354.33966745378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7572920.230769231,
            "unit": "ns",
            "range": "± 20582.017175817367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19542447.2,
            "unit": "ns",
            "range": "± 115736.77445899133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50688316.4,
            "unit": "ns",
            "range": "± 328059.1275473284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102439069.35714285,
            "unit": "ns",
            "range": "± 510965.77241136174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202897168.64285713,
            "unit": "ns",
            "range": "± 1377425.8163792682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46578.93406593407,
            "unit": "ns",
            "range": "± 2743.8011622248832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4913236.076322115,
            "unit": "ns",
            "range": "± 4574.298364353228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593966.2280970982,
            "unit": "ns",
            "range": "± 3927.702776122389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072541.3381911058,
            "unit": "ns",
            "range": "± 348.5636859060764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559818.137276786,
            "unit": "ns",
            "range": "± 7349.060155900468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859629.9405598958,
            "unit": "ns",
            "range": "± 13829.323965837582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726738.3518229167,
            "unit": "ns",
            "range": "± 392.8719374511808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261826.18181818182,
            "unit": "ns",
            "range": "± 8198.100311069597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253318.9,
            "unit": "ns",
            "range": "± 8330.993051282232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222620.42857142858,
            "unit": "ns",
            "range": "± 2224.4026238446654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4148661.6,
            "unit": "ns",
            "range": "± 31943.63357496183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3885236.923076923,
            "unit": "ns",
            "range": "± 21227.606241486337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19720.957894736843,
            "unit": "ns",
            "range": "± 1325.6844150932197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86107.50980392157,
            "unit": "ns",
            "range": "± 3523.95726632744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71549.59375,
            "unit": "ns",
            "range": "± 2077.639073554326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72512.27011494253,
            "unit": "ns",
            "range": "± 8206.057797410724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4517.010638297872,
            "unit": "ns",
            "range": "± 518.5878363128385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17865.917525773195,
            "unit": "ns",
            "range": "± 1840.8719892016252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355042.4315789475,
            "unit": "ns",
            "range": "± 89509.29477477586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546304.5263157897,
            "unit": "ns",
            "range": "± 55601.63847742501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1713974.5666666667,
            "unit": "ns",
            "range": "± 94486.71889873368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4526215.419354838,
            "unit": "ns",
            "range": "± 135177.49866077915"
          }
        ]
      }
    ]
  }
}