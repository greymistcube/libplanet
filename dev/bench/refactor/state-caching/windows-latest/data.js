window.BENCHMARK_DATA = {
  "lastUpdate": 1679562418829,
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
        "date": 1679562394440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134238.88888888888,
            "unit": "ns",
            "range": "± 14935.80063436738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4854894.114583333,
            "unit": "ns",
            "range": "± 14225.9771598746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523315.3041294643,
            "unit": "ns",
            "range": "± 2847.903940701603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171724.9849759615,
            "unit": "ns",
            "range": "± 5431.9846609836895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706345.3450520835,
            "unit": "ns",
            "range": "± 13944.41271692382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827509.1458834135,
            "unit": "ns",
            "range": "± 3131.746427087943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780982.8369140625,
            "unit": "ns",
            "range": "± 753.2993480340219"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4589639.609375,
            "unit": "ns",
            "range": "± 36274.29094861555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5646507.142857143,
            "unit": "ns",
            "range": "± 87440.4453529171"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24996700,
            "unit": "ns",
            "range": "± 726002.9761504496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5720269.230769231,
            "unit": "ns",
            "range": "± 293312.5062347092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28738485.714285713,
            "unit": "ns",
            "range": "± 389388.0007971935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95081.31868131868,
            "unit": "ns",
            "range": "± 10241.179533713792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190837.5,
            "unit": "ns",
            "range": "± 11340.891453740189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171962.5,
            "unit": "ns",
            "range": "± 13301.533350470698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3700185.714285714,
            "unit": "ns",
            "range": "± 42537.66850402408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9080930.612244898,
            "unit": "ns",
            "range": "± 362251.0468147295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18906.81818181818,
            "unit": "ns",
            "range": "± 3656.0702304223546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53851.041666666664,
            "unit": "ns",
            "range": "± 6966.702682900269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39926.76056338028,
            "unit": "ns",
            "range": "± 1817.8447007752948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97984.94623655915,
            "unit": "ns",
            "range": "± 18911.47538812807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5687.096774193548,
            "unit": "ns",
            "range": "± 793.6193653475818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18924,
            "unit": "ns",
            "range": "± 3033.8201407573006"
          }
        ]
      }
    ]
  }
}