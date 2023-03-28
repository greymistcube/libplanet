window.BENCHMARK_DATA = {
  "lastUpdate": 1679993943245,
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
      },
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
          "id": "d02a9f801649b350494c09d2faa64bf49dcff593",
          "message": "Increase cache size; reduce logging",
          "timestamp": "2023-03-28T17:35:53+09:00",
          "tree_id": "7b26e758cef24f92265c9e96e2a56593a67da018",
          "url": "https://github.com/greymistcube/libplanet/commit/d02a9f801649b350494c09d2faa64bf49dcff593"
        },
        "date": 1679993926443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 143609.54545454544,
            "unit": "ns",
            "range": "± 9325.758981049357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120359.24725274726,
            "unit": "ns",
            "range": "± 14892.631445407573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274292.88636363635,
            "unit": "ns",
            "range": "± 52380.613871890935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250264.55681818182,
            "unit": "ns",
            "range": "± 30770.32664063622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3968124.81443299,
            "unit": "ns",
            "range": "± 269852.97009511065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11101999.892857144,
            "unit": "ns",
            "range": "± 589144.4288100979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20424.564516129034,
            "unit": "ns",
            "range": "± 2901.588754482663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55367.56701030928,
            "unit": "ns",
            "range": "± 9423.795188142993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56790.61538461538,
            "unit": "ns",
            "range": "± 9365.91162172604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128932.85263157895,
            "unit": "ns",
            "range": "± 22482.481524733128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7518.414141414141,
            "unit": "ns",
            "range": "± 1169.8891017571814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20888.08695652174,
            "unit": "ns",
            "range": "± 4363.702374124281"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5521408.422358247,
            "unit": "ns",
            "range": "± 376055.6670842299"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6654542.868421053,
            "unit": "ns",
            "range": "± 568753.3438644756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30618387.811594203,
            "unit": "ns",
            "range": "± 1471034.8664800602"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8436514.177083334,
            "unit": "ns",
            "range": "± 1253560.9891594213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34419866.02197802,
            "unit": "ns",
            "range": "± 1918627.894745646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7201557.820950255,
            "unit": "ns",
            "range": "± 474406.9041118937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2257764.134930346,
            "unit": "ns",
            "range": "± 116630.43849733117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473217.8752629207,
            "unit": "ns",
            "range": "± 60464.05332664582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3414165.8620731314,
            "unit": "ns",
            "range": "± 272770.7456089843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 979617.1867519947,
            "unit": "ns",
            "range": "± 38213.22755426883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909164.1816206952,
            "unit": "ns",
            "range": "± 61636.09354430668"
          }
        ]
      }
    ]
  }
}