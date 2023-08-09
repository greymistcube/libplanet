window.BENCHMARK_DATA = {
  "lastUpdate": 1691588348092,
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
          "id": "97cbcf9125c8adb50ae9b762f6a2460a01cd5249",
          "message": "Bump bencodex to 0.14.0",
          "timestamp": "2023-08-09T22:22:03+09:00",
          "tree_id": "772cf795e03f70869505636381199e4e4149f875",
          "url": "https://github.com/greymistcube/libplanet/commit/97cbcf9125c8adb50ae9b762f6a2460a01cd5249"
        },
        "date": 1691588328336,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8096440.157894737,
            "unit": "ns",
            "range": "± 179678.6145146888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20830904.64285714,
            "unit": "ns",
            "range": "± 357096.737990585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51804265.50980392,
            "unit": "ns",
            "range": "± 2114334.197185065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100326028.14285715,
            "unit": "ns",
            "range": "± 474623.85220992996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209011446.25714287,
            "unit": "ns",
            "range": "± 6282152.102277902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63998.59375,
            "unit": "ns",
            "range": "± 9277.439235590055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340282.72340425535,
            "unit": "ns",
            "range": "± 33192.06513948398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310499.6770833333,
            "unit": "ns",
            "range": "± 39992.73710891827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302636.9137931034,
            "unit": "ns",
            "range": "± 8609.670901779336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303583.897849462,
            "unit": "ns",
            "range": "± 280083.03099496965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3918878.847826087,
            "unit": "ns",
            "range": "± 249715.8666338202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26066.82222222222,
            "unit": "ns",
            "range": "± 3198.1505982268604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118637.58888888889,
            "unit": "ns",
            "range": "± 10134.724266238532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120091.70786516854,
            "unit": "ns",
            "range": "± 11747.195782594097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118792.46808510639,
            "unit": "ns",
            "range": "± 22760.861178457024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8183.714285714285,
            "unit": "ns",
            "range": "± 1276.4999020759853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25247.552631578947,
            "unit": "ns",
            "range": "± 3779.7064683070494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525709.5108695652,
            "unit": "ns",
            "range": "± 131827.39379215855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2790440.56,
            "unit": "ns",
            "range": "± 139940.56208399642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1858979.7631578948,
            "unit": "ns",
            "range": "± 198345.00551645766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5283906,
            "unit": "ns",
            "range": "± 262709.57480086136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453159.214285714,
            "unit": "ns",
            "range": "± 43994.23211526811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3445072.1966292136,
            "unit": "ns",
            "range": "± 190492.93408790333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5304702.551020408,
            "unit": "ns",
            "range": "± 329523.49736149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4068266.357894737,
            "unit": "ns",
            "range": "± 317911.1828256009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6945997.322580645,
            "unit": "ns",
            "range": "± 423342.0551628219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5770095.913461538,
            "unit": "ns",
            "range": "± 22039.93745426007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1645076.1365792411,
            "unit": "ns",
            "range": "± 10769.427163171082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995940.8138521635,
            "unit": "ns",
            "range": "± 8983.359487879055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646901.0329589844,
            "unit": "ns",
            "range": "± 81574.21394714781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779922.4346354167,
            "unit": "ns",
            "range": "± 5935.6369829201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708437.8795572916,
            "unit": "ns",
            "range": "± 4458.1753593966305"
          }
        ]
      }
    ]
  }
}