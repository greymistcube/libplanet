window.BENCHMARK_DATA = {
  "lastUpdate": 1704944092809,
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
          "id": "04fdca19947689f211b0611543c82297baee08b4",
          "message": "Prepare 3.9.5",
          "timestamp": "2024-01-11T12:24:04+09:00",
          "tree_id": "203f0a8333f2a961fa901363c5537652e1d0075f",
          "url": "https://github.com/greymistcube/libplanet/commit/04fdca19947689f211b0611543c82297baee08b4"
        },
        "date": 1704944086543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3706364.292668269,
            "unit": "ns",
            "range": "± 12197.831011548225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211773.64453125,
            "unit": "ns",
            "range": "± 9113.221313438633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758364.4395345052,
            "unit": "ns",
            "range": "± 3988.465089627248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975110.69140625,
            "unit": "ns",
            "range": "± 8961.319708084271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619346.9404296875,
            "unit": "ns",
            "range": "± 1345.727633474979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568963.3592247596,
            "unit": "ns",
            "range": "± 1966.5806354657727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2522310.8947368423,
            "unit": "ns",
            "range": "± 56009.691075041985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501244.222222222,
            "unit": "ns",
            "range": "± 92956.9142124675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3195901.769230769,
            "unit": "ns",
            "range": "± 30586.036980823585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3034887.3448275863,
            "unit": "ns",
            "range": "± 72756.53039873851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7055804.966666667,
            "unit": "ns",
            "range": "± 208020.01563833051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41813.19387755102,
            "unit": "ns",
            "range": "± 5291.548800629799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198817.36,
            "unit": "ns",
            "range": "± 7996.184822444631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195039.78021978022,
            "unit": "ns",
            "range": "± 11956.751650847686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170782.64285714287,
            "unit": "ns",
            "range": "± 2113.5273690114445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3135600.6875,
            "unit": "ns",
            "range": "± 58799.3924568599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870102.8571428573,
            "unit": "ns",
            "range": "± 38299.859316586655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16576.08791208791,
            "unit": "ns",
            "range": "± 1377.4898317701068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61839.72340425532,
            "unit": "ns",
            "range": "± 6143.97244688227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55730.64772727273,
            "unit": "ns",
            "range": "± 7191.591368724131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62599.010416666664,
            "unit": "ns",
            "range": "± 11864.207022091623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3673.183673469388,
            "unit": "ns",
            "range": "± 1532.8752822277215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12428.65625,
            "unit": "ns",
            "range": "± 1899.38091757967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5592938.633333334,
            "unit": "ns",
            "range": "± 40642.36803925302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14526674.366666667,
            "unit": "ns",
            "range": "± 162916.52683368983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37722821.928571425,
            "unit": "ns",
            "range": "± 228550.05643393754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74774714.28571428,
            "unit": "ns",
            "range": "± 794734.8581754438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153712462.86666667,
            "unit": "ns",
            "range": "± 725871.0918592784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 930663.3368421053,
            "unit": "ns",
            "range": "± 60929.08997291757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1972562.1041666667,
            "unit": "ns",
            "range": "± 115298.544870763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1403343.0333333334,
            "unit": "ns",
            "range": "± 118836.24244505358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5643246.925925926,
            "unit": "ns",
            "range": "± 156692.06239994464"
          }
        ]
      }
    ]
  }
}