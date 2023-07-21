window.BENCHMARK_DATA = {
  "lastUpdate": 1689903821870,
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
          "id": "5ceef2804f0ab187bbe575a75571e266756c2bfa",
          "message": "Changelog",
          "timestamp": "2023-07-21T10:29:11+09:00",
          "tree_id": "8ab99b0372c8aface09570a6bbc0942e1ca8b34d",
          "url": "https://github.com/greymistcube/libplanet/commit/5ceef2804f0ab187bbe575a75571e266756c2bfa"
        },
        "date": 1689903813172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304804,
            "unit": "ns",
            "range": "± 9715.61357391529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292743.2641509434,
            "unit": "ns",
            "range": "± 11130.68032192473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262065.15,
            "unit": "ns",
            "range": "± 11685.48851748924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4657602.266666667,
            "unit": "ns",
            "range": "± 44414.17900121966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4218462.866666666,
            "unit": "ns",
            "range": "± 57281.43360619523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25439.23157894737,
            "unit": "ns",
            "range": "± 2393.232059471359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101965.21276595745,
            "unit": "ns",
            "range": "± 7232.438759219244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89273.24418604652,
            "unit": "ns",
            "range": "± 4875.36925886234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117943.32653061225,
            "unit": "ns",
            "range": "± 16250.328617629191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6737.351063829788,
            "unit": "ns",
            "range": "± 862.7467477178809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22437.795698924732,
            "unit": "ns",
            "range": "± 1569.5089342733634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561194.9591836734,
            "unit": "ns",
            "range": "± 100870.32515494482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2888490.6486486485,
            "unit": "ns",
            "range": "± 97982.26729765846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1977259.5454545454,
            "unit": "ns",
            "range": "± 100756.49322128671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5413660.865168539,
            "unit": "ns",
            "range": "± 299925.31560124154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6148033.534598215,
            "unit": "ns",
            "range": "± 27051.86348351473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946060.8544270834,
            "unit": "ns",
            "range": "± 870.22380667856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410436.125,
            "unit": "ns",
            "range": "± 4663.304642739104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646856.009635417,
            "unit": "ns",
            "range": "± 1791.7840012954146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839003.6233956473,
            "unit": "ns",
            "range": "± 452.21721489532626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768642.666391226,
            "unit": "ns",
            "range": "± 333.4960826914753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3682830.769230769,
            "unit": "ns",
            "range": "± 98365.94878973422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3805714.6842105263,
            "unit": "ns",
            "range": "± 130507.06270876896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4624295.533333333,
            "unit": "ns",
            "range": "± 71666.02509943175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4208934.62962963,
            "unit": "ns",
            "range": "± 103770.95772500726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6916691,
            "unit": "ns",
            "range": "± 186606.92366104748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8081436.666666667,
            "unit": "ns",
            "range": "± 76848.13407686121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22485712.8,
            "unit": "ns",
            "range": "± 318631.23669426114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56650677.93333333,
            "unit": "ns",
            "range": "± 487148.38184559427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112956034.4,
            "unit": "ns",
            "range": "± 1546070.5838477751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228007258.2857143,
            "unit": "ns",
            "range": "± 1274948.585576172"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51276.0987654321,
            "unit": "ns",
            "range": "± 2690.715033243665"
          }
        ]
      }
    ]
  }
}