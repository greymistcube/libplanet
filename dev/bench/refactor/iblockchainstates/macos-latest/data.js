window.BENCHMARK_DATA = {
  "lastUpdate": 1704595243208,
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
          "id": "47423efb53fe7d199ca1c6a6c65d71408d84ba05",
          "message": "Removed arguments to redirect to legacy by default; removed GetAccountState()",
          "timestamp": "2024-01-06T19:37:09+09:00",
          "tree_id": "8d0db7b7b7b68a376e7c8289e76431a2128dd358",
          "url": "https://github.com/greymistcube/libplanet/commit/47423efb53fe7d199ca1c6a6c65d71408d84ba05"
        },
        "date": 1704594743435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8280325.266666667,
            "unit": "ns",
            "range": "± 349054.8700079012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19921085.530864198,
            "unit": "ns",
            "range": "± 1035777.2143076676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50465970.69354839,
            "unit": "ns",
            "range": "± 3999689.6144178933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92586645,
            "unit": "ns",
            "range": "± 746697.79792564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188823042.64285713,
            "unit": "ns",
            "range": "± 1620731.6862737127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42528.92941176471,
            "unit": "ns",
            "range": "± 5842.91037800805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221946.64736842105,
            "unit": "ns",
            "range": "± 22039.40792972772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214638.4255319149,
            "unit": "ns",
            "range": "± 25311.336981587327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206383.89583333334,
            "unit": "ns",
            "range": "± 29357.458292921307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3816725.1363636362,
            "unit": "ns",
            "range": "± 92761.5684186103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3566481.35,
            "unit": "ns",
            "range": "± 81737.23365457528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13087.170329670329,
            "unit": "ns",
            "range": "± 1295.520367822607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63002.83516483517,
            "unit": "ns",
            "range": "± 6369.045838644098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87484.53448275862,
            "unit": "ns",
            "range": "± 7264.780109107284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86681.47938144329,
            "unit": "ns",
            "range": "± 22103.58744307668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3614.949438202247,
            "unit": "ns",
            "range": "± 618.7973124470776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12584.011363636364,
            "unit": "ns",
            "range": "± 1198.4716368096492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1123923.8131868131,
            "unit": "ns",
            "range": "± 127017.91023368074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2392420.010638298,
            "unit": "ns",
            "range": "± 156573.18416648536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1962071.4516129033,
            "unit": "ns",
            "range": "± 297640.25047411484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21041890.095505618,
            "unit": "ns",
            "range": "± 2577843.9319935907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948215.4285714286,
            "unit": "ns",
            "range": "± 48264.049499704124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2945278.976190476,
            "unit": "ns",
            "range": "± 100286.38489583234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3561771.175,
            "unit": "ns",
            "range": "± 125423.20742025369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3963958.511111111,
            "unit": "ns",
            "range": "± 454686.45082755963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21889117.576086957,
            "unit": "ns",
            "range": "± 2915114.345143152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368998.912946428,
            "unit": "ns",
            "range": "± 42441.74812496369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1367032.0095052083,
            "unit": "ns",
            "range": "± 13643.13941106427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 917818.0588169643,
            "unit": "ns",
            "range": "± 30033.498446594713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2224145.2431441327,
            "unit": "ns",
            "range": "± 150767.6188400402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 684751.2717871093,
            "unit": "ns",
            "range": "± 49093.37502553708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571650.3592447917,
            "unit": "ns",
            "range": "± 6060.425202846827"
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
          "id": "74cdc54b8909688ab3000808a3bbdecc052476a8",
          "message": "Changelog",
          "timestamp": "2024-01-07T11:18:21+09:00",
          "tree_id": "63a306cd17f2b45b0a1dff2f1d00badac83d7391",
          "url": "https://github.com/greymistcube/libplanet/commit/74cdc54b8909688ab3000808a3bbdecc052476a8"
        },
        "date": 1704595219611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641487.357142857,
            "unit": "ns",
            "range": "± 51017.77022063699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18811412.92857143,
            "unit": "ns",
            "range": "± 91030.26424193244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47060002.56666667,
            "unit": "ns",
            "range": "± 741953.3831613938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93716215.36666666,
            "unit": "ns",
            "range": "± 1696770.0267527571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191879077.3,
            "unit": "ns",
            "range": "± 3267100.4828217593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46527.79787234042,
            "unit": "ns",
            "range": "± 11219.925054691703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226140.68181818182,
            "unit": "ns",
            "range": "± 18713.917609446064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212637.8404255319,
            "unit": "ns",
            "range": "± 17608.413504218726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194699.3829787234,
            "unit": "ns",
            "range": "± 15548.458006113637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3929987.4375,
            "unit": "ns",
            "range": "± 74007.98770580444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3458246.3333333335,
            "unit": "ns",
            "range": "± 62736.67791385408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13875.226804123711,
            "unit": "ns",
            "range": "± 2115.953702949111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62292.897849462366,
            "unit": "ns",
            "range": "± 6958.4796817479955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56775.51052631579,
            "unit": "ns",
            "range": "± 9177.921147242136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63092.32978723404,
            "unit": "ns",
            "range": "± 10976.74221078886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3549.943181818182,
            "unit": "ns",
            "range": "± 684.9138440315551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12160.744186046511,
            "unit": "ns",
            "range": "± 803.5290680498711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1248351.4101123596,
            "unit": "ns",
            "range": "± 105247.63024655024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2795435.857894737,
            "unit": "ns",
            "range": "± 159950.83741208736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198191.2263157894,
            "unit": "ns",
            "range": "± 183234.32171562148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23796887.03763441,
            "unit": "ns",
            "range": "± 3138812.641038683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2867962.617647059,
            "unit": "ns",
            "range": "± 91782.32886465169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3103271.1428571427,
            "unit": "ns",
            "range": "± 49457.87356910952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3896850.121212121,
            "unit": "ns",
            "range": "± 262909.84091782133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3967223.24,
            "unit": "ns",
            "range": "± 235512.49798971592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22710874.231578946,
            "unit": "ns",
            "range": "± 2947392.319244859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4339208.862723215,
            "unit": "ns",
            "range": "± 57146.034177155714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1350007.9625901442,
            "unit": "ns",
            "range": "± 5351.185706244641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002090.2663602941,
            "unit": "ns",
            "range": "± 54074.62338291527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2322177.9644621047,
            "unit": "ns",
            "range": "± 219168.71976580392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 751115.1001481682,
            "unit": "ns",
            "range": "± 48127.788982972714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 670472.229211566,
            "unit": "ns",
            "range": "± 35632.896700675046"
          }
        ]
      }
    ]
  }
}