window.BENCHMARK_DATA = {
  "lastUpdate": 1680590296157,
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680590288983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373523.8039215687,
            "unit": "ns",
            "range": "± 133777.02668246438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3759090.05,
            "unit": "ns",
            "range": "± 83721.48225450925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4235401.368421053,
            "unit": "ns",
            "range": "± 90677.97376688474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4552574.761904762,
            "unit": "ns",
            "range": "± 207896.68109988104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7729989.116279069,
            "unit": "ns",
            "range": "± 283480.10364911804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7759794.823529412,
            "unit": "ns",
            "range": "± 157940.0075425141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21223682.4,
            "unit": "ns",
            "range": "± 285885.7755727427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53617055,
            "unit": "ns",
            "range": "± 963868.2268815143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108633766.8,
            "unit": "ns",
            "range": "± 1604226.7287254096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213899073.73333332,
            "unit": "ns",
            "range": "± 3412371.2882619044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391473.2551020407,
            "unit": "ns",
            "range": "± 97050.99756476331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2624064.189189189,
            "unit": "ns",
            "range": "± 76106.97198820363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244451.711111111,
            "unit": "ns",
            "range": "± 125126.36686231563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5407878.304347826,
            "unit": "ns",
            "range": "± 132160.8569971508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47758.55405405405,
            "unit": "ns",
            "range": "± 2398.7817863828236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5958664.053645833,
            "unit": "ns",
            "range": "± 38204.45471095296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845480.5424479167,
            "unit": "ns",
            "range": "± 7525.993725622882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347984.531640625,
            "unit": "ns",
            "range": "± 10077.757915490005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630796.410416667,
            "unit": "ns",
            "range": "± 4377.057633063754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838468.2646484375,
            "unit": "ns",
            "range": "± 2250.8865990297318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767281.7305989583,
            "unit": "ns",
            "range": "± 1329.2842804887773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333852,
            "unit": "ns",
            "range": "± 9962.058525674576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279078.91891891893,
            "unit": "ns",
            "range": "± 9348.12360072086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234600.66666666666,
            "unit": "ns",
            "range": "± 2401.495152961373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5768838.285714285,
            "unit": "ns",
            "range": "± 35298.39463647161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4018205,
            "unit": "ns",
            "range": "± 61113.31801661566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20824.677083333332,
            "unit": "ns",
            "range": "± 2080.353737606795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94786.21212121213,
            "unit": "ns",
            "range": "± 4441.291466766608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79526.74390243902,
            "unit": "ns",
            "range": "± 4217.360542560954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191058.5483870968,
            "unit": "ns",
            "range": "± 14967.566986303455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5838.969387755102,
            "unit": "ns",
            "range": "± 810.3174566159416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20220.051020408162,
            "unit": "ns",
            "range": "± 2239.8211101821294"
          }
        ]
      }
    ]
  }
}