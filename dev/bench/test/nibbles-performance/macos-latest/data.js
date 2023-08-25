window.BENCHMARK_DATA = {
  "lastUpdate": 1692930521623,
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
      }
    ]
  }
}