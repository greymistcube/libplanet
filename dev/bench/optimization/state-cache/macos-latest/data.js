window.BENCHMARK_DATA = {
  "lastUpdate": 1679662912196,
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
          "id": "2efe9205751fc8816dd122f4f4386a14477dc614",
          "message": "Refactored to more granular caching scheme",
          "timestamp": "2023-03-24T21:42:31+09:00",
          "tree_id": "3ef82fcb07ac2f63eacca5bb11dd399b5a8d8a7c",
          "url": "https://github.com/greymistcube/libplanet/commit/2efe9205751fc8816dd122f4f4386a14477dc614"
        },
        "date": 1679662897924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149953.6222222222,
            "unit": "ns",
            "range": "± 18114.5001832617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 131563.36842105264,
            "unit": "ns",
            "range": "± 25279.897294369803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282538.4736842105,
            "unit": "ns",
            "range": "± 62040.212560825305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253262.66279069768,
            "unit": "ns",
            "range": "± 26993.200810404727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4341540.601010101,
            "unit": "ns",
            "range": "± 474205.686910345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11817099.173684211,
            "unit": "ns",
            "range": "± 829504.7789685536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26013.989361702126,
            "unit": "ns",
            "range": "± 6077.027840223652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72936.96875,
            "unit": "ns",
            "range": "± 15657.898120658081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64703.196202531646,
            "unit": "ns",
            "range": "± 4277.133545736247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135624.14516129033,
            "unit": "ns",
            "range": "± 19332.226164937296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8591.09375,
            "unit": "ns",
            "range": "± 807.1164603649868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23872.468085106382,
            "unit": "ns",
            "range": "± 3748.8259996050197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5553971.004607372,
            "unit": "ns",
            "range": "± 274910.6940166392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7016890.091836735,
            "unit": "ns",
            "range": "± 813393.7613090832"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32359419.020408165,
            "unit": "ns",
            "range": "± 2275699.0720327543"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8575461.768421052,
            "unit": "ns",
            "range": "± 944936.3122654335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36247430.270833336,
            "unit": "ns",
            "range": "± 2921318.633115254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7319353.384469697,
            "unit": "ns",
            "range": "± 225895.9512721115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2150083.054296875,
            "unit": "ns",
            "range": "± 75689.29864556393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379281.8731863839,
            "unit": "ns",
            "range": "± 17412.25878997672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3038554.4033647017,
            "unit": "ns",
            "range": "± 166775.88220178135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858860.2977905273,
            "unit": "ns",
            "range": "± 15692.701369309418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820401.1282958984,
            "unit": "ns",
            "range": "± 24808.913573024405"
          }
        ]
      }
    ]
  }
}