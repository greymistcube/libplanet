window.BENCHMARK_DATA = {
  "lastUpdate": 1706249721393,
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
          "id": "990ba3f09df22e475923bd96d5ebb62a17e6e2d1",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T15:02:22+09:00",
          "tree_id": "325a2bcac55fa63637e4047806c84fe2ec7ad395",
          "url": "https://github.com/greymistcube/libplanet/commit/990ba3f09df22e475923bd96d5ebb62a17e6e2d1"
        },
        "date": 1706249703841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950989.7959183673,
            "unit": "ns",
            "range": "± 99701.90904892022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717691.5254237289,
            "unit": "ns",
            "range": "± 75149.67200730403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1507642.7083333333,
            "unit": "ns",
            "range": "± 144291.3811809771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10814955.43478261,
            "unit": "ns",
            "range": "± 899282.961172874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34287.77777777778,
            "unit": "ns",
            "range": "± 2042.1170870577998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4989613.333333333,
            "unit": "ns",
            "range": "± 38977.72013171969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12979707.142857144,
            "unit": "ns",
            "range": "± 96192.03120909688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32043793.333333332,
            "unit": "ns",
            "range": "± 213153.02171601195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63753435.71428572,
            "unit": "ns",
            "range": "± 335529.4314894066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127651264.28571428,
            "unit": "ns",
            "range": "± 669243.6058797939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3418249.5342548075,
            "unit": "ns",
            "range": "± 6701.525927920364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079526.5364583333,
            "unit": "ns",
            "range": "± 2178.1190877089984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729988.4207589285,
            "unit": "ns",
            "range": "± 563.6292918961043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914246.1458333333,
            "unit": "ns",
            "range": "± 3302.314885574445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623761.1955915178,
            "unit": "ns",
            "range": "± 1377.9546556110497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583286.7903645834,
            "unit": "ns",
            "range": "± 1742.6042774375085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182038.4615384615,
            "unit": "ns",
            "range": "± 72449.41834565328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2175214.285714286,
            "unit": "ns",
            "range": "± 59662.12877856111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2709464.285714286,
            "unit": "ns",
            "range": "± 39600.4779913432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888557.1428571427,
            "unit": "ns",
            "range": "± 82497.79089554765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12501537.362637363,
            "unit": "ns",
            "range": "± 1445208.7339164962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171671.6049382716,
            "unit": "ns",
            "range": "± 8377.503126945123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167664.51612903227,
            "unit": "ns",
            "range": "± 6110.622215486024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148583.33333333334,
            "unit": "ns",
            "range": "± 7185.251779670279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2889378.5714285714,
            "unit": "ns",
            "range": "± 34312.840802767176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506109.523809524,
            "unit": "ns",
            "range": "± 57538.473257133825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12538.775510204081,
            "unit": "ns",
            "range": "± 2895.700070369581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57338.38383838384,
            "unit": "ns",
            "range": "± 5411.37703759417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46788.17204301075,
            "unit": "ns",
            "range": "± 4384.454987258606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45047.82608695652,
            "unit": "ns",
            "range": "± 5795.877243728247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2914.1304347826085,
            "unit": "ns",
            "range": "± 689.0958436247514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10745.348837209302,
            "unit": "ns",
            "range": "± 892.1430875401608"
          }
        ]
      }
    ]
  }
}