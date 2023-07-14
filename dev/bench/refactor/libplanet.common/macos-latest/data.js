window.BENCHMARK_DATA = {
  "lastUpdate": 1689297758289,
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
          "id": "ba9389cb4ed6646f6d800bba871490927b0b4eae",
          "message": "Proofreading",
          "timestamp": "2023-07-13T22:14:15+09:00",
          "tree_id": "69062a506833fe2795b227937298e6db95638349",
          "url": "https://github.com/greymistcube/libplanet/commit/ba9389cb4ed6646f6d800bba871490927b0b4eae"
        },
        "date": 1689255260609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8043475.069767442,
            "unit": "ns",
            "range": "± 437119.34640996787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19624432.34375,
            "unit": "ns",
            "range": "± 600385.5157720831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49528864.64285714,
            "unit": "ns",
            "range": "± 1792795.0907671032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94801398.9375,
            "unit": "ns",
            "range": "± 1830501.9563080857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195759092.625,
            "unit": "ns",
            "range": "± 3844762.2872174187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55143.073033707864,
            "unit": "ns",
            "range": "± 5188.496749557972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309287.64666666667,
            "unit": "ns",
            "range": "± 15549.234912692333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298288.91549295775,
            "unit": "ns",
            "range": "± 14317.114238108259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277795.93956043955,
            "unit": "ns",
            "range": "± 20444.299839215597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099132.023809524,
            "unit": "ns",
            "range": "± 95613.95281475347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3694462.85,
            "unit": "ns",
            "range": "± 83785.00506231473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17395.96629213483,
            "unit": "ns",
            "range": "± 1859.8348255682063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85428.84042553192,
            "unit": "ns",
            "range": "± 7764.227744180968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81624.70786516854,
            "unit": "ns",
            "range": "± 6957.271116677872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99920.29347826086,
            "unit": "ns",
            "range": "± 12298.56832777393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5366.723404255319,
            "unit": "ns",
            "range": "± 605.8752383061941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16798.82222222222,
            "unit": "ns",
            "range": "± 1743.070065877102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576498.8578947368,
            "unit": "ns",
            "range": "± 152243.4020694462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2924325.8636363638,
            "unit": "ns",
            "range": "± 171675.3155867793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087764.5625,
            "unit": "ns",
            "range": "± 177394.45705781833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910608.09375,
            "unit": "ns",
            "range": "± 269160.83276430104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3157290.0319148935,
            "unit": "ns",
            "range": "± 182340.00009014842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3362956.1789473686,
            "unit": "ns",
            "range": "± 325551.81837762526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286520.25,
            "unit": "ns",
            "range": "± 170229.05915748392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868671.084210526,
            "unit": "ns",
            "range": "± 302890.26993811526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7305292.646341464,
            "unit": "ns",
            "range": "± 386831.05619902397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6370752.991071428,
            "unit": "ns",
            "range": "± 63850.913837276355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873322.045703125,
            "unit": "ns",
            "range": "± 17472.99342257426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256434.6490885417,
            "unit": "ns",
            "range": "± 14461.83387494047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2458552.1591145834,
            "unit": "ns",
            "range": "± 30539.71794005266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808892.3177734375,
            "unit": "ns",
            "range": "± 9766.676581053554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787391.4725260417,
            "unit": "ns",
            "range": "± 6718.135026169873"
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
          "id": "1844030a8e097ad9d115e9e04a10bbceeaeb4c0c",
          "message": "Proofreading",
          "timestamp": "2023-07-14T10:00:49+09:00",
          "tree_id": "a76e0f82e18aae27326d5c517b3130d496eaa31a",
          "url": "https://github.com/greymistcube/libplanet/commit/1844030a8e097ad9d115e9e04a10bbceeaeb4c0c"
        },
        "date": 1689297743396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8347692.0625,
            "unit": "ns",
            "range": "± 323793.354479655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19762954.58,
            "unit": "ns",
            "range": "± 513362.4941046304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61625587.82631579,
            "unit": "ns",
            "range": "± 13775599.041545564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100198221.77118644,
            "unit": "ns",
            "range": "± 4405080.784524972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214687025.29166666,
            "unit": "ns",
            "range": "± 8051173.444281785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69097.9052631579,
            "unit": "ns",
            "range": "± 13690.416537089532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321740.43617021275,
            "unit": "ns",
            "range": "± 27723.258742574075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337653.3,
            "unit": "ns",
            "range": "± 50134.315658910054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338560.8617021277,
            "unit": "ns",
            "range": "± 48212.83161504708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4742759.36,
            "unit": "ns",
            "range": "± 380400.5430414801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4201777.547368421,
            "unit": "ns",
            "range": "± 342582.02401918307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20497.719101123595,
            "unit": "ns",
            "range": "± 3416.256932896415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117511.67368421053,
            "unit": "ns",
            "range": "± 18196.284242179023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114889.1129032258,
            "unit": "ns",
            "range": "± 21543.012525013193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116548.5,
            "unit": "ns",
            "range": "± 16135.716675325382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6671.1122448979595,
            "unit": "ns",
            "range": "± 1567.7262600487543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18539.93956043956,
            "unit": "ns",
            "range": "± 3119.163549588936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623785.1855670102,
            "unit": "ns",
            "range": "± 162924.66651999846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096646.288888889,
            "unit": "ns",
            "range": "± 233201.59933236742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196204.4479166665,
            "unit": "ns",
            "range": "± 209282.73017814517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6464194.3367346935,
            "unit": "ns",
            "range": "± 606681.2417898582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479554.6333333333,
            "unit": "ns",
            "range": "± 62360.863427389486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3635359.5631578946,
            "unit": "ns",
            "range": "± 353446.3116461272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460104.9605263155,
            "unit": "ns",
            "range": "± 226367.4925795628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3912452.634920635,
            "unit": "ns",
            "range": "± 177674.15779338978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7479847.890243903,
            "unit": "ns",
            "range": "± 395979.4827374425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7258474.4475054825,
            "unit": "ns",
            "range": "± 315486.3660679547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2038820.658203125,
            "unit": "ns",
            "range": "± 27806.67710742407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447118.7204326922,
            "unit": "ns",
            "range": "± 67379.56739396798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644315.1796875,
            "unit": "ns",
            "range": "± 41161.24620955447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909332.7171282087,
            "unit": "ns",
            "range": "± 38683.836320009046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726888.4741536458,
            "unit": "ns",
            "range": "± 5345.974601646587"
          }
        ]
      }
    ]
  }
}