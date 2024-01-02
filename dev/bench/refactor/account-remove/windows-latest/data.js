window.BENCHMARK_DATA = {
  "lastUpdate": 1704179073949,
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
          "id": "2197636a9db38fc3f1ee69c5e9bd601837dc1909",
          "message": "Added tests",
          "timestamp": "2024-01-02T15:34:41+09:00",
          "tree_id": "5b5d6539ec6fac4fd46da608309eb84511299b4a",
          "url": "https://github.com/greymistcube/libplanet/commit/2197636a9db38fc3f1ee69c5e9bd601837dc1909"
        },
        "date": 1704177989782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057752,
            "unit": "ns",
            "range": "± 28136.662322789223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1779640.625,
            "unit": "ns",
            "range": "± 141263.7500177556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1335464.2857142857,
            "unit": "ns",
            "range": "± 121588.71798076572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5172237.735849056,
            "unit": "ns",
            "range": "± 213041.14014615823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34197.4358974359,
            "unit": "ns",
            "range": "± 1635.7193388774726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5010873.333333333,
            "unit": "ns",
            "range": "± 42622.5370744946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13341160,
            "unit": "ns",
            "range": "± 217844.51466912948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33446041.666666668,
            "unit": "ns",
            "range": "± 857551.4505627746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63513642.85714286,
            "unit": "ns",
            "range": "± 666009.118341698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127534740,
            "unit": "ns",
            "range": "± 1051083.0970276056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3241490.174278846,
            "unit": "ns",
            "range": "± 5860.568122548238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049164.609375,
            "unit": "ns",
            "range": "± 3194.339265240438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741255.0651041666,
            "unit": "ns",
            "range": "± 2846.6076879856837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981259.4010416667,
            "unit": "ns",
            "range": "± 7253.214653116754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613198.5979352678,
            "unit": "ns",
            "range": "± 1984.3449349142172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 539565.2864583334,
            "unit": "ns",
            "range": "± 2020.644739638448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188261.5384615385,
            "unit": "ns",
            "range": "± 25283.74110179433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2159564.285714286,
            "unit": "ns",
            "range": "± 33456.38636134793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759436.3636363638,
            "unit": "ns",
            "range": "± 66428.92761623075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2574073.3333333335,
            "unit": "ns",
            "range": "± 113433.5762725865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6178628.260869565,
            "unit": "ns",
            "range": "± 236019.60056368526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171230.13698630137,
            "unit": "ns",
            "range": "± 8497.412758721635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161350,
            "unit": "ns",
            "range": "± 6762.8494050563995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138120.83333333334,
            "unit": "ns",
            "range": "± 3478.1278280715615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757466.6666666665,
            "unit": "ns",
            "range": "± 43826.78024526404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484257.1428571427,
            "unit": "ns",
            "range": "± 38628.759996938796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11119.354838709678,
            "unit": "ns",
            "range": "± 1326.8349119579507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53214.444444444445,
            "unit": "ns",
            "range": "± 3964.9464371776694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45294.505494505494,
            "unit": "ns",
            "range": "± 3088.8100059322605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57515.30612244898,
            "unit": "ns",
            "range": "± 9744.449670959311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2314.8936170212764,
            "unit": "ns",
            "range": "± 458.8338295991544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10162.222222222223,
            "unit": "ns",
            "range": "± 1363.7833840466553"
          }
        ]
      },
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
          "id": "6876527bacbde76abf5fc30535cd81ac438c056f",
          "message": "Added tests",
          "timestamp": "2024-01-02T15:51:35+09:00",
          "tree_id": "5b5d6539ec6fac4fd46da608309eb84511299b4a",
          "url": "https://github.com/greymistcube/libplanet/commit/6876527bacbde76abf5fc30535cd81ac438c056f"
        },
        "date": 1704179048987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045042.4242424242,
            "unit": "ns",
            "range": "± 123042.0594183136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852210,
            "unit": "ns",
            "range": "± 64587.447379303965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1399027.8350515463,
            "unit": "ns",
            "range": "± 82409.9694897762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5224392,
            "unit": "ns",
            "range": "± 136099.49154938088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36322.58064516129,
            "unit": "ns",
            "range": "± 2997.4673741654865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4995565.384615385,
            "unit": "ns",
            "range": "± 56405.10978853255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13523566.666666666,
            "unit": "ns",
            "range": "± 125553.02048290575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33742185.71428572,
            "unit": "ns",
            "range": "± 360016.3241109681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68378971.42857143,
            "unit": "ns",
            "range": "± 565333.7508853597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135862200,
            "unit": "ns",
            "range": "± 1393831.5890276805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3312239.152644231,
            "unit": "ns",
            "range": "± 12123.973393613414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049691.7518028845,
            "unit": "ns",
            "range": "± 2065.2649060577046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775088.6579241072,
            "unit": "ns",
            "range": "± 949.4201750611694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903688.588169643,
            "unit": "ns",
            "range": "± 2103.106960352995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629877.8846153846,
            "unit": "ns",
            "range": "± 888.126232599494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564198.5491071428,
            "unit": "ns",
            "range": "± 731.7736954153378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208362.5,
            "unit": "ns",
            "range": "± 67419.69057641362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294167.3076923075,
            "unit": "ns",
            "range": "± 89585.60966626291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2898338.888888889,
            "unit": "ns",
            "range": "± 59569.98986746983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2749292.8571428573,
            "unit": "ns",
            "range": "± 46677.99208465318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6066883.333333333,
            "unit": "ns",
            "range": "± 129198.25167274562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181417.39130434784,
            "unit": "ns",
            "range": "± 6923.656848413949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172133.33333333334,
            "unit": "ns",
            "range": "± 6783.250125824902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140712.8205128205,
            "unit": "ns",
            "range": "± 4500.712194354383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783306.6666666665,
            "unit": "ns",
            "range": "± 50272.549548389106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535828.5714285714,
            "unit": "ns",
            "range": "± 37435.327382884425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12621.348314606741,
            "unit": "ns",
            "range": "± 1282.1742817035054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57474.15730337079,
            "unit": "ns",
            "range": "± 3978.36558748712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45721.62162162162,
            "unit": "ns",
            "range": "± 2291.573023789929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66695.95959595959,
            "unit": "ns",
            "range": "± 16332.982276337876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2733.673469387755,
            "unit": "ns",
            "range": "± 699.4760745561632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10962.5,
            "unit": "ns",
            "range": "± 1281.8191544939505"
          }
        ]
      }
    ]
  }
}