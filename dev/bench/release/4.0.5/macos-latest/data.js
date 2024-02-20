window.BENCHMARK_DATA = {
  "lastUpdate": 1708403610650,
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
        "date": 1708403595748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8664763.333333334,
            "unit": "ns",
            "range": "± 288211.9552610048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21767219.703125,
            "unit": "ns",
            "range": "± 999843.8727565261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54045477.45454545,
            "unit": "ns",
            "range": "± 1319243.379905847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105505389.16666667,
            "unit": "ns",
            "range": "± 2518748.242641599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215185437,
            "unit": "ns",
            "range": "± 5884777.406838244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76408.02272727272,
            "unit": "ns",
            "range": "± 5967.128715129733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318929.3,
            "unit": "ns",
            "range": "± 16079.191138725717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304848.1515151515,
            "unit": "ns",
            "range": "± 14276.906303799125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305743.9375,
            "unit": "ns",
            "range": "± 13169.053292889068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4659448.542553191,
            "unit": "ns",
            "range": "± 345348.72752231633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4095084.942105263,
            "unit": "ns",
            "range": "± 278446.9109760811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20295.26404494382,
            "unit": "ns",
            "range": "± 3822.5185504706897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117119.87234042553,
            "unit": "ns",
            "range": "± 24409.59669299578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117173.95652173914,
            "unit": "ns",
            "range": "± 14271.811838058475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117915.87368421053,
            "unit": "ns",
            "range": "± 19358.873944767718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8243.520833333334,
            "unit": "ns",
            "range": "± 1280.7306547778567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23665.532258064515,
            "unit": "ns",
            "range": "± 3469.8234902219356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1721834.375,
            "unit": "ns",
            "range": "± 33822.18670020218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2757763.4714285713,
            "unit": "ns",
            "range": "± 133278.7926347093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2828582.952631579,
            "unit": "ns",
            "range": "± 379675.5167719372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 17555560.75,
            "unit": "ns",
            "range": "± 5655092.351108224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266549.6071428573,
            "unit": "ns",
            "range": "± 92479.92420794156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3393162.129411765,
            "unit": "ns",
            "range": "± 178648.18651597708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4270046.642857143,
            "unit": "ns",
            "range": "± 109033.32661922896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4660753.436842105,
            "unit": "ns",
            "range": "± 356457.5991354972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25760709.67525773,
            "unit": "ns",
            "range": "± 6282192.2409819085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5801370.117274306,
            "unit": "ns",
            "range": "± 215228.54155693768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1816164.3686197917,
            "unit": "ns",
            "range": "± 32981.89499966765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1117434.5483141448,
            "unit": "ns",
            "range": "± 24253.491057871484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628149.6147392164,
            "unit": "ns",
            "range": "± 128214.17574761537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785652.2631835938,
            "unit": "ns",
            "range": "± 9738.253842728684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 702842.7913161058,
            "unit": "ns",
            "range": "± 3152.348362968297"
          }
        ]
      }
    ]
  }
}