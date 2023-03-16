window.BENCHMARK_DATA = {
  "lastUpdate": 1678933309291,
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
      }
    ]
  }
}