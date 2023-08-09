window.BENCHMARK_DATA = {
  "lastUpdate": 1691575625905,
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
          "id": "ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad",
          "message": "Introduce VolatileKeyValueStore",
          "timestamp": "2023-08-09T10:33:47+09:00",
          "tree_id": "aa74d09cc1962bc9aba5f59caea5d7aec8790c9e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad"
        },
        "date": 1691546485502,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194384.532608696,
            "unit": "ns",
            "range": "± 268696.8244209448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462882.795698925,
            "unit": "ns",
            "range": "± 323716.18257808057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4473612.03125,
            "unit": "ns",
            "range": "± 487118.3648858906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3979824.757575758,
            "unit": "ns",
            "range": "± 528431.8455108493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6914616.873684211,
            "unit": "ns",
            "range": "± 665129.7157893379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7946007.347368421,
            "unit": "ns",
            "range": "± 624540.0287055823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22308832.102040816,
            "unit": "ns",
            "range": "± 2744078.7342648543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55705838.26530612,
            "unit": "ns",
            "range": "± 4584297.135704851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111733288.73469388,
            "unit": "ns",
            "range": "± 7909451.294436726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231430301.16326532,
            "unit": "ns",
            "range": "± 17687791.02605306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63672.072916666664,
            "unit": "ns",
            "range": "± 16433.85477107342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7084526.772949219,
            "unit": "ns",
            "range": "± 137545.43558142666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987804.1325061275,
            "unit": "ns",
            "range": "± 76508.90529959177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442934.2133300782,
            "unit": "ns",
            "range": "± 50163.4652091099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2773794.9782072366,
            "unit": "ns",
            "range": "± 94570.776964889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899954.1394264915,
            "unit": "ns",
            "range": "± 22027.892727204566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837966.0797154017,
            "unit": "ns",
            "range": "± 27525.400181518093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320793.34736842103,
            "unit": "ns",
            "range": "± 49765.001615415495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327528.90625,
            "unit": "ns",
            "range": "± 50275.62750134777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270133.05376344087,
            "unit": "ns",
            "range": "± 48943.3431174041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4279080.484210527,
            "unit": "ns",
            "range": "± 392380.3131252015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825106.734042553,
            "unit": "ns",
            "range": "± 455465.6781535989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29540.897959183672,
            "unit": "ns",
            "range": "± 10214.48400025876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100030.63043478261,
            "unit": "ns",
            "range": "± 16599.806202176966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107462.37362637362,
            "unit": "ns",
            "range": "± 21786.458815128648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131439.63829787233,
            "unit": "ns",
            "range": "± 29981.672992282332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9758.773195876289,
            "unit": "ns",
            "range": "± 7550.759022974053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26642.178947368422,
            "unit": "ns",
            "range": "± 10311.266610166524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396953.4574468085,
            "unit": "ns",
            "range": "± 183809.3130873643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2752079.6739130435,
            "unit": "ns",
            "range": "± 326135.2265696712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1895172.6530612244,
            "unit": "ns",
            "range": "± 267676.2619232766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5728904.45,
            "unit": "ns",
            "range": "± 690403.8391793774"
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
          "id": "7f442c257e57b2f39823cc9d3451e7f4a6311ccd",
          "message": "Added tests; fixed bugs",
          "timestamp": "2023-08-09T15:14:23+09:00",
          "tree_id": "aafba74cc26be41ac4d68dcb7c5ab229efaf26b1",
          "url": "https://github.com/greymistcube/libplanet/commit/7f442c257e57b2f39823cc9d3451e7f4a6311ccd"
        },
        "date": 1691562549358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3616580.625,
            "unit": "ns",
            "range": "± 92253.05015427026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3768100.1555555556,
            "unit": "ns",
            "range": "± 142098.3945394169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467949.714285715,
            "unit": "ns",
            "range": "± 124099.60784725014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452817.357142857,
            "unit": "ns",
            "range": "± 59087.75527273252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6925972.4,
            "unit": "ns",
            "range": "± 121633.64915351343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8436951.684210526,
            "unit": "ns",
            "range": "± 184083.4647073781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22866232.5,
            "unit": "ns",
            "range": "± 267086.9008459606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57266813.2,
            "unit": "ns",
            "range": "± 743537.1090357034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114460958.4,
            "unit": "ns",
            "range": "± 1277126.6678286516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224515719.8,
            "unit": "ns",
            "range": "± 2782679.375942757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49267.48148148148,
            "unit": "ns",
            "range": "± 2597.3323146601356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6221720.020833333,
            "unit": "ns",
            "range": "± 21841.494992446842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903820.85390625,
            "unit": "ns",
            "range": "± 2333.624881791139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384646.7822916666,
            "unit": "ns",
            "range": "± 3863.696067311069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686943.4737723214,
            "unit": "ns",
            "range": "± 5949.399950458523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843584.1639322917,
            "unit": "ns",
            "range": "± 1290.7573994942913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771147.8345424107,
            "unit": "ns",
            "range": "± 2294.3470177945815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303002.2727272727,
            "unit": "ns",
            "range": "± 9284.878103241068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293979.76470588235,
            "unit": "ns",
            "range": "± 11868.56632890129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261319.34210526315,
            "unit": "ns",
            "range": "± 13217.048681711696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4617796.8,
            "unit": "ns",
            "range": "± 50555.52887271579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4251457.714285715,
            "unit": "ns",
            "range": "± 59837.29088945297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21479.5,
            "unit": "ns",
            "range": "± 1913.0303543964233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93023.86666666667,
            "unit": "ns",
            "range": "± 5553.258582210888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79545.30526315789,
            "unit": "ns",
            "range": "± 5472.821371790348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101832.81720430107,
            "unit": "ns",
            "range": "± 11527.419444190858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5784.336842105263,
            "unit": "ns",
            "range": "± 828.9194788105922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20913.822916666668,
            "unit": "ns",
            "range": "± 2065.4559430115983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492229.913580247,
            "unit": "ns",
            "range": "± 74672.06676431916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2888045.203125,
            "unit": "ns",
            "range": "± 133677.19905175737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1914426.68,
            "unit": "ns",
            "range": "± 89080.12109212753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5367751.24,
            "unit": "ns",
            "range": "± 326881.80553027074"
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
          "id": "6b5ed745979df2ba815f426aef8b401bfb80b04c",
          "message": "Added tests; fixed bugs",
          "timestamp": "2023-08-09T18:48:20+09:00",
          "tree_id": "dd96494b87d086b4c271242141d8b87d1de38297",
          "url": "https://github.com/greymistcube/libplanet/commit/6b5ed745979df2ba815f426aef8b401bfb80b04c"
        },
        "date": 1691575260752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3379206.3333333335,
            "unit": "ns",
            "range": "± 38946.545973142405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3467382.8666666667,
            "unit": "ns",
            "range": "± 58999.55011192479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4313725.6,
            "unit": "ns",
            "range": "± 51805.71009040826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3843007.0555555555,
            "unit": "ns",
            "range": "± 70342.64695338452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6298660.894736842,
            "unit": "ns",
            "range": "± 135268.33268889194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7842431.733333333,
            "unit": "ns",
            "range": "± 82643.49423316191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20153452.4,
            "unit": "ns",
            "range": "± 92476.52540957932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51266735.2,
            "unit": "ns",
            "range": "± 482686.82253494934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102661309.92857143,
            "unit": "ns",
            "range": "± 442866.4734272821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204851624.2857143,
            "unit": "ns",
            "range": "± 556836.2834477582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47039.73134328358,
            "unit": "ns",
            "range": "± 2224.2427215359717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6239642.0328125,
            "unit": "ns",
            "range": "± 18877.132604136747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2019066.0640024038,
            "unit": "ns",
            "range": "± 1392.443305862083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371609.0540364583,
            "unit": "ns",
            "range": "± 1116.3372745550384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611515.955078125,
            "unit": "ns",
            "range": "± 2414.104459061575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815552.4698660715,
            "unit": "ns",
            "range": "± 416.9083279347606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760783.455078125,
            "unit": "ns",
            "range": "± 573.3928203729007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279352.32,
            "unit": "ns",
            "range": "± 7387.817419689435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280016.4666666667,
            "unit": "ns",
            "range": "± 4961.193143743127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241651.15151515152,
            "unit": "ns",
            "range": "± 7578.718238104367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259709.142857143,
            "unit": "ns",
            "range": "± 32951.36556492624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923087.5,
            "unit": "ns",
            "range": "± 31389.340130173052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18596.542553191488,
            "unit": "ns",
            "range": "± 1435.2374249272107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91304.13157894737,
            "unit": "ns",
            "range": "± 4489.233058009219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73414.05,
            "unit": "ns",
            "range": "± 1663.9185036660017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90081.51020408163,
            "unit": "ns",
            "range": "± 11000.323067650254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4912.691489361702,
            "unit": "ns",
            "range": "± 517.0134048426648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18763.483516483517,
            "unit": "ns",
            "range": "± 1176.8908130478314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365811.1063829786,
            "unit": "ns",
            "range": "± 90412.56478510506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572175.4583333335,
            "unit": "ns",
            "range": "± 65295.83584364265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1757089.8645833333,
            "unit": "ns",
            "range": "± 110035.7656248396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4732237.731707317,
            "unit": "ns",
            "range": "± 168698.95734103164"
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
          "id": "4e820394c7e12fa4894d1d9ba1994719a89136e7",
          "message": "Changelog",
          "timestamp": "2023-08-09T18:52:16+09:00",
          "tree_id": "165b4ad369419c8aba771d844298efbc31b64d6b",
          "url": "https://github.com/greymistcube/libplanet/commit/4e820394c7e12fa4894d1d9ba1994719a89136e7"
        },
        "date": 1691575618655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3709270.1333333333,
            "unit": "ns",
            "range": "± 43729.11260552478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3785206,
            "unit": "ns",
            "range": "± 55351.95872131098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4607723.594594595,
            "unit": "ns",
            "range": "± 152884.14978586813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4350987.310344827,
            "unit": "ns",
            "range": "± 125853.1911199665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6778167.214285715,
            "unit": "ns",
            "range": "± 187003.21397403587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8248925.615384615,
            "unit": "ns",
            "range": "± 224575.4350691236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23058428.666666668,
            "unit": "ns",
            "range": "± 163585.8737887783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57245558.46666667,
            "unit": "ns",
            "range": "± 534764.1852665883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112546056.73333333,
            "unit": "ns",
            "range": "± 1820150.6852536951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227985427.2,
            "unit": "ns",
            "range": "± 2350149.4522694326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48777.31460674157,
            "unit": "ns",
            "range": "± 2716.0777309949995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6135747.835379465,
            "unit": "ns",
            "range": "± 20470.127041227846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905304.2533854167,
            "unit": "ns",
            "range": "± 3935.1046281268273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385643.865513393,
            "unit": "ns",
            "range": "± 2935.510221440697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632798.2924479167,
            "unit": "ns",
            "range": "± 3606.2759742937765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854314.0103515625,
            "unit": "ns",
            "range": "± 1113.891021583007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770867.1852864583,
            "unit": "ns",
            "range": "± 429.00099233262085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299404.7215189873,
            "unit": "ns",
            "range": "± 15478.591840259614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278665.45652173914,
            "unit": "ns",
            "range": "± 8785.769675273563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252631.2857142857,
            "unit": "ns",
            "range": "± 8227.103216061598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4638034.6,
            "unit": "ns",
            "range": "± 51647.34881012079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4044356.5714285714,
            "unit": "ns",
            "range": "± 28787.0382736993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21692.31914893617,
            "unit": "ns",
            "range": "± 1558.8442711075593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92378.50588235294,
            "unit": "ns",
            "range": "± 4821.844745835475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76403.45652173914,
            "unit": "ns",
            "range": "± 2895.6647113037548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100778.61224489796,
            "unit": "ns",
            "range": "± 13646.910522794824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6440.340206185567,
            "unit": "ns",
            "range": "± 988.9049171368583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21590.010416666668,
            "unit": "ns",
            "range": "± 1718.1638332199545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519129.7362637362,
            "unit": "ns",
            "range": "± 84693.85163763989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2832166.9487179485,
            "unit": "ns",
            "range": "± 94909.29223348184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1898062.611764706,
            "unit": "ns",
            "range": "± 100108.772872917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5023865.4,
            "unit": "ns",
            "range": "± 131452.9269440839"
          }
        ]
      }
    ]
  }
}