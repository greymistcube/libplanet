window.BENCHMARK_DATA = {
  "lastUpdate": 1681887929336,
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
          "id": "b755fdc73e3f970d5d02ebfbd9c7f61e28e70526",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T15:38:00+09:00",
          "tree_id": "3bb489379865002ce0123b6b0768d7f297ed0326",
          "url": "https://github.com/greymistcube/libplanet/commit/b755fdc73e3f970d5d02ebfbd9c7f61e28e70526"
        },
        "date": 1681800870645,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400130.612244898,
            "unit": "ns",
            "range": "± 124471.62588786121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2590834,
            "unit": "ns",
            "range": "± 172437.92103276183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245781,
            "unit": "ns",
            "range": "± 183663.12359503983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5665935.353535353,
            "unit": "ns",
            "range": "± 399469.3238236814"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51682.291666666664,
            "unit": "ns",
            "range": "± 4878.481100801478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6905506.666666667,
            "unit": "ns",
            "range": "± 79104.148949043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19574535.714285713,
            "unit": "ns",
            "range": "± 234282.8914832627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49647642.85714286,
            "unit": "ns",
            "range": "± 405851.70030118467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98869814.28571428,
            "unit": "ns",
            "range": "± 1432974.483565374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199849793.33333334,
            "unit": "ns",
            "range": "± 3555037.8526147665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4827192.354910715,
            "unit": "ns",
            "range": "± 17936.635073988513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531203.2301682692,
            "unit": "ns",
            "range": "± 1740.2450952619888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152490.703125,
            "unit": "ns",
            "range": "± 4467.677677423216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678251.6276041665,
            "unit": "ns",
            "range": "± 9953.667009915966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836379.1145833334,
            "unit": "ns",
            "range": "± 3309.3206073869724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754413.4974888393,
            "unit": "ns",
            "range": "± 2106.099588170411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3123069.565217391,
            "unit": "ns",
            "range": "± 117767.9467230465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461947.619047619,
            "unit": "ns",
            "range": "± 81407.49731472906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3859796.153846154,
            "unit": "ns",
            "range": "± 59639.73249694948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390708.333333333,
            "unit": "ns",
            "range": "± 109363.2794134209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6943589.189189189,
            "unit": "ns",
            "range": "± 235814.97665163936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321025.49019607843,
            "unit": "ns",
            "range": "± 13102.882784139601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259048.4375,
            "unit": "ns",
            "range": "± 11242.535332141253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220536.36363636365,
            "unit": "ns",
            "range": "± 6970.510122195963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5369376.923076923,
            "unit": "ns",
            "range": "± 56275.366929740434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817431.25,
            "unit": "ns",
            "range": "± 74385.01389168834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22568.0412371134,
            "unit": "ns",
            "range": "± 2687.414587470354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94597.91666666667,
            "unit": "ns",
            "range": "± 6369.218396511158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90317.3469387755,
            "unit": "ns",
            "range": "± 8829.111004859129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 192628.57142857142,
            "unit": "ns",
            "range": "± 18321.830818345705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9292.105263157895,
            "unit": "ns",
            "range": "± 1082.9018292442372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21438.541666666668,
            "unit": "ns",
            "range": "± 2505.9663454566594"
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
          "id": "eed1ee8ed2c42a90ac4c339cb4652389c8e2f4df",
          "message": "Changelog",
          "timestamp": "2023-04-18T21:38:09+09:00",
          "tree_id": "e6df96d769b0cf5239546fdbafedf159b4e3c3f2",
          "url": "https://github.com/greymistcube/libplanet/commit/eed1ee8ed2c42a90ac4c339cb4652389c8e2f4df"
        },
        "date": 1681822712157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843197.9166666667,
            "unit": "ns",
            "range": "± 161913.7736601713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3418965,
            "unit": "ns",
            "range": "± 77489.39672795987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2942929.4736842103,
            "unit": "ns",
            "range": "± 252597.20264016176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7627840.860215054,
            "unit": "ns",
            "range": "± 479719.15770460654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82774.46808510639,
            "unit": "ns",
            "range": "± 5707.699688624974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9942446.666666666,
            "unit": "ns",
            "range": "± 350980.57094633917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25579503.846153848,
            "unit": "ns",
            "range": "± 682936.3093177982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65579280.952380955,
            "unit": "ns",
            "range": "± 1424326.6295407973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133588816.66666667,
            "unit": "ns",
            "range": "± 2202120.559067252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262968246.15384614,
            "unit": "ns",
            "range": "± 2674601.4156678203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6107282.708333333,
            "unit": "ns",
            "range": "± 112796.71974238609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969487.1354166667,
            "unit": "ns",
            "range": "± 33309.11808985104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1476343.3872767857,
            "unit": "ns",
            "range": "± 18270.904083435544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3318245.0334821427,
            "unit": "ns",
            "range": "± 50295.98342566347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1057493.8932291667,
            "unit": "ns",
            "range": "± 17167.503616243852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 987942.2395833334,
            "unit": "ns",
            "range": "± 12860.883446419546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4081800,
            "unit": "ns",
            "range": "± 188736.8723108894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4472431.15942029,
            "unit": "ns",
            "range": "± 215194.87903605384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5394342.5,
            "unit": "ns",
            "range": "± 189877.40294051816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5565561.818181818,
            "unit": "ns",
            "range": "± 222398.22515521242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9412573.333333334,
            "unit": "ns",
            "range": "± 355934.8034018692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 432985.8695652174,
            "unit": "ns",
            "range": "± 28249.156679124084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351207.7922077922,
            "unit": "ns",
            "range": "± 17998.89445606215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323561.76470588235,
            "unit": "ns",
            "range": "± 15331.812886660584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7016757.692307692,
            "unit": "ns",
            "range": "± 187788.00211531497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4813276.666666667,
            "unit": "ns",
            "range": "± 74150.6619435502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31375.280898876405,
            "unit": "ns",
            "range": "± 2776.1680956309515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 146909.67741935485,
            "unit": "ns",
            "range": "± 13222.8397965836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131100,
            "unit": "ns",
            "range": "± 17048.772142853788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151026.04166666666,
            "unit": "ns",
            "range": "± 20844.866816262445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10553.488372093023,
            "unit": "ns",
            "range": "± 1406.1585279567712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34856.25,
            "unit": "ns",
            "range": "± 7101.783504681653"
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
          "id": "6d1ed34be0a2b1ef25a434e1faf2ce21b931c133",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T21:35:11+09:00",
          "tree_id": "2309b1715d61ffc5efbf0bb5093b8ab9c26ab025",
          "url": "https://github.com/greymistcube/libplanet/commit/6d1ed34be0a2b1ef25a434e1faf2ce21b931c133"
        },
        "date": 1681822724498,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561898.9583333333,
            "unit": "ns",
            "range": "± 201875.53252061637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012781.8181818184,
            "unit": "ns",
            "range": "± 307886.38123126025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2502293.81443299,
            "unit": "ns",
            "range": "± 322048.831317561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6656130.303030303,
            "unit": "ns",
            "range": "± 659591.4218410011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61450,
            "unit": "ns",
            "range": "± 17359.208317260953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7883506.18556701,
            "unit": "ns",
            "range": "± 569144.6930509033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20043071,
            "unit": "ns",
            "range": "± 1518751.1408846362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54039690,
            "unit": "ns",
            "range": "± 3334691.122658192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106936103.89610389,
            "unit": "ns",
            "range": "± 5167934.953442326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218176235.21126762,
            "unit": "ns",
            "range": "± 10696533.741826281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4917196.986607143,
            "unit": "ns",
            "range": "± 84861.15058478512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1575833.2397460938,
            "unit": "ns",
            "range": "± 28993.69896577725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154003.59375,
            "unit": "ns",
            "range": "± 26234.1776853574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671693.4151785714,
            "unit": "ns",
            "range": "± 46431.21408269726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848920.1381138393,
            "unit": "ns",
            "range": "± 13377.256321501432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796288.0208333334,
            "unit": "ns",
            "range": "± 14328.373766528986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3341136.7346938774,
            "unit": "ns",
            "range": "± 288523.846461357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3214960.2040816327,
            "unit": "ns",
            "range": "± 424633.6248564412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3947462.2448979593,
            "unit": "ns",
            "range": "± 384796.23326791613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931715.463917526,
            "unit": "ns",
            "range": "± 401485.7099315113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7107785.714285715,
            "unit": "ns",
            "range": "± 704477.4526108791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324026.80412371136,
            "unit": "ns",
            "range": "± 59452.184070239586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262116.66666666666,
            "unit": "ns",
            "range": "± 46509.163028526265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226390.72164948453,
            "unit": "ns",
            "range": "± 36640.801717695314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5107460.416666667,
            "unit": "ns",
            "range": "± 424720.2577744969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3420424.7311827955,
            "unit": "ns",
            "range": "± 316779.77182617295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27369.696969696968,
            "unit": "ns",
            "range": "± 9645.390720553192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85489.36170212766,
            "unit": "ns",
            "range": "± 14568.615686778725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76166.66666666667,
            "unit": "ns",
            "range": "± 16184.529019771839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111378.125,
            "unit": "ns",
            "range": "± 31338.414977300203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4770.114942528736,
            "unit": "ns",
            "range": "± 702.3407611509704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22616,
            "unit": "ns",
            "range": "± 9257.29545774138"
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
          "id": "4eafc8191a46f1d934c889f632e5c6d8e7d14339",
          "message": "Changelog",
          "timestamp": "2023-04-19T11:21:10+09:00",
          "tree_id": "e6df96d769b0cf5239546fdbafedf159b4e3c3f2",
          "url": "https://github.com/greymistcube/libplanet/commit/4eafc8191a46f1d934c889f632e5c6d8e7d14339"
        },
        "date": 1681872226792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1911653.5353535353,
            "unit": "ns",
            "range": "± 270713.7144031406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3652243.6170212766,
            "unit": "ns",
            "range": "± 250369.34461363347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3041884.0425531915,
            "unit": "ns",
            "range": "± 273770.9443269603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7802254.022988506,
            "unit": "ns",
            "range": "± 430264.9183405006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83171.875,
            "unit": "ns",
            "range": "± 14770.387894453943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10303363.888888888,
            "unit": "ns",
            "range": "± 328724.3718660516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25610381.48148148,
            "unit": "ns",
            "range": "± 695061.1838243158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71511669.04761904,
            "unit": "ns",
            "range": "± 2556644.6778015085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137505410.52631578,
            "unit": "ns",
            "range": "± 4494539.649684815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269416911.1111111,
            "unit": "ns",
            "range": "± 8846739.05490533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6416332.0068359375,
            "unit": "ns",
            "range": "± 198901.7730211171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2093097.3805147058,
            "unit": "ns",
            "range": "± 42411.10151426964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1539594.1927083333,
            "unit": "ns",
            "range": "± 18785.476216248666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3581004.1953125,
            "unit": "ns",
            "range": "± 93794.82693321342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1128431.4453125,
            "unit": "ns",
            "range": "± 11974.07349640736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1026790.1302083334,
            "unit": "ns",
            "range": "± 15910.035426839757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4178727.3684210526,
            "unit": "ns",
            "range": "± 360128.91292404203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4498441.071428572,
            "unit": "ns",
            "range": "± 190758.07503630986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5372412.631578947,
            "unit": "ns",
            "range": "± 395509.78798499703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5620735.106382979,
            "unit": "ns",
            "range": "± 360300.4617437844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9777686.842105264,
            "unit": "ns",
            "range": "± 497158.23566670204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441247.9166666667,
            "unit": "ns",
            "range": "± 54307.39598592377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372304.1666666667,
            "unit": "ns",
            "range": "± 43102.448133345264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342109.375,
            "unit": "ns",
            "range": "± 51299.607217384175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7112869.318181818,
            "unit": "ns",
            "range": "± 387683.1092345095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5094541.935483871,
            "unit": "ns",
            "range": "± 334861.3494134487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31005.154639175256,
            "unit": "ns",
            "range": "± 10530.505004648208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134038.76404494382,
            "unit": "ns",
            "range": "± 25892.38848406229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115462.5,
            "unit": "ns",
            "range": "± 27913.31035074203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145762.92134831462,
            "unit": "ns",
            "range": "± 21264.57458492491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6849.411764705882,
            "unit": "ns",
            "range": "± 1509.7006585516788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32643.617021276597,
            "unit": "ns",
            "range": "± 9706.549817372108"
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
          "id": "15a9b3451eb9bdcdabb50b434574cb88373f2446",
          "message": "Changelog",
          "timestamp": "2023-04-19T15:48:17+09:00",
          "tree_id": "c4999b1438bd9f8092db160335197f3e2fd3ef91",
          "url": "https://github.com/greymistcube/libplanet/commit/15a9b3451eb9bdcdabb50b434574cb88373f2446"
        },
        "date": 1681887898824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435063.6363636365,
            "unit": "ns",
            "range": "± 119648.95886747407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2531254.347826087,
            "unit": "ns",
            "range": "± 96501.6101339978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274979.797979798,
            "unit": "ns",
            "range": "± 159568.6884147631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5352946.875,
            "unit": "ns",
            "range": "± 166382.1165257756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51923.913043478264,
            "unit": "ns",
            "range": "± 3922.949371655878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6963031.25,
            "unit": "ns",
            "range": "± 115648.13137991753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20255564.285714287,
            "unit": "ns",
            "range": "± 150543.52096087264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50092471.428571425,
            "unit": "ns",
            "range": "± 547979.9075886625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99268807.14285715,
            "unit": "ns",
            "range": "± 1444069.4504203608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198442913.33333334,
            "unit": "ns",
            "range": "± 3015303.084710833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4758443.419471154,
            "unit": "ns",
            "range": "± 20501.716659650432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531271.0379464286,
            "unit": "ns",
            "range": "± 5661.249853618341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173235.009765625,
            "unit": "ns",
            "range": "± 5044.843359716081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617441.6165865385,
            "unit": "ns",
            "range": "± 10039.230946897875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819129.2578125,
            "unit": "ns",
            "range": "± 3293.012671188886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765652.9557291666,
            "unit": "ns",
            "range": "± 3161.459899509324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3120369.230769231,
            "unit": "ns",
            "range": "± 83941.13065348008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3346647.619047619,
            "unit": "ns",
            "range": "± 102667.75799041374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3867455.5555555555,
            "unit": "ns",
            "range": "± 107138.55993824551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4249710.869565218,
            "unit": "ns",
            "range": "± 152919.4359106358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6810700,
            "unit": "ns",
            "range": "± 240658.56332689285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307162.85714285716,
            "unit": "ns",
            "range": "± 9977.801411553717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254576,
            "unit": "ns",
            "range": "± 9807.963445016274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212031.81818181818,
            "unit": "ns",
            "range": "± 5178.470666283477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5210425,
            "unit": "ns",
            "range": "± 32459.51674428822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3498178.5714285714,
            "unit": "ns",
            "range": "± 29585.05804186734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22031.632653061224,
            "unit": "ns",
            "range": "± 2441.9168969697334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99504.08163265306,
            "unit": "ns",
            "range": "± 8140.390810641001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99412,
            "unit": "ns",
            "range": "± 10934.361370736682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108576.5306122449,
            "unit": "ns",
            "range": "± 15141.577911621114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7313.265306122449,
            "unit": "ns",
            "range": "± 1136.7921728930653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19121.27659574468,
            "unit": "ns",
            "range": "± 1958.157590307432"
          }
        ]
      }
    ]
  }
}