window.BENCHMARK_DATA = {
  "lastUpdate": 1678783251254,
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
          "id": "8d6285846fc703b3e6fa779e0ba19551fccd0f22",
          "message": "Prepare 0.47.2",
          "timestamp": "2023-03-14T17:20:10+09:00",
          "tree_id": "8dbcdc2786a763fbd504de7e19f1d806760b87d8",
          "url": "https://github.com/greymistcube/libplanet/commit/8d6285846fc703b3e6fa779e0ba19551fccd0f22"
        },
        "date": 1678783234608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 159677.56140350876,
            "unit": "ns",
            "range": "± 6914.937085287452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138522.7319587629,
            "unit": "ns",
            "range": "± 16085.350010772914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274712.07,
            "unit": "ns",
            "range": "± 36671.31965690476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250876.33333333334,
            "unit": "ns",
            "range": "± 6113.46991361006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3759874.621212121,
            "unit": "ns",
            "range": "± 106602.95240862164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10362766.94736842,
            "unit": "ns",
            "range": "± 338355.5677719334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34314.06043956044,
            "unit": "ns",
            "range": "± 5984.009354955535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87456.38202247191,
            "unit": "ns",
            "range": "± 19415.982414627586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72930.36956521739,
            "unit": "ns",
            "range": "± 12590.046998417449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132633.6923076923,
            "unit": "ns",
            "range": "± 22502.009527887996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6631.552083333333,
            "unit": "ns",
            "range": "± 1074.4158987908556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28836.875,
            "unit": "ns",
            "range": "± 5679.139714780752"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6817791.556770833,
            "unit": "ns",
            "range": "± 707422.6170605103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7159119.051282051,
            "unit": "ns",
            "range": "± 248747.52633321207"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28468563.269230768,
            "unit": "ns",
            "range": "± 1290043.837355474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7382476,
            "unit": "ns",
            "range": "± 548632.2635788075"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33388919.714285713,
            "unit": "ns",
            "range": "± 546645.4844449257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7694951.924450549,
            "unit": "ns",
            "range": "± 430258.8765421534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2123178.598828125,
            "unit": "ns",
            "range": "± 61943.313618425134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409380.5863882212,
            "unit": "ns",
            "range": "± 58177.10187989635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2833469.70430546,
            "unit": "ns",
            "range": "± 169407.91398615128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845266.6555238381,
            "unit": "ns",
            "range": "± 29574.29601933774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778506.5961470171,
            "unit": "ns",
            "range": "± 36256.737744681595"
          }
        ]
      }
    ]
  }
}