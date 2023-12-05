window.BENCHMARK_DATA = {
  "lastUpdate": 1701753774204,
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
          "id": "b2db8c579299ad0e6329bf76eef78013bb687af1",
          "message": "Prepare 3.9.1",
          "timestamp": "2023-12-05T14:12:03+09:00",
          "tree_id": "23990157ea6683c0744454ad72efa3c105fe0488",
          "url": "https://github.com/greymistcube/libplanet/commit/b2db8c579299ad0e6329bf76eef78013bb687af1"
        },
        "date": 1701753766702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197102.17142857143,
            "unit": "ns",
            "range": "± 9521.736572783908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196449.24683544305,
            "unit": "ns",
            "range": "± 10100.487263529767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168595.84285714285,
            "unit": "ns",
            "range": "± 5461.59286150789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3084712.966666667,
            "unit": "ns",
            "range": "± 45923.90841826862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828229.846153846,
            "unit": "ns",
            "range": "± 31052.236475671532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14506.897959183674,
            "unit": "ns",
            "range": "± 2793.095373000393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63478.536082474224,
            "unit": "ns",
            "range": "± 6588.198362826921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52669.38983050847,
            "unit": "ns",
            "range": "± 2112.577662452862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64382.520833333336,
            "unit": "ns",
            "range": "± 13813.810625586317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3082.586956521739,
            "unit": "ns",
            "range": "± 518.5962064289554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11419.529411764706,
            "unit": "ns",
            "range": "± 1085.0765453384834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700092.7157451925,
            "unit": "ns",
            "range": "± 13837.357740244124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1232427.4177083333,
            "unit": "ns",
            "range": "± 18849.684002680668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767001.8622233073,
            "unit": "ns",
            "range": "± 3567.3936036810765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969538.928485577,
            "unit": "ns",
            "range": "± 8849.939482860573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615428.9182128906,
            "unit": "ns",
            "range": "± 11766.699700517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578668.2038010817,
            "unit": "ns",
            "range": "± 3291.47684514461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39108.336842105266,
            "unit": "ns",
            "range": "± 5762.62681608835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437954.2,
            "unit": "ns",
            "range": "± 45163.3342122947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2479193,
            "unit": "ns",
            "range": "± 38206.94871542161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3125977.2666666666,
            "unit": "ns",
            "range": "± 54532.42725920929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2957803.9272727272,
            "unit": "ns",
            "range": "± 125508.55719282349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7109016.066666666,
            "unit": "ns",
            "range": "± 267827.1857079588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5560369,
            "unit": "ns",
            "range": "± 33682.65877957883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14624023.933333334,
            "unit": "ns",
            "range": "± 106718.05876063382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36079423.5,
            "unit": "ns",
            "range": "± 125497.21042302709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75076507.76923077,
            "unit": "ns",
            "range": "± 471464.2159477136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148657755.07692307,
            "unit": "ns",
            "range": "± 504654.3293663927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950338.0549450549,
            "unit": "ns",
            "range": "± 72534.64120517598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1854851,
            "unit": "ns",
            "range": "± 46503.3663671595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1421584.9278350514,
            "unit": "ns",
            "range": "± 119844.06266262973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5783033.833333333,
            "unit": "ns",
            "range": "± 106724.89806713884"
          }
        ]
      }
    ]
  }
}