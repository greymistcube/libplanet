window.BENCHMARK_DATA = {
  "lastUpdate": 1693377746850,
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
          "id": "055c43d5d5e64347b1cab4809fbc73dc647d2f41",
          "message": "Changelog",
          "timestamp": "2023-08-29T19:57:12+09:00",
          "tree_id": "0f74dff10c5f5e73c50fd1c25d1ae65c107fae24",
          "url": "https://github.com/greymistcube/libplanet/commit/055c43d5d5e64347b1cab4809fbc73dc647d2f41"
        },
        "date": 1693307482918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440924.3205128205,
            "unit": "ns",
            "range": "± 73604.82020662223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703266.16,
            "unit": "ns",
            "range": "± 109147.64989165746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1868916.625,
            "unit": "ns",
            "range": "± 82780.60687841524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4889928.461538462,
            "unit": "ns",
            "range": "± 171039.1669581232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279747.96,
            "unit": "ns",
            "range": "± 8501.283430021082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270589.8611111111,
            "unit": "ns",
            "range": "± 8979.486960059188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235579.58823529413,
            "unit": "ns",
            "range": "± 9380.988276672071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462127.125,
            "unit": "ns",
            "range": "± 81715.00960278555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4061656.4285714286,
            "unit": "ns",
            "range": "± 66358.35059121657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20023.98969072165,
            "unit": "ns",
            "range": "± 1645.5641224645765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92324.05208333333,
            "unit": "ns",
            "range": "± 5942.087351427578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72368.30434782608,
            "unit": "ns",
            "range": "± 1572.8519387863162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86097.88659793814,
            "unit": "ns",
            "range": "± 12735.166400460683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5284.4375,
            "unit": "ns",
            "range": "± 765.7631599295328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18993.86170212766,
            "unit": "ns",
            "range": "± 1583.6173413719125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51778.40425531915,
            "unit": "ns",
            "range": "± 3211.679687556896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8125404.444444444,
            "unit": "ns",
            "range": "± 173437.15286700937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22439104.933333334,
            "unit": "ns",
            "range": "± 354310.524593786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56797118.266666666,
            "unit": "ns",
            "range": "± 1022472.7838292998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113167230.53333333,
            "unit": "ns",
            "range": "± 2047624.4147780084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223829597.13333333,
            "unit": "ns",
            "range": "± 3312265.898978282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3454783.794871795,
            "unit": "ns",
            "range": "± 120724.57454147424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3666301.1,
            "unit": "ns",
            "range": "± 82379.42123645099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4354760.730769231,
            "unit": "ns",
            "range": "± 118931.57237455752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154837.7666666666,
            "unit": "ns",
            "range": "± 123061.48044405124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6372904.038461538,
            "unit": "ns",
            "range": "± 172852.72844464582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5101456.28125,
            "unit": "ns",
            "range": "± 11777.8440579826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636798.5141927083,
            "unit": "ns",
            "range": "± 5976.879109273953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1055455.8192708334,
            "unit": "ns",
            "range": "± 2420.0900398843405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594129.88046875,
            "unit": "ns",
            "range": "± 4868.3410323334865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825294.5540364584,
            "unit": "ns",
            "range": "± 1574.924760513647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752048.4386067708,
            "unit": "ns",
            "range": "± 656.6198764874981"
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
          "id": "add07a449fa78bfb3ff598facbff4612c84d4939",
          "message": "Added tests",
          "timestamp": "2023-08-30T15:29:20+09:00",
          "tree_id": "aa631cbb023fc1b522616d3e6de701ad42380f51",
          "url": "https://github.com/greymistcube/libplanet/commit/add07a449fa78bfb3ff598facbff4612c84d4939"
        },
        "date": 1693377738866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422591.642857143,
            "unit": "ns",
            "range": "± 24428.863311844685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2435125.5,
            "unit": "ns",
            "range": "± 68519.755127333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642066,
            "unit": "ns",
            "range": "± 91210.42381386213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4431266.166666667,
            "unit": "ns",
            "range": "± 196391.8615647123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261978.4150943396,
            "unit": "ns",
            "range": "± 10507.19823672903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263992.85714285716,
            "unit": "ns",
            "range": "± 9489.36372998738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223372.2857142857,
            "unit": "ns",
            "range": "± 1334.5716356005214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188166.1333333333,
            "unit": "ns",
            "range": "± 48221.4603986747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3805954.6666666665,
            "unit": "ns",
            "range": "± 48376.736589968925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18495.852631578946,
            "unit": "ns",
            "range": "± 1874.0545756513059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83454.81818181818,
            "unit": "ns",
            "range": "± 5966.430691049265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67969.61538461539,
            "unit": "ns",
            "range": "± 1114.6450510111233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72667.6530612245,
            "unit": "ns",
            "range": "± 9524.373232188114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4339.7959183673465,
            "unit": "ns",
            "range": "± 538.5623849261991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15459.648936170213,
            "unit": "ns",
            "range": "± 1061.673235145665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45437.590361445786,
            "unit": "ns",
            "range": "± 2373.193120301723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7768737.928571428,
            "unit": "ns",
            "range": "± 31051.957117718994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20045938.933333334,
            "unit": "ns",
            "range": "± 94678.72650062923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50157064.266666666,
            "unit": "ns",
            "range": "± 534309.8120534922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100160019.66666667,
            "unit": "ns",
            "range": "± 1143583.6481238431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204689362.53333333,
            "unit": "ns",
            "range": "± 1083362.638908259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3209484.7333333334,
            "unit": "ns",
            "range": "± 27459.32115607341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374628.533333333,
            "unit": "ns",
            "range": "± 43714.07651818914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4140434.6,
            "unit": "ns",
            "range": "± 53218.36783318868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3805388.888888889,
            "unit": "ns",
            "range": "± 104341.80462430391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5863660.80952381,
            "unit": "ns",
            "range": "± 132111.8238068111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4913148.857572115,
            "unit": "ns",
            "range": "± 9504.49378897067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590670.2142427885,
            "unit": "ns",
            "range": "± 920.4038874577168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085172.2131510417,
            "unit": "ns",
            "range": "± 2127.5208722714356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2749618.3369791666,
            "unit": "ns",
            "range": "± 8560.450476231015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899634.9896484375,
            "unit": "ns",
            "range": "± 10347.765678735126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722843.7008231027,
            "unit": "ns",
            "range": "± 597.639257326128"
          }
        ]
      }
    ]
  }
}