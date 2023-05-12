window.BENCHMARK_DATA = {
  "lastUpdate": 1683876726030,
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
          "id": "b01676e3932bfdec4b224df6e42154b96597b0ab",
          "message": "Changelog",
          "timestamp": "2023-05-11T20:29:50+09:00",
          "tree_id": "548ae5e5404d9f992d8459029eb35ddd7d744401",
          "url": "https://github.com/greymistcube/libplanet/commit/b01676e3932bfdec4b224df6e42154b96597b0ab"
        },
        "date": 1683805638249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210113.652173913,
            "unit": "ns",
            "range": "± 307606.55446579936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22319038.66091954,
            "unit": "ns",
            "range": "± 2825665.1845460767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51202767.6,
            "unit": "ns",
            "range": "± 910310.8679426732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103618175.35555555,
            "unit": "ns",
            "range": "± 5504326.493539842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211403054.07142857,
            "unit": "ns",
            "range": "± 7563164.550670122"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67522.77659574468,
            "unit": "ns",
            "range": "± 9070.654427617272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341985.31111111114,
            "unit": "ns",
            "range": "± 45891.36834108054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314456.6956521739,
            "unit": "ns",
            "range": "± 21277.304064354907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307153.02222222224,
            "unit": "ns",
            "range": "± 23719.076950216408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289766.5,
            "unit": "ns",
            "range": "± 146343.1395573431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3844010.75,
            "unit": "ns",
            "range": "± 105835.43969089378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17870.821052631578,
            "unit": "ns",
            "range": "± 2241.7520312837537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91454.26595744681,
            "unit": "ns",
            "range": "± 12612.976454272519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97967.91666666667,
            "unit": "ns",
            "range": "± 22284.85875758727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106598.30107526881,
            "unit": "ns",
            "range": "± 13540.710300861128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5574.443298969072,
            "unit": "ns",
            "range": "± 1298.831108865071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16825.47311827957,
            "unit": "ns",
            "range": "± 2540.738118494214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1589657.2395833333,
            "unit": "ns",
            "range": "± 154697.6446177813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957148.8260869565,
            "unit": "ns",
            "range": "± 141542.34203576436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2531134.0606060605,
            "unit": "ns",
            "range": "± 255020.8598033365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6535673.28021978,
            "unit": "ns",
            "range": "± 363384.65837511024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304886.135135135,
            "unit": "ns",
            "range": "± 165830.97833526816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3649317.0555555555,
            "unit": "ns",
            "range": "± 323226.9771184122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646067.75,
            "unit": "ns",
            "range": "± 344191.7523949022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4522728.425925926,
            "unit": "ns",
            "range": "± 188317.43076086123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8091161.950549451,
            "unit": "ns",
            "range": "± 546292.4979181282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6630442.086397059,
            "unit": "ns",
            "range": "± 134810.25729576143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2047167.4790039062,
            "unit": "ns",
            "range": "± 57944.248118565076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316304.3030348558,
            "unit": "ns",
            "range": "± 18072.904059126224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650610.7212094907,
            "unit": "ns",
            "range": "± 72328.54273346446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912299.7515345982,
            "unit": "ns",
            "range": "± 21459.67597502454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820855.3854492188,
            "unit": "ns",
            "range": "± 14095.963859968331"
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
          "id": "1ac0f633c2e43bfa033075362ce90c4fd9430f5d",
          "message": "Changelog",
          "timestamp": "2023-05-12T16:14:14+09:00",
          "tree_id": "177cd79e9cdac40aab6dfab289d5281d43c4fd5a",
          "url": "https://github.com/greymistcube/libplanet/commit/1ac0f633c2e43bfa033075362ce90c4fd9430f5d"
        },
        "date": 1683876699483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8624485.277777778,
            "unit": "ns",
            "range": "± 175487.8202713646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22485402.647727273,
            "unit": "ns",
            "range": "± 1358808.8465463922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54705679.45652174,
            "unit": "ns",
            "range": "± 2069563.585232379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105586331.36666666,
            "unit": "ns",
            "range": "± 1903054.1767753174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229853178.12,
            "unit": "ns",
            "range": "± 9118297.282415248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76253.3,
            "unit": "ns",
            "range": "± 9199.615707283763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342029.3956043956,
            "unit": "ns",
            "range": "± 37589.79093343745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346811.0232558139,
            "unit": "ns",
            "range": "± 56807.156433328266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310266.8068181818,
            "unit": "ns",
            "range": "± 24287.029922028672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240451.38,
            "unit": "ns",
            "range": "± 92384.30548904577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3869247.14516129,
            "unit": "ns",
            "range": "± 173979.81106390202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19166.46907216495,
            "unit": "ns",
            "range": "± 3960.218939795733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95220.64583333333,
            "unit": "ns",
            "range": "± 14588.155886471135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122341.58695652174,
            "unit": "ns",
            "range": "± 10175.653055320116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112307.125,
            "unit": "ns",
            "range": "± 15820.384396321362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6752.329787234043,
            "unit": "ns",
            "range": "± 1590.2082208848774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16606.380434782608,
            "unit": "ns",
            "range": "± 1561.4446596365499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630662.3737373736,
            "unit": "ns",
            "range": "± 208989.34489237142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007818.5679012346,
            "unit": "ns",
            "range": "± 156715.18052863755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513538.8,
            "unit": "ns",
            "range": "± 177520.4388678739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6418173,
            "unit": "ns",
            "range": "± 240780.28975883004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544182.785714286,
            "unit": "ns",
            "range": "± 187878.9888725207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3655409.769230769,
            "unit": "ns",
            "range": "± 293214.59559688723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4786880.760869565,
            "unit": "ns",
            "range": "± 336698.7377916193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4715065.239130435,
            "unit": "ns",
            "range": "± 408676.5103353596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8430439.84269663,
            "unit": "ns",
            "range": "± 570677.352299857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6624682.11305147,
            "unit": "ns",
            "range": "± 194541.45561486803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984879.402709961,
            "unit": "ns",
            "range": "± 37368.5799505637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1248857.0938895089,
            "unit": "ns",
            "range": "± 13162.589932316576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690797.1643415177,
            "unit": "ns",
            "range": "± 46878.38732262328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 780847.5046735491,
            "unit": "ns",
            "range": "± 4805.352636289499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819169.2698567709,
            "unit": "ns",
            "range": "± 13827.436478694874"
          }
        ]
      }
    ]
  }
}