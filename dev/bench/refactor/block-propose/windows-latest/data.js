window.BENCHMARK_DATA = {
  "lastUpdate": 1681262570547,
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
          "id": "9c5ecdafd81d5fd4fcc2b0c6f4b6fb6c66ce450f",
          "message": "[skip changelog] Simple renaming",
          "timestamp": "2023-04-10T18:24:59+09:00",
          "tree_id": "8aa3d233e946edd28cf7b4d11cb181eb4d19981d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c5ecdafd81d5fd4fcc2b0c6f4b6fb6c66ce450f"
        },
        "date": 1681120099753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1819044.7368421052,
            "unit": "ns",
            "range": "± 179684.04916740934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3570166.0714285714,
            "unit": "ns",
            "range": "± 152744.73807545798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2939588.5416666665,
            "unit": "ns",
            "range": "± 255981.24514761733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7492403.157894737,
            "unit": "ns",
            "range": "± 429376.6239593016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72714.73684210527,
            "unit": "ns",
            "range": "± 17329.98857239591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9497421.666666666,
            "unit": "ns",
            "range": "± 420894.0766509871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25643613.333333332,
            "unit": "ns",
            "range": "± 478162.4945958175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67420505.26315789,
            "unit": "ns",
            "range": "± 1479532.9005668138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134795652.3809524,
            "unit": "ns",
            "range": "± 3108353.737369518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267107021.42857143,
            "unit": "ns",
            "range": "± 4648571.984934823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6011486.588541667,
            "unit": "ns",
            "range": "± 38105.10552984916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950558.6588541667,
            "unit": "ns",
            "range": "± 23466.597579198868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482550.8723958333,
            "unit": "ns",
            "range": "± 20051.016976422434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3209738.9508928573,
            "unit": "ns",
            "range": "± 33978.52314787508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1065689.74609375,
            "unit": "ns",
            "range": "± 20812.73782374658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1015950.87890625,
            "unit": "ns",
            "range": "± 18373.718504653363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4063275.789473684,
            "unit": "ns",
            "range": "± 254507.7734530722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4407907.216494845,
            "unit": "ns",
            "range": "± 332321.86087919807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5067592.929292929,
            "unit": "ns",
            "range": "± 335739.5593077898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5352238.947368421,
            "unit": "ns",
            "range": "± 384591.74327965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9422894.623655913,
            "unit": "ns",
            "range": "± 559624.60056518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 419064.64646464644,
            "unit": "ns",
            "range": "± 52205.34672971396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355288.6597938144,
            "unit": "ns",
            "range": "± 49373.32460509559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319030.4347826087,
            "unit": "ns",
            "range": "± 38323.60687311322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6911186.419753087,
            "unit": "ns",
            "range": "± 359961.77844081115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5032726.8292682925,
            "unit": "ns",
            "range": "± 266275.1848860848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31938.144329896906,
            "unit": "ns",
            "range": "± 10299.377441733322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124798.9247311828,
            "unit": "ns",
            "range": "± 15892.52281546027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100383.33333333333,
            "unit": "ns",
            "range": "± 19709.63251902703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 238403.125,
            "unit": "ns",
            "range": "± 29544.547820554853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8434.09090909091,
            "unit": "ns",
            "range": "± 1800.5673667528404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28769.696969696968,
            "unit": "ns",
            "range": "± 9576.964865221371"
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
          "id": "93b65fd33ff676df90ddf152ef633975c9968bc5",
          "message": "Removed timestamp from ProposeBlock() entirely",
          "timestamp": "2023-04-11T11:42:15+09:00",
          "tree_id": "751e7bbf7a2871d12d69afd4d4aab733c82f5399",
          "url": "https://github.com/greymistcube/libplanet/commit/93b65fd33ff676df90ddf152ef633975c9968bc5"
        },
        "date": 1681181965183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1469555.5555555555,
            "unit": "ns",
            "range": "± 145946.89502624047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643643.9024390243,
            "unit": "ns",
            "range": "± 140083.89382095195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2320870.5263157897,
            "unit": "ns",
            "range": "± 168690.33373767612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5568746.153846154,
            "unit": "ns",
            "range": "± 149618.9539617738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53906.06060606061,
            "unit": "ns",
            "range": "± 5259.487407743058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7598730.769230769,
            "unit": "ns",
            "range": "± 77136.29047142666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20175430.769230768,
            "unit": "ns",
            "range": "± 302109.29971511796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50216838.461538464,
            "unit": "ns",
            "range": "± 238342.27327683446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102480607.6923077,
            "unit": "ns",
            "range": "± 442222.94991994416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203091543.75,
            "unit": "ns",
            "range": "± 3806425.966173299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4835471.927083333,
            "unit": "ns",
            "range": "± 35200.99159611023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551640.9505208333,
            "unit": "ns",
            "range": "± 10615.016394274955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183820.6770833333,
            "unit": "ns",
            "range": "± 7307.546941579926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670019.375,
            "unit": "ns",
            "range": "± 26547.75986468553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842225.625,
            "unit": "ns",
            "range": "± 3619.143209979815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764730.5524553572,
            "unit": "ns",
            "range": "± 5254.736397960685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3055185.3658536584,
            "unit": "ns",
            "range": "± 101810.15067510608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3282645.1612903224,
            "unit": "ns",
            "range": "± 100243.61605179546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3855513.3333333335,
            "unit": "ns",
            "range": "± 56646.78614848667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057563.38028169,
            "unit": "ns",
            "range": "± 191356.81050214366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6861200,
            "unit": "ns",
            "range": "± 261946.22094366368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308777.2727272727,
            "unit": "ns",
            "range": "± 11581.899744486305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265939.5833333333,
            "unit": "ns",
            "range": "± 10444.478121330445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220965.95744680852,
            "unit": "ns",
            "range": "± 8155.080480922538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5336761.538461538,
            "unit": "ns",
            "range": "± 56656.796274609136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772638.095238095,
            "unit": "ns",
            "range": "± 85728.42863479113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23277.083333333332,
            "unit": "ns",
            "range": "± 2740.782798923912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95643.43434343435,
            "unit": "ns",
            "range": "± 7952.988933909699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83946.46464646465,
            "unit": "ns",
            "range": "± 8572.955972617101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 189752.63157894736,
            "unit": "ns",
            "range": "± 16444.101588219193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9244.329896907217,
            "unit": "ns",
            "range": "± 1391.414827924332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24866.666666666668,
            "unit": "ns",
            "range": "± 2897.2824532715285"
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
          "id": "db6803aad6a81124e322b2e28d7f78a92f59f33c",
          "message": "Added test",
          "timestamp": "2023-04-11T12:02:54+09:00",
          "tree_id": "d127e88d7dafb7a955ef340f8e62db05d03a3cd7",
          "url": "https://github.com/greymistcube/libplanet/commit/db6803aad6a81124e322b2e28d7f78a92f59f33c"
        },
        "date": 1681183282875,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480473.9583333333,
            "unit": "ns",
            "range": "± 111292.49205753814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2714883.673469388,
            "unit": "ns",
            "range": "± 161823.8419182125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2328907.9545454546,
            "unit": "ns",
            "range": "± 128059.47228434545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5732970.666666667,
            "unit": "ns",
            "range": "± 288707.0856250156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55069.072164948455,
            "unit": "ns",
            "range": "± 5689.726868531386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7600366.037735849,
            "unit": "ns",
            "range": "± 315808.1281797275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20198446.666666668,
            "unit": "ns",
            "range": "± 366239.5115351753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51235993.333333336,
            "unit": "ns",
            "range": "± 403815.994989703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102359540,
            "unit": "ns",
            "range": "± 1337297.696743057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203160428.57142857,
            "unit": "ns",
            "range": "± 1848002.772716273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4937624.720982143,
            "unit": "ns",
            "range": "± 24105.74615502961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555223.671875,
            "unit": "ns",
            "range": "± 6475.15866682232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178360.4910714286,
            "unit": "ns",
            "range": "± 4817.58705403651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686388.6458333335,
            "unit": "ns",
            "range": "± 14789.886858694763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874027.2721354166,
            "unit": "ns",
            "range": "± 3479.949291871944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768492.6627604166,
            "unit": "ns",
            "range": "± 3125.964287753111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325772.222222222,
            "unit": "ns",
            "range": "± 135912.39883554666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3589721.7391304346,
            "unit": "ns",
            "range": "± 90407.49142592582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4094568.1818181816,
            "unit": "ns",
            "range": "± 153510.64772210165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4412567.5,
            "unit": "ns",
            "range": "± 153972.03773362926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7180900,
            "unit": "ns",
            "range": "± 149747.16098217762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334147.54098360654,
            "unit": "ns",
            "range": "± 14792.178187107053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276275,
            "unit": "ns",
            "range": "± 12364.76164381969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242064.2857142857,
            "unit": "ns",
            "range": "± 16862.53854511731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5408507.142857143,
            "unit": "ns",
            "range": "± 56864.027621710346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3800496.6666666665,
            "unit": "ns",
            "range": "± 51694.70636986603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25205.37634408602,
            "unit": "ns",
            "range": "± 3043.609327305395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105055.10204081633,
            "unit": "ns",
            "range": "± 11153.65154435916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102655,
            "unit": "ns",
            "range": "± 13862.10862587491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219716.49484536084,
            "unit": "ns",
            "range": "± 19044.813819495426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9660.204081632653,
            "unit": "ns",
            "range": "± 1656.2745300058368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25847.916666666668,
            "unit": "ns",
            "range": "± 2974.6996015225204"
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
          "id": "bcb5e135f73fbddbfba643ddceb61a9230e70148",
          "message": "Reduced expose level for custom ProposeBlock()",
          "timestamp": "2023-04-11T13:24:05+09:00",
          "tree_id": "74dd7ab342a5fee24792deb260801bfe6121fac4",
          "url": "https://github.com/greymistcube/libplanet/commit/bcb5e135f73fbddbfba643ddceb61a9230e70148"
        },
        "date": 1681187983755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401313.5416666667,
            "unit": "ns",
            "range": "± 114943.80193888955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591426.8041237113,
            "unit": "ns",
            "range": "± 149322.48485204202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2261566,
            "unit": "ns",
            "range": "± 156478.46608231674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5631817.894736842,
            "unit": "ns",
            "range": "± 321616.5200249632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50601.041666666664,
            "unit": "ns",
            "range": "± 3768.1628859548678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7134477.2727272725,
            "unit": "ns",
            "range": "± 170899.28789123608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19470806.666666668,
            "unit": "ns",
            "range": "± 297469.4017077739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49482926.666666664,
            "unit": "ns",
            "range": "± 486122.5146381262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98720553.33333333,
            "unit": "ns",
            "range": "± 1663946.949217289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196322273.33333334,
            "unit": "ns",
            "range": "± 2756850.8399120565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4799899.0625,
            "unit": "ns",
            "range": "± 22339.20539290723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590983.4895833333,
            "unit": "ns",
            "range": "± 6246.144321505597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154977.1354166667,
            "unit": "ns",
            "range": "± 5222.279712297427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665478.515625,
            "unit": "ns",
            "range": "± 7841.311798397745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837502.1809895834,
            "unit": "ns",
            "range": "± 3692.5347801395883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769588.4830729166,
            "unit": "ns",
            "range": "± 2341.6742009305285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101723.3333333335,
            "unit": "ns",
            "range": "± 89789.18867157031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419506.4102564105,
            "unit": "ns",
            "range": "± 175793.21850589308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3923604.761904762,
            "unit": "ns",
            "range": "± 142863.67192977716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4213614.285714285,
            "unit": "ns",
            "range": "± 145976.36389268987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6887647.619047619,
            "unit": "ns",
            "range": "± 249431.48552218216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315947.36842105264,
            "unit": "ns",
            "range": "± 10894.32624070786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260539.39393939395,
            "unit": "ns",
            "range": "± 7577.513584363418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212526.92307692306,
            "unit": "ns",
            "range": "± 5805.346342281928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5230014.285714285,
            "unit": "ns",
            "range": "± 36357.70698411627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3597593.75,
            "unit": "ns",
            "range": "± 68196.82757773023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22009.473684210527,
            "unit": "ns",
            "range": "± 2114.9957841218747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93126.31578947368,
            "unit": "ns",
            "range": "± 6612.016953781083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84994.89795918367,
            "unit": "ns",
            "range": "± 7582.173510552201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 198666.66666666666,
            "unit": "ns",
            "range": "± 21791.459778964912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7637.894736842105,
            "unit": "ns",
            "range": "± 1119.3823284796083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21217.34693877551,
            "unit": "ns",
            "range": "± 2313.921360798505"
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
          "id": "58d9e39cb6014751b58ff661c2905ff191795d53",
          "message": "Changed ProposeGenesisBlock() to take transactions instead of actions",
          "timestamp": "2023-04-11T18:37:13+09:00",
          "tree_id": "55e5a3295f4b96627ca253ae04875cefa9fead83",
          "url": "https://github.com/greymistcube/libplanet/commit/58d9e39cb6014751b58ff661c2905ff191795d53"
        },
        "date": 1681206793605,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1267398.9473684211,
            "unit": "ns",
            "range": "± 93208.42064819702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2355856.7010309277,
            "unit": "ns",
            "range": "± 163541.22371949558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1995306.3829787234,
            "unit": "ns",
            "range": "± 117929.61251189875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5171522.916666667,
            "unit": "ns",
            "range": "± 352148.04048392293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43867.77777777778,
            "unit": "ns",
            "range": "± 3114.5843150700543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6190516.666666667,
            "unit": "ns",
            "range": "± 181923.93651787806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17718072.222222224,
            "unit": "ns",
            "range": "± 372987.537728345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45044786.666666664,
            "unit": "ns",
            "range": "± 815350.4644074988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88915583.33333333,
            "unit": "ns",
            "range": "± 1868075.3002362996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176599950,
            "unit": "ns",
            "range": "± 3737314.4743644623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4349616.629464285,
            "unit": "ns",
            "range": "± 47048.13161897151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1389408.203125,
            "unit": "ns",
            "range": "± 13024.769468911116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075327.3828125,
            "unit": "ns",
            "range": "± 6826.093315333888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2367171.5959821427,
            "unit": "ns",
            "range": "± 26343.8802955304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767486.2379807692,
            "unit": "ns",
            "range": "± 8152.489340160328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 687088.1417410715,
            "unit": "ns",
            "range": "± 5905.854093966422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2800295.5555555555,
            "unit": "ns",
            "range": "± 105228.92999109469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2946303.1746031744,
            "unit": "ns",
            "range": "± 135180.27266872782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3544941.1764705884,
            "unit": "ns",
            "range": "± 111201.36013351489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3932925.714285714,
            "unit": "ns",
            "range": "± 123413.51185167297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6283617.073170732,
            "unit": "ns",
            "range": "± 224464.2787866691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285693.9393939394,
            "unit": "ns",
            "range": "± 8876.44141090404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229468.085106383,
            "unit": "ns",
            "range": "± 8861.889738183943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198034.78260869565,
            "unit": "ns",
            "range": "± 7625.344214927957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4750746.153846154,
            "unit": "ns",
            "range": "± 46756.6504250931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3249746.153846154,
            "unit": "ns",
            "range": "± 51352.64704934264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20723.157894736843,
            "unit": "ns",
            "range": "± 1739.1274794268672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85410.52631578948,
            "unit": "ns",
            "range": "± 6712.285872557754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79561.85567010309,
            "unit": "ns",
            "range": "± 9840.217681566732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 174627.6595744681,
            "unit": "ns",
            "range": "± 16338.281481702337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8100,
            "unit": "ns",
            "range": "± 1168.8394102742725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18909.278350515466,
            "unit": "ns",
            "range": "± 1866.820072243328"
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
          "id": "e955fd0080674846c06f1a6e9fcb1687d381d006",
          "message": "Added test",
          "timestamp": "2023-04-12T10:00:47+09:00",
          "tree_id": "34ce3890bf28520be23ad0abb8538f0614b63d73",
          "url": "https://github.com/greymistcube/libplanet/commit/e955fd0080674846c06f1a6e9fcb1687d381d006"
        },
        "date": 1681262545682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609975.2577319588,
            "unit": "ns",
            "range": "± 246322.81369802105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3039436.4583333335,
            "unit": "ns",
            "range": "± 356522.66573545366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554459.793814433,
            "unit": "ns",
            "range": "± 282002.87367765786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7107008.791208792,
            "unit": "ns",
            "range": "± 492718.3528702674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62095.78947368421,
            "unit": "ns",
            "range": "± 16307.555459405621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7324561.538461538,
            "unit": "ns",
            "range": "± 727004.0520702038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19412548.484848484,
            "unit": "ns",
            "range": "± 2225331.390288831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53439910,
            "unit": "ns",
            "range": "± 4332984.175199034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106171879,
            "unit": "ns",
            "range": "± 6330525.935070881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215611032,
            "unit": "ns",
            "range": "± 13643873.53992667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5227850.822368421,
            "unit": "ns",
            "range": "± 114271.16766572942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829975.0651041667,
            "unit": "ns",
            "range": "± 27997.143119206306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274495.9694602273,
            "unit": "ns",
            "range": "± 27470.885007757202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2846926.669034091,
            "unit": "ns",
            "range": "± 84020.87268579946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938027.5162760416,
            "unit": "ns",
            "range": "± 27460.945052618983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867177.9015743372,
            "unit": "ns",
            "range": "± 26966.99154450431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3364431.914893617,
            "unit": "ns",
            "range": "± 356542.30900451675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3289641.6666666665,
            "unit": "ns",
            "range": "± 400713.56738663005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043204.395604396,
            "unit": "ns",
            "range": "± 428171.3384751192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199582.474226804,
            "unit": "ns",
            "range": "± 474336.4393660697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7679280.6122448975,
            "unit": "ns",
            "range": "± 754704.903708791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381479.38144329895,
            "unit": "ns",
            "range": "± 63599.73784364265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318838.1443298969,
            "unit": "ns",
            "range": "± 49141.49308226147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301851.54639175255,
            "unit": "ns",
            "range": "± 48485.96685597559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5685521.428571428,
            "unit": "ns",
            "range": "± 642738.1731520264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859284.946236559,
            "unit": "ns",
            "range": "± 351191.7851948025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28558.163265306124,
            "unit": "ns",
            "range": "± 9814.705182976195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104570.21276595745,
            "unit": "ns",
            "range": "± 19753.15317029911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83664.51612903226,
            "unit": "ns",
            "range": "± 18460.931986702937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 223980,
            "unit": "ns",
            "range": "± 34635.72930776615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6105.06329113924,
            "unit": "ns",
            "range": "± 1503.4062806376808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32054,
            "unit": "ns",
            "range": "± 11744.411264920687"
          }
        ]
      }
    ]
  }
}