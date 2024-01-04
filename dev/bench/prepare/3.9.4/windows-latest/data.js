window.BENCHMARK_DATA = {
  "lastUpdate": 1704334719814,
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
          "id": "7903c084230fb6dd3481171093c87681c08bde65",
          "message": "Prepare 3.9.4",
          "timestamp": "2024-01-04T11:05:56+09:00",
          "tree_id": "a44ae183ac56aae248479c66c087363ee5222613",
          "url": "https://github.com/greymistcube/libplanet/commit/7903c084230fb6dd3481171093c87681c08bde65"
        },
        "date": 1704334697146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016831.5789473684,
            "unit": "ns",
            "range": "± 97015.81935399614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837906.8181818181,
            "unit": "ns",
            "range": "± 120777.18802977804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384333.6842105263,
            "unit": "ns",
            "range": "± 109145.11091332583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5339793.939393939,
            "unit": "ns",
            "range": "± 168814.6412107706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39259.574468085106,
            "unit": "ns",
            "range": "± 6643.410821547712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4988664.285714285,
            "unit": "ns",
            "range": "± 62928.391625143835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13517460,
            "unit": "ns",
            "range": "± 131288.80814013488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33702864.28571428,
            "unit": "ns",
            "range": "± 594282.9342443428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67123050,
            "unit": "ns",
            "range": "± 435299.06386299524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134565364.2857143,
            "unit": "ns",
            "range": "± 2166900.7007908584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3374965.9895833335,
            "unit": "ns",
            "range": "± 11617.547185852172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1090658.217075893,
            "unit": "ns",
            "range": "± 2263.705594530041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758460.3306361607,
            "unit": "ns",
            "range": "± 1513.2976488481602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940646.8191964286,
            "unit": "ns",
            "range": "± 5069.078885301248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605750.3756009615,
            "unit": "ns",
            "range": "± 1034.8816013079975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560083.28125,
            "unit": "ns",
            "range": "± 1001.2035941358654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175705.4545454546,
            "unit": "ns",
            "range": "± 92727.30913051375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306652.6315789474,
            "unit": "ns",
            "range": "± 67970.21500644794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2897710,
            "unit": "ns",
            "range": "± 64788.26973100024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2724346.6666666665,
            "unit": "ns",
            "range": "± 135523.64342773525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6118051.851851852,
            "unit": "ns",
            "range": "± 125711.50847008145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181395.2380952381,
            "unit": "ns",
            "range": "± 9715.865856433898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170139.58333333334,
            "unit": "ns",
            "range": "± 6473.341061889609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141047.36842105264,
            "unit": "ns",
            "range": "± 3052.0245413773446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2758440,
            "unit": "ns",
            "range": "± 36096.51348418966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585935.714285714,
            "unit": "ns",
            "range": "± 39123.01323818457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12418.478260869566,
            "unit": "ns",
            "range": "± 1566.9617377059035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62413.978494623654,
            "unit": "ns",
            "range": "± 7686.218488418503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52601.030927835054,
            "unit": "ns",
            "range": "± 8526.337808585633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68918.36734693877,
            "unit": "ns",
            "range": "± 15629.31653820134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2983.157894736842,
            "unit": "ns",
            "range": "± 744.4336175739542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11769.148936170213,
            "unit": "ns",
            "range": "± 1944.0577558870677"
          }
        ]
      }
    ]
  }
}