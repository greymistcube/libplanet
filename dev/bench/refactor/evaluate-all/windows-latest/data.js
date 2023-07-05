window.BENCHMARK_DATA = {
  "lastUpdate": 1688535661336,
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
      }
    ]
  }
}