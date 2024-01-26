window.BENCHMARK_DATA = {
  "lastUpdate": 1706254433170,
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
          "id": "3de4ba9d18a5de4eabe89a2b26935a78ad2acf2e",
          "message": "Release 4.0.1",
          "timestamp": "2024-01-26T16:22:24+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/3de4ba9d18a5de4eabe89a2b26935a78ad2acf2e"
        },
        "date": 1706254426984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381164.159090909,
            "unit": "ns",
            "range": "± 88619.4072072523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523897.511627907,
            "unit": "ns",
            "range": "± 56299.8786044416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3133110.3333333335,
            "unit": "ns",
            "range": "± 62957.49503294686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3115184.355555556,
            "unit": "ns",
            "range": "± 111318.13043320227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13873649.695652174,
            "unit": "ns",
            "range": "± 800223.4590854661"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41247.0625,
            "unit": "ns",
            "range": "± 5577.289390324036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981937.1808510638,
            "unit": "ns",
            "range": "± 87697.68385365087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860024.2586206896,
            "unit": "ns",
            "range": "± 81421.73571468242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626124.6344086023,
            "unit": "ns",
            "range": "± 158088.1113366011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12822261.263157895,
            "unit": "ns",
            "range": "± 978663.4541386098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5608398.133333334,
            "unit": "ns",
            "range": "± 21681.063363045203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14156232.142857144,
            "unit": "ns",
            "range": "± 90026.53749256993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36411393.57692308,
            "unit": "ns",
            "range": "± 175163.62870444954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74041770.06666666,
            "unit": "ns",
            "range": "± 758297.9815528105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149041750.7857143,
            "unit": "ns",
            "range": "± 629156.4158748514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3837571.3484933036,
            "unit": "ns",
            "range": "± 40945.67944491739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210976.8557692308,
            "unit": "ns",
            "range": "± 7029.979635719942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756076.9871544471,
            "unit": "ns",
            "range": "± 1816.8197968305412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942184.9749098558,
            "unit": "ns",
            "range": "± 5316.915153921156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604313.1209435096,
            "unit": "ns",
            "range": "± 992.9783951686501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573366.9908854166,
            "unit": "ns",
            "range": "± 379.02538665349124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202897.5,
            "unit": "ns",
            "range": "± 8540.738154175073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193059.55813953487,
            "unit": "ns",
            "range": "± 6578.352291534659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172046.21212121213,
            "unit": "ns",
            "range": "± 5377.28089254676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3408297.75,
            "unit": "ns",
            "range": "± 25919.763541026514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2872367.769230769,
            "unit": "ns",
            "range": "± 35846.54787691986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22196.65,
            "unit": "ns",
            "range": "± 7634.901633752115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66213.11111111111,
            "unit": "ns",
            "range": "± 8279.009242569353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73691.91,
            "unit": "ns",
            "range": "± 17885.222615386123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91213.6237113402,
            "unit": "ns",
            "range": "± 13946.704222576602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3037.088888888889,
            "unit": "ns",
            "range": "± 486.7829879969574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23722.25,
            "unit": "ns",
            "range": "± 3900.3963289295707"
          }
        ]
      }
    ]
  }
}