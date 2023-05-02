window.BENCHMARK_DATA = {
  "lastUpdate": 1683016656956,
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
          "id": "cbe34e88fd4edd25388fae96680f03f2f0005c78",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:13:12+09:00",
          "tree_id": "ce6a0112c356adf178ade77c4273046864442982",
          "url": "https://github.com/greymistcube/libplanet/commit/cbe34e88fd4edd25388fae96680f03f2f0005c78"
        },
        "date": 1683016441503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9810459.879120879,
            "unit": "ns",
            "range": "± 1998918.437545569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20830125.75,
            "unit": "ns",
            "range": "± 399859.7883291092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51412937.72,
            "unit": "ns",
            "range": "± 1365948.6187867913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106075011.16666667,
            "unit": "ns",
            "range": "± 5344031.864158365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207707269.08,
            "unit": "ns",
            "range": "± 8379128.938861468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70026.03296703297,
            "unit": "ns",
            "range": "± 10295.723533422939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325005.5268817204,
            "unit": "ns",
            "range": "± 26852.005920370997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327090.0520833333,
            "unit": "ns",
            "range": "± 33509.75772309339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295249.31111111114,
            "unit": "ns",
            "range": "± 26608.260726633456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4232196.37037037,
            "unit": "ns",
            "range": "± 178019.8638116297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3967720.459770115,
            "unit": "ns",
            "range": "± 281033.79748415947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23228.605263157893,
            "unit": "ns",
            "range": "± 5007.691767657592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105828.27472527472,
            "unit": "ns",
            "range": "± 19002.165876005896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106368.98901098901,
            "unit": "ns",
            "range": "± 13621.837406242235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114598.82795698925,
            "unit": "ns",
            "range": "± 15390.204151980723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7593.373684210526,
            "unit": "ns",
            "range": "± 1285.7277618110304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20826.01020408163,
            "unit": "ns",
            "range": "± 4993.426739523429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570351.2736842106,
            "unit": "ns",
            "range": "± 181877.94750726712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041727.966666667,
            "unit": "ns",
            "range": "± 192285.58568010648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2639671.1808510637,
            "unit": "ns",
            "range": "± 318469.31312731554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6857926.528735632,
            "unit": "ns",
            "range": "± 688529.2338384303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343776.775862069,
            "unit": "ns",
            "range": "± 143441.9285701755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3428707.930379747,
            "unit": "ns",
            "range": "± 176492.18424953378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4506793.449438202,
            "unit": "ns",
            "range": "± 241002.59039620732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4513794.395833333,
            "unit": "ns",
            "range": "± 349502.5561744782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7919929.287356322,
            "unit": "ns",
            "range": "± 431720.470434713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7792965.046703297,
            "unit": "ns",
            "range": "± 1529409.3605018847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2151508.4893785114,
            "unit": "ns",
            "range": "± 204948.31575508448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447535.608483356,
            "unit": "ns",
            "range": "± 182055.42700987024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850199.2509653377,
            "unit": "ns",
            "range": "± 223559.794395554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817535.9737025669,
            "unit": "ns",
            "range": "± 12435.144723783107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823952.1481370192,
            "unit": "ns",
            "range": "± 9124.894409123985"
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
          "id": "02a90bf9b723dac067810660ba4256f7507d36bd",
          "message": "Removed unnecessary usage of BlockChain<T>.EvaluateAndSign()",
          "timestamp": "2023-05-02T17:09:48+09:00",
          "tree_id": "d747245eadd7dd1eaffb8294c75b033f9a8e9153",
          "url": "https://github.com/greymistcube/libplanet/commit/02a90bf9b723dac067810660ba4256f7507d36bd"
        },
        "date": 1683016441452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12414098.303030303,
            "unit": "ns",
            "range": "± 3830319.0006536134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32545474.732323233,
            "unit": "ns",
            "range": "± 5935622.584567746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65855574.135416664,
            "unit": "ns",
            "range": "± 14808829.856846493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152408665.78723404,
            "unit": "ns",
            "range": "± 45122470.62593687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289602653.09183675,
            "unit": "ns",
            "range": "± 65830801.81708121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76547.9213483146,
            "unit": "ns",
            "range": "± 10879.46326406768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412406.90449438203,
            "unit": "ns",
            "range": "± 88647.24761349426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365196.06666666665,
            "unit": "ns",
            "range": "± 41119.2898869875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346568.72631578945,
            "unit": "ns",
            "range": "± 27396.151531036874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4523495.351851852,
            "unit": "ns",
            "range": "± 189650.55562112693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4024980.8928571427,
            "unit": "ns",
            "range": "± 268302.6183069443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25887.284210526315,
            "unit": "ns",
            "range": "± 3192.8277224387743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120089.56185567011,
            "unit": "ns",
            "range": "± 11382.855729501012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116514.53333333334,
            "unit": "ns",
            "range": "± 5703.851582384825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126544.83333333333,
            "unit": "ns",
            "range": "± 14143.736083262529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8647.305263157894,
            "unit": "ns",
            "range": "± 1174.4286258910884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25483.270833333332,
            "unit": "ns",
            "range": "± 1905.5266020552826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1804886.9101123596,
            "unit": "ns",
            "range": "± 271558.4168938627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3412228.0280898875,
            "unit": "ns",
            "range": "± 278204.4515720853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2856435.7252747254,
            "unit": "ns",
            "range": "± 315166.2756814803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12305883.434343435,
            "unit": "ns",
            "range": "± 5085011.596495131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4108349.6086956523,
            "unit": "ns",
            "range": "± 675175.803413508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4429314.597701149,
            "unit": "ns",
            "range": "± 1303955.6449834022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4928324.7272727275,
            "unit": "ns",
            "range": "± 621065.8401784351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5131434.510989011,
            "unit": "ns",
            "range": "± 1089696.8414625998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11088762.727272727,
            "unit": "ns",
            "range": "± 3145354.487344623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7475628.388237847,
            "unit": "ns",
            "range": "± 366391.0184740862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2133830.4497538526,
            "unit": "ns",
            "range": "± 105499.13867121708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389083.80197218,
            "unit": "ns",
            "range": "± 50071.0877546256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212475.956167763,
            "unit": "ns",
            "range": "± 239193.03477665051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911649.9644949777,
            "unit": "ns",
            "range": "± 24685.77714974982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750324.0652901785,
            "unit": "ns",
            "range": "± 11637.791971201967"
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
          "id": "671ae7a4ac1344a77309ce3c06a77c076b0dd4cf",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:14:32+09:00",
          "tree_id": "58aa7a02d3106cd017adf090d986f5f85ce79ca8",
          "url": "https://github.com/greymistcube/libplanet/commit/671ae7a4ac1344a77309ce3c06a77c076b0dd4cf"
        },
        "date": 1683016630888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9091201.177083334,
            "unit": "ns",
            "range": "± 524136.696050181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22178495.85714286,
            "unit": "ns",
            "range": "± 1124171.976693884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55911291.05555555,
            "unit": "ns",
            "range": "± 2752637.6275848174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110325452.10714285,
            "unit": "ns",
            "range": "± 2729731.2689970913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226572633.50980392,
            "unit": "ns",
            "range": "± 9108785.568712372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82553.85164835164,
            "unit": "ns",
            "range": "± 13824.953417139624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353392.70430107525,
            "unit": "ns",
            "range": "± 23706.5721063568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363243.09375,
            "unit": "ns",
            "range": "± 54075.8056788077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342948.43333333335,
            "unit": "ns",
            "range": "± 31487.459907348097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4674111.427083333,
            "unit": "ns",
            "range": "± 377184.532025478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3979395.9693877553,
            "unit": "ns",
            "range": "± 290821.9221201416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26069.56976744186,
            "unit": "ns",
            "range": "± 2761.089132041058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127472.24731182796,
            "unit": "ns",
            "range": "± 17863.332562917516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123188.25925925926,
            "unit": "ns",
            "range": "± 6237.090649449024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134025.84736842106,
            "unit": "ns",
            "range": "± 20367.520683764717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8796.288888888888,
            "unit": "ns",
            "range": "± 1087.216342904967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25278.127659574468,
            "unit": "ns",
            "range": "± 2842.5874561556398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692497.212643678,
            "unit": "ns",
            "range": "± 202479.04375416855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3451877.904255319,
            "unit": "ns",
            "range": "± 451295.0506727521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3196827.258241758,
            "unit": "ns",
            "range": "± 670751.0451631123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8320221.595744681,
            "unit": "ns",
            "range": "± 1489918.4129751297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3415019.005263158,
            "unit": "ns",
            "range": "± 216496.20605829472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3727216.8440860217,
            "unit": "ns",
            "range": "± 328364.6491811482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4768053.244680851,
            "unit": "ns",
            "range": "± 427050.9918431132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4934723.223404256,
            "unit": "ns",
            "range": "± 486742.84919295576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7659311.1228070175,
            "unit": "ns",
            "range": "± 316622.66567105614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7659958.096578664,
            "unit": "ns",
            "range": "± 220981.98507822727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2189869.2041666666,
            "unit": "ns",
            "range": "± 35515.16687250815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415273.7601207385,
            "unit": "ns",
            "range": "± 33761.51862245828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3046029.131793478,
            "unit": "ns",
            "range": "± 73406.68016202956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918885.6554129465,
            "unit": "ns",
            "range": "± 13100.201385182576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789060.46734375,
            "unit": "ns",
            "range": "± 20246.538813509735"
          }
        ]
      }
    ]
  }
}