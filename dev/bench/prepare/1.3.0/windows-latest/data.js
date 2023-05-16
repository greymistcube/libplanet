window.BENCHMARK_DATA = {
  "lastUpdate": 1684228314643,
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
          "id": "e0ac72d952263a8df2cdfc10c1bedbc403f4e6e6",
          "message": "Prepare 1.3.0",
          "timestamp": "2023-05-16T17:56:38+09:00",
          "tree_id": "55c7a7526e013a7451c0e1a0d1a8ad138feb19c8",
          "url": "https://github.com/greymistcube/libplanet/commit/e0ac72d952263a8df2cdfc10c1bedbc403f4e6e6"
        },
        "date": 1684228290051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372255.2083333333,
            "unit": "ns",
            "range": "± 129275.76389440696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517050,
            "unit": "ns",
            "range": "± 89099.38559171165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289898.9583333335,
            "unit": "ns",
            "range": "± 171312.61667046725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5324368.421052632,
            "unit": "ns",
            "range": "± 230855.4867675375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49628.865979381444,
            "unit": "ns",
            "range": "± 5451.75733829023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7007585.714285715,
            "unit": "ns",
            "range": "± 123497.62910924402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17670700,
            "unit": "ns",
            "range": "± 44897.81326928558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45027821.428571425,
            "unit": "ns",
            "range": "± 276483.9046047608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91329800,
            "unit": "ns",
            "range": "± 428375.0142773769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181712576.92307693,
            "unit": "ns",
            "range": "± 381245.6079612506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4787023.158482143,
            "unit": "ns",
            "range": "± 7792.513357604377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507537.6171875,
            "unit": "ns",
            "range": "± 7364.907260844014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155177.2395833333,
            "unit": "ns",
            "range": "± 9869.889332396615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628184.0625,
            "unit": "ns",
            "range": "± 46226.30141295945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811807.8892299107,
            "unit": "ns",
            "range": "± 2026.5406303127793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741162.7511160715,
            "unit": "ns",
            "range": "± 5117.3050453670085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3089680,
            "unit": "ns",
            "range": "± 42649.75632152796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3129132.1428571427,
            "unit": "ns",
            "range": "± 89198.2147868668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4049040,
            "unit": "ns",
            "range": "± 107557.65120777478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4060594.736842105,
            "unit": "ns",
            "range": "± 88836.85092275246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6360064.285714285,
            "unit": "ns",
            "range": "± 104705.1215200454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269255.3846153846,
            "unit": "ns",
            "range": "± 12348.836366855972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247848,
            "unit": "ns",
            "range": "± 10018.640585612076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249738.88888888888,
            "unit": "ns",
            "range": "± 5165.170561375933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3888228.5714285714,
            "unit": "ns",
            "range": "± 28750.228857187543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3519853.3333333335,
            "unit": "ns",
            "range": "± 41873.54887322181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19634.0206185567,
            "unit": "ns",
            "range": "± 2318.8937106381386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90658.58585858585,
            "unit": "ns",
            "range": "± 11036.867809348014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70695.83333333333,
            "unit": "ns",
            "range": "± 5758.982305319444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91222.22222222222,
            "unit": "ns",
            "range": "± 14689.983784292155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5001.041666666667,
            "unit": "ns",
            "range": "± 908.0337104415482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18878.350515463917,
            "unit": "ns",
            "range": "± 2111.981040995817"
          }
        ]
      }
    ]
  }
}