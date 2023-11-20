window.BENCHMARK_DATA = {
  "lastUpdate": 1700480768510,
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
          "id": "a773b1e3352c423c8b1d3e5a8458b2eb80511f05",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:35:00+09:00",
          "tree_id": "30cc4f94e623cf3b676e1211b9e1635f7d073bc6",
          "url": "https://github.com/greymistcube/libplanet/commit/a773b1e3352c423c8b1d3e5a8458b2eb80511f05"
        },
        "date": 1700480762069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5788968,
            "unit": "ns",
            "range": "± 24845.445841782013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15089604.4,
            "unit": "ns",
            "range": "± 55251.03890658657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37598821.461538464,
            "unit": "ns",
            "range": "± 168761.83114654777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77314626.88461539,
            "unit": "ns",
            "range": "± 446372.8064967179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155267825.85714287,
            "unit": "ns",
            "range": "± 906048.229566842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971768.1685393258,
            "unit": "ns",
            "range": "± 58309.33073804739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1884392.2719298245,
            "unit": "ns",
            "range": "± 72267.6596294778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384474.6170212766,
            "unit": "ns",
            "range": "± 104266.24202957556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5821435,
            "unit": "ns",
            "range": "± 381069.07867411233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2391179,
            "unit": "ns",
            "range": "± 78814.01650178005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2605919.423076923,
            "unit": "ns",
            "range": "± 107360.70064832778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3184889.1578947366,
            "unit": "ns",
            "range": "± 69347.87320319937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2983154.527777778,
            "unit": "ns",
            "range": "± 93767.52409336192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6531826.368421053,
            "unit": "ns",
            "range": "± 143628.33637096148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41285.645833333336,
            "unit": "ns",
            "range": "± 6300.024639850172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773070.30859375,
            "unit": "ns",
            "range": "± 9615.199865086932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1171429.2367788462,
            "unit": "ns",
            "range": "± 5094.09536889308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734567.6018880209,
            "unit": "ns",
            "range": "± 3153.7445537736144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917490.212076823,
            "unit": "ns",
            "range": "± 6561.423218670478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611998.1641322544,
            "unit": "ns",
            "range": "± 1351.8494293978003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569817.65859375,
            "unit": "ns",
            "range": "± 1229.4994241345355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203584.81632653062,
            "unit": "ns",
            "range": "± 8115.487972270135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195021.61016949153,
            "unit": "ns",
            "range": "± 8508.212517442415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168150.27142857143,
            "unit": "ns",
            "range": "± 5353.8516816000265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078583.1923076925,
            "unit": "ns",
            "range": "± 28191.77895056351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837214.785714286,
            "unit": "ns",
            "range": "± 18540.09659828196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12435.59375,
            "unit": "ns",
            "range": "± 1431.451067811776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68332.97368421052,
            "unit": "ns",
            "range": "± 5364.448988860584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60203.32258064516,
            "unit": "ns",
            "range": "± 6471.652672065625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62306.4375,
            "unit": "ns",
            "range": "± 9610.591141041385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3221.736263736264,
            "unit": "ns",
            "range": "± 533.3746407996049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13617.828282828283,
            "unit": "ns",
            "range": "± 3170.0397507338507"
          }
        ]
      }
    ]
  }
}