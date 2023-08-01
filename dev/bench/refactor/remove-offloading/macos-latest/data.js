window.BENCHMARK_DATA = {
  "lastUpdate": 1690857478123,
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
          "id": "a40682ffd34f05ff76cf32151f4cb14e5a4eb214",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-01T11:20:04+09:00",
          "tree_id": "8e44e21bd65dfad89e80b457d02f8433363502ad",
          "url": "https://github.com/greymistcube/libplanet/commit/a40682ffd34f05ff76cf32151f4cb14e5a4eb214"
        },
        "date": 1690857450706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7796677.833333333,
            "unit": "ns",
            "range": "± 123551.55201491447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19116563.28125,
            "unit": "ns",
            "range": "± 583288.1561761476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47752384.13333333,
            "unit": "ns",
            "range": "± 1420483.3877739317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92001718.38461539,
            "unit": "ns",
            "range": "± 939074.1274149182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190733489.2142857,
            "unit": "ns",
            "range": "± 2045234.0830107436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61264.655913978495,
            "unit": "ns",
            "range": "± 12755.120989911244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295692.1609195402,
            "unit": "ns",
            "range": "± 16124.896528871961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286835.2,
            "unit": "ns",
            "range": "± 14013.52356485344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277240.0731707317,
            "unit": "ns",
            "range": "± 9773.618529977122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3951417.395348837,
            "unit": "ns",
            "range": "± 122671.75058185225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3645181.5789473685,
            "unit": "ns",
            "range": "± 75984.00332402998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17548.327586206895,
            "unit": "ns",
            "range": "± 2362.0435240407214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84586.4,
            "unit": "ns",
            "range": "± 8413.523921310743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90168.02061855671,
            "unit": "ns",
            "range": "± 16225.760770543358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100036,
            "unit": "ns",
            "range": "± 14765.221257489124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6626.117021276596,
            "unit": "ns",
            "range": "± 1363.7405715068496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19000.895833333332,
            "unit": "ns",
            "range": "± 3639.5249241138076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642525.44,
            "unit": "ns",
            "range": "± 224332.54340244646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2899519.157303371,
            "unit": "ns",
            "range": "± 216566.81737020874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2100421.974226804,
            "unit": "ns",
            "range": "± 177549.1820131052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6141860.428571428,
            "unit": "ns",
            "range": "± 295765.87007520435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3114729.25,
            "unit": "ns",
            "range": "± 103768.17267939833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3265132.710526316,
            "unit": "ns",
            "range": "± 111327.90260523866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4211579.979166667,
            "unit": "ns",
            "range": "± 164867.3410999963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3665966.153846154,
            "unit": "ns",
            "range": "± 170992.67653956253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6981571.405797102,
            "unit": "ns",
            "range": "± 333990.2443515519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6715184.176832933,
            "unit": "ns",
            "range": "± 276600.262643896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963672.3663504464,
            "unit": "ns",
            "range": "± 34376.69975168881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294368.698939732,
            "unit": "ns",
            "range": "± 17299.020961239174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2741777.5326967593,
            "unit": "ns",
            "range": "± 76566.3664853157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824733.8860294118,
            "unit": "ns",
            "range": "± 16668.044708256515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801999.4432896206,
            "unit": "ns",
            "range": "± 4139.225113750201"
          }
        ]
      }
    ]
  }
}