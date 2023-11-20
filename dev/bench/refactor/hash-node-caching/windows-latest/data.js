window.BENCHMARK_DATA = {
  "lastUpdate": 1700448138082,
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
          "id": "32615931208586c81ef11bf6ee44bb68e9bf85bc",
          "message": "Add missing cache",
          "timestamp": "2023-11-20T11:20:28+09:00",
          "tree_id": "f9b0ba0e6dd4038f2fad50eb41a3e0ae7e232043",
          "url": "https://github.com/greymistcube/libplanet/commit/32615931208586c81ef11bf6ee44bb68e9bf85bc"
        },
        "date": 1700447532588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957808.0808080808,
            "unit": "ns",
            "range": "± 105744.50502128934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1761270.2127659575,
            "unit": "ns",
            "range": "± 100484.13861865335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1301842.105263158,
            "unit": "ns",
            "range": "± 107839.42710379125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5144845.454545454,
            "unit": "ns",
            "range": "± 276889.2400283355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34321.818181818184,
            "unit": "ns",
            "range": "± 1467.3850398647442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5069520,
            "unit": "ns",
            "range": "± 60747.26566450778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13086778.57142857,
            "unit": "ns",
            "range": "± 177172.12047815332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33789776.92307692,
            "unit": "ns",
            "range": "± 484388.7817890469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65399713.333333336,
            "unit": "ns",
            "range": "± 794937.1752954234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128519008.33333333,
            "unit": "ns",
            "range": "± 768655.37431914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3173883.984375,
            "unit": "ns",
            "range": "± 13203.995332531416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1011817.4386160715,
            "unit": "ns",
            "range": "± 3940.2718831061975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 679093.0594308035,
            "unit": "ns",
            "range": "± 1832.5865397041046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916509.2643229167,
            "unit": "ns",
            "range": "± 4343.3393209164005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622966.6434151785,
            "unit": "ns",
            "range": "± 1238.373735447773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562576.8833705357,
            "unit": "ns",
            "range": "± 2228.445255963513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2142548.529411765,
            "unit": "ns",
            "range": "± 101749.72586804842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2224110.1694915253,
            "unit": "ns",
            "range": "± 98184.92175642657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781512.5,
            "unit": "ns",
            "range": "± 85052.94650791012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2656936.3636363638,
            "unit": "ns",
            "range": "± 238313.82561764953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5733852.5,
            "unit": "ns",
            "range": "± 202223.02170230335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173951.76470588235,
            "unit": "ns",
            "range": "± 9396.638352353993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165701.7857142857,
            "unit": "ns",
            "range": "± 7057.72281254381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141334.4827586207,
            "unit": "ns",
            "range": "± 3797.2053503736674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2758925,
            "unit": "ns",
            "range": "± 51772.79208232834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2573640,
            "unit": "ns",
            "range": "± 26997.534278945866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10443.75,
            "unit": "ns",
            "range": "± 1404.8646685151225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54010.86956521739,
            "unit": "ns",
            "range": "± 4397.713105038616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43976.5625,
            "unit": "ns",
            "range": "± 2006.714299980451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53424.242424242424,
            "unit": "ns",
            "range": "± 13502.978438705328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2385.4166666666665,
            "unit": "ns",
            "range": "± 396.0274224068905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9808.602150537634,
            "unit": "ns",
            "range": "± 1332.6710603943934"
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
          "id": "63c9e837502b29ace5804aab0c7e5dfdec84b6f8",
          "message": "Changelog",
          "timestamp": "2023-11-20T11:26:04+09:00",
          "tree_id": "7ec6511cf5a3e448ec1822df6fcc1b13059645f6",
          "url": "https://github.com/greymistcube/libplanet/commit/63c9e837502b29ace5804aab0c7e5dfdec84b6f8"
        },
        "date": 1700447962663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048650,
            "unit": "ns",
            "range": "± 114783.77184232323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1795685.7142857143,
            "unit": "ns",
            "range": "± 82021.31284226474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1357875.2688172043,
            "unit": "ns",
            "range": "± 113235.47575153713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5091879.365079365,
            "unit": "ns",
            "range": "± 232607.83219743558"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36494.505494505494,
            "unit": "ns",
            "range": "± 3751.069851459052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5324622.222222222,
            "unit": "ns",
            "range": "± 110901.60215018142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14230612.5,
            "unit": "ns",
            "range": "± 260026.0368373393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33694871.428571425,
            "unit": "ns",
            "range": "± 329638.5273845637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68422942.85714285,
            "unit": "ns",
            "range": "± 842376.593759754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134248414.2857143,
            "unit": "ns",
            "range": "± 1460447.001043565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3212442.6618303573,
            "unit": "ns",
            "range": "± 5219.3310115011345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1025773.0618990385,
            "unit": "ns",
            "range": "± 1839.5001750190393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 698455.5859375,
            "unit": "ns",
            "range": "± 1489.1592757763128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945370.5775669643,
            "unit": "ns",
            "range": "± 3518.698318301752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609405.2594866072,
            "unit": "ns",
            "range": "± 883.5045509438239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565404.6665736607,
            "unit": "ns",
            "range": "± 868.9868084323995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2306428.3333333335,
            "unit": "ns",
            "range": "± 103007.61382368645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2333707.6923076925,
            "unit": "ns",
            "range": "± 121707.74396138867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2909487.0967741935,
            "unit": "ns",
            "range": "± 84191.43955666547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2967000,
            "unit": "ns",
            "range": "± 55318.18266477428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6082700,
            "unit": "ns",
            "range": "± 237068.44727979338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194227.55102040817,
            "unit": "ns",
            "range": "± 12762.424959539843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180630.55555555556,
            "unit": "ns",
            "range": "± 8899.733164046904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145646.47887323942,
            "unit": "ns",
            "range": "± 7054.174670483439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2808628.5714285714,
            "unit": "ns",
            "range": "± 39205.60063153122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545066.6666666665,
            "unit": "ns",
            "range": "± 41279.667542035175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14224.21052631579,
            "unit": "ns",
            "range": "± 2076.2443482174826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63490.625,
            "unit": "ns",
            "range": "± 8565.353443102225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50570.65217391304,
            "unit": "ns",
            "range": "± 4837.980189836247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71081.81818181818,
            "unit": "ns",
            "range": "± 16077.144149612554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2759.7938144329896,
            "unit": "ns",
            "range": "± 578.0101991989474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13038.947368421053,
            "unit": "ns",
            "range": "± 1853.7078849517698"
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
          "id": "150eb9b3bca57ed032eb530d78411893d9d3779f",
          "message": "Typo fix",
          "timestamp": "2023-11-20T11:29:26+09:00",
          "tree_id": "3b29e4f3c11f13950463ba44b5d3b76ea6a30ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/150eb9b3bca57ed032eb530d78411893d9d3779f"
        },
        "date": 1700448116127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943356.7010309278,
            "unit": "ns",
            "range": "± 107651.78132449444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1674534.126984127,
            "unit": "ns",
            "range": "± 72003.55100192518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1336687.878787879,
            "unit": "ns",
            "range": "± 143387.09507919624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5011154.347826087,
            "unit": "ns",
            "range": "± 281843.55430232536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34368.5393258427,
            "unit": "ns",
            "range": "± 1963.6813471373086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5212060,
            "unit": "ns",
            "range": "± 30555.962710130036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13281493.333333334,
            "unit": "ns",
            "range": "± 95982.53164483827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32552450,
            "unit": "ns",
            "range": "± 335949.84229563427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64845680,
            "unit": "ns",
            "range": "± 888383.1430509827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130415060,
            "unit": "ns",
            "range": "± 658257.8085913061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3141352.8645833335,
            "unit": "ns",
            "range": "± 6309.212996744298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 985429.2818509615,
            "unit": "ns",
            "range": "± 2774.0911106079843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 687124.70703125,
            "unit": "ns",
            "range": "± 1210.281428359355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1888335.825892857,
            "unit": "ns",
            "range": "± 1684.3241253606677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613641.3736979166,
            "unit": "ns",
            "range": "± 3130.0720861506497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 542736.5835336539,
            "unit": "ns",
            "range": "± 1217.0926962907488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2135176.6666666665,
            "unit": "ns",
            "range": "± 63870.065749540096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273757.1428571427,
            "unit": "ns",
            "range": "± 22265.3132882557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2773515.625,
            "unit": "ns",
            "range": "± 84124.87304069412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2708138.2352941176,
            "unit": "ns",
            "range": "± 110389.89744910323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5845044.736842105,
            "unit": "ns",
            "range": "± 177088.9602330291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166338.09523809524,
            "unit": "ns",
            "range": "± 8479.28595484746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159668.57142857142,
            "unit": "ns",
            "range": "± 7763.040321359661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144026.31578947368,
            "unit": "ns",
            "range": "± 4396.170582390279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730486.6666666665,
            "unit": "ns",
            "range": "± 45925.72989802847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2583064,
            "unit": "ns",
            "range": "± 68739.26510129902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11504.21052631579,
            "unit": "ns",
            "range": "± 1734.5620447600197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54039.17525773196,
            "unit": "ns",
            "range": "± 8443.606514954461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43371.05263157895,
            "unit": "ns",
            "range": "± 1318.6618718572947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49063.73626373626,
            "unit": "ns",
            "range": "± 6062.7921049173465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2294.6236559139784,
            "unit": "ns",
            "range": "± 302.2975756054352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8961.797752808989,
            "unit": "ns",
            "range": "± 935.5972348740584"
          }
        ]
      }
    ]
  }
}