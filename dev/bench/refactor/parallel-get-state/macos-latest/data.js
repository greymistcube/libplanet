window.BENCHMARK_DATA = {
  "lastUpdate": 1680060761684,
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
      }
    ]
  }
}