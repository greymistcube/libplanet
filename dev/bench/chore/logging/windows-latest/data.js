window.BENCHMARK_DATA = {
  "lastUpdate": 1680265719208,
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
          "id": "8902e1d814122f6a7b5c54230844e9bf49094bdf",
          "message": "Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:40:24+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/8902e1d814122f6a7b5c54230844e9bf49094bdf"
        },
        "date": 1679986381015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89415,
            "unit": "ns",
            "range": "± 3177.7713525725494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4880506.4453125,
            "unit": "ns",
            "range": "± 4148.112924473504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505917.0340401786,
            "unit": "ns",
            "range": "± 937.7965719889692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157038.4635416667,
            "unit": "ns",
            "range": "± 1367.8818797618858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571079.6037946427,
            "unit": "ns",
            "range": "± 12396.774666870962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792059.7795758928,
            "unit": "ns",
            "range": "± 1082.3626805520448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716062.0963541666,
            "unit": "ns",
            "range": "± 577.2959792729662"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3938000.7552083335,
            "unit": "ns",
            "range": "± 8719.479546753644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5521786.666666667,
            "unit": "ns",
            "range": "± 71478.76674396457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23433480,
            "unit": "ns",
            "range": "± 245026.29363280296"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5670365,
            "unit": "ns",
            "range": "± 199039.6140831241"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26241633.333333332,
            "unit": "ns",
            "range": "± 363870.7495539486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86218.27956989247,
            "unit": "ns",
            "range": "± 7067.71511932588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178203.33333333334,
            "unit": "ns",
            "range": "± 10155.691933673716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147806.25,
            "unit": "ns",
            "range": "± 2721.878946610227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3364993.3333333335,
            "unit": "ns",
            "range": "± 22069.321520630227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8396453.333333334,
            "unit": "ns",
            "range": "± 43776.50815981862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16065.625,
            "unit": "ns",
            "range": "± 2104.5728720299066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46319.10112359551,
            "unit": "ns",
            "range": "± 3440.727869760805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41012.903225806454,
            "unit": "ns",
            "range": "± 2700.6128856102764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95419.58762886598,
            "unit": "ns",
            "range": "± 15743.905164481226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5635.714285714285,
            "unit": "ns",
            "range": "± 775.2950884836071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15661.052631578947,
            "unit": "ns",
            "range": "± 1829.3293002326864"
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
          "id": "eb69f758d4a8760b522726611ef3782e919b6455",
          "message": "[skip changelog] Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:41:23+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/greymistcube/libplanet/commit/eb69f758d4a8760b522726611ef3782e919b6455"
        },
        "date": 1679986807226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 145716.30434782608,
            "unit": "ns",
            "range": "± 13070.235266755244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6315895.424107143,
            "unit": "ns",
            "range": "± 109634.65677770272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946859.8958333333,
            "unit": "ns",
            "range": "± 35997.116191244066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522345.2706473214,
            "unit": "ns",
            "range": "± 18348.665432230653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3362421.9010416665,
            "unit": "ns",
            "range": "± 45371.99200888326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1086158.9693509615,
            "unit": "ns",
            "range": "± 9423.358191226374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993658.4735576923,
            "unit": "ns",
            "range": "± 12095.492773410926"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6266325.7265625,
            "unit": "ns",
            "range": "± 377440.37387492857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7760895,
            "unit": "ns",
            "range": "± 739663.740742161"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34215283.333333336,
            "unit": "ns",
            "range": "± 952102.1461005092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8546990,
            "unit": "ns",
            "range": "± 332883.9120137094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38160002.631578945,
            "unit": "ns",
            "range": "± 1315449.345997321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139276.28865979382,
            "unit": "ns",
            "range": "± 17210.133722581613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271235.71428571426,
            "unit": "ns",
            "range": "± 29786.32236446789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251713.04347826086,
            "unit": "ns",
            "range": "± 23363.429285917955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4814545,
            "unit": "ns",
            "range": "± 108943.85069962947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12272372.222222222,
            "unit": "ns",
            "range": "± 252115.38162832268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27622.340425531915,
            "unit": "ns",
            "range": "± 5500.618816709199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68992.63157894737,
            "unit": "ns",
            "range": "± 9341.866892847116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77962.1052631579,
            "unit": "ns",
            "range": "± 9800.67495447481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149841.48936170212,
            "unit": "ns",
            "range": "± 17717.5838153111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11239.772727272728,
            "unit": "ns",
            "range": "± 1076.3432957389255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30266.666666666668,
            "unit": "ns",
            "range": "± 10060.460086042645"
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
          "id": "682e2737b622acc4873a2f2ea7e182cf58a01480",
          "message": "[skip changelog] Small fix for consistency",
          "timestamp": "2023-03-31T21:07:00+09:00",
          "tree_id": "26356a172c2fea17776cc5cf1daba8b1789bffb8",
          "url": "https://github.com/greymistcube/libplanet/commit/682e2737b622acc4873a2f2ea7e182cf58a01480"
        },
        "date": 1680265239816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417116,
            "unit": "ns",
            "range": "± 123659.5715680919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2494312.5,
            "unit": "ns",
            "range": "± 63250.2848421151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2252105,
            "unit": "ns",
            "range": "± 179219.89505305566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5291479.411764706,
            "unit": "ns",
            "range": "± 168763.01795697576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43915.09433962264,
            "unit": "ns",
            "range": "± 1828.975777525508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6924460,
            "unit": "ns",
            "range": "± 45754.87171563577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17833840,
            "unit": "ns",
            "range": "± 129408.10749606953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45543266.666666664,
            "unit": "ns",
            "range": "± 215303.8539455565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91672100,
            "unit": "ns",
            "range": "± 761264.9144680188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183600560,
            "unit": "ns",
            "range": "± 453549.28193401115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4856516.40625,
            "unit": "ns",
            "range": "± 6380.265422788802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528168.7081473214,
            "unit": "ns",
            "range": "± 2730.3848195506203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152622.3893229167,
            "unit": "ns",
            "range": "± 1394.435643767992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627792.1875,
            "unit": "ns",
            "range": "± 6298.092526553723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810113.9192708334,
            "unit": "ns",
            "range": "± 8250.915273854056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729831.26953125,
            "unit": "ns",
            "range": "± 922.2521771512113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145362.5,
            "unit": "ns",
            "range": "± 58041.84553693424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3281081.25,
            "unit": "ns",
            "range": "± 39638.15028899978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4055842.8571428573,
            "unit": "ns",
            "range": "± 47443.694795243086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4149587.1428571427,
            "unit": "ns",
            "range": "± 193912.28998985526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7237311.764705882,
            "unit": "ns",
            "range": "± 110478.82649151003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309796,
            "unit": "ns",
            "range": "± 7444.6558013114345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250947.36842105264,
            "unit": "ns",
            "range": "± 5127.417415885423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233578.68852459016,
            "unit": "ns",
            "range": "± 10497.699982283395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5300003.333333333,
            "unit": "ns",
            "range": "± 29482.097877154116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3710050,
            "unit": "ns",
            "range": "± 25677.736540555008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19966.666666666668,
            "unit": "ns",
            "range": "± 1432.566360351797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88015.625,
            "unit": "ns",
            "range": "± 5351.661387388328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82974.24242424243,
            "unit": "ns",
            "range": "± 8084.970825349542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 178106.0606060606,
            "unit": "ns",
            "range": "± 18827.226367422445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6623.711340206186,
            "unit": "ns",
            "range": "± 835.6351371706593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19536.021505376346,
            "unit": "ns",
            "range": "± 1562.9258652930591"
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
          "id": "49f3c094e1d0a57a8415a4cae64cd85301a5ac6e",
          "message": "[skip changelog] Small fix for consistency",
          "timestamp": "2023-03-31T21:05:26+09:00",
          "tree_id": "9f83efa0860400732081f19bd366e1f1396d623b",
          "url": "https://github.com/greymistcube/libplanet/commit/49f3c094e1d0a57a8415a4cae64cd85301a5ac6e"
        },
        "date": 1680265692620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701933.6842105263,
            "unit": "ns",
            "range": "± 125767.79820792536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3389165.625,
            "unit": "ns",
            "range": "± 269027.9174823097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3015046.3917525774,
            "unit": "ns",
            "range": "± 276521.5735487678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7208912.244897959,
            "unit": "ns",
            "range": "± 636571.0362390152"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65270.21276595745,
            "unit": "ns",
            "range": "± 11411.51870234759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9079529.787234042,
            "unit": "ns",
            "range": "± 525922.4463105636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25194872.5,
            "unit": "ns",
            "range": "± 894348.6384923258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65932234.146341465,
            "unit": "ns",
            "range": "± 2337658.407531964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132072615.38461539,
            "unit": "ns",
            "range": "± 3528321.235567114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264331738.0952381,
            "unit": "ns",
            "range": "± 6277146.601241379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6063542.552083333,
            "unit": "ns",
            "range": "± 65167.85989689754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959345.005580357,
            "unit": "ns",
            "range": "± 18598.54522466828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482974.453125,
            "unit": "ns",
            "range": "± 12941.640641447691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3255855.9114583335,
            "unit": "ns",
            "range": "± 39413.20497916428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1091359.2163085938,
            "unit": "ns",
            "range": "± 21174.936364595073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1014070.8077566965,
            "unit": "ns",
            "range": "± 12535.781166963376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3747585.263157895,
            "unit": "ns",
            "range": "± 229617.8374383768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6106926,
            "unit": "ns",
            "range": "± 488744.02104276477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31312981.48148148,
            "unit": "ns",
            "range": "± 1305264.4212809582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7584537.113402062,
            "unit": "ns",
            "range": "± 570608.867300168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37488605.79710145,
            "unit": "ns",
            "range": "± 1789952.7028654444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237076.59574468085,
            "unit": "ns",
            "range": "± 24460.76263562812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235528.42105263157,
            "unit": "ns",
            "range": "± 25215.550180090428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205532.98969072165,
            "unit": "ns",
            "range": "± 21249.25352438628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14642276.623376623,
            "unit": "ns",
            "range": "± 749686.7098111022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11521409.782608695,
            "unit": "ns",
            "range": "± 649694.4155828281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30786.082474226805,
            "unit": "ns",
            "range": "± 8243.257163269493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72343.15789473684,
            "unit": "ns",
            "range": "± 14195.883825291998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48483.50515463918,
            "unit": "ns",
            "range": "± 10807.353596166702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134864.94845360826,
            "unit": "ns",
            "range": "± 25728.656369718672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6239.3258426966295,
            "unit": "ns",
            "range": "± 1125.693521338582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26014.432989690722,
            "unit": "ns",
            "range": "± 7725.943708413038"
          }
        ]
      }
    ]
  }
}