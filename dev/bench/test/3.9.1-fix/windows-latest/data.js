window.BENCHMARK_DATA = {
  "lastUpdate": 1702545334058,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "92e6469e1eac65994f8a228c2f1fa77603b650b1",
          "message": "feat: new argument for `RocksDBKeyValueStore.ctor`",
          "timestamp": "2023-12-14T17:59:47+09:00",
          "tree_id": "5c47e7f0c1b5d51cb6e817c3092842361db17660",
          "url": "https://github.com/greymistcube/libplanet/commit/92e6469e1eac65994f8a228c2f1fa77603b650b1"
        },
        "date": 1702545310152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970670.1030927835,
            "unit": "ns",
            "range": "± 79002.80475631394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1783506.25,
            "unit": "ns",
            "range": "± 82430.09520337882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1406130.9278350514,
            "unit": "ns",
            "range": "± 178717.8784430137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5393748.387096774,
            "unit": "ns",
            "range": "± 159345.24544934445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35068.181818181816,
            "unit": "ns",
            "range": "± 2263.5312385102175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4993407.142857143,
            "unit": "ns",
            "range": "± 34686.030535155136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13422400,
            "unit": "ns",
            "range": "± 363289.2852810278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32792243.333333332,
            "unit": "ns",
            "range": "± 521702.0091785658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65759433.333333336,
            "unit": "ns",
            "range": "± 1221250.0233464928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126632950,
            "unit": "ns",
            "range": "± 1054458.636712916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3239056.1197916665,
            "unit": "ns",
            "range": "± 10160.394035296347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048463.3649553572,
            "unit": "ns",
            "range": "± 4176.979782441863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779855.0083705357,
            "unit": "ns",
            "range": "± 3923.6917330077667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906968.7220982143,
            "unit": "ns",
            "range": "± 9975.510768005415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624986.8815104166,
            "unit": "ns",
            "range": "± 2461.934812405768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556402.0357572115,
            "unit": "ns",
            "range": "± 2300.7126380853542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171217.073170732,
            "unit": "ns",
            "range": "± 77451.5716510615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2387042.5,
            "unit": "ns",
            "range": "± 84231.61866741808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2867109.7560975607,
            "unit": "ns",
            "range": "± 102896.75846419566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2742974.074074074,
            "unit": "ns",
            "range": "± 113126.46485687279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6448269.230769231,
            "unit": "ns",
            "range": "± 318631.1552044669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181476.2711864407,
            "unit": "ns",
            "range": "± 7621.5967867870295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164829.4871794872,
            "unit": "ns",
            "range": "± 8491.479441782989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140395.83333333334,
            "unit": "ns",
            "range": "± 3647.5696693488417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2749050,
            "unit": "ns",
            "range": "± 56111.519735779955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520121.4285714286,
            "unit": "ns",
            "range": "± 28886.33370168798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11597.802197802197,
            "unit": "ns",
            "range": "± 1884.1430720609083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58219.58762886598,
            "unit": "ns",
            "range": "± 9705.965081408034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45883.11688311688,
            "unit": "ns",
            "range": "± 2344.725469139673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56665.93406593407,
            "unit": "ns",
            "range": "± 11086.690917794882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2432.222222222222,
            "unit": "ns",
            "range": "± 541.4457919016824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11934.343434343435,
            "unit": "ns",
            "range": "± 2445.4523230933737"
          }
        ]
      }
    ]
  }
}