window.BENCHMARK_DATA = {
  "lastUpdate": 1704356042102,
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
          "id": "a8f4615570603c3cbe8eb14dfb87e907d223b5ae",
          "message": "Release 3.9.2",
          "timestamp": "2024-01-04T16:58:57+09:00",
          "tree_id": "9dc58c6da927f1a3e0753c47498663840bcbead5",
          "url": "https://github.com/greymistcube/libplanet/commit/a8f4615570603c3cbe8eb14dfb87e907d223b5ae"
        },
        "date": 1704356024557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7652572.923076923,
            "unit": "ns",
            "range": "± 106138.1175124042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19071566.708333332,
            "unit": "ns",
            "range": "± 483888.16546585556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47265219.233333334,
            "unit": "ns",
            "range": "± 830376.100199049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93868615.86666666,
            "unit": "ns",
            "range": "± 1593484.9983783911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197489299.69047618,
            "unit": "ns",
            "range": "± 7108159.420440481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42515.336842105266,
            "unit": "ns",
            "range": "± 11367.252565388453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229158.91758241758,
            "unit": "ns",
            "range": "± 17505.123201233237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258458.9347826087,
            "unit": "ns",
            "range": "± 21181.581474076782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259852.07777777777,
            "unit": "ns",
            "range": "± 27193.074506732664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956715.802325581,
            "unit": "ns",
            "range": "± 144483.41378964984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3426651.033333333,
            "unit": "ns",
            "range": "± 62192.659660889556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13089.82105263158,
            "unit": "ns",
            "range": "± 1366.6724068470753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78745.1649484536,
            "unit": "ns",
            "range": "± 11257.448067539193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67816.73232323233,
            "unit": "ns",
            "range": "± 16629.531156538702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63903.20212765958,
            "unit": "ns",
            "range": "± 11285.43278628511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3946.962365591398,
            "unit": "ns",
            "range": "± 892.1010198102663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14633.297872340425,
            "unit": "ns",
            "range": "± 2723.7859634769643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328035.611111111,
            "unit": "ns",
            "range": "± 111925.12004312211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717812.3333333335,
            "unit": "ns",
            "range": "± 150659.41700324754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051594.72,
            "unit": "ns",
            "range": "± 238416.82190034786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20401216.139784947,
            "unit": "ns",
            "range": "± 3174228.1700551733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2898108.2093023257,
            "unit": "ns",
            "range": "± 104558.57820529262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3177479.620253165,
            "unit": "ns",
            "range": "± 165150.37166351618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3624238.5754716983,
            "unit": "ns",
            "range": "± 138029.25580621403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3676022.5604395606,
            "unit": "ns",
            "range": "± 196008.972731931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22312654.63829787,
            "unit": "ns",
            "range": "± 2922902.9972247686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4424313.730208334,
            "unit": "ns",
            "range": "± 39726.88243582299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1370651.9429086538,
            "unit": "ns",
            "range": "± 17194.206071113193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897349.6524088542,
            "unit": "ns",
            "range": "± 14018.72670341904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2011482.7911184211,
            "unit": "ns",
            "range": "± 63970.30790061798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633376.8916015625,
            "unit": "ns",
            "range": "± 4838.505422701472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 638528.4066642992,
            "unit": "ns",
            "range": "± 20158.949972963455"
          }
        ]
      }
    ]
  }
}