window.BENCHMARK_DATA = {
  "lastUpdate": 1695014562660,
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
          "id": "7ced969e48fee56a6402ce06c54b0eb58149b5ac",
          "message": "Added new GetAccountState() interface method",
          "timestamp": "2023-09-18T14:00:07+09:00",
          "tree_id": "2e86c9bae5ec44070e4137b9708d6343b89d33a3",
          "url": "https://github.com/greymistcube/libplanet/commit/7ced969e48fee56a6402ce06c54b0eb58149b5ac"
        },
        "date": 1695014221830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8609823.65,
            "unit": "ns",
            "range": "± 341516.13474859606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20531003.64516129,
            "unit": "ns",
            "range": "± 928932.2141571939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52565125.31395349,
            "unit": "ns",
            "range": "± 2806720.0575846834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101139768.24074075,
            "unit": "ns",
            "range": "± 2693025.623401401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208190055.975,
            "unit": "ns",
            "range": "± 6724135.230865083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63226.37234042553,
            "unit": "ns",
            "range": "± 13837.446418957014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299291.39130434784,
            "unit": "ns",
            "range": "± 23376.387599858637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293603.8369565217,
            "unit": "ns",
            "range": "± 23521.565324246494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292323,
            "unit": "ns",
            "range": "± 21379.025754867147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4049956.275862069,
            "unit": "ns",
            "range": "± 116062.42894694234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750825.6486486485,
            "unit": "ns",
            "range": "± 120528.5201122807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21338.36842105263,
            "unit": "ns",
            "range": "± 3857.394358263408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94474.25,
            "unit": "ns",
            "range": "± 16140.906270127853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91793.12631578947,
            "unit": "ns",
            "range": "± 11691.711022009244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87032.93814432989,
            "unit": "ns",
            "range": "± 12385.993952187851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4789.117021276596,
            "unit": "ns",
            "range": "± 713.6162616942473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16486.511363636364,
            "unit": "ns",
            "range": "± 1514.9674780798098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545536.6464646466,
            "unit": "ns",
            "range": "± 187101.58185858818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774423.5308641978,
            "unit": "ns",
            "range": "± 144883.8223346629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1890787.383838384,
            "unit": "ns",
            "range": "± 118151.69219717187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5223917.266666667,
            "unit": "ns",
            "range": "± 263564.9165184687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290483.9484536084,
            "unit": "ns",
            "range": "± 218346.39442134008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547054.7989690723,
            "unit": "ns",
            "range": "± 265624.63581626664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4566153.870967742,
            "unit": "ns",
            "range": "± 272898.83255514567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3980020.103896104,
            "unit": "ns",
            "range": "± 203663.6658425113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6690510.153846154,
            "unit": "ns",
            "range": "± 294356.19246794516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5651979.256770833,
            "unit": "ns",
            "range": "± 71643.86878902931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1769479.490234375,
            "unit": "ns",
            "range": "± 25041.373291177406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1007639.2001953125,
            "unit": "ns",
            "range": "± 8079.414288984137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2813921.3845214844,
            "unit": "ns",
            "range": "± 52132.954567421824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823834.2140625,
            "unit": "ns",
            "range": "± 11932.391618223395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752128.3821331522,
            "unit": "ns",
            "range": "± 18546.650823759872"
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
          "id": "636e8b74c40d5882914f9a84f165e979dfc2bf4e",
          "message": "Changelog",
          "timestamp": "2023-09-18T14:02:28+09:00",
          "tree_id": "3a9bcb958abbe8360093220916205e839b7b733d",
          "url": "https://github.com/greymistcube/libplanet/commit/636e8b74c40d5882914f9a84f165e979dfc2bf4e"
        },
        "date": 1695014548661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9308728.48,
            "unit": "ns",
            "range": "± 828317.0849113337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21918560.4,
            "unit": "ns",
            "range": "± 961366.7782045589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52026072.61904762,
            "unit": "ns",
            "range": "± 1786288.2281193088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103809470.3125,
            "unit": "ns",
            "range": "± 1902917.5999463112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231479672.41666666,
            "unit": "ns",
            "range": "± 5959117.668356083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82784.30898876404,
            "unit": "ns",
            "range": "± 11722.115982655496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358230.88823529414,
            "unit": "ns",
            "range": "± 43221.491049039956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372695.9893617021,
            "unit": "ns",
            "range": "± 45856.42597398333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308285.475,
            "unit": "ns",
            "range": "± 16005.782261321549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4253328.117647059,
            "unit": "ns",
            "range": "± 81763.94380920782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879888.433333333,
            "unit": "ns",
            "range": "± 65853.98594885795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21389.574468085106,
            "unit": "ns",
            "range": "± 3519.2037657590263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79550.18390804598,
            "unit": "ns",
            "range": "± 7281.006893582041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78306.03225806452,
            "unit": "ns",
            "range": "± 13332.246112381888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112579.8440860215,
            "unit": "ns",
            "range": "± 14903.667906063625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6550.195652173913,
            "unit": "ns",
            "range": "± 1839.6046949893998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23984.90425531915,
            "unit": "ns",
            "range": "± 4345.435915668991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713623.5,
            "unit": "ns",
            "range": "± 223839.56983094633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3103551.048780488,
            "unit": "ns",
            "range": "± 152224.45146671828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2243962.355670103,
            "unit": "ns",
            "range": "± 250538.65919803633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5772868.157142857,
            "unit": "ns",
            "range": "± 264331.6512006332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355390.010638298,
            "unit": "ns",
            "range": "± 205699.05418074902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3986372.26,
            "unit": "ns",
            "range": "± 585296.0928362034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4781619.075757576,
            "unit": "ns",
            "range": "± 516852.02756441897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4155402.15,
            "unit": "ns",
            "range": "± 474420.6927761155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8959255.673913043,
            "unit": "ns",
            "range": "± 2427107.397946939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940522.76860119,
            "unit": "ns",
            "range": "± 270370.5333030718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1705911.5008370536,
            "unit": "ns",
            "range": "± 22645.78261079562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1051175.6020507812,
            "unit": "ns",
            "range": "± 32709.63774870846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678756.8427734375,
            "unit": "ns",
            "range": "± 234522.7711173317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809106.71015625,
            "unit": "ns",
            "range": "± 13674.313891476335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862009.4180836397,
            "unit": "ns",
            "range": "± 17223.736561949216"
          }
        ]
      }
    ]
  }
}