window.BENCHMARK_DATA = {
  "lastUpdate": 1679991749280,
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
          "id": "6f4b1a954b3c0d74eeba180434ae74e206ba2b62",
          "message": "Introduce state cache",
          "timestamp": "2023-03-28T17:05:18+09:00",
          "tree_id": "34fe8b39ff2b76c37170587169bec08e6adf2442",
          "url": "https://github.com/greymistcube/libplanet/commit/6f4b1a954b3c0d74eeba180434ae74e206ba2b62"
        },
        "date": 1679991734516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137150.1222222222,
            "unit": "ns",
            "range": "± 8297.743993965363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 142018.7,
            "unit": "ns",
            "range": "± 31067.545579159152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272521.4375,
            "unit": "ns",
            "range": "± 44524.5539874969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218940.48863636365,
            "unit": "ns",
            "range": "± 20370.138511762143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4081124.8585858587,
            "unit": "ns",
            "range": "± 340598.6977751722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10008641.56521739,
            "unit": "ns",
            "range": "± 247488.7523563309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16532.477777777778,
            "unit": "ns",
            "range": "± 1749.810064991503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51988.942528735635,
            "unit": "ns",
            "range": "± 5949.130388584501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56306.50537634409,
            "unit": "ns",
            "range": "± 9400.768297260343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135630.29381443298,
            "unit": "ns",
            "range": "± 25059.096894033206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8788.765957446809,
            "unit": "ns",
            "range": "± 1028.5666655571285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21549.293478260868,
            "unit": "ns",
            "range": "± 3959.255048528405"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5018228.469401042,
            "unit": "ns",
            "range": "± 246053.22576899288"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6477150.20212766,
            "unit": "ns",
            "range": "± 485242.7592792746"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28563823.24468085,
            "unit": "ns",
            "range": "± 1729147.2779472303"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7524069.183673469,
            "unit": "ns",
            "range": "± 614419.1964861343"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33235731.98148148,
            "unit": "ns",
            "range": "± 1383325.448056974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7219416.491026183,
            "unit": "ns",
            "range": "± 244322.43510475755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2063265.2113715278,
            "unit": "ns",
            "range": "± 36426.001063389755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326969.6045673077,
            "unit": "ns",
            "range": "± 20293.569582109594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3256400.8828125,
            "unit": "ns",
            "range": "± 65791.10250623079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925658.845666956,
            "unit": "ns",
            "range": "± 25645.719825368225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775340.4063173492,
            "unit": "ns",
            "range": "± 19548.870619573387"
          }
        ]
      }
    ]
  }
}