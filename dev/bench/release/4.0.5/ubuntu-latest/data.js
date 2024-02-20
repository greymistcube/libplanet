window.BENCHMARK_DATA = {
  "lastUpdate": 1708403169238,
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
          "id": "ab6f9fad4ab4f23ab444634e707fdd11360c8248",
          "message": "Release 4.0.5",
          "timestamp": "2024-02-20T13:15:16+09:00",
          "tree_id": "9784c0ff337c321fabf7d47683498ac11e2f95cc",
          "url": "https://github.com/greymistcube/libplanet/commit/ab6f9fad4ab4f23ab444634e707fdd11360c8248"
        },
        "date": 1708403162951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5611201,
            "unit": "ns",
            "range": "± 26104.2181265787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14672131.333333334,
            "unit": "ns",
            "range": "± 102441.27183671534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37357806.5,
            "unit": "ns",
            "range": "± 137668.54485552016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76127334.15384616,
            "unit": "ns",
            "range": "± 282926.7000611189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152695844.69230768,
            "unit": "ns",
            "range": "± 639053.9174482052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205648.59016393442,
            "unit": "ns",
            "range": "± 9249.588881633334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187280.80701754385,
            "unit": "ns",
            "range": "± 8077.389855194995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164552.08,
            "unit": "ns",
            "range": "± 4340.2546576593095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3229008.285714286,
            "unit": "ns",
            "range": "± 52587.97127221654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881525,
            "unit": "ns",
            "range": "± 42560.13450401679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13837.979591836734,
            "unit": "ns",
            "range": "± 3000.822911979937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62265.48351648352,
            "unit": "ns",
            "range": "± 6185.509881727414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59348.62765957447,
            "unit": "ns",
            "range": "± 5562.881290996722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63367.16494845361,
            "unit": "ns",
            "range": "± 12012.68341403543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3465.7096774193546,
            "unit": "ns",
            "range": "± 509.4351215390469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11841.550561797752,
            "unit": "ns",
            "range": "± 904.9193461202138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36675.848314606745,
            "unit": "ns",
            "range": "± 2589.5194188266055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981411.1082474227,
            "unit": "ns",
            "range": "± 95691.65734889465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868124.6896551724,
            "unit": "ns",
            "range": "± 81567.82276359486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643600.5757575757,
            "unit": "ns",
            "range": "± 163512.2446490951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7983929.12962963,
            "unit": "ns",
            "range": "± 329214.1328036543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3805538.9807477677,
            "unit": "ns",
            "range": "± 47039.172029323105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1239589.9007161458,
            "unit": "ns",
            "range": "± 25205.68178562186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773556.1854654948,
            "unit": "ns",
            "range": "± 744.5771216066198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973813.62890625,
            "unit": "ns",
            "range": "± 6096.838585913426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640431.4250488281,
            "unit": "ns",
            "range": "± 12381.008397398233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579316.9825032552,
            "unit": "ns",
            "range": "± 1629.0880407895124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470844.8214285714,
            "unit": "ns",
            "range": "± 68909.28520139308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569848.1739130435,
            "unit": "ns",
            "range": "± 64725.77753643175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3135987.8225806453,
            "unit": "ns",
            "range": "± 84399.39318083083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3163045.5396825396,
            "unit": "ns",
            "range": "± 142342.15816586788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8849315.243243244,
            "unit": "ns",
            "range": "± 241069.93790235385"
          }
        ]
      }
    ]
  }
}