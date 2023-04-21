window.BENCHMARK_DATA = {
  "lastUpdate": 1682075934514,
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
          "id": "fb1f05d14a652b8cf81d7e9cc57aa2bb7ee3e788",
          "message": "Simplify Json serialization",
          "timestamp": "2023-04-21T19:19:47+09:00",
          "tree_id": "eebad80cc7d31c5ff14e2488e3e233994bcd08dd",
          "url": "https://github.com/greymistcube/libplanet/commit/fb1f05d14a652b8cf81d7e9cc57aa2bb7ee3e788"
        },
        "date": 1682074020434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11468562.347826088,
            "unit": "ns",
            "range": "± 2346469.4067700896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26536554.863636363,
            "unit": "ns",
            "range": "± 4466585.331248388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56501686.08045977,
            "unit": "ns",
            "range": "± 7196389.249459831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128012462.23157895,
            "unit": "ns",
            "range": "± 17861183.843793124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266510816.86458334,
            "unit": "ns",
            "range": "± 37152290.97005562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82252.52272727272,
            "unit": "ns",
            "range": "± 11832.134234836996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374524.1111111111,
            "unit": "ns",
            "range": "± 39456.83513128496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 406729.8736842105,
            "unit": "ns",
            "range": "± 63479.561132537914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 391533.3854166667,
            "unit": "ns",
            "range": "± 57988.386982380456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4782613.192307692,
            "unit": "ns",
            "range": "± 444115.0873347206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4042197.7386363638,
            "unit": "ns",
            "range": "± 276637.86863901664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28440.032967032967,
            "unit": "ns",
            "range": "± 4159.200634872442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132464.88505747126,
            "unit": "ns",
            "range": "± 15397.824243330455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135407.79775280898,
            "unit": "ns",
            "range": "± 19222.40592510574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140917.14516129033,
            "unit": "ns",
            "range": "± 23183.886641768524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11562.619565217392,
            "unit": "ns",
            "range": "± 1519.8173389551853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27578.568965517243,
            "unit": "ns",
            "range": "± 2754.7061920449482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1791270.1954022988,
            "unit": "ns",
            "range": "± 244437.66101143343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3542104.076923077,
            "unit": "ns",
            "range": "± 396807.0808656471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3186744.0322580645,
            "unit": "ns",
            "range": "± 481619.91284178366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8008311.315217392,
            "unit": "ns",
            "range": "± 878372.6224726946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3754317.5113636362,
            "unit": "ns",
            "range": "± 361921.5368883116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4492049.808510638,
            "unit": "ns",
            "range": "± 1151563.1600425337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5258507.438202247,
            "unit": "ns",
            "range": "± 780852.3770101396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5098574.539325843,
            "unit": "ns",
            "range": "± 720510.8385735153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9236290.66091954,
            "unit": "ns",
            "range": "± 1116551.9654235875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8149764.440399485,
            "unit": "ns",
            "range": "± 948164.1065598332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2215500.2852612566,
            "unit": "ns",
            "range": "± 131170.71858385272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412362.8979492188,
            "unit": "ns",
            "range": "± 27484.763480279318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2963004.366015625,
            "unit": "ns",
            "range": "± 86994.48288236978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860424.56328125,
            "unit": "ns",
            "range": "± 14625.519941480545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786305.4529441551,
            "unit": "ns",
            "range": "± 21963.969410893027"
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
          "id": "4ee580e3e4ec96cd2b43c9bcaf2362fc1efefbd7",
          "message": "Changelog",
          "timestamp": "2023-04-21T19:55:04+09:00",
          "tree_id": "4c3757f3c5445664085b52318ce8f6ddb44f02aa",
          "url": "https://github.com/greymistcube/libplanet/commit/4ee580e3e4ec96cd2b43c9bcaf2362fc1efefbd7"
        },
        "date": 1682075916848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583149.675324675,
            "unit": "ns",
            "range": "± 437858.45711736096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23189859.76595745,
            "unit": "ns",
            "range": "± 3859748.797273773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55922036.56043956,
            "unit": "ns",
            "range": "± 7167241.981767946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117916191.46808511,
            "unit": "ns",
            "range": "± 19632864.057777103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220114577.4528302,
            "unit": "ns",
            "range": "± 8688697.0175714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75189.99438202247,
            "unit": "ns",
            "range": "± 8043.939869022229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407152.4247311828,
            "unit": "ns",
            "range": "± 58451.118167650304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376102.81720430107,
            "unit": "ns",
            "range": "± 49878.303002090965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 392476.2083333333,
            "unit": "ns",
            "range": "± 61205.612357195634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4781260.532608695,
            "unit": "ns",
            "range": "± 414673.43517142144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4430098.293814433,
            "unit": "ns",
            "range": "± 526429.5537855299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27232.887640449437,
            "unit": "ns",
            "range": "± 3875.481279315226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134368.98387096773,
            "unit": "ns",
            "range": "± 24773.66475303831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139156.44186046513,
            "unit": "ns",
            "range": "± 18203.19853752576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146842.71739130435,
            "unit": "ns",
            "range": "± 30154.388899416892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10513.922680412372,
            "unit": "ns",
            "range": "± 1596.1853017105836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27039.70930232558,
            "unit": "ns",
            "range": "± 4140.6453833878695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1957303.4310344828,
            "unit": "ns",
            "range": "± 351233.0975260438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3478041.387640449,
            "unit": "ns",
            "range": "± 365080.1831514812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3225473.424731183,
            "unit": "ns",
            "range": "± 707820.9441108253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8472688.260869564,
            "unit": "ns",
            "range": "± 1249769.1223890542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3507050.5,
            "unit": "ns",
            "range": "± 39802.41665836578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3654394.086956522,
            "unit": "ns",
            "range": "± 408736.7791873432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4701325.3802816905,
            "unit": "ns",
            "range": "± 220461.98228242475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680046.011111111,
            "unit": "ns",
            "range": "± 365728.3602289293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9760857.436170213,
            "unit": "ns",
            "range": "± 1593480.3924352853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7622845.34375,
            "unit": "ns",
            "range": "± 110930.95144075976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2426946.0637929137,
            "unit": "ns",
            "range": "± 118890.59042817276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391315.4515269885,
            "unit": "ns",
            "range": "± 43924.643255544404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2808901.072135417,
            "unit": "ns",
            "range": "± 81710.14352233816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878887.5448330966,
            "unit": "ns",
            "range": "± 27684.75600507099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819759.5161557405,
            "unit": "ns",
            "range": "± 31020.123778184487"
          }
        ]
      }
    ]
  }
}