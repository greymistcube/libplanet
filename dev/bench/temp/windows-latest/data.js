window.BENCHMARK_DATA = {
  "lastUpdate": 1680590907207,
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680590878850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1835543.0107526882,
            "unit": "ns",
            "range": "± 215836.92586012682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3468315.053763441,
            "unit": "ns",
            "range": "± 302736.63505711296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2890618.75,
            "unit": "ns",
            "range": "± 277656.3098176934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7563906.18556701,
            "unit": "ns",
            "range": "± 693953.1268414365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72690.206185567,
            "unit": "ns",
            "range": "± 18384.32110405616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9289155.208333334,
            "unit": "ns",
            "range": "± 1019898.0931414866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25590251.315789472,
            "unit": "ns",
            "range": "± 1244624.6855437635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65367428,
            "unit": "ns",
            "range": "± 1673818.305930087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131963890.32258065,
            "unit": "ns",
            "range": "± 3939936.714496384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269249250,
            "unit": "ns",
            "range": "± 5163119.923198892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6222957.3125,
            "unit": "ns",
            "range": "± 160355.76407341205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1966404.159007353,
            "unit": "ns",
            "range": "± 38914.561838861846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1483376.1328125,
            "unit": "ns",
            "range": "± 27076.214800523856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3289050,
            "unit": "ns",
            "range": "± 49244.30794827764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1060415.5338541667,
            "unit": "ns",
            "range": "± 15436.130014813196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981349.1536458334,
            "unit": "ns",
            "range": "± 15861.00045165852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4254110.869565218,
            "unit": "ns",
            "range": "± 329501.10055228893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4134523.913043478,
            "unit": "ns",
            "range": "± 310374.67693293386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5224535.6321839085,
            "unit": "ns",
            "range": "± 487817.07541292696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5784635.416666667,
            "unit": "ns",
            "range": "± 502571.7655962792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10213450.52631579,
            "unit": "ns",
            "range": "± 675728.091776328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429884.2105263158,
            "unit": "ns",
            "range": "± 44479.836014424574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348952.688172043,
            "unit": "ns",
            "range": "± 45778.181131355406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311532.183908046,
            "unit": "ns",
            "range": "± 39246.37887088964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6786695.7894736845,
            "unit": "ns",
            "range": "± 390898.35456177616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4848142.708333333,
            "unit": "ns",
            "range": "± 353409.70133671135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30124.242424242424,
            "unit": "ns",
            "range": "± 10111.481561532031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123792.63157894737,
            "unit": "ns",
            "range": "± 22817.920552063213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102891.66666666667,
            "unit": "ns",
            "range": "± 20344.090913277974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248753.0612244898,
            "unit": "ns",
            "range": "± 46041.52586453187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7580.459770114942,
            "unit": "ns",
            "range": "± 1868.8287017236198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32722.222222222223,
            "unit": "ns",
            "range": "± 11753.389051461343"
          }
        ]
      }
    ]
  }
}