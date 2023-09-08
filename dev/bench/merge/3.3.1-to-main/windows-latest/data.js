window.BENCHMARK_DATA = {
  "lastUpdate": 1694144949131,
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
          "id": "56c2868a1338e43d8ba89ae90ea44bca551c71b7",
          "message": "Merge tag '3.3.1' into merge/3.3.1-to-main\n\nLibplanet 3.3.1",
          "timestamp": "2023-09-08T12:32:53+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/greymistcube/libplanet/commit/56c2868a1338e43d8ba89ae90ea44bca551c71b7"
        },
        "date": 1694144924355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381855,
            "unit": "ns",
            "range": "± 111463.36298478881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2582908.860759494,
            "unit": "ns",
            "range": "± 133185.2037961573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731418.1818181819,
            "unit": "ns",
            "range": "± 123969.59416846189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4400593.939393939,
            "unit": "ns",
            "range": "± 138951.6146438076"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50594.791666666664,
            "unit": "ns",
            "range": "± 3926.0632429597076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7398518.75,
            "unit": "ns",
            "range": "± 97184.14286806258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20878526.666666668,
            "unit": "ns",
            "range": "± 311562.3566723652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52561896.666666664,
            "unit": "ns",
            "range": "± 841496.4118985268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104608026.66666667,
            "unit": "ns",
            "range": "± 1449051.6408360067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208826140,
            "unit": "ns",
            "range": "± 2243836.0023470013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4539031.026785715,
            "unit": "ns",
            "range": "± 14295.435507832643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1438614.2708333333,
            "unit": "ns",
            "range": "± 5173.217338168461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053067.3567708333,
            "unit": "ns",
            "range": "± 3815.042910629457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654373.270089286,
            "unit": "ns",
            "range": "± 6465.590906206521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830472.0284598215,
            "unit": "ns",
            "range": "± 3949.2317064870317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766351.1117788461,
            "unit": "ns",
            "range": "± 4277.28540566674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307024,
            "unit": "ns",
            "range": "± 86650.6168471985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564966.6666666665,
            "unit": "ns",
            "range": "± 53001.19495508254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4257706.666666667,
            "unit": "ns",
            "range": "± 56611.96827863303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3902487.5,
            "unit": "ns",
            "range": "± 119161.98178624678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6115067.391304348,
            "unit": "ns",
            "range": "± 151565.22643935398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265877.77777777775,
            "unit": "ns",
            "range": "± 5593.96266528957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254358.73015873015,
            "unit": "ns",
            "range": "± 11634.897935710409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231355.95238095237,
            "unit": "ns",
            "range": "± 12376.798651718263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4141883.3333333335,
            "unit": "ns",
            "range": "± 84762.83348954582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3765784.6153846155,
            "unit": "ns",
            "range": "± 21051.953438808087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21359.574468085106,
            "unit": "ns",
            "range": "± 1850.505257881922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88151.05263157895,
            "unit": "ns",
            "range": "± 6331.9603824119495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74147.87234042553,
            "unit": "ns",
            "range": "± 4343.422383908014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80682.5,
            "unit": "ns",
            "range": "± 5418.17791316732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6248.421052631579,
            "unit": "ns",
            "range": "± 818.5174919685312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20664.583333333332,
            "unit": "ns",
            "range": "± 2081.4458116094847"
          }
        ]
      }
    ]
  }
}