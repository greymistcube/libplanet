window.BENCHMARK_DATA = {
  "lastUpdate": 1679562041370,
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
          "id": "e10abba2d1e2181eeb2fa857709cc58772e62418",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:48:40+09:00",
          "tree_id": "420b79d8af8438c8fceaadc0aecb2338a4d58d98",
          "url": "https://github.com/greymistcube/libplanet/commit/e10abba2d1e2181eeb2fa857709cc58772e62418"
        },
        "date": 1679562033494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108136.1875,
            "unit": "ns",
            "range": "± 4269.379294445555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4881686.406850962,
            "unit": "ns",
            "range": "± 40516.77594508385"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6267864.6,
            "unit": "ns",
            "range": "± 93591.64260216523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27508327.222222224,
            "unit": "ns",
            "range": "± 1147278.5676258614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6441719.905660378,
            "unit": "ns",
            "range": "± 266777.142691399"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30989865.333333332,
            "unit": "ns",
            "range": "± 1017193.0963391085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5919142.693638393,
            "unit": "ns",
            "range": "± 21619.58908807619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873646.1694010417,
            "unit": "ns",
            "range": "± 9574.475653669224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365980.896875,
            "unit": "ns",
            "range": "± 10216.46977805301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605960.3454241073,
            "unit": "ns",
            "range": "± 3719.2030703354835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831337.1415364583,
            "unit": "ns",
            "range": "± 4517.538126192945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769558.4860491072,
            "unit": "ns",
            "range": "± 1186.9043813024953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95325.7052631579,
            "unit": "ns",
            "range": "± 9461.94936830547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202533.96808510637,
            "unit": "ns",
            "range": "± 11821.248064171119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179270.75,
            "unit": "ns",
            "range": "± 6980.17135527031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3825753.05,
            "unit": "ns",
            "range": "± 83094.41383813134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9635515.846153846,
            "unit": "ns",
            "range": "± 115100.33238718743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19627.683673469386,
            "unit": "ns",
            "range": "± 3630.4481379591566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50458.188888888886,
            "unit": "ns",
            "range": "± 4048.123579447878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38127.89655172414,
            "unit": "ns",
            "range": "± 1101.6552593006704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89491.24742268042,
            "unit": "ns",
            "range": "± 14160.353625256364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5183.525773195876,
            "unit": "ns",
            "range": "± 525.1019363891704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16026.483516483517,
            "unit": "ns",
            "range": "± 937.2002319276679"
          }
        ]
      }
    ]
  }
}