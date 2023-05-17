window.BENCHMARK_DATA = {
  "lastUpdate": 1684325799774,
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
      }
    ]
  }
}