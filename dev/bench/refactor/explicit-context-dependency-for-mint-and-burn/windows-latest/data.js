window.BENCHMARK_DATA = {
  "lastUpdate": 1687416523842,
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
          "id": "f941479dea8a2cbd9994461bf0ee6c3932cc3d97",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:28:42+09:00",
          "tree_id": "a45c5f0410ad050d474db2e6ae43492669faf08f",
          "url": "https://github.com/greymistcube/libplanet/commit/f941479dea8a2cbd9994461bf0ee6c3932cc3d97"
        },
        "date": 1687416503029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379428,
            "unit": "ns",
            "range": "± 108269.60463993988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2613820.2898550723,
            "unit": "ns",
            "range": "± 122225.88969477561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248304.1666666665,
            "unit": "ns",
            "range": "± 131067.75661680258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5261306,
            "unit": "ns",
            "range": "± 209477.62864334896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49348.35164835165,
            "unit": "ns",
            "range": "± 2770.3735262540818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7567612,
            "unit": "ns",
            "range": "± 201956.5058785348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21112135.714285713,
            "unit": "ns",
            "range": "± 258054.65314733042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52915106.666666664,
            "unit": "ns",
            "range": "± 843376.0129610607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105450092.85714285,
            "unit": "ns",
            "range": "± 907877.8979782262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210236860,
            "unit": "ns",
            "range": "± 1522148.766804912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869338.619791667,
            "unit": "ns",
            "range": "± 13586.070055993372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564877.4088541667,
            "unit": "ns",
            "range": "± 5923.631411691399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1207184.765625,
            "unit": "ns",
            "range": "± 3819.4365416958344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642607.0833333335,
            "unit": "ns",
            "range": "± 5659.374776344047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838461.50390625,
            "unit": "ns",
            "range": "± 1678.5796264633768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773008.6067708334,
            "unit": "ns",
            "range": "± 2433.924586446717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397300,
            "unit": "ns",
            "range": "± 81640.05389513164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514791.891891892,
            "unit": "ns",
            "range": "± 118892.5410668025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303160,
            "unit": "ns",
            "range": "± 77712.56379394887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4360297.222222222,
            "unit": "ns",
            "range": "± 139017.52096380026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6893386.666666667,
            "unit": "ns",
            "range": "± 200721.47580808264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269781.5789473684,
            "unit": "ns",
            "range": "± 8143.372542040781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264120,
            "unit": "ns",
            "range": "± 8623.388169937138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240896.9387755102,
            "unit": "ns",
            "range": "± 15824.582560456622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4166021.4285714286,
            "unit": "ns",
            "range": "± 41048.41753853104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3841028.5714285714,
            "unit": "ns",
            "range": "± 63884.7180302316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21224.468085106382,
            "unit": "ns",
            "range": "± 1803.800418722479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91244.79166666667,
            "unit": "ns",
            "range": "± 6129.890010031805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81357.57575757576,
            "unit": "ns",
            "range": "± 7724.201179345224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91631.3953488372,
            "unit": "ns",
            "range": "± 10825.158731376992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5539.1752577319585,
            "unit": "ns",
            "range": "± 872.6822518619114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18734.40860215054,
            "unit": "ns",
            "range": "± 1626.8464174629873"
          }
        ]
      }
    ]
  }
}