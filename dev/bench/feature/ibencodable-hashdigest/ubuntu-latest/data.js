window.BENCHMARK_DATA = {
  "lastUpdate": 1697439600682,
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
          "id": "a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8",
          "message": "Update BlockMarshaler",
          "timestamp": "2023-10-16T15:44:03+09:00",
          "tree_id": "d14c1c94d85b5c5970b2ae3a4f0821014b4b9f30",
          "url": "https://github.com/greymistcube/libplanet/commit/a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8"
        },
        "date": 1697439592705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50201.98630136986,
            "unit": "ns",
            "range": "± 2512.96680844879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8299844,
            "unit": "ns",
            "range": "± 187257.16805986362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22398435.6,
            "unit": "ns",
            "range": "± 263376.4599815253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55109803.06666667,
            "unit": "ns",
            "range": "± 669229.4424499895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110835702.1764706,
            "unit": "ns",
            "range": "± 2259587.280062839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217762645.13333333,
            "unit": "ns",
            "range": "± 3572000.79911373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280032.87272727274,
            "unit": "ns",
            "range": "± 10915.969765803959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274464.3333333333,
            "unit": "ns",
            "range": "± 9526.56104125341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232545.8409090909,
            "unit": "ns",
            "range": "± 8726.498618397425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4399096.4,
            "unit": "ns",
            "range": "± 69356.49537899924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3997160.2666666666,
            "unit": "ns",
            "range": "± 59202.371382845646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20568.010416666668,
            "unit": "ns",
            "range": "± 1764.8950736355355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88923.76086956522,
            "unit": "ns",
            "range": "± 5495.466210001219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71856.9375,
            "unit": "ns",
            "range": "± 1411.716235355628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83165.56565656565,
            "unit": "ns",
            "range": "± 8659.268308347499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4994.723404255319,
            "unit": "ns",
            "range": "± 542.6774206535695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20254.821052631578,
            "unit": "ns",
            "range": "± 1684.086670704833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400095.8651685393,
            "unit": "ns",
            "range": "± 73463.84610213364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643599.638888889,
            "unit": "ns",
            "range": "± 87300.7527799823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2099699.3294117646,
            "unit": "ns",
            "range": "± 112821.01236592035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9552879.869565217,
            "unit": "ns",
            "range": "± 573306.2095363801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5029080.379464285,
            "unit": "ns",
            "range": "± 26491.012673977253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616542.23046875,
            "unit": "ns",
            "range": "± 6573.402019002923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089448.3741629464,
            "unit": "ns",
            "range": "± 3317.068609836071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596266.466238839,
            "unit": "ns",
            "range": "± 6135.453837621568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828364.1796223958,
            "unit": "ns",
            "range": "± 2754.852876054066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749211.6003069197,
            "unit": "ns",
            "range": "± 1033.5438704423577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3441571.238095238,
            "unit": "ns",
            "range": "± 124751.24412338407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3718342.035714286,
            "unit": "ns",
            "range": "± 102857.80159232496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229618.611111111,
            "unit": "ns",
            "range": "± 84849.2481121242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323304.720930233,
            "unit": "ns",
            "range": "± 160023.93960433448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11023496.872340426,
            "unit": "ns",
            "range": "± 425506.73874501465"
          }
        ]
      }
    ]
  }
}