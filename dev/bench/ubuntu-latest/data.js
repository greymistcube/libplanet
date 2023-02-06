window.BENCHMARK_DATA = {
  "lastUpdate": 1675700398897,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/greymistcube/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675700391353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107768.88235294117,
            "unit": "ns",
            "range": "± 3480.3009950351684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959970.296875,
            "unit": "ns",
            "range": "± 14215.72691146242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837217.6932198661,
            "unit": "ns",
            "range": "± 1861.110448680044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383556.2957589286,
            "unit": "ns",
            "range": "± 1554.915061455815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559303.8116629464,
            "unit": "ns",
            "range": "± 1704.916640691578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815601.7464425223,
            "unit": "ns",
            "range": "± 1256.355019048888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747827.5211356027,
            "unit": "ns",
            "range": "± 1119.8971424537865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90977.04166666667,
            "unit": "ns",
            "range": "± 7832.084146793633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203702.28125,
            "unit": "ns",
            "range": "± 9400.036991600213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196123.61904761905,
            "unit": "ns",
            "range": "± 7139.780310046374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3813901.8666666667,
            "unit": "ns",
            "range": "± 25312.3166628046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9621084.933333334,
            "unit": "ns",
            "range": "± 71194.0582236494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19219.771739130436,
            "unit": "ns",
            "range": "± 1923.8630271733002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56042.857142857145,
            "unit": "ns",
            "range": "± 6176.488041258521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47402.583333333336,
            "unit": "ns",
            "range": "± 2984.8755723574372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99302.10309278351,
            "unit": "ns",
            "range": "± 16676.920957871524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5819.438775510204,
            "unit": "ns",
            "range": "± 727.5079206190358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19292.325842696628,
            "unit": "ns",
            "range": "± 1831.0558787913558"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4477109.720052083,
            "unit": "ns",
            "range": "± 50909.209504483595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6149963.6,
            "unit": "ns",
            "range": "± 70634.45903058122"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25478003.533333335,
            "unit": "ns",
            "range": "± 208029.8914146257"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6810488.428571428,
            "unit": "ns",
            "range": "± 76449.13909835166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29378384.5,
            "unit": "ns",
            "range": "± 266425.4125179243"
          }
        ]
      }
    ]
  }
}