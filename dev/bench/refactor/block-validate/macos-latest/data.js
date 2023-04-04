window.BENCHMARK_DATA = {
  "lastUpdate": 1680579987073,
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
          "id": "4522501c5d9593b0aeaa57efde43b2e524ebe847",
          "message": "Removed unnecessary logic",
          "timestamp": "2023-04-04T12:23:14+09:00",
          "tree_id": "329e28668ace483029c1d1ac545049c75aa9c27a",
          "url": "https://github.com/greymistcube/libplanet/commit/4522501c5d9593b0aeaa57efde43b2e524ebe847"
        },
        "date": 1680579970542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8976641.235955056,
            "unit": "ns",
            "range": "± 1151214.4712580517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21973458.54597701,
            "unit": "ns",
            "range": "± 1500904.2184490059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52735827.823529415,
            "unit": "ns",
            "range": "± 1081917.542968862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120877569.42528735,
            "unit": "ns",
            "range": "± 7691805.285098128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220718126.1111111,
            "unit": "ns",
            "range": "± 4675411.548495222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74774.73033707865,
            "unit": "ns",
            "range": "± 9250.058712054513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 444273.57608695654,
            "unit": "ns",
            "range": "± 51302.047554886325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 404313.3191489362,
            "unit": "ns",
            "range": "± 62257.39259661705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 381680.625,
            "unit": "ns",
            "range": "± 46973.025906420626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6049664.305263158,
            "unit": "ns",
            "range": "± 474952.17281008716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4987976.030612245,
            "unit": "ns",
            "range": "± 553713.1276041821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27833.415730337078,
            "unit": "ns",
            "range": "± 4217.70563385363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140342.5744680851,
            "unit": "ns",
            "range": "± 25363.124034831013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131343.01162790696,
            "unit": "ns",
            "range": "± 12549.47983899233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 309574.10215053766,
            "unit": "ns",
            "range": "± 43111.31462125232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11222.550561797752,
            "unit": "ns",
            "range": "± 1205.762593578663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27829.391304347828,
            "unit": "ns",
            "range": "± 3248.0214500067227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623284.01,
            "unit": "ns",
            "range": "± 148604.05967308948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190147.75,
            "unit": "ns",
            "range": "± 146257.68179765943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2663520.5204081633,
            "unit": "ns",
            "range": "± 236311.87184085228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7007211.62,
            "unit": "ns",
            "range": "± 277190.4539941173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3738167.8020833335,
            "unit": "ns",
            "range": "± 282839.15483705467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3699049.6827956988,
            "unit": "ns",
            "range": "± 294976.679680856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990147.55319149,
            "unit": "ns",
            "range": "± 421169.8334972922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5303120.840425532,
            "unit": "ns",
            "range": "± 717423.0932702943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10301505.404494382,
            "unit": "ns",
            "range": "± 1034345.2659062081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8256052.892013889,
            "unit": "ns",
            "range": "± 291641.0196209868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275861.1826171875,
            "unit": "ns",
            "range": "± 101297.65657309812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448183.4014648437,
            "unit": "ns",
            "range": "± 32687.54400813374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245618.7786989794,
            "unit": "ns",
            "range": "± 129249.37472990884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908033.4845112645,
            "unit": "ns",
            "range": "± 30275.97260777021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882264.5710499043,
            "unit": "ns",
            "range": "± 32771.56643747415"
          }
        ]
      }
    ]
  }
}