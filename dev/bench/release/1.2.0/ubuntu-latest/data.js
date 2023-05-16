window.BENCHMARK_DATA = {
  "lastUpdate": 1684211911567,
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
          "id": "67095a318905220de755f1bdc333bf41106d38a8",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:26:31+09:00",
          "tree_id": "9b93bd801f7c90769d2c2ecbc0ee7ad86ce2f3d1",
          "url": "https://github.com/greymistcube/libplanet/commit/67095a318905220de755f1bdc333bf41106d38a8"
        },
        "date": 1684211904210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147732.6,
            "unit": "ns",
            "range": "± 33595.08619213742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376584.933333333,
            "unit": "ns",
            "range": "± 54329.472928035066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4188274.3333333335,
            "unit": "ns",
            "range": "± 58415.65368566725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4076826.880952381,
            "unit": "ns",
            "range": "± 147663.09343168573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6747779.923076923,
            "unit": "ns",
            "range": "± 234832.9002894101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269459.8611111111,
            "unit": "ns",
            "range": "± 6849.410532104321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263822.32352941175,
            "unit": "ns",
            "range": "± 8492.712404353862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222768.23076923078,
            "unit": "ns",
            "range": "± 1237.8641655317808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4083610.0714285714,
            "unit": "ns",
            "range": "± 47374.00599722674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808689.9285714286,
            "unit": "ns",
            "range": "± 27765.50534376253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14819.957894736843,
            "unit": "ns",
            "range": "± 1077.5265402841812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79879.98039215687,
            "unit": "ns",
            "range": "± 2976.3211553204137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68838.90909090909,
            "unit": "ns",
            "range": "± 1849.6558525107507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75931.36585365854,
            "unit": "ns",
            "range": "± 5212.350427169086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4122.670103092783,
            "unit": "ns",
            "range": "± 470.71476504818105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15809.010752688173,
            "unit": "ns",
            "range": "± 1252.6361810426185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6193268.825,
            "unit": "ns",
            "range": "± 15035.57588673972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974072.7942708333,
            "unit": "ns",
            "range": "± 1832.5065460906956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334228.2919921875,
            "unit": "ns",
            "range": "± 2540.7825731923144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586241.336197917,
            "unit": "ns",
            "range": "± 7214.363027482515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792422.9723074777,
            "unit": "ns",
            "range": "± 893.784153331277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741850.5293619792,
            "unit": "ns",
            "range": "± 835.6609031232896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7435226.2,
            "unit": "ns",
            "range": "± 15231.377018697762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18676935.466666665,
            "unit": "ns",
            "range": "± 75301.53466645823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48044910.46666667,
            "unit": "ns",
            "range": "± 463587.3051654374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96453659.33333333,
            "unit": "ns",
            "range": "± 1103820.9522146028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196107937.46666667,
            "unit": "ns",
            "range": "± 1446806.4607547037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1279252.8617021276,
            "unit": "ns",
            "range": "± 76062.47870143646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2487306.217391304,
            "unit": "ns",
            "range": "± 61115.36616251157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2069918.1625,
            "unit": "ns",
            "range": "± 104410.90824098524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4991045.48,
            "unit": "ns",
            "range": "± 131705.0611812621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45086.76190476191,
            "unit": "ns",
            "range": "± 2311.334281209692"
          }
        ]
      }
    ]
  }
}