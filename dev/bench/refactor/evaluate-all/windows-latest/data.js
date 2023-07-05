window.BENCHMARK_DATA = {
  "lastUpdate": 1688535665773,
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
      }
    ]
  }
}