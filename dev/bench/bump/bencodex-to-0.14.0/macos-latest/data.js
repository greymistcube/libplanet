window.BENCHMARK_DATA = {
  "lastUpdate": 1691588415959,
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
      },
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
          "id": "5dd07bb61b320a7656160bf0ac95fd4b8281c09f",
          "message": "Changelog",
          "timestamp": "2023-08-09T22:24:23+09:00",
          "tree_id": "a47dc37aeca759d21eabdddeb9c8efb9b7507137",
          "url": "https://github.com/greymistcube/libplanet/commit/5dd07bb61b320a7656160bf0ac95fd4b8281c09f"
        },
        "date": 1691588395025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8419557.233333332,
            "unit": "ns",
            "range": "± 72905.0112391525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20932600.533333335,
            "unit": "ns",
            "range": "± 153669.80742621343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52183035,
            "unit": "ns",
            "range": "± 753351.7846790878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103224121.36666666,
            "unit": "ns",
            "range": "± 1238561.6518721492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213156892.14285713,
            "unit": "ns",
            "range": "± 2039199.4792265857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70658.5306122449,
            "unit": "ns",
            "range": "± 8242.025749645294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317843.07608695654,
            "unit": "ns",
            "range": "± 17941.227057668228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315202.90476190473,
            "unit": "ns",
            "range": "± 16869.744387204435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318404.6724137931,
            "unit": "ns",
            "range": "± 8545.715250801612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4159507.8,
            "unit": "ns",
            "range": "± 52759.801440382354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801701.1333333333,
            "unit": "ns",
            "range": "± 50440.6863650858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25025.918367346938,
            "unit": "ns",
            "range": "± 3241.548168599363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108711.37373737374,
            "unit": "ns",
            "range": "± 11364.61627119667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95037.84375,
            "unit": "ns",
            "range": "± 12711.375683410613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109224.93010752689,
            "unit": "ns",
            "range": "± 11922.065376214638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6550.445652173913,
            "unit": "ns",
            "range": "± 1400.3778168697502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19061.344444444443,
            "unit": "ns",
            "range": "± 2296.3853614625696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514920.48,
            "unit": "ns",
            "range": "± 154027.94742385438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817997.8032786883,
            "unit": "ns",
            "range": "± 120568.8982767142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032801.948979592,
            "unit": "ns",
            "range": "± 209498.90791627238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5431282.88,
            "unit": "ns",
            "range": "± 208922.68053203175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3411643.5531914895,
            "unit": "ns",
            "range": "± 131229.24955469085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3502060.132075472,
            "unit": "ns",
            "range": "± 132336.42131776785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4543171.230769231,
            "unit": "ns",
            "range": "± 49116.49841135164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3930488.5375,
            "unit": "ns",
            "range": "± 200731.90599602254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6703838.861702127,
            "unit": "ns",
            "range": "± 241396.12840627797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5199675.688616072,
            "unit": "ns",
            "range": "± 59539.51775613048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1655146.3631510416,
            "unit": "ns",
            "range": "± 29744.06460116802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004787.3643973215,
            "unit": "ns",
            "range": "± 9205.722910776101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615997.591796875,
            "unit": "ns",
            "range": "± 110053.73732987022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761573.8649088541,
            "unit": "ns",
            "range": "± 1949.3999701546143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708257.2537109375,
            "unit": "ns",
            "range": "± 2462.974215470924"
          }
        ]
      }
    ]
  }
}