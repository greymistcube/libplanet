window.BENCHMARK_DATA = {
  "lastUpdate": 1701938065861,
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
          "id": "9af94f81a831efe724530498c77692279d504295",
          "message": "Updated to test more elaborate cases",
          "timestamp": "2023-12-07T16:13:39+09:00",
          "tree_id": "0fbdbcb4ef02850f4a42e7bd27f95c5da30d81d1",
          "url": "https://github.com/greymistcube/libplanet/commit/9af94f81a831efe724530498c77692279d504295"
        },
        "date": 1701933893815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198209.63218390805,
            "unit": "ns",
            "range": "± 11193.029596027913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185371.05,
            "unit": "ns",
            "range": "± 8049.782255029624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162358.52631578947,
            "unit": "ns",
            "range": "± 3556.995101493223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083022,
            "unit": "ns",
            "range": "± 53223.50822565301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828277.8,
            "unit": "ns",
            "range": "± 37135.47157791706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12951.602040816326,
            "unit": "ns",
            "range": "± 1947.39336084199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62449.23737373737,
            "unit": "ns",
            "range": "± 7202.617562154065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55958.64432989691,
            "unit": "ns",
            "range": "± 5478.216779492991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54719.78947368421,
            "unit": "ns",
            "range": "± 8829.022070488023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2834.2244897959185,
            "unit": "ns",
            "range": "± 488.0442461480215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13109.5,
            "unit": "ns",
            "range": "± 1945.2434679197706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3593167.0166015625,
            "unit": "ns",
            "range": "± 12130.24828193362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1141669.2681790865,
            "unit": "ns",
            "range": "± 3630.5756999255264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737463.8262094351,
            "unit": "ns",
            "range": "± 3272.793062884031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940303.8143136161,
            "unit": "ns",
            "range": "± 12259.92865123223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606197.6330915178,
            "unit": "ns",
            "range": "± 873.2209453725804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579268.8987165178,
            "unit": "ns",
            "range": "± 9754.86182711728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39714.51546391752,
            "unit": "ns",
            "range": "± 5506.6305659507025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2457252.8571428573,
            "unit": "ns",
            "range": "± 80029.06618706175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2520785.4375,
            "unit": "ns",
            "range": "± 48397.65734202259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156056.375,
            "unit": "ns",
            "range": "± 61935.7127327737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2904332.025974026,
            "unit": "ns",
            "range": "± 147535.48950586823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6644318.513513514,
            "unit": "ns",
            "range": "± 223512.6300117216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5782373.307692308,
            "unit": "ns",
            "range": "± 46788.308793231336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14796797.4,
            "unit": "ns",
            "range": "± 90194.57873540484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37469651.2,
            "unit": "ns",
            "range": "± 220310.15379369148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79735074.78571428,
            "unit": "ns",
            "range": "± 225235.9470094821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151384727.69230768,
            "unit": "ns",
            "range": "± 1160686.0987612302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969908.3333333334,
            "unit": "ns",
            "range": "± 86766.43750051406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1842022.8125,
            "unit": "ns",
            "range": "± 61385.32356255027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1405446,
            "unit": "ns",
            "range": "± 119640.17880687433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5505283.393442623,
            "unit": "ns",
            "range": "± 244925.75315350018"
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
          "id": "d471c63d12510026101fa9360e81bed713ebb110",
          "message": "Fix TxResult query behavior to rely less on IBlockChainIndex and use fallback",
          "timestamp": "2023-12-07T17:23:39+09:00",
          "tree_id": "7e8ecced66d0c1c611d2db9c3e6ddc10ab9e79cd",
          "url": "https://github.com/greymistcube/libplanet/commit/d471c63d12510026101fa9360e81bed713ebb110"
        },
        "date": 1701938059684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199022.01886792452,
            "unit": "ns",
            "range": "± 8140.226238328736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191155.01111111112,
            "unit": "ns",
            "range": "± 12076.849408230966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167431.35714285713,
            "unit": "ns",
            "range": "± 2199.790964095063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3130905.3076923075,
            "unit": "ns",
            "range": "± 20264.089544415823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2890161.6666666665,
            "unit": "ns",
            "range": "± 40247.39995802154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13063.98947368421,
            "unit": "ns",
            "range": "± 1910.6018295165136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67059.16129032258,
            "unit": "ns",
            "range": "± 6017.25849263441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52097.91176470588,
            "unit": "ns",
            "range": "± 2130.661682918906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62830.29347826087,
            "unit": "ns",
            "range": "± 15889.214407054982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2807.3894736842103,
            "unit": "ns",
            "range": "± 448.2925833800398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13227.918367346938,
            "unit": "ns",
            "range": "± 2401.1477954377256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3674172.8116629464,
            "unit": "ns",
            "range": "± 13968.403034278084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1132743.9299879808,
            "unit": "ns",
            "range": "± 3038.4991653264897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745253.5828575721,
            "unit": "ns",
            "range": "± 2123.3426816210713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943707.4782151442,
            "unit": "ns",
            "range": "± 5911.732817768397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621702.7544320914,
            "unit": "ns",
            "range": "± 4346.5540166320525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582269.5242047991,
            "unit": "ns",
            "range": "± 6563.3719490258445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41367.857142857145,
            "unit": "ns",
            "range": "± 5553.772070060633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2372204,
            "unit": "ns",
            "range": "± 43070.81001593274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523391.1515151514,
            "unit": "ns",
            "range": "± 79319.96024926561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3165402.1875,
            "unit": "ns",
            "range": "± 59198.61365574788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3035210.933333333,
            "unit": "ns",
            "range": "± 134980.16839180572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6561820.919354838,
            "unit": "ns",
            "range": "± 190657.85568355586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5742537,
            "unit": "ns",
            "range": "± 19944.74010443188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14804064.4,
            "unit": "ns",
            "range": "± 80277.94346590032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37441927.571428575,
            "unit": "ns",
            "range": "± 194424.19490598555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76970903.21428572,
            "unit": "ns",
            "range": "± 358805.23691791313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155202517.5625,
            "unit": "ns",
            "range": "± 2985988.6703079087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964502.5,
            "unit": "ns",
            "range": "± 79537.64593158833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819453.35,
            "unit": "ns",
            "range": "± 61498.06833929096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1399073.5543478262,
            "unit": "ns",
            "range": "± 133211.76506916786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5527283.135593221,
            "unit": "ns",
            "range": "± 244505.02189881483"
          }
        ]
      }
    ]
  }
}