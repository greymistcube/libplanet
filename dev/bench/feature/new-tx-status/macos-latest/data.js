window.BENCHMARK_DATA = {
  "lastUpdate": 1701934586933,
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
          "id": "9af94f81a831efe724530498c77692279d504295",
          "message": "Updated to test more elaborate cases",
          "timestamp": "2023-12-07T16:13:39+09:00",
          "tree_id": "0fbdbcb4ef02850f4a42e7bd27f95c5da30d81d1",
          "url": "https://github.com/greymistcube/libplanet/commit/9af94f81a831efe724530498c77692279d504295"
        },
        "date": 1701934571735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12110911.602272727,
            "unit": "ns",
            "range": "± 1772006.2591714752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27100368.927083332,
            "unit": "ns",
            "range": "± 3511901.661895593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72265352.6632653,
            "unit": "ns",
            "range": "± 8506743.132033773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153868678.1736842,
            "unit": "ns",
            "range": "± 20900408.764198773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 307531849.07608694,
            "unit": "ns",
            "range": "± 34463935.21199322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56757.52808988764,
            "unit": "ns",
            "range": "± 14358.14719236077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270896.7708333333,
            "unit": "ns",
            "range": "± 17859.259278845668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291563.78651685396,
            "unit": "ns",
            "range": "± 26188.636565690398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253390.33333333334,
            "unit": "ns",
            "range": "± 41777.84001941362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4296304.04040404,
            "unit": "ns",
            "range": "± 354367.96760334435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3906910.935483871,
            "unit": "ns",
            "range": "± 333888.8070299884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22269.215789473685,
            "unit": "ns",
            "range": "± 3172.494413130429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74508.51515151515,
            "unit": "ns",
            "range": "± 19251.304212571475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82964.43333333333,
            "unit": "ns",
            "range": "± 13943.366558686164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87693.74489795919,
            "unit": "ns",
            "range": "± 21217.37505617644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7486.936170212766,
            "unit": "ns",
            "range": "± 1265.0115797719868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16824,
            "unit": "ns",
            "range": "± 5593.229863515574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300404.705882353,
            "unit": "ns",
            "range": "± 132218.88258470566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628379.057471264,
            "unit": "ns",
            "range": "± 313773.15642838465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1652713.8936170214,
            "unit": "ns",
            "range": "± 146759.5603940624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7797383.935483871,
            "unit": "ns",
            "range": "± 1029820.52663832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3619759.574712644,
            "unit": "ns",
            "range": "± 231436.16535871165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643477.6363636362,
            "unit": "ns",
            "range": "± 185044.5316774707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5061206.107526882,
            "unit": "ns",
            "range": "± 864665.8851878727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498258.466666667,
            "unit": "ns",
            "range": "± 509065.46151313145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15374993.614583334,
            "unit": "ns",
            "range": "± 2358857.597421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4936722.768031881,
            "unit": "ns",
            "range": "± 492500.2023443571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1700970.1433971773,
            "unit": "ns",
            "range": "± 221993.46099600082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 962501.3653879915,
            "unit": "ns",
            "range": "± 71722.44952209946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544121.52890625,
            "unit": "ns",
            "range": "± 66952.25657206927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775537.3824904421,
            "unit": "ns",
            "range": "± 87817.38935620121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 622436.3366543384,
            "unit": "ns",
            "range": "± 55010.637450045724"
          }
        ]
      }
    ]
  }
}