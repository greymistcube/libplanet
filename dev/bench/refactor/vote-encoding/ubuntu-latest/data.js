window.BENCHMARK_DATA = {
  "lastUpdate": 1678868716289,
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
          "id": "6699718613fe2592545afbc8a13afa8ae7494b7a",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:12:52+09:00",
          "tree_id": "b9aa048ef68261e6178dff40c5331176afa8c1db",
          "url": "https://github.com/greymistcube/libplanet/commit/6699718613fe2592545afbc8a13afa8ae7494b7a"
        },
        "date": 1678868708776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197731.125,
            "unit": "ns",
            "range": "± 7772.917666351056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200140,
            "unit": "ns",
            "range": "± 5051.158965678245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160608.33333333334,
            "unit": "ns",
            "range": "± 2212.5502904744985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11385914.2,
            "unit": "ns",
            "range": "± 109641.55621270093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9050598.666666666,
            "unit": "ns",
            "range": "± 95741.33523022679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17908.23711340206,
            "unit": "ns",
            "range": "± 1593.1344221193579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53009.267441860466,
            "unit": "ns",
            "range": "± 2852.9720661069086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37850,
            "unit": "ns",
            "range": "± 633.6706254344299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87585.05319148937,
            "unit": "ns",
            "range": "± 11556.74304154605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4615.789473684211,
            "unit": "ns",
            "range": "± 568.558421458536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17537.23404255319,
            "unit": "ns",
            "range": "± 1452.934297780651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271063.1764705884,
            "unit": "ns",
            "range": "± 66669.88975189184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5115003.933333334,
            "unit": "ns",
            "range": "± 82881.66861036338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23591748.2,
            "unit": "ns",
            "range": "± 251116.1484883041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6078732.714285715,
            "unit": "ns",
            "range": "± 65325.74715805585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27160253.066666666,
            "unit": "ns",
            "range": "± 301601.75647661765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6035963.575892857,
            "unit": "ns",
            "range": "± 26214.78379503166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846082.7427083333,
            "unit": "ns",
            "range": "± 3680.794799300827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350551.5852399555,
            "unit": "ns",
            "range": "± 540.2554394974196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587622.0719866073,
            "unit": "ns",
            "range": "± 6721.108359907257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791957.9861979167,
            "unit": "ns",
            "range": "± 536.8225543957184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745522.7053786058,
            "unit": "ns",
            "range": "± 391.4585579445762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7680332.428571428,
            "unit": "ns",
            "range": "± 55748.87679546597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19605827.42857143,
            "unit": "ns",
            "range": "± 91041.30196760174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50648311.8,
            "unit": "ns",
            "range": "± 322401.21384812257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101586327.26666667,
            "unit": "ns",
            "range": "± 756926.4982561731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201261252.46666667,
            "unit": "ns",
            "range": "± 1008638.1488467412"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45589.65517241379,
            "unit": "ns",
            "range": "± 1738.0862287749098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366250.9247311829,
            "unit": "ns",
            "range": "± 88992.40920758556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2500784.3571428573,
            "unit": "ns",
            "range": "± 41930.66952006728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160922.695652174,
            "unit": "ns",
            "range": "± 121246.30411330948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5004666.25,
            "unit": "ns",
            "range": "± 95417.41255452277"
          }
        ]
      }
    ]
  }
}