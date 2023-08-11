window.BENCHMARK_DATA = {
  "lastUpdate": 1691724006437,
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
          "id": "e48262a64ed22b0e650c843b3fde0de33b1170d6",
          "message": "Prepare 3.2.1",
          "timestamp": "2023-08-11T11:57:16+09:00",
          "tree_id": "b4396921fa9482f449cd092c685901864dc9aece",
          "url": "https://github.com/greymistcube/libplanet/commit/e48262a64ed22b0e650c843b3fde0de33b1170d6"
        },
        "date": 1691723991116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9299824.543010753,
            "unit": "ns",
            "range": "± 522850.60429941065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22808149.86781609,
            "unit": "ns",
            "range": "± 1241887.9162457131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61492232.015384614,
            "unit": "ns",
            "range": "± 2844094.4768575258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122099802.00980392,
            "unit": "ns",
            "range": "± 4969629.834154916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246836594.36923078,
            "unit": "ns",
            "range": "± 11489380.255756846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67051.1170212766,
            "unit": "ns",
            "range": "± 14688.60943454374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362289.94897959183,
            "unit": "ns",
            "range": "± 57787.65530685034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359051.6224489796,
            "unit": "ns",
            "range": "± 52311.595188842664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 367967.6237113402,
            "unit": "ns",
            "range": "± 57485.95800774193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4609118.3,
            "unit": "ns",
            "range": "± 351208.72057081654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4183940.6616161615,
            "unit": "ns",
            "range": "± 344480.7179947192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29621.3595505618,
            "unit": "ns",
            "range": "± 6936.330059003548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123211.14444444445,
            "unit": "ns",
            "range": "± 13239.961559706167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127383.43617021276,
            "unit": "ns",
            "range": "± 19412.807259923426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122871.35393258427,
            "unit": "ns",
            "range": "± 21562.994530587563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8833.761363636364,
            "unit": "ns",
            "range": "± 1086.1001678399773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26423.224137931036,
            "unit": "ns",
            "range": "± 3611.3988325393248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653983.3333333333,
            "unit": "ns",
            "range": "± 243543.1705752744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770892.888888889,
            "unit": "ns",
            "range": "± 114071.58377728924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993040.90625,
            "unit": "ns",
            "range": "± 235908.68438386908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5499598.857142857,
            "unit": "ns",
            "range": "± 324839.3693636414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3636294.9270833335,
            "unit": "ns",
            "range": "± 298786.374136148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3865911.7604166665,
            "unit": "ns",
            "range": "± 387860.99834839755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4894068.763157895,
            "unit": "ns",
            "range": "± 424158.16772039095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4288079.0360824745,
            "unit": "ns",
            "range": "± 414528.0048279072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7427859.322916667,
            "unit": "ns",
            "range": "± 667785.6698102672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6674064.282291667,
            "unit": "ns",
            "range": "± 243671.342756808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906783.35234375,
            "unit": "ns",
            "range": "± 43094.5254521265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130138.9282826206,
            "unit": "ns",
            "range": "± 46884.019921506035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2932029.300859375,
            "unit": "ns",
            "range": "± 298617.76367661904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933891.5547851563,
            "unit": "ns",
            "range": "± 33078.65284597349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 879068.6558516653,
            "unit": "ns",
            "range": "± 44279.49337734035"
          }
        ]
      }
    ]
  }
}