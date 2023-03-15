window.BENCHMARK_DATA = {
  "lastUpdate": 1678866362963,
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
          "id": "d9ac9e43466be30ffab0ca9f7fa20412332985f0",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T16:31:49+09:00",
          "tree_id": "c71203d3f8c74634e228142d5310896d1e4e9475",
          "url": "https://github.com/greymistcube/libplanet/commit/d9ac9e43466be30ffab0ca9f7fa20412332985f0"
        },
        "date": 1678866356259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205510.9024390244,
            "unit": "ns",
            "range": "± 6938.58894806746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207977.46666666667,
            "unit": "ns",
            "range": "± 6200.764367417123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190523.88,
            "unit": "ns",
            "range": "± 5009.1388258528705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12605036.57142857,
            "unit": "ns",
            "range": "± 60520.67561613111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10198887.357142856,
            "unit": "ns",
            "range": "± 64541.07530463079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23129.782608695652,
            "unit": "ns",
            "range": "± 1431.0606058850885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60950.05319148936,
            "unit": "ns",
            "range": "± 5323.072751078016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46538.92957746479,
            "unit": "ns",
            "range": "± 2253.6366250633578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114444.55102040817,
            "unit": "ns",
            "range": "± 16038.382168406024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6796.01030927835,
            "unit": "ns",
            "range": "± 655.1722816501104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21796.252631578947,
            "unit": "ns",
            "range": "± 1522.2202077985417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3614865.6666666665,
            "unit": "ns",
            "range": "± 41881.23323615187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5700941.692307692,
            "unit": "ns",
            "range": "± 37646.49690074013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25874367.733333334,
            "unit": "ns",
            "range": "± 308056.92412916775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6886722.428571428,
            "unit": "ns",
            "range": "± 144800.95529884167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29553573.266666666,
            "unit": "ns",
            "range": "± 364187.15964684705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012830.445870535,
            "unit": "ns",
            "range": "± 27573.782807606553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908153.073046875,
            "unit": "ns",
            "range": "± 1151.4842954254825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378099.534765625,
            "unit": "ns",
            "range": "± 2875.2642756478704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614477.7756696427,
            "unit": "ns",
            "range": "± 3574.410273945121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833442.6856971154,
            "unit": "ns",
            "range": "± 205.59659284104723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761676.7454427084,
            "unit": "ns",
            "range": "± 134.13476730325658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8283211.857142857,
            "unit": "ns",
            "range": "± 141432.45531286014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22303419.2,
            "unit": "ns",
            "range": "± 184237.71365090887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55982482.93333333,
            "unit": "ns",
            "range": "± 251448.85550614935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112215458.6923077,
            "unit": "ns",
            "range": "± 168732.24878654376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 225038749.6,
            "unit": "ns",
            "range": "± 834311.9959030228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51499.875,
            "unit": "ns",
            "range": "± 3230.092524963888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484038.125,
            "unit": "ns",
            "range": "± 89483.74544960372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759406.9444444445,
            "unit": "ns",
            "range": "± 57563.05151077404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2348661.6363636362,
            "unit": "ns",
            "range": "± 115745.28498398511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419440.565217392,
            "unit": "ns",
            "range": "± 132120.21265699522"
          }
        ]
      }
    ]
  }
}