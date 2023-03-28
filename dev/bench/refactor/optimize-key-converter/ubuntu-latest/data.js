window.BENCHMARK_DATA = {
  "lastUpdate": 1679987679671,
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
          "id": "49df5491dc9da878c83628f6979a3f784846f5e2",
          "message": "Changelog",
          "timestamp": "2023-03-28T16:04:30+09:00",
          "tree_id": "6cf6e83ec9a821dae0fca3fcc185a2f6d8aa66a3",
          "url": "https://github.com/greymistcube/libplanet/commit/49df5491dc9da878c83628f6979a3f784846f5e2"
        },
        "date": 1679987672554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103330.4,
            "unit": "ns",
            "range": "± 2363.1259939237043"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4447702.414322916,
            "unit": "ns",
            "range": "± 38394.64428165552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5432867.134615385,
            "unit": "ns",
            "range": "± 194454.26956556042"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25893049.57142857,
            "unit": "ns",
            "range": "± 389589.3311036664"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6694032.928571428,
            "unit": "ns",
            "range": "± 54634.37205707986"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27792799.64285714,
            "unit": "ns",
            "range": "± 294005.65162794123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5939375.4625,
            "unit": "ns",
            "range": "± 32380.075712757753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850084.5752704327,
            "unit": "ns",
            "range": "± 1733.5491143630925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333094.5057198661,
            "unit": "ns",
            "range": "± 967.4918999616525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624924.542668269,
            "unit": "ns",
            "range": "± 2326.909488730503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797707.6464146206,
            "unit": "ns",
            "range": "± 2605.0279418083896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745612.4736328125,
            "unit": "ns",
            "range": "± 450.6799278080143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86575.93617021276,
            "unit": "ns",
            "range": "± 5105.584761741089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197836.77528089887,
            "unit": "ns",
            "range": "± 10862.481775016418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169678.44444444444,
            "unit": "ns",
            "range": "± 2914.622853661339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3761643.5,
            "unit": "ns",
            "range": "± 26855.414623068533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9316410,
            "unit": "ns",
            "range": "± 89621.14987546188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15617.04255319149,
            "unit": "ns",
            "range": "± 1615.7567547879455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48188.36559139785,
            "unit": "ns",
            "range": "± 3843.716540426856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39998.125,
            "unit": "ns",
            "range": "± 1575.8593822271046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86462.47368421052,
            "unit": "ns",
            "range": "± 12349.500056072651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4791.5,
            "unit": "ns",
            "range": "± 490.41686787984287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14895.864583333334,
            "unit": "ns",
            "range": "± 1496.9785753822625"
          }
        ]
      }
    ]
  }
}