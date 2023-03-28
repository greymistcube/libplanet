window.BENCHMARK_DATA = {
  "lastUpdate": 1679962673403,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679897298110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121804.34782608696,
            "unit": "ns",
            "range": "± 11824.057363571448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6131030.818965517,
            "unit": "ns",
            "range": "± 177473.0604288378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869717.5,
            "unit": "ns",
            "range": "± 34369.74685034725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359520.396205357,
            "unit": "ns",
            "range": "± 16191.893595961881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3025372.9817708335,
            "unit": "ns",
            "range": "± 63287.71988360643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023995.1083096591,
            "unit": "ns",
            "range": "± 24473.67366998911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942711.5783691406,
            "unit": "ns",
            "range": "± 27530.19018438693"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5694384.303042763,
            "unit": "ns",
            "range": "± 288669.8140822683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6481509.411764706,
            "unit": "ns",
            "range": "± 349601.9446059603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29265826.153846152,
            "unit": "ns",
            "range": "± 1360583.1311055706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7312391.919191919,
            "unit": "ns",
            "range": "± 605239.9331411702"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35055210.824742265,
            "unit": "ns",
            "range": "± 2637143.285733822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103685.41666666667,
            "unit": "ns",
            "range": "± 12931.01517703741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225213.40206185568,
            "unit": "ns",
            "range": "± 23014.84859854059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187791.39784946237,
            "unit": "ns",
            "range": "± 13445.571890386835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4354474.666666667,
            "unit": "ns",
            "range": "± 210389.19732141562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10950553.125,
            "unit": "ns",
            "range": "± 503704.69553850667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24516.494845360823,
            "unit": "ns",
            "range": "± 6488.012671014444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58887.62886597938,
            "unit": "ns",
            "range": "± 9614.770080150543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53460.82474226804,
            "unit": "ns",
            "range": "± 9260.158348864674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124618.08510638298,
            "unit": "ns",
            "range": "± 23911.831609423192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11929.29292929293,
            "unit": "ns",
            "range": "± 5919.291403490734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23672.727272727272,
            "unit": "ns",
            "range": "± 6877.630378912674"
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
          "id": "2f8a60c05e7b3fc510f23b380297522d9535e538",
          "message": "Fix concurrency problem",
          "timestamp": "2023-03-28T08:58:51+09:00",
          "tree_id": "8572d562fabed0e96ae33533976c9ed38c8f00f6",
          "url": "https://github.com/greymistcube/libplanet/commit/2f8a60c05e7b3fc510f23b380297522d9535e538"
        },
        "date": 1679962643976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106821.64948453609,
            "unit": "ns",
            "range": "± 8739.949308635934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4798754.270833333,
            "unit": "ns",
            "range": "± 26904.13090371523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579805.5729166667,
            "unit": "ns",
            "range": "± 6863.457313594171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176034.4205729167,
            "unit": "ns",
            "range": "± 3888.934787166255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671790.4447115385,
            "unit": "ns",
            "range": "± 8543.36869011401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819851.8973214285,
            "unit": "ns",
            "range": "± 1170.7643247473677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754021.9856770834,
            "unit": "ns",
            "range": "± 1764.4193750933491"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4777045.260416667,
            "unit": "ns",
            "range": "± 72021.88121286959"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5546107.692307692,
            "unit": "ns",
            "range": "± 66497.67491597559"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25480026.666666668,
            "unit": "ns",
            "range": "± 456662.0467614765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5913845.348837209,
            "unit": "ns",
            "range": "± 319528.5069329778"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28478059.09090909,
            "unit": "ns",
            "range": "± 683602.5855081445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103092.55319148937,
            "unit": "ns",
            "range": "± 10902.621164189299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197200,
            "unit": "ns",
            "range": "± 12100.335435311652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187885,
            "unit": "ns",
            "range": "± 13822.864786616807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3687706.6666666665,
            "unit": "ns",
            "range": "± 49444.95448283397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9188366.666666666,
            "unit": "ns",
            "range": "± 52395.841842881404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25325.252525252527,
            "unit": "ns",
            "range": "± 2852.329639848067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52849.43820224719,
            "unit": "ns",
            "range": "± 3589.7620709806483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37978.846153846156,
            "unit": "ns",
            "range": "± 1445.5254202445394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110594.84536082474,
            "unit": "ns",
            "range": "± 17511.290233815464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6448.453608247422,
            "unit": "ns",
            "range": "± 983.6277880527537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26047.95918367347,
            "unit": "ns",
            "range": "± 3106.6350540643793"
          }
        ]
      }
    ]
  }
}