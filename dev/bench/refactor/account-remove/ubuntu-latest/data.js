window.BENCHMARK_DATA = {
  "lastUpdate": 1704178938343,
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
          "id": "2197636a9db38fc3f1ee69c5e9bd601837dc1909",
          "message": "Added tests",
          "timestamp": "2024-01-02T15:34:41+09:00",
          "tree_id": "5b5d6539ec6fac4fd46da608309eb84511299b4a",
          "url": "https://github.com/greymistcube/libplanet/commit/2197636a9db38fc3f1ee69c5e9bd601837dc1909"
        },
        "date": 1704177946338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746609.239783654,
            "unit": "ns",
            "range": "± 6350.954241333864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205638.4468470982,
            "unit": "ns",
            "range": "± 4041.359404419138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758851.0914963942,
            "unit": "ns",
            "range": "± 3017.329218623113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941139.5635516827,
            "unit": "ns",
            "range": "± 9772.607460178559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620092.6746651785,
            "unit": "ns",
            "range": "± 996.197998284856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591256.2814331055,
            "unit": "ns",
            "range": "± 11577.059963434069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423397.5,
            "unit": "ns",
            "range": "± 27285.530413784123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2491900.552631579,
            "unit": "ns",
            "range": "± 85431.93270659188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3077294.5,
            "unit": "ns",
            "range": "± 35119.402061998546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2873198.962962963,
            "unit": "ns",
            "range": "± 114606.65123442188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6685429.444444444,
            "unit": "ns",
            "range": "± 142472.91123959306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39616.32989690721,
            "unit": "ns",
            "range": "± 5113.074111452037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192716.75,
            "unit": "ns",
            "range": "± 6802.234518797331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186801.16666666666,
            "unit": "ns",
            "range": "± 5343.51443232876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173766.16666666666,
            "unit": "ns",
            "range": "± 1734.0154310592266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3188913.4,
            "unit": "ns",
            "range": "± 44494.30855385568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2753153.785714286,
            "unit": "ns",
            "range": "± 28001.55768243719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13019.247422680412,
            "unit": "ns",
            "range": "± 2441.9475664540787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66415.908045977,
            "unit": "ns",
            "range": "± 5033.6777636888355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59653.083333333336,
            "unit": "ns",
            "range": "± 6130.895871115095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66236.62244897959,
            "unit": "ns",
            "range": "± 13213.62608209529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2746.9578947368423,
            "unit": "ns",
            "range": "± 376.8738407283106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13103.10824742268,
            "unit": "ns",
            "range": "± 2511.4175303198667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5547451.5,
            "unit": "ns",
            "range": "± 19035.118955600097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13999936.1,
            "unit": "ns",
            "range": "± 96813.78478428134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36555932.13333333,
            "unit": "ns",
            "range": "± 161786.99118367542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74064931.5,
            "unit": "ns",
            "range": "± 322303.02054795163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148439023.15384614,
            "unit": "ns",
            "range": "± 881184.8263434717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935974.8076923077,
            "unit": "ns",
            "range": "± 71907.59226793052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1880171.9848484849,
            "unit": "ns",
            "range": "± 85645.80723299929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1391186.2978723405,
            "unit": "ns",
            "range": "± 108641.26806153289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6006707.755102041,
            "unit": "ns",
            "range": "± 353677.2625573826"
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
          "id": "6876527bacbde76abf5fc30535cd81ac438c056f",
          "message": "Added tests",
          "timestamp": "2024-01-02T15:51:35+09:00",
          "tree_id": "5b5d6539ec6fac4fd46da608309eb84511299b4a",
          "url": "https://github.com/greymistcube/libplanet/commit/6876527bacbde76abf5fc30535cd81ac438c056f"
        },
        "date": 1704178931172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3641599.2545572915,
            "unit": "ns",
            "range": "± 6105.610342518442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1268612.212076823,
            "unit": "ns",
            "range": "± 8896.088852041057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 790076.7947265625,
            "unit": "ns",
            "range": "± 1170.9593137004101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922214.2483473558,
            "unit": "ns",
            "range": "± 3218.241160435206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628371.685686384,
            "unit": "ns",
            "range": "± 2149.2965346376564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574850.633188101,
            "unit": "ns",
            "range": "± 3289.372784274025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2392716.0434782607,
            "unit": "ns",
            "range": "± 59078.139801512996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2592468.777777778,
            "unit": "ns",
            "range": "± 70439.7996073097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3132427.0303030303,
            "unit": "ns",
            "range": "± 99334.37115321818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2914509.9285714286,
            "unit": "ns",
            "range": "± 45550.327740886765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6991721.630434782,
            "unit": "ns",
            "range": "± 257348.701646908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39507.302083333336,
            "unit": "ns",
            "range": "± 4863.325091939706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198508.78333333333,
            "unit": "ns",
            "range": "± 8699.119499748464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190103.65573770492,
            "unit": "ns",
            "range": "± 7899.405099721636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168961.2857142857,
            "unit": "ns",
            "range": "± 3925.045568434297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3054008.3846153845,
            "unit": "ns",
            "range": "± 26564.502556790776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2774249.75,
            "unit": "ns",
            "range": "± 70316.70271567309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16360.893617021276,
            "unit": "ns",
            "range": "± 1682.09150063781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63799.7,
            "unit": "ns",
            "range": "± 4995.378332445868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52130.97368421053,
            "unit": "ns",
            "range": "± 1124.218413359109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61561.9375,
            "unit": "ns",
            "range": "± 10072.814701815241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3287.6458333333335,
            "unit": "ns",
            "range": "± 599.2355126003492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11511.892857142857,
            "unit": "ns",
            "range": "± 914.4749895182422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694304.8,
            "unit": "ns",
            "range": "± 46247.22133614392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14312985.142857144,
            "unit": "ns",
            "range": "± 77286.90991748477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37232288.875,
            "unit": "ns",
            "range": "± 639377.5823205851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75028647.23076923,
            "unit": "ns",
            "range": "± 438092.30000749725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145428080.35714287,
            "unit": "ns",
            "range": "± 751969.5824420649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 927509.5813953489,
            "unit": "ns",
            "range": "± 60594.75593956666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1823546.4473684211,
            "unit": "ns",
            "range": "± 61653.3896329057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378605.7894736843,
            "unit": "ns",
            "range": "± 105091.30501868209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5999551.81443299,
            "unit": "ns",
            "range": "± 379168.2239555015"
          }
        ]
      }
    ]
  }
}