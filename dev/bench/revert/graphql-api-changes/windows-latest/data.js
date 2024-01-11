window.BENCHMARK_DATA = {
  "lastUpdate": 1704940880988,
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
          "id": "4adc1b0389c971a214c9a9c83951525691b1a123",
          "message": "Roll back some name changes; code cleanup for more consistency",
          "timestamp": "2024-01-11T11:29:02+09:00",
          "tree_id": "cc892825a37f09f4260b2d6020b8e93e6242046f",
          "url": "https://github.com/greymistcube/libplanet/commit/4adc1b0389c971a214c9a9c83951525691b1a123"
        },
        "date": 1704940859226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944109.1836734693,
            "unit": "ns",
            "range": "± 91501.78758519149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725052.3255813953,
            "unit": "ns",
            "range": "± 96573.48037725005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1330478.5714285714,
            "unit": "ns",
            "range": "± 120305.2905658946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5190890.243902439,
            "unit": "ns",
            "range": "± 184015.0154265652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34172.15189873418,
            "unit": "ns",
            "range": "± 1677.3710129522633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4964228.571428572,
            "unit": "ns",
            "range": "± 27082.9048712234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13063661.538461538,
            "unit": "ns",
            "range": "± 62262.141231804984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32334957.14285714,
            "unit": "ns",
            "range": "± 379896.5926392353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64909740,
            "unit": "ns",
            "range": "± 678481.7744683451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134976343.33333334,
            "unit": "ns",
            "range": "± 1477946.0179909272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3395969.921875,
            "unit": "ns",
            "range": "± 6390.460106448596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058780.5859375,
            "unit": "ns",
            "range": "± 2163.9930551687953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747647.1419270834,
            "unit": "ns",
            "range": "± 1424.3548782787088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959407.842548077,
            "unit": "ns",
            "range": "± 1723.635246704626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623822.8515625,
            "unit": "ns",
            "range": "± 1166.5836130000412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554813.65234375,
            "unit": "ns",
            "range": "± 1769.7955131483616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2108768.2926829266,
            "unit": "ns",
            "range": "± 74180.76044037426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289521.4285714286,
            "unit": "ns",
            "range": "± 27253.57220259755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2872884.4827586208,
            "unit": "ns",
            "range": "± 82072.0688344008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2706756.5656565656,
            "unit": "ns",
            "range": "± 286289.0722506288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6262673.529411765,
            "unit": "ns",
            "range": "± 296585.6381913784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181051.21951219512,
            "unit": "ns",
            "range": "± 9370.537540774882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162993.02325581395,
            "unit": "ns",
            "range": "± 8867.664865349765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143003.33333333334,
            "unit": "ns",
            "range": "± 3703.2821726915045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2756644.4444444445,
            "unit": "ns",
            "range": "± 56164.74948726576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2469078.5714285714,
            "unit": "ns",
            "range": "± 39291.65459584416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10490.80459770115,
            "unit": "ns",
            "range": "± 1224.6150020453076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52429.77528089887,
            "unit": "ns",
            "range": "± 3840.8148926805325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44434.12698412698,
            "unit": "ns",
            "range": "± 2034.9531459460181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56715.30612244898,
            "unit": "ns",
            "range": "± 12390.255166912395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2394.8453608247423,
            "unit": "ns",
            "range": "± 485.7063443285071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10476.923076923076,
            "unit": "ns",
            "range": "± 1075.3890172684203"
          }
        ]
      }
    ]
  }
}