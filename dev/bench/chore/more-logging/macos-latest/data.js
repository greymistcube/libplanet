window.BENCHMARK_DATA = {
  "lastUpdate": 1679540212682,
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
          "id": "84428e00852ef16add1099d89d31c03d15575164",
          "message": "Added info",
          "timestamp": "2023-03-23T11:38:16+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/greymistcube/libplanet/commit/84428e00852ef16add1099d89d31c03d15575164"
        },
        "date": 1679540189028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137883.97777777776,
            "unit": "ns",
            "range": "± 9314.956106065534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109260.08421052631,
            "unit": "ns",
            "range": "± 10771.335940832963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246334.63333333333,
            "unit": "ns",
            "range": "± 17076.509852110106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240386.19587628866,
            "unit": "ns",
            "range": "± 16407.24745071974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4371225.105263158,
            "unit": "ns",
            "range": "± 96497.20184480581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10979122.866666667,
            "unit": "ns",
            "range": "± 123253.07325108812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21657.532608695652,
            "unit": "ns",
            "range": "± 1953.5836636277236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65867.23195876289,
            "unit": "ns",
            "range": "± 7938.088562845099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67916.52127659574,
            "unit": "ns",
            "range": "± 10171.865669769904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143131.7365591398,
            "unit": "ns",
            "range": "± 20328.787010370215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8575.430107526881,
            "unit": "ns",
            "range": "± 967.5928603661305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21515.924731182797,
            "unit": "ns",
            "range": "± 2168.5255321078093"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5454267.552179784,
            "unit": "ns",
            "range": "± 285103.32648722973"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7187518,
            "unit": "ns",
            "range": "± 57661.51743113893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29156707.466666665,
            "unit": "ns",
            "range": "± 532375.3947925773"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7560445.2,
            "unit": "ns",
            "range": "± 533376.4748276256"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34197762.45454545,
            "unit": "ns",
            "range": "± 824797.3875312379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6957240.646763393,
            "unit": "ns",
            "range": "± 45072.83444000659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2224397.642903646,
            "unit": "ns",
            "range": "± 10582.533679906739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1520718.3738839286,
            "unit": "ns",
            "range": "± 23368.009141829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894859.4244791665,
            "unit": "ns",
            "range": "± 6849.042175740404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1042497.5694110577,
            "unit": "ns",
            "range": "± 4253.004281546428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870837.9561298077,
            "unit": "ns",
            "range": "± 2488.223609990555"
          }
        ]
      }
    ]
  }
}