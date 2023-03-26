window.BENCHMARK_DATA = {
  "lastUpdate": 1679836263525,
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
          "id": "a3a3a05bbd9141cd110fc544a4725588b0b71c4b",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T21:52:29+09:00",
          "tree_id": "9e82adaed50e472317a77409dbc78eda575f2d6f",
          "url": "https://github.com/greymistcube/libplanet/commit/a3a3a05bbd9141cd110fc544a4725588b0b71c4b"
        },
        "date": 1679836235553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138995.52222222224,
            "unit": "ns",
            "range": "± 15374.238668445736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107014.48969072165,
            "unit": "ns",
            "range": "± 13523.06399921911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251519.02040816325,
            "unit": "ns",
            "range": "± 37815.8464891413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237189.31578947368,
            "unit": "ns",
            "range": "± 27408.26794121646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4287985.13,
            "unit": "ns",
            "range": "± 402333.97220342077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11777699.4,
            "unit": "ns",
            "range": "± 678495.0928621833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30428.989361702126,
            "unit": "ns",
            "range": "± 9462.165224821489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62842.86170212766,
            "unit": "ns",
            "range": "± 10904.317116462038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58582.778947368424,
            "unit": "ns",
            "range": "± 11900.436891836087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150851.71276595743,
            "unit": "ns",
            "range": "± 28799.96911470579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9853.952631578948,
            "unit": "ns",
            "range": "± 1078.5076940553638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21317.163265306124,
            "unit": "ns",
            "range": "± 4926.015120029613"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5199771.039469401,
            "unit": "ns",
            "range": "± 388011.9465367754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6359419.348484849,
            "unit": "ns",
            "range": "± 686187.9112748059"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27794891.054054055,
            "unit": "ns",
            "range": "± 865017.9640650677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8055941.1632653065,
            "unit": "ns",
            "range": "± 924779.6572315891"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37470800.54545455,
            "unit": "ns",
            "range": "± 3289592.810248502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7379376.890419408,
            "unit": "ns",
            "range": "± 251313.2762911914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1965993.3315104167,
            "unit": "ns",
            "range": "± 35357.18788250489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400225.6904523983,
            "unit": "ns",
            "range": "± 51437.54087981654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2810163.0729851974,
            "unit": "ns",
            "range": "± 141422.19974249243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 944506.7919921875,
            "unit": "ns",
            "range": "± 25107.572765762874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798618.5649857954,
            "unit": "ns",
            "range": "± 19576.71984818271"
          }
        ]
      }
    ]
  }
}