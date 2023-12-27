window.BENCHMARK_DATA = {
  "lastUpdate": 1703647541543,
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
          "id": "938aabdadb2386ae59955429b57526892249e438",
          "message": "Cleaned up ShortNode internal implementation",
          "timestamp": "2023-12-27T11:18:21+09:00",
          "tree_id": "69943ff6e6d38f5e91e2c20aff61552354c1487d",
          "url": "https://github.com/greymistcube/libplanet/commit/938aabdadb2386ae59955429b57526892249e438"
        },
        "date": 1703647522638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952572,
            "unit": "ns",
            "range": "± 89680.14439657141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798406.25,
            "unit": "ns",
            "range": "± 117344.53617894884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1379295.918367347,
            "unit": "ns",
            "range": "± 149930.71590170372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5289031.746031746,
            "unit": "ns",
            "range": "± 242081.28521914664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34024.096385542165,
            "unit": "ns",
            "range": "± 1774.7270735858187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5249813.333333333,
            "unit": "ns",
            "range": "± 81965.54037840421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13331692.857142856,
            "unit": "ns",
            "range": "± 175132.68141298214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32339807.14285714,
            "unit": "ns",
            "range": "± 425010.2396310103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66415536.84210526,
            "unit": "ns",
            "range": "± 1450149.7402416093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125803485.71428572,
            "unit": "ns",
            "range": "± 978440.3608704109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323287.4441964286,
            "unit": "ns",
            "range": "± 8270.04544767257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056705.234375,
            "unit": "ns",
            "range": "± 3126.7716676779796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739389.35546875,
            "unit": "ns",
            "range": "± 1220.5549453332483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1869541.6145833333,
            "unit": "ns",
            "range": "± 7039.457767735257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619982.1158854166,
            "unit": "ns",
            "range": "± 2003.8916221997627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543252.8878348215,
            "unit": "ns",
            "range": "± 1087.6422176673775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2077842.105263158,
            "unit": "ns",
            "range": "± 45471.179099017994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2252050.819672131,
            "unit": "ns",
            "range": "± 95518.62230816708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790479.1666666665,
            "unit": "ns",
            "range": "± 71784.2478734271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2637906.4516129033,
            "unit": "ns",
            "range": "± 119365.37498194186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6296917.24137931,
            "unit": "ns",
            "range": "± 343583.7842394509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177551.31578947368,
            "unit": "ns",
            "range": "± 7623.1838216684355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168272.85714285713,
            "unit": "ns",
            "range": "± 8179.298212845548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139572.72727272726,
            "unit": "ns",
            "range": "± 3418.3234289538877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714094.4444444445,
            "unit": "ns",
            "range": "± 57990.46039420644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2456870,
            "unit": "ns",
            "range": "± 39676.08491630335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11772.043010752688,
            "unit": "ns",
            "range": "± 1393.6475126208618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53460,
            "unit": "ns",
            "range": "± 3564.9290457347947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44504.545454545456,
            "unit": "ns",
            "range": "± 2346.134462781357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62277.77777777778,
            "unit": "ns",
            "range": "± 14635.500281190447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2497.938144329897,
            "unit": "ns",
            "range": "± 364.2856541241876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10601.08695652174,
            "unit": "ns",
            "range": "± 1235.8646539588879"
          }
        ]
      }
    ]
  }
}