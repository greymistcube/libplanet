window.BENCHMARK_DATA = {
  "lastUpdate": 1701156439491,
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
          "id": "7c4d1cff60e49dcfaf20f5cde3ca660998a9fede",
          "message": "Update TxInvoice specification",
          "timestamp": "2023-11-28T15:43:22+09:00",
          "tree_id": "135093997f2cdf1d6426d6599a5f96dca0a7c2e9",
          "url": "https://github.com/greymistcube/libplanet/commit/7c4d1cff60e49dcfaf20f5cde3ca660998a9fede"
        },
        "date": 1701155014399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8794093.59375,
            "unit": "ns",
            "range": "± 270249.5249581763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21734994.282352943,
            "unit": "ns",
            "range": "± 1168023.8838379425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55017594.872340426,
            "unit": "ns",
            "range": "± 3566279.646045635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106210401.89285715,
            "unit": "ns",
            "range": "± 2955949.5463830275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221781649.5,
            "unit": "ns",
            "range": "± 5486868.1449628025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74281.37096774194,
            "unit": "ns",
            "range": "± 10234.594546275292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334856.8510638298,
            "unit": "ns",
            "range": "± 37908.01973196549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332297.7842105263,
            "unit": "ns",
            "range": "± 51176.16688431791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319393.56666666665,
            "unit": "ns",
            "range": "± 33355.731517009655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256522.9655172415,
            "unit": "ns",
            "range": "± 233046.7478850566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970696.0215053763,
            "unit": "ns",
            "range": "± 267045.53789088916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18736.706521739132,
            "unit": "ns",
            "range": "± 2406.522430734301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96212.59183673469,
            "unit": "ns",
            "range": "± 18434.982973094473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98689.62631578947,
            "unit": "ns",
            "range": "± 15260.254387217732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120724.21875,
            "unit": "ns",
            "range": "± 22659.89611241254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8133.344444444445,
            "unit": "ns",
            "range": "± 1702.6981045038924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22933.82967032967,
            "unit": "ns",
            "range": "± 4074.154123673186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506960.744680851,
            "unit": "ns",
            "range": "± 177177.0045379828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806801.316666667,
            "unit": "ns",
            "range": "± 123858.47247242759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393569.34,
            "unit": "ns",
            "range": "± 342436.4026020669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8754997.822580645,
            "unit": "ns",
            "range": "± 263870.9864733632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316678.1276595746,
            "unit": "ns",
            "range": "± 200671.75280531304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579775.6052631577,
            "unit": "ns",
            "range": "± 304825.09426308627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4559509.659793815,
            "unit": "ns",
            "range": "± 267604.6325717322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4299218.603092783,
            "unit": "ns",
            "range": "± 318574.45595468354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19767788.783505153,
            "unit": "ns",
            "range": "± 4295048.762435972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6295795.674252718,
            "unit": "ns",
            "range": "± 242246.98117757528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2146598.2880284926,
            "unit": "ns",
            "range": "± 68045.22802907677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187396.009375,
            "unit": "ns",
            "range": "± 27183.983588666615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197671.2675978537,
            "unit": "ns",
            "range": "± 193476.75039002165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 917655.7877929688,
            "unit": "ns",
            "range": "± 20687.786763104363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784223.5466657366,
            "unit": "ns",
            "range": "± 22067.57949726606"
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
          "id": "25cc930a3b730f4cc40eb3c1a97bd4969909cbb1",
          "message": "Changelog",
          "timestamp": "2023-11-28T15:50:14+09:00",
          "tree_id": "1bab440f9769e7163c0f4ee7709407be9007550b",
          "url": "https://github.com/greymistcube/libplanet/commit/25cc930a3b730f4cc40eb3c1a97bd4969909cbb1"
        },
        "date": 1701155279200,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8075338.75,
            "unit": "ns",
            "range": "± 185211.86679824622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21659361.36956522,
            "unit": "ns",
            "range": "± 1184428.51760471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52333670.48421053,
            "unit": "ns",
            "range": "± 3304911.974231637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105007896.01612903,
            "unit": "ns",
            "range": "± 4722271.8278948385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214316307.91935483,
            "unit": "ns",
            "range": "± 9728280.261014966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41180.333333333336,
            "unit": "ns",
            "range": "± 8886.232912590776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250226.0164835165,
            "unit": "ns",
            "range": "± 19973.666877701547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251518.89583333334,
            "unit": "ns",
            "range": "± 41167.65890496266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235636.59574468085,
            "unit": "ns",
            "range": "± 32043.32643127203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4118039.4278350514,
            "unit": "ns",
            "range": "± 266038.9646335604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3806164.649484536,
            "unit": "ns",
            "range": "± 266339.8464605434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20386.02688172043,
            "unit": "ns",
            "range": "± 3495.911303071552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71133.25510204081,
            "unit": "ns",
            "range": "± 17105.30918910473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79542.88383838384,
            "unit": "ns",
            "range": "± 21759.86924982621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96749.18556701031,
            "unit": "ns",
            "range": "± 17224.963410900844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6896.801075268817,
            "unit": "ns",
            "range": "± 1478.6053268929552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17069.30612244898,
            "unit": "ns",
            "range": "± 4285.7391798491535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077488.8163265307,
            "unit": "ns",
            "range": "± 98862.63965082463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2177070.4285714286,
            "unit": "ns",
            "range": "± 86412.5759971217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512213.0625,
            "unit": "ns",
            "range": "± 107032.823325303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6633526.782608695,
            "unit": "ns",
            "range": "± 448330.0212777628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3184490.946236559,
            "unit": "ns",
            "range": "± 217338.33457174784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3258966.2083333335,
            "unit": "ns",
            "range": "± 187954.2182732647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3986354.3695652173,
            "unit": "ns",
            "range": "± 223723.52101727572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3599901.4,
            "unit": "ns",
            "range": "± 215813.70510754947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14011735.956989247,
            "unit": "ns",
            "range": "± 2369243.844038838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5330236.649394132,
            "unit": "ns",
            "range": "± 602122.1371564681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499065.3033475655,
            "unit": "ns",
            "range": "± 79327.18105026324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 975446.0079487645,
            "unit": "ns",
            "range": "± 36002.543151777754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2251373.6657858454,
            "unit": "ns",
            "range": "± 72087.86124381771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 650064.1044224331,
            "unit": "ns",
            "range": "± 11321.106010397929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578774.2990180121,
            "unit": "ns",
            "range": "± 19091.1431229668"
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
          "id": "2787f845eec8c31300efa636b56b8a26920658e8",
          "message": "Changelog",
          "timestamp": "2023-11-28T16:07:25+09:00",
          "tree_id": "5b7275b547672067b98b8eb12ed055926dda5dad",
          "url": "https://github.com/greymistcube/libplanet/commit/2787f845eec8c31300efa636b56b8a26920658e8"
        },
        "date": 1701156418072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8585558.857142856,
            "unit": "ns",
            "range": "± 113579.18371888068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22364223.56,
            "unit": "ns",
            "range": "± 1128402.6999524261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56129330.63636363,
            "unit": "ns",
            "range": "± 2094709.5811203793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107895390.85454546,
            "unit": "ns",
            "range": "± 4583200.294543381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234722577.15789473,
            "unit": "ns",
            "range": "± 13389300.111903295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73685.39010989011,
            "unit": "ns",
            "range": "± 6775.652323578312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381900.4791666667,
            "unit": "ns",
            "range": "± 66789.73451692758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343159.92391304346,
            "unit": "ns",
            "range": "± 57120.31336857159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 353356.24468085106,
            "unit": "ns",
            "range": "± 57320.797695844005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4397126.166666667,
            "unit": "ns",
            "range": "± 387559.5601466524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4050568.9696969697,
            "unit": "ns",
            "range": "± 332733.21712785785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17203.522727272728,
            "unit": "ns",
            "range": "± 1199.546542458237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90499.33673469388,
            "unit": "ns",
            "range": "± 14551.708805096649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91912.53608247422,
            "unit": "ns",
            "range": "± 15142.506919720678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114101.06382978724,
            "unit": "ns",
            "range": "± 22192.84933990764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5591.768421052631,
            "unit": "ns",
            "range": "± 1067.1356416667777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17508.617021276597,
            "unit": "ns",
            "range": "± 2015.4484871706206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1482626.2777777778,
            "unit": "ns",
            "range": "± 149284.42831288604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2749172.0208333335,
            "unit": "ns",
            "range": "± 106317.08027875652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2263984.3541666665,
            "unit": "ns",
            "range": "± 237711.8710301005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8554097.342105264,
            "unit": "ns",
            "range": "± 188703.89750472477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3367535.432989691,
            "unit": "ns",
            "range": "± 359443.1548782235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3485803.84375,
            "unit": "ns",
            "range": "± 159926.2486620569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4647995.426315789,
            "unit": "ns",
            "range": "± 386150.17032546824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4573279.195876288,
            "unit": "ns",
            "range": "± 475008.95931264723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18583356.81460674,
            "unit": "ns",
            "range": "± 2482237.5227495153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6203539.656808035,
            "unit": "ns",
            "range": "± 331515.25739207893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968145.1791449653,
            "unit": "ns",
            "range": "± 41767.99559989386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159269.3550347222,
            "unit": "ns",
            "range": "± 21990.76494484549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2899123.208984375,
            "unit": "ns",
            "range": "± 47380.231680858225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933296.4939707881,
            "unit": "ns",
            "range": "± 22942.08135657777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767293.4003208706,
            "unit": "ns",
            "range": "± 8681.247273221716"
          }
        ]
      }
    ]
  }
}