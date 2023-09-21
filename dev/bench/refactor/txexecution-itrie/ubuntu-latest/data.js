window.BENCHMARK_DATA = {
  "lastUpdate": 1695259386295,
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
          "id": "978b7684b3d8aad7ba2e6cf8b42c6aec5173e9a6",
          "message": "Refactor TxResult to partially accommodate TxExecution changes",
          "timestamp": "2023-09-21T10:01:32+09:00",
          "tree_id": "185d09749713c4470be4cbde80874b7423ad42e2",
          "url": "https://github.com/greymistcube/libplanet/commit/978b7684b3d8aad7ba2e6cf8b42c6aec5173e9a6"
        },
        "date": 1695259376859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348794.40625,
            "unit": "ns",
            "range": "± 57174.42967576513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326828.806122449,
            "unit": "ns",
            "range": "± 48488.859167164956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282152.59574468085,
            "unit": "ns",
            "range": "± 34285.710934847746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5133656.275510204,
            "unit": "ns",
            "range": "± 469242.7281094109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4694498.145833333,
            "unit": "ns",
            "range": "± 547807.5746264035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28630.010101010103,
            "unit": "ns",
            "range": "± 9657.034160942543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110168.92857142857,
            "unit": "ns",
            "range": "± 23083.938327017924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104973.46875,
            "unit": "ns",
            "range": "± 21514.592178554987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124058.1914893617,
            "unit": "ns",
            "range": "± 27907.106961734502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6367.46511627907,
            "unit": "ns",
            "range": "± 880.5771462702833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26432.73469387755,
            "unit": "ns",
            "range": "± 9042.204591084595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3718536.8020833335,
            "unit": "ns",
            "range": "± 362556.4999992668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4194309.12371134,
            "unit": "ns",
            "range": "± 381293.5234072536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5331446,
            "unit": "ns",
            "range": "± 430249.06776216323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4597400.102040816,
            "unit": "ns",
            "range": "± 428813.5162107903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7819020.978947368,
            "unit": "ns",
            "range": "± 525559.732854937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456942.268041237,
            "unit": "ns",
            "range": "± 217296.9102944419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2959099.861702128,
            "unit": "ns",
            "range": "± 365594.7374670542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133071.5483870967,
            "unit": "ns",
            "range": "± 269470.55455513194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7708130.739583333,
            "unit": "ns",
            "range": "± 743336.8516843241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62461.24742268041,
            "unit": "ns",
            "range": "± 13521.56016410376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8980568.947916666,
            "unit": "ns",
            "range": "± 841269.8791549327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24910941.31958763,
            "unit": "ns",
            "range": "± 2359911.5355519396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69486602.57731959,
            "unit": "ns",
            "range": "± 4413059.128064146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135792192.6969697,
            "unit": "ns",
            "range": "± 8167810.724322312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264004137.11363637,
            "unit": "ns",
            "range": "± 9811764.068426851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5752447.233333333,
            "unit": "ns",
            "range": "± 102156.81589376724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080338.5055277122,
            "unit": "ns",
            "range": "± 86448.44469371293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286170.4398311493,
            "unit": "ns",
            "range": "± 72861.89289816096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3079538.916332348,
            "unit": "ns",
            "range": "± 153428.5686339631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950886.1104403409,
            "unit": "ns",
            "range": "± 29907.776161663656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962765.4969308035,
            "unit": "ns",
            "range": "± 21865.00336109531"
          }
        ]
      }
    ]
  }
}