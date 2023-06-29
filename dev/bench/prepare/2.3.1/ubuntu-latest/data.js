window.BENCHMARK_DATA = {
  "lastUpdate": 1688028957895,
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
          "id": "0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T15:22:24+09:00",
          "tree_id": "6f08e98fa366bfb1d100cf7f23172cbaf3198b47",
          "url": "https://github.com/greymistcube/libplanet/commit/0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719"
        },
        "date": 1688020549284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448941.5714285714,
            "unit": "ns",
            "range": "± 75831.23377578096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3743399.5,
            "unit": "ns",
            "range": "± 61911.65222221593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4401845.119047619,
            "unit": "ns",
            "range": "± 151112.1389687711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4616452.806451613,
            "unit": "ns",
            "range": "± 124061.28303206158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6931097.384615385,
            "unit": "ns",
            "range": "± 188193.79633815284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7889439.785714285,
            "unit": "ns",
            "range": "± 64394.268701227855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21889983.266666666,
            "unit": "ns",
            "range": "± 393724.1447348759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54592837.85714286,
            "unit": "ns",
            "range": "± 869086.2813412235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108969420.73333333,
            "unit": "ns",
            "range": "± 1257916.288160275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216649180.33333334,
            "unit": "ns",
            "range": "± 2069976.0794700591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281199.5714285714,
            "unit": "ns",
            "range": "± 6902.190373908267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269859.8367346939,
            "unit": "ns",
            "range": "± 9157.30834804215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247157.18367346938,
            "unit": "ns",
            "range": "± 9724.44775568573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4417853.285714285,
            "unit": "ns",
            "range": "± 41276.95091681326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4091236.2666666666,
            "unit": "ns",
            "range": "± 50733.38365340725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20200.552083333332,
            "unit": "ns",
            "range": "± 2697.0701915803756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85775.94318181818,
            "unit": "ns",
            "range": "± 4503.2705391147365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73680.66666666667,
            "unit": "ns",
            "range": "± 2317.5835026308473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88497.32926829268,
            "unit": "ns",
            "range": "± 6326.884268308128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5701.2474226804125,
            "unit": "ns",
            "range": "± 826.1095446797576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19236.071428571428,
            "unit": "ns",
            "range": "± 1707.499294350128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47254.33734939759,
            "unit": "ns",
            "range": "± 2449.790694280459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6043393.444754465,
            "unit": "ns",
            "range": "± 26953.311578154644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856939.9071614584,
            "unit": "ns",
            "range": "± 4900.412256219476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375975.04375,
            "unit": "ns",
            "range": "± 4491.756331033249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629771.826041667,
            "unit": "ns",
            "range": "± 3417.904591800547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822028.8139272836,
            "unit": "ns",
            "range": "± 619.1792993995099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755118.9080729167,
            "unit": "ns",
            "range": "± 761.002618105304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470594.84,
            "unit": "ns",
            "range": "± 108473.72559248406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678974.269230769,
            "unit": "ns",
            "range": "± 71444.7381427395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289063.3670886075,
            "unit": "ns",
            "range": "± 118785.3956580756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5701402.876923077,
            "unit": "ns",
            "range": "± 265493.63276725373"
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
          "id": "dc1329ba84fdfe79a5770d28695f5f0f33b54344",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T17:42:26+09:00",
          "tree_id": "bfca3d30a84afe1d5b5d13b8aebd4c855e88bec2",
          "url": "https://github.com/greymistcube/libplanet/commit/dc1329ba84fdfe79a5770d28695f5f0f33b54344"
        },
        "date": 1688028950347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7981930.133333334,
            "unit": "ns",
            "range": "± 56972.617893995695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20022349,
            "unit": "ns",
            "range": "± 43810.87000962204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51234793.571428575,
            "unit": "ns",
            "range": "± 234246.16487090086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102735814.64285715,
            "unit": "ns",
            "range": "± 229978.70918299814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204964489.3846154,
            "unit": "ns",
            "range": "± 394397.9536651482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48647.0989010989,
            "unit": "ns",
            "range": "± 3154.0509227726843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293439.13333333336,
            "unit": "ns",
            "range": "± 10969.790257794357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279592.16279069765,
            "unit": "ns",
            "range": "± 10230.846443430704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243676.07692307694,
            "unit": "ns",
            "range": "± 3756.7447225299206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262880.733333333,
            "unit": "ns",
            "range": "± 19816.82441212397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933818.8571428573,
            "unit": "ns",
            "range": "± 29058.621315321427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19807.231707317074,
            "unit": "ns",
            "range": "± 1019.5443099590565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97120.18181818182,
            "unit": "ns",
            "range": "± 5347.588758476157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77128.14285714286,
            "unit": "ns",
            "range": "± 1305.7187149755352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95264.68041237113,
            "unit": "ns",
            "range": "± 11511.5350758728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5444.2,
            "unit": "ns",
            "range": "± 546.1159295521774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20035.010638297874,
            "unit": "ns",
            "range": "± 1321.0202516471704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444818.63,
            "unit": "ns",
            "range": "± 113178.91594460988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678554.925925926,
            "unit": "ns",
            "range": "± 74937.79704986402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250101.6210526316,
            "unit": "ns",
            "range": "± 132363.42441648722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5379851.607142857,
            "unit": "ns",
            "range": "± 152457.01536628447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6272442.024553572,
            "unit": "ns",
            "range": "± 7015.524766694364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933071.3406808036,
            "unit": "ns",
            "range": "± 4478.190791626085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361652.1734095982,
            "unit": "ns",
            "range": "± 523.2087423428394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601304.0872395835,
            "unit": "ns",
            "range": "± 3344.334393607352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823576.2910807292,
            "unit": "ns",
            "range": "± 427.82025827973507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736247.8354116586,
            "unit": "ns",
            "range": "± 461.52735901315657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374829.1739130435,
            "unit": "ns",
            "range": "± 81767.09760247098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559422.761904762,
            "unit": "ns",
            "range": "± 74181.10597443582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345485.6,
            "unit": "ns",
            "range": "± 30722.745184727784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4516311.647058823,
            "unit": "ns",
            "range": "± 91537.22614730385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6968762.96,
            "unit": "ns",
            "range": "± 180431.65402479502"
          }
        ]
      }
    ]
  }
}