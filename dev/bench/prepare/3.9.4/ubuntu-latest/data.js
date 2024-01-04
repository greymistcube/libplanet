window.BENCHMARK_DATA = {
  "lastUpdate": 1704334643505,
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
          "id": "7903c084230fb6dd3481171093c87681c08bde65",
          "message": "Prepare 3.9.4",
          "timestamp": "2024-01-04T11:05:56+09:00",
          "tree_id": "a44ae183ac56aae248479c66c087363ee5222613",
          "url": "https://github.com/greymistcube/libplanet/commit/7903c084230fb6dd3481171093c87681c08bde65"
        },
        "date": 1704334636126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3704361.0452008927,
            "unit": "ns",
            "range": "± 34450.58555626689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221501.953500601,
            "unit": "ns",
            "range": "± 13898.089118937607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766757.4081280048,
            "unit": "ns",
            "range": "± 2678.10129864115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948447.3604266827,
            "unit": "ns",
            "range": "± 8150.416111634493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607435.6627604166,
            "unit": "ns",
            "range": "± 2001.5975045180887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592678.4636579241,
            "unit": "ns",
            "range": "± 1262.888848078128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2561574.714285714,
            "unit": "ns",
            "range": "± 27764.118108363626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2677843.3018867923,
            "unit": "ns",
            "range": "± 105852.5014888433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3274978.9696969697,
            "unit": "ns",
            "range": "± 85796.93888714972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3079769.10989011,
            "unit": "ns",
            "range": "± 227185.14274042612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6895546.666666667,
            "unit": "ns",
            "range": "± 140793.28925017113"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42913.257731958765,
            "unit": "ns",
            "range": "± 7144.743078070218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223977.75510204083,
            "unit": "ns",
            "range": "± 22438.124604205223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195184.3033707865,
            "unit": "ns",
            "range": "± 12097.74155050559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172682.87012987013,
            "unit": "ns",
            "range": "± 8751.181549323934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3231852.6428571427,
            "unit": "ns",
            "range": "± 15585.725128646221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2842822.3,
            "unit": "ns",
            "range": "± 65179.782350616086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18912.21875,
            "unit": "ns",
            "range": "± 2946.190315084443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81975.53,
            "unit": "ns",
            "range": "± 17479.57011320717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89846.3,
            "unit": "ns",
            "range": "± 17454.2635557255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96751.5306122449,
            "unit": "ns",
            "range": "± 13607.514709950801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5140.62,
            "unit": "ns",
            "range": "± 2167.7233333848235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16708.25773195876,
            "unit": "ns",
            "range": "± 4129.174991443889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5630449.5,
            "unit": "ns",
            "range": "± 19667.435373394943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14862960.2,
            "unit": "ns",
            "range": "± 177223.66618332086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38073388.71428572,
            "unit": "ns",
            "range": "± 172615.8424819641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75870338.91666667,
            "unit": "ns",
            "range": "± 440840.0735303736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151237081.35714287,
            "unit": "ns",
            "range": "± 1043567.167774044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002109.2319587629,
            "unit": "ns",
            "range": "± 91074.4645329802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994117.380952381,
            "unit": "ns",
            "range": "± 72854.40813092528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1461475.9795918367,
            "unit": "ns",
            "range": "± 153242.1755226916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6181558.864197531,
            "unit": "ns",
            "range": "± 325501.0995334636"
          }
        ]
      }
    ]
  }
}