window.BENCHMARK_DATA = {
  "lastUpdate": 1683610360474,
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
          "id": "f1d09b79c28cb8adebced6227ec54e4e1a7b5d13",
          "message": "Release 1.1.0",
          "timestamp": "2023-05-09T14:18:03+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/greymistcube/libplanet/commit/f1d09b79c28cb8adebced6227ec54e4e1a7b5d13"
        },
        "date": 1683610353252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297997.73913043475,
            "unit": "ns",
            "range": "± 7284.1065604093965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297966.51612903224,
            "unit": "ns",
            "range": "± 8334.938851489225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240108.2340425532,
            "unit": "ns",
            "range": "± 8889.487661210622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4369574.333333333,
            "unit": "ns",
            "range": "± 45274.87824652978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974637.2,
            "unit": "ns",
            "range": "± 61382.14016214908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24795.83870967742,
            "unit": "ns",
            "range": "± 3075.061686515667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105476.29591836735,
            "unit": "ns",
            "range": "± 10765.522197732913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93820.46875,
            "unit": "ns",
            "range": "± 8889.272212176375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120133.88659793814,
            "unit": "ns",
            "range": "± 17118.117382661836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8324.561224489797,
            "unit": "ns",
            "range": "± 1281.5047861133703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25233.031914893618,
            "unit": "ns",
            "range": "± 2372.991036927042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484338.8076923075,
            "unit": "ns",
            "range": "± 95294.0169777806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3818458.3928571427,
            "unit": "ns",
            "range": "± 103472.78447883244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4329453.29032258,
            "unit": "ns",
            "range": "± 129470.64300532728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587104.2,
            "unit": "ns",
            "range": "± 158921.16398539182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7209356.26,
            "unit": "ns",
            "range": "± 287501.9600585403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6049047.007254465,
            "unit": "ns",
            "range": "± 27479.465218553516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858029.4858072917,
            "unit": "ns",
            "range": "± 1687.5952652528001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356473.6247395833,
            "unit": "ns",
            "range": "± 5031.33586717093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631729.3520833333,
            "unit": "ns",
            "range": "± 4584.167981285654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820932.8916015625,
            "unit": "ns",
            "range": "± 790.0509877761689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760109.1578543527,
            "unit": "ns",
            "range": "± 263.8791299921078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53040.18279569892,
            "unit": "ns",
            "range": "± 5745.126549002086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7759481,
            "unit": "ns",
            "range": "± 134359.69635903582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21736200.333333332,
            "unit": "ns",
            "range": "± 321078.01524788927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55087173.88235294,
            "unit": "ns",
            "range": "± 1098698.1038374966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110219522.66666667,
            "unit": "ns",
            "range": "± 1285112.3276939462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222532541.7142857,
            "unit": "ns",
            "range": "± 1717637.6161968429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560184.06,
            "unit": "ns",
            "range": "± 118045.25491948615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2742688.2195121953,
            "unit": "ns",
            "range": "± 96765.16314989403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2450086.2835820895,
            "unit": "ns",
            "range": "± 109069.23280925829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6043843.780487805,
            "unit": "ns",
            "range": "± 319545.5862133294"
          }
        ]
      }
    ]
  }
}