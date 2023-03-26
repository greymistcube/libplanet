window.BENCHMARK_DATA = {
  "lastUpdate": 1679871469741,
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
          "id": "e57ef4b9b44b854ec0aa917a261da925a85b78a9",
          "message": "Revert \"Cache during commit\"\n\nThis reverts commit 49a8555cfbbb28ac03f9b44e572fee87963625ab.",
          "timestamp": "2023-03-27T07:36:22+09:00",
          "tree_id": "3c13c9cfbea7a0a6a8d5fd897110ac350025fbbd",
          "url": "https://github.com/greymistcube/libplanet/commit/e57ef4b9b44b854ec0aa917a261da925a85b78a9"
        },
        "date": 1679871444996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115590.90909090909,
            "unit": "ns",
            "range": "± 5467.772075400681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5578477.584134615,
            "unit": "ns",
            "range": "± 61423.880540267586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842257.9637096773,
            "unit": "ns",
            "range": "± 54712.97397406678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388914.0827047413,
            "unit": "ns",
            "range": "± 39957.302062533236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3131534.7478693184,
            "unit": "ns",
            "range": "± 75310.21756996265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987741.61328125,
            "unit": "ns",
            "range": "± 25172.492677679515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907686.7980957031,
            "unit": "ns",
            "range": "± 17573.690119883788"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5417005.1171875,
            "unit": "ns",
            "range": "± 346149.70933551644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6545207.142857143,
            "unit": "ns",
            "range": "± 105536.16014855335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31383483.673469387,
            "unit": "ns",
            "range": "± 2557613.1168338964"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6620354.838709678,
            "unit": "ns",
            "range": "± 381224.32159172575"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36266957.14285714,
            "unit": "ns",
            "range": "± 3016031.7256459845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102422.1052631579,
            "unit": "ns",
            "range": "± 10716.274945717194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209194.31818181818,
            "unit": "ns",
            "range": "± 14443.034020374274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182984.2105263158,
            "unit": "ns",
            "range": "± 9327.551341862863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998379.5454545454,
            "unit": "ns",
            "range": "± 149366.5969002308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10315612.5,
            "unit": "ns",
            "range": "± 472178.69448314747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19788.76404494382,
            "unit": "ns",
            "range": "± 1848.1217862669012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54297.8021978022,
            "unit": "ns",
            "range": "± 4293.4569863657525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43460.22727272727,
            "unit": "ns",
            "range": "± 3152.595711135244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109461.22448979592,
            "unit": "ns",
            "range": "± 24092.680296015053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6645.833333333333,
            "unit": "ns",
            "range": "± 1064.93554701599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20458.333333333332,
            "unit": "ns",
            "range": "± 1937.6419019908913"
          }
        ]
      }
    ]
  }
}