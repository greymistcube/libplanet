window.BENCHMARK_DATA = {
  "lastUpdate": 1679896765667,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679896757930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103449.04545454546,
            "unit": "ns",
            "range": "± 2509.9740935349214"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4456942.783072917,
            "unit": "ns",
            "range": "± 40286.927710097756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6025980.071428572,
            "unit": "ns",
            "range": "± 78103.19189130423"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25346923.866666667,
            "unit": "ns",
            "range": "± 384117.84165406966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6671887,
            "unit": "ns",
            "range": "± 177963.62302916477"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28201539.2,
            "unit": "ns",
            "range": "± 382739.8418420981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5864727.03125,
            "unit": "ns",
            "range": "± 22489.49253278501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1949187.2020089286,
            "unit": "ns",
            "range": "± 1899.2829540899452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352358.61953125,
            "unit": "ns",
            "range": "± 943.0303217647261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584150.3571428573,
            "unit": "ns",
            "range": "± 2902.5619155269883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865866.9093191965,
            "unit": "ns",
            "range": "± 6392.863820722894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763605.944936899,
            "unit": "ns",
            "range": "± 510.24560177660436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93137.61458333333,
            "unit": "ns",
            "range": "± 9389.382469879465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196572.04494382022,
            "unit": "ns",
            "range": "± 12790.108610589841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168324.6875,
            "unit": "ns",
            "range": "± 3127.7831706337956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773938.4285714286,
            "unit": "ns",
            "range": "± 26360.192075622974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9518538.2,
            "unit": "ns",
            "range": "± 50777.43204444836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17253.864583333332,
            "unit": "ns",
            "range": "± 1927.9166209301616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48924.336842105266,
            "unit": "ns",
            "range": "± 5822.556772990029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41370.16161616162,
            "unit": "ns",
            "range": "± 4472.6136008594885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91102.05555555556,
            "unit": "ns",
            "range": "± 12179.917643640603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5135.4631578947365,
            "unit": "ns",
            "range": "± 555.840781782022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14890.03488372093,
            "unit": "ns",
            "range": "± 1219.7772356668913"
          }
        ]
      }
    ]
  }
}