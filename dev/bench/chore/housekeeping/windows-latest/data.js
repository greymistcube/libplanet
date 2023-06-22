window.BENCHMARK_DATA = {
  "lastUpdate": 1687440133627,
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
          "id": "76832be1dd36f1c70b3da27dec6ee5d77d0869b1",
          "message": "Housekeeping",
          "timestamp": "2023-06-22T22:07:03+09:00",
          "tree_id": "355d07e94a01d318834dec7b59c143d0d1548a98",
          "url": "https://github.com/greymistcube/libplanet/commit/76832be1dd36f1c70b3da27dec6ee5d77d0869b1"
        },
        "date": 1687440111607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357618.1818181819,
            "unit": "ns",
            "range": "± 117780.69846691503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2423722.807017544,
            "unit": "ns",
            "range": "± 104865.64536441014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085122.105263158,
            "unit": "ns",
            "range": "± 137593.7670060856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4896343.181818182,
            "unit": "ns",
            "range": "± 181708.3318381632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43070.454545454544,
            "unit": "ns",
            "range": "± 2381.738913227833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6911492.857142857,
            "unit": "ns",
            "range": "± 23385.97424117266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17434046.666666668,
            "unit": "ns",
            "range": "± 172856.63286032595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44960986.666666664,
            "unit": "ns",
            "range": "± 456366.8071482266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90001986.66666667,
            "unit": "ns",
            "range": "± 1464361.9307040314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177181607.69230768,
            "unit": "ns",
            "range": "± 1643740.162688707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4819035.770089285,
            "unit": "ns",
            "range": "± 14987.791526252748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504198.1820913462,
            "unit": "ns",
            "range": "± 1949.9722460615708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166380.5438701923,
            "unit": "ns",
            "range": "± 2026.7207625427543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633720.9765625,
            "unit": "ns",
            "range": "± 45121.94194138554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817911.0426682692,
            "unit": "ns",
            "range": "± 3342.0197871385326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718142.6199776785,
            "unit": "ns",
            "range": "± 816.3054746378044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3036942.8571428573,
            "unit": "ns",
            "range": "± 31421.200933953307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3184277.777777778,
            "unit": "ns",
            "range": "± 66256.7604147199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4005571.794871795,
            "unit": "ns",
            "range": "± 137757.54817167955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3943019.35483871,
            "unit": "ns",
            "range": "± 109081.21567393365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6428411.363636363,
            "unit": "ns",
            "range": "± 228756.79094345684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260345.58823529413,
            "unit": "ns",
            "range": "± 12478.033640338197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246095,
            "unit": "ns",
            "range": "± 10921.094888303189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214105.1724137931,
            "unit": "ns",
            "range": "± 9367.32698703492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3817246.6666666665,
            "unit": "ns",
            "range": "± 50586.75527767926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3463346.153846154,
            "unit": "ns",
            "range": "± 43652.82761716999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16438.297872340427,
            "unit": "ns",
            "range": "± 1434.6785172826746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77087.20930232559,
            "unit": "ns",
            "range": "± 4197.86490581127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65247.4358974359,
            "unit": "ns",
            "range": "± 1966.627781586806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79475.58139534884,
            "unit": "ns",
            "range": "± 8058.126129369425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4122.916666666667,
            "unit": "ns",
            "range": "± 670.6601879635456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15333.333333333334,
            "unit": "ns",
            "range": "± 1187.3731816340505"
          }
        ]
      }
    ]
  }
}