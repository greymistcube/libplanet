window.BENCHMARK_DATA = {
  "lastUpdate": 1687486165872,
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
          "id": "a1b809aebe20f9fa9d23c821b674da5f9365766b",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:51:07+09:00",
          "tree_id": "378e041fcf4b607cf95c54995288889dcc255288",
          "url": "https://github.com/greymistcube/libplanet/commit/a1b809aebe20f9fa9d23c821b674da5f9365766b"
        },
        "date": 1687486137804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415023,
            "unit": "ns",
            "range": "± 127507.73940067602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651527.906976744,
            "unit": "ns",
            "range": "± 143616.6381080203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250795.9183673467,
            "unit": "ns",
            "range": "± 166866.69531031972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5443222.580645162,
            "unit": "ns",
            "range": "± 307055.3639814644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49221.05263157895,
            "unit": "ns",
            "range": "± 3459.0890061574873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7141886.666666667,
            "unit": "ns",
            "range": "± 111002.81763905601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19781960,
            "unit": "ns",
            "range": "± 214736.06989578094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50160992.85714286,
            "unit": "ns",
            "range": "± 491600.2933345274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100876046.66666667,
            "unit": "ns",
            "range": "± 1409747.8902609637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201538766.66666666,
            "unit": "ns",
            "range": "± 2323063.5080386745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4795039.375,
            "unit": "ns",
            "range": "± 22159.247383294158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528805.2455357143,
            "unit": "ns",
            "range": "± 9781.328222144613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161678.2602163462,
            "unit": "ns",
            "range": "± 3417.1451122440485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619118.6979166665,
            "unit": "ns",
            "range": "± 5673.316954449861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841160.2604166666,
            "unit": "ns",
            "range": "± 2546.749769060153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761068.0598958334,
            "unit": "ns",
            "range": "± 2972.9800057054977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299473.3333333335,
            "unit": "ns",
            "range": "± 57102.232464072295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471440,
            "unit": "ns",
            "range": "± 109445.33741714602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4201431.428571428,
            "unit": "ns",
            "range": "± 136818.67943382877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4324690.909090909,
            "unit": "ns",
            "range": "± 134812.36813539302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6763010,
            "unit": "ns",
            "range": "± 181419.72357891046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266781.8181818182,
            "unit": "ns",
            "range": "± 8339.718765696425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259625.37313432837,
            "unit": "ns",
            "range": "± 12296.96123196619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233912.16216216216,
            "unit": "ns",
            "range": "± 11726.190715047745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4041380,
            "unit": "ns",
            "range": "± 51811.51554294801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3734194.4444444445,
            "unit": "ns",
            "range": "± 77036.23648664402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20831.25,
            "unit": "ns",
            "range": "± 2068.6284548488948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91220.40816326531,
            "unit": "ns",
            "range": "± 7349.4120556439075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75250,
            "unit": "ns",
            "range": "± 4889.313307140852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101311.22448979592,
            "unit": "ns",
            "range": "± 16294.809006153553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6237.894736842105,
            "unit": "ns",
            "range": "± 1031.5428382280902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20890.721649484534,
            "unit": "ns",
            "range": "± 2313.4156959203383"
          }
        ]
      }
    ]
  }
}