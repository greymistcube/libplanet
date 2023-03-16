window.BENCHMARK_DATA = {
  "lastUpdate": 1678933202872,
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
          "id": "dd2f249e8f51c63631e0fdf8b5c01ccbf209a168",
          "message": "Prepare 0.50.5",
          "timestamp": "2023-03-16T11:07:50+09:00",
          "tree_id": "3a06b1bc37e8395cfacce61859a4355d14f19254",
          "url": "https://github.com/greymistcube/libplanet/commit/dd2f249e8f51c63631e0fdf8b5c01ccbf209a168"
        },
        "date": 1678933112313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87391,
            "unit": "ns",
            "range": "± 6296.979461998235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194110.8,
            "unit": "ns",
            "range": "± 8952.945357119495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170980.06666666668,
            "unit": "ns",
            "range": "± 2952.01917499257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776282.4,
            "unit": "ns",
            "range": "± 27453.498922984036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9490052.733333332,
            "unit": "ns",
            "range": "± 65511.392488489764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15732.166666666666,
            "unit": "ns",
            "range": "± 1120.3908938491427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46265.90909090909,
            "unit": "ns",
            "range": "± 3455.2936686290686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44643.298507462685,
            "unit": "ns",
            "range": "± 2117.1170793616993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92715.67708333333,
            "unit": "ns",
            "range": "± 14294.304132835416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4673.958333333333,
            "unit": "ns",
            "range": "± 636.9738971214088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14851.696629213484,
            "unit": "ns",
            "range": "± 946.64686230945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5892160.7265625,
            "unit": "ns",
            "range": "± 28317.626748876948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855248.3048177084,
            "unit": "ns",
            "range": "± 5597.929836252059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356036.9173177083,
            "unit": "ns",
            "range": "± 1373.870150700732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569608.3233816964,
            "unit": "ns",
            "range": "± 1738.1829734772768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814622.8877766927,
            "unit": "ns",
            "range": "± 503.02429323782417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731091.8409598215,
            "unit": "ns",
            "range": "± 610.8619791925227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101695.1,
            "unit": "ns",
            "range": "± 3569.455333010763"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4459117.715680803,
            "unit": "ns",
            "range": "± 27459.465614274297"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6160219.923076923,
            "unit": "ns",
            "range": "± 102132.56708437123"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25526190.285714287,
            "unit": "ns",
            "range": "± 240050.99093876142"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6796610,
            "unit": "ns",
            "range": "± 147947.55313641598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28416469.3125,
            "unit": "ns",
            "range": "± 554098.1034020021"
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
          "id": "4937d8e65ffb68863c63dd3c8c562d0bcaac1a3e",
          "message": "Prepare 0.50.5",
          "timestamp": "2023-03-16T11:07:23+09:00",
          "tree_id": "b2a0421603bd7351d404dda59b309717695a0463",
          "url": "https://github.com/greymistcube/libplanet/commit/4937d8e65ffb68863c63dd3c8c562d0bcaac1a3e"
        },
        "date": 1678933194563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101089.09803921569,
            "unit": "ns",
            "range": "± 4110.458866136003"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4336186.22734375,
            "unit": "ns",
            "range": "± 53854.44794263927"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5407948.863636363,
            "unit": "ns",
            "range": "± 118272.48956041376"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24206090.466666665,
            "unit": "ns",
            "range": "± 275099.4404825973"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6192204.26,
            "unit": "ns",
            "range": "± 235277.91234838148"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27607909.333333332,
            "unit": "ns",
            "range": "± 359050.04151046503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6191553.5859375,
            "unit": "ns",
            "range": "± 39415.57981380429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888711.2783203125,
            "unit": "ns",
            "range": "± 4758.892307906058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372898.0919363839,
            "unit": "ns",
            "range": "± 1166.4249880399366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559797.1833147323,
            "unit": "ns",
            "range": "± 9482.452359448227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817670.4688802083,
            "unit": "ns",
            "range": "± 1731.0673721460346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742490.37421875,
            "unit": "ns",
            "range": "± 954.8362469359134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82869.35106382979,
            "unit": "ns",
            "range": "± 5374.2150028571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187043.01449275363,
            "unit": "ns",
            "range": "± 8046.658050346034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171064.91666666666,
            "unit": "ns",
            "range": "± 2064.8677905435597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3746018.2,
            "unit": "ns",
            "range": "± 36334.89294485792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9296934.466666667,
            "unit": "ns",
            "range": "± 98236.2730853285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14772.520547945205,
            "unit": "ns",
            "range": "± 734.836359515751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45723.74725274725,
            "unit": "ns",
            "range": "± 3514.4497296270583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38057.192307692305,
            "unit": "ns",
            "range": "± 651.9683439695991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75773.14583333333,
            "unit": "ns",
            "range": "± 10328.737655563536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3895.865979381443,
            "unit": "ns",
            "range": "± 443.4563965051972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14154.117021276596,
            "unit": "ns",
            "range": "± 1082.78573279667"
          }
        ]
      }
    ]
  }
}