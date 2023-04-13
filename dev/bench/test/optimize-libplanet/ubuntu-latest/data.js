window.BENCHMARK_DATA = {
  "lastUpdate": 1679996742497,
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
        "date": 1679991487651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110885.19230769231,
            "unit": "ns",
            "range": "± 5583.329647222206"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5158053.887239584,
            "unit": "ns",
            "range": "± 49497.52837078896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6317016,
            "unit": "ns",
            "range": "± 98379.83852161205"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27903318.0625,
            "unit": "ns",
            "range": "± 523628.6873402397"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7043685.571428572,
            "unit": "ns",
            "range": "± 86408.88890058109"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30736949.133333333,
            "unit": "ns",
            "range": "± 527999.8877460469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995471.911830357,
            "unit": "ns",
            "range": "± 23320.535700268767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850972.3550502232,
            "unit": "ns",
            "range": "± 5319.376619848583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364472.278515625,
            "unit": "ns",
            "range": "± 4600.611922051485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583934.2640625,
            "unit": "ns",
            "range": "± 5543.31852619003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818713.8227213542,
            "unit": "ns",
            "range": "± 1364.5033372763166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775923.9309244792,
            "unit": "ns",
            "range": "± 767.1460603974805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96731.88541666667,
            "unit": "ns",
            "range": "± 10415.71832919114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203464.96153846153,
            "unit": "ns",
            "range": "± 5624.561999370815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178806.57894736843,
            "unit": "ns",
            "range": "± 7774.667280311672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3922983.8,
            "unit": "ns",
            "range": "± 63683.86983732335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9949220.266666668,
            "unit": "ns",
            "range": "± 162411.4635527689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19241.13186813187,
            "unit": "ns",
            "range": "± 2199.7502040448503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52106.47727272727,
            "unit": "ns",
            "range": "± 4025.355525034504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40780.1282051282,
            "unit": "ns",
            "range": "± 1441.2515062207347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99191.14583333333,
            "unit": "ns",
            "range": "± 19547.20395511132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6542.360824742268,
            "unit": "ns",
            "range": "± 1069.806974271206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17207.967032967033,
            "unit": "ns",
            "range": "± 1247.509736773843"
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
        "date": 1679993178911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114408.81818181818,
            "unit": "ns",
            "range": "± 2748.409888962874"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4444537.705829327,
            "unit": "ns",
            "range": "± 21847.1648840224"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6132589.642857143,
            "unit": "ns",
            "range": "± 102612.93163490064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25960287.076923076,
            "unit": "ns",
            "range": "± 353043.3209547287"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6180854.5,
            "unit": "ns",
            "range": "± 257537.38347319013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28719236.384615384,
            "unit": "ns",
            "range": "± 178188.95191927513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032581.954799107,
            "unit": "ns",
            "range": "± 36932.23103972109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841915.759486607,
            "unit": "ns",
            "range": "± 9726.013922531745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354835.4651041667,
            "unit": "ns",
            "range": "± 2083.225189866273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528543.15625,
            "unit": "ns",
            "range": "± 6141.656889717398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801936.3674479167,
            "unit": "ns",
            "range": "± 622.0388378876744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756227.0828125,
            "unit": "ns",
            "range": "± 904.9139786570018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90452.98958333333,
            "unit": "ns",
            "range": "± 7935.420298615557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195910.66666666666,
            "unit": "ns",
            "range": "± 6932.86622479542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169099.76923076922,
            "unit": "ns",
            "range": "± 2278.2815583185406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3769804,
            "unit": "ns",
            "range": "± 19976.336000378047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9434061.133333333,
            "unit": "ns",
            "range": "± 79901.1754257065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15535.932584269663,
            "unit": "ns",
            "range": "± 1250.1013122375396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47517.282608695656,
            "unit": "ns",
            "range": "± 3543.3192526003163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42369.38775510204,
            "unit": "ns",
            "range": "± 2980.8117680507007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90066.17894736842,
            "unit": "ns",
            "range": "± 14113.025199302516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5668.75,
            "unit": "ns",
            "range": "± 708.0458652999966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15583.474226804125,
            "unit": "ns",
            "range": "± 1652.0691325122132"
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
          "id": "37dcee5acb4c30189b5a152175832f8068dded00",
          "message": "Parallel get states",
          "timestamp": "2023-03-28T18:34:41+09:00",
          "tree_id": "5f5d2f26aeb7d6ed2bc6c848aece137c51c434d1",
          "url": "https://github.com/greymistcube/libplanet/commit/37dcee5acb4c30189b5a152175832f8068dded00"
        },
        "date": 1679996735416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109336.2156862745,
            "unit": "ns",
            "range": "± 4177.332911386046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4361845.78984375,
            "unit": "ns",
            "range": "± 79340.4610666799"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6006240.933333334,
            "unit": "ns",
            "range": "± 44987.38240323877"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25587997.666666668,
            "unit": "ns",
            "range": "± 397757.6784359893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6758463.761904762,
            "unit": "ns",
            "range": "± 152802.13666729428"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28470244.8,
            "unit": "ns",
            "range": "± 310141.38742427964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053281.908333333,
            "unit": "ns",
            "range": "± 38818.562315519775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867915.9747488839,
            "unit": "ns",
            "range": "± 2314.7148081718337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371369.8229631695,
            "unit": "ns",
            "range": "± 815.3379616252986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586289.476004464,
            "unit": "ns",
            "range": "± 1942.5563487476927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801417.8075474331,
            "unit": "ns",
            "range": "± 730.5941997557118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731555.9223307292,
            "unit": "ns",
            "range": "± 428.28221798824694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85356.3085106383,
            "unit": "ns",
            "range": "± 7283.945053949753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190230.94252873564,
            "unit": "ns",
            "range": "± 9643.736074437273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169478.5,
            "unit": "ns",
            "range": "± 2878.361305967739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3715598.8666666667,
            "unit": "ns",
            "range": "± 39936.97052117904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9399544.333333334,
            "unit": "ns",
            "range": "± 55059.648436512754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16320.652173913044,
            "unit": "ns",
            "range": "± 1345.0387504919302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49118.65934065934,
            "unit": "ns",
            "range": "± 2994.8966193242063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40765.15151515151,
            "unit": "ns",
            "range": "± 1924.7771039179836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90427.30927835051,
            "unit": "ns",
            "range": "± 16114.735123845003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4696.808510638298,
            "unit": "ns",
            "range": "± 486.47340270532106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14625.352112676057,
            "unit": "ns",
            "range": "± 737.1214883119248"
          }
        ]
      }
    ]
  }
}