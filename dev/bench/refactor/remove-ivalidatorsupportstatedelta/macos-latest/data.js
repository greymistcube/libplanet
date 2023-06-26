window.BENCHMARK_DATA = {
  "lastUpdate": 1687765792432,
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
          "id": "75fd2d685cc94baf977cf4f6927618a9120bf02d",
          "message": "Changelog",
          "timestamp": "2023-06-26T15:25:34+09:00",
          "tree_id": "c8a226f50d6fddd075124060ea04066053d630db",
          "url": "https://github.com/greymistcube/libplanet/commit/75fd2d685cc94baf977cf4f6927618a9120bf02d"
        },
        "date": 1687762214904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10181974.433333334,
            "unit": "ns",
            "range": "± 2238846.7691924125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23130129.994505495,
            "unit": "ns",
            "range": "± 2858984.9436204736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57156240.98888889,
            "unit": "ns",
            "range": "± 5777880.588747401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116654084.57317074,
            "unit": "ns",
            "range": "± 4193278.0033356915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232085586.95714286,
            "unit": "ns",
            "range": "± 7533438.184688233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77009.33707865169,
            "unit": "ns",
            "range": "± 8647.921238582321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361927.2011494253,
            "unit": "ns",
            "range": "± 71308.11316003624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323011.5789473684,
            "unit": "ns",
            "range": "± 30345.195621200295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303282.27777777775,
            "unit": "ns",
            "range": "± 23908.505307172512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186802.911764706,
            "unit": "ns",
            "range": "± 133441.66212116307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3767117.8571428573,
            "unit": "ns",
            "range": "± 62330.11754775121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19743.71978021978,
            "unit": "ns",
            "range": "± 2731.401352998118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91115.4,
            "unit": "ns",
            "range": "± 10813.677575674164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106410.98387096774,
            "unit": "ns",
            "range": "± 13013.81415250474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112413.22105263158,
            "unit": "ns",
            "range": "± 17044.1114197518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6848.04255319149,
            "unit": "ns",
            "range": "± 1117.2133912599754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18770.456989247312,
            "unit": "ns",
            "range": "± 3788.7111893612105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1767950.1573033708,
            "unit": "ns",
            "range": "± 255163.9289752543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3179026.3,
            "unit": "ns",
            "range": "± 357986.89590835583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2793594.8218390807,
            "unit": "ns",
            "range": "± 502552.2062431874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7684843.315217392,
            "unit": "ns",
            "range": "± 1454514.1785088417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430603.481012658,
            "unit": "ns",
            "range": "± 175905.08018726672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3739961.7083333335,
            "unit": "ns",
            "range": "± 369030.9763529604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4822955.429292929,
            "unit": "ns",
            "range": "± 365930.5133093744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4534961.428571428,
            "unit": "ns",
            "range": "± 344332.54986052134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8156812.010638298,
            "unit": "ns",
            "range": "± 568371.993714849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7564788.28484375,
            "unit": "ns",
            "range": "± 562634.6953539661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2296799.756723873,
            "unit": "ns",
            "range": "± 102942.71947827072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1561099.6899956597,
            "unit": "ns",
            "range": "± 33399.50136779419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3352634.1990456884,
            "unit": "ns",
            "range": "± 172744.12289504282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046054.9732666016,
            "unit": "ns",
            "range": "± 19768.7404715022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789703.1324573864,
            "unit": "ns",
            "range": "± 19771.702407675322"
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
          "id": "935fc0e7f25595130a54cef3b10ea80534a7ba92",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T16:33:53+09:00",
          "tree_id": "23f8e71ce32558289c569cca9cfb9aefb2964af9",
          "url": "https://github.com/greymistcube/libplanet/commit/935fc0e7f25595130a54cef3b10ea80534a7ba92"
        },
        "date": 1687765766596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8443892.733333332,
            "unit": "ns",
            "range": "± 153454.06814952186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18915753,
            "unit": "ns",
            "range": "± 190114.66597173785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47000600.921052635,
            "unit": "ns",
            "range": "± 1001011.5724462217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95523452.26086956,
            "unit": "ns",
            "range": "± 3673082.1853436595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208088306.43975905,
            "unit": "ns",
            "range": "± 11102617.72192737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61452.708333333336,
            "unit": "ns",
            "range": "± 10119.429293161658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349053.05056179775,
            "unit": "ns",
            "range": "± 28731.455513240995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313005.1590909091,
            "unit": "ns",
            "range": "± 19082.044429425874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297552.9896907217,
            "unit": "ns",
            "range": "± 22713.122769619535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4146578.3333333335,
            "unit": "ns",
            "range": "± 84176.65390398093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3727319.566666667,
            "unit": "ns",
            "range": "± 102203.56917098594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18552.031578947368,
            "unit": "ns",
            "range": "± 4269.608605941337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88548.05208333333,
            "unit": "ns",
            "range": "± 15527.462070300711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92238.80927835051,
            "unit": "ns",
            "range": "± 18533.581660709402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103344.54736842106,
            "unit": "ns",
            "range": "± 13443.899050347107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5593.462365591397,
            "unit": "ns",
            "range": "± 1890.463047481845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17164.82183908046,
            "unit": "ns",
            "range": "± 2506.671138689869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633773.14,
            "unit": "ns",
            "range": "± 189073.27181903302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2942725.8488372094,
            "unit": "ns",
            "range": "± 159729.02148059214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581750,
            "unit": "ns",
            "range": "± 194462.2354299262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6385396.782608695,
            "unit": "ns",
            "range": "± 243027.28197092176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3233631.172413793,
            "unit": "ns",
            "range": "± 140958.09032464135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509107.268656716,
            "unit": "ns",
            "range": "± 151038.42295864926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4449581.22368421,
            "unit": "ns",
            "range": "± 226451.9827570574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4202020.125,
            "unit": "ns",
            "range": "± 159912.49488400397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7736135.75,
            "unit": "ns",
            "range": "± 355367.76162278326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6672344.748883928,
            "unit": "ns",
            "range": "± 96952.19507545768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980722.3330729166,
            "unit": "ns",
            "range": "± 17553.31512831345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1255525.9861979166,
            "unit": "ns",
            "range": "± 13113.463230461493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538910.791015625,
            "unit": "ns",
            "range": "± 50613.79725473363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792664.6953125,
            "unit": "ns",
            "range": "± 7101.167749533532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719204.6817708333,
            "unit": "ns",
            "range": "± 1766.8438707627308"
          }
        ]
      }
    ]
  }
}