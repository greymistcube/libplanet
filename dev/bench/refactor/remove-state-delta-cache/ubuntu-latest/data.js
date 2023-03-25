window.BENCHMARK_DATA = {
  "lastUpdate": 1679740696515,
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
          "id": "ddd8a9e6efec65cb2a48cbba4501188f0ebe3982",
          "message": "Removed state delta caching",
          "timestamp": "2023-03-25T19:27:36+09:00",
          "tree_id": "51067fb468ca59e1b776c0eb20895db4da154a8b",
          "url": "https://github.com/greymistcube/libplanet/commit/ddd8a9e6efec65cb2a48cbba4501188f0ebe3982"
        },
        "date": 1679740689764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110015.33333333333,
            "unit": "ns",
            "range": "± 2536.121967361454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5125435.213020833,
            "unit": "ns",
            "range": "± 65878.4643576692"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6218292.615384615,
            "unit": "ns",
            "range": "± 57759.60758687462"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27816929,
            "unit": "ns",
            "range": "± 503698.5373242327"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7083738.2,
            "unit": "ns",
            "range": "± 99287.13825940828"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30790255.083333332,
            "unit": "ns",
            "range": "± 786244.6897266125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5917178.706473215,
            "unit": "ns",
            "range": "± 15464.26980129686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839245.1611328125,
            "unit": "ns",
            "range": "± 2000.4977172346198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367304.4873046875,
            "unit": "ns",
            "range": "± 4221.435178670444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622270.9709821427,
            "unit": "ns",
            "range": "± 4042.125026957071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862085.0765625,
            "unit": "ns",
            "range": "± 1568.785466287494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767567.7234825721,
            "unit": "ns",
            "range": "± 932.5801687648374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96532.73404255319,
            "unit": "ns",
            "range": "± 8470.687569273701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200811.76470588235,
            "unit": "ns",
            "range": "± 9340.535278403158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177071.59259259258,
            "unit": "ns",
            "range": "± 4313.931218552813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3949579.785714286,
            "unit": "ns",
            "range": "± 31683.109188866336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9919993.2,
            "unit": "ns",
            "range": "± 155784.1904050967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20128.021505376346,
            "unit": "ns",
            "range": "± 1921.8644252646204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53119.655913978495,
            "unit": "ns",
            "range": "± 4361.484959762093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41055.944444444445,
            "unit": "ns",
            "range": "± 881.6385461989458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88029.53225806452,
            "unit": "ns",
            "range": "± 3621.1413775205656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5903.142857142857,
            "unit": "ns",
            "range": "± 473.1147067817654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17708.63440860215,
            "unit": "ns",
            "range": "± 1551.4287999814476"
          }
        ]
      }
    ]
  }
}