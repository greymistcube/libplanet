window.BENCHMARK_DATA = {
  "lastUpdate": 1690508836080,
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
          "id": "84896c2dbd5ae69d8598f91563d85f18494aa068",
          "message": "Prepare 3.2.0",
          "timestamp": "2023-07-28T10:34:17+09:00",
          "tree_id": "caa34c3224c3f99addd0c02b454de2a675696ee0",
          "url": "https://github.com/greymistcube/libplanet/commit/84896c2dbd5ae69d8598f91563d85f18494aa068"
        },
        "date": 1690508828549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284638.17647058825,
            "unit": "ns",
            "range": "± 11449.883604134817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269514.2826086957,
            "unit": "ns",
            "range": "± 9265.836244956927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236230.5625,
            "unit": "ns",
            "range": "± 4635.76865929481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284503,
            "unit": "ns",
            "range": "± 23788.57390881985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3994023.6,
            "unit": "ns",
            "range": "± 21790.58831828877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19571.739130434784,
            "unit": "ns",
            "range": "± 1723.8358764689387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89204.86206896552,
            "unit": "ns",
            "range": "± 3778.91065454414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74549.68181818182,
            "unit": "ns",
            "range": "± 1795.3684430557275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83065.34375,
            "unit": "ns",
            "range": "± 2679.9826771458033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5032.632653061224,
            "unit": "ns",
            "range": "± 612.5714162068889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18858.884210526317,
            "unit": "ns",
            "range": "± 1438.0764624949827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368720.86,
            "unit": "ns",
            "range": "± 110255.0202316576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2594879.6,
            "unit": "ns",
            "range": "± 73909.52973485616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1730909.0111111111,
            "unit": "ns",
            "range": "± 100374.41335449141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4860981.688888889,
            "unit": "ns",
            "range": "± 177901.36469452316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6421411.946986607,
            "unit": "ns",
            "range": "± 14651.335610239648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974594.11796875,
            "unit": "ns",
            "range": "± 10026.459186374406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391721.9119698661,
            "unit": "ns",
            "range": "± 595.4360078208376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582298.093489583,
            "unit": "ns",
            "range": "± 2510.8868765569123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823515.4921875,
            "unit": "ns",
            "range": "± 404.1249343961691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752154.0565708706,
            "unit": "ns",
            "range": "± 629.7722131962162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331512.0606060605,
            "unit": "ns",
            "range": "± 104143.01277388325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3476925.566666667,
            "unit": "ns",
            "range": "± 154559.16924084187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289450.866666666,
            "unit": "ns",
            "range": "± 46826.160374405285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3847910.9,
            "unit": "ns",
            "range": "± 79508.27093811324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6421926.46875,
            "unit": "ns",
            "range": "± 150533.30750432788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7664463.285714285,
            "unit": "ns",
            "range": "± 62485.1155044495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19546866.533333335,
            "unit": "ns",
            "range": "± 102667.87634327543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50364918.86666667,
            "unit": "ns",
            "range": "± 325755.102292212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100410869.66666667,
            "unit": "ns",
            "range": "± 491135.88741125213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207643930.92307693,
            "unit": "ns",
            "range": "± 763297.8510192316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46535.97222222222,
            "unit": "ns",
            "range": "± 2208.296271280812"
          }
        ]
      }
    ]
  }
}