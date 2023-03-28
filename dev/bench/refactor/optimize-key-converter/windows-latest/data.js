window.BENCHMARK_DATA = {
  "lastUpdate": 1679987881499,
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
          "id": "49df5491dc9da878c83628f6979a3f784846f5e2",
          "message": "Changelog",
          "timestamp": "2023-03-28T16:04:30+09:00",
          "tree_id": "6cf6e83ec9a821dae0fca3fcc185a2f6d8aa66a3",
          "url": "https://github.com/greymistcube/libplanet/commit/49df5491dc9da878c83628f6979a3f784846f5e2"
        },
        "date": 1679987860723,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99771.42857142857,
            "unit": "ns",
            "range": "± 1631.1527643538911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4682938.59375,
            "unit": "ns",
            "range": "± 25528.286328441798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514372.0833333333,
            "unit": "ns",
            "range": "± 7030.713021823469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144266.8098958333,
            "unit": "ns",
            "range": "± 6616.529487696884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611787.2135416665,
            "unit": "ns",
            "range": "± 9045.918253639977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812085.4427083334,
            "unit": "ns",
            "range": "± 3807.3847147445845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759107.3372395834,
            "unit": "ns",
            "range": "± 1409.173376648503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4621870.625,
            "unit": "ns",
            "range": "± 47281.51074386591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5629200,
            "unit": "ns",
            "range": "± 73354.75444713859"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24569818.75,
            "unit": "ns",
            "range": "± 747181.3773139952"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6450141.379310345,
            "unit": "ns",
            "range": "± 183448.9487514975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27535685.714285713,
            "unit": "ns",
            "range": "± 465348.2812444276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80447.82608695653,
            "unit": "ns",
            "range": "± 6127.733357554815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173656.4516129032,
            "unit": "ns",
            "range": "± 7472.345100495493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155932,
            "unit": "ns",
            "range": "± 6311.29340862837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3360041.6666666665,
            "unit": "ns",
            "range": "± 41333.53158554606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8783167.741935484,
            "unit": "ns",
            "range": "± 232729.56750571655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17806.842105263157,
            "unit": "ns",
            "range": "± 1759.3913739469467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45481.44329896907,
            "unit": "ns",
            "range": "± 5758.568432795516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37688.46153846154,
            "unit": "ns",
            "range": "± 1722.796809305684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84994.84536082474,
            "unit": "ns",
            "range": "± 13523.647276268373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4943.75,
            "unit": "ns",
            "range": "± 766.0991415847183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15462.36559139785,
            "unit": "ns",
            "range": "± 1256.0214947702598"
          }
        ]
      }
    ]
  }
}