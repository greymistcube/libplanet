window.BENCHMARK_DATA = {
  "lastUpdate": 1703671035739,
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
          "id": "d3e0e0ca525f99765ad66eb996b51eb9e722f852",
          "message": "Changed FullNode to no longer inherit BaseNode; removed BaseNode",
          "timestamp": "2023-12-27T16:15:54+09:00",
          "tree_id": "fae6f4b6e37b09d5113d55d10f8cc6582dd51f3d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3e0e0ca525f99765ad66eb996b51eb9e722f852"
        },
        "date": 1703662003895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3706140.783954327,
            "unit": "ns",
            "range": "± 11719.989829837825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1173122.8419471155,
            "unit": "ns",
            "range": "± 2751.5927529864953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771967.6073404948,
            "unit": "ns",
            "range": "± 3231.071071394224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958619.6669921875,
            "unit": "ns",
            "range": "± 2220.4709567749724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627596.4562800481,
            "unit": "ns",
            "range": "± 2127.341337113229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599528.2227783203,
            "unit": "ns",
            "range": "± 11567.889354948094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417027.84,
            "unit": "ns",
            "range": "± 63437.36001605573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548102.577777778,
            "unit": "ns",
            "range": "± 92036.30383576633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3141783,
            "unit": "ns",
            "range": "± 69452.72217527225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2949452.111111111,
            "unit": "ns",
            "range": "± 133250.99229202775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6790532.95,
            "unit": "ns",
            "range": "± 154456.55035315713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42223.61855670103,
            "unit": "ns",
            "range": "± 5465.841650353162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193537.95,
            "unit": "ns",
            "range": "± 6283.116615796042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192664.5945945946,
            "unit": "ns",
            "range": "± 6403.311267788892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164864.8,
            "unit": "ns",
            "range": "± 3758.4767995334996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048307.5714285714,
            "unit": "ns",
            "range": "± 46001.64356505986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2836543,
            "unit": "ns",
            "range": "± 27834.745747596357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13376.831578947369,
            "unit": "ns",
            "range": "± 1907.8195399105496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60409.92134831461,
            "unit": "ns",
            "range": "± 4256.244936520066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58078.9898989899,
            "unit": "ns",
            "range": "± 5980.597863593519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63169.208333333336,
            "unit": "ns",
            "range": "± 11233.786809551626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2792.3617021276596,
            "unit": "ns",
            "range": "± 416.4274285499029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12302.26923076923,
            "unit": "ns",
            "range": "± 958.8626373287037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5526622.230769231,
            "unit": "ns",
            "range": "± 23540.327447998134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14701267.166666666,
            "unit": "ns",
            "range": "± 87497.53468989584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36742193.64285714,
            "unit": "ns",
            "range": "± 184258.72871824182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78444120.6923077,
            "unit": "ns",
            "range": "± 430903.05543810833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148311859.23076922,
            "unit": "ns",
            "range": "± 1202409.536580691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 936089.9130434783,
            "unit": "ns",
            "range": "± 52540.77230462055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847524.5,
            "unit": "ns",
            "range": "± 53601.09598426403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393591.6836734693,
            "unit": "ns",
            "range": "± 119350.78212127794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5914635.455882353,
            "unit": "ns",
            "range": "± 281269.4410740924"
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
          "id": "4d1143350b41f9af8f65149463229080bc3d9fab",
          "message": "Changelog",
          "timestamp": "2023-12-27T16:18:16+09:00",
          "tree_id": "58b8e3af75d02d34e4efe5417c31029d7f1e7d65",
          "url": "https://github.com/greymistcube/libplanet/commit/4d1143350b41f9af8f65149463229080bc3d9fab"
        },
        "date": 1703662129677,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728294.437825521,
            "unit": "ns",
            "range": "± 3638.9482203874527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206628.1512276786,
            "unit": "ns",
            "range": "± 2041.2461129273802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756379.3149088542,
            "unit": "ns",
            "range": "± 2602.269257681285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911830.3984375,
            "unit": "ns",
            "range": "± 2719.827096264326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626558.4322684152,
            "unit": "ns",
            "range": "± 2623.5422557022302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561057.6446814904,
            "unit": "ns",
            "range": "± 788.7240231278087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2367964,
            "unit": "ns",
            "range": "± 58389.3058343579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2499487.3913043477,
            "unit": "ns",
            "range": "± 95157.65280965834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3089061,
            "unit": "ns",
            "range": "± 69536.15954961197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2894013.361702128,
            "unit": "ns",
            "range": "± 89970.12888572604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6772256.590909091,
            "unit": "ns",
            "range": "± 156944.00994945664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38612.35051546392,
            "unit": "ns",
            "range": "± 4480.913199898629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201366.1489361702,
            "unit": "ns",
            "range": "± 7714.495489093816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190863.375,
            "unit": "ns",
            "range": "± 6887.5495749741995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168821.52,
            "unit": "ns",
            "range": "± 4416.876282321402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3024985.8571428573,
            "unit": "ns",
            "range": "± 35935.74863313934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2793932.8571428573,
            "unit": "ns",
            "range": "± 38762.24530659687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15510.354166666666,
            "unit": "ns",
            "range": "± 2026.912876787683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67557.34736842105,
            "unit": "ns",
            "range": "± 6021.128532391865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51066.78571428572,
            "unit": "ns",
            "range": "± 847.3375658788241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57156.010204081635,
            "unit": "ns",
            "range": "± 9992.760848285565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3053.7395833333335,
            "unit": "ns",
            "range": "± 515.0051557185294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14281.602040816326,
            "unit": "ns",
            "range": "± 2555.5900996680907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5530214.4,
            "unit": "ns",
            "range": "± 15008.05554075163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14064494.933333334,
            "unit": "ns",
            "range": "± 100111.94484637589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35837174.928571425,
            "unit": "ns",
            "range": "± 155236.95980832967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72931257.5,
            "unit": "ns",
            "range": "± 294692.7915180948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147025882.91666666,
            "unit": "ns",
            "range": "± 344301.1950425378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948446.1979166666,
            "unit": "ns",
            "range": "± 76734.93718421667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855154.888888889,
            "unit": "ns",
            "range": "± 76740.99163915595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1385822.9793814432,
            "unit": "ns",
            "range": "± 110651.1130934166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5853462.536363636,
            "unit": "ns",
            "range": "± 247114.98191717264"
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
          "id": "295aa9e4940acdb6ed9c39d6636e5cfa1fc1ca59",
          "message": "Changed FullNode.ChildrenCount from 17 to 16",
          "timestamp": "2023-12-27T18:46:20+09:00",
          "tree_id": "39d2987c5d83e2901aa2881ee4f52dc44c8e8d4a",
          "url": "https://github.com/greymistcube/libplanet/commit/295aa9e4940acdb6ed9c39d6636e5cfa1fc1ca59"
        },
        "date": 1703671029302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3658466.288762019,
            "unit": "ns",
            "range": "± 26170.26273866425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198033.1163504464,
            "unit": "ns",
            "range": "± 5282.150633372971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775165.8573567708,
            "unit": "ns",
            "range": "± 13948.993915618024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987999.0138020834,
            "unit": "ns",
            "range": "± 3100.406564112629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621555.7842610677,
            "unit": "ns",
            "range": "± 3950.2716296558883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578122.1782226562,
            "unit": "ns",
            "range": "± 884.6335753536401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458426.38372093,
            "unit": "ns",
            "range": "± 89873.39150774943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2591808.717391304,
            "unit": "ns",
            "range": "± 98734.82896479461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3195183.38,
            "unit": "ns",
            "range": "± 84793.8701716895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2974079.45,
            "unit": "ns",
            "range": "± 105141.65847449178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7071135.078947368,
            "unit": "ns",
            "range": "± 242832.55262360582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41481.51052631579,
            "unit": "ns",
            "range": "± 6671.188293292947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200327.1896551724,
            "unit": "ns",
            "range": "± 8741.588115895262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193727.95945945947,
            "unit": "ns",
            "range": "± 9425.256690576944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171872.21951219512,
            "unit": "ns",
            "range": "± 6101.808766719075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3247285.6923076925,
            "unit": "ns",
            "range": "± 47218.343962533276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881167.9285714286,
            "unit": "ns",
            "range": "± 44531.76159770131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14045.268817204302,
            "unit": "ns",
            "range": "± 2110.3072006936986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70139.875,
            "unit": "ns",
            "range": "± 10754.115470979374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63695.23626373626,
            "unit": "ns",
            "range": "± 6422.522512109959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86640,
            "unit": "ns",
            "range": "± 19330.871768764737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4125.50505050505,
            "unit": "ns",
            "range": "± 1433.3134964326068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12896.83695652174,
            "unit": "ns",
            "range": "± 2010.7348242779958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5739655.066666666,
            "unit": "ns",
            "range": "± 89046.10716081438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14604947.933333334,
            "unit": "ns",
            "range": "± 183074.26067990888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37072568.92307692,
            "unit": "ns",
            "range": "± 185680.46167608368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74606190.03846154,
            "unit": "ns",
            "range": "± 930705.1076425528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151536940.23333332,
            "unit": "ns",
            "range": "± 812852.4471894784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959108.1021505377,
            "unit": "ns",
            "range": "± 60721.289076140805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1954041.5377358492,
            "unit": "ns",
            "range": "± 81010.85024668522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420954.4444444445,
            "unit": "ns",
            "range": "± 117842.32355201304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5674263.259259259,
            "unit": "ns",
            "range": "± 158931.94157141907"
          }
        ]
      }
    ]
  }
}