window.BENCHMARK_DATA = {
  "lastUpdate": 1706249495749,
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
          "id": "b9b3fa41f1a1b9b093d7fcb6025c36ddfb3ad1da",
          "message": "Prepare 3.9.7",
          "timestamp": "2024-01-26T14:58:26+09:00",
          "tree_id": "f8eca58fb710468ba83443f054ca5b1b04049647",
          "url": "https://github.com/greymistcube/libplanet/commit/b9b3fa41f1a1b9b093d7fcb6025c36ddfb3ad1da"
        },
        "date": 1706249480824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7738956.222222222,
            "unit": "ns",
            "range": "± 162898.45065112176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19101984,
            "unit": "ns",
            "range": "± 477492.89552592015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48270640.66,
            "unit": "ns",
            "range": "± 1286195.9234118676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95354683.625,
            "unit": "ns",
            "range": "± 1793763.8035746652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194061502.83333334,
            "unit": "ns",
            "range": "± 1310964.1921741997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37142.63736263736,
            "unit": "ns",
            "range": "± 6090.568025902352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221338.7258064516,
            "unit": "ns",
            "range": "± 14016.995354343047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217602.56382978722,
            "unit": "ns",
            "range": "± 13926.487068959761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202547.1530612245,
            "unit": "ns",
            "range": "± 19378.666573504284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3744682.153846154,
            "unit": "ns",
            "range": "± 47870.64619688869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3486559.8571428573,
            "unit": "ns",
            "range": "± 57929.97698794793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13572.115789473684,
            "unit": "ns",
            "range": "± 2104.229655692785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64839.395833333336,
            "unit": "ns",
            "range": "± 10668.025767615523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68849.82291666667,
            "unit": "ns",
            "range": "± 9985.629112294899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71227.76530612246,
            "unit": "ns",
            "range": "± 14865.601425723571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3560.5833333333335,
            "unit": "ns",
            "range": "± 807.8915725408058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13132.755319148937,
            "unit": "ns",
            "range": "± 1604.9081954528167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030177.8247422681,
            "unit": "ns",
            "range": "± 83384.58409732311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2197060.6811594204,
            "unit": "ns",
            "range": "± 104001.84004954415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1483298,
            "unit": "ns",
            "range": "± 84459.45655744236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6848608.273972603,
            "unit": "ns",
            "range": "± 341079.15869174467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896343.6,
            "unit": "ns",
            "range": "± 75584.57797615419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3020473.0714285714,
            "unit": "ns",
            "range": "± 53131.70581672026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3584300.5,
            "unit": "ns",
            "range": "± 108941.56197460485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3487930.478021978,
            "unit": "ns",
            "range": "± 194781.2605815946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13370529.65,
            "unit": "ns",
            "range": "± 2018103.9571969649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4392173.4765625,
            "unit": "ns",
            "range": "± 20190.176588123417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1366586.6506510417,
            "unit": "ns",
            "range": "± 13141.08108183915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890668.2608072917,
            "unit": "ns",
            "range": "± 3153.516031045965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2007068.919642857,
            "unit": "ns",
            "range": "± 18984.925353620038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629992.8272181919,
            "unit": "ns",
            "range": "± 2251.552063702083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573198.31796875,
            "unit": "ns",
            "range": "± 2110.974533279618"
          }
        ]
      }
    ]
  }
}