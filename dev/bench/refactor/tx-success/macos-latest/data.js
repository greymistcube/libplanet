window.BENCHMARK_DATA = {
  "lastUpdate": 1689127697068,
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
          "id": "ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597",
          "message": "Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T10:24:37+09:00",
          "tree_id": "56adda268a6b85b4d29c5baba373e3dd0e7fa0fc",
          "url": "https://github.com/greymistcube/libplanet/commit/ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597"
        },
        "date": 1689127236741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7893687.023809524,
            "unit": "ns",
            "range": "± 287314.0300016341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19272123.36,
            "unit": "ns",
            "range": "± 513024.66914888547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47089665.21052632,
            "unit": "ns",
            "range": "± 1624413.3209086661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95767497.94285715,
            "unit": "ns",
            "range": "± 3097014.548909414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196514113.16666666,
            "unit": "ns",
            "range": "± 5873487.288275269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63279.989583333336,
            "unit": "ns",
            "range": "± 9071.142419197487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325737.3350515464,
            "unit": "ns",
            "range": "± 22669.538504198583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310632.5131578947,
            "unit": "ns",
            "range": "± 15732.387677648445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314216.84523809527,
            "unit": "ns",
            "range": "± 16729.002549496523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184314.8,
            "unit": "ns",
            "range": "± 67622.3217237791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002868.6428571427,
            "unit": "ns",
            "range": "± 56203.984001762095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22008.836734693876,
            "unit": "ns",
            "range": "± 3924.565268967918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108386.74242424243,
            "unit": "ns",
            "range": "± 19221.38656314935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103645.47422680413,
            "unit": "ns",
            "range": "± 15478.871743775973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112002.95652173914,
            "unit": "ns",
            "range": "± 15851.555498888825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7525,
            "unit": "ns",
            "range": "± 829.9736332913009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18923.840425531915,
            "unit": "ns",
            "range": "± 3307.6073355357853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479865.9263157896,
            "unit": "ns",
            "range": "± 145635.77425939278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2757836.5694444445,
            "unit": "ns",
            "range": "± 135843.22800979763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2014253.1739130435,
            "unit": "ns",
            "range": "± 164853.26386717893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5663287.803571428,
            "unit": "ns",
            "range": "± 242786.67543065417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3221444.4545454546,
            "unit": "ns",
            "range": "± 101699.50379060696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333595.484375,
            "unit": "ns",
            "range": "± 154384.9656769183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4304890.666666667,
            "unit": "ns",
            "range": "± 163538.1676341531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933467.8,
            "unit": "ns",
            "range": "± 72020.91266054008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7049385.625,
            "unit": "ns",
            "range": "± 138095.82009164264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6765076.916903409,
            "unit": "ns",
            "range": "± 253221.0472261747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984393.9408482143,
            "unit": "ns",
            "range": "± 16363.159562643315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258448.0848958334,
            "unit": "ns",
            "range": "± 21183.151510875028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3083579.394791667,
            "unit": "ns",
            "range": "± 56615.87311292187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865897.1557291667,
            "unit": "ns",
            "range": "± 1992.3722793197244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809365.4794270833,
            "unit": "ns",
            "range": "± 1835.419080884062"
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
          "id": "aaac5d80bcb28312ff9d0464f0e0481f27b77455",
          "message": "Changelog",
          "timestamp": "2023-07-12T10:49:20+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/greymistcube/libplanet/commit/aaac5d80bcb28312ff9d0464f0e0481f27b77455"
        },
        "date": 1689127674885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8955628.271604938,
            "unit": "ns",
            "range": "± 987237.1364804534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24707686.568181816,
            "unit": "ns",
            "range": "± 4687751.027150802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52868821.03333333,
            "unit": "ns",
            "range": "± 912069.5932876165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101282556.67567568,
            "unit": "ns",
            "range": "± 3350752.868481558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201638941.10714287,
            "unit": "ns",
            "range": "± 5216273.00853245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71981.65909090909,
            "unit": "ns",
            "range": "± 5558.338548763923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346985.34269662923,
            "unit": "ns",
            "range": "± 29861.42207914102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368673.9947368421,
            "unit": "ns",
            "range": "± 55246.23594223001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298723.64556962025,
            "unit": "ns",
            "range": "± 15523.04014884044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281122.4375,
            "unit": "ns",
            "range": "± 197875.64250690342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3836975.95,
            "unit": "ns",
            "range": "± 169395.8464644403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19618.41935483871,
            "unit": "ns",
            "range": "± 2230.988269621007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93684.47872340426,
            "unit": "ns",
            "range": "± 15080.793860289044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105647.56989247311,
            "unit": "ns",
            "range": "± 14742.370341680393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131506.57142857142,
            "unit": "ns",
            "range": "± 33147.155687480976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6491.879120879121,
            "unit": "ns",
            "range": "± 1125.0019835554347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15866.533333333333,
            "unit": "ns",
            "range": "± 1299.4792859475451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697894.625,
            "unit": "ns",
            "range": "± 177256.76412738254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2918168.472972973,
            "unit": "ns",
            "range": "± 145077.38224381648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2428011,
            "unit": "ns",
            "range": "± 51855.314081586665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6013942.391304348,
            "unit": "ns",
            "range": "± 328672.5943988276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271910.902173913,
            "unit": "ns",
            "range": "± 183120.4587017032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525961.0714285714,
            "unit": "ns",
            "range": "± 228823.2211149643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4320522.517241379,
            "unit": "ns",
            "range": "± 168018.37277650504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4024964.33,
            "unit": "ns",
            "range": "± 275124.37939245213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7382175.984615385,
            "unit": "ns",
            "range": "± 343921.2461636154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7371568.289550781,
            "unit": "ns",
            "range": "± 287569.1612731205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2210774.480067423,
            "unit": "ns",
            "range": "± 103313.94957883081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378461.7893229167,
            "unit": "ns",
            "range": "± 21064.64773935711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2759063.0655776514,
            "unit": "ns",
            "range": "± 167800.59340582433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825265.646623884,
            "unit": "ns",
            "range": "± 9745.127794874164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850358.3327365451,
            "unit": "ns",
            "range": "± 17331.962878916784"
          }
        ]
      }
    ]
  }
}