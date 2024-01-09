window.BENCHMARK_DATA = {
  "lastUpdate": 1704790448814,
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
          "id": "e6e7c5082725742dd69ee165974a08c04d8b771c",
          "message": "[skip changelog] Slight change in implementation",
          "timestamp": "2023-07-04T10:30:46+09:00",
          "tree_id": "8cb62205772d1d88fcd5acb80b23a66cd0d0fc45",
          "url": "https://github.com/greymistcube/libplanet/commit/e6e7c5082725742dd69ee165974a08c04d8b771c"
        },
        "date": 1688435423969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655766.6666666667,
            "unit": "ns",
            "range": "± 73371.22390402891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3273573.2558139535,
            "unit": "ns",
            "range": "± 176972.50396230124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2172790.625,
            "unit": "ns",
            "range": "± 159788.91245253268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5885079.310344827,
            "unit": "ns",
            "range": "± 257581.26141296653"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57789.24731182796,
            "unit": "ns",
            "range": "± 4366.7334912751685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9446605,
            "unit": "ns",
            "range": "± 213798.6939918754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25057571.42857143,
            "unit": "ns",
            "range": "± 298204.43021156173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62397871.428571425,
            "unit": "ns",
            "range": "± 553295.06306598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126946907.14285715,
            "unit": "ns",
            "range": "± 1993208.398330647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251745790,
            "unit": "ns",
            "range": "± 3463434.3873427967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6087955.46875,
            "unit": "ns",
            "range": "± 73735.52237424771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946613.3333333333,
            "unit": "ns",
            "range": "± 23473.36480646168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466963.84765625,
            "unit": "ns",
            "range": "± 17971.143889389252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3271498.9397321427,
            "unit": "ns",
            "range": "± 21076.96617899868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025393.1640625,
            "unit": "ns",
            "range": "± 10059.373732463357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962454.9429086539,
            "unit": "ns",
            "range": "± 6784.901553809804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4028550,
            "unit": "ns",
            "range": "± 38827.39192421201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4219304,
            "unit": "ns",
            "range": "± 112335.45922815289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5156818.75,
            "unit": "ns",
            "range": "± 101032.2999094844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4761535.714285715,
            "unit": "ns",
            "range": "± 136380.47599566527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7355073.333333333,
            "unit": "ns",
            "range": "± 125249.44520359971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320372.22222222225,
            "unit": "ns",
            "range": "± 15369.562221465489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312235.71428571426,
            "unit": "ns",
            "range": "± 11340.362222213647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292975.6756756757,
            "unit": "ns",
            "range": "± 9723.151221166401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5001628.571428572,
            "unit": "ns",
            "range": "± 67055.49284644115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4499252,
            "unit": "ns",
            "range": "± 110909.11489443357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26030.208333333332,
            "unit": "ns",
            "range": "± 2452.372419200669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107742.85714285714,
            "unit": "ns",
            "range": "± 6010.622871349299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102269.89247311828,
            "unit": "ns",
            "range": "± 6411.229702066534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115960.86956521739,
            "unit": "ns",
            "range": "± 14173.330136126619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7179.787234042553,
            "unit": "ns",
            "range": "± 995.4282362876386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23605.102040816328,
            "unit": "ns",
            "range": "± 2019.5116511344909"
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
          "id": "4bc48510732c105db5cf0278a9ecc46cc21984c6",
          "message": "Changelog",
          "timestamp": "2023-07-04T10:58:40+09:00",
          "tree_id": "830e9d5dd54a1b2a5b45579d623027edf1af7156",
          "url": "https://github.com/greymistcube/libplanet/commit/4bc48510732c105db5cf0278a9ecc46cc21984c6"
        },
        "date": 1688436998317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507943,
            "unit": "ns",
            "range": "± 184516.22701354243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637003.125,
            "unit": "ns",
            "range": "± 81235.33906188858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1923265.6565656567,
            "unit": "ns",
            "range": "± 153905.0927812439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4905278.787878788,
            "unit": "ns",
            "range": "± 153523.42605766992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59188.88888888889,
            "unit": "ns",
            "range": "± 9008.64538151976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8410135.714285715,
            "unit": "ns",
            "range": "± 96077.3615145857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21576113.333333332,
            "unit": "ns",
            "range": "± 188795.04710008632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53929900,
            "unit": "ns",
            "range": "± 385264.27493145736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108320464.28571428,
            "unit": "ns",
            "range": "± 268069.4244382998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219673050,
            "unit": "ns",
            "range": "± 2024943.1113566547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4973238.541666667,
            "unit": "ns",
            "range": "± 35794.218370900555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590233.61328125,
            "unit": "ns",
            "range": "± 4865.940047352091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223174.4838169643,
            "unit": "ns",
            "range": "± 4454.896426499657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707691.3020833335,
            "unit": "ns",
            "range": "± 10246.297442144783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857481.5185546875,
            "unit": "ns",
            "range": "± 1057.8392455714225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780774.9774639423,
            "unit": "ns",
            "range": "± 2027.1270389767533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3475462.5,
            "unit": "ns",
            "range": "± 122293.56166356009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3632814.285714286,
            "unit": "ns",
            "range": "± 130945.9254833722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4534235.714285715,
            "unit": "ns",
            "range": "± 58792.681479963096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4134433.3333333335,
            "unit": "ns",
            "range": "± 132767.72628488124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6675216.129032258,
            "unit": "ns",
            "range": "± 200561.93573187344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299675,
            "unit": "ns",
            "range": "± 7787.517883293026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279767.9487179487,
            "unit": "ns",
            "range": "± 14324.13723146729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270203,
            "unit": "ns",
            "range": "± 19477.18922226716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4331773.333333333,
            "unit": "ns",
            "range": "± 73458.50594204932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870070.588235294,
            "unit": "ns",
            "range": "± 78785.10935375004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23542.105263157893,
            "unit": "ns",
            "range": "± 2602.6818798165086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100743.93939393939,
            "unit": "ns",
            "range": "± 9634.820123521558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82344.32989690722,
            "unit": "ns",
            "range": "± 8819.450203387645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100071.0843373494,
            "unit": "ns",
            "range": "± 7715.434801469539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6496.938775510204,
            "unit": "ns",
            "range": "± 1671.5604217723028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21148.453608247422,
            "unit": "ns",
            "range": "± 3093.612821943984"
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
          "id": "ce9eb2e32ac5fe93b047206b01fcb67e21966478",
          "message": "[skip changelog] Fix csproj files",
          "timestamp": "2023-07-29T22:41:32+09:00",
          "tree_id": "7d188ed459b116bede4c4c596028dcfa94e02a5a",
          "url": "https://github.com/greymistcube/libplanet/commit/ce9eb2e32ac5fe93b047206b01fcb67e21966478"
        },
        "date": 1690639120061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410943.8775510204,
            "unit": "ns",
            "range": "± 108812.27764481769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643748,
            "unit": "ns",
            "range": "± 133525.53390795863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1818821.6494845361,
            "unit": "ns",
            "range": "± 140883.30367926566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4859094.444444444,
            "unit": "ns",
            "range": "± 202533.54105325943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48801.086956521736,
            "unit": "ns",
            "range": "± 2810.243998839747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7230266.666666667,
            "unit": "ns",
            "range": "± 102846.29770867278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19480226.666666668,
            "unit": "ns",
            "range": "± 256169.7608636749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50996732.35294118,
            "unit": "ns",
            "range": "± 1597808.9654691797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103273860,
            "unit": "ns",
            "range": "± 1251392.0441994644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206427513.33333334,
            "unit": "ns",
            "range": "± 3009595.1341065955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4962374.088541667,
            "unit": "ns",
            "range": "± 14265.950816606053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568478.3463541667,
            "unit": "ns",
            "range": "± 4676.885410226198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1201495.5403645833,
            "unit": "ns",
            "range": "± 7427.398563173766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654741.8229166665,
            "unit": "ns",
            "range": "± 8588.545756361334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873893.3942522322,
            "unit": "ns",
            "range": "± 1887.5365358595886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770419.7395833334,
            "unit": "ns",
            "range": "± 2101.3822780700407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3305765.3846153845,
            "unit": "ns",
            "range": "± 87747.38260396235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3385453.846153846,
            "unit": "ns",
            "range": "± 173295.88142100355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4151444.827586207,
            "unit": "ns",
            "range": "± 175917.87574849944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3635638.144329897,
            "unit": "ns",
            "range": "± 210184.8048163503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6105478.181818182,
            "unit": "ns",
            "range": "± 256724.7789126404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270350.76923076925,
            "unit": "ns",
            "range": "± 12617.449760610833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262700,
            "unit": "ns",
            "range": "± 5611.59513863928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245204,
            "unit": "ns",
            "range": "± 14777.083814494863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4046976.1904761903,
            "unit": "ns",
            "range": "± 95653.75530925018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3856540,
            "unit": "ns",
            "range": "± 60305.94379613719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23452.63157894737,
            "unit": "ns",
            "range": "± 1762.0612992732165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102700,
            "unit": "ns",
            "range": "± 8322.32255032085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95402,
            "unit": "ns",
            "range": "± 7668.681948567357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100363.44086021505,
            "unit": "ns",
            "range": "± 12751.605056229253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6278.787878787879,
            "unit": "ns",
            "range": "± 937.7864435622472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21196.703296703297,
            "unit": "ns",
            "range": "± 1734.7718741763872"
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
          "id": "9267a7d1f941800fbd42039e130ef72a2c5b432a",
          "message": "Remove empty",
          "timestamp": "2023-07-29T22:42:45+09:00",
          "tree_id": "42175cb0c41a22bf8900d732a09ed0bdbfd02e40",
          "url": "https://github.com/greymistcube/libplanet/commit/9267a7d1f941800fbd42039e130ef72a2c5b432a"
        },
        "date": 1690639369235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648198.9795918367,
            "unit": "ns",
            "range": "± 231153.07709501605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023386.597938144,
            "unit": "ns",
            "range": "± 402605.0596916873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042265.306122449,
            "unit": "ns",
            "range": "± 268769.46051893116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5755700,
            "unit": "ns",
            "range": "± 680978.3394132298"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57424.21052631579,
            "unit": "ns",
            "range": "± 13536.66978585861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8679038.29787234,
            "unit": "ns",
            "range": "± 854767.3745171882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19883859.18367347,
            "unit": "ns",
            "range": "± 2007617.0750335671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56551838.383838385,
            "unit": "ns",
            "range": "± 6072133.094799604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111610192.70833333,
            "unit": "ns",
            "range": "± 10198549.345927328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223708230.3030303,
            "unit": "ns",
            "range": "± 15366865.381858928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5214595.498511905,
            "unit": "ns",
            "range": "± 177541.45095598922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1687373.8699776786,
            "unit": "ns",
            "range": "± 25347.99617896949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273450.3434806035,
            "unit": "ns",
            "range": "± 37215.47007610676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2858691.824776786,
            "unit": "ns",
            "range": "± 104068.83333553313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946079.6195652174,
            "unit": "ns",
            "range": "± 23288.005672876006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853506.9756869612,
            "unit": "ns",
            "range": "± 24802.701024114325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216653.1578947366,
            "unit": "ns",
            "range": "± 409824.8093412888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631348,
            "unit": "ns",
            "range": "± 561128.4398028277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4432205.208333333,
            "unit": "ns",
            "range": "± 622118.4995210092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4294172.7272727275,
            "unit": "ns",
            "range": "± 614570.3454892135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7180700,
            "unit": "ns",
            "range": "± 821095.7192729319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296516.32653061225,
            "unit": "ns",
            "range": "± 58251.36376241279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281189.6907216495,
            "unit": "ns",
            "range": "± 45654.03296473399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241248.97959183675,
            "unit": "ns",
            "range": "± 43166.518251036934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4382217.708333333,
            "unit": "ns",
            "range": "± 596310.0332783083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3721869,
            "unit": "ns",
            "range": "± 465948.65471130266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25168.367346938776,
            "unit": "ns",
            "range": "± 10838.891381461897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86383.69565217392,
            "unit": "ns",
            "range": "± 16074.362067043236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93597.84946236559,
            "unit": "ns",
            "range": "± 22537.176911738636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115958.16326530612,
            "unit": "ns",
            "range": "± 30171.027693062493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5347.311827956989,
            "unit": "ns",
            "range": "± 1149.9141175728566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24410.10101010101,
            "unit": "ns",
            "range": "± 9325.81992838333"
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
          "id": "fa07287410dbb6b8b953b1304427d6a0d9cb78ef",
          "message": "Remove unnecessary usings",
          "timestamp": "2023-12-19T13:19:12+09:00",
          "tree_id": "bb2c9dd57d1c2a2a2c53a9292d2c5de7e205b053",
          "url": "https://github.com/greymistcube/libplanet/commit/fa07287410dbb6b8b953b1304427d6a0d9cb78ef"
        },
        "date": 1702960313466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011829.1666666666,
            "unit": "ns",
            "range": "± 107364.55351221461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1736737.2881355933,
            "unit": "ns",
            "range": "± 71223.84552823119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1421375.5102040817,
            "unit": "ns",
            "range": "± 126415.75823507676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5229250,
            "unit": "ns",
            "range": "± 138156.61704505264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34918.181818181816,
            "unit": "ns",
            "range": "± 1656.2152490087005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5149957.142857143,
            "unit": "ns",
            "range": "± 36728.14293585347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13369742.857142856,
            "unit": "ns",
            "range": "± 174298.81818870152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33353406.666666668,
            "unit": "ns",
            "range": "± 451582.7269040472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65793700,
            "unit": "ns",
            "range": "± 954218.398181764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135590440,
            "unit": "ns",
            "range": "± 519034.7205562044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3324863.8541666665,
            "unit": "ns",
            "range": "± 10451.582064254433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070419.6614583333,
            "unit": "ns",
            "range": "± 2671.8570306864726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735626.2137276785,
            "unit": "ns",
            "range": "± 1738.0935333741654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933049.8958333333,
            "unit": "ns",
            "range": "± 2567.977696749585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623140.6319754465,
            "unit": "ns",
            "range": "± 612.7178343317535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 606843.7109375,
            "unit": "ns",
            "range": "± 1042.8325675935357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179193.75,
            "unit": "ns",
            "range": "± 65825.5413586648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306235.714285714,
            "unit": "ns",
            "range": "± 74793.92117411215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2832632,
            "unit": "ns",
            "range": "± 74988.02526626056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2834509.523809524,
            "unit": "ns",
            "range": "± 102419.80755818436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6410116.153846154,
            "unit": "ns",
            "range": "± 297650.29411465133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182533.33333333334,
            "unit": "ns",
            "range": "± 8363.264526988674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171741.33333333334,
            "unit": "ns",
            "range": "± 8592.471458536582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149278.57142857142,
            "unit": "ns",
            "range": "± 6406.068551437324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2832780,
            "unit": "ns",
            "range": "± 51889.01893189238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2667442.8571428573,
            "unit": "ns",
            "range": "± 32738.819918719273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12735.227272727272,
            "unit": "ns",
            "range": "± 1352.2259020896365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57485.48387096774,
            "unit": "ns",
            "range": "± 4719.723765896417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47372.82608695652,
            "unit": "ns",
            "range": "± 3812.677039978619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63935.16483516483,
            "unit": "ns",
            "range": "± 12385.021182652441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2826.8041237113403,
            "unit": "ns",
            "range": "± 517.3078274259448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11807.608695652174,
            "unit": "ns",
            "range": "± 1193.4098985083124"
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
          "id": "eaca1eb4c28e803507555810e929bbe04d448a6b",
          "message": "Remove unnecessary usings",
          "timestamp": "2023-12-19T13:44:36+09:00",
          "tree_id": "bb928fd783d48f64083e075008c91e6889ce7a17",
          "url": "https://github.com/greymistcube/libplanet/commit/eaca1eb4c28e803507555810e929bbe04d448a6b"
        },
        "date": 1702961707543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 916861.8556701031,
            "unit": "ns",
            "range": "± 88261.37018738125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723037.0786516855,
            "unit": "ns",
            "range": "± 107794.71164927601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377563.829787234,
            "unit": "ns",
            "range": "± 106081.0867083196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5297800,
            "unit": "ns",
            "range": "± 174035.3446184728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34728.57142857143,
            "unit": "ns",
            "range": "± 1559.6141552845872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5050666.666666667,
            "unit": "ns",
            "range": "± 78245.84577440761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13534914.285714285,
            "unit": "ns",
            "range": "± 194916.73511110744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33025557.14285714,
            "unit": "ns",
            "range": "± 179859.34125689062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65704446.15384615,
            "unit": "ns",
            "range": "± 571376.1875439925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129449007.6923077,
            "unit": "ns",
            "range": "± 1462290.1362027638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3270377.5841346155,
            "unit": "ns",
            "range": "± 10971.841656939456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048954.0234375,
            "unit": "ns",
            "range": "± 4564.118253559791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739912.2916666666,
            "unit": "ns",
            "range": "± 3360.022439278932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932728.4830729167,
            "unit": "ns",
            "range": "± 2702.6366102697857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618504.5270647322,
            "unit": "ns",
            "range": "± 1600.2072464194607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571308.8932291666,
            "unit": "ns",
            "range": "± 2686.0453279980757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146361.5384615385,
            "unit": "ns",
            "range": "± 74358.31675915653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2276950,
            "unit": "ns",
            "range": "± 66418.66789122201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2845710,
            "unit": "ns",
            "range": "± 84201.97945908151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2729225.396825397,
            "unit": "ns",
            "range": "± 124638.92879194889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6474501.5625,
            "unit": "ns",
            "range": "± 295405.0517521568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174850,
            "unit": "ns",
            "range": "± 7387.441080258151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168801.19047619047,
            "unit": "ns",
            "range": "± 8783.040805700894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143184.84848484848,
            "unit": "ns",
            "range": "± 3956.5705803859682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717540,
            "unit": "ns",
            "range": "± 36805.64397713248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555706.6666666665,
            "unit": "ns",
            "range": "± 45738.34694162417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11791.304347826086,
            "unit": "ns",
            "range": "± 1076.385095301622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56421.27659574468,
            "unit": "ns",
            "range": "± 5755.555938328746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49634.06593406593,
            "unit": "ns",
            "range": "± 4879.554164065488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66540.40404040404,
            "unit": "ns",
            "range": "± 15327.938471766814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2929.1666666666665,
            "unit": "ns",
            "range": "± 648.222941939068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10909.302325581395,
            "unit": "ns",
            "range": "± 1079.9376787004335"
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
          "id": "cd92599875b35bbd5835439d42a5f1310a45d8d5",
          "message": "Clutter removal",
          "timestamp": "2024-01-09T17:41:25+09:00",
          "tree_id": "93d24353430557875619ea767a5127d918c1a586",
          "url": "https://github.com/greymistcube/libplanet/commit/cd92599875b35bbd5835439d42a5f1310a45d8d5"
        },
        "date": 1704790428474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001177.8947368421,
            "unit": "ns",
            "range": "± 108978.2851480908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776238.7096774194,
            "unit": "ns",
            "range": "± 80129.15875980275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574764.9484536082,
            "unit": "ns",
            "range": "± 162917.3135374437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10877476.086956521,
            "unit": "ns",
            "range": "± 828206.3328371457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34926.666666666664,
            "unit": "ns",
            "range": "± 2374.48042808754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4938933.333333333,
            "unit": "ns",
            "range": "± 60210.78055662536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13561653.333333334,
            "unit": "ns",
            "range": "± 196608.4973700151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33777740,
            "unit": "ns",
            "range": "± 483754.30127286725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67565592.85714285,
            "unit": "ns",
            "range": "± 695774.2057087704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132898800,
            "unit": "ns",
            "range": "± 1274078.0220040868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332001.7708333335,
            "unit": "ns",
            "range": "± 3416.12825404289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046772.96875,
            "unit": "ns",
            "range": "± 1979.5908045726922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747980.0911458334,
            "unit": "ns",
            "range": "± 1306.9312669659728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905462.8305288462,
            "unit": "ns",
            "range": "± 2199.263689895672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611783.4895833334,
            "unit": "ns",
            "range": "± 1233.2664809893517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570074.4661458334,
            "unit": "ns",
            "range": "± 888.907552413434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171314.285714286,
            "unit": "ns",
            "range": "± 69272.03044288995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264161.0169491526,
            "unit": "ns",
            "range": "± 97229.91241337977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2815025,
            "unit": "ns",
            "range": "± 103686.69965837717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2865547.5409836066,
            "unit": "ns",
            "range": "± 122527.50386009578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12197895.555555556,
            "unit": "ns",
            "range": "± 1410666.912238107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177207.31707317074,
            "unit": "ns",
            "range": "± 8955.442244772616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172653.84615384616,
            "unit": "ns",
            "range": "± 8074.711235608463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150084.74576271186,
            "unit": "ns",
            "range": "± 6579.928035434001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2901850,
            "unit": "ns",
            "range": "± 25776.4874971806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2583540,
            "unit": "ns",
            "range": "± 31763.49656895025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13067.741935483871,
            "unit": "ns",
            "range": "± 1810.666541355191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61273.73737373737,
            "unit": "ns",
            "range": "± 8151.581615139656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47398.97959183674,
            "unit": "ns",
            "range": "± 3687.9713893482653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62731.52173913043,
            "unit": "ns",
            "range": "± 10948.560338375026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2846.875,
            "unit": "ns",
            "range": "± 575.4546257662628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11815.555555555555,
            "unit": "ns",
            "range": "± 1450.9130105883785"
          }
        ]
      }
    ]
  }
}