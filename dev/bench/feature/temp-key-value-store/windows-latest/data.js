window.BENCHMARK_DATA = {
  "lastUpdate": 1691575847958,
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
      }
    ]
  }
}