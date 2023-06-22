window.BENCHMARK_DATA = {
  "lastUpdate": 1687446843141,
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
          "id": "014d1b096260bad7983ec840cdb396cfa0f86b4a",
          "message": "Merge tag '2.1.1' into port/2.1.1-to-main\n\nLibplanet 2.1.1",
          "timestamp": "2023-06-22T23:51:12+09:00",
          "tree_id": "9196c9c310d0445ca571a6d6dcee293a2fe6da21",
          "url": "https://github.com/greymistcube/libplanet/commit/014d1b096260bad7983ec840cdb396cfa0f86b4a"
        },
        "date": 1687446815399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1766202.2222222222,
            "unit": "ns",
            "range": "± 140836.80170362917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3329712.3076923075,
            "unit": "ns",
            "range": "± 149062.38680047306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2776841.5730337077,
            "unit": "ns",
            "range": "± 238694.99404859976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7078479.5698924735,
            "unit": "ns",
            "range": "± 550569.4215515779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62998.958333333336,
            "unit": "ns",
            "range": "± 9321.68377371776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9106295,
            "unit": "ns",
            "range": "± 196389.71587127468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25089530.769230768,
            "unit": "ns",
            "range": "± 341085.90654119034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64144144.44444445,
            "unit": "ns",
            "range": "± 1358653.9221823334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130716757.14285715,
            "unit": "ns",
            "range": "± 1543202.224005598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265694883.33333334,
            "unit": "ns",
            "range": "± 3791085.272935267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6139673.214285715,
            "unit": "ns",
            "range": "± 59449.14902114765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1975198.4375,
            "unit": "ns",
            "range": "± 17750.53707177604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1492733.59375,
            "unit": "ns",
            "range": "± 15869.626457984721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3324780.4236778845,
            "unit": "ns",
            "range": "± 39109.27230719093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1060876.3253348214,
            "unit": "ns",
            "range": "± 10635.933913437453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996580.2176339285,
            "unit": "ns",
            "range": "± 12114.407729779727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3890779.347826087,
            "unit": "ns",
            "range": "± 219089.98930794306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4123448.3333333335,
            "unit": "ns",
            "range": "± 172501.0385541487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5415785.294117647,
            "unit": "ns",
            "range": "± 172455.19248067666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5265284.375,
            "unit": "ns",
            "range": "± 231873.93962877383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8505778.125,
            "unit": "ns",
            "range": "± 261760.00672171373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333577.4647887324,
            "unit": "ns",
            "range": "± 15748.552742423199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317695.6989247312,
            "unit": "ns",
            "range": "± 18964.69783329986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288545.652173913,
            "unit": "ns",
            "range": "± 19256.974834842975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5207424.590163934,
            "unit": "ns",
            "range": "± 234094.02431198288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4494807.692307692,
            "unit": "ns",
            "range": "± 118706.03665551949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24552.272727272728,
            "unit": "ns",
            "range": "± 2937.4309391824077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111988.42105263157,
            "unit": "ns",
            "range": "± 12617.295316248425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120185.71428571429,
            "unit": "ns",
            "range": "± 18480.91241555298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130400,
            "unit": "ns",
            "range": "± 18133.151485489194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8903.125,
            "unit": "ns",
            "range": "± 2023.517163388123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24006.521739130436,
            "unit": "ns",
            "range": "± 3234.780232622978"
          }
        ]
      }
    ]
  }
}