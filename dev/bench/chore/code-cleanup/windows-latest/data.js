window.BENCHMARK_DATA = {
  "lastUpdate": 1679984593691,
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
          "id": "ff2d212eadb50f3fd0c2ebe0af687d029dc1b79a",
          "message": "[skip changelog] General code readability",
          "timestamp": "2023-03-28T15:10:15+09:00",
          "tree_id": "403e18a60d3f7ac84b15452a40c86933e655ca73",
          "url": "https://github.com/greymistcube/libplanet/commit/ff2d212eadb50f3fd0c2ebe0af687d029dc1b79a"
        },
        "date": 1679984569512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91694.11764705883,
            "unit": "ns",
            "range": "± 1847.1161943132104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4836800.167410715,
            "unit": "ns",
            "range": "± 5847.652642451833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515089.0755208333,
            "unit": "ns",
            "range": "± 1709.108963039436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1123660.7421875,
            "unit": "ns",
            "range": "± 986.1404975727152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547093.1119791665,
            "unit": "ns",
            "range": "± 4360.679275540567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826361.7938701923,
            "unit": "ns",
            "range": "± 2909.663576524466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724650.8072916666,
            "unit": "ns",
            "range": "± 948.9399764441123"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4095401.6145833335,
            "unit": "ns",
            "range": "± 17178.411685579667"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5453193.333333333,
            "unit": "ns",
            "range": "± 43795.685806230904"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23030920,
            "unit": "ns",
            "range": "± 347284.521476473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5493200,
            "unit": "ns",
            "range": "± 64182.18060873522"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26056285.714285713,
            "unit": "ns",
            "range": "± 281174.2242731442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82265.5172413793,
            "unit": "ns",
            "range": "± 4964.076241056826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180966.9014084507,
            "unit": "ns",
            "range": "± 8267.941286602867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149765.15151515152,
            "unit": "ns",
            "range": "± 4711.032345205853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3356121.4285714286,
            "unit": "ns",
            "range": "± 49934.482899270944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8526560,
            "unit": "ns",
            "range": "± 62772.933202592525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16660,
            "unit": "ns",
            "range": "± 2312.105055406013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44443.01075268817,
            "unit": "ns",
            "range": "± 4610.677537909019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41513,
            "unit": "ns",
            "range": "± 3435.132067800643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88771.13402061856,
            "unit": "ns",
            "range": "± 16358.254534299636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5069.3877551020405,
            "unit": "ns",
            "range": "± 868.9854450829672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14806.185567010309,
            "unit": "ns",
            "range": "± 1406.592694020857"
          }
        ]
      }
    ]
  }
}