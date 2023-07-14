window.BENCHMARK_DATA = {
  "lastUpdate": 1689321055406,
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
          "id": "e26c06789337ed69008ba96da5737c2f5c713a79",
          "message": "Faster hex for netstandard2.1 and up",
          "timestamp": "2023-07-12T18:47:56+09:00",
          "tree_id": "48d3f531a9ed328184da0b1e4a76cc37947d4a5f",
          "url": "https://github.com/greymistcube/libplanet/commit/e26c06789337ed69008ba96da5737c2f5c713a79"
        },
        "date": 1689156617363,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685853.6842105263,
            "unit": "ns",
            "range": "± 175033.87259450994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242111.5789473685,
            "unit": "ns",
            "range": "± 276980.7574018178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2175790.625,
            "unit": "ns",
            "range": "± 233637.3321278425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6094785.858585859,
            "unit": "ns",
            "range": "± 544652.0570670487"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58119.78021978022,
            "unit": "ns",
            "range": "± 11686.860806337838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8086833.870967742,
            "unit": "ns",
            "range": "± 485759.1627479077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22853592.708333332,
            "unit": "ns",
            "range": "± 2029247.5450012598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59686118,
            "unit": "ns",
            "range": "± 6099198.7596216025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139299697.5609756,
            "unit": "ns",
            "range": "± 4950866.75055428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259269039.3939394,
            "unit": "ns",
            "range": "± 8152981.513721659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5918044.247159091,
            "unit": "ns",
            "range": "± 220093.1390878236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881529.5479910714,
            "unit": "ns",
            "range": "± 26620.33726022343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496918.974905303,
            "unit": "ns",
            "range": "± 47171.13842147115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115830.8743990385,
            "unit": "ns",
            "range": "± 39821.07211947782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038416.1301185344,
            "unit": "ns",
            "range": "± 29735.773708349323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012769.53125,
            "unit": "ns",
            "range": "± 28786.19610970632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3864091.208791209,
            "unit": "ns",
            "range": "± 313112.8634457378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4038963.829787234,
            "unit": "ns",
            "range": "± 300223.51166625513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5269784.2105263155,
            "unit": "ns",
            "range": "± 489725.9757699044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4472929.787234043,
            "unit": "ns",
            "range": "± 360117.7097972712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8270727.368421053,
            "unit": "ns",
            "range": "± 478470.43005236017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340530.92783505155,
            "unit": "ns",
            "range": "± 38741.28224738853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324873.19587628864,
            "unit": "ns",
            "range": "± 33310.62929539133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302472.0430107527,
            "unit": "ns",
            "range": "± 38327.233380545826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4901276.041666667,
            "unit": "ns",
            "range": "± 343637.85918036074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4500926.315789473,
            "unit": "ns",
            "range": "± 293122.66193252587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24430.68181818182,
            "unit": "ns",
            "range": "± 5578.362507529673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107209.67741935483,
            "unit": "ns",
            "range": "± 13995.768494955033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120762.88659793814,
            "unit": "ns",
            "range": "± 17962.01617063322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138009.47368421053,
            "unit": "ns",
            "range": "± 28561.110569340395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7078.16091954023,
            "unit": "ns",
            "range": "± 1179.4189826327595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25582.98969072165,
            "unit": "ns",
            "range": "± 10610.241923583833"
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
          "id": "1f99608a928e93277dd971d450e9b299988a7db3",
          "message": "Changelog",
          "timestamp": "2023-07-14T15:24:16+09:00",
          "tree_id": "2ad944efb5e41f0670751e86fdb761c15c140134",
          "url": "https://github.com/greymistcube/libplanet/commit/1f99608a928e93277dd971d450e9b299988a7db3"
        },
        "date": 1689316803301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341342.857142857,
            "unit": "ns",
            "range": "± 94388.52367773245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2551213.846153846,
            "unit": "ns",
            "range": "± 119202.12073003761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1761003,
            "unit": "ns",
            "range": "± 141870.07390460107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5000630.6122448975,
            "unit": "ns",
            "range": "± 350486.7861997828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46123.958333333336,
            "unit": "ns",
            "range": "± 3167.1253707479104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7300035.714285715,
            "unit": "ns",
            "range": "± 95156.7258396771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19900277.777777776,
            "unit": "ns",
            "range": "± 415499.81780353555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49989600,
            "unit": "ns",
            "range": "± 804603.6246855608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99525540,
            "unit": "ns",
            "range": "± 1492887.1418448598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197369457.14285713,
            "unit": "ns",
            "range": "± 2487209.274688984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4855004.322916667,
            "unit": "ns",
            "range": "± 27164.848663953577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549726.5904017857,
            "unit": "ns",
            "range": "± 4200.188252388651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173826.3151041667,
            "unit": "ns",
            "range": "± 5413.039522817221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679332.784598214,
            "unit": "ns",
            "range": "± 22685.81021102223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837792.2981770834,
            "unit": "ns",
            "range": "± 5639.2436620194185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774912.6352163461,
            "unit": "ns",
            "range": "± 1937.5774374380437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147925.925925926,
            "unit": "ns",
            "range": "± 131432.39626082426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3410725,
            "unit": "ns",
            "range": "± 66242.28760140056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4078607.8947368423,
            "unit": "ns",
            "range": "± 137613.43896813737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3670877.419354839,
            "unit": "ns",
            "range": "± 166472.4199767133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6125488.095238095,
            "unit": "ns",
            "range": "± 220801.76099772853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266605,
            "unit": "ns",
            "range": "± 9411.393803966197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251039.58333333334,
            "unit": "ns",
            "range": "± 7958.529201852411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223758.33333333334,
            "unit": "ns",
            "range": "± 8743.747512787402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4076720,
            "unit": "ns",
            "range": "± 93684.26593729881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3672728.5714285714,
            "unit": "ns",
            "range": "± 62119.134034424635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20653.260869565216,
            "unit": "ns",
            "range": "± 1757.5239255218273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84489.04109589041,
            "unit": "ns",
            "range": "± 3982.0974946152437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71887.05882352941,
            "unit": "ns",
            "range": "± 3868.640349174437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91233.69565217392,
            "unit": "ns",
            "range": "± 13960.637577728468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5100,
            "unit": "ns",
            "range": "± 740.2702209328698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19797.894736842107,
            "unit": "ns",
            "range": "± 1674.907361513721"
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
          "id": "06d1395b6948ee65b2493afe480c432233c48a6c",
          "message": "Changelog",
          "timestamp": "2023-07-14T16:23:52+09:00",
          "tree_id": "f8dfe112948f8f580bdfe1d58dc83b1467203602",
          "url": "https://github.com/greymistcube/libplanet/commit/06d1395b6948ee65b2493afe480c432233c48a6c"
        },
        "date": 1689320731014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830653.6842105263,
            "unit": "ns",
            "range": "± 180688.58352149866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3346092.5531914895,
            "unit": "ns",
            "range": "± 255736.00571950778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329703.1914893617,
            "unit": "ns",
            "range": "± 219495.49310881353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6406618.085106383,
            "unit": "ns",
            "range": "± 470178.7772461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61952.68817204301,
            "unit": "ns",
            "range": "± 9678.703553565083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10483700,
            "unit": "ns",
            "range": "± 214175.9556999805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26047494.736842107,
            "unit": "ns",
            "range": "± 561541.8273465025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67133971.42857143,
            "unit": "ns",
            "range": "± 1091520.4049881496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132225241.66666667,
            "unit": "ns",
            "range": "± 1609984.091653948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283017940,
            "unit": "ns",
            "range": "± 3635522.2768439436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6156197.604166667,
            "unit": "ns",
            "range": "± 100624.7297563139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044601.5885416667,
            "unit": "ns",
            "range": "± 24135.371372895952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1529584.4466145833,
            "unit": "ns",
            "range": "± 18328.014461418305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3290010.6510416665,
            "unit": "ns",
            "range": "± 51471.37888956746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092797.4330357143,
            "unit": "ns",
            "range": "± 17849.437184058726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1004873.4375,
            "unit": "ns",
            "range": "± 13379.739598686383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4034152.0408163266,
            "unit": "ns",
            "range": "± 302090.40608632436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4336479.166666667,
            "unit": "ns",
            "range": "± 280394.2693748316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5593869.565217392,
            "unit": "ns",
            "range": "± 215560.2868697347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4930038.947368421,
            "unit": "ns",
            "range": "± 289769.3753897637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8111127.2727272725,
            "unit": "ns",
            "range": "± 304147.7810658377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357552.57731958764,
            "unit": "ns",
            "range": "± 35981.91991815561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331564.5833333333,
            "unit": "ns",
            "range": "± 32944.38368928256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308401.0989010989,
            "unit": "ns",
            "range": "± 24808.495384110727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5214056.097560976,
            "unit": "ns",
            "range": "± 187163.90684207852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4884351.162790698,
            "unit": "ns",
            "range": "± 263001.77979455306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24321.11111111111,
            "unit": "ns",
            "range": "± 5173.902629010513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110837.36842105263,
            "unit": "ns",
            "range": "± 19185.92259913094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127564.58333333333,
            "unit": "ns",
            "range": "± 23177.87047648168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146939.58333333334,
            "unit": "ns",
            "range": "± 23412.954035462222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8898.91304347826,
            "unit": "ns",
            "range": "± 1111.32972181852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25848.387096774193,
            "unit": "ns",
            "range": "± 6526.86110228549"
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
          "id": "4664c9869df0b85b81f6b7f7bb03118e6411c1a8",
          "message": "Changelog",
          "timestamp": "2023-07-14T16:35:18+09:00",
          "tree_id": "131e2ac4e3ab8806b23bbe508d3fb4215ff40af3",
          "url": "https://github.com/greymistcube/libplanet/commit/4664c9869df0b85b81f6b7f7bb03118e6411c1a8"
        },
        "date": 1689321031955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373125.2525252525,
            "unit": "ns",
            "range": "± 83503.95730990938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2535064.0625,
            "unit": "ns",
            "range": "± 104298.55249750783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1976275,
            "unit": "ns",
            "range": "± 51143.525664460256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4748626.923076923,
            "unit": "ns",
            "range": "± 189950.43741118326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46184.04255319149,
            "unit": "ns",
            "range": "± 2999.0788260099744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7144536.666666667,
            "unit": "ns",
            "range": "± 111617.71407459523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18075576.923076924,
            "unit": "ns",
            "range": "± 44214.00897615585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46829242.85714286,
            "unit": "ns",
            "range": "± 256264.07267710185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92153333.33333333,
            "unit": "ns",
            "range": "± 382539.9300664417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186405893.33333334,
            "unit": "ns",
            "range": "± 738705.3873081576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908929.507211538,
            "unit": "ns",
            "range": "± 5845.260657935173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521657.7799479167,
            "unit": "ns",
            "range": "± 1759.5036084485216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179439.6709735577,
            "unit": "ns",
            "range": "± 1049.0600906462932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2519894.0494791665,
            "unit": "ns",
            "range": "± 4406.581720616613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810979.1782924107,
            "unit": "ns",
            "range": "± 777.3630348681223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723405.87890625,
            "unit": "ns",
            "range": "± 1043.879404652893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3165331.8181818184,
            "unit": "ns",
            "range": "± 76918.17319701092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3267947.0588235296,
            "unit": "ns",
            "range": "± 65959.07933756219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4135781.8181818184,
            "unit": "ns",
            "range": "± 98259.06785424141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3588455.263157895,
            "unit": "ns",
            "range": "± 120232.79153683361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5983533.333333333,
            "unit": "ns",
            "range": "± 153267.4514261481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269285.29411764705,
            "unit": "ns",
            "range": "± 8666.406138960883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252108.33333333334,
            "unit": "ns",
            "range": "± 8287.421622124528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232447.91666666666,
            "unit": "ns",
            "range": "± 13429.911463960756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3875016.6666666665,
            "unit": "ns",
            "range": "± 45097.55563009512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3484150,
            "unit": "ns",
            "range": "± 24475.097234033303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20696.938775510203,
            "unit": "ns",
            "range": "± 1605.7373988766228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83926.4367816092,
            "unit": "ns",
            "range": "± 4414.417704235587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67885.29411764706,
            "unit": "ns",
            "range": "± 2174.3521993069603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89174.48979591837,
            "unit": "ns",
            "range": "± 12746.435209961666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4775,
            "unit": "ns",
            "range": "± 644.490823094194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18884.375,
            "unit": "ns",
            "range": "± 2189.848739068523"
          }
        ]
      }
    ]
  }
}