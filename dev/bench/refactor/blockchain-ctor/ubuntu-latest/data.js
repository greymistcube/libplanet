window.BENCHMARK_DATA = {
  "lastUpdate": 1684303153275,
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
          "id": "aef86503e565e1d28a3e2e8bf517c061cc31ebae",
          "message": "Require ActionEvaluator for Create",
          "timestamp": "2023-05-17T14:45:39+09:00",
          "tree_id": "62175bf7f8fa04bb04747b339acf8468137b30ac",
          "url": "https://github.com/greymistcube/libplanet/commit/aef86503e565e1d28a3e2e8bf517c061cc31ebae"
        },
        "date": 1684303146405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3591405.1142857145,
            "unit": "ns",
            "range": "± 115104.47766262856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3671217.45,
            "unit": "ns",
            "range": "± 83536.01991166193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4515203.05882353,
            "unit": "ns",
            "range": "± 80201.76548124626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4579960.333333333,
            "unit": "ns",
            "range": "± 138061.70765699903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7235716.521739131,
            "unit": "ns",
            "range": "± 275360.415407455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288686.7619047619,
            "unit": "ns",
            "range": "± 6541.777066705667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276401.037037037,
            "unit": "ns",
            "range": "± 10840.502148368916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253011.32835820896,
            "unit": "ns",
            "range": "± 12022.506961866275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4496666.8,
            "unit": "ns",
            "range": "± 57201.01447801678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078691.4,
            "unit": "ns",
            "range": "± 57285.78467124283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20242.41304347826,
            "unit": "ns",
            "range": "± 1932.4797777096064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90197.10752688172,
            "unit": "ns",
            "range": "± 5457.633119853422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79390.01020408163,
            "unit": "ns",
            "range": "± 5298.919692457256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99760.57142857143,
            "unit": "ns",
            "range": "± 13056.600133708102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5432.673469387755,
            "unit": "ns",
            "range": "± 960.3069824415439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17490.197802197803,
            "unit": "ns",
            "range": "± 1490.414052982744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910297.619977678,
            "unit": "ns",
            "range": "± 30615.511297625268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834931.75625,
            "unit": "ns",
            "range": "± 2601.4671609275106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375229.4416666667,
            "unit": "ns",
            "range": "± 3294.338968937374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631000.3471354167,
            "unit": "ns",
            "range": "± 3336.148805620792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812692.2992838542,
            "unit": "ns",
            "range": "± 627.5357293689308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751783.5945870535,
            "unit": "ns",
            "range": "± 288.6084661406935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7893357.846153846,
            "unit": "ns",
            "range": "± 214798.42456399763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21410957.4,
            "unit": "ns",
            "range": "± 349692.3372884472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55430421.86666667,
            "unit": "ns",
            "range": "± 472011.0674635964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111099288.13333334,
            "unit": "ns",
            "range": "± 681080.0563685454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220959229.46666667,
            "unit": "ns",
            "range": "± 1953086.5620717183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484605.252631579,
            "unit": "ns",
            "range": "± 81534.36194674709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2790711.625,
            "unit": "ns",
            "range": "± 70832.80735513582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606299.076923077,
            "unit": "ns",
            "range": "± 42549.053368752204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5642521.8125,
            "unit": "ns",
            "range": "± 173948.00368212326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47944.28571428572,
            "unit": "ns",
            "range": "± 2577.186467071896"
          }
        ]
      }
    ]
  }
}