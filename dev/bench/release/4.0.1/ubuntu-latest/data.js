window.BENCHMARK_DATA = {
  "lastUpdate": 1706254406503,
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
          "id": "0d725d42ce3ab3a084b5628aa13d51a18762c422",
          "message": "Changelog",
          "timestamp": "2024-01-26T16:21:33+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/0d725d42ce3ab3a084b5628aa13d51a18762c422"
        },
        "date": 1706254382686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417778.7837837837,
            "unit": "ns",
            "range": "± 80302.34443448194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543756.5416666665,
            "unit": "ns",
            "range": "± 100406.3745575223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101503.785714286,
            "unit": "ns",
            "range": "± 48098.21483722107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3167796.95,
            "unit": "ns",
            "range": "± 140945.53451688951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13880071.68478261,
            "unit": "ns",
            "range": "± 1014010.1848864049"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39397.43877551021,
            "unit": "ns",
            "range": "± 5682.545023095891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969471.0154639175,
            "unit": "ns",
            "range": "± 90140.17080290763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843973.5588235294,
            "unit": "ns",
            "range": "± 58435.73131703788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1599905.7311827957,
            "unit": "ns",
            "range": "± 148182.89004082375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12926756.170212766,
            "unit": "ns",
            "range": "± 1054495.6704187172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5517072.066666666,
            "unit": "ns",
            "range": "± 27903.57359721579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14104494.73076923,
            "unit": "ns",
            "range": "± 134306.07758968184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36824597.038461536,
            "unit": "ns",
            "range": "± 155720.50989653193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75718590.46153846,
            "unit": "ns",
            "range": "± 681733.5066048678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148901591.23076922,
            "unit": "ns",
            "range": "± 716461.4631035822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722182.3758370536,
            "unit": "ns",
            "range": "± 47957.34427297746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222467.9471261161,
            "unit": "ns",
            "range": "± 2952.217642440882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767297.2576822917,
            "unit": "ns",
            "range": "± 12264.320008704017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931671.1723632812,
            "unit": "ns",
            "range": "± 2373.8422503118495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628779.8938551683,
            "unit": "ns",
            "range": "± 1284.688837219385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570852.7119140625,
            "unit": "ns",
            "range": "± 935.0172717980433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201421.72352941177,
            "unit": "ns",
            "range": "± 10456.520815098234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194037.70967741936,
            "unit": "ns",
            "range": "± 11623.806177672655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166109.29411764705,
            "unit": "ns",
            "range": "± 3230.5256879629105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3201201.125,
            "unit": "ns",
            "range": "± 60566.790415072624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907309.6153846155,
            "unit": "ns",
            "range": "± 32135.722562123035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14642.561224489797,
            "unit": "ns",
            "range": "± 2355.2795446244418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64356.92105263158,
            "unit": "ns",
            "range": "± 7518.852618130582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51809.4,
            "unit": "ns",
            "range": "± 963.7742622478713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58976.886597938144,
            "unit": "ns",
            "range": "± 10373.800038916435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3538.288888888889,
            "unit": "ns",
            "range": "± 373.7394467171742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15240.10824742268,
            "unit": "ns",
            "range": "± 2132.921419656915"
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
          "id": "3b31da77123c4f85fceb80393183ae02cbdd5171",
          "message": "Libplanet 4.0.1",
          "timestamp": "2024-01-26T16:22:06+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/3b31da77123c4f85fceb80393183ae02cbdd5171"
        },
        "date": 1706254400315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397547.8928571427,
            "unit": "ns",
            "range": "± 68643.05125434486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2480822.722222222,
            "unit": "ns",
            "range": "± 53075.43196887809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3215416.4285714286,
            "unit": "ns",
            "range": "± 60746.5396122046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3228524.8363636364,
            "unit": "ns",
            "range": "± 105193.07149250983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13866639.637362637,
            "unit": "ns",
            "range": "± 828499.9568534758"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40193.427835051545,
            "unit": "ns",
            "range": "± 5150.403574897923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980619.0670103093,
            "unit": "ns",
            "range": "± 92719.05796903209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895436.1346153845,
            "unit": "ns",
            "range": "± 77328.85284747869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579004.1182795698,
            "unit": "ns",
            "range": "± 145362.80629356398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12802188.278350515,
            "unit": "ns",
            "range": "± 1077608.3642765617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5586068,
            "unit": "ns",
            "range": "± 31512.924863118806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14143834.333333334,
            "unit": "ns",
            "range": "± 88321.70179331163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36593327.5,
            "unit": "ns",
            "range": "± 152516.86055545567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75335759.28571428,
            "unit": "ns",
            "range": "± 308662.23256677255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150057335.66666666,
            "unit": "ns",
            "range": "± 666635.069669283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753793.44140625,
            "unit": "ns",
            "range": "± 12721.103701806209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234080.9416666667,
            "unit": "ns",
            "range": "± 20826.402019291367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762507.8518880209,
            "unit": "ns",
            "range": "± 2371.3932575143176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914807.4051983173,
            "unit": "ns",
            "range": "± 1706.6537795996417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616585.2544759115,
            "unit": "ns",
            "range": "± 3432.558155181728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572539.6755719866,
            "unit": "ns",
            "range": "± 1195.0289422146614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196271.1568627451,
            "unit": "ns",
            "range": "± 7812.887556780909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193603.87096774194,
            "unit": "ns",
            "range": "± 8628.276353683668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169708.64285714287,
            "unit": "ns",
            "range": "± 2914.623180741258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3207927.6428571427,
            "unit": "ns",
            "range": "± 38469.36420433426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875747.1333333333,
            "unit": "ns",
            "range": "± 34034.92791838296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15906.737373737375,
            "unit": "ns",
            "range": "± 3286.7027289188827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65988.15463917526,
            "unit": "ns",
            "range": "± 5753.167939528705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59571.59574468085,
            "unit": "ns",
            "range": "± 6208.688854918243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58477.3595505618,
            "unit": "ns",
            "range": "± 11443.736949495753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4685.7,
            "unit": "ns",
            "range": "± 1771.565400908747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12192.540229885057,
            "unit": "ns",
            "range": "± 1108.1098594327368"
          }
        ]
      }
    ]
  }
}