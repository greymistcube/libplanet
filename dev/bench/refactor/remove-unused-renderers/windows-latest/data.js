window.BENCHMARK_DATA = {
  "lastUpdate": 1681800892862,
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
      }
    ]
  }
}