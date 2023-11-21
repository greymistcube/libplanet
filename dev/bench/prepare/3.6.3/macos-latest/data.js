window.BENCHMARK_DATA = {
  "lastUpdate": 1700534031045,
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
          "id": "3dd68b79479d07038eaddb6a0d4c74d9dcb66d4b",
          "message": "Prepare 3.6.3",
          "timestamp": "2023-11-21T11:19:57+09:00",
          "tree_id": "bd6e4b1ea8d66955ebd09d534ee5832113ea0f64",
          "url": "https://github.com/greymistcube/libplanet/commit/3dd68b79479d07038eaddb6a0d4c74d9dcb66d4b"
        },
        "date": 1700534018587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7659315.461538462,
            "unit": "ns",
            "range": "± 118765.4034982518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18934642.666666668,
            "unit": "ns",
            "range": "± 390626.7640758284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46311597.25,
            "unit": "ns",
            "range": "± 424096.9830361758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93331894.3076923,
            "unit": "ns",
            "range": "± 1131464.7394526107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193080023.54761904,
            "unit": "ns",
            "range": "± 4362140.650741496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39097.54838709677,
            "unit": "ns",
            "range": "± 7199.178423107871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227005.8686868687,
            "unit": "ns",
            "range": "± 19056.041256256027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219500.46875,
            "unit": "ns",
            "range": "± 20280.10231779085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196791.09278350516,
            "unit": "ns",
            "range": "± 16659.105256262064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764381.6818181816,
            "unit": "ns",
            "range": "± 92105.68183362413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500783.222222222,
            "unit": "ns",
            "range": "± 73892.17820386958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15735.042105263157,
            "unit": "ns",
            "range": "± 3519.1505591239984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82545.06185567011,
            "unit": "ns",
            "range": "± 11608.878389166946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76002.80612244898,
            "unit": "ns",
            "range": "± 10525.039534816327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74327.80208333333,
            "unit": "ns",
            "range": "± 10838.550689304691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4486.154639175258,
            "unit": "ns",
            "range": "± 1105.8087099136824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12830.095744680852,
            "unit": "ns",
            "range": "± 1580.4590531523982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1115018.8409090908,
            "unit": "ns",
            "range": "± 101618.0532057701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2316637.137254902,
            "unit": "ns",
            "range": "± 94545.70443230504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1599747.8105263158,
            "unit": "ns",
            "range": "± 139403.85037817855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6176102.285714285,
            "unit": "ns",
            "range": "± 145937.2321000172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3024821.714285714,
            "unit": "ns",
            "range": "± 45522.39512157061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2943126.714285714,
            "unit": "ns",
            "range": "± 64426.54180655097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3736015.842857143,
            "unit": "ns",
            "range": "± 115398.64889257557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3650884.3333333335,
            "unit": "ns",
            "range": "± 99027.42825562561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12995236.853535354,
            "unit": "ns",
            "range": "± 2231177.983364303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4322812.6465625,
            "unit": "ns",
            "range": "± 115316.34983972518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1345674.2890625,
            "unit": "ns",
            "range": "± 13303.294667011658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888651.6265625,
            "unit": "ns",
            "range": "± 12744.283051487326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2124530.9379620296,
            "unit": "ns",
            "range": "± 125349.9859120699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648102.6768973215,
            "unit": "ns",
            "range": "± 6661.847748220888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574033.8592529297,
            "unit": "ns",
            "range": "± 11057.065616545287"
          }
        ]
      }
    ]
  }
}