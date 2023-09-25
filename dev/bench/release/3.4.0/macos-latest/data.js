window.BENCHMARK_DATA = {
  "lastUpdate": 1695631263168,
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
          "id": "8e4b006558fdac842074ff6ab4d581ac3656284f",
          "message": "Libplanet 3.4.0",
          "timestamp": "2023-09-25T17:21:47+09:00",
          "tree_id": "260dfc4ebefa249cd7442ff61da7dfb4918da96d",
          "url": "https://github.com/greymistcube/libplanet/commit/8e4b006558fdac842074ff6ab4d581ac3656284f"
        },
        "date": 1695631247797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8558844.285714285,
            "unit": "ns",
            "range": "± 56537.90614395671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21421793.333333332,
            "unit": "ns",
            "range": "± 386342.0778138584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53115871.35714286,
            "unit": "ns",
            "range": "± 835169.1164679308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108671895.9,
            "unit": "ns",
            "range": "± 1314076.3955635913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239301986.3923077,
            "unit": "ns",
            "range": "± 10981481.899807392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79205.51123595505,
            "unit": "ns",
            "range": "± 4956.977920280162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376045.97872340423,
            "unit": "ns",
            "range": "± 48603.97221476148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360886.1304347826,
            "unit": "ns",
            "range": "± 39120.12816214129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354076.3617021277,
            "unit": "ns",
            "range": "± 48848.63705472573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4412938.957894737,
            "unit": "ns",
            "range": "± 290846.2924591846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3912299.947368421,
            "unit": "ns",
            "range": "± 277901.6131196384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27646.021739130436,
            "unit": "ns",
            "range": "± 3311.5821904216446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135495.88659793814,
            "unit": "ns",
            "range": "± 26045.207665741298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131590.6222222222,
            "unit": "ns",
            "range": "± 18703.542494974005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127872.52150537634,
            "unit": "ns",
            "range": "± 19203.925088478147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9617.58426966292,
            "unit": "ns",
            "range": "± 1145.3102180888966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26660.796703296703,
            "unit": "ns",
            "range": "± 3195.7398395520436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551367.15625,
            "unit": "ns",
            "range": "± 195581.53663054394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2948569.529850746,
            "unit": "ns",
            "range": "± 140119.8156240374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2502282.5773195876,
            "unit": "ns",
            "range": "± 266354.4237725066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10820889.298507463,
            "unit": "ns",
            "range": "± 503692.9119120347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589737.7093023257,
            "unit": "ns",
            "range": "± 413631.29521970666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3918731.033707865,
            "unit": "ns",
            "range": "± 463815.0214365796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4809490.744680851,
            "unit": "ns",
            "range": "± 393650.08032285067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4856947.175824176,
            "unit": "ns",
            "range": "± 641384.9874883189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16809488.636842106,
            "unit": "ns",
            "range": "± 2447404.919533248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6700619.61484375,
            "unit": "ns",
            "range": "± 151613.3537256874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888128.0233072916,
            "unit": "ns",
            "range": "± 26116.671466256917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1112964.5241536458,
            "unit": "ns",
            "range": "± 33302.95325583249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3327070.6145833335,
            "unit": "ns",
            "range": "± 60558.08396693439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904222.9466796875,
            "unit": "ns",
            "range": "± 10309.098983749005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846273.1827799479,
            "unit": "ns",
            "range": "± 18095.080019718294"
          }
        ]
      }
    ]
  }
}