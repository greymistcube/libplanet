window.BENCHMARK_DATA = {
  "lastUpdate": 1679662738071,
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
          "id": "2efe9205751fc8816dd122f4f4386a14477dc614",
          "message": "Refactored to more granular caching scheme",
          "timestamp": "2023-03-24T21:42:31+09:00",
          "tree_id": "3ef82fcb07ac2f63eacca5bb11dd399b5a8d8a7c",
          "url": "https://github.com/greymistcube/libplanet/commit/2efe9205751fc8816dd122f4f4386a14477dc614"
        },
        "date": 1679662717716,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91514.28571428571,
            "unit": "ns",
            "range": "± 1470.142401714433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857578.459821428,
            "unit": "ns",
            "range": "± 12209.386562060325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523957.6729910714,
            "unit": "ns",
            "range": "± 2017.0644762832176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151389.732142857,
            "unit": "ns",
            "range": "± 1006.964579246756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608439.453125,
            "unit": "ns",
            "range": "± 6799.509016311222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815721.3040865385,
            "unit": "ns",
            "range": "± 5249.388332890666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727518.80859375,
            "unit": "ns",
            "range": "± 1107.350396388562"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3863883.8020833335,
            "unit": "ns",
            "range": "± 30187.961038779576"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5432793.333333333,
            "unit": "ns",
            "range": "± 58402.14607928947"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22673913.333333332,
            "unit": "ns",
            "range": "± 413640.67371618684"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5440314.492753623,
            "unit": "ns",
            "range": "± 262403.15651984286"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25335980,
            "unit": "ns",
            "range": "± 394602.33907061425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82885.71428571429,
            "unit": "ns",
            "range": "± 9173.370244870994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167698.24561403508,
            "unit": "ns",
            "range": "± 6732.238303970948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147228.57142857142,
            "unit": "ns",
            "range": "± 2086.376531924914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3288028.5714285714,
            "unit": "ns",
            "range": "± 18847.951472912773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8361673.333333333,
            "unit": "ns",
            "range": "± 96916.26331652545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14361.702127659575,
            "unit": "ns",
            "range": "± 1501.046687358469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 41327.17391304348,
            "unit": "ns",
            "range": "± 3892.1194898497192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34416.666666666664,
            "unit": "ns",
            "range": "± 1082.7214389147903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80161.11111111111,
            "unit": "ns",
            "range": "± 16100.480971956851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4389.473684210527,
            "unit": "ns",
            "range": "± 597.2407626371722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14126.041666666666,
            "unit": "ns",
            "range": "± 1633.5460164070364"
          }
        ]
      }
    ]
  }
}