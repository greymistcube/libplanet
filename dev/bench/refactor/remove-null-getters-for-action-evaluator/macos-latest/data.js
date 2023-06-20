window.BENCHMARK_DATA = {
  "lastUpdate": 1687244900777,
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
          "id": "547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2",
          "message": "General internal API cleanup",
          "timestamp": "2023-06-14T21:58:12+09:00",
          "tree_id": "c1642302083e2f353fa08f273beb05f5929b1087",
          "url": "https://github.com/greymistcube/libplanet/commit/547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2"
        },
        "date": 1686749414478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9971207.989898989,
            "unit": "ns",
            "range": "± 1658786.3406719891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27043722.18,
            "unit": "ns",
            "range": "± 4659741.5074520195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74080350.98,
            "unit": "ns",
            "range": "± 5473188.755165408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151299500.99,
            "unit": "ns",
            "range": "± 13238296.903231144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297668907.05,
            "unit": "ns",
            "range": "± 17479218.44057402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80396.35483870968,
            "unit": "ns",
            "range": "± 17968.500615899768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 463085.40625,
            "unit": "ns",
            "range": "± 87919.80036458802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 436298.36734693876,
            "unit": "ns",
            "range": "± 96110.69458438292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 418028.85,
            "unit": "ns",
            "range": "± 82524.76629906108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6136169.44,
            "unit": "ns",
            "range": "± 1132246.4621763073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5544967.262626262,
            "unit": "ns",
            "range": "± 834293.5691926775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32936.163043478264,
            "unit": "ns",
            "range": "± 5756.269049369486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 160907.22340425532,
            "unit": "ns",
            "range": "± 29152.11499184821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 161391.50505050505,
            "unit": "ns",
            "range": "± 30964.388707811497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 167087.84210526315,
            "unit": "ns",
            "range": "± 31379.794444330273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11008.193548387097,
            "unit": "ns",
            "range": "± 1334.5272429335555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32450.433333333334,
            "unit": "ns",
            "range": "± 7804.579915564127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788611.306122449,
            "unit": "ns",
            "range": "± 337029.5668169375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3145750.5168539328,
            "unit": "ns",
            "range": "± 298665.835985452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2672609.5894736843,
            "unit": "ns",
            "range": "± 349051.0251006259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7388213.617021277,
            "unit": "ns",
            "range": "± 926099.4553798165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4631293.94,
            "unit": "ns",
            "range": "± 807427.8045353992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5146211.03030303,
            "unit": "ns",
            "range": "± 874812.4322979002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6170896.714285715,
            "unit": "ns",
            "range": "± 1002437.9946739847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6331583.01,
            "unit": "ns",
            "range": "± 1020416.036499527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10035678.636842106,
            "unit": "ns",
            "range": "± 1419400.3818331298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8549250.1671875,
            "unit": "ns",
            "range": "± 1074545.5971735606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2560949.1565234377,
            "unit": "ns",
            "range": "± 227806.64511228874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1528444.4347213274,
            "unit": "ns",
            "range": "± 88617.2168329855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335189.9026171877,
            "unit": "ns",
            "range": "± 206922.62033109774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1107265.2331671463,
            "unit": "ns",
            "range": "± 55736.14507637629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1006107.6966737689,
            "unit": "ns",
            "range": "± 65647.30677453111"
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
          "id": "63b67ed57ada1f205f73fb47bb27037d6897c542",
          "message": "Changelog",
          "timestamp": "2023-06-15T09:51:09+09:00",
          "tree_id": "b6c665558de10fbff0e8e63d41f6847d4eab2b02",
          "url": "https://github.com/greymistcube/libplanet/commit/63b67ed57ada1f205f73fb47bb27037d6897c542"
        },
        "date": 1686791847709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8863769.1375,
            "unit": "ns",
            "range": "± 463098.6183490959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22533639.933333334,
            "unit": "ns",
            "range": "± 1131058.255783116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56170902.166666664,
            "unit": "ns",
            "range": "± 1280752.424870653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137665025.12222221,
            "unit": "ns",
            "range": "± 36404923.40451262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 310934262.22164947,
            "unit": "ns",
            "range": "± 94728586.39583123"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77365.33707865169,
            "unit": "ns",
            "range": "± 12448.44199538077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373841.9772727273,
            "unit": "ns",
            "range": "± 52385.695874468925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384803.1685393258,
            "unit": "ns",
            "range": "± 50809.11857590041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339675.5930232558,
            "unit": "ns",
            "range": "± 22203.30381053706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4635595.511363637,
            "unit": "ns",
            "range": "± 447502.6745783939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096599.1222222224,
            "unit": "ns",
            "range": "± 402199.2540185668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23474.58064516129,
            "unit": "ns",
            "range": "± 3903.5350542881133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119357.9574468085,
            "unit": "ns",
            "range": "± 16914.579968286118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116388.67391304347,
            "unit": "ns",
            "range": "± 17775.765207317676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137088.18085106384,
            "unit": "ns",
            "range": "± 18036.770564219525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8907.702127659575,
            "unit": "ns",
            "range": "± 2173.238719969327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26832.054945054944,
            "unit": "ns",
            "range": "± 3710.5008028645693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1848385.521978022,
            "unit": "ns",
            "range": "± 296341.05165688845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3404034.6860465114,
            "unit": "ns",
            "range": "± 440928.83344811766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2976525.6627906975,
            "unit": "ns",
            "range": "± 551319.0022666521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9343781.423913043,
            "unit": "ns",
            "range": "± 3260475.899044498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4153668.125,
            "unit": "ns",
            "range": "± 699694.2369541636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3782422.5384615385,
            "unit": "ns",
            "range": "± 59666.86777659131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5046804.738636363,
            "unit": "ns",
            "range": "± 418955.5161741894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5009510.807228915,
            "unit": "ns",
            "range": "± 669831.7884348945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10548409.766666668,
            "unit": "ns",
            "range": "± 2738852.6903714775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8061572.220170454,
            "unit": "ns",
            "range": "± 1609581.8514018045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2222860.4285902386,
            "unit": "ns",
            "range": "± 231124.59605477672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1530830.2636491642,
            "unit": "ns",
            "range": "± 149638.99336253005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3302269.824983016,
            "unit": "ns",
            "range": "± 521466.0437271842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994166.153361431,
            "unit": "ns",
            "range": "± 69573.4235880395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898025.3428466797,
            "unit": "ns",
            "range": "± 31891.64067616133"
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
          "id": "ebc3e87b2c9d6ccf2872aad17840b572b16bf056",
          "message": "Changelog",
          "timestamp": "2023-06-20T15:24:35+09:00",
          "tree_id": "4e7f063952afd2268649d29d2aafb616fe83a7e4",
          "url": "https://github.com/greymistcube/libplanet/commit/ebc3e87b2c9d6ccf2872aad17840b572b16bf056"
        },
        "date": 1687243345190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8696586.42857143,
            "unit": "ns",
            "range": "± 142992.30173601562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21957214.5,
            "unit": "ns",
            "range": "± 393685.91106549226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55068013.30645161,
            "unit": "ns",
            "range": "± 940924.8097347424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107457684.3888889,
            "unit": "ns",
            "range": "± 2920013.1188287796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231987828.56666666,
            "unit": "ns",
            "range": "± 4178700.7158041615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81756.37634408602,
            "unit": "ns",
            "range": "± 8474.577018961116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368662.27659574465,
            "unit": "ns",
            "range": "± 35163.0197521393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355243.5833333333,
            "unit": "ns",
            "range": "± 28953.088125691105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324412.5142857143,
            "unit": "ns",
            "range": "± 15770.280318327686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4523771.071428572,
            "unit": "ns",
            "range": "± 146320.30255337406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4013661.8285714285,
            "unit": "ns",
            "range": "± 131109.44853116505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20156.649484536083,
            "unit": "ns",
            "range": "± 4247.3417324870115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95251.08421052631,
            "unit": "ns",
            "range": "± 11372.483420158032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100473.94791666667,
            "unit": "ns",
            "range": "± 12007.257112061585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107778.82653061225,
            "unit": "ns",
            "range": "± 19685.440840584568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6481.064516129032,
            "unit": "ns",
            "range": "± 1131.4915589461284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18896.927083333332,
            "unit": "ns",
            "range": "± 3314.4523378516624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678815.7916666667,
            "unit": "ns",
            "range": "± 188503.7493253211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3146200.5531914895,
            "unit": "ns",
            "range": "± 235945.8177535006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2678766.2849462368,
            "unit": "ns",
            "range": "± 289254.6818146089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6782583.075268817,
            "unit": "ns",
            "range": "± 477581.6957845887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3465637.2282608696,
            "unit": "ns",
            "range": "± 196019.89862430698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3721526.25,
            "unit": "ns",
            "range": "± 131600.63974938996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4710241.378378378,
            "unit": "ns",
            "range": "± 156336.02011503428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4540519.097826087,
            "unit": "ns",
            "range": "± 259695.76173859736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8117967.30952381,
            "unit": "ns",
            "range": "± 432864.71269134525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7092959.612723215,
            "unit": "ns",
            "range": "± 281037.4568766106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2137447.5361979166,
            "unit": "ns",
            "range": "± 29001.964804248855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405847.7729166667,
            "unit": "ns",
            "range": "± 15303.49071226374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730822.4176897323,
            "unit": "ns",
            "range": "± 33824.17370485877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839328.6508382162,
            "unit": "ns",
            "range": "± 21454.640535391703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788605.5142227564,
            "unit": "ns",
            "range": "± 27577.320312171374"
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
          "id": "53b63b71769d9841f80884922382232a09558cb1",
          "message": "Changelog",
          "timestamp": "2023-06-20T15:47:15+09:00",
          "tree_id": "4e7f063952afd2268649d29d2aafb616fe83a7e4",
          "url": "https://github.com/greymistcube/libplanet/commit/53b63b71769d9841f80884922382232a09558cb1"
        },
        "date": 1687244793354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9056521.260869564,
            "unit": "ns",
            "range": "± 492005.70669338206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22017958.534883723,
            "unit": "ns",
            "range": "± 1192141.0370667751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54733369.15789474,
            "unit": "ns",
            "range": "± 1855685.5106002446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113973788.35483871,
            "unit": "ns",
            "range": "± 3442883.671115427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238023777.8529412,
            "unit": "ns",
            "range": "± 7661727.688689847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75883.12068965517,
            "unit": "ns",
            "range": "± 9783.217731996972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371588.5,
            "unit": "ns",
            "range": "± 45457.88936240822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361901.1515151515,
            "unit": "ns",
            "range": "± 58114.63654118078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337704.07368421054,
            "unit": "ns",
            "range": "± 35391.92533893346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4458001.597938145,
            "unit": "ns",
            "range": "± 308201.96205429634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4081334.25,
            "unit": "ns",
            "range": "± 260888.82022941255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21484.23076923077,
            "unit": "ns",
            "range": "± 3629.1347088586735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110321.4,
            "unit": "ns",
            "range": "± 18221.997572141998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124629.18279569893,
            "unit": "ns",
            "range": "± 16106.119935241895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128899.98936170213,
            "unit": "ns",
            "range": "± 19656.13288107799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7741.631578947368,
            "unit": "ns",
            "range": "± 1257.7958435686392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21394.026315789473,
            "unit": "ns",
            "range": "± 4670.414403323135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1754611.857142857,
            "unit": "ns",
            "range": "± 225515.51872063053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3371730.361702128,
            "unit": "ns",
            "range": "± 261551.34898079615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2819559.52020202,
            "unit": "ns",
            "range": "± 281756.48692421825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7755107.525252526,
            "unit": "ns",
            "range": "± 690418.2413004121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3383113.336956522,
            "unit": "ns",
            "range": "± 189167.69937479642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3796905.6276595746,
            "unit": "ns",
            "range": "± 240825.1985524179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4819080.95,
            "unit": "ns",
            "range": "± 348207.59758887166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4638315.925531914,
            "unit": "ns",
            "range": "± 295292.1672830763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8380915.510204081,
            "unit": "ns",
            "range": "± 532918.943052439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7644057.732204861,
            "unit": "ns",
            "range": "± 253102.06810910747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2113700.771354167,
            "unit": "ns",
            "range": "± 62752.05692026037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388130.2083675987,
            "unit": "ns",
            "range": "± 47592.16017748031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2806295.786278258,
            "unit": "ns",
            "range": "± 174320.8374431663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888548.0966099331,
            "unit": "ns",
            "range": "± 15230.991134313857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767942.7456380208,
            "unit": "ns",
            "range": "± 13893.97422453358"
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
          "id": "00451a362a32a48897fb62af467f507d0b0cf11a",
          "message": "Suggestion",
          "timestamp": "2023-06-20T15:53:55+09:00",
          "tree_id": "a3ab4ca142355092a537ee37b6ed49a0a124e441",
          "url": "https://github.com/greymistcube/libplanet/commit/00451a362a32a48897fb62af467f507d0b0cf11a"
        },
        "date": 1687244882392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8375341.676470588,
            "unit": "ns",
            "range": "± 268954.184948959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19645828,
            "unit": "ns",
            "range": "± 545917.7717881639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49998008.69565217,
            "unit": "ns",
            "range": "± 1241116.5716535044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98424025,
            "unit": "ns",
            "range": "± 1346092.7360089805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199691727.2142857,
            "unit": "ns",
            "range": "± 1714845.3716163975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57938.97872340425,
            "unit": "ns",
            "range": "± 6678.3316360003155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309697,
            "unit": "ns",
            "range": "± 15700.32421660988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303742.76923076925,
            "unit": "ns",
            "range": "± 19705.95304248999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290932.22222222225,
            "unit": "ns",
            "range": "± 25893.624661946946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112332.230769231,
            "unit": "ns",
            "range": "± 64883.34007811488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3656642.529411765,
            "unit": "ns",
            "range": "± 71491.78034057276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18095.915789473685,
            "unit": "ns",
            "range": "± 1963.7952490183873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90213.28021978022,
            "unit": "ns",
            "range": "± 8334.527212882029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93932.44329896907,
            "unit": "ns",
            "range": "± 9826.828358259292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109315.85263157895,
            "unit": "ns",
            "range": "± 14205.190437337693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5921.005263157895,
            "unit": "ns",
            "range": "± 827.3437742055507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16848.08695652174,
            "unit": "ns",
            "range": "± 1888.0214403942657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612426.275510204,
            "unit": "ns",
            "range": "± 158028.67472772676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2926735.76056338,
            "unit": "ns",
            "range": "± 143210.84355896525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500976.8469387754,
            "unit": "ns",
            "range": "± 203714.54118979097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6283366.294871795,
            "unit": "ns",
            "range": "± 214565.43188699233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228077.6511627906,
            "unit": "ns",
            "range": "± 119520.40591162739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3353842.25,
            "unit": "ns",
            "range": "± 95353.07941642181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4491577.566037736,
            "unit": "ns",
            "range": "± 179064.67028256637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4615263.518518519,
            "unit": "ns",
            "range": "± 125085.08984391089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7766186.150793651,
            "unit": "ns",
            "range": "± 350130.6436470747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6502357.210336538,
            "unit": "ns",
            "range": "± 45783.284948052235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977376.4276041666,
            "unit": "ns",
            "range": "± 15119.046385731837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277553.4469651442,
            "unit": "ns",
            "range": "± 8913.07474608811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2478282.619010417,
            "unit": "ns",
            "range": "± 14519.584040020141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855393.5051618303,
            "unit": "ns",
            "range": "± 2828.087801749808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717334.263671875,
            "unit": "ns",
            "range": "± 1293.869727150403"
          }
        ]
      }
    ]
  }
}