window.BENCHMARK_DATA = {
  "lastUpdate": 1701750135056,
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
          "id": "c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3",
          "message": "Remove internal tracking of amounts for TotalUpdatedFungibleAssets",
          "timestamp": "2023-12-05T13:02:48+09:00",
          "tree_id": "066ad56efd90c1392e78ba1aef0fda604ff04734",
          "url": "https://github.com/greymistcube/libplanet/commit/c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3"
        },
        "date": 1701750000052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7991486.346153846,
            "unit": "ns",
            "range": "± 126025.9083554159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19512417.277777776,
            "unit": "ns",
            "range": "± 371008.0197176345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48097938.28571428,
            "unit": "ns",
            "range": "± 555095.842259477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97120515.58333333,
            "unit": "ns",
            "range": "± 321357.10148438753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212138120.58620688,
            "unit": "ns",
            "range": "± 6048928.870284878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61443.989130434784,
            "unit": "ns",
            "range": "± 9243.055288475485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288250.42045454547,
            "unit": "ns",
            "range": "± 15835.683043836923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272311.38666666666,
            "unit": "ns",
            "range": "± 13625.369898170913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260953.15384615384,
            "unit": "ns",
            "range": "± 4046.076470816179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4000155.8620689656,
            "unit": "ns",
            "range": "± 102016.87980172838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3743253.8571428573,
            "unit": "ns",
            "range": "± 82991.39205802353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16667.326315789473,
            "unit": "ns",
            "range": "± 1857.0720631425067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84158.125,
            "unit": "ns",
            "range": "± 12854.755479874691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73653.14285714286,
            "unit": "ns",
            "range": "± 5832.961783541356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88223.17368421053,
            "unit": "ns",
            "range": "± 15401.929583757468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5741.79347826087,
            "unit": "ns",
            "range": "± 481.40555514911557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17508.603448275862,
            "unit": "ns",
            "range": "± 1490.7218872036365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435374.6597938144,
            "unit": "ns",
            "range": "± 139319.9744413233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738561.7213114756,
            "unit": "ns",
            "range": "± 123140.94463190422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2384412.414141414,
            "unit": "ns",
            "range": "± 360158.38675462507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10523101.494505495,
            "unit": "ns",
            "range": "± 1434437.4631127033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3132446.44,
            "unit": "ns",
            "range": "± 126176.10708315419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284282.1285714284,
            "unit": "ns",
            "range": "± 92797.33971056489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179804.227272727,
            "unit": "ns",
            "range": "± 101036.99937855477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4080871.411764706,
            "unit": "ns",
            "range": "± 194593.6647787817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18341953.052083332,
            "unit": "ns",
            "range": "± 2741302.7238888154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5754786.7828125,
            "unit": "ns",
            "range": "± 58343.19074344864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1801497.2880108173,
            "unit": "ns",
            "range": "± 11154.259403070859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130478.3455729166,
            "unit": "ns",
            "range": "± 18825.220097587197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2763868.9059709823,
            "unit": "ns",
            "range": "± 21532.790612754303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820615.3500976562,
            "unit": "ns",
            "range": "± 13998.260668504392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834131.5307942708,
            "unit": "ns",
            "range": "± 10865.448607811186"
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
          "id": "e5bf020cc3829922946245ebdcf24dc6738258b1",
          "message": "Changelog",
          "timestamp": "2023-12-05T13:07:28+09:00",
          "tree_id": "c1644d4dc792be582a8456158f5713a5b9e1bed9",
          "url": "https://github.com/greymistcube/libplanet/commit/e5bf020cc3829922946245ebdcf24dc6738258b1"
        },
        "date": 1701750121465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7437891.285714285,
            "unit": "ns",
            "range": "± 86196.92974938132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19203987.57142857,
            "unit": "ns",
            "range": "± 729196.6235588199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46067394.14285714,
            "unit": "ns",
            "range": "± 709678.2254988586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95155347.63636364,
            "unit": "ns",
            "range": "± 2883582.1059470656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187067915,
            "unit": "ns",
            "range": "± 2760835.3530991306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36486.7816091954,
            "unit": "ns",
            "range": "± 5339.8027278806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220719.3125,
            "unit": "ns",
            "range": "± 18283.850196459687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318206.36,
            "unit": "ns",
            "range": "± 137861.28838276523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196464.54,
            "unit": "ns",
            "range": "± 7891.973218015731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3762014.6428571427,
            "unit": "ns",
            "range": "± 53114.886283424334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445930.5,
            "unit": "ns",
            "range": "± 53227.25557131277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13784.252873563219,
            "unit": "ns",
            "range": "± 1054.2500058554886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62541.20652173913,
            "unit": "ns",
            "range": "± 4806.938329096518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51575.666666666664,
            "unit": "ns",
            "range": "± 3320.1386759153957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69434.13186813187,
            "unit": "ns",
            "range": "± 32137.632262300565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3157.7977528089887,
            "unit": "ns",
            "range": "± 456.57425413655034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11929.044943820225,
            "unit": "ns",
            "range": "± 863.841301056881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1161619.4731182796,
            "unit": "ns",
            "range": "± 90136.08262180114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2412749.4545454546,
            "unit": "ns",
            "range": "± 165709.63708850963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672340.9894736842,
            "unit": "ns",
            "range": "± 142511.0789190444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7443433.639534884,
            "unit": "ns",
            "range": "± 707673.6895576348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2871685.5185185187,
            "unit": "ns",
            "range": "± 118953.76215112032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2985546,
            "unit": "ns",
            "range": "± 128488.36199633023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3524876.205882353,
            "unit": "ns",
            "range": "± 96320.10055956552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3399350.592592593,
            "unit": "ns",
            "range": "± 142150.18185661465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13873231.6,
            "unit": "ns",
            "range": "± 2198500.798197807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4245006.444490132,
            "unit": "ns",
            "range": "± 93614.02152227245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1317438.4278645834,
            "unit": "ns",
            "range": "± 19277.429783342115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 861539.5049641927,
            "unit": "ns",
            "range": "± 9618.295581599836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962334.0553850445,
            "unit": "ns",
            "range": "± 22307.159100913817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637112.7605329241,
            "unit": "ns",
            "range": "± 11033.796406041325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553012.5052734375,
            "unit": "ns",
            "range": "± 7681.259185348351"
          }
        ]
      }
    ]
  }
}