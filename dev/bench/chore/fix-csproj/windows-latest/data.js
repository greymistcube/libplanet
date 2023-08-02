window.BENCHMARK_DATA = {
  "lastUpdate": 1690940010685,
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
          "id": "85126addabf82295fa629727043a6fd2869ca007",
          "message": "Fix csproj",
          "timestamp": "2023-08-02T10:14:40+09:00",
          "tree_id": "e5b156d072a466456a1865a22fa6abd8553e0b40",
          "url": "https://github.com/greymistcube/libplanet/commit/85126addabf82295fa629727043a6fd2869ca007"
        },
        "date": 1690939986524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659975.5319148935,
            "unit": "ns",
            "range": "± 133719.16622676305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3156457.1428571427,
            "unit": "ns",
            "range": "± 168908.99758875245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106359.4736842103,
            "unit": "ns",
            "range": "± 160587.7556033462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5817575.510204081,
            "unit": "ns",
            "range": "± 373635.4146830934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53429.213483146064,
            "unit": "ns",
            "range": "± 3104.2932970905936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8649992.857142856,
            "unit": "ns",
            "range": "± 102841.00098460965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24125714.285714287,
            "unit": "ns",
            "range": "± 170022.89373965023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62473728.94736842,
            "unit": "ns",
            "range": "± 2120384.5092287483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127661466.66666667,
            "unit": "ns",
            "range": "± 2331490.1677641603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251249475.86206895,
            "unit": "ns",
            "range": "± 7328289.011166403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054814.0625,
            "unit": "ns",
            "range": "± 115806.8149323071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926644.921875,
            "unit": "ns",
            "range": "± 34294.93729558366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1430662.4195772058,
            "unit": "ns",
            "range": "± 29268.741956556067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3359228.90625,
            "unit": "ns",
            "range": "± 64667.85837869998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058147.9166666667,
            "unit": "ns",
            "range": "± 15428.223078863837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967359.7005208334,
            "unit": "ns",
            "range": "± 17112.975067780753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3975149.1228070175,
            "unit": "ns",
            "range": "± 167481.4276727071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4036872.3684210526,
            "unit": "ns",
            "range": "± 204364.54787050464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5093861.818181818,
            "unit": "ns",
            "range": "± 213709.2222233277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4561041.509433962,
            "unit": "ns",
            "range": "± 188790.38277530725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7477623.076923077,
            "unit": "ns",
            "range": "± 261090.18452144327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314745.76271186443,
            "unit": "ns",
            "range": "± 11613.403701281139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304667.85714285716,
            "unit": "ns",
            "range": "± 7226.753462549114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281217.80821917806,
            "unit": "ns",
            "range": "± 13928.172314351401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4982058.064516129,
            "unit": "ns",
            "range": "± 150565.20353696943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4601300,
            "unit": "ns",
            "range": "± 78227.62644016203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25552.68817204301,
            "unit": "ns",
            "range": "± 2512.559382722407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106230,
            "unit": "ns",
            "range": "± 7661.3938063631595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93867.01030927835,
            "unit": "ns",
            "range": "± 7830.944515849239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113975,
            "unit": "ns",
            "range": "± 19210.33712956592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6794.791666666667,
            "unit": "ns",
            "range": "± 1105.8571137992246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23636.559139784946,
            "unit": "ns",
            "range": "± 2093.0415223781993"
          }
        ]
      }
    ]
  }
}