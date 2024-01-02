window.BENCHMARK_DATA = {
  "lastUpdate": 1704183972201,
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
          "id": "3d4e502f40da0217d656c45d23a64875b957c51b",
          "message": "Changelog",
          "timestamp": "2024-01-02T15:54:51+09:00",
          "tree_id": "d0c1bcf1bb4277928e63c102998dc872e069b9bf",
          "url": "https://github.com/greymistcube/libplanet/commit/3d4e502f40da0217d656c45d23a64875b957c51b"
        },
        "date": 1704179149390,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3703144.790885417,
            "unit": "ns",
            "range": "± 50667.192672193385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200084.7177734375,
            "unit": "ns",
            "range": "± 1703.7050448702826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770534.3111165365,
            "unit": "ns",
            "range": "± 2366.2981184416094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949419.618389423,
            "unit": "ns",
            "range": "± 5360.534364099117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614368.7572265625,
            "unit": "ns",
            "range": "± 10883.18750736351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569824.7489624023,
            "unit": "ns",
            "range": "± 10900.992539568142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397083.4210526315,
            "unit": "ns",
            "range": "± 39698.87694089621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2577090.933333333,
            "unit": "ns",
            "range": "± 75987.21667987335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3161769,
            "unit": "ns",
            "range": "± 56386.21082448134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2969399.035714286,
            "unit": "ns",
            "range": "± 125751.62985503887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6876925.153846154,
            "unit": "ns",
            "range": "± 185186.88129777275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41738.16494845361,
            "unit": "ns",
            "range": "± 6640.878505640292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199773.78021978022,
            "unit": "ns",
            "range": "± 13594.87151081629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190825.43055555556,
            "unit": "ns",
            "range": "± 9297.979451603103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166277.13157894736,
            "unit": "ns",
            "range": "± 5587.4456097288785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3190616.466666667,
            "unit": "ns",
            "range": "± 39427.3228011574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2867767.0714285714,
            "unit": "ns",
            "range": "± 44609.92887491836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12291.402173913044,
            "unit": "ns",
            "range": "± 900.7682198708434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65632.42222222222,
            "unit": "ns",
            "range": "± 4990.734575252848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62390.833333333336,
            "unit": "ns",
            "range": "± 1768.7021363492602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57170.0918367347,
            "unit": "ns",
            "range": "± 10545.390462028123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3513.7604166666665,
            "unit": "ns",
            "range": "± 404.48336755321964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14642.752631578947,
            "unit": "ns",
            "range": "± 2474.8873302032252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5478525.615384615,
            "unit": "ns",
            "range": "± 28522.840787511745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14114068.142857144,
            "unit": "ns",
            "range": "± 149966.2232842178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36521460.5,
            "unit": "ns",
            "range": "± 122312.68609010646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74920457.76923077,
            "unit": "ns",
            "range": "± 435506.4530455995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150575336.8846154,
            "unit": "ns",
            "range": "± 1021955.3438082588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949261.7216494846,
            "unit": "ns",
            "range": "± 76061.8505100649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849105.842857143,
            "unit": "ns",
            "range": "± 88729.17080050934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1405233.112244898,
            "unit": "ns",
            "range": "± 133619.83673253973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5997896.079545454,
            "unit": "ns",
            "range": "± 330028.29919813585"
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
          "id": "a515e229f8a0187fbdc5614132c4e70c7a870f84",
          "message": "Changelog",
          "timestamp": "2024-01-02T17:15:14+09:00",
          "tree_id": "d4d6c707870978d1a24f8ab3bd97551a6094c158",
          "url": "https://github.com/greymistcube/libplanet/commit/a515e229f8a0187fbdc5614132c4e70c7a870f84"
        },
        "date": 1704183965718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3555278.8330729166,
            "unit": "ns",
            "range": "± 49182.02818099575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1148702.0551060268,
            "unit": "ns",
            "range": "± 10803.439803158215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 707479.8075358073,
            "unit": "ns",
            "range": "± 4030.155915794315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1820955.5206473214,
            "unit": "ns",
            "range": "± 21306.881735012845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 596178.1103515625,
            "unit": "ns",
            "range": "± 6344.548684650904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551775.4193359375,
            "unit": "ns",
            "range": "± 10238.864971916099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2237934,
            "unit": "ns",
            "range": "± 67141.5054153353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2344633.8970588236,
            "unit": "ns",
            "range": "± 110682.2388839437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2950645.7978723403,
            "unit": "ns",
            "range": "± 113755.5735123635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2705377.6338028167,
            "unit": "ns",
            "range": "± 130486.63229402242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6664403.2,
            "unit": "ns",
            "range": "± 196916.75843477322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37569.86021505376,
            "unit": "ns",
            "range": "± 5112.714472149411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186461.25,
            "unit": "ns",
            "range": "± 10988.343240842609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181014.39333333334,
            "unit": "ns",
            "range": "± 9086.675151714888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153218.4705882353,
            "unit": "ns",
            "range": "± 6245.4991068863055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2859366.8653846155,
            "unit": "ns",
            "range": "± 117658.59131202678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2676091.6274509802,
            "unit": "ns",
            "range": "± 107587.00305538041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13386.31,
            "unit": "ns",
            "range": "± 3004.7916067339834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61538.545454545456,
            "unit": "ns",
            "range": "± 7698.973574938848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53002.05789473684,
            "unit": "ns",
            "range": "± 4551.501701486424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60299.05376344086,
            "unit": "ns",
            "range": "± 9043.413807327204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4591.377551020408,
            "unit": "ns",
            "range": "± 2197.504599365634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13945.80612244898,
            "unit": "ns",
            "range": "± 2115.4427501197692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5384014.5,
            "unit": "ns",
            "range": "± 87980.9393699742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13500232.566666666,
            "unit": "ns",
            "range": "± 120841.67989355013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35099823.23076923,
            "unit": "ns",
            "range": "± 408729.5133628828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68820503.76923077,
            "unit": "ns",
            "range": "± 796041.730076189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139654561.75,
            "unit": "ns",
            "range": "± 769271.2332345494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 885634.7083333334,
            "unit": "ns",
            "range": "± 71357.5167922493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1779404.9239130435,
            "unit": "ns",
            "range": "± 100384.37079121427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1316499.75,
            "unit": "ns",
            "range": "± 91010.53198590751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5664972.741935484,
            "unit": "ns",
            "range": "± 344972.72222253797"
          }
        ]
      }
    ]
  }
}