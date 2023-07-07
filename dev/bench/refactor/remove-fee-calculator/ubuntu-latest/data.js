window.BENCHMARK_DATA = {
  "lastUpdate": 1688714138301,
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
          "id": "aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee",
          "message": "Removed IFeeCalculator",
          "timestamp": "2023-07-07T16:02:07+09:00",
          "tree_id": "76cc5bf139a9e106b2356c034b64eb761e2b55f5",
          "url": "https://github.com/greymistcube/libplanet/commit/aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee"
        },
        "date": 1688714130382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301463.5106382979,
            "unit": "ns",
            "range": "± 11658.547000735667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281336.28571428574,
            "unit": "ns",
            "range": "± 10954.115195137092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257160.4745762712,
            "unit": "ns",
            "range": "± 11368.197214546608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4312970.785714285,
            "unit": "ns",
            "range": "± 22424.00757148316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3945286.4,
            "unit": "ns",
            "range": "± 35534.71958883513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22056.680412371134,
            "unit": "ns",
            "range": "± 2576.8855820640983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105247.8469387755,
            "unit": "ns",
            "range": "± 8248.502804916932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81428.89,
            "unit": "ns",
            "range": "± 7984.354870930372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98399.86734693877,
            "unit": "ns",
            "range": "± 9530.736501476278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5673.469387755102,
            "unit": "ns",
            "range": "± 847.6226329677665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19741.913978494624,
            "unit": "ns",
            "range": "± 1599.2206706359927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424682.6631578947,
            "unit": "ns",
            "range": "± 112241.76598076617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647684.703703704,
            "unit": "ns",
            "range": "± 73959.14619718459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1873559.09,
            "unit": "ns",
            "range": "± 125005.75419095873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4924923.53125,
            "unit": "ns",
            "range": "± 152004.86849100175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6343377.90234375,
            "unit": "ns",
            "range": "± 13348.742089938745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865871.6378348214,
            "unit": "ns",
            "range": "± 4220.333014678072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362072.46953125,
            "unit": "ns",
            "range": "± 446.4277686705952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665050.1265625,
            "unit": "ns",
            "range": "± 6255.314987661918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806848.7410807292,
            "unit": "ns",
            "range": "± 631.0613104004265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741137.9215959822,
            "unit": "ns",
            "range": "± 506.83209720102894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346248.066666667,
            "unit": "ns",
            "range": "± 47230.96938218559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3484737.909090909,
            "unit": "ns",
            "range": "± 120208.7173443463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277006.8,
            "unit": "ns",
            "range": "± 35873.978209838955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3835650.8333333335,
            "unit": "ns",
            "range": "± 120620.16296563833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6481435.263157895,
            "unit": "ns",
            "range": "± 140199.1174008683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7855237,
            "unit": "ns",
            "range": "± 72792.47413513492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20160329.57142857,
            "unit": "ns",
            "range": "± 125236.93547384143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50942379.928571425,
            "unit": "ns",
            "range": "± 214903.58507854142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101784393.13333334,
            "unit": "ns",
            "range": "± 425125.79060099827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204192497.66666666,
            "unit": "ns",
            "range": "± 614067.1323842913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47566.914893617024,
            "unit": "ns",
            "range": "± 2768.728436298754"
          }
        ]
      }
    ]
  }
}