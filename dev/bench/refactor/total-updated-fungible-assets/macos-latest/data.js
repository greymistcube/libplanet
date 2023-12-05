window.BENCHMARK_DATA = {
  "lastUpdate": 1701750014938,
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
          "id": "c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3",
          "message": "Remove internal tracking of amounts for TotalUpdatedFungibleAssets",
          "timestamp": "2023-12-05T13:02:48+09:00",
          "tree_id": "066ad56efd90c1392e78ba1aef0fda604ff04734",
          "url": "https://github.com/greymistcube/libplanet/commit/c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3"
        },
        "date": 1701750000052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7991486.346153846,
            "unit": "ns",
            "range": "± 126025.9083554159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19512417.277777776,
            "unit": "ns",
            "range": "± 371008.0197176345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48097938.28571428,
            "unit": "ns",
            "range": "± 555095.842259477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97120515.58333333,
            "unit": "ns",
            "range": "± 321357.10148438753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212138120.58620688,
            "unit": "ns",
            "range": "± 6048928.870284878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61443.989130434784,
            "unit": "ns",
            "range": "± 9243.055288475485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288250.42045454547,
            "unit": "ns",
            "range": "± 15835.683043836923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272311.38666666666,
            "unit": "ns",
            "range": "± 13625.369898170913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260953.15384615384,
            "unit": "ns",
            "range": "± 4046.076470816179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4000155.8620689656,
            "unit": "ns",
            "range": "± 102016.87980172838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3743253.8571428573,
            "unit": "ns",
            "range": "± 82991.39205802353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16667.326315789473,
            "unit": "ns",
            "range": "± 1857.0720631425067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84158.125,
            "unit": "ns",
            "range": "± 12854.755479874691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73653.14285714286,
            "unit": "ns",
            "range": "± 5832.961783541356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88223.17368421053,
            "unit": "ns",
            "range": "± 15401.929583757468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5741.79347826087,
            "unit": "ns",
            "range": "± 481.40555514911557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17508.603448275862,
            "unit": "ns",
            "range": "± 1490.7218872036365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435374.6597938144,
            "unit": "ns",
            "range": "± 139319.9744413233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738561.7213114756,
            "unit": "ns",
            "range": "± 123140.94463190422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2384412.414141414,
            "unit": "ns",
            "range": "± 360158.38675462507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10523101.494505495,
            "unit": "ns",
            "range": "± 1434437.4631127033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3132446.44,
            "unit": "ns",
            "range": "± 126176.10708315419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284282.1285714284,
            "unit": "ns",
            "range": "± 92797.33971056489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179804.227272727,
            "unit": "ns",
            "range": "± 101036.99937855477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4080871.411764706,
            "unit": "ns",
            "range": "± 194593.6647787817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18341953.052083332,
            "unit": "ns",
            "range": "± 2741302.7238888154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5754786.7828125,
            "unit": "ns",
            "range": "± 58343.19074344864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1801497.2880108173,
            "unit": "ns",
            "range": "± 11154.259403070859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130478.3455729166,
            "unit": "ns",
            "range": "± 18825.220097587197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2763868.9059709823,
            "unit": "ns",
            "range": "± 21532.790612754303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820615.3500976562,
            "unit": "ns",
            "range": "± 13998.260668504392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834131.5307942708,
            "unit": "ns",
            "range": "± 10865.448607811186"
          }
        ]
      }
    ]
  }
}