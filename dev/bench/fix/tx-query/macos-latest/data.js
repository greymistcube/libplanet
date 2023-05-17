window.BENCHMARK_DATA = {
  "lastUpdate": 1684327991100,
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
          "id": "cd8bfc7fd4a7d74935c7159b256d52d003f22b6b",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T20:59:49+09:00",
          "tree_id": "c362b588cc0c9a394907ff671fcfbf267622fb61",
          "url": "https://github.com/greymistcube/libplanet/commit/cd8bfc7fd4a7d74935c7159b256d52d003f22b6b"
        },
        "date": 1684325772864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8366294.567567567,
            "unit": "ns",
            "range": "± 279026.45975561574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21660055.10714286,
            "unit": "ns",
            "range": "± 929795.1941866588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52546165.11764706,
            "unit": "ns",
            "range": "± 1559984.1590316934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104448677.03333333,
            "unit": "ns",
            "range": "± 3025028.4844676056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212303797.07692307,
            "unit": "ns",
            "range": "± 5743052.821453853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65215.86666666667,
            "unit": "ns",
            "range": "± 9797.15667930632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350168.8870967742,
            "unit": "ns",
            "range": "± 30198.706288526682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331484.5444444445,
            "unit": "ns",
            "range": "± 27601.531072644906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297918.0326086957,
            "unit": "ns",
            "range": "± 20923.348191634523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4598314.023809524,
            "unit": "ns",
            "range": "± 344764.12091046845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920572.0945945946,
            "unit": "ns",
            "range": "± 192619.19443693047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17216.268292682926,
            "unit": "ns",
            "range": "± 2104.211105794204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89541.23863636363,
            "unit": "ns",
            "range": "± 10429.39808987608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85588.77777777778,
            "unit": "ns",
            "range": "± 10754.214318720999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94542.30681818182,
            "unit": "ns",
            "range": "± 20007.670299770554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4707.434210526316,
            "unit": "ns",
            "range": "± 750.1899374696395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19319.777777777777,
            "unit": "ns",
            "range": "± 6063.069384410406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629885.5111111111,
            "unit": "ns",
            "range": "± 150942.00677016072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3183986.3647058825,
            "unit": "ns",
            "range": "± 251210.31207336287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2758665.6379310344,
            "unit": "ns",
            "range": "± 329394.3412223506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7249778.47752809,
            "unit": "ns",
            "range": "± 706257.7676892703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611423.2209302327,
            "unit": "ns",
            "range": "± 324435.29952901247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748990.6363636362,
            "unit": "ns",
            "range": "± 293029.412930228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4981450.573170732,
            "unit": "ns",
            "range": "± 397754.71160844446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4805132.115384615,
            "unit": "ns",
            "range": "± 378884.4555880319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8544666.779569892,
            "unit": "ns",
            "range": "± 661183.8295576905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6473578.787946428,
            "unit": "ns",
            "range": "± 50810.12341686768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055217.5559895833,
            "unit": "ns",
            "range": "± 28487.015451799023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365421.10859375,
            "unit": "ns",
            "range": "± 17051.636422075077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644793.984375,
            "unit": "ns",
            "range": "± 24770.492397985367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941653.6072916667,
            "unit": "ns",
            "range": "± 10122.38807468868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791031.4037109375,
            "unit": "ns",
            "range": "± 7808.679353401593"
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
          "id": "2e289bc95f74b8b004fc76d3d6bc676d93d27fc6",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T21:00:17+09:00",
          "tree_id": "f8c4460246e746dd9f69f8fa5995fb6dfd4e4db9",
          "url": "https://github.com/greymistcube/libplanet/commit/2e289bc95f74b8b004fc76d3d6bc676d93d27fc6"
        },
        "date": 1684325863753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8090589.44117647,
            "unit": "ns",
            "range": "± 165691.87712380118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20061969.05263158,
            "unit": "ns",
            "range": "± 440322.2518934253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54479885.62698413,
            "unit": "ns",
            "range": "± 2389580.051577072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105390715.8611111,
            "unit": "ns",
            "range": "± 3499332.857544487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210021818.23333332,
            "unit": "ns",
            "range": "± 3387552.9946687915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72060.01086956522,
            "unit": "ns",
            "range": "± 8995.661151317956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311877.0425531915,
            "unit": "ns",
            "range": "± 20868.08423381427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316796.3854166667,
            "unit": "ns",
            "range": "± 23226.592979812827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321939.8735632184,
            "unit": "ns",
            "range": "± 23175.640873607626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4703004.257731959,
            "unit": "ns",
            "range": "± 371145.32015380217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3908092.0405405406,
            "unit": "ns",
            "range": "± 193898.913216764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22467.028735632182,
            "unit": "ns",
            "range": "± 3346.9894936608757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108512.5,
            "unit": "ns",
            "range": "± 13713.47968862071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123973.89887640449,
            "unit": "ns",
            "range": "± 14035.346682608928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135400.22631578948,
            "unit": "ns",
            "range": "± 25594.180654836073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6541.75,
            "unit": "ns",
            "range": "± 982.4971728899998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18027.68085106383,
            "unit": "ns",
            "range": "± 3180.543874545507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583236.2083333333,
            "unit": "ns",
            "range": "± 161600.9025363617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2916807.8172043012,
            "unit": "ns",
            "range": "± 204677.36422923006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2573486.3229166665,
            "unit": "ns",
            "range": "± 218441.1277138411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6558637.37037037,
            "unit": "ns",
            "range": "± 272131.5505579384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300057.782051282,
            "unit": "ns",
            "range": "± 167590.30406374694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446720.084507042,
            "unit": "ns",
            "range": "± 148151.80490050896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4495862.423728813,
            "unit": "ns",
            "range": "± 192525.50499046769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4582045.761363637,
            "unit": "ns",
            "range": "± 392071.7294796608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7977244.741935484,
            "unit": "ns",
            "range": "± 635578.574257532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7773123.634588068,
            "unit": "ns",
            "range": "± 412215.29430185683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2204503.7824309594,
            "unit": "ns",
            "range": "± 77698.1708094116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391529.35765625,
            "unit": "ns",
            "range": "± 36392.01972094605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212587.5817522323,
            "unit": "ns",
            "range": "± 116132.26664138917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857040.3542480469,
            "unit": "ns",
            "range": "± 13250.73809536381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852170.7130371094,
            "unit": "ns",
            "range": "± 16671.734799464975"
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
          "id": "c63c28f54d7afa66f9ae914b8604cef9c8731acd",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T21:35:12+09:00",
          "tree_id": "5e27980423481959547c0c54d9ebbfc36d8980e6",
          "url": "https://github.com/greymistcube/libplanet/commit/c63c28f54d7afa66f9ae914b8604cef9c8731acd"
        },
        "date": 1684327967127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7972195.923076923,
            "unit": "ns",
            "range": "± 45757.24935545102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18986977.44,
            "unit": "ns",
            "range": "± 453364.63922956836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48697093.948051944,
            "unit": "ns",
            "range": "± 2496460.2998826257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111583447.8888889,
            "unit": "ns",
            "range": "± 8374749.721730083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221910289.43820226,
            "unit": "ns",
            "range": "± 20235755.88376141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68253.67368421053,
            "unit": "ns",
            "range": "± 9454.370858420745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310027.1142857143,
            "unit": "ns",
            "range": "± 15006.806845216874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294610.4012345679,
            "unit": "ns",
            "range": "± 15388.837828605625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297790.87078651687,
            "unit": "ns",
            "range": "± 21109.05861417946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4573944.3,
            "unit": "ns",
            "range": "± 422574.4993824543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3890148.0730337077,
            "unit": "ns",
            "range": "± 224392.95251906803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21393.760416666668,
            "unit": "ns",
            "range": "± 3873.4715009034726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104510,
            "unit": "ns",
            "range": "± 20302.512584462744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114022.01075268818,
            "unit": "ns",
            "range": "± 12282.0271831707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115049.55263157895,
            "unit": "ns",
            "range": "± 15568.136074611692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.979166666667,
            "unit": "ns",
            "range": "± 1091.0894891096762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18304.2311827957,
            "unit": "ns",
            "range": "± 2944.8710650884746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485824.2222222222,
            "unit": "ns",
            "range": "± 178305.93968677198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2831294.252631579,
            "unit": "ns",
            "range": "± 187530.6400292104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408983.84375,
            "unit": "ns",
            "range": "± 196108.3112242517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6170245.153846154,
            "unit": "ns",
            "range": "± 287199.15763995715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3447171.512048193,
            "unit": "ns",
            "range": "± 450596.96721616125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3847605.8674698793,
            "unit": "ns",
            "range": "± 867762.6396517848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4372248.816666666,
            "unit": "ns",
            "range": "± 190491.63919234395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423644.657303371,
            "unit": "ns",
            "range": "± 285577.18974998285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7877067.108108108,
            "unit": "ns",
            "range": "± 393816.393809351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6350610.187040441,
            "unit": "ns",
            "range": "± 122757.41390632011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883987.32421875,
            "unit": "ns",
            "range": "± 21489.536859479223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292645.0692608173,
            "unit": "ns",
            "range": "± 7588.102266483743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2900103.1910978616,
            "unit": "ns",
            "range": "± 98044.10378515089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782314.8404447115,
            "unit": "ns",
            "range": "± 2582.002163738454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742716.0959284856,
            "unit": "ns",
            "range": "± 1556.4914458206617"
          }
        ]
      }
    ]
  }
}