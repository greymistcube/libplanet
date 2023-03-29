window.BENCHMARK_DATA = {
  "lastUpdate": 1680059475574,
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
          "id": "ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7",
          "message": "Changelog",
          "timestamp": "2023-03-29T11:53:47+09:00",
          "tree_id": "8a4fce51c0995d6db5798e321be3c78cbac9254d",
          "url": "https://github.com/greymistcube/libplanet/commit/ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7"
        },
        "date": 1680059253575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98226.31578947368,
            "unit": "ns",
            "range": "± 2112.092723465194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4800716.145833333,
            "unit": "ns",
            "range": "± 20172.945256155577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1484929.071514423,
            "unit": "ns",
            "range": "± 3885.4131781536903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168786.5299479167,
            "unit": "ns",
            "range": "± 10448.573049315699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615859.5145089286,
            "unit": "ns",
            "range": "± 8487.636438590063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849054.1471354166,
            "unit": "ns",
            "range": "± 3320.542992111911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750500.09765625,
            "unit": "ns",
            "range": "± 2211.6154787656837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4527434.739583333,
            "unit": "ns",
            "range": "± 70325.6617333906"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5957523.333333333,
            "unit": "ns",
            "range": "± 174893.7385431771"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23765308.695652176,
            "unit": "ns",
            "range": "± 595318.8510927595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6130520,
            "unit": "ns",
            "range": "± 68078.89540819534"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27806163.636363637,
            "unit": "ns",
            "range": "± 670636.6254363263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89020.61855670103,
            "unit": "ns",
            "range": "± 9977.484424780396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176528.1690140845,
            "unit": "ns",
            "range": "± 8608.968464814412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158111.23595505618,
            "unit": "ns",
            "range": "± 7961.304686965104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3395900,
            "unit": "ns",
            "range": "± 56842.49493793557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8511706.666666666,
            "unit": "ns",
            "range": "± 129064.1782030866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16663.636363636364,
            "unit": "ns",
            "range": "± 1261.925350560256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44993.406593406595,
            "unit": "ns",
            "range": "± 4145.460762429784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36540,
            "unit": "ns",
            "range": "± 845.6700862256168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91428.86597938144,
            "unit": "ns",
            "range": "± 14321.537967071414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5223.469387755102,
            "unit": "ns",
            "range": "± 869.1506720965051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16564.044943820223,
            "unit": "ns",
            "range": "± 1143.5836010115545"
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
          "id": "7669de38b6d6e1af3fa179eae36a5abf91f81fa4",
          "message": "Introduce state cache",
          "timestamp": "2023-03-29T11:51:25+09:00",
          "tree_id": "f1c8e9d1a35ba2d4258366bbd2a7bc2347b3cd52",
          "url": "https://github.com/greymistcube/libplanet/commit/7669de38b6d6e1af3fa179eae36a5abf91f81fa4"
        },
        "date": 1680059446213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104292,
            "unit": "ns",
            "range": "± 7064.73930263116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893847.395833333,
            "unit": "ns",
            "range": "± 18708.142232830174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548604.213169643,
            "unit": "ns",
            "range": "± 3132.2881309556337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170867.689732143,
            "unit": "ns",
            "range": "± 4963.894314617078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632670.284598214,
            "unit": "ns",
            "range": "± 8374.433863973969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840560.0325520834,
            "unit": "ns",
            "range": "± 5405.550424746404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772018.3743990385,
            "unit": "ns",
            "range": "± 2305.0747689245695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4705805.78125,
            "unit": "ns",
            "range": "± 40317.51414091258"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5586900,
            "unit": "ns",
            "range": "± 49086.20360768782"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25687123.076923076,
            "unit": "ns",
            "range": "± 220787.84746843198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5977843.333333333,
            "unit": "ns",
            "range": "± 175911.80771043774"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28056550,
            "unit": "ns",
            "range": "± 541071.1622944496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99737.8947368421,
            "unit": "ns",
            "range": "± 9400.420757303033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193952.688172043,
            "unit": "ns",
            "range": "± 11372.35962091239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178222,
            "unit": "ns",
            "range": "± 13676.009962150822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3619440,
            "unit": "ns",
            "range": "± 45184.17548529257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8856977.777777778,
            "unit": "ns",
            "range": "± 183409.50503163054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21202.0202020202,
            "unit": "ns",
            "range": "± 2704.190995170871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52468.131868131866,
            "unit": "ns",
            "range": "± 4611.191196327068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43330.61224489796,
            "unit": "ns",
            "range": "± 3544.1663455895155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94382.22222222222,
            "unit": "ns",
            "range": "± 13196.906155796285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5372.916666666667,
            "unit": "ns",
            "range": "± 736.4894206074293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18460.82474226804,
            "unit": "ns",
            "range": "± 2980.4766362750506"
          }
        ]
      }
    ]
  }
}