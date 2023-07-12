window.BENCHMARK_DATA = {
  "lastUpdate": 1687937398201,
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
          "id": "0ae8443088a45cb0f15b0d2c4f1065272f36c824",
          "message": "Changelog",
          "timestamp": "2023-06-28T15:16:48+09:00",
          "tree_id": "faf64967d947084048a5886ac079ae8cbbd6c6da",
          "url": "https://github.com/greymistcube/libplanet/commit/0ae8443088a45cb0f15b0d2c4f1065272f36c824"
        },
        "date": 1687933967323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371519.191919192,
            "unit": "ns",
            "range": "± 114427.34409611789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508326.470588235,
            "unit": "ns",
            "range": "± 115079.22724184938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142094.845360825,
            "unit": "ns",
            "range": "± 133485.72674254823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5396690.697674419,
            "unit": "ns",
            "range": "± 292223.52217514714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46078.72340425532,
            "unit": "ns",
            "range": "± 2647.3712805093483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6898693.333333333,
            "unit": "ns",
            "range": "± 116082.67045925667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19687335.714285713,
            "unit": "ns",
            "range": "± 239954.63227337485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49336778.571428575,
            "unit": "ns",
            "range": "± 447263.94406361517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97965992.85714285,
            "unit": "ns",
            "range": "± 1194779.5417593126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195558971.42857143,
            "unit": "ns",
            "range": "± 1874495.3008655512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4760364.479166667,
            "unit": "ns",
            "range": "± 17101.184614297516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496778.680889423,
            "unit": "ns",
            "range": "± 3522.155497676282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181987.4088541667,
            "unit": "ns",
            "range": "± 5859.5830268441405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626043.4505208335,
            "unit": "ns",
            "range": "± 4246.428215494034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822645.46875,
            "unit": "ns",
            "range": "± 2652.0292311247003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755011.6350446428,
            "unit": "ns",
            "range": "± 1694.1276364737305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3059433.3333333335,
            "unit": "ns",
            "range": "± 63851.051398593925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333495.8333333335,
            "unit": "ns",
            "range": "± 83132.9970545713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4047113.888888889,
            "unit": "ns",
            "range": "± 124670.18237339622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4044164.285714286,
            "unit": "ns",
            "range": "± 145021.67175545054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6530707.692307692,
            "unit": "ns",
            "range": "± 193444.2206896309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257332,
            "unit": "ns",
            "range": "± 10311.702090343766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242037.2093023256,
            "unit": "ns",
            "range": "± 8765.84343199199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221565.306122449,
            "unit": "ns",
            "range": "± 8738.577091943329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3944360,
            "unit": "ns",
            "range": "± 68773.04081438556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3586328.5714285714,
            "unit": "ns",
            "range": "± 61823.22725781491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19265.59139784946,
            "unit": "ns",
            "range": "± 1938.8193753828596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86955.20833333333,
            "unit": "ns",
            "range": "± 6471.335496946136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73241.93548387097,
            "unit": "ns",
            "range": "± 4538.9694908944575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97247.95918367348,
            "unit": "ns",
            "range": "± 16371.620086165556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5132.65306122449,
            "unit": "ns",
            "range": "± 938.8274667973943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18872.164948453606,
            "unit": "ns",
            "range": "± 2104.8427429403337"
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
          "id": "d304c7bf63919d6e8a552200821462595f914d72",
          "message": "MockAccountState fixed",
          "timestamp": "2023-06-28T16:06:58+09:00",
          "tree_id": "64747f6132c5565b369231a494ea471967205542",
          "url": "https://github.com/greymistcube/libplanet/commit/d304c7bf63919d6e8a552200821462595f914d72"
        },
        "date": 1687937371372,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853110.2040816327,
            "unit": "ns",
            "range": "± 273182.40139307245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3494359.1836734693,
            "unit": "ns",
            "range": "± 384473.38112160546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2802347.3684210526,
            "unit": "ns",
            "range": "± 361239.82834597107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7072543.956043956,
            "unit": "ns",
            "range": "± 556482.2786853526"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61453.60824742268,
            "unit": "ns",
            "range": "± 17278.111525470544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9160143.157894736,
            "unit": "ns",
            "range": "± 873752.1836520525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26486934.69387755,
            "unit": "ns",
            "range": "± 1734071.2779260995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69484047.43589744,
            "unit": "ns",
            "range": "± 3562581.5379768643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131298052.63157895,
            "unit": "ns",
            "range": "± 4483061.312211437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283410486.3636364,
            "unit": "ns",
            "range": "± 6731046.540828937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6341405.46875,
            "unit": "ns",
            "range": "± 166665.22008267074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980022.6151315789,
            "unit": "ns",
            "range": "± 42395.182844969546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1519670.6163194445,
            "unit": "ns",
            "range": "± 30332.761099805124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3226463.3501838236,
            "unit": "ns",
            "range": "± 66035.34680841287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040470.4927884615,
            "unit": "ns",
            "range": "± 11934.96817310394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1020182.3961759869,
            "unit": "ns",
            "range": "± 21772.080512499888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760382.795698925,
            "unit": "ns",
            "range": "± 436006.5315684616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3969806.4516129033,
            "unit": "ns",
            "range": "± 448387.44281142374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5401651.612903226,
            "unit": "ns",
            "range": "± 421893.18672242755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5244258.510638298,
            "unit": "ns",
            "range": "± 542837.6113960281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9042137.894736841,
            "unit": "ns",
            "range": "± 571721.6565701053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347720.61855670105,
            "unit": "ns",
            "range": "± 56939.60239101372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314473.1182795699,
            "unit": "ns",
            "range": "± 45009.62732713039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300734.693877551,
            "unit": "ns",
            "range": "± 52436.16463134512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4974175.263157895,
            "unit": "ns",
            "range": "± 422318.33434649266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4602323.404255319,
            "unit": "ns",
            "range": "± 428637.46303276875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22544.18604651163,
            "unit": "ns",
            "range": "± 4018.738597858868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105996.7032967033,
            "unit": "ns",
            "range": "± 18769.830701595172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117760.86956521739,
            "unit": "ns",
            "range": "± 26466.574218887843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135304.30107526883,
            "unit": "ns",
            "range": "± 28186.513557321417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6934.782608695652,
            "unit": "ns",
            "range": "± 1896.4359158671623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21665.384615384617,
            "unit": "ns",
            "range": "± 6076.254750656179"
          }
        ]
      }
    ]
  }
}