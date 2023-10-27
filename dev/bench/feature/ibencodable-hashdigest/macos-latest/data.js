window.BENCHMARK_DATA = {
  "lastUpdate": 1698398917506,
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
          "id": "a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8",
          "message": "Update BlockMarshaler",
          "timestamp": "2023-10-16T15:44:03+09:00",
          "tree_id": "d14c1c94d85b5c5970b2ae3a4f0821014b4b9f30",
          "url": "https://github.com/greymistcube/libplanet/commit/a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8"
        },
        "date": 1697439710968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8381151.866666666,
            "unit": "ns",
            "range": "± 129925.85098039941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20324060.136363637,
            "unit": "ns",
            "range": "± 482746.9748421695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49782604.083333336,
            "unit": "ns",
            "range": "± 682395.5090823207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94844751.52941176,
            "unit": "ns",
            "range": "± 1480300.1186209724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202464465.92857143,
            "unit": "ns",
            "range": "± 3414340.1835687864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61531.67346938775,
            "unit": "ns",
            "range": "± 11648.360948171057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287141.73626373627,
            "unit": "ns",
            "range": "± 16079.983481773692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278700.8777777778,
            "unit": "ns",
            "range": "± 16061.466347506535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264914.0520833333,
            "unit": "ns",
            "range": "± 19131.66678592812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4019701.44,
            "unit": "ns",
            "range": "± 89451.21643391256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3543189,
            "unit": "ns",
            "range": "± 103880.46197134141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17333.433333333334,
            "unit": "ns",
            "range": "± 1970.7896156081108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91203.9175257732,
            "unit": "ns",
            "range": "± 14071.02823673382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75498.11578947368,
            "unit": "ns",
            "range": "± 9627.304478876908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87354.31578947368,
            "unit": "ns",
            "range": "± 10300.183490684489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4532.146067415731,
            "unit": "ns",
            "range": "± 633.2437515494364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17266.236559139787,
            "unit": "ns",
            "range": "± 2029.113848124077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437215.4333333333,
            "unit": "ns",
            "range": "± 138367.7199194559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800667,
            "unit": "ns",
            "range": "± 182918.55868100285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2298795.285714286,
            "unit": "ns",
            "range": "± 216930.5043123163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10719032.777777778,
            "unit": "ns",
            "range": "± 793777.2855492276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155552.2285714285,
            "unit": "ns",
            "range": "± 151663.22850068615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3277802.464285714,
            "unit": "ns",
            "range": "± 137390.8205309966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229752.287878788,
            "unit": "ns",
            "range": "± 130471.9003152014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4115799.845238095,
            "unit": "ns",
            "range": "± 219058.28406726333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15109277.161290323,
            "unit": "ns",
            "range": "± 1645045.7632519798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5322737.5578125,
            "unit": "ns",
            "range": "± 79556.41418595565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1722245.3296875,
            "unit": "ns",
            "range": "± 30723.01930922093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 999759.0766601562,
            "unit": "ns",
            "range": "± 22240.762398207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624662.0446428573,
            "unit": "ns",
            "range": "± 46505.276460085006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878579.1942749023,
            "unit": "ns",
            "range": "± 15961.436872913035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699856.0795200893,
            "unit": "ns",
            "range": "± 6503.972393368332"
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
          "id": "e99d10425766e8169b89c82f8eacd4068790a6e4",
          "message": "Update BlockMarshaler",
          "timestamp": "2023-10-16T15:47:03+09:00",
          "tree_id": "d14c1c94d85b5c5970b2ae3a4f0821014b4b9f30",
          "url": "https://github.com/greymistcube/libplanet/commit/e99d10425766e8169b89c82f8eacd4068790a6e4"
        },
        "date": 1697439805373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8290303.142857143,
            "unit": "ns",
            "range": "± 234375.67945117742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18808308.730769232,
            "unit": "ns",
            "range": "± 193193.2236868717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47314105.5,
            "unit": "ns",
            "range": "± 870965.3181277274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93571422.3076923,
            "unit": "ns",
            "range": "± 1005836.879261691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198397493.33333334,
            "unit": "ns",
            "range": "± 4940543.7453646185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67420.17346938775,
            "unit": "ns",
            "range": "± 12716.490885813568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285653.8125,
            "unit": "ns",
            "range": "± 13712.104799325663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278739.6111111111,
            "unit": "ns",
            "range": "± 16569.996028895963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264671.03846153844,
            "unit": "ns",
            "range": "± 13672.815028266961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3882124.4166666665,
            "unit": "ns",
            "range": "± 99712.09891914982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3566454.652173913,
            "unit": "ns",
            "range": "± 80264.04465750906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18416.934782608696,
            "unit": "ns",
            "range": "± 2688.908509734374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84885.3163265306,
            "unit": "ns",
            "range": "± 8518.22279465138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89622.90404040404,
            "unit": "ns",
            "range": "± 14632.862857503796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89703.96842105263,
            "unit": "ns",
            "range": "± 10089.361266977603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5773.822916666667,
            "unit": "ns",
            "range": "± 858.4320712455834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16845.286516853932,
            "unit": "ns",
            "range": "± 1612.8541293444403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470819.6666666667,
            "unit": "ns",
            "range": "± 117825.5910743249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2745862.048192771,
            "unit": "ns",
            "range": "± 145093.05913278498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2387181.3958333335,
            "unit": "ns",
            "range": "± 318399.17140369175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10558655.305555556,
            "unit": "ns",
            "range": "± 518150.47377426655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179040.5,
            "unit": "ns",
            "range": "± 64204.52134585227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3289544.2470588237,
            "unit": "ns",
            "range": "± 171886.67127007633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4311193.954545454,
            "unit": "ns",
            "range": "± 105217.48035943604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4142633.0597014925,
            "unit": "ns",
            "range": "± 194259.2711917137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14763917.639784947,
            "unit": "ns",
            "range": "± 1652890.1577996027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5530446.6953125,
            "unit": "ns",
            "range": "± 83885.94320089239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1778034.3604910714,
            "unit": "ns",
            "range": "± 20639.46836876304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 981334.6150438262,
            "unit": "ns",
            "range": "± 35172.80519903598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2362879.2313701925,
            "unit": "ns",
            "range": "± 36269.2321984936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 746925.9809895833,
            "unit": "ns",
            "range": "± 5110.808997889493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725867.6412527902,
            "unit": "ns",
            "range": "± 12220.218167702596"
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
          "id": "ec7294c92f68061a430e926be763a5d8849a072c",
          "message": "Changelog",
          "timestamp": "2023-10-16T15:48:49+09:00",
          "tree_id": "4c8d748cf66201b05c9b598685fdca789e0370cd",
          "url": "https://github.com/greymistcube/libplanet/commit/ec7294c92f68061a430e926be763a5d8849a072c"
        },
        "date": 1697439905061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9018255.714285715,
            "unit": "ns",
            "range": "± 823836.9978675169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22437175.671875,
            "unit": "ns",
            "range": "± 1024705.2808687892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58550619.54395604,
            "unit": "ns",
            "range": "± 6574477.839666459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116013337.5,
            "unit": "ns",
            "range": "± 3085451.376267566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222187042.45918366,
            "unit": "ns",
            "range": "± 15053587.838187592"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51151.53125,
            "unit": "ns",
            "range": "± 11529.984463360259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242327.80927835053,
            "unit": "ns",
            "range": "± 30194.2060299381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243934.5606060606,
            "unit": "ns",
            "range": "± 28533.46457601276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260257.5202020202,
            "unit": "ns",
            "range": "± 24281.163037815448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211000.469387755,
            "unit": "ns",
            "range": "± 279703.9752149778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4399357.625,
            "unit": "ns",
            "range": "± 82043.4992134254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16019.603092783505,
            "unit": "ns",
            "range": "± 5389.845304452423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82226.36363636363,
            "unit": "ns",
            "range": "± 19216.254109187576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88718.30526315789,
            "unit": "ns",
            "range": "± 11326.802950818657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75586.94086021505,
            "unit": "ns",
            "range": "± 15833.241910656068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5725.785714285715,
            "unit": "ns",
            "range": "± 2090.624260590379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16320.19387755102,
            "unit": "ns",
            "range": "± 5257.2174452030895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1084319.3979591837,
            "unit": "ns",
            "range": "± 88915.43536538683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2296415.0918367347,
            "unit": "ns",
            "range": "± 158376.9496681977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1662393.2142857143,
            "unit": "ns",
            "range": "± 167514.91624959328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7676626.67721519,
            "unit": "ns",
            "range": "± 518797.6071153217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436660.901234568,
            "unit": "ns",
            "range": "± 174201.9921545535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3555033.285714286,
            "unit": "ns",
            "range": "± 212812.25248102233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4069334.68,
            "unit": "ns",
            "range": "± 163541.62370338128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3762304.515789474,
            "unit": "ns",
            "range": "± 258525.83952536536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13255474.193181818,
            "unit": "ns",
            "range": "± 1570904.5838676332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4877113.656169459,
            "unit": "ns",
            "range": "± 515190.3014777016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526774.1395931605,
            "unit": "ns",
            "range": "± 62649.22905358696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 992876.9456104343,
            "unit": "ns",
            "range": "± 43997.8754286891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2273830.3217773438,
            "unit": "ns",
            "range": "± 89625.42568748936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645530.8150344122,
            "unit": "ns",
            "range": "± 14974.602679602329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569783.2755998884,
            "unit": "ns",
            "range": "± 5884.357266064066"
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
          "id": "5a4765db0b62ea33c25f392748bb8c3902f72b5e",
          "message": "Changelog",
          "timestamp": "2023-10-27T17:54:38+09:00",
          "tree_id": "799d61c289394b4e5373b9245ed6c7422a69339d",
          "url": "https://github.com/greymistcube/libplanet/commit/5a4765db0b62ea33c25f392748bb8c3902f72b5e"
        },
        "date": 1698398898238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12378653.054347826,
            "unit": "ns",
            "range": "± 1954693.2792065851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29494295.222222224,
            "unit": "ns",
            "range": "± 2375087.0376716666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73243505.37912089,
            "unit": "ns",
            "range": "± 5470401.9373254385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138652295.9347826,
            "unit": "ns",
            "range": "± 15022420.926645007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 314341104.3787879,
            "unit": "ns",
            "range": "± 29527278.365469236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93228.52525252526,
            "unit": "ns",
            "range": "± 30363.34556374405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339767.9024390244,
            "unit": "ns",
            "range": "± 37500.68264682683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329651.5632183908,
            "unit": "ns",
            "range": "± 28939.61072836553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 422694.67346938775,
            "unit": "ns",
            "range": "± 116807.734673003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5894178.543478261,
            "unit": "ns",
            "range": "± 468689.84969741205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5625861.466666667,
            "unit": "ns",
            "range": "± 439993.55378392007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31265.614583333332,
            "unit": "ns",
            "range": "± 7410.701895686564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112155.01052631579,
            "unit": "ns",
            "range": "± 17511.860938873437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113713.97777777778,
            "unit": "ns",
            "range": "± 17170.181055616355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112482.25806451614,
            "unit": "ns",
            "range": "± 20434.895385900043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8724.145161290322,
            "unit": "ns",
            "range": "± 1561.9389541956946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27671.5,
            "unit": "ns",
            "range": "± 3601.9570521984783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2533560.7473118277,
            "unit": "ns",
            "range": "± 769315.4105301738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5593979.153846154,
            "unit": "ns",
            "range": "± 2103584.6749964952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4029555.7795698927,
            "unit": "ns",
            "range": "± 954290.9506053647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20789634.362637363,
            "unit": "ns",
            "range": "± 5098081.768901841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5101148.489583333,
            "unit": "ns",
            "range": "± 1040871.1041475132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4589080.018072289,
            "unit": "ns",
            "range": "± 478616.37462566374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5215958.488888889,
            "unit": "ns",
            "range": "± 332933.41752731224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5102988.090909091,
            "unit": "ns",
            "range": "± 388350.23919015314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16590833.005263157,
            "unit": "ns",
            "range": "± 2509461.125064184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7305780.947916667,
            "unit": "ns",
            "range": "± 99315.15111321857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2681175.5051800273,
            "unit": "ns",
            "range": "± 234141.51762377904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336318.4847196692,
            "unit": "ns",
            "range": "± 110924.63720465683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2915183.6673046877,
            "unit": "ns",
            "range": "± 687061.0564994606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 753997.8482164885,
            "unit": "ns",
            "range": "± 54877.0430784898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 683884.3913856908,
            "unit": "ns",
            "range": "± 55350.11093342135"
          }
        ]
      }
    ]
  }
}