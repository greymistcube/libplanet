window.BENCHMARK_DATA = {
  "lastUpdate": 1679988131597,
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
          "id": "49df5491dc9da878c83628f6979a3f784846f5e2",
          "message": "Changelog",
          "timestamp": "2023-03-28T16:04:30+09:00",
          "tree_id": "6cf6e83ec9a821dae0fca3fcc185a2f6d8aa66a3",
          "url": "https://github.com/greymistcube/libplanet/commit/49df5491dc9da878c83628f6979a3f784846f5e2"
        },
        "date": 1679988118753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139084.38372093023,
            "unit": "ns",
            "range": "± 13323.914728715612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 128431.09090909091,
            "unit": "ns",
            "range": "± 29019.66158929075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258178.193877551,
            "unit": "ns",
            "range": "± 47941.396210923456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222999.1489361702,
            "unit": "ns",
            "range": "± 24171.29026810301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3850347.111111111,
            "unit": "ns",
            "range": "± 263243.66212524683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10559026.31707317,
            "unit": "ns",
            "range": "± 378275.2877557189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23109.521276595744,
            "unit": "ns",
            "range": "± 4118.4525828230435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66108.9387755102,
            "unit": "ns",
            "range": "± 18982.619814096317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59489.230337078654,
            "unit": "ns",
            "range": "± 7261.804730862903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131094.82631578948,
            "unit": "ns",
            "range": "± 21415.9525495634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8048.695652173913,
            "unit": "ns",
            "range": "± 872.1210501614639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19421.440860215054,
            "unit": "ns",
            "range": "± 3052.616039393829"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5464854.733710106,
            "unit": "ns",
            "range": "± 427081.4012281591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7705605.893939394,
            "unit": "ns",
            "range": "± 1003680.7505582132"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30659570.295918368,
            "unit": "ns",
            "range": "± 2326673.4501358615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7091063.273195877,
            "unit": "ns",
            "range": "± 482123.8550270845"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32734461.67647059,
            "unit": "ns",
            "range": "± 1566787.1213276335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7341429.759375,
            "unit": "ns",
            "range": "± 225131.65350779422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080135.7826450893,
            "unit": "ns",
            "range": "± 59405.50567670411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354587.916015625,
            "unit": "ns",
            "range": "± 24109.986700343237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604737.5792590724,
            "unit": "ns",
            "range": "± 68193.73657213019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821759.3169921875,
            "unit": "ns",
            "range": "± 14545.809423766255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751685.8126723346,
            "unit": "ns",
            "range": "± 15050.976420014293"
          }
        ]
      }
    ]
  }
}