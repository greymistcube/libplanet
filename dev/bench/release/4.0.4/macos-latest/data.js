window.BENCHMARK_DATA = {
  "lastUpdate": 1707289861193,
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
          "id": "64c3d37f522affc57f1837edce888aebf1a08be7",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:49:45+09:00",
          "tree_id": "6334141a92893468fe729e7e55eb13bb97e411f1",
          "url": "https://github.com/greymistcube/libplanet/commit/64c3d37f522affc57f1837edce888aebf1a08be7"
        },
        "date": 1707289846481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8314888.322222223,
            "unit": "ns",
            "range": "± 314873.53887367435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20963629.533333335,
            "unit": "ns",
            "range": "± 382738.34365713806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50223448.87209302,
            "unit": "ns",
            "range": "± 1817648.9720335237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100527864.96666667,
            "unit": "ns",
            "range": "± 1581533.0763086837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218951456.87349397,
            "unit": "ns",
            "range": "± 11602605.438301418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67275.94565217392,
            "unit": "ns",
            "range": "± 10919.642967399412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300421.0777777778,
            "unit": "ns",
            "range": "± 23655.756976209366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289750.9673913043,
            "unit": "ns",
            "range": "± 18523.575744482016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282209.140625,
            "unit": "ns",
            "range": "± 13010.87342012495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262712,
            "unit": "ns",
            "range": "± 111178.8905653107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4067766.9895833335,
            "unit": "ns",
            "range": "± 241520.5618203353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23306.020833333332,
            "unit": "ns",
            "range": "± 3352.6512712970653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104691.01052631579,
            "unit": "ns",
            "range": "± 19125.737956834637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105031.76595744681,
            "unit": "ns",
            "range": "± 13627.167473194293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128880.09139784946,
            "unit": "ns",
            "range": "± 22666.988654849054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7007.715053763441,
            "unit": "ns",
            "range": "± 1326.6820729980486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20968.135416666668,
            "unit": "ns",
            "range": "± 3792.377300849115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539451.1578947369,
            "unit": "ns",
            "range": "± 165361.34878342887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774885.4482758623,
            "unit": "ns",
            "range": "± 163609.50194997835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2555736.553763441,
            "unit": "ns",
            "range": "± 217688.67380122014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 36211777.74226804,
            "unit": "ns",
            "range": "± 11409285.64382635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339942.9054054054,
            "unit": "ns",
            "range": "± 166612.20647391767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3466622.9210526315,
            "unit": "ns",
            "range": "± 175183.24609937356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218971.2272727275,
            "unit": "ns",
            "range": "± 102354.84944332112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4543125.042105263,
            "unit": "ns",
            "range": "± 315721.50594097405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31287694.414141413,
            "unit": "ns",
            "range": "± 3735961.6623339215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5980685.704799107,
            "unit": "ns",
            "range": "± 94929.55059795461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868092.453930664,
            "unit": "ns",
            "range": "± 96492.77953116667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1125308.0388020833,
            "unit": "ns",
            "range": "± 9471.075324206065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2839728.321555398,
            "unit": "ns",
            "range": "± 186081.6069094646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907519.1456473215,
            "unit": "ns",
            "range": "± 16053.088527507965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838937.0780436198,
            "unit": "ns",
            "range": "± 6529.845752465733"
          }
        ]
      }
    ]
  }
}