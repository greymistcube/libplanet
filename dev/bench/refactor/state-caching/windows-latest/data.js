window.BENCHMARK_DATA = {
  "lastUpdate": 1679562517079,
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
          "id": "81f62bdf83fd9321842d901f2730764263337718",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:50:45+09:00",
          "tree_id": "3b9228a74d791581247e7096b727c530af6da885",
          "url": "https://github.com/greymistcube/libplanet/commit/81f62bdf83fd9321842d901f2730764263337718"
        },
        "date": 1679562394440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134238.88888888888,
            "unit": "ns",
            "range": "± 14935.80063436738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4854894.114583333,
            "unit": "ns",
            "range": "± 14225.9771598746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523315.3041294643,
            "unit": "ns",
            "range": "± 2847.903940701603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171724.9849759615,
            "unit": "ns",
            "range": "± 5431.9846609836895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706345.3450520835,
            "unit": "ns",
            "range": "± 13944.41271692382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827509.1458834135,
            "unit": "ns",
            "range": "± 3131.746427087943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780982.8369140625,
            "unit": "ns",
            "range": "± 753.2993480340219"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4589639.609375,
            "unit": "ns",
            "range": "± 36274.29094861555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5646507.142857143,
            "unit": "ns",
            "range": "± 87440.4453529171"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24996700,
            "unit": "ns",
            "range": "± 726002.9761504496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5720269.230769231,
            "unit": "ns",
            "range": "± 293312.5062347092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28738485.714285713,
            "unit": "ns",
            "range": "± 389388.0007971935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95081.31868131868,
            "unit": "ns",
            "range": "± 10241.179533713792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190837.5,
            "unit": "ns",
            "range": "± 11340.891453740189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171962.5,
            "unit": "ns",
            "range": "± 13301.533350470698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3700185.714285714,
            "unit": "ns",
            "range": "± 42537.66850402408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9080930.612244898,
            "unit": "ns",
            "range": "± 362251.0468147295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18906.81818181818,
            "unit": "ns",
            "range": "± 3656.0702304223546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53851.041666666664,
            "unit": "ns",
            "range": "± 6966.702682900269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39926.76056338028,
            "unit": "ns",
            "range": "± 1817.8447007752948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97984.94623655915,
            "unit": "ns",
            "range": "± 18911.47538812807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5687.096774193548,
            "unit": "ns",
            "range": "± 793.6193653475818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18924,
            "unit": "ns",
            "range": "± 3033.8201407573006"
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
          "id": "e10abba2d1e2181eeb2fa857709cc58772e62418",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:48:40+09:00",
          "tree_id": "420b79d8af8438c8fceaadc0aecb2338a4d58d98",
          "url": "https://github.com/greymistcube/libplanet/commit/e10abba2d1e2181eeb2fa857709cc58772e62418"
        },
        "date": 1679562487418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99334.34343434343,
            "unit": "ns",
            "range": "± 5968.8333666136405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4787592.604166667,
            "unit": "ns",
            "range": "± 23476.04116604315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555768.1315104167,
            "unit": "ns",
            "range": "± 10851.08348784824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172412.3744419643,
            "unit": "ns",
            "range": "± 4125.9021088149975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668119.0011160714,
            "unit": "ns",
            "range": "± 7199.847809262525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829915.80078125,
            "unit": "ns",
            "range": "± 2628.6599510995957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763362.2916666666,
            "unit": "ns",
            "range": "± 1791.0811100343008"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4579602.005208333,
            "unit": "ns",
            "range": "± 71583.55121989513"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5028896.153846154,
            "unit": "ns",
            "range": "± 196256.3189556328"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24862715.625,
            "unit": "ns",
            "range": "± 747547.7242762261"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6221221.428571428,
            "unit": "ns",
            "range": "± 143779.83566153198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26173696.153846152,
            "unit": "ns",
            "range": "± 571501.9877346144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90354.83870967742,
            "unit": "ns",
            "range": "± 9038.943716292924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173282.27848101265,
            "unit": "ns",
            "range": "± 9018.268631003473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166323.4693877551,
            "unit": "ns",
            "range": "± 10636.416738504358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3533644,
            "unit": "ns",
            "range": "± 90319.07365925908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8909418.421052631,
            "unit": "ns",
            "range": "± 192067.09780303217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19211.340206185567,
            "unit": "ns",
            "range": "± 2135.458395787063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52334.04255319149,
            "unit": "ns",
            "range": "± 7192.327949384891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38779.710144927536,
            "unit": "ns",
            "range": "± 1885.1259678728388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91154.63917525773,
            "unit": "ns",
            "range": "± 18041.20873525014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5645.505617977528,
            "unit": "ns",
            "range": "± 743.1367964672012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18431.632653061224,
            "unit": "ns",
            "range": "± 3128.233483876233"
          }
        ]
      }
    ]
  }
}