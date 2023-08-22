window.BENCHMARK_DATA = {
  "lastUpdate": 1692721346896,
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
          "id": "72d80bf51c0bcd6f41f280d72148bd74355e6f3e",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T01:00:48+09:00",
          "tree_id": "14da1eae20fc142705db54b95adc7312a8ddc449",
          "url": "https://github.com/greymistcube/libplanet/commit/72d80bf51c0bcd6f41f280d72148bd74355e6f3e"
        },
        "date": 1692721321537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9682735.018518519,
            "unit": "ns",
            "range": "± 402400.6706732047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22141505.890625,
            "unit": "ns",
            "range": "± 1023759.1967661352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55334589.5,
            "unit": "ns",
            "range": "± 588965.5991941425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107876814.05,
            "unit": "ns",
            "range": "± 2444981.5957695115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223085093.73076922,
            "unit": "ns",
            "range": "± 3656268.8262725603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76075.94382022473,
            "unit": "ns",
            "range": "± 7794.1816008066835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356278.12765957444,
            "unit": "ns",
            "range": "± 49632.66166937609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336399.9680851064,
            "unit": "ns",
            "range": "± 37592.31034799598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306048.2380952381,
            "unit": "ns",
            "range": "± 11027.20387586884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462001.489361702,
            "unit": "ns",
            "range": "± 307328.02392688877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817107.376344086,
            "unit": "ns",
            "range": "± 221102.33193001247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25871.935483870966,
            "unit": "ns",
            "range": "± 4305.847259974186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113316.32631578947,
            "unit": "ns",
            "range": "± 17445.72130586027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110122.58536585367,
            "unit": "ns",
            "range": "± 7083.234296390384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117222.68085106384,
            "unit": "ns",
            "range": "± 18365.230931313923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8014.6505376344085,
            "unit": "ns",
            "range": "± 1263.0253788134592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23579.60989010989,
            "unit": "ns",
            "range": "± 3839.654360748141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703390.2444444445,
            "unit": "ns",
            "range": "± 239416.36642321158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076896.263736264,
            "unit": "ns",
            "range": "± 310674.2612871714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138717.5853658537,
            "unit": "ns",
            "range": "± 255386.66940437932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9442673.275510205,
            "unit": "ns",
            "range": "± 4261864.719876492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3525032.9615384615,
            "unit": "ns",
            "range": "± 273001.1504695461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509740.7108433736,
            "unit": "ns",
            "range": "± 184336.97601116213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4620851.715053763,
            "unit": "ns",
            "range": "± 347089.3776307245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4157201.4210526315,
            "unit": "ns",
            "range": "± 422681.7940949317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7936774.301075269,
            "unit": "ns",
            "range": "± 1096301.249780625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6056613.39703125,
            "unit": "ns",
            "range": "± 157630.22472548837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1764259.629076087,
            "unit": "ns",
            "range": "± 43505.046150548456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059337.8985523898,
            "unit": "ns",
            "range": "± 21087.350201012974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2875480.6915838066,
            "unit": "ns",
            "range": "± 67596.2332904843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814854.2044921875,
            "unit": "ns",
            "range": "± 7371.097883063473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737850.1261067708,
            "unit": "ns",
            "range": "± 10248.985420080295"
          }
        ]
      }
    ]
  }
}