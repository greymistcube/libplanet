window.BENCHMARK_DATA = {
  "lastUpdate": 1708405589232,
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
          "id": "8d7011805c070fbcc6b5c5fc848f277f3350c9d5",
          "message": "Merge tag '4.0.5' into merge/4.0.5-to-main\n\nLibplanet 4.0.5",
          "timestamp": "2024-02-20T13:55:48+09:00",
          "tree_id": "582c9dc7cca98549a9bea3dad1243171b27a778e",
          "url": "https://github.com/greymistcube/libplanet/commit/8d7011805c070fbcc6b5c5fc848f277f3350c9d5"
        },
        "date": 1708405582831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5699450.466666667,
            "unit": "ns",
            "range": "± 19368.618023075614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14443053.92857143,
            "unit": "ns",
            "range": "± 205633.0880818343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37207927,
            "unit": "ns",
            "range": "± 233279.25061332455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74223951.28571428,
            "unit": "ns",
            "range": "± 345599.5301402229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149201868.2857143,
            "unit": "ns",
            "range": "± 1206906.1537352076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198756.8947368421,
            "unit": "ns",
            "range": "± 5980.427173522756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197207.02739726027,
            "unit": "ns",
            "range": "± 9833.285005492262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163651.23333333334,
            "unit": "ns",
            "range": "± 6216.188675912713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3178972.466666667,
            "unit": "ns",
            "range": "± 36347.513595188066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2921219.8571428573,
            "unit": "ns",
            "range": "± 34781.27590409075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12671.866666666667,
            "unit": "ns",
            "range": "± 936.8889493268595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65719.32323232324,
            "unit": "ns",
            "range": "± 8770.600864656184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52019.27272727273,
            "unit": "ns",
            "range": "± 868.6239902072912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62732.020833333336,
            "unit": "ns",
            "range": "± 9962.726868292284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3303.010989010989,
            "unit": "ns",
            "range": "± 683.8168613582878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14695.10752688172,
            "unit": "ns",
            "range": "± 1869.057705289914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41775.907216494845,
            "unit": "ns",
            "range": "± 6229.2959792862275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981636.1458333334,
            "unit": "ns",
            "range": "± 97128.9871357702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882001.7945205478,
            "unit": "ns",
            "range": "± 92699.17049790068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1657663.3979591837,
            "unit": "ns",
            "range": "± 168123.2982852898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7823415.2272727275,
            "unit": "ns",
            "range": "± 287806.5643463981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3789154.5924479165,
            "unit": "ns",
            "range": "± 65909.48106595795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212557.5541294643,
            "unit": "ns",
            "range": "± 4848.689535291757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749968.0305739183,
            "unit": "ns",
            "range": "± 2895.933053844965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970346.7820870536,
            "unit": "ns",
            "range": "± 3509.995426667132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621418.0447591146,
            "unit": "ns",
            "range": "± 2297.149290362801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583222.0982840402,
            "unit": "ns",
            "range": "± 1125.0583594141513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2352957.125,
            "unit": "ns",
            "range": "± 44113.28226868487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2466191.5555555555,
            "unit": "ns",
            "range": "± 93476.40245089462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3103445.888888889,
            "unit": "ns",
            "range": "± 84589.11829559189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3081930.8068181816,
            "unit": "ns",
            "range": "± 208318.3226130591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8852016.878378378,
            "unit": "ns",
            "range": "± 271692.7951826956"
          }
        ]
      }
    ]
  }
}