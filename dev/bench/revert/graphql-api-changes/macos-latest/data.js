window.BENCHMARK_DATA = {
  "lastUpdate": 1704941539167,
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
        "date": 1704941515389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8254334.558139535,
            "unit": "ns",
            "range": "± 302660.8177917904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20264984.474025972,
            "unit": "ns",
            "range": "± 985846.5885549702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51341377.87912088,
            "unit": "ns",
            "range": "± 4894352.203570645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105109511.18181819,
            "unit": "ns",
            "range": "± 6565195.39383391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202949621.16666666,
            "unit": "ns",
            "range": "± 7270150.316563314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50078.01111111111,
            "unit": "ns",
            "range": "± 8258.180106999995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266001.5517241379,
            "unit": "ns",
            "range": "± 26481.823727315666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255090.65853658537,
            "unit": "ns",
            "range": "± 18304.040007044732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263664.1931818182,
            "unit": "ns",
            "range": "± 48690.76466512819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5276910.632653061,
            "unit": "ns",
            "range": "± 1113471.4896444192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4474688.778947368,
            "unit": "ns",
            "range": "± 869330.2033814894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26504.27659574468,
            "unit": "ns",
            "range": "± 5003.518416169938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108178.25510204081,
            "unit": "ns",
            "range": "± 31181.502484683024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100505.03846153847,
            "unit": "ns",
            "range": "± 29901.245804335336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96597.58241758242,
            "unit": "ns",
            "range": "± 27958.639490848673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6774.893617021276,
            "unit": "ns",
            "range": "± 1588.3193759990065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24799.065217391304,
            "unit": "ns",
            "range": "± 10731.001890695832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169119.0454545454,
            "unit": "ns",
            "range": "± 97065.316498075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2256765.5428571426,
            "unit": "ns",
            "range": "± 108933.96909345889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641314.6290322582,
            "unit": "ns",
            "range": "± 49126.874528267406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7209338.945783133,
            "unit": "ns",
            "range": "± 468650.8531305908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2910116.029411765,
            "unit": "ns",
            "range": "± 117028.46337833424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3088246.8636363638,
            "unit": "ns",
            "range": "± 163689.616786482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959991.5217391304,
            "unit": "ns",
            "range": "± 377190.35973188636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141777.554347826,
            "unit": "ns",
            "range": "± 654467.1167294349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16130404.378947368,
            "unit": "ns",
            "range": "± 3252904.3389992206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5795212.179766414,
            "unit": "ns",
            "range": "± 1179188.604981067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490806.0807913449,
            "unit": "ns",
            "range": "± 85104.61843607512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 979552.9734598795,
            "unit": "ns",
            "range": "± 64884.4513982134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2152302.785456731,
            "unit": "ns",
            "range": "± 88243.40168691728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645969.5233677456,
            "unit": "ns",
            "range": "± 8280.859622101792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581756.6955078125,
            "unit": "ns",
            "range": "± 9338.97418870726"
          }
        ]
      }
    ]
  }
}