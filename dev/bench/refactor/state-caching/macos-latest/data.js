window.BENCHMARK_DATA = {
  "lastUpdate": 1679562415973,
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
          "id": "81f62bdf83fd9321842d901f2730764263337718",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:50:45+09:00",
          "tree_id": "3b9228a74d791581247e7096b727c530af6da885",
          "url": "https://github.com/greymistcube/libplanet/commit/81f62bdf83fd9321842d901f2730764263337718"
        },
        "date": 1679562393490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136886.14117647058,
            "unit": "ns",
            "range": "± 12849.963376039103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108551.56,
            "unit": "ns",
            "range": "± 19557.13208577899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226984.98979591837,
            "unit": "ns",
            "range": "± 16597.68523265727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227640.25806451612,
            "unit": "ns",
            "range": "± 6833.511751984928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4050827.1666666665,
            "unit": "ns",
            "range": "± 59110.28038296199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10262977.714285715,
            "unit": "ns",
            "range": "± 290274.3583757803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22778.925531914894,
            "unit": "ns",
            "range": "± 2574.0299821939884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62061.9175257732,
            "unit": "ns",
            "range": "± 10526.784748391148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64245.36046511628,
            "unit": "ns",
            "range": "± 3486.5996174016977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132380.41666666666,
            "unit": "ns",
            "range": "± 20072.073650861636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9596.65306122449,
            "unit": "ns",
            "range": "± 1375.090183374608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24286.64285714286,
            "unit": "ns",
            "range": "± 3626.8979851720896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5165527.720262097,
            "unit": "ns",
            "range": "± 470047.78631766245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6064496.833333333,
            "unit": "ns",
            "range": "± 64302.323263320795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29368504.42857143,
            "unit": "ns",
            "range": "± 820450.9737988018"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6918966.962264151,
            "unit": "ns",
            "range": "± 288098.38213246653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31811633.37037037,
            "unit": "ns",
            "range": "± 885937.3949853753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6845587.044270833,
            "unit": "ns",
            "range": "± 42932.031838800845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2079485.5948016827,
            "unit": "ns",
            "range": "± 11047.423124182087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299538.6959635417,
            "unit": "ns",
            "range": "± 3583.600531247558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2727794.743289263,
            "unit": "ns",
            "range": "± 91247.4233404783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856380.6279296875,
            "unit": "ns",
            "range": "± 6708.713402548879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726855.46484375,
            "unit": "ns",
            "range": "± 1997.1226374092287"
          }
        ]
      }
    ]
  }
}