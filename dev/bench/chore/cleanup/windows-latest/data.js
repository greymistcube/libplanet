window.BENCHMARK_DATA = {
  "lastUpdate": 1680421409429,
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
          "id": "265300407ee130b2853963ce8382c321e4570673",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:27:07+09:00",
          "tree_id": "e367f0043a44abc981b7f55b69d973d07fa9015f",
          "url": "https://github.com/greymistcube/libplanet/commit/265300407ee130b2853963ce8382c321e4570673"
        },
        "date": 1680421319285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341768,
            "unit": "ns",
            "range": "± 123808.03965344207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479109.090909091,
            "unit": "ns",
            "range": "± 59312.80203167343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2084587.3684210526,
            "unit": "ns",
            "range": "± 124743.87823815139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5027294.736842105,
            "unit": "ns",
            "range": "± 106473.3794256376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42738.46153846154,
            "unit": "ns",
            "range": "± 1756.796755925101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6857464.285714285,
            "unit": "ns",
            "range": "± 22183.868260269915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17582180,
            "unit": "ns",
            "range": "± 157402.33343705095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44686253.84615385,
            "unit": "ns",
            "range": "± 179289.23380664652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89959060,
            "unit": "ns",
            "range": "± 496272.3011181894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177820586.66666666,
            "unit": "ns",
            "range": "± 1251008.519365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893705.970982143,
            "unit": "ns",
            "range": "± 13720.400394388693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526727.9427083333,
            "unit": "ns",
            "range": "± 3422.425161999942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152353.06640625,
            "unit": "ns",
            "range": "± 1776.6955855514227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716902.9854910714,
            "unit": "ns",
            "range": "± 13001.117139009877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859885.2669270834,
            "unit": "ns",
            "range": "± 3940.7685297233165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729477.9947916666,
            "unit": "ns",
            "range": "± 912.0126827687849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2921942.3076923075,
            "unit": "ns",
            "range": "± 79660.41010728943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089477.777777778,
            "unit": "ns",
            "range": "± 103119.14637547359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3915609.523809524,
            "unit": "ns",
            "range": "± 92428.46912484219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3998815.3846153845,
            "unit": "ns",
            "range": "± 52628.601953593105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7054030.303030303,
            "unit": "ns",
            "range": "± 196459.29680987433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293342.42424242425,
            "unit": "ns",
            "range": "± 9160.616460664312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238292.85714285713,
            "unit": "ns",
            "range": "± 6829.588598391591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218479.01234567902,
            "unit": "ns",
            "range": "± 11415.359346614792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5179846.153846154,
            "unit": "ns",
            "range": "± 35497.33828952567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572593.3333333335,
            "unit": "ns",
            "range": "± 49059.591557711974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16716.842105263157,
            "unit": "ns",
            "range": "± 1748.4128140748262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79306.25,
            "unit": "ns",
            "range": "± 5382.4629952036685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73251.54639175258,
            "unit": "ns",
            "range": "± 6421.482717573584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153820,
            "unit": "ns",
            "range": "± 12948.6103747969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5325.510204081633,
            "unit": "ns",
            "range": "± 778.4879905568197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15926.041666666666,
            "unit": "ns",
            "range": "± 1682.7449249533158"
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
          "id": "66033e1ce636c296e1edaab4a22a1a154308564f",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:23:54+09:00",
          "tree_id": "41907a4c6eb70917b203d19d7c24f302f756b587",
          "url": "https://github.com/greymistcube/libplanet/commit/66033e1ce636c296e1edaab4a22a1a154308564f"
        },
        "date": 1680421386259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1725451.0204081633,
            "unit": "ns",
            "range": "± 181831.61647943777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3157937.5,
            "unit": "ns",
            "range": "± 201910.5551058634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2681731.25,
            "unit": "ns",
            "range": "± 258162.62370125498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6606758.333333333,
            "unit": "ns",
            "range": "± 431574.3479686455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53598.87640449438,
            "unit": "ns",
            "range": "± 4570.172425184218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8447033.870967742,
            "unit": "ns",
            "range": "± 383625.6042599169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23354337.837837838,
            "unit": "ns",
            "range": "± 771836.7016954327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59931970.212765954,
            "unit": "ns",
            "range": "± 2171131.781384288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120914915.6716418,
            "unit": "ns",
            "range": "± 5702665.795991679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242445930.76923078,
            "unit": "ns",
            "range": "± 2506773.2012106106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5600556.145833333,
            "unit": "ns",
            "range": "± 91889.6965874048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916669.6158854167,
            "unit": "ns",
            "range": "± 35115.240814762794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374405.341045673,
            "unit": "ns",
            "range": "± 16565.327991402602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032139.1666666665,
            "unit": "ns",
            "range": "± 32917.8143837508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926942.8000710227,
            "unit": "ns",
            "range": "± 34370.43602415052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900981.6761363636,
            "unit": "ns",
            "range": "± 22024.093635266363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3925307.1428571427,
            "unit": "ns",
            "range": "± 210401.85634443475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6218426.5625,
            "unit": "ns",
            "range": "± 286684.423172211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29051695,
            "unit": "ns",
            "range": "± 589750.789004626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7520938.636363637,
            "unit": "ns",
            "range": "± 281392.1597029371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34647303.571428575,
            "unit": "ns",
            "range": "± 985456.8406589846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220886.36363636365,
            "unit": "ns",
            "range": "± 12146.984695782818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219074.1935483871,
            "unit": "ns",
            "range": "± 13534.68092190518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190219.35483870967,
            "unit": "ns",
            "range": "± 15257.316548951025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13130102.94117647,
            "unit": "ns",
            "range": "± 412419.7394721048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10216718.987341773,
            "unit": "ns",
            "range": "± 528096.5109629765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25301.010101010103,
            "unit": "ns",
            "range": "± 5644.18600898115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62089.69072164949,
            "unit": "ns",
            "range": "± 7810.776270321484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46894.73684210526,
            "unit": "ns",
            "range": "± 6789.46882297108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116810.63829787234,
            "unit": "ns",
            "range": "± 14586.880746437037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12955,
            "unit": "ns",
            "range": "± 5759.408201220229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26624.242424242424,
            "unit": "ns",
            "range": "± 6162.147301809835"
          }
        ]
      }
    ]
  }
}