window.BENCHMARK_DATA = {
  "lastUpdate": 1692936079552,
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
        "date": 1692929648922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675730.8780487804,
            "unit": "ns",
            "range": "± 88141.5260973797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3256946.9411764704,
            "unit": "ns",
            "range": "± 174713.2528111183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146381.7204301073,
            "unit": "ns",
            "range": "± 120743.28627562852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5541898.0869565215,
            "unit": "ns",
            "range": "± 133069.12272161857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306925.53571428574,
            "unit": "ns",
            "range": "± 16255.504829557567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316442.42553191487,
            "unit": "ns",
            "range": "± 12226.303251853786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265253.3058823529,
            "unit": "ns",
            "range": "± 14361.47985064771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5029900.439024391,
            "unit": "ns",
            "range": "± 180943.03159614198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4606568.409090909,
            "unit": "ns",
            "range": "± 110943.49237322363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23358.31182795699,
            "unit": "ns",
            "range": "± 1908.9537253740461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106133.24175824175,
            "unit": "ns",
            "range": "± 5767.773418535979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86265.86538461539,
            "unit": "ns",
            "range": "± 3273.6225543856153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90579.08163265306,
            "unit": "ns",
            "range": "± 13577.68415009958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6074.7692307692305,
            "unit": "ns",
            "range": "± 560.851279097193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23000.76842105263,
            "unit": "ns",
            "range": "± 1782.9313864474411"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52628.34065934066,
            "unit": "ns",
            "range": "± 3643.6973566840347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9150099.25,
            "unit": "ns",
            "range": "± 86013.58386602243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25040634.846153848,
            "unit": "ns",
            "range": "± 366659.3775840292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62808635.5862069,
            "unit": "ns",
            "range": "± 1799747.8897248462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119045488.78571428,
            "unit": "ns",
            "range": "± 1250994.7693005803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240267254,
            "unit": "ns",
            "range": "± 3457937.4415526506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3778005.5423728814,
            "unit": "ns",
            "range": "± 164752.41185794855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3984366.0361445784,
            "unit": "ns",
            "range": "± 211174.06620995162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4991517.509803922,
            "unit": "ns",
            "range": "± 201757.81849458747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479867.1,
            "unit": "ns",
            "range": "± 82827.32115094695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7005818.324324325,
            "unit": "ns",
            "range": "± 233297.6294334788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908588.9171875,
            "unit": "ns",
            "range": "± 66422.92489495785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850291.4119873047,
            "unit": "ns",
            "range": "± 35418.45762276802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1272100.2102864583,
            "unit": "ns",
            "range": "± 6456.116670136861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3042528.21875,
            "unit": "ns",
            "range": "± 41851.16097830332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967580.9835012335,
            "unit": "ns",
            "range": "± 20381.125446587266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849654.6665736607,
            "unit": "ns",
            "range": "± 19357.938512677036"
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
        "date": 1692936070049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619685.21875,
            "unit": "ns",
            "range": "± 132048.93690679528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3232459.365591398,
            "unit": "ns",
            "range": "± 196076.07085548647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169473.131313131,
            "unit": "ns",
            "range": "± 180861.34038051826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6052693.221052632,
            "unit": "ns",
            "range": "± 420508.5428364438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336125.47826086957,
            "unit": "ns",
            "range": "± 27869.939405998495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344279.64130434784,
            "unit": "ns",
            "range": "± 31635.56019251278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291128.78723404254,
            "unit": "ns",
            "range": "± 27481.934745039114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5076600.79032258,
            "unit": "ns",
            "range": "± 230631.7333508785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4800661.514285714,
            "unit": "ns",
            "range": "± 157237.96108995986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19976.74074074074,
            "unit": "ns",
            "range": "± 2366.4355990485874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103646,
            "unit": "ns",
            "range": "± 14524.775989776623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105287.68478260869,
            "unit": "ns",
            "range": "± 20691.82572419952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111129.29591836735,
            "unit": "ns",
            "range": "± 25172.024801399093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6429.043010752688,
            "unit": "ns",
            "range": "± 959.6883315859066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20546.54761904762,
            "unit": "ns",
            "range": "± 2492.7301740454523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60014.47311827957,
            "unit": "ns",
            "range": "± 10560.198226268003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9632251.666666666,
            "unit": "ns",
            "range": "± 224739.6021413078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25893272.29113924,
            "unit": "ns",
            "range": "± 1330590.688613097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67690941.21212122,
            "unit": "ns",
            "range": "± 2143781.4347167127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132828590.875,
            "unit": "ns",
            "range": "± 2501572.860059603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269777618.3333333,
            "unit": "ns",
            "range": "± 3223310.0249917605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979176.7671232875,
            "unit": "ns",
            "range": "± 196909.67332775253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4257732.086021505,
            "unit": "ns",
            "range": "± 238988.3753401651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5414693.571428572,
            "unit": "ns",
            "range": "± 258999.57716123344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4555151.139784946,
            "unit": "ns",
            "range": "± 318880.1919356981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7950470.206896552,
            "unit": "ns",
            "range": "± 346268.208279933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6082380.933894231,
            "unit": "ns",
            "range": "± 45312.93899569524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2025968.034375,
            "unit": "ns",
            "range": "± 19226.22453541313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347911.0846354167,
            "unit": "ns",
            "range": "± 12446.074854178767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3264578.1684895833,
            "unit": "ns",
            "range": "± 26809.780524143294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059803.455078125,
            "unit": "ns",
            "range": "± 10600.208311753775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 973551.8460518973,
            "unit": "ns",
            "range": "± 8640.362357103677"
          }
        ]
      }
    ]
  }
}