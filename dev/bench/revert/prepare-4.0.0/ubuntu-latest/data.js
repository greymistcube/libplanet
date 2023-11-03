window.BENCHMARK_DATA = {
  "lastUpdate": 1698979271007,
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
          "id": "4ade6dbac3bf64011bcd13a7cd86928c743ee200",
          "message": "Revert \"Prepare 4.0.0\"\n\nThis reverts commit b99343a7dadaeb286c126889b58fd81343c0e4f9.",
          "timestamp": "2023-11-03T11:27:55+09:00",
          "tree_id": "39a47ae5000d9be0970651f9bcb0ced593447231",
          "url": "https://github.com/greymistcube/libplanet/commit/4ade6dbac3bf64011bcd13a7cd86928c743ee200"
        },
        "date": 1698979262647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7654986.466666667,
            "unit": "ns",
            "range": "± 105859.88240045468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19798801.5,
            "unit": "ns",
            "range": "± 72876.20056775949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50677551.14285714,
            "unit": "ns",
            "range": "± 260996.63255265227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100708315.3076923,
            "unit": "ns",
            "range": "± 296574.2372182117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199108976.14285713,
            "unit": "ns",
            "range": "± 940410.5492078861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1243504.4193548388,
            "unit": "ns",
            "range": "± 78678.61538457003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2407211.230769231,
            "unit": "ns",
            "range": "± 65352.26816526429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1888444.9411764706,
            "unit": "ns",
            "range": "± 86271.75049458237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7953182.764705882,
            "unit": "ns",
            "range": "± 212368.916245472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3168264.037037037,
            "unit": "ns",
            "range": "± 124335.30298865894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3336313.3488372094,
            "unit": "ns",
            "range": "± 122344.01928245182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4158660.7333333334,
            "unit": "ns",
            "range": "± 64130.19024772594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4259793.2,
            "unit": "ns",
            "range": "± 78421.50047586257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9910589.5,
            "unit": "ns",
            "range": "± 295031.6508385536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47997.07692307692,
            "unit": "ns",
            "range": "± 2478.3283052919337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5130574.952604166,
            "unit": "ns",
            "range": "± 14420.683170050928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1609990.4521484375,
            "unit": "ns",
            "range": "± 740.5578360048906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1124233.913783482,
            "unit": "ns",
            "range": "± 620.8105685924443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540842.596261161,
            "unit": "ns",
            "range": "± 2336.141138473716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816008.0368840144,
            "unit": "ns",
            "range": "± 360.47569443645176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737184.7016276042,
            "unit": "ns",
            "range": "± 2621.1584977109283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269810.14634146343,
            "unit": "ns",
            "range": "± 9485.678353604912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255692.2857142857,
            "unit": "ns",
            "range": "± 8237.584345980493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224123.1875,
            "unit": "ns",
            "range": "± 4392.937152881505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4138081.714285714,
            "unit": "ns",
            "range": "± 29984.49698768341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3819736.533333333,
            "unit": "ns",
            "range": "± 49147.866980116625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17273.610526315788,
            "unit": "ns",
            "range": "± 1397.1743848174951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82966.3829787234,
            "unit": "ns",
            "range": "± 4728.24529298924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68488.38888888889,
            "unit": "ns",
            "range": "± 1074.7963494590301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76904.67368421053,
            "unit": "ns",
            "range": "± 7541.507257275177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4541.89247311828,
            "unit": "ns",
            "range": "± 336.9232741443095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16942.206521739132,
            "unit": "ns",
            "range": "± 1026.7184954835423"
          }
        ]
      }
    ]
  }
}