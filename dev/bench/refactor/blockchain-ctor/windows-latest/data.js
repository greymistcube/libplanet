window.BENCHMARK_DATA = {
  "lastUpdate": 1684396697033,
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
          "id": "aef86503e565e1d28a3e2e8bf517c061cc31ebae",
          "message": "Require ActionEvaluator for Create",
          "timestamp": "2023-05-17T14:45:39+09:00",
          "tree_id": "62175bf7f8fa04bb04747b339acf8468137b30ac",
          "url": "https://github.com/greymistcube/libplanet/commit/aef86503e565e1d28a3e2e8bf517c061cc31ebae"
        },
        "date": 1684303245365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397340,
            "unit": "ns",
            "range": "± 105318.85784692985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642374.418604651,
            "unit": "ns",
            "range": "± 95829.90410350655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2240643,
            "unit": "ns",
            "range": "± 152381.5017373079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5328439.534883721,
            "unit": "ns",
            "range": "± 190771.43783862566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49158.333333333336,
            "unit": "ns",
            "range": "± 4120.415581152405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7343861.538461538,
            "unit": "ns",
            "range": "± 105634.23954430004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19767521.42857143,
            "unit": "ns",
            "range": "± 202373.8930356818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50675771.428571425,
            "unit": "ns",
            "range": "± 329657.0279001436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100718606.66666667,
            "unit": "ns",
            "range": "± 678462.6618494267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202010266.66666666,
            "unit": "ns",
            "range": "± 1691228.0528263084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841856.584821428,
            "unit": "ns",
            "range": "± 12531.454073165845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521021.1588541667,
            "unit": "ns",
            "range": "± 3823.2189442559597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183307.017299107,
            "unit": "ns",
            "range": "± 4146.877462113307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610515.3645833335,
            "unit": "ns",
            "range": "± 4850.926413657437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836188.2942708334,
            "unit": "ns",
            "range": "± 2712.7116762650467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754780.9375,
            "unit": "ns",
            "range": "± 2470.55248473222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271994.4444444445,
            "unit": "ns",
            "range": "± 66718.04784686623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423200,
            "unit": "ns",
            "range": "± 89893.2700484302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4228216.666666667,
            "unit": "ns",
            "range": "± 83154.3868886274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390775,
            "unit": "ns",
            "range": "± 79746.7951289162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6708830.303030303,
            "unit": "ns",
            "range": "± 198355.32745058878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270706.77966101695,
            "unit": "ns",
            "range": "± 11361.578696866754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257396.15384615384,
            "unit": "ns",
            "range": "± 6984.0664813119165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253658.06451612903,
            "unit": "ns",
            "range": "± 14256.488397588479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4048640,
            "unit": "ns",
            "range": "± 25514.50007908668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759660,
            "unit": "ns",
            "range": "± 47398.80649491986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21447.95918367347,
            "unit": "ns",
            "range": "± 2372.9675879738825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92097.82608695653,
            "unit": "ns",
            "range": "± 6307.678527713847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80656.12244897959,
            "unit": "ns",
            "range": "± 6154.355867984896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102929.89690721649,
            "unit": "ns",
            "range": "± 16523.500719609263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6247.959183673469,
            "unit": "ns",
            "range": "± 1218.4348242713952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21418.478260869564,
            "unit": "ns",
            "range": "± 2368.93490917708"
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
          "id": "019cec3f7bda839dad81edfbe748d79d5f713218",
          "message": "Changelog",
          "timestamp": "2023-05-18T11:30:00+09:00",
          "tree_id": "1ed9e4e1d49ea8bca1a5e15c47da5942f1998376",
          "url": "https://github.com/greymistcube/libplanet/commit/019cec3f7bda839dad81edfbe748d79d5f713218"
        },
        "date": 1684378075638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577395.744680851,
            "unit": "ns",
            "range": "± 104796.32336250972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3004682.926829268,
            "unit": "ns",
            "range": "± 106749.51733483159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2749346.153846154,
            "unit": "ns",
            "range": "± 66230.72085230074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6279981.818181818,
            "unit": "ns",
            "range": "± 293939.0700385114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55245.94594594595,
            "unit": "ns",
            "range": "± 2769.7578742499572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8337146.666666667,
            "unit": "ns",
            "range": "± 155027.42553066753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22843084.615384616,
            "unit": "ns",
            "range": "± 324844.08784870384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58494700,
            "unit": "ns",
            "range": "± 1250497.0019363707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118743500,
            "unit": "ns",
            "range": "± 4017698.787089916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236098266.66666666,
            "unit": "ns",
            "range": "± 4368596.126685922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5827796.119791667,
            "unit": "ns",
            "range": "± 72286.3527077919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855127.8645833333,
            "unit": "ns",
            "range": "± 27903.985369623428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1424307.91015625,
            "unit": "ns",
            "range": "± 15842.089698184744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3164711.358173077,
            "unit": "ns",
            "range": "± 30717.54824599274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025534.619140625,
            "unit": "ns",
            "range": "± 19762.379473986846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949425.0716145834,
            "unit": "ns",
            "range": "± 11467.963731390362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3786485.714285714,
            "unit": "ns",
            "range": "± 64993.34708133722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3972984.4827586208,
            "unit": "ns",
            "range": "± 87222.50395995482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4854885.185185186,
            "unit": "ns",
            "range": "± 131171.3315996229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4972524.242424242,
            "unit": "ns",
            "range": "± 157644.4259050709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7994481.25,
            "unit": "ns",
            "range": "± 296638.6136155675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308486.2745098039,
            "unit": "ns",
            "range": "± 12585.690598578103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296624.28571428574,
            "unit": "ns",
            "range": "± 14304.964535152363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260900,
            "unit": "ns",
            "range": "± 13344.651994042604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746739.130434782,
            "unit": "ns",
            "range": "± 117308.53157817494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4433920,
            "unit": "ns",
            "range": "± 104792.22299388442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22901.041666666668,
            "unit": "ns",
            "range": "± 2197.342643508849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98657.22891566265,
            "unit": "ns",
            "range": "± 5290.391269879949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88660.86956521739,
            "unit": "ns",
            "range": "± 6416.033428048265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113934.375,
            "unit": "ns",
            "range": "± 18268.96032028672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6244.943820224719,
            "unit": "ns",
            "range": "± 820.4781360938068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21510.20408163265,
            "unit": "ns",
            "range": "± 2733.5445738642634"
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
          "id": "6a933493117f5d312e88d78a6f1f5f0d9c9ff750",
          "message": "Changelog",
          "timestamp": "2023-05-18T14:47:48+09:00",
          "tree_id": "fa568b43d104e92b6d0f1e07f7ce0b92e502509c",
          "url": "https://github.com/greymistcube/libplanet/commit/6a933493117f5d312e88d78a6f1f5f0d9c9ff750"
        },
        "date": 1684389907622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642217.7083333333,
            "unit": "ns",
            "range": "± 112245.4106386084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102050,
            "unit": "ns",
            "range": "± 99212.25868171368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617015.625,
            "unit": "ns",
            "range": "± 169076.60632364565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6369278.68852459,
            "unit": "ns",
            "range": "± 287278.4312096043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58105.555555555555,
            "unit": "ns",
            "range": "± 4493.6749833993845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9175126.666666666,
            "unit": "ns",
            "range": "± 84812.88199549024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23716920,
            "unit": "ns",
            "range": "± 199867.76056754554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60426827.27272727,
            "unit": "ns",
            "range": "± 872061.9501704365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120570828.57142857,
            "unit": "ns",
            "range": "± 1364775.8809690056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240747841.66666666,
            "unit": "ns",
            "range": "± 1712829.4350461771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5930655.130208333,
            "unit": "ns",
            "range": "± 97336.99779095668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867870.912388393,
            "unit": "ns",
            "range": "± 14844.81825974481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423136.62109375,
            "unit": "ns",
            "range": "± 11252.616331800953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3202354.1015625,
            "unit": "ns",
            "range": "± 49884.86184144211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000254.12109375,
            "unit": "ns",
            "range": "± 11779.499223155855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945366.8596540178,
            "unit": "ns",
            "range": "± 6496.64680775004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3925952,
            "unit": "ns",
            "range": "± 69159.14087571263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4136526.6666666665,
            "unit": "ns",
            "range": "± 42847.728172259136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5028664.285714285,
            "unit": "ns",
            "range": "± 77573.68315789395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5022491.525423729,
            "unit": "ns",
            "range": "± 221466.7261441598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7939216.129032258,
            "unit": "ns",
            "range": "± 225235.98157898634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327689.552238806,
            "unit": "ns",
            "range": "± 13788.852923575163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312003.3898305085,
            "unit": "ns",
            "range": "± 12243.519976476437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298261.76470588235,
            "unit": "ns",
            "range": "± 9602.201916223627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4852157.142857143,
            "unit": "ns",
            "range": "± 40710.86538554001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4438376.923076923,
            "unit": "ns",
            "range": "± 46572.007934776906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26988.947368421053,
            "unit": "ns",
            "range": "± 2573.5270415075615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117149.47368421052,
            "unit": "ns",
            "range": "± 9081.0402638264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107465.30612244898,
            "unit": "ns",
            "range": "± 11247.335098259475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118923.4693877551,
            "unit": "ns",
            "range": "± 18877.799108462452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8113.978494623656,
            "unit": "ns",
            "range": "± 1037.3032970000984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26298.96907216495,
            "unit": "ns",
            "range": "± 2758.226137595835"
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
          "id": "0d059fc7d1498f965904b79e80172151159de73e",
          "message": "Changelog",
          "timestamp": "2023-05-18T16:36:44+09:00",
          "tree_id": "aed38fe6d984592006142f2634a8c3fadb30ca1e",
          "url": "https://github.com/greymistcube/libplanet/commit/0d059fc7d1498f965904b79e80172151159de73e"
        },
        "date": 1684396668309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609542.7083333333,
            "unit": "ns",
            "range": "± 180348.633569768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3005575.757575758,
            "unit": "ns",
            "range": "± 308110.316213736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2534727.777777778,
            "unit": "ns",
            "range": "± 236238.12724968832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6731061.458333333,
            "unit": "ns",
            "range": "± 664088.3087075554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64173.958333333336,
            "unit": "ns",
            "range": "± 13878.425094874241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8188274.747474748,
            "unit": "ns",
            "range": "± 838492.188923913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20607620,
            "unit": "ns",
            "range": "± 2055071.4135887092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55213898.98989899,
            "unit": "ns",
            "range": "± 5392311.937236973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126511978.57142857,
            "unit": "ns",
            "range": "± 3557543.8164821635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 312047978.5714286,
            "unit": "ns",
            "range": "± 8464809.78300675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6084213.141741072,
            "unit": "ns",
            "range": "± 172588.98956292882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836860.25390625,
            "unit": "ns",
            "range": "± 19484.948182092743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405352.9036458333,
            "unit": "ns",
            "range": "± 24380.389630609174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118347.6004464286,
            "unit": "ns",
            "range": "± 22876.84085546191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072518.5791015625,
            "unit": "ns",
            "range": "± 19729.9128814639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 951455.625,
            "unit": "ns",
            "range": "± 15939.805918842087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3794703.1578947366,
            "unit": "ns",
            "range": "± 344488.4692053618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4006486.7346938774,
            "unit": "ns",
            "range": "± 435083.9984399636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5247812.37113402,
            "unit": "ns",
            "range": "± 488349.96848608565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5170325,
            "unit": "ns",
            "range": "± 393823.7282447205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8444746.875,
            "unit": "ns",
            "range": "± 638940.2403409678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348156.7010309278,
            "unit": "ns",
            "range": "± 43207.6379899446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330924.74226804124,
            "unit": "ns",
            "range": "± 51615.57829870712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270875.25773195876,
            "unit": "ns",
            "range": "± 32589.207796088445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5035237.837837838,
            "unit": "ns",
            "range": "± 251808.95438325813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4351204.2105263155,
            "unit": "ns",
            "range": "± 456325.97132942424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28210.10101010101,
            "unit": "ns",
            "range": "± 9873.903916948018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105298.96907216495,
            "unit": "ns",
            "range": "± 20529.686304457995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128721,
            "unit": "ns",
            "range": "± 30537.30388038257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143267.70833333334,
            "unit": "ns",
            "range": "± 34150.68310880832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13226,
            "unit": "ns",
            "range": "± 9707.464794026951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26304.040404040403,
            "unit": "ns",
            "range": "± 9651.76222877459"
          }
        ]
      }
    ]
  }
}