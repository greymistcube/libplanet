window.BENCHMARK_DATA = {
  "lastUpdate": 1700049163111,
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
          "id": "e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb",
          "message": "More cleanup",
          "timestamp": "2023-11-13T22:30:12+09:00",
          "tree_id": "7a0fd03c1f94e4318c5ac397ab25ec869b9f15b8",
          "url": "https://github.com/greymistcube/libplanet/commit/e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb"
        },
        "date": 1699882879518,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5436023.933333334,
            "unit": "ns",
            "range": "± 22729.762274750403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14511397.086956521,
            "unit": "ns",
            "range": "± 364592.23109534715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35796923.93333333,
            "unit": "ns",
            "range": "± 337867.7827273069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73954053.88461539,
            "unit": "ns",
            "range": "± 699264.6436888229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147351882.35714287,
            "unit": "ns",
            "range": "± 574776.5133030947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966792.5056179776,
            "unit": "ns",
            "range": "± 75993.10008737091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984862.2207792208,
            "unit": "ns",
            "range": "± 100846.62558188672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481906.569892473,
            "unit": "ns",
            "range": "± 131297.19846272736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6331151.461538462,
            "unit": "ns",
            "range": "± 295345.96014674456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399452.945945946,
            "unit": "ns",
            "range": "± 80200.05541281888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507094.2636363637,
            "unit": "ns",
            "range": "± 106076.56796040261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090067.933333333,
            "unit": "ns",
            "range": "± 44287.22768871835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2986464.7066666665,
            "unit": "ns",
            "range": "± 146694.1155545962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7261766.848837209,
            "unit": "ns",
            "range": "± 212045.9307136842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39406.770833333336,
            "unit": "ns",
            "range": "± 4837.722845087055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748036.5237165177,
            "unit": "ns",
            "range": "± 52646.93629387948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217812.1865234375,
            "unit": "ns",
            "range": "± 2609.6450538212403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775271.9773995535,
            "unit": "ns",
            "range": "± 3676.44957531241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942481.6176060268,
            "unit": "ns",
            "range": "± 14028.86698388525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625634.0098407452,
            "unit": "ns",
            "range": "± 734.1627601034783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577772.8352050781,
            "unit": "ns",
            "range": "± 630.1746232923387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197055.36923076923,
            "unit": "ns",
            "range": "± 8993.464141685808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189121.93548387097,
            "unit": "ns",
            "range": "± 7899.809758802906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170858,
            "unit": "ns",
            "range": "± 2252.309916849469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119383,
            "unit": "ns",
            "range": "± 22211.821199532467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738520.714285714,
            "unit": "ns",
            "range": "± 24909.58833130658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14641.855670103092,
            "unit": "ns",
            "range": "± 3536.570882076576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65670.47916666667,
            "unit": "ns",
            "range": "± 7558.247538430649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52007.36734693877,
            "unit": "ns",
            "range": "± 1846.8443885661377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66612.17741935483,
            "unit": "ns",
            "range": "± 6997.294120122886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3235.0947368421052,
            "unit": "ns",
            "range": "± 543.6818741609411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13644.635416666666,
            "unit": "ns",
            "range": "± 3113.7805761174204"
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
          "id": "4e657671079e61ee97e92a87749c25254b73e619",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:35:58+09:00",
          "tree_id": "ffc87d30a0b081f79f43c2ec82fa9d3e084c909c",
          "url": "https://github.com/greymistcube/libplanet/commit/4e657671079e61ee97e92a87749c25254b73e619"
        },
        "date": 1699883215690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5724259.630434782,
            "unit": "ns",
            "range": "± 139325.52507781726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14263025.333333334,
            "unit": "ns",
            "range": "± 95253.07233790166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36571577.06666667,
            "unit": "ns",
            "range": "± 267939.2257451749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74655578.58333333,
            "unit": "ns",
            "range": "± 250563.00734163323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151104135.58333334,
            "unit": "ns",
            "range": "± 568974.9192039788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020897.7653061225,
            "unit": "ns",
            "range": "± 114005.48325136532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876488.6923076923,
            "unit": "ns",
            "range": "± 77173.58054603677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495382.8578947368,
            "unit": "ns",
            "range": "± 129748.94796547348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6201965.785714285,
            "unit": "ns",
            "range": "± 174859.2821640171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398814.3666666667,
            "unit": "ns",
            "range": "± 71566.22304502233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2637337.36,
            "unit": "ns",
            "range": "± 101032.33407061083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186453.9523809524,
            "unit": "ns",
            "range": "± 69239.56673209053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3028105.709677419,
            "unit": "ns",
            "range": "± 132681.114410922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7361115.720930233,
            "unit": "ns",
            "range": "± 267001.9993340807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40233.916666666664,
            "unit": "ns",
            "range": "± 5751.322468819747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3784684.40234375,
            "unit": "ns",
            "range": "± 33783.36818547332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218932.2528545673,
            "unit": "ns",
            "range": "± 4305.726250952177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765126.7040364583,
            "unit": "ns",
            "range": "± 13793.832745923077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926143.2540690105,
            "unit": "ns",
            "range": "± 4144.543821396802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618647.957438151,
            "unit": "ns",
            "range": "± 1456.337057834508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577578.0894990809,
            "unit": "ns",
            "range": "± 11423.701891847211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200182.5,
            "unit": "ns",
            "range": "± 7683.093767462599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196766.22340425532,
            "unit": "ns",
            "range": "± 12846.057294100683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175082.4393939394,
            "unit": "ns",
            "range": "± 5463.741832179859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166303.714285714,
            "unit": "ns",
            "range": "± 43919.352174321604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830212.210526316,
            "unit": "ns",
            "range": "± 51406.83688055829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13878.563829787234,
            "unit": "ns",
            "range": "± 2570.6569452749914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64624.52577319588,
            "unit": "ns",
            "range": "± 8283.458748328883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95063.9387755102,
            "unit": "ns",
            "range": "± 5552.096124677258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59106.69072164949,
            "unit": "ns",
            "range": "± 8975.020484378696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3158.548387096774,
            "unit": "ns",
            "range": "± 358.1045061251713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13377.75,
            "unit": "ns",
            "range": "± 2835.6110972305146"
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
          "id": "fdbad5642027d694244a1449b94edb94f098dc46",
          "message": "Changelog",
          "timestamp": "2023-11-13T23:53:14+09:00",
          "tree_id": "ba2912dd11fe2a26c28195cddb7aeebcd4aaf042",
          "url": "https://github.com/greymistcube/libplanet/commit/fdbad5642027d694244a1449b94edb94f098dc46"
        },
        "date": 1699887864960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5460943.2,
            "unit": "ns",
            "range": "± 31060.734535514683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14079368.466666667,
            "unit": "ns",
            "range": "± 87613.8047047273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36022713.916666664,
            "unit": "ns",
            "range": "± 249254.04867741535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74206781.42857143,
            "unit": "ns",
            "range": "± 420380.0660476942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148747283.64285713,
            "unit": "ns",
            "range": "± 1214510.2119870004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012835.1276595745,
            "unit": "ns",
            "range": "± 91092.53121600238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936759.488372093,
            "unit": "ns",
            "range": "± 105132.10602371769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530661.9742268042,
            "unit": "ns",
            "range": "± 158409.68043810307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6339436.836363636,
            "unit": "ns",
            "range": "± 267092.01742059994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2394820,
            "unit": "ns",
            "range": "± 47485.136046275926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2520914.6818181816,
            "unit": "ns",
            "range": "± 94000.76522048074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3241105.325,
            "unit": "ns",
            "range": "± 115009.69020787848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3020535.2209302327,
            "unit": "ns",
            "range": "± 163916.606769375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7488244.38,
            "unit": "ns",
            "range": "± 297901.3034138471"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42273.958333333336,
            "unit": "ns",
            "range": "± 5661.136988118693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3686750.469951923,
            "unit": "ns",
            "range": "± 10330.560713445615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215428.462890625,
            "unit": "ns",
            "range": "± 2991.8655568253316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758221.529296875,
            "unit": "ns",
            "range": "± 2258.95117417615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958126.6907552083,
            "unit": "ns",
            "range": "± 3586.3938732789607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633207.2928873698,
            "unit": "ns",
            "range": "± 788.1070730007377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583362.4543457031,
            "unit": "ns",
            "range": "± 1141.1475861994022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205858.21739130435,
            "unit": "ns",
            "range": "± 7820.0080844318645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200265.62295081967,
            "unit": "ns",
            "range": "± 9009.841343708435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167072.91666666666,
            "unit": "ns",
            "range": "± 4326.722023774406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3084120.6923076925,
            "unit": "ns",
            "range": "± 38213.07892023492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2923041.8666666667,
            "unit": "ns",
            "range": "± 34914.214569154385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15153.836734693878,
            "unit": "ns",
            "range": "± 3320.5055941685587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68520.85714285714,
            "unit": "ns",
            "range": "± 4721.50192810962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59724.744680851065,
            "unit": "ns",
            "range": "± 7763.255027517982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69609.22448979592,
            "unit": "ns",
            "range": "± 13117.869457489047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4744.459595959596,
            "unit": "ns",
            "range": "± 2018.2671336670605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14039.46875,
            "unit": "ns",
            "range": "± 3274.4262766351026"
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
          "id": "940516c5d078a4221f7e79310c434d6ce092693c",
          "message": "Cleanup",
          "timestamp": "2023-11-15T20:41:24+09:00",
          "tree_id": "bc7fab57fc5bef2010e0d6fbf18063c358077a44",
          "url": "https://github.com/greymistcube/libplanet/commit/940516c5d078a4221f7e79310c434d6ce092693c"
        },
        "date": 1700049155655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5805466.428571428,
            "unit": "ns",
            "range": "± 27824.761320323432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14448267.846153846,
            "unit": "ns",
            "range": "± 88909.53860511458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37215785.92307692,
            "unit": "ns",
            "range": "± 327788.73252916563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75559786.1923077,
            "unit": "ns",
            "range": "± 532330.2765475872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152488953.46666667,
            "unit": "ns",
            "range": "± 973817.4544118968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003128.7577319588,
            "unit": "ns",
            "range": "± 89530.98333413206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1934488.5714285714,
            "unit": "ns",
            "range": "± 83184.50782990722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1463357.3684210526,
            "unit": "ns",
            "range": "± 95991.15429193982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6517824.967391305,
            "unit": "ns",
            "range": "± 365055.2170634775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2371946.203125,
            "unit": "ns",
            "range": "± 108869.4681450236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535111.1785714286,
            "unit": "ns",
            "range": "± 70379.28695609535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3159307.5,
            "unit": "ns",
            "range": "± 110807.0189703488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2982364.1,
            "unit": "ns",
            "range": "± 133359.7119398051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7322029.135135135,
            "unit": "ns",
            "range": "± 192035.99469661963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40326.010416666664,
            "unit": "ns",
            "range": "± 5915.942882530563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3667861.9200721155,
            "unit": "ns",
            "range": "± 14518.280310502972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199230.1512276786,
            "unit": "ns",
            "range": "± 2625.262632257654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 790732.8920200893,
            "unit": "ns",
            "range": "± 6274.704322998826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928069.7952223558,
            "unit": "ns",
            "range": "± 7357.297169829008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617030.6092936198,
            "unit": "ns",
            "range": "± 2543.100237419214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572385.0360630581,
            "unit": "ns",
            "range": "± 926.329606349943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201511.10869565216,
            "unit": "ns",
            "range": "± 11715.098048917378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193393.27777777778,
            "unit": "ns",
            "range": "± 8109.080104325322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169900.02173913043,
            "unit": "ns",
            "range": "± 3805.175600649549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3133748.55,
            "unit": "ns",
            "range": "± 68736.8526647862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835989.3571428573,
            "unit": "ns",
            "range": "± 29222.720427269083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15598.13,
            "unit": "ns",
            "range": "± 4149.104093766399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67436.58762886598,
            "unit": "ns",
            "range": "± 8371.248714290601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81934.81,
            "unit": "ns",
            "range": "± 20442.092983581544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73960.40816326531,
            "unit": "ns",
            "range": "± 14715.07639799045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4270.459183673469,
            "unit": "ns",
            "range": "± 1527.5627253111904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13385.021052631579,
            "unit": "ns",
            "range": "± 2894.3576951781856"
          }
        ]
      }
    ]
  }
}