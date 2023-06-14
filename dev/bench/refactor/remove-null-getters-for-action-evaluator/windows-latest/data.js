window.BENCHMARK_DATA = {
  "lastUpdate": 1686749142548,
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
          "id": "547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2",
          "message": "General internal API cleanup",
          "timestamp": "2023-06-14T21:58:12+09:00",
          "tree_id": "c1642302083e2f353fa08f273beb05f5929b1087",
          "url": "https://github.com/greymistcube/libplanet/commit/547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2"
        },
        "date": 1686749118864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853376.530612245,
            "unit": "ns",
            "range": "± 220065.2385937493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3434470.4081632653,
            "unit": "ns",
            "range": "± 253916.62127280008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2781008.6021505375,
            "unit": "ns",
            "range": "± 204617.16620999173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7183718.085106383,
            "unit": "ns",
            "range": "± 589837.1420871536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64212.5,
            "unit": "ns",
            "range": "± 13741.28048886581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10176936.842105264,
            "unit": "ns",
            "range": "± 221419.7577516673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25420194.444444444,
            "unit": "ns",
            "range": "± 508512.2885578864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65392900,
            "unit": "ns",
            "range": "± 951717.2681324735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133875589.1891892,
            "unit": "ns",
            "range": "± 4098644.5364957605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264028435.7142857,
            "unit": "ns",
            "range": "± 2708319.0503044054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6172260.440340909,
            "unit": "ns",
            "range": "± 150824.9161831499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927093.2250976562,
            "unit": "ns",
            "range": "± 27013.93940795047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1518613.2269965278,
            "unit": "ns",
            "range": "± 25273.884069926924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3280546.484375,
            "unit": "ns",
            "range": "± 38901.97158141038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045562.98828125,
            "unit": "ns",
            "range": "± 10752.969063548397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901992.1484375,
            "unit": "ns",
            "range": "± 14599.846490931986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4221922.857142857,
            "unit": "ns",
            "range": "± 204462.50155576953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4469324.242424242,
            "unit": "ns",
            "range": "± 210201.72220666514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5469402.173913044,
            "unit": "ns",
            "range": "± 208747.75153985937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5464923.214285715,
            "unit": "ns",
            "range": "± 224679.07698118416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8793962.5,
            "unit": "ns",
            "range": "± 290361.4870692684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359106.25,
            "unit": "ns",
            "range": "± 33330.225929722044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323937.7551020408,
            "unit": "ns",
            "range": "± 41350.40735860908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288943.15789473685,
            "unit": "ns",
            "range": "± 38675.59473646766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5098983.333333333,
            "unit": "ns",
            "range": "± 283793.3431728332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4625743.333333333,
            "unit": "ns",
            "range": "± 233758.28086695427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27778.350515463917,
            "unit": "ns",
            "range": "± 8997.919051139497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106080,
            "unit": "ns",
            "range": "± 19099.40736520711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120724.74226804124,
            "unit": "ns",
            "range": "± 28012.36717552861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145433.68421052632,
            "unit": "ns",
            "range": "± 29091.735356788686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8797.67441860465,
            "unit": "ns",
            "range": "± 2262.5845057568204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27232.323232323233,
            "unit": "ns",
            "range": "± 9023.62916586371"
          }
        ]
      }
    ]
  }
}