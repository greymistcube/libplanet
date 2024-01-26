window.BENCHMARK_DATA = {
  "lastUpdate": 1706256081165,
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
          "id": "22b0d9d825ae52af2883ef4870982de55426d6cc",
          "message": "Merge tag '4.0.1' into merge/4.0.1-to-main\n\nLibplanet 4.0.1",
          "timestamp": "2024-01-26T16:48:50+09:00",
          "tree_id": "4a2295b52476b530269c259f0087e0b69e593507",
          "url": "https://github.com/greymistcube/libplanet/commit/22b0d9d825ae52af2883ef4870982de55426d6cc"
        },
        "date": 1706256061005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009889.3617021276,
            "unit": "ns",
            "range": "± 111485.61623610994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1690920.3389830508,
            "unit": "ns",
            "range": "± 74805.66726562583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530605.0505050505,
            "unit": "ns",
            "range": "± 164683.21933133976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10892064.516129032,
            "unit": "ns",
            "range": "± 1093678.4123797405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33923.94366197183,
            "unit": "ns",
            "range": "± 1550.8951137725405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5039478.571428572,
            "unit": "ns",
            "range": "± 17597.909778477348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12877230.76923077,
            "unit": "ns",
            "range": "± 57187.85396415607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32501478.57142857,
            "unit": "ns",
            "range": "± 266350.5358865136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65884146.666666664,
            "unit": "ns",
            "range": "± 647875.7683677444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129690633.33333333,
            "unit": "ns",
            "range": "± 648570.7766936099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3271530.3125,
            "unit": "ns",
            "range": "± 20483.119110213396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075206.919642857,
            "unit": "ns",
            "range": "± 1911.202837230576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738689.5377604166,
            "unit": "ns",
            "range": "± 1878.350861060975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906407.1213942308,
            "unit": "ns",
            "range": "± 5465.015003277626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623964.47265625,
            "unit": "ns",
            "range": "± 2119.8970270597233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558718.7049278846,
            "unit": "ns",
            "range": "± 808.901659062683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2101943.4782608696,
            "unit": "ns",
            "range": "± 33984.43207099989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210413.3333333335,
            "unit": "ns",
            "range": "± 24484.04339467607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775000,
            "unit": "ns",
            "range": "± 114235.56925502174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2820016.6666666665,
            "unit": "ns",
            "range": "± 60241.340603003344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12356459.782608695,
            "unit": "ns",
            "range": "± 1581450.8951779988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168852.05479452055,
            "unit": "ns",
            "range": "± 8350.916609521262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161104.05405405405,
            "unit": "ns",
            "range": "± 7477.865771073242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143105,
            "unit": "ns",
            "range": "± 5057.817001485208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2778573.3333333335,
            "unit": "ns",
            "range": "± 43942.469965474935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2502392.8571428573,
            "unit": "ns",
            "range": "± 33629.11889066731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10717.708333333334,
            "unit": "ns",
            "range": "± 1406.4509115737621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57039.583333333336,
            "unit": "ns",
            "range": "± 5901.319730484317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44520.23809523809,
            "unit": "ns",
            "range": "± 2396.52256917296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59276.086956521736,
            "unit": "ns",
            "range": "± 9017.386984948109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.896907216495,
            "unit": "ns",
            "range": "± 555.6836908360443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10511.764705882353,
            "unit": "ns",
            "range": "± 1433.1460368801256"
          }
        ]
      }
    ]
  }
}