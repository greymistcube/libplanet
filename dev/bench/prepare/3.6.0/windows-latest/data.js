window.BENCHMARK_DATA = {
  "lastUpdate": 1696420229583,
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
          "id": "ddb46aab2a6afdaf5181941dd8192fab84f991c3",
          "message": "Prepare 3.6.0",
          "timestamp": "2023-10-04T20:34:43+09:00",
          "tree_id": "853ba8cc7953a26c53a131f6ee0468399ea5e559",
          "url": "https://github.com/greymistcube/libplanet/commit/ddb46aab2a6afdaf5181941dd8192fab84f991c3"
        },
        "date": 1696420206088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374228.5714285714,
            "unit": "ns",
            "range": "± 22973.443818442218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2311747.0588235296,
            "unit": "ns",
            "range": "± 73897.30890779864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867494.8453608248,
            "unit": "ns",
            "range": "± 147470.69085297227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7677366.216216216,
            "unit": "ns",
            "range": "± 385143.8895949619"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44038.666666666664,
            "unit": "ns",
            "range": "± 2225.642532996861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6960636.666666667,
            "unit": "ns",
            "range": "± 57129.612869917706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18008092.85714286,
            "unit": "ns",
            "range": "± 64055.918651485394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46689980,
            "unit": "ns",
            "range": "± 235155.75142566985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91928520,
            "unit": "ns",
            "range": "± 501769.4464876986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184280433.33333334,
            "unit": "ns",
            "range": "± 1084467.0374142753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4415399.849759615,
            "unit": "ns",
            "range": "± 5267.909548464627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410792.6692708333,
            "unit": "ns",
            "range": "± 5452.617932856169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 987496.4973958334,
            "unit": "ns",
            "range": "± 1319.7767275010149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2510486.9698660714,
            "unit": "ns",
            "range": "± 2416.4247791253474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819455.2083333334,
            "unit": "ns",
            "range": "± 852.3075418580866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713522.2916666666,
            "unit": "ns",
            "range": "± 939.8645959938713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2980095.238095238,
            "unit": "ns",
            "range": "± 68814.45688364093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3095621.951219512,
            "unit": "ns",
            "range": "± 111476.91355656364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3803321.4285714286,
            "unit": "ns",
            "range": "± 34205.42418909673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3555640.8163265307,
            "unit": "ns",
            "range": "± 141255.2505194753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8983131.081081081,
            "unit": "ns",
            "range": "± 230565.79181299717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251477.35849056602,
            "unit": "ns",
            "range": "± 9865.550815248169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243966.66666666666,
            "unit": "ns",
            "range": "± 10256.71468251074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215839.7590361446,
            "unit": "ns",
            "range": "± 11476.23142613055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3829185.714285714,
            "unit": "ns",
            "range": "± 28852.352447560348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525392.3076923075,
            "unit": "ns",
            "range": "± 10193.744939787139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18497.872340425532,
            "unit": "ns",
            "range": "± 1454.320868250495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82288.76404494382,
            "unit": "ns",
            "range": "± 4539.859784635104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63203.57142857143,
            "unit": "ns",
            "range": "± 2717.750693343455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74013.1313131313,
            "unit": "ns",
            "range": "± 12708.808181767019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3892.8571428571427,
            "unit": "ns",
            "range": "± 519.5656393645056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16800,
            "unit": "ns",
            "range": "± 2002.8625348069531"
          }
        ]
      }
    ]
  }
}