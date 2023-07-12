window.BENCHMARK_DATA = {
  "lastUpdate": 1689130346620,
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
          "id": "582920dbcb8729530fce1132e93d68c4532d0f87",
          "message": "Build fix",
          "timestamp": "2023-07-12T11:35:18+09:00",
          "tree_id": "a2613f4c31acfff261c2c7766338cbefcea4e992",
          "url": "https://github.com/greymistcube/libplanet/commit/582920dbcb8729530fce1132e93d68c4532d0f87"
        },
        "date": 1689130322899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440767.7083333333,
            "unit": "ns",
            "range": "± 100012.05242610742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729053.1914893617,
            "unit": "ns",
            "range": "± 105661.03278072113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2067737.5,
            "unit": "ns",
            "range": "± 44748.75575146585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4913820.512820513,
            "unit": "ns",
            "range": "± 171873.63653734743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48726.59574468085,
            "unit": "ns",
            "range": "± 3068.5773219941793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7871274.074074074,
            "unit": "ns",
            "range": "± 219242.05027705478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20648446.666666668,
            "unit": "ns",
            "range": "± 273866.05398225156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53052646.666666664,
            "unit": "ns",
            "range": "± 390168.14665816416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105264442.85714285,
            "unit": "ns",
            "range": "± 792620.0151438225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211227800,
            "unit": "ns",
            "range": "± 1065329.9997340417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4944033.705357143,
            "unit": "ns",
            "range": "± 14879.993861829449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567593.9322916667,
            "unit": "ns",
            "range": "± 3841.580921922784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1191913.9778645833,
            "unit": "ns",
            "range": "± 5024.811461742877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2700627.4274553573,
            "unit": "ns",
            "range": "± 4449.389812810338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850108.7193080357,
            "unit": "ns",
            "range": "± 3038.7081354203615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782336.40625,
            "unit": "ns",
            "range": "± 2263.556733330692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3439154.1666666665,
            "unit": "ns",
            "range": "± 73374.42973138392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3634667.5,
            "unit": "ns",
            "range": "± 119218.69881623393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4422020,
            "unit": "ns",
            "range": "± 75704.47429690948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3996048.1481481483,
            "unit": "ns",
            "range": "± 101394.63030225543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6496619.047619048,
            "unit": "ns",
            "range": "± 153718.3125689572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276705.0847457627,
            "unit": "ns",
            "range": "± 12253.182890211432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267776.4705882353,
            "unit": "ns",
            "range": "± 8525.223140189224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249816,
            "unit": "ns",
            "range": "± 16743.246610819155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4328828.571428572,
            "unit": "ns",
            "range": "± 29480.115294927153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826919.230769231,
            "unit": "ns",
            "range": "± 52368.26941026065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25613.26530612245,
            "unit": "ns",
            "range": "± 2756.347417058705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103071.71717171717,
            "unit": "ns",
            "range": "± 8160.282613203736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87533.67346938775,
            "unit": "ns",
            "range": "± 8032.754388597743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106332.98969072165,
            "unit": "ns",
            "range": "± 16573.238478854277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6597.979797979798,
            "unit": "ns",
            "range": "± 1250.4676511315636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20252.17391304348,
            "unit": "ns",
            "range": "± 1747.6186787583154"
          }
        ]
      }
    ]
  }
}