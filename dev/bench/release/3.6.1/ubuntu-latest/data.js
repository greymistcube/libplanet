window.BENCHMARK_DATA = {
  "lastUpdate": 1700471155802,
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
          "id": "60e8bb8464f4d32d18e9ef28659ef5d32e962db9",
          "message": "Release 3.6.1",
          "timestamp": "2023-11-20T17:54:55+09:00",
          "tree_id": "0f121f06ff347e4e00129374b3f23d10cb7186fd",
          "url": "https://github.com/greymistcube/libplanet/commit/60e8bb8464f4d32d18e9ef28659ef5d32e962db9"
        },
        "date": 1700471149612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5909901.346153846,
            "unit": "ns",
            "range": "± 72310.29425313078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14580552.1,
            "unit": "ns",
            "range": "± 74880.97402335065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37871948.733333334,
            "unit": "ns",
            "range": "± 159556.78723239512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76331798.8,
            "unit": "ns",
            "range": "± 453747.93227473774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151766988.83333334,
            "unit": "ns",
            "range": "± 820053.4285292672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945693.1344086021,
            "unit": "ns",
            "range": "± 54760.570361939164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861981.4545454546,
            "unit": "ns",
            "range": "± 69269.33811006995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481569.252631579,
            "unit": "ns",
            "range": "± 88388.08077353594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5596147.346153846,
            "unit": "ns",
            "range": "± 228487.0337423715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2493841.3,
            "unit": "ns",
            "range": "± 32723.395558616994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2641323.7444444443,
            "unit": "ns",
            "range": "± 93086.04989914039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3189001.74,
            "unit": "ns",
            "range": "± 80746.3891196174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2894661.397959184,
            "unit": "ns",
            "range": "± 115001.73071727458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6615246.5,
            "unit": "ns",
            "range": "± 196691.10134083955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40105.77551020408,
            "unit": "ns",
            "range": "± 6630.4760547016085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730735.363541667,
            "unit": "ns",
            "range": "± 54067.33001713962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1152995.4854910714,
            "unit": "ns",
            "range": "± 5777.898953480077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740803.9279597356,
            "unit": "ns",
            "range": "± 3813.1979306226826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937105.0006975445,
            "unit": "ns",
            "range": "± 17252.795872576786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621092.8785807291,
            "unit": "ns",
            "range": "± 1831.4254704039438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576372.353716682,
            "unit": "ns",
            "range": "± 11247.212418317746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196280.01515151514,
            "unit": "ns",
            "range": "± 9219.212835565691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197180.4945054945,
            "unit": "ns",
            "range": "± 11479.32631237916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169582.67647058822,
            "unit": "ns",
            "range": "± 5476.632418716142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094436.3666666667,
            "unit": "ns",
            "range": "± 24438.653659627773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828295.9285714286,
            "unit": "ns",
            "range": "± 41831.973346609266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15134.3125,
            "unit": "ns",
            "range": "± 2731.311677612637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60560.484210526316,
            "unit": "ns",
            "range": "± 4256.9542224937795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61590.73595505618,
            "unit": "ns",
            "range": "± 4378.283682050619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65712.52083333333,
            "unit": "ns",
            "range": "± 11524.275034606106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3412.191011235955,
            "unit": "ns",
            "range": "± 509.7531237677816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15054.58762886598,
            "unit": "ns",
            "range": "± 2817.7486571455156"
          }
        ]
      }
    ]
  }
}