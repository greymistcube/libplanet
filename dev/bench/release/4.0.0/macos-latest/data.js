window.BENCHMARK_DATA = {
  "lastUpdate": 1705912122825,
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
          "id": "0c244ba844c82002f0fe9e9ee4efa284b9eb6b6d",
          "message": "Release 4.0.0",
          "timestamp": "2024-01-22T17:14:19+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/greymistcube/libplanet/commit/0c244ba844c82002f0fe9e9ee4efa284b9eb6b6d"
        },
        "date": 1705912104915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7950053.576923077,
            "unit": "ns",
            "range": "± 216927.61274695725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19817177.166666668,
            "unit": "ns",
            "range": "± 880181.9536793965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52978418.87362637,
            "unit": "ns",
            "range": "± 4073669.4408722674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100841214.29411764,
            "unit": "ns",
            "range": "± 3116496.0702592945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204957744.81034482,
            "unit": "ns",
            "range": "± 5949838.911822986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45588.739130434784,
            "unit": "ns",
            "range": "± 6545.839950416903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247610.11797752808,
            "unit": "ns",
            "range": "± 16396.85620332143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235423.5,
            "unit": "ns",
            "range": "± 21517.206270990046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205717.25,
            "unit": "ns",
            "range": "± 19228.63297711049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3950549.652173913,
            "unit": "ns",
            "range": "± 91990.33469565687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3534375.5833333335,
            "unit": "ns",
            "range": "± 32478.011015729993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13456.42857142857,
            "unit": "ns",
            "range": "± 1616.4129638929744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60426.20526315789,
            "unit": "ns",
            "range": "± 6353.535415334378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60657.69191919192,
            "unit": "ns",
            "range": "± 11640.693194764128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64445.12903225807,
            "unit": "ns",
            "range": "± 11044.728144572755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4177.546391752578,
            "unit": "ns",
            "range": "± 1525.9062813935266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12762.734693877552,
            "unit": "ns",
            "range": "± 1992.0044691655883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1204758.3085106383,
            "unit": "ns",
            "range": "± 134967.48929430812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2370618.777777778,
            "unit": "ns",
            "range": "± 108480.01791580944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1943076.6631578947,
            "unit": "ns",
            "range": "± 196901.5430322502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20857184.066666666,
            "unit": "ns",
            "range": "± 2265831.3499343605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3069720.325,
            "unit": "ns",
            "range": "± 159894.0648782357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3264068.466666667,
            "unit": "ns",
            "range": "± 181543.36471093152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3749653.0512820515,
            "unit": "ns",
            "range": "± 116908.60068422969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3967195.244680851,
            "unit": "ns",
            "range": "± 291683.8914569625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24408868.57894737,
            "unit": "ns",
            "range": "± 4951780.25008451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4375622.444270833,
            "unit": "ns",
            "range": "± 27086.903118021688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1368682.7797475962,
            "unit": "ns",
            "range": "± 20269.847537952315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883689.1017717634,
            "unit": "ns",
            "range": "± 2277.676957720827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009885.2278645833,
            "unit": "ns",
            "range": "± 17968.345722166996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642893.3370535715,
            "unit": "ns",
            "range": "± 2112.7972776399015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573290.216015625,
            "unit": "ns",
            "range": "± 2748.362279023336"
          }
        ]
      }
    ]
  }
}