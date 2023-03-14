window.BENCHMARK_DATA = {
  "lastUpdate": 1678784573520,
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
          "id": "c34cc82e18265600663ca1a3145961e639934c5b",
          "message": "Merge tag '0.48.1' into port/0.48.1-to-0.49.3\n\nLibplanet 0.48.1",
          "timestamp": "2023-03-14T17:42:43+09:00",
          "tree_id": "730b09276955c28f464a1ee14c8717eaf443750e",
          "url": "https://github.com/greymistcube/libplanet/commit/c34cc82e18265600663ca1a3145961e639934c5b"
        },
        "date": 1678784548227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126701.06382978724,
            "unit": "ns",
            "range": "± 9056.878152368492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5773673.958333333,
            "unit": "ns",
            "range": "± 77094.34208315735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838472.7388822115,
            "unit": "ns",
            "range": "± 12897.826499205587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366569.62890625,
            "unit": "ns",
            "range": "± 3317.5438260218148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3132629.987980769,
            "unit": "ns",
            "range": "± 31911.215501340528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977886.8001302084,
            "unit": "ns",
            "range": "± 2143.53599171014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906708.1092247596,
            "unit": "ns",
            "range": "± 3979.0362316307765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5639248.216711956,
            "unit": "ns",
            "range": "± 342861.6385546769"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6701334.736842105,
            "unit": "ns",
            "range": "± 670599.9758502101"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31318668.96551724,
            "unit": "ns",
            "range": "± 1361104.275779883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7451975.531914894,
            "unit": "ns",
            "range": "± 496978.53303548344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33744387.5,
            "unit": "ns",
            "range": "± 516483.2670732583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119234.0425531915,
            "unit": "ns",
            "range": "± 10318.284774435226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232357.4712643678,
            "unit": "ns",
            "range": "± 15364.975515792692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225347.8260869565,
            "unit": "ns",
            "range": "± 10845.636269346143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4363806.666666667,
            "unit": "ns",
            "range": "± 81640.24276112387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11023630.76923077,
            "unit": "ns",
            "range": "± 92093.64242095637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28931.720430107525,
            "unit": "ns",
            "range": "± 2624.878723349989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65741.75824175825,
            "unit": "ns",
            "range": "± 4527.350609451795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53607.291666666664,
            "unit": "ns",
            "range": "± 4572.405673204301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122479.34782608696,
            "unit": "ns",
            "range": "± 15449.396574463684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8684.04255319149,
            "unit": "ns",
            "range": "± 819.0347310357929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26585.567010309278,
            "unit": "ns",
            "range": "± 2528.6685268932233"
          }
        ]
      }
    ]
  }
}