window.BENCHMARK_DATA = {
  "lastUpdate": 1678786247449,
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
          "id": "de5410f90bb05b09dd4395beaf41218dcadda201",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T18:14:03+09:00",
          "tree_id": "bb1eb97752999e8ef0a439815ec07e804f395596",
          "url": "https://github.com/greymistcube/libplanet/commit/de5410f90bb05b09dd4395beaf41218dcadda201"
        },
        "date": 1678786226540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107086.04651162791,
            "unit": "ns",
            "range": "± 3874.4327631126084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4939746.71875,
            "unit": "ns",
            "range": "± 35168.13824567222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563183.4244791667,
            "unit": "ns",
            "range": "± 8137.798748971178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215086.9986979167,
            "unit": "ns",
            "range": "± 5958.385065291776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2695420.8854166665,
            "unit": "ns",
            "range": "± 6578.766442819509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848912.65625,
            "unit": "ns",
            "range": "± 2749.370819248178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788248.8020833334,
            "unit": "ns",
            "range": "± 2063.898097357173"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5056330.911458333,
            "unit": "ns",
            "range": "± 40854.036123011654"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5527671.666666667,
            "unit": "ns",
            "range": "± 246007.0069910623"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28510503.333333332,
            "unit": "ns",
            "range": "± 845837.0184099557"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5950939.130434782,
            "unit": "ns",
            "range": "± 145684.13134752258"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31134423.076923076,
            "unit": "ns",
            "range": "± 480998.59174056863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99187.5,
            "unit": "ns",
            "range": "± 9551.833662485411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203552.1739130435,
            "unit": "ns",
            "range": "± 11888.118348146261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181632.6530612245,
            "unit": "ns",
            "range": "± 13308.719531536995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3826302.8571428573,
            "unit": "ns",
            "range": "± 123376.85807818134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9658184.615384616,
            "unit": "ns",
            "range": "± 392342.97690079606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21162.637362637364,
            "unit": "ns",
            "range": "± 2300.61095033705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54417.391304347824,
            "unit": "ns",
            "range": "± 5619.815973985449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41843.87755102041,
            "unit": "ns",
            "range": "± 3254.2459600277343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112843.33333333333,
            "unit": "ns",
            "range": "± 15823.038600780752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7006.18556701031,
            "unit": "ns",
            "range": "± 1149.8020149310569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26191.489361702126,
            "unit": "ns",
            "range": "± 3407.066015389039"
          }
        ]
      }
    ]
  }
}