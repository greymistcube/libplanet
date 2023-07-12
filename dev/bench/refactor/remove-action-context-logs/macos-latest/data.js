window.BENCHMARK_DATA = {
  "lastUpdate": 1689130301222,
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
          "id": "582920dbcb8729530fce1132e93d68c4532d0f87",
          "message": "Build fix",
          "timestamp": "2023-07-12T11:35:18+09:00",
          "tree_id": "a2613f4c31acfff261c2c7766338cbefcea4e992",
          "url": "https://github.com/greymistcube/libplanet/commit/582920dbcb8729530fce1132e93d68c4532d0f87"
        },
        "date": 1689130273103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7827027.071428572,
            "unit": "ns",
            "range": "± 36849.81300748774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19397940.13043478,
            "unit": "ns",
            "range": "± 467090.33711150225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49258422.23809524,
            "unit": "ns",
            "range": "± 1165918.7800876142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98648890.34615384,
            "unit": "ns",
            "range": "± 872969.0139826314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217329735.0135135,
            "unit": "ns",
            "range": "± 7349525.600225972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70052.61855670103,
            "unit": "ns",
            "range": "± 14898.66465873375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351480.2989690722,
            "unit": "ns",
            "range": "± 44126.45954034763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328611.393258427,
            "unit": "ns",
            "range": "± 40952.140182062736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316964.7555555556,
            "unit": "ns",
            "range": "± 29594.688533306038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4325041.340425532,
            "unit": "ns",
            "range": "± 326478.26159695035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678619.3666666667,
            "unit": "ns",
            "range": "± 107059.6831684063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17462.16129032258,
            "unit": "ns",
            "range": "± 2248.887315648624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88366.14736842105,
            "unit": "ns",
            "range": "± 7093.006476217864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84480.57142857143,
            "unit": "ns",
            "range": "± 8887.226372605695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114803.82291666667,
            "unit": "ns",
            "range": "± 14802.859497226444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6328.817204301075,
            "unit": "ns",
            "range": "± 1122.168484465181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17287.032608695652,
            "unit": "ns",
            "range": "± 2056.9269698665894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558789.0957446808,
            "unit": "ns",
            "range": "± 108748.29811965262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062208.25,
            "unit": "ns",
            "range": "± 159542.1054451168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128283.9574468085,
            "unit": "ns",
            "range": "± 173303.19472834867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6060691.296296297,
            "unit": "ns",
            "range": "± 231977.07315508404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3720417.4896907215,
            "unit": "ns",
            "range": "± 516825.0248959283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3389012.688405797,
            "unit": "ns",
            "range": "± 130540.24965011359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4514199.135593221,
            "unit": "ns",
            "range": "± 192070.39211673895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3812122.6886792453,
            "unit": "ns",
            "range": "± 146877.13940779743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7132765.120689655,
            "unit": "ns",
            "range": "± 182654.2134982722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6582965.587239583,
            "unit": "ns",
            "range": "± 69053.21143000547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961397.571986607,
            "unit": "ns",
            "range": "± 17417.43782803328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1278208.800564236,
            "unit": "ns",
            "range": "± 26688.562937156756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542448.289620536,
            "unit": "ns",
            "range": "± 23127.67328430631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792673.3845703125,
            "unit": "ns",
            "range": "± 4966.012927281056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742713.9667317708,
            "unit": "ns",
            "range": "± 4162.797568197866"
          }
        ]
      }
    ]
  }
}