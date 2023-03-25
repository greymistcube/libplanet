window.BENCHMARK_DATA = {
  "lastUpdate": 1679704747816,
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
          "id": "424c67432ee2b0bb6df56928dda99c30da81ed5e",
          "message": "Removed call to lower level GetStates() with empty addresses",
          "timestamp": "2023-03-25T09:19:21+09:00",
          "tree_id": "244138a8f31b2b5fc77932bfb2137ac88923d21b",
          "url": "https://github.com/greymistcube/libplanet/commit/424c67432ee2b0bb6df56928dda99c30da81ed5e"
        },
        "date": 1679704721911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134102.73333333334,
            "unit": "ns",
            "range": "± 9336.713674966937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132110.71578947367,
            "unit": "ns",
            "range": "± 15617.377667380626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242346.125,
            "unit": "ns",
            "range": "± 28961.24767439688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226185.125,
            "unit": "ns",
            "range": "± 15457.907922029726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3668026.3125,
            "unit": "ns",
            "range": "± 69241.2119619703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10328369.142857144,
            "unit": "ns",
            "range": "± 106388.03393445883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20813.968085106382,
            "unit": "ns",
            "range": "± 3071.3117839514925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56810.282608695656,
            "unit": "ns",
            "range": "± 7429.511718867743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59180.61111111111,
            "unit": "ns",
            "range": "± 6727.005545558685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122164.14948453609,
            "unit": "ns",
            "range": "± 18337.88079418373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8191.711340206186,
            "unit": "ns",
            "range": "± 1110.8033688015596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21310.59574468085,
            "unit": "ns",
            "range": "± 2724.5103587682433"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5518887.5556216035,
            "unit": "ns",
            "range": "± 465599.5370635841"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6356335.9186046515,
            "unit": "ns",
            "range": "± 337909.3342321007"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29046700.454545453,
            "unit": "ns",
            "range": "± 1553454.0717853415"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7499566.467391305,
            "unit": "ns",
            "range": "± 707769.689569143"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33969742.02127659,
            "unit": "ns",
            "range": "± 1998294.4796295112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6665669.112847222,
            "unit": "ns",
            "range": "± 141642.55466208886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983700.595982143,
            "unit": "ns",
            "range": "± 18809.88965679505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303173.0264892578,
            "unit": "ns",
            "range": "± 23143.695796686745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620505.1002604165,
            "unit": "ns",
            "range": "± 107625.52718534102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846661.767202524,
            "unit": "ns",
            "range": "± 7068.266109907097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739506.7059004934,
            "unit": "ns",
            "range": "± 15759.994153827156"
          }
        ]
      }
    ]
  }
}