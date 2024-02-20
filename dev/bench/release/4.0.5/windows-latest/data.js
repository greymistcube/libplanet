window.BENCHMARK_DATA = {
  "lastUpdate": 1708403219978,
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
          "id": "ab6f9fad4ab4f23ab444634e707fdd11360c8248",
          "message": "Release 4.0.5",
          "timestamp": "2024-02-20T13:15:16+09:00",
          "tree_id": "9784c0ff337c321fabf7d47683498ac11e2f95cc",
          "url": "https://github.com/greymistcube/libplanet/commit/ab6f9fad4ab4f23ab444634e707fdd11360c8248"
        },
        "date": 1708403203072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1071240,
            "unit": "ns",
            "range": "± 140329.69836219362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1803168.75,
            "unit": "ns",
            "range": "± 66825.02129251198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642553.125,
            "unit": "ns",
            "range": "± 144159.80237816132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7035362.162162162,
            "unit": "ns",
            "range": "± 234875.93811692655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35810.22727272727,
            "unit": "ns",
            "range": "± 2154.068045154492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5070896.666666667,
            "unit": "ns",
            "range": "± 62167.38771444475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13423880,
            "unit": "ns",
            "range": "± 117196.57601044251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33140707.14285714,
            "unit": "ns",
            "range": "± 345614.10330973676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68544926.66666667,
            "unit": "ns",
            "range": "± 389273.0963267427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134932721.42857143,
            "unit": "ns",
            "range": "± 720461.2979287554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311947.684151786,
            "unit": "ns",
            "range": "± 2426.030894888072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093589.3629807692,
            "unit": "ns",
            "range": "± 1716.362867569187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738266.8526785715,
            "unit": "ns",
            "range": "± 946.1505573307223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939877.2916666667,
            "unit": "ns",
            "range": "± 5904.279502336294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623254.7502790178,
            "unit": "ns",
            "range": "± 823.9404802690954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582814.6784855769,
            "unit": "ns",
            "range": "± 613.5326391974738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234370,
            "unit": "ns",
            "range": "± 78232.25299173778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2322512.5,
            "unit": "ns",
            "range": "± 50678.74361453553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2857814.5161290322,
            "unit": "ns",
            "range": "± 83270.5772302442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3269934.6153846155,
            "unit": "ns",
            "range": "± 89141.61291925424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7994041.176470588,
            "unit": "ns",
            "range": "± 186917.7669095497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183451.66666666666,
            "unit": "ns",
            "range": "± 7877.031439177154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171848.38709677418,
            "unit": "ns",
            "range": "± 7001.960894798671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143333.33333333334,
            "unit": "ns",
            "range": "± 3754.9966711037173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2923260,
            "unit": "ns",
            "range": "± 53170.15543113852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506676.6666666665,
            "unit": "ns",
            "range": "± 33595.33272572815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12548.387096774193,
            "unit": "ns",
            "range": "± 1513.6058948911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61628.865979381444,
            "unit": "ns",
            "range": "± 7090.647578014393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47323.333333333336,
            "unit": "ns",
            "range": "± 2636.2660860399683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67522.22222222222,
            "unit": "ns",
            "range": "± 14477.276744958404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2876.7676767676767,
            "unit": "ns",
            "range": "± 557.2945366475437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12079.569892473119,
            "unit": "ns",
            "range": "± 1804.8581264118764"
          }
        ]
      }
    ]
  }
}