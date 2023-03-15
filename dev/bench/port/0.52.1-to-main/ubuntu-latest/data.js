window.BENCHMARK_DATA = {
  "lastUpdate": 1678875553911,
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
      }
    ]
  }
}