window.BENCHMARK_DATA = {
  "lastUpdate": 1689321492640,
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
          "id": "639b3c048cc8a77e48c723374264fcd3544a0b1e",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:42:36+09:00",
          "tree_id": "968f82627aae9c0bbbdeff1c7db89e4204d978b2",
          "url": "https://github.com/greymistcube/libplanet/commit/639b3c048cc8a77e48c723374264fcd3544a0b1e"
        },
        "date": 1689321471284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360894,
            "unit": "ns",
            "range": "± 110647.23160850552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2490440.350877193,
            "unit": "ns",
            "range": "± 106619.29579390859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1741851.0869565217,
            "unit": "ns",
            "range": "± 97692.87543569108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4645349.295774648,
            "unit": "ns",
            "range": "± 223833.34544971457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44341.46341463415,
            "unit": "ns",
            "range": "± 2362.670137293256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6845773.333333333,
            "unit": "ns",
            "range": "± 34384.474625012015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17759086.666666668,
            "unit": "ns",
            "range": "± 111043.13747797465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45584726.666666664,
            "unit": "ns",
            "range": "± 378102.53232738463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90561986.66666667,
            "unit": "ns",
            "range": "± 617371.2518952164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181864836.66666666,
            "unit": "ns",
            "range": "± 990313.5599154345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4879340.513392857,
            "unit": "ns",
            "range": "± 7588.6600455864145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514401.0611979167,
            "unit": "ns",
            "range": "± 2002.9848624419378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174440.390625,
            "unit": "ns",
            "range": "± 947.017917377814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601868.9583333335,
            "unit": "ns",
            "range": "± 6976.602938516788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806558.37890625,
            "unit": "ns",
            "range": "± 2049.9953167559465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736822.6911272322,
            "unit": "ns",
            "range": "± 801.2171606543072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992171.4285714286,
            "unit": "ns",
            "range": "± 42312.513315434044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3149720,
            "unit": "ns",
            "range": "± 47178.93294984229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3962700,
            "unit": "ns",
            "range": "± 44246.049056868986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3557915.3846153845,
            "unit": "ns",
            "range": "± 93244.53739413453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5841941.891891892,
            "unit": "ns",
            "range": "± 185685.5307268752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260085.36585365853,
            "unit": "ns",
            "range": "± 9376.181551559508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240897.5,
            "unit": "ns",
            "range": "± 8262.503733658337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222122.61904761905,
            "unit": "ns",
            "range": "± 11846.9491898184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3843793.3333333335,
            "unit": "ns",
            "range": "± 33561.53126650184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525721.4285714286,
            "unit": "ns",
            "range": "± 42311.0129066513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19201.03092783505,
            "unit": "ns",
            "range": "± 2054.9987249266537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86397.22222222222,
            "unit": "ns",
            "range": "± 4273.929228299563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69043.02325581395,
            "unit": "ns",
            "range": "± 3700.931224552082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90770.40816326531,
            "unit": "ns",
            "range": "± 13539.222968640846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4767.368421052632,
            "unit": "ns",
            "range": "± 736.6459505345628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17374.444444444445,
            "unit": "ns",
            "range": "± 1308.426545499895"
          }
        ]
      }
    ]
  }
}