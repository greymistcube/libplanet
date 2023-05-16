window.BENCHMARK_DATA = {
  "lastUpdate": 1684228134200,
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
          "id": "e0ac72d952263a8df2cdfc10c1bedbc403f4e6e6",
          "message": "Prepare 1.3.0",
          "timestamp": "2023-05-16T17:56:38+09:00",
          "tree_id": "55c7a7526e013a7451c0e1a0d1a8ad138feb19c8",
          "url": "https://github.com/greymistcube/libplanet/commit/e0ac72d952263a8df2cdfc10c1bedbc403f4e6e6"
        },
        "date": 1684228126253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212867.7333333334,
            "unit": "ns",
            "range": "± 27585.47682455562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3349461.466666667,
            "unit": "ns",
            "range": "± 38252.051825204035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4167701.933333333,
            "unit": "ns",
            "range": "± 45066.19813510322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4080028.230769231,
            "unit": "ns",
            "range": "± 60551.440391832475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6681169.066666666,
            "unit": "ns",
            "range": "± 120343.935551679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273125.17142857146,
            "unit": "ns",
            "range": "± 7522.19899593555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261694.66666666666,
            "unit": "ns",
            "range": "± 7242.809017331499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225635.42857142858,
            "unit": "ns",
            "range": "± 2734.036624432135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129425.8571428573,
            "unit": "ns",
            "range": "± 32993.12626047372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3734971.1333333333,
            "unit": "ns",
            "range": "± 38285.469992575265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15126.305263157894,
            "unit": "ns",
            "range": "± 1376.9541786415361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81746.26865671642,
            "unit": "ns",
            "range": "± 3891.1448949373053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68838.15384615384,
            "unit": "ns",
            "range": "± 805.7542890726518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97246.66666666667,
            "unit": "ns",
            "range": "± 1702.8827099390974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4308.333333333333,
            "unit": "ns",
            "range": "± 300.058473833515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15356.25,
            "unit": "ns",
            "range": "± 1283.8931337721876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079637.944270833,
            "unit": "ns",
            "range": "± 19250.60767118848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859891.794140625,
            "unit": "ns",
            "range": "± 3372.2367999576836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387436.791015625,
            "unit": "ns",
            "range": "± 1749.1388969717932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2524890.943489583,
            "unit": "ns",
            "range": "± 5560.53088196722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804878.9953425481,
            "unit": "ns",
            "range": "± 444.37686556477775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733785.4361979166,
            "unit": "ns",
            "range": "± 682.670417483781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529280.923076923,
            "unit": "ns",
            "range": "± 7294.764543396156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19488337.266666666,
            "unit": "ns",
            "range": "± 104144.17062656574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48791186.46666667,
            "unit": "ns",
            "range": "± 217765.88411209828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97211358.35714285,
            "unit": "ns",
            "range": "± 390109.58514097374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193261752.2,
            "unit": "ns",
            "range": "± 939066.0009644993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312228.7395833333,
            "unit": "ns",
            "range": "± 80275.14915762434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2493132.8536585364,
            "unit": "ns",
            "range": "± 87894.12710828891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2065021.7974683545,
            "unit": "ns",
            "range": "± 102772.71136090199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5099598.555555556,
            "unit": "ns",
            "range": "± 141684.37738735005"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44449.45977011494,
            "unit": "ns",
            "range": "± 2265.0709152849313"
          }
        ]
      }
    ]
  }
}