window.BENCHMARK_DATA = {
  "lastUpdate": 1708405685148,
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
          "id": "8d7011805c070fbcc6b5c5fc848f277f3350c9d5",
          "message": "Merge tag '4.0.5' into merge/4.0.5-to-main\n\nLibplanet 4.0.5",
          "timestamp": "2024-02-20T13:55:48+09:00",
          "tree_id": "582c9dc7cca98549a9bea3dad1243171b27a778e",
          "url": "https://github.com/greymistcube/libplanet/commit/8d7011805c070fbcc6b5c5fc848f277f3350c9d5"
        },
        "date": 1708405665259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971006.1224489796,
            "unit": "ns",
            "range": "± 121789.04934126372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1655182.6923076923,
            "unit": "ns",
            "range": "± 54210.00096268269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513671.875,
            "unit": "ns",
            "range": "± 130374.90047682532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6918400,
            "unit": "ns",
            "range": "± 177839.16657099657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35798.7012987013,
            "unit": "ns",
            "range": "± 1835.3612512967168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5235616.666666667,
            "unit": "ns",
            "range": "± 44119.95700429236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13450592.857142856,
            "unit": "ns",
            "range": "± 143398.21619041642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33773661.538461536,
            "unit": "ns",
            "range": "± 391426.6843621794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67764542.85714285,
            "unit": "ns",
            "range": "± 641547.7039811744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133690675,
            "unit": "ns",
            "range": "± 1955619.1394054955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3357828.1510416665,
            "unit": "ns",
            "range": "± 25843.893258768807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087550.0418526786,
            "unit": "ns",
            "range": "± 1588.0231602769334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749562.4399038461,
            "unit": "ns",
            "range": "± 1316.0894506112954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938059.3359375,
            "unit": "ns",
            "range": "± 6306.539163820455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614765.78125,
            "unit": "ns",
            "range": "± 1216.5290520909114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572385.3166852678,
            "unit": "ns",
            "range": "± 1108.9035798846005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151963.1578947366,
            "unit": "ns",
            "range": "± 47763.51711559213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321712.2448979593,
            "unit": "ns",
            "range": "± 91862.98590984353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2893837.5,
            "unit": "ns",
            "range": "± 55805.06398765856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2877040.5405405406,
            "unit": "ns",
            "range": "± 143910.2563947206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8030726.666666667,
            "unit": "ns",
            "range": "± 279607.7417968381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178610.60606060605,
            "unit": "ns",
            "range": "± 8405.458460710634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168264.2857142857,
            "unit": "ns",
            "range": "± 6360.200927970423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143487.1794871795,
            "unit": "ns",
            "range": "± 4919.252162204904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2904235.714285714,
            "unit": "ns",
            "range": "± 29040.756695557182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2570573.3333333335,
            "unit": "ns",
            "range": "± 35606.208661385106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13521.42857142857,
            "unit": "ns",
            "range": "± 2502.998202156766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57293.81443298969,
            "unit": "ns",
            "range": "± 5960.6315107438795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46641.666666666664,
            "unit": "ns",
            "range": "± 1852.1790885026546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63991.919191919194,
            "unit": "ns",
            "range": "± 15965.14492266095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2510.6382978723404,
            "unit": "ns",
            "range": "± 495.23928942110285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11887.894736842105,
            "unit": "ns",
            "range": "± 1970.861079086274"
          }
        ]
      }
    ]
  }
}