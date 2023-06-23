window.BENCHMARK_DATA = {
  "lastUpdate": 1687488604406,
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
          "id": "2641c8b47244fea95d46e0e36a4917fa43409b67",
          "message": "Prepare 2.2.1",
          "timestamp": "2023-06-23T11:35:37+09:00",
          "tree_id": "58bd13e35f132365d6012e0272eec3219a5dbcbb",
          "url": "https://github.com/greymistcube/libplanet/commit/2641c8b47244fea95d46e0e36a4917fa43409b67"
        },
        "date": 1687488581334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339407.0707070706,
            "unit": "ns",
            "range": "± 111085.61531128496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2427545.238095238,
            "unit": "ns",
            "range": "± 88280.89648439389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076440.206185567,
            "unit": "ns",
            "range": "± 124760.95948836337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5049506.976744186,
            "unit": "ns",
            "range": "± 186098.86312099817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43709.89010989011,
            "unit": "ns",
            "range": "± 2463.6041774898704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6769176.923076923,
            "unit": "ns",
            "range": "± 25168.007266042932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17111346.666666668,
            "unit": "ns",
            "range": "± 109511.38144807903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44647500,
            "unit": "ns",
            "range": "± 374090.00635828654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88959920,
            "unit": "ns",
            "range": "± 1611220.7874776195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178515386.66666666,
            "unit": "ns",
            "range": "± 1996080.0359227892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4873228.098958333,
            "unit": "ns",
            "range": "± 12482.070438060844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496550.751201923,
            "unit": "ns",
            "range": "± 2294.949243307212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142175.3776041667,
            "unit": "ns",
            "range": "± 1259.9336506046711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583788.058035714,
            "unit": "ns",
            "range": "± 17547.587676621562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802335.5538504465,
            "unit": "ns",
            "range": "± 2661.6504178777946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751207.705078125,
            "unit": "ns",
            "range": "± 1010.6274222877336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3002340,
            "unit": "ns",
            "range": "± 88630.84463486544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3166715.789473684,
            "unit": "ns",
            "range": "± 70827.94255558454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4014396.4285714286,
            "unit": "ns",
            "range": "± 108895.22141045376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4091742.8571428573,
            "unit": "ns",
            "range": "± 70825.6006983754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6487697.368421053,
            "unit": "ns",
            "range": "± 222010.11845316945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263082.4324324324,
            "unit": "ns",
            "range": "± 8680.983496959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245653.96825396825,
            "unit": "ns",
            "range": "± 11236.372755860913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215747.22222222222,
            "unit": "ns",
            "range": "± 10538.567294750179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3834061.5384615385,
            "unit": "ns",
            "range": "± 25536.788445350052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3507196.6666666665,
            "unit": "ns",
            "range": "± 31702.678270515404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18331.9587628866,
            "unit": "ns",
            "range": "± 2155.3492752409734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84218.68131868132,
            "unit": "ns",
            "range": "± 4708.642458003559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70484.52380952382,
            "unit": "ns",
            "range": "± 3740.868208214973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89907.21649484536,
            "unit": "ns",
            "range": "± 15595.801033602767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4270.103092783505,
            "unit": "ns",
            "range": "± 627.1903200739803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17295.833333333332,
            "unit": "ns",
            "range": "± 2183.7156488626715"
          }
        ]
      }
    ]
  }
}