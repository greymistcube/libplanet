window.BENCHMARK_DATA = {
  "lastUpdate": 1702005920888,
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
          "id": "c667983c7f840a61f5dbec49f6002de8d3d4f6e2",
          "message": "Prepare 3.9.2",
          "timestamp": "2023-12-08T12:06:46+09:00",
          "tree_id": "b3037719533c28a873c12113bb86fca1a23b8831",
          "url": "https://github.com/greymistcube/libplanet/commit/c667983c7f840a61f5dbec49f6002de8d3d4f6e2"
        },
        "date": 1702005905329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8651274.606060605,
            "unit": "ns",
            "range": "± 381410.34808143834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20752871.622222222,
            "unit": "ns",
            "range": "± 786484.7303184043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53504527.55555555,
            "unit": "ns",
            "range": "± 1100424.9256821189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115514742.41111112,
            "unit": "ns",
            "range": "± 10603943.206953295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228444023.13157895,
            "unit": "ns",
            "range": "± 7742061.139841011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71581.17204301075,
            "unit": "ns",
            "range": "± 9751.68025056246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308266.90425531915,
            "unit": "ns",
            "range": "± 22465.320108007596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323341.8626373626,
            "unit": "ns",
            "range": "± 47745.04000289605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298794.39344262297,
            "unit": "ns",
            "range": "± 12487.706868861991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4079407.574074074,
            "unit": "ns",
            "range": "± 111229.14880445473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3606736.3571428573,
            "unit": "ns",
            "range": "± 60816.32080492253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18224.691489361703,
            "unit": "ns",
            "range": "± 3320.510464146655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79070.14130434782,
            "unit": "ns",
            "range": "± 7935.32019556787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77785.45833333333,
            "unit": "ns",
            "range": "± 10476.205904124548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112380.8762886598,
            "unit": "ns",
            "range": "± 21216.173170611364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7620.633333333333,
            "unit": "ns",
            "range": "± 1347.8991764548414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20912.47894736842,
            "unit": "ns",
            "range": "± 5404.046561012832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372162.4166666667,
            "unit": "ns",
            "range": "± 144166.5113224191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2723221.146067416,
            "unit": "ns",
            "range": "± 149712.8550641004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061383.9896907217,
            "unit": "ns",
            "range": "± 137169.4353861535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9496058.465517242,
            "unit": "ns",
            "range": "± 412352.4761178643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392251.1134020616,
            "unit": "ns",
            "range": "± 274164.57740283775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3515661.8659793814,
            "unit": "ns",
            "range": "± 311486.6270122212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4592532.625,
            "unit": "ns",
            "range": "± 410502.39062516275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4129569.9204545454,
            "unit": "ns",
            "range": "± 240838.90565695483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19378556.333333332,
            "unit": "ns",
            "range": "± 2932455.561421304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5924324.05078125,
            "unit": "ns",
            "range": "± 58924.66665989709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1732227.7643229167,
            "unit": "ns",
            "range": "± 22419.585789401022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1096474.59609375,
            "unit": "ns",
            "range": "± 24349.39390024095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2943866.38328125,
            "unit": "ns",
            "range": "± 147634.5522718862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835929.8,
            "unit": "ns",
            "range": "± 12921.024965366387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815928.2120117188,
            "unit": "ns",
            "range": "± 18486.98651279412"
          }
        ]
      }
    ]
  }
}