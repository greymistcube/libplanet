window.BENCHMARK_DATA = {
  "lastUpdate": 1707228615428,
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
      }
    ]
  }
}