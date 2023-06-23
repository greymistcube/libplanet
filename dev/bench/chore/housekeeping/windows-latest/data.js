window.BENCHMARK_DATA = {
  "lastUpdate": 1687484281559,
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
          "id": "1af342df243f9b25192e5e3e88e2d2407fe8a1c6",
          "message": "[skip changelog] Housekeeping",
          "timestamp": "2023-06-23T10:21:43+09:00",
          "tree_id": "0a1142c010416a4a2d71e91e847d15ca5bf08133",
          "url": "https://github.com/greymistcube/libplanet/commit/1af342df243f9b25192e5e3e88e2d2407fe8a1c6"
        },
        "date": 1687484260886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442784.5360824743,
            "unit": "ns",
            "range": "± 138013.78504534595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2715923.1707317075,
            "unit": "ns",
            "range": "± 97135.93574056473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2263072.448979592,
            "unit": "ns",
            "range": "± 149348.7103203541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5473681.25,
            "unit": "ns",
            "range": "± 207729.86719791603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46703.22580645161,
            "unit": "ns",
            "range": "± 3616.882263380006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7349352.380952381,
            "unit": "ns",
            "range": "± 153752.50768376957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20244464.285714287,
            "unit": "ns",
            "range": "± 247148.66471928888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52278293.333333336,
            "unit": "ns",
            "range": "± 634806.4884746562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102750635.71428572,
            "unit": "ns",
            "range": "± 1730863.862400748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207254185.7142857,
            "unit": "ns",
            "range": "± 2582325.7265964258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4891709.933035715,
            "unit": "ns",
            "range": "± 36302.41472918089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1602471.5541294643,
            "unit": "ns",
            "range": "± 10084.218453555557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1218380.482700893,
            "unit": "ns",
            "range": "± 12283.290674701457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627261.5084134615,
            "unit": "ns",
            "range": "± 7387.330489717328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851639.5833333334,
            "unit": "ns",
            "range": "± 4540.982709124095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777375.5998883928,
            "unit": "ns",
            "range": "± 3189.9564836883515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264156.4102564105,
            "unit": "ns",
            "range": "± 94483.31736586538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3459718.918918919,
            "unit": "ns",
            "range": "± 115505.38668977459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4263507.142857143,
            "unit": "ns",
            "range": "± 121666.24026887665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4305014.705882353,
            "unit": "ns",
            "range": "± 138087.17521552023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6667687.878787879,
            "unit": "ns",
            "range": "± 198020.41523157366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267215.625,
            "unit": "ns",
            "range": "± 7173.342648867717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255763.63636363635,
            "unit": "ns",
            "range": "± 7279.715747447586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235209.0909090909,
            "unit": "ns",
            "range": "± 13723.90355390759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4115142.8571428573,
            "unit": "ns",
            "range": "± 45249.695524444636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3701292.8571428573,
            "unit": "ns",
            "range": "± 57630.81059355602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21130.85106382979,
            "unit": "ns",
            "range": "± 2003.1709591440258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90100,
            "unit": "ns",
            "range": "± 6915.215711265509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77732.98969072165,
            "unit": "ns",
            "range": "± 5938.060879639857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101663.63636363637,
            "unit": "ns",
            "range": "± 16372.216725889031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5797.8494623655915,
            "unit": "ns",
            "range": "± 989.6176792100789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19787.36842105263,
            "unit": "ns",
            "range": "± 2023.7022164079103"
          }
        ]
      }
    ]
  }
}