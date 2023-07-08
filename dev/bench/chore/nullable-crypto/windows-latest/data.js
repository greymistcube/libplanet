window.BENCHMARK_DATA = {
  "lastUpdate": 1688816282832,
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
          "id": "5620fcbbe02a0d05a15d8a8c0d082a188239ff6a",
          "message": "Nullable crypto",
          "timestamp": "2023-07-08T20:14:57+09:00",
          "tree_id": "ca7d1bf28b1784bae6b9a3c9fff571c818a9f28e",
          "url": "https://github.com/greymistcube/libplanet/commit/5620fcbbe02a0d05a15d8a8c0d082a188239ff6a"
        },
        "date": 1688816256972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682215.7894736843,
            "unit": "ns",
            "range": "± 223139.3507528945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037429.569892473,
            "unit": "ns",
            "range": "± 412692.9334208004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2046272.6315789474,
            "unit": "ns",
            "range": "± 273055.2806013422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5830260,
            "unit": "ns",
            "range": "± 630702.478059019"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64462.244897959186,
            "unit": "ns",
            "range": "± 17409.640150394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7626601.0869565215,
            "unit": "ns",
            "range": "± 665294.5779827994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23005184.69387755,
            "unit": "ns",
            "range": "± 2792767.0429810723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60267081.05263158,
            "unit": "ns",
            "range": "± 3407548.0093804877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120378842,
            "unit": "ns",
            "range": "± 7755134.110012462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234363486.56716418,
            "unit": "ns",
            "range": "± 10479894.78390821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5764695.368303572,
            "unit": "ns",
            "range": "± 86831.97577571674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855229.6437230604,
            "unit": "ns",
            "range": "± 52643.95169851494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344898.57421875,
            "unit": "ns",
            "range": "± 21699.185925721766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3033941.455078125,
            "unit": "ns",
            "range": "± 59404.42863539124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962012.1961805555,
            "unit": "ns",
            "range": "± 26959.120933363967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918337.7734375,
            "unit": "ns",
            "range": "± 22070.58231815002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3200489.010989011,
            "unit": "ns",
            "range": "± 391151.6581272251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3934977.659574468,
            "unit": "ns",
            "range": "± 519630.464674772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4733709.375,
            "unit": "ns",
            "range": "± 539575.9684239634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4091005.102040816,
            "unit": "ns",
            "range": "± 507687.03797753376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7664472.7272727275,
            "unit": "ns",
            "range": "± 1067870.1757272708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325102.0833333333,
            "unit": "ns",
            "range": "± 56541.22106768265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303568.0412371134,
            "unit": "ns",
            "range": "± 48345.19656075753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275080.8080808081,
            "unit": "ns",
            "range": "± 53868.812068079395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572621.052631579,
            "unit": "ns",
            "range": "± 757734.6137475973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817471.7391304346,
            "unit": "ns",
            "range": "± 336047.95194396505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28361.855670103094,
            "unit": "ns",
            "range": "± 10796.608681461905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101447.95918367348,
            "unit": "ns",
            "range": "± 16968.219108370125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102750.51546391753,
            "unit": "ns",
            "range": "± 24445.88463879341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134845.87628865978,
            "unit": "ns",
            "range": "± 26576.59103706122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11519.191919191919,
            "unit": "ns",
            "range": "± 8383.130251268314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27787,
            "unit": "ns",
            "range": "± 10555.401269473177"
          }
        ]
      }
    ]
  }
}