window.BENCHMARK_DATA = {
  "lastUpdate": 1701059992471,
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
          "id": "4a56d8893481517f81dc94973411460905ab698b",
          "message": "Better readability; test fix",
          "timestamp": "2023-11-27T13:27:12+09:00",
          "tree_id": "08072e7d8152ced75702896a41267846d5496111",
          "url": "https://github.com/greymistcube/libplanet/commit/4a56d8893481517f81dc94973411460905ab698b"
        },
        "date": 1701059972450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942940.4255319149,
            "unit": "ns",
            "range": "± 94859.97639888819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755507.9545454546,
            "unit": "ns",
            "range": "± 96401.07575780615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1289212.087912088,
            "unit": "ns",
            "range": "± 103713.25944927285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5146044.086021505,
            "unit": "ns",
            "range": "± 303348.5670709399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34137.63440860215,
            "unit": "ns",
            "range": "± 2173.4021606335673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5160600,
            "unit": "ns",
            "range": "± 50813.00452218338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13007235.714285715,
            "unit": "ns",
            "range": "± 171538.13483682487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33261392.85714286,
            "unit": "ns",
            "range": "± 386098.1694899841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64352878.94736842,
            "unit": "ns",
            "range": "± 1417124.6411029103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130281985.71428572,
            "unit": "ns",
            "range": "± 1375196.3628219357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278519.765625,
            "unit": "ns",
            "range": "± 8046.062759425029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044655.2433894231,
            "unit": "ns",
            "range": "± 2667.378815107552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722853.84765625,
            "unit": "ns",
            "range": "± 1536.9803357015624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1888819.9497767857,
            "unit": "ns",
            "range": "± 2559.8654904437085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610306.1662946428,
            "unit": "ns",
            "range": "± 1289.760141301409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551221.34765625,
            "unit": "ns",
            "range": "± 983.4146760943827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2087560.606060606,
            "unit": "ns",
            "range": "± 58577.44840910376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264407.1428571427,
            "unit": "ns",
            "range": "± 52325.209712227355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2748947.8260869565,
            "unit": "ns",
            "range": "± 67707.31039867796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2593357.6923076925,
            "unit": "ns",
            "range": "± 99672.34231230404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5918648.076923077,
            "unit": "ns",
            "range": "± 240460.43944359277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171217.07317073172,
            "unit": "ns",
            "range": "± 8946.077212988539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167491.30434782608,
            "unit": "ns",
            "range": "± 11854.351008824584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142423.80952380953,
            "unit": "ns",
            "range": "± 3212.1495547226255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2722273.3333333335,
            "unit": "ns",
            "range": "± 35453.882855391304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432860,
            "unit": "ns",
            "range": "± 45052.56929410353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10650,
            "unit": "ns",
            "range": "± 1431.091184384132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54222.10526315789,
            "unit": "ns",
            "range": "± 5400.377822624974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43903.27868852459,
            "unit": "ns",
            "range": "± 1971.6293780453736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57667.708333333336,
            "unit": "ns",
            "range": "± 13782.250177534159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2304.1237113402062,
            "unit": "ns",
            "range": "± 438.25352389085145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9730.232558139534,
            "unit": "ns",
            "range": "± 925.7200399360821"
          }
        ]
      }
    ]
  }
}