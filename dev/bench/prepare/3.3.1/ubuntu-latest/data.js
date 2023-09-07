window.BENCHMARK_DATA = {
  "lastUpdate": 1694089212967,
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
          "id": "a90abe468b8dc3ffed34515797885dedcb4e0723",
          "message": "Prepare 3.3.1",
          "timestamp": "2023-09-07T21:02:34+09:00",
          "tree_id": "31cfafb237c60d6a860c9ac96ba14bd0c4ce6f13",
          "url": "https://github.com/greymistcube/libplanet/commit/a90abe468b8dc3ffed34515797885dedcb4e0723"
        },
        "date": 1694089203735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705894.9767441861,
            "unit": "ns",
            "range": "± 91880.2337138794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3364352.911764706,
            "unit": "ns",
            "range": "± 107197.57803131493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185924.234042553,
            "unit": "ns",
            "range": "± 124027.24467410379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5710068.775,
            "unit": "ns",
            "range": "± 174472.80983660868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329429.55555555556,
            "unit": "ns",
            "range": "± 10599.803918521848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316850.53846153844,
            "unit": "ns",
            "range": "± 14814.580785366616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291465.7530864198,
            "unit": "ns",
            "range": "± 15221.10201622312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5330520.533333333,
            "unit": "ns",
            "range": "± 84903.02953695104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4901233.666666667,
            "unit": "ns",
            "range": "± 90641.01080610466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25684.032608695652,
            "unit": "ns",
            "range": "± 1864.0508143517518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107272.26041666667,
            "unit": "ns",
            "range": "± 8933.839717017765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88208.51578947369,
            "unit": "ns",
            "range": "± 5690.337132186417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98888.85416666667,
            "unit": "ns",
            "range": "± 14773.931833133915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6436.489583333333,
            "unit": "ns",
            "range": "± 701.141775509087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23801.425531914894,
            "unit": "ns",
            "range": "± 2222.3494372570203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57235.279569892475,
            "unit": "ns",
            "range": "± 3571.1061718403635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9671829.6,
            "unit": "ns",
            "range": "± 263946.3490180768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26647368.666666668,
            "unit": "ns",
            "range": "± 385552.96625230677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67824125.2,
            "unit": "ns",
            "range": "± 311239.6403088784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135620131,
            "unit": "ns",
            "range": "± 1559072.556719539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262399637.0952381,
            "unit": "ns",
            "range": "± 5018318.1023742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4307371.931034483,
            "unit": "ns",
            "range": "± 105355.97890279649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4681588,
            "unit": "ns",
            "range": "± 58672.174139942115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5307409.557692308,
            "unit": "ns",
            "range": "± 209477.8684207347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4761174.9069767445,
            "unit": "ns",
            "range": "± 165349.00427491372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7415130.269230769,
            "unit": "ns",
            "range": "± 199958.94757465748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5964573.580729167,
            "unit": "ns",
            "range": "± 51725.77338516063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881374.3720052084,
            "unit": "ns",
            "range": "± 10534.49541113023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1245729.0303385416,
            "unit": "ns",
            "range": "± 21116.026422129533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2961325.338020833,
            "unit": "ns",
            "range": "± 25610.655796076437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972878.7837565105,
            "unit": "ns",
            "range": "± 12216.277828578695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904238.91015625,
            "unit": "ns",
            "range": "± 6328.885101611756"
          }
        ]
      }
    ]
  }
}