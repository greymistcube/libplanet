window.BENCHMARK_DATA = {
  "lastUpdate": 1700471198751,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ff1ef37c765bdb3cbb12ffaf2595b9db4fc410f2",
          "message": "Temporary workaround to `yarn build` fail",
          "timestamp": "2023-11-20T17:45:50+09:00",
          "tree_id": "df46edf8e34f5eb1938dcefa05ebda9b68e761dd",
          "url": "https://github.com/greymistcube/libplanet/commit/ff1ef37c765bdb3cbb12ffaf2595b9db4fc410f2"
        },
        "date": 1700471179804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8134894.494736842,
            "unit": "ns",
            "range": "± 502282.36345717445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21441136.81521739,
            "unit": "ns",
            "range": "± 2643591.1733757956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52995003.708333336,
            "unit": "ns",
            "range": "± 1356442.7284385362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105538908.03846154,
            "unit": "ns",
            "range": "± 1636936.423184257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218918697.75,
            "unit": "ns",
            "range": "± 8991005.903760497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52254.02173913043,
            "unit": "ns",
            "range": "± 13260.954508746294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260167.45698924732,
            "unit": "ns",
            "range": "± 17127.64460564442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242927.95454545456,
            "unit": "ns",
            "range": "± 17492.362498845418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207894.22340425532,
            "unit": "ns",
            "range": "± 17950.39360107251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3851918.035714286,
            "unit": "ns",
            "range": "± 164365.3063370474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3405514.923076923,
            "unit": "ns",
            "range": "± 84637.05267513658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13524.263440860215,
            "unit": "ns",
            "range": "± 2047.7822383264834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59823.62765957447,
            "unit": "ns",
            "range": "± 7498.619910276598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72713.04545454546,
            "unit": "ns",
            "range": "± 9237.785855699944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81148.37912087912,
            "unit": "ns",
            "range": "± 11743.146821146522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5752.40625,
            "unit": "ns",
            "range": "± 1511.7252540557758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16918.469387755104,
            "unit": "ns",
            "range": "± 3486.7985410779816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1150412.3350515463,
            "unit": "ns",
            "range": "± 148790.02573052127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2585912.217391304,
            "unit": "ns",
            "range": "± 237668.36234095474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610903.5280898877,
            "unit": "ns",
            "range": "± 161077.49509363004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7202284.774725275,
            "unit": "ns",
            "range": "± 1048730.549913795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3200706.413043478,
            "unit": "ns",
            "range": "± 219935.08449561032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3244190.9444444445,
            "unit": "ns",
            "range": "± 180531.61939715658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3943618.6304347827,
            "unit": "ns",
            "range": "± 149599.94091392308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3812004.8125,
            "unit": "ns",
            "range": "± 70711.48708163218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13915793.170103094,
            "unit": "ns",
            "range": "± 2480289.107309102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5028508.41313244,
            "unit": "ns",
            "range": "± 179919.60620759477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543873.296365489,
            "unit": "ns",
            "range": "± 155533.93606190596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 931276.7338654891,
            "unit": "ns",
            "range": "± 59003.893566865496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2326208.3044113005,
            "unit": "ns",
            "range": "± 251073.97408266843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 710506.0909025493,
            "unit": "ns",
            "range": "± 56683.08018935442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576796.0590533088,
            "unit": "ns",
            "range": "± 11337.879795903375"
          }
        ]
      }
    ]
  }
}