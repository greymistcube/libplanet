window.BENCHMARK_DATA = {
  "lastUpdate": 1678939822306,
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
          "id": "3dcb8d4f426e4e1694e4a244ac74875949ca478f",
          "message": "Fix tests",
          "timestamp": "2023-03-16T12:46:07+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/greymistcube/libplanet/commit/3dcb8d4f426e4e1694e4a244ac74875949ca478f"
        },
        "date": 1678939807599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9547107.78125,
            "unit": "ns",
            "range": "± 847841.9893900745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22876648.93956044,
            "unit": "ns",
            "range": "± 2008633.686552546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55473953.196428575,
            "unit": "ns",
            "range": "± 2378291.4789967826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116859866.75294118,
            "unit": "ns",
            "range": "± 6285492.224667151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 227887470.49019608,
            "unit": "ns",
            "range": "± 9308111.224490989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80567.3705882353,
            "unit": "ns",
            "range": "± 11766.548807033067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251161.96842105262,
            "unit": "ns",
            "range": "± 36706.19375946657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240105.0918367347,
            "unit": "ns",
            "range": "± 34064.27767390771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222161.9247311828,
            "unit": "ns",
            "range": "± 21759.08368047327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13371181.103448275,
            "unit": "ns",
            "range": "± 723524.299516674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11259204.864583334,
            "unit": "ns",
            "range": "± 948933.668455761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28635.068965517243,
            "unit": "ns",
            "range": "± 4660.02464509179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68400.04494382022,
            "unit": "ns",
            "range": "± 9981.473656810074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66836.68072289157,
            "unit": "ns",
            "range": "± 4001.1380793913586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150697.25,
            "unit": "ns",
            "range": "± 32418.85785935808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9544.966292134832,
            "unit": "ns",
            "range": "± 971.7159897624199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25249.219101123595,
            "unit": "ns",
            "range": "± 3849.561329757304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635416.7083333333,
            "unit": "ns",
            "range": "± 206948.43680974795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3000022.6979166665,
            "unit": "ns",
            "range": "± 175143.1358509599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554697.87628866,
            "unit": "ns",
            "range": "± 198668.6045021152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6327443.4,
            "unit": "ns",
            "range": "± 219461.29968510833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3517702.9081632653,
            "unit": "ns",
            "range": "± 240678.34310784133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5408607.166666667,
            "unit": "ns",
            "range": "± 381952.0063581609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27415081.575757574,
            "unit": "ns",
            "range": "± 1883478.9282188616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6632845.868131869,
            "unit": "ns",
            "range": "± 562044.0122459609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29594501.402777776,
            "unit": "ns",
            "range": "± 1445556.0607452707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7250880.648809524,
            "unit": "ns",
            "range": "± 389465.6303643039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044437.2630208333,
            "unit": "ns",
            "range": "± 47476.56586366396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1470827.8289535984,
            "unit": "ns",
            "range": "± 105762.0703584646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3149540.0680859373,
            "unit": "ns",
            "range": "± 301627.99796801805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952889.9774305555,
            "unit": "ns",
            "range": "± 31351.48451246331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 950709.6988220215,
            "unit": "ns",
            "range": "± 29393.92040602173"
          }
        ]
      }
    ]
  }
}