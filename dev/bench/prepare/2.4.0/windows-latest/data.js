window.BENCHMARK_DATA = {
  "lastUpdate": 1688029075212,
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
          "id": "e2dadf94467a6098b1c7b90c6b50bbdf80e5a1d9",
          "message": "Prepare 2.4.0",
          "timestamp": "2023-06-29T17:41:58+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/greymistcube/libplanet/commit/e2dadf94467a6098b1c7b90c6b50bbdf80e5a1d9"
        },
        "date": 1688029053243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416372.2222222222,
            "unit": "ns",
            "range": "± 24760.305176194834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519622.9166666665,
            "unit": "ns",
            "range": "± 94701.39125802573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2353882.0512820515,
            "unit": "ns",
            "range": "± 81928.31228321652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5020576.7441860465,
            "unit": "ns",
            "range": "± 182457.1558805092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44051.086956521736,
            "unit": "ns",
            "range": "± 2747.4861463205966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6838235.714285715,
            "unit": "ns",
            "range": "± 60291.686595479085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17665871.42857143,
            "unit": "ns",
            "range": "± 63477.13614512562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45566693.333333336,
            "unit": "ns",
            "range": "± 218858.10623933186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90106564.28571428,
            "unit": "ns",
            "range": "± 561227.6154277169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180608913.33333334,
            "unit": "ns",
            "range": "± 1677702.2611155955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895531.009615385,
            "unit": "ns",
            "range": "± 9919.196265201563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521371.0872395833,
            "unit": "ns",
            "range": "± 1975.6719399746344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138828.76953125,
            "unit": "ns",
            "range": "± 1779.9407938728557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548547.4479166665,
            "unit": "ns",
            "range": "± 11254.270316283033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825931.5983072916,
            "unit": "ns",
            "range": "± 3840.581737456298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741752.34375,
            "unit": "ns",
            "range": "± 1021.2217866011243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3001127.027027027,
            "unit": "ns",
            "range": "± 45722.858668337925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3228116.6666666665,
            "unit": "ns",
            "range": "± 68106.82137383199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4023025.6097560977,
            "unit": "ns",
            "range": "± 143646.78517197628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3988100,
            "unit": "ns",
            "range": "± 59790.18442726326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6447663.157894737,
            "unit": "ns",
            "range": "± 198778.41720497454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257300,
            "unit": "ns",
            "range": "± 11059.456539422199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246317.39130434784,
            "unit": "ns",
            "range": "± 11755.586363158922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221194.94949494948,
            "unit": "ns",
            "range": "± 12893.641636104221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3896960,
            "unit": "ns",
            "range": "± 46805.47587012198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3494441.6666666665,
            "unit": "ns",
            "range": "± 26990.58618156046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18343.617021276597,
            "unit": "ns",
            "range": "± 1896.7180772727922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82273.40425531915,
            "unit": "ns",
            "range": "± 5358.3454261355855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67901.76470588235,
            "unit": "ns",
            "range": "± 3658.896911726847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87994.68085106384,
            "unit": "ns",
            "range": "± 11385.25142001918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5009.183673469388,
            "unit": "ns",
            "range": "± 891.6377534862669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16361.797752808989,
            "unit": "ns",
            "range": "± 1349.8742044065314"
          }
        ]
      }
    ]
  }
}