window.BENCHMARK_DATA = {
  "lastUpdate": 1692332750832,
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
          "id": "fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:03:47+09:00",
          "tree_id": "f8d4e920eefba0d306e903ac9034f3c4cc0c3174",
          "url": "https://github.com/greymistcube/libplanet/commit/fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c"
        },
        "date": 1692332731074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8890332.226415094,
            "unit": "ns",
            "range": "± 364206.40629676136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22047050.824561402,
            "unit": "ns",
            "range": "± 953043.9468088762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54868352.692307696,
            "unit": "ns",
            "range": "± 1441121.6784755415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103734643.94444445,
            "unit": "ns",
            "range": "± 2803160.267217758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216469728.7,
            "unit": "ns",
            "range": "± 7672573.090977409"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71658.03333333334,
            "unit": "ns",
            "range": "± 11579.880516402458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326279.0425531915,
            "unit": "ns",
            "range": "± 34074.983300957545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342903.4623655914,
            "unit": "ns",
            "range": "± 53708.43835642652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303015.6931818182,
            "unit": "ns",
            "range": "± 23721.107353761727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189003.1710526315,
            "unit": "ns",
            "range": "± 211920.53967493813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783282.617647059,
            "unit": "ns",
            "range": "± 121110.94662652761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20540.879120879123,
            "unit": "ns",
            "range": "± 3165.7916118516596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97415.95833333333,
            "unit": "ns",
            "range": "± 16962.58152765835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85436.47311827957,
            "unit": "ns",
            "range": "± 11029.33131580179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102542.19540229885,
            "unit": "ns",
            "range": "± 8153.223662409916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7424.387096774193,
            "unit": "ns",
            "range": "± 1398.879699525567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22650.733333333334,
            "unit": "ns",
            "range": "± 3009.7133128992023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577413.8333333333,
            "unit": "ns",
            "range": "± 212977.10858815655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2804907.75974026,
            "unit": "ns",
            "range": "± 143161.95029005682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394053.2021276597,
            "unit": "ns",
            "range": "± 390324.487131577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6069616.921052632,
            "unit": "ns",
            "range": "± 534636.5782983877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311893.6276595746,
            "unit": "ns",
            "range": "± 212470.96305143682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588799.8789473684,
            "unit": "ns",
            "range": "± 264898.5574297957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447197.0869565215,
            "unit": "ns",
            "range": "± 159846.4551324977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4072509.1717171716,
            "unit": "ns",
            "range": "± 269206.54117257794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7159947.595505618,
            "unit": "ns",
            "range": "± 384199.26285308937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5534413.51671875,
            "unit": "ns",
            "range": "± 103264.89329197811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803885.0491898148,
            "unit": "ns",
            "range": "± 74825.22508108217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244439.7674005681,
            "unit": "ns",
            "range": "± 45361.560801558095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3468927.78109375,
            "unit": "ns",
            "range": "± 238772.34004812417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924261.8094482422,
            "unit": "ns",
            "range": "± 22483.31269119653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890729.8336774553,
            "unit": "ns",
            "range": "± 29100.08489501252"
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
          "id": "fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:03:47+09:00",
          "tree_id": "f8d4e920eefba0d306e903ac9034f3c4cc0c3174",
          "url": "https://github.com/greymistcube/libplanet/commit/fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c"
        },
        "date": 1692332731074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8890332.226415094,
            "unit": "ns",
            "range": "± 364206.40629676136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22047050.824561402,
            "unit": "ns",
            "range": "± 953043.9468088762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54868352.692307696,
            "unit": "ns",
            "range": "± 1441121.6784755415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103734643.94444445,
            "unit": "ns",
            "range": "± 2803160.267217758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216469728.7,
            "unit": "ns",
            "range": "± 7672573.090977409"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71658.03333333334,
            "unit": "ns",
            "range": "± 11579.880516402458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326279.0425531915,
            "unit": "ns",
            "range": "± 34074.983300957545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342903.4623655914,
            "unit": "ns",
            "range": "± 53708.43835642652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303015.6931818182,
            "unit": "ns",
            "range": "± 23721.107353761727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189003.1710526315,
            "unit": "ns",
            "range": "± 211920.53967493813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783282.617647059,
            "unit": "ns",
            "range": "± 121110.94662652761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20540.879120879123,
            "unit": "ns",
            "range": "± 3165.7916118516596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97415.95833333333,
            "unit": "ns",
            "range": "± 16962.58152765835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85436.47311827957,
            "unit": "ns",
            "range": "± 11029.33131580179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102542.19540229885,
            "unit": "ns",
            "range": "± 8153.223662409916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7424.387096774193,
            "unit": "ns",
            "range": "± 1398.879699525567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22650.733333333334,
            "unit": "ns",
            "range": "± 3009.7133128992023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577413.8333333333,
            "unit": "ns",
            "range": "± 212977.10858815655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2804907.75974026,
            "unit": "ns",
            "range": "± 143161.95029005682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394053.2021276597,
            "unit": "ns",
            "range": "± 390324.487131577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6069616.921052632,
            "unit": "ns",
            "range": "± 534636.5782983877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311893.6276595746,
            "unit": "ns",
            "range": "± 212470.96305143682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588799.8789473684,
            "unit": "ns",
            "range": "± 264898.5574297957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447197.0869565215,
            "unit": "ns",
            "range": "± 159846.4551324977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4072509.1717171716,
            "unit": "ns",
            "range": "± 269206.54117257794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7159947.595505618,
            "unit": "ns",
            "range": "± 384199.26285308937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5534413.51671875,
            "unit": "ns",
            "range": "± 103264.89329197811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803885.0491898148,
            "unit": "ns",
            "range": "± 74825.22508108217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244439.7674005681,
            "unit": "ns",
            "range": "± 45361.560801558095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3468927.78109375,
            "unit": "ns",
            "range": "± 238772.34004812417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924261.8094482422,
            "unit": "ns",
            "range": "± 22483.31269119653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890729.8336774553,
            "unit": "ns",
            "range": "± 29100.08489501252"
          }
        ]
      }
    ]
  }
}