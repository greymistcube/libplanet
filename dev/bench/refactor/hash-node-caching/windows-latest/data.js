window.BENCHMARK_DATA = {
  "lastUpdate": 1700447549315,
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
          "id": "32615931208586c81ef11bf6ee44bb68e9bf85bc",
          "message": "Add missing cache",
          "timestamp": "2023-11-20T11:20:28+09:00",
          "tree_id": "f9b0ba0e6dd4038f2fad50eb41a3e0ae7e232043",
          "url": "https://github.com/greymistcube/libplanet/commit/32615931208586c81ef11bf6ee44bb68e9bf85bc"
        },
        "date": 1700447532588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957808.0808080808,
            "unit": "ns",
            "range": "± 105744.50502128934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1761270.2127659575,
            "unit": "ns",
            "range": "± 100484.13861865335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1301842.105263158,
            "unit": "ns",
            "range": "± 107839.42710379125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5144845.454545454,
            "unit": "ns",
            "range": "± 276889.2400283355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34321.818181818184,
            "unit": "ns",
            "range": "± 1467.3850398647442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5069520,
            "unit": "ns",
            "range": "± 60747.26566450778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13086778.57142857,
            "unit": "ns",
            "range": "± 177172.12047815332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33789776.92307692,
            "unit": "ns",
            "range": "± 484388.7817890469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65399713.333333336,
            "unit": "ns",
            "range": "± 794937.1752954234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128519008.33333333,
            "unit": "ns",
            "range": "± 768655.37431914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3173883.984375,
            "unit": "ns",
            "range": "± 13203.995332531416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1011817.4386160715,
            "unit": "ns",
            "range": "± 3940.2718831061975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 679093.0594308035,
            "unit": "ns",
            "range": "± 1832.5865397041046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916509.2643229167,
            "unit": "ns",
            "range": "± 4343.3393209164005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622966.6434151785,
            "unit": "ns",
            "range": "± 1238.373735447773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562576.8833705357,
            "unit": "ns",
            "range": "± 2228.445255963513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2142548.529411765,
            "unit": "ns",
            "range": "± 101749.72586804842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2224110.1694915253,
            "unit": "ns",
            "range": "± 98184.92175642657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781512.5,
            "unit": "ns",
            "range": "± 85052.94650791012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2656936.3636363638,
            "unit": "ns",
            "range": "± 238313.82561764953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5733852.5,
            "unit": "ns",
            "range": "± 202223.02170230335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173951.76470588235,
            "unit": "ns",
            "range": "± 9396.638352353993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165701.7857142857,
            "unit": "ns",
            "range": "± 7057.72281254381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141334.4827586207,
            "unit": "ns",
            "range": "± 3797.2053503736674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2758925,
            "unit": "ns",
            "range": "± 51772.79208232834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2573640,
            "unit": "ns",
            "range": "± 26997.534278945866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10443.75,
            "unit": "ns",
            "range": "± 1404.8646685151225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54010.86956521739,
            "unit": "ns",
            "range": "± 4397.713105038616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43976.5625,
            "unit": "ns",
            "range": "± 2006.714299980451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53424.242424242424,
            "unit": "ns",
            "range": "± 13502.978438705328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2385.4166666666665,
            "unit": "ns",
            "range": "± 396.0274224068905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9808.602150537634,
            "unit": "ns",
            "range": "± 1332.6710603943934"
          }
        ]
      }
    ]
  }
}