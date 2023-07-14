window.BENCHMARK_DATA = {
  "lastUpdate": 1689323787082,
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
          "id": "f2c4aee1803596e177022ea1920efaac6587e0ef",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:22:48+09:00",
          "tree_id": "29f5b2dadb9582f291c89f15d3058758bae66af2",
          "url": "https://github.com/greymistcube/libplanet/commit/f2c4aee1803596e177022ea1920efaac6587e0ef"
        },
        "date": 1689323770610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7420212.142857143,
            "unit": "ns",
            "range": "± 124490.59332017336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18937700.45652174,
            "unit": "ns",
            "range": "± 443742.9776426151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46312677.166666664,
            "unit": "ns",
            "range": "± 984291.5639082611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94586079.86666666,
            "unit": "ns",
            "range": "± 804817.1288052129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192862737.26923078,
            "unit": "ns",
            "range": "± 1848532.5920037741"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54223.45652173913,
            "unit": "ns",
            "range": "± 5621.173737299182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300799.92424242425,
            "unit": "ns",
            "range": "± 13944.973657818413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299274.94680851063,
            "unit": "ns",
            "range": "± 17743.81072547992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279284.2397260274,
            "unit": "ns",
            "range": "± 13898.301834744052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180686.25,
            "unit": "ns",
            "range": "± 107959.57109683719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3832666.277777778,
            "unit": "ns",
            "range": "± 80907.834953843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17889.532967032967,
            "unit": "ns",
            "range": "± 2031.85563491192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84108.2947368421,
            "unit": "ns",
            "range": "± 7541.918700049975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79856.97849462366,
            "unit": "ns",
            "range": "± 6191.305613130777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99610.10416666667,
            "unit": "ns",
            "range": "± 12523.794709507065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4930.423529411764,
            "unit": "ns",
            "range": "± 553.7518005231523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17005.10975609756,
            "unit": "ns",
            "range": "± 1937.0940690243524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526970.28125,
            "unit": "ns",
            "range": "± 162124.49973407882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810862.8815789474,
            "unit": "ns",
            "range": "± 135226.94191626823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035632.3195876288,
            "unit": "ns",
            "range": "± 209899.53682444265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5518305.111111111,
            "unit": "ns",
            "range": "± 111082.94325142223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3044725.679245283,
            "unit": "ns",
            "range": "± 121414.45310663636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333764.7045454546,
            "unit": "ns",
            "range": "± 124364.73809194517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4263474.926829268,
            "unit": "ns",
            "range": "± 152442.2648761475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3790553.8936170214,
            "unit": "ns",
            "range": "± 229753.7356609008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6774802.162162162,
            "unit": "ns",
            "range": "± 142059.32545526995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6274601.965144231,
            "unit": "ns",
            "range": "± 43598.465760054234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926693.9921875,
            "unit": "ns",
            "range": "± 8363.358360249587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226316.1061197917,
            "unit": "ns",
            "range": "± 7862.255004447377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2388341.471875,
            "unit": "ns",
            "range": "± 20636.242187335596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826319.7501953125,
            "unit": "ns",
            "range": "± 3504.1104268030663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737870.3503255208,
            "unit": "ns",
            "range": "± 3795.6576556134596"
          }
        ]
      }
    ]
  }
}