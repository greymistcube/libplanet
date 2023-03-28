window.BENCHMARK_DATA = {
  "lastUpdate": 1679991753745,
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
      }
    ]
  }
}