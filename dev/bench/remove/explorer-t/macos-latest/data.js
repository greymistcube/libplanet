window.BENCHMARK_DATA = {
  "lastUpdate": 1684475189548,
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
          "id": "68abe2621ad7ee020dce0d6fb79b25d81f103d5d",
          "message": "Removed t from rest of the Explorer",
          "timestamp": "2023-05-19T14:31:04+09:00",
          "tree_id": "445f0508d49175ce2fa994a79892c3f4394ccff0",
          "url": "https://github.com/greymistcube/libplanet/commit/68abe2621ad7ee020dce0d6fb79b25d81f103d5d"
        },
        "date": 1684475170056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8055399.428571428,
            "unit": "ns",
            "range": "± 70090.52639563769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20111239.31372549,
            "unit": "ns",
            "range": "± 813383.03204971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49842901.55,
            "unit": "ns",
            "range": "± 1080400.0241682648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98306859.75,
            "unit": "ns",
            "range": "± 2147355.7140864613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203037986.42857143,
            "unit": "ns",
            "range": "± 2261283.5169356195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68949.6,
            "unit": "ns",
            "range": "± 7796.032446195158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336850.6195652174,
            "unit": "ns",
            "range": "± 38066.52523531721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312641.4111111111,
            "unit": "ns",
            "range": "± 22164.650608668962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307680.7696629214,
            "unit": "ns",
            "range": "± 17854.177583948884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271988.166666667,
            "unit": "ns",
            "range": "± 89842.83175062209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3705926.25,
            "unit": "ns",
            "range": "± 138513.12345142465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18345.68888888889,
            "unit": "ns",
            "range": "± 2072.5609010688204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94568.79787234042,
            "unit": "ns",
            "range": "± 11361.933936908015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99478.79545454546,
            "unit": "ns",
            "range": "± 6214.887957597975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114933.375,
            "unit": "ns",
            "range": "± 15338.19196869113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7228.888888888889,
            "unit": "ns",
            "range": "± 912.4316375124127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18427,
            "unit": "ns",
            "range": "± 2979.7856733900608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496563.2268041237,
            "unit": "ns",
            "range": "± 155348.77951802418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2781059.4886363638,
            "unit": "ns",
            "range": "± 152122.05464994026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2529042.210526316,
            "unit": "ns",
            "range": "± 235201.13108847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6324747.474358974,
            "unit": "ns",
            "range": "± 323797.01395039784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308304.9556962023,
            "unit": "ns",
            "range": "± 171122.00862953035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3401334.855555556,
            "unit": "ns",
            "range": "± 201356.27161018396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4462958.825581395,
            "unit": "ns",
            "range": "± 161830.21166667846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498846.239583333,
            "unit": "ns",
            "range": "± 291882.4635554432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7877332,
            "unit": "ns",
            "range": "± 343149.2739727641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6644282.195,
            "unit": "ns",
            "range": "± 176000.8222315713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007774.0655691964,
            "unit": "ns",
            "range": "± 29564.551962954127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253288.327445652,
            "unit": "ns",
            "range": "± 31684.347670295974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2502523.010516827,
            "unit": "ns",
            "range": "± 15198.806313513776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862774.5901692709,
            "unit": "ns",
            "range": "± 9226.038062627249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713841.0365885417,
            "unit": "ns",
            "range": "± 11595.847158291463"
          }
        ]
      }
    ]
  }
}