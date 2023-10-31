window.BENCHMARK_DATA = {
  "lastUpdate": 1698749419538,
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
          "id": "22489754688a856bb4a3731eb9762658143f5edd",
          "message": "Reorganize and cleanup BlockChain",
          "timestamp": "2023-10-31T19:24:42+09:00",
          "tree_id": "a0f54d531e483644a84c33c7d7c4c6a4b54cf95a",
          "url": "https://github.com/greymistcube/libplanet/commit/22489754688a856bb4a3731eb9762658143f5edd"
        },
        "date": 1698749404441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12819479.36,
            "unit": "ns",
            "range": "± 2346554.0238210685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31046279.489583332,
            "unit": "ns",
            "range": "± 4675154.8540772535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77527743.44444445,
            "unit": "ns",
            "range": "± 11866762.714063847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 157062597.89361703,
            "unit": "ns",
            "range": "± 26859117.00060806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 330087711.5833333,
            "unit": "ns",
            "range": "± 33685920.556027666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82091.69565217392,
            "unit": "ns",
            "range": "± 20951.81977894072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409720.87373737374,
            "unit": "ns",
            "range": "± 111118.77372392981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379299.6836734694,
            "unit": "ns",
            "range": "± 102937.30178196571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323357.45360824745,
            "unit": "ns",
            "range": "± 86254.68137645975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6018157.202020202,
            "unit": "ns",
            "range": "± 1240399.611740194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4522559.03125,
            "unit": "ns",
            "range": "± 139289.45170457195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26338.407216494845,
            "unit": "ns",
            "range": "± 5882.797580804409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108692.54210526316,
            "unit": "ns",
            "range": "± 19050.78121250462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111497.06701030929,
            "unit": "ns",
            "range": "± 22195.907519230517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103256.125,
            "unit": "ns",
            "range": "± 16820.383005996653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8169.329787234043,
            "unit": "ns",
            "range": "± 1196.4647803909997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21335.82222222222,
            "unit": "ns",
            "range": "± 2415.837033986673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1903435.6836734693,
            "unit": "ns",
            "range": "± 554952.2945778572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3818389.904040404,
            "unit": "ns",
            "range": "± 967772.8811687542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2862896.207070707,
            "unit": "ns",
            "range": "± 674668.3358666437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15476518.59375,
            "unit": "ns",
            "range": "± 5295199.555667567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5119119.42,
            "unit": "ns",
            "range": "± 1181641.323085566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4456988.70212766,
            "unit": "ns",
            "range": "± 916215.7701689437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5310496.28125,
            "unit": "ns",
            "range": "± 1140419.9140034863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5579098.338383839,
            "unit": "ns",
            "range": "± 1240200.2242311495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18592312.711340208,
            "unit": "ns",
            "range": "± 4258754.823201828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5300310.84087397,
            "unit": "ns",
            "range": "± 319817.74969225744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489582.6094393888,
            "unit": "ns",
            "range": "± 178292.31687583355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 864218.3420061384,
            "unit": "ns",
            "range": "± 12040.357303387505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936099.9865885417,
            "unit": "ns",
            "range": "± 33485.874213591065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 676226.7009570312,
            "unit": "ns",
            "range": "± 50364.727570518175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567737.2811197917,
            "unit": "ns",
            "range": "± 6835.691471699232"
          }
        ]
      }
    ]
  }
}