window.BENCHMARK_DATA = {
  "lastUpdate": 1687761226500,
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
          "id": "c341e18640c1f491a1d2a900f7f05d818ccd5940",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:14:05+09:00",
          "tree_id": "982f1fe962e5e5d45c8dd58eddd405b285026528",
          "url": "https://github.com/greymistcube/libplanet/commit/c341e18640c1f491a1d2a900f7f05d818ccd5940"
        },
        "date": 1687760944808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7759402.428571428,
            "unit": "ns",
            "range": "± 107804.79239148615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22907513.285714287,
            "unit": "ns",
            "range": "± 544944.880393893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47035717.4375,
            "unit": "ns",
            "range": "± 1340516.1672163627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98384267.26,
            "unit": "ns",
            "range": "± 3967955.278139038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205300603.35365853,
            "unit": "ns",
            "range": "± 7304952.031976404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63087.52577319588,
            "unit": "ns",
            "range": "± 13112.113308639446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319209.0408163265,
            "unit": "ns",
            "range": "± 29033.902413986903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309224.46315789473,
            "unit": "ns",
            "range": "± 23926.670553656284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285075.9292929293,
            "unit": "ns",
            "range": "± 26376.484361462193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4108973.2647058824,
            "unit": "ns",
            "range": "± 131284.04296313392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3632522.787878788,
            "unit": "ns",
            "range": "± 112425.63034589731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19111.91052631579,
            "unit": "ns",
            "range": "± 4074.400353986936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92296.95360824742,
            "unit": "ns",
            "range": "± 12242.723375387637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92741.6530612245,
            "unit": "ns",
            "range": "± 16338.833171440541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115508.66666666667,
            "unit": "ns",
            "range": "± 14151.04764621713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8382.623711340206,
            "unit": "ns",
            "range": "± 976.4518384792027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21456.739583333332,
            "unit": "ns",
            "range": "± 3158.103435674118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626633.757894737,
            "unit": "ns",
            "range": "± 292642.70686597505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3121063.5425531915,
            "unit": "ns",
            "range": "± 260658.538920903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2526259.4395604394,
            "unit": "ns",
            "range": "± 197075.5935689658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6512893.078947368,
            "unit": "ns",
            "range": "± 281450.09917409025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3139410.025974026,
            "unit": "ns",
            "range": "± 159187.08301959923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3369333.9324324327,
            "unit": "ns",
            "range": "± 164544.6771340626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4270527.239130435,
            "unit": "ns",
            "range": "± 162710.4954758857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4092359.1785714286,
            "unit": "ns",
            "range": "± 218704.50787021025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7498362.534246575,
            "unit": "ns",
            "range": "± 365839.26375516196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6579121.075892857,
            "unit": "ns",
            "range": "± 76516.78835904704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984796.6069010417,
            "unit": "ns",
            "range": "± 19828.748158927443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271099.956184896,
            "unit": "ns",
            "range": "± 8496.524673988568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2480178.248307292,
            "unit": "ns",
            "range": "± 16777.97254897204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851583.2481119792,
            "unit": "ns",
            "range": "± 3036.9170159040505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721314.1877604167,
            "unit": "ns",
            "range": "± 6569.389784628389"
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
          "id": "131fc3bc457b025d8d2de0762acb51fbcf6d85dc",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:17:18+09:00",
          "tree_id": "8836faf6bc4ad702d6ef67200d7e7920548019a0",
          "url": "https://github.com/greymistcube/libplanet/commit/131fc3bc457b025d8d2de0762acb51fbcf6d85dc"
        },
        "date": 1687761199546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8587043.142857144,
            "unit": "ns",
            "range": "± 61603.00830923156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21270910.2,
            "unit": "ns",
            "range": "± 308453.7654970584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52058128,
            "unit": "ns",
            "range": "± 657728.3632844619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103657533.57692307,
            "unit": "ns",
            "range": "± 919475.6178215984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217357270.85714287,
            "unit": "ns",
            "range": "± 3098750.8063166817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76373.41578947369,
            "unit": "ns",
            "range": "± 6597.910439150104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333449.2710843373,
            "unit": "ns",
            "range": "± 17652.89389826903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328222.2266666667,
            "unit": "ns",
            "range": "± 16121.589291560735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326164.6153846154,
            "unit": "ns",
            "range": "± 8896.254862927088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4265385.8,
            "unit": "ns",
            "range": "± 60641.98066191439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3697679.1333333333,
            "unit": "ns",
            "range": "± 46229.93895250546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22517.021739130436,
            "unit": "ns",
            "range": "± 2610.4505167922875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114084.57368421053,
            "unit": "ns",
            "range": "± 11828.03548574148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119298.56756756757,
            "unit": "ns",
            "range": "± 5994.403507133216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126303.6237113402,
            "unit": "ns",
            "range": "± 13471.93284376953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8731.530612244898,
            "unit": "ns",
            "range": "± 762.4677982597864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22457.063157894736,
            "unit": "ns",
            "range": "± 3490.590448164853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662359.3484848484,
            "unit": "ns",
            "range": "± 185453.070492921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072670.725490196,
            "unit": "ns",
            "range": "± 118408.14619241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2611314.15625,
            "unit": "ns",
            "range": "± 209934.24061572624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6387890.596774193,
            "unit": "ns",
            "range": "± 109142.74277518559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3443391.6666666665,
            "unit": "ns",
            "range": "± 107192.33782921085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516142.7,
            "unit": "ns",
            "range": "± 115406.07879386802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4557830.166666667,
            "unit": "ns",
            "range": "± 51310.50539003638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4427092.794871795,
            "unit": "ns",
            "range": "± 226998.49815993596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7791900.057692308,
            "unit": "ns",
            "range": "± 319876.8553278096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6755949.691964285,
            "unit": "ns",
            "range": "± 52673.28890077386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000241.0732421875,
            "unit": "ns",
            "range": "± 10767.688492442774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300928.5874399038,
            "unit": "ns",
            "range": "± 14581.860467232635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2765861.7506009615,
            "unit": "ns",
            "range": "± 29633.17969514114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870796.6517159598,
            "unit": "ns",
            "range": "± 7939.136870627307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809162.6399972098,
            "unit": "ns",
            "range": "± 10809.160948610639"
          }
        ]
      }
    ]
  }
}