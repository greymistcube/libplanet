window.BENCHMARK_DATA = {
  "lastUpdate": 1695261074564,
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
      },
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
          "id": "5c3dcdbca56d8ea0849555229c722e40f7191971",
          "message": "Clean up TxResult API",
          "timestamp": "2023-09-21T10:30:51+09:00",
          "tree_id": "69e7e3e29ed4c18fb100210f260b49af947be9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/5c3dcdbca56d8ea0849555229c722e40f7191971"
        },
        "date": 1695261060724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8241061.5227272725,
            "unit": "ns",
            "range": "± 302610.0641514483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19593479.903225806,
            "unit": "ns",
            "range": "± 591822.6024295543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50951557.43877551,
            "unit": "ns",
            "range": "± 2011850.6518329857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103822199.91025642,
            "unit": "ns",
            "range": "± 5354597.37927277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204978711.2142857,
            "unit": "ns",
            "range": "± 5799902.802433716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63234.188888888886,
            "unit": "ns",
            "range": "± 8024.832534420462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374176.5543478261,
            "unit": "ns",
            "range": "± 73865.72936812395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348922.04347826086,
            "unit": "ns",
            "range": "± 35426.19512215859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307431.75274725276,
            "unit": "ns",
            "range": "± 20624.40591768964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208827.018518519,
            "unit": "ns",
            "range": "± 176676.21367749182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3723683.703703704,
            "unit": "ns",
            "range": "± 141516.5756056385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21790.47311827957,
            "unit": "ns",
            "range": "± 4535.411458711656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95915.13,
            "unit": "ns",
            "range": "± 17307.040922936012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92900.33673469388,
            "unit": "ns",
            "range": "± 16915.164091005645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98247.71578947369,
            "unit": "ns",
            "range": "± 13538.60449584671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5856.768041237114,
            "unit": "ns",
            "range": "± 1219.830969467559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18273.074468085106,
            "unit": "ns",
            "range": "± 2873.5718827554347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1562551.8775510204,
            "unit": "ns",
            "range": "± 176651.35825596013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792703.0212765955,
            "unit": "ns",
            "range": "± 108183.52002309082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090138.8979591837,
            "unit": "ns",
            "range": "± 186570.8919563594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6880724.160714285,
            "unit": "ns",
            "range": "± 287419.49447832117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339843.2391304346,
            "unit": "ns",
            "range": "± 151592.2406927692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610762.64893617,
            "unit": "ns",
            "range": "± 300142.60458464397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4504106.516393443,
            "unit": "ns",
            "range": "± 200763.55587444082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3976135.4787234045,
            "unit": "ns",
            "range": "± 256788.77223385472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7272671.59375,
            "unit": "ns",
            "range": "± 473701.22471685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6406868.244395381,
            "unit": "ns",
            "range": "± 233380.37827427275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847766.7772042411,
            "unit": "ns",
            "range": "± 18104.107513077055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047692.5906661184,
            "unit": "ns",
            "range": "± 21001.58418386184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694908.1106106504,
            "unit": "ns",
            "range": "± 164668.72251251613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820249.1881103516,
            "unit": "ns",
            "range": "± 16239.66132047075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811309.821858724,
            "unit": "ns",
            "range": "± 20995.426569510917"
          }
        ]
      }
    ]
  }
}