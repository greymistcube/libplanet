window.BENCHMARK_DATA = {
  "lastUpdate": 1692936023662,
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
          "id": "9f4f5fa28aac0d1837b5d7deb5411d178b479e04",
          "message": "Working",
          "timestamp": "2023-08-25T10:57:14+09:00",
          "tree_id": "4a7c6f0876e8fe4c8e1abbb80d241a5e7e06180e",
          "url": "https://github.com/greymistcube/libplanet/commit/9f4f5fa28aac0d1837b5d7deb5411d178b479e04"
        },
        "date": 1692930496622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11539989.283505155,
            "unit": "ns",
            "range": "± 3987391.74612436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 37634655.6368421,
            "unit": "ns",
            "range": "± 8809277.72195051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76771572.4,
            "unit": "ns",
            "range": "± 23242971.231705237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 175722891.47,
            "unit": "ns",
            "range": "± 52573623.098219715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216020527.66216215,
            "unit": "ns",
            "range": "± 4844299.933488548"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80213.47252747252,
            "unit": "ns",
            "range": "± 6295.2059384558825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318960.06043956045,
            "unit": "ns",
            "range": "± 25059.921351835794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313302.43684210523,
            "unit": "ns",
            "range": "± 22916.040161818888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322429.2555555556,
            "unit": "ns",
            "range": "± 19922.23905296279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4280904.1,
            "unit": "ns",
            "range": "± 97489.63684353435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830307.04,
            "unit": "ns",
            "range": "± 90888.6849560494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29024.13829787234,
            "unit": "ns",
            "range": "± 3889.216131877089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126417.22727272728,
            "unit": "ns",
            "range": "± 8877.711078523023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124107.43103448275,
            "unit": "ns",
            "range": "± 5466.373191027244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119836.53684210527,
            "unit": "ns",
            "range": "± 17060.111052499866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8301.112244897959,
            "unit": "ns",
            "range": "± 1496.2816723268722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24811.666666666668,
            "unit": "ns",
            "range": "± 3195.533444197143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707166.5567010308,
            "unit": "ns",
            "range": "± 228621.56305307834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3332706.282352941,
            "unit": "ns",
            "range": "± 429338.6302872631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250921.911764706,
            "unit": "ns",
            "range": "± 313495.6955422687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10615116.216494845,
            "unit": "ns",
            "range": "± 4657960.622136449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333704.523809524,
            "unit": "ns",
            "range": "± 201069.79231525114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3738795.018987342,
            "unit": "ns",
            "range": "± 477242.9586038385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4615879.7625,
            "unit": "ns",
            "range": "± 241203.6080405218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063536.6075268816,
            "unit": "ns",
            "range": "± 247067.0338934822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7205852.511363637,
            "unit": "ns",
            "range": "± 512135.7075702295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5789905.4672771515,
            "unit": "ns",
            "range": "± 261371.74142987386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777518.7897359913,
            "unit": "ns",
            "range": "± 50768.8857551855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1019091.5240234375,
            "unit": "ns",
            "range": "± 22290.96019041141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3040463.668370864,
            "unit": "ns",
            "range": "± 144889.04688591594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825321.5384114584,
            "unit": "ns",
            "range": "± 19287.62764774708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735861.7668585526,
            "unit": "ns",
            "range": "± 12280.178070343485"
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
          "id": "9ffedb2984347af8029901317beef0e3790e5ce1",
          "message": "More stuff",
          "timestamp": "2023-08-25T12:41:34+09:00",
          "tree_id": "08444b96c43b54f0efef06d65c0e3eef7bd25c1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9ffedb2984347af8029901317beef0e3790e5ce1"
        },
        "date": 1692936001512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8801007.3,
            "unit": "ns",
            "range": "± 125576.25815654805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21445724.9,
            "unit": "ns",
            "range": "± 253655.13026486518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53836522.9,
            "unit": "ns",
            "range": "± 785247.143950307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105705115.5,
            "unit": "ns",
            "range": "± 802768.7295999107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244280862.75,
            "unit": "ns",
            "range": "± 2435679.117651253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71565.83333333333,
            "unit": "ns",
            "range": "± 10436.073896438727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334965.08490566036,
            "unit": "ns",
            "range": "± 13738.124143354846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325183.73913043475,
            "unit": "ns",
            "range": "± 21503.832011874896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295498.23333333334,
            "unit": "ns",
            "range": "± 14832.159523047112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4091529.0555555555,
            "unit": "ns",
            "range": "± 84468.54963585541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824929.2666666666,
            "unit": "ns",
            "range": "± 67485.17465283623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18095.102150537634,
            "unit": "ns",
            "range": "± 2587.6974242674783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89515.23404255319,
            "unit": "ns",
            "range": "± 10335.160715726866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97919.23,
            "unit": "ns",
            "range": "± 17792.8270309877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96310.47422680413,
            "unit": "ns",
            "range": "± 16117.384569343118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6455.48969072165,
            "unit": "ns",
            "range": "± 1224.615003232694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25147.117021276597,
            "unit": "ns",
            "range": "± 3706.2466648885475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508958.90625,
            "unit": "ns",
            "range": "± 156459.9292158978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842865.4588235295,
            "unit": "ns",
            "range": "± 153565.01225326848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1992806.37,
            "unit": "ns",
            "range": "± 181001.66621509174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5666544.555555556,
            "unit": "ns",
            "range": "± 278212.4360257412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3378851.464285714,
            "unit": "ns",
            "range": "± 84132.92699342011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3574450.2419354836,
            "unit": "ns",
            "range": "± 107020.95509726675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4547165.357142857,
            "unit": "ns",
            "range": "± 58651.192874756336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4043596,
            "unit": "ns",
            "range": "± 66867.92395585994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6887489,
            "unit": "ns",
            "range": "± 237882.47109842865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5385556.411830357,
            "unit": "ns",
            "range": "± 93040.7935421895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1716154.3922061012,
            "unit": "ns",
            "range": "± 40311.02979940686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1021231.734375,
            "unit": "ns",
            "range": "± 14211.545507393019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698899.685997596,
            "unit": "ns",
            "range": "± 26212.347668906183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794389.6123798077,
            "unit": "ns",
            "range": "± 12374.391594551182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718620.443359375,
            "unit": "ns",
            "range": "± 9145.730180357046"
          }
        ]
      }
    ]
  }
}