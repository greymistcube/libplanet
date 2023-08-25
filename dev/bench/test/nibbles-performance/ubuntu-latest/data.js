window.BENCHMARK_DATA = {
  "lastUpdate": 1692929657153,
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
      }
    ]
  }
}