window.BENCHMARK_DATA = {
  "lastUpdate": 1707289245094,
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
          "id": "936cae2dc655caf280c893eab7e22f028ca67efe",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:45:59+09:00",
          "tree_id": "1aa9b62a8c2eac4e5a79b8ae47618099457f6eda",
          "url": "https://github.com/greymistcube/libplanet/commit/936cae2dc655caf280c893eab7e22f028ca67efe"
        },
        "date": 1707289226729,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7753011.233333333,
            "unit": "ns",
            "range": "± 110511.16130022258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18948754.14285714,
            "unit": "ns",
            "range": "± 272883.40591256105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47813082.20689655,
            "unit": "ns",
            "range": "± 1384770.5871521356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93018703.64285715,
            "unit": "ns",
            "range": "± 1580242.7643318025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191117804.91666666,
            "unit": "ns",
            "range": "± 4951050.394763088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36847.45054945055,
            "unit": "ns",
            "range": "± 5299.77555764547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216814.71014492755,
            "unit": "ns",
            "range": "± 10380.210959407681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210235.38372093023,
            "unit": "ns",
            "range": "± 10969.95273320141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193803.66292134832,
            "unit": "ns",
            "range": "± 13114.67754944802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3871134.8571428573,
            "unit": "ns",
            "range": "± 63329.790881187546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3485803.269230769,
            "unit": "ns",
            "range": "± 92161.74087399074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12950.139784946237,
            "unit": "ns",
            "range": "± 1060.532849986248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60297.56593406593,
            "unit": "ns",
            "range": "± 6450.054464545581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52123.62637362637,
            "unit": "ns",
            "range": "± 3146.336326757596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62668.762886597935,
            "unit": "ns",
            "range": "± 11467.36261887514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3397.425531914894,
            "unit": "ns",
            "range": "± 336.16452990919333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12925.53125,
            "unit": "ns",
            "range": "± 1503.7655714073253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382186.379120879,
            "unit": "ns",
            "range": "± 114085.40708208577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949860.775510204,
            "unit": "ns",
            "range": "± 221719.86219921708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186086.6739130435,
            "unit": "ns",
            "range": "± 142322.12933401196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23164504.76966292,
            "unit": "ns",
            "range": "± 2870126.1372097945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2852434.189189189,
            "unit": "ns",
            "range": "± 96202.11160417479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2969905.3076923075,
            "unit": "ns",
            "range": "± 121724.14564514604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3574526.1951219514,
            "unit": "ns",
            "range": "± 126794.89351689591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3619651.4864864866,
            "unit": "ns",
            "range": "± 181441.9269030194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22000270.774193548,
            "unit": "ns",
            "range": "± 2641292.15987615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4391495.73984375,
            "unit": "ns",
            "range": "± 80636.21856118942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1340292.7096354167,
            "unit": "ns",
            "range": "± 21231.430373397186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889965.5513556985,
            "unit": "ns",
            "range": "± 17461.950328067196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2007040.108173077,
            "unit": "ns",
            "range": "± 26281.955083463916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616612.7986653646,
            "unit": "ns",
            "range": "± 5368.162345674762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571469.2888532366,
            "unit": "ns",
            "range": "± 9667.386795879658"
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
          "id": "936cae2dc655caf280c893eab7e22f028ca67efe",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:45:59+09:00",
          "tree_id": "1aa9b62a8c2eac4e5a79b8ae47618099457f6eda",
          "url": "https://github.com/greymistcube/libplanet/commit/936cae2dc655caf280c893eab7e22f028ca67efe"
        },
        "date": 1707289226729,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7753011.233333333,
            "unit": "ns",
            "range": "± 110511.16130022258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18948754.14285714,
            "unit": "ns",
            "range": "± 272883.40591256105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47813082.20689655,
            "unit": "ns",
            "range": "± 1384770.5871521356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93018703.64285715,
            "unit": "ns",
            "range": "± 1580242.7643318025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191117804.91666666,
            "unit": "ns",
            "range": "± 4951050.394763088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36847.45054945055,
            "unit": "ns",
            "range": "± 5299.77555764547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216814.71014492755,
            "unit": "ns",
            "range": "± 10380.210959407681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210235.38372093023,
            "unit": "ns",
            "range": "± 10969.95273320141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193803.66292134832,
            "unit": "ns",
            "range": "± 13114.67754944802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3871134.8571428573,
            "unit": "ns",
            "range": "± 63329.790881187546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3485803.269230769,
            "unit": "ns",
            "range": "± 92161.74087399074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12950.139784946237,
            "unit": "ns",
            "range": "± 1060.532849986248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60297.56593406593,
            "unit": "ns",
            "range": "± 6450.054464545581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52123.62637362637,
            "unit": "ns",
            "range": "± 3146.336326757596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62668.762886597935,
            "unit": "ns",
            "range": "± 11467.36261887514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3397.425531914894,
            "unit": "ns",
            "range": "± 336.16452990919333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12925.53125,
            "unit": "ns",
            "range": "± 1503.7655714073253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382186.379120879,
            "unit": "ns",
            "range": "± 114085.40708208577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949860.775510204,
            "unit": "ns",
            "range": "± 221719.86219921708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186086.6739130435,
            "unit": "ns",
            "range": "± 142322.12933401196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23164504.76966292,
            "unit": "ns",
            "range": "± 2870126.1372097945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2852434.189189189,
            "unit": "ns",
            "range": "± 96202.11160417479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2969905.3076923075,
            "unit": "ns",
            "range": "± 121724.14564514604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3574526.1951219514,
            "unit": "ns",
            "range": "± 126794.89351689591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3619651.4864864866,
            "unit": "ns",
            "range": "± 181441.9269030194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22000270.774193548,
            "unit": "ns",
            "range": "± 2641292.15987615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4391495.73984375,
            "unit": "ns",
            "range": "± 80636.21856118942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1340292.7096354167,
            "unit": "ns",
            "range": "± 21231.430373397186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889965.5513556985,
            "unit": "ns",
            "range": "± 17461.950328067196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2007040.108173077,
            "unit": "ns",
            "range": "± 26281.955083463916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616612.7986653646,
            "unit": "ns",
            "range": "± 5368.162345674762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571469.2888532366,
            "unit": "ns",
            "range": "± 9667.386795879658"
          }
        ]
      }
    ]
  }
}