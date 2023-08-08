window.BENCHMARK_DATA = {
  "lastUpdate": 1691482278904,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482270341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433419.285714286,
            "unit": "ns",
            "range": "± 59625.660546482795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541701.3076923075,
            "unit": "ns",
            "range": "± 96277.5488781343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4315892.285714285,
            "unit": "ns",
            "range": "± 58532.60483555439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3886512.785714286,
            "unit": "ns",
            "range": "± 54410.30562760157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6267969.633333334,
            "unit": "ns",
            "range": "± 174269.2147946297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7816251.4,
            "unit": "ns",
            "range": "± 59597.826526524565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19553272,
            "unit": "ns",
            "range": "± 89353.82347292571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50410445.461538464,
            "unit": "ns",
            "range": "± 233777.76194697368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101235919.86666666,
            "unit": "ns",
            "range": "± 367423.28820543643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202056552.93333334,
            "unit": "ns",
            "range": "± 818897.0258542425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47997.903225806454,
            "unit": "ns",
            "range": "± 3077.085358866463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149538.579799107,
            "unit": "ns",
            "range": "± 27460.185350086897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926952.896875,
            "unit": "ns",
            "range": "± 3398.672525498455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381718.3715444712,
            "unit": "ns",
            "range": "± 420.55580390686436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562406.698660714,
            "unit": "ns",
            "range": "± 1307.948374503499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811114.2496744791,
            "unit": "ns",
            "range": "± 342.49344200314073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729286.5297851562,
            "unit": "ns",
            "range": "± 359.8845383799867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288131.3965517241,
            "unit": "ns",
            "range": "± 12515.64497982587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276058.4516129032,
            "unit": "ns",
            "range": "± 8400.10138366877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239650.20754716982,
            "unit": "ns",
            "range": "± 9275.291420589705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4286080.933333334,
            "unit": "ns",
            "range": "± 15785.499279251135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3980832.933333333,
            "unit": "ns",
            "range": "± 40398.45446383644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19897.893617021276,
            "unit": "ns",
            "range": "± 1768.6960902112921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89283.0731707317,
            "unit": "ns",
            "range": "± 4525.217568688014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72419,
            "unit": "ns",
            "range": "± 2406.352968936833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84349.49333333333,
            "unit": "ns",
            "range": "± 3371.061852011928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4892.563829787234,
            "unit": "ns",
            "range": "± 498.4319834425844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20191.58947368421,
            "unit": "ns",
            "range": "± 1745.7427882900568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415820.1717171718,
            "unit": "ns",
            "range": "± 101012.89398025446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638833.407407407,
            "unit": "ns",
            "range": "± 73935.35800760183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783416.1,
            "unit": "ns",
            "range": "± 93127.52523282188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4743807.346153846,
            "unit": "ns",
            "range": "± 122517.63346096508"
          }
        ]
      }
    ]
  }
}