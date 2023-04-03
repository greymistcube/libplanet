window.BENCHMARK_DATA = {
  "lastUpdate": 1680491118504,
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
          "id": "db57324e9925a094741d779a02c06a62b19bd4a0",
          "message": "Fix changelog",
          "timestamp": "2023-04-03T11:49:34+09:00",
          "tree_id": "118aa78362a7cfe4036b7151188443d5543a9b30",
          "url": "https://github.com/greymistcube/libplanet/commit/db57324e9925a094741d779a02c06a62b19bd4a0"
        },
        "date": 1680491094367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336614.1414141415,
            "unit": "ns",
            "range": "± 97129.65142393389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2445839.024390244,
            "unit": "ns",
            "range": "± 87648.66193516241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145125.263157895,
            "unit": "ns",
            "range": "± 159036.46709362447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5103044.827586207,
            "unit": "ns",
            "range": "± 145502.1123710357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42524.61538461538,
            "unit": "ns",
            "range": "± 1963.3382580148068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6860133.333333333,
            "unit": "ns",
            "range": "± 31211.368502671008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17289720,
            "unit": "ns",
            "range": "± 106856.58746990887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44548893.333333336,
            "unit": "ns",
            "range": "± 294599.21556162334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90783973.33333333,
            "unit": "ns",
            "range": "± 565415.2462276435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180402970,
            "unit": "ns",
            "range": "± 1117592.8610826293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4920265.354567308,
            "unit": "ns",
            "range": "± 4568.6047918679005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526258.7109375,
            "unit": "ns",
            "range": "± 2237.580331637466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162650.9244791667,
            "unit": "ns",
            "range": "± 1713.9761098544952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598840.206473214,
            "unit": "ns",
            "range": "± 13682.220070237934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847672.3958333334,
            "unit": "ns",
            "range": "± 1469.3305923987568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719556.9791666666,
            "unit": "ns",
            "range": "± 904.5460726620454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3182351.6129032257,
            "unit": "ns",
            "range": "± 97176.35127597573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3125379.1666666665,
            "unit": "ns",
            "range": "± 79920.48210655969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3872606.6666666665,
            "unit": "ns",
            "range": "± 63621.00356987538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4237961.016949153,
            "unit": "ns",
            "range": "± 187678.46956131922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7055591.304347826,
            "unit": "ns",
            "range": "± 159924.51319590944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298210.5263157895,
            "unit": "ns",
            "range": "± 3815.450277321597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244305.6603773585,
            "unit": "ns",
            "range": "± 10113.59357677994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222462.8205128205,
            "unit": "ns",
            "range": "± 11477.0817252647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5248153.333333333,
            "unit": "ns",
            "range": "± 54731.90329319124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3626535.714285714,
            "unit": "ns",
            "range": "± 23994.3777755366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17858.333333333332,
            "unit": "ns",
            "range": "± 1656.0362738632502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81864.58333333333,
            "unit": "ns",
            "range": "± 5029.1985165927035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76005.10204081633,
            "unit": "ns",
            "range": "± 6928.491489449723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160609.18367346938,
            "unit": "ns",
            "range": "± 18027.29938282718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5380.412371134021,
            "unit": "ns",
            "range": "± 710.5806275002817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15992.553191489362,
            "unit": "ns",
            "range": "± 1344.7819795078533"
          }
        ]
      }
    ]
  }
}