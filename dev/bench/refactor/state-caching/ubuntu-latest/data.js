window.BENCHMARK_DATA = {
  "lastUpdate": 1679563541702,
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
          "id": "e10abba2d1e2181eeb2fa857709cc58772e62418",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:48:40+09:00",
          "tree_id": "420b79d8af8438c8fceaadc0aecb2338a4d58d98",
          "url": "https://github.com/greymistcube/libplanet/commit/e10abba2d1e2181eeb2fa857709cc58772e62418"
        },
        "date": 1679562033494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108136.1875,
            "unit": "ns",
            "range": "± 4269.379294445555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4881686.406850962,
            "unit": "ns",
            "range": "± 40516.77594508385"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6267864.6,
            "unit": "ns",
            "range": "± 93591.64260216523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27508327.222222224,
            "unit": "ns",
            "range": "± 1147278.5676258614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6441719.905660378,
            "unit": "ns",
            "range": "± 266777.142691399"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30989865.333333332,
            "unit": "ns",
            "range": "± 1017193.0963391085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5919142.693638393,
            "unit": "ns",
            "range": "± 21619.58908807619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873646.1694010417,
            "unit": "ns",
            "range": "± 9574.475653669224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365980.896875,
            "unit": "ns",
            "range": "± 10216.46977805301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605960.3454241073,
            "unit": "ns",
            "range": "± 3719.2030703354835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831337.1415364583,
            "unit": "ns",
            "range": "± 4517.538126192945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769558.4860491072,
            "unit": "ns",
            "range": "± 1186.9043813024953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95325.7052631579,
            "unit": "ns",
            "range": "± 9461.94936830547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202533.96808510637,
            "unit": "ns",
            "range": "± 11821.248064171119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179270.75,
            "unit": "ns",
            "range": "± 6980.17135527031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3825753.05,
            "unit": "ns",
            "range": "± 83094.41383813134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9635515.846153846,
            "unit": "ns",
            "range": "± 115100.33238718743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19627.683673469386,
            "unit": "ns",
            "range": "± 3630.4481379591566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50458.188888888886,
            "unit": "ns",
            "range": "± 4048.123579447878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38127.89655172414,
            "unit": "ns",
            "range": "± 1101.6552593006704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89491.24742268042,
            "unit": "ns",
            "range": "± 14160.353625256364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5183.525773195876,
            "unit": "ns",
            "range": "± 525.1019363891704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16026.483516483517,
            "unit": "ns",
            "range": "± 937.2002319276679"
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
          "id": "81f62bdf83fd9321842d901f2730764263337718",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:50:45+09:00",
          "tree_id": "3b9228a74d791581247e7096b727c530af6da885",
          "url": "https://github.com/greymistcube/libplanet/commit/81f62bdf83fd9321842d901f2730764263337718"
        },
        "date": 1679562438216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136156.6043956044,
            "unit": "ns",
            "range": "± 12756.071298604898"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6158109.396001345,
            "unit": "ns",
            "range": "± 406910.4261410686"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7278271.381443299,
            "unit": "ns",
            "range": "± 800094.1064019366"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33058327.40909091,
            "unit": "ns",
            "range": "± 1227361.1023084372"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7822199.291666667,
            "unit": "ns",
            "range": "± 468441.67783206963"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35943588.571428575,
            "unit": "ns",
            "range": "± 517748.9601205936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6953550.007254465,
            "unit": "ns",
            "range": "± 24909.421728316665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2212393.5046875,
            "unit": "ns",
            "range": "± 9317.031180544913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1643438.1951729911,
            "unit": "ns",
            "range": "± 2075.055111810025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3119347.4938616073,
            "unit": "ns",
            "range": "± 2351.673856822095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995799.2223557692,
            "unit": "ns",
            "range": "± 936.2493090030194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904458.017578125,
            "unit": "ns",
            "range": "± 1053.8564589638606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113200.20833333333,
            "unit": "ns",
            "range": "± 7173.645421250241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240356.4,
            "unit": "ns",
            "range": "± 7760.904920705787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251464.33333333334,
            "unit": "ns",
            "range": "± 6776.5170143779505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4853780.588235294,
            "unit": "ns",
            "range": "± 99534.98641122304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12264855.42857143,
            "unit": "ns",
            "range": "± 209650.85574013623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24094.032258064515,
            "unit": "ns",
            "range": "± 1824.332912336743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63084.295454545456,
            "unit": "ns",
            "range": "± 4078.572933768752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56037.22340425532,
            "unit": "ns",
            "range": "± 3664.506691717167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132309.87628865978,
            "unit": "ns",
            "range": "± 17389.928314890665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7478.7959183673465,
            "unit": "ns",
            "range": "± 892.9411608186732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22548.308510638297,
            "unit": "ns",
            "range": "± 1869.6474052416381"
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
          "id": "349c230c7a967f4fdf095c670126bdfec20d573b",
          "message": "Fix for concurrency",
          "timestamp": "2023-03-23T18:15:19+09:00",
          "tree_id": "ccbe72549dda65e14257538495b2ac2a4ce6bcaa",
          "url": "https://github.com/greymistcube/libplanet/commit/349c230c7a967f4fdf095c670126bdfec20d573b"
        },
        "date": 1679563534539,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102735.08823529411,
            "unit": "ns",
            "range": "± 3324.9795931718013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4409006.739583333,
            "unit": "ns",
            "range": "± 42296.748021960826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5984646.461538462,
            "unit": "ns",
            "range": "± 28926.193569771625"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24546777.8,
            "unit": "ns",
            "range": "± 343013.26599214785"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6284468.333333333,
            "unit": "ns",
            "range": "± 251954.01055396334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28553749.14285714,
            "unit": "ns",
            "range": "± 362472.4584079261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5981526.921354166,
            "unit": "ns",
            "range": "± 34667.0834739654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977939.4924479167,
            "unit": "ns",
            "range": "± 2160.02629050925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366584.6720145089,
            "unit": "ns",
            "range": "± 1589.3728302529871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605274.5342548075,
            "unit": "ns",
            "range": "± 2856.4537173465887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815538.0428936298,
            "unit": "ns",
            "range": "± 1093.3885115419178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737854.7332481971,
            "unit": "ns",
            "range": "± 522.3825984776829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87495.2643678161,
            "unit": "ns",
            "range": "± 4741.753013243025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193935.9090909091,
            "unit": "ns",
            "range": "± 9835.097159477564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178314.55319148937,
            "unit": "ns",
            "range": "± 10135.903672617509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777640.3846153845,
            "unit": "ns",
            "range": "± 23336.19328260453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9448489.533333333,
            "unit": "ns",
            "range": "± 88439.68794597227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15051.010416666666,
            "unit": "ns",
            "range": "± 1213.3589957312427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49498.81914893617,
            "unit": "ns",
            "range": "± 5564.324805116401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41637.642857142855,
            "unit": "ns",
            "range": "± 2745.9386063597467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91427.14736842105,
            "unit": "ns",
            "range": "± 12039.214829109736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5293.697916666667,
            "unit": "ns",
            "range": "± 753.2385673636439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15254.62886597938,
            "unit": "ns",
            "range": "± 1145.9235841995499"
          }
        ]
      }
    ]
  }
}