window.BENCHMARK_DATA = {
  "lastUpdate": 1684852643249,
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
          "id": "ef9b7fec3272cc9e82f994b5aaebab995dfe308a",
          "message": "General API cleanup",
          "timestamp": "2023-05-23T23:18:54+09:00",
          "tree_id": "565b5fb8fbdef0e8a1818599d15cee840714f42b",
          "url": "https://github.com/greymistcube/libplanet/commit/ef9b7fec3272cc9e82f994b5aaebab995dfe308a"
        },
        "date": 1684852615197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428719,
            "unit": "ns",
            "range": "± 145852.20255069475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2674235.714285714,
            "unit": "ns",
            "range": "± 114538.91983009163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235773.737373737,
            "unit": "ns",
            "range": "± 152718.18622966047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5468052.542372881,
            "unit": "ns",
            "range": "± 234526.06821941858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53003.092783505155,
            "unit": "ns",
            "range": "± 4233.139438019755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7783706.666666667,
            "unit": "ns",
            "range": "± 134595.55005734065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20512820,
            "unit": "ns",
            "range": "± 215650.1969128974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51599950,
            "unit": "ns",
            "range": "± 327797.101291919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104380366.66666667,
            "unit": "ns",
            "range": "± 950235.2563344261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203500492.85714287,
            "unit": "ns",
            "range": "± 912523.4281201398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893139.693509615,
            "unit": "ns",
            "range": "± 25642.65848705857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533215.3515625,
            "unit": "ns",
            "range": "± 5107.846566161547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166207.8580729167,
            "unit": "ns",
            "range": "± 3128.76994843357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639259.598214286,
            "unit": "ns",
            "range": "± 10856.797536997694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845630.7552083334,
            "unit": "ns",
            "range": "± 2520.643558563371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774893.4049479166,
            "unit": "ns",
            "range": "± 2012.6991294859372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361960.8695652173,
            "unit": "ns",
            "range": "± 82337.00559358821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3490869.230769231,
            "unit": "ns",
            "range": "± 85672.02469525636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218592.857142857,
            "unit": "ns",
            "range": "± 73967.67968080814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4271007.692307692,
            "unit": "ns",
            "range": "± 165965.2525009599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6788433.333333333,
            "unit": "ns",
            "range": "± 183210.49264543943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278556.0975609756,
            "unit": "ns",
            "range": "± 8981.03693290724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270184.693877551,
            "unit": "ns",
            "range": "± 10634.33023710646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258308.88888888888,
            "unit": "ns",
            "range": "± 9630.156758429179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180314.285714286,
            "unit": "ns",
            "range": "± 54546.16756110731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3880300,
            "unit": "ns",
            "range": "± 23709.316031186278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24784.042553191488,
            "unit": "ns",
            "range": "± 2455.772361324004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105737.8947368421,
            "unit": "ns",
            "range": "± 8380.082502861129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95763.54166666667,
            "unit": "ns",
            "range": "± 6633.092789652528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111332.79569892473,
            "unit": "ns",
            "range": "± 12027.338637778825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7156.060606060606,
            "unit": "ns",
            "range": "± 1185.5265068020374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21754.255319148935,
            "unit": "ns",
            "range": "± 2354.1619467966925"
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
          "id": "cc37e67adfedc3fb1d9656b2734f7d350281f506",
          "message": "Changelog",
          "timestamp": "2023-05-23T23:22:22+09:00",
          "tree_id": "46e8d622c6bd7a7166d64b3f07bde91b31e44386",
          "url": "https://github.com/greymistcube/libplanet/commit/cc37e67adfedc3fb1d9656b2734f7d350281f506"
        },
        "date": 1684852622274,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301943.298969072,
            "unit": "ns",
            "range": "± 92509.21227461674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2412846.153846154,
            "unit": "ns",
            "range": "± 65643.0299774118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104225.2525252528,
            "unit": "ns",
            "range": "± 161856.20624078665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5232381.481481481,
            "unit": "ns",
            "range": "± 274511.71792434977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46846.153846153844,
            "unit": "ns",
            "range": "± 2435.276048124613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6862953.846153846,
            "unit": "ns",
            "range": "± 30698.930909306255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19287985.714285713,
            "unit": "ns",
            "range": "± 169461.78537740215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48523555.55555555,
            "unit": "ns",
            "range": "± 974721.9979063848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95763726.66666667,
            "unit": "ns",
            "range": "± 1388855.3598797345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190884238.46153846,
            "unit": "ns",
            "range": "± 1647956.773067011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4729181.171875,
            "unit": "ns",
            "range": "± 15209.922671751625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507710.365513393,
            "unit": "ns",
            "range": "± 3892.608204971994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166015.8333333333,
            "unit": "ns",
            "range": "± 4503.247088302644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646357.34375,
            "unit": "ns",
            "range": "± 8683.65331402078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829145.9895833334,
            "unit": "ns",
            "range": "± 2688.9604794923866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760608.2449776785,
            "unit": "ns",
            "range": "± 1967.824985946439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3060039.393939394,
            "unit": "ns",
            "range": "± 96040.18670390647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3190682.222222222,
            "unit": "ns",
            "range": "± 119047.39562056956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959559.2592592593,
            "unit": "ns",
            "range": "± 107272.69442249024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4035404.6511627906,
            "unit": "ns",
            "range": "± 142378.2603681849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6502293.939393939,
            "unit": "ns",
            "range": "± 200012.21203246867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261601.06382978722,
            "unit": "ns",
            "range": "± 10130.257568733416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248097.72727272726,
            "unit": "ns",
            "range": "± 8350.504472613968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216596.22641509434,
            "unit": "ns",
            "range": "± 8945.819011913007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3851038.2352941176,
            "unit": "ns",
            "range": "± 59592.815027830125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3529821.4285714286,
            "unit": "ns",
            "range": "± 43175.33445723965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18585.106382978724,
            "unit": "ns",
            "range": "± 1387.5760133636086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83287.5,
            "unit": "ns",
            "range": "± 4275.818820094986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69588.23529411765,
            "unit": "ns",
            "range": "± 1357.3330251550171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87001.72413793103,
            "unit": "ns",
            "range": "± 10143.090924585591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5176.595744680851,
            "unit": "ns",
            "range": "± 600.434525794981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17294.38202247191,
            "unit": "ns",
            "range": "± 1302.5638660456082"
          }
        ]
      }
    ]
  }
}