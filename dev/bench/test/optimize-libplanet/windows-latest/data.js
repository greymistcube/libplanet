window.BENCHMARK_DATA = {
  "lastUpdate": 1679997029488,
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
        "date": 1679991729243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102967.74193548386,
            "unit": "ns",
            "range": "± 5809.552876799641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4755666.350446428,
            "unit": "ns",
            "range": "± 17554.423803649945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1501067.6302083333,
            "unit": "ns",
            "range": "± 4577.594061239737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158925.6380208333,
            "unit": "ns",
            "range": "± 4800.451816267735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646828.543526786,
            "unit": "ns",
            "range": "± 4240.22715560576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820896.0481770834,
            "unit": "ns",
            "range": "± 1808.7629986770235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768786.5009014423,
            "unit": "ns",
            "range": "± 838.3367838518492"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4753442.421875,
            "unit": "ns",
            "range": "± 33551.30202692496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5688735.714285715,
            "unit": "ns",
            "range": "± 84529.53837057705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25439141.17647059,
            "unit": "ns",
            "range": "± 520562.5383405239"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5864004.411764706,
            "unit": "ns",
            "range": "± 278707.87008248887"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28164770,
            "unit": "ns",
            "range": "± 593326.3263828324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97964.28571428571,
            "unit": "ns",
            "range": "± 11830.34931641723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197130.20833333334,
            "unit": "ns",
            "range": "± 16702.146850923826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171178.57142857142,
            "unit": "ns",
            "range": "± 12091.679425960905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3571462.5,
            "unit": "ns",
            "range": "± 92349.90083796847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8924034.782608695,
            "unit": "ns",
            "range": "± 220100.9119982255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21198.989898989897,
            "unit": "ns",
            "range": "± 2955.7103137960935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50778.40909090909,
            "unit": "ns",
            "range": "± 4822.825252580472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40820.61855670103,
            "unit": "ns",
            "range": "± 2715.9228842885177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102768.47826086957,
            "unit": "ns",
            "range": "± 14923.909052092442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6188.1720430107525,
            "unit": "ns",
            "range": "± 1133.5639701522373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21022.680412371134,
            "unit": "ns",
            "range": "± 2729.9841709949824"
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
          "id": "6f4b1a954b3c0d74eeba180434ae74e206ba2b62",
          "message": "Introduce state cache",
          "timestamp": "2023-03-28T17:05:18+09:00",
          "tree_id": "34fe8b39ff2b76c37170587169bec08e6adf2442",
          "url": "https://github.com/greymistcube/libplanet/commit/6f4b1a954b3c0d74eeba180434ae74e206ba2b62"
        },
        "date": 1679991729243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102967.74193548386,
            "unit": "ns",
            "range": "± 5809.552876799641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4755666.350446428,
            "unit": "ns",
            "range": "± 17554.423803649945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1501067.6302083333,
            "unit": "ns",
            "range": "± 4577.594061239737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158925.6380208333,
            "unit": "ns",
            "range": "± 4800.451816267735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646828.543526786,
            "unit": "ns",
            "range": "± 4240.22715560576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820896.0481770834,
            "unit": "ns",
            "range": "± 1808.7629986770235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768786.5009014423,
            "unit": "ns",
            "range": "± 838.3367838518492"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4753442.421875,
            "unit": "ns",
            "range": "± 33551.30202692496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5688735.714285715,
            "unit": "ns",
            "range": "± 84529.53837057705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25439141.17647059,
            "unit": "ns",
            "range": "± 520562.5383405239"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5864004.411764706,
            "unit": "ns",
            "range": "± 278707.87008248887"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28164770,
            "unit": "ns",
            "range": "± 593326.3263828324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97964.28571428571,
            "unit": "ns",
            "range": "± 11830.34931641723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197130.20833333334,
            "unit": "ns",
            "range": "± 16702.146850923826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171178.57142857142,
            "unit": "ns",
            "range": "± 12091.679425960905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3571462.5,
            "unit": "ns",
            "range": "± 92349.90083796847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8924034.782608695,
            "unit": "ns",
            "range": "± 220100.9119982255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21198.989898989897,
            "unit": "ns",
            "range": "± 2955.7103137960935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50778.40909090909,
            "unit": "ns",
            "range": "± 4822.825252580472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40820.61855670103,
            "unit": "ns",
            "range": "± 2715.9228842885177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102768.47826086957,
            "unit": "ns",
            "range": "± 14923.909052092442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6188.1720430107525,
            "unit": "ns",
            "range": "± 1133.5639701522373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21022.680412371134,
            "unit": "ns",
            "range": "± 2729.9841709949824"
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
        "date": 1679993485774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101746.15384615384,
            "unit": "ns",
            "range": "± 1418.6938738474582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4805096.033653846,
            "unit": "ns",
            "range": "± 11859.643654411075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1544196.9029017857,
            "unit": "ns",
            "range": "± 3995.5147888321344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173282.8683035714,
            "unit": "ns",
            "range": "± 3175.805013189324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661020.535714286,
            "unit": "ns",
            "range": "± 9128.488684638416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841800.7096354166,
            "unit": "ns",
            "range": "± 1763.8678341698255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753538.8671875,
            "unit": "ns",
            "range": "± 1607.2560453368826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4846340.546875,
            "unit": "ns",
            "range": "± 32673.62499463183"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5719146.666666667,
            "unit": "ns",
            "range": "± 102235.87479568068"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26420482.352941178,
            "unit": "ns",
            "range": "± 523811.2007623717"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6350113.333333333,
            "unit": "ns",
            "range": "± 99417.88331990136"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29128000,
            "unit": "ns",
            "range": "± 658625.0454745217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98320.65217391304,
            "unit": "ns",
            "range": "± 10740.84878103347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200705.88235294117,
            "unit": "ns",
            "range": "± 8446.334228314692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192646.46464646465,
            "unit": "ns",
            "range": "± 14216.929496642826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3678276.6666666665,
            "unit": "ns",
            "range": "± 34400.42496968951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9189593.75,
            "unit": "ns",
            "range": "± 175495.93715620122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21709.183673469386,
            "unit": "ns",
            "range": "± 2517.0690177551883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55750,
            "unit": "ns",
            "range": "± 5134.273973091934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41368.88888888889,
            "unit": "ns",
            "range": "± 2559.829894473303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105713.1313131313,
            "unit": "ns",
            "range": "± 22945.39501380884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6500.515463917526,
            "unit": "ns",
            "range": "± 705.2073736586586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20105.263157894737,
            "unit": "ns",
            "range": "± 2404.090858420936"
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
        "date": 1679997008171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92671.42857142857,
            "unit": "ns",
            "range": "± 1589.595290258872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4955373.076923077,
            "unit": "ns",
            "range": "± 8162.07412997012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526824.8209635417,
            "unit": "ns",
            "range": "± 1761.1528068916973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144759.12109375,
            "unit": "ns",
            "range": "± 1005.8887965964051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610699.21875,
            "unit": "ns",
            "range": "± 10349.32271526822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808002.3297991072,
            "unit": "ns",
            "range": "± 378.2198542295706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738716.0016741072,
            "unit": "ns",
            "range": "± 573.144142602572"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3995533.6979166665,
            "unit": "ns",
            "range": "± 14677.270052585445"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5463000,
            "unit": "ns",
            "range": "± 30783.46417586342"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23115826.666666668,
            "unit": "ns",
            "range": "± 259217.89914682828"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5577680.281690141,
            "unit": "ns",
            "range": "± 273284.0205561754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26267300,
            "unit": "ns",
            "range": "± 305848.20231144544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83316.16161616161,
            "unit": "ns",
            "range": "± 8885.469760883376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174212.5,
            "unit": "ns",
            "range": "± 5994.523209617117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146375,
            "unit": "ns",
            "range": "± 1762.8102563804193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3421893.3333333335,
            "unit": "ns",
            "range": "± 29609.469206094636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8582353.333333334,
            "unit": "ns",
            "range": "± 57435.46523417972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14416.091954022988,
            "unit": "ns",
            "range": "± 766.7317476415635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43082.41758241758,
            "unit": "ns",
            "range": "± 3326.21217358235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36764.13043478261,
            "unit": "ns",
            "range": "± 2267.039581991521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76388.63636363637,
            "unit": "ns",
            "range": "± 9027.65141513258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4633.1578947368425,
            "unit": "ns",
            "range": "± 644.5603204657614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13089.411764705883,
            "unit": "ns",
            "range": "± 962.5145056930141"
          }
        ]
      }
    ]
  }
}