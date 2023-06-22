window.BENCHMARK_DATA = {
  "lastUpdate": 1687418015498,
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
          "id": "f941479dea8a2cbd9994461bf0ee6c3932cc3d97",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:28:42+09:00",
          "tree_id": "a45c5f0410ad050d474db2e6ae43492669faf08f",
          "url": "https://github.com/greymistcube/libplanet/commit/f941479dea8a2cbd9994461bf0ee6c3932cc3d97"
        },
        "date": 1687416503029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379428,
            "unit": "ns",
            "range": "± 108269.60463993988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2613820.2898550723,
            "unit": "ns",
            "range": "± 122225.88969477561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248304.1666666665,
            "unit": "ns",
            "range": "± 131067.75661680258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5261306,
            "unit": "ns",
            "range": "± 209477.62864334896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49348.35164835165,
            "unit": "ns",
            "range": "± 2770.3735262540818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7567612,
            "unit": "ns",
            "range": "± 201956.5058785348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21112135.714285713,
            "unit": "ns",
            "range": "± 258054.65314733042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52915106.666666664,
            "unit": "ns",
            "range": "± 843376.0129610607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105450092.85714285,
            "unit": "ns",
            "range": "± 907877.8979782262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210236860,
            "unit": "ns",
            "range": "± 1522148.766804912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869338.619791667,
            "unit": "ns",
            "range": "± 13586.070055993372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564877.4088541667,
            "unit": "ns",
            "range": "± 5923.631411691399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1207184.765625,
            "unit": "ns",
            "range": "± 3819.4365416958344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642607.0833333335,
            "unit": "ns",
            "range": "± 5659.374776344047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838461.50390625,
            "unit": "ns",
            "range": "± 1678.5796264633768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773008.6067708334,
            "unit": "ns",
            "range": "± 2433.924586446717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397300,
            "unit": "ns",
            "range": "± 81640.05389513164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514791.891891892,
            "unit": "ns",
            "range": "± 118892.5410668025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303160,
            "unit": "ns",
            "range": "± 77712.56379394887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4360297.222222222,
            "unit": "ns",
            "range": "± 139017.52096380026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6893386.666666667,
            "unit": "ns",
            "range": "± 200721.47580808264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269781.5789473684,
            "unit": "ns",
            "range": "± 8143.372542040781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264120,
            "unit": "ns",
            "range": "± 8623.388169937138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240896.9387755102,
            "unit": "ns",
            "range": "± 15824.582560456622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4166021.4285714286,
            "unit": "ns",
            "range": "± 41048.41753853104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3841028.5714285714,
            "unit": "ns",
            "range": "± 63884.7180302316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21224.468085106382,
            "unit": "ns",
            "range": "± 1803.800418722479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91244.79166666667,
            "unit": "ns",
            "range": "± 6129.890010031805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81357.57575757576,
            "unit": "ns",
            "range": "± 7724.201179345224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91631.3953488372,
            "unit": "ns",
            "range": "± 10825.158731376992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5539.1752577319585,
            "unit": "ns",
            "range": "± 872.6822518619114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18734.40860215054,
            "unit": "ns",
            "range": "± 1626.8464174629873"
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
          "id": "9982d7ddf8beedf426b76bbcf04554cb73e68add",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:55:48+09:00",
          "tree_id": "50f1af824a018bbeb5812f0906047633ace40cb3",
          "url": "https://github.com/greymistcube/libplanet/commit/9982d7ddf8beedf426b76bbcf04554cb73e68add"
        },
        "date": 1687417960348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763006.1855670102,
            "unit": "ns",
            "range": "± 161366.4126390832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3121841.304347826,
            "unit": "ns",
            "range": "± 174687.51199393626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2584336.170212766,
            "unit": "ns",
            "range": "± 172540.86494363472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6592713.541666667,
            "unit": "ns",
            "range": "± 394643.22051557334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55911.95652173913,
            "unit": "ns",
            "range": "± 6108.593161741195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8977011.111111112,
            "unit": "ns",
            "range": "± 189791.82988951463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24507111.76470588,
            "unit": "ns",
            "range": "± 477084.02284392336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61750107.692307696,
            "unit": "ns",
            "range": "± 721167.4313934067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126345491.66666667,
            "unit": "ns",
            "range": "± 3231085.412851992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256218350,
            "unit": "ns",
            "range": "± 5400653.416921501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6219338.59375,
            "unit": "ns",
            "range": "± 92547.90139647319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945172.8759765625,
            "unit": "ns",
            "range": "± 37367.860371357776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1502030.4129464286,
            "unit": "ns",
            "range": "± 22020.446929504295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3337417.7994791665,
            "unit": "ns",
            "range": "± 62398.36158199077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048007.0442708334,
            "unit": "ns",
            "range": "± 18057.414503672684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991613.466796875,
            "unit": "ns",
            "range": "± 9759.190048252802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4149258.8235294116,
            "unit": "ns",
            "range": "± 84104.65993944339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4267807.894736842,
            "unit": "ns",
            "range": "± 141452.1968371035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5252466.666666667,
            "unit": "ns",
            "range": "± 173007.2929924384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5116420.454545454,
            "unit": "ns",
            "range": "± 190298.46762699887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8088561.29032258,
            "unit": "ns",
            "range": "± 241197.2673662499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326867.39130434784,
            "unit": "ns",
            "range": "± 23224.816722662043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311540,
            "unit": "ns",
            "range": "± 8270.076581668798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283680.4597701149,
            "unit": "ns",
            "range": "± 15503.104258393494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5112826.666666667,
            "unit": "ns",
            "range": "± 89658.63408878514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4556685.714285715,
            "unit": "ns",
            "range": "± 50391.095170947345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26739.78494623656,
            "unit": "ns",
            "range": "± 2306.094938698895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93494.62365591398,
            "unit": "ns",
            "range": "± 8515.13187101284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101159.375,
            "unit": "ns",
            "range": "± 19559.52629996308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134547.42268041236,
            "unit": "ns",
            "range": "± 19860.05776250152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7645.833333333333,
            "unit": "ns",
            "range": "± 1336.1308371694324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25340.860215053763,
            "unit": "ns",
            "range": "± 2975.7803711302854"
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
          "id": "069cc73c578d53d825e501794aba60738080dea5",
          "message": "Changelog",
          "timestamp": "2023-06-22T15:57:56+09:00",
          "tree_id": "8d0c09d6e8ca88e5a93694aeb35ad420ed534c39",
          "url": "https://github.com/greymistcube/libplanet/commit/069cc73c578d53d825e501794aba60738080dea5"
        },
        "date": 1687417993046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500978.125,
            "unit": "ns",
            "range": "± 127598.1341252169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2768374.5454545454,
            "unit": "ns",
            "range": "± 117855.55537461919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2382361.4583333335,
            "unit": "ns",
            "range": "± 175344.83161070853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5422092.857142857,
            "unit": "ns",
            "range": "± 129015.59817102957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53774.22680412371,
            "unit": "ns",
            "range": "± 5796.052506349247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7145905.555555556,
            "unit": "ns",
            "range": "± 146947.7957412176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20612185.714285713,
            "unit": "ns",
            "range": "± 206635.7473621447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49506435.71428572,
            "unit": "ns",
            "range": "± 496563.25277953164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102697533.33333333,
            "unit": "ns",
            "range": "± 1113864.9268372243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203922600,
            "unit": "ns",
            "range": "± 2902798.6855053226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4811559.435096154,
            "unit": "ns",
            "range": "± 19415.111794826447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537282.3958333333,
            "unit": "ns",
            "range": "± 4971.028912274582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183762.96875,
            "unit": "ns",
            "range": "± 5150.560918199687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680481.4973958335,
            "unit": "ns",
            "range": "± 9299.331991304693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846020.7486979166,
            "unit": "ns",
            "range": "± 2647.075810005248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776788.10546875,
            "unit": "ns",
            "range": "± 3020.9552167485604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264880,
            "unit": "ns",
            "range": "± 72226.07489499095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580797.435897436,
            "unit": "ns",
            "range": "± 115693.92125044856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4242614.285714285,
            "unit": "ns",
            "range": "± 118975.20972496971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4539047.368421053,
            "unit": "ns",
            "range": "± 97484.2686364264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6739405.882352941,
            "unit": "ns",
            "range": "± 215222.63869484924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269274.24242424243,
            "unit": "ns",
            "range": "± 12528.224266168101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263079.71014492755,
            "unit": "ns",
            "range": "± 12593.410738652003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244149.49494949495,
            "unit": "ns",
            "range": "± 18735.055942561063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4052943.75,
            "unit": "ns",
            "range": "± 67717.47158845591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783971.4285714286,
            "unit": "ns",
            "range": "± 50647.06200866828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22360.63829787234,
            "unit": "ns",
            "range": "± 3005.8444177075658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92093.87755102041,
            "unit": "ns",
            "range": "± 7599.078434719345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75405.37634408602,
            "unit": "ns",
            "range": "± 5207.777745027934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104940.22988505747,
            "unit": "ns",
            "range": "± 12548.32945214468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6846.3917525773195,
            "unit": "ns",
            "range": "± 1209.7745877908847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22886.73469387755,
            "unit": "ns",
            "range": "± 2890.8899837176755"
          }
        ]
      }
    ]
  }
}