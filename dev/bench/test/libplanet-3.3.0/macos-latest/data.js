window.BENCHMARK_DATA = {
  "lastUpdate": 1694411275535,
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
          "id": "a3e6a6f8dfd6d77a0266a59859eb29e337503444",
          "message": "Parallel on Account level",
          "timestamp": "2023-09-07T18:31:10+09:00",
          "tree_id": "e11338d9a9bb3de5c4fbbb380eeebf73e8491981",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e6a6f8dfd6d77a0266a59859eb29e337503444"
        },
        "date": 1694080183661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8801197.883561645,
            "unit": "ns",
            "range": "± 437595.4397670686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21476466.3630137,
            "unit": "ns",
            "range": "± 1063323.4636003461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53381793.73469388,
            "unit": "ns",
            "range": "± 2009246.2824655562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104039346.8974359,
            "unit": "ns",
            "range": "± 3546978.598560506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215547585.62222221,
            "unit": "ns",
            "range": "± 8048055.994042911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66101.86956521739,
            "unit": "ns",
            "range": "± 9296.399945077865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331048.95263157896,
            "unit": "ns",
            "range": "± 37296.04633138102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319591.9247311828,
            "unit": "ns",
            "range": "± 37413.90642651605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299383.8829787234,
            "unit": "ns",
            "range": "± 25619.442956371262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564578.191919192,
            "unit": "ns",
            "range": "± 450813.48447997094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039972.287878788,
            "unit": "ns",
            "range": "± 300697.99492898467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20847.607526881722,
            "unit": "ns",
            "range": "± 4005.2147976442925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102493.63265306123,
            "unit": "ns",
            "range": "± 17639.55952321212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108372.36813186813,
            "unit": "ns",
            "range": "± 13773.267205559869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110571.07142857143,
            "unit": "ns",
            "range": "± 22170.209255507485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7608.20202020202,
            "unit": "ns",
            "range": "± 1352.302284615192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22854.978723404256,
            "unit": "ns",
            "range": "± 5355.782879991211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693048.4315789475,
            "unit": "ns",
            "range": "± 223477.50718821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956609.873493976,
            "unit": "ns",
            "range": "± 156406.13556361583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940130.8924731184,
            "unit": "ns",
            "range": "± 175657.36267124914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5703491.8,
            "unit": "ns",
            "range": "± 423930.61663418263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468882.1979166665,
            "unit": "ns",
            "range": "± 272112.4558937321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660967.76,
            "unit": "ns",
            "range": "± 291826.9978367604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5349651.479166667,
            "unit": "ns",
            "range": "± 344680.0805274968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4099383.974226804,
            "unit": "ns",
            "range": "± 338630.36310684984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7021352.344086021,
            "unit": "ns",
            "range": "± 484848.75126553624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207646.880208333,
            "unit": "ns",
            "range": "± 79490.8334777233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1815478.2135416667,
            "unit": "ns",
            "range": "± 53741.065550942796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1045171.541155134,
            "unit": "ns",
            "range": "± 12133.86392499047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911239.691840278,
            "unit": "ns",
            "range": "± 61440.1241384143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807661.25625,
            "unit": "ns",
            "range": "± 6510.622856622034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746227.4021484375,
            "unit": "ns",
            "range": "± 10455.241142832821"
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
          "id": "f24a4327a1ed2583f43238d02507c97d43621e7e",
          "message": "Remove metrics",
          "timestamp": "2023-09-07T22:12:39+09:00",
          "tree_id": "cdc7d99617b6a4f2ea2964420c4ae7788e6e8fc9",
          "url": "https://github.com/greymistcube/libplanet/commit/f24a4327a1ed2583f43238d02507c97d43621e7e"
        },
        "date": 1694093466674,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9055426.181818182,
            "unit": "ns",
            "range": "± 493807.0180340137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23278785.97826087,
            "unit": "ns",
            "range": "± 882460.9435205739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58353081.875,
            "unit": "ns",
            "range": "± 1476632.352829906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113324821.64285715,
            "unit": "ns",
            "range": "± 1777616.5313186105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225474913.92857143,
            "unit": "ns",
            "range": "± 2717548.571715366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85590.47674418605,
            "unit": "ns",
            "range": "± 8842.767194954231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336056.9285714286,
            "unit": "ns",
            "range": "± 17942.32211992298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353647.75531914894,
            "unit": "ns",
            "range": "± 40425.017316927595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320933.91538461536,
            "unit": "ns",
            "range": "± 13429.779171318665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249729.909090909,
            "unit": "ns",
            "range": "± 98894.70594040392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3701367.346153846,
            "unit": "ns",
            "range": "± 99377.53945029725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25365.60824742268,
            "unit": "ns",
            "range": "± 3783.703073590465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115192.27835051547,
            "unit": "ns",
            "range": "± 12270.296092717726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116115.5425531915,
            "unit": "ns",
            "range": "± 7460.089587897726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115051.1978021978,
            "unit": "ns",
            "range": "± 11860.675738871785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8618.790322580646,
            "unit": "ns",
            "range": "± 877.1276936020153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25293.380434782608,
            "unit": "ns",
            "range": "± 3171.3610758567293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1543732.7448979593,
            "unit": "ns",
            "range": "± 135423.39100999347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912567.724637681,
            "unit": "ns",
            "range": "± 133085.2316622127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106410.1764705884,
            "unit": "ns",
            "range": "± 37486.127502776435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5320036.645833333,
            "unit": "ns",
            "range": "± 206733.6258721198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3403313.095238095,
            "unit": "ns",
            "range": "± 154525.07488124797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660577.086956522,
            "unit": "ns",
            "range": "± 231556.71644000284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4556282.432835821,
            "unit": "ns",
            "range": "± 204950.40461818635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4265093.810526316,
            "unit": "ns",
            "range": "± 381441.3276340399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7053740.185393258,
            "unit": "ns",
            "range": "± 399691.62198709225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5769553.5453125,
            "unit": "ns",
            "range": "± 62003.52569274382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1670672.6161458334,
            "unit": "ns",
            "range": "± 9344.74710036688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1003994.1842447916,
            "unit": "ns",
            "range": "± 11451.090362090754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645684.6033935547,
            "unit": "ns",
            "range": "± 82333.52131979637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783454.7931640625,
            "unit": "ns",
            "range": "± 3517.192748239049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714269.9803936298,
            "unit": "ns",
            "range": "± 1528.0179836829984"
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
          "id": "ef5555cd29e15a4e969485539a0ee47e8da59eae",
          "message": "More caching",
          "timestamp": "2023-09-08T20:40:03+09:00",
          "tree_id": "3b0d2d056f0818d09d76a7fd624d6c5176d26d78",
          "url": "https://github.com/greymistcube/libplanet/commit/ef5555cd29e15a4e969485539a0ee47e8da59eae"
        },
        "date": 1694174125661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7654012.461538462,
            "unit": "ns",
            "range": "± 67898.9212378903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20142215.63235294,
            "unit": "ns",
            "range": "± 958208.6781571949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51828605.28571428,
            "unit": "ns",
            "range": "± 501814.83167544036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102814896.35714285,
            "unit": "ns",
            "range": "± 1393125.7321943815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208157784.0952381,
            "unit": "ns",
            "range": "± 4750474.457856855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66786.44444444444,
            "unit": "ns",
            "range": "± 10892.19945857362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305124.72641509434,
            "unit": "ns",
            "range": "± 12702.768098758135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306719.09139784944,
            "unit": "ns",
            "range": "± 20317.69712282147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300456.1612903226,
            "unit": "ns",
            "range": "± 9155.622269391904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4134302.785714286,
            "unit": "ns",
            "range": "± 53903.03360119992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3730029.4,
            "unit": "ns",
            "range": "± 52958.597647866125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22785.052631578947,
            "unit": "ns",
            "range": "± 3625.0523939527516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97862.83838383839,
            "unit": "ns",
            "range": "± 11997.645986547175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104485.80303030302,
            "unit": "ns",
            "range": "± 11572.174649188339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102053.5632183908,
            "unit": "ns",
            "range": "± 10433.431853846743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7538.278947368421,
            "unit": "ns",
            "range": "± 878.2776445001134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21625.45918367347,
            "unit": "ns",
            "range": "± 3579.2219304176756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437300.51,
            "unit": "ns",
            "range": "± 153894.06129434158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2807379.4938271604,
            "unit": "ns",
            "range": "± 147173.52356581698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892342.1326530613,
            "unit": "ns",
            "range": "± 157720.6901980499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419621.766666667,
            "unit": "ns",
            "range": "± 238668.25243388143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3157017.5223880596,
            "unit": "ns",
            "range": "± 141174.38448474716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480513.896551724,
            "unit": "ns",
            "range": "± 85481.14091856118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4323401.166666667,
            "unit": "ns",
            "range": "± 75014.73948085771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4072634,
            "unit": "ns",
            "range": "± 67044.07918675593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6800877.75,
            "unit": "ns",
            "range": "± 176095.35052357783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5510126.487723215,
            "unit": "ns",
            "range": "± 29492.878870458702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1768750.0766927083,
            "unit": "ns",
            "range": "± 2756.6815367580707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 983205.147265625,
            "unit": "ns",
            "range": "± 1938.6861740056681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2447565.0465959823,
            "unit": "ns",
            "range": "± 21911.542884529426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847146.0766927083,
            "unit": "ns",
            "range": "± 7376.463936458127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693489.4611979167,
            "unit": "ns",
            "range": "± 6527.0517573650495"
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
          "id": "ba5e7833214ca8143f1722794446e97c1e2c0d51",
          "message": "Detailed logging; huge cache",
          "timestamp": "2023-09-08T21:36:41+09:00",
          "tree_id": "1317f701bc3f6339a40fc2b723aa5cbf8d575424",
          "url": "https://github.com/greymistcube/libplanet/commit/ba5e7833214ca8143f1722794446e97c1e2c0d51"
        },
        "date": 1694177684099,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8672567.92857143,
            "unit": "ns",
            "range": "± 125178.14158458909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21967950.173913043,
            "unit": "ns",
            "range": "± 546786.0598636739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57283629.46,
            "unit": "ns",
            "range": "± 1485142.5613352037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106424324.07142857,
            "unit": "ns",
            "range": "± 1435374.5983497163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225055046.33870968,
            "unit": "ns",
            "range": "± 6855368.964239679"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73216.5989010989,
            "unit": "ns",
            "range": "± 5140.123275769745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359729.3052631579,
            "unit": "ns",
            "range": "± 41320.40323948821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365046.829787234,
            "unit": "ns",
            "range": "± 51611.24861130592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321766.9285714286,
            "unit": "ns",
            "range": "± 17220.795972735854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4754217.297752809,
            "unit": "ns",
            "range": "± 422139.20034303155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010356.336734694,
            "unit": "ns",
            "range": "± 295987.271437723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26642.684782608696,
            "unit": "ns",
            "range": "± 2903.0196250632107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111409.40425531915,
            "unit": "ns",
            "range": "± 6703.740622178341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119504.36956521739,
            "unit": "ns",
            "range": "± 9767.829044702617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116264.85106382979,
            "unit": "ns",
            "range": "± 15405.000134335274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9543.152631578947,
            "unit": "ns",
            "range": "± 816.5373148620645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25151.563218390806,
            "unit": "ns",
            "range": "± 2442.439714812189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1581342.4444444445,
            "unit": "ns",
            "range": "± 161420.17509271792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2940286.92,
            "unit": "ns",
            "range": "± 113539.64531006925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2040934.3608247424,
            "unit": "ns",
            "range": "± 164203.4216226544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5472314.060606061,
            "unit": "ns",
            "range": "± 171547.08795563597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3610969.369047619,
            "unit": "ns",
            "range": "± 365661.1336650033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3612716.6086956523,
            "unit": "ns",
            "range": "± 231648.2203819639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467810.754237288,
            "unit": "ns",
            "range": "± 181155.96445077212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137898.5430107526,
            "unit": "ns",
            "range": "± 390794.42197347846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7771161.145833333,
            "unit": "ns",
            "range": "± 689619.1243112311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6323830.679036458,
            "unit": "ns",
            "range": "± 61912.76266279219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955122.811328125,
            "unit": "ns",
            "range": "± 21671.780266518053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070522.8283854167,
            "unit": "ns",
            "range": "± 7948.428821896143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2839049.3072150736,
            "unit": "ns",
            "range": "± 55379.8515135913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831937.59375,
            "unit": "ns",
            "range": "± 3633.379927720586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821587.2727213542,
            "unit": "ns",
            "range": "± 5002.076183631041"
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
          "id": "63c94c408040a87c9c6ca1a4d39782905189e59d",
          "message": "Detailed logging; huge cache",
          "timestamp": "2023-09-09T00:11:19+09:00",
          "tree_id": "b872e70bed61f03f3edf55a49e14b57f2bbd4c5a",
          "url": "https://github.com/greymistcube/libplanet/commit/63c94c408040a87c9c6ca1a4d39782905189e59d"
        },
        "date": 1694186944780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8934008.878787879,
            "unit": "ns",
            "range": "± 281941.5306127049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23622893.98809524,
            "unit": "ns",
            "range": "± 2525414.224548784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 84536384.47979797,
            "unit": "ns",
            "range": "± 49448162.463384606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109574543.33928572,
            "unit": "ns",
            "range": "± 3191077.078285665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231685889,
            "unit": "ns",
            "range": "± 5146634.796290459"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61889.85106382979,
            "unit": "ns",
            "range": "± 10721.184731022933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350923.56842105265,
            "unit": "ns",
            "range": "± 28892.511816324295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348787.7916666667,
            "unit": "ns",
            "range": "± 37293.84647531762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342735.6022727273,
            "unit": "ns",
            "range": "± 41108.21383078127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4371914.538461538,
            "unit": "ns",
            "range": "± 119507.03794546354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3865896.293650794,
            "unit": "ns",
            "range": "± 176236.69964285285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26910.69387755102,
            "unit": "ns",
            "range": "± 5197.639695108571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109901.45652173914,
            "unit": "ns",
            "range": "± 8826.691785556452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111995.57731958762,
            "unit": "ns",
            "range": "± 9707.164800027705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113103.82474226804,
            "unit": "ns",
            "range": "± 12934.78816909583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8493.364583333334,
            "unit": "ns",
            "range": "± 802.5197767006206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18857.808510638297,
            "unit": "ns",
            "range": "± 2579.33215506715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591041.4090909092,
            "unit": "ns",
            "range": "± 163662.05374297732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2997420.461038961,
            "unit": "ns",
            "range": "± 151843.48460602813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2129308.9166666665,
            "unit": "ns",
            "range": "± 160453.60356496347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6078002.818681318,
            "unit": "ns",
            "range": "± 520725.09699394443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506385.3,
            "unit": "ns",
            "range": "± 216903.34721637517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625937.821917808,
            "unit": "ns",
            "range": "± 180265.40209271552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4603080.661290322,
            "unit": "ns",
            "range": "± 207388.32436553817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4176441.679775281,
            "unit": "ns",
            "range": "± 313405.95053368376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7809579.894366197,
            "unit": "ns",
            "range": "± 378320.9764541396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5212795.6328125,
            "unit": "ns",
            "range": "± 53023.09693840214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1592283.5278320312,
            "unit": "ns",
            "range": "± 5768.417425435485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995048.5889423077,
            "unit": "ns",
            "range": "± 2156.0607750824324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624347.6865234375,
            "unit": "ns",
            "range": "± 79987.03367052498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778940.4533854167,
            "unit": "ns",
            "range": "± 5378.0205289015075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766134.7717633928,
            "unit": "ns",
            "range": "± 3280.986525453503"
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
          "id": "5dcaa8d4db717b2b4f5df60e0cbd0bf388f6071c",
          "message": "Use Nibbles directly",
          "timestamp": "2023-09-09T13:08:21+09:00",
          "tree_id": "00033366101154eccf0b61e2ae1b8625b9c1e25a",
          "url": "https://github.com/greymistcube/libplanet/commit/5dcaa8d4db717b2b4f5df60e0cbd0bf388f6071c"
        },
        "date": 1694233366505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7582484.807692308,
            "unit": "ns",
            "range": "± 83601.06767996907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18875159.722222224,
            "unit": "ns",
            "range": "± 390253.37424618885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46723421.5862069,
            "unit": "ns",
            "range": "± 1363792.1641129015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92108196.73333333,
            "unit": "ns",
            "range": "± 456074.815306572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188246721.33333334,
            "unit": "ns",
            "range": "± 2699578.4656941392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55684.45744680851,
            "unit": "ns",
            "range": "± 4860.847992117305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287641.27956989245,
            "unit": "ns",
            "range": "± 19239.4497369821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281251.05376344087,
            "unit": "ns",
            "range": "± 19263.50492080905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256910.17441860464,
            "unit": "ns",
            "range": "± 8319.079670140172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3884099.117647059,
            "unit": "ns",
            "range": "± 76046.43299153021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3501377.6428571427,
            "unit": "ns",
            "range": "± 100296.6023128269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18325.451807228917,
            "unit": "ns",
            "range": "± 1879.9789042901418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84431.96842105263,
            "unit": "ns",
            "range": "± 9363.868020615348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75905,
            "unit": "ns",
            "range": "± 7366.150514047646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87024.26041666667,
            "unit": "ns",
            "range": "± 14583.867315593547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5388.718390804598,
            "unit": "ns",
            "range": "± 536.0546098804901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18104.333333333332,
            "unit": "ns",
            "range": "± 2238.461485088524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490014.0625,
            "unit": "ns",
            "range": "± 160214.4948288363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2777298.0588235296,
            "unit": "ns",
            "range": "± 132234.72277224768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1926510,
            "unit": "ns",
            "range": "± 152942.97254072645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5578017.603174604,
            "unit": "ns",
            "range": "± 255936.3668809949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3160897.46875,
            "unit": "ns",
            "range": "± 145275.3501259633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3274352.2,
            "unit": "ns",
            "range": "± 133841.81231167848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174424.7291666665,
            "unit": "ns",
            "range": "± 112031.06252907349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3675474.2666666666,
            "unit": "ns",
            "range": "± 163518.67231783867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6790996.237288136,
            "unit": "ns",
            "range": "± 293682.90384865314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4967793.756696428,
            "unit": "ns",
            "range": "± 31500.835588126203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1704704.98984375,
            "unit": "ns",
            "range": "± 11964.999323638676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 961595.8816266741,
            "unit": "ns",
            "range": "± 7284.213716459451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2462509.50859375,
            "unit": "ns",
            "range": "± 12098.93341617899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 751550.8444475447,
            "unit": "ns",
            "range": "± 3316.121646863302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732953.640485491,
            "unit": "ns",
            "range": "± 4050.582743765429"
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
          "id": "5ce3494629d6661365656da8962c2600715ace1d",
          "message": "Changed ITrie.Get() traversal from recursion to loop",
          "timestamp": "2023-09-10T14:51:26+09:00",
          "tree_id": "c853e69d4c380a552dbf41f02f7bc5b89a7e93fd",
          "url": "https://github.com/greymistcube/libplanet/commit/5ce3494629d6661365656da8962c2600715ace1d"
        },
        "date": 1694326106053,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8368932.846153846,
            "unit": "ns",
            "range": "± 292396.6818799365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21656930.881355934,
            "unit": "ns",
            "range": "± 951203.1321533703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56032350.98611111,
            "unit": "ns",
            "range": "± 2691625.910016786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116892882.85714285,
            "unit": "ns",
            "range": "± 941964.8356222758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239271387.53,
            "unit": "ns",
            "range": "± 17146477.670589976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55779.98837209302,
            "unit": "ns",
            "range": "± 4739.644601951119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343480.9797979798,
            "unit": "ns",
            "range": "± 63781.56574270831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311783.39795918367,
            "unit": "ns",
            "range": "± 33448.86018853498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289878.2087912088,
            "unit": "ns",
            "range": "± 19770.867468472945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4712541.181818182,
            "unit": "ns",
            "range": "± 523493.48249743565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4433363.292929293,
            "unit": "ns",
            "range": "± 550825.4179110128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21851.606741573032,
            "unit": "ns",
            "range": "± 4637.977413842987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80182.34831460674,
            "unit": "ns",
            "range": "± 5934.068687175472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88917.11340206186,
            "unit": "ns",
            "range": "± 7467.127525132362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107244.5425531915,
            "unit": "ns",
            "range": "± 13313.22416449463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5451.333333333333,
            "unit": "ns",
            "range": "± 1361.74991585582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17081.34831460674,
            "unit": "ns",
            "range": "± 2094.865823980162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549514.1565656567,
            "unit": "ns",
            "range": "± 156171.94989048172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2852898.277777778,
            "unit": "ns",
            "range": "± 145453.4693789564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2023108.2947368422,
            "unit": "ns",
            "range": "± 169736.4049520937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6110450.393939394,
            "unit": "ns",
            "range": "± 433290.5320991819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3932054.6767676766,
            "unit": "ns",
            "range": "± 351229.4185707796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660710.736842105,
            "unit": "ns",
            "range": "± 295545.32831081067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4717412.76,
            "unit": "ns",
            "range": "± 400089.69050083373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4228886.9387755105,
            "unit": "ns",
            "range": "± 376389.9080655719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7742232.9677419355,
            "unit": "ns",
            "range": "± 572265.9638830809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5522460.591145833,
            "unit": "ns",
            "range": "± 149155.03993349485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1700200.1296875,
            "unit": "ns",
            "range": "± 22353.64215248428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 950528.2201772836,
            "unit": "ns",
            "range": "± 7404.960716737143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2340223.2332899305,
            "unit": "ns",
            "range": "± 47389.60912393545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 737928.2141927084,
            "unit": "ns",
            "range": "± 3260.37387004293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740914.6319010417,
            "unit": "ns",
            "range": "± 7894.667732196008"
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
          "id": "c68d3d8dc425035b59035d663d4752d62e5ec2ed",
          "message": "Added diff query",
          "timestamp": "2023-09-11T02:51:59+09:00",
          "tree_id": "2701395fbecc840210ea8aacd1d03fa59d8e943b",
          "url": "https://github.com/greymistcube/libplanet/commit/c68d3d8dc425035b59035d663d4752d62e5ec2ed"
        },
        "date": 1694369346175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8831756.357142856,
            "unit": "ns",
            "range": "± 153455.38729626682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21468436.44736842,
            "unit": "ns",
            "range": "± 927151.5317467263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54113990.083333336,
            "unit": "ns",
            "range": "± 2096291.519191672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102198314.05882353,
            "unit": "ns",
            "range": "± 3251735.3317097216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208138217.06666666,
            "unit": "ns",
            "range": "± 2522320.600188119"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64624.607142857145,
            "unit": "ns",
            "range": "± 10060.67365707512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337464.88636363635,
            "unit": "ns",
            "range": "± 31764.84859209772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318898.3870967742,
            "unit": "ns",
            "range": "± 24519.35345405847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291992.86666666664,
            "unit": "ns",
            "range": "± 19721.81661881246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4430575.768292683,
            "unit": "ns",
            "range": "± 283322.5768671628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4146090.0588235296,
            "unit": "ns",
            "range": "± 330894.2594210693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19169.470588235294,
            "unit": "ns",
            "range": "± 3644.911543077931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90556.6043956044,
            "unit": "ns",
            "range": "± 12583.88742433851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87166.6170212766,
            "unit": "ns",
            "range": "± 10003.605251029094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83876.64285714286,
            "unit": "ns",
            "range": "± 18360.329123781055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5007.871794871795,
            "unit": "ns",
            "range": "± 560.0126009476155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18813.564705882352,
            "unit": "ns",
            "range": "± 2214.462701935462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564755.4361702127,
            "unit": "ns",
            "range": "± 139285.48633418602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071133.7906976743,
            "unit": "ns",
            "range": "± 167310.78626787133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2097113.3010752688,
            "unit": "ns",
            "range": "± 180823.0790792231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6524600.344086021,
            "unit": "ns",
            "range": "± 526986.4617073544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3552404.296296296,
            "unit": "ns",
            "range": "± 186896.3832897419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3879354.258426966,
            "unit": "ns",
            "range": "± 430741.44745526044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4924970.25862069,
            "unit": "ns",
            "range": "± 667602.3062322562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4153000.153846154,
            "unit": "ns",
            "range": "± 212628.35816402282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8170108.684782608,
            "unit": "ns",
            "range": "± 595437.7482052282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5788769.4765625,
            "unit": "ns",
            "range": "± 115831.78005455993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872736.1248697916,
            "unit": "ns",
            "range": "± 27726.00649817396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064960.328125,
            "unit": "ns",
            "range": "± 19555.75265017016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624764.7334735575,
            "unit": "ns",
            "range": "± 20231.81099385834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842549.1313852164,
            "unit": "ns",
            "range": "± 7075.077376335771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769722.638671875,
            "unit": "ns",
            "range": "± 7083.018454839715"
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
          "id": "e7e0df88f1737b4e0d96f8bf8d1de655eb7f268d",
          "message": "Move from block query to state query",
          "timestamp": "2023-09-11T14:26:27+09:00",
          "tree_id": "89cb20479bb0665e963fd4182b0814f73e555956",
          "url": "https://github.com/greymistcube/libplanet/commit/e7e0df88f1737b4e0d96f8bf8d1de655eb7f268d"
        },
        "date": 1694411262586,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8189242.166666667,
            "unit": "ns",
            "range": "± 315537.6155700477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21436249.29896907,
            "unit": "ns",
            "range": "± 1798616.353002723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49213426.141509436,
            "unit": "ns",
            "range": "± 2044047.1997812623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103185572.41666667,
            "unit": "ns",
            "range": "± 3414551.640414079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222601850.68,
            "unit": "ns",
            "range": "± 15004542.94045805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64812.65957446808,
            "unit": "ns",
            "range": "± 11903.463853468089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362680.13157894736,
            "unit": "ns",
            "range": "± 61796.835310943956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328311.58510638296,
            "unit": "ns",
            "range": "± 50436.17759634758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306520.15555555554,
            "unit": "ns",
            "range": "± 31663.249710038446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4125574.8492063493,
            "unit": "ns",
            "range": "± 188512.855181418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4226171.224489796,
            "unit": "ns",
            "range": "± 417573.2319726112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19656.522222222222,
            "unit": "ns",
            "range": "± 3434.325395306761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88587.48387096774,
            "unit": "ns",
            "range": "± 14179.434885265982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87494.40404040404,
            "unit": "ns",
            "range": "± 21409.167097640147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92700.6559139785,
            "unit": "ns",
            "range": "± 15172.74973896253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5299.313186813187,
            "unit": "ns",
            "range": "± 903.2751138937303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17907.960674157304,
            "unit": "ns",
            "range": "± 3310.3929080733405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586524.030612245,
            "unit": "ns",
            "range": "± 201068.7403949311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2899683.945054945,
            "unit": "ns",
            "range": "± 179308.48611128022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087637.2708333333,
            "unit": "ns",
            "range": "± 212960.99995496977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6063453.969387755,
            "unit": "ns",
            "range": "± 473632.62916875054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3246268.796875,
            "unit": "ns",
            "range": "± 149273.5189900485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411631.7216494847,
            "unit": "ns",
            "range": "± 270105.4247388394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4368740.112903226,
            "unit": "ns",
            "range": "± 193131.6022252112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3919392.425925926,
            "unit": "ns",
            "range": "± 163296.6634770585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7519125.25,
            "unit": "ns",
            "range": "± 577484.9636057885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6969732.99140625,
            "unit": "ns",
            "range": "± 388094.70847910247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1724305.0648716518,
            "unit": "ns",
            "range": "± 9128.53812661438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 993323.5777064732,
            "unit": "ns",
            "range": "± 2289.607605037704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2746604.4406654094,
            "unit": "ns",
            "range": "± 120214.3809775527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823863.1340680803,
            "unit": "ns",
            "range": "± 5790.1771819787555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710710.8908854167,
            "unit": "ns",
            "range": "± 8123.0983380058215"
          }
        ]
      }
    ]
  }
}