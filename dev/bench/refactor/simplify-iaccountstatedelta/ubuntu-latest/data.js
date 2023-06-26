window.BENCHMARK_DATA = {
  "lastUpdate": 1687758398190,
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
          "id": "411675855d61636b9c11aae608da481940e88491",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T14:32:00+09:00",
          "tree_id": "c2d985f43f19e3af563e442baadc44551033d058",
          "url": "https://github.com/greymistcube/libplanet/commit/411675855d61636b9c11aae608da481940e88491"
        },
        "date": 1687758391047,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3507139.095238095,
            "unit": "ns",
            "range": "± 82423.30017471078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3801020.5384615385,
            "unit": "ns",
            "range": "± 48888.46846073108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4697650.5,
            "unit": "ns",
            "range": "± 97154.74283130828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4707640.88,
            "unit": "ns",
            "range": "± 122954.08802418892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7183747.95,
            "unit": "ns",
            "range": "± 164422.75425303902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8564262.888888888,
            "unit": "ns",
            "range": "± 175137.57044002292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22815729,
            "unit": "ns",
            "range": "± 173889.93246834664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57571053,
            "unit": "ns",
            "range": "± 487500.5483724388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114236685.07142857,
            "unit": "ns",
            "range": "± 1059552.3980040937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228942468.6,
            "unit": "ns",
            "range": "± 1461080.4350933398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290258.8965517241,
            "unit": "ns",
            "range": "± 8177.74683579437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275496.25925925927,
            "unit": "ns",
            "range": "± 7521.499418807563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251019.97222222222,
            "unit": "ns",
            "range": "± 8261.039438182483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4539759.933333334,
            "unit": "ns",
            "range": "± 72919.82623252028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4203026.533333333,
            "unit": "ns",
            "range": "± 56874.276490050106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19134.20618556701,
            "unit": "ns",
            "range": "± 1348.533624427415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89263.19718309859,
            "unit": "ns",
            "range": "± 4143.388111953509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75280.41176470589,
            "unit": "ns",
            "range": "± 2407.5360737741944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94340,
            "unit": "ns",
            "range": "± 9445.560707477967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5685.618556701031,
            "unit": "ns",
            "range": "± 804.30056886013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20844.808510638297,
            "unit": "ns",
            "range": "± 1651.803441120896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47994.27659574468,
            "unit": "ns",
            "range": "± 4168.206574979749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000204.790104167,
            "unit": "ns",
            "range": "± 17349.596668491315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891749.8390066964,
            "unit": "ns",
            "range": "± 2352.4133371776966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391021.58828125,
            "unit": "ns",
            "range": "± 3544.011132693435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612625.40703125,
            "unit": "ns",
            "range": "± 2860.9284411765116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836211.3284505209,
            "unit": "ns",
            "range": "± 1059.2180695207928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763483.7079427083,
            "unit": "ns",
            "range": "± 672.299680620269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504191.505263158,
            "unit": "ns",
            "range": "± 98123.2708405306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2822599.9655172415,
            "unit": "ns",
            "range": "± 81301.07108654964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2453149.523809524,
            "unit": "ns",
            "range": "± 129618.97376239442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5726417.419354838,
            "unit": "ns",
            "range": "± 158433.12738308535"
          }
        ]
      }
    ]
  }
}