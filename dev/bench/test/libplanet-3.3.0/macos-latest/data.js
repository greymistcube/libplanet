window.BENCHMARK_DATA = {
  "lastUpdate": 1694080198083,
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
          "id": "a3e6a6f8dfd6d77a0266a59859eb29e337503444",
          "message": "Parallel on Account level",
          "timestamp": "2023-09-07T18:31:10+09:00",
          "tree_id": "e11338d9a9bb3de5c4fbbb380eeebf73e8491981",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e6a6f8dfd6d77a0266a59859eb29e337503444"
        },
        "date": 1694080183661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8801197.883561645,
            "unit": "ns",
            "range": "± 437595.4397670686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21476466.3630137,
            "unit": "ns",
            "range": "± 1063323.4636003461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53381793.73469388,
            "unit": "ns",
            "range": "± 2009246.2824655562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104039346.8974359,
            "unit": "ns",
            "range": "± 3546978.598560506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215547585.62222221,
            "unit": "ns",
            "range": "± 8048055.994042911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66101.86956521739,
            "unit": "ns",
            "range": "± 9296.399945077865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331048.95263157896,
            "unit": "ns",
            "range": "± 37296.04633138102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319591.9247311828,
            "unit": "ns",
            "range": "± 37413.90642651605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299383.8829787234,
            "unit": "ns",
            "range": "± 25619.442956371262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564578.191919192,
            "unit": "ns",
            "range": "± 450813.48447997094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039972.287878788,
            "unit": "ns",
            "range": "± 300697.99492898467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20847.607526881722,
            "unit": "ns",
            "range": "± 4005.2147976442925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102493.63265306123,
            "unit": "ns",
            "range": "± 17639.55952321212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108372.36813186813,
            "unit": "ns",
            "range": "± 13773.267205559869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110571.07142857143,
            "unit": "ns",
            "range": "± 22170.209255507485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7608.20202020202,
            "unit": "ns",
            "range": "± 1352.302284615192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22854.978723404256,
            "unit": "ns",
            "range": "± 5355.782879991211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693048.4315789475,
            "unit": "ns",
            "range": "± 223477.50718821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956609.873493976,
            "unit": "ns",
            "range": "± 156406.13556361583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940130.8924731184,
            "unit": "ns",
            "range": "± 175657.36267124914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5703491.8,
            "unit": "ns",
            "range": "± 423930.61663418263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468882.1979166665,
            "unit": "ns",
            "range": "± 272112.4558937321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660967.76,
            "unit": "ns",
            "range": "± 291826.9978367604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5349651.479166667,
            "unit": "ns",
            "range": "± 344680.0805274968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4099383.974226804,
            "unit": "ns",
            "range": "± 338630.36310684984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7021352.344086021,
            "unit": "ns",
            "range": "± 484848.75126553624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207646.880208333,
            "unit": "ns",
            "range": "± 79490.8334777233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1815478.2135416667,
            "unit": "ns",
            "range": "± 53741.065550942796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1045171.541155134,
            "unit": "ns",
            "range": "± 12133.86392499047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911239.691840278,
            "unit": "ns",
            "range": "± 61440.1241384143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807661.25625,
            "unit": "ns",
            "range": "± 6510.622856622034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746227.4021484375,
            "unit": "ns",
            "range": "± 10455.241142832821"
          }
        ]
      }
    ]
  }
}