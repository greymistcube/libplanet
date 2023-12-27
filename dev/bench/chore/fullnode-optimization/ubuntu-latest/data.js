window.BENCHMARK_DATA = {
  "lastUpdate": 1703656879965,
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
          "id": "e9e2b20ae2a1ec19763e3beb49d7770ae84426a1",
          "message": "Slightly optimized FullNode",
          "timestamp": "2023-12-27T14:44:14+09:00",
          "tree_id": "3079199eb5d6660ea78a5af483aec226128c61d9",
          "url": "https://github.com/greymistcube/libplanet/commit/e9e2b20ae2a1ec19763e3beb49d7770ae84426a1"
        },
        "date": 1703656510756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3809612.4580078125,
            "unit": "ns",
            "range": "± 10158.548830011148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203693.4223257212,
            "unit": "ns",
            "range": "± 8149.597135903534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770840.541391226,
            "unit": "ns",
            "range": "± 2806.047607594332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924508.2065805288,
            "unit": "ns",
            "range": "± 9272.090292791609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611217.9305889423,
            "unit": "ns",
            "range": "± 1054.434185084402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574500.1798828125,
            "unit": "ns",
            "range": "± 856.9755849276958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424009.7333333334,
            "unit": "ns",
            "range": "± 41132.9610765358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500910,
            "unit": "ns",
            "range": "± 41789.21594419748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3135834.227272727,
            "unit": "ns",
            "range": "± 36576.96709019648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2972945.9846153846,
            "unit": "ns",
            "range": "± 138887.0312895399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7020721.783783784,
            "unit": "ns",
            "range": "± 235066.82681871258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42078.37368421053,
            "unit": "ns",
            "range": "± 5674.432854296289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197889.8536585366,
            "unit": "ns",
            "range": "± 6375.894806068304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195332.73214285713,
            "unit": "ns",
            "range": "± 8417.722090902938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161540.04166666666,
            "unit": "ns",
            "range": "± 4173.413121791914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3041044.346153846,
            "unit": "ns",
            "range": "± 19499.378899707524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2761330,
            "unit": "ns",
            "range": "± 12434.559172651912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14402.663265306122,
            "unit": "ns",
            "range": "± 3103.227740790864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69119.09375,
            "unit": "ns",
            "range": "± 9236.769125366778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67950.84,
            "unit": "ns",
            "range": "± 16013.039348801422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90803.5,
            "unit": "ns",
            "range": "± 15058.088749480594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3173.7954545454545,
            "unit": "ns",
            "range": "± 853.030098229159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16234.989361702128,
            "unit": "ns",
            "range": "± 1937.728298001259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5667071,
            "unit": "ns",
            "range": "± 35060.765648316265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14418337.285714285,
            "unit": "ns",
            "range": "± 93676.94977969486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36965259.823529415,
            "unit": "ns",
            "range": "± 659590.9456875749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75439015.13333334,
            "unit": "ns",
            "range": "± 931354.9974475643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149403442.3846154,
            "unit": "ns",
            "range": "± 542265.060983178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003615.6875,
            "unit": "ns",
            "range": "± 126126.23061581579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1941743.8736263737,
            "unit": "ns",
            "range": "± 108255.97155873444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474392.3789473684,
            "unit": "ns",
            "range": "± 120721.81128248101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5908037.431818182,
            "unit": "ns",
            "range": "± 221478.5136497073"
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
          "id": "ec9a0fbdbc46e0e6d87cf8864586628b5b286582",
          "message": "Changelog",
          "timestamp": "2023-12-27T14:50:07+09:00",
          "tree_id": "d889867351d6c3596bc4fa674fbb5420ac7897dc",
          "url": "https://github.com/greymistcube/libplanet/commit/ec9a0fbdbc46e0e6d87cf8864586628b5b286582"
        },
        "date": 1703656872429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3650953.1932091345,
            "unit": "ns",
            "range": "± 23595.2496186459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205538.35546875,
            "unit": "ns",
            "range": "± 3371.1353668192487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751567.6945612981,
            "unit": "ns",
            "range": "± 3002.042252735963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923962.389423077,
            "unit": "ns",
            "range": "± 1887.388038437542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612043.1016438802,
            "unit": "ns",
            "range": "± 968.4631554719473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571657.460561899,
            "unit": "ns",
            "range": "± 809.9310497226118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425495.5714285714,
            "unit": "ns",
            "range": "± 36237.02428501776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564037.6153846155,
            "unit": "ns",
            "range": "± 67739.2934206296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101072.1428571427,
            "unit": "ns",
            "range": "± 48281.54752571651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3057385.9210526315,
            "unit": "ns",
            "range": "± 132813.19207361832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6900806.115384615,
            "unit": "ns",
            "range": "± 184340.27057381184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37590.41758241758,
            "unit": "ns",
            "range": "± 3191.112519573121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200067.57894736843,
            "unit": "ns",
            "range": "± 6727.029912193404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191892.38461538462,
            "unit": "ns",
            "range": "± 7459.488780659054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166210.33333333334,
            "unit": "ns",
            "range": "± 5985.44784748471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3088103.966666667,
            "unit": "ns",
            "range": "± 43135.83310538047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2777392.8571428573,
            "unit": "ns",
            "range": "± 32650.78324624704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12027.416666666666,
            "unit": "ns",
            "range": "± 1016.2739235655406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68850.68085106384,
            "unit": "ns",
            "range": "± 5445.598682911575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59233.37755102041,
            "unit": "ns",
            "range": "± 6542.993216584773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63114.24742268041,
            "unit": "ns",
            "range": "± 14723.789073745396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2923.0408163265306,
            "unit": "ns",
            "range": "± 432.59606926276473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14238.34693877551,
            "unit": "ns",
            "range": "± 2856.4470870063087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700931.023809524,
            "unit": "ns",
            "range": "± 135368.26008729634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14145172.714285715,
            "unit": "ns",
            "range": "± 90699.18752195555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36647394.3125,
            "unit": "ns",
            "range": "± 598473.4904821564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73707054.9,
            "unit": "ns",
            "range": "± 721599.15418938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152306760.57142857,
            "unit": "ns",
            "range": "± 1142825.9907081025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961227.0102040817,
            "unit": "ns",
            "range": "± 101236.26930130468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922018.2727272727,
            "unit": "ns",
            "range": "± 105383.0970223248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1381332.8541666667,
            "unit": "ns",
            "range": "± 85201.00175973706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5987212.188172043,
            "unit": "ns",
            "range": "± 351470.2599122775"
          }
        ]
      }
    ]
  }
}