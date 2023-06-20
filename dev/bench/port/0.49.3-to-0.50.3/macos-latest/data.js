window.BENCHMARK_DATA = {
  "lastUpdate": 1678786342303,
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
          "id": "de5410f90bb05b09dd4395beaf41218dcadda201",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T18:14:03+09:00",
          "tree_id": "bb1eb97752999e8ef0a439815ec07e804f395596",
          "url": "https://github.com/greymistcube/libplanet/commit/de5410f90bb05b09dd4395beaf41218dcadda201"
        },
        "date": 1678786298013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134228.1875,
            "unit": "ns",
            "range": "± 5249.592229984823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123788.48958333333,
            "unit": "ns",
            "range": "± 20067.479954548508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267197.8387096774,
            "unit": "ns",
            "range": "± 32190.308167511455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217913.03684210527,
            "unit": "ns",
            "range": "± 14240.183408460964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4285621.733333333,
            "unit": "ns",
            "range": "± 55206.020826493535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10949645.5625,
            "unit": "ns",
            "range": "± 201813.18313660574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20363.444444444445,
            "unit": "ns",
            "range": "± 1522.612805445254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60899.79347826087,
            "unit": "ns",
            "range": "± 5869.096355811784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51263.6,
            "unit": "ns",
            "range": "± 3600.519260423537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115541.5172413793,
            "unit": "ns",
            "range": "± 10979.79002410959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6862.197916666667,
            "unit": "ns",
            "range": "± 799.0610492425885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19000.41935483871,
            "unit": "ns",
            "range": "± 1612.0898084445803"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5677095.646112351,
            "unit": "ns",
            "range": "± 299473.3759150192"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7463662.4,
            "unit": "ns",
            "range": "± 134684.58136210585"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31488514.561643835,
            "unit": "ns",
            "range": "± 1560219.9224406367"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7967248.857142857,
            "unit": "ns",
            "range": "± 108906.32650451851"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36531171.15,
            "unit": "ns",
            "range": "± 826536.0402167512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7192488.883370535,
            "unit": "ns",
            "range": "± 52710.88364820303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2281799.9661458335,
            "unit": "ns",
            "range": "± 47236.990008417335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1474997.2626953125,
            "unit": "ns",
            "range": "± 11313.900985487271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3013757.279296875,
            "unit": "ns",
            "range": "± 25448.930718999916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974564.882952009,
            "unit": "ns",
            "range": "± 8332.664916245205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861113.917561849,
            "unit": "ns",
            "range": "± 4208.126127676679"
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
          "id": "b88179351e1e8ac37239d812c80ecab67235fea1",
          "message": "Changelog",
          "timestamp": "2023-03-14T18:16:19+09:00",
          "tree_id": "ff7fb2fc6be7e74a14b2c5236392739d907b0fff",
          "url": "https://github.com/greymistcube/libplanet/commit/b88179351e1e8ac37239d812c80ecab67235fea1"
        },
        "date": 1678786330600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139610.56097560975,
            "unit": "ns",
            "range": "± 5042.440054421969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111279.80208333333,
            "unit": "ns",
            "range": "± 14062.543867062184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243009.87368421053,
            "unit": "ns",
            "range": "± 27944.434475855185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217142.1075949367,
            "unit": "ns",
            "range": "± 11176.166870092211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3755377.6428571427,
            "unit": "ns",
            "range": "± 27207.875615646353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11090657.776595745,
            "unit": "ns",
            "range": "± 765507.4303620359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25218.260869565216,
            "unit": "ns",
            "range": "± 4151.585281405364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69480.82795698925,
            "unit": "ns",
            "range": "± 12520.602409996487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60667.52808988764,
            "unit": "ns",
            "range": "± 4582.949792164151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119793.90217391304,
            "unit": "ns",
            "range": "± 18961.880794216093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6971.666666666667,
            "unit": "ns",
            "range": "± 760.1391516193344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19129.3125,
            "unit": "ns",
            "range": "± 3044.700280167595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7067756.207072369,
            "unit": "ns",
            "range": "± 949209.7765666223"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7522103.039325843,
            "unit": "ns",
            "range": "± 1062457.353352638"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31256422.033333335,
            "unit": "ns",
            "range": "± 4318612.604875485"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7240708.466666667,
            "unit": "ns",
            "range": "± 122817.07492263599"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31265622.257142857,
            "unit": "ns",
            "range": "± 1019130.9992783455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7228323.014423077,
            "unit": "ns",
            "range": "± 119552.88168506445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990376.9105902778,
            "unit": "ns",
            "range": "± 41214.31484800391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287815.2783954327,
            "unit": "ns",
            "range": "± 9452.657981288397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2414992.2415865385,
            "unit": "ns",
            "range": "± 34723.63880539784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 884866.9915068655,
            "unit": "ns",
            "range": "± 27624.17732976497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744625.8889431424,
            "unit": "ns",
            "range": "± 24496.05921885484"
          }
        ]
      }
    ]
  }
}