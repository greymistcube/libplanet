window.BENCHMARK_DATA = {
  "lastUpdate": 1687509319475,
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
          "id": "be698740ac9a4dd6770738b1fb5b5374c09b4b9d",
          "message": "Returned data structures changed for more consistency",
          "timestamp": "2023-06-23T17:14:53+09:00",
          "tree_id": "909236209132c6afc22bab5b18d495022603ce44",
          "url": "https://github.com/greymistcube/libplanet/commit/be698740ac9a4dd6770738b1fb5b5374c09b4b9d"
        },
        "date": 1687509295529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1839471.2765957448,
            "unit": "ns",
            "range": "± 163726.2005177766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3434425,
            "unit": "ns",
            "range": "± 269430.21047349065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2925134.0206185565,
            "unit": "ns",
            "range": "± 264003.8809242039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7148551.0869565215,
            "unit": "ns",
            "range": "± 527005.7783728427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60767.36842105263,
            "unit": "ns",
            "range": "± 11771.236509329283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9563810.204081632,
            "unit": "ns",
            "range": "± 569702.3419747407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25600398.387096774,
            "unit": "ns",
            "range": "± 1164816.6047855949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66357769.76744186,
            "unit": "ns",
            "range": "± 2412123.4814533265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131449051.51515152,
            "unit": "ns",
            "range": "± 3923002.516896434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265926546.66666666,
            "unit": "ns",
            "range": "± 4655420.178959861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6233968.75,
            "unit": "ns",
            "range": "± 88405.80813695908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984692.4739583333,
            "unit": "ns",
            "range": "± 31563.87949162335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1583034.47265625,
            "unit": "ns",
            "range": "± 19437.569621447252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3361876.4404296875,
            "unit": "ns",
            "range": "± 54582.90623380212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1094919.1796875,
            "unit": "ns",
            "range": "± 15702.669848161777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1000495.2566964285,
            "unit": "ns",
            "range": "± 15334.756638670657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4116421.3114754097,
            "unit": "ns",
            "range": "± 185370.78348969857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4221728.571428572,
            "unit": "ns",
            "range": "± 381857.26620371826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5562307.142857143,
            "unit": "ns",
            "range": "± 267250.2248864598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5452031.460674157,
            "unit": "ns",
            "range": "± 465466.9851087737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8892142.528735632,
            "unit": "ns",
            "range": "± 484051.51456396736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342728.86597938143,
            "unit": "ns",
            "range": "± 40699.76954982589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327082.79569892475,
            "unit": "ns",
            "range": "± 27378.84626009457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292570.652173913,
            "unit": "ns",
            "range": "± 36649.3198534958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5142452.747252747,
            "unit": "ns",
            "range": "± 286265.9091515592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4854477.5,
            "unit": "ns",
            "range": "± 169680.07073267666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26813.26530612245,
            "unit": "ns",
            "range": "± 8850.634990966468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113684.21052631579,
            "unit": "ns",
            "range": "± 19706.85870338566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116404.04040404041,
            "unit": "ns",
            "range": "± 28835.27077471984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136710.63829787233,
            "unit": "ns",
            "range": "± 25027.423531407567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8120,
            "unit": "ns",
            "range": "± 1890.258884831756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22629.67032967033,
            "unit": "ns",
            "range": "± 5964.496709800502"
          }
        ]
      }
    ]
  }
}