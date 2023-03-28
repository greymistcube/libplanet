window.BENCHMARK_DATA = {
  "lastUpdate": 1679987805097,
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
          "id": "5cadae4f6e7320ccbbc8d29013b15ecf9e224ea9",
          "message": "Faster key conversion",
          "timestamp": "2023-03-28T16:01:14+09:00",
          "tree_id": "6dcdfab0387850705a9827b22c2659babf5fe297",
          "url": "https://github.com/greymistcube/libplanet/commit/5cadae4f6e7320ccbbc8d29013b15ecf9e224ea9"
        },
        "date": 1679987775490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90115.38461538461,
            "unit": "ns",
            "range": "± 1449.6241776440736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4887417.243303572,
            "unit": "ns",
            "range": "± 5533.269400833136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510175.669642857,
            "unit": "ns",
            "range": "± 1624.0571408915705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137993.1361607143,
            "unit": "ns",
            "range": "± 1089.2471319838085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639668.224158654,
            "unit": "ns",
            "range": "± 10160.464328516035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803597.7088341346,
            "unit": "ns",
            "range": "± 1654.0686644544357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727447.63671875,
            "unit": "ns",
            "range": "± 888.0583154071137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3910053.671875,
            "unit": "ns",
            "range": "± 17641.824883519643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5402092.307692308,
            "unit": "ns",
            "range": "± 25959.085164236865"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22804246.153846152,
            "unit": "ns",
            "range": "± 271608.2185041063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6107181.818181818,
            "unit": "ns",
            "range": "± 148680.9387865222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26198076.666666668,
            "unit": "ns",
            "range": "± 419793.04674474784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80694.79166666667,
            "unit": "ns",
            "range": "± 7201.467245114439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173220,
            "unit": "ns",
            "range": "± 7714.114498761345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146757.14285714287,
            "unit": "ns",
            "range": "± 2363.7370300548973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3321553.3333333335,
            "unit": "ns",
            "range": "± 29354.04247329164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8289280,
            "unit": "ns",
            "range": "± 103239.77777138866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14601.08695652174,
            "unit": "ns",
            "range": "± 888.0766432147635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44218.47826086957,
            "unit": "ns",
            "range": "± 3704.079406852594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37215.463917525776,
            "unit": "ns",
            "range": "± 3717.031191191252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87426.5306122449,
            "unit": "ns",
            "range": "± 14443.694811163183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5668.686868686868,
            "unit": "ns",
            "range": "± 785.7982376768307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18136.082474226805,
            "unit": "ns",
            "range": "± 2259.1566257773748"
          }
        ]
      }
    ]
  }
}