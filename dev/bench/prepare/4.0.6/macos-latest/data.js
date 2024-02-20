window.BENCHMARK_DATA = {
  "lastUpdate": 1708405687467,
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
          "id": "670f32c138f053a1c5cc89302e44c02d10638d2f",
          "message": "Prepare 4.0.6",
          "timestamp": "2024-02-20T13:54:42+09:00",
          "tree_id": "ed9db8d13dffc5260b39f9aee313d6d1c82c6e13",
          "url": "https://github.com/greymistcube/libplanet/commit/670f32c138f053a1c5cc89302e44c02d10638d2f"
        },
        "date": 1708405671749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7650121.933333334,
            "unit": "ns",
            "range": "± 68031.7661605504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18891034.066666666,
            "unit": "ns",
            "range": "± 254002.0394739456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46747224.421052635,
            "unit": "ns",
            "range": "± 897959.1387127266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96105834.63333334,
            "unit": "ns",
            "range": "± 2871279.8560186443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190523005.5,
            "unit": "ns",
            "range": "± 4933751.1828418095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34916.51685393258,
            "unit": "ns",
            "range": "± 3333.4083434784593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226898.52083333334,
            "unit": "ns",
            "range": "± 21933.156619712187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209090.46753246753,
            "unit": "ns",
            "range": "± 10668.573223287289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188843.59375,
            "unit": "ns",
            "range": "± 5721.129985720309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3894760.285714286,
            "unit": "ns",
            "range": "± 48326.12374502822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3473211.236842105,
            "unit": "ns",
            "range": "± 74419.90128979248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12733.652631578947,
            "unit": "ns",
            "range": "± 1354.2632508192771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63709.21649484536,
            "unit": "ns",
            "range": "± 8260.019852461519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61678.44329896907,
            "unit": "ns",
            "range": "± 10427.231269981932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61901.81443298969,
            "unit": "ns",
            "range": "± 11701.50480024711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3427.206896551724,
            "unit": "ns",
            "range": "± 355.31084124379447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11811.345679012345,
            "unit": "ns",
            "range": "± 616.7703211182795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1080288.55,
            "unit": "ns",
            "range": "± 114238.03596366604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2253716.276595745,
            "unit": "ns",
            "range": "± 124239.15027823622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1816668.2268041237,
            "unit": "ns",
            "range": "± 139092.03318460475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11735333.802083334,
            "unit": "ns",
            "range": "± 4363958.735183995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883444.2461538464,
            "unit": "ns",
            "range": "± 132951.08137370853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2968392.103448276,
            "unit": "ns",
            "range": "± 79864.70424739974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3527937.2083333335,
            "unit": "ns",
            "range": "± 117902.41619363066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3639404.729508197,
            "unit": "ns",
            "range": "± 144007.84195318364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16386524.88764045,
            "unit": "ns",
            "range": "± 2030259.4458326204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4483453.089226973,
            "unit": "ns",
            "range": "± 99324.85602524366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1354324.3388020834,
            "unit": "ns",
            "range": "± 24714.87331265112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889017.4769897461,
            "unit": "ns",
            "range": "± 16718.458037497297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962009.4645996094,
            "unit": "ns",
            "range": "± 36347.75854527808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643101.955078125,
            "unit": "ns",
            "range": "± 16640.053815354524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562698.0910807292,
            "unit": "ns",
            "range": "± 6537.953267857713"
          }
        ]
      }
    ]
  }
}