window.BENCHMARK_DATA = {
  "lastUpdate": 1691647836258,
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
          "id": "4715616cde03d41357827312c6b961bd463bd398",
          "message": "Prepare 3.1.2",
          "timestamp": "2023-08-10T14:57:52+09:00",
          "tree_id": "d30ecd7404f1df3761d2e07603c5ace4f72df8b9",
          "url": "https://github.com/greymistcube/libplanet/commit/4715616cde03d41357827312c6b961bd463bd398"
        },
        "date": 1691647828882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229013.72,
            "unit": "ns",
            "range": "± 84023.59720267079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469833.3333333335,
            "unit": "ns",
            "range": "± 53319.647948771686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4204935.625,
            "unit": "ns",
            "range": "± 80834.13856028487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3728426.1333333333,
            "unit": "ns",
            "range": "± 57193.23082806548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6257559.25,
            "unit": "ns",
            "range": "± 174382.91054811387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7686452.533333333,
            "unit": "ns",
            "range": "± 46986.869899802354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19444120.933333334,
            "unit": "ns",
            "range": "± 70899.88267315162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49720270.615384616,
            "unit": "ns",
            "range": "± 546897.8894226262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98109268.73333333,
            "unit": "ns",
            "range": "± 789432.6842011715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196525271.26666668,
            "unit": "ns",
            "range": "± 1644610.5281839077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46866.096774193546,
            "unit": "ns",
            "range": "± 2034.936416694493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6102904.807477678,
            "unit": "ns",
            "range": "± 32954.77070299355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911481.1399274555,
            "unit": "ns",
            "range": "± 3252.557496723146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387284.8812779018,
            "unit": "ns",
            "range": "± 690.5449705815928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590330.610576923,
            "unit": "ns",
            "range": "± 6626.850107830069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808020.5904715402,
            "unit": "ns",
            "range": "± 1031.1358771452065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749761.1990885417,
            "unit": "ns",
            "range": "± 3080.9390189378614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278308.0857142857,
            "unit": "ns",
            "range": "± 9147.015470734088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260829.04545454544,
            "unit": "ns",
            "range": "± 9134.063643803269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231556.7857142857,
            "unit": "ns",
            "range": "± 3511.5157844434652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294169.6,
            "unit": "ns",
            "range": "± 22492.981387217533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737761.3076923075,
            "unit": "ns",
            "range": "± 27637.030657509185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16715.05376344086,
            "unit": "ns",
            "range": "± 976.2334713357942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83085.07407407407,
            "unit": "ns",
            "range": "± 4357.61540804652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70371.42857142857,
            "unit": "ns",
            "range": "± 675.3102665027062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81270.73404255319,
            "unit": "ns",
            "range": "± 8463.519400871965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4329.876288659794,
            "unit": "ns",
            "range": "± 627.0102713428352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15449.368421052632,
            "unit": "ns",
            "range": "± 1065.0695817108754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332694.1595744682,
            "unit": "ns",
            "range": "± 81631.41235163489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542898.2666666666,
            "unit": "ns",
            "range": "± 75629.86827507864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686550.322580645,
            "unit": "ns",
            "range": "± 110577.52525472808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4576753.333333333,
            "unit": "ns",
            "range": "± 113710.58223006972"
          }
        ]
      }
    ]
  }
}