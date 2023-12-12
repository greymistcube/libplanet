window.BENCHMARK_DATA = {
  "lastUpdate": 1702391589212,
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
          "id": "5e119e4c89abc2575593bef0141eab83e735888b",
          "message": "Updated PublicKeyType",
          "timestamp": "2023-12-12T23:19:39+09:00",
          "tree_id": "10154c1d6706819011527e83383a4d02d77757be",
          "url": "https://github.com/greymistcube/libplanet/commit/5e119e4c89abc2575593bef0141eab83e735888b"
        },
        "date": 1702391568514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010600,
            "unit": "ns",
            "range": "± 104190.37839212865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1820760.5633802817,
            "unit": "ns",
            "range": "± 82965.26033548747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1432259.793814433,
            "unit": "ns",
            "range": "± 121994.67513976601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5341594.871794872,
            "unit": "ns",
            "range": "± 185442.64959495945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37004.945054945056,
            "unit": "ns",
            "range": "± 2855.2588415944097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5342900,
            "unit": "ns",
            "range": "± 94661.12637272941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13439321.42857143,
            "unit": "ns",
            "range": "± 208926.82995423366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34745164.28571428,
            "unit": "ns",
            "range": "± 287471.41558808903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67117733.33333333,
            "unit": "ns",
            "range": "± 692485.330083571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134681880,
            "unit": "ns",
            "range": "± 1231319.2537158788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3315030.2884615385,
            "unit": "ns",
            "range": "± 21437.94323202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063318.3072916667,
            "unit": "ns",
            "range": "± 4610.687267368809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740977.9854910715,
            "unit": "ns",
            "range": "± 2182.7308105435227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946958.125,
            "unit": "ns",
            "range": "± 2625.67340107413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625080.5385044643,
            "unit": "ns",
            "range": "± 1280.9853677647382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566240.9635416666,
            "unit": "ns",
            "range": "± 731.7001911994132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2212933.3333333335,
            "unit": "ns",
            "range": "± 41900.98973981964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2335755.7377049183,
            "unit": "ns",
            "range": "± 102542.79029522288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2892392.1875,
            "unit": "ns",
            "range": "± 120250.48764668638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2892310.101010101,
            "unit": "ns",
            "range": "± 310175.88443443435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6173186.206896552,
            "unit": "ns",
            "range": "± 171582.91149540906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183640.6779661017,
            "unit": "ns",
            "range": "± 7838.369786616828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175076.62337662338,
            "unit": "ns",
            "range": "± 7725.332493336726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143688.46153846153,
            "unit": "ns",
            "range": "± 3807.6057488218944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2829053.3333333335,
            "unit": "ns",
            "range": "± 28711.517516412085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585728.5714285714,
            "unit": "ns",
            "range": "± 24217.616873527568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12841.304347826086,
            "unit": "ns",
            "range": "± 1602.1381437408074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61956.25,
            "unit": "ns",
            "range": "± 7302.599573187331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51961.85567010309,
            "unit": "ns",
            "range": "± 5572.1301151910075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70090.625,
            "unit": "ns",
            "range": "± 16198.440978426874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3543.157894736842,
            "unit": "ns",
            "range": "± 763.7606609039622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12620.430107526881,
            "unit": "ns",
            "range": "± 1690.610845342012"
          }
        ]
      }
    ]
  }
}