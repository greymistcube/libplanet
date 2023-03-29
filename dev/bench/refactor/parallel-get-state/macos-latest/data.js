window.BENCHMARK_DATA = {
  "lastUpdate": 1680061256744,
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
          "id": "8e3f12002927a9d888c0466473dcbbb5903b6811",
          "message": "[skip changelog] Parallel get states",
          "timestamp": "2023-03-29T12:16:03+09:00",
          "tree_id": "463e60baa8a77caf695b11642322bf26c5c77d20",
          "url": "https://github.com/greymistcube/libplanet/commit/8e3f12002927a9d888c0466473dcbbb5903b6811"
        },
        "date": 1680060739857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139904.65625,
            "unit": "ns",
            "range": "± 8694.882956541769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103040.42708333333,
            "unit": "ns",
            "range": "± 14175.893827008833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208613.6,
            "unit": "ns",
            "range": "± 21162.454466219926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221917.1847826087,
            "unit": "ns",
            "range": "± 26668.420346107654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3692338,
            "unit": "ns",
            "range": "± 95226.6859827118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9967595.4,
            "unit": "ns",
            "range": "± 291961.46361718635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17458.287234042553,
            "unit": "ns",
            "range": "± 3162.5581583239723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54485.72631578947,
            "unit": "ns",
            "range": "± 7295.5000141330265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64273.449438202246,
            "unit": "ns",
            "range": "± 3464.1578866864206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123499.72164948453,
            "unit": "ns",
            "range": "± 16938.519697314085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7640.525773195876,
            "unit": "ns",
            "range": "± 1061.7932756739058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20630.336734693876,
            "unit": "ns",
            "range": "± 4984.867730191307"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5142860.1809375,
            "unit": "ns",
            "range": "± 376194.0181291812"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6470209.133333334,
            "unit": "ns",
            "range": "± 192941.33039748267"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26407958.05882353,
            "unit": "ns",
            "range": "± 1076254.8633260508"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7141890.97979798,
            "unit": "ns",
            "range": "± 486051.7821273607"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31491909.147058822,
            "unit": "ns",
            "range": "± 619539.5895202078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244097.860983456,
            "unit": "ns",
            "range": "± 199871.9695271664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866796.8209134615,
            "unit": "ns",
            "range": "± 21446.12152673851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1221999.6908482143,
            "unit": "ns",
            "range": "± 5224.063880909516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572877.223214286,
            "unit": "ns",
            "range": "± 25743.372865106103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835108.2161800987,
            "unit": "ns",
            "range": "± 18181.492545736844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725844.8403695914,
            "unit": "ns",
            "range": "± 3389.01231383566"
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
          "id": "bcf3a522c5c9123b8abe8dff392a629c578065ff",
          "message": "Cleanup",
          "timestamp": "2023-03-29T12:20:05+09:00",
          "tree_id": "53a12b681c5c39d08102169a09d791e726fae45a",
          "url": "https://github.com/greymistcube/libplanet/commit/bcf3a522c5c9123b8abe8dff392a629c578065ff"
        },
        "date": 1680061235169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134984.8186813187,
            "unit": "ns",
            "range": "± 9663.357762276954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 131936.3947368421,
            "unit": "ns",
            "range": "± 22143.277438840953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259392.82978723405,
            "unit": "ns",
            "range": "± 39622.609809296366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233851.03488372092,
            "unit": "ns",
            "range": "± 21650.753116338732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3616577.772727273,
            "unit": "ns",
            "range": "± 86178.5947795854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10252243.384615384,
            "unit": "ns",
            "range": "± 121059.51448532692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18927.880434782608,
            "unit": "ns",
            "range": "± 3201.977914971408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57967.78787878788,
            "unit": "ns",
            "range": "± 9314.225546774036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54271.65,
            "unit": "ns",
            "range": "± 8949.198164380623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120611.29032258065,
            "unit": "ns",
            "range": "± 14639.591103802586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9255.765957446809,
            "unit": "ns",
            "range": "± 1241.5990052333264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23006.032967032967,
            "unit": "ns",
            "range": "± 3996.577926316879"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5654786.0241477275,
            "unit": "ns",
            "range": "± 878532.0803249438"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8020291.142857143,
            "unit": "ns",
            "range": "± 2142929.7008686056"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27484060.59090909,
            "unit": "ns",
            "range": "± 1280809.7842413"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6861160.831460674,
            "unit": "ns",
            "range": "± 379664.73402207217"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34566461.94444445,
            "unit": "ns",
            "range": "± 2587860.3921239865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7260738.404357281,
            "unit": "ns",
            "range": "± 442059.8033978945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115081.537734375,
            "unit": "ns",
            "range": "± 84568.69998195129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444731.1177455357,
            "unit": "ns",
            "range": "± 41419.70513363307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2989566.321480348,
            "unit": "ns",
            "range": "± 250208.5004126265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859861.6460802802,
            "unit": "ns",
            "range": "± 21933.784553988105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815576.9968631628,
            "unit": "ns",
            "range": "± 25535.351135756056"
          }
        ]
      }
    ]
  }
}