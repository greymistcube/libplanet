window.BENCHMARK_DATA = {
  "lastUpdate": 1702003515210,
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
          "id": "718d7eab7705a0ccf84634c14106a58dbfe3fad0",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:09:49+09:00",
          "tree_id": "1a9ea1ff57502e6c167c79e20296575b0a8644cc",
          "url": "https://github.com/greymistcube/libplanet/commit/718d7eab7705a0ccf84634c14106a58dbfe3fad0"
        },
        "date": 1702002159813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932154.7368421053,
            "unit": "ns",
            "range": "± 74384.83139872838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757363.3333333333,
            "unit": "ns",
            "range": "± 100397.6368964032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1383520,
            "unit": "ns",
            "range": "± 118209.92198866242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5220896.96969697,
            "unit": "ns",
            "range": "± 162085.47607059154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33910.71428571428,
            "unit": "ns",
            "range": "± 1773.70471029186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5102233.333333333,
            "unit": "ns",
            "range": "± 38000.087719197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13265553.846153846,
            "unit": "ns",
            "range": "± 81525.24778031051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33011600,
            "unit": "ns",
            "range": "± 391811.37337715493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65868364.28571428,
            "unit": "ns",
            "range": "± 1031762.1189813256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134007235.71428572,
            "unit": "ns",
            "range": "± 951933.6310148637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3233317.0833333335,
            "unit": "ns",
            "range": "± 9504.136237366942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063866.4620535714,
            "unit": "ns",
            "range": "± 1668.7130891104573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747729.8302283654,
            "unit": "ns",
            "range": "± 1356.3136433702718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950509.21875,
            "unit": "ns",
            "range": "± 4718.9651987020525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612572.0005580357,
            "unit": "ns",
            "range": "± 1360.8994140408956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576105.4059709822,
            "unit": "ns",
            "range": "± 904.1923420557285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139196.3414634145,
            "unit": "ns",
            "range": "± 76395.83135734887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311272.727272727,
            "unit": "ns",
            "range": "± 85388.10810846259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783602.777777778,
            "unit": "ns",
            "range": "± 82152.96703140729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2741555.172413793,
            "unit": "ns",
            "range": "± 79882.02723931127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6127117.647058823,
            "unit": "ns",
            "range": "± 194007.35298559623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173484.90566037735,
            "unit": "ns",
            "range": "± 6848.705555022088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169390,
            "unit": "ns",
            "range": "± 6838.762568578306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140580.55555555556,
            "unit": "ns",
            "range": "± 3985.6757408388244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763607.6923076925,
            "unit": "ns",
            "range": "± 42949.00971963656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2607358.3333333335,
            "unit": "ns",
            "range": "± 25860.305079172573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11875.510204081633,
            "unit": "ns",
            "range": "± 1935.2434634384897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56473.913043478264,
            "unit": "ns",
            "range": "± 5020.022975412977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45936.48648648649,
            "unit": "ns",
            "range": "± 2274.1895635693522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58613.63636363636,
            "unit": "ns",
            "range": "± 8694.207105859741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2570.408163265306,
            "unit": "ns",
            "range": "± 591.9057433450358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10803.225806451614,
            "unit": "ns",
            "range": "± 1286.50618992607"
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
          "id": "5f33b5ed2dc37e320a5f3dde70b899060605f70b",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:25:38+09:00",
          "tree_id": "4d891cda13d5c124a46b42fd03a4300f1ba5424c",
          "url": "https://github.com/greymistcube/libplanet/commit/5f33b5ed2dc37e320a5f3dde70b899060605f70b"
        },
        "date": 1702003016553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 852790.8163265307,
            "unit": "ns",
            "range": "± 70046.4633524971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1602396.7391304348,
            "unit": "ns",
            "range": "± 117364.31066478987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1258634.3434343433,
            "unit": "ns",
            "range": "± 125428.41780141596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5114239.795918368,
            "unit": "ns",
            "range": "± 321510.1697064965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31954.545454545456,
            "unit": "ns",
            "range": "± 1508.1503514296853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4644847.05882353,
            "unit": "ns",
            "range": "± 79821.71632493769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12699633.333333334,
            "unit": "ns",
            "range": "± 199223.8212473121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 30633961.111111112,
            "unit": "ns",
            "range": "± 642882.0870194297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 61986708.333333336,
            "unit": "ns",
            "range": "± 1544242.3700050588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 124653350,
            "unit": "ns",
            "range": "± 2739564.108912603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3250417.96875,
            "unit": "ns",
            "range": "± 38250.97927460562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1023072.1604567308,
            "unit": "ns",
            "range": "± 12775.08138607435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743363.1975446428,
            "unit": "ns",
            "range": "± 3639.8312345531954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1889686.71875,
            "unit": "ns",
            "range": "± 12196.707407008324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620479.2271205357,
            "unit": "ns",
            "range": "± 1317.216258126486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560421.6569010416,
            "unit": "ns",
            "range": "± 1761.3716194680417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1982378.8461538462,
            "unit": "ns",
            "range": "± 81886.69679726998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2190394.117647059,
            "unit": "ns",
            "range": "± 88624.12631279297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2626089.705882353,
            "unit": "ns",
            "range": "± 125147.79100704116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2468058.4905660376,
            "unit": "ns",
            "range": "± 101692.15882706277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6077012,
            "unit": "ns",
            "range": "± 306470.41299812816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 157296.66666666666,
            "unit": "ns",
            "range": "± 7006.7271952531855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 149802.46913580247,
            "unit": "ns",
            "range": "± 7900.078722845773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137245.45454545456,
            "unit": "ns",
            "range": "± 6341.9526674647805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2626342.8571428573,
            "unit": "ns",
            "range": "± 60180.16759222735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2372886.6666666665,
            "unit": "ns",
            "range": "± 35955.386377061914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9155.172413793103,
            "unit": "ns",
            "range": "± 749.846282028532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48025.555555555555,
            "unit": "ns",
            "range": "± 3724.7897493219916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42480.72289156626,
            "unit": "ns",
            "range": "± 2261.1489541837295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44164.948453608245,
            "unit": "ns",
            "range": "± 7477.174171507929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2032.2222222222222,
            "unit": "ns",
            "range": "± 235.51415319372379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8547.619047619048,
            "unit": "ns",
            "range": "± 732.7907031155456"
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
          "id": "fe2e27d828d77ed0a5588b5242d3bd377b529ebf",
          "message": "Changelog",
          "timestamp": "2023-12-08T11:27:39+09:00",
          "tree_id": "b2a5d69e8ba8ada97c39d83c8ff896127f696a23",
          "url": "https://github.com/greymistcube/libplanet/commit/fe2e27d828d77ed0a5588b5242d3bd377b529ebf"
        },
        "date": 1702003168426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938880,
            "unit": "ns",
            "range": "± 82957.97585269157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1722390.3846153845,
            "unit": "ns",
            "range": "± 70012.73066200984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1359573.9583333333,
            "unit": "ns",
            "range": "± 112972.56233709479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5162602.94117647,
            "unit": "ns",
            "range": "± 165128.9514202399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34457.53424657534,
            "unit": "ns",
            "range": "± 1519.4953299825113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4962385.714285715,
            "unit": "ns",
            "range": "± 47423.4420634232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13551971.42857143,
            "unit": "ns",
            "range": "± 71337.7602953446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33365050,
            "unit": "ns",
            "range": "± 629301.3883135277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66626930.76923077,
            "unit": "ns",
            "range": "± 565373.2504352255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133050578.57142857,
            "unit": "ns",
            "range": "± 858543.78964399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3300084.344951923,
            "unit": "ns",
            "range": "± 3408.1446555900447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048316.89453125,
            "unit": "ns",
            "range": "± 2350.447140810568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738968.3872767857,
            "unit": "ns",
            "range": "± 1257.329784300002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902333.49609375,
            "unit": "ns",
            "range": "± 10293.502727751107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617009.3610491072,
            "unit": "ns",
            "range": "± 967.25687132617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553452.8470552885,
            "unit": "ns",
            "range": "± 820.4661216116474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177402.777777778,
            "unit": "ns",
            "range": "± 70642.65197299559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270463.6363636362,
            "unit": "ns",
            "range": "± 82407.45363361448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2789512.5,
            "unit": "ns",
            "range": "± 79604.08787525684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2620823.015873016,
            "unit": "ns",
            "range": "± 119162.82057965791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6141315.7894736845,
            "unit": "ns",
            "range": "± 134515.86136610183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173440.81632653062,
            "unit": "ns",
            "range": "± 6389.898224520316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171222.85714285713,
            "unit": "ns",
            "range": "± 7359.193627623973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138000,
            "unit": "ns",
            "range": "± 3050.280401260807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2786764.285714286,
            "unit": "ns",
            "range": "± 37853.00734202191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491605.882352941,
            "unit": "ns",
            "range": "± 42318.664183020875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11392.391304347826,
            "unit": "ns",
            "range": "± 1521.0055736546105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58148.958333333336,
            "unit": "ns",
            "range": "± 5941.070163950468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45161.19402985075,
            "unit": "ns",
            "range": "± 2134.9157405756687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61395.91836734694,
            "unit": "ns",
            "range": "± 14898.508320594865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2641.4141414141413,
            "unit": "ns",
            "range": "± 635.6757774869936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11154.945054945056,
            "unit": "ns",
            "range": "± 1534.9457997136603"
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
          "id": "43941b04e3d1906195eecd2b2a53d5ff66fc0581",
          "message": "Changelog",
          "timestamp": "2023-12-08T11:31:27+09:00",
          "tree_id": "d5ed442d625d23764bdc746fa0e52be794b536a5",
          "url": "https://github.com/greymistcube/libplanet/commit/43941b04e3d1906195eecd2b2a53d5ff66fc0581"
        },
        "date": 1702003485982,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1019031,
            "unit": "ns",
            "range": "± 124461.44483941664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755887.878787879,
            "unit": "ns",
            "range": "± 76826.0803376472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1402657.2916666667,
            "unit": "ns",
            "range": "± 126086.65503474537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5367017.021276596,
            "unit": "ns",
            "range": "± 198213.59506652207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35057.30337078652,
            "unit": "ns",
            "range": "± 2200.2524462831243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5252845,
            "unit": "ns",
            "range": "± 114290.91447520642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13616460,
            "unit": "ns",
            "range": "± 175969.62319023782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35136030.76923077,
            "unit": "ns",
            "range": "± 535264.368302579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68632000,
            "unit": "ns",
            "range": "± 774522.3790919703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145984320,
            "unit": "ns",
            "range": "± 853967.3180430937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3377998.7079326925,
            "unit": "ns",
            "range": "± 6076.160474717369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058050.5440848214,
            "unit": "ns",
            "range": "± 1719.2511564802892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737487.4153645834,
            "unit": "ns",
            "range": "± 2170.512737257092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913572.2377232143,
            "unit": "ns",
            "range": "± 7688.397939168248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625920.2078683035,
            "unit": "ns",
            "range": "± 1338.917053264154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553074.0234375,
            "unit": "ns",
            "range": "± 900.0608391046302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2293305.882352941,
            "unit": "ns",
            "range": "± 54961.37454269228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2465390.3225806453,
            "unit": "ns",
            "range": "± 73239.35351452664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879252.1739130435,
            "unit": "ns",
            "range": "± 63739.532970057975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2827534.375,
            "unit": "ns",
            "range": "± 130032.45531221738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6284976.923076923,
            "unit": "ns",
            "range": "± 219870.16439317868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182276.92307692306,
            "unit": "ns",
            "range": "± 9345.752880485172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170317.24137931035,
            "unit": "ns",
            "range": "± 6196.352575423663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146854.54545454544,
            "unit": "ns",
            "range": "± 5487.679839526141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2738150,
            "unit": "ns",
            "range": "± 33209.55112184273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2531171.4285714286,
            "unit": "ns",
            "range": "± 27191.272032129626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12909.574468085106,
            "unit": "ns",
            "range": "± 1916.7663825731652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56501.13636363636,
            "unit": "ns",
            "range": "± 3262.447227500501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47351.51515151515,
            "unit": "ns",
            "range": "± 3218.580103861355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67944.32989690722,
            "unit": "ns",
            "range": "± 13430.011239386005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2858.762886597938,
            "unit": "ns",
            "range": "± 678.1949967437445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11856.1797752809,
            "unit": "ns",
            "range": "± 1464.9662621138302"
          }
        ]
      }
    ]
  }
}