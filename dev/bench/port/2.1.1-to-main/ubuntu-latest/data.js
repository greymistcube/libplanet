window.BENCHMARK_DATA = {
  "lastUpdate": 1687446327023,
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
          "id": "014d1b096260bad7983ec840cdb396cfa0f86b4a",
          "message": "Merge tag '2.1.1' into port/2.1.1-to-main\n\nLibplanet 2.1.1",
          "timestamp": "2023-06-22T23:51:12+09:00",
          "tree_id": "9196c9c310d0445ca571a6d6dcee293a2fe6da21",
          "url": "https://github.com/greymistcube/libplanet/commit/014d1b096260bad7983ec840cdb396cfa0f86b4a"
        },
        "date": 1687446319830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3576136,
            "unit": "ns",
            "range": "± 70147.705103232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941340.68,
            "unit": "ns",
            "range": "± 102099.6448266431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4498343.853658536,
            "unit": "ns",
            "range": "± 150094.52924266775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4679725.2272727275,
            "unit": "ns",
            "range": "± 174309.60925077097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7317397.115384615,
            "unit": "ns",
            "range": "± 197701.39392211213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8190800.357142857,
            "unit": "ns",
            "range": "± 94709.00003663622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22930774.2,
            "unit": "ns",
            "range": "± 211971.15787874808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56541925.21428572,
            "unit": "ns",
            "range": "± 446185.9232553827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112827026.2,
            "unit": "ns",
            "range": "± 1695474.3390127565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225645633.86666667,
            "unit": "ns",
            "range": "± 3963672.338226939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296572.4,
            "unit": "ns",
            "range": "± 9708.205008257342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288350.84210526315,
            "unit": "ns",
            "range": "± 8925.599979912973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247667.6875,
            "unit": "ns",
            "range": "± 4591.130052884584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4527589.533333333,
            "unit": "ns",
            "range": "± 71884.4327741874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4140888.5263157897,
            "unit": "ns",
            "range": "± 89314.94181538372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19741.11827956989,
            "unit": "ns",
            "range": "± 1748.678966294907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92681.85263157895,
            "unit": "ns",
            "range": "± 5959.776745012513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76454.53333333334,
            "unit": "ns",
            "range": "± 1195.772784596201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95408.39285714286,
            "unit": "ns",
            "range": "± 6911.980386828377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5741.278350515464,
            "unit": "ns",
            "range": "± 866.3532615493813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20434.39175257732,
            "unit": "ns",
            "range": "± 2457.573975474852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48815.75,
            "unit": "ns",
            "range": "± 2735.6678070582166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6165066.008928572,
            "unit": "ns",
            "range": "± 30446.064157832167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930417.6696614583,
            "unit": "ns",
            "range": "± 3483.8187495942793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395559.406640625,
            "unit": "ns",
            "range": "± 6406.678978922526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681388.099609375,
            "unit": "ns",
            "range": "± 3374.953878684926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827814.8571614583,
            "unit": "ns",
            "range": "± 910.6909719114266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765342.0547526042,
            "unit": "ns",
            "range": "± 1182.2733844614243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556150.1075268816,
            "unit": "ns",
            "range": "± 85859.33743711564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2971679.804347826,
            "unit": "ns",
            "range": "± 108879.73972754824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2520137.9875,
            "unit": "ns",
            "range": "± 130887.1740687708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5930562.020408163,
            "unit": "ns",
            "range": "± 216628.39324554254"
          }
        ]
      }
    ]
  }
}