window.BENCHMARK_DATA = {
  "lastUpdate": 1706256049122,
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
          "id": "abee3c445fe3554fef83f605019dbdab639394eb",
          "message": "Prepare 4.0.2",
          "timestamp": "2024-01-26T16:47:09+09:00",
          "tree_id": "45947cb5d90cbe1550fc6fa9f09310ccc7cd8312",
          "url": "https://github.com/greymistcube/libplanet/commit/abee3c445fe3554fef83f605019dbdab639394eb"
        },
        "date": 1706256018690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970385.4166666666,
            "unit": "ns",
            "range": "± 109569.2839969945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733731.111111111,
            "unit": "ns",
            "range": "± 91975.8232087723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1491565.6565656567,
            "unit": "ns",
            "range": "± 132620.18974070443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10953270.32967033,
            "unit": "ns",
            "range": "± 989854.0375557629"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34850.72463768116,
            "unit": "ns",
            "range": "± 1686.0694972423637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5029820,
            "unit": "ns",
            "range": "± 53745.3546165354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13244366.666666666,
            "unit": "ns",
            "range": "± 141493.61250937227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32556430.769230768,
            "unit": "ns",
            "range": "± 197024.55593409072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65577850,
            "unit": "ns",
            "range": "± 608122.2832856657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131763406.66666667,
            "unit": "ns",
            "range": "± 877630.9258995139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3404909.8958333335,
            "unit": "ns",
            "range": "± 11286.608182975378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086802.8385416667,
            "unit": "ns",
            "range": "± 3343.842068812446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745520.5008370535,
            "unit": "ns",
            "range": "± 1875.7905467125333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898395.0270432692,
            "unit": "ns",
            "range": "± 6981.998587027405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611618.3384486607,
            "unit": "ns",
            "range": "± 1036.1922571190134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574000.0455729166,
            "unit": "ns",
            "range": "± 876.1036758244805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114284.722222222,
            "unit": "ns",
            "range": "± 103941.02696840021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211105.9523809524,
            "unit": "ns",
            "range": "± 118700.2221363828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2824051.8518518517,
            "unit": "ns",
            "range": "± 75955.65189063322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2838381.6901408453,
            "unit": "ns",
            "range": "± 138924.50293991558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12266073.333333334,
            "unit": "ns",
            "range": "± 1449309.0429503047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173641.66666666666,
            "unit": "ns",
            "range": "± 9012.149875669296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169057.14285714287,
            "unit": "ns",
            "range": "± 9069.839941126811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139968,
            "unit": "ns",
            "range": "± 2825.2905455309665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2849220,
            "unit": "ns",
            "range": "± 42976.39219053044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518160,
            "unit": "ns",
            "range": "± 39907.90827464079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10835.106382978724,
            "unit": "ns",
            "range": "± 1709.5372854946606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53523.07692307692,
            "unit": "ns",
            "range": "± 4478.568147251155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43697.260273972606,
            "unit": "ns",
            "range": "± 2162.173071160106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56660.82474226804,
            "unit": "ns",
            "range": "± 13697.09181953289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2456.122448979592,
            "unit": "ns",
            "range": "± 469.05615396594277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10795.876288659794,
            "unit": "ns",
            "range": "± 1741.6417976159016"
          }
        ]
      }
    ]
  }
}