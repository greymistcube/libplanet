window.BENCHMARK_DATA = {
  "lastUpdate": 1687008532929,
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
          "id": "977f00de1f334f7bce2c45892aa4180ad9ac77cf",
          "message": "Moved some tesets; added Delta tests",
          "timestamp": "2023-06-17T22:16:16+09:00",
          "tree_id": "240faaab1c61b42b573cf8cdd8b55166ec87ad35",
          "url": "https://github.com/greymistcube/libplanet/commit/977f00de1f334f7bce2c45892aa4180ad9ac77cf"
        },
        "date": 1687008524677,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3211353.0322580645,
            "unit": "ns",
            "range": "± 94018.98827559032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347538.9375,
            "unit": "ns",
            "range": "± 103695.38928995816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4192475.076923077,
            "unit": "ns",
            "range": "± 31109.952816479643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3709964.0588235296,
            "unit": "ns",
            "range": "± 74790.21071844111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6152587.238095238,
            "unit": "ns",
            "range": "± 145514.14537147403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5889174.713169643,
            "unit": "ns",
            "range": "± 20645.413425886396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878514.697544643,
            "unit": "ns",
            "range": "± 2535.589350027453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337179.505078125,
            "unit": "ns",
            "range": "± 1488.7034791776885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569422.150520833,
            "unit": "ns",
            "range": "± 3069.9355602237442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787496.4912109375,
            "unit": "ns",
            "range": "± 762.1465138913024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745562.9550083706,
            "unit": "ns",
            "range": "± 503.63666122934836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274707.54761904763,
            "unit": "ns",
            "range": "± 9798.651754450415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263424.756097561,
            "unit": "ns",
            "range": "± 8060.4092445126125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228550.25,
            "unit": "ns",
            "range": "± 1816.8279612855729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150442,
            "unit": "ns",
            "range": "± 25734.20745955524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3760586.066666667,
            "unit": "ns",
            "range": "± 43911.448623445845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15446.336842105264,
            "unit": "ns",
            "range": "± 1273.7807153753988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80033.03529411765,
            "unit": "ns",
            "range": "± 3979.8110222156306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69469.38461538461,
            "unit": "ns",
            "range": "± 1159.454508124513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81835.75510204081,
            "unit": "ns",
            "range": "± 10925.900806535454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4055.0714285714284,
            "unit": "ns",
            "range": "± 482.02945647254427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14678.72340425532,
            "unit": "ns",
            "range": "± 918.0240984052665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326158.8484848484,
            "unit": "ns",
            "range": "± 85644.57537468128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546696,
            "unit": "ns",
            "range": "± 66931.2862824006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702521,
            "unit": "ns",
            "range": "± 101570.64224710486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4735938.813953488,
            "unit": "ns",
            "range": "± 171515.49568246788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45335.5,
            "unit": "ns",
            "range": "± 2312.6476342063006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529263.666666667,
            "unit": "ns",
            "range": "± 13470.650645366906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19235738.666666668,
            "unit": "ns",
            "range": "± 103519.30848305317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49189181.71428572,
            "unit": "ns",
            "range": "± 360254.6742105194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99263669,
            "unit": "ns",
            "range": "± 759633.2556046841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197635505.6153846,
            "unit": "ns",
            "range": "± 1173962.4424285996"
          }
        ]
      }
    ]
  }
}