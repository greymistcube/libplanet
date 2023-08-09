window.BENCHMARK_DATA = {
  "lastUpdate": 1691562557068,
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
      }
    ]
  }
}