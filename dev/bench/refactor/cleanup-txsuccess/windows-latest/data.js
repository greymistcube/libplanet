window.BENCHMARK_DATA = {
  "lastUpdate": 1695170546579,
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
          "id": "83ea68379a7ee1222db323c0b069033faeb46d6c",
          "message": "Remove unused ExceptionMetadata from TxFailure",
          "timestamp": "2023-09-20T09:13:08+09:00",
          "tree_id": "520c196eeee8ba5ec7c963827cf256c6ad7f685b",
          "url": "https://github.com/greymistcube/libplanet/commit/83ea68379a7ee1222db323c0b069033faeb46d6c"
        },
        "date": 1695170515554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662028.7234042552,
            "unit": "ns",
            "range": "± 131838.98261947307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159726.76056338,
            "unit": "ns",
            "range": "± 152746.40978502008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2083245.652173913,
            "unit": "ns",
            "range": "± 144075.77708042474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5415150.793650794,
            "unit": "ns",
            "range": "± 247644.74091119494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59543.47826086957,
            "unit": "ns",
            "range": "± 4497.137168667188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9934580,
            "unit": "ns",
            "range": "± 371387.5763090826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25601960.975609757,
            "unit": "ns",
            "range": "± 915127.1662665382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63749105.2631579,
            "unit": "ns",
            "range": "± 1318001.782781497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128655524.24242425,
            "unit": "ns",
            "range": "± 4036366.651924592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261876952.27272728,
            "unit": "ns",
            "range": "± 9774903.920386398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5612412.857142857,
            "unit": "ns",
            "range": "± 183853.81765156708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1775441.8212890625,
            "unit": "ns",
            "range": "± 34131.40283543506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323968.8626802885,
            "unit": "ns",
            "range": "± 36049.5224419515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3251367.6432291665,
            "unit": "ns",
            "range": "± 33167.984556477386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048984.228515625,
            "unit": "ns",
            "range": "± 27078.561619269673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965756.1662946428,
            "unit": "ns",
            "range": "± 16857.134719237587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4234446.875,
            "unit": "ns",
            "range": "± 131684.150427416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4349189.47368421,
            "unit": "ns",
            "range": "± 94637.49488757872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5254828.301886792,
            "unit": "ns",
            "range": "± 206097.3074669776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4670864.102564103,
            "unit": "ns",
            "range": "± 159986.03473129097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7325643.58974359,
            "unit": "ns",
            "range": "± 250374.48351879016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315628.5714285714,
            "unit": "ns",
            "range": "± 10295.846433465906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304255.55555555556,
            "unit": "ns",
            "range": "± 9481.484044311823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292511.90476190473,
            "unit": "ns",
            "range": "± 10597.749470730425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5089014.285714285,
            "unit": "ns",
            "range": "± 119074.2763392425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4599916.666666667,
            "unit": "ns",
            "range": "± 39564.78768099766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27928.72340425532,
            "unit": "ns",
            "range": "± 2094.315005443784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111829.21348314607,
            "unit": "ns",
            "range": "± 7282.188766984687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102939.39393939394,
            "unit": "ns",
            "range": "± 11327.479844561301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112350.51546391753,
            "unit": "ns",
            "range": "± 17032.34743382512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7770.408163265306,
            "unit": "ns",
            "range": "± 1207.0419823474117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26735.106382978724,
            "unit": "ns",
            "range": "± 2542.1482510853803"
          }
        ]
      }
    ]
  }
}