window.BENCHMARK_DATA = {
  "lastUpdate": 1681107184239,
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
          "id": "ce471d9b386cefda7fe85d4afa92224edf566391",
          "message": "Removed unnecessary overload",
          "timestamp": "2023-04-10T14:53:42+09:00",
          "tree_id": "40772124c88aad575c334353fcd59a8dfc5b0f5f",
          "url": "https://github.com/greymistcube/libplanet/commit/ce471d9b386cefda7fe85d4afa92224edf566391"
        },
        "date": 1681107157946,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633045.1612903227,
            "unit": "ns",
            "range": "± 111284.03877517658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3165487.8947368423,
            "unit": "ns",
            "range": "± 209344.29555310818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2618794.382022472,
            "unit": "ns",
            "range": "± 143618.11053145464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6487867.796610169,
            "unit": "ns",
            "range": "± 285083.1182127222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59947.95918367347,
            "unit": "ns",
            "range": "± 6101.600763291999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8840704.166666666,
            "unit": "ns",
            "range": "± 224977.3389151946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23403292.307692308,
            "unit": "ns",
            "range": "± 246025.42369146345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59635058.333333336,
            "unit": "ns",
            "range": "± 401456.12339974527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121057027.77777778,
            "unit": "ns",
            "range": "± 3757168.9356756834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240762521.42857143,
            "unit": "ns",
            "range": "± 2652155.2458993886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5971610.442708333,
            "unit": "ns",
            "range": "± 99992.25059427643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900126.5625,
            "unit": "ns",
            "range": "± 40463.827280200625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411939.6065848214,
            "unit": "ns",
            "range": "± 8662.333411996764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3218534.7135416665,
            "unit": "ns",
            "range": "± 48787.41230103308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003155.3013392857,
            "unit": "ns",
            "range": "± 14942.519474235987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938612.7022879465,
            "unit": "ns",
            "range": "± 13299.660533252032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3822184.210526316,
            "unit": "ns",
            "range": "± 109350.48171847525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4086895,
            "unit": "ns",
            "range": "± 142586.15200498872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4740247.826086956,
            "unit": "ns",
            "range": "± 180569.78397300577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5205319.230769231,
            "unit": "ns",
            "range": "± 138889.65985768923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8379258.620689655,
            "unit": "ns",
            "range": "± 223418.245701454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369344.23076923075,
            "unit": "ns",
            "range": "± 15185.124473610174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307555.6603773585,
            "unit": "ns",
            "range": "± 12839.803124154734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264855.4054054054,
            "unit": "ns",
            "range": "± 8933.580405350302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6358126.666666667,
            "unit": "ns",
            "range": "± 106302.3347859885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4480918.75,
            "unit": "ns",
            "range": "± 85523.24610887966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27311.340206185567,
            "unit": "ns",
            "range": "± 3084.8715629888807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118555.10204081633,
            "unit": "ns",
            "range": "± 9098.375548324344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108483.67346938775,
            "unit": "ns",
            "range": "± 10542.86238131029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 215909.13978494622,
            "unit": "ns",
            "range": "± 16378.759021307866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9303.157894736842,
            "unit": "ns",
            "range": "± 976.8003162278126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25940,
            "unit": "ns",
            "range": "± 2468.1115185674057"
          }
        ]
      }
    ]
  }
}