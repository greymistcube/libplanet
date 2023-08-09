window.BENCHMARK_DATA = {
  "lastUpdate": 1691562714614,
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
          "id": "ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad",
          "message": "Introduce VolatileKeyValueStore",
          "timestamp": "2023-08-09T10:33:47+09:00",
          "tree_id": "aa74d09cc1962bc9aba5f59caea5d7aec8790c9e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad"
        },
        "date": 1691546297061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366256.5656565656,
            "unit": "ns",
            "range": "± 134149.48801625633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2420330.769230769,
            "unit": "ns",
            "range": "± 104930.67491663978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1695185.4166666667,
            "unit": "ns",
            "range": "± 133005.29231984614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4643460.606060606,
            "unit": "ns",
            "range": "± 280225.514802931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44461.70212765958,
            "unit": "ns",
            "range": "± 2799.73525564755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7326300,
            "unit": "ns",
            "range": "± 62595.10478349839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19986364.70588235,
            "unit": "ns",
            "range": "± 387397.008799075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50074438.70967742,
            "unit": "ns",
            "range": "± 1494047.57391399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102006417.85714285,
            "unit": "ns",
            "range": "± 2901154.680985253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194123400,
            "unit": "ns",
            "range": "± 3785800.0369802946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4759747.135416667,
            "unit": "ns",
            "range": "± 21837.013529396485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555448.2161458333,
            "unit": "ns",
            "range": "± 15362.188676198703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226253.4244791667,
            "unit": "ns",
            "range": "± 11995.112346737207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677453.125,
            "unit": "ns",
            "range": "± 13413.13632115005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839931.7708333334,
            "unit": "ns",
            "range": "± 2861.929225752843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782909.3229166666,
            "unit": "ns",
            "range": "± 2859.307440256169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3118372.222222222,
            "unit": "ns",
            "range": "± 63924.48491182256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245614.814814815,
            "unit": "ns",
            "range": "± 89505.8945360313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4005432.5,
            "unit": "ns",
            "range": "± 137384.2475714346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3590222.222222222,
            "unit": "ns",
            "range": "± 212509.82332903545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6301506.060606061,
            "unit": "ns",
            "range": "± 197287.7149295445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263248.3146067416,
            "unit": "ns",
            "range": "± 14235.687488264632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252818.42105263157,
            "unit": "ns",
            "range": "± 5329.483259460104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221366.66666666666,
            "unit": "ns",
            "range": "± 10891.410234740424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4052788,
            "unit": "ns",
            "range": "± 103823.58161805054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756475,
            "unit": "ns",
            "range": "± 30785.98042793328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18734.40860215054,
            "unit": "ns",
            "range": "± 1258.3196718032102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82702.1052631579,
            "unit": "ns",
            "range": "± 7296.005595418377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69112.82051282052,
            "unit": "ns",
            "range": "± 2283.139515203559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86857.57575757576,
            "unit": "ns",
            "range": "± 14203.298631735639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4682.105263157895,
            "unit": "ns",
            "range": "± 887.139671817482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15851.578947368422,
            "unit": "ns",
            "range": "± 1211.3701718174725"
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
          "id": "7f442c257e57b2f39823cc9d3451e7f4a6311ccd",
          "message": "Added tests; fixed bugs",
          "timestamp": "2023-08-09T15:14:23+09:00",
          "tree_id": "aafba74cc26be41ac4d68dcb7c5ab229efaf26b1",
          "url": "https://github.com/greymistcube/libplanet/commit/7f442c257e57b2f39823cc9d3451e7f4a6311ccd"
        },
        "date": 1691562692202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414851.0204081633,
            "unit": "ns",
            "range": "± 107342.51614408853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2576654.761904762,
            "unit": "ns",
            "range": "± 138232.31659255747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1788586.7346938776,
            "unit": "ns",
            "range": "± 130316.31354053441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4614233.333333333,
            "unit": "ns",
            "range": "± 117705.21641377876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49647.87234042553,
            "unit": "ns",
            "range": "± 3312.8530641107536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7635184.2105263155,
            "unit": "ns",
            "range": "± 165624.0094751358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20598900,
            "unit": "ns",
            "range": "± 182798.02671645166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52090940,
            "unit": "ns",
            "range": "± 607736.539252707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105579580,
            "unit": "ns",
            "range": "± 1437948.0222078364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209565633.33333334,
            "unit": "ns",
            "range": "± 2156725.3208333715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4950539.739583333,
            "unit": "ns",
            "range": "± 13389.998985417198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566600.2371651786,
            "unit": "ns",
            "range": "± 8244.995340341105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222225.703125,
            "unit": "ns",
            "range": "± 3414.284825778077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2722471.5401785714,
            "unit": "ns",
            "range": "± 16831.268067231398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853900.9556361607,
            "unit": "ns",
            "range": "± 2421.5698268549554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789868.4114583334,
            "unit": "ns",
            "range": "± 2465.627136966282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400678.5714285714,
            "unit": "ns",
            "range": "± 58041.81753199655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545871.264367816,
            "unit": "ns",
            "range": "± 185686.36905555008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179754.285714286,
            "unit": "ns",
            "range": "± 135639.40591500243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3953576.923076923,
            "unit": "ns",
            "range": "± 52963.905222427245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6276700,
            "unit": "ns",
            "range": "± 210195.6562084214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274696.49122807017,
            "unit": "ns",
            "range": "± 11848.115656572938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262363.75,
            "unit": "ns",
            "range": "± 13670.750849805887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246709.375,
            "unit": "ns",
            "range": "± 14223.361643696206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4325414.285714285,
            "unit": "ns",
            "range": "± 27823.58869578272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3895986.6666666665,
            "unit": "ns",
            "range": "± 35082.06433628497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21823.40425531915,
            "unit": "ns",
            "range": "± 1854.922282342332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96814.73684210527,
            "unit": "ns",
            "range": "± 6189.6785813683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81317.01030927835,
            "unit": "ns",
            "range": "± 6408.843526225509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100068.81720430107,
            "unit": "ns",
            "range": "± 9441.777864256375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5977.894736842105,
            "unit": "ns",
            "range": "± 1008.2826084927906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21885.263157894737,
            "unit": "ns",
            "range": "± 1904.4163913685802"
          }
        ]
      }
    ]
  }
}