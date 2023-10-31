window.BENCHMARK_DATA = {
  "lastUpdate": 1698748854481,
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
          "id": "22489754688a856bb4a3731eb9762658143f5edd",
          "message": "Reorganize and cleanup BlockChain",
          "timestamp": "2023-10-31T19:24:42+09:00",
          "tree_id": "a0f54d531e483644a84c33c7d7c4c6a4b54cf95a",
          "url": "https://github.com/greymistcube/libplanet/commit/22489754688a856bb4a3731eb9762658143f5edd"
        },
        "date": 1698748828141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394021.4285714286,
            "unit": "ns",
            "range": "± 178598.16339781374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2410288.888888889,
            "unit": "ns",
            "range": "± 59126.23609593118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145745,
            "unit": "ns",
            "range": "± 177001.7618898784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8361682.02247191,
            "unit": "ns",
            "range": "± 537420.0774749077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55806.12244897959,
            "unit": "ns",
            "range": "± 8720.420593357745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7097826.666666667,
            "unit": "ns",
            "range": "± 110137.55338968932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18206947.435897436,
            "unit": "ns",
            "range": "± 536367.7805814625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45777928.571428575,
            "unit": "ns",
            "range": "± 309230.7016018734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89908750,
            "unit": "ns",
            "range": "± 539575.4980324098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183818413.33333334,
            "unit": "ns",
            "range": "± 1128208.1576342112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4544110.104166667,
            "unit": "ns",
            "range": "± 47100.59287539914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1483765.5598958333,
            "unit": "ns",
            "range": "± 8776.100652837406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085433.0013020833,
            "unit": "ns",
            "range": "± 17466.459432646207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593997.9296875,
            "unit": "ns",
            "range": "± 31121.134866915607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840441.6541466346,
            "unit": "ns",
            "range": "± 6917.227771621454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745538.8602120535,
            "unit": "ns",
            "range": "± 6264.578773083682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2967733.3333333335,
            "unit": "ns",
            "range": "± 52985.12819201073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3150653.3333333335,
            "unit": "ns",
            "range": "± 57481.08840139967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3867473.3333333335,
            "unit": "ns",
            "range": "± 63187.84316472215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3706837.037037037,
            "unit": "ns",
            "range": "± 155846.5782776976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9215706.976744186,
            "unit": "ns",
            "range": "± 283186.1203514217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243600,
            "unit": "ns",
            "range": "± 6581.174048135473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227147.61904761905,
            "unit": "ns",
            "range": "± 8134.726466243592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198407.40740740742,
            "unit": "ns",
            "range": "± 8330.504341611286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3749353.3333333335,
            "unit": "ns",
            "range": "± 50514.819136377715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3395500,
            "unit": "ns",
            "range": "± 29689.34392769808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16540.449438202246,
            "unit": "ns",
            "range": "± 1281.1322319377919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79973.80952380953,
            "unit": "ns",
            "range": "± 4046.510293282737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64369.565217391304,
            "unit": "ns",
            "range": "± 2387.082791025005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72474.74226804124,
            "unit": "ns",
            "range": "± 8159.912567544191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4246.938775510204,
            "unit": "ns",
            "range": "± 578.3381955031729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16467.34693877551,
            "unit": "ns",
            "range": "± 1602.046082854195"
          }
        ]
      }
    ]
  }
}