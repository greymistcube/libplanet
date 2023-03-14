window.BENCHMARK_DATA = {
  "lastUpdate": 1678787192009,
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
          "id": "25a63e7c6d355a1608e24904be5b0c639cd3d757",
          "message": "Prepare 0.50.4",
          "timestamp": "2023-03-14T18:27:26+09:00",
          "tree_id": "6df23b5e65ea251201fdd4b86139e1111bcb91ab",
          "url": "https://github.com/greymistcube/libplanet/commit/25a63e7c6d355a1608e24904be5b0c639cd3d757"
        },
        "date": 1678787170901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134807.72222222222,
            "unit": "ns",
            "range": "± 10663.570323562742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108684.42631578947,
            "unit": "ns",
            "range": "± 14605.724935749278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233378.86263736265,
            "unit": "ns",
            "range": "± 33079.22269425208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227876.1505376344,
            "unit": "ns",
            "range": "± 18037.422209869463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3846216.1636363636,
            "unit": "ns",
            "range": "± 161695.49576043693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10150112.206896551,
            "unit": "ns",
            "range": "± 295062.43309550843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21382.091836734693,
            "unit": "ns",
            "range": "± 4857.862299442528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56794.21276595745,
            "unit": "ns",
            "range": "± 11143.17429521762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53925.729166666664,
            "unit": "ns",
            "range": "± 6298.112393038955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121588.98936170213,
            "unit": "ns",
            "range": "± 19059.18523952452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6691.948979591837,
            "unit": "ns",
            "range": "± 1087.597400519836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19439.478723404256,
            "unit": "ns",
            "range": "± 2562.6135798745568"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5336560.441302083,
            "unit": "ns",
            "range": "± 267419.97252295417"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6198298.388888889,
            "unit": "ns",
            "range": "± 127388.47282098723"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26963609.933333334,
            "unit": "ns",
            "range": "± 787934.4156792421"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6730665.7558139535,
            "unit": "ns",
            "range": "± 248069.61326257297"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32341960.204545453,
            "unit": "ns",
            "range": "± 1769372.109011342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6796696.640964674,
            "unit": "ns",
            "range": "± 260556.9715193584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943334.51171875,
            "unit": "ns",
            "range": "± 22927.701957811114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299243.8585379464,
            "unit": "ns",
            "range": "± 14107.254221611327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677268.035714286,
            "unit": "ns",
            "range": "± 29197.269511099777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875133.5222516741,
            "unit": "ns",
            "range": "± 8757.248077356533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789136.0595005581,
            "unit": "ns",
            "range": "± 5307.139862581846"
          }
        ]
      }
    ]
  }
}