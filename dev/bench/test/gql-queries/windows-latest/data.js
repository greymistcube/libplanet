window.BENCHMARK_DATA = {
  "lastUpdate": 1702832212414,
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
          "id": "c689d1b4cf3864c605b1a32010df2b7ce79e05d4",
          "message": "Helper query fix",
          "timestamp": "2023-12-18T01:43:52+09:00",
          "tree_id": "2d5fa37595f9a90ef0e48d0f22016c0602b7db0a",
          "url": "https://github.com/greymistcube/libplanet/commit/c689d1b4cf3864c605b1a32010df2b7ce79e05d4"
        },
        "date": 1702832184766,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942385.2631578947,
            "unit": "ns",
            "range": "± 95054.70985501718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719210.447761194,
            "unit": "ns",
            "range": "± 80790.41935085732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1320039.393939394,
            "unit": "ns",
            "range": "± 102322.02051006223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5244980.434782608,
            "unit": "ns",
            "range": "± 131823.79573707338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34220.48192771084,
            "unit": "ns",
            "range": "± 1818.6539538729467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4985728.571428572,
            "unit": "ns",
            "range": "± 48901.11574268138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13342957.142857144,
            "unit": "ns",
            "range": "± 200181.43967713087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32763064.285714287,
            "unit": "ns",
            "range": "± 229462.25969944082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65158553.333333336,
            "unit": "ns",
            "range": "± 273535.1501744381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128879886.66666667,
            "unit": "ns",
            "range": "± 872047.7041887974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3337656.1941964286,
            "unit": "ns",
            "range": "± 8191.015940766525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054360.5078125,
            "unit": "ns",
            "range": "± 1746.0118235663874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730788.5611979166,
            "unit": "ns",
            "range": "± 1617.9444013771524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952469.0504807692,
            "unit": "ns",
            "range": "± 2466.995010279422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608129.4986979166,
            "unit": "ns",
            "range": "± 1036.8419132369831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568280.0083705357,
            "unit": "ns",
            "range": "± 857.7276276254549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2105935.5555555555,
            "unit": "ns",
            "range": "± 78266.80811509598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282658.3333333335,
            "unit": "ns",
            "range": "± 135856.28681318602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2749575,
            "unit": "ns",
            "range": "± 61071.91511480112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2726116,
            "unit": "ns",
            "range": "± 69763.5332151882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6434066.666666667,
            "unit": "ns",
            "range": "± 361990.817903406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172456.6037735849,
            "unit": "ns",
            "range": "± 6623.864472611434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167359.375,
            "unit": "ns",
            "range": "± 6542.23685716423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142878.26086956522,
            "unit": "ns",
            "range": "± 2741.094095054868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2738320,
            "unit": "ns",
            "range": "± 36508.55477047224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2514846.6666666665,
            "unit": "ns",
            "range": "± 43373.65669664129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11181.25,
            "unit": "ns",
            "range": "± 1711.589750402885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57818.36734693877,
            "unit": "ns",
            "range": "± 7657.249740972526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45080,
            "unit": "ns",
            "range": "± 2003.9621769833034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59502.020202020205,
            "unit": "ns",
            "range": "± 12970.649597424932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2531.6326530612246,
            "unit": "ns",
            "range": "± 431.39594527904177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10337.113402061856,
            "unit": "ns",
            "range": "± 1491.4561947157595"
          }
        ]
      }
    ]
  }
}