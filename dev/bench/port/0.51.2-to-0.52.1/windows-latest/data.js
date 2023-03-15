window.BENCHMARK_DATA = {
  "lastUpdate": 1678873587883,
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
          "id": "b2e0658c9ac12b938ceac00d922b21d0bcf15ea5",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:29:14+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/b2e0658c9ac12b938ceac00d922b21d0bcf15ea5"
        },
        "date": 1678873566385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374344.4444444445,
            "unit": "ns",
            "range": "± 94032.4685807636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2513597.2972972975,
            "unit": "ns",
            "range": "± 84444.11526923356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185292.7083333335,
            "unit": "ns",
            "range": "± 134619.98072139898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5044555.555555556,
            "unit": "ns",
            "range": "± 136390.85614888428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48649.47368421053,
            "unit": "ns",
            "range": "± 3001.5908436003087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6972492.857142857,
            "unit": "ns",
            "range": "± 79879.86618653052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19760626.666666668,
            "unit": "ns",
            "range": "± 141294.71968026197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49881053.333333336,
            "unit": "ns",
            "range": "± 717329.2757231673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99855366.66666667,
            "unit": "ns",
            "range": "± 1380985.0452622923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201698585.7142857,
            "unit": "ns",
            "range": "± 777850.3473401184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4763225.338541667,
            "unit": "ns",
            "range": "± 20726.35959626757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499431.4388020833,
            "unit": "ns",
            "range": "± 7364.571284061961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1188838.9322916667,
            "unit": "ns",
            "range": "± 5936.935608008652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622436.5234375,
            "unit": "ns",
            "range": "± 7260.293966659838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821527.6432291666,
            "unit": "ns",
            "range": "± 3026.690501071614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768383.9913504465,
            "unit": "ns",
            "range": "± 1261.0773416227787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155702.564102564,
            "unit": "ns",
            "range": "± 110302.93808936868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5036104.166666667,
            "unit": "ns",
            "range": "± 130212.5869797963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26975502.63157895,
            "unit": "ns",
            "range": "± 595899.062452341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6092000,
            "unit": "ns",
            "range": "± 162034.5359277871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26196191.666666668,
            "unit": "ns",
            "range": "± 640176.5360577039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188278.37837837837,
            "unit": "ns",
            "range": "± 6329.610095729749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185121.05263157896,
            "unit": "ns",
            "range": "± 8029.960345972746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164004.08163265305,
            "unit": "ns",
            "range": "± 9663.918634524545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10775226.315789474,
            "unit": "ns",
            "range": "± 234137.5850081535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8752620.833333334,
            "unit": "ns",
            "range": "± 225847.507189305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20205.78947368421,
            "unit": "ns",
            "range": "± 1592.3163770334297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52343.01075268817,
            "unit": "ns",
            "range": "± 4116.018492201413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41715.90909090909,
            "unit": "ns",
            "range": "± 2220.0697081132207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95610.63829787234,
            "unit": "ns",
            "range": "± 14796.31215376439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5860.8247422680415,
            "unit": "ns",
            "range": "± 820.5126320669557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19706.25,
            "unit": "ns",
            "range": "± 2221.41787343603"
          }
        ]
      }
    ]
  }
}