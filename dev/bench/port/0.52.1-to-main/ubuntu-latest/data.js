window.BENCHMARK_DATA = {
  "lastUpdate": 1678875832617,
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
          "id": "cb7793374dd1cec07f6eb01fe5cbef40dae6b55b",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:04:12+09:00",
          "tree_id": "46822b9066409fc5abf66ab11c15e867f0f9faca",
          "url": "https://github.com/greymistcube/libplanet/commit/cb7793374dd1cec07f6eb01fe5cbef40dae6b55b"
        },
        "date": 1678875407108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201878.85714285713,
            "unit": "ns",
            "range": "± 10291.14412814073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199882.1739130435,
            "unit": "ns",
            "range": "± 4951.775169776573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167130.59615384616,
            "unit": "ns",
            "range": "± 6538.891688962657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11625256.4,
            "unit": "ns",
            "range": "± 116267.96612124695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9424318.2,
            "unit": "ns",
            "range": "± 152730.0608609844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21808.41052631579,
            "unit": "ns",
            "range": "± 1806.4808889151516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57965.795454545456,
            "unit": "ns",
            "range": "± 3536.654458987752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42160.79518072289,
            "unit": "ns",
            "range": "± 2240.130471804756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94114.3373493976,
            "unit": "ns",
            "range": "± 5762.534956831929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5731.632653061224,
            "unit": "ns",
            "range": "± 631.4109447822606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20421.67391304348,
            "unit": "ns",
            "range": "± 1364.696916065463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3249169.65,
            "unit": "ns",
            "range": "± 74322.354133354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5225087.333333333,
            "unit": "ns",
            "range": "± 48714.46641496998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23841319.6,
            "unit": "ns",
            "range": "± 264021.58697289455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6341206.444444444,
            "unit": "ns",
            "range": "± 130638.67032581405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26642763.214285713,
            "unit": "ns",
            "range": "± 207351.92771902724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5898967.943080357,
            "unit": "ns",
            "range": "± 16273.199183932613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943516.4115513393,
            "unit": "ns",
            "range": "± 3407.0488925747195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341231.585123698,
            "unit": "ns",
            "range": "± 397.9132398250863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557003.4775390625,
            "unit": "ns",
            "range": "± 1695.9030446268393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816905.3639090402,
            "unit": "ns",
            "range": "± 1065.223472403924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744986.1484375,
            "unit": "ns",
            "range": "± 472.1517940761886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7829865,
            "unit": "ns",
            "range": "± 74223.03034484261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19895518.866666667,
            "unit": "ns",
            "range": "± 110934.41906167979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49607511.333333336,
            "unit": "ns",
            "range": "± 406221.80916740315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99697038.2,
            "unit": "ns",
            "range": "± 986000.0411451164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202846684.66666666,
            "unit": "ns",
            "range": "± 933917.0889260435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45905.68571428571,
            "unit": "ns",
            "range": "± 2175.2192595987176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301391.2967032967,
            "unit": "ns",
            "range": "± 72896.57439909026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442789.3666666667,
            "unit": "ns",
            "range": "± 72106.48989897216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107764.7804878047,
            "unit": "ns",
            "range": "± 107054.17989763951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5030280.342857143,
            "unit": "ns",
            "range": "± 162846.32510906114"
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
          "id": "56ee645610666979561a79cd9304333e7bc38a59",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:06:07+09:00",
          "tree_id": "9e89b360510d7b32c472927b17445ed8b5652134",
          "url": "https://github.com/greymistcube/libplanet/commit/56ee645610666979561a79cd9304333e7bc38a59"
        },
        "date": 1678875546437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3377498.0975609757,
            "unit": "ns",
            "range": "± 119492.91155102148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5344105,
            "unit": "ns",
            "range": "± 57373.07150322602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24241295.46153846,
            "unit": "ns",
            "range": "± 234963.06073140356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6455262.733333333,
            "unit": "ns",
            "range": "± 80782.84780063744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27541263.57142857,
            "unit": "ns",
            "range": "± 351925.9281841333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7797871.933333334,
            "unit": "ns",
            "range": "± 24232.068093059384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19765618.333333332,
            "unit": "ns",
            "range": "± 130201.14245475655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51100645.733333334,
            "unit": "ns",
            "range": "± 193557.86817843636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102489410.93333334,
            "unit": "ns",
            "range": "± 356536.23258803115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202905550.85714287,
            "unit": "ns",
            "range": "± 404847.15339474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397031.4747474748,
            "unit": "ns",
            "range": "± 103723.26896695206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2492615.45,
            "unit": "ns",
            "range": "± 55888.58393783399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196923.4864864866,
            "unit": "ns",
            "range": "± 109328.72721359035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5131277.172413793,
            "unit": "ns",
            "range": "± 142177.05934127877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45586.69411764706,
            "unit": "ns",
            "range": "± 2395.2979286984096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5921633.250520834,
            "unit": "ns",
            "range": "± 18837.779640706183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848443.5875901442,
            "unit": "ns",
            "range": "± 1969.925409342157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338348.0869891827,
            "unit": "ns",
            "range": "± 767.4780145524429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559648.514122596,
            "unit": "ns",
            "range": "± 1200.0152186123182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857117.0205775669,
            "unit": "ns",
            "range": "± 1775.0408303247716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751455.9631696428,
            "unit": "ns",
            "range": "± 628.7206585193057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204267.55172413794,
            "unit": "ns",
            "range": "± 5829.997951397624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204993.57142857142,
            "unit": "ns",
            "range": "± 4682.3615577123965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172220.38554216866,
            "unit": "ns",
            "range": "± 8744.699903971557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11604895.142857144,
            "unit": "ns",
            "range": "± 37580.63588698746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9289580.866666667,
            "unit": "ns",
            "range": "± 18504.362195619353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21782.697368421053,
            "unit": "ns",
            "range": "± 1091.9356637914384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52971.811111111114,
            "unit": "ns",
            "range": "± 4984.7940935339875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39266.333333333336,
            "unit": "ns",
            "range": "± 696.5323976330038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87527.38541666667,
            "unit": "ns",
            "range": "± 13115.413461283508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5016.8105263157895,
            "unit": "ns",
            "range": "± 407.0385599052258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18262.59574468085,
            "unit": "ns",
            "range": "± 1765.7527641399063"
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
          "id": "68acfb8925fe50521ddaef75a175c2f8f9c71bff",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:05:13+09:00",
          "tree_id": "46822b9066409fc5abf66ab11c15e867f0f9faca",
          "url": "https://github.com/greymistcube/libplanet/commit/68acfb8925fe50521ddaef75a175c2f8f9c71bff"
        },
        "date": 1678875823560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238117.1222222222,
            "unit": "ns",
            "range": "± 14019.046984573539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240036.61458333334,
            "unit": "ns",
            "range": "± 14039.691727287274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226056.39784946237,
            "unit": "ns",
            "range": "± 13997.91855655984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15314363.175,
            "unit": "ns",
            "range": "± 534089.1503681464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12468641.023809524,
            "unit": "ns",
            "range": "± 446356.47451612353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25366.178947368422,
            "unit": "ns",
            "range": "± 5466.3086381224075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69046.38775510204,
            "unit": "ns",
            "range": "± 8795.082484545077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55277.18556701031,
            "unit": "ns",
            "range": "± 7368.4584623270775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126403.46875,
            "unit": "ns",
            "range": "± 21190.368381563865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7600.298701298701,
            "unit": "ns",
            "range": "± 1738.0093578645096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25637.353535353537,
            "unit": "ns",
            "range": "± 5898.406888534984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4321150.258064516,
            "unit": "ns",
            "range": "± 268125.12227559404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6717500.342105263,
            "unit": "ns",
            "range": "± 341685.11509207037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32653000.307692308,
            "unit": "ns",
            "range": "± 876007.8079796672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8235374.777777778,
            "unit": "ns",
            "range": "± 458061.8554565144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37232068.179487176,
            "unit": "ns",
            "range": "± 1275311.8078259355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7531678.19765625,
            "unit": "ns",
            "range": "± 88172.0755778765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2314955.925520833,
            "unit": "ns",
            "range": "± 25448.4424360248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1700588.8816034226,
            "unit": "ns",
            "range": "± 38590.816070919376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3293121.7684151786,
            "unit": "ns",
            "range": "± 55923.41146920578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040293.369140625,
            "unit": "ns",
            "range": "± 12811.803576079632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 974866.9513671875,
            "unit": "ns",
            "range": "± 12991.296924655157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10728744.92857143,
            "unit": "ns",
            "range": "± 459586.06538939354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27821924.78125,
            "unit": "ns",
            "range": "± 797939.5321511496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 69690489.45833333,
            "unit": "ns",
            "range": "± 1655809.4781918596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 138643151,
            "unit": "ns",
            "range": "± 3024175.7040310632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 278970142.6923077,
            "unit": "ns",
            "range": "± 4076585.200374029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62546.515789473684,
            "unit": "ns",
            "range": "± 7770.633734476639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742995.3195876288,
            "unit": "ns",
            "range": "± 197198.30582349643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3354265.8333333335,
            "unit": "ns",
            "range": "± 218789.63471708412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2812601.71875,
            "unit": "ns",
            "range": "± 212216.6873308954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7079541.610526316,
            "unit": "ns",
            "range": "± 436458.083697385"
          }
        ]
      }
    ]
  }
}