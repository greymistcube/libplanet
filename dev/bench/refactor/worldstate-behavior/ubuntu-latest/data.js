window.BENCHMARK_DATA = {
  "lastUpdate": 1706235067418,
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
          "id": "8f7ce144d27b081fb06255e51676edb8b2c801c4",
          "message": "Changed IWorld.SetAccount() specifications",
          "timestamp": "2024-01-26T10:59:36+09:00",
          "tree_id": "340fabb26e82b9f030038c3d9e100c4a2a056b3a",
          "url": "https://github.com/greymistcube/libplanet/commit/8f7ce144d27b081fb06255e51676edb8b2c801c4"
        },
        "date": 1706235060936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2389132.434782609,
            "unit": "ns",
            "range": "± 91969.87659558299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492408.195652174,
            "unit": "ns",
            "range": "± 62678.26263360208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087002.911764706,
            "unit": "ns",
            "range": "± 97534.74982332214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3131383.2191780824,
            "unit": "ns",
            "range": "± 155081.1897519997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14097155.054347826,
            "unit": "ns",
            "range": "± 957044.734338013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41173.489795918365,
            "unit": "ns",
            "range": "± 5354.595721924824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970471.8888888889,
            "unit": "ns",
            "range": "± 88670.18864882458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892234.1176470588,
            "unit": "ns",
            "range": "± 89064.86071054588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1630877.0531914893,
            "unit": "ns",
            "range": "± 167884.91942614425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12884579.895833334,
            "unit": "ns",
            "range": "± 1071724.8251714471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5580185.233333333,
            "unit": "ns",
            "range": "± 21455.302719396725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14119258.766666668,
            "unit": "ns",
            "range": "± 80760.35949069733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36525577.84615385,
            "unit": "ns",
            "range": "± 319525.7726933896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74444655.3076923,
            "unit": "ns",
            "range": "± 445667.10656897724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147696636.5,
            "unit": "ns",
            "range": "± 495189.3607298121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729843.1829427085,
            "unit": "ns",
            "range": "± 10923.061501019829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196192.5055989583,
            "unit": "ns",
            "range": "± 3450.7978659717824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765774.1963641827,
            "unit": "ns",
            "range": "± 1090.2505261582023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949173.0288461538,
            "unit": "ns",
            "range": "± 5058.7827013290935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621971.4715983073,
            "unit": "ns",
            "range": "± 2437.8739987122726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570276.3732421875,
            "unit": "ns",
            "range": "± 2309.163808725982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204164.13235294117,
            "unit": "ns",
            "range": "± 9493.503176610348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192796.26744186046,
            "unit": "ns",
            "range": "± 7091.806106302605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168878.37837837837,
            "unit": "ns",
            "range": "± 5455.8862776889955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3324087.714285714,
            "unit": "ns",
            "range": "± 46950.66379055387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2925176,
            "unit": "ns",
            "range": "± 38243.33617115536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14054.217171717171,
            "unit": "ns",
            "range": "± 2121.945723595633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67164.40206185567,
            "unit": "ns",
            "range": "± 6931.128839728228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60002.24157303371,
            "unit": "ns",
            "range": "± 12084.799264447964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73666.90816326531,
            "unit": "ns",
            "range": "± 13731.944304736538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3733.3763440860216,
            "unit": "ns",
            "range": "± 570.1088171106975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14744.42857142857,
            "unit": "ns",
            "range": "± 1963.493583271"
          }
        ]
      }
    ]
  }
}