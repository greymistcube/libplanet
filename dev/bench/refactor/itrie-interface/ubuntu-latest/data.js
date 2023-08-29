window.BENCHMARK_DATA = {
  "lastUpdate": 1693307335006,
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
      },
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
          "id": "9b583597c1581017f0c14fb3c0da0eda4248b776",
          "message": "Removed VolatileKeyValueStore and readonly option",
          "timestamp": "2023-08-29T19:51:50+09:00",
          "tree_id": "6827c39f849230f82333e50a670bc65fc498be41",
          "url": "https://github.com/greymistcube/libplanet/commit/9b583597c1581017f0c14fb3c0da0eda4248b776"
        },
        "date": 1693307326865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685242.3737373736,
            "unit": "ns",
            "range": "± 139824.3616042368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3294935.9836065574,
            "unit": "ns",
            "range": "± 147812.38757464272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174730.4137931033,
            "unit": "ns",
            "range": "± 108903.31436203439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5983785.98,
            "unit": "ns",
            "range": "± 368232.89921486017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328273.6,
            "unit": "ns",
            "range": "± 15334.16456275007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315217.131147541,
            "unit": "ns",
            "range": "± 13895.195010596779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291764.82828282827,
            "unit": "ns",
            "range": "± 23556.892157134513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5110614.333333333,
            "unit": "ns",
            "range": "± 118829.0681261674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4666763.235294118,
            "unit": "ns",
            "range": "± 93407.866794324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32340.791666666668,
            "unit": "ns",
            "range": "± 3979.060489260371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118264.65263157895,
            "unit": "ns",
            "range": "± 12979.921141753388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99292.62626262626,
            "unit": "ns",
            "range": "± 14952.355284120578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121705.75257731958,
            "unit": "ns",
            "range": "± 22191.42523167776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8778.375,
            "unit": "ns",
            "range": "± 1720.5266344930553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30599.785714285714,
            "unit": "ns",
            "range": "± 4196.265984341341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61760.20430107527,
            "unit": "ns",
            "range": "± 5604.883772132277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10049386.23076923,
            "unit": "ns",
            "range": "± 266918.5057499473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26263346.266666666,
            "unit": "ns",
            "range": "± 289571.79210207873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66891602.46666667,
            "unit": "ns",
            "range": "± 489912.5679303643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133832077.26666667,
            "unit": "ns",
            "range": "± 1481510.5741773671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265362864,
            "unit": "ns",
            "range": "± 2199197.7723145518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4166774.15625,
            "unit": "ns",
            "range": "± 128283.84784735444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4392945.555555556,
            "unit": "ns",
            "range": "± 88417.36711770004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5268676.2272727275,
            "unit": "ns",
            "range": "± 127645.48772653847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4863617.791666667,
            "unit": "ns",
            "range": "± 124782.51675405675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7173689.7727272725,
            "unit": "ns",
            "range": "± 153009.86105319264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5390457.713727678,
            "unit": "ns",
            "range": "± 37288.45137773064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1655560.0083333333,
            "unit": "ns",
            "range": "± 1237.528564589027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159017.8051060268,
            "unit": "ns",
            "range": "± 3855.559212604456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2721209.767578125,
            "unit": "ns",
            "range": "± 3942.653465834971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878238.7293526785,
            "unit": "ns",
            "range": "± 369.0752050441492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784878.1783203125,
            "unit": "ns",
            "range": "± 267.7613269754698"
          }
        ]
      }
    ]
  }
}