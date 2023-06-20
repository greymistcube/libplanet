window.BENCHMARK_DATA = {
  "lastUpdate": 1687246819270,
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
          "id": "6939f2f1409576ece7d5d7afedd55a9e41b222e2",
          "message": "Changelog",
          "timestamp": "2023-06-15T14:24:20+09:00",
          "tree_id": "c7ee0cc40c745c22e6df2ec74f560c23631c0f7c",
          "url": "https://github.com/greymistcube/libplanet/commit/6939f2f1409576ece7d5d7afedd55a9e41b222e2"
        },
        "date": 1686807687742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9067438.35,
            "unit": "ns",
            "range": "± 204334.4943928112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22693310.115384616,
            "unit": "ns",
            "range": "± 208077.64521588988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59422099.26923077,
            "unit": "ns",
            "range": "± 1566291.9186444029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114457071.5,
            "unit": "ns",
            "range": "± 1248718.7323633127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233938088.7857143,
            "unit": "ns",
            "range": "± 3280800.1798118185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65342.20786516854,
            "unit": "ns",
            "range": "± 3857.1667422246346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377922.87234042556,
            "unit": "ns",
            "range": "± 31397.60337584652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353139.47826086957,
            "unit": "ns",
            "range": "± 13448.278972483397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318654.0833333333,
            "unit": "ns",
            "range": "± 7572.277567414643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4828296.105263158,
            "unit": "ns",
            "range": "± 106581.91443459748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4323478.1,
            "unit": "ns",
            "range": "± 87757.09381067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19914.62365591398,
            "unit": "ns",
            "range": "± 1430.7721381035644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97825.50537634408,
            "unit": "ns",
            "range": "± 5540.668488203064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91308.31460674158,
            "unit": "ns",
            "range": "± 6925.121342218005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113648.71578947369,
            "unit": "ns",
            "range": "± 15809.386617667229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5831.628865979382,
            "unit": "ns",
            "range": "± 619.4958689596529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19197.934782608696,
            "unit": "ns",
            "range": "± 1526.2429688930774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788597.530927835,
            "unit": "ns",
            "range": "± 165114.94374131298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3521279.164556962,
            "unit": "ns",
            "range": "± 176205.98188516076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2969371.393939394,
            "unit": "ns",
            "range": "± 299346.87174661784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8016816.703296703,
            "unit": "ns",
            "range": "± 522933.5718026078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4015726.0833333335,
            "unit": "ns",
            "range": "± 133687.76965246297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4051642.2391304346,
            "unit": "ns",
            "range": "± 271119.9473927138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5216731.451219512,
            "unit": "ns",
            "range": "± 182981.85682055357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5114430.277777778,
            "unit": "ns",
            "range": "± 190788.70484540187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9312056.739726027,
            "unit": "ns",
            "range": "± 461029.0074019213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7374401.661830357,
            "unit": "ns",
            "range": "± 41360.30988718297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275571.30546875,
            "unit": "ns",
            "range": "± 28723.37119862779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1490718.1681082589,
            "unit": "ns",
            "range": "± 16094.707143110869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3192824.886458333,
            "unit": "ns",
            "range": "± 49105.80470885415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048681.5623697916,
            "unit": "ns",
            "range": "± 10897.59051283885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 885271.5861979167,
            "unit": "ns",
            "range": "± 11266.7949934779"
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
          "id": "4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19",
          "message": "Added back in caching",
          "timestamp": "2023-06-15T14:05:24+09:00",
          "tree_id": "110b574e04752f39a883ac7f751da8fc894a7002",
          "url": "https://github.com/greymistcube/libplanet/commit/4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19"
        },
        "date": 1686808038074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9875863.155913979,
            "unit": "ns",
            "range": "± 2039997.1960669647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21150275.160714287,
            "unit": "ns",
            "range": "± 905281.6522720183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60320042.84615385,
            "unit": "ns",
            "range": "± 1353521.649640934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106791611.48529412,
            "unit": "ns",
            "range": "± 5095521.899496515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216337776,
            "unit": "ns",
            "range": "± 5123889.675471897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75600.38505747127,
            "unit": "ns",
            "range": "± 12767.540304557297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357441.5215053763,
            "unit": "ns",
            "range": "± 49536.7107601455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321937.91,
            "unit": "ns",
            "range": "± 33655.87513185191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325649.6703296703,
            "unit": "ns",
            "range": "± 31656.85555735122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4351706.0869565215,
            "unit": "ns",
            "range": "± 270577.5992501825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4723622.965909091,
            "unit": "ns",
            "range": "± 916241.9495419952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27211.875,
            "unit": "ns",
            "range": "± 3736.3325580300534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126491.97674418605,
            "unit": "ns",
            "range": "± 16920.394006660405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126474.8488372093,
            "unit": "ns",
            "range": "± 9106.839787334304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125067.11111111111,
            "unit": "ns",
            "range": "± 16067.870269015048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7982.117021276596,
            "unit": "ns",
            "range": "± 1276.9766891581835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26137.56989247312,
            "unit": "ns",
            "range": "± 5421.351865736734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1733215.8846153845,
            "unit": "ns",
            "range": "± 217251.06499556216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3332102.1170212766,
            "unit": "ns",
            "range": "± 401003.9542402068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2981509.11627907,
            "unit": "ns",
            "range": "± 543545.4050453736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9046291.465517242,
            "unit": "ns",
            "range": "± 2120617.65056437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3568533.8541666665,
            "unit": "ns",
            "range": "± 357179.01745247486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3619901.7285714285,
            "unit": "ns",
            "range": "± 175868.834347529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4804400.967391305,
            "unit": "ns",
            "range": "± 270762.59706092114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4748813.842105263,
            "unit": "ns",
            "range": "± 411514.9693491246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8735539.5,
            "unit": "ns",
            "range": "± 831461.4597033346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9354569.894856771,
            "unit": "ns",
            "range": "± 2887265.548102959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2692669.8128360217,
            "unit": "ns",
            "range": "± 595578.617061946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1668309.8582286006,
            "unit": "ns",
            "range": "± 267190.93989583745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4258061.296918402,
            "unit": "ns",
            "range": "± 619365.4765802101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987956.404296875,
            "unit": "ns",
            "range": "± 63958.824478860166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850317.81744706,
            "unit": "ns",
            "range": "± 43229.645045157784"
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
          "id": "cb0a0e165aa4f47e0a781e57e1d862caf74607e5",
          "message": "Changelog",
          "timestamp": "2023-06-20T16:03:37+09:00",
          "tree_id": "02536a43bb60d6ac2558deeda114df9106d0245f",
          "url": "https://github.com/greymistcube/libplanet/commit/cb0a0e165aa4f47e0a781e57e1d862caf74607e5"
        },
        "date": 1687246045485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9043403.4,
            "unit": "ns",
            "range": "± 207835.20101308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24717741.606060605,
            "unit": "ns",
            "range": "± 772323.9126098154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65496924.625,
            "unit": "ns",
            "range": "± 7315061.1807554355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129594385.81521739,
            "unit": "ns",
            "range": "± 15332468.981950488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248237228.17142856,
            "unit": "ns",
            "range": "± 7755106.155732224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81503.27777777778,
            "unit": "ns",
            "range": "± 12861.822910648936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394333.2105263158,
            "unit": "ns",
            "range": "± 34966.78867485264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 377271.5652173913,
            "unit": "ns",
            "range": "± 29002.970506182864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348884.6354166667,
            "unit": "ns",
            "range": "± 32136.090146395516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5168346.8,
            "unit": "ns",
            "range": "± 230122.77713155423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4491439.864864865,
            "unit": "ns",
            "range": "± 152342.61017251763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20212.483870967742,
            "unit": "ns",
            "range": "± 1798.9812008884558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100241.93333333333,
            "unit": "ns",
            "range": "± 6751.2101034313955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109429.68041237113,
            "unit": "ns",
            "range": "± 18314.270837898057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117511.08064516129,
            "unit": "ns",
            "range": "± 21433.553396547773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6289.09375,
            "unit": "ns",
            "range": "± 1049.9354173434217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18656.032608695652,
            "unit": "ns",
            "range": "± 1564.4054409073028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2142228.194117647,
            "unit": "ns",
            "range": "± 411637.891866401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3755651.023809524,
            "unit": "ns",
            "range": "± 272751.4685186346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3275021.1736842105,
            "unit": "ns",
            "range": "± 383751.15313590533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15466047.929292928,
            "unit": "ns",
            "range": "± 5233501.057966266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3945384.56097561,
            "unit": "ns",
            "range": "± 206793.83469229238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4207303.056701031,
            "unit": "ns",
            "range": "± 300014.0156787807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5434567.179775281,
            "unit": "ns",
            "range": "± 299673.78058237844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5453470.044444445,
            "unit": "ns",
            "range": "± 666712.953285516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10561863.764044944,
            "unit": "ns",
            "range": "± 1677613.46732147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7271210.965353261,
            "unit": "ns",
            "range": "± 158894.32936044698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2295725.95625,
            "unit": "ns",
            "range": "± 43994.30561015045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485234.319561298,
            "unit": "ns",
            "range": "± 10537.08816266004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2987272.442608173,
            "unit": "ns",
            "range": "± 33613.589857113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071132.0256911058,
            "unit": "ns",
            "range": "± 16551.84634861731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889804.1276292067,
            "unit": "ns",
            "range": "± 12652.04539150875"
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
          "id": "be9862799749e4da06ba06a3470afa1c0d2808a7",
          "message": "Changelog",
          "timestamp": "2023-06-20T16:15:19+09:00",
          "tree_id": "02536a43bb60d6ac2558deeda114df9106d0245f",
          "url": "https://github.com/greymistcube/libplanet/commit/be9862799749e4da06ba06a3470afa1c0d2808a7"
        },
        "date": 1687246796829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9811053.681318682,
            "unit": "ns",
            "range": "± 1329890.8184756113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23104940.578651685,
            "unit": "ns",
            "range": "± 2493608.499548278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63716959.625,
            "unit": "ns",
            "range": "± 9568445.937724795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116156732.62941177,
            "unit": "ns",
            "range": "± 6251822.258465587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232001931.10958904,
            "unit": "ns",
            "range": "± 11460647.597966686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77085.82022471911,
            "unit": "ns",
            "range": "± 7638.036301006655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 401425.25,
            "unit": "ns",
            "range": "± 82357.56662645868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 394089.1701030928,
            "unit": "ns",
            "range": "± 77143.9096592533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 371696,
            "unit": "ns",
            "range": "± 62950.28724868781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4852556.958333333,
            "unit": "ns",
            "range": "± 459866.47209199227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4074693.3041237113,
            "unit": "ns",
            "range": "± 318326.818544363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25249.56989247312,
            "unit": "ns",
            "range": "± 3616.431454510184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106293.78421052631,
            "unit": "ns",
            "range": "± 24606.784466053068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116222.86746987952,
            "unit": "ns",
            "range": "± 12887.100989797742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120086.91011235955,
            "unit": "ns",
            "range": "± 17382.406285222874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8234.744444444445,
            "unit": "ns",
            "range": "± 1096.9048211976012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20844.702127659573,
            "unit": "ns",
            "range": "± 4899.295840516129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679132.4893617022,
            "unit": "ns",
            "range": "± 251307.0903882081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3267539.9545454546,
            "unit": "ns",
            "range": "± 345741.1101226921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2827932.1144578313,
            "unit": "ns",
            "range": "± 408257.8672498975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12984244.12,
            "unit": "ns",
            "range": "± 5231402.9551441455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3646708.5,
            "unit": "ns",
            "range": "± 392074.63493680826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3911311.847826087,
            "unit": "ns",
            "range": "± 486290.71914006013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4842166.568181818,
            "unit": "ns",
            "range": "± 439062.5229654655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4889020.758241759,
            "unit": "ns",
            "range": "± 545239.3167522831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8365052.4375,
            "unit": "ns",
            "range": "± 693525.2212713461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7183260.812402343,
            "unit": "ns",
            "range": "± 375929.3516317657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2152975.7094884072,
            "unit": "ns",
            "range": "± 97135.94497009969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1420584.6208224827,
            "unit": "ns",
            "range": "± 46637.23585434137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3058857.723214286,
            "unit": "ns",
            "range": "± 239156.51446756467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949488.5945209704,
            "unit": "ns",
            "range": "± 31271.753668885587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 841800.1556490385,
            "unit": "ns",
            "range": "± 28650.961740187475"
          }
        ]
      }
    ]
  }
}