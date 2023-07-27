window.BENCHMARK_DATA = {
  "lastUpdate": 1690449765940,
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
          "id": "fe7156de79ebc0c3b1cdbb14c5f1f06769734d1c",
          "message": "Release 3.1.0",
          "timestamp": "2023-07-27T18:06:34+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/greymistcube/libplanet/commit/fe7156de79ebc0c3b1cdbb14c5f1f06769734d1c"
        },
        "date": 1690449739222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1266115.7894736843,
            "unit": "ns",
            "range": "± 111491.27941833921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402013.75,
            "unit": "ns",
            "range": "± 124675.5350862816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731258.5858585858,
            "unit": "ns",
            "range": "± 183725.1807534225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4661000,
            "unit": "ns",
            "range": "± 280849.1274174339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47552.12765957447,
            "unit": "ns",
            "range": "± 4230.787789154772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6343008.333333333,
            "unit": "ns",
            "range": "± 51092.04631808846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17977789.47368421,
            "unit": "ns",
            "range": "± 602893.8124374733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45064212.121212125,
            "unit": "ns",
            "range": "± 1427755.3422587798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89463926.92307693,
            "unit": "ns",
            "range": "± 2419444.595200757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176949668.42105263,
            "unit": "ns",
            "range": "± 3833344.6379619734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4376954.635416667,
            "unit": "ns",
            "range": "± 37100.776000271995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1390833.3723958333,
            "unit": "ns",
            "range": "± 10004.779722664287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075835.6901041667,
            "unit": "ns",
            "range": "± 7911.477026275456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2387223.90625,
            "unit": "ns",
            "range": "± 15688.721153882052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 765385.4036458334,
            "unit": "ns",
            "range": "± 4049.517767294863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704848.876953125,
            "unit": "ns",
            "range": "± 6994.961987413794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2962409.090909091,
            "unit": "ns",
            "range": "± 192725.4021420056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3086729.411764706,
            "unit": "ns",
            "range": "± 98271.55181746745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3781560.294117647,
            "unit": "ns",
            "range": "± 175391.15529335017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3358869.387755102,
            "unit": "ns",
            "range": "± 203994.34114253754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5772060.465116279,
            "unit": "ns",
            "range": "± 313663.5249581833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240212.6582278481,
            "unit": "ns",
            "range": "± 12300.30609467585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228491.83673469388,
            "unit": "ns",
            "range": "± 9023.04541933907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206861.22448979592,
            "unit": "ns",
            "range": "± 14958.53121857644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3638120.8333333335,
            "unit": "ns",
            "range": "± 92521.89860251729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3294938.095238095,
            "unit": "ns",
            "range": "± 76800.52393174461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21607.291666666668,
            "unit": "ns",
            "range": "± 3173.1520039782013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80819.14893617021,
            "unit": "ns",
            "range": "± 6779.099388208873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69995.69892473119,
            "unit": "ns",
            "range": "± 6084.833497391453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94791.75257731958,
            "unit": "ns",
            "range": "± 20265.429667411718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4976.288659793814,
            "unit": "ns",
            "range": "± 848.2547273515348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20615.05376344086,
            "unit": "ns",
            "range": "± 2237.717501527682"
          }
        ]
      }
    ]
  }
}