window.BENCHMARK_DATA = {
  "lastUpdate": 1678781513747,
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
          "id": "65fbbca087136714fdb6af354a7ae63f33e2338c",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:01:42+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/greymistcube/libplanet/commit/65fbbca087136714fdb6af354a7ae63f33e2338c"
        },
        "date": 1678781506686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92261.55555555556,
            "unit": "ns",
            "range": "± 6317.939183830972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204976.3896103896,
            "unit": "ns",
            "range": "± 10005.292860013018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193680.0704225352,
            "unit": "ns",
            "range": "± 9412.304259127965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3842642.6,
            "unit": "ns",
            "range": "± 35540.57394584393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9397968.133333333,
            "unit": "ns",
            "range": "± 96203.74976792498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18982.840425531915,
            "unit": "ns",
            "range": "± 2459.9878367703127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54065.905263157896,
            "unit": "ns",
            "range": "± 6192.484812294974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47075.40404040404,
            "unit": "ns",
            "range": "± 3687.0708243342683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93427.8469387755,
            "unit": "ns",
            "range": "± 16039.493068802574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5134.168421052632,
            "unit": "ns",
            "range": "± 641.8340849543459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17419.8125,
            "unit": "ns",
            "range": "± 831.2679973306298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876322.7625,
            "unit": "ns",
            "range": "± 11885.995277945705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932166.5486778845,
            "unit": "ns",
            "range": "± 1462.291031430204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356773.1615084135,
            "unit": "ns",
            "range": "± 685.6770642303342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641873.1861979165,
            "unit": "ns",
            "range": "± 1907.7146521243062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845087.4499162947,
            "unit": "ns",
            "range": "± 2197.7833308999006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749720.3852539062,
            "unit": "ns",
            "range": "± 425.6935145716102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107737.94444444444,
            "unit": "ns",
            "range": "± 2292.9726524682583"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4491530.16015625,
            "unit": "ns",
            "range": "± 38736.4808567289"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6086086.733333333,
            "unit": "ns",
            "range": "± 48146.86066381641"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25563603.57142857,
            "unit": "ns",
            "range": "± 335834.6484105429"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6969394.133333334,
            "unit": "ns",
            "range": "± 94907.37343240564"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28696884.666666668,
            "unit": "ns",
            "range": "± 389762.33013441606"
          }
        ]
      }
    ]
  }
}