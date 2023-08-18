window.BENCHMARK_DATA = {
  "lastUpdate": 1692332886080,
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
          "id": "b327162b0138de3d8d4152ec0c253021c659619a",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:06:35+09:00",
          "tree_id": "1dff3457ca856391c36cd0caec5a2543921a250f",
          "url": "https://github.com/greymistcube/libplanet/commit/b327162b0138de3d8d4152ec0c253021c659619a"
        },
        "date": 1692332871494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 15217530.43814433,
            "unit": "ns",
            "range": "± 4553811.079492785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21488570.620481927,
            "unit": "ns",
            "range": "± 1901946.7920330064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54418671.89772727,
            "unit": "ns",
            "range": "± 6265776.636481946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118865161.58888888,
            "unit": "ns",
            "range": "± 9723605.434493024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238470462.70689654,
            "unit": "ns",
            "range": "± 6362088.671277064"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78950.7,
            "unit": "ns",
            "range": "± 10997.454656767608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312056.8369565217,
            "unit": "ns",
            "range": "± 28814.414541869613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306098.63684210525,
            "unit": "ns",
            "range": "± 35327.02393702352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308203.69587628864,
            "unit": "ns",
            "range": "± 31102.51572744263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4033740.722222222,
            "unit": "ns",
            "range": "± 151954.2692781568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825548.46875,
            "unit": "ns",
            "range": "± 118228.47527248695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18695.69540229885,
            "unit": "ns",
            "range": "± 2586.9503048915753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105112.66161616161,
            "unit": "ns",
            "range": "± 23295.619496564494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88409.51515151515,
            "unit": "ns",
            "range": "± 18624.786703264952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96642.03608247422,
            "unit": "ns",
            "range": "± 17592.011805232945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6030.190721649485,
            "unit": "ns",
            "range": "± 1344.6177303793504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19692.924731182797,
            "unit": "ns",
            "range": "± 3615.9742725751244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617424.9270833333,
            "unit": "ns",
            "range": "± 187248.1959076745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3049156.505263158,
            "unit": "ns",
            "range": "± 236800.32036519956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109993.0674157306,
            "unit": "ns",
            "range": "± 279306.11768260144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5983100.0227272725,
            "unit": "ns",
            "range": "± 681741.1899432854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594734.0217391304,
            "unit": "ns",
            "range": "± 404350.7806791594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3813032.25,
            "unit": "ns",
            "range": "± 413912.37218231586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4690138.617021277,
            "unit": "ns",
            "range": "± 338741.8729810452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3943578.4891304346,
            "unit": "ns",
            "range": "± 254822.89512097425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7172517.3655913975,
            "unit": "ns",
            "range": "± 439022.44602106785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132991.666270381,
            "unit": "ns",
            "range": "± 236099.58939035685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1696355.5258091518,
            "unit": "ns",
            "range": "± 23270.125776692465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1015487.5443209135,
            "unit": "ns",
            "range": "± 7987.146153722672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563100.318489583,
            "unit": "ns",
            "range": "± 44202.74690354067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799345.0911458334,
            "unit": "ns",
            "range": "± 5518.979112114949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842376.15859375,
            "unit": "ns",
            "range": "± 11415.88817591698"
          }
        ]
      }
    ]
  }
}