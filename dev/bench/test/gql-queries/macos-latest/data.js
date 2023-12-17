window.BENCHMARK_DATA = {
  "lastUpdate": 1702832207575,
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
          "id": "c689d1b4cf3864c605b1a32010df2b7ce79e05d4",
          "message": "Helper query fix",
          "timestamp": "2023-12-18T01:43:52+09:00",
          "tree_id": "2d5fa37595f9a90ef0e48d0f22016c0602b7db0a",
          "url": "https://github.com/greymistcube/libplanet/commit/c689d1b4cf3864c605b1a32010df2b7ce79e05d4"
        },
        "date": 1702832194770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7617408.882352941,
            "unit": "ns",
            "range": "± 123369.59477211269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18771553.714285713,
            "unit": "ns",
            "range": "± 201078.76751103843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45941808.71428572,
            "unit": "ns",
            "range": "± 426304.4357718985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92425359.70588236,
            "unit": "ns",
            "range": "± 1768084.623958783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192662533.7419355,
            "unit": "ns",
            "range": "± 5747049.513108135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33824.0459770115,
            "unit": "ns",
            "range": "± 2475.7004689208716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215423.275,
            "unit": "ns",
            "range": "± 10204.004943425058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211382.74731182796,
            "unit": "ns",
            "range": "± 17728.799616453056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185125.40322580645,
            "unit": "ns",
            "range": "± 5577.444369092585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3654770.9375,
            "unit": "ns",
            "range": "± 67752.12735943549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3387670.785714286,
            "unit": "ns",
            "range": "± 42939.48681427884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12656.708333333334,
            "unit": "ns",
            "range": "± 1195.8588714187297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55828.554945054944,
            "unit": "ns",
            "range": "± 3736.6990791417243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50816.47368421053,
            "unit": "ns",
            "range": "± 2585.682481015714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63143.18947368421,
            "unit": "ns",
            "range": "± 11997.46199782478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3233.114942528736,
            "unit": "ns",
            "range": "± 332.6320834099733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12241.647727272728,
            "unit": "ns",
            "range": "± 1259.7697293669419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011566.8723404255,
            "unit": "ns",
            "range": "± 63427.82856946381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2221397.643678161,
            "unit": "ns",
            "range": "± 118035.10356028767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1531971.21875,
            "unit": "ns",
            "range": "± 107351.31788333335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6773546.301886792,
            "unit": "ns",
            "range": "± 270613.8460644461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992254.3684210526,
            "unit": "ns",
            "range": "± 64362.179497668185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2984392.5789473685,
            "unit": "ns",
            "range": "± 129137.36311260458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3586536.4929577466,
            "unit": "ns",
            "range": "± 172016.40957186723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3416373.9384615384,
            "unit": "ns",
            "range": "± 159041.4289457975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14182982.54,
            "unit": "ns",
            "range": "± 2397862.461841604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4333297.33984375,
            "unit": "ns",
            "range": "± 89636.22430675985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1309651.578876202,
            "unit": "ns",
            "range": "± 10195.028853513979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863077.950390625,
            "unit": "ns",
            "range": "± 10692.201419968607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940454.3411458333,
            "unit": "ns",
            "range": "± 30401.064139643542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643762.4900390625,
            "unit": "ns",
            "range": "± 8985.977306502715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565339.0529947917,
            "unit": "ns",
            "range": "± 7090.76719450062"
          }
        ]
      }
    ]
  }
}