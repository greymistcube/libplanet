window.BENCHMARK_DATA = {
  "lastUpdate": 1690174391295,
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
          "id": "06f06701a3e1a3a46d88e2bb6e22b13f82989cf0",
          "message": "Update code for new ActionEvaluator API",
          "timestamp": "2023-07-24T13:37:58+09:00",
          "tree_id": "8d1e0a5db96001a2ddebc349198542b96434be45",
          "url": "https://github.com/greymistcube/libplanet/commit/06f06701a3e1a3a46d88e2bb6e22b13f82989cf0"
        },
        "date": 1690174373966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7967837.5,
            "unit": "ns",
            "range": "± 152039.11458524963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20307729.714285713,
            "unit": "ns",
            "range": "± 315471.1231764031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49487956.84615385,
            "unit": "ns",
            "range": "± 1320416.8656249645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98684215.07142857,
            "unit": "ns",
            "range": "± 725896.3392681084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203415288.18421054,
            "unit": "ns",
            "range": "± 4396853.623826463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63685.82258064516,
            "unit": "ns",
            "range": "± 8351.025391558984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321137.5,
            "unit": "ns",
            "range": "± 14030.720775585842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301668.66315789474,
            "unit": "ns",
            "range": "± 30844.88725060203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275678.5862068966,
            "unit": "ns",
            "range": "± 8005.446434045662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3941949.6551724137,
            "unit": "ns",
            "range": "± 112864.58708662336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3589563.0555555555,
            "unit": "ns",
            "range": "± 75497.18657825618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17782.883720930233,
            "unit": "ns",
            "range": "± 1759.0286318012509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81496.16304347826,
            "unit": "ns",
            "range": "± 8563.853142333444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77847.96774193548,
            "unit": "ns",
            "range": "± 8978.358457801414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99418.58064516129,
            "unit": "ns",
            "range": "± 12232.43482048637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5222.894736842105,
            "unit": "ns",
            "range": "± 609.372182567352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16866.415730337078,
            "unit": "ns",
            "range": "± 2037.1253688435843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1620067.6030927836,
            "unit": "ns",
            "range": "± 178825.808068709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066069.1868686867,
            "unit": "ns",
            "range": "± 232267.11620401082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2077345.52,
            "unit": "ns",
            "range": "± 160330.35134044048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6114836.5,
            "unit": "ns",
            "range": "± 319956.3909418464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3312337.0625,
            "unit": "ns",
            "range": "± 60844.792598291984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323034.152777778,
            "unit": "ns",
            "range": "± 155725.8157788567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467395.647058823,
            "unit": "ns",
            "range": "± 141640.78260181096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3910133.867924528,
            "unit": "ns",
            "range": "± 125738.1813340473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7086452.478260869,
            "unit": "ns",
            "range": "± 272663.2408778874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6009520.391145834,
            "unit": "ns",
            "range": "± 60414.36024107102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849524.3095703125,
            "unit": "ns",
            "range": "± 13719.29962317205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224931.1640625,
            "unit": "ns",
            "range": "± 6477.9771354743425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574553.390925481,
            "unit": "ns",
            "range": "± 70405.02017062392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898976.2082868303,
            "unit": "ns",
            "range": "± 9347.919563549773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805676.4077148438,
            "unit": "ns",
            "range": "± 8428.333570759054"
          }
        ]
      }
    ]
  }
}