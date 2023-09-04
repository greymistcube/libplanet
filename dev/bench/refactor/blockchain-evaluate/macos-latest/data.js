window.BENCHMARK_DATA = {
  "lastUpdate": 1693798161992,
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
          "id": "aa648e7190f598c9d6958fd46da135d82142a85b",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:10:43+09:00",
          "tree_id": "0e30da4a540935e01029fe8a98862a01b934b52b",
          "url": "https://github.com/greymistcube/libplanet/commit/aa648e7190f598c9d6958fd46da135d82142a85b"
        },
        "date": 1693798134922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8081682.739130435,
            "unit": "ns",
            "range": "± 197809.04123357715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20109804.923076924,
            "unit": "ns",
            "range": "± 483165.7909675248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49261333.25,
            "unit": "ns",
            "range": "± 1260625.0947867525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101122114,
            "unit": "ns",
            "range": "± 2073731.4486307045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211375542.14,
            "unit": "ns",
            "range": "± 5515930.041094505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70354.20833333333,
            "unit": "ns",
            "range": "± 9483.886803600555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322680.86363636365,
            "unit": "ns",
            "range": "± 17715.169832972988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306103.46428571426,
            "unit": "ns",
            "range": "± 16280.389283293462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296877.3333333333,
            "unit": "ns",
            "range": "± 9364.23157440944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4167405.8571428573,
            "unit": "ns",
            "range": "± 47906.08465225258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3684479.285714286,
            "unit": "ns",
            "range": "± 49347.360899239386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22194.5,
            "unit": "ns",
            "range": "± 3364.5149012648662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108361.0052631579,
            "unit": "ns",
            "range": "± 12811.227253545747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102103.11224489796,
            "unit": "ns",
            "range": "± 9672.061520660223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113835.11224489796,
            "unit": "ns",
            "range": "± 13090.52446547065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7618.978723404255,
            "unit": "ns",
            "range": "± 981.4009185767552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23400.41489361702,
            "unit": "ns",
            "range": "± 2899.1868656446295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1824451.2142857143,
            "unit": "ns",
            "range": "± 27883.316125979683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2869950.984375,
            "unit": "ns",
            "range": "± 132534.25480612786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1946520.904494382,
            "unit": "ns",
            "range": "± 115636.73870817093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5547733.3125,
            "unit": "ns",
            "range": "± 215026.52502687735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191540.0714285714,
            "unit": "ns",
            "range": "± 147986.12662535137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3454046.8333333335,
            "unit": "ns",
            "range": "± 42885.245222429105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4334576.88,
            "unit": "ns",
            "range": "± 148070.08984091118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3905726.8076923075,
            "unit": "ns",
            "range": "± 135990.3322127124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6751289.487179487,
            "unit": "ns",
            "range": "± 222338.20650305078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5503936.524553572,
            "unit": "ns",
            "range": "± 46958.76999402544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1728700.7134486607,
            "unit": "ns",
            "range": "± 12638.221822273183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1005842.4196213942,
            "unit": "ns",
            "range": "± 3424.982512990471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567460.781550481,
            "unit": "ns",
            "range": "± 37890.69696338089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775941.8727678572,
            "unit": "ns",
            "range": "± 1854.8439764940117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720592.6173967634,
            "unit": "ns",
            "range": "± 4233.151244416015"
          }
        ]
      }
    ]
  }
}