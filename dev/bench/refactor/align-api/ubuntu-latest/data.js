window.BENCHMARK_DATA = {
  "lastUpdate": 1688377053514,
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
          "id": "f791366a0dccda02042497e48ec7b9118bc9ffd7",
          "message": "Changelog",
          "timestamp": "2023-07-03T18:21:10+09:00",
          "tree_id": "0ff340aa0972ee9d0297222e1544e2fa14961ab4",
          "url": "https://github.com/greymistcube/libplanet/commit/f791366a0dccda02042497e48ec7b9118bc9ffd7"
        },
        "date": 1688377044627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10252034.780487806,
            "unit": "ns",
            "range": "± 362063.9563471841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27156715.846153848,
            "unit": "ns",
            "range": "± 255364.75514442936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69160116.73333333,
            "unit": "ns",
            "range": "± 660669.9346697223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136386519.53333333,
            "unit": "ns",
            "range": "± 969377.5657428598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276352799.6,
            "unit": "ns",
            "range": "± 2038012.0068229937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57524.15053763441,
            "unit": "ns",
            "range": "± 3954.2646404429383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350402.9459459459,
            "unit": "ns",
            "range": "± 10838.339358617286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327344.67441860464,
            "unit": "ns",
            "range": "± 12050.241972913183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312494.4186046512,
            "unit": "ns",
            "range": "± 16689.02623350771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5452214.35,
            "unit": "ns",
            "range": "± 122265.62293770368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4915168.538461538,
            "unit": "ns",
            "range": "± 47642.62961469029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23340.391304347828,
            "unit": "ns",
            "range": "± 1898.3090274977883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110534.23958333333,
            "unit": "ns",
            "range": "± 7210.320484511354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98091.76923076923,
            "unit": "ns",
            "range": "± 5030.378847428029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119312.5425531915,
            "unit": "ns",
            "range": "± 13360.823769485361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7246.336842105263,
            "unit": "ns",
            "range": "± 819.4187562512249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24581.322580645163,
            "unit": "ns",
            "range": "± 1914.8299116273574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830586.8387096773,
            "unit": "ns",
            "range": "± 103029.66382502476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3435246.9714285713,
            "unit": "ns",
            "range": "± 110469.47859569648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2311128.035714286,
            "unit": "ns",
            "range": "± 124172.89291421638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6165232.586206896,
            "unit": "ns",
            "range": "± 176392.75070857347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7217424.4375,
            "unit": "ns",
            "range": "± 35391.021531163744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2307197.978645833,
            "unit": "ns",
            "range": "± 9077.41159956574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1657243.53984375,
            "unit": "ns",
            "range": "± 7149.369793863113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3228090.7153645833,
            "unit": "ns",
            "range": "± 15504.274354497533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020964.2880208333,
            "unit": "ns",
            "range": "± 5038.9082207264755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932187.2559895833,
            "unit": "ns",
            "range": "± 2639.8795950282133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4390702,
            "unit": "ns",
            "range": "± 33534.92288396282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4684636.142857143,
            "unit": "ns",
            "range": "± 77522.55133518559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5490798.666666667,
            "unit": "ns",
            "range": "± 67059.37557724143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4984442.590909091,
            "unit": "ns",
            "range": "± 117303.07883738363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7993520.88,
            "unit": "ns",
            "range": "± 211998.44486542817"
          }
        ]
      }
    ]
  }
}