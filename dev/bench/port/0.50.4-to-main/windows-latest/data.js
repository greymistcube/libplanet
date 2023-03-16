window.BENCHMARK_DATA = {
  "lastUpdate": 1678939315470,
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
          "id": "3dcb8d4f426e4e1694e4a244ac74875949ca478f",
          "message": "Fix tests",
          "timestamp": "2023-03-16T12:46:07+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/greymistcube/libplanet/commit/3dcb8d4f426e4e1694e4a244ac74875949ca478f"
        },
        "date": 1678939293257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332916,
            "unit": "ns",
            "range": "± 105128.28788262136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2401360.909090909,
            "unit": "ns",
            "range": "± 100333.46377386735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2333694.736842105,
            "unit": "ns",
            "range": "± 76177.981309663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4817661.392405063,
            "unit": "ns",
            "range": "± 249328.05646445818"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42404.23728813559,
            "unit": "ns",
            "range": "± 1875.644444092373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6922678.571428572,
            "unit": "ns",
            "range": "± 25157.692769697813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17817300,
            "unit": "ns",
            "range": "± 120892.41970800793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44825986.666666664,
            "unit": "ns",
            "range": "± 353115.547391394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89917986.66666667,
            "unit": "ns",
            "range": "± 991595.8449940801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 180502180,
            "unit": "ns",
            "range": "± 1413525.665641969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4750111.778846154,
            "unit": "ns",
            "range": "± 4009.951133798606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497652.6171875,
            "unit": "ns",
            "range": "± 1986.2061857895344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136079.7395833333,
            "unit": "ns",
            "range": "± 3233.358434692988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617768.2552083335,
            "unit": "ns",
            "range": "± 4426.491450991076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808674.3815104166,
            "unit": "ns",
            "range": "± 797.0675000547894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714081.8587239584,
            "unit": "ns",
            "range": "± 570.2708816621605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2864650,
            "unit": "ns",
            "range": "± 67059.68237324123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4578376,
            "unit": "ns",
            "range": "± 99720.15125673781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21136300,
            "unit": "ns",
            "range": "± 215445.0027983226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5595253.333333333,
            "unit": "ns",
            "range": "± 92430.55977842167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24273184.615384616,
            "unit": "ns",
            "range": "± 278985.8325141077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172559.45945945947,
            "unit": "ns",
            "range": "± 5165.99240005998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175146.66666666666,
            "unit": "ns",
            "range": "± 6589.819972709974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145908.33333333334,
            "unit": "ns",
            "range": "± 5719.092076929446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10202880,
            "unit": "ns",
            "range": "± 77326.11091068416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8211542.857142857,
            "unit": "ns",
            "range": "± 77991.26641722544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15948.91304347826,
            "unit": "ns",
            "range": "± 1154.969631418215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46434.04255319149,
            "unit": "ns",
            "range": "± 3554.2660477171235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34454.166666666664,
            "unit": "ns",
            "range": "± 715.6506110536407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82951.54639175258,
            "unit": "ns",
            "range": "± 13483.347085402405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4610.309278350515,
            "unit": "ns",
            "range": "± 667.3149768666333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16112.765957446809,
            "unit": "ns",
            "range": "± 1357.51465209647"
          }
        ]
      }
    ]
  }
}