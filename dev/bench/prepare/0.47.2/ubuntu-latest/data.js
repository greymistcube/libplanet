window.BENCHMARK_DATA = {
  "lastUpdate": 1678782835994,
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
          "id": "8d6285846fc703b3e6fa779e0ba19551fccd0f22",
          "message": "Prepare 0.47.2",
          "timestamp": "2023-03-14T17:20:10+09:00",
          "tree_id": "8dbcdc2786a763fbd504de7e19f1d806760b87d8",
          "url": "https://github.com/greymistcube/libplanet/commit/8d6285846fc703b3e6fa779e0ba19551fccd0f22"
        },
        "date": 1678782829587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106123.23333333334,
            "unit": "ns",
            "range": "± 12116.036005868653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240806.96774193548,
            "unit": "ns",
            "range": "± 18157.776712479215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195594.73469387754,
            "unit": "ns",
            "range": "± 11894.158234799721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3708767.533333333,
            "unit": "ns",
            "range": "± 42251.76275421057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9193883.1875,
            "unit": "ns",
            "range": "± 170984.68114160353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25672.228260869564,
            "unit": "ns",
            "range": "± 2886.941589040763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66051.28378378379,
            "unit": "ns",
            "range": "± 3151.392636359449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44656.21276595745,
            "unit": "ns",
            "range": "± 3579.3966208423512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110954.82474226804,
            "unit": "ns",
            "range": "± 15906.728971839184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8567.9375,
            "unit": "ns",
            "range": "± 928.8914367760042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30646.18888888889,
            "unit": "ns",
            "range": "± 2169.1075412984605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5359530.959821428,
            "unit": "ns",
            "range": "± 39131.02654673872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1692955.9705729166,
            "unit": "ns",
            "range": "± 1744.3998766411412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1199110.376953125,
            "unit": "ns",
            "range": "± 2797.459744072793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2395271.486197917,
            "unit": "ns",
            "range": "± 4229.327447898388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 760456.7274739583,
            "unit": "ns",
            "range": "± 2779.8641659096425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 696309.6999348958,
            "unit": "ns",
            "range": "± 280.20942761392257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121451.88888888889,
            "unit": "ns",
            "range": "± 11378.032377948779"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5153461.4665625,
            "unit": "ns",
            "range": "± 405375.0573603163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6069046.90625,
            "unit": "ns",
            "range": "± 355532.63951248885"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27922764.775510203,
            "unit": "ns",
            "range": "± 1111862.7240409683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7060169.065573771,
            "unit": "ns",
            "range": "± 318346.5705850501"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31025191.8,
            "unit": "ns",
            "range": "± 1011456.7463523559"
          }
        ]
      }
    ]
  }
}