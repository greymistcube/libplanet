window.BENCHMARK_DATA = {
  "lastUpdate": 1690448875943,
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
          "id": "fc7c052061aac1654db2c548bd9a3f3a9553f8fa",
          "message": "Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T16:41:57+09:00",
          "tree_id": "f24002a0214c9431068a6f86c999ef138ed9f6c4",
          "url": "https://github.com/greymistcube/libplanet/commit/fc7c052061aac1654db2c548bd9a3f3a9553f8fa"
        },
        "date": 1690446166425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 17738750.923913043,
            "unit": "ns",
            "range": "± 3961632.4186766036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 44731113.09090909,
            "unit": "ns",
            "range": "± 8854359.986210298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 139655946.69791666,
            "unit": "ns",
            "range": "± 70493787.89162916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 218068395.54347825,
            "unit": "ns",
            "range": "± 70437851.74884062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 494441706.37,
            "unit": "ns",
            "range": "± 190075191.19948825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96245.68823529412,
            "unit": "ns",
            "range": "± 7971.497562736697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 433981.3522727273,
            "unit": "ns",
            "range": "± 86944.1502127619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385936.43258426967,
            "unit": "ns",
            "range": "± 51977.10267638787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 388762.62637362635,
            "unit": "ns",
            "range": "± 64779.34196308235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4816795.317073171,
            "unit": "ns",
            "range": "± 516170.7005352398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173366.034883721,
            "unit": "ns",
            "range": "± 355933.64792786865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31428.7,
            "unit": "ns",
            "range": "± 6229.795069762405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125378.85106382979,
            "unit": "ns",
            "range": "± 18039.583637851563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134300.58620689655,
            "unit": "ns",
            "range": "± 14628.13976756246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143180.5618556701,
            "unit": "ns",
            "range": "± 20220.0771006064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10516.489361702128,
            "unit": "ns",
            "range": "± 1638.9870707742568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31823.712643678162,
            "unit": "ns",
            "range": "± 6231.030130422548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1841819.5,
            "unit": "ns",
            "range": "± 214992.48553904347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3444196.2045454546,
            "unit": "ns",
            "range": "± 321636.12567099376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510723.3448275863,
            "unit": "ns",
            "range": "± 361766.35908574855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6892433.354430379,
            "unit": "ns",
            "range": "± 1061044.9003209057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4318625.2191011235,
            "unit": "ns",
            "range": "± 1013099.3043662756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4422783.477777778,
            "unit": "ns",
            "range": "± 779408.6571183127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5203066.961538462,
            "unit": "ns",
            "range": "± 1056836.4885094964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436279.869047619,
            "unit": "ns",
            "range": "± 427583.9896397381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12644192.614583334,
            "unit": "ns",
            "range": "± 5901354.196341159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9525041.537828946,
            "unit": "ns",
            "range": "± 2433075.188440195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 3831523.4781976743,
            "unit": "ns",
            "range": "± 2240888.0220656623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331122.8877704327,
            "unit": "ns",
            "range": "± 12724.59562595059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3317014.6315104165,
            "unit": "ns",
            "range": "± 611095.5475862573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893256.5248862465,
            "unit": "ns",
            "range": "± 77095.53441496355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1246755.2159729004,
            "unit": "ns",
            "range": "± 262873.6754726452"
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
          "id": "9d98806393b29322dcad1c10353c8adb9511c7f0",
          "message": "Changelog",
          "timestamp": "2023-07-27T17:43:10+09:00",
          "tree_id": "6b63e87d2f53702d72a622bb2968f235482b384b",
          "url": "https://github.com/greymistcube/libplanet/commit/9d98806393b29322dcad1c10353c8adb9511c7f0"
        },
        "date": 1690448856315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8697992.333333334,
            "unit": "ns",
            "range": "± 325947.1998659515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21319870.54347826,
            "unit": "ns",
            "range": "± 531408.8693568582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52894927.76923077,
            "unit": "ns",
            "range": "± 1409960.0121357003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107182621.90625,
            "unit": "ns",
            "range": "± 3310392.8372208034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231064547.23076922,
            "unit": "ns",
            "range": "± 9516198.605023842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82275.97802197802,
            "unit": "ns",
            "range": "± 12985.526516496077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368546.4404761905,
            "unit": "ns",
            "range": "± 25432.47542370064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364191.6511627907,
            "unit": "ns",
            "range": "± 30853.515140958432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345273.12765957444,
            "unit": "ns",
            "range": "± 26881.619888559362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4464949.10989011,
            "unit": "ns",
            "range": "± 249507.18604701333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4071716.84,
            "unit": "ns",
            "range": "± 161909.1990917913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27594.618556701033,
            "unit": "ns",
            "range": "± 4019.9881048831553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123656.7,
            "unit": "ns",
            "range": "± 13279.490376180249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125089.89361702128,
            "unit": "ns",
            "range": "± 9948.039332914106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130125.30412371134,
            "unit": "ns",
            "range": "± 15290.477306589097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7593.3263157894735,
            "unit": "ns",
            "range": "± 1082.5481213038108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20485.479166666668,
            "unit": "ns",
            "range": "± 3889.6724797290326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762459.4090909092,
            "unit": "ns",
            "range": "± 196284.87263602042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431008.4146341463,
            "unit": "ns",
            "range": "± 379163.1780064888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2428378.2613636362,
            "unit": "ns",
            "range": "± 388225.0819056138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9100992.6875,
            "unit": "ns",
            "range": "± 3946797.5365422713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549692.0576923075,
            "unit": "ns",
            "range": "± 138627.64380228453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3818788.310810811,
            "unit": "ns",
            "range": "± 191499.4851975573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4741067.728571429,
            "unit": "ns",
            "range": "± 228113.0680790395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4222997.434782608,
            "unit": "ns",
            "range": "± 289757.3855369428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8826167.113402061,
            "unit": "ns",
            "range": "± 1516091.7021164286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7496861.052774235,
            "unit": "ns",
            "range": "± 540845.7382770928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2014303.1912059295,
            "unit": "ns",
            "range": "± 68699.57365457586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330384.6005859375,
            "unit": "ns",
            "range": "± 22956.87378928678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3130049.1150568184,
            "unit": "ns",
            "range": "± 190129.76841843544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913196.3256460336,
            "unit": "ns",
            "range": "± 31786.46997702766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 879130.6458543347,
            "unit": "ns",
            "range": "± 24510.46335019947"
          }
        ]
      }
    ]
  }
}