window.BENCHMARK_DATA = {
  "lastUpdate": 1687334363949,
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
          "id": "18cc285cffeaed343ba3bc79a86a96bba93fafe2",
          "message": "Added BlockProtocolVersion to IActionContext",
          "timestamp": "2023-06-21T16:41:11+09:00",
          "tree_id": "b2895b8b288da583d37e3a26a24c1fe1c342d8a9",
          "url": "https://github.com/greymistcube/libplanet/commit/18cc285cffeaed343ba3bc79a86a96bba93fafe2"
        },
        "date": 1687334068685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3440389.8,
            "unit": "ns",
            "range": "± 100193.78988271713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3604404,
            "unit": "ns",
            "range": "± 115969.63755973734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4362247.538461538,
            "unit": "ns",
            "range": "± 43373.412177691265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379573.222222222,
            "unit": "ns",
            "range": "± 122089.55948380155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6893868,
            "unit": "ns",
            "range": "± 157717.53900908845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6357613.99609375,
            "unit": "ns",
            "range": "± 8299.165480963587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886562.5684895834,
            "unit": "ns",
            "range": "± 2991.8073205428886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368609.2532552083,
            "unit": "ns",
            "range": "± 860.4435073313543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564945.1171875,
            "unit": "ns",
            "range": "± 1693.1650919289864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807722.5924944197,
            "unit": "ns",
            "range": "± 1575.3874375006324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737716.3813476562,
            "unit": "ns",
            "range": "± 424.6569260687114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291224.89130434784,
            "unit": "ns",
            "range": "± 11120.02461273907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280280.037037037,
            "unit": "ns",
            "range": "± 11776.118845154635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249677.914893617,
            "unit": "ns",
            "range": "± 9683.48648547302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4247263.642857143,
            "unit": "ns",
            "range": "± 21633.83959877937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915904.8666666667,
            "unit": "ns",
            "range": "± 44047.08957933002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21275.297872340427,
            "unit": "ns",
            "range": "± 1514.187612342595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95771.23404255319,
            "unit": "ns",
            "range": "± 5963.324775219159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77057.56382978724,
            "unit": "ns",
            "range": "± 4409.896996233282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93048.36559139784,
            "unit": "ns",
            "range": "± 8681.468626739605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4914.541666666667,
            "unit": "ns",
            "range": "± 500.92655027651494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19385.86170212766,
            "unit": "ns",
            "range": "± 1554.010556149806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437331.84,
            "unit": "ns",
            "range": "± 105656.12224176156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2714939.56097561,
            "unit": "ns",
            "range": "± 79595.72202230744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2269878.1839080458,
            "unit": "ns",
            "range": "± 123513.2403798418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5477208.740740741,
            "unit": "ns",
            "range": "± 149424.9889912848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51871.166666666664,
            "unit": "ns",
            "range": "± 4360.554355551517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8000098.2,
            "unit": "ns",
            "range": "± 48507.94744339765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19908903,
            "unit": "ns",
            "range": "± 69888.79739373727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51841374.333333336,
            "unit": "ns",
            "range": "± 281494.73789770075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103548783.86666666,
            "unit": "ns",
            "range": "± 371991.3909185968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205539304.64285713,
            "unit": "ns",
            "range": "± 489282.7281295954"
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
          "id": "17c4502bc80ff22b8888b337bcc8626659f4e3b9",
          "message": "Changelog",
          "timestamp": "2023-06-21T16:45:58+09:00",
          "tree_id": "3d8097d8dd8bb6549ca37a3070712065570030ec",
          "url": "https://github.com/greymistcube/libplanet/commit/17c4502bc80ff22b8888b337bcc8626659f4e3b9"
        },
        "date": 1687334356107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3375278.933333333,
            "unit": "ns",
            "range": "± 40056.35059952892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503073.3714285716,
            "unit": "ns",
            "range": "± 114011.2136959203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220536.6,
            "unit": "ns",
            "range": "± 62845.80569911908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4286698.285714285,
            "unit": "ns",
            "range": "± 101988.88083518852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6829021.780487805,
            "unit": "ns",
            "range": "± 238463.5451992099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6038386.494270833,
            "unit": "ns",
            "range": "± 68465.92021694253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851317.2843191964,
            "unit": "ns",
            "range": "± 8776.16657048526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354325.5922851562,
            "unit": "ns",
            "range": "± 4851.46230265026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613339.3247395833,
            "unit": "ns",
            "range": "± 17553.22295851109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833825.16484375,
            "unit": "ns",
            "range": "± 1055.0579011917366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755267.2966145833,
            "unit": "ns",
            "range": "± 1311.0012967143102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273247.8333333333,
            "unit": "ns",
            "range": "± 5676.43024993287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259171.9245283019,
            "unit": "ns",
            "range": "± 9894.813347734367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237877.4,
            "unit": "ns",
            "range": "± 4370.413161246886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4330595,
            "unit": "ns",
            "range": "± 127785.55641305125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857001.5,
            "unit": "ns",
            "range": "± 98587.037576382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16453.842105263157,
            "unit": "ns",
            "range": "± 1478.4984210972327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80351.45161290323,
            "unit": "ns",
            "range": "± 4706.463514738854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71543.86206896552,
            "unit": "ns",
            "range": "± 2049.040972959544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88245.43333333333,
            "unit": "ns",
            "range": "± 12142.480969349353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4272.19587628866,
            "unit": "ns",
            "range": "± 442.2529357160725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16956.427083333332,
            "unit": "ns",
            "range": "± 1983.5533014996977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373415.2906976745,
            "unit": "ns",
            "range": "± 74329.53645060326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661535.4418604653,
            "unit": "ns",
            "range": "± 94605.13587143402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2213204.513157895,
            "unit": "ns",
            "range": "± 112644.10930377065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5287102.5,
            "unit": "ns",
            "range": "± 120361.75737749926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45132.567901234564,
            "unit": "ns",
            "range": "± 2211.0493150214425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7847346.857142857,
            "unit": "ns",
            "range": "± 6531.769213233506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21076034.466666665,
            "unit": "ns",
            "range": "± 255310.34572733144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51747918.15384615,
            "unit": "ns",
            "range": "± 501293.9375349633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102807351.13333334,
            "unit": "ns",
            "range": "± 1621173.9009132888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204959289.66666666,
            "unit": "ns",
            "range": "± 2411333.887325989"
          }
        ]
      }
    ]
  }
}