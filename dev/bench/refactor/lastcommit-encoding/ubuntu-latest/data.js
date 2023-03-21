window.BENCHMARK_DATA = {
  "lastUpdate": 1679367859185,
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
          "id": "84cb01bc9136fbaec92c2bc40f6a892c4711ccb7",
          "message": "Removed ByteArray and ToByteArray() from BlockCommit",
          "timestamp": "2023-03-20T18:52:26+09:00",
          "tree_id": "a833bf978224ee20531425ec6bad0b69d2c24aa3",
          "url": "https://github.com/greymistcube/libplanet/commit/84cb01bc9136fbaec92c2bc40f6a892c4711ccb7"
        },
        "date": 1679309725091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3776258.58,
            "unit": "ns",
            "range": "± 231171.68740579803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6029349.545454546,
            "unit": "ns",
            "range": "± 225007.36249540237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29369670.846153848,
            "unit": "ns",
            "range": "± 1212270.8353148305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7119063.666666667,
            "unit": "ns",
            "range": "± 351207.4186742916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32645691.242424242,
            "unit": "ns",
            "range": "± 1030239.8282505642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9035341,
            "unit": "ns",
            "range": "± 323046.6464226954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24693712,
            "unit": "ns",
            "range": "± 740995.8498777619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61312378.833333336,
            "unit": "ns",
            "range": "± 1282590.4289293166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125251548.28571428,
            "unit": "ns",
            "range": "± 2862148.936826788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239199337.06666666,
            "unit": "ns",
            "range": "± 4033334.3196028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618804.9263157896,
            "unit": "ns",
            "range": "± 92055.83522413808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054687.6,
            "unit": "ns",
            "range": "± 89104.20598826974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2604132.08,
            "unit": "ns",
            "range": "± 127774.20522501953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6105116.538461538,
            "unit": "ns",
            "range": "± 92563.92441768317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55963.795454545456,
            "unit": "ns",
            "range": "± 4034.6730447918458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6884507.652604166,
            "unit": "ns",
            "range": "± 57749.46199926502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2101119.54296875,
            "unit": "ns",
            "range": "± 20672.226256563175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1558623.3455729166,
            "unit": "ns",
            "range": "± 15847.79787936443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3009683.7633928573,
            "unit": "ns",
            "range": "± 21738.98490100908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949683.2085658482,
            "unit": "ns",
            "range": "± 3823.514768958063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891530.9142578125,
            "unit": "ns",
            "range": "± 7124.514398182677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218793.36363636365,
            "unit": "ns",
            "range": "± 13892.396777135256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221431.1595744681,
            "unit": "ns",
            "range": "± 14200.483991678524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192742.93298969071,
            "unit": "ns",
            "range": "± 13008.211369736184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13917475.263157895,
            "unit": "ns",
            "range": "± 302069.2400644156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11920423.176470589,
            "unit": "ns",
            "range": "± 242878.2075913346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21726.645833333332,
            "unit": "ns",
            "range": "± 2058.9994963275713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61161.13829787234,
            "unit": "ns",
            "range": "± 5777.844308358938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47448.156626506025,
            "unit": "ns",
            "range": "± 2522.5839514755776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106855.66326530612,
            "unit": "ns",
            "range": "± 16419.197357194804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6284.064516129032,
            "unit": "ns",
            "range": "± 556.5421349424853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21192.880434782608,
            "unit": "ns",
            "range": "± 1733.4992295797697"
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
          "id": "89b597462852c69c5dfd8135de638136dd06269e",
          "message": "Changelog",
          "timestamp": "2023-03-21T11:03:16+09:00",
          "tree_id": "f6a36b5cf4aac2e0d4ba99b006852e010686dc9f",
          "url": "https://github.com/greymistcube/libplanet/commit/89b597462852c69c5dfd8135de638136dd06269e"
        },
        "date": 1679365074058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3186654.923076923,
            "unit": "ns",
            "range": "± 37695.69466897941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5102340.142857143,
            "unit": "ns",
            "range": "± 86136.43560864727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23821665,
            "unit": "ns",
            "range": "± 838798.929746025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6001112.2,
            "unit": "ns",
            "range": "± 80281.25334294605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27034905.416666668,
            "unit": "ns",
            "range": "± 271286.7888793094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7507340.176470588,
            "unit": "ns",
            "range": "± 140435.13397952344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19551909.4375,
            "unit": "ns",
            "range": "± 228901.74061547857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50188617.222222224,
            "unit": "ns",
            "range": "± 632112.7275925837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102752222.24,
            "unit": "ns",
            "range": "± 2222475.1291524293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202706647.36507937,
            "unit": "ns",
            "range": "± 9262621.949118994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358320.8333333333,
            "unit": "ns",
            "range": "± 139210.61603330376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469992.5517241377,
            "unit": "ns",
            "range": "± 72206.60884008283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105421.638297872,
            "unit": "ns",
            "range": "± 160947.98118285148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5339535.197802198,
            "unit": "ns",
            "range": "± 334543.23285034543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44693.42682926829,
            "unit": "ns",
            "range": "± 2611.2498782534603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6159905.743923611,
            "unit": "ns",
            "range": "± 129825.61971373427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883911.0634114584,
            "unit": "ns",
            "range": "± 6035.812171123176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382229.2059895834,
            "unit": "ns",
            "range": "± 15119.308447435737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2746285.1244574655,
            "unit": "ns",
            "range": "± 91132.50490005902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837975.2043108259,
            "unit": "ns",
            "range": "± 6125.906471464088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740479.2348307292,
            "unit": "ns",
            "range": "± 5532.398941985072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189998.33333333334,
            "unit": "ns",
            "range": "± 6316.195988997536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199659.59550561797,
            "unit": "ns",
            "range": "± 19072.765433703382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162021.0909090909,
            "unit": "ns",
            "range": "± 2897.7813994435533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11721134.626262626,
            "unit": "ns",
            "range": "± 871754.2791391505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9286569.916666666,
            "unit": "ns",
            "range": "± 119143.59552043861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17646.835294117645,
            "unit": "ns",
            "range": "± 2111.514824362216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56518.9793814433,
            "unit": "ns",
            "range": "± 9893.74219201564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37687.51515151515,
            "unit": "ns",
            "range": "± 1135.2129238939087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91336.57291666667,
            "unit": "ns",
            "range": "± 18084.3620411872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4313.023809523809,
            "unit": "ns",
            "range": "± 383.31084545777406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17821.64367816092,
            "unit": "ns",
            "range": "± 1284.3560596024283"
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
          "id": "4b2538b15d3f85e8e01f75f768711ff2ef686956",
          "message": "Changelog",
          "timestamp": "2023-03-21T11:33:38+09:00",
          "tree_id": "effacef968fbd11c1e416918d7d1244eb1f35d0d",
          "url": "https://github.com/greymistcube/libplanet/commit/4b2538b15d3f85e8e01f75f768711ff2ef686956"
        },
        "date": 1679366771814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3187258.6428571427,
            "unit": "ns",
            "range": "± 30542.883332247016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5247602.466666667,
            "unit": "ns",
            "range": "± 88812.51022066225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23228001.4,
            "unit": "ns",
            "range": "± 303626.0273785594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6025749.75,
            "unit": "ns",
            "range": "± 92152.56228976046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26746512.85714286,
            "unit": "ns",
            "range": "± 306740.7321548625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7625841.333333333,
            "unit": "ns",
            "range": "± 19088.38316009679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19435231.57142857,
            "unit": "ns",
            "range": "± 66713.72167208676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50629074.666666664,
            "unit": "ns",
            "range": "± 892340.5055540871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97046492.07142857,
            "unit": "ns",
            "range": "± 666076.5518673181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198061235.73333332,
            "unit": "ns",
            "range": "± 1819297.818247487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1283110.3636363635,
            "unit": "ns",
            "range": "± 74571.97956401676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2437914.217391304,
            "unit": "ns",
            "range": "± 61298.499230447225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2054474.2631578948,
            "unit": "ns",
            "range": "± 101819.39846052499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4898010.066666666,
            "unit": "ns",
            "range": "± 90049.77704538647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45498.80952380953,
            "unit": "ns",
            "range": "± 2438.076174601855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5885775.4921875,
            "unit": "ns",
            "range": "± 16104.523730833671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911477.404296875,
            "unit": "ns",
            "range": "± 18177.195857963205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333627.7335379464,
            "unit": "ns",
            "range": "± 1233.3957415499788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589209.02109375,
            "unit": "ns",
            "range": "± 3694.6052468599687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801500.6534705529,
            "unit": "ns",
            "range": "± 473.427170162308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751524.1467097356,
            "unit": "ns",
            "range": "± 653.0488691311639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184888.23529411765,
            "unit": "ns",
            "range": "± 5837.691776403781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192792.15789473685,
            "unit": "ns",
            "range": "± 4254.632981470616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159785.7619047619,
            "unit": "ns",
            "range": "± 3188.5791805247977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11094641,
            "unit": "ns",
            "range": "± 56531.139332988096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9116320.933333334,
            "unit": "ns",
            "range": "± 90629.52516423794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16605.263157894737,
            "unit": "ns",
            "range": "± 1034.7544082198185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51167.77777777778,
            "unit": "ns",
            "range": "± 3237.1379985988447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38917.857142857145,
            "unit": "ns",
            "range": "± 1119.2105588906293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82581.7311827957,
            "unit": "ns",
            "range": "± 9366.205302250659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4461.290322580645,
            "unit": "ns",
            "range": "± 331.01696333273486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15825.274725274725,
            "unit": "ns",
            "range": "± 1219.616825673212"
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
          "id": "8708e10d0ab2740e74dff28751d9d53ca2f09187",
          "message": "Changelog",
          "timestamp": "2023-03-21T11:48:12+09:00",
          "tree_id": "db3ec865d2318a231fde499a7a361a3f9994869d",
          "url": "https://github.com/greymistcube/libplanet/commit/8708e10d0ab2740e74dff28751d9d53ca2f09187"
        },
        "date": 1679367850933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4001785.4,
            "unit": "ns",
            "range": "± 117221.59858637323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6521306.875,
            "unit": "ns",
            "range": "± 169305.4631462246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29872260,
            "unit": "ns",
            "range": "± 485124.7708855056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7666354.803921568,
            "unit": "ns",
            "range": "± 312677.25104062294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33114987.133333333,
            "unit": "ns",
            "range": "± 571964.5580569365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7416697.68,
            "unit": "ns",
            "range": "± 543267.1783711315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18929673.407407407,
            "unit": "ns",
            "range": "± 765782.1249970767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54255743.33,
            "unit": "ns",
            "range": "± 5037706.488825553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121343173.83333333,
            "unit": "ns",
            "range": "± 1322231.0305833872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243885603.0526316,
            "unit": "ns",
            "range": "± 5257338.227054389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586176.6956521738,
            "unit": "ns",
            "range": "± 90058.70085290454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3136517.964285714,
            "unit": "ns",
            "range": "± 131735.18263767095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2643342.8860759493,
            "unit": "ns",
            "range": "± 137332.744793205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6223860.769230769,
            "unit": "ns",
            "range": "± 157681.93584461292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55470.83516483517,
            "unit": "ns",
            "range": "± 4427.222869835462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6846847.008928572,
            "unit": "ns",
            "range": "± 88837.27339072904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2099572.6037946427,
            "unit": "ns",
            "range": "± 20639.135480484074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1622520.9768229167,
            "unit": "ns",
            "range": "± 13955.734255369229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3121075.5109375,
            "unit": "ns",
            "range": "± 34795.81673012707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957187.9110677083,
            "unit": "ns",
            "range": "± 12759.81500923372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910002.2072591146,
            "unit": "ns",
            "range": "± 8831.257142171979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205596.898989899,
            "unit": "ns",
            "range": "± 21362.60266881382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224767.93670886077,
            "unit": "ns",
            "range": "± 11675.006928391698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195561.2142857143,
            "unit": "ns",
            "range": "± 10489.551811518952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12936322.139534883,
            "unit": "ns",
            "range": "± 702529.3376352948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10642227.802816901,
            "unit": "ns",
            "range": "± 520809.3087532579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23530.872340425532,
            "unit": "ns",
            "range": "± 2290.869808206361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65265.768421052635,
            "unit": "ns",
            "range": "± 7222.992465631308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49144.079365079364,
            "unit": "ns",
            "range": "± 2258.4751728772267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110474.05102040817,
            "unit": "ns",
            "range": "± 19314.240107104804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5939.452631578947,
            "unit": "ns",
            "range": "± 862.0360579961574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22616.010752688173,
            "unit": "ns",
            "range": "± 1792.7624875704103"
          }
        ]
      }
    ]
  }
}