window.BENCHMARK_DATA = {
  "lastUpdate": 1683187859274,
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
          "id": "3a5c9a2204574574a02c1ec799a1e3f6b2885b5e",
          "message": "Added test",
          "timestamp": "2023-05-04T16:54:14+09:00",
          "tree_id": "f3fcd1efcc43b9616c4dce4595871a2f85485482",
          "url": "https://github.com/greymistcube/libplanet/commit/3a5c9a2204574574a02c1ec799a1e3f6b2885b5e"
        },
        "date": 1683187827815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8361119.352941177,
            "unit": "ns",
            "range": "± 264884.60838967306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21017486.28846154,
            "unit": "ns",
            "range": "± 842792.902794813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52773519.72727273,
            "unit": "ns",
            "range": "± 1092139.2354882897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102294313.35714285,
            "unit": "ns",
            "range": "± 1688147.3142624823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215608460.7,
            "unit": "ns",
            "range": "± 3780190.19441755"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65126.6129032258,
            "unit": "ns",
            "range": "± 7473.130512233489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331073.8333333333,
            "unit": "ns",
            "range": "± 22601.55572576007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321486.48913043475,
            "unit": "ns",
            "range": "± 26571.32273690739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290151,
            "unit": "ns",
            "range": "± 14223.128291426123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229704.268292683,
            "unit": "ns",
            "range": "± 152275.56074778124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3755185.411764706,
            "unit": "ns",
            "range": "± 74486.7156327714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18260.4,
            "unit": "ns",
            "range": "± 1697.1238644353439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93476.32291666667,
            "unit": "ns",
            "range": "± 10637.376600305755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98550.16233766233,
            "unit": "ns",
            "range": "± 4791.559592852034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115361.4375,
            "unit": "ns",
            "range": "± 14747.987123181465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6765.688172043011,
            "unit": "ns",
            "range": "± 572.8161359628832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18430.945652173912,
            "unit": "ns",
            "range": "± 1876.217719530383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654544.587628866,
            "unit": "ns",
            "range": "± 174643.11996526853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048248.8289473685,
            "unit": "ns",
            "range": "± 154405.76341275935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641954.7422680412,
            "unit": "ns",
            "range": "± 241115.93794532912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6928941.48,
            "unit": "ns",
            "range": "± 466858.40662567085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3329663.447368421,
            "unit": "ns",
            "range": "± 109707.71688388896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446938.236842105,
            "unit": "ns",
            "range": "± 175164.10342920292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4422222.894736842,
            "unit": "ns",
            "range": "± 150359.81493494997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499613,
            "unit": "ns",
            "range": "± 207132.14677729632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7993652.661016949,
            "unit": "ns",
            "range": "± 352354.57932074176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6673637.055729167,
            "unit": "ns",
            "range": "± 82688.51729926861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075051.3682291666,
            "unit": "ns",
            "range": "± 31328.387627977274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274396.4500558036,
            "unit": "ns",
            "range": "± 5080.508499987304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514572.48046875,
            "unit": "ns",
            "range": "± 13290.483961223466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855431.316015625,
            "unit": "ns",
            "range": "± 4945.834450699549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738445.7251674107,
            "unit": "ns",
            "range": "± 4334.413337529775"
          }
        ]
      }
    ]
  }
}