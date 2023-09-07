window.BENCHMARK_DATA = {
  "lastUpdate": 1694089365329,
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
          "id": "a90abe468b8dc3ffed34515797885dedcb4e0723",
          "message": "Prepare 3.3.1",
          "timestamp": "2023-09-07T21:02:34+09:00",
          "tree_id": "31cfafb237c60d6a860c9ac96ba14bd0c4ce6f13",
          "url": "https://github.com/greymistcube/libplanet/commit/a90abe468b8dc3ffed34515797885dedcb4e0723"
        },
        "date": 1694089334482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11101525.083333334,
            "unit": "ns",
            "range": "± 1057438.1675239524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30340016.622222222,
            "unit": "ns",
            "range": "± 2524064.7909702826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60334599.692307696,
            "unit": "ns",
            "range": "± 719179.4340422961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116293696.73333333,
            "unit": "ns",
            "range": "± 912974.152424956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231551421.33333334,
            "unit": "ns",
            "range": "± 3787713.7567034257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70321.53846153847,
            "unit": "ns",
            "range": "± 7449.616083035111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363694.0208333333,
            "unit": "ns",
            "range": "± 24887.93001774118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344524.5540540541,
            "unit": "ns",
            "range": "± 16421.75789911172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302450.2448979592,
            "unit": "ns",
            "range": "± 12011.041388257812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4905423.7272727275,
            "unit": "ns",
            "range": "± 116967.97270200642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4389033.357142857,
            "unit": "ns",
            "range": "± 104255.11926544858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20265.35106382979,
            "unit": "ns",
            "range": "± 1885.1391249958858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95140.7741935484,
            "unit": "ns",
            "range": "± 7514.111728476124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99054.63636363637,
            "unit": "ns",
            "range": "± 13465.64115227825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96825.02150537634,
            "unit": "ns",
            "range": "± 14748.025284157238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5927.712765957447,
            "unit": "ns",
            "range": "± 831.7522328341087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20642.738636363636,
            "unit": "ns",
            "range": "± 1595.986528724282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830716.46,
            "unit": "ns",
            "range": "± 180606.67024243317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3422561.976190476,
            "unit": "ns",
            "range": "± 183814.20835458697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345130.36,
            "unit": "ns",
            "range": "± 248813.26487741765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6230494.129032258,
            "unit": "ns",
            "range": "± 283612.9635433104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3923226.82,
            "unit": "ns",
            "range": "± 156127.77639608303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4058828.8636363638,
            "unit": "ns",
            "range": "± 170227.9190666273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5225667.12,
            "unit": "ns",
            "range": "± 208771.06645043672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4623185.144736842,
            "unit": "ns",
            "range": "± 223038.31303491062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8074700.235294118,
            "unit": "ns",
            "range": "± 380962.1089645529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6302288.531770834,
            "unit": "ns",
            "range": "± 40896.06528232421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2062587.9713541667,
            "unit": "ns",
            "range": "± 32758.363492410383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143331.9915865385,
            "unit": "ns",
            "range": "± 9591.965216402825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2887017.4067708333,
            "unit": "ns",
            "range": "± 47167.491411701405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939717.736188616,
            "unit": "ns",
            "range": "± 7093.569969927165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848550.8186383928,
            "unit": "ns",
            "range": "± 5313.913469061501"
          }
        ]
      }
    ]
  }
}