window.BENCHMARK_DATA = {
  "lastUpdate": 1683805014900,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99b93f904780aadf51b47bc2ff8fdc4c306ebc38",
          "message": "Merge pull request #3151 from moreal/exp/nullable-total-supply-trackable\n\nMake `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T19:27:57+09:00",
          "tree_id": "9eeaa2de38d3805de08ef1f4822a8d1989be74a0",
          "url": "https://github.com/greymistcube/libplanet/commit/99b93f904780aadf51b47bc2ff8fdc4c306ebc38"
        },
        "date": 1683804713666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7660160.7272727275,
            "unit": "ns",
            "range": "± 287711.8398504134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19278658.333333332,
            "unit": "ns",
            "range": "± 634254.1818184401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47169130.57692308,
            "unit": "ns",
            "range": "± 365625.27668626833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94005933.08333333,
            "unit": "ns",
            "range": "± 761762.0473198913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195481470.7142857,
            "unit": "ns",
            "range": "± 3067981.8842824753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70686.15789473684,
            "unit": "ns",
            "range": "± 7541.867412686908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320042.7551020408,
            "unit": "ns",
            "range": "± 20257.241667627008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299163.52173913043,
            "unit": "ns",
            "range": "± 18170.904538486106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318922.3698630137,
            "unit": "ns",
            "range": "± 15793.383294126383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193689.970588235,
            "unit": "ns",
            "range": "± 83760.38724698393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793464.4285714286,
            "unit": "ns",
            "range": "± 66153.7639928189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22003.474226804123,
            "unit": "ns",
            "range": "± 4415.326830798182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108735.75,
            "unit": "ns",
            "range": "± 16861.27628583832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115410.64141414141,
            "unit": "ns",
            "range": "± 11305.951416346064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121821.13684210526,
            "unit": "ns",
            "range": "± 13372.138386745273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8110.526315789473,
            "unit": "ns",
            "range": "± 1158.9116578424307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22542.632653061224,
            "unit": "ns",
            "range": "± 3879.27158745454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608481.336734694,
            "unit": "ns",
            "range": "± 157653.26938556522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3046515.169811321,
            "unit": "ns",
            "range": "± 125582.73387411797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2592621.5721649486,
            "unit": "ns",
            "range": "± 190067.05261851274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6736414.641509434,
            "unit": "ns",
            "range": "± 270982.5608904278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142484.358974359,
            "unit": "ns",
            "range": "± 107284.14010749487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3326809.0444444446,
            "unit": "ns",
            "range": "± 126475.24613661034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4322484.444444444,
            "unit": "ns",
            "range": "± 163507.23621887303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4358301.135135135,
            "unit": "ns",
            "range": "± 135445.16150132538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7676538.089285715,
            "unit": "ns",
            "range": "± 326093.2070032781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6665466.466517857,
            "unit": "ns",
            "range": "± 51009.41240027321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902702.338169643,
            "unit": "ns",
            "range": "± 11365.571394432627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1262238.2880208334,
            "unit": "ns",
            "range": "± 23554.66399101826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2719546.705636161,
            "unit": "ns",
            "range": "± 25948.764802452315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876031.930859375,
            "unit": "ns",
            "range": "± 6725.745672553221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788833.1259765625,
            "unit": "ns",
            "range": "± 4054.6180625456564"
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
          "id": "9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d",
          "message": "Removed native tokens",
          "timestamp": "2023-05-11T20:19:50+09:00",
          "tree_id": "c1b1950a53da0ae0c46c99136417be98728f0f19",
          "url": "https://github.com/greymistcube/libplanet/commit/9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d"
        },
        "date": 1683804995306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7947614.461538462,
            "unit": "ns",
            "range": "± 104668.91257485465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20326700.769230768,
            "unit": "ns",
            "range": "± 236494.87527821606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50046160.1875,
            "unit": "ns",
            "range": "± 941073.7580088481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98407450.6923077,
            "unit": "ns",
            "range": "± 1097232.9494650308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218229964.92307693,
            "unit": "ns",
            "range": "± 7473858.314443074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61262.18085106383,
            "unit": "ns",
            "range": "± 7384.463820654422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319775.6082474227,
            "unit": "ns",
            "range": "± 25503.70094652796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305436.5104166667,
            "unit": "ns",
            "range": "± 28823.44901418938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291099.1222222222,
            "unit": "ns",
            "range": "± 17701.553437720922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4159016.25,
            "unit": "ns",
            "range": "± 128075.99482791961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3790751.1739130435,
            "unit": "ns",
            "range": "± 145426.89292719544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17063.09574468085,
            "unit": "ns",
            "range": "± 2102.606160971127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84871.5306122449,
            "unit": "ns",
            "range": "± 9333.000622670317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94507.51041666667,
            "unit": "ns",
            "range": "± 13024.056649135488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94240.15957446808,
            "unit": "ns",
            "range": "± 13496.198239124456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5061.178571428572,
            "unit": "ns",
            "range": "± 1089.1919980847779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15720.724137931034,
            "unit": "ns",
            "range": "± 1688.3037564899353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1610022.357142857,
            "unit": "ns",
            "range": "± 176475.39982860204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011845.282352941,
            "unit": "ns",
            "range": "± 162282.08907783678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2436658.3789473684,
            "unit": "ns",
            "range": "± 248460.90145179353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6650332.9301075265,
            "unit": "ns",
            "range": "± 431070.15462373954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265532.75,
            "unit": "ns",
            "range": "± 27537.415027310817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429982.4482758623,
            "unit": "ns",
            "range": "± 99627.58081818873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493821.829787234,
            "unit": "ns",
            "range": "± 172636.35189615737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4442299.574074074,
            "unit": "ns",
            "range": "± 186966.4814180179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7709579.81884058,
            "unit": "ns",
            "range": "± 368750.7373295717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6507323.767003677,
            "unit": "ns",
            "range": "± 209519.7117731317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941118.0411458334,
            "unit": "ns",
            "range": "± 26345.306040446467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236894.532924107,
            "unit": "ns",
            "range": "± 10840.589327928983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540467.0688175154,
            "unit": "ns",
            "range": "± 130653.19677580908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853395.1930338541,
            "unit": "ns",
            "range": "± 14809.663131104076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796762.7959681919,
            "unit": "ns",
            "range": "± 11947.577973243064"
          }
        ]
      }
    ]
  }
}