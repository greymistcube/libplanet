window.BENCHMARK_DATA = {
  "lastUpdate": 1689919980243,
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
          "id": "6bbafd31a9daab47402fd5d80d24b95c9187d413",
          "message": "Merge tag '3.0.1' into merge/3.0.1-to-main\n\nLibplanet 3.0.1",
          "timestamp": "2023-07-21T14:53:07+09:00",
          "tree_id": "9d84defa3b64351c0e86182649cfc86d69ca680d",
          "url": "https://github.com/greymistcube/libplanet/commit/6bbafd31a9daab47402fd5d80d24b95c9187d413"
        },
        "date": 1689919965605,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8918423.822580645,
            "unit": "ns",
            "range": "± 404247.7986035552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22806426.555555556,
            "unit": "ns",
            "range": "± 944534.5101292741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56162875.541666664,
            "unit": "ns",
            "range": "± 1338565.7209430966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111704197.11538461,
            "unit": "ns",
            "range": "± 1860083.7074036722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227136145.75925925,
            "unit": "ns",
            "range": "± 4509839.189051138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86516.6888888889,
            "unit": "ns",
            "range": "± 10596.175115137616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388840.20408163266,
            "unit": "ns",
            "range": "± 44778.246895740114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 377441.6145833333,
            "unit": "ns",
            "range": "± 46420.23139284939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356226.0416666667,
            "unit": "ns",
            "range": "± 38912.046223818164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4686424.806122449,
            "unit": "ns",
            "range": "± 376367.7466312938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4576606.01010101,
            "unit": "ns",
            "range": "± 388302.7621796118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27543.971264367818,
            "unit": "ns",
            "range": "± 3354.392038767391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129416.62087912088,
            "unit": "ns",
            "range": "± 14957.97592132718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132493.16666666666,
            "unit": "ns",
            "range": "± 18710.75441236337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141995.24468085106,
            "unit": "ns",
            "range": "± 24228.581751230235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9651.65909090909,
            "unit": "ns",
            "range": "± 1342.6076950006752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26519.362068965518,
            "unit": "ns",
            "range": "± 3716.964822591373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788948.3181818181,
            "unit": "ns",
            "range": "± 227999.90491420162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3268990.442105263,
            "unit": "ns",
            "range": "± 259970.14479795666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2333945.15625,
            "unit": "ns",
            "range": "± 279844.99433106586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6445267.464646464,
            "unit": "ns",
            "range": "± 434628.995511544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3592278.163043478,
            "unit": "ns",
            "range": "± 200804.30863986898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3765262.2474747472,
            "unit": "ns",
            "range": "± 259766.73761270088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4750031.75,
            "unit": "ns",
            "range": "± 260498.21978610504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4139673.0625,
            "unit": "ns",
            "range": "± 292538.38915331627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7859137.016129033,
            "unit": "ns",
            "range": "± 573442.4217388618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7964468.554387019,
            "unit": "ns",
            "range": "± 327197.8248571278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2263492.173958333,
            "unit": "ns",
            "range": "± 66580.316281561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1501783.2785229953,
            "unit": "ns",
            "range": "± 62307.89851227364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3360311.386268029,
            "unit": "ns",
            "range": "± 88743.60113796181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005359.5219089674,
            "unit": "ns",
            "range": "± 25104.594330211512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746821.2266276042,
            "unit": "ns",
            "range": "± 11338.411942665414"
          }
        ]
      }
    ]
  }
}