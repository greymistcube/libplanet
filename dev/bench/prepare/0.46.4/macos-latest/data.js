window.BENCHMARK_DATA = {
  "lastUpdate": 1678780878642,
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
          "id": "fe20a94d0194a3b54224a695e15347d7a3a86ecc",
          "message": "Prepare 0.46.4",
          "timestamp": "2023-03-14T16:48:59+09:00",
          "tree_id": "d4e7792b6442bf1cbf3b9a276a46e7b3aeb4333d",
          "url": "https://github.com/greymistcube/libplanet/commit/fe20a94d0194a3b54224a695e15347d7a3a86ecc"
        },
        "date": 1678780863619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112736.44680851063,
            "unit": "ns",
            "range": "± 4262.9830584805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101708.11224489796,
            "unit": "ns",
            "range": "± 13958.594919306592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221988.64516129033,
            "unit": "ns",
            "range": "± 24389.718121731206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194905.73076923078,
            "unit": "ns",
            "range": "± 7623.652848183929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3435459.7608695654,
            "unit": "ns",
            "range": "± 77701.09411667801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9644583.752688171,
            "unit": "ns",
            "range": "± 592331.7940701679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19973.957894736843,
            "unit": "ns",
            "range": "± 3140.6390456767817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55023.933333333334,
            "unit": "ns",
            "range": "± 8769.859581210938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43388.956043956045,
            "unit": "ns",
            "range": "± 6701.4649657321415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101745.31578947368,
            "unit": "ns",
            "range": "± 15213.617255787629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5128.7411764705885,
            "unit": "ns",
            "range": "± 586.1128233853059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20588.685393258427,
            "unit": "ns",
            "range": "± 3756.9632006192114"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4623682.988785283,
            "unit": "ns",
            "range": "± 137179.03894862192"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5507218.021505376,
            "unit": "ns",
            "range": "± 411710.8129710755"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24626274.5,
            "unit": "ns",
            "range": "± 631331.5763735787"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6679112.55952381,
            "unit": "ns",
            "range": "± 638649.6644452328"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30186165.179104477,
            "unit": "ns",
            "range": "± 1355151.567760114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6069436.333705357,
            "unit": "ns",
            "range": "± 40330.85463941633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846573.1733774038,
            "unit": "ns",
            "range": "± 13036.1199936007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246623.3826822916,
            "unit": "ns",
            "range": "± 13054.119962176612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2428038.31328125,
            "unit": "ns",
            "range": "± 28418.764437923553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779727.63359375,
            "unit": "ns",
            "range": "± 13462.117723091744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767197.4208333333,
            "unit": "ns",
            "range": "± 9130.95720431082"
          }
        ]
      }
    ]
  }
}