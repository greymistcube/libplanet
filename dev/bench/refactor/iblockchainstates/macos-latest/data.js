window.BENCHMARK_DATA = {
  "lastUpdate": 1704761392427,
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
          "id": "077e3f72ba03285187d2f1c3071f9bd4014f72f2",
          "message": "Remove direct access to lower level data",
          "timestamp": "2024-01-09T09:23:39+09:00",
          "tree_id": "779d437ba8029b16cf2eb6d461e57fc93d041c3d",
          "url": "https://github.com/greymistcube/libplanet/commit/077e3f72ba03285187d2f1c3071f9bd4014f72f2"
        },
        "date": 1704760998208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8286994.766666667,
            "unit": "ns",
            "range": "± 107603.90039363728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22672883.117021278,
            "unit": "ns",
            "range": "± 2049995.8008095995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57459416.84615385,
            "unit": "ns",
            "range": "± 2658801.2310502254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122321163.48235294,
            "unit": "ns",
            "range": "± 6580077.7685856065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230270339.45604396,
            "unit": "ns",
            "range": "± 20759812.30366208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56461.27419354839,
            "unit": "ns",
            "range": "± 10534.009657263792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282737.5138888889,
            "unit": "ns",
            "range": "± 13796.04684907152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271125.73913043475,
            "unit": "ns",
            "range": "± 43219.737826464676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265884.8296703297,
            "unit": "ns",
            "range": "± 21839.770403786526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4473240.409090909,
            "unit": "ns",
            "range": "± 130293.32685946667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961014.9552238807,
            "unit": "ns",
            "range": "± 183021.08553259177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20049.391304347828,
            "unit": "ns",
            "range": "± 3510.0607237993363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85164.66842105263,
            "unit": "ns",
            "range": "± 11163.603573098158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85272.9247311828,
            "unit": "ns",
            "range": "± 9851.671333858025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89709.34375,
            "unit": "ns",
            "range": "± 12201.84432851994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6878.789473684211,
            "unit": "ns",
            "range": "± 1459.6021819918099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20242.86170212766,
            "unit": "ns",
            "range": "± 2970.7043220152495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307756.7197802197,
            "unit": "ns",
            "range": "± 159823.92240009367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2772931.5568181816,
            "unit": "ns",
            "range": "± 231594.06679878273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1926089.0631578946,
            "unit": "ns",
            "range": "± 177765.96023733664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21563591.704301074,
            "unit": "ns",
            "range": "± 2885937.327635047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3350315.488235294,
            "unit": "ns",
            "range": "± 242643.55847339286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506109.5512820515,
            "unit": "ns",
            "range": "± 120888.24044000935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3862570.7317073173,
            "unit": "ns",
            "range": "± 94744.58946478802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4278845.083333333,
            "unit": "ns",
            "range": "± 427953.8256292972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24462472.583333332,
            "unit": "ns",
            "range": "± 3605740.3401576458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5203773.482991536,
            "unit": "ns",
            "range": "± 337352.1338772495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1387066.876953125,
            "unit": "ns",
            "range": "± 11636.297260409512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 977494.1489583333,
            "unit": "ns",
            "range": "± 17752.649737887725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2098963.436565897,
            "unit": "ns",
            "range": "± 75308.98642089019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648625.334455819,
            "unit": "ns",
            "range": "± 17278.984675325002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596354.7458215932,
            "unit": "ns",
            "range": "± 26871.96437169533"
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
          "id": "4ef421f019a4d18b6b904a749791f29e31fd9e43",
          "message": "Remove direct access to lower level data",
          "timestamp": "2024-01-09T09:24:36+09:00",
          "tree_id": "e2a7d595b94e704435fbe64917636259acd9f815",
          "url": "https://github.com/greymistcube/libplanet/commit/4ef421f019a4d18b6b904a749791f29e31fd9e43"
        },
        "date": 1704761376241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13795177.142857144,
            "unit": "ns",
            "range": "± 2059625.05824453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32587090.02173913,
            "unit": "ns",
            "range": "± 7053767.309435938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 84433664.06818181,
            "unit": "ns",
            "range": "± 13787347.747661129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 180764163.56043956,
            "unit": "ns",
            "range": "± 23959263.074474603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 395523636.08762884,
            "unit": "ns",
            "range": "± 92015909.6197715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79164.75531914894,
            "unit": "ns",
            "range": "± 19895.16995467767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300456.65853658534,
            "unit": "ns",
            "range": "± 33672.19580943418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353206.2727272727,
            "unit": "ns",
            "range": "± 89647.87352382224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287874.02352941176,
            "unit": "ns",
            "range": "± 30742.72989047146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3925484.5,
            "unit": "ns",
            "range": "± 45875.641888334016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733402.340425532,
            "unit": "ns",
            "range": "± 343684.1316585296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20747.130434782608,
            "unit": "ns",
            "range": "± 2595.604254184037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98001.48235294118,
            "unit": "ns",
            "range": "± 10367.25932536308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80486.47474747474,
            "unit": "ns",
            "range": "± 17453.61825790639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68606.8085106383,
            "unit": "ns",
            "range": "± 8582.503042764773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7102.831578947368,
            "unit": "ns",
            "range": "± 1126.8961953802018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21306.836734693876,
            "unit": "ns",
            "range": "± 6107.6333580165265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312005.7727272727,
            "unit": "ns",
            "range": "± 113604.41862447615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2987490.785714286,
            "unit": "ns",
            "range": "± 189170.23709278286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279239.329787234,
            "unit": "ns",
            "range": "± 357756.2695183268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23241005.031914894,
            "unit": "ns",
            "range": "± 5015763.322884024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4148273.488888889,
            "unit": "ns",
            "range": "± 447382.3230323542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4453294.979166667,
            "unit": "ns",
            "range": "± 606803.0488113218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5696957.550561798,
            "unit": "ns",
            "range": "± 1318638.4565647028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4875420.269230769,
            "unit": "ns",
            "range": "± 200140.97977598393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39860375.03157895,
            "unit": "ns",
            "range": "± 10619795.325434286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5541894.114182692,
            "unit": "ns",
            "range": "± 149890.0807757594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1389663.714657738,
            "unit": "ns",
            "range": "± 47717.781027327626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 881494.0408528646,
            "unit": "ns",
            "range": "± 14703.211834568316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2024297.9388020833,
            "unit": "ns",
            "range": "± 45878.96781896781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778005.3273046875,
            "unit": "ns",
            "range": "± 29825.720273775776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 642138.4161389803,
            "unit": "ns",
            "range": "± 55356.275611738296"
          }
        ]
      }
    ]
  }
}