window.BENCHMARK_DATA = {
  "lastUpdate": 1705577593038,
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
          "id": "0544e7ea2b52012d2ccfe0649b91a3e66350c074",
          "message": "Prepare 3.9.6",
          "timestamp": "2024-01-18T20:21:08+09:00",
          "tree_id": "7404f8c95fac3421006e37312490bb01484847f1",
          "url": "https://github.com/greymistcube/libplanet/commit/0544e7ea2b52012d2ccfe0649b91a3e66350c074"
        },
        "date": 1705577572511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001215,
            "unit": "ns",
            "range": "± 113145.1542680615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1800232.8358208956,
            "unit": "ns",
            "range": "± 76886.19765810455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1411717.7083333333,
            "unit": "ns",
            "range": "± 119834.9606265934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5394706.666666667,
            "unit": "ns",
            "range": "± 157318.652977683"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35637.64705882353,
            "unit": "ns",
            "range": "± 1907.7521346555775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5238403.846153846,
            "unit": "ns",
            "range": "± 23801.9472377302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13795113.333333334,
            "unit": "ns",
            "range": "± 155360.1294075279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33903771.428571425,
            "unit": "ns",
            "range": "± 172383.8446320011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67114200,
            "unit": "ns",
            "range": "± 312796.0284028801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138194913.33333334,
            "unit": "ns",
            "range": "± 1243374.7802232592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313706.7708333335,
            "unit": "ns",
            "range": "± 7255.841832779376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075791.30859375,
            "unit": "ns",
            "range": "± 2696.2957884831867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765762.96875,
            "unit": "ns",
            "range": "± 2483.7422909151783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939898.1705729167,
            "unit": "ns",
            "range": "± 6961.110039900119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636966.4583333334,
            "unit": "ns",
            "range": "± 2533.4185379740993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570396.1688701923,
            "unit": "ns",
            "range": "± 1344.99822743726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208026.388888889,
            "unit": "ns",
            "range": "± 105676.49277301165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2330133.3333333335,
            "unit": "ns",
            "range": "± 71913.80546645175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2917365.217391304,
            "unit": "ns",
            "range": "± 70829.73572201574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2700662.5,
            "unit": "ns",
            "range": "± 124355.75375535904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6343202.857142857,
            "unit": "ns",
            "range": "± 306040.8350945044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184947.61904761905,
            "unit": "ns",
            "range": "± 4274.063528729896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173139.1891891892,
            "unit": "ns",
            "range": "± 8677.222861829361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147011.62790697673,
            "unit": "ns",
            "range": "± 5392.287671706764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717593.3333333335,
            "unit": "ns",
            "range": "± 31423.06856586794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2559485.714285714,
            "unit": "ns",
            "range": "± 32157.43979339671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11666.315789473685,
            "unit": "ns",
            "range": "± 1908.3027173166874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58596.93877551021,
            "unit": "ns",
            "range": "± 6909.390801940854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46293.54838709677,
            "unit": "ns",
            "range": "± 1911.472779336629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64283.83838383838,
            "unit": "ns",
            "range": "± 14789.43160359069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2661.855670103093,
            "unit": "ns",
            "range": "± 550.273284182708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11228.260869565218,
            "unit": "ns",
            "range": "± 1459.5894415186217"
          }
        ]
      }
    ]
  }
}