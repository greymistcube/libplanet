window.BENCHMARK_DATA = {
  "lastUpdate": 1687931890171,
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
          "id": "c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca",
          "message": "Use mocked state for testing; make AccountStateDelta creator private",
          "timestamp": "2023-06-27T19:17:10+09:00",
          "tree_id": "cfb95f884f28b3ef3c68c89991ef131469521fa8",
          "url": "https://github.com/greymistcube/libplanet/commit/c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca"
        },
        "date": 1687930540206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660715.7303370787,
            "unit": "ns",
            "range": "± 91588.76953147745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3188183.3333333335,
            "unit": "ns",
            "range": "± 134253.06239302238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2688540.860215054,
            "unit": "ns",
            "range": "± 183924.30522208285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6536688.461538462,
            "unit": "ns",
            "range": "± 303706.792036079"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59593.333333333336,
            "unit": "ns",
            "range": "± 4210.9488108549185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9615823.333333334,
            "unit": "ns",
            "range": "± 80356.18445989321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25386746.666666668,
            "unit": "ns",
            "range": "± 452711.70243744476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62379375,
            "unit": "ns",
            "range": "± 400818.6489151694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130117275,
            "unit": "ns",
            "range": "± 2428863.371620561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258152354.16666666,
            "unit": "ns",
            "range": "± 6485880.961179489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6178496.09375,
            "unit": "ns",
            "range": "± 95944.0486800538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946160.6770833333,
            "unit": "ns",
            "range": "± 17642.400906946044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485218.3333333333,
            "unit": "ns",
            "range": "± 18878.130057929284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3280606.863839286,
            "unit": "ns",
            "range": "± 40255.850083498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019855.2604166666,
            "unit": "ns",
            "range": "± 18747.923509905988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954684.5247395834,
            "unit": "ns",
            "range": "± 13867.073932137737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4143191.891891892,
            "unit": "ns",
            "range": "± 140680.16597622816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4509636.842105263,
            "unit": "ns",
            "range": "± 90582.13099800839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5559050,
            "unit": "ns",
            "range": "± 124622.83957147319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5402483.333333333,
            "unit": "ns",
            "range": "± 161665.62998838138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8476279.591836736,
            "unit": "ns",
            "range": "± 287738.13903993205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333408.3333333333,
            "unit": "ns",
            "range": "± 13110.899044644699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315511.94029850746,
            "unit": "ns",
            "range": "± 14819.3825004064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301261.1111111111,
            "unit": "ns",
            "range": "± 9827.316964978729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5082592.307692308,
            "unit": "ns",
            "range": "± 47815.48670912771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4592157.142857143,
            "unit": "ns",
            "range": "± 75255.16301516833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28534.69387755102,
            "unit": "ns",
            "range": "± 2544.7379319757774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119709.78260869565,
            "unit": "ns",
            "range": "± 10350.644294673595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118117.8947368421,
            "unit": "ns",
            "range": "± 8628.490400095863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132290.81632653062,
            "unit": "ns",
            "range": "± 19812.216822183607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9533.333333333334,
            "unit": "ns",
            "range": "± 1946.7398178409323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28042.55319148936,
            "unit": "ns",
            "range": "± 2336.686808084414"
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
          "id": "6eead33b3a627df8dc35d59e9d1ffa8a8e26b16e",
          "message": "Changelog",
          "timestamp": "2023-06-28T14:35:28+09:00",
          "tree_id": "faf64967d947084048a5886ac079ae8cbbd6c6da",
          "url": "https://github.com/greymistcube/libplanet/commit/6eead33b3a627df8dc35d59e9d1ffa8a8e26b16e"
        },
        "date": 1687931859600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649819.2771084337,
            "unit": "ns",
            "range": "± 87321.83178786465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3160388.6363636362,
            "unit": "ns",
            "range": "± 201249.45201999682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2659109.574468085,
            "unit": "ns",
            "range": "± 196936.46432952097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6575927.083333333,
            "unit": "ns",
            "range": "± 458875.3763803911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52112.22222222222,
            "unit": "ns",
            "range": "± 3970.0515882018176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8828840,
            "unit": "ns",
            "range": "± 125925.79901331918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25229865.384615384,
            "unit": "ns",
            "range": "± 382554.4271650633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61290175,
            "unit": "ns",
            "range": "± 2171340.6001645797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126227971.42857143,
            "unit": "ns",
            "range": "± 3588542.1903254855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250969278.125,
            "unit": "ns",
            "range": "± 7579446.869584935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6201718.017578125,
            "unit": "ns",
            "range": "± 116430.62709745951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993201.953125,
            "unit": "ns",
            "range": "± 25673.31458131366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496447.909007353,
            "unit": "ns",
            "range": "± 30588.349198888238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3325186.171875,
            "unit": "ns",
            "range": "± 37915.430858910164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1055515.5736019737,
            "unit": "ns",
            "range": "± 23111.90881699993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996174.4075520834,
            "unit": "ns",
            "range": "± 11520.97413743411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3965468.1818181816,
            "unit": "ns",
            "range": "± 136138.5934938282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4156422.7848101268,
            "unit": "ns",
            "range": "± 209526.3773550481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5022723.529411765,
            "unit": "ns",
            "range": "± 160727.9973326356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5097077.419354838,
            "unit": "ns",
            "range": "± 228907.2920075171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8273456.603773585,
            "unit": "ns",
            "range": "± 342223.28210003587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305500,
            "unit": "ns",
            "range": "± 14615.543700015365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293716.92307692306,
            "unit": "ns",
            "range": "± 13333.37646226999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265408.2191780822,
            "unit": "ns",
            "range": "± 12518.794242443124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4949596.774193549,
            "unit": "ns",
            "range": "± 144460.06249449702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4482790.909090909,
            "unit": "ns",
            "range": "± 94156.86965854431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22444.086021505376,
            "unit": "ns",
            "range": "± 1777.4837102899019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99960.52631578948,
            "unit": "ns",
            "range": "± 6685.829309055984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89323.91304347826,
            "unit": "ns",
            "range": "± 7810.6277211853385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110364.21052631579,
            "unit": "ns",
            "range": "± 15980.75914761031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6038.9473684210525,
            "unit": "ns",
            "range": "± 1047.011424356183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21181.25,
            "unit": "ns",
            "range": "± 1854.3441172725081"
          }
        ]
      }
    ]
  }
}