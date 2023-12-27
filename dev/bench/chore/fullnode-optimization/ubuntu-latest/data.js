window.BENCHMARK_DATA = {
  "lastUpdate": 1703656517878,
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
          "id": "e9e2b20ae2a1ec19763e3beb49d7770ae84426a1",
          "message": "Slightly optimized FullNode",
          "timestamp": "2023-12-27T14:44:14+09:00",
          "tree_id": "3079199eb5d6660ea78a5af483aec226128c61d9",
          "url": "https://github.com/greymistcube/libplanet/commit/e9e2b20ae2a1ec19763e3beb49d7770ae84426a1"
        },
        "date": 1703656510756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3809612.4580078125,
            "unit": "ns",
            "range": "± 10158.548830011148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203693.4223257212,
            "unit": "ns",
            "range": "± 8149.597135903534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770840.541391226,
            "unit": "ns",
            "range": "± 2806.047607594332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924508.2065805288,
            "unit": "ns",
            "range": "± 9272.090292791609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611217.9305889423,
            "unit": "ns",
            "range": "± 1054.434185084402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574500.1798828125,
            "unit": "ns",
            "range": "± 856.9755849276958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424009.7333333334,
            "unit": "ns",
            "range": "± 41132.9610765358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500910,
            "unit": "ns",
            "range": "± 41789.21594419748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3135834.227272727,
            "unit": "ns",
            "range": "± 36576.96709019648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2972945.9846153846,
            "unit": "ns",
            "range": "± 138887.0312895399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7020721.783783784,
            "unit": "ns",
            "range": "± 235066.82681871258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42078.37368421053,
            "unit": "ns",
            "range": "± 5674.432854296289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197889.8536585366,
            "unit": "ns",
            "range": "± 6375.894806068304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195332.73214285713,
            "unit": "ns",
            "range": "± 8417.722090902938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161540.04166666666,
            "unit": "ns",
            "range": "± 4173.413121791914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3041044.346153846,
            "unit": "ns",
            "range": "± 19499.378899707524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2761330,
            "unit": "ns",
            "range": "± 12434.559172651912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14402.663265306122,
            "unit": "ns",
            "range": "± 3103.227740790864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69119.09375,
            "unit": "ns",
            "range": "± 9236.769125366778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67950.84,
            "unit": "ns",
            "range": "± 16013.039348801422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90803.5,
            "unit": "ns",
            "range": "± 15058.088749480594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3173.7954545454545,
            "unit": "ns",
            "range": "± 853.030098229159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16234.989361702128,
            "unit": "ns",
            "range": "± 1937.728298001259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5667071,
            "unit": "ns",
            "range": "± 35060.765648316265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14418337.285714285,
            "unit": "ns",
            "range": "± 93676.94977969486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36965259.823529415,
            "unit": "ns",
            "range": "± 659590.9456875749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75439015.13333334,
            "unit": "ns",
            "range": "± 931354.9974475643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149403442.3846154,
            "unit": "ns",
            "range": "± 542265.060983178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003615.6875,
            "unit": "ns",
            "range": "± 126126.23061581579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1941743.8736263737,
            "unit": "ns",
            "range": "± 108255.97155873444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474392.3789473684,
            "unit": "ns",
            "range": "± 120721.81128248101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5908037.431818182,
            "unit": "ns",
            "range": "± 221478.5136497073"
          }
        ]
      }
    ]
  }
}