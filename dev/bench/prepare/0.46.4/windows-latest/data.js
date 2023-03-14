window.BENCHMARK_DATA = {
  "lastUpdate": 1678781224715,
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
          "id": "fe20a94d0194a3b54224a695e15347d7a3a86ecc",
          "message": "Prepare 0.46.4",
          "timestamp": "2023-03-14T16:48:59+09:00",
          "tree_id": "d4e7792b6442bf1cbf3b9a276a46e7b3aeb4333d",
          "url": "https://github.com/greymistcube/libplanet/commit/fe20a94d0194a3b54224a695e15347d7a3a86ecc"
        },
        "date": 1678781203536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108154.08163265306,
            "unit": "ns",
            "range": "± 7636.148005663681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893330.364583333,
            "unit": "ns",
            "range": "± 20488.360966213117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525176.5104166667,
            "unit": "ns",
            "range": "± 3873.028257912025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166115.078125,
            "unit": "ns",
            "range": "± 3420.9688134748985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596940.5598958335,
            "unit": "ns",
            "range": "± 9268.59999454664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814953.2486979166,
            "unit": "ns",
            "range": "± 1540.3869712384073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779706.5354567308,
            "unit": "ns",
            "range": "± 913.1011502164952"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4775298.59375,
            "unit": "ns",
            "range": "± 34159.18182719255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5295348,
            "unit": "ns",
            "range": "± 380992.8299333283"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25736532.352941178,
            "unit": "ns",
            "range": "± 511530.1875687472"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6115102.040816327,
            "unit": "ns",
            "range": "± 445910.00455331855"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29606900,
            "unit": "ns",
            "range": "± 532555.9232874716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103175.78947368421,
            "unit": "ns",
            "range": "± 13330.629550419826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201398.91304347827,
            "unit": "ns",
            "range": "± 12818.551927999395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182785.55555555556,
            "unit": "ns",
            "range": "± 10134.273376957095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3675400,
            "unit": "ns",
            "range": "± 39594.570334832526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9354478.57142857,
            "unit": "ns",
            "range": "± 98931.25179849683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26081.052631578947,
            "unit": "ns",
            "range": "± 2600.993866379759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64073.958333333336,
            "unit": "ns",
            "range": "± 8592.5089135726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42906.31578947369,
            "unit": "ns",
            "range": "± 2501.43833204086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105734.44444444444,
            "unit": "ns",
            "range": "± 15329.872146399945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5872.448979591837,
            "unit": "ns",
            "range": "± 970.1504413303028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24696.938775510203,
            "unit": "ns",
            "range": "± 3448.21645461279"
          }
        ]
      }
    ]
  }
}