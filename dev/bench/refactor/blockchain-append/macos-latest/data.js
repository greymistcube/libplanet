window.BENCHMARK_DATA = {
  "lastUpdate": 1681987909972,
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
          "id": "7d4b5b60a38872ddfec0219cc7eaa548c043e4ce",
          "message": "Removed unnecessary parameter",
          "timestamp": "2023-04-20T19:36:11+09:00",
          "tree_id": "a0bfe316525f740b16a78054e4210e2e299290b3",
          "url": "https://github.com/greymistcube/libplanet/commit/7d4b5b60a38872ddfec0219cc7eaa548c043e4ce"
        },
        "date": 1681987894473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8007446.341772152,
            "unit": "ns",
            "range": "± 412574.3004192182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19190948.42,
            "unit": "ns",
            "range": "± 766849.991525465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48450751.2,
            "unit": "ns",
            "range": "± 1720964.261771099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97238591.8076923,
            "unit": "ns",
            "range": "± 3392378.1897169533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193743037,
            "unit": "ns",
            "range": "± 2967568.404415921"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56259.641304347824,
            "unit": "ns",
            "range": "± 7164.813222846441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376669.05376344087,
            "unit": "ns",
            "range": "± 21689.085395436952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315895.59139784944,
            "unit": "ns",
            "range": "± 28624.668576868753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267062.737704918,
            "unit": "ns",
            "range": "± 11952.133305957896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5496746.263157895,
            "unit": "ns",
            "range": "± 188472.6194683998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3590795.269230769,
            "unit": "ns",
            "range": "± 79939.46914375035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18279.574468085106,
            "unit": "ns",
            "range": "± 2499.2237052339824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86993.03225806452,
            "unit": "ns",
            "range": "± 9297.303067874285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88140.48888888888,
            "unit": "ns",
            "range": "± 11963.342866641371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117967.03191489361,
            "unit": "ns",
            "range": "± 14166.320092245542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6161.040229885058,
            "unit": "ns",
            "range": "± 790.7466857579334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17886.577777777777,
            "unit": "ns",
            "range": "± 2025.5967187266951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544285.3645833333,
            "unit": "ns",
            "range": "± 157118.42369165333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982313.934782609,
            "unit": "ns",
            "range": "± 240332.72598394673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2457402.711111111,
            "unit": "ns",
            "range": "± 201388.85418447523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7054453.12886598,
            "unit": "ns",
            "range": "± 519948.01806593523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229158.327586207,
            "unit": "ns",
            "range": "± 269673.22030618304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3395293.5057471264,
            "unit": "ns",
            "range": "± 275139.3478797089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4265526.180851064,
            "unit": "ns",
            "range": "± 165701.19638715667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4449765.29032258,
            "unit": "ns",
            "range": "± 439617.8886670288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8241297.517241379,
            "unit": "ns",
            "range": "± 356197.3078337461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6318481.038461538,
            "unit": "ns",
            "range": "± 41626.46947396351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914417.9288504464,
            "unit": "ns",
            "range": "± 20558.845755117232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269926.130078125,
            "unit": "ns",
            "range": "± 20144.14139863153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630798.0697916667,
            "unit": "ns",
            "range": "± 25727.681584096015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844107.7115885416,
            "unit": "ns",
            "range": "± 13170.133652585977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763875.2720424107,
            "unit": "ns",
            "range": "± 9234.147461357275"
          }
        ]
      }
    ]
  }
}