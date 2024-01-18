window.BENCHMARK_DATA = {
  "lastUpdate": 1705553488764,
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
          "id": "ce54ebd07727d7c940c818cce9178253c4a8cb82",
          "message": "Cleanup and some documentation",
          "timestamp": "2024-01-18T13:40:17+09:00",
          "tree_id": "8c09cc15cfb0c6eaf03e0404c0f42df2356f5158",
          "url": "https://github.com/greymistcube/libplanet/commit/ce54ebd07727d7c940c818cce9178253c4a8cb82"
        },
        "date": 1705553472066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940136.0824742268,
            "unit": "ns",
            "range": "± 109595.59961661993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1751947.9166666667,
            "unit": "ns",
            "range": "± 133226.4064066696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1359349.494949495,
            "unit": "ns",
            "range": "± 154911.44170186555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5331064.2105263155,
            "unit": "ns",
            "range": "± 305845.21043828747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37084.61538461538,
            "unit": "ns",
            "range": "± 580.0088416655874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5110950,
            "unit": "ns",
            "range": "± 49457.79475005392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13126686.666666666,
            "unit": "ns",
            "range": "± 147315.6371617791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32079483.333333332,
            "unit": "ns",
            "range": "± 238242.16416889516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65270130.76923077,
            "unit": "ns",
            "range": "± 197877.26997904276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132036440,
            "unit": "ns",
            "range": "± 1034448.8434496342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306409.765625,
            "unit": "ns",
            "range": "± 24743.2878114978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067419.53125,
            "unit": "ns",
            "range": "± 4059.385139622994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729181.3852163461,
            "unit": "ns",
            "range": "± 5184.364435422143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922546.2439903845,
            "unit": "ns",
            "range": "± 2961.3556253431852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639539.2317708334,
            "unit": "ns",
            "range": "± 2104.9189753407622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584138.9299665178,
            "unit": "ns",
            "range": "± 1752.8341862540726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2108965.789473684,
            "unit": "ns",
            "range": "± 70928.7205058933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211408.695652174,
            "unit": "ns",
            "range": "± 46502.118594924534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2896994.3396226414,
            "unit": "ns",
            "range": "± 113011.43988228383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2765586.7924528304,
            "unit": "ns",
            "range": "± 114824.4446598235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6168627.777777778,
            "unit": "ns",
            "range": "± 126138.28455336373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173457.5,
            "unit": "ns",
            "range": "± 8743.587523711885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157252.08333333334,
            "unit": "ns",
            "range": "± 5521.293002408015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141143.10344827586,
            "unit": "ns",
            "range": "± 3705.0092572163853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2662840,
            "unit": "ns",
            "range": "± 45269.11277492162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498307.1428571427,
            "unit": "ns",
            "range": "± 36369.48137964268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11864.130434782608,
            "unit": "ns",
            "range": "± 1329.3459948443067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55778.125,
            "unit": "ns",
            "range": "± 5806.515453395979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44465.625,
            "unit": "ns",
            "range": "± 2073.9670406528367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60542.857142857145,
            "unit": "ns",
            "range": "± 14420.59666752464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2347.9166666666665,
            "unit": "ns",
            "range": "± 338.4108890454936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8769.662921348314,
            "unit": "ns",
            "range": "± 908.5958815644688"
          }
        ]
      }
    ]
  }
}