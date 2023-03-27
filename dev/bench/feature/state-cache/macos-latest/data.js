window.BENCHMARK_DATA = {
  "lastUpdate": 1679888549498,
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
          "id": "0c671e16f82fa186b33d165e1cc535f621434a0a",
          "message": "Reintroduced cache during commit",
          "timestamp": "2023-03-27T12:20:31+09:00",
          "tree_id": "fe738e78b4353bc36fcbc3b06b14e8466f83bfd4",
          "url": "https://github.com/greymistcube/libplanet/commit/0c671e16f82fa186b33d165e1cc535f621434a0a"
        },
        "date": 1679888535592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137990.775,
            "unit": "ns",
            "range": "± 4806.110784319671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129069.54081632652,
            "unit": "ns",
            "range": "± 22516.177124284026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262598.72340425535,
            "unit": "ns",
            "range": "± 36869.51258566341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244436.1043956044,
            "unit": "ns",
            "range": "± 24018.590106128268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4027380.8775510206,
            "unit": "ns",
            "range": "± 311213.0247153294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11469290.489130436,
            "unit": "ns",
            "range": "± 1157581.9896869764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25233.989130434784,
            "unit": "ns",
            "range": "± 2923.816463830496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61899.0376344086,
            "unit": "ns",
            "range": "± 7332.564714665934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62816.43529411765,
            "unit": "ns",
            "range": "± 3327.0661838317315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128122.4574468085,
            "unit": "ns",
            "range": "± 20161.9615856702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8560.239130434782,
            "unit": "ns",
            "range": "± 1011.9721130410967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21042.478260869564,
            "unit": "ns",
            "range": "± 3234.30613676804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5849642.217548077,
            "unit": "ns",
            "range": "± 408010.2189377525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6718106.268041237,
            "unit": "ns",
            "range": "± 496145.4233309213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29584141.864583332,
            "unit": "ns",
            "range": "± 1791149.4432845754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8177681.848484849,
            "unit": "ns",
            "range": "± 1001405.9906366073"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34709298.787234046,
            "unit": "ns",
            "range": "± 2255525.562569894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7052794.651041667,
            "unit": "ns",
            "range": "± 147717.9071275648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055732.332782452,
            "unit": "ns",
            "range": "± 16711.60696509915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1565407.8324497768,
            "unit": "ns",
            "range": "± 22493.016926611133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3394467.0322544645,
            "unit": "ns",
            "range": "± 108912.8284549382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880565.7134164664,
            "unit": "ns",
            "range": "± 12569.14137869212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803962.4964294434,
            "unit": "ns",
            "range": "± 24381.106113965794"
          }
        ]
      }
    ]
  }
}