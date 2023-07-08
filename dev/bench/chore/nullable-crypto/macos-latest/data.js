window.BENCHMARK_DATA = {
  "lastUpdate": 1688815934132,
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
          "id": "5620fcbbe02a0d05a15d8a8c0d082a188239ff6a",
          "message": "Nullable crypto",
          "timestamp": "2023-07-08T20:14:57+09:00",
          "tree_id": "ca7d1bf28b1784bae6b9a3c9fff571c818a9f28e",
          "url": "https://github.com/greymistcube/libplanet/commit/5620fcbbe02a0d05a15d8a8c0d082a188239ff6a"
        },
        "date": 1688815920118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7899689.2,
            "unit": "ns",
            "range": "± 75212.97972158795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19670257.13043478,
            "unit": "ns",
            "range": "± 494918.7872536908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49888513.61290322,
            "unit": "ns",
            "range": "± 1500733.449962266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97803865.71428572,
            "unit": "ns",
            "range": "± 2228463.577053575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206045539.76666668,
            "unit": "ns",
            "range": "± 3831737.69658563"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57778.23563218391,
            "unit": "ns",
            "range": "± 5583.991177984491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327303.06593406596,
            "unit": "ns",
            "range": "± 28328.28347186379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315167.2244897959,
            "unit": "ns",
            "range": "± 24914.736937308215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298043.4381443299,
            "unit": "ns",
            "range": "± 23099.858081641265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4194854.875,
            "unit": "ns",
            "range": "± 76480.42046770315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858659.1052631577,
            "unit": "ns",
            "range": "± 81391.4238670108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19135.5,
            "unit": "ns",
            "range": "± 2689.415021136377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100610.5612244898,
            "unit": "ns",
            "range": "± 18909.760127067268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93179.60204081633,
            "unit": "ns",
            "range": "± 14223.572226456787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105102.38541666667,
            "unit": "ns",
            "range": "± 12250.075832521277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5524.236559139785,
            "unit": "ns",
            "range": "± 602.3280811522518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16967.094736842104,
            "unit": "ns",
            "range": "± 2343.1518238588073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722821.3673469387,
            "unit": "ns",
            "range": "± 221395.79399983474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3257080.4368421054,
            "unit": "ns",
            "range": "± 302883.1618389328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2272644.8020833335,
            "unit": "ns",
            "range": "± 239206.14311472763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6659710.919354838,
            "unit": "ns",
            "range": "± 376422.02188455866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3211441.376344086,
            "unit": "ns",
            "range": "± 183142.28937322943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3468671.53125,
            "unit": "ns",
            "range": "± 236255.3333381382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4409922.127906977,
            "unit": "ns",
            "range": "± 158077.1107271962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3932033.815217391,
            "unit": "ns",
            "range": "± 225393.5946663388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7562916.651898734,
            "unit": "ns",
            "range": "± 390839.7555988469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7226803.982712766,
            "unit": "ns",
            "range": "± 279623.06492411817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953787.6399739583,
            "unit": "ns",
            "range": "± 64356.64682514861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289911.716796875,
            "unit": "ns",
            "range": "± 17239.72510288855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553362.65354887,
            "unit": "ns",
            "range": "± 97650.19676561991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845886.4352678572,
            "unit": "ns",
            "range": "± 8424.180018019038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790453.2066824777,
            "unit": "ns",
            "range": "± 9706.485803437408"
          }
        ]
      }
    ]
  }
}