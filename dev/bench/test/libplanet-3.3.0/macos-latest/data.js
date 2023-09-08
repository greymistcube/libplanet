window.BENCHMARK_DATA = {
  "lastUpdate": 1694174145337,
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
      }
    ]
  }
}