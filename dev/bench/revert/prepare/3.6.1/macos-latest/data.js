window.BENCHMARK_DATA = {
  "lastUpdate": 1700482776025,
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
          "id": "17fb083308c0f6352347441c8879bf63319bb6b6",
          "message": "Revert \"Prepare 3.6.2\"\n\nThis reverts commit 585f4ed3ed66691c663e6e789ea87a50001ec8ea.",
          "timestamp": "2023-11-20T21:00:16+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/greymistcube/libplanet/commit/17fb083308c0f6352347441c8879bf63319bb6b6"
        },
        "date": 1700482760989,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9103439.53968254,
            "unit": "ns",
            "range": "± 416792.62485758046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22528003.79347826,
            "unit": "ns",
            "range": "± 1750686.7194708022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52949654.859375,
            "unit": "ns",
            "range": "± 2422191.074258081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105535780.14285715,
            "unit": "ns",
            "range": "± 1675357.0624037872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211194361.80769232,
            "unit": "ns",
            "range": "± 944746.786680465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82266.96511627907,
            "unit": "ns",
            "range": "± 11287.561591204692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325951.0176470588,
            "unit": "ns",
            "range": "± 18878.80915307889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317135.6111111111,
            "unit": "ns",
            "range": "± 27251.208462512095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302563.8620689655,
            "unit": "ns",
            "range": "± 8638.753608528663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4098105.8571428573,
            "unit": "ns",
            "range": "± 57143.4304843215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4390712.170212766,
            "unit": "ns",
            "range": "± 427214.17560299044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26926.20238095238,
            "unit": "ns",
            "range": "± 5002.0164940493005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 139369.26,
            "unit": "ns",
            "range": "± 31121.548316050776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 137957.29591836734,
            "unit": "ns",
            "range": "± 32026.264108406816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121836.3829787234,
            "unit": "ns",
            "range": "± 19384.161890467076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8771.554347826086,
            "unit": "ns",
            "range": "± 870.0807385061171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26411.236263736264,
            "unit": "ns",
            "range": "± 4334.275304887683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447981.3535353534,
            "unit": "ns",
            "range": "± 149176.60815112997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2977355.4574468085,
            "unit": "ns",
            "range": "± 220828.48060930282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2237746.716494845,
            "unit": "ns",
            "range": "± 226422.4479029385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9494134.647727273,
            "unit": "ns",
            "range": "± 881664.2093408083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3242787.90625,
            "unit": "ns",
            "range": "± 148489.09891886712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347157.060240964,
            "unit": "ns",
            "range": "± 174407.67443258953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4296430,
            "unit": "ns",
            "range": "± 140914.5309932678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245301.47368421,
            "unit": "ns",
            "range": "± 286765.30984445824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17588019.55050505,
            "unit": "ns",
            "range": "± 2823469.2398408805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6409649.088641827,
            "unit": "ns",
            "range": "± 82962.90044883845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928248.036358173,
            "unit": "ns",
            "range": "± 50073.86963247856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1118622.742140997,
            "unit": "ns",
            "range": "± 26442.66001824733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3109828.178668478,
            "unit": "ns",
            "range": "± 148218.66543748457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858454.7469482422,
            "unit": "ns",
            "range": "± 15353.005896633804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795193.8406032986,
            "unit": "ns",
            "range": "± 19657.33111790954"
          }
        ]
      }
    ]
  }
}