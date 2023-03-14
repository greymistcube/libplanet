window.BENCHMARK_DATA = {
  "lastUpdate": 1678786910221,
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
          "id": "25a63e7c6d355a1608e24904be5b0c639cd3d757",
          "message": "Prepare 0.50.4",
          "timestamp": "2023-03-14T18:27:26+09:00",
          "tree_id": "6df23b5e65ea251201fdd4b86139e1111bcb91ab",
          "url": "https://github.com/greymistcube/libplanet/commit/25a63e7c6d355a1608e24904be5b0c639cd3d757"
        },
        "date": 1678786903021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120713.23404255319,
            "unit": "ns",
            "range": "± 8902.018727710367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220794.3,
            "unit": "ns",
            "range": "± 10253.047982803999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213570.86486486485,
            "unit": "ns",
            "range": "± 7194.858508230266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4109700.3076923075,
            "unit": "ns",
            "range": "± 23367.162013477428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10507736.285714285,
            "unit": "ns",
            "range": "± 58005.10269918378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27588.41304347826,
            "unit": "ns",
            "range": "± 2642.447421798748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65432.358695652176,
            "unit": "ns",
            "range": "± 5107.560916746388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51489.43877551021,
            "unit": "ns",
            "range": "± 4569.3142057256155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111723.79591836735,
            "unit": "ns",
            "range": "± 16557.863459688087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8112.357142857143,
            "unit": "ns",
            "range": "± 997.8938981468737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24319.847826086956,
            "unit": "ns",
            "range": "± 1962.012265617823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6218102.036458333,
            "unit": "ns",
            "range": "± 55126.70259523671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900153.591517857,
            "unit": "ns",
            "range": "± 1404.7411152281363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362716.855189732,
            "unit": "ns",
            "range": "± 3360.7761486014583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635944.1411458333,
            "unit": "ns",
            "range": "± 1560.966924699304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825446.880859375,
            "unit": "ns",
            "range": "± 1171.9054527651915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779729.1260416667,
            "unit": "ns",
            "range": "± 242.7577915320364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126505.6530612245,
            "unit": "ns",
            "range": "± 9055.617922641548"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5318247.546708777,
            "unit": "ns",
            "range": "± 302549.0025374284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6550097.459459459,
            "unit": "ns",
            "range": "± 217877.18465668202"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28991670.285714287,
            "unit": "ns",
            "range": "± 459486.8408798649"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7365337.217391305,
            "unit": "ns",
            "range": "± 183400.51362497636"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32158468.8,
            "unit": "ns",
            "range": "± 600403.2224976812"
          }
        ]
      }
    ]
  }
}