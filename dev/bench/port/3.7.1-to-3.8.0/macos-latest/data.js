window.BENCHMARK_DATA = {
  "lastUpdate": 1700545145949,
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
          "id": "d4567c662ab9a8fe8d457f8d456f785fe9ee5cc1",
          "message": "Merge tag '3.7.1' into port/3.7.1-to-3.8.0\n\nLibplanet 3.7.1",
          "timestamp": "2023-11-21T14:20:17+09:00",
          "tree_id": "3d17b59700923895a777cec17203c71dd9223b48",
          "url": "https://github.com/greymistcube/libplanet/commit/d4567c662ab9a8fe8d457f8d456f785fe9ee5cc1"
        },
        "date": 1700545132714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8094528.653846154,
            "unit": "ns",
            "range": "± 114977.22824023761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20291470.842105262,
            "unit": "ns",
            "range": "± 438713.4934838533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50121332.071428575,
            "unit": "ns",
            "range": "± 754879.2007747856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103238529,
            "unit": "ns",
            "range": "± 2088656.334700703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206808933.16666666,
            "unit": "ns",
            "range": "± 3321203.940510701"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70456.85416666667,
            "unit": "ns",
            "range": "± 12850.46629338625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317419.31868131866,
            "unit": "ns",
            "range": "± 26000.645693640046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311389.1703296703,
            "unit": "ns",
            "range": "± 24638.286424476726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309745.0494505495,
            "unit": "ns",
            "range": "± 30590.2756688257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4187078.3164556962,
            "unit": "ns",
            "range": "± 216349.79667697358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3670556.4375,
            "unit": "ns",
            "range": "± 67835.8941725974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20670.787234042553,
            "unit": "ns",
            "range": "± 4263.633166306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103352.45161290323,
            "unit": "ns",
            "range": "± 15669.115699859007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101876.75263157894,
            "unit": "ns",
            "range": "± 17005.081208066757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122300.13265306123,
            "unit": "ns",
            "range": "± 23041.62848565356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7360.540816326531,
            "unit": "ns",
            "range": "± 1411.1167246858022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20400.588888888888,
            "unit": "ns",
            "range": "± 2722.0682647717344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466945.0051546392,
            "unit": "ns",
            "range": "± 186082.92800971627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2742254.588235294,
            "unit": "ns",
            "range": "± 146855.06806520358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2113155.936170213,
            "unit": "ns",
            "range": "± 191448.45962046715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9897972.82022472,
            "unit": "ns",
            "range": "± 864381.2230249868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297105.679775281,
            "unit": "ns",
            "range": "± 235859.52789837553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3457470.6145833335,
            "unit": "ns",
            "range": "± 310645.51065912883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452703.386597938,
            "unit": "ns",
            "range": "± 283258.77013772214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4254786.609195402,
            "unit": "ns",
            "range": "± 329083.07007407775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17470702.51,
            "unit": "ns",
            "range": "± 2922831.065048699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5843906.002858232,
            "unit": "ns",
            "range": "± 208919.79137881583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869264.091796875,
            "unit": "ns",
            "range": "± 26886.847144352672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058158.7821614584,
            "unit": "ns",
            "range": "± 15778.913999724102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2789625.2359375,
            "unit": "ns",
            "range": "± 45723.97110862593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910713.7599609375,
            "unit": "ns",
            "range": "± 16796.153102012722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721187.9223307292,
            "unit": "ns",
            "range": "± 7753.208895269266"
          }
        ]
      }
    ]
  }
}