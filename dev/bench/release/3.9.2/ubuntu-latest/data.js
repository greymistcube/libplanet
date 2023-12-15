window.BENCHMARK_DATA = {
  "lastUpdate": 1702617401656,
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
          "id": "ed514fd04c280163e3dd02cdfb78dc90105e5c95",
          "message": "Release 3.9.2",
          "timestamp": "2023-12-15T14:05:36+09:00",
          "tree_id": "1dc3d85314af7613e4e013cb5bf0ffe3c279cd5b",
          "url": "https://github.com/greymistcube/libplanet/commit/ed514fd04c280163e3dd02cdfb78dc90105e5c95"
        },
        "date": 1702617395536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698979.7181490385,
            "unit": "ns",
            "range": "± 6700.645710984096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203506.5472005208,
            "unit": "ns",
            "range": "± 6162.229340168422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765540.74609375,
            "unit": "ns",
            "range": "± 1964.4815137169405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956038.0843098958,
            "unit": "ns",
            "range": "± 7859.848036680712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641258.4538225447,
            "unit": "ns",
            "range": "± 1526.8635420281594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562724.1939603365,
            "unit": "ns",
            "range": "± 1072.5892057278966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2378010.577777778,
            "unit": "ns",
            "range": "± 87019.3230614194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2570274.8666666667,
            "unit": "ns",
            "range": "± 47717.60432686492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3083587.3846153845,
            "unit": "ns",
            "range": "± 42903.19862694479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2920020.519230769,
            "unit": "ns",
            "range": "± 120355.05715915695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6823316.444444444,
            "unit": "ns",
            "range": "± 190265.26284826125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38208.947916666664,
            "unit": "ns",
            "range": "± 4488.439403787167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194726.6511627907,
            "unit": "ns",
            "range": "± 7053.3114069908115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190662.8205128205,
            "unit": "ns",
            "range": "± 6427.015141170224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165044.02631578947,
            "unit": "ns",
            "range": "± 3583.943488648302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3086272.5384615385,
            "unit": "ns",
            "range": "± 29734.964572075147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2699561.6428571427,
            "unit": "ns",
            "range": "± 37355.058495073055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12078.989361702128,
            "unit": "ns",
            "range": "± 1139.8257034714616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61943.979797979795,
            "unit": "ns",
            "range": "± 7846.82848838423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59410.177083333336,
            "unit": "ns",
            "range": "± 4282.922892739666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59096.969072164946,
            "unit": "ns",
            "range": "± 8840.382268617319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3102.3469387755104,
            "unit": "ns",
            "range": "± 561.331243554581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14574.333333333334,
            "unit": "ns",
            "range": "± 1904.7668218482902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5662707.2,
            "unit": "ns",
            "range": "± 33660.72998996223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14177295.966666667,
            "unit": "ns",
            "range": "± 263979.48694328143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36592310.71428572,
            "unit": "ns",
            "range": "± 172650.6943488582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74234240.58333333,
            "unit": "ns",
            "range": "± 214479.56333263096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150643663.57142857,
            "unit": "ns",
            "range": "± 1575966.5505651035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957746.7626262626,
            "unit": "ns",
            "range": "± 97629.85294045681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1820938.75,
            "unit": "ns",
            "range": "± 67643.58545092784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1418624.69,
            "unit": "ns",
            "range": "± 124671.48779753291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6037554.4948453605,
            "unit": "ns",
            "range": "± 356003.1930564353"
          }
        ]
      }
    ]
  }
}