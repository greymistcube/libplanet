window.BENCHMARK_DATA = {
  "lastUpdate": 1693307389139,
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
          "id": "3db250238e98ac1f2cfe74ce90f596d0ccec24c6",
          "message": "Changelog",
          "timestamp": "2023-08-29T19:55:39+09:00",
          "tree_id": "d92c57f29354696c1ff88c1d03f95f8f66c1a87d",
          "url": "https://github.com/greymistcube/libplanet/commit/3db250238e98ac1f2cfe74ce90f596d0ccec24c6"
        },
        "date": 1693307382042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443349.8709677418,
            "unit": "ns",
            "range": "± 94411.55731990722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2761477.5531914895,
            "unit": "ns",
            "range": "± 100394.40599603158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1828784.3,
            "unit": "ns",
            "range": "± 86243.32144772852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4936290.101694915,
            "unit": "ns",
            "range": "± 218547.71761292103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281274.3103448276,
            "unit": "ns",
            "range": "± 7779.957235024993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270723.5,
            "unit": "ns",
            "range": "± 6480.298614752535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236425.0588235294,
            "unit": "ns",
            "range": "± 7643.767403423985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4419130.071428572,
            "unit": "ns",
            "range": "± 35441.21925421408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4048754,
            "unit": "ns",
            "range": "± 47052.42705900363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20714.031914893618,
            "unit": "ns",
            "range": "± 1715.8605819252614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87649.80701754386,
            "unit": "ns",
            "range": "± 3806.679366768161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74518.81818181818,
            "unit": "ns",
            "range": "± 1811.8055092816126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85982.63636363637,
            "unit": "ns",
            "range": "± 13063.318343044595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5224.010416666667,
            "unit": "ns",
            "range": "± 621.6722862323028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20103.36170212766,
            "unit": "ns",
            "range": "± 1401.733004588217"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49974.260869565216,
            "unit": "ns",
            "range": "± 2600.035252802281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8383225.035714285,
            "unit": "ns",
            "range": "± 239891.79918169006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22638438.333333332,
            "unit": "ns",
            "range": "± 148686.3412963519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56332466.14285714,
            "unit": "ns",
            "range": "± 393893.1240339298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112182870.71428572,
            "unit": "ns",
            "range": "± 1082306.4732529058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225014704.2,
            "unit": "ns",
            "range": "± 1127192.8832836526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3524831.2580645164,
            "unit": "ns",
            "range": "± 105693.09652794035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3694468.3225806453,
            "unit": "ns",
            "range": "± 110809.82136146209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4463109.071428572,
            "unit": "ns",
            "range": "± 69523.56048626115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4035785.027027027,
            "unit": "ns",
            "range": "± 127998.6810341086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6285192.142857143,
            "unit": "ns",
            "range": "± 157529.9826915297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5020000.029017857,
            "unit": "ns",
            "range": "± 13520.768061973908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1621520.7872488839,
            "unit": "ns",
            "range": "± 2908.0023818229265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1096337.6498697917,
            "unit": "ns",
            "range": "± 2750.47811961054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610781.797433036,
            "unit": "ns",
            "range": "± 2093.5346925579383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859849.8360026042,
            "unit": "ns",
            "range": "± 702.178677292022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771422.6129807692,
            "unit": "ns",
            "range": "± 861.4996630179783"
          }
        ]
      }
    ]
  }
}