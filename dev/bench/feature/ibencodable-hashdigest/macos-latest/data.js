window.BENCHMARK_DATA = {
  "lastUpdate": 1697439750088,
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
      }
    ]
  }
}