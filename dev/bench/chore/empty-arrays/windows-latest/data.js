window.BENCHMARK_DATA = {
  "lastUpdate": 1688628339702,
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
          "id": "e24d18921c41a38b868ee475266278ff81d69ecb",
          "message": "[skip changelog] Use Array.Empty",
          "timestamp": "2023-07-06T16:10:56+09:00",
          "tree_id": "325d5ec55c6a1ae00ba89f4065e854776ab1151d",
          "url": "https://github.com/greymistcube/libplanet/commit/e24d18921c41a38b868ee475266278ff81d69ecb"
        },
        "date": 1688628318659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338012,
            "unit": "ns",
            "range": "± 105779.80013769981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2425521.6666666665,
            "unit": "ns",
            "range": "± 108228.83649020072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694681.8181818181,
            "unit": "ns",
            "range": "± 129046.41101813132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4509136,
            "unit": "ns",
            "range": "± 177919.19142563295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41947.887323943665,
            "unit": "ns",
            "range": "± 1959.800219769467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6835146.153846154,
            "unit": "ns",
            "range": "± 23787.027815759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17611126.666666668,
            "unit": "ns",
            "range": "± 115214.21952585704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45047353.333333336,
            "unit": "ns",
            "range": "± 368904.9081241604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90109900,
            "unit": "ns",
            "range": "± 740474.0981290297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179533820,
            "unit": "ns",
            "range": "± 1614183.5734689976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4875575.279017857,
            "unit": "ns",
            "range": "± 8166.561534427607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519973.49609375,
            "unit": "ns",
            "range": "± 1757.29820756548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154893.1315104167,
            "unit": "ns",
            "range": "± 1123.2365417932406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610472.7083333335,
            "unit": "ns",
            "range": "± 9579.342216422778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841465.6705729166,
            "unit": "ns",
            "range": "± 3834.4700174050504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741552.0442708334,
            "unit": "ns",
            "range": "± 625.0075775413741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2966483.3333333335,
            "unit": "ns",
            "range": "± 76052.7372326579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3145577.272727273,
            "unit": "ns",
            "range": "± 76298.28639290339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4015570.3703703703,
            "unit": "ns",
            "range": "± 109982.58888364946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3456300,
            "unit": "ns",
            "range": "± 105406.05180716977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5881742.105263158,
            "unit": "ns",
            "range": "± 199956.51909998636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251120.4081632653,
            "unit": "ns",
            "range": "± 9660.788002535402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235640.47619047618,
            "unit": "ns",
            "range": "± 6969.867532905381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215356.25,
            "unit": "ns",
            "range": "± 6627.846314919617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833571.4285714286,
            "unit": "ns",
            "range": "± 24235.46125860992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3499660,
            "unit": "ns",
            "range": "± 58277.92770117051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16077.956989247312,
            "unit": "ns",
            "range": "± 1139.6381568571446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77159.45945945945,
            "unit": "ns",
            "range": "± 3730.911927853892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65220.68965517241,
            "unit": "ns",
            "range": "± 1905.3269892489823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82613.26530612246,
            "unit": "ns",
            "range": "± 12396.504643333377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4061.0526315789475,
            "unit": "ns",
            "range": "± 630.3148042998805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15536.170212765957,
            "unit": "ns",
            "range": "± 1275.9016262876207"
          }
        ]
      }
    ]
  }
}