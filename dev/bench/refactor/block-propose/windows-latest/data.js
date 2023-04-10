window.BENCHMARK_DATA = {
  "lastUpdate": 1681107308636,
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
          "id": "ce471d9b386cefda7fe85d4afa92224edf566391",
          "message": "Removed unnecessary overload",
          "timestamp": "2023-04-10T14:53:42+09:00",
          "tree_id": "40772124c88aad575c334353fcd59a8dfc5b0f5f",
          "url": "https://github.com/greymistcube/libplanet/commit/ce471d9b386cefda7fe85d4afa92224edf566391"
        },
        "date": 1681107157946,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633045.1612903227,
            "unit": "ns",
            "range": "± 111284.03877517658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3165487.8947368423,
            "unit": "ns",
            "range": "± 209344.29555310818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2618794.382022472,
            "unit": "ns",
            "range": "± 143618.11053145464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6487867.796610169,
            "unit": "ns",
            "range": "± 285083.1182127222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59947.95918367347,
            "unit": "ns",
            "range": "± 6101.600763291999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8840704.166666666,
            "unit": "ns",
            "range": "± 224977.3389151946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23403292.307692308,
            "unit": "ns",
            "range": "± 246025.42369146345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59635058.333333336,
            "unit": "ns",
            "range": "± 401456.12339974527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121057027.77777778,
            "unit": "ns",
            "range": "± 3757168.9356756834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240762521.42857143,
            "unit": "ns",
            "range": "± 2652155.2458993886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5971610.442708333,
            "unit": "ns",
            "range": "± 99992.25059427643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900126.5625,
            "unit": "ns",
            "range": "± 40463.827280200625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411939.6065848214,
            "unit": "ns",
            "range": "± 8662.333411996764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3218534.7135416665,
            "unit": "ns",
            "range": "± 48787.41230103308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003155.3013392857,
            "unit": "ns",
            "range": "± 14942.519474235987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938612.7022879465,
            "unit": "ns",
            "range": "± 13299.660533252032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3822184.210526316,
            "unit": "ns",
            "range": "± 109350.48171847525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4086895,
            "unit": "ns",
            "range": "± 142586.15200498872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4740247.826086956,
            "unit": "ns",
            "range": "± 180569.78397300577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5205319.230769231,
            "unit": "ns",
            "range": "± 138889.65985768923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8379258.620689655,
            "unit": "ns",
            "range": "± 223418.245701454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369344.23076923075,
            "unit": "ns",
            "range": "± 15185.124473610174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307555.6603773585,
            "unit": "ns",
            "range": "± 12839.803124154734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264855.4054054054,
            "unit": "ns",
            "range": "± 8933.580405350302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6358126.666666667,
            "unit": "ns",
            "range": "± 106302.3347859885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4480918.75,
            "unit": "ns",
            "range": "± 85523.24610887966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27311.340206185567,
            "unit": "ns",
            "range": "± 3084.8715629888807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118555.10204081633,
            "unit": "ns",
            "range": "± 9098.375548324344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108483.67346938775,
            "unit": "ns",
            "range": "± 10542.86238131029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 215909.13978494622,
            "unit": "ns",
            "range": "± 16378.759021307866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9303.157894736842,
            "unit": "ns",
            "range": "± 976.8003162278126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25940,
            "unit": "ns",
            "range": "± 2468.1115185674057"
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
          "id": "5841e330c397ad6efec76dec442678bb1aaca5f8",
          "message": "Cleanup",
          "timestamp": "2023-04-10T14:55:23+09:00",
          "tree_id": "cd01a23fb276887eb567d50a9df864b11d2670d7",
          "url": "https://github.com/greymistcube/libplanet/commit/5841e330c397ad6efec76dec442678bb1aaca5f8"
        },
        "date": 1681107173765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434660.606060606,
            "unit": "ns",
            "range": "± 131347.41191190435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661645.8333333335,
            "unit": "ns",
            "range": "± 158986.71372272237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315473.6842105263,
            "unit": "ns",
            "range": "± 207477.64925025022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5789986.666666667,
            "unit": "ns",
            "range": "± 289613.39017000876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51908.602150537634,
            "unit": "ns",
            "range": "± 3810.559011654283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7187232.142857143,
            "unit": "ns",
            "range": "± 191482.50099638526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20153146.666666668,
            "unit": "ns",
            "range": "± 288917.59543575905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50825461.538461536,
            "unit": "ns",
            "range": "± 167228.9076807672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101851866.66666667,
            "unit": "ns",
            "range": "± 2333516.3109207815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203298128.57142857,
            "unit": "ns",
            "range": "± 2806280.5590396617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4944383.147321428,
            "unit": "ns",
            "range": "± 64371.22971122441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542258.3723958333,
            "unit": "ns",
            "range": "± 24462.961289469094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1203590.703125,
            "unit": "ns",
            "range": "± 20635.809010762343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715341.25,
            "unit": "ns",
            "range": "± 45710.96498947385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848747.6725260416,
            "unit": "ns",
            "range": "± 13592.235858729244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783376.7926897322,
            "unit": "ns",
            "range": "± 9017.698445252821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3275737.8048780486,
            "unit": "ns",
            "range": "± 115336.00304137896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3385155.8441558443,
            "unit": "ns",
            "range": "± 167573.80973415117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3944059.090909091,
            "unit": "ns",
            "range": "± 185040.9509580745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4287964.285714285,
            "unit": "ns",
            "range": "± 181619.2144706475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7012887.5,
            "unit": "ns",
            "range": "± 248171.51243310206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314981.25,
            "unit": "ns",
            "range": "± 8751.900715217938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263127.2727272727,
            "unit": "ns",
            "range": "± 9099.20424929574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232247.95918367346,
            "unit": "ns",
            "range": "± 13866.872409858921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5343933.333333333,
            "unit": "ns",
            "range": "± 95353.64751931673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3724206.6666666665,
            "unit": "ns",
            "range": "± 68929.11956357432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23676.842105263157,
            "unit": "ns",
            "range": "± 2014.0175067156747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98495.69892473119,
            "unit": "ns",
            "range": "± 6380.709957406177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90364.89361702128,
            "unit": "ns",
            "range": "± 7463.066155419894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 193506.84210526315,
            "unit": "ns",
            "range": "± 18495.839972939622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9007.731958762886,
            "unit": "ns",
            "range": "± 1271.3866324105213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23166.666666666668,
            "unit": "ns",
            "range": "± 2677.810050520138"
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
          "id": "510331dc7accb4078a3b69355e76012f61afc8b9",
          "message": "Cleanup",
          "timestamp": "2023-04-10T14:55:57+09:00",
          "tree_id": "1fe94d209619d87dda3737690767b19bc5d1c75a",
          "url": "https://github.com/greymistcube/libplanet/commit/510331dc7accb4078a3b69355e76012f61afc8b9"
        },
        "date": 1681107278669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616220,
            "unit": "ns",
            "range": "± 120796.93757566693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2985980.701754386,
            "unit": "ns",
            "range": "± 128101.30120700302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2607170.5263157897,
            "unit": "ns",
            "range": "± 162739.56604373452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6538850,
            "unit": "ns",
            "range": "± 319148.1566850934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59304.255319148935,
            "unit": "ns",
            "range": "± 4443.689857203629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8608114.814814815,
            "unit": "ns",
            "range": "± 241217.97787271754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23694150,
            "unit": "ns",
            "range": "± 454892.105888858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58218306.666666664,
            "unit": "ns",
            "range": "± 584371.7719136713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117353942.85714285,
            "unit": "ns",
            "range": "± 1735612.050640831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239891206.66666666,
            "unit": "ns",
            "range": "± 4465917.557051513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5822867.083333333,
            "unit": "ns",
            "range": "± 52377.899722574104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850552.5846354167,
            "unit": "ns",
            "range": "± 15135.653557254487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388200.9440104167,
            "unit": "ns",
            "range": "± 14377.551691066119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3166022.5446428573,
            "unit": "ns",
            "range": "± 25920.090902151238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001036.484375,
            "unit": "ns",
            "range": "± 8108.396491196472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919357.1028645834,
            "unit": "ns",
            "range": "± 5795.53699872902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3715904.4444444445,
            "unit": "ns",
            "range": "± 140715.06018055126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3963507.5,
            "unit": "ns",
            "range": "± 137902.47647968752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4789220,
            "unit": "ns",
            "range": "± 81535.19135055383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5084292.857142857,
            "unit": "ns",
            "range": "± 108392.11950796317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8125760,
            "unit": "ns",
            "range": "± 187056.21558631427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372962.7659574468,
            "unit": "ns",
            "range": "± 13529.976654455846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306580.8510638298,
            "unit": "ns",
            "range": "± 11908.977948660566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262207.8125,
            "unit": "ns",
            "range": "± 12151.23358670104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6242122.222222222,
            "unit": "ns",
            "range": "± 132959.7929298467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4329150,
            "unit": "ns",
            "range": "± 75026.15697721182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24990.425531914894,
            "unit": "ns",
            "range": "± 2276.4842327889755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112455.31914893616,
            "unit": "ns",
            "range": "± 10262.19303126906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103381.91489361702,
            "unit": "ns",
            "range": "± 11890.883494183638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216289.69072164947,
            "unit": "ns",
            "range": "± 23126.89850106042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9096.808510638299,
            "unit": "ns",
            "range": "± 1296.4552273356494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25134.69387755102,
            "unit": "ns",
            "range": "± 2588.360227674956"
          }
        ]
      }
    ]
  }
}