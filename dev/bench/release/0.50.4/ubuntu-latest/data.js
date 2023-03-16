window.BENCHMARK_DATA = {
  "lastUpdate": 1678932170185,
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
          "id": "60b245f9c0e189779cbc848e3b80f9961312f83d",
          "message": "Release 0.50.4",
          "timestamp": "2023-03-16T10:52:53+09:00",
          "tree_id": "57ef9e014cc1b48431b2c2f83edb7b48977a1b79",
          "url": "https://github.com/greymistcube/libplanet/commit/60b245f9c0e189779cbc848e3b80f9961312f83d"
        },
        "date": 1678932162417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90366.27368421052,
            "unit": "ns",
            "range": "± 7657.07956722197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195521.91025641025,
            "unit": "ns",
            "range": "± 10017.262883001831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170018.5,
            "unit": "ns",
            "range": "± 2924.4204896013157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3795890.3333333335,
            "unit": "ns",
            "range": "± 32615.984432848407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9676516.266666668,
            "unit": "ns",
            "range": "± 54002.67893945721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16746.739130434784,
            "unit": "ns",
            "range": "± 1513.2710430985435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46879.696202531646,
            "unit": "ns",
            "range": "± 2328.034927674534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44547.79347826087,
            "unit": "ns",
            "range": "± 2515.235892365309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95246.74468085106,
            "unit": "ns",
            "range": "± 14471.499246060683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5223.958333333333,
            "unit": "ns",
            "range": "± 687.1366663521995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15872.631578947368,
            "unit": "ns",
            "range": "± 1415.5250214059106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032191.582291666,
            "unit": "ns",
            "range": "± 30024.63445185241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1981916.3158854167,
            "unit": "ns",
            "range": "± 4592.751708035966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334687.280048077,
            "unit": "ns",
            "range": "± 559.7137753784021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552694.857872596,
            "unit": "ns",
            "range": "± 1053.085783694792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842674.3127790178,
            "unit": "ns",
            "range": "± 6968.3059887359905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737344.2407226562,
            "unit": "ns",
            "range": "± 494.9620522421069"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104642.61904761905,
            "unit": "ns",
            "range": "± 2450.7535672970157"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4462629.905729166,
            "unit": "ns",
            "range": "± 16308.09972781429"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6138314.866666666,
            "unit": "ns",
            "range": "± 53532.34661781159"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25520449.785714287,
            "unit": "ns",
            "range": "± 178165.6777920607"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6251267.866666666,
            "unit": "ns",
            "range": "± 114752.23588351849"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28742244.05,
            "unit": "ns",
            "range": "± 653307.1614706914"
          }
        ]
      }
    ]
  }
}