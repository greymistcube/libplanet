window.BENCHMARK_DATA = {
  "lastUpdate": 1697116934618,
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
          "id": "0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7",
          "message": "Optimized BlockMarshaler",
          "timestamp": "2023-10-12T21:52:00+09:00",
          "tree_id": "2bf417fb47ee9a4212fde2010631d21168985448",
          "url": "https://github.com/greymistcube/libplanet/commit/0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7"
        },
        "date": 1697116138171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50288.7294117647,
            "unit": "ns",
            "range": "± 2728.896189671861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8182082.142857143,
            "unit": "ns",
            "range": "± 91986.4424014231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22916117.2,
            "unit": "ns",
            "range": "± 246611.2934748007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57127116,
            "unit": "ns",
            "range": "± 158346.30496650515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113710263.53333333,
            "unit": "ns",
            "range": "± 811216.6938799721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229515577.35714287,
            "unit": "ns",
            "range": "± 1160470.5209938707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281602.5090909091,
            "unit": "ns",
            "range": "± 11131.178279237785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277410.9459459459,
            "unit": "ns",
            "range": "± 9204.203553407136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248938.82926829267,
            "unit": "ns",
            "range": "± 8795.630161911196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4554295.214285715,
            "unit": "ns",
            "range": "± 37719.8661229751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4202146.571428572,
            "unit": "ns",
            "range": "± 47277.63693612167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24165.791666666668,
            "unit": "ns",
            "range": "± 2380.390670796295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93057.15053763441,
            "unit": "ns",
            "range": "± 5756.137848732762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81887.86956521739,
            "unit": "ns",
            "range": "± 6254.719503759693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89674.07216494845,
            "unit": "ns",
            "range": "± 8817.341978604134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6262.552083333333,
            "unit": "ns",
            "range": "± 696.8106269929807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21543.520833333332,
            "unit": "ns",
            "range": "± 2159.8571930334297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416723.471264368,
            "unit": "ns",
            "range": "± 74674.71959895332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703973.5555555555,
            "unit": "ns",
            "range": "± 74815.23815441989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148685.057142857,
            "unit": "ns",
            "range": "± 103699.61683337114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9254705.48888889,
            "unit": "ns",
            "range": "± 347144.2614538608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5168832.813616072,
            "unit": "ns",
            "range": "± 45377.54108410405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1601170.8325520833,
            "unit": "ns",
            "range": "± 2574.0878917533505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099945.9095982143,
            "unit": "ns",
            "range": "± 994.0567228145899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624656.1684895833,
            "unit": "ns",
            "range": "± 14389.34172223585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832177.5522786458,
            "unit": "ns",
            "range": "± 1318.144338014072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746756.1487165178,
            "unit": "ns",
            "range": "± 212.0590926788464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3726589.066666667,
            "unit": "ns",
            "range": "± 59809.26025824174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3813012.25,
            "unit": "ns",
            "range": "± 69627.70678544568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533336,
            "unit": "ns",
            "range": "± 99727.60187296862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4567283.9069767445,
            "unit": "ns",
            "range": "± 167044.0435355461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10791202.525,
            "unit": "ns",
            "range": "± 306482.5474751722"
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
          "id": "bd218520742c2b0877fe99d9d21a5d385373ca4f",
          "message": "Changelog",
          "timestamp": "2023-10-12T22:08:45+09:00",
          "tree_id": "aa484ec8af9c2fe572a5de245fb0256607b82d11",
          "url": "https://github.com/greymistcube/libplanet/commit/bd218520742c2b0877fe99d9d21a5d385373ca4f"
        },
        "date": 1697116926782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47582.45161290323,
            "unit": "ns",
            "range": "± 2754.350872458246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7744476.5,
            "unit": "ns",
            "range": "± 24017.84362245552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19432903.85714286,
            "unit": "ns",
            "range": "± 152470.90878179763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50642692.4,
            "unit": "ns",
            "range": "± 318621.2317714293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100626796.26666667,
            "unit": "ns",
            "range": "± 669956.4180111662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204090898.73333332,
            "unit": "ns",
            "range": "± 1428504.998872971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265457.7659574468,
            "unit": "ns",
            "range": "± 9397.92036017582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255539,
            "unit": "ns",
            "range": "± 9756.263435681465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226076.65217391305,
            "unit": "ns",
            "range": "± 5674.264578769783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4143198.6,
            "unit": "ns",
            "range": "± 40959.30889449047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3816528.066666667,
            "unit": "ns",
            "range": "± 31283.74767800291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18508.988636363636,
            "unit": "ns",
            "range": "± 1443.9517097532273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85862.75789473685,
            "unit": "ns",
            "range": "± 5732.09337149046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69581.07407407407,
            "unit": "ns",
            "range": "± 1859.3272134322367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77031.45360824742,
            "unit": "ns",
            "range": "± 8038.872021336671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4780.907216494846,
            "unit": "ns",
            "range": "± 534.2882937936032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18610.574468085106,
            "unit": "ns",
            "range": "± 1640.2048619055277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1327847.90625,
            "unit": "ns",
            "range": "± 98483.24109208451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2521940.0681818184,
            "unit": "ns",
            "range": "± 84020.7153461235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948184.3513513512,
            "unit": "ns",
            "range": "± 97113.08618496278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8109870.352941177,
            "unit": "ns",
            "range": "± 245026.55712996208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5122831.005022322,
            "unit": "ns",
            "range": "± 14788.172278968132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594305.8943917411,
            "unit": "ns",
            "range": "± 1477.3570269372626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068513.7451171875,
            "unit": "ns",
            "range": "± 487.83722554195845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542273.342247596,
            "unit": "ns",
            "range": "± 6141.381581586149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876823.5705078125,
            "unit": "ns",
            "range": "± 3601.9579139555244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729484.5621512277,
            "unit": "ns",
            "range": "± 904.1315271698877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271197.6,
            "unit": "ns",
            "range": "± 74512.56754711353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473831.8666666667,
            "unit": "ns",
            "range": "± 63085.559409273315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4151038.5,
            "unit": "ns",
            "range": "± 66588.25211788777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3942865.075,
            "unit": "ns",
            "range": "± 138269.00131940647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9949545.297297297,
            "unit": "ns",
            "range": "± 264060.74023401685"
          }
        ]
      }
    ]
  }
}