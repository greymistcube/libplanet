window.BENCHMARK_DATA = {
  "lastUpdate": 1693374768761,
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
          "id": "ce517db3abbe0e18c4a4adeb6bca2fa90277e54d",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T10:34:04+09:00",
          "tree_id": "cc00a44ef2dd3cb22070002c104dd70e39fed669",
          "url": "https://github.com/greymistcube/libplanet/commit/ce517db3abbe0e18c4a4adeb6bca2fa90277e54d"
        },
        "date": 1693374751210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8219286.576923077,
            "unit": "ns",
            "range": "± 136890.68869811267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21229259.060606062,
            "unit": "ns",
            "range": "± 666514.583484391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52452859.23076923,
            "unit": "ns",
            "range": "± 589856.7189517516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103994531.53846154,
            "unit": "ns",
            "range": "± 960826.7198686778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212019632.84615386,
            "unit": "ns",
            "range": "± 2966050.5144557087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69123.19565217392,
            "unit": "ns",
            "range": "± 10912.578602351892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315944.21276595746,
            "unit": "ns",
            "range": "± 27639.411633745396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317748.5208333333,
            "unit": "ns",
            "range": "± 35720.481991791174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304145.03684210527,
            "unit": "ns",
            "range": "± 20071.462873151748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238368.523809524,
            "unit": "ns",
            "range": "± 151256.3616007424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822390.75,
            "unit": "ns",
            "range": "± 103708.71129180254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20250.333333333332,
            "unit": "ns",
            "range": "± 2116.0167528993534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89725.06451612903,
            "unit": "ns",
            "range": "± 8264.690659150203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94863.28888888888,
            "unit": "ns",
            "range": "± 7879.926524274514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104303.4693877551,
            "unit": "ns",
            "range": "± 16470.405684325742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7074.363157894737,
            "unit": "ns",
            "range": "± 826.7369929688118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19318.521276595744,
            "unit": "ns",
            "range": "± 1853.1815231128749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655429.883838384,
            "unit": "ns",
            "range": "± 197568.9120708295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2942731.815217391,
            "unit": "ns",
            "range": "± 176025.2757802553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124813.484848485,
            "unit": "ns",
            "range": "± 219219.75026347156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6169071.327956989,
            "unit": "ns",
            "range": "± 487241.28675580065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308742.5595238097,
            "unit": "ns",
            "range": "± 175834.1854019985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550870.9864864866,
            "unit": "ns",
            "range": "± 120034.44691921234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4484100.481481481,
            "unit": "ns",
            "range": "± 186396.60201603002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3956253.0967741935,
            "unit": "ns",
            "range": "± 178121.96250181698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7528044.892473118,
            "unit": "ns",
            "range": "± 498731.04023272777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5661078.506138393,
            "unit": "ns",
            "range": "± 89489.410760788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804108.0126953125,
            "unit": "ns",
            "range": "± 29389.73792446829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033692.8374399039,
            "unit": "ns",
            "range": "± 15327.806292593257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627446.326041667,
            "unit": "ns",
            "range": "± 45689.82115215126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820937.4558454241,
            "unit": "ns",
            "range": "± 9415.422393728899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800257.7877371652,
            "unit": "ns",
            "range": "± 12889.0545884556"
          }
        ]
      }
    ]
  }
}