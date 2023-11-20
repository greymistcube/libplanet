window.BENCHMARK_DATA = {
  "lastUpdate": 1700468745157,
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
          "id": "8eaba8bfb494d0eb4664076dcfebda984d623a5f",
          "message": "Release 3.6.1",
          "timestamp": "2023-11-20T17:13:46+09:00",
          "tree_id": "bbdc6bb77b5e1b1e069c9c19d459370c81ca5a0f",
          "url": "https://github.com/greymistcube/libplanet/commit/8eaba8bfb494d0eb4664076dcfebda984d623a5f"
        },
        "date": 1700468728386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948068.0412371134,
            "unit": "ns",
            "range": "± 99851.63217076097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1737512.5,
            "unit": "ns",
            "range": "± 69729.3405376688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1410786.8686868686,
            "unit": "ns",
            "range": "± 153260.219985131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5186040,
            "unit": "ns",
            "range": "± 271384.765203963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34750.5376344086,
            "unit": "ns",
            "range": "± 1947.3294788277956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5386153.333333333,
            "unit": "ns",
            "range": "± 62148.88651647827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13622973.333333334,
            "unit": "ns",
            "range": "± 142928.28604716755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34178626.666666664,
            "unit": "ns",
            "range": "± 314450.43094867835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67204266.66666667,
            "unit": "ns",
            "range": "± 360624.39634347433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137530413.33333334,
            "unit": "ns",
            "range": "± 548560.8416141103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3205830.9795673075,
            "unit": "ns",
            "range": "± 13953.403800873248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1028749.5572916666,
            "unit": "ns",
            "range": "± 4995.760262609926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 710166.46484375,
            "unit": "ns",
            "range": "± 3510.6467455640127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937503.822544643,
            "unit": "ns",
            "range": "± 4889.20251631625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608575.6510416666,
            "unit": "ns",
            "range": "± 1268.45682592658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570170.7356770834,
            "unit": "ns",
            "range": "± 1594.6662571374623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145576.3157894737,
            "unit": "ns",
            "range": "± 38548.38002224194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2343243.75,
            "unit": "ns",
            "range": "± 72068.4394147495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2853698.275862069,
            "unit": "ns",
            "range": "± 123941.93248676634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2667777.027027027,
            "unit": "ns",
            "range": "± 130124.37627373818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6107430.769230769,
            "unit": "ns",
            "range": "± 238465.24598879128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176131.25,
            "unit": "ns",
            "range": "± 9221.755973123996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174036.66666666666,
            "unit": "ns",
            "range": "± 13574.972427393524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138059.375,
            "unit": "ns",
            "range": "± 3808.382890668359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2735046.6666666665,
            "unit": "ns",
            "range": "± 43812.45528494423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2508031.5789473685,
            "unit": "ns",
            "range": "± 55390.58336167077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11907.52688172043,
            "unit": "ns",
            "range": "± 1522.457721204919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58259.574468085106,
            "unit": "ns",
            "range": "± 6832.938396385811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45476.041666666664,
            "unit": "ns",
            "range": "± 3340.49302354471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59765.656565656565,
            "unit": "ns",
            "range": "± 16041.929508966346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3351.0204081632655,
            "unit": "ns",
            "range": "± 715.1158651646186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12995.876288659794,
            "unit": "ns",
            "range": "± 2453.3955010426025"
          }
        ]
      }
    ]
  }
}