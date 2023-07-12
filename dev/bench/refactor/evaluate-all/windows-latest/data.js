window.BENCHMARK_DATA = {
  "lastUpdate": 1688549436754,
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
          "id": "6c3dc5c3571a388ecb2cd52f854ebee6a2d4580d",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:24:36+09:00",
          "tree_id": "0b22b2aba3954c38cd396124f92aa4ed06738e2f",
          "url": "https://github.com/greymistcube/libplanet/commit/6c3dc5c3571a388ecb2cd52f854ebee6a2d4580d"
        },
        "date": 1688535639695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420727.4725274725,
            "unit": "ns",
            "range": "± 78989.23564629137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695884.6153846155,
            "unit": "ns",
            "range": "± 72296.6607378664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1863845.918367347,
            "unit": "ns",
            "range": "± 111846.07073951932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4908852.173913044,
            "unit": "ns",
            "range": "± 188358.03111112086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49195.402298850575,
            "unit": "ns",
            "range": "± 2953.157870152079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7789378.571428572,
            "unit": "ns",
            "range": "± 132177.53898899318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21246753.333333332,
            "unit": "ns",
            "range": "± 242438.43361818293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53818764.28571428,
            "unit": "ns",
            "range": "± 650693.6672708392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106657864.28571428,
            "unit": "ns",
            "range": "± 998707.5629625927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214211386.66666666,
            "unit": "ns",
            "range": "± 2120833.7500907066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4967040.835336538,
            "unit": "ns",
            "range": "± 14564.851394853267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558242.67578125,
            "unit": "ns",
            "range": "± 4804.6350137540785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214815.9375,
            "unit": "ns",
            "range": "± 6859.947579138679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2695237.40234375,
            "unit": "ns",
            "range": "± 4697.47382661162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841327.8450520834,
            "unit": "ns",
            "range": "± 3324.4848841582316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791461.8931361607,
            "unit": "ns",
            "range": "± 2503.058881276681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471887.5,
            "unit": "ns",
            "range": "± 45623.31092763873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3595923.076923077,
            "unit": "ns",
            "range": "± 143310.81074581016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4406980,
            "unit": "ns",
            "range": "± 81792.91097469442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4039849.0196078434,
            "unit": "ns",
            "range": "± 154703.22346033907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6724782.692307692,
            "unit": "ns",
            "range": "± 276240.38318539393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280942.85714285716,
            "unit": "ns",
            "range": "± 11936.009035197303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268126.8292682927,
            "unit": "ns",
            "range": "± 9494.499049192746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256763.63636363635,
            "unit": "ns",
            "range": "± 13050.185611615176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4269007.142857143,
            "unit": "ns",
            "range": "± 67473.15664863968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920668.75,
            "unit": "ns",
            "range": "± 74605.12689040434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22982.291666666668,
            "unit": "ns",
            "range": "± 2307.287986116426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93129.47368421052,
            "unit": "ns",
            "range": "± 6033.715091479808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88727.8947368421,
            "unit": "ns",
            "range": "± 7847.959200061062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108191.75257731958,
            "unit": "ns",
            "range": "± 14994.725948528627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6436.734693877551,
            "unit": "ns",
            "range": "± 1313.6388239599396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21946.938775510203,
            "unit": "ns",
            "range": "± 2391.9626622621468"
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
          "id": "a11fa8c295811e9017e6652a48cb5dbb577ca1c9",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:23:42+09:00",
          "tree_id": "499cc83aa3cb35299f3e9593348bc0dab9f54898",
          "url": "https://github.com/greymistcube/libplanet/commit/a11fa8c295811e9017e6652a48cb5dbb577ca1c9"
        },
        "date": 1688535642040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622047.8723404256,
            "unit": "ns",
            "range": "± 112559.41009918274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112617.9775280897,
            "unit": "ns",
            "range": "± 171187.38175793173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2111984.6153846155,
            "unit": "ns",
            "range": "± 122919.05188472338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5908822.972972973,
            "unit": "ns",
            "range": "± 295369.1591042377"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51972.04301075269,
            "unit": "ns",
            "range": "± 3963.868487908537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8471490.909090908,
            "unit": "ns",
            "range": "± 198745.27585662174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23885926.315789472,
            "unit": "ns",
            "range": "± 510882.34331737313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60317973.684210524,
            "unit": "ns",
            "range": "± 1269621.6408582807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121540983.78378378,
            "unit": "ns",
            "range": "± 4113813.0296000945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239878066.66666666,
            "unit": "ns",
            "range": "± 4207444.81615058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5949252.083333333,
            "unit": "ns",
            "range": "± 87262.12384200389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911429.19921875,
            "unit": "ns",
            "range": "± 19484.80817465181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427345.689174107,
            "unit": "ns",
            "range": "± 16859.853716029407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3171590.1822916665,
            "unit": "ns",
            "range": "± 45459.948862875906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018551.3392857143,
            "unit": "ns",
            "range": "± 14090.37964893862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934880.5598958334,
            "unit": "ns",
            "range": "± 14999.124799148805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3625922.222222222,
            "unit": "ns",
            "range": "± 137554.56089211375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3947709.090909091,
            "unit": "ns",
            "range": "± 145534.99350341156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4882859.649122807,
            "unit": "ns",
            "range": "± 209900.37420817485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4348626.76056338,
            "unit": "ns",
            "range": "± 212898.5821315911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7276177.586206896,
            "unit": "ns",
            "range": "± 318559.9230545605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328161.8181818182,
            "unit": "ns",
            "range": "± 13768.220129046656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301929.85074626864,
            "unit": "ns",
            "range": "± 12478.320775301667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277586.4583333333,
            "unit": "ns",
            "range": "± 17551.060065700436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4949414.285714285,
            "unit": "ns",
            "range": "± 114155.54426182849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4617113.636363637,
            "unit": "ns",
            "range": "± 108604.10649718522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26066.315789473683,
            "unit": "ns",
            "range": "± 2296.1397080296733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119491.75257731958,
            "unit": "ns",
            "range": "± 11195.196794673939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96778.57142857143,
            "unit": "ns",
            "range": "± 9122.581588857445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121084.375,
            "unit": "ns",
            "range": "± 22923.094895874405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6846.938775510204,
            "unit": "ns",
            "range": "± 1395.8114132530789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21131.57894736842,
            "unit": "ns",
            "range": "± 1978.3005363993684"
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
          "id": "28ff068b99f1c07425a759b2a9bfc84859a69f24",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:24:39+09:00",
          "tree_id": "82675f4eaa822d0591ad0368b0dc897f3bb3f0d0",
          "url": "https://github.com/greymistcube/libplanet/commit/28ff068b99f1c07425a759b2a9bfc84859a69f24"
        },
        "date": 1688538879363,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034633.3333333334,
            "unit": "ns",
            "range": "± 97037.77299461846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1796536.5384615385,
            "unit": "ns",
            "range": "± 67952.11413365875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1324584,
            "unit": "ns",
            "range": "± 134812.96188018826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3422444.4444444445,
            "unit": "ns",
            "range": "± 181608.86116028333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36482.35294117647,
            "unit": "ns",
            "range": "± 745.1805939817937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5010764.285714285,
            "unit": "ns",
            "range": "± 18434.441308963673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13016646.666666666,
            "unit": "ns",
            "range": "± 61930.8931294352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32258046.666666668,
            "unit": "ns",
            "range": "± 269238.1045698787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63074228.571428575,
            "unit": "ns",
            "range": "± 358001.12898096896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127312073.33333333,
            "unit": "ns",
            "range": "± 782264.6158673518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3595906.5625,
            "unit": "ns",
            "range": "± 6819.621101852407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113992.0442708333,
            "unit": "ns",
            "range": "± 2267.3428046860467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 810872.0052083334,
            "unit": "ns",
            "range": "± 1480.3877229417342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987440.15625,
            "unit": "ns",
            "range": "± 4526.29990354426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613723.2770647322,
            "unit": "ns",
            "range": "± 876.1714962232973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574736.4327566965,
            "unit": "ns",
            "range": "± 997.1227764042535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185751.515151515,
            "unit": "ns",
            "range": "± 56855.00264495268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308654.285714286,
            "unit": "ns",
            "range": "± 70967.40073009969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817476,
            "unit": "ns",
            "range": "± 74942.47949816802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2499492.8571428573,
            "unit": "ns",
            "range": "± 115768.10945001854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4174945.4545454546,
            "unit": "ns",
            "range": "± 121009.49108156013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174752.63157894736,
            "unit": "ns",
            "range": "± 7896.0660869272615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164335.63218390805,
            "unit": "ns",
            "range": "± 8554.557836037753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147365.21739130435,
            "unit": "ns",
            "range": "± 3163.0837507453466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748360,
            "unit": "ns",
            "range": "± 37642.25968623183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2419623.076923077,
            "unit": "ns",
            "range": "± 24564.512134586683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8780.30303030303,
            "unit": "ns",
            "range": "± 405.8115125067101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51684.94623655914,
            "unit": "ns",
            "range": "± 3493.3460425736566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45818.8679245283,
            "unit": "ns",
            "range": "± 1798.1888969581828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55815.95744680851,
            "unit": "ns",
            "range": "± 10781.271626790733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2045.2631578947369,
            "unit": "ns",
            "range": "± 459.36320887808694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8905.31914893617,
            "unit": "ns",
            "range": "± 1215.9660986074853"
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
          "id": "d1275d6f8e2ca50a35190a5fa6532b7a36601fbf",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:16:19+09:00",
          "tree_id": "9adbe38ff2d5ed681460dcc83f97cc3ec25c8594",
          "url": "https://github.com/greymistcube/libplanet/commit/d1275d6f8e2ca50a35190a5fa6532b7a36601fbf"
        },
        "date": 1688539031469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521295.9595959596,
            "unit": "ns",
            "range": "± 314390.4169487722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2597793.8775510206,
            "unit": "ns",
            "range": "± 342801.62723101577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1779670.5263157894,
            "unit": "ns",
            "range": "± 238036.51287667197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5142857.291666667,
            "unit": "ns",
            "range": "± 478298.5246507814"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54429.8969072165,
            "unit": "ns",
            "range": "± 12554.690067763302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6894582.105263158,
            "unit": "ns",
            "range": "± 406419.1908841473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18070455.67010309,
            "unit": "ns",
            "range": "± 1648000.96954418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44773865.30612245,
            "unit": "ns",
            "range": "± 3099172.982204977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 86583735.48387097,
            "unit": "ns",
            "range": "± 2641427.2884873417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202102677.7777778,
            "unit": "ns",
            "range": "± 16178196.855616912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5209884.203125,
            "unit": "ns",
            "range": "± 210122.20255978915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1701563.36622362,
            "unit": "ns",
            "range": "± 86556.66906079267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355386.8294270833,
            "unit": "ns",
            "range": "± 22248.36175651974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2750694.4322916665,
            "unit": "ns",
            "range": "± 138688.8978139756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929630.3392493207,
            "unit": "ns",
            "range": "± 23099.464471785086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880711.0158521076,
            "unit": "ns",
            "range": "± 47711.81348725616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3095707.4468085105,
            "unit": "ns",
            "range": "± 266959.0293117008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3310992.6315789474,
            "unit": "ns",
            "range": "± 250282.31304214153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4951023.711340206,
            "unit": "ns",
            "range": "± 467532.2446039586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3971040.404040404,
            "unit": "ns",
            "range": "± 442746.3100755888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6725868.041237113,
            "unit": "ns",
            "range": "± 554977.5022741897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308936.26373626373,
            "unit": "ns",
            "range": "± 31941.65694054471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296187.8947368421,
            "unit": "ns",
            "range": "± 39568.98414363218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237864.51612903227,
            "unit": "ns",
            "range": "± 22252.76067466144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504831.632653061,
            "unit": "ns",
            "range": "± 488938.55170110596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4256107.142857143,
            "unit": "ns",
            "range": "± 467018.45572706306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29868.367346938776,
            "unit": "ns",
            "range": "± 8906.25399332188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100680.20833333333,
            "unit": "ns",
            "range": "± 11071.68621961506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103595.65217391304,
            "unit": "ns",
            "range": "± 17467.24981368022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109220.21276595745,
            "unit": "ns",
            "range": "± 20341.290069085444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5825,
            "unit": "ns",
            "range": "± 1212.0178801371503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28826,
            "unit": "ns",
            "range": "± 8318.333409227518"
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
          "id": "b15408c672e4bf1500c6478a1f29dc1335b79a41",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:19:58+09:00",
          "tree_id": "9adbe38ff2d5ed681460dcc83f97cc3ec25c8594",
          "url": "https://github.com/greymistcube/libplanet/commit/b15408c672e4bf1500c6478a1f29dc1335b79a41"
        },
        "date": 1688539182948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1778988.2978723405,
            "unit": "ns",
            "range": "± 184768.95357628068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171010.465116279,
            "unit": "ns",
            "range": "± 171343.26539165538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147465.9574468085,
            "unit": "ns",
            "range": "± 202732.67241136028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6018328.421052632,
            "unit": "ns",
            "range": "± 371797.3975459598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54147.25274725275,
            "unit": "ns",
            "range": "± 4334.9058854153955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9728766.666666666,
            "unit": "ns",
            "range": "± 206369.80722318208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25946207.01754386,
            "unit": "ns",
            "range": "± 1108852.0371569048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63095511.62790698,
            "unit": "ns",
            "range": "± 2338622.6449211007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122150496.96969697,
            "unit": "ns",
            "range": "± 3854598.081876116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245121314.8148148,
            "unit": "ns",
            "range": "± 6749281.0245983135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6242112.199519231,
            "unit": "ns",
            "range": "± 53256.908500907004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1975602.0419034092,
            "unit": "ns",
            "range": "± 47515.54764610225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1505691.8688322369,
            "unit": "ns",
            "range": "± 32799.987138782504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3332817.2005208335,
            "unit": "ns",
            "range": "± 35931.73140991804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019850.859375,
            "unit": "ns",
            "range": "± 10581.348362350329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965108.2101004465,
            "unit": "ns",
            "range": "± 12847.6668180674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4071025,
            "unit": "ns",
            "range": "± 78517.9767102201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4138319.230769231,
            "unit": "ns",
            "range": "± 169771.42538668885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5177611.538461538,
            "unit": "ns",
            "range": "± 174874.01723193188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4490480.392156863,
            "unit": "ns",
            "range": "± 172841.80167957963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7709693.617021277,
            "unit": "ns",
            "range": "± 460997.1491429846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308577.77777777775,
            "unit": "ns",
            "range": "± 10244.276760670144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278601.1235955056,
            "unit": "ns",
            "range": "± 20312.683534175154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276558.4210526316,
            "unit": "ns",
            "range": "± 16827.723219645577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4945937.68115942,
            "unit": "ns",
            "range": "± 237477.8795280355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4386244,
            "unit": "ns",
            "range": "± 116443.71701956844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21281.31868131868,
            "unit": "ns",
            "range": "± 1887.556450247079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104025.53191489361,
            "unit": "ns",
            "range": "± 7292.077541778788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91209.47368421052,
            "unit": "ns",
            "range": "± 7649.823717677038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106766.31578947368,
            "unit": "ns",
            "range": "± 17298.10351507832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5735.106382978724,
            "unit": "ns",
            "range": "± 809.1821766528121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24884.375,
            "unit": "ns",
            "range": "± 2268.9820636715394"
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
          "id": "55a510c4ff65d25fabd617f71a56112b96caff98",
          "message": "Changelog",
          "timestamp": "2023-07-05T16:02:04+09:00",
          "tree_id": "35439410f73b67df527a747c9e24714719b604bd",
          "url": "https://github.com/greymistcube/libplanet/commit/55a510c4ff65d25fabd617f71a56112b96caff98"
        },
        "date": 1688541510139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550465.9793814432,
            "unit": "ns",
            "range": "± 160735.9654880468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2874405.4054054054,
            "unit": "ns",
            "range": "± 96124.4504274015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032784.375,
            "unit": "ns",
            "range": "± 173799.73128688874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5079992.857142857,
            "unit": "ns",
            "range": "± 185624.02519130707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57587.62886597938,
            "unit": "ns",
            "range": "± 5405.962328222245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8384300,
            "unit": "ns",
            "range": "± 123043.91961347035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21993935.714285713,
            "unit": "ns",
            "range": "± 194368.45505040503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54388442.85714286,
            "unit": "ns",
            "range": "± 260980.885578547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108662958.33333333,
            "unit": "ns",
            "range": "± 260743.3271466696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218467140,
            "unit": "ns",
            "range": "± 1542726.9510281368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5104305,
            "unit": "ns",
            "range": "± 66125.74638358763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1606572.5,
            "unit": "ns",
            "range": "± 5357.098858200314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213765.8658854167,
            "unit": "ns",
            "range": "± 5373.240990467856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716031.026785714,
            "unit": "ns",
            "range": "± 9470.254956176745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847343.2291666666,
            "unit": "ns",
            "range": "± 2794.2020716557336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781739.08203125,
            "unit": "ns",
            "range": "± 3091.8450777351463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3596000,
            "unit": "ns",
            "range": "± 85449.3826776999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3783481.8181818184,
            "unit": "ns",
            "range": "± 85020.75733307235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4586547.826086956,
            "unit": "ns",
            "range": "± 104051.66928705624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179650,
            "unit": "ns",
            "range": "± 40820.32693290306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6590484.2105263155,
            "unit": "ns",
            "range": "± 142409.8828622582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300375.51020408166,
            "unit": "ns",
            "range": "± 11773.089558612135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287056.92307692306,
            "unit": "ns",
            "range": "± 13395.392972384772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280015.9090909091,
            "unit": "ns",
            "range": "± 10521.317080471552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4367316.666666667,
            "unit": "ns",
            "range": "± 47641.346315861796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4025506.6666666665,
            "unit": "ns",
            "range": "± 53738.67278209383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26965.30612244898,
            "unit": "ns",
            "range": "± 3046.2788535812942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121454.54545454546,
            "unit": "ns",
            "range": "± 13195.015081672544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110421,
            "unit": "ns",
            "range": "± 12488.639645774883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124540,
            "unit": "ns",
            "range": "± 16771.45751668717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8613.40206185567,
            "unit": "ns",
            "range": "± 1375.577822981687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26564.94845360825,
            "unit": "ns",
            "range": "± 3390.674749623142"
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
          "id": "63a1811219c3d569ad450bd7a023894270380a9e",
          "message": "Changelog",
          "timestamp": "2023-07-05T18:13:52+09:00",
          "tree_id": "31d6b0f7fed89290ea3bc522d38b2975ed72d77b",
          "url": "https://github.com/greymistcube/libplanet/commit/63a1811219c3d569ad450bd7a023894270380a9e"
        },
        "date": 1688549415143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452321.505376344,
            "unit": "ns",
            "range": "± 82210.96780931357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2819692.9577464787,
            "unit": "ns",
            "range": "± 136882.64037273853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929693,
            "unit": "ns",
            "range": "± 128672.57268200578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5084030,
            "unit": "ns",
            "range": "± 224977.62020525584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49522.916666666664,
            "unit": "ns",
            "range": "± 4174.798555913344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8069778.571428572,
            "unit": "ns",
            "range": "± 103188.04476497063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21523626.666666668,
            "unit": "ns",
            "range": "± 246596.1547222696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53057423.07692308,
            "unit": "ns",
            "range": "± 296365.1721380403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106855746.66666667,
            "unit": "ns",
            "range": "± 1225017.3100040357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214754392.30769232,
            "unit": "ns",
            "range": "± 1126161.9861736428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4929055.15625,
            "unit": "ns",
            "range": "± 17901.783428078652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584431.8359375,
            "unit": "ns",
            "range": "± 3311.5472813739902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1195396.9791666667,
            "unit": "ns",
            "range": "± 3715.932717133948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698352.9296875,
            "unit": "ns",
            "range": "± 14813.833655620045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854073.2421875,
            "unit": "ns",
            "range": "± 2575.3370442749124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772932.2591145834,
            "unit": "ns",
            "range": "± 2692.329955369275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3472919.230769231,
            "unit": "ns",
            "range": "± 87863.66720883334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3676341.304347826,
            "unit": "ns",
            "range": "± 136896.55230799798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4497362.5,
            "unit": "ns",
            "range": "± 137716.34417022878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3952420,
            "unit": "ns",
            "range": "± 122884.61170900038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6500424.137931035,
            "unit": "ns",
            "range": "± 183017.7619310924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275847.36842105264,
            "unit": "ns",
            "range": "± 9503.420062673462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261814.54545454544,
            "unit": "ns",
            "range": "± 10377.297482018284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254662.22222222222,
            "unit": "ns",
            "range": "± 14149.846767564943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291483.333333333,
            "unit": "ns",
            "range": "± 36379.023259748654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3790921.4285714286,
            "unit": "ns",
            "range": "± 42553.679739132545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24604.21052631579,
            "unit": "ns",
            "range": "± 1938.1893167458102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97759.793814433,
            "unit": "ns",
            "range": "± 8010.886600352756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87481.63265306123,
            "unit": "ns",
            "range": "± 8671.987690422553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106321.64948453609,
            "unit": "ns",
            "range": "± 17520.37639200499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6269.2307692307695,
            "unit": "ns",
            "range": "± 1277.992549768956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22129.591836734693,
            "unit": "ns",
            "range": "± 2076.287784895405"
          }
        ]
      }
    ]
  }
}