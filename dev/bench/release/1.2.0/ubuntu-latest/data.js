window.BENCHMARK_DATA = {
  "lastUpdate": 1684212378541,
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
          "id": "67095a318905220de755f1bdc333bf41106d38a8",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:26:31+09:00",
          "tree_id": "9b93bd801f7c90769d2c2ecbc0ee7ad86ce2f3d1",
          "url": "https://github.com/greymistcube/libplanet/commit/67095a318905220de755f1bdc333bf41106d38a8"
        },
        "date": 1684211904210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147732.6,
            "unit": "ns",
            "range": "± 33595.08619213742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376584.933333333,
            "unit": "ns",
            "range": "± 54329.472928035066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4188274.3333333335,
            "unit": "ns",
            "range": "± 58415.65368566725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4076826.880952381,
            "unit": "ns",
            "range": "± 147663.09343168573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6747779.923076923,
            "unit": "ns",
            "range": "± 234832.9002894101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269459.8611111111,
            "unit": "ns",
            "range": "± 6849.410532104321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263822.32352941175,
            "unit": "ns",
            "range": "± 8492.712404353862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222768.23076923078,
            "unit": "ns",
            "range": "± 1237.8641655317808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4083610.0714285714,
            "unit": "ns",
            "range": "± 47374.00599722674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808689.9285714286,
            "unit": "ns",
            "range": "± 27765.50534376253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14819.957894736843,
            "unit": "ns",
            "range": "± 1077.5265402841812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79879.98039215687,
            "unit": "ns",
            "range": "± 2976.3211553204137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68838.90909090909,
            "unit": "ns",
            "range": "± 1849.6558525107507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75931.36585365854,
            "unit": "ns",
            "range": "± 5212.350427169086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4122.670103092783,
            "unit": "ns",
            "range": "± 470.71476504818105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15809.010752688173,
            "unit": "ns",
            "range": "± 1252.6361810426185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6193268.825,
            "unit": "ns",
            "range": "± 15035.57588673972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974072.7942708333,
            "unit": "ns",
            "range": "± 1832.5065460906956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334228.2919921875,
            "unit": "ns",
            "range": "± 2540.7825731923144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586241.336197917,
            "unit": "ns",
            "range": "± 7214.363027482515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792422.9723074777,
            "unit": "ns",
            "range": "± 893.784153331277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741850.5293619792,
            "unit": "ns",
            "range": "± 835.6609031232896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7435226.2,
            "unit": "ns",
            "range": "± 15231.377018697762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18676935.466666665,
            "unit": "ns",
            "range": "± 75301.53466645823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48044910.46666667,
            "unit": "ns",
            "range": "± 463587.3051654374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96453659.33333333,
            "unit": "ns",
            "range": "± 1103820.9522146028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196107937.46666667,
            "unit": "ns",
            "range": "± 1446806.4607547037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1279252.8617021276,
            "unit": "ns",
            "range": "± 76062.47870143646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2487306.217391304,
            "unit": "ns",
            "range": "± 61115.36616251157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2069918.1625,
            "unit": "ns",
            "range": "± 104410.90824098524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4991045.48,
            "unit": "ns",
            "range": "± 131705.0611812621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45086.76190476191,
            "unit": "ns",
            "range": "± 2311.334281209692"
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
          "id": "cea4a5752a563ddb2b7e85eaac110aff3047349e",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:23:52+09:00",
          "tree_id": "d379f6d07130960ff174b24bd1135526adb623d0",
          "url": "https://github.com/greymistcube/libplanet/commit/cea4a5752a563ddb2b7e85eaac110aff3047349e"
        },
        "date": 1684212064097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3531479.242424242,
            "unit": "ns",
            "range": "± 379160.149498031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660415.35106383,
            "unit": "ns",
            "range": "± 293433.34074858547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4874993.707070707,
            "unit": "ns",
            "range": "± 381761.3345541643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4840938.46,
            "unit": "ns",
            "range": "± 491609.4354920957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8260644.939393939,
            "unit": "ns",
            "range": "± 660606.6166154087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333366,
            "unit": "ns",
            "range": "± 25321.5454031575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330512.0786516854,
            "unit": "ns",
            "range": "± 18202.050445950463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269431.27659574465,
            "unit": "ns",
            "range": "± 27586.396259167916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4612289.206185567,
            "unit": "ns",
            "range": "± 351303.0274824458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4304513.473118279,
            "unit": "ns",
            "range": "± 304208.1706348678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21918.79,
            "unit": "ns",
            "range": "± 7240.40115286746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100755.8829787234,
            "unit": "ns",
            "range": "± 10611.245114435525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102357.70833333333,
            "unit": "ns",
            "range": "± 14983.18149963075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115340.9213483146,
            "unit": "ns",
            "range": "± 13386.158094383709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11983.232323232323,
            "unit": "ns",
            "range": "± 5528.926534974816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24380.397959183672,
            "unit": "ns",
            "range": "± 5853.915444885764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6440585.998139881,
            "unit": "ns",
            "range": "± 120442.63438451286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037894.674107143,
            "unit": "ns",
            "range": "± 34184.75545543174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1497653.2700892857,
            "unit": "ns",
            "range": "± 54492.71962212161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2858317.0072115385,
            "unit": "ns",
            "range": "± 40945.92315127379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925620.6006510417,
            "unit": "ns",
            "range": "± 16947.13567135463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856367.1194661459,
            "unit": "ns",
            "range": "± 10269.255976384005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8523196.031914894,
            "unit": "ns",
            "range": "± 466341.68712320045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21555341.575,
            "unit": "ns",
            "range": "± 764729.2353637964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60728081.67676768,
            "unit": "ns",
            "range": "± 5407535.558806047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111427136.875,
            "unit": "ns",
            "range": "± 5809175.461285303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225259984.97142857,
            "unit": "ns",
            "range": "± 10925055.404354006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575857.1326530613,
            "unit": "ns",
            "range": "± 194401.01274404422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2961440.3333333335,
            "unit": "ns",
            "range": "± 306516.30411498307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2595145.1836734693,
            "unit": "ns",
            "range": "± 289873.838260871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6483643.126315789,
            "unit": "ns",
            "range": "± 566211.4846077455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59120.24731182796,
            "unit": "ns",
            "range": "± 8004.519274672704"
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
          "id": "a2160f7a74419656fd340bd3a78c6be676ba4dd1",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:27:21+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/greymistcube/libplanet/commit/a2160f7a74419656fd340bd3a78c6be676ba4dd1"
        },
        "date": 1684212369038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4295621.967032967,
            "unit": "ns",
            "range": "± 261749.98986048799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4508708.860215054,
            "unit": "ns",
            "range": "± 258179.85303910807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5842784.268656717,
            "unit": "ns",
            "range": "± 274241.90948645177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5708064.791208792,
            "unit": "ns",
            "range": "± 352444.5965589018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9117768.045454545,
            "unit": "ns",
            "range": "± 223266.03807298446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379536.9784946237,
            "unit": "ns",
            "range": "± 26505.14280244107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368686.28723404254,
            "unit": "ns",
            "range": "± 36915.74990292225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327088.2551020408,
            "unit": "ns",
            "range": "± 32699.522992299793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5435182.677083333,
            "unit": "ns",
            "range": "± 453518.1270726961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4980583.23655914,
            "unit": "ns",
            "range": "± 413381.06835109857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25580.918367346938,
            "unit": "ns",
            "range": "± 9727.65859419553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115732.08163265306,
            "unit": "ns",
            "range": "± 21207.75275800842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122313.64285714286,
            "unit": "ns",
            "range": "± 30767.698749419855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137051.07368421054,
            "unit": "ns",
            "range": "± 24320.868471266414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7194.731182795699,
            "unit": "ns",
            "range": "± 1338.0722192424325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24797.177083333332,
            "unit": "ns",
            "range": "± 7141.266630971511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7491690.557528409,
            "unit": "ns",
            "range": "± 179318.90090859047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2398877.4947916665,
            "unit": "ns",
            "range": "± 42237.12927179013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1738087.4808872768,
            "unit": "ns",
            "range": "± 49095.11629883331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3341721.131417411,
            "unit": "ns",
            "range": "± 58444.355566457176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1069604.7373046875,
            "unit": "ns",
            "range": "± 23799.574435858827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1027510.8739659926,
            "unit": "ns",
            "range": "± 21069.02653858019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10357897.365591398,
            "unit": "ns",
            "range": "± 791075.332381002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29104265.225,
            "unit": "ns",
            "range": "± 977520.802547208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73319443.64705883,
            "unit": "ns",
            "range": "± 2343116.3007218307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147420876.41666666,
            "unit": "ns",
            "range": "± 3785766.9901906895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296686706.65217394,
            "unit": "ns",
            "range": "± 7463226.8613679595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1878850.4897959183,
            "unit": "ns",
            "range": "± 182451.13541666378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3629391.957894737,
            "unit": "ns",
            "range": "± 272698.9753901323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2953393.138297872,
            "unit": "ns",
            "range": "± 256194.73545733906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7574053.819148936,
            "unit": "ns",
            "range": "± 553785.7989934329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67481.24742268042,
            "unit": "ns",
            "range": "± 12983.154940498001"
          }
        ]
      }
    ]
  }
}