window.BENCHMARK_DATA = {
  "lastUpdate": 1688815994104,
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
          "id": "5620fcbbe02a0d05a15d8a8c0d082a188239ff6a",
          "message": "Nullable crypto",
          "timestamp": "2023-07-08T20:14:57+09:00",
          "tree_id": "ca7d1bf28b1784bae6b9a3c9fff571c818a9f28e",
          "url": "https://github.com/greymistcube/libplanet/commit/5620fcbbe02a0d05a15d8a8c0d082a188239ff6a"
        },
        "date": 1688815985029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356382.68888888886,
            "unit": "ns",
            "range": "± 20095.42268169682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334503.21794871794,
            "unit": "ns",
            "range": "± 17043.169199256306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326343.84523809527,
            "unit": "ns",
            "range": "± 17387.94127812211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5407738.919354838,
            "unit": "ns",
            "range": "± 246249.7939772658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4877097.595744681,
            "unit": "ns",
            "range": "± 188336.67327637304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19504.082352941175,
            "unit": "ns",
            "range": "± 2706.3968104323153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101046.93684210526,
            "unit": "ns",
            "range": "± 8080.942931090596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111403.8163265306,
            "unit": "ns",
            "range": "± 15375.71077116416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127431.88043478261,
            "unit": "ns",
            "range": "± 16161.467382406212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7926.428571428572,
            "unit": "ns",
            "range": "± 1450.9355044970064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20204.934782608696,
            "unit": "ns",
            "range": "± 4173.274221994487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1724189.3181818181,
            "unit": "ns",
            "range": "± 103244.64443559884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3304798.946236559,
            "unit": "ns",
            "range": "± 234306.99091016792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276611.6923076925,
            "unit": "ns",
            "range": "± 184584.3457050758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6640770,
            "unit": "ns",
            "range": "± 472979.1165707002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7565524.095833333,
            "unit": "ns",
            "range": "± 136426.13868140202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2398164.19765625,
            "unit": "ns",
            "range": "± 36737.15547453126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1695652.6563895089,
            "unit": "ns",
            "range": "± 20366.32338901058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189691.4537259615,
            "unit": "ns",
            "range": "± 21483.212587658287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1039665.8765345982,
            "unit": "ns",
            "range": "± 11165.053558790263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970168.271875,
            "unit": "ns",
            "range": "± 11706.666398022535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4272179.802083333,
            "unit": "ns",
            "range": "± 283872.2094695584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4436387.402597402,
            "unit": "ns",
            "range": "± 221408.10491691937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5316750.236842105,
            "unit": "ns",
            "range": "± 268834.4003658693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4980233.098591549,
            "unit": "ns",
            "range": "± 242143.487857637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8599688.232876712,
            "unit": "ns",
            "range": "± 423440.15646922425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10191668.177419355,
            "unit": "ns",
            "range": "± 463724.18488263735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27619899.173913043,
            "unit": "ns",
            "range": "± 1000045.096794813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68586771.6923077,
            "unit": "ns",
            "range": "± 1119471.6142434776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138234479.7857143,
            "unit": "ns",
            "range": "± 1702561.0590956192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287277324.5,
            "unit": "ns",
            "range": "± 4856797.107232324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67281.32291666667,
            "unit": "ns",
            "range": "± 10261.193421404223"
          }
        ]
      }
    ]
  }
}