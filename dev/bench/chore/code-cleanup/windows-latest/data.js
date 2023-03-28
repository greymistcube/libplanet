window.BENCHMARK_DATA = {
  "lastUpdate": 1679984717208,
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
          "id": "d20ce8e90ef5020f8aeabb1c4ac1551800aeb070",
          "message": "General code readability",
          "timestamp": "2023-03-28T15:09:31+09:00",
          "tree_id": "403e18a60d3f7ac84b15452a40c86933e655ca73",
          "url": "https://github.com/greymistcube/libplanet/commit/d20ce8e90ef5020f8aeabb1c4ac1551800aeb070"
        },
        "date": 1679984695458,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94760.82474226804,
            "unit": "ns",
            "range": "± 6544.328917420138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886420.192307692,
            "unit": "ns",
            "range": "± 3385.792024155402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517205.747767857,
            "unit": "ns",
            "range": "± 2119.9974253190185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149247.8515625,
            "unit": "ns",
            "range": "± 1717.0041784655718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654623.7239583335,
            "unit": "ns",
            "range": "± 29177.484499689483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841966.2876674107,
            "unit": "ns",
            "range": "± 2156.608775364114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761053.7860576923,
            "unit": "ns",
            "range": "± 480.2100486815969"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4099803.90625,
            "unit": "ns",
            "range": "± 26900.242068632644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5598043.478260869,
            "unit": "ns",
            "range": "± 131815.662699113"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23528466.666666668,
            "unit": "ns",
            "range": "± 265470.6162558073"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5631718.518518519,
            "unit": "ns",
            "range": "± 207896.62078449677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26745466.666666668,
            "unit": "ns",
            "range": "± 365711.3433661399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88852.04081632652,
            "unit": "ns",
            "range": "± 7293.341541685654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185961.72839506174,
            "unit": "ns",
            "range": "± 9440.743719395663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160176.28865979382,
            "unit": "ns",
            "range": "± 12191.960920314426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3389660,
            "unit": "ns",
            "range": "± 37989.994923475766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8404028.57142857,
            "unit": "ns",
            "range": "± 84122.27756318526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15338.461538461539,
            "unit": "ns",
            "range": "± 2044.2205377203327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48300,
            "unit": "ns",
            "range": "± 4842.826347595693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43543.43434343435,
            "unit": "ns",
            "range": "± 5944.645363105708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82103.26086956522,
            "unit": "ns",
            "range": "± 13031.023431314323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5490.625,
            "unit": "ns",
            "range": "± 859.6300458857133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16146.938775510203,
            "unit": "ns",
            "range": "± 2406.314891496468"
          }
        ]
      }
    ]
  }
}