window.BENCHMARK_DATA = {
  "lastUpdate": 1689323878106,
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
        "date": 1689323853755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359741,
            "unit": "ns",
            "range": "± 107263.15237571455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2374011.111111111,
            "unit": "ns",
            "range": "± 72416.85588226691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1717591,
            "unit": "ns",
            "range": "± 138771.59716890226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4607885.915492957,
            "unit": "ns",
            "range": "± 225394.91963838218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43348.75,
            "unit": "ns",
            "range": "± 2267.3797820280056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6786353.333333333,
            "unit": "ns",
            "range": "± 40798.667111748124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18030985.714285713,
            "unit": "ns",
            "range": "± 140886.3473057019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45881157.692307696,
            "unit": "ns",
            "range": "± 206066.11180855875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90661346.66666667,
            "unit": "ns",
            "range": "± 1103907.8467404959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184875540,
            "unit": "ns",
            "range": "± 1808456.8270845094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4943984.151785715,
            "unit": "ns",
            "range": "± 11839.86355605218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532058.5546875,
            "unit": "ns",
            "range": "± 2052.3151685265975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165514.7181919643,
            "unit": "ns",
            "range": "± 2129.451340005384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592136.3671875,
            "unit": "ns",
            "range": "± 4026.71457864244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817810.3841145834,
            "unit": "ns",
            "range": "± 759.0053680630255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738258.41796875,
            "unit": "ns",
            "range": "± 745.1851215945056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174471.4285714286,
            "unit": "ns",
            "range": "± 45383.281038309666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3152426.6666666665,
            "unit": "ns",
            "range": "± 56954.11018237988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4004878.5714285714,
            "unit": "ns",
            "range": "± 61339.23551192021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3415237.234042553,
            "unit": "ns",
            "range": "± 121598.35277957059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5883491.666666667,
            "unit": "ns",
            "range": "± 149590.1151020076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254012.22222222222,
            "unit": "ns",
            "range": "± 9497.614267155555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238742.85714285713,
            "unit": "ns",
            "range": "± 7595.959865071498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219754.6511627907,
            "unit": "ns",
            "range": "± 11950.305504111051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3865057.1428571427,
            "unit": "ns",
            "range": "± 45109.67343444904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3493956.6666666665,
            "unit": "ns",
            "range": "± 36764.91857865645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17196.067415730337,
            "unit": "ns",
            "range": "± 1373.8678131941024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80394.04761904762,
            "unit": "ns",
            "range": "± 4297.977983272257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66638.77551020408,
            "unit": "ns",
            "range": "± 2499.5679898843364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82369.8795180723,
            "unit": "ns",
            "range": "± 5969.67407166358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4283.1578947368425,
            "unit": "ns",
            "range": "± 621.19525000906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17328.42105263158,
            "unit": "ns",
            "range": "± 1871.7191527539899"
          }
        ]
      }
    ]
  }
}