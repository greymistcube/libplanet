window.BENCHMARK_DATA = {
  "lastUpdate": 1696559946620,
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
          "id": "bc7a99c65e5a7aacb0d24f5ac3d72213f300a257",
          "message": "Cleanup",
          "timestamp": "2023-10-05T11:56:09+09:00",
          "tree_id": "06d15ec5d16917f0ef69baf8d4d45a0825f90f34",
          "url": "https://github.com/greymistcube/libplanet/commit/bc7a99c65e5a7aacb0d24f5ac3d72213f300a257"
        },
        "date": 1696475799915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69207.02083333333,
            "unit": "ns",
            "range": "± 16850.412991958434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8542683.285714285,
            "unit": "ns",
            "range": "± 630302.9603363308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24347696.858585857,
            "unit": "ns",
            "range": "± 2381236.964932379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63151697.68,
            "unit": "ns",
            "range": "± 4277652.690362687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132539743.11,
            "unit": "ns",
            "range": "± 7921673.035458834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256425462.07575756,
            "unit": "ns",
            "range": "± 11969216.011288466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336745.44086021505,
            "unit": "ns",
            "range": "± 47479.90526469944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352648.09375,
            "unit": "ns",
            "range": "± 48466.7891679888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286476.22340425535,
            "unit": "ns",
            "range": "± 38709.56708122968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4930219.804123712,
            "unit": "ns",
            "range": "± 474226.4066973671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4652032.1632653065,
            "unit": "ns",
            "range": "± 438463.1858280796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31530.121212121212,
            "unit": "ns",
            "range": "± 12686.654564792967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117318.9693877551,
            "unit": "ns",
            "range": "± 22036.729923954717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122209.85416666667,
            "unit": "ns",
            "range": "± 20803.667827410765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127289.09375,
            "unit": "ns",
            "range": "± 23007.860173646437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7714.261904761905,
            "unit": "ns",
            "range": "± 1291.68012489056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32544.18556701031,
            "unit": "ns",
            "range": "± 10406.905877559037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650732.6326530613,
            "unit": "ns",
            "range": "± 195887.88766554673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062299.063829787,
            "unit": "ns",
            "range": "± 338508.868876932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2446110.397959184,
            "unit": "ns",
            "range": "± 310572.5844983327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11845214.294736842,
            "unit": "ns",
            "range": "± 1184710.0102025676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5818057.863399621,
            "unit": "ns",
            "range": "± 181374.83689651435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872179.7575520833,
            "unit": "ns",
            "range": "± 28518.92732559951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271726.2601841518,
            "unit": "ns",
            "range": "± 21773.16083271582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015095.0221354165,
            "unit": "ns",
            "range": "± 140797.1860296623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943609.2035030242,
            "unit": "ns",
            "range": "± 27951.586609788203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886719.4210874496,
            "unit": "ns",
            "range": "± 26250.169487832187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3651039.5816326533,
            "unit": "ns",
            "range": "± 387609.20047712215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3915276.4242424243,
            "unit": "ns",
            "range": "± 565626.3486748172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5071436.797979798,
            "unit": "ns",
            "range": "± 565373.8064365113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4961855.197916667,
            "unit": "ns",
            "range": "± 611521.6543225272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13585717.41935484,
            "unit": "ns",
            "range": "± 1017491.0723914112"
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
          "id": "84e61d82f856a4a630e3d5fc6670cbf94c9739b9",
          "message": "Changelog",
          "timestamp": "2023-10-05T13:15:38+09:00",
          "tree_id": "9797c7c0709f56c9fe5d66d476268229bccec779",
          "url": "https://github.com/greymistcube/libplanet/commit/84e61d82f856a4a630e3d5fc6670cbf94c9739b9"
        },
        "date": 1696480214464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47234.36666666667,
            "unit": "ns",
            "range": "± 3847.2482664360905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7511278.866666666,
            "unit": "ns",
            "range": "± 12627.566340955731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19700528.902439024,
            "unit": "ns",
            "range": "± 698607.0426279284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54092125.15151515,
            "unit": "ns",
            "range": "± 1676199.040908778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100293196.52380952,
            "unit": "ns",
            "range": "± 2361112.8598877187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200384014.08333334,
            "unit": "ns",
            "range": "± 5208752.315521719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283491.57,
            "unit": "ns",
            "range": "± 21266.261974042016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274743.0967741936,
            "unit": "ns",
            "range": "± 7784.054506296141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258524.69,
            "unit": "ns",
            "range": "± 29638.143808239376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184568.3529411764,
            "unit": "ns",
            "range": "± 85503.96821781225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3984764,
            "unit": "ns",
            "range": "± 39444.08743057404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19499.938144329895,
            "unit": "ns",
            "range": "± 3041.2398198707306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105729.0505050505,
            "unit": "ns",
            "range": "± 14286.376225645488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84014.09183673469,
            "unit": "ns",
            "range": "± 12118.093891730605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100946.77551020408,
            "unit": "ns",
            "range": "± 17065.791851422982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5715.285714285715,
            "unit": "ns",
            "range": "± 1789.221750993097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16991.478723404256,
            "unit": "ns",
            "range": "± 1340.0015064084248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391035.948979592,
            "unit": "ns",
            "range": "± 106483.28437770574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2555814.901234568,
            "unit": "ns",
            "range": "± 128532.37455400146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937456.2307692308,
            "unit": "ns",
            "range": "± 106341.56393695397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8503747.477272727,
            "unit": "ns",
            "range": "± 313128.80265790975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4978196.614783654,
            "unit": "ns",
            "range": "± 30439.872725480654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616781.7619791667,
            "unit": "ns",
            "range": "± 9906.000842524141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062714.5158854167,
            "unit": "ns",
            "range": "± 8065.578276728051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2805414.366796875,
            "unit": "ns",
            "range": "± 61059.78955674636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811138.3147786459,
            "unit": "ns",
            "range": "± 4462.0013475812175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729459.7027994791,
            "unit": "ns",
            "range": "± 864.1978790363894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530517.787878788,
            "unit": "ns",
            "range": "± 262764.4762713339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3858261.2653061226,
            "unit": "ns",
            "range": "± 152431.55188761165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4375594.91,
            "unit": "ns",
            "range": "± 317136.76906624966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4082838.5675675673,
            "unit": "ns",
            "range": "± 135595.2198205995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9881919.931034483,
            "unit": "ns",
            "range": "± 285235.2824981173"
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
          "id": "b85f587cff969db689edd9d69ebf9f7214363c21",
          "message": "Updated side-effect warning",
          "timestamp": "2023-10-06T11:24:02+09:00",
          "tree_id": "e62b93d4600152f8c718469f208485d6fc280a77",
          "url": "https://github.com/greymistcube/libplanet/commit/b85f587cff969db689edd9d69ebf9f7214363c21"
        },
        "date": 1696559937941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47370.02127659575,
            "unit": "ns",
            "range": "± 3499.1506464932695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7889388.333333333,
            "unit": "ns",
            "range": "± 65724.849292515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19480905.466666665,
            "unit": "ns",
            "range": "± 108034.09792538827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50540623.46666667,
            "unit": "ns",
            "range": "± 286140.3611703446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101928006.26666667,
            "unit": "ns",
            "range": "± 290215.42613682855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204930634.23076922,
            "unit": "ns",
            "range": "± 523897.4474756731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265361.71428571426,
            "unit": "ns",
            "range": "± 6477.947085719221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258753.75,
            "unit": "ns",
            "range": "± 5834.79424500804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222095.15384615384,
            "unit": "ns",
            "range": "± 5926.245406274078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184673.6666666665,
            "unit": "ns",
            "range": "± 26731.47209261202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750349.4,
            "unit": "ns",
            "range": "± 24674.519346310044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19559.416666666668,
            "unit": "ns",
            "range": "± 1058.55812604925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84173.86315789474,
            "unit": "ns",
            "range": "± 5438.971014249018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67229.6,
            "unit": "ns",
            "range": "± 1262.8473425265288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74946.55319148937,
            "unit": "ns",
            "range": "± 5977.248537394559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4969.117021276596,
            "unit": "ns",
            "range": "± 532.3689168031211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18156.694736842106,
            "unit": "ns",
            "range": "± 1512.5350572598607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1317367.8181818181,
            "unit": "ns",
            "range": "± 88015.7521081919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2489823.057142857,
            "unit": "ns",
            "range": "± 67553.6567878335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1927301.888888889,
            "unit": "ns",
            "range": "± 80418.5464843076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8465521.704918033,
            "unit": "ns",
            "range": "± 378860.46554425743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4932009.674479167,
            "unit": "ns",
            "range": "± 4600.305334542937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1625837.7626302084,
            "unit": "ns",
            "range": "± 6897.050846174789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1094347.877704327,
            "unit": "ns",
            "range": "± 386.84094951993615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2513741.69140625,
            "unit": "ns",
            "range": "± 2474.397029191014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794832.5373535156,
            "unit": "ns",
            "range": "± 2816.2692302379974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755915.2671595982,
            "unit": "ns",
            "range": "± 585.7093568589818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183644.2,
            "unit": "ns",
            "range": "± 40428.08574882424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3384377.1875,
            "unit": "ns",
            "range": "± 59736.76152835734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4178022.4516129033,
            "unit": "ns",
            "range": "± 126893.58887846113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4155295.7,
            "unit": "ns",
            "range": "± 95664.27713849918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9952483.352941176,
            "unit": "ns",
            "range": "± 292289.1255137088"
          }
        ]
      }
    ]
  }
}