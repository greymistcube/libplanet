window.BENCHMARK_DATA = {
  "lastUpdate": 1705553470422,
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
          "id": "ce54ebd07727d7c940c818cce9178253c4a8cb82",
          "message": "Cleanup and some documentation",
          "timestamp": "2024-01-18T13:40:17+09:00",
          "tree_id": "8c09cc15cfb0c6eaf03e0404c0f42df2356f5158",
          "url": "https://github.com/greymistcube/libplanet/commit/ce54ebd07727d7c940c818cce9178253c4a8cb82"
        },
        "date": 1705553464269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701548.925,
            "unit": "ns",
            "range": "± 54561.38474487273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207111.3844401042,
            "unit": "ns",
            "range": "± 3613.888567871092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771957.414438101,
            "unit": "ns",
            "range": "± 5229.527171119124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937138.2779017857,
            "unit": "ns",
            "range": "± 6500.672684205975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636134.6613581731,
            "unit": "ns",
            "range": "± 1724.9012101288615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580067.94921875,
            "unit": "ns",
            "range": "± 899.6862903692397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390196.1153846155,
            "unit": "ns",
            "range": "± 39478.0435526655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522988.1666666665,
            "unit": "ns",
            "range": "± 75764.51965304831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153657.2580645164,
            "unit": "ns",
            "range": "± 92766.70586331705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2952082.193548387,
            "unit": "ns",
            "range": "± 129239.02916724913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6888687.428571428,
            "unit": "ns",
            "range": "± 152392.9539242453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40929.5625,
            "unit": "ns",
            "range": "± 5542.597961648823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193829.58536585365,
            "unit": "ns",
            "range": "± 6861.776945426052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192881.26,
            "unit": "ns",
            "range": "± 7312.519479297272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171552.42,
            "unit": "ns",
            "range": "± 4521.2119496141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3136826.5,
            "unit": "ns",
            "range": "± 33590.51020324469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869457.8333333335,
            "unit": "ns",
            "range": "± 36490.02855314756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15327.366666666667,
            "unit": "ns",
            "range": "± 2203.7986112848707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58724.46666666667,
            "unit": "ns",
            "range": "± 3163.2529985102788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60461.97802197802,
            "unit": "ns",
            "range": "± 3921.1492900764633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62586.80612244898,
            "unit": "ns",
            "range": "± 10527.700090182476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2797.9883720930234,
            "unit": "ns",
            "range": "± 332.47579280960827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13117.345360824742,
            "unit": "ns",
            "range": "± 1921.732607680101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5675810.346153846,
            "unit": "ns",
            "range": "± 23750.085480008118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14314461.7,
            "unit": "ns",
            "range": "± 78837.22531737691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36857121.5,
            "unit": "ns",
            "range": "± 327136.7299792939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74930049.75,
            "unit": "ns",
            "range": "± 441093.4905649255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152007340.08333334,
            "unit": "ns",
            "range": "± 362413.41618891497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945792.7173913043,
            "unit": "ns",
            "range": "± 74573.06259382506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814569.8936170214,
            "unit": "ns",
            "range": "± 70326.70241257988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377625.994736842,
            "unit": "ns",
            "range": "± 97147.17128117257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6042434,
            "unit": "ns",
            "range": "± 387531.4988536347"
          }
        ]
      }
    ]
  }
}