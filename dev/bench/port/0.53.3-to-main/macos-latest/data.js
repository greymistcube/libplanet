window.BENCHMARK_DATA = {
  "lastUpdate": 1680662072105,
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
          "id": "fb76686b4182016bc58f8f9c7ddcaad65f667177",
          "message": "Merge tag '0.53.3' into port/0.53.4-to-main",
          "timestamp": "2023-04-05T11:13:46+09:00",
          "tree_id": "59bc08dfe2b68ab052100fa319209ce2d4dc57b2",
          "url": "https://github.com/greymistcube/libplanet/commit/fb76686b4182016bc58f8f9c7ddcaad65f667177"
        },
        "date": 1680662051131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8112394.933333334,
            "unit": "ns",
            "range": "± 115086.43666980216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20280215.333333332,
            "unit": "ns",
            "range": "± 320131.139007275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52175744.733333334,
            "unit": "ns",
            "range": "± 744550.773752245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105054415.5,
            "unit": "ns",
            "range": "± 360815.60097209923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213452471.66666666,
            "unit": "ns",
            "range": "± 3751946.555884014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71395.44210526315,
            "unit": "ns",
            "range": "± 8608.980607501446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441282.1129032258,
            "unit": "ns",
            "range": "± 54642.15016697519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337145.3,
            "unit": "ns",
            "range": "± 15027.610821756383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320307.2346938776,
            "unit": "ns",
            "range": "± 12801.19977576241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5644374.785714285,
            "unit": "ns",
            "range": "± 72766.79405965182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4236602,
            "unit": "ns",
            "range": "± 74860.98491100791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19220.364583333332,
            "unit": "ns",
            "range": "± 3106.245051233306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105571.38775510204,
            "unit": "ns",
            "range": "± 10528.716514168518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117780.76785714286,
            "unit": "ns",
            "range": "± 5059.419034169012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 250197.1157894737,
            "unit": "ns",
            "range": "± 16258.897481571048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9140.202127659575,
            "unit": "ns",
            "range": "± 915.0564772485708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22358.882978723403,
            "unit": "ns",
            "range": "± 2507.5256797380703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667760.306122449,
            "unit": "ns",
            "range": "± 186008.33335520368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3091344.404255319,
            "unit": "ns",
            "range": "± 186035.94296195405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2718589.147368421,
            "unit": "ns",
            "range": "± 353850.4012776901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7043949.1736842105,
            "unit": "ns",
            "range": "± 406731.7137122021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291588.05,
            "unit": "ns",
            "range": "± 80474.7932056033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506687.5,
            "unit": "ns",
            "range": "± 68701.17378909912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4559228.59375,
            "unit": "ns",
            "range": "± 139151.3635408624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4924392.612903226,
            "unit": "ns",
            "range": "± 149109.89084311327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9631796.306122448,
            "unit": "ns",
            "range": "± 817367.1294091474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6747958.353298611,
            "unit": "ns",
            "range": "± 144262.96775037443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808377.4800502232,
            "unit": "ns",
            "range": "± 12271.050127721066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288790.6809430805,
            "unit": "ns",
            "range": "± 6478.72578948266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845166.8787434897,
            "unit": "ns",
            "range": "± 140565.904645043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864307.3837280273,
            "unit": "ns",
            "range": "± 16570.00997215328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774055.1564002404,
            "unit": "ns",
            "range": "± 6110.127121334627"
          }
        ]
      }
    ]
  }
}