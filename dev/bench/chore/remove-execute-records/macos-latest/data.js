window.BENCHMARK_DATA = {
  "lastUpdate": 1702978014166,
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
          "id": "bcbaa618ef1e369234e7393f00ac95fb7f8fd794",
          "message": "Remove ExecuteRecord",
          "timestamp": "2023-12-19T18:09:45+09:00",
          "tree_id": "aef18ca1a5f3a2a0a1e649adcc6097661f51a3c9",
          "url": "https://github.com/greymistcube/libplanet/commit/bcbaa618ef1e369234e7393f00ac95fb7f8fd794"
        },
        "date": 1702978000763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7639376.576923077,
            "unit": "ns",
            "range": "± 63984.755352950466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19014667.52631579,
            "unit": "ns",
            "range": "± 409340.4479292632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47618271.69565217,
            "unit": "ns",
            "range": "± 1171561.678159907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94676649.78571428,
            "unit": "ns",
            "range": "± 1224874.3668555235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195077835.84615386,
            "unit": "ns",
            "range": "± 3186854.1524603027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44577.09782608696,
            "unit": "ns",
            "range": "± 7317.4570675460645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231725.7411764706,
            "unit": "ns",
            "range": "± 17190.823420784527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220624.05263157896,
            "unit": "ns",
            "range": "± 13617.933971279808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218554.43157894738,
            "unit": "ns",
            "range": "± 16092.386996587187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930827.5,
            "unit": "ns",
            "range": "± 139125.54002420133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3543423.71875,
            "unit": "ns",
            "range": "± 101199.6234041617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17500.697916666668,
            "unit": "ns",
            "range": "± 3812.3398799709175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77833.88043478261,
            "unit": "ns",
            "range": "± 12026.761200986202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86579.90425531915,
            "unit": "ns",
            "range": "± 18091.081420073366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95004.68556701031,
            "unit": "ns",
            "range": "± 21037.198487307494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6364.242268041237,
            "unit": "ns",
            "range": "± 1807.5561268276851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17933.477777777778,
            "unit": "ns",
            "range": "± 3641.5147545171085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1755520.0102040817,
            "unit": "ns",
            "range": "± 471116.6203452942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3261949.440860215,
            "unit": "ns",
            "range": "± 741891.1942444422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1889536.9432989692,
            "unit": "ns",
            "range": "± 346285.4847295127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7412863.195402299,
            "unit": "ns",
            "range": "± 685054.1399574442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2933136.203125,
            "unit": "ns",
            "range": "± 134946.20990357245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3023661.064516129,
            "unit": "ns",
            "range": "± 87282.166263957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3721901.7641509436,
            "unit": "ns",
            "range": "± 153387.29014530894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3514018.5,
            "unit": "ns",
            "range": "± 125574.14376413338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13458491.229166666,
            "unit": "ns",
            "range": "± 2241664.51677215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4729252.883131377,
            "unit": "ns",
            "range": "± 274401.67173324164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1344623.8428385416,
            "unit": "ns",
            "range": "± 10555.912902615013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 887830.4031901042,
            "unit": "ns",
            "range": "± 6261.964180549102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2048753.609375,
            "unit": "ns",
            "range": "± 26139.01052612547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645319.7302594866,
            "unit": "ns",
            "range": "± 4616.3007980456105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588487.4236328125,
            "unit": "ns",
            "range": "± 4246.260798059466"
          }
        ]
      }
    ]
  }
}