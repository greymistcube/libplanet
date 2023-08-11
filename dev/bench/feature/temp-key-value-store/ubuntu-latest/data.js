window.BENCHMARK_DATA = {
  "lastUpdate": 1691718266782,
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
          "id": "03a96f56214f40111180a6b6ea7992b770d67475",
          "message": "Changelog",
          "timestamp": "2023-08-10T13:51:40+09:00",
          "tree_id": "fb25148da6dae328e22b79b77d86241dac0b9f1a",
          "url": "https://github.com/greymistcube/libplanet/commit/03a96f56214f40111180a6b6ea7992b770d67475"
        },
        "date": 1691644296949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4508851.3263157895,
            "unit": "ns",
            "range": "± 318994.4690241656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4665044.927083333,
            "unit": "ns",
            "range": "± 376803.1308442185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5997318.392156863,
            "unit": "ns",
            "range": "± 240333.820397636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5343825.489361702,
            "unit": "ns",
            "range": "± 399272.1269349462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8816480.218390804,
            "unit": "ns",
            "range": "± 482417.2276240264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10529091.132653061,
            "unit": "ns",
            "range": "± 900186.5357689848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27993277.95238095,
            "unit": "ns",
            "range": "± 1018243.4433752953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79448665.2962963,
            "unit": "ns",
            "range": "± 2209914.8585040173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144175843.125,
            "unit": "ns",
            "range": "± 2525358.4568999805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293812370.06666666,
            "unit": "ns",
            "range": "± 5241919.077305433"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71638.64835164836,
            "unit": "ns",
            "range": "± 16902.114296655072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6587137.621603261,
            "unit": "ns",
            "range": "± 163175.24399682545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2082998.9271763393,
            "unit": "ns",
            "range": "± 25054.715249258432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368529.4278645834,
            "unit": "ns",
            "range": "± 12257.44141714284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3348575.816145833,
            "unit": "ns",
            "range": "± 40488.68055319778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1101256.6936677631,
            "unit": "ns",
            "range": "± 23635.059131338006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 992789.4227864583,
            "unit": "ns",
            "range": "± 13328.613261721692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389907.04545454547,
            "unit": "ns",
            "range": "± 57662.361860101315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 377301.7849462366,
            "unit": "ns",
            "range": "± 45312.57572943584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337708.6842105263,
            "unit": "ns",
            "range": "± 45945.70012786443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5750929.257142857,
            "unit": "ns",
            "range": "± 268868.80255671305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5258940.445652174,
            "unit": "ns",
            "range": "± 303234.0485993683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32450.621052631577,
            "unit": "ns",
            "range": "± 7827.533219455521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137354.07865168538,
            "unit": "ns",
            "range": "± 22005.75992068725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 140487.62790697673,
            "unit": "ns",
            "range": "± 11752.96391758918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138501.32978723405,
            "unit": "ns",
            "range": "± 22073.393330095954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9543.011627906977,
            "unit": "ns",
            "range": "± 1002.9961174540545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32575.979166666668,
            "unit": "ns",
            "range": "± 9950.325154146754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1769538.2164948455,
            "unit": "ns",
            "range": "± 212351.43171909757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3227906.9166666665,
            "unit": "ns",
            "range": "± 390946.58496956003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2193923.442105263,
            "unit": "ns",
            "range": "± 212722.81248844453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6059640.947916667,
            "unit": "ns",
            "range": "± 619528.4016707576"
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
          "id": "69b6177f6a0154fe33008a3ff505e2a0b7478b4b",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-10T22:04:32+09:00",
          "tree_id": "6479af23e49ccc90d3203d5aa9c5eeb97fceab47",
          "url": "https://github.com/greymistcube/libplanet/commit/69b6177f6a0154fe33008a3ff505e2a0b7478b4b"
        },
        "date": 1691673703280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4021283.8266666667,
            "unit": "ns",
            "range": "± 202570.60398940343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4294300,
            "unit": "ns",
            "range": "± 164389.10757833076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5133852.701754386,
            "unit": "ns",
            "range": "± 221898.70984785288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4758051.222222222,
            "unit": "ns",
            "range": "± 169184.8507955787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7249504.060606061,
            "unit": "ns",
            "range": "± 223066.60908584844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9689349.891566265,
            "unit": "ns",
            "range": "± 514527.96062246925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25926461.20689655,
            "unit": "ns",
            "range": "± 751419.7463605801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65334637.95,
            "unit": "ns",
            "range": "± 1501780.141239774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131250382.47619048,
            "unit": "ns",
            "range": "± 3072936.5848832875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261942277.25925925,
            "unit": "ns",
            "range": "± 7137787.475915114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55048.7,
            "unit": "ns",
            "range": "± 4411.45041105683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5932870.727083334,
            "unit": "ns",
            "range": "± 79246.66758678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871913.418344351,
            "unit": "ns",
            "range": "± 7098.855217194025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271750.6522042411,
            "unit": "ns",
            "range": "± 14786.980436905062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3044643.97890625,
            "unit": "ns",
            "range": "± 35792.59005052454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986892.0418619792,
            "unit": "ns",
            "range": "± 8246.892168834818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888256.4141927083,
            "unit": "ns",
            "range": "± 4351.2872090454375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319905.358974359,
            "unit": "ns",
            "range": "± 10987.267043185608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310348.5333333333,
            "unit": "ns",
            "range": "± 13194.021700224263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276531.58,
            "unit": "ns",
            "range": "± 17645.679356806653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5237956.576923077,
            "unit": "ns",
            "range": "± 142343.89696454795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4672864.957446809,
            "unit": "ns",
            "range": "± 180541.0470522903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23952.55319148936,
            "unit": "ns",
            "range": "± 1749.3889170683995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102752.79787234042,
            "unit": "ns",
            "range": "± 6860.520267082458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86391.08333333333,
            "unit": "ns",
            "range": "± 6833.847962307166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95779.97938144329,
            "unit": "ns",
            "range": "± 16410.8565443856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6493.989795918367,
            "unit": "ns",
            "range": "± 869.6312228826246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23474.05376344086,
            "unit": "ns",
            "range": "± 1750.9582119860975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688491.2765957448,
            "unit": "ns",
            "range": "± 124451.37156546258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3253910.115942029,
            "unit": "ns",
            "range": "± 155284.80274071137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085971.6219512196,
            "unit": "ns",
            "range": "± 107217.22654230156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5730059.5,
            "unit": "ns",
            "range": "± 350933.60893645056"
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
          "id": "8462329db89fac815ba092ae9c627bf018368e1f",
          "message": "Changelog",
          "timestamp": "2023-08-10T22:00:36+09:00",
          "tree_id": "9d081c2db32d067f7aaf71f3104d9d3b30894556",
          "url": "https://github.com/greymistcube/libplanet/commit/8462329db89fac815ba092ae9c627bf018368e1f"
        },
        "date": 1691673768562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4372903.11827957,
            "unit": "ns",
            "range": "± 388345.04150001565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4453578.731182796,
            "unit": "ns",
            "range": "± 412953.89483789314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5944253.602150538,
            "unit": "ns",
            "range": "± 514078.70998483966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4911190.284210526,
            "unit": "ns",
            "range": "± 504679.0122103875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8695627.489795918,
            "unit": "ns",
            "range": "± 751219.524584453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10201498.18556701,
            "unit": "ns",
            "range": "± 838941.6104185147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27968343.484848484,
            "unit": "ns",
            "range": "± 1814382.8521992322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72739699.13235295,
            "unit": "ns",
            "range": "± 3447332.248687957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144204904.28333333,
            "unit": "ns",
            "range": "± 6415472.721469695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 303514917.9791667,
            "unit": "ns",
            "range": "± 11769368.459557528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63345.37634408602,
            "unit": "ns",
            "range": "± 15988.127230048458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6433162.531875,
            "unit": "ns",
            "range": "± 171666.4771935425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111486.574079241,
            "unit": "ns",
            "range": "± 60499.726668367875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374712.986015625,
            "unit": "ns",
            "range": "± 34569.463877040645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3405724.529647436,
            "unit": "ns",
            "range": "± 116640.75065005527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1098492.5449662642,
            "unit": "ns",
            "range": "± 41036.69571165005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012794.2442737926,
            "unit": "ns",
            "range": "± 22384.761700616524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352545.4947368421,
            "unit": "ns",
            "range": "± 40513.010905579584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356853.2755102041,
            "unit": "ns",
            "range": "± 57274.21373465822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309724.71910112357,
            "unit": "ns",
            "range": "± 32587.535671769285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5428092.936170213,
            "unit": "ns",
            "range": "± 329380.2758408358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4875351.546391753,
            "unit": "ns",
            "range": "± 415078.15569881984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25272.561224489797,
            "unit": "ns",
            "range": "± 7642.5387292555915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107536.5744680851,
            "unit": "ns",
            "range": "± 15875.136946315999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117700.35416666667,
            "unit": "ns",
            "range": "± 23857.73157742818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115219.18681318681,
            "unit": "ns",
            "range": "± 24111.777930165208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6891.219780219781,
            "unit": "ns",
            "range": "± 1231.6781037105236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21548.283950617282,
            "unit": "ns",
            "range": "± 2845.3109945776046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1758895.5151515151,
            "unit": "ns",
            "range": "± 238315.18790931543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3550205.6263736263,
            "unit": "ns",
            "range": "± 404486.875113249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2313810.782608696,
            "unit": "ns",
            "range": "± 207053.1588321989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6387046.784946237,
            "unit": "ns",
            "range": "± 510164.2658172197"
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
          "id": "505600e73a21dfc4d149b5f526f5424b9d13f595",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-10T22:35:28+09:00",
          "tree_id": "954bf175c70d76f900aa607378ccd5825321d01e",
          "url": "https://github.com/greymistcube/libplanet/commit/505600e73a21dfc4d149b5f526f5424b9d13f595"
        },
        "date": 1691675348364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332901.6363636362,
            "unit": "ns",
            "range": "± 80655.54402202391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542060,
            "unit": "ns",
            "range": "± 92011.03900501618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252408.8,
            "unit": "ns",
            "range": "± 48061.167505883284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3770958.1818181816,
            "unit": "ns",
            "range": "± 147737.01213882412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6089741.70967742,
            "unit": "ns",
            "range": "± 183483.1011973934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7976477.266666667,
            "unit": "ns",
            "range": "± 56880.241410561975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20307346.666666668,
            "unit": "ns",
            "range": "± 68769.19853151312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51997983.071428575,
            "unit": "ns",
            "range": "± 105367.40541148552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102911498.57142857,
            "unit": "ns",
            "range": "± 379956.32842487295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205480871.53846154,
            "unit": "ns",
            "range": "± 258705.30156776693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46922.054945054944,
            "unit": "ns",
            "range": "± 2674.4904908853932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5026200.129464285,
            "unit": "ns",
            "range": "± 35949.93320044584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1608500.4656808036,
            "unit": "ns",
            "range": "± 2672.170526648752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068656.998325893,
            "unit": "ns",
            "range": "± 505.9884155763995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554159.7497209823,
            "unit": "ns",
            "range": "± 1729.5021127557907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922882.8150390625,
            "unit": "ns",
            "range": "± 2996.3374105635144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742152.1598772322,
            "unit": "ns",
            "range": "± 475.21709865584984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274955.1,
            "unit": "ns",
            "range": "± 6287.67416542288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257804.53333333333,
            "unit": "ns",
            "range": "± 9297.438404792423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223214.35714285713,
            "unit": "ns",
            "range": "± 3369.438611244469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4225558.666666667,
            "unit": "ns",
            "range": "± 28926.840395005038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3921023.0714285714,
            "unit": "ns",
            "range": "± 19382.790520952367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19852.14893617021,
            "unit": "ns",
            "range": "± 2307.5904854517066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88321.64772727272,
            "unit": "ns",
            "range": "± 4842.043204239189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73500.04651162791,
            "unit": "ns",
            "range": "± 2695.592530970372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82934.26530612246,
            "unit": "ns",
            "range": "± 11741.929303310362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5404.25,
            "unit": "ns",
            "range": "± 571.1454234578459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21089.885416666668,
            "unit": "ns",
            "range": "± 1907.086851828376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373743.8315789474,
            "unit": "ns",
            "range": "± 104077.66668129334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2603942.3725490198,
            "unit": "ns",
            "range": "± 105264.73934722127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1735643.4516129033,
            "unit": "ns",
            "range": "± 108677.58747867536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4492635.333333333,
            "unit": "ns",
            "range": "± 105648.82551800249"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "436619f0961e3b9da88d78ca9b9db8973b0ab6a1",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-11T10:21:31+09:00",
          "tree_id": "3fa615785a65a6f95f419cfb410a7aa449def84d",
          "url": "https://github.com/greymistcube/libplanet/commit/436619f0961e3b9da88d78ca9b9db8973b0ab6a1"
        },
        "date": 1691718257094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4187836.49,
            "unit": "ns",
            "range": "± 512984.4765940728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826199.46875,
            "unit": "ns",
            "range": "± 397816.4003684944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5011383.350515464,
            "unit": "ns",
            "range": "± 538475.6130776923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5020425.052083333,
            "unit": "ns",
            "range": "± 356826.59301932104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8035144.71875,
            "unit": "ns",
            "range": "± 598208.3827197177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10116653.208333334,
            "unit": "ns",
            "range": "± 810932.9866216789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25703001.884210527,
            "unit": "ns",
            "range": "± 2133640.142206206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68362462.82828283,
            "unit": "ns",
            "range": "± 4507860.313171243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144189650.54347825,
            "unit": "ns",
            "range": "± 5521600.41391186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276017268.66,
            "unit": "ns",
            "range": "± 18008768.06090254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66447.51546391753,
            "unit": "ns",
            "range": "± 17119.8801550477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6042804.146763393,
            "unit": "ns",
            "range": "± 51784.32065605787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919100.9578515624,
            "unit": "ns",
            "range": "± 114981.24964803875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345418.4068080357,
            "unit": "ns",
            "range": "± 23043.980951949397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3100662.831473214,
            "unit": "ns",
            "range": "± 88553.88099375654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976963.2244991179,
            "unit": "ns",
            "range": "± 44277.85133055156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976982.8133951823,
            "unit": "ns",
            "range": "± 32129.244927349704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367696.16842105263,
            "unit": "ns",
            "range": "± 48241.640190936276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338091.60204081633,
            "unit": "ns",
            "range": "± 46345.86545016213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287232.6565656566,
            "unit": "ns",
            "range": "± 55445.784073762705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5209115.44,
            "unit": "ns",
            "range": "± 654364.2201771169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173444.11827957,
            "unit": "ns",
            "range": "± 422322.8169458568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32524,
            "unit": "ns",
            "range": "± 8012.130878133066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117741.78571428571,
            "unit": "ns",
            "range": "± 28881.60867390845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131594.96,
            "unit": "ns",
            "range": "± 30057.78417605229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121861.6170212766,
            "unit": "ns",
            "range": "± 23096.54655147471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8151.879518072289,
            "unit": "ns",
            "range": "± 1413.2379910876384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28378.775510204083,
            "unit": "ns",
            "range": "± 10877.690340553048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843063.9574468085,
            "unit": "ns",
            "range": "± 186574.2778010032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3274559.64,
            "unit": "ns",
            "range": "± 350539.14091580454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166983.9789473685,
            "unit": "ns",
            "range": "± 221413.79106579433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6469696.693877551,
            "unit": "ns",
            "range": "± 418712.6773646634"
          }
        ]
      }
    ]
  }
}