window.BENCHMARK_DATA = {
  "lastUpdate": 1681461438400,
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
          "id": "a878c60896e7335a8a60941cd3bd7a42448e3358",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:20:20+09:00",
          "tree_id": "c254f45f3ec7cfd35c874b44f4bbbf61dda135af",
          "url": "https://github.com/greymistcube/libplanet/commit/a878c60896e7335a8a60941cd3bd7a42448e3358"
        },
        "date": 1681461416801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588156.1224489796,
            "unit": "ns",
            "range": "± 142501.2809248463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905091.111111111,
            "unit": "ns",
            "range": "± 97639.74791926377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2623893.6842105263,
            "unit": "ns",
            "range": "± 150739.46087892656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6690422.680412371,
            "unit": "ns",
            "range": "± 491340.9613634649"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55606.18556701031,
            "unit": "ns",
            "range": "± 4412.572342017695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8244885.714285715,
            "unit": "ns",
            "range": "± 195777.00397573327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23269078.94736842,
            "unit": "ns",
            "range": "± 743709.4565494136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60157237.93103448,
            "unit": "ns",
            "range": "± 1739707.325634687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118306142.85714285,
            "unit": "ns",
            "range": "± 1281796.510139809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245252283.33333334,
            "unit": "ns",
            "range": "± 4913497.065197647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5803357.34375,
            "unit": "ns",
            "range": "± 80304.81004832785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854211.42578125,
            "unit": "ns",
            "range": "± 17118.660447725313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444941.4192708333,
            "unit": "ns",
            "range": "± 25682.748045837863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3177852.6953125,
            "unit": "ns",
            "range": "± 49512.71197092153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998686.1328125,
            "unit": "ns",
            "range": "± 16058.512454537813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933396.1002604166,
            "unit": "ns",
            "range": "± 13545.312255261255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3812862.2641509436,
            "unit": "ns",
            "range": "± 158403.91558196445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3913193.9393939395,
            "unit": "ns",
            "range": "± 122537.1982792214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4542966.666666667,
            "unit": "ns",
            "range": "± 116168.06291136869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4895590.322580645,
            "unit": "ns",
            "range": "± 146336.02735904037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8030084.848484849,
            "unit": "ns",
            "range": "± 247339.01345270537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363725,
            "unit": "ns",
            "range": "± 10109.754182453184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295780,
            "unit": "ns",
            "range": "± 11845.381430097124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249516.66666666666,
            "unit": "ns",
            "range": "± 3437.1852472979144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6194766.666666667,
            "unit": "ns",
            "range": "± 115333.2356179052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4294084.615384615,
            "unit": "ns",
            "range": "± 42777.09367862365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22219.14893617021,
            "unit": "ns",
            "range": "± 2305.1730789283606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101153.0612244898,
            "unit": "ns",
            "range": "± 6466.12432050078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93224.48979591837,
            "unit": "ns",
            "range": "± 6970.099042685351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204952.12765957447,
            "unit": "ns",
            "range": "± 17735.280001023682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8096.938775510204,
            "unit": "ns",
            "range": "± 1412.2771026854539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22157.291666666668,
            "unit": "ns",
            "range": "± 2222.6463502423444"
          }
        ]
      }
    ]
  }
}