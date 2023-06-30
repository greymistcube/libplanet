window.BENCHMARK_DATA = {
  "lastUpdate": 1688094918964,
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
          "id": "08910b0af94fe9e356b243c6ed37f07dc619cca2",
          "message": "Move KeyConverters",
          "timestamp": "2023-06-30T11:40:45+09:00",
          "tree_id": "597224e5572792ee3be3cb7d08fe6365a148d443",
          "url": "https://github.com/greymistcube/libplanet/commit/08910b0af94fe9e356b243c6ed37f07dc619cca2"
        },
        "date": 1688094896905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788913.6363636365,
            "unit": "ns",
            "range": "± 39734.99471743774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2854434.375,
            "unit": "ns",
            "range": "± 125456.39755904066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051459.793814433,
            "unit": "ns",
            "range": "± 175350.26474399856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5431055.102040816,
            "unit": "ns",
            "range": "± 401982.50388208317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60119.58762886598,
            "unit": "ns",
            "range": "± 7979.121703640822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7785623.80952381,
            "unit": "ns",
            "range": "± 177789.55229360893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21989050,
            "unit": "ns",
            "range": "± 214820.19225389406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53871546.15384615,
            "unit": "ns",
            "range": "± 387509.1646558926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108537107.14285715,
            "unit": "ns",
            "range": "± 1114035.9043131873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222496493.75,
            "unit": "ns",
            "range": "± 4119805.4907108983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5275437.348790322,
            "unit": "ns",
            "range": "± 159623.2655999539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1621149.86328125,
            "unit": "ns",
            "range": "± 9510.719758380015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1238646.303013393,
            "unit": "ns",
            "range": "± 16450.621461126826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2764855.887276786,
            "unit": "ns",
            "range": "± 35482.49794068632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887710.5338541666,
            "unit": "ns",
            "range": "± 10455.997056346543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797764.0694754465,
            "unit": "ns",
            "range": "± 8257.755252410827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3773592.3076923075,
            "unit": "ns",
            "range": "± 36185.435871780915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797740,
            "unit": "ns",
            "range": "± 143916.45050956728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4501816.216216216,
            "unit": "ns",
            "range": "± 150972.61251541527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3945603.2258064514,
            "unit": "ns",
            "range": "± 117802.556519715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650622.413793104,
            "unit": "ns",
            "range": "± 148882.91635795974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304136.08247422683,
            "unit": "ns",
            "range": "± 19753.471137831122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302187.2340425532,
            "unit": "ns",
            "range": "± 20957.038666915003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275419.1919191919,
            "unit": "ns",
            "range": "± 23730.73300882761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4469778.571428572,
            "unit": "ns",
            "range": "± 78935.44761455331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4182365,
            "unit": "ns",
            "range": "± 94164.94081635356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28706.060606060608,
            "unit": "ns",
            "range": "± 3774.966365083789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117426,
            "unit": "ns",
            "range": "± 21122.77539538875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101398,
            "unit": "ns",
            "range": "± 18371.403887783883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134251.16279069768,
            "unit": "ns",
            "range": "± 12188.285061880446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9283.673469387755,
            "unit": "ns",
            "range": "± 2040.3503781151014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29529.166666666668,
            "unit": "ns",
            "range": "± 2857.3420356639012"
          }
        ]
      }
    ]
  }
}