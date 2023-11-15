window.BENCHMARK_DATA = {
  "lastUpdate": 1695014146955,
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
          "id": "7ced969e48fee56a6402ce06c54b0eb58149b5ac",
          "message": "Added new GetAccountState() interface method",
          "timestamp": "2023-09-18T14:00:07+09:00",
          "tree_id": "2e86c9bae5ec44070e4137b9708d6343b89d33a3",
          "url": "https://github.com/greymistcube/libplanet/commit/7ced969e48fee56a6402ce06c54b0eb58149b5ac"
        },
        "date": 1695014062963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275596.8888888889,
            "unit": "ns",
            "range": "± 10488.516820838402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264773.02173913043,
            "unit": "ns",
            "range": "± 9992.796384260748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220685.4705882353,
            "unit": "ns",
            "range": "± 4480.769871317415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273652.933333334,
            "unit": "ns",
            "range": "± 75745.40458334907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935935.6,
            "unit": "ns",
            "range": "± 72920.65576442853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18198.021276595744,
            "unit": "ns",
            "range": "± 1225.8490406694375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80158.63953488372,
            "unit": "ns",
            "range": "± 3994.333204053818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70347.32142857143,
            "unit": "ns",
            "range": "± 1966.7111492817126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74733.425,
            "unit": "ns",
            "range": "± 5543.088406557431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5263.326530612245,
            "unit": "ns",
            "range": "± 686.6578369625341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19595.072164948455,
            "unit": "ns",
            "range": "± 2026.626575368036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506898.7,
            "unit": "ns",
            "range": "± 102846.01786774112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516069.6470588236,
            "unit": "ns",
            "range": "± 57508.02862855452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4466133.657142857,
            "unit": "ns",
            "range": "± 142533.50843386698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3784160.1395348837,
            "unit": "ns",
            "range": "± 138752.62846186123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6171307.129032258,
            "unit": "ns",
            "range": "± 187415.38313680692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380694.4567901234,
            "unit": "ns",
            "range": "± 71270.70891257667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762714.08,
            "unit": "ns",
            "range": "± 109634.04517904099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797392.9210526317,
            "unit": "ns",
            "range": "± 89831.70210072657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4636212.03125,
            "unit": "ns",
            "range": "± 141892.36616181643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46526.41935483871,
            "unit": "ns",
            "range": "± 2732.9326990336604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7991366.785714285,
            "unit": "ns",
            "range": "± 37302.18065636083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22151264.1,
            "unit": "ns",
            "range": "± 479473.75314926484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55087819.55555555,
            "unit": "ns",
            "range": "± 1165076.937047417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110710350.13333334,
            "unit": "ns",
            "range": "± 2031191.5287657026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219460053.12903225,
            "unit": "ns",
            "range": "± 6628500.012267963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4993731.192522322,
            "unit": "ns",
            "range": "± 31163.908078514607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612557.5716145833,
            "unit": "ns",
            "range": "± 6046.033199714922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061968.773046875,
            "unit": "ns",
            "range": "± 3285.578401933375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616000.91015625,
            "unit": "ns",
            "range": "± 13291.202164115628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811976.0137416294,
            "unit": "ns",
            "range": "± 2001.174671308694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752860.8025390625,
            "unit": "ns",
            "range": "± 1139.695565678491"
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
          "id": "636e8b74c40d5882914f9a84f165e979dfc2bf4e",
          "message": "Changelog",
          "timestamp": "2023-09-18T14:02:28+09:00",
          "tree_id": "3a9bcb958abbe8360093220916205e839b7b733d",
          "url": "https://github.com/greymistcube/libplanet/commit/636e8b74c40d5882914f9a84f165e979dfc2bf4e"
        },
        "date": 1695014139128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267996.09523809527,
            "unit": "ns",
            "range": "± 9552.13814350796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252616.35294117648,
            "unit": "ns",
            "range": "± 8051.755637210727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219209.97222222222,
            "unit": "ns",
            "range": "± 6605.378914127967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161770.214285714,
            "unit": "ns",
            "range": "± 35807.9152835033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3955085.8571428573,
            "unit": "ns",
            "range": "± 19246.799026000474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19392.547368421052,
            "unit": "ns",
            "range": "± 1417.5725863693824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84021.11363636363,
            "unit": "ns",
            "range": "± 4559.284594092241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66666.2,
            "unit": "ns",
            "range": "± 1235.4024908043993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79605.60204081633,
            "unit": "ns",
            "range": "± 11226.51490270308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4591.742268041237,
            "unit": "ns",
            "range": "± 505.7254129455719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17301.010638297874,
            "unit": "ns",
            "range": "± 1602.7963097781005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307848.533333333,
            "unit": "ns",
            "range": "± 33954.79579185636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3387221.466666667,
            "unit": "ns",
            "range": "± 54308.10281935924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4163863.6428571427,
            "unit": "ns",
            "range": "± 29215.82201112463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3686690.272727273,
            "unit": "ns",
            "range": "± 90282.37129941751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5885801.055555556,
            "unit": "ns",
            "range": "± 122604.6650453362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340659.65,
            "unit": "ns",
            "range": "± 112888.88308263101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498845.4594594594,
            "unit": "ns",
            "range": "± 82494.51291739031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1671426.3673469387,
            "unit": "ns",
            "range": "± 125145.72685180158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4329637.804878049,
            "unit": "ns",
            "range": "± 143251.42435997268"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46635.03409090909,
            "unit": "ns",
            "range": "± 2541.456517178586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7756314.5,
            "unit": "ns",
            "range": "± 47274.21456655431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19565812.4,
            "unit": "ns",
            "range": "± 167618.17438315827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50214702.14285714,
            "unit": "ns",
            "range": "± 260565.55332550037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100586379.46666667,
            "unit": "ns",
            "range": "± 827860.3198695735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202875920.06666666,
            "unit": "ns",
            "range": "± 1710410.2022339748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4927048.174278846,
            "unit": "ns",
            "range": "± 5238.626810300455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1637996.9600260416,
            "unit": "ns",
            "range": "± 8632.233886065836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057959.0495256695,
            "unit": "ns",
            "range": "± 846.5175812382258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2793798.5461856616,
            "unit": "ns",
            "range": "± 54615.98969947303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813725.8626953125,
            "unit": "ns",
            "range": "± 1449.0564496050295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738293.0515485491,
            "unit": "ns",
            "range": "± 436.71420133967905"
          }
        ]
      }
    ]
  }
}