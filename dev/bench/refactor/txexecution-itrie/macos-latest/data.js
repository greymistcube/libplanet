window.BENCHMARK_DATA = {
  "lastUpdate": 1695259570732,
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
        "date": 1695259535819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11403828.71875,
            "unit": "ns",
            "range": "± 1749232.523678991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27832861.03763441,
            "unit": "ns",
            "range": "± 3888639.883194921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65894777.505494505,
            "unit": "ns",
            "range": "± 9019594.546428906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 150017370.36813188,
            "unit": "ns",
            "range": "± 18632119.350395717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290629182.32417583,
            "unit": "ns",
            "range": "± 39787529.5759431"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57143.876470588235,
            "unit": "ns",
            "range": "± 9058.13317119255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230655.67021276595,
            "unit": "ns",
            "range": "± 25614.611464581478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240739.1914893617,
            "unit": "ns",
            "range": "± 25202.704689308368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237002.05263157896,
            "unit": "ns",
            "range": "± 23530.147156346648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198328.142857143,
            "unit": "ns",
            "range": "± 84395.7191919624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3477065.8333333335,
            "unit": "ns",
            "range": "± 51429.23604921679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14813.015789473684,
            "unit": "ns",
            "range": "± 3139.7047017370505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72816.9375,
            "unit": "ns",
            "range": "± 12428.98797405527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69926.22680412371,
            "unit": "ns",
            "range": "± 14394.57485949217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81407.38775510204,
            "unit": "ns",
            "range": "± 19326.2902059978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5970.367346938776,
            "unit": "ns",
            "range": "± 1886.8769792435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29400.708333333332,
            "unit": "ns",
            "range": "± 6750.533923392814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639433,
            "unit": "ns",
            "range": "± 536924.3571399447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431475.3402061854,
            "unit": "ns",
            "range": "± 884778.0792791925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2220026.0483870967,
            "unit": "ns",
            "range": "± 632041.4157446921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7718633.052631579,
            "unit": "ns",
            "range": "± 2033564.6040384746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4467191.510204081,
            "unit": "ns",
            "range": "± 1074935.7956917298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4337068.75,
            "unit": "ns",
            "range": "± 766796.1331427351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110208.032608695,
            "unit": "ns",
            "range": "± 927239.7705680246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3773786.4545454546,
            "unit": "ns",
            "range": "± 396425.40109720314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6404289.857142857,
            "unit": "ns",
            "range": "± 693315.2822239848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961229.5692866165,
            "unit": "ns",
            "range": "± 1004665.2390200826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537704.8575032551,
            "unit": "ns",
            "range": "± 112924.30217042583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 866064.6482121394,
            "unit": "ns",
            "range": "± 7705.293807120432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2028344.4232700893,
            "unit": "ns",
            "range": "± 14099.814363596852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961902.3929135101,
            "unit": "ns",
            "range": "± 260172.68912352674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706745.7561328125,
            "unit": "ns",
            "range": "± 117683.00025051845"
          }
        ]
      }
    ]
  }
}