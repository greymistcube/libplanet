window.BENCHMARK_DATA = {
  "lastUpdate": 1678786320042,
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
          "id": "b88179351e1e8ac37239d812c80ecab67235fea1",
          "message": "Changelog",
          "timestamp": "2023-03-14T18:16:19+09:00",
          "tree_id": "ff7fb2fc6be7e74a14b2c5236392739d907b0fff",
          "url": "https://github.com/greymistcube/libplanet/commit/b88179351e1e8ac37239d812c80ecab67235fea1"
        },
        "date": 1678786292042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90344.5945945946,
            "unit": "ns",
            "range": "± 3073.899617563797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894318.973214285,
            "unit": "ns",
            "range": "± 10378.345239067286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519487.3744419643,
            "unit": "ns",
            "range": "± 1250.1283494219297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142130.9795673077,
            "unit": "ns",
            "range": "± 797.4213946216686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601793.526785714,
            "unit": "ns",
            "range": "± 28548.304974579984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813325.5998883928,
            "unit": "ns",
            "range": "± 1595.7100990519928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779770.9612165178,
            "unit": "ns",
            "range": "± 1609.401590690687"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3874822.0252403845,
            "unit": "ns",
            "range": "± 32291.676661810576"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5480286.666666667,
            "unit": "ns",
            "range": "± 82182.50480021947"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23013107.14285714,
            "unit": "ns",
            "range": "± 360822.17752129486"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5544269.642857143,
            "unit": "ns",
            "range": "± 228609.25291036177"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26557057.14285714,
            "unit": "ns",
            "range": "± 342285.35714267084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82176.04166666667,
            "unit": "ns",
            "range": "± 8861.433230776427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171341.30434782608,
            "unit": "ns",
            "range": "± 6528.189338449624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146150,
            "unit": "ns",
            "range": "± 2248.07610054601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3321286.6666666665,
            "unit": "ns",
            "range": "± 38773.644706288884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8185750,
            "unit": "ns",
            "range": "± 65841.42663656721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15067.368421052632,
            "unit": "ns",
            "range": "± 1645.3313774268552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40494.73684210526,
            "unit": "ns",
            "range": "± 2046.9095232792358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33856.329113924054,
            "unit": "ns",
            "range": "± 1761.4345677456215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75708.88888888889,
            "unit": "ns",
            "range": "± 10398.85089205322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3913.5416666666665,
            "unit": "ns",
            "range": "± 564.6833843503841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13582.142857142857,
            "unit": "ns",
            "range": "± 738.6344799754515"
          }
        ]
      }
    ]
  }
}