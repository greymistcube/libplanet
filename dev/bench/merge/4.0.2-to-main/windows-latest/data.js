window.BENCHMARK_DATA = {
  "lastUpdate": 1707198335013,
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
          "id": "fa5c59e9034f5db4c36a914a9cd344df727f757d",
          "message": "Merge tag '4.0.2' into merge/4.0.2-to-main\n\nLibplanet 4.0.2",
          "timestamp": "2024-02-06T14:33:31+09:00",
          "tree_id": "1962cabcefac60b16dcc0d70eadaa10d61f02fac",
          "url": "https://github.com/greymistcube/libplanet/commit/fa5c59e9034f5db4c36a914a9cd344df727f757d"
        },
        "date": 1707198314849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002098.9583333334,
            "unit": "ns",
            "range": "± 102420.15991394586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1823039.2857142857,
            "unit": "ns",
            "range": "± 74032.31647812246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631682.105263158,
            "unit": "ns",
            "range": "± 158171.6398571349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11191755.319148935,
            "unit": "ns",
            "range": "± 902966.2114705202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35674.1935483871,
            "unit": "ns",
            "range": "± 2479.301410452341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5123273.333333333,
            "unit": "ns",
            "range": "± 58303.14211903489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13498564.285714285,
            "unit": "ns",
            "range": "± 108700.48196866369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33433233.333333332,
            "unit": "ns",
            "range": "± 584058.4592397612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67302763.33333333,
            "unit": "ns",
            "range": "± 780540.5854430692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137909753.33333334,
            "unit": "ns",
            "range": "± 2072008.2131892743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3366776.981026786,
            "unit": "ns",
            "range": "± 7785.797796692788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1092103.2291666667,
            "unit": "ns",
            "range": "± 3622.40643320488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735997.3763020834,
            "unit": "ns",
            "range": "± 2082.06111721652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959235.625,
            "unit": "ns",
            "range": "± 4498.817540866561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610311.4778645834,
            "unit": "ns",
            "range": "± 1168.8901194291363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584477.44140625,
            "unit": "ns",
            "range": "± 700.2069128534484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2317600,
            "unit": "ns",
            "range": "± 37576.67716372307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2343872.727272727,
            "unit": "ns",
            "range": "± 55147.46621834072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2882814.705882353,
            "unit": "ns",
            "range": "± 87644.37831322025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2805919.4029850746,
            "unit": "ns",
            "range": "± 118924.05169840729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12422443.181818182,
            "unit": "ns",
            "range": "± 1471672.3505282348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178759.0909090909,
            "unit": "ns",
            "range": "± 10914.744181306527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167953.7037037037,
            "unit": "ns",
            "range": "± 7034.972287106992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145784.375,
            "unit": "ns",
            "range": "± 4411.722608116669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2854810,
            "unit": "ns",
            "range": "± 61934.08975422348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460165.5172413792,
            "unit": "ns",
            "range": "± 67028.03398505344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11412.5,
            "unit": "ns",
            "range": "± 1533.503041714417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53029.06976744186,
            "unit": "ns",
            "range": "± 3349.6923925171104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45043.54838709677,
            "unit": "ns",
            "range": "± 2047.138824426122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59724.46808510638,
            "unit": "ns",
            "range": "± 11596.696657666707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2793.75,
            "unit": "ns",
            "range": "± 582.1579637322177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11402.127659574468,
            "unit": "ns",
            "range": "± 1877.4255264014364"
          }
        ]
      }
    ]
  }
}