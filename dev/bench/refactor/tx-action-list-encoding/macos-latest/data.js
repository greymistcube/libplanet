window.BENCHMARK_DATA = {
  "lastUpdate": 1681368914889,
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
          "id": "51dfc21a6b04ab2184fbfaa40eb26a9dae87de92",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:02:17+09:00",
          "tree_id": "e43cc05b11d1f369aa309d83d657bf0db17a5cc8",
          "url": "https://github.com/greymistcube/libplanet/commit/51dfc21a6b04ab2184fbfaa40eb26a9dae87de92"
        },
        "date": 1681367285758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9076125.52,
            "unit": "ns",
            "range": "± 807197.1699162652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21197316.13402062,
            "unit": "ns",
            "range": "± 1224231.9811955628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54959941.5,
            "unit": "ns",
            "range": "± 3925730.3041793634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118821999.34210527,
            "unit": "ns",
            "range": "± 2575175.5429597255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224871835.75510204,
            "unit": "ns",
            "range": "± 17219364.682723302"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69184.15625,
            "unit": "ns",
            "range": "± 10439.038021144856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417625.3043478261,
            "unit": "ns",
            "range": "± 47644.62379959837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367121,
            "unit": "ns",
            "range": "± 56022.806658129564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316769.44086021505,
            "unit": "ns",
            "range": "± 31829.825293699665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6010068.521276596,
            "unit": "ns",
            "range": "± 574514.4976355558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914104.9,
            "unit": "ns",
            "range": "± 288366.0305829354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21430.10989010989,
            "unit": "ns",
            "range": "± 3889.263170577714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114896.40449438202,
            "unit": "ns",
            "range": "± 18904.242115749807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124096.05434782608,
            "unit": "ns",
            "range": "± 15797.597291481608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160211.875,
            "unit": "ns",
            "range": "± 31367.262805687278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10963.544444444444,
            "unit": "ns",
            "range": "± 1178.812570621039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25806.505617977527,
            "unit": "ns",
            "range": "± 2638.3921589913757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672622.03125,
            "unit": "ns",
            "range": "± 174836.2046520567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054384.6461538463,
            "unit": "ns",
            "range": "± 142408.50982576393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2757729.21875,
            "unit": "ns",
            "range": "± 317216.32462506695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7353922.457894737,
            "unit": "ns",
            "range": "± 473649.42438665195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3434625.7731958763,
            "unit": "ns",
            "range": "± 230448.6373029838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5026050.157303371,
            "unit": "ns",
            "range": "± 2325002.0082184817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5751588.9655172415,
            "unit": "ns",
            "range": "± 766483.662604944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5290978.640449438,
            "unit": "ns",
            "range": "± 746285.0877085543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9201682.405263158,
            "unit": "ns",
            "range": "± 837690.759697488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8037289.561948529,
            "unit": "ns",
            "range": "± 1098341.7198219078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2149439.1061523436,
            "unit": "ns",
            "range": "± 75962.56443179847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358003.8319905598,
            "unit": "ns",
            "range": "± 52933.85703605704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2920726.02328125,
            "unit": "ns",
            "range": "± 282019.24611787876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955401.3858753551,
            "unit": "ns",
            "range": "± 35302.85702586124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843130.50227529,
            "unit": "ns",
            "range": "± 55745.353601821495"
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
          "id": "0ef3738ad8ffc1b75e1a21ea1ea2340406b9e50c",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:05:46+09:00",
          "tree_id": "76239a8c7da7fb35e196c51fb924344225f6d6c6",
          "url": "https://github.com/greymistcube/libplanet/commit/0ef3738ad8ffc1b75e1a21ea1ea2340406b9e50c"
        },
        "date": 1681367308961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10032290.918604651,
            "unit": "ns",
            "range": "± 1382158.9604592582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33214199.967391305,
            "unit": "ns",
            "range": "± 12632584.20437355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67864348.13218391,
            "unit": "ns",
            "range": "± 19131270.60715753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149525994.3736842,
            "unit": "ns",
            "range": "± 33322072.762607772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260941596.36956522,
            "unit": "ns",
            "range": "± 40474323.53408585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75638.4827586207,
            "unit": "ns",
            "range": "± 9099.395163725416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 439004.47872340423,
            "unit": "ns",
            "range": "± 62132.54151239804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381834.39361702127,
            "unit": "ns",
            "range": "± 73756.03557726367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348541.1043956044,
            "unit": "ns",
            "range": "± 43390.195202213625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5784561.691011236,
            "unit": "ns",
            "range": "± 389164.37731050677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974274.7560975607,
            "unit": "ns",
            "range": "± 142027.41278443055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25315.75581395349,
            "unit": "ns",
            "range": "± 4024.772344854672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119717.4255319149,
            "unit": "ns",
            "range": "± 18994.45058077129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106580.05319148937,
            "unit": "ns",
            "range": "± 10910.377737433491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128427.39130434782,
            "unit": "ns",
            "range": "± 14037.626835966883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8062.597826086957,
            "unit": "ns",
            "range": "± 1362.1671167889629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20181.97311827957,
            "unit": "ns",
            "range": "± 3409.0352951078785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691346.5697674418,
            "unit": "ns",
            "range": "± 244626.592203459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3246806.467391304,
            "unit": "ns",
            "range": "± 345818.4614155412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2751379.2555555557,
            "unit": "ns",
            "range": "± 277994.9005657333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8269017.068965517,
            "unit": "ns",
            "range": "± 1351661.1439822188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4120684.0384615385,
            "unit": "ns",
            "range": "± 741025.0642139846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4648937.652631579,
            "unit": "ns",
            "range": "± 1272187.973099208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5133079.456521739,
            "unit": "ns",
            "range": "± 681556.265117915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4845665.693548387,
            "unit": "ns",
            "range": "± 489247.18970118335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9450740.20212766,
            "unit": "ns",
            "range": "± 921894.4924842699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7111227.287828947,
            "unit": "ns",
            "range": "± 243631.91706305536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2105915.785229953,
            "unit": "ns",
            "range": "± 87855.17351428301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332124.603515625,
            "unit": "ns",
            "range": "± 11238.657519029517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854654.262606534,
            "unit": "ns",
            "range": "± 70105.43921210611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938602.8761613176,
            "unit": "ns",
            "range": "± 31740.747692989706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802886.83484375,
            "unit": "ns",
            "range": "± 18182.71649263247"
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
          "id": "8a18bee5c4821201907fb22c1dab7c2d8ee38026",
          "message": "Changelog",
          "timestamp": "2023-04-13T15:30:07+09:00",
          "tree_id": "4ae542b5c594ed531377b8b968d3af2c4b0253b5",
          "url": "https://github.com/greymistcube/libplanet/commit/8a18bee5c4821201907fb22c1dab7c2d8ee38026"
        },
        "date": 1681368897988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8842093.704081632,
            "unit": "ns",
            "range": "± 569991.1844633179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21906111.795454547,
            "unit": "ns",
            "range": "± 1163012.3081750062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52835519.10655738,
            "unit": "ns",
            "range": "± 2062532.7589100357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104946370.33333333,
            "unit": "ns",
            "range": "± 6613699.986415857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235392945.62626263,
            "unit": "ns",
            "range": "± 22895115.129869636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85627.4213483146,
            "unit": "ns",
            "range": "± 16013.020089648015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 456453.47959183675,
            "unit": "ns",
            "range": "± 69556.02725864046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366688.70430107525,
            "unit": "ns",
            "range": "± 38380.00879861442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 364749.77956989245,
            "unit": "ns",
            "range": "± 36022.52511680096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6077002.138297873,
            "unit": "ns",
            "range": "± 377145.73158468935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4154952.663265306,
            "unit": "ns",
            "range": "± 277718.89562322624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27122.344086021505,
            "unit": "ns",
            "range": "± 4410.993503131209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115752.54347826086,
            "unit": "ns",
            "range": "± 28292.957574770426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109151.98947368421,
            "unit": "ns",
            "range": "± 16386.29870679766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139140.76373626373,
            "unit": "ns",
            "range": "± 15436.325336926795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9873.271739130434,
            "unit": "ns",
            "range": "± 1282.2940217880712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25274.739583333332,
            "unit": "ns",
            "range": "± 5504.563846663567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689302.1340206186,
            "unit": "ns",
            "range": "± 213570.78691943825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3125134.247126437,
            "unit": "ns",
            "range": "± 168126.61155082862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2839480.6153846155,
            "unit": "ns",
            "range": "± 362840.5283093928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7662323.489130435,
            "unit": "ns",
            "range": "± 646296.7197174942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3647274.1666666665,
            "unit": "ns",
            "range": "± 429389.67947758903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608984.6739130435,
            "unit": "ns",
            "range": "± 284393.9030191855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4933262.816326531,
            "unit": "ns",
            "range": "± 322170.8148720273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4868419.90625,
            "unit": "ns",
            "range": "± 534922.5454440659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9391827.270833334,
            "unit": "ns",
            "range": "± 832288.9242025901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6674884.107291667,
            "unit": "ns",
            "range": "± 98226.97221026126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2197449.680180921,
            "unit": "ns",
            "range": "± 173160.5947809219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417741.9296875,
            "unit": "ns",
            "range": "± 28876.796635587965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211748.6922317976,
            "unit": "ns",
            "range": "± 238057.16008763883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983791.8422851562,
            "unit": "ns",
            "range": "± 66662.24252017509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838332.3439895342,
            "unit": "ns",
            "range": "± 34789.64629627001"
          }
        ]
      }
    ]
  }
}