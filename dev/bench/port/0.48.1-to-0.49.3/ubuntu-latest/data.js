window.BENCHMARK_DATA = {
  "lastUpdate": 1678784101947,
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
          "id": "c34cc82e18265600663ca1a3145961e639934c5b",
          "message": "Merge tag '0.48.1' into port/0.48.1-to-0.49.3\n\nLibplanet 0.48.1",
          "timestamp": "2023-03-14T17:42:43+09:00",
          "tree_id": "730b09276955c28f464a1ee14c8717eaf443750e",
          "url": "https://github.com/greymistcube/libplanet/commit/c34cc82e18265600663ca1a3145961e639934c5b"
        },
        "date": 1678784095175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93208.76666666666,
            "unit": "ns",
            "range": "± 6282.258750828364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198799.83823529413,
            "unit": "ns",
            "range": "± 8893.387813107958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174128.06451612903,
            "unit": "ns",
            "range": "± 5328.085797203869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3947010.933333333,
            "unit": "ns",
            "range": "± 48405.908881438176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10084431.47368421,
            "unit": "ns",
            "range": "± 210748.79210629693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19587.40860215054,
            "unit": "ns",
            "range": "± 1907.525954217178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50383.7191011236,
            "unit": "ns",
            "range": "± 3252.499842739022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40193.142857142855,
            "unit": "ns",
            "range": "± 606.9688697052005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94312.37113402062,
            "unit": "ns",
            "range": "± 15431.871601034814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5976.371134020618,
            "unit": "ns",
            "range": "± 837.2801368069166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20358.22105263158,
            "unit": "ns",
            "range": "± 1852.3946846277602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6007621.288541666,
            "unit": "ns",
            "range": "± 37444.92639702027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826784.4361049107,
            "unit": "ns",
            "range": "± 4149.856999410207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367177.1643229167,
            "unit": "ns",
            "range": "± 3880.7329502054586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612557.839583333,
            "unit": "ns",
            "range": "± 2536.226398037227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821019.8008563702,
            "unit": "ns",
            "range": "± 525.5660774480979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764074.945452009,
            "unit": "ns",
            "range": "± 1303.7955066476059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110136.14285714286,
            "unit": "ns",
            "range": "± 5068.0454012311375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5168207.462239583,
            "unit": "ns",
            "range": "± 42288.49152639504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6225171.928571428,
            "unit": "ns",
            "range": "± 63489.72327679288"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27213580.875,
            "unit": "ns",
            "range": "± 498770.6453926995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6813708.461538462,
            "unit": "ns",
            "range": "± 70135.74976740392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31621616.230769232,
            "unit": "ns",
            "range": "± 480196.8354368088"
          }
        ]
      }
    ]
  }
}