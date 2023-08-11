window.BENCHMARK_DATA = {
  "lastUpdate": 1691725921455,
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
          "id": "4e820394c7e12fa4894d1d9ba1994719a89136e7",
          "message": "Changelog",
          "timestamp": "2023-08-09T18:52:16+09:00",
          "tree_id": "165b4ad369419c8aba771d844298efbc31b64d6b",
          "url": "https://github.com/greymistcube/libplanet/commit/4e820394c7e12fa4894d1d9ba1994719a89136e7"
        },
        "date": 1691575730143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325086.6666666667,
            "unit": "ns",
            "range": "± 69429.79349471739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2588630.9523809524,
            "unit": "ns",
            "range": "± 94186.92490712865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797885.8585858585,
            "unit": "ns",
            "range": "± 127669.55193724675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4827241.891891892,
            "unit": "ns",
            "range": "± 239931.9623918281"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47106.52173913043,
            "unit": "ns",
            "range": "± 2897.850827269174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7870485.714285715,
            "unit": "ns",
            "range": "± 116346.24622646409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21128646.666666668,
            "unit": "ns",
            "range": "± 269057.5107579011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53016271.428571425,
            "unit": "ns",
            "range": "± 416063.27630555176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107790300,
            "unit": "ns",
            "range": "± 769540.8491895857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212225520,
            "unit": "ns",
            "range": "± 2315382.399826986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5054059.114583333,
            "unit": "ns",
            "range": "± 17234.071570257707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1581022.9166666667,
            "unit": "ns",
            "range": "± 5052.896374067996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197580.546875,
            "unit": "ns",
            "range": "± 3375.9979127465513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657227.34375,
            "unit": "ns",
            "range": "± 10796.86335255898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867827.1033653846,
            "unit": "ns",
            "range": "± 3343.1427590493763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784812.0884486607,
            "unit": "ns",
            "range": "± 1901.5093573455622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544980,
            "unit": "ns",
            "range": "± 61319.65660140544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3573232.1428571427,
            "unit": "ns",
            "range": "± 99013.54210997616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4281042.424242424,
            "unit": "ns",
            "range": "± 131444.90535558766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3969502.1276595746,
            "unit": "ns",
            "range": "± 148217.41300236547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6400462.790697674,
            "unit": "ns",
            "range": "± 232733.91717055422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270307.6923076923,
            "unit": "ns",
            "range": "± 10319.880797188258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258205.35714285713,
            "unit": "ns",
            "range": "± 10955.039017280124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241558,
            "unit": "ns",
            "range": "± 16413.80104200318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4290540,
            "unit": "ns",
            "range": "± 54305.57456257533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919285.714285714,
            "unit": "ns",
            "range": "± 63744.86232260191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22316.304347826088,
            "unit": "ns",
            "range": "± 1613.0836739988251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93851.04166666667,
            "unit": "ns",
            "range": "± 7381.042499348788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79975.25773195876,
            "unit": "ns",
            "range": "± 7278.822462685772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99535.71428571429,
            "unit": "ns",
            "range": "± 19433.435158557422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6111.340206185567,
            "unit": "ns",
            "range": "± 929.4797255117816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20879.381443298967,
            "unit": "ns",
            "range": "± 1837.8507683529137"
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
          "id": "6b5ed745979df2ba815f426aef8b401bfb80b04c",
          "message": "Added tests; fixed bugs",
          "timestamp": "2023-08-09T18:48:20+09:00",
          "tree_id": "dd96494b87d086b4c271242141d8b87d1de38297",
          "url": "https://github.com/greymistcube/libplanet/commit/6b5ed745979df2ba815f426aef8b401bfb80b04c"
        },
        "date": 1691575822164,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505276.0416666667,
            "unit": "ns",
            "range": "± 168792.167905599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911564.5833333335,
            "unit": "ns",
            "range": "± 251051.93506698406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2070042.7083333333,
            "unit": "ns",
            "range": "± 199121.09816828958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5639603.225806451,
            "unit": "ns",
            "range": "± 321337.79343469866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50983.69565217391,
            "unit": "ns",
            "range": "± 3933.2417403044524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8130185.869565218,
            "unit": "ns",
            "range": "± 650566.6513279901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22122433.50515464,
            "unit": "ns",
            "range": "± 1306535.6377235763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52855165.97938144,
            "unit": "ns",
            "range": "± 3443069.1815190664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104125160.9375,
            "unit": "ns",
            "range": "± 4785650.593465388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224969198.7179487,
            "unit": "ns",
            "range": "± 11508312.075569537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5397757.03125,
            "unit": "ns",
            "range": "± 196342.52825016197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1715888.842147436,
            "unit": "ns",
            "range": "± 59379.76814907176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347791.9793801229,
            "unit": "ns",
            "range": "± 60482.67077488264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2996353.4476902173,
            "unit": "ns",
            "range": "± 74435.58651786763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922313.388671875,
            "unit": "ns",
            "range": "± 21171.783276524115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843745.0911458334,
            "unit": "ns",
            "range": "± 12246.073891625883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3352879.381443299,
            "unit": "ns",
            "range": "± 348472.5619692987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626780,
            "unit": "ns",
            "range": "± 422772.25571461074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4316959.183673469,
            "unit": "ns",
            "range": "± 365300.5072332829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3924993.81443299,
            "unit": "ns",
            "range": "± 379336.3969416506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6882441.052631579,
            "unit": "ns",
            "range": "± 737709.08734546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268788.4210526316,
            "unit": "ns",
            "range": "± 31528.865069754505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258922.5806451613,
            "unit": "ns",
            "range": "± 33995.25583599628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247794.5054945055,
            "unit": "ns",
            "range": "± 24582.660386890424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746878.571428572,
            "unit": "ns",
            "range": "± 201593.56204933795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4098022.9166666665,
            "unit": "ns",
            "range": "± 340115.1069794078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19850.56179775281,
            "unit": "ns",
            "range": "± 1900.3064104306982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86800,
            "unit": "ns",
            "range": "± 9444.000684888275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79046.39175257731,
            "unit": "ns",
            "range": "± 10531.57021625604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98623.71134020618,
            "unit": "ns",
            "range": "± 22036.30419896088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5060.989010989011,
            "unit": "ns",
            "range": "± 734.007349259385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18977.17391304348,
            "unit": "ns",
            "range": "± 2147.9918176154115"
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
          "id": "03a96f56214f40111180a6b6ea7992b770d67475",
          "message": "Changelog",
          "timestamp": "2023-08-10T13:51:40+09:00",
          "tree_id": "fb25148da6dae328e22b79b77d86241dac0b9f1a",
          "url": "https://github.com/greymistcube/libplanet/commit/03a96f56214f40111180a6b6ea7992b770d67475"
        },
        "date": 1691644083463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1298927,
            "unit": "ns",
            "range": "± 127560.62361865357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2317914.285714286,
            "unit": "ns",
            "range": "± 98805.52510972144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1587117.3469387756,
            "unit": "ns",
            "range": "± 127100.13344912587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4120898.412698413,
            "unit": "ns",
            "range": "± 185313.8057737282"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43659.550561797754,
            "unit": "ns",
            "range": "± 4828.7895881492905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6885785.714285715,
            "unit": "ns",
            "range": "± 24390.44129108013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17227880,
            "unit": "ns",
            "range": "± 88869.23941547894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44621507.14285714,
            "unit": "ns",
            "range": "± 289971.01835100085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87560378.57142857,
            "unit": "ns",
            "range": "± 306283.04701715027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174707628.57142857,
            "unit": "ns",
            "range": "± 863048.7867737538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4386470.102163462,
            "unit": "ns",
            "range": "± 11291.14920950827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397063.8932291667,
            "unit": "ns",
            "range": "± 2878.773294984073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1013110.9635416666,
            "unit": "ns",
            "range": "± 2883.0867419124743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518430.7552083335,
            "unit": "ns",
            "range": "± 7782.5977096759825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776593.8997395834,
            "unit": "ns",
            "range": "± 1609.8112613369103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725941.4760044643,
            "unit": "ns",
            "range": "± 946.2192077778818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2868783.3333333335,
            "unit": "ns",
            "range": "± 72066.27183524816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2960592.4242424243,
            "unit": "ns",
            "range": "± 110537.8227097732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3788933.3333333335,
            "unit": "ns",
            "range": "± 59299.634625068866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3249821.4285714286,
            "unit": "ns",
            "range": "± 31399.226560083112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5398875.675675675,
            "unit": "ns",
            "range": "± 82441.19589610997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236125.92592592593,
            "unit": "ns",
            "range": "± 9763.33505471547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225505.08474576272,
            "unit": "ns",
            "range": "± 9846.238976149878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194811.11111111112,
            "unit": "ns",
            "range": "± 3984.217229030638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3632642.8571428573,
            "unit": "ns",
            "range": "± 43044.62289809914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3292940,
            "unit": "ns",
            "range": "± 28406.83519356364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14692.553191489362,
            "unit": "ns",
            "range": "± 878.6890726460381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70902.77777777778,
            "unit": "ns",
            "range": "± 3513.9549654509706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62011.11111111111,
            "unit": "ns",
            "range": "± 1317.2560110672528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61043.24324324324,
            "unit": "ns",
            "range": "± 2531.125748843896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3635.2631578947367,
            "unit": "ns",
            "range": "± 381.7564170070908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14535.483870967742,
            "unit": "ns",
            "range": "± 1039.7162197791324"
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
          "id": "69b6177f6a0154fe33008a3ff505e2a0b7478b4b",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-10T22:04:32+09:00",
          "tree_id": "6479af23e49ccc90d3203d5aa9c5eeb97fceab47",
          "url": "https://github.com/greymistcube/libplanet/commit/69b6177f6a0154fe33008a3ff505e2a0b7478b4b"
        },
        "date": 1691673418219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057504,
            "unit": "ns",
            "range": "± 108427.10898864898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861670.4225352113,
            "unit": "ns",
            "range": "± 90703.24201855222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1322666.3265306123,
            "unit": "ns",
            "range": "± 142499.31303424758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3246746.7532467535,
            "unit": "ns",
            "range": "± 166410.16351838197"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35106.493506493505,
            "unit": "ns",
            "range": "± 1808.702476358009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5082464.285714285,
            "unit": "ns",
            "range": "± 59556.76809879483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13244384.615384616,
            "unit": "ns",
            "range": "± 104408.83460507421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34349916.666666664,
            "unit": "ns",
            "range": "± 381478.6788025674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67650642.85714285,
            "unit": "ns",
            "range": "± 415957.1385358125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138315983.33333334,
            "unit": "ns",
            "range": "± 989321.8237522009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3183041.6666666665,
            "unit": "ns",
            "range": "± 11906.213833506401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1003375.1171875,
            "unit": "ns",
            "range": "± 1733.4495273532307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719854.5828683035,
            "unit": "ns",
            "range": "± 996.5443563181187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1879496.328125,
            "unit": "ns",
            "range": "± 6393.812142538788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 577195.9681919643,
            "unit": "ns",
            "range": "± 710.4792413368921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523289.0657552083,
            "unit": "ns",
            "range": "± 658.8572043792755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167547.272727273,
            "unit": "ns",
            "range": "± 87082.0172246011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293138.4615384615,
            "unit": "ns",
            "range": "± 89949.3477373296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2855188.732394366,
            "unit": "ns",
            "range": "± 133651.34123563633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2479863.01369863,
            "unit": "ns",
            "range": "± 120102.3250154834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4164252.9411764704,
            "unit": "ns",
            "range": "± 133988.37180504182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185022.44897959183,
            "unit": "ns",
            "range": "± 5075.277714327662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177567.64705882352,
            "unit": "ns",
            "range": "± 5832.690832963905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157656.56565656565,
            "unit": "ns",
            "range": "± 9219.11458868023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2750013.3333333335,
            "unit": "ns",
            "range": "± 41890.842276882744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2530540,
            "unit": "ns",
            "range": "± 46620.516636225424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15918.556701030928,
            "unit": "ns",
            "range": "± 1725.865115004357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65111.82795698925,
            "unit": "ns",
            "range": "± 4761.823944081439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51613.333333333336,
            "unit": "ns",
            "range": "± 1438.0862123054337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60180.21978021978,
            "unit": "ns",
            "range": "± 8383.704031303421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3657.7319587628867,
            "unit": "ns",
            "range": "± 522.9792561904326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15114.736842105263,
            "unit": "ns",
            "range": "± 1409.6905063269098"
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
          "id": "8462329db89fac815ba092ae9c627bf018368e1f",
          "message": "Changelog",
          "timestamp": "2023-08-10T22:00:36+09:00",
          "tree_id": "9d081c2db32d067f7aaf71f3104d9d3b30894556",
          "url": "https://github.com/greymistcube/libplanet/commit/8462329db89fac815ba092ae9c627bf018368e1f"
        },
        "date": 1691673758753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637487.7777777778,
            "unit": "ns",
            "range": "± 148785.26176541057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3000345.652173913,
            "unit": "ns",
            "range": "± 188165.28531127438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2049024.2105263157,
            "unit": "ns",
            "range": "± 192315.47869005497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5435140.677966102,
            "unit": "ns",
            "range": "± 240424.48676042794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70335.35353535354,
            "unit": "ns",
            "range": "± 10733.186311349744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8830498.850574713,
            "unit": "ns",
            "range": "± 690821.7308654041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24190155.555555556,
            "unit": "ns",
            "range": "± 660335.7510407597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59743180,
            "unit": "ns",
            "range": "± 1115802.8481770423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125839655,
            "unit": "ns",
            "range": "± 4023187.829987431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248241536,
            "unit": "ns",
            "range": "± 6564676.737844751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5685772.453125,
            "unit": "ns",
            "range": "± 141723.98007225437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1645973.8541666667,
            "unit": "ns",
            "range": "± 15109.79685981737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217546.665736607,
            "unit": "ns",
            "range": "± 19983.8997988533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063761.3020833335,
            "unit": "ns",
            "range": "± 40264.232970375204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982271.4776400862,
            "unit": "ns",
            "range": "± 27941.659298665636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935194.6875,
            "unit": "ns",
            "range": "± 27826.345738187487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4029882,
            "unit": "ns",
            "range": "± 161691.7522034202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3978053.846153846,
            "unit": "ns",
            "range": "± 221694.35982786567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4763757.692307692,
            "unit": "ns",
            "range": "± 193296.8760549672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4425391.666666667,
            "unit": "ns",
            "range": "± 196171.63299110165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7301185.555555556,
            "unit": "ns",
            "range": "± 388106.4213374932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298936.26373626373,
            "unit": "ns",
            "range": "± 16715.36562888913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287409.0909090909,
            "unit": "ns",
            "range": "± 18431.423918672193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287797.87234042556,
            "unit": "ns",
            "range": "± 18461.485504619915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4796601.960784313,
            "unit": "ns",
            "range": "± 192075.8938442782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4450400,
            "unit": "ns",
            "range": "± 101232.5688699047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21652.577319587628,
            "unit": "ns",
            "range": "± 3292.639923105811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95098.9247311828,
            "unit": "ns",
            "range": "± 8576.37673855716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116825.26315789473,
            "unit": "ns",
            "range": "± 9617.27134766884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117728.42105263157,
            "unit": "ns",
            "range": "± 14885.346665521214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8113.333333333333,
            "unit": "ns",
            "range": "± 1259.4095281323553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20111.627906976744,
            "unit": "ns",
            "range": "± 2562.921981537349"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "436619f0961e3b9da88d78ca9b9db8973b0ab6a1",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-11T10:21:31+09:00",
          "tree_id": "3fa615785a65a6f95f419cfb410a7aa449def84d",
          "url": "https://github.com/greymistcube/libplanet/commit/436619f0961e3b9da88d78ca9b9db8973b0ab6a1"
        },
        "date": 1691717927235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346812.6315789474,
            "unit": "ns",
            "range": "± 89105.86727834847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532238.4615384615,
            "unit": "ns",
            "range": "± 103509.52055074715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728706.1855670102,
            "unit": "ns",
            "range": "± 124117.71362839475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4437000,
            "unit": "ns",
            "range": "± 169867.26582835198"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49395.78947368421,
            "unit": "ns",
            "range": "± 3932.9734241674155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7639077.2727272725,
            "unit": "ns",
            "range": "± 180575.87755321185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20908393.333333332,
            "unit": "ns",
            "range": "± 310372.37420019624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52592226.666666664,
            "unit": "ns",
            "range": "± 285312.29122456245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105750928.57142857,
            "unit": "ns",
            "range": "± 952639.6448642231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211827253.33333334,
            "unit": "ns",
            "range": "± 1514949.7831690032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4586203.292410715,
            "unit": "ns",
            "range": "± 8913.852077646934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421602.2005208333,
            "unit": "ns",
            "range": "± 3743.3751110053367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068023.939732143,
            "unit": "ns",
            "range": "± 2683.065562298691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681058.4244791665,
            "unit": "ns",
            "range": "± 7222.8261689205465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835495.0260416666,
            "unit": "ns",
            "range": "± 3405.8086625242277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763863.3138020834,
            "unit": "ns",
            "range": "± 1991.350247127765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448362.962962963,
            "unit": "ns",
            "range": "± 95887.73944305172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455610.447761194,
            "unit": "ns",
            "range": "± 162415.78716212732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4182996.93877551,
            "unit": "ns",
            "range": "± 164727.37717974206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3927445.714285714,
            "unit": "ns",
            "range": "± 126809.91644017052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6218578.378378378,
            "unit": "ns",
            "range": "± 197077.78658175547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260742.1052631579,
            "unit": "ns",
            "range": "± 11348.551628298228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250973.1343283582,
            "unit": "ns",
            "range": "± 11839.681379946514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227836.26373626373,
            "unit": "ns",
            "range": "± 12737.88327508422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4162830.769230769,
            "unit": "ns",
            "range": "± 52725.142399292214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3771826.923076923,
            "unit": "ns",
            "range": "± 40484.01235562326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22058.064516129034,
            "unit": "ns",
            "range": "± 1859.9510618062418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92841.23711340207,
            "unit": "ns",
            "range": "± 8089.85672227522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74291.30434782608,
            "unit": "ns",
            "range": "± 4925.771031828708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85789.01098901099,
            "unit": "ns",
            "range": "± 10993.295437062743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5898.958333333333,
            "unit": "ns",
            "range": "± 800.3281947415356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22370.833333333332,
            "unit": "ns",
            "range": "± 2358.05078587632"
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
          "id": "b412bade5704576129f3d57cc1afbe58e74cd46a",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-11T12:37:20+09:00",
          "tree_id": "d9a46b7d8a5bca8bab3e551d1408efe92e4b3233",
          "url": "https://github.com/greymistcube/libplanet/commit/b412bade5704576129f3d57cc1afbe58e74cd46a"
        },
        "date": 1691725897823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1225679.1666666667,
            "unit": "ns",
            "range": "± 91086.07718054582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2243663.4146341463,
            "unit": "ns",
            "range": "± 79049.91067704493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516055.7894736843,
            "unit": "ns",
            "range": "± 96902.31725023837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4153076.923076923,
            "unit": "ns",
            "range": "± 212480.9760303853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41797.18309859155,
            "unit": "ns",
            "range": "± 2002.2110514547173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7011000,
            "unit": "ns",
            "range": "± 59697.8224058466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18221650,
            "unit": "ns",
            "range": "± 95864.51176209377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46339606.666666664,
            "unit": "ns",
            "range": "± 257094.48642936893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93270313.33333333,
            "unit": "ns",
            "range": "± 420609.05986211856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187195886.66666666,
            "unit": "ns",
            "range": "± 2440239.5092831906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4397602.463942308,
            "unit": "ns",
            "range": "± 15540.459433338074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386463.1770833333,
            "unit": "ns",
            "range": "± 2534.386694023691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 994554.2447916666,
            "unit": "ns",
            "range": "± 2037.4371698194273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2492896.8489583335,
            "unit": "ns",
            "range": "± 5263.087935296608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791202.34375,
            "unit": "ns",
            "range": "± 1061.486743381606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727242.0638020834,
            "unit": "ns",
            "range": "± 1140.974246471441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2978241.6666666665,
            "unit": "ns",
            "range": "± 77058.02396876665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3175030,
            "unit": "ns",
            "range": "± 70810.99453734866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4011666.6666666665,
            "unit": "ns",
            "range": "± 63581.61983586437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3331292.592592593,
            "unit": "ns",
            "range": "± 139553.649454862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5586734.2105263155,
            "unit": "ns",
            "range": "± 184570.2243508618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236977.90697674418,
            "unit": "ns",
            "range": "± 6841.377109401688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230932,
            "unit": "ns",
            "range": "± 9336.551826022282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200563.15789473685,
            "unit": "ns",
            "range": "± 6805.618547364618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3695080,
            "unit": "ns",
            "range": "± 38231.21761074319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3261584.6153846155,
            "unit": "ns",
            "range": "± 20277.649689327332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15639.583333333334,
            "unit": "ns",
            "range": "± 1492.823475774869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71259.74025974025,
            "unit": "ns",
            "range": "± 3528.12980651893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62041.93548387097,
            "unit": "ns",
            "range": "± 1862.0372702228399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71053.53535353535,
            "unit": "ns",
            "range": "± 11434.0907487779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3827.5510204081634,
            "unit": "ns",
            "range": "± 544.0456720224606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14702.127659574468,
            "unit": "ns",
            "range": "± 1099.166715015864"
          }
        ]
      }
    ]
  }
}