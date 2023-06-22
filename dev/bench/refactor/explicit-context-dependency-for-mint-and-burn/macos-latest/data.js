window.BENCHMARK_DATA = {
  "lastUpdate": 1687420715379,
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
          "id": "f941479dea8a2cbd9994461bf0ee6c3932cc3d97",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:28:42+09:00",
          "tree_id": "a45c5f0410ad050d474db2e6ae43492669faf08f",
          "url": "https://github.com/greymistcube/libplanet/commit/f941479dea8a2cbd9994461bf0ee6c3932cc3d97"
        },
        "date": 1687416351247,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945558.166666667,
            "unit": "ns",
            "range": "± 188325.15972310587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22292398.858490568,
            "unit": "ns",
            "range": "± 925077.91704849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52900493.66,
            "unit": "ns",
            "range": "± 1252310.9692789195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100598843.52,
            "unit": "ns",
            "range": "± 2659627.7859298456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209137706.94444445,
            "unit": "ns",
            "range": "± 4319074.560998962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60798.16494845361,
            "unit": "ns",
            "range": "± 10125.81515821526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327092.6666666667,
            "unit": "ns",
            "range": "± 26018.331428693375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307919.8625,
            "unit": "ns",
            "range": "± 15983.31818319999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294073.4896907217,
            "unit": "ns",
            "range": "± 28200.385812038265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4094907.2,
            "unit": "ns",
            "range": "± 76149.15625477597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3652377.1333333333,
            "unit": "ns",
            "range": "± 105407.63062142603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17620.5,
            "unit": "ns",
            "range": "± 2661.2034322586405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87279.2183908046,
            "unit": "ns",
            "range": "± 11780.398374857938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84644.02197802198,
            "unit": "ns",
            "range": "± 12960.976017755951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105623.98947368421,
            "unit": "ns",
            "range": "± 18133.810191858636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6078.709677419355,
            "unit": "ns",
            "range": "± 1846.1140007938482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18441.632653061224,
            "unit": "ns",
            "range": "± 4220.807152465536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524794.9791666667,
            "unit": "ns",
            "range": "± 164682.22817516286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2844886.65,
            "unit": "ns",
            "range": "± 148036.1208621956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2479166.9263157896,
            "unit": "ns",
            "range": "± 206691.89725877182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6413642.355932203,
            "unit": "ns",
            "range": "± 278172.9068791172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3398279.727272727,
            "unit": "ns",
            "range": "± 148378.06594816086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399036.214285714,
            "unit": "ns",
            "range": "± 122600.2936149223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4526759.016666667,
            "unit": "ns",
            "range": "± 200310.4890283143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423126.152631579,
            "unit": "ns",
            "range": "± 310749.7375147132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7683041.416666667,
            "unit": "ns",
            "range": "± 299555.76780284225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431428.2236328125,
            "unit": "ns",
            "range": "± 121938.68045165401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950540.3971354167,
            "unit": "ns",
            "range": "± 16925.648670789516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259986.075,
            "unit": "ns",
            "range": "± 11396.027044790022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2490374.2494791667,
            "unit": "ns",
            "range": "± 42447.53646788601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848438.7820963542,
            "unit": "ns",
            "range": "± 7595.911816527622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720837.7587890625,
            "unit": "ns",
            "range": "± 1743.767709231244"
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
          "id": "9982d7ddf8beedf426b76bbcf04554cb73e68add",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:55:48+09:00",
          "tree_id": "50f1af824a018bbeb5812f0906047633ace40cb3",
          "url": "https://github.com/greymistcube/libplanet/commit/9982d7ddf8beedf426b76bbcf04554cb73e68add"
        },
        "date": 1687418490911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 15134048.822580645,
            "unit": "ns",
            "range": "± 6656978.415749644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23964358.76190476,
            "unit": "ns",
            "range": "± 2139171.479501146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 98220614.56701031,
            "unit": "ns",
            "range": "± 41157489.34194048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 156573005.45918366,
            "unit": "ns",
            "range": "± 47659673.40614021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270329705.53932583,
            "unit": "ns",
            "range": "± 20721608.453570522"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81038.7643678161,
            "unit": "ns",
            "range": "± 10983.621185031545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371553.1263157895,
            "unit": "ns",
            "range": "± 44640.024452884056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370030.47826086957,
            "unit": "ns",
            "range": "± 27570.896425847255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348935.4712643678,
            "unit": "ns",
            "range": "± 29737.78727784406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4684312.785714285,
            "unit": "ns",
            "range": "± 407516.4456700952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4301539.18556701,
            "unit": "ns",
            "range": "± 381136.0149792965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26212.934782608696,
            "unit": "ns",
            "range": "± 4609.848925570021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138825.01612903227,
            "unit": "ns",
            "range": "± 23906.001590292406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129600.81318681319,
            "unit": "ns",
            "range": "± 15129.218478686338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148590.16483516485,
            "unit": "ns",
            "range": "± 24169.941141041618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10779.08888888889,
            "unit": "ns",
            "range": "± 1388.3399665775328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28778.590361445782,
            "unit": "ns",
            "range": "± 3747.1880482802376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1824942.132183908,
            "unit": "ns",
            "range": "± 305286.80526739894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3277812.8295454546,
            "unit": "ns",
            "range": "± 340393.71736514213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3188574.805882353,
            "unit": "ns",
            "range": "± 638072.439448017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9676833.537634408,
            "unit": "ns",
            "range": "± 2795638.868196493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3935462.7684210525,
            "unit": "ns",
            "range": "± 425011.39043771155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3814014.540229885,
            "unit": "ns",
            "range": "± 275064.43021183764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5367503.666666667,
            "unit": "ns",
            "range": "± 611353.8454472589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5106129.605263158,
            "unit": "ns",
            "range": "± 492381.9990545844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8760654.383838383,
            "unit": "ns",
            "range": "± 829828.040442812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7832905.216572746,
            "unit": "ns",
            "range": "± 352074.21332084393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2372893.3422851562,
            "unit": "ns",
            "range": "± 167988.10529367326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1631214.9499270262,
            "unit": "ns",
            "range": "± 90022.34858554733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3764886.014125631,
            "unit": "ns",
            "range": "± 323680.27581478655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103249.6976884664,
            "unit": "ns",
            "range": "± 82561.29269366311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923886.8993652344,
            "unit": "ns",
            "range": "± 29667.256284219624"
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
          "id": "069cc73c578d53d825e501794aba60738080dea5",
          "message": "Changelog",
          "timestamp": "2023-06-22T15:57:56+09:00",
          "tree_id": "8d0c09d6e8ca88e5a93694aeb35ad420ed534c39",
          "url": "https://github.com/greymistcube/libplanet/commit/069cc73c578d53d825e501794aba60738080dea5"
        },
        "date": 1687420660898,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 25419557.86170213,
            "unit": "ns",
            "range": "± 4729172.43293224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 81646486.30208333,
            "unit": "ns",
            "range": "± 10243571.384109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 191069028.3,
            "unit": "ns",
            "range": "± 19671728.212590694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 390733528.42783505,
            "unit": "ns",
            "range": "± 40924391.44649273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 768198045.1829268,
            "unit": "ns",
            "range": "± 40246372.1293957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 646401.4536082475,
            "unit": "ns",
            "range": "± 244665.2216557019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 845404.804347826,
            "unit": "ns",
            "range": "± 171279.90850620912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 825255.6290322581,
            "unit": "ns",
            "range": "± 179906.9819891975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 1103237.7835051545,
            "unit": "ns",
            "range": "± 321551.27446309105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12014601.392473118,
            "unit": "ns",
            "range": "± 1774971.6041032544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11029336.946808511,
            "unit": "ns",
            "range": "± 1394628.4675308198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 66347.60869565218,
            "unit": "ns",
            "range": "± 23893.275248674774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 362691.8956043956,
            "unit": "ns",
            "range": "± 149350.40656492513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 718234.6161616162,
            "unit": "ns",
            "range": "± 362417.93941113685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 753101.445652174,
            "unit": "ns",
            "range": "± 242295.8973143142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 43024.94680851064,
            "unit": "ns",
            "range": "± 23309.663398928224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 63825.43548387097,
            "unit": "ns",
            "range": "± 24729.65662299913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 6150170.262626262,
            "unit": "ns",
            "range": "± 1943114.0437398292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 8987351.5,
            "unit": "ns",
            "range": "± 2057776.0418720522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 7975623.021276596,
            "unit": "ns",
            "range": "± 1608523.8434969343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19803477.12886598,
            "unit": "ns",
            "range": "± 4477906.992177024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 11217876.791666666,
            "unit": "ns",
            "range": "± 1861111.1888138272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 12022020.693877552,
            "unit": "ns",
            "range": "± 2049600.8364156373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 11926381.979166666,
            "unit": "ns",
            "range": "± 2486920.7271258715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 13422464.649484536,
            "unit": "ns",
            "range": "± 2837263.7817690545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21055315.436170213,
            "unit": "ns",
            "range": "± 2528105.2440762557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 14328240.750679348,
            "unit": "ns",
            "range": "± 1093477.2714491661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 3781000.624588816,
            "unit": "ns",
            "range": "± 80731.13825417342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2674111.394938151,
            "unit": "ns",
            "range": "± 171743.4216027733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4428472.035357603,
            "unit": "ns",
            "range": "± 318530.4476099817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1486592.4285003063,
            "unit": "ns",
            "range": "± 53282.450232918614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1342224.7584987332,
            "unit": "ns",
            "range": "± 45208.477662559446"
          }
        ]
      }
    ]
  }
}