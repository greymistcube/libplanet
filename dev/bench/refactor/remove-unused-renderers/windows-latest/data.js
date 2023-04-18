window.BENCHMARK_DATA = {
  "lastUpdate": 1681822738039,
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
      }
    ]
  }
}