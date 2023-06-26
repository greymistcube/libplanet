window.BENCHMARK_DATA = {
  "lastUpdate": 1687769528365,
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
          "id": "e105b12db61377b35d96e7224587d33d21db53dc",
          "message": "Minor streamlining",
          "timestamp": "2023-06-26T17:27:37+09:00",
          "tree_id": "d555eb2892f956aa6baefb42a14972b46a5a7f75",
          "url": "https://github.com/greymistcube/libplanet/commit/e105b12db61377b35d96e7224587d33d21db53dc"
        },
        "date": 1687769496785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8772991.75,
            "unit": "ns",
            "range": "± 115503.51343268937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23597524.66129032,
            "unit": "ns",
            "range": "± 1764385.1755896213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56380877.92553192,
            "unit": "ns",
            "range": "± 4150201.8396867514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107905366.3611111,
            "unit": "ns",
            "range": "± 3569884.5583222853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217818409.08974358,
            "unit": "ns",
            "range": "± 7604539.148372021"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76233.95238095238,
            "unit": "ns",
            "range": "± 7802.963192019962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354510.41011235956,
            "unit": "ns",
            "range": "± 45542.9017744509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335779.72580645164,
            "unit": "ns",
            "range": "± 42736.16378511322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341107.5057471264,
            "unit": "ns",
            "range": "± 32131.93612782524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4771226.130434782,
            "unit": "ns",
            "range": "± 506584.36177590984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4020284.829787234,
            "unit": "ns",
            "range": "± 338785.29911791766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26210.32608695652,
            "unit": "ns",
            "range": "± 5067.771308509881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116936.29032258065,
            "unit": "ns",
            "range": "± 15336.304491219691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119091.48863636363,
            "unit": "ns",
            "range": "± 8320.159992375144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123996.74210526315,
            "unit": "ns",
            "range": "± 19236.50064757532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7384.510638297872,
            "unit": "ns",
            "range": "± 815.4992763810908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23777.020833333332,
            "unit": "ns",
            "range": "± 5424.159867965323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1962914.5531914893,
            "unit": "ns",
            "range": "± 387011.0738252922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3686354.087912088,
            "unit": "ns",
            "range": "± 664098.3745257199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3082543.129213483,
            "unit": "ns",
            "range": "± 570003.851493694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9202327.336956521,
            "unit": "ns",
            "range": "± 2794407.742298403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3584947.0204081633,
            "unit": "ns",
            "range": "± 365653.0210509905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3717100.5631578946,
            "unit": "ns",
            "range": "± 380095.9361669555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5011674.86746988,
            "unit": "ns",
            "range": "± 740178.8091902108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4685789.955555555,
            "unit": "ns",
            "range": "± 595287.63080635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10567193.123655913,
            "unit": "ns",
            "range": "± 3046317.1646737247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7704037.798060042,
            "unit": "ns",
            "range": "± 644750.7450535144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2077468.8084788602,
            "unit": "ns",
            "range": "± 40529.56268884181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372701.267211914,
            "unit": "ns",
            "range": "± 24977.3664664718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2956325.2263911734,
            "unit": "ns",
            "range": "± 126426.31567803836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978252.7061548478,
            "unit": "ns",
            "range": "± 49985.78198373107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889970.5076246995,
            "unit": "ns",
            "range": "± 45914.005730579"
          }
        ]
      }
    ]
  }
}