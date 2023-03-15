window.BENCHMARK_DATA = {
  "lastUpdate": 1678875054742,
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
          "id": "fa27c557bf7e6bc4b3f3e876ad603cccb8649249",
          "message": "Prepare 0.52.2",
          "timestamp": "2023-03-15T18:58:28+09:00",
          "tree_id": "052b095cbc893302d5a8a8513b9e3eb3ff447e9c",
          "url": "https://github.com/greymistcube/libplanet/commit/fa27c557bf7e6bc4b3f3e876ad603cccb8649249"
        },
        "date": 1678875047518,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201603.89655172414,
            "unit": "ns",
            "range": "± 8512.57380149816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203267.06818181818,
            "unit": "ns",
            "range": "± 7630.3435577434275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189733.77272727274,
            "unit": "ns",
            "range": "± 8936.905678219875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11686815.642857144,
            "unit": "ns",
            "range": "± 37873.69912994655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9291237.6,
            "unit": "ns",
            "range": "± 53503.69065481104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21984.21875,
            "unit": "ns",
            "range": "± 1688.7762819841191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58182.315217391304,
            "unit": "ns",
            "range": "± 4148.387021188848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41565,
            "unit": "ns",
            "range": "± 1666.1957042916658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101118.79591836735,
            "unit": "ns",
            "range": "± 14277.907827013178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5739.755102040816,
            "unit": "ns",
            "range": "± 678.3174919011462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21877.958333333332,
            "unit": "ns",
            "range": "± 2027.0449734925476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355070.9285714286,
            "unit": "ns",
            "range": "± 143762.70206911452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5228868.692307692,
            "unit": "ns",
            "range": "± 60393.20312527535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23852376.733333334,
            "unit": "ns",
            "range": "± 321633.2879688265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6380097.5,
            "unit": "ns",
            "range": "± 106738.7639064142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27405171.14285714,
            "unit": "ns",
            "range": "± 280527.61245549074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6008746.551339285,
            "unit": "ns",
            "range": "± 4985.860998803778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983966.423549107,
            "unit": "ns",
            "range": "± 4072.9849273131613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341619.5930989583,
            "unit": "ns",
            "range": "± 515.0078749466836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578270.2938058036,
            "unit": "ns",
            "range": "± 3302.0506660219557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820731.8192057292,
            "unit": "ns",
            "range": "± 4015.366627810337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730457.9864583333,
            "unit": "ns",
            "range": "± 347.8875424879021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7892260.916666667,
            "unit": "ns",
            "range": "± 41088.64823648394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19899873.214285713,
            "unit": "ns",
            "range": "± 104946.44420419587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50259517.6,
            "unit": "ns",
            "range": "± 370817.8399269839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102860721.4,
            "unit": "ns",
            "range": "± 490644.294724629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202342184.8,
            "unit": "ns",
            "range": "± 866824.2427057847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46618.6037735849,
            "unit": "ns",
            "range": "± 1937.950298438083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417017.3,
            "unit": "ns",
            "range": "± 104843.29687657434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591257.3076923075,
            "unit": "ns",
            "range": "± 70486.72547069794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2252875.787234043,
            "unit": "ns",
            "range": "± 147752.76886941202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5182573.905660378,
            "unit": "ns",
            "range": "± 213754.67251953404"
          }
        ]
      }
    ]
  }
}