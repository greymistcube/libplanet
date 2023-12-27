window.BENCHMARK_DATA = {
  "lastUpdate": 1703647414018,
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
          "id": "938aabdadb2386ae59955429b57526892249e438",
          "message": "Cleaned up ShortNode internal implementation",
          "timestamp": "2023-12-27T11:18:21+09:00",
          "tree_id": "69943ff6e6d38f5e91e2c20aff61552354c1487d",
          "url": "https://github.com/greymistcube/libplanet/commit/938aabdadb2386ae59955429b57526892249e438"
        },
        "date": 1703647407934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702796.859635417,
            "unit": "ns",
            "range": "± 55998.840101715905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211840.4651041667,
            "unit": "ns",
            "range": "± 3769.65542405528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772745.548828125,
            "unit": "ns",
            "range": "± 858.4767084316436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963310.0564903845,
            "unit": "ns",
            "range": "± 8562.03516063491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621263.0169270834,
            "unit": "ns",
            "range": "± 1945.1753860011308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576999.0913461539,
            "unit": "ns",
            "range": "± 2207.1846655798727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442324.5555555555,
            "unit": "ns",
            "range": "± 50996.21112739331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514799.8958333335,
            "unit": "ns",
            "range": "± 99060.36442927746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3301834.095238095,
            "unit": "ns",
            "range": "± 76424.32655045431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3049049.205882353,
            "unit": "ns",
            "range": "± 61002.667595119055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7338888.879310345,
            "unit": "ns",
            "range": "± 317259.8958865311"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42427.98387096774,
            "unit": "ns",
            "range": "± 5105.822055374635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197426.85483870967,
            "unit": "ns",
            "range": "± 8250.409553364903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196542.80555555556,
            "unit": "ns",
            "range": "± 6452.920897079729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170855.23076923078,
            "unit": "ns",
            "range": "± 2405.202145137568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026449.7333333334,
            "unit": "ns",
            "range": "± 35611.53388894965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855541.3076923075,
            "unit": "ns",
            "range": "± 46292.91569161279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13232.816091954022,
            "unit": "ns",
            "range": "± 1390.9991016058461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61886.1976744186,
            "unit": "ns",
            "range": "± 4925.871374857608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53946.27173913043,
            "unit": "ns",
            "range": "± 3285.6653602295423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68164.04301075269,
            "unit": "ns",
            "range": "± 10544.535522697732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3393.5729166666665,
            "unit": "ns",
            "range": "± 876.3919964657928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14644.030927835052,
            "unit": "ns",
            "range": "± 3057.6870120430635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5475125.866666666,
            "unit": "ns",
            "range": "± 38714.803873724486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14314129.866666667,
            "unit": "ns",
            "range": "± 124163.71928389357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36918057.78571428,
            "unit": "ns",
            "range": "± 146319.77522177427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77292263.33333333,
            "unit": "ns",
            "range": "± 1353563.9240513314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151344145.8846154,
            "unit": "ns",
            "range": "± 2130578.0677653165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962296.8296703297,
            "unit": "ns",
            "range": "± 64409.821886288766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860827.8857142858,
            "unit": "ns",
            "range": "± 60421.130922770346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1406608.682795699,
            "unit": "ns",
            "range": "± 91477.74393402858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5728650.583333333,
            "unit": "ns",
            "range": "± 142188.6861022037"
          }
        ]
      }
    ]
  }
}