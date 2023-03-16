window.BENCHMARK_DATA = {
  "lastUpdate": 1678933337598,
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
        "date": 1678933290898,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119745.36082474227,
            "unit": "ns",
            "range": "± 9726.162551748386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92774.05208333333,
            "unit": "ns",
            "range": "± 10042.7033269458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218620.3282828283,
            "unit": "ns",
            "range": "± 30063.252225402557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180454,
            "unit": "ns",
            "range": "± 10586.899111001147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3452042.8695652173,
            "unit": "ns",
            "range": "± 82907.44375578454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9398466.549180327,
            "unit": "ns",
            "range": "± 423185.9771404068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17838.417582417584,
            "unit": "ns",
            "range": "± 2246.822779274147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50051.926315789475,
            "unit": "ns",
            "range": "± 5038.970561960064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46499.215053763444,
            "unit": "ns",
            "range": "± 5406.763175894216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102413.32631578947,
            "unit": "ns",
            "range": "± 12882.864102267464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5897.460674157303,
            "unit": "ns",
            "range": "± 774.4045374611704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16598.175824175825,
            "unit": "ns",
            "range": "± 2106.9285047903086"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4580606.652960527,
            "unit": "ns",
            "range": "± 157276.65375457765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5544178.52631579,
            "unit": "ns",
            "range": "± 236920.63404832617"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25551224.962962963,
            "unit": "ns",
            "range": "± 712662.0080204426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6248860.972222222,
            "unit": "ns",
            "range": "± 306654.503379318"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29220755.527777776,
            "unit": "ns",
            "range": "± 972175.6040155499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6031735.602083334,
            "unit": "ns",
            "range": "± 52104.00771858643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841628.3915364584,
            "unit": "ns",
            "range": "± 13561.928462466594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225865.1102864584,
            "unit": "ns",
            "range": "± 9994.70015336517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571215.8333333335,
            "unit": "ns",
            "range": "± 14539.400733416698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816417.6874348958,
            "unit": "ns",
            "range": "± 7309.237896417217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705793.2315150669,
            "unit": "ns",
            "range": "± 4288.991569560436"
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
        "date": 1678933317241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130971.62686567164,
            "unit": "ns",
            "range": "± 6219.498425250347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106884.60204081633,
            "unit": "ns",
            "range": "± 10517.024313322001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239037.74736842106,
            "unit": "ns",
            "range": "± 22779.334902853276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211805.7966101695,
            "unit": "ns",
            "range": "± 9376.973550027713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4068372.78,
            "unit": "ns",
            "range": "± 164087.71342035953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10213134.277777778,
            "unit": "ns",
            "range": "± 331358.0541509752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19890.92391304348,
            "unit": "ns",
            "range": "± 2071.2912320032474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56871.44623655914,
            "unit": "ns",
            "range": "± 8730.514186717148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46483.20212765958,
            "unit": "ns",
            "range": "± 3913.2036996895836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112194.23655913978,
            "unit": "ns",
            "range": "± 17102.16466047109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5952.945652173913,
            "unit": "ns",
            "range": "± 661.4782041732541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18533.604395604394,
            "unit": "ns",
            "range": "± 2171.919166078808"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5153025.539802631,
            "unit": "ns",
            "range": "± 293559.3052191322"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7042074.5,
            "unit": "ns",
            "range": "± 41291.48699559865"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28946689.92857143,
            "unit": "ns",
            "range": "± 287945.55650797393"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8026222.357142857,
            "unit": "ns",
            "range": "± 110109.07797173543"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33262212.411764707,
            "unit": "ns",
            "range": "± 676115.4827924238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7291469.5328125,
            "unit": "ns",
            "range": "± 45840.863747205156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2193799.7421875,
            "unit": "ns",
            "range": "± 8581.212430481095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467652.3916666666,
            "unit": "ns",
            "range": "± 3328.320005964696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3031639.5033854167,
            "unit": "ns",
            "range": "± 22154.779683614946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872339.6805989583,
            "unit": "ns",
            "range": "± 12902.276638030135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812440.0338541666,
            "unit": "ns",
            "range": "± 16752.35317019377"
          }
        ]
      }
    ]
  }
}