window.BENCHMARK_DATA = {
  "lastUpdate": 1696420110582,
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
          "id": "ddb46aab2a6afdaf5181941dd8192fab84f991c3",
          "message": "Prepare 3.6.0",
          "timestamp": "2023-10-04T20:34:43+09:00",
          "tree_id": "853ba8cc7953a26c53a131f6ee0468399ea5e559",
          "url": "https://github.com/greymistcube/libplanet/commit/ddb46aab2a6afdaf5181941dd8192fab84f991c3"
        },
        "date": 1696420102157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51913.30952380953,
            "unit": "ns",
            "range": "± 3165.0579810680665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8093998.692307692,
            "unit": "ns",
            "range": "± 39060.98635976102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19903386.2,
            "unit": "ns",
            "range": "± 58788.665325408234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51251624.64285714,
            "unit": "ns",
            "range": "± 202218.05605206973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102565930,
            "unit": "ns",
            "range": "± 156833.46367347174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206311335.85714287,
            "unit": "ns",
            "range": "± 563226.8313856748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294321.9137931034,
            "unit": "ns",
            "range": "± 12728.339319586954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281287.8,
            "unit": "ns",
            "range": "± 6030.263838226375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260758.14285714287,
            "unit": "ns",
            "range": "± 4193.715863915049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4325791.866666666,
            "unit": "ns",
            "range": "± 20235.501292342153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941007.214285714,
            "unit": "ns",
            "range": "± 30739.93538899814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25171.684210526317,
            "unit": "ns",
            "range": "± 2075.609729761343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104437.94444444444,
            "unit": "ns",
            "range": "± 5088.573733843054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83296.73809523809,
            "unit": "ns",
            "range": "± 4291.323738027156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98121.01030927835,
            "unit": "ns",
            "range": "± 11305.206589494179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6849.515463917526,
            "unit": "ns",
            "range": "± 1298.5584163586466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24153.129411764705,
            "unit": "ns",
            "range": "± 1327.5930761759664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464188.112244898,
            "unit": "ns",
            "range": "± 125204.16312953277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2599228.3333333335,
            "unit": "ns",
            "range": "± 65228.7334676759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096140.7142857143,
            "unit": "ns",
            "range": "± 99635.09221164277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8863010.361702127,
            "unit": "ns",
            "range": "± 341781.52650076395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5105882.700520833,
            "unit": "ns",
            "range": "± 17166.07967555152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1596610.9092548077,
            "unit": "ns",
            "range": "± 1401.8416106880934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081405.1489583333,
            "unit": "ns",
            "range": "± 1024.5831849515555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596688.6634615385,
            "unit": "ns",
            "range": "± 3175.2860906381525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806630.4132161458,
            "unit": "ns",
            "range": "± 350.78192921768283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742497.8429827009,
            "unit": "ns",
            "range": "± 519.6855583319702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3455073.1333333333,
            "unit": "ns",
            "range": "± 41405.35124295387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3605756.933333333,
            "unit": "ns",
            "range": "± 48666.41967585726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4330230.333333333,
            "unit": "ns",
            "range": "± 40776.87440145923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4367150.523809524,
            "unit": "ns",
            "range": "± 102073.1583726197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9901358.76,
            "unit": "ns",
            "range": "± 221555.66125924955"
          }
        ]
      }
    ]
  }
}