window.BENCHMARK_DATA = {
  "lastUpdate": 1678783821649,
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
          "id": "eee8f0fcf937af35f9ce1470fba2c1bef7a1b4d9",
          "message": "Prepare 0.48.2",
          "timestamp": "2023-03-14T17:38:33+09:00",
          "tree_id": "2707579eaddea6b47f6fd7f83e96f64d1a52c34d",
          "url": "https://github.com/greymistcube/libplanet/commit/eee8f0fcf937af35f9ce1470fba2c1bef7a1b4d9"
        },
        "date": 1678783814750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89631.76288659793,
            "unit": "ns",
            "range": "± 8607.840092483997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197756.46296296295,
            "unit": "ns",
            "range": "± 7104.344495176845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181548.12280701756,
            "unit": "ns",
            "range": "± 7871.929301707282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3908236.6428571427,
            "unit": "ns",
            "range": "± 66784.58108852919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10070647.666666666,
            "unit": "ns",
            "range": "± 146702.8957254699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19885.054347826088,
            "unit": "ns",
            "range": "± 1896.5743401678424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52763.53846153846,
            "unit": "ns",
            "range": "± 2717.764454173987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44126.379310344826,
            "unit": "ns",
            "range": "± 1942.487416271067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97116.38541666667,
            "unit": "ns",
            "range": "± 17548.85012299564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6108.234693877551,
            "unit": "ns",
            "range": "± 861.2719053042423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16256.70588235294,
            "unit": "ns",
            "range": "± 1031.0518072006143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5882036.698958334,
            "unit": "ns",
            "range": "± 28466.18121054984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829007.2845982143,
            "unit": "ns",
            "range": "± 4751.0301057312745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351354.8953125,
            "unit": "ns",
            "range": "± 4659.7240034280385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615285.08203125,
            "unit": "ns",
            "range": "± 5975.04004489848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854404.8746512277,
            "unit": "ns",
            "range": "± 1409.8367880734816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761130.6693359375,
            "unit": "ns",
            "range": "± 808.6581985721824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106922.6052631579,
            "unit": "ns",
            "range": "± 3658.5223906947454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4958565.507918075,
            "unit": "ns",
            "range": "± 245927.4724864404"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6112641.866666666,
            "unit": "ns",
            "range": "± 80943.30687309719"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26843411.272727273,
            "unit": "ns",
            "range": "± 649000.2614174528"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6400079.755555555,
            "unit": "ns",
            "range": "± 242137.06354376645"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30259253,
            "unit": "ns",
            "range": "± 443061.7875670874"
          }
        ]
      }
    ]
  }
}