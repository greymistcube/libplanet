window.BENCHMARK_DATA = {
  "lastUpdate": 1688105630854,
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
          "id": "08910b0af94fe9e356b243c6ed37f07dc619cca2",
          "message": "Move KeyConverters",
          "timestamp": "2023-06-30T11:40:45+09:00",
          "tree_id": "597224e5572792ee3be3cb7d08fe6365a148d443",
          "url": "https://github.com/greymistcube/libplanet/commit/08910b0af94fe9e356b243c6ed37f07dc619cca2"
        },
        "date": 1688094896905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788913.6363636365,
            "unit": "ns",
            "range": "± 39734.99471743774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2854434.375,
            "unit": "ns",
            "range": "± 125456.39755904066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051459.793814433,
            "unit": "ns",
            "range": "± 175350.26474399856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5431055.102040816,
            "unit": "ns",
            "range": "± 401982.50388208317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60119.58762886598,
            "unit": "ns",
            "range": "± 7979.121703640822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7785623.80952381,
            "unit": "ns",
            "range": "± 177789.55229360893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21989050,
            "unit": "ns",
            "range": "± 214820.19225389406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53871546.15384615,
            "unit": "ns",
            "range": "± 387509.1646558926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108537107.14285715,
            "unit": "ns",
            "range": "± 1114035.9043131873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222496493.75,
            "unit": "ns",
            "range": "± 4119805.4907108983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5275437.348790322,
            "unit": "ns",
            "range": "± 159623.2655999539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1621149.86328125,
            "unit": "ns",
            "range": "± 9510.719758380015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1238646.303013393,
            "unit": "ns",
            "range": "± 16450.621461126826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2764855.887276786,
            "unit": "ns",
            "range": "± 35482.49794068632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887710.5338541666,
            "unit": "ns",
            "range": "± 10455.997056346543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797764.0694754465,
            "unit": "ns",
            "range": "± 8257.755252410827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3773592.3076923075,
            "unit": "ns",
            "range": "± 36185.435871780915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797740,
            "unit": "ns",
            "range": "± 143916.45050956728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4501816.216216216,
            "unit": "ns",
            "range": "± 150972.61251541527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3945603.2258064514,
            "unit": "ns",
            "range": "± 117802.556519715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650622.413793104,
            "unit": "ns",
            "range": "± 148882.91635795974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304136.08247422683,
            "unit": "ns",
            "range": "± 19753.471137831122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302187.2340425532,
            "unit": "ns",
            "range": "± 20957.038666915003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275419.1919191919,
            "unit": "ns",
            "range": "± 23730.73300882761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4469778.571428572,
            "unit": "ns",
            "range": "± 78935.44761455331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4182365,
            "unit": "ns",
            "range": "± 94164.94081635356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28706.060606060608,
            "unit": "ns",
            "range": "± 3774.966365083789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117426,
            "unit": "ns",
            "range": "± 21122.77539538875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101398,
            "unit": "ns",
            "range": "± 18371.403887783883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134251.16279069768,
            "unit": "ns",
            "range": "± 12188.285061880446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9283.673469387755,
            "unit": "ns",
            "range": "± 2040.3503781151014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29529.166666666668,
            "unit": "ns",
            "range": "± 2857.3420356639012"
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
          "id": "5df2998d3b17ea44161fc3a351c346408e26b893",
          "message": "Changelog",
          "timestamp": "2023-06-30T12:00:26+09:00",
          "tree_id": "f60c43e0317c439fc9293135883f8bff07a65377",
          "url": "https://github.com/greymistcube/libplanet/commit/5df2998d3b17ea44161fc3a351c346408e26b893"
        },
        "date": 1688095086209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409677.551020408,
            "unit": "ns",
            "range": "± 149812.79695013756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596143.4210526315,
            "unit": "ns",
            "range": "± 130639.64516743638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1798302.0202020202,
            "unit": "ns",
            "range": "± 166419.32713737528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4951675.757575758,
            "unit": "ns",
            "range": "± 292673.29354289704"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48040,
            "unit": "ns",
            "range": "± 3204.6641540769187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7414533.333333333,
            "unit": "ns",
            "range": "± 83043.94419020972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19547185.714285713,
            "unit": "ns",
            "range": "± 137949.10910657127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49808621.428571425,
            "unit": "ns",
            "range": "± 511851.0588331057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99713065.38461539,
            "unit": "ns",
            "range": "± 1366841.7494636762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200167942.85714287,
            "unit": "ns",
            "range": "± 2723771.0218666396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4767220.145089285,
            "unit": "ns",
            "range": "± 30716.64004080077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512682.4776785714,
            "unit": "ns",
            "range": "± 4855.921293578594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185135.0911458333,
            "unit": "ns",
            "range": "± 9011.431580677297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657525.1302083335,
            "unit": "ns",
            "range": "± 29732.253399521658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825586.3606770834,
            "unit": "ns",
            "range": "± 5500.3682947909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757089.1462053572,
            "unit": "ns",
            "range": "± 6745.970444412091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228981.8181818184,
            "unit": "ns",
            "range": "± 139471.96454881137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3272624.4897959186,
            "unit": "ns",
            "range": "± 129293.7458699702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4038851.724137931,
            "unit": "ns",
            "range": "± 117102.56377786848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3694019.230769231,
            "unit": "ns",
            "range": "± 100990.04314973143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6118693.023255814,
            "unit": "ns",
            "range": "± 224796.40671944834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260831.25,
            "unit": "ns",
            "range": "± 8762.945590697907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249638.59649122806,
            "unit": "ns",
            "range": "± 10214.743448039857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221745.7627118644,
            "unit": "ns",
            "range": "± 9829.921282771404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3961517.6470588236,
            "unit": "ns",
            "range": "± 78048.2802124278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3642992.8571428573,
            "unit": "ns",
            "range": "± 46152.76413566838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21002.105263157893,
            "unit": "ns",
            "range": "± 2048.298668556493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92627.55102040817,
            "unit": "ns",
            "range": "± 6818.996821528021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76348.91304347826,
            "unit": "ns",
            "range": "± 4532.046927712999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101789.58333333333,
            "unit": "ns",
            "range": "± 14375.311285721902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5835.714285714285,
            "unit": "ns",
            "range": "± 1095.4686423589465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19485.263157894737,
            "unit": "ns",
            "range": "± 1953.4458599826971"
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
          "id": "32a2560ed058199c038d2c9b6cd64e02d5a39d9d",
          "message": "Changelog",
          "timestamp": "2023-06-30T14:55:17+09:00",
          "tree_id": "3c96268fafe854264ee3312471a2c2e151e08e15",
          "url": "https://github.com/greymistcube/libplanet/commit/32a2560ed058199c038d2c9b6cd64e02d5a39d9d"
        },
        "date": 1688105606793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518344,
            "unit": "ns",
            "range": "± 132057.76155864066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799483.9285714286,
            "unit": "ns",
            "range": "± 118815.94517539335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1928232.9787234042,
            "unit": "ns",
            "range": "± 127873.24906109332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5259255.913978495,
            "unit": "ns",
            "range": "± 333085.6729661257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55021.64948453608,
            "unit": "ns",
            "range": "± 6570.756342882133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7404776.923076923,
            "unit": "ns",
            "range": "± 200520.54719193705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20339906.666666668,
            "unit": "ns",
            "range": "± 368468.35581647337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50327135.71428572,
            "unit": "ns",
            "range": "± 496585.08699554566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103436717.39130434,
            "unit": "ns",
            "range": "± 2547425.5426093102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205360169.23076922,
            "unit": "ns",
            "range": "± 3070829.538410486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4961398.995535715,
            "unit": "ns",
            "range": "± 59443.35850366288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1552459.0494791667,
            "unit": "ns",
            "range": "± 26559.95457012025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210212.2330729167,
            "unit": "ns",
            "range": "± 20958.977215577197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716708.5186298075,
            "unit": "ns",
            "range": "± 25118.451461231383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835113.28125,
            "unit": "ns",
            "range": "± 9490.360401702883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778466.7410714285,
            "unit": "ns",
            "range": "± 8981.802748345059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471808.510638298,
            "unit": "ns",
            "range": "± 134249.28277646197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3513459.2592592593,
            "unit": "ns",
            "range": "± 141185.16213465252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4402860,
            "unit": "ns",
            "range": "± 100976.19000223975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4042986.6666666665,
            "unit": "ns",
            "range": "± 71569.48538375302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6389713.888888889,
            "unit": "ns",
            "range": "± 196682.1411789341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284182.35294117645,
            "unit": "ns",
            "range": "± 13020.316400040185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270341.3333333333,
            "unit": "ns",
            "range": "± 13648.790594213273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260756.70103092783,
            "unit": "ns",
            "range": "± 18193.07278435311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4130021.4285714286,
            "unit": "ns",
            "range": "± 67832.4880022208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3784346.153846154,
            "unit": "ns",
            "range": "± 44838.83390144112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25616.494845360823,
            "unit": "ns",
            "range": "± 2824.398181190226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104711,
            "unit": "ns",
            "range": "± 12028.341069694063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92394.89795918367,
            "unit": "ns",
            "range": "± 10876.771072269219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114314.11764705883,
            "unit": "ns",
            "range": "± 9733.63281838478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7727.835051546392,
            "unit": "ns",
            "range": "± 1890.6977475283013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25032.63157894737,
            "unit": "ns",
            "range": "± 2899.3558384088637"
          }
        ]
      }
    ]
  }
}