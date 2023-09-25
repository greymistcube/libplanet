window.BENCHMARK_DATA = {
  "lastUpdate": 1695628564072,
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
          "id": "ec42f31dd8115c2489dbc734b4c3c34f0b416a2f",
          "message": "Docs fix",
          "timestamp": "2023-09-25T16:39:17+09:00",
          "tree_id": "3be4ec43e39631347d4fc02318a7d2438c02fade",
          "url": "https://github.com/greymistcube/libplanet/commit/ec42f31dd8115c2489dbc734b4c3c34f0b416a2f"
        },
        "date": 1695628542766,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1245045,
            "unit": "ns",
            "range": "± 122261.53402448459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2368848.1481481483,
            "unit": "ns",
            "range": "± 124064.81079571991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1895844.0860215053,
            "unit": "ns",
            "range": "± 130958.59241226294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7967468.918918919,
            "unit": "ns",
            "range": "± 226293.91266649202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47028.260869565216,
            "unit": "ns",
            "range": "± 2708.080139340294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6515100,
            "unit": "ns",
            "range": "± 121906.1729364022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18974792.85714286,
            "unit": "ns",
            "range": "± 314448.7593436286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47599385.71428572,
            "unit": "ns",
            "range": "± 531514.7727263783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95895514.70588236,
            "unit": "ns",
            "range": "± 1853047.7331079387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190774706.66666666,
            "unit": "ns",
            "range": "± 2985452.177636142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4075873.8541666665,
            "unit": "ns",
            "range": "± 18711.84198032596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1284744.453125,
            "unit": "ns",
            "range": "± 4152.925971153169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 941066.7578125,
            "unit": "ns",
            "range": "± 2265.6009612814164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2410002.0833333335,
            "unit": "ns",
            "range": "± 9396.193167323445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 735726.6731770834,
            "unit": "ns",
            "range": "± 4610.423265256702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699269.0885416666,
            "unit": "ns",
            "range": "± 4360.223912596868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2928034.6153846155,
            "unit": "ns",
            "range": "± 120360.8591915967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3066714.5454545454,
            "unit": "ns",
            "range": "± 125497.83592376731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3792000,
            "unit": "ns",
            "range": "± 129283.17337890077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798366.6666666665,
            "unit": "ns",
            "range": "± 168851.3222913816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9498086.206896551,
            "unit": "ns",
            "range": "± 273370.8780133919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236491.02564102566,
            "unit": "ns",
            "range": "± 7097.839476641279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228745.0980392157,
            "unit": "ns",
            "range": "± 8131.182293504192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202827.08333333334,
            "unit": "ns",
            "range": "± 14127.751556248708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3716085.714285714,
            "unit": "ns",
            "range": "± 60790.328268475496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3486410,
            "unit": "ns",
            "range": "± 76887.28524001187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20383.516483516483,
            "unit": "ns",
            "range": "± 1616.2551872401925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83065.30612244898,
            "unit": "ns",
            "range": "± 7233.842315643256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66475.82417582418,
            "unit": "ns",
            "range": "± 4192.250540099505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78660,
            "unit": "ns",
            "range": "± 5224.130961585617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5730.208333333333,
            "unit": "ns",
            "range": "± 1000.5387802964929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19809.782608695652,
            "unit": "ns",
            "range": "± 1568.3728379486486"
          }
        ]
      }
    ]
  }
}