window.BENCHMARK_DATA = {
  "lastUpdate": 1680059467577,
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
          "id": "7669de38b6d6e1af3fa179eae36a5abf91f81fa4",
          "message": "Introduce state cache",
          "timestamp": "2023-03-29T11:51:25+09:00",
          "tree_id": "f1c8e9d1a35ba2d4258366bbd2a7bc2347b3cd52",
          "url": "https://github.com/greymistcube/libplanet/commit/7669de38b6d6e1af3fa179eae36a5abf91f81fa4"
        },
        "date": 1680059454949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127196.67204301075,
            "unit": "ns",
            "range": "± 11898.365200662665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108660.47368421052,
            "unit": "ns",
            "range": "± 15814.460058885581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238039.7659574468,
            "unit": "ns",
            "range": "± 32570.88003024534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247660.7032967033,
            "unit": "ns",
            "range": "± 32023.809113947467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256936.3,
            "unit": "ns",
            "range": "± 449684.22794073075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11277922.48924731,
            "unit": "ns",
            "range": "± 741914.8299364418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21562.43010752688,
            "unit": "ns",
            "range": "± 3481.568397812817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66538.69565217392,
            "unit": "ns",
            "range": "± 13173.185382250784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61876.28409090909,
            "unit": "ns",
            "range": "± 4403.308990723904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140386.65656565657,
            "unit": "ns",
            "range": "± 27034.529778981643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8288.032608695652,
            "unit": "ns",
            "range": "± 960.1439275245929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22528.602272727272,
            "unit": "ns",
            "range": "± 3351.3075113151094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6028723.629964192,
            "unit": "ns",
            "range": "± 735006.2989354426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6592885.18,
            "unit": "ns",
            "range": "± 332178.83924066357"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31640003.755102042,
            "unit": "ns",
            "range": "± 2555834.8889472983"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8085396.670212766,
            "unit": "ns",
            "range": "± 747817.2068287177"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35442541.91919192,
            "unit": "ns",
            "range": "± 2645115.5983439097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8056127.134923986,
            "unit": "ns",
            "range": "± 268739.72112861526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2249963.7143554688,
            "unit": "ns",
            "range": "± 69533.10200911916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307913.6512920673,
            "unit": "ns",
            "range": "± 14981.547638534244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3049283.124798647,
            "unit": "ns",
            "range": "± 223240.3428329294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832946.3278245192,
            "unit": "ns",
            "range": "± 13632.061194586842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737867.5348074777,
            "unit": "ns",
            "range": "± 10793.305789680659"
          }
        ]
      }
    ]
  }
}