window.BENCHMARK_DATA = {
  "lastUpdate": 1678931443490,
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
          "id": "393b0e52a14ff970955577d3003f68d1a0a90a21",
          "message": "Changelog",
          "timestamp": "2023-03-16T10:37:12+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/greymistcube/libplanet/commit/393b0e52a14ff970955577d3003f68d1a0a90a21"
        },
        "date": 1678931430067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115672.22680412371,
            "unit": "ns",
            "range": "± 8218.580014091487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101924.75510204081,
            "unit": "ns",
            "range": "± 13268.51771416684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208210.8510638298,
            "unit": "ns",
            "range": "± 23441.250249675297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181881.16483516485,
            "unit": "ns",
            "range": "± 12985.799706058184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3429886.25,
            "unit": "ns",
            "range": "± 65713.96815644804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9533317.6,
            "unit": "ns",
            "range": "± 173024.82325286657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16714.977528089887,
            "unit": "ns",
            "range": "± 1876.7315760598754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49706.3085106383,
            "unit": "ns",
            "range": "± 6079.134822828027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46944.36781609195,
            "unit": "ns",
            "range": "± 5475.888586944274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104421.04301075269,
            "unit": "ns",
            "range": "± 17311.452354686036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5274.966292134832,
            "unit": "ns",
            "range": "± 676.5816729815438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16282.795454545454,
            "unit": "ns",
            "range": "± 2748.8364650708563"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4615104.369977678,
            "unit": "ns",
            "range": "± 131636.7390973868"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5841589.866666666,
            "unit": "ns",
            "range": "± 83581.05712751174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25571860.675,
            "unit": "ns",
            "range": "± 906793.035441452"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6404193.931818182,
            "unit": "ns",
            "range": "± 420872.89924710285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30531259.041666668,
            "unit": "ns",
            "range": "± 764789.8885789812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079178.113541666,
            "unit": "ns",
            "range": "± 76904.96477281819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907275.1837239584,
            "unit": "ns",
            "range": "± 13622.97643875525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232269.7688802083,
            "unit": "ns",
            "range": "± 10558.611524839993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2397625.80625,
            "unit": "ns",
            "range": "± 31478.671418896232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761055.0325520834,
            "unit": "ns",
            "range": "± 6726.961189630068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749400.8225911459,
            "unit": "ns",
            "range": "± 5295.6894620571475"
          }
        ]
      }
    ]
  }
}