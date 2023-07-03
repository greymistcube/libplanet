window.BENCHMARK_DATA = {
  "lastUpdate": 1688363709533,
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
          "id": "40e474810f4076eb8ae7203ff0398dd16bf6761c",
          "message": "Removed unnecessary test code",
          "timestamp": "2023-07-03T14:32:26+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/40e474810f4076eb8ae7203ff0398dd16bf6761c"
        },
        "date": 1688363271864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377177,
            "unit": "ns",
            "range": "± 127840.44652881524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2522515.5172413792,
            "unit": "ns",
            "range": "± 105728.64273857772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1809921.4285714286,
            "unit": "ns",
            "range": "± 171268.0098137624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891044.117647059,
            "unit": "ns",
            "range": "± 234186.8640174216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45883.333333333336,
            "unit": "ns",
            "range": "± 2991.5987233164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7264415.384615385,
            "unit": "ns",
            "range": "± 33829.59370516309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20259373.333333332,
            "unit": "ns",
            "range": "± 231416.7590753798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53701490,
            "unit": "ns",
            "range": "± 939165.6196554776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101811338.8888889,
            "unit": "ns",
            "range": "± 1914378.8776577697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204545073.33333334,
            "unit": "ns",
            "range": "± 3624712.910694084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4892409.0625,
            "unit": "ns",
            "range": "± 24970.126188496117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1561385.3971354167,
            "unit": "ns",
            "range": "± 7539.462535745111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212893.7630208333,
            "unit": "ns",
            "range": "± 4400.574010381681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707539.9088541665,
            "unit": "ns",
            "range": "± 17025.47103884268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840479.5833333334,
            "unit": "ns",
            "range": "± 2571.5189962256477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777453.0078125,
            "unit": "ns",
            "range": "± 2348.5597534091694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228957.7922077924,
            "unit": "ns",
            "range": "± 164919.63335151566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415590.625,
            "unit": "ns",
            "range": "± 104736.6539634895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4105908.108108108,
            "unit": "ns",
            "range": "± 138607.3839190282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3826321.7391304346,
            "unit": "ns",
            "range": "± 95605.39617958876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6295572.413793104,
            "unit": "ns",
            "range": "± 182874.56063134744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272025,
            "unit": "ns",
            "range": "± 7874.70429552345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261256.66666666666,
            "unit": "ns",
            "range": "± 6964.970645448121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224300,
            "unit": "ns",
            "range": "± 10642.782696711032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4138354.5454545454,
            "unit": "ns",
            "range": "± 99412.96613368818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641810,
            "unit": "ns",
            "range": "± 81103.98718214848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18619.565217391304,
            "unit": "ns",
            "range": "± 1382.3247762044718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86239.43661971831,
            "unit": "ns",
            "range": "± 4216.78546739912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76736.26373626373,
            "unit": "ns",
            "range": "± 7443.050695985059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95532.29166666667,
            "unit": "ns",
            "range": "± 14631.203100451672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5410.416666666667,
            "unit": "ns",
            "range": "± 959.8770937405054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18580.645161290322,
            "unit": "ns",
            "range": "± 1882.5432649636575"
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
          "id": "8cec0688a9dda82cdf498dea569c01dbdf1fa625",
          "message": "[skip changelog] Removed unnecessary test code",
          "timestamp": "2023-07-03T14:39:28+09:00",
          "tree_id": "645c8d34b8ffd2a91ad83144a49ff20cdf353fc0",
          "url": "https://github.com/greymistcube/libplanet/commit/8cec0688a9dda82cdf498dea569c01dbdf1fa625"
        },
        "date": 1688363617789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322861.855670103,
            "unit": "ns",
            "range": "± 100624.9497342514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606797.8947368423,
            "unit": "ns",
            "range": "± 149555.58845484146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811921,
            "unit": "ns",
            "range": "± 146396.37925022517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4685880,
            "unit": "ns",
            "range": "± 196369.869585839"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42188.23529411765,
            "unit": "ns",
            "range": "± 2296.9136520404886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6874433.333333333,
            "unit": "ns",
            "range": "± 40980.23333034506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17372935.714285713,
            "unit": "ns",
            "range": "± 132745.36994471122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46059726.666666664,
            "unit": "ns",
            "range": "± 296022.9852722991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90446035.71428572,
            "unit": "ns",
            "range": "± 1000403.189186273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180510213.33333334,
            "unit": "ns",
            "range": "± 891737.0415307952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4777099.944196428,
            "unit": "ns",
            "range": "± 3826.880264105943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513243.7760416667,
            "unit": "ns",
            "range": "± 1654.2861554527744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165325.7682291667,
            "unit": "ns",
            "range": "± 893.65122693594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586359.7098214286,
            "unit": "ns",
            "range": "± 35420.70935165116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832996.5471540178,
            "unit": "ns",
            "range": "± 3738.0418508062685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753808.7044270834,
            "unit": "ns",
            "range": "± 717.0981812424872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2953290,
            "unit": "ns",
            "range": "± 96088.55964222613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3188344,
            "unit": "ns",
            "range": "± 82725.65140269371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4021231.25,
            "unit": "ns",
            "range": "± 77215.03928423961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3414066.6666666665,
            "unit": "ns",
            "range": "± 143014.70435020784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5907615.217391305,
            "unit": "ns",
            "range": "± 176070.00876216043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251123.07692307694,
            "unit": "ns",
            "range": "± 8508.121863949875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244252.9411764706,
            "unit": "ns",
            "range": "± 4986.872472685012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218288.05970149254,
            "unit": "ns",
            "range": "± 10337.699796729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3866920,
            "unit": "ns",
            "range": "± 37838.40075146638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3467553.3333333335,
            "unit": "ns",
            "range": "± 26434.57872524078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16488.297872340427,
            "unit": "ns",
            "range": "± 1338.8212102064451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80229.48717948717,
            "unit": "ns",
            "range": "± 3992.138670208133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65574.28571428571,
            "unit": "ns",
            "range": "± 1999.609205517397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80142.5,
            "unit": "ns",
            "range": "± 4761.974247534022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4193.548387096775,
            "unit": "ns",
            "range": "± 499.5229140439696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15942.268041237114,
            "unit": "ns",
            "range": "± 1454.5070077998357"
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
          "id": "24dbb50f814adebef9dae0ca37c233ca05f08c1b",
          "message": "[skip changelog] Removed unnecessary test code",
          "timestamp": "2023-07-03T14:33:06+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/24dbb50f814adebef9dae0ca37c233ca05f08c1b"
        },
        "date": 1688363676133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1927779.120879121,
            "unit": "ns",
            "range": "± 211815.31552876878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3600012.5,
            "unit": "ns",
            "range": "± 268223.33751833317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2442277.659574468,
            "unit": "ns",
            "range": "± 216464.5931484792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6974515.217391305,
            "unit": "ns",
            "range": "± 604451.0152822777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73488.42105263157,
            "unit": "ns",
            "range": "± 14570.955248099048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10726170,
            "unit": "ns",
            "range": "± 739147.5369974781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27056355.737704918,
            "unit": "ns",
            "range": "± 1202635.5005465553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70266664,
            "unit": "ns",
            "range": "± 1817101.887823942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138962066.66666666,
            "unit": "ns",
            "range": "± 2153911.1702955184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275658303.3333333,
            "unit": "ns",
            "range": "± 4869615.307608522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6625226.792279412,
            "unit": "ns",
            "range": "± 134133.4983435009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2087565.234375,
            "unit": "ns",
            "range": "± 42157.4092770215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1571389.9739583333,
            "unit": "ns",
            "range": "± 21997.51206408275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3592591.69921875,
            "unit": "ns",
            "range": "± 41570.639953767844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1096561.1746651786,
            "unit": "ns",
            "range": "± 11444.95902818807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1047399.3619791666,
            "unit": "ns",
            "range": "± 14262.537751165964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4339343.181818182,
            "unit": "ns",
            "range": "± 229231.90977419613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4703380.412371134,
            "unit": "ns",
            "range": "± 312356.2848332465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5926633.333333333,
            "unit": "ns",
            "range": "± 357268.9287017979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5035797.826086956,
            "unit": "ns",
            "range": "± 391567.05514706013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8812761.956521738,
            "unit": "ns",
            "range": "± 737751.7258375948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351274.4680851064,
            "unit": "ns",
            "range": "± 33176.92855620758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355450.5263157895,
            "unit": "ns",
            "range": "± 32087.224453422274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333029.347826087,
            "unit": "ns",
            "range": "± 34344.37599094439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5467914.47368421,
            "unit": "ns",
            "range": "± 266097.6370702791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4811254.347826087,
            "unit": "ns",
            "range": "± 185195.96342675836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30205.555555555555,
            "unit": "ns",
            "range": "± 3389.7850885147723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140873.62637362638,
            "unit": "ns",
            "range": "± 14617.340046555326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138676.92307692306,
            "unit": "ns",
            "range": "± 17003.372717219485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149636.95652173914,
            "unit": "ns",
            "range": "± 16860.883382481756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10597.727272727272,
            "unit": "ns",
            "range": "± 2196.286169026965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28702.17391304348,
            "unit": "ns",
            "range": "± 5765.661485469493"
          }
        ]
      }
    ]
  }
}