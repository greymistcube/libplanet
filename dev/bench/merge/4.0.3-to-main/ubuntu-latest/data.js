window.BENCHMARK_DATA = {
  "lastUpdate": 1707240944955,
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
          "id": "94b7570a20c8644514310375f106cb11e0f810b6",
          "message": "Merge 4.0.3 to main",
          "timestamp": "2024-02-06T22:58:51+09:00",
          "tree_id": "36cb7e1ba8c8877a0e4aa31a7d106fe92dffd071",
          "url": "https://github.com/greymistcube/libplanet/commit/94b7570a20c8644514310375f106cb11e0f810b6"
        },
        "date": 1707228609024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993225.4086021505,
            "unit": "ns",
            "range": "± 77750.67994687117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922093.574468085,
            "unit": "ns",
            "range": "± 74214.0647761433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648282,
            "unit": "ns",
            "range": "± 133683.0671052633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13045274.903225806,
            "unit": "ns",
            "range": "± 1141487.3523632786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41803.936170212764,
            "unit": "ns",
            "range": "± 5878.044104164718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215554.73684210525,
            "unit": "ns",
            "range": "± 10972.29920283307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238026.9714285714,
            "unit": "ns",
            "range": "± 11547.332876973609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166445.24074074073,
            "unit": "ns",
            "range": "± 4630.846272489533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3218803.8,
            "unit": "ns",
            "range": "± 30266.97923291511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2912527.5,
            "unit": "ns",
            "range": "± 60711.33939049801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16684.010416666668,
            "unit": "ns",
            "range": "± 3023.5209084940816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69818.36516853933,
            "unit": "ns",
            "range": "± 6475.907474476262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86755.19587628866,
            "unit": "ns",
            "range": "± 16226.224317340415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91482.1649484536,
            "unit": "ns",
            "range": "± 16765.542031127672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4083.1979166666665,
            "unit": "ns",
            "range": "± 1172.0295453415451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19113.989898989897,
            "unit": "ns",
            "range": "± 4973.9401916900015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5597467.166666667,
            "unit": "ns",
            "range": "± 47532.76579922326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14386241.692307692,
            "unit": "ns",
            "range": "± 183872.7784290833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38051254.307692304,
            "unit": "ns",
            "range": "± 549955.3329371979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74535838.76923077,
            "unit": "ns",
            "range": "± 414471.6731863095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150397809.83333334,
            "unit": "ns",
            "range": "± 848109.7690277115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2365234.346153846,
            "unit": "ns",
            "range": "± 62140.65443085859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2584038.137254902,
            "unit": "ns",
            "range": "± 105242.83408442014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3210846.5384615385,
            "unit": "ns",
            "range": "± 44331.96266731146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3364640.26,
            "unit": "ns",
            "range": "± 133286.01819695256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13967949.489130436,
            "unit": "ns",
            "range": "± 977621.653402366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3651980.5060096155,
            "unit": "ns",
            "range": "± 27908.68678340243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212539.2721819195,
            "unit": "ns",
            "range": "± 3086.309111029544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764470.1918945312,
            "unit": "ns",
            "range": "± 2289.8525071876215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910057.4331752232,
            "unit": "ns",
            "range": "± 8802.112342837738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606586.8133138021,
            "unit": "ns",
            "range": "± 3685.6390343961816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570845.5880208333,
            "unit": "ns",
            "range": "± 2187.6234965028166"
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
          "id": "a6715fa1d331991a1ea4c0f27681e3d1c2a56d1d",
          "message": "Merge tag '4.0.3' into merge/4.0.3-to-main\n\nLibplanet 4.0.3",
          "timestamp": "2024-02-07T02:23:56+09:00",
          "tree_id": "982be82ca572f1d131b6b0bab59e583faeb5460d",
          "url": "https://github.com/greymistcube/libplanet/commit/a6715fa1d331991a1ea4c0f27681e3d1c2a56d1d"
        },
        "date": 1707240937813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208907.95454545456,
            "unit": "ns",
            "range": "± 8375.281697458571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244001.875,
            "unit": "ns",
            "range": "± 4061.674956221879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166716.02631578947,
            "unit": "ns",
            "range": "± 5754.653104283534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3248568.066666667,
            "unit": "ns",
            "range": "± 42576.16006383094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828596.9285714286,
            "unit": "ns",
            "range": "± 24832.063545295274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15102.558139534884,
            "unit": "ns",
            "range": "± 1734.0088496595608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86870.49494949495,
            "unit": "ns",
            "range": "± 14486.723618240972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69769.63265306123,
            "unit": "ns",
            "range": "± 12753.65060443298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94490.02325581395,
            "unit": "ns",
            "range": "± 7332.576415400532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5865.222222222223,
            "unit": "ns",
            "range": "± 1943.9625455972157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17137.885416666668,
            "unit": "ns",
            "range": "± 3205.4162333209892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40605.03191489362,
            "unit": "ns",
            "range": "± 4861.0641506145375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2485955.0416666665,
            "unit": "ns",
            "range": "± 63141.81033609923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486219,
            "unit": "ns",
            "range": "± 103521.4670695759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156940.066666667,
            "unit": "ns",
            "range": "± 91030.74513541673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3235046.4918032787,
            "unit": "ns",
            "range": "± 142373.22334725526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13606456.438202247,
            "unit": "ns",
            "range": "± 931937.8584163649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038583.5151515151,
            "unit": "ns",
            "range": "± 86240.02231673582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2029965.2558139535,
            "unit": "ns",
            "range": "± 75082.90987241498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1742330.6559139786,
            "unit": "ns",
            "range": "± 231878.1371671755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12799692.946236558,
            "unit": "ns",
            "range": "± 1088695.1893075188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6117877.1,
            "unit": "ns",
            "range": "± 67231.20828029622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14672480.7,
            "unit": "ns",
            "range": "± 75541.95334400992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37524303.96666667,
            "unit": "ns",
            "range": "± 547083.5954821669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75527021.96153846,
            "unit": "ns",
            "range": "± 370591.85838120605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152224702.14285713,
            "unit": "ns",
            "range": "± 1553801.870822344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744296.697265625,
            "unit": "ns",
            "range": "± 19122.25837254826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222896.4098307292,
            "unit": "ns",
            "range": "± 1806.6241627543573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768010.3626302084,
            "unit": "ns",
            "range": "± 1194.2640332465194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946409.7757161458,
            "unit": "ns",
            "range": "± 6122.612730943558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620146.8227539062,
            "unit": "ns",
            "range": "± 5837.425053041254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573137.5884440105,
            "unit": "ns",
            "range": "± 1807.250319844636"
          }
        ]
      }
    ]
  }
}