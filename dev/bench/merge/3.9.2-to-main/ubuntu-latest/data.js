window.BENCHMARK_DATA = {
  "lastUpdate": 1704355804558,
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
          "id": "a8f4615570603c3cbe8eb14dfb87e907d223b5ae",
          "message": "Release 3.9.2",
          "timestamp": "2024-01-04T16:58:57+09:00",
          "tree_id": "9dc58c6da927f1a3e0753c47498663840bcbead5",
          "url": "https://github.com/greymistcube/libplanet/commit/a8f4615570603c3cbe8eb14dfb87e907d223b5ae"
        },
        "date": 1704355798373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722047.174153646,
            "unit": "ns",
            "range": "± 10289.257368994053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207005.4417067308,
            "unit": "ns",
            "range": "± 2964.1851675125426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755844.3921595982,
            "unit": "ns",
            "range": "± 2078.9225524958906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964237.7506510417,
            "unit": "ns",
            "range": "± 4216.692603324361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626362.7377232143,
            "unit": "ns",
            "range": "± 1349.4437997015123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572259.985952524,
            "unit": "ns",
            "range": "± 1438.4472738108961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2364801.1842105263,
            "unit": "ns",
            "range": "± 80965.24126750744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2441401.1170212766,
            "unit": "ns",
            "range": "± 91594.32327543515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3055838.6,
            "unit": "ns",
            "range": "± 50853.695760906674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3100306.1511627906,
            "unit": "ns",
            "range": "± 166902.8005015471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14062594.163043479,
            "unit": "ns",
            "range": "± 997749.5998385708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40855.91052631579,
            "unit": "ns",
            "range": "± 5971.963053523856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201799.61111111112,
            "unit": "ns",
            "range": "± 7442.7498327115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190089.41666666666,
            "unit": "ns",
            "range": "± 7329.937559843581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160847.3125,
            "unit": "ns",
            "range": "± 3098.167430783344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3202925,
            "unit": "ns",
            "range": "± 44973.33478692839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2751597.714285714,
            "unit": "ns",
            "range": "± 38069.327468102536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16470.35106382979,
            "unit": "ns",
            "range": "± 2538.4773384865207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66708.75757575757,
            "unit": "ns",
            "range": "± 8093.884230740566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52373.41176470588,
            "unit": "ns",
            "range": "± 1077.920107128975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65075.73469387755,
            "unit": "ns",
            "range": "± 11495.461598020647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4773.964646464647,
            "unit": "ns",
            "range": "± 1710.501038382848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11631.285714285714,
            "unit": "ns",
            "range": "± 663.5199595045573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5562991.9,
            "unit": "ns",
            "range": "± 19729.97613422639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14160166.7,
            "unit": "ns",
            "range": "± 73151.80664617929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36108667.28571428,
            "unit": "ns",
            "range": "± 168371.61682852174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74560326.5,
            "unit": "ns",
            "range": "± 442216.44791601156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148163366.46153846,
            "unit": "ns",
            "range": "± 400239.8765958184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977570.1875,
            "unit": "ns",
            "range": "± 87660.56324354185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1897838.1379310344,
            "unit": "ns",
            "range": "± 83106.34565353087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592108.8333333333,
            "unit": "ns",
            "range": "± 120798.26251133924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12842664.915789474,
            "unit": "ns",
            "range": "± 1006817.6999222329"
          }
        ]
      }
    ]
  }
}