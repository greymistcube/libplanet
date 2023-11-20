window.BENCHMARK_DATA = {
  "lastUpdate": 1700468675453,
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
          "id": "8eaba8bfb494d0eb4664076dcfebda984d623a5f",
          "message": "Release 3.6.1",
          "timestamp": "2023-11-20T17:13:46+09:00",
          "tree_id": "bbdc6bb77b5e1b1e069c9c19d459370c81ca5a0f",
          "url": "https://github.com/greymistcube/libplanet/commit/8eaba8bfb494d0eb4664076dcfebda984d623a5f"
        },
        "date": 1700468669285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5783098.923076923,
            "unit": "ns",
            "range": "± 22317.2972507184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14976417.384615384,
            "unit": "ns",
            "range": "± 98320.5420555122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38118995.428571425,
            "unit": "ns",
            "range": "± 318120.51460013713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76208303.6923077,
            "unit": "ns",
            "range": "± 284064.1993855687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155517005.66666666,
            "unit": "ns",
            "range": "± 385730.7123446081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956007.1684210526,
            "unit": "ns",
            "range": "± 85032.6387688434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895189.9473684211,
            "unit": "ns",
            "range": "± 96026.37870215937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1349949.0764705883,
            "unit": "ns",
            "range": "± 69352.7601137108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5707230.773333333,
            "unit": "ns",
            "range": "± 286551.07242460496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2485989.1551724137,
            "unit": "ns",
            "range": "± 72611.97837787011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2481761.1129032257,
            "unit": "ns",
            "range": "± 65506.53955836644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3142374.1428571427,
            "unit": "ns",
            "range": "± 47898.420807205905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2971333.1923076925,
            "unit": "ns",
            "range": "± 122033.51049208213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6523972.769230769,
            "unit": "ns",
            "range": "± 150788.27666454916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38249.755319148935,
            "unit": "ns",
            "range": "± 4429.3266962934995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3664937.601004464,
            "unit": "ns",
            "range": "± 17032.1661197012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1158451.2631138393,
            "unit": "ns",
            "range": "± 4674.072580406599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736054.0836838942,
            "unit": "ns",
            "range": "± 1480.3914936397043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956743.2001201923,
            "unit": "ns",
            "range": "± 7151.565702294328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610901.009358724,
            "unit": "ns",
            "range": "± 3735.3117299428122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558842.4142878606,
            "unit": "ns",
            "range": "± 3239.234243853804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198432.34146341463,
            "unit": "ns",
            "range": "± 9519.229588366767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194307.39285714287,
            "unit": "ns",
            "range": "± 8326.610161903322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164461.21739130435,
            "unit": "ns",
            "range": "± 3962.1118560287764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3138449.3571428573,
            "unit": "ns",
            "range": "± 38796.36494987869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855126.1,
            "unit": "ns",
            "range": "± 46605.42981364173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14688.081632653062,
            "unit": "ns",
            "range": "± 2921.2521629350963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59276.43956043956,
            "unit": "ns",
            "range": "± 3973.5431102586826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51061.166666666664,
            "unit": "ns",
            "range": "± 906.995721100843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64501.802083333336,
            "unit": "ns",
            "range": "± 10052.629052949591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3162.9473684210525,
            "unit": "ns",
            "range": "± 559.0132714220476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12019.602150537634,
            "unit": "ns",
            "range": "± 1465.0642599038101"
          }
        ]
      }
    ]
  }
}