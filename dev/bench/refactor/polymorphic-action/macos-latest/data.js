window.BENCHMARK_DATA = {
  "lastUpdate": 1682410426805,
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
          "id": "4d274668f6e5f59f976c213633050e5f9f0b6354",
          "message": "More generic action type attribute",
          "timestamp": "2023-04-25T15:05:55+09:00",
          "tree_id": "25a1af8f6e05b1ac97500b0c46b20ad00c536bb8",
          "url": "https://github.com/greymistcube/libplanet/commit/4d274668f6e5f59f976c213633050e5f9f0b6354"
        },
        "date": 1682404129023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8988069.214285715,
            "unit": "ns",
            "range": "± 749297.0491736198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22574927.125,
            "unit": "ns",
            "range": "± 1840822.5538720458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57726210.421686746,
            "unit": "ns",
            "range": "± 3772363.9024910284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124121221.2721519,
            "unit": "ns",
            "range": "± 20296686.379163824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224756943.54545453,
            "unit": "ns",
            "range": "± 5439817.532890495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71906.35483870968,
            "unit": "ns",
            "range": "± 8404.811662330252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441337.0268817204,
            "unit": "ns",
            "range": "± 91047.51846409313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 400300.06382978725,
            "unit": "ns",
            "range": "± 50939.85827874129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 383086.73913043475,
            "unit": "ns",
            "range": "± 63654.23335246008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4921385.841176471,
            "unit": "ns",
            "range": "± 597274.8018743042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4483657.829545454,
            "unit": "ns",
            "range": "± 792510.4956113327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25955.072916666668,
            "unit": "ns",
            "range": "± 6245.078316890899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117439.20408163265,
            "unit": "ns",
            "range": "± 19654.930368691912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126191.81868131868,
            "unit": "ns",
            "range": "± 18446.15639691738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145152.42222222223,
            "unit": "ns",
            "range": "± 21773.65606217999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10443.25,
            "unit": "ns",
            "range": "± 2202.1838443260194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24357.032608695652,
            "unit": "ns",
            "range": "± 6251.128823688852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704906.5204081633,
            "unit": "ns",
            "range": "± 199142.29091436934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3130628.011235955,
            "unit": "ns",
            "range": "± 172237.5014013086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2720055.5729166665,
            "unit": "ns",
            "range": "± 333986.37335856253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8162233.925531914,
            "unit": "ns",
            "range": "± 1005841.7227311479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3610890.652631579,
            "unit": "ns",
            "range": "± 350994.0463352064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4139675.3020833335,
            "unit": "ns",
            "range": "± 405812.1731616765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5208391.785714285,
            "unit": "ns",
            "range": "± 545856.9939208004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5200731.458762887,
            "unit": "ns",
            "range": "± 622216.7281130145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9009845.659793815,
            "unit": "ns",
            "range": "± 766208.2310593387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7250976.6842927635,
            "unit": "ns",
            "range": "± 555549.7981243829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088088.2456430288,
            "unit": "ns",
            "range": "± 26275.3064808777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322840.8899739583,
            "unit": "ns",
            "range": "± 16794.442175320353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591843.056082589,
            "unit": "ns",
            "range": "± 43555.858026943526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937689.6038161058,
            "unit": "ns",
            "range": "± 13920.543322703175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810411.5345830503,
            "unit": "ns",
            "range": "± 29544.61719051205"
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
          "id": "af902ed0d0a03114471168937609ece48c506ad6",
          "message": "Added test for integer type id",
          "timestamp": "2023-04-25T15:24:04+09:00",
          "tree_id": "c93cdcdd0f726862bedf4aaff39ff28520f60b89",
          "url": "https://github.com/greymistcube/libplanet/commit/af902ed0d0a03114471168937609ece48c506ad6"
        },
        "date": 1682405184863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8543539.222222222,
            "unit": "ns",
            "range": "± 355572.6752145163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26881648.54255319,
            "unit": "ns",
            "range": "± 5292149.053155328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54662577.18965517,
            "unit": "ns",
            "range": "± 2987395.2664158526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110082254.46774194,
            "unit": "ns",
            "range": "± 4954935.881725895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224878138.98076922,
            "unit": "ns",
            "range": "± 9249991.024751337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65400.142857142855,
            "unit": "ns",
            "range": "± 8855.35652474887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386607.1458333333,
            "unit": "ns",
            "range": "± 62065.540420968944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360309.3820224719,
            "unit": "ns",
            "range": "± 44094.18525634171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345411.2395833333,
            "unit": "ns",
            "range": "± 50478.99573564075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4673260.583333333,
            "unit": "ns",
            "range": "± 512092.78651235945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4159232.2525773197,
            "unit": "ns",
            "range": "± 297065.2401903926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23639.22988505747,
            "unit": "ns",
            "range": "± 3152.0768668364253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113238.83695652174,
            "unit": "ns",
            "range": "± 16057.081278081858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121253.64835164836,
            "unit": "ns",
            "range": "± 11374.647700892277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129171.34782608696,
            "unit": "ns",
            "range": "± 21496.613955667675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8707.41304347826,
            "unit": "ns",
            "range": "± 1144.8360279171027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23157.46153846154,
            "unit": "ns",
            "range": "± 3722.9650229881504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625771.387755102,
            "unit": "ns",
            "range": "± 173952.2317873699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3080663.7391304346,
            "unit": "ns",
            "range": "± 191580.87966993736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2985465.6170212766,
            "unit": "ns",
            "range": "± 504978.78284115944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7565698.011627907,
            "unit": "ns",
            "range": "± 838719.5842826485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4591689.8367346935,
            "unit": "ns",
            "range": "± 385680.26461180224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3786739.5520833335,
            "unit": "ns",
            "range": "± 296305.5003913633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5138026.393617021,
            "unit": "ns",
            "range": "± 425329.4257980554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4922062.907216495,
            "unit": "ns",
            "range": "± 501331.1636969636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8806268.384210527,
            "unit": "ns",
            "range": "± 890324.5859200448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7583336.9345703125,
            "unit": "ns",
            "range": "± 141580.54090458536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166644.5506696426,
            "unit": "ns",
            "range": "± 70430.24986892921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390949.4973958333,
            "unit": "ns",
            "range": "± 29536.657006432346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2978008.928466797,
            "unit": "ns",
            "range": "± 154328.16985401534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045955.261156165,
            "unit": "ns",
            "range": "± 58374.927803397375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806570.4545898438,
            "unit": "ns",
            "range": "± 23849.159251047135"
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
          "id": "67ed9fb9fa43e61a55173a2e583f1148a31f4d80",
          "message": "Changelog",
          "timestamp": "2023-04-25T15:28:47+09:00",
          "tree_id": "4c842014e58b00895e9c64496a7937bd58226f44",
          "url": "https://github.com/greymistcube/libplanet/commit/67ed9fb9fa43e61a55173a2e583f1148a31f4d80"
        },
        "date": 1682405506680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8509583.654545454,
            "unit": "ns",
            "range": "± 359671.714463302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21186846.5,
            "unit": "ns",
            "range": "± 1104818.3919789486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54022157.85263158,
            "unit": "ns",
            "range": "± 3669734.185343071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109791414.46808511,
            "unit": "ns",
            "range": "± 7673583.461207672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216415096.04,
            "unit": "ns",
            "range": "± 5635304.113339969"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72225.43956043955,
            "unit": "ns",
            "range": "± 10352.467901379083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363989.6609195402,
            "unit": "ns",
            "range": "± 24858.011158668778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327195.92631578946,
            "unit": "ns",
            "range": "± 35284.24613362056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300224.9130434783,
            "unit": "ns",
            "range": "± 29832.16760373625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4236614.038461538,
            "unit": "ns",
            "range": "± 101970.306030915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3714071.6842105263,
            "unit": "ns",
            "range": "± 125004.71710988312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25403.458333333332,
            "unit": "ns",
            "range": "± 3151.213874438887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132719.09793814432,
            "unit": "ns",
            "range": "± 29283.408082215763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116762.29545454546,
            "unit": "ns",
            "range": "± 14626.201154454078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141862.98936170212,
            "unit": "ns",
            "range": "± 30273.883224652327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10412.5,
            "unit": "ns",
            "range": "± 1289.3521694455446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25606.471264367818,
            "unit": "ns",
            "range": "± 6336.486923456988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597322.005050505,
            "unit": "ns",
            "range": "± 148778.48590961882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072489.0921052634,
            "unit": "ns",
            "range": "± 152756.75869313086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2754770,
            "unit": "ns",
            "range": "± 262311.31101830676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6975545.572164948,
            "unit": "ns",
            "range": "± 425681.90812231024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3700688.4684210527,
            "unit": "ns",
            "range": "± 311976.7279628624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3735987.032608696,
            "unit": "ns",
            "range": "± 315485.940607256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4797013.102040816,
            "unit": "ns",
            "range": "± 301204.50005877996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4846282.456989247,
            "unit": "ns",
            "range": "± 476243.14140890253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8549252.449438203,
            "unit": "ns",
            "range": "± 557924.6052364109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8321595.646679687,
            "unit": "ns",
            "range": "± 432984.1799916881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2348971.7166606104,
            "unit": "ns",
            "range": "± 74784.86873742049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1463698.211123512,
            "unit": "ns",
            "range": "± 45887.06577698059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3825291.6400390626,
            "unit": "ns",
            "range": "± 331141.0785214449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 970971.562162642,
            "unit": "ns",
            "range": "± 40677.724516582326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003889.2938852163,
            "unit": "ns",
            "range": "± 46468.74741791412"
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
          "id": "1d9b1f886c702c69dacd7ff6d5ba0c8dfd9f145f",
          "message": "Fixed test",
          "timestamp": "2023-04-25T16:17:53+09:00",
          "tree_id": "f01d003011d1829011c235c62a1bf0dce41b48d2",
          "url": "https://github.com/greymistcube/libplanet/commit/1d9b1f886c702c69dacd7ff6d5ba0c8dfd9f145f"
        },
        "date": 1682408126159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9168516.30952381,
            "unit": "ns",
            "range": "± 302515.7727627895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24842629.989130434,
            "unit": "ns",
            "range": "± 2130362.3462444106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57269506.85294118,
            "unit": "ns",
            "range": "± 975467.1293453423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117060658.84615384,
            "unit": "ns",
            "range": "± 3094908.1506948113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231595393.16666666,
            "unit": "ns",
            "range": "± 6746676.716647702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63552.75,
            "unit": "ns",
            "range": "± 5726.891829669531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383362.5256410256,
            "unit": "ns",
            "range": "± 19681.051350450627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361657.1896551724,
            "unit": "ns",
            "range": "± 15619.715799756226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308073.81111111114,
            "unit": "ns",
            "range": "± 19939.173648195876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4830709.05882353,
            "unit": "ns",
            "range": "± 69539.96401123474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4321133.363636363,
            "unit": "ns",
            "range": "± 104444.34746133165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20237.260416666668,
            "unit": "ns",
            "range": "± 1899.1281115556367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100817.23958333333,
            "unit": "ns",
            "range": "± 7900.015288119507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85747.18556701031,
            "unit": "ns",
            "range": "± 5193.830645843796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100184.59340659341,
            "unit": "ns",
            "range": "± 9145.281259240895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5627.59793814433,
            "unit": "ns",
            "range": "± 438.6344971374661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18715.55154639175,
            "unit": "ns",
            "range": "± 1606.6883667133336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1862998.106060606,
            "unit": "ns",
            "range": "± 245441.68551317303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3717739.3620689656,
            "unit": "ns",
            "range": "± 162007.35843526866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2857787.422222222,
            "unit": "ns",
            "range": "± 155543.34384914956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8022971.883333334,
            "unit": "ns",
            "range": "± 341304.5317485615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3998652.3829787234,
            "unit": "ns",
            "range": "± 258797.31705611464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4215926.16,
            "unit": "ns",
            "range": "± 169631.88750847572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5461748.928571428,
            "unit": "ns",
            "range": "± 291851.2409533234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5222890.095959596,
            "unit": "ns",
            "range": "± 341219.7168139171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9557043.179104477,
            "unit": "ns",
            "range": "± 429048.47966669314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7359440.064732143,
            "unit": "ns",
            "range": "± 54336.619208090815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2237199.885216346,
            "unit": "ns",
            "range": "± 11527.182571190484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448923.4998497595,
            "unit": "ns",
            "range": "± 8366.199111403415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2848355.0616629464,
            "unit": "ns",
            "range": "± 11719.309719044533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011702.6935096154,
            "unit": "ns",
            "range": "± 4914.985338955332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886404.5145182292,
            "unit": "ns",
            "range": "± 5011.335106486139"
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
          "id": "2a25e25bfee53227024a1f5d51746a7105c2ed41",
          "message": "Applied suggestions",
          "timestamp": "2023-04-25T16:52:46+09:00",
          "tree_id": "bae83567c1d3fd2c26229e68420a96feb2dcd53f",
          "url": "https://github.com/greymistcube/libplanet/commit/2a25e25bfee53227024a1f5d51746a7105c2ed41"
        },
        "date": 1682410407777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10523112.693181818,
            "unit": "ns",
            "range": "± 1889165.5574408693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22031944.55172414,
            "unit": "ns",
            "range": "± 1194822.8488110283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56070307.22164948,
            "unit": "ns",
            "range": "± 3543723.4143239604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109776474.58974358,
            "unit": "ns",
            "range": "± 5661567.726071624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219965185.4893617,
            "unit": "ns",
            "range": "± 8509215.66816481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74133.35164835164,
            "unit": "ns",
            "range": "± 9715.029650979657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371547.5315789474,
            "unit": "ns",
            "range": "± 40554.594236540965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345525.2826086957,
            "unit": "ns",
            "range": "± 30926.772121647446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337925.53846153844,
            "unit": "ns",
            "range": "± 32834.752879400236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4398290.305263158,
            "unit": "ns",
            "range": "± 250126.32726871787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3921921.6612903224,
            "unit": "ns",
            "range": "± 175800.2585537687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23902.63829787234,
            "unit": "ns",
            "range": "± 4470.386966005216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114987.35416666667,
            "unit": "ns",
            "range": "± 17402.734355617595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120527.97959183673,
            "unit": "ns",
            "range": "± 13384.564968133147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128686.37368421053,
            "unit": "ns",
            "range": "± 17436.89687052247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9539.36170212766,
            "unit": "ns",
            "range": "± 1720.2171021465576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25824.13829787234,
            "unit": "ns",
            "range": "± 4340.968903790811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723159.5977011495,
            "unit": "ns",
            "range": "± 214737.16202764047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3260496.951219512,
            "unit": "ns",
            "range": "± 225435.47522408696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764962.1063829786,
            "unit": "ns",
            "range": "± 427883.64476015663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6951907.171428571,
            "unit": "ns",
            "range": "± 318972.9536811642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3615069.49,
            "unit": "ns",
            "range": "± 212318.8418989778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3612699.6184210526,
            "unit": "ns",
            "range": "± 182862.10295986917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4910814.322916667,
            "unit": "ns",
            "range": "± 305187.75647756644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4702744.880434782,
            "unit": "ns",
            "range": "± 281462.40298858116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8706823.25,
            "unit": "ns",
            "range": "± 596774.3530847185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7055428.307465278,
            "unit": "ns",
            "range": "± 263772.80901204416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2098899.555245536,
            "unit": "ns",
            "range": "± 35177.88913434626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360348.9842601102,
            "unit": "ns",
            "range": "± 27421.14050541203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015539.0550235217,
            "unit": "ns",
            "range": "± 215742.72019135955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871944.9349325857,
            "unit": "ns",
            "range": "± 38000.14364974135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911927.8255998883,
            "unit": "ns",
            "range": "± 44080.80858642241"
          }
        ]
      }
    ]
  }
}