window.BENCHMARK_DATA = {
  "lastUpdate": 1694144826385,
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
          "id": "56c2868a1338e43d8ba89ae90ea44bca551c71b7",
          "message": "Merge tag '3.3.1' into merge/3.3.1-to-main\n\nLibplanet 3.3.1",
          "timestamp": "2023-09-08T12:32:53+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/greymistcube/libplanet/commit/56c2868a1338e43d8ba89ae90ea44bca551c71b7"
        },
        "date": 1694144819128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408170.224489796,
            "unit": "ns",
            "range": "± 83227.15292691573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2673772.769230769,
            "unit": "ns",
            "range": "± 89992.64495456852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817866.0319148935,
            "unit": "ns",
            "range": "± 103068.62354025517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4698646.8,
            "unit": "ns",
            "range": "± 163836.15969404406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273351.5862068966,
            "unit": "ns",
            "range": "± 11843.50997942708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260467.46511627908,
            "unit": "ns",
            "range": "± 8909.547357293151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225325.42857142858,
            "unit": "ns",
            "range": "± 2985.3948512018333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4405285.733333333,
            "unit": "ns",
            "range": "± 46153.6433966047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915268.222222222,
            "unit": "ns",
            "range": "± 79043.40261010407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20171.831578947367,
            "unit": "ns",
            "range": "± 1664.1950495125109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86137.5,
            "unit": "ns",
            "range": "± 6042.3001739795345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71151.78571428571,
            "unit": "ns",
            "range": "± 1252.3486353230894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80152.9587628866,
            "unit": "ns",
            "range": "± 14001.201573375116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4896.86170212766,
            "unit": "ns",
            "range": "± 516.4985422137216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18501.305263157894,
            "unit": "ns",
            "range": "± 1453.832287685442"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48959.98717948718,
            "unit": "ns",
            "range": "± 2434.5345724078525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7879034.666666667,
            "unit": "ns",
            "range": "± 46639.48175046953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21651801.529411763,
            "unit": "ns",
            "range": "± 417948.2703560809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55358064.958333336,
            "unit": "ns",
            "range": "± 1389245.0964255335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108468633.21428572,
            "unit": "ns",
            "range": "± 1538717.650072002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219980100.33333334,
            "unit": "ns",
            "range": "± 3263864.683828418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365436.057142857,
            "unit": "ns",
            "range": "± 156826.36078916548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3576654.023255814,
            "unit": "ns",
            "range": "± 132092.28223255213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4227273,
            "unit": "ns",
            "range": "± 69870.34626748647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3882190.98,
            "unit": "ns",
            "range": "± 156565.16052645002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6016827.260869565,
            "unit": "ns",
            "range": "± 151787.7886923407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4926122.540104167,
            "unit": "ns",
            "range": "± 31936.952274247258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549763.571986607,
            "unit": "ns",
            "range": "± 8538.766620539434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076610.7493489583,
            "unit": "ns",
            "range": "± 4046.928866592984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605684.4234375,
            "unit": "ns",
            "range": "± 9226.58212357504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828539.4637276785,
            "unit": "ns",
            "range": "± 1698.7165097196666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748976.692578125,
            "unit": "ns",
            "range": "± 1320.3914774577615"
          }
        ]
      }
    ]
  }
}