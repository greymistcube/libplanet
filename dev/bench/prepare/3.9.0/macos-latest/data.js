window.BENCHMARK_DATA = {
  "lastUpdate": 1700794476478,
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
          "id": "b491a3c89394f8d4788c76c72abf003669ffa8b5",
          "message": "Prepare 3.9.0",
          "timestamp": "2023-11-24T11:35:02+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/greymistcube/libplanet/commit/b491a3c89394f8d4788c76c72abf003669ffa8b5"
        },
        "date": 1700794460549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9279805.4,
            "unit": "ns",
            "range": "± 205075.09222603263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22690248.07894737,
            "unit": "ns",
            "range": "± 493285.81822557957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62021971.81111111,
            "unit": "ns",
            "range": "± 6031278.192237198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112574261.86666666,
            "unit": "ns",
            "range": "± 1672732.7019006468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234520207,
            "unit": "ns",
            "range": "± 3477147.5495478"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52649.673684210524,
            "unit": "ns",
            "range": "± 10978.7245397653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275378.62765957444,
            "unit": "ns",
            "range": "± 42761.4182246763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254157.47916666666,
            "unit": "ns",
            "range": "± 24749.77316301331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250902.23333333334,
            "unit": "ns",
            "range": "± 11089.011229425629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4425352.5,
            "unit": "ns",
            "range": "± 110111.35115675049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4031477.3636363638,
            "unit": "ns",
            "range": "± 221478.73000800374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17024.677419354837,
            "unit": "ns",
            "range": "± 2714.4130046896057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82473.47368421052,
            "unit": "ns",
            "range": "± 9942.229549863172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73839.13043478261,
            "unit": "ns",
            "range": "± 6801.1450154559525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79846.30208333333,
            "unit": "ns",
            "range": "± 12094.025515992153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5332.876288659794,
            "unit": "ns",
            "range": "± 773.6459442381137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16418.77659574468,
            "unit": "ns",
            "range": "± 1928.4607944097238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1238454.6458333333,
            "unit": "ns",
            "range": "± 145731.88139073682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2900430.064516129,
            "unit": "ns",
            "range": "± 213606.15985702604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1859243.1263157895,
            "unit": "ns",
            "range": "± 163983.72439927148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8507496.484210527,
            "unit": "ns",
            "range": "± 1063611.1160407972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3199877.775280899,
            "unit": "ns",
            "range": "± 198415.57413955883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3273273.948979592,
            "unit": "ns",
            "range": "± 302684.7689898189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3917067.8695652173,
            "unit": "ns",
            "range": "± 98947.63807062269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3890129.505263158,
            "unit": "ns",
            "range": "± 355532.15692083957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15461800.724489795,
            "unit": "ns",
            "range": "± 3137714.6466921773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5244086.944411058,
            "unit": "ns",
            "range": "± 82543.48941023443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1368136.8836616848,
            "unit": "ns",
            "range": "± 34358.34087450816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1016392.8303019205,
            "unit": "ns",
            "range": "± 144985.57061667854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2047635.588152985,
            "unit": "ns",
            "range": "± 88941.64191081689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 665561.516155134,
            "unit": "ns",
            "range": "± 21578.644517720437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596998.4545522836,
            "unit": "ns",
            "range": "± 5737.734237605184"
          }
        ]
      }
    ]
  }
}