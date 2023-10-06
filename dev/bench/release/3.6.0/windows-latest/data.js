window.BENCHMARK_DATA = {
  "lastUpdate": 1696584177422,
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
          "id": "99e4103018faeb05ec1a274bc5b19c300bdd8bd1",
          "message": "Release 3.6.0",
          "timestamp": "2023-10-06T18:08:29+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/99e4103018faeb05ec1a274bc5b19c300bdd8bd1"
        },
        "date": 1696584146008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1221361,
            "unit": "ns",
            "range": "± 96800.70320201213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2225510.3773584906,
            "unit": "ns",
            "range": "± 86801.77980190232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1757877.3195876288,
            "unit": "ns",
            "range": "± 132185.81973333555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7013755.172413793,
            "unit": "ns",
            "range": "± 204303.3696425261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43079.10447761194,
            "unit": "ns",
            "range": "± 1940.9882919598208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6807314.285714285,
            "unit": "ns",
            "range": "± 15700.703420932703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17342136.666666668,
            "unit": "ns",
            "range": "± 60037.34393414375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44243686.666666664,
            "unit": "ns",
            "range": "± 215966.68680498807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88242764.28571428,
            "unit": "ns",
            "range": "± 250850.20233396068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174633392.85714287,
            "unit": "ns",
            "range": "± 449010.3124810005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4279162.220982143,
            "unit": "ns",
            "range": "± 9144.589263306389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1379839.1322544643,
            "unit": "ns",
            "range": "± 3100.139257561427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 978271.5625,
            "unit": "ns",
            "range": "± 2682.9416094816606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506581.953125,
            "unit": "ns",
            "range": "± 4707.230451105009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800937.5130208334,
            "unit": "ns",
            "range": "± 1536.7499179372712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732839.1861979166,
            "unit": "ns",
            "range": "± 1432.8902730075938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2857931.25,
            "unit": "ns",
            "range": "± 42921.42772943758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2983557.1428571427,
            "unit": "ns",
            "range": "± 19332.5438767704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3717990,
            "unit": "ns",
            "range": "± 82704.89643749542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3474560.769230769,
            "unit": "ns",
            "range": "± 154812.8225905772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8492982.352941176,
            "unit": "ns",
            "range": "± 273298.6619406292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223651.16279069768,
            "unit": "ns",
            "range": "± 6722.009765121739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219506.81818181818,
            "unit": "ns",
            "range": "± 8252.368165458107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199650,
            "unit": "ns",
            "range": "± 3402.2051672408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3665013.3333333335,
            "unit": "ns",
            "range": "± 22074.997708029867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3345533.3333333335,
            "unit": "ns",
            "range": "± 28328.95204220452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14838.461538461539,
            "unit": "ns",
            "range": "± 1177.1688475858064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72812.08791208791,
            "unit": "ns",
            "range": "± 4068.028055317743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62945.65217391304,
            "unit": "ns",
            "range": "± 1451.1682631808214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59678.260869565216,
            "unit": "ns",
            "range": "± 4510.837403968955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3608.1632653061224,
            "unit": "ns",
            "range": "± 380.90328598717264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14232.631578947368,
            "unit": "ns",
            "range": "± 1243.659844825127"
          }
        ]
      }
    ]
  }
}