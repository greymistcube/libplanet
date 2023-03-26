window.BENCHMARK_DATA = {
  "lastUpdate": 1679836201431,
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
          "id": "a3a3a05bbd9141cd110fc544a4725588b0b71c4b",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T21:52:29+09:00",
          "tree_id": "9e82adaed50e472317a77409dbc78eda575f2d6f",
          "url": "https://github.com/greymistcube/libplanet/commit/a3a3a05bbd9141cd110fc544a4725588b0b71c4b"
        },
        "date": 1679836177126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104629.16666666667,
            "unit": "ns",
            "range": "± 6220.727942962212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4938696.770833333,
            "unit": "ns",
            "range": "± 17433.975235361784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524563.3713942308,
            "unit": "ns",
            "range": "± 2251.143264817834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164846.015625,
            "unit": "ns",
            "range": "± 4597.357512682426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643345.234375,
            "unit": "ns",
            "range": "± 4544.103280634118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819251.15234375,
            "unit": "ns",
            "range": "± 1456.288955794245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750136.9280133928,
            "unit": "ns",
            "range": "± 1471.4817306637278"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4798521.568080357,
            "unit": "ns",
            "range": "± 43646.161793961175"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6315850,
            "unit": "ns",
            "range": "± 162175.33453159512"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25943405.88235294,
            "unit": "ns",
            "range": "± 518942.91048075346"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6383868.686868687,
            "unit": "ns",
            "range": "± 507253.40357463737"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28702325,
            "unit": "ns",
            "range": "± 558945.4672267531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108898.91304347826,
            "unit": "ns",
            "range": "± 10073.897229917966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195600,
            "unit": "ns",
            "range": "± 10080.204006889584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175968.75,
            "unit": "ns",
            "range": "± 12009.551571452133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3670700,
            "unit": "ns",
            "range": "± 28882.627197783684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9262014.285714285,
            "unit": "ns",
            "range": "± 127491.88123257017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24218.556701030928,
            "unit": "ns",
            "range": "± 2629.612213842376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59038.88888888889,
            "unit": "ns",
            "range": "± 5120.847332546239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39633.333333333336,
            "unit": "ns",
            "range": "± 2315.288622074745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100662.63736263737,
            "unit": "ns",
            "range": "± 14338.407228696002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5688.297872340426,
            "unit": "ns",
            "range": "± 953.3028474310541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18787.36842105263,
            "unit": "ns",
            "range": "± 2036.5930094710145"
          }
        ]
      }
    ]
  }
}