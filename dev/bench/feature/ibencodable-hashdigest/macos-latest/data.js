window.BENCHMARK_DATA = {
  "lastUpdate": 1697439834663,
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
      }
    ]
  }
}