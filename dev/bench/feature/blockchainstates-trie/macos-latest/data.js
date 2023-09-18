window.BENCHMARK_DATA = {
  "lastUpdate": 1695014238856,
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
      }
    ]
  }
}