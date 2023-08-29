window.BENCHMARK_DATA = {
  "lastUpdate": 1693307066185,
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
          "id": "235f128d5ffc87ba8324c8cc04993d505ee1ce8d",
          "message": "Removed VolatileKeyValueStore and readonly option",
          "timestamp": "2023-08-29T19:49:28+09:00",
          "tree_id": "83918d471894c27b21eff46190d39511b400b241",
          "url": "https://github.com/greymistcube/libplanet/commit/235f128d5ffc87ba8324c8cc04993d505ee1ce8d"
        },
        "date": 1693307058540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461923.044117647,
            "unit": "ns",
            "range": "± 69797.46584212854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2888809.775862069,
            "unit": "ns",
            "range": "± 126655.20780131583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1890017.9444444445,
            "unit": "ns",
            "range": "± 87448.02371499795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4929433.307692308,
            "unit": "ns",
            "range": "± 125452.14308213926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295253.16,
            "unit": "ns",
            "range": "± 11941.404394486146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280331.4603174603,
            "unit": "ns",
            "range": "± 12788.991217027491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233490.33333333334,
            "unit": "ns",
            "range": "± 6455.251457891891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4577679.8,
            "unit": "ns",
            "range": "± 85134.08543015289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162544,
            "unit": "ns",
            "range": "± 92601.55879499631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22837.378947368423,
            "unit": "ns",
            "range": "± 3510.634176748744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110704.86315789474,
            "unit": "ns",
            "range": "± 13788.272192538958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73175.42105263157,
            "unit": "ns",
            "range": "± 2995.7396770090045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94770.36082474227,
            "unit": "ns",
            "range": "± 15482.646379754744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6873.350515463918,
            "unit": "ns",
            "range": "± 1397.366295342458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23769.1875,
            "unit": "ns",
            "range": "± 2762.649183635538"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53697.3870967742,
            "unit": "ns",
            "range": "± 3931.5773221229797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8280931.785714285,
            "unit": "ns",
            "range": "± 95984.37741967625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22481568.230769232,
            "unit": "ns",
            "range": "± 230970.78637104516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56930534.733333334,
            "unit": "ns",
            "range": "± 476762.0655023496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115659527.73913044,
            "unit": "ns",
            "range": "± 2923920.3525820235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227398890.84210527,
            "unit": "ns",
            "range": "± 5016104.930842625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3634143.736842105,
            "unit": "ns",
            "range": "± 123930.60433852754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3906931.076923077,
            "unit": "ns",
            "range": "± 56819.10285496938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536573.935483871,
            "unit": "ns",
            "range": "± 137479.65492002454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199549.5,
            "unit": "ns",
            "range": "± 141413.58592799178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6606205.365853659,
            "unit": "ns",
            "range": "± 238155.94318038298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5122331.4890625,
            "unit": "ns",
            "range": "± 53380.583601851955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588518.471875,
            "unit": "ns",
            "range": "± 7230.98089311195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082695.5234375,
            "unit": "ns",
            "range": "± 3640.456934956404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608544.8247395833,
            "unit": "ns",
            "range": "± 7052.567015044637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840746.0687779018,
            "unit": "ns",
            "range": "± 1502.4820413985478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770261.337109375,
            "unit": "ns",
            "range": "± 1445.5592445052864"
          }
        ]
      }
    ]
  }
}