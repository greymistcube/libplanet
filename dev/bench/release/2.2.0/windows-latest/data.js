window.BENCHMARK_DATA = {
  "lastUpdate": 1687486450793,
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
          "id": "a1b809aebe20f9fa9d23c821b674da5f9365766b",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:51:07+09:00",
          "tree_id": "378e041fcf4b607cf95c54995288889dcc255288",
          "url": "https://github.com/greymistcube/libplanet/commit/a1b809aebe20f9fa9d23c821b674da5f9365766b"
        },
        "date": 1687486137804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415023,
            "unit": "ns",
            "range": "± 127507.73940067602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651527.906976744,
            "unit": "ns",
            "range": "± 143616.6381080203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250795.9183673467,
            "unit": "ns",
            "range": "± 166866.69531031972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5443222.580645162,
            "unit": "ns",
            "range": "± 307055.3639814644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49221.05263157895,
            "unit": "ns",
            "range": "± 3459.0890061574873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7141886.666666667,
            "unit": "ns",
            "range": "± 111002.81763905601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19781960,
            "unit": "ns",
            "range": "± 214736.06989578094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50160992.85714286,
            "unit": "ns",
            "range": "± 491600.2933345274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100876046.66666667,
            "unit": "ns",
            "range": "± 1409747.8902609637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201538766.66666666,
            "unit": "ns",
            "range": "± 2323063.5080386745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4795039.375,
            "unit": "ns",
            "range": "± 22159.247383294158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528805.2455357143,
            "unit": "ns",
            "range": "± 9781.328222144613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161678.2602163462,
            "unit": "ns",
            "range": "± 3417.1451122440485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619118.6979166665,
            "unit": "ns",
            "range": "± 5673.316954449861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841160.2604166666,
            "unit": "ns",
            "range": "± 2546.749769060153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761068.0598958334,
            "unit": "ns",
            "range": "± 2972.9800057054977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299473.3333333335,
            "unit": "ns",
            "range": "± 57102.232464072295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471440,
            "unit": "ns",
            "range": "± 109445.33741714602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4201431.428571428,
            "unit": "ns",
            "range": "± 136818.67943382877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4324690.909090909,
            "unit": "ns",
            "range": "± 134812.36813539302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6763010,
            "unit": "ns",
            "range": "± 181419.72357891046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266781.8181818182,
            "unit": "ns",
            "range": "± 8339.718765696425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259625.37313432837,
            "unit": "ns",
            "range": "± 12296.96123196619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233912.16216216216,
            "unit": "ns",
            "range": "± 11726.190715047745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4041380,
            "unit": "ns",
            "range": "± 51811.51554294801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3734194.4444444445,
            "unit": "ns",
            "range": "± 77036.23648664402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20831.25,
            "unit": "ns",
            "range": "± 2068.6284548488948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91220.40816326531,
            "unit": "ns",
            "range": "± 7349.4120556439075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75250,
            "unit": "ns",
            "range": "± 4889.313307140852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101311.22448979592,
            "unit": "ns",
            "range": "± 16294.809006153553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6237.894736842105,
            "unit": "ns",
            "range": "± 1031.5428382280902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20890.721649484534,
            "unit": "ns",
            "range": "± 2313.4156959203383"
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
          "id": "58124168990c3af08c89e89de164f2e90c7e8132",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:52:07+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/greymistcube/libplanet/commit/58124168990c3af08c89e89de164f2e90c7e8132"
        },
        "date": 1687486425101,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704621.0526315789,
            "unit": "ns",
            "range": "± 149114.2029101134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3185264.285714286,
            "unit": "ns",
            "range": "± 154540.00564153382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764857.7319587627,
            "unit": "ns",
            "range": "± 220047.60793360695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6650029.577464789,
            "unit": "ns",
            "range": "± 324581.0409014613"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56263.333333333336,
            "unit": "ns",
            "range": "± 3702.396733608341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9256133.333333334,
            "unit": "ns",
            "range": "± 100403.76064428638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25052900,
            "unit": "ns",
            "range": "± 259533.4135083048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65722344.23076923,
            "unit": "ns",
            "range": "± 2701687.6373063386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128480039.39393939,
            "unit": "ns",
            "range": "± 3992634.666791105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263672181.4814815,
            "unit": "ns",
            "range": "± 7349816.351972394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6121512.734375,
            "unit": "ns",
            "range": "± 136240.06226539455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963999.1015625,
            "unit": "ns",
            "range": "± 28924.3876370421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1506950.0651041667,
            "unit": "ns",
            "range": "± 23246.660581119075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3303657.3958333335,
            "unit": "ns",
            "range": "± 53407.41856213689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027320.1895254629,
            "unit": "ns",
            "range": "± 28539.63724923745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969055.6457519531,
            "unit": "ns",
            "range": "± 17823.170271212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4134304.347826087,
            "unit": "ns",
            "range": "± 97302.1184402705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4145191.304347826,
            "unit": "ns",
            "range": "± 150184.9272302309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5136088.235294118,
            "unit": "ns",
            "range": "± 149508.3297305656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5251857.142857143,
            "unit": "ns",
            "range": "± 182811.11022283608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8069885.714285715,
            "unit": "ns",
            "range": "± 142128.1645728079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317675.55555555556,
            "unit": "ns",
            "range": "± 10326.557896017335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298017.77777777775,
            "unit": "ns",
            "range": "± 10181.830717885501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285032.07547169813,
            "unit": "ns",
            "range": "± 11724.018305383344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5085062.264150944,
            "unit": "ns",
            "range": "± 208279.40020227924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4539231.25,
            "unit": "ns",
            "range": "± 85912.94988727446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23582.105263157893,
            "unit": "ns",
            "range": "± 1617.2592357474118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102738.63636363637,
            "unit": "ns",
            "range": "± 5810.086984099326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94604.83870967742,
            "unit": "ns",
            "range": "± 7905.151266724099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117604.25531914894,
            "unit": "ns",
            "range": "± 20416.18409731362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6928.421052631579,
            "unit": "ns",
            "range": "± 1171.2571131412549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24173.40425531915,
            "unit": "ns",
            "range": "± 2078.6252452256094"
          }
        ]
      }
    ]
  }
}