window.BENCHMARK_DATA = {
  "lastUpdate": 1690174301394,
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
          "id": "06f06701a3e1a3a46d88e2bb6e22b13f82989cf0",
          "message": "Update code for new ActionEvaluator API",
          "timestamp": "2023-07-24T13:37:58+09:00",
          "tree_id": "8d1e0a5db96001a2ddebc349198542b96434be45",
          "url": "https://github.com/greymistcube/libplanet/commit/06f06701a3e1a3a46d88e2bb6e22b13f82989cf0"
        },
        "date": 1690174293237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292182.1612903226,
            "unit": "ns",
            "range": "± 8773.472577783456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272835.3888888889,
            "unit": "ns",
            "range": "± 9377.295674482419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249840.2258064516,
            "unit": "ns",
            "range": "± 7545.215560029536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4369337.466666667,
            "unit": "ns",
            "range": "± 17752.928647194552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3930098.6428571427,
            "unit": "ns",
            "range": "± 21614.724349590746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21472.770833333332,
            "unit": "ns",
            "range": "± 1423.1900304313892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92821.2688172043,
            "unit": "ns",
            "range": "± 6035.868018948827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75711.46511627907,
            "unit": "ns",
            "range": "± 2769.6800343725213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94288.35714285714,
            "unit": "ns",
            "range": "± 11480.536984324974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5289.541666666667,
            "unit": "ns",
            "range": "± 619.0901969259605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20060.574468085106,
            "unit": "ns",
            "range": "± 1482.0361428802867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440337.8484848484,
            "unit": "ns",
            "range": "± 114924.0582002372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686705.153846154,
            "unit": "ns",
            "range": "± 84021.04600181355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1830082.1547619049,
            "unit": "ns",
            "range": "± 94480.23257121409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4983479.216216216,
            "unit": "ns",
            "range": "± 166977.87767514712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6377178.783052885,
            "unit": "ns",
            "range": "± 15189.616683155391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017796.6864583334,
            "unit": "ns",
            "range": "± 1503.8084760478855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360922.6244791667,
            "unit": "ns",
            "range": "± 1022.7315456187847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650769.0167410714,
            "unit": "ns",
            "range": "± 2584.694261570214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811235.7362630208,
            "unit": "ns",
            "range": "± 571.0013277704878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741854.6470052083,
            "unit": "ns",
            "range": "± 1341.74175933734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370693.6666666665,
            "unit": "ns",
            "range": "± 40657.19511382714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586079.2,
            "unit": "ns",
            "range": "± 30076.12413574215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333024.785714285,
            "unit": "ns",
            "range": "± 50279.078614620266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3991395.904761905,
            "unit": "ns",
            "range": "± 94773.50281218099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6548922.757575758,
            "unit": "ns",
            "range": "± 202535.15593240695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7967344.733333333,
            "unit": "ns",
            "range": "± 74826.17997014019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20082441.14285714,
            "unit": "ns",
            "range": "± 56437.59113032206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51216714.35714286,
            "unit": "ns",
            "range": "± 179845.45043821423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102151064.21428572,
            "unit": "ns",
            "range": "± 179376.48369847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202450052.2857143,
            "unit": "ns",
            "range": "± 301671.0738078373"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48059.49425287356,
            "unit": "ns",
            "range": "± 2613.8990918120558"
          }
        ]
      }
    ]
  }
}