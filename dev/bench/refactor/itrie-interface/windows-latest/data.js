window.BENCHMARK_DATA = {
  "lastUpdate": 1693307173911,
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
          "id": "235f128d5ffc87ba8324c8cc04993d505ee1ce8d",
          "message": "Removed VolatileKeyValueStore and readonly option",
          "timestamp": "2023-08-29T19:49:28+09:00",
          "tree_id": "83918d471894c27b21eff46190d39511b400b241",
          "url": "https://github.com/greymistcube/libplanet/commit/235f128d5ffc87ba8324c8cc04993d505ee1ce8d"
        },
        "date": 1693307149607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1249343.4782608696,
            "unit": "ns",
            "range": "± 59810.76648667685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477923.4375,
            "unit": "ns",
            "range": "± 110775.42238181287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1750103.0303030303,
            "unit": "ns",
            "range": "± 124079.79612753277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4505535.384615385,
            "unit": "ns",
            "range": "± 210280.23893037453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47228.985507246376,
            "unit": "ns",
            "range": "± 2285.8967508768246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7328807.142857143,
            "unit": "ns",
            "range": "± 69973.69246625932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20164338.46153846,
            "unit": "ns",
            "range": "± 98937.15630356423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51603280,
            "unit": "ns",
            "range": "± 685407.745381223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101996993.33333333,
            "unit": "ns",
            "range": "± 1841975.3342798157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201938107.14285713,
            "unit": "ns",
            "range": "± 2208881.8272755407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4485110.364583333,
            "unit": "ns",
            "range": "± 27510.34763795663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410033.5546875,
            "unit": "ns",
            "range": "± 4232.360121858975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073326.3020833333,
            "unit": "ns",
            "range": "± 4174.786938445632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646694.7823660714,
            "unit": "ns",
            "range": "± 7332.688149027636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831654.3596540178,
            "unit": "ns",
            "range": "± 6299.022031760125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754868.37890625,
            "unit": "ns",
            "range": "± 5564.042458557256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188033.3333333335,
            "unit": "ns",
            "range": "± 82497.19187140049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498312.8205128205,
            "unit": "ns",
            "range": "± 119543.62819420933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4044439.4736842103,
            "unit": "ns",
            "range": "± 128750.93185592702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3674233.3333333335,
            "unit": "ns",
            "range": "± 136470.61319810455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5940561.538461538,
            "unit": "ns",
            "range": "± 158945.45498861696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267540.9090909091,
            "unit": "ns",
            "range": "± 6531.510369403674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246135.7142857143,
            "unit": "ns",
            "range": "± 7033.107647022273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213392.95774647887,
            "unit": "ns",
            "range": "± 10465.90824594191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4067500,
            "unit": "ns",
            "range": "± 88369.79121849276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3798540.909090909,
            "unit": "ns",
            "range": "± 90280.51342286498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22739.78494623656,
            "unit": "ns",
            "range": "± 2136.5422993068596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89196.90721649484,
            "unit": "ns",
            "range": "± 7794.127778978963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67769.33333333333,
            "unit": "ns",
            "range": "± 3410.277524306899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80258.94736842105,
            "unit": "ns",
            "range": "± 12620.217608947973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5331.958762886598,
            "unit": "ns",
            "range": "± 670.2838937955975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20072.164948453606,
            "unit": "ns",
            "range": "± 2544.714385906975"
          }
        ]
      }
    ]
  }
}