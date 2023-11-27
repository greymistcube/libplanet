window.BENCHMARK_DATA = {
  "lastUpdate": 1700981237232,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0fcd4d7b6b8719507c713585f521d4de60ba5f70",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-25T17:34:56+09:00",
          "tree_id": "cff9a84c80c43d1a30d8377791ae1ddd00e5e020",
          "url": "https://github.com/greymistcube/libplanet/commit/0fcd4d7b6b8719507c713585f521d4de60ba5f70"
        },
        "date": 1700901965652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209681.8764044944,
            "unit": "ns",
            "range": "± 12064.397238286996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202098.0185185185,
            "unit": "ns",
            "range": "± 8497.01698986566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175017.75,
            "unit": "ns",
            "range": "± 2603.019719305044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3216363.769230769,
            "unit": "ns",
            "range": "± 36304.94720226122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2968513.4285714286,
            "unit": "ns",
            "range": "± 15730.671894859935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13967.717391304348,
            "unit": "ns",
            "range": "± 1848.8449576685482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76987.12121212122,
            "unit": "ns",
            "range": "± 15102.651312899841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72020.83,
            "unit": "ns",
            "range": "± 14979.471509642182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64708.34375,
            "unit": "ns",
            "range": "± 11538.468264054467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4126.50505050505,
            "unit": "ns",
            "range": "± 1681.5165796468657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14302.278350515464,
            "unit": "ns",
            "range": "± 2682.7680075121266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3623482.249739583,
            "unit": "ns",
            "range": "± 55350.60119563501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1140685.9854266827,
            "unit": "ns",
            "range": "± 3283.9609914600624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750685.1729166667,
            "unit": "ns",
            "range": "± 12657.298334498566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941781.7021484375,
            "unit": "ns",
            "range": "± 2696.801431099335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615735.2857259115,
            "unit": "ns",
            "range": "± 1950.5222122353923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569773.2791341146,
            "unit": "ns",
            "range": "± 1204.6038170502463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42341.084210526315,
            "unit": "ns",
            "range": "± 5434.431393191125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2484524.5476190476,
            "unit": "ns",
            "range": "± 76633.0455775945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547612.754237288,
            "unit": "ns",
            "range": "± 106356.10238488065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224037.1428571427,
            "unit": "ns",
            "range": "± 103697.20331646106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3024083.1086956523,
            "unit": "ns",
            "range": "± 140210.2136701109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7450421.4375,
            "unit": "ns",
            "range": "± 226990.65265583884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5691783.433333334,
            "unit": "ns",
            "range": "± 60502.60963494133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15690110.8,
            "unit": "ns",
            "range": "± 135016.89092596632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37611375.9,
            "unit": "ns",
            "range": "± 162830.05242750142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76859467.65384616,
            "unit": "ns",
            "range": "± 191099.2357781013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154664951.14285713,
            "unit": "ns",
            "range": "± 638699.5449352063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078050.2,
            "unit": "ns",
            "range": "± 139766.09928514084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1950042.6739130435,
            "unit": "ns",
            "range": "± 73615.03426468879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545875.4545454546,
            "unit": "ns",
            "range": "± 132461.4575883647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6507503.313953488,
            "unit": "ns",
            "range": "± 191622.60739478024"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "a22af937ed76ef36db3ba0b1294f939dc8193d48",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-26T13:49:27+09:00",
          "tree_id": "a45679a776e3de07e65041cfde1b71ad9fcacfba",
          "url": "https://github.com/greymistcube/libplanet/commit/a22af937ed76ef36db3ba0b1294f939dc8193d48"
        },
        "date": 1700974739658,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200544.46913580247,
            "unit": "ns",
            "range": "± 9707.591108362594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197587.56666666668,
            "unit": "ns",
            "range": "± 8709.534125910266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159987.2857142857,
            "unit": "ns",
            "range": "± 3715.6169358917655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070369,
            "unit": "ns",
            "range": "± 52497.46071954338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2943846.6,
            "unit": "ns",
            "range": "± 51021.464193023705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12129.532608695652,
            "unit": "ns",
            "range": "± 894.5636477099374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65623.83333333333,
            "unit": "ns",
            "range": "± 5817.232521011066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50650.230769230766,
            "unit": "ns",
            "range": "± 823.4209285906119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60860.858695652176,
            "unit": "ns",
            "range": "± 7962.986012329854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2799.5425531914893,
            "unit": "ns",
            "range": "± 554.7339702412748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13782.494949494949,
            "unit": "ns",
            "range": "± 2778.4037972707492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3637421.099739583,
            "unit": "ns",
            "range": "± 62922.30095888231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1158189.6983816964,
            "unit": "ns",
            "range": "± 3915.911552994198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736656.0730919471,
            "unit": "ns",
            "range": "± 5606.5899884518285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955008.7811197916,
            "unit": "ns",
            "range": "± 23866.890383826387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619969.1319173177,
            "unit": "ns",
            "range": "± 1021.4601909866689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565234.3770345052,
            "unit": "ns",
            "range": "± 950.2544686507782"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39508.166666666664,
            "unit": "ns",
            "range": "± 522.3995046171488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440374.7333333334,
            "unit": "ns",
            "range": "± 81794.66540518063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2615591.9545454546,
            "unit": "ns",
            "range": "± 62148.92072041253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3125917.1428571427,
            "unit": "ns",
            "range": "± 72054.95132070086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2915860.492063492,
            "unit": "ns",
            "range": "± 133763.02386043096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6540580.818181818,
            "unit": "ns",
            "range": "± 107550.75341554369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5683120.071428572,
            "unit": "ns",
            "range": "± 19295.276470458477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14962303.5,
            "unit": "ns",
            "range": "± 274250.385028961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37405876.416666664,
            "unit": "ns",
            "range": "± 163526.9841682841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74886232.64285715,
            "unit": "ns",
            "range": "± 257575.11761712935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150196683.3846154,
            "unit": "ns",
            "range": "± 242807.78443642016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966611.693877551,
            "unit": "ns",
            "range": "± 75895.39985454046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844409.3,
            "unit": "ns",
            "range": "± 82471.95309373313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1383069.4105263157,
            "unit": "ns",
            "range": "± 123118.31844296481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5686819.80927835,
            "unit": "ns",
            "range": "± 384215.3945966366"
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
          "id": "4bcec1ab9332422ae151257e73de795a2d23e80a",
          "message": "Trie based account metrics",
          "timestamp": "2023-11-26T15:36:11+09:00",
          "tree_id": "de27242853a6c6a8f8d80cc90421ec9179acfb05",
          "url": "https://github.com/greymistcube/libplanet/commit/4bcec1ab9332422ae151257e73de795a2d23e80a"
        },
        "date": 1700981230952,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205525.7068965517,
            "unit": "ns",
            "range": "± 8212.39722466839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190253.1081081081,
            "unit": "ns",
            "range": "± 9427.397417651615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163513.9,
            "unit": "ns",
            "range": "± 3331.5332790584107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3128910.2666666666,
            "unit": "ns",
            "range": "± 56904.160378239314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800999,
            "unit": "ns",
            "range": "± 47779.679071273036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16649.197802197803,
            "unit": "ns",
            "range": "± 3537.1649954284017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59853.09574468085,
            "unit": "ns",
            "range": "± 5169.157419889107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52175.94,
            "unit": "ns",
            "range": "± 1395.6023514358712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63862.22448979592,
            "unit": "ns",
            "range": "± 12126.673428600696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6443.959183673469,
            "unit": "ns",
            "range": "± 1380.1431041770902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13030.536082474227,
            "unit": "ns",
            "range": "± 1941.0970752271323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727251.81640625,
            "unit": "ns",
            "range": "± 24164.428381187554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1167148.3994140625,
            "unit": "ns",
            "range": "± 5398.42741839658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730518.2892717634,
            "unit": "ns",
            "range": "± 4202.21951609405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932837.8236177885,
            "unit": "ns",
            "range": "± 8591.927668176008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620834.7128255208,
            "unit": "ns",
            "range": "± 986.2257093518724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566054.5124699519,
            "unit": "ns",
            "range": "± 2419.7857871924325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39928.60824742268,
            "unit": "ns",
            "range": "± 5705.040301779759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435017.5857142857,
            "unit": "ns",
            "range": "± 72452.19035635579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2609285.8666666667,
            "unit": "ns",
            "range": "± 39154.50218204555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170866.289473684,
            "unit": "ns",
            "range": "± 69002.07005798124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2967616.8857142855,
            "unit": "ns",
            "range": "± 89019.72938022071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6703141.76,
            "unit": "ns",
            "range": "± 176368.78604061433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5616506.7,
            "unit": "ns",
            "range": "± 25843.556246328462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14528300.5,
            "unit": "ns",
            "range": "± 112053.3845466688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36772245.85714286,
            "unit": "ns",
            "range": "± 192465.5563669299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75494319.03333333,
            "unit": "ns",
            "range": "± 870614.3638684833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152470769.69230768,
            "unit": "ns",
            "range": "± 541494.6050724459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950704.945652174,
            "unit": "ns",
            "range": "± 81931.2486068151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866113.140625,
            "unit": "ns",
            "range": "± 86095.60321127463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1383944.1956521738,
            "unit": "ns",
            "range": "± 107474.18869062727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6187927.255555555,
            "unit": "ns",
            "range": "± 344662.722138136"
          }
        ]
      }
    ]
  }
}