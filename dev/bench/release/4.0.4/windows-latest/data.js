window.BENCHMARK_DATA = {
  "lastUpdate": 1707289086206,
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
          "id": "936cae2dc655caf280c893eab7e22f028ca67efe",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:45:59+09:00",
          "tree_id": "1aa9b62a8c2eac4e5a79b8ae47618099457f6eda",
          "url": "https://github.com/greymistcube/libplanet/commit/936cae2dc655caf280c893eab7e22f028ca67efe"
        },
        "date": 1707289059281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924200,
            "unit": "ns",
            "range": "± 78785.45233734461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1667542.3076923077,
            "unit": "ns",
            "range": "± 57666.39809351664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489266.3265306123,
            "unit": "ns",
            "range": "± 168974.72204285258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10998784.042553192,
            "unit": "ns",
            "range": "± 1176024.6693249682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34719.17808219178,
            "unit": "ns",
            "range": "± 1733.4661434894101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4922433.333333333,
            "unit": "ns",
            "range": "± 42263.1833475268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12842623.076923076,
            "unit": "ns",
            "range": "± 111787.43335639412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31589438.46153846,
            "unit": "ns",
            "range": "± 221551.83192826284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63970828.571428575,
            "unit": "ns",
            "range": "± 339746.03507862805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127781106.66666667,
            "unit": "ns",
            "range": "± 836557.3940404863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373091.9270833335,
            "unit": "ns",
            "range": "± 14534.106035385386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097361.7838541667,
            "unit": "ns",
            "range": "± 2553.1468716862432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740536.5443638393,
            "unit": "ns",
            "range": "± 1057.000039805003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1986895.4427083333,
            "unit": "ns",
            "range": "± 1822.9538148585211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609679.921875,
            "unit": "ns",
            "range": "± 811.4945940620488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560170.1102120535,
            "unit": "ns",
            "range": "± 1387.5858068676232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106564.864864865,
            "unit": "ns",
            "range": "± 70637.10551597989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287728,
            "unit": "ns",
            "range": "± 91712.563490728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2704090.3225806453,
            "unit": "ns",
            "range": "± 55422.67499161157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2717563.095238095,
            "unit": "ns",
            "range": "± 131728.18196131833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12377775.268817205,
            "unit": "ns",
            "range": "± 1550490.9888312598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166515.625,
            "unit": "ns",
            "range": "± 7468.945629037864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159521.79487179487,
            "unit": "ns",
            "range": "± 7901.859840846897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143090.32258064515,
            "unit": "ns",
            "range": "± 4259.292182097058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2792792.8571428573,
            "unit": "ns",
            "range": "± 38520.91767989308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2420726.6666666665,
            "unit": "ns",
            "range": "± 36759.67252043364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9633.333333333334,
            "unit": "ns",
            "range": "± 754.637602857548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51629.12087912088,
            "unit": "ns",
            "range": "± 4433.747260965016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44433.333333333336,
            "unit": "ns",
            "range": "± 1824.9018238433173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56882.32323232323,
            "unit": "ns",
            "range": "± 11112.273305534909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2307.3684210526317,
            "unit": "ns",
            "range": "± 437.89683650112516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9824.725274725275,
            "unit": "ns",
            "range": "± 930.9008070553558"
          }
        ]
      }
    ]
  }
}