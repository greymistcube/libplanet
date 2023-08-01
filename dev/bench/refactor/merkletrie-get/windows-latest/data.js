window.BENCHMARK_DATA = {
  "lastUpdate": 1690874906321,
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
          "id": "97d0159a1bc6953ac6c44c96cbdfe29a75db0436",
          "message": "Cleanup and optimize Get()",
          "timestamp": "2023-08-01T16:03:20+09:00",
          "tree_id": "839690871fa2434a8c18fc659198a5124016dda8",
          "url": "https://github.com/greymistcube/libplanet/commit/97d0159a1bc6953ac6c44c96cbdfe29a75db0436"
        },
        "date": 1690874544006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497208.762886598,
            "unit": "ns",
            "range": "± 268489.5838112165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2804155.6701030927,
            "unit": "ns",
            "range": "± 370055.4640211248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1982881.914893617,
            "unit": "ns",
            "range": "± 278016.9306992536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5375398.936170213,
            "unit": "ns",
            "range": "± 646516.5411308864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60605.31914893617,
            "unit": "ns",
            "range": "± 14875.861713695971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7743250.52631579,
            "unit": "ns",
            "range": "± 734648.5455679056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22761505.154639177,
            "unit": "ns",
            "range": "± 1953687.7559060764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56677140.81632653,
            "unit": "ns",
            "range": "± 5508714.780205729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111766206,
            "unit": "ns",
            "range": "± 8295880.33570929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215453648,
            "unit": "ns",
            "range": "± 14982701.750233853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5080481.808035715,
            "unit": "ns",
            "range": "± 89831.17422041799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1725506.263950893,
            "unit": "ns",
            "range": "± 48111.273303888265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308767.1440972222,
            "unit": "ns",
            "range": "± 26701.05221226721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2933901.1584051726,
            "unit": "ns",
            "range": "± 83154.95745404945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955254.0183738426,
            "unit": "ns",
            "range": "± 25812.26055574479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860316.1671605604,
            "unit": "ns",
            "range": "± 20975.201773482248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3030286.597938144,
            "unit": "ns",
            "range": "± 316270.4890032376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3332675,
            "unit": "ns",
            "range": "± 411856.1759694888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4378726.595744681,
            "unit": "ns",
            "range": "± 458810.1512351906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3680548.947368421,
            "unit": "ns",
            "range": "± 414201.8493683445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6688972.164948453,
            "unit": "ns",
            "range": "± 675158.1607517154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285666.3043478261,
            "unit": "ns",
            "range": "± 46818.1360491332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303806.4516129032,
            "unit": "ns",
            "range": "± 46639.39789689758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253085.56701030929,
            "unit": "ns",
            "range": "± 42979.61723715364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4010297.8494623657,
            "unit": "ns",
            "range": "± 341059.20465848956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3679360,
            "unit": "ns",
            "range": "± 374716.64426518563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27957.14285714286,
            "unit": "ns",
            "range": "± 9689.765032845356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94866.66666666667,
            "unit": "ns",
            "range": "± 16453.923368087584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99390.72164948453,
            "unit": "ns",
            "range": "± 21700.46122049323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124610.41666666667,
            "unit": "ns",
            "range": "± 22126.071685810246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4938.235294117647,
            "unit": "ns",
            "range": "± 1052.8206744498418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29426.262626262625,
            "unit": "ns",
            "range": "± 9531.361616099466"
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
          "id": "39bfc83cad31341f8c57087f3f28e786aa89e1a5",
          "message": "Changelog",
          "timestamp": "2023-08-01T16:10:13+09:00",
          "tree_id": "ba6404f6277445f51938c6f9e4983a5a2d246e59",
          "url": "https://github.com/greymistcube/libplanet/commit/39bfc83cad31341f8c57087f3f28e786aa89e1a5"
        },
        "date": 1690874876915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648831.111111111,
            "unit": "ns",
            "range": "± 91174.4652978402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064853.3333333335,
            "unit": "ns",
            "range": "± 56959.69585927362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105233.3333333335,
            "unit": "ns",
            "range": "± 120606.19925296382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5872031.632653061,
            "unit": "ns",
            "range": "± 331967.4625705874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54834.28571428572,
            "unit": "ns",
            "range": "± 2584.0584703241198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8916728.57142857,
            "unit": "ns",
            "range": "± 151385.74482514441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24891164.285714287,
            "unit": "ns",
            "range": "± 393005.7987576555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61437023.07692308,
            "unit": "ns",
            "range": "± 1012508.0930983927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123794133.33333333,
            "unit": "ns",
            "range": "± 2492040.754552971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252764811.9047619,
            "unit": "ns",
            "range": "± 5968043.716619056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6217749.114583333,
            "unit": "ns",
            "range": "± 66309.16382096802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054352.0833333333,
            "unit": "ns",
            "range": "± 23777.56537526063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1515504.8549107143,
            "unit": "ns",
            "range": "± 12776.774125034424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3392426.796875,
            "unit": "ns",
            "range": "± 21526.25298217428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1069674.720982143,
            "unit": "ns",
            "range": "± 7503.897044237403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981884.1536458334,
            "unit": "ns",
            "range": "± 9597.97392220653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3984977.419354839,
            "unit": "ns",
            "range": "± 120598.77199396191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4179068.1818181816,
            "unit": "ns",
            "range": "± 155360.09674859763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5111843.58974359,
            "unit": "ns",
            "range": "± 178850.95646621488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4517043.333333333,
            "unit": "ns",
            "range": "± 198698.3305540632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7532779.487179487,
            "unit": "ns",
            "range": "± 260421.35208308618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319285.71428571426,
            "unit": "ns",
            "range": "± 9089.176073392004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304506.9767441861,
            "unit": "ns",
            "range": "± 8036.97986834658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276089.4736842105,
            "unit": "ns",
            "range": "± 9133.707677155055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5119935.294117647,
            "unit": "ns",
            "range": "± 102541.97275491919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4627050,
            "unit": "ns",
            "range": "± 65529.83759620205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23496.875,
            "unit": "ns",
            "range": "± 2059.864743898952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102351.85185185185,
            "unit": "ns",
            "range": "± 5407.589830763589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88700,
            "unit": "ns",
            "range": "± 2332.38075793812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98926.58227848102,
            "unit": "ns",
            "range": "± 5009.982569721445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5701.030927835051,
            "unit": "ns",
            "range": "± 835.6004384773296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21786.813186813186,
            "unit": "ns",
            "range": "± 1470.3898796055412"
          }
        ]
      }
    ]
  }
}