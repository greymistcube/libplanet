window.BENCHMARK_DATA = {
  "lastUpdate": 1690174485702,
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
        "date": 1690174458816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433610.101010101,
            "unit": "ns",
            "range": "± 127157.19862530235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2594554.5454545454,
            "unit": "ns",
            "range": "± 110087.94097209169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1805277.6595744682,
            "unit": "ns",
            "range": "± 113031.07233297877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4984906.8965517245,
            "unit": "ns",
            "range": "± 270481.6405208702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47095.65217391304,
            "unit": "ns",
            "range": "± 3221.251993427409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7331282.142857143,
            "unit": "ns",
            "range": "± 210278.33416084578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20160880,
            "unit": "ns",
            "range": "± 234339.1595834672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51824295.45454545,
            "unit": "ns",
            "range": "± 1236831.3176467067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100848814.70588236,
            "unit": "ns",
            "range": "± 2024162.4962380049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202973046.66666666,
            "unit": "ns",
            "range": "± 3767581.674319306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4925205.022321428,
            "unit": "ns",
            "range": "± 13379.093030048974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1591913.1417410714,
            "unit": "ns",
            "range": "± 7988.873112532428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1203863.984375,
            "unit": "ns",
            "range": "± 6740.407548106935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2693664.84375,
            "unit": "ns",
            "range": "± 5099.655361979415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856718.3072916666,
            "unit": "ns",
            "range": "± 3266.40247195077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780747.75390625,
            "unit": "ns",
            "range": "± 2210.141189185618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300923.076923077,
            "unit": "ns",
            "range": "± 87618.62499579554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3319470.909090909,
            "unit": "ns",
            "range": "± 138933.35955524287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4027300,
            "unit": "ns",
            "range": "± 110912.12437481005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3640870.8333333335,
            "unit": "ns",
            "range": "± 175126.62013807584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6097532.142857143,
            "unit": "ns",
            "range": "± 169960.25037151837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260194.73684210525,
            "unit": "ns",
            "range": "± 4907.8705140270495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247927.77777777778,
            "unit": "ns",
            "range": "± 10244.177668345514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221234.04255319148,
            "unit": "ns",
            "range": "± 8640.080429268979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4041892.8571428573,
            "unit": "ns",
            "range": "± 66530.58827204352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737400,
            "unit": "ns",
            "range": "± 98389.51925891294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19110.526315789473,
            "unit": "ns",
            "range": "± 1901.5936029244237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86406.3829787234,
            "unit": "ns",
            "range": "± 5834.027150946997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72522.95081967213,
            "unit": "ns",
            "range": "± 3272.837374645174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84182.05128205128,
            "unit": "ns",
            "range": "± 4625.22006748443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4878.350515463918,
            "unit": "ns",
            "range": "± 843.013790432343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17723.91304347826,
            "unit": "ns",
            "range": "± 1620.6340887129109"
          }
        ]
      }
    ]
  }
}