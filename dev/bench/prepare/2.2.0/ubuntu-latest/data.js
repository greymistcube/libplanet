window.BENCHMARK_DATA = {
  "lastUpdate": 1687252803622,
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
          "id": "a773290c3c3a18d5b2b87a7a12c0ea77f49f885b",
          "message": "Prepare 2.2.0",
          "timestamp": "2023-06-20T18:01:12+09:00",
          "tree_id": "3d26d1121715b7705e92c24024b98f0ed814593b",
          "url": "https://github.com/greymistcube/libplanet/commit/a773290c3c3a18d5b2b87a7a12c0ea77f49f885b"
        },
        "date": 1687252794900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4023919.7021276597,
            "unit": "ns",
            "range": "± 332944.0043510443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4132046.5454545454,
            "unit": "ns",
            "range": "± 313657.8453864576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5575300.9387755105,
            "unit": "ns",
            "range": "± 402316.9935799027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5085451.319148936,
            "unit": "ns",
            "range": "± 363797.7932646962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9243585.06122449,
            "unit": "ns",
            "range": "± 648617.2251923813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7492442.419791667,
            "unit": "ns",
            "range": "± 129049.75651103382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2380481.1901041665,
            "unit": "ns",
            "range": "± 28095.523757510047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1693974.182421875,
            "unit": "ns",
            "range": "± 27807.251198781796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3292963.685431985,
            "unit": "ns",
            "range": "± 65371.14683755189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071161.9764322916,
            "unit": "ns",
            "range": "± 17383.217298755586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 988727.6614925987,
            "unit": "ns",
            "range": "± 21511.38731887887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385199.86734693876,
            "unit": "ns",
            "range": "± 68948.13370299846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366642.5208333333,
            "unit": "ns",
            "range": "± 70165.33109419107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293545.8453608247,
            "unit": "ns",
            "range": "± 50337.795691404564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5111175.25,
            "unit": "ns",
            "range": "± 348492.30586026656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4821861.721649485,
            "unit": "ns",
            "range": "± 342469.2671233965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23875.64285714286,
            "unit": "ns",
            "range": "± 10585.367537410397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100412.85106382979,
            "unit": "ns",
            "range": "± 14907.27169528128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104149.22340425532,
            "unit": "ns",
            "range": "± 24784.515255597198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126224.25274725274,
            "unit": "ns",
            "range": "± 27608.071782881587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5702.222222222223,
            "unit": "ns",
            "range": "± 1034.677149643794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23994.0202020202,
            "unit": "ns",
            "range": "± 10152.427209514268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763801.0425531915,
            "unit": "ns",
            "range": "± 180310.51473302513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3528419.315217391,
            "unit": "ns",
            "range": "± 264232.14139547443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2813402.1875,
            "unit": "ns",
            "range": "± 253550.025083448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7304150.78125,
            "unit": "ns",
            "range": "± 600671.1117161355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60842.04301075269,
            "unit": "ns",
            "range": "± 13091.381594902326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9357593.103092784,
            "unit": "ns",
            "range": "± 614528.2947995812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25584132.773195878,
            "unit": "ns",
            "range": "± 1538316.8806390823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66885052.16901408,
            "unit": "ns",
            "range": "± 3211827.98857643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133889265.66666667,
            "unit": "ns",
            "range": "± 4144203.648462472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272176591.7241379,
            "unit": "ns",
            "range": "± 11897769.44445756"
          }
        ]
      }
    ]
  }
}