window.BENCHMARK_DATA = {
  "lastUpdate": 1707213931673,
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
          "id": "b9493a873cb60fdf51d55d6f25c3903a40d15a58",
          "message": "Prepare 4.0.4",
          "timestamp": "2024-02-06T18:53:06+09:00",
          "tree_id": "75058dbf56fb8f6737f039bf16f5d40f7545fd4f",
          "url": "https://github.com/greymistcube/libplanet/commit/b9493a873cb60fdf51d55d6f25c3903a40d15a58"
        },
        "date": 1707213906978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968052.5252525252,
            "unit": "ns",
            "range": "± 106172.39383637247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701134.6153846155,
            "unit": "ns",
            "range": "± 66622.22406273193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520640.4040404041,
            "unit": "ns",
            "range": "± 161127.1059419328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10874809.139784947,
            "unit": "ns",
            "range": "± 1112946.4068932715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34813.23529411765,
            "unit": "ns",
            "range": "± 1670.6334853335788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5020673.333333333,
            "unit": "ns",
            "range": "± 25216.02287284435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12958807.692307692,
            "unit": "ns",
            "range": "± 109403.9263580796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32719591.666666668,
            "unit": "ns",
            "range": "± 253602.90885316732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66881417.39130435,
            "unit": "ns",
            "range": "± 1686225.1272246523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126619738.46153846,
            "unit": "ns",
            "range": "± 1242822.9402845104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310116.964285714,
            "unit": "ns",
            "range": "± 8503.801180065431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078755.287388393,
            "unit": "ns",
            "range": "± 3240.925229135988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729032.7427455357,
            "unit": "ns",
            "range": "± 912.9995407151639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927921.9661458333,
            "unit": "ns",
            "range": "± 4016.5497080340683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611989.0755208334,
            "unit": "ns",
            "range": "± 1312.5414320792188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565219.5377604166,
            "unit": "ns",
            "range": "± 1923.5836457277733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112413.3333333335,
            "unit": "ns",
            "range": "± 94011.02255364486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301017.777777778,
            "unit": "ns",
            "range": "± 80809.9405701396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2776945.8333333335,
            "unit": "ns",
            "range": "± 71959.51747890686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2826396.296296296,
            "unit": "ns",
            "range": "± 77990.4406444074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12513139.56043956,
            "unit": "ns",
            "range": "± 1633200.08700568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171201.72413793104,
            "unit": "ns",
            "range": "± 7493.74572863078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161026.08695652173,
            "unit": "ns",
            "range": "± 10246.895746123111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140706.81818181818,
            "unit": "ns",
            "range": "± 4947.65143849797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2841547.3684210526,
            "unit": "ns",
            "range": "± 62486.70408282471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2525135.714285714,
            "unit": "ns",
            "range": "± 26901.69017117575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10241.111111111111,
            "unit": "ns",
            "range": "± 1129.1733522474385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51112.08791208791,
            "unit": "ns",
            "range": "± 3352.406603714716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44554.166666666664,
            "unit": "ns",
            "range": "± 1751.1040083978307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51287.5,
            "unit": "ns",
            "range": "± 9309.364272489005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2228.4210526315787,
            "unit": "ns",
            "range": "± 330.2684781161805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9263.04347826087,
            "unit": "ns",
            "range": "± 982.899656298955"
          }
        ]
      }
    ]
  }
}