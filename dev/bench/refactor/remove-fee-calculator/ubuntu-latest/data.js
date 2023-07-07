window.BENCHMARK_DATA = {
  "lastUpdate": 1688714425390,
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
          "id": "aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee",
          "message": "Removed IFeeCalculator",
          "timestamp": "2023-07-07T16:02:07+09:00",
          "tree_id": "76cc5bf139a9e106b2356c034b64eb761e2b55f5",
          "url": "https://github.com/greymistcube/libplanet/commit/aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee"
        },
        "date": 1688714130382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301463.5106382979,
            "unit": "ns",
            "range": "± 11658.547000735667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281336.28571428574,
            "unit": "ns",
            "range": "± 10954.115195137092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257160.4745762712,
            "unit": "ns",
            "range": "± 11368.197214546608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4312970.785714285,
            "unit": "ns",
            "range": "± 22424.00757148316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3945286.4,
            "unit": "ns",
            "range": "± 35534.71958883513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22056.680412371134,
            "unit": "ns",
            "range": "± 2576.8855820640983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105247.8469387755,
            "unit": "ns",
            "range": "± 8248.502804916932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81428.89,
            "unit": "ns",
            "range": "± 7984.354870930372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98399.86734693877,
            "unit": "ns",
            "range": "± 9530.736501476278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5673.469387755102,
            "unit": "ns",
            "range": "± 847.6226329677665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19741.913978494624,
            "unit": "ns",
            "range": "± 1599.2206706359927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424682.6631578947,
            "unit": "ns",
            "range": "± 112241.76598076617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647684.703703704,
            "unit": "ns",
            "range": "± 73959.14619718459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1873559.09,
            "unit": "ns",
            "range": "± 125005.75419095873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4924923.53125,
            "unit": "ns",
            "range": "± 152004.86849100175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6343377.90234375,
            "unit": "ns",
            "range": "± 13348.742089938745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865871.6378348214,
            "unit": "ns",
            "range": "± 4220.333014678072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362072.46953125,
            "unit": "ns",
            "range": "± 446.4277686705952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665050.1265625,
            "unit": "ns",
            "range": "± 6255.314987661918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806848.7410807292,
            "unit": "ns",
            "range": "± 631.0613104004265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741137.9215959822,
            "unit": "ns",
            "range": "± 506.83209720102894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346248.066666667,
            "unit": "ns",
            "range": "± 47230.96938218559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3484737.909090909,
            "unit": "ns",
            "range": "± 120208.7173443463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277006.8,
            "unit": "ns",
            "range": "± 35873.978209838955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3835650.8333333335,
            "unit": "ns",
            "range": "± 120620.16296563833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6481435.263157895,
            "unit": "ns",
            "range": "± 140199.1174008683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7855237,
            "unit": "ns",
            "range": "± 72792.47413513492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20160329.57142857,
            "unit": "ns",
            "range": "± 125236.93547384143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50942379.928571425,
            "unit": "ns",
            "range": "± 214903.58507854142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101784393.13333334,
            "unit": "ns",
            "range": "± 425125.79060099827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204192497.66666666,
            "unit": "ns",
            "range": "± 614067.1323842913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47566.914893617024,
            "unit": "ns",
            "range": "± 2768.728436298754"
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
          "id": "821b18baccee3a44b79a453ff19634129082eb18",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:04:01+09:00",
          "tree_id": "a4935ead63aa78ea06f2e84ff0b0ba87af8b14b7",
          "url": "https://github.com/greymistcube/libplanet/commit/821b18baccee3a44b79a453ff19634129082eb18"
        },
        "date": 1688714415592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348133.35294117645,
            "unit": "ns",
            "range": "± 6022.93182284567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341399.1875,
            "unit": "ns",
            "range": "± 13276.742713924803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312408.20454545453,
            "unit": "ns",
            "range": "± 11493.74376351649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5529045.923076923,
            "unit": "ns",
            "range": "± 32899.70481494106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5143742,
            "unit": "ns",
            "range": "± 49673.13083162148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23126.159574468085,
            "unit": "ns",
            "range": "± 1546.4011727767825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107541.18823529412,
            "unit": "ns",
            "range": "± 5824.171971587193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93386.9,
            "unit": "ns",
            "range": "± 4062.103853749196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121285.8469387755,
            "unit": "ns",
            "range": "± 14648.062028921602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6345.095744680851,
            "unit": "ns",
            "range": "± 820.5759722403872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25070.01052631579,
            "unit": "ns",
            "range": "± 1920.0033881549048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1823725.9444444445,
            "unit": "ns",
            "range": "± 89050.7161258801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3410469.1333333333,
            "unit": "ns",
            "range": "± 100627.55276135971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2307139.277777778,
            "unit": "ns",
            "range": "± 108138.81581041795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6341412.947368421,
            "unit": "ns",
            "range": "± 213831.31728802563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7605288.352083334,
            "unit": "ns",
            "range": "± 56931.38388208303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2264789.7002604166,
            "unit": "ns",
            "range": "± 1440.842605359957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1647581.681575521,
            "unit": "ns",
            "range": "± 4233.787143685631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3114740.6962239584,
            "unit": "ns",
            "range": "± 2007.8546805925462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009503.5364583334,
            "unit": "ns",
            "range": "± 835.8368435931808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926967.8336838942,
            "unit": "ns",
            "range": "± 391.5475246427321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4411876.9655172415,
            "unit": "ns",
            "range": "± 121329.34985004445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4580223.5,
            "unit": "ns",
            "range": "± 79084.38854379639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5448045.2,
            "unit": "ns",
            "range": "± 81375.07885903574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5011942.944444444,
            "unit": "ns",
            "range": "± 105466.30895636333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8139084.047619048,
            "unit": "ns",
            "range": "± 192969.00111092353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10410074.666666666,
            "unit": "ns",
            "range": "± 161250.8962635852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27332471.8,
            "unit": "ns",
            "range": "± 225198.1227440787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67625950.73333333,
            "unit": "ns",
            "range": "± 337205.0664511914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135914268,
            "unit": "ns",
            "range": "± 683101.3430210359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275969917.0645161,
            "unit": "ns",
            "range": "± 8225734.03282796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56642.78021978022,
            "unit": "ns",
            "range": "± 3358.7966919458845"
          }
        ]
      }
    ]
  }
}