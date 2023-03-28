window.BENCHMARK_DATA = {
  "lastUpdate": 1679987826744,
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
          "id": "5cadae4f6e7320ccbbc8d29013b15ecf9e224ea9",
          "message": "Faster key conversion",
          "timestamp": "2023-03-28T16:01:14+09:00",
          "tree_id": "6dcdfab0387850705a9827b22c2659babf5fe297",
          "url": "https://github.com/greymistcube/libplanet/commit/5cadae4f6e7320ccbbc8d29013b15ecf9e224ea9"
        },
        "date": 1679987819574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119687.8469387755,
            "unit": "ns",
            "range": "± 13062.347089700022"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5211911.956202651,
            "unit": "ns",
            "range": "± 341214.8977397535"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6228813.659793815,
            "unit": "ns",
            "range": "± 430566.7886177979"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30672766.34,
            "unit": "ns",
            "range": "± 2887353.6049658544"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6813960.189473684,
            "unit": "ns",
            "range": "± 629926.1517331589"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36283446.22,
            "unit": "ns",
            "range": "± 3535794.653064903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6029848.532169118,
            "unit": "ns",
            "range": "± 192926.09578899323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932295.3821231618,
            "unit": "ns",
            "range": "± 37351.22929806504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386449.4342447917,
            "unit": "ns",
            "range": "± 55846.251468567185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625920.0203683036,
            "unit": "ns",
            "range": "± 39646.323467968265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840960.9842208059,
            "unit": "ns",
            "range": "± 18597.982184927354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767206.5807291666,
            "unit": "ns",
            "range": "± 14210.177104656634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93896.29292929293,
            "unit": "ns",
            "range": "± 13964.445830468618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212987.04,
            "unit": "ns",
            "range": "± 28782.372407296883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190980.30303030304,
            "unit": "ns",
            "range": "± 21234.55007401879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124907.18,
            "unit": "ns",
            "range": "± 319559.1854325751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10478378.92,
            "unit": "ns",
            "range": "± 851717.7266727276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19736.097826086956,
            "unit": "ns",
            "range": "± 2431.089251008455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52833.64948453608,
            "unit": "ns",
            "range": "± 7390.749730859004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40933.58241758242,
            "unit": "ns",
            "range": "± 4954.552371452461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97419.793814433,
            "unit": "ns",
            "range": "± 21909.043595500574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5545.728260869565,
            "unit": "ns",
            "range": "± 596.7736350579162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18115.36559139785,
            "unit": "ns",
            "range": "± 2286.373318565159"
          }
        ]
      }
    ]
  }
}