window.BENCHMARK_DATA = {
  "lastUpdate": 1704943453078,
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
          "id": "95985df3b5be18d2ba875ecbcfd93f2b2cec314b",
          "message": "Release 3.9.4",
          "timestamp": "2024-01-11T12:13:40+09:00",
          "tree_id": "9e36bd32c16585a301e61095347f3be5f9981035",
          "url": "https://github.com/greymistcube/libplanet/commit/95985df3b5be18d2ba875ecbcfd93f2b2cec314b"
        },
        "date": 1704943446887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761717.9119591345,
            "unit": "ns",
            "range": "± 4423.204329936504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201314.3550180288,
            "unit": "ns",
            "range": "± 4127.280105007963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766243.4870442708,
            "unit": "ns",
            "range": "± 11365.401638819583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962875.8354166667,
            "unit": "ns",
            "range": "± 3678.639679472243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612798.16015625,
            "unit": "ns",
            "range": "± 574.736830312067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569147.4222005209,
            "unit": "ns",
            "range": "± 878.8777051795759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419080,
            "unit": "ns",
            "range": "± 62406.7475100458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2517069.3076923075,
            "unit": "ns",
            "range": "± 40415.742140046976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153992.95,
            "unit": "ns",
            "range": "± 70114.88137296344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3020715,
            "unit": "ns",
            "range": "± 108423.6790598704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6950324.0625,
            "unit": "ns",
            "range": "± 131429.49877429535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40871.12371134021,
            "unit": "ns",
            "range": "± 6801.769206515518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196869.15625,
            "unit": "ns",
            "range": "± 6137.647553495347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185846.64285714287,
            "unit": "ns",
            "range": "± 5126.141411735463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166729.21875,
            "unit": "ns",
            "range": "± 5116.274651095614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3188151.5384615385,
            "unit": "ns",
            "range": "± 38249.85061107077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805201.5384615385,
            "unit": "ns",
            "range": "± 32728.771136456748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13381.905263157894,
            "unit": "ns",
            "range": "± 1517.4075181162884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65389.92929292929,
            "unit": "ns",
            "range": "± 9452.748585542733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50883.18518518518,
            "unit": "ns",
            "range": "± 1291.1022731650967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58223.1935483871,
            "unit": "ns",
            "range": "± 10867.954113553558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3356.035294117647,
            "unit": "ns",
            "range": "± 533.9792542576829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11860.779569892473,
            "unit": "ns",
            "range": "± 1336.813784677642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5520586.142857143,
            "unit": "ns",
            "range": "± 21512.8980054619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14660745.666666666,
            "unit": "ns",
            "range": "± 63667.75241906407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37121725.7,
            "unit": "ns",
            "range": "± 562140.7878807331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74568558.3076923,
            "unit": "ns",
            "range": "± 467478.8607713338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150195706.2142857,
            "unit": "ns",
            "range": "± 1084662.1653975723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985593.3369565217,
            "unit": "ns",
            "range": "± 77416.23623928407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929768.525,
            "unit": "ns",
            "range": "± 67582.40939315477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1476723.7959183673,
            "unit": "ns",
            "range": "± 123369.12738474896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5578141.388888889,
            "unit": "ns",
            "range": "± 115914.88446327325"
          }
        ]
      }
    ]
  }
}