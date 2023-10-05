window.BENCHMARK_DATA = {
  "lastUpdate": 1696480539744,
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
          "id": "bc7a99c65e5a7aacb0d24f5ac3d72213f300a257",
          "message": "Cleanup",
          "timestamp": "2023-10-05T11:56:09+09:00",
          "tree_id": "06d15ec5d16917f0ef69baf8d4d45a0825f90f34",
          "url": "https://github.com/greymistcube/libplanet/commit/bc7a99c65e5a7aacb0d24f5ac3d72213f300a257"
        },
        "date": 1696475559523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8508226.884615384,
            "unit": "ns",
            "range": "± 231527.9289024677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23639302.88028169,
            "unit": "ns",
            "range": "± 1153942.6487335293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53400606.3,
            "unit": "ns",
            "range": "± 1291141.6233325258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106143879.04,
            "unit": "ns",
            "range": "± 2833447.18558135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217743006.93333334,
            "unit": "ns",
            "range": "± 3269749.9004050856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72172.62903225806,
            "unit": "ns",
            "range": "± 8600.093054635345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348625.0306122449,
            "unit": "ns",
            "range": "± 37307.15449369704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318584.86559139786,
            "unit": "ns",
            "range": "± 18639.94582399348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307706.44444444444,
            "unit": "ns",
            "range": "± 10272.004953671603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4088301.3571428573,
            "unit": "ns",
            "range": "± 67213.3195048618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3605958.5714285714,
            "unit": "ns",
            "range": "± 47239.961231851295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26150.204545454544,
            "unit": "ns",
            "range": "± 3191.370181574235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111019.08421052631,
            "unit": "ns",
            "range": "± 15715.016423968482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105308.05208333333,
            "unit": "ns",
            "range": "± 21583.946809398476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114272.91578947369,
            "unit": "ns",
            "range": "± 12655.170173509827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8661.144329896908,
            "unit": "ns",
            "range": "± 2363.4565523371107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25041.733333333334,
            "unit": "ns",
            "range": "± 2901.7204303963836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483189.3636363635,
            "unit": "ns",
            "range": "± 188857.0954539304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799027.9178082193,
            "unit": "ns",
            "range": "± 138474.27664770183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2407470.397959184,
            "unit": "ns",
            "range": "± 234048.55459122584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10047620.7,
            "unit": "ns",
            "range": "± 326348.1562314917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322936.138297872,
            "unit": "ns",
            "range": "± 188549.17421317418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3495447.206185567,
            "unit": "ns",
            "range": "± 246511.09482510868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4328238.697674419,
            "unit": "ns",
            "range": "± 126454.62116008159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4355070.186868687,
            "unit": "ns",
            "range": "± 263642.44766433525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15837015.114583334,
            "unit": "ns",
            "range": "± 2002825.9272307684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5799178.078125,
            "unit": "ns",
            "range": "± 70201.26179823176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1787151.2614182692,
            "unit": "ns",
            "range": "± 12726.011449974776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047670.853515625,
            "unit": "ns",
            "range": "± 16855.131137817818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2733143.5169147993,
            "unit": "ns",
            "range": "± 112822.11365174985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852099.1477399553,
            "unit": "ns",
            "range": "± 7667.693244643426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867297.4792829241,
            "unit": "ns",
            "range": "± 11049.399442731221"
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
          "id": "84e61d82f856a4a630e3d5fc6670cbf94c9739b9",
          "message": "Changelog",
          "timestamp": "2023-10-05T13:15:38+09:00",
          "tree_id": "9797c7c0709f56c9fe5d66d476268229bccec779",
          "url": "https://github.com/greymistcube/libplanet/commit/84e61d82f856a4a630e3d5fc6670cbf94c9739b9"
        },
        "date": 1696480525256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11601272.53,
            "unit": "ns",
            "range": "± 2377816.3054459216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21593502.325581394,
            "unit": "ns",
            "range": "± 797402.4153916062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49931869.76829268,
            "unit": "ns",
            "range": "± 1756362.2934140188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112812177.34285714,
            "unit": "ns",
            "range": "± 5470794.997795981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225847654.8478261,
            "unit": "ns",
            "range": "± 5315379.939573871"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76409.91489361702,
            "unit": "ns",
            "range": "± 13423.769413101518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331023.3510638298,
            "unit": "ns",
            "range": "± 36553.753437727595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328364.69587628864,
            "unit": "ns",
            "range": "± 28301.341687733042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335676.3626373626,
            "unit": "ns",
            "range": "± 22098.83823468077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4444167.171428571,
            "unit": "ns",
            "range": "± 214456.35760908487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3916553.9137931033,
            "unit": "ns",
            "range": "± 168914.072386689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26159.47311827957,
            "unit": "ns",
            "range": "± 4597.719932539809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119539.27659574468,
            "unit": "ns",
            "range": "± 13230.785676655674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121544.97872340426,
            "unit": "ns",
            "range": "± 16967.92280564277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113122.69791666667,
            "unit": "ns",
            "range": "± 14218.380847280445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5950.826530612245,
            "unit": "ns",
            "range": "± 1897.8079271520169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17741.93956043956,
            "unit": "ns",
            "range": "± 2644.1406846450814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492049.1075268816,
            "unit": "ns",
            "range": "± 169841.6090681488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2874822.625,
            "unit": "ns",
            "range": "± 149401.9134757384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2434940.9835164836,
            "unit": "ns",
            "range": "± 266315.00600159634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11474809.331460673,
            "unit": "ns",
            "range": "± 1138364.9430006482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3566350.4210526315,
            "unit": "ns",
            "range": "± 219789.17537710656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547553.42,
            "unit": "ns",
            "range": "± 175215.10662509143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4638051.364583333,
            "unit": "ns",
            "range": "± 279002.2940417146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4483497.902173913,
            "unit": "ns",
            "range": "± 288200.76811399346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15601384.466292135,
            "unit": "ns",
            "range": "± 2158679.991609695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6432558.601902174,
            "unit": "ns",
            "range": "± 161527.5620214987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837044.0470214845,
            "unit": "ns",
            "range": "± 64320.55097180548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078458.8057355182,
            "unit": "ns",
            "range": "± 38745.66055958745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857473.5908203125,
            "unit": "ns",
            "range": "± 160338.02305593836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806539.6688639323,
            "unit": "ns",
            "range": "± 8351.97790343527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753533.6176618304,
            "unit": "ns",
            "range": "± 22569.109028251896"
          }
        ]
      }
    ]
  }
}