window.BENCHMARK_DATA = {
  "lastUpdate": 1687488598401,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c59018e3f7b058437f3ded9b3e3cc54e59ec2c53",
          "message": "Merge pull request #3240 from greymistcube/release/2.2.0\n\n🚀 Release 2.2.0",
          "timestamp": "2023-06-23T11:31:50+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/greymistcube/libplanet/commit/c59018e3f7b058437f3ded9b3e3cc54e59ec2c53"
        },
        "date": 1687488574956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1324380.612244898,
            "unit": "ns",
            "range": "± 77174.74168573853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2522729.1666666665,
            "unit": "ns",
            "range": "± 99296.95193267801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2519273.529411765,
            "unit": "ns",
            "range": "± 50886.129365129615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4970825.925925926,
            "unit": "ns",
            "range": "± 128895.09029437196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43262.31884057971,
            "unit": "ns",
            "range": "± 1948.0836321939994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7030480,
            "unit": "ns",
            "range": "± 66174.2202717299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17841061.53846154,
            "unit": "ns",
            "range": "± 119812.48918248282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45892566.666666664,
            "unit": "ns",
            "range": "± 412237.0168910576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91939578.57142857,
            "unit": "ns",
            "range": "± 367791.33126223675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182082246.15384614,
            "unit": "ns",
            "range": "± 1165392.330659068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4814432.061298077,
            "unit": "ns",
            "range": "± 7692.528370983198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1506906.640625,
            "unit": "ns",
            "range": "± 4423.282221623639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159725.2371651786,
            "unit": "ns",
            "range": "± 12376.555878301358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630166.824776786,
            "unit": "ns",
            "range": "± 22181.828261027018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809318.7434895834,
            "unit": "ns",
            "range": "± 4929.313876407552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736634.43359375,
            "unit": "ns",
            "range": "± 1926.5781475939268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3070907.6923076925,
            "unit": "ns",
            "range": "± 34478.627716757655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3360526.6666666665,
            "unit": "ns",
            "range": "± 56020.282891450086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4034964.285714286,
            "unit": "ns",
            "range": "± 70020.88267787697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3976809.6153846155,
            "unit": "ns",
            "range": "± 163339.46038081622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6495232.352941177,
            "unit": "ns",
            "range": "± 207974.42838234358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278146.5517241379,
            "unit": "ns",
            "range": "± 12092.468520460588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257448.88888888888,
            "unit": "ns",
            "range": "± 9654.029357127665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231505.05050505052,
            "unit": "ns",
            "range": "± 15284.842256416836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3907593.3333333335,
            "unit": "ns",
            "range": "± 43408.4334575448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3515133.3333333335,
            "unit": "ns",
            "range": "± 43871.006805124016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19222.105263157893,
            "unit": "ns",
            "range": "± 2098.944970408179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89053.125,
            "unit": "ns",
            "range": "± 7940.355992616054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72332.60869565218,
            "unit": "ns",
            "range": "± 4733.49320851825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92078.125,
            "unit": "ns",
            "range": "± 12089.779965130181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4729.473684210527,
            "unit": "ns",
            "range": "± 722.1235946860064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18465.625,
            "unit": "ns",
            "range": "± 2307.736559123634"
          }
        ]
      }
    ]
  }
}