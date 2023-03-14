window.BENCHMARK_DATA = {
  "lastUpdate": 1678781554941,
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
          "id": "15e8aa9300901d906c32851c3067495627bb9b0a",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T16:58:32+09:00",
          "tree_id": "e22bb2dfdbcce2ddc09d8af07e56b858f778b345",
          "url": "https://github.com/greymistcube/libplanet/commit/15e8aa9300901d906c32851c3067495627bb9b0a"
        },
        "date": 1678781547779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122473.39175257731,
            "unit": "ns",
            "range": "± 11672.083454012452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239801.02083333334,
            "unit": "ns",
            "range": "± 16130.02232581035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208937.21126760563,
            "unit": "ns",
            "range": "± 10230.41960725183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4081358.8666666667,
            "unit": "ns",
            "range": "± 55658.14462652044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10214243.666666666,
            "unit": "ns",
            "range": "± 139322.06865679796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25863.719101123595,
            "unit": "ns",
            "range": "± 2621.2104030423357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62491.50561797753,
            "unit": "ns",
            "range": "± 4175.1429238562805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44086.793650793654,
            "unit": "ns",
            "range": "± 1886.3205792497129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111031.73469387754,
            "unit": "ns",
            "range": "± 16967.609664985812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6631.030927835051,
            "unit": "ns",
            "range": "± 711.8535584070913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25249.117021276597,
            "unit": "ns",
            "range": "± 3354.1203095111096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5966404.284040178,
            "unit": "ns",
            "range": "± 24606.73256419315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869059.107421875,
            "unit": "ns",
            "range": "± 1653.1050028152383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385019.7395833333,
            "unit": "ns",
            "range": "± 3463.839117530929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654956.442801339,
            "unit": "ns",
            "range": "± 4520.356834560074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847631.3667689732,
            "unit": "ns",
            "range": "± 524.1563692937834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771275.6671223958,
            "unit": "ns",
            "range": "± 284.8259581824542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116494.41111111111,
            "unit": "ns",
            "range": "± 6480.611798165882"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5198762.496875,
            "unit": "ns",
            "range": "± 289352.2172772119"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6588157.428571428,
            "unit": "ns",
            "range": "± 108200.26923734049"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29115254.4,
            "unit": "ns",
            "range": "± 426800.1332018469"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6919573.02020202,
            "unit": "ns",
            "range": "± 431586.1946123614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32697028.375,
            "unit": "ns",
            "range": "± 637937.3335599535"
          }
        ]
      }
    ]
  }
}