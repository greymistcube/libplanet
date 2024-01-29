window.BENCHMARK_DATA = {
  "lastUpdate": 1706511876506,
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
          "id": "0260c38d672dc87ffaec6b4432e9da1bae36bfd2",
          "message": "Removed old mock implementation",
          "timestamp": "2024-01-29T15:51:46+09:00",
          "tree_id": "6cc0d42fcbe6db2688a869016e15ade9b9e2573c",
          "url": "https://github.com/greymistcube/libplanet/commit/0260c38d672dc87ffaec6b4432e9da1bae36bfd2"
        },
        "date": 1706511869237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2457343.5,
            "unit": "ns",
            "range": "± 42522.28779458738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534188.6964285714,
            "unit": "ns",
            "range": "± 108896.44398617174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120745.076923077,
            "unit": "ns",
            "range": "± 30867.37391772943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3268874.3985507246,
            "unit": "ns",
            "range": "± 149160.11952568297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13653184.36516854,
            "unit": "ns",
            "range": "± 929486.6774695907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40313.47311827957,
            "unit": "ns",
            "range": "± 5469.03239512653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006272.0967741936,
            "unit": "ns",
            "range": "± 91529.60390069867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922369.4102564103,
            "unit": "ns",
            "range": "± 66089.98904313722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700446.641304348,
            "unit": "ns",
            "range": "± 180651.18318257848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12747208.576470587,
            "unit": "ns",
            "range": "± 873194.8576265422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5728668.2,
            "unit": "ns",
            "range": "± 82080.52290299186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14565594.433333334,
            "unit": "ns",
            "range": "± 121194.89979690133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36529059.2,
            "unit": "ns",
            "range": "± 222668.11754851657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75387738.53846154,
            "unit": "ns",
            "range": "± 439066.8685378146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151049437.56666666,
            "unit": "ns",
            "range": "± 1037212.5746776768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727833.333533654,
            "unit": "ns",
            "range": "± 25094.299641109217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209845.2842548077,
            "unit": "ns",
            "range": "± 6542.897513786194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776760.7960379465,
            "unit": "ns",
            "range": "± 10073.916311021927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948804.1865885416,
            "unit": "ns",
            "range": "± 20421.441495618317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619557.2118443081,
            "unit": "ns",
            "range": "± 954.8966746490967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565716.1426532452,
            "unit": "ns",
            "range": "± 339.33630191335624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208845.52777777778,
            "unit": "ns",
            "range": "± 9839.11399161848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213201.1914893617,
            "unit": "ns",
            "range": "± 16351.45343267035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171165.38636363635,
            "unit": "ns",
            "range": "± 5844.871447910587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3291747.6153846155,
            "unit": "ns",
            "range": "± 32945.95840802141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863797,
            "unit": "ns",
            "range": "± 28705.629345876692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19181.90404040404,
            "unit": "ns",
            "range": "± 5357.529574459483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79495.78571428571,
            "unit": "ns",
            "range": "± 15062.488919104451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88966.07692307692,
            "unit": "ns",
            "range": "± 981.9611721395829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96105.96875,
            "unit": "ns",
            "range": "± 10843.949423238288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4834.244897959184,
            "unit": "ns",
            "range": "± 1153.6536229192589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23414.469387755104,
            "unit": "ns",
            "range": "± 4140.876520723357"
          }
        ]
      }
    ]
  }
}