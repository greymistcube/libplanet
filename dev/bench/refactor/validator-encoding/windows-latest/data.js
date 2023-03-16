window.BENCHMARK_DATA = {
  "lastUpdate": 1678931446702,
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
          "id": "8d0d10e26dfb58f88d15b33cf03b64cc2806949b",
          "message": "Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:33:53+09:00",
          "tree_id": "e680238104654ec491383068a58090a40d44d206",
          "url": "https://github.com/greymistcube/libplanet/commit/8d0d10e26dfb58f88d15b33cf03b64cc2806949b"
        },
        "date": 1678931424096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106422.44897959183,
            "unit": "ns",
            "range": "± 7688.665249710923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831440.416666667,
            "unit": "ns",
            "range": "± 18941.00776634161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536848.0208333333,
            "unit": "ns",
            "range": "± 2997.8814172681164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178072.2330729167,
            "unit": "ns",
            "range": "± 3653.4419981090773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637656.3616071427,
            "unit": "ns",
            "range": "± 8170.120662453041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816457.6171875,
            "unit": "ns",
            "range": "± 954.0963648143991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757604.90234375,
            "unit": "ns",
            "range": "± 1403.2966730614676"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4730019.192708333,
            "unit": "ns",
            "range": "± 36645.95262846785"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5607968.9655172415,
            "unit": "ns",
            "range": "± 163059.38248610156"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26010253.846153848,
            "unit": "ns",
            "range": "± 399982.6571560835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6083764.705882353,
            "unit": "ns",
            "range": "± 193807.9741336503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28764288.23529412,
            "unit": "ns",
            "range": "± 564425.8054456238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95952.63157894737,
            "unit": "ns",
            "range": "± 8898.563619510822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197357.60869565216,
            "unit": "ns",
            "range": "± 13064.794011788817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179711.11111111112,
            "unit": "ns",
            "range": "± 14072.377697424017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099173.3333333335,
            "unit": "ns",
            "range": "± 36754.71722235444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8913090,
            "unit": "ns",
            "range": "± 265403.2330312656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24013.186813186814,
            "unit": "ns",
            "range": "± 2351.2270456654373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54377.89473684211,
            "unit": "ns",
            "range": "± 8505.14461266937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46481.914893617024,
            "unit": "ns",
            "range": "± 4803.828284423519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120261.61616161616,
            "unit": "ns",
            "range": "± 26588.75666583224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6516.326530612245,
            "unit": "ns",
            "range": "± 1261.0496264302203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21561.458333333332,
            "unit": "ns",
            "range": "± 3520.9858007058087"
          }
        ]
      }
    ]
  }
}