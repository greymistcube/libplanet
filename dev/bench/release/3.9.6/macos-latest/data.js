window.BENCHMARK_DATA = {
  "lastUpdate": 1706247542749,
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
          "id": "43f1a0ff33d50a9e90602666c3b215515c5a3cd0",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:25:55+09:00",
          "tree_id": "27eaabd17f16bc3ddddb2605fb0cb3539cc6672e",
          "url": "https://github.com/greymistcube/libplanet/commit/43f1a0ff33d50a9e90602666c3b215515c5a3cd0"
        },
        "date": 1706247525568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7816206.516129033,
            "unit": "ns",
            "range": "± 234519.13413861295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18685901.5,
            "unit": "ns",
            "range": "± 125973.57147235288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46632943.4,
            "unit": "ns",
            "range": "± 740121.2462340015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93997182,
            "unit": "ns",
            "range": "± 1434427.090806092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191238496.22,
            "unit": "ns",
            "range": "± 4944039.656231266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34754.62222222222,
            "unit": "ns",
            "range": "± 3789.1813910272717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215623.73863636365,
            "unit": "ns",
            "range": "± 11577.864647872986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205609.7142857143,
            "unit": "ns",
            "range": "± 10238.18169616114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186181.0760869565,
            "unit": "ns",
            "range": "± 12310.033308204012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3697197.3666666667,
            "unit": "ns",
            "range": "± 66699.45733005487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3382217.523809524,
            "unit": "ns",
            "range": "± 75103.64788252235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11796.936781609196,
            "unit": "ns",
            "range": "± 734.3166844420645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57569.813953488374,
            "unit": "ns",
            "range": "± 4625.16412493941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51389.15730337079,
            "unit": "ns",
            "range": "± 4199.918903164236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58814.221052631576,
            "unit": "ns",
            "range": "± 10065.520336381289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3124.9444444444443,
            "unit": "ns",
            "range": "± 460.8106465079568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12099.456043956045,
            "unit": "ns",
            "range": "± 1251.3541723721005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1071002.6979166667,
            "unit": "ns",
            "range": "± 94065.34000365132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2221362.6440677964,
            "unit": "ns",
            "range": "± 97573.77531629374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581278.7777777778,
            "unit": "ns",
            "range": "± 124837.04301163531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7357235.32967033,
            "unit": "ns",
            "range": "± 734323.0782643299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2900467.033333333,
            "unit": "ns",
            "range": "± 108257.15798853461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2957120.6428571427,
            "unit": "ns",
            "range": "± 73765.54114028838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3604816.6666666665,
            "unit": "ns",
            "range": "± 121516.72648962525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3366087.0384615385,
            "unit": "ns",
            "range": "± 137036.27961300962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12926194.453608247,
            "unit": "ns",
            "range": "± 1763088.7402339184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4235550.2109375,
            "unit": "ns",
            "range": "± 62022.38042389489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1313680.886783854,
            "unit": "ns",
            "range": "± 14447.30240605852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856372.4267578125,
            "unit": "ns",
            "range": "± 8396.508988237305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953892.431919643,
            "unit": "ns",
            "range": "± 17039.503994048624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616751.6132114956,
            "unit": "ns",
            "range": "± 7974.078734946027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563065.9717447917,
            "unit": "ns",
            "range": "± 8988.70139322326"
          }
        ]
      }
    ]
  }
}