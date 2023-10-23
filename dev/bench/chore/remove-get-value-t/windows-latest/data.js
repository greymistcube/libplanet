window.BENCHMARK_DATA = {
  "lastUpdate": 1698035255371,
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
          "id": "cc8d01b4188659f912a2250585938d8eb7656120",
          "message": "Refactored Libplanet.Consensus",
          "timestamp": "2023-10-23T10:42:20+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/cc8d01b4188659f912a2250585938d8eb7656120"
        },
        "date": 1698026569499,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305412.121212121,
            "unit": "ns",
            "range": "± 95578.80205671863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2509610.909090909,
            "unit": "ns",
            "range": "± 105288.02062055914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1938201.3698630137,
            "unit": "ns",
            "range": "± 92569.55416987014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8903784.090909092,
            "unit": "ns",
            "range": "± 523335.7345035398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52481.05263157895,
            "unit": "ns",
            "range": "± 3794.405028258982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7439591.176470588,
            "unit": "ns",
            "range": "± 150784.26251943343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20837335.714285713,
            "unit": "ns",
            "range": "± 218073.13031374398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51537170.5882353,
            "unit": "ns",
            "range": "± 1014507.9692668177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104852973.33333333,
            "unit": "ns",
            "range": "± 1141392.2053268773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207333603.33333334,
            "unit": "ns",
            "range": "± 2105482.3590083197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4735776.953125,
            "unit": "ns",
            "range": "± 10915.773285564217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1427038.3072916667,
            "unit": "ns",
            "range": "± 5174.180547555198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079430.4296875,
            "unit": "ns",
            "range": "± 3623.8200045396416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625855.1897321427,
            "unit": "ns",
            "range": "± 8171.854323146038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846531.7661830357,
            "unit": "ns",
            "range": "± 2483.3166687043763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773402.3228236607,
            "unit": "ns",
            "range": "± 2077.8917458355627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297229.6296296297,
            "unit": "ns",
            "range": "± 136695.20236937224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3356202.380952381,
            "unit": "ns",
            "range": "± 122392.0798650999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4058319.0476190476,
            "unit": "ns",
            "range": "± 93683.00069408334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4013933.3333333335,
            "unit": "ns",
            "range": "± 158079.36511056358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10011502.631578946,
            "unit": "ns",
            "range": "± 340548.68563861016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253520.37037037036,
            "unit": "ns",
            "range": "± 8966.12870815387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243357.8947368421,
            "unit": "ns",
            "range": "± 6186.892490687301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223573.86363636365,
            "unit": "ns",
            "range": "± 12314.046687432678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110460,
            "unit": "ns",
            "range": "± 63737.66323207742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3765853.3333333335,
            "unit": "ns",
            "range": "± 62466.67530619446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20990.425531914894,
            "unit": "ns",
            "range": "± 1661.4586899065062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92298.9898989899,
            "unit": "ns",
            "range": "± 6317.573399903023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74042.26804123711,
            "unit": "ns",
            "range": "± 5630.216748557628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83349.47368421052,
            "unit": "ns",
            "range": "± 9086.357246879365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5378.125,
            "unit": "ns",
            "range": "± 814.759005376501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19460.21505376344,
            "unit": "ns",
            "range": "± 1541.889001316118"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "021aa437738f54832337f9d588906a63f390b7fa",
          "message": "Merge pull request #3457 from greymistcube/chore/remove-get-value-t\n\n🧹 Partial removal of `Bencodex.Types.Dictionary.GetValue<T>()` usage",
          "timestamp": "2023-10-23T11:29:16+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/021aa437738f54832337f9d588906a63f390b7fa"
        },
        "date": 1698035231079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1244229.292929293,
            "unit": "ns",
            "range": "± 108032.31777662104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2269889.7435897435,
            "unit": "ns",
            "range": "± 78728.20933229312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1781134.0206185568,
            "unit": "ns",
            "range": "± 120879.39658205296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7463638.888888889,
            "unit": "ns",
            "range": "± 247389.70272805012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44575,
            "unit": "ns",
            "range": "± 2068.3556846188803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6844300,
            "unit": "ns",
            "range": "± 41537.93446959057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17712843.333333332,
            "unit": "ns",
            "range": "± 110015.00200730203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45648566.666666664,
            "unit": "ns",
            "range": "± 201682.22765623385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91082666.66666667,
            "unit": "ns",
            "range": "± 723954.9153944667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181978800,
            "unit": "ns",
            "range": "± 884364.5373939414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4230696.145833333,
            "unit": "ns",
            "range": "± 14341.891895686354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448885.25390625,
            "unit": "ns",
            "range": "± 1714.6522021234077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995558.4765625,
            "unit": "ns",
            "range": "± 1762.1374649035154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523002.2395833335,
            "unit": "ns",
            "range": "± 3172.4702021802564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788091.484375,
            "unit": "ns",
            "range": "± 904.8271059812483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718322.05078125,
            "unit": "ns",
            "range": "± 1053.3104521500643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2955792.3076923075,
            "unit": "ns",
            "range": "± 26227.54472999908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3101473.3333333335,
            "unit": "ns",
            "range": "± 53464.614020686175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3877107.6923076925,
            "unit": "ns",
            "range": "± 98291.80199010261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3680478.125,
            "unit": "ns",
            "range": "± 109441.55528032951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9055883.720930232,
            "unit": "ns",
            "range": "± 230964.00042124948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237375.55555555556,
            "unit": "ns",
            "range": "± 8596.19777352849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222617.94871794872,
            "unit": "ns",
            "range": "± 6333.780437375446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195748.48484848486,
            "unit": "ns",
            "range": "± 6130.921689075449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3718916.6666666665,
            "unit": "ns",
            "range": "± 39047.78513321241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3389393.3333333335,
            "unit": "ns",
            "range": "± 42404.89302404797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17026.59574468085,
            "unit": "ns",
            "range": "± 1221.331507832623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75991.20879120879,
            "unit": "ns",
            "range": "± 4552.231402818924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63206.25,
            "unit": "ns",
            "range": "± 1019.4565545753613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65700.52631578948,
            "unit": "ns",
            "range": "± 6505.4784389808565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3864.1304347826085,
            "unit": "ns",
            "range": "± 304.75409713880106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15582.79569892473,
            "unit": "ns",
            "range": "± 1641.0908127320297"
          }
        ]
      }
    ]
  }
}