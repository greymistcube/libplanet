window.BENCHMARK_DATA = {
  "lastUpdate": 1686129758198,
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
          "id": "8e352a36a1df2997198200100b40c956d9435aeb",
          "message": "Prepare 1.4.1",
          "timestamp": "2023-06-07T17:59:47+09:00",
          "tree_id": "00a0c7681d77723219c692049b0c449a1d5aa778",
          "url": "https://github.com/greymistcube/libplanet/commit/8e352a36a1df2997198200100b40c956d9435aeb"
        },
        "date": 1686129740393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8162112.611111111,
            "unit": "ns",
            "range": "± 173323.67524099458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20626767.075757574,
            "unit": "ns",
            "range": "± 1427124.0569441812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53254056.441176474,
            "unit": "ns",
            "range": "± 1705585.122867795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105692367.86486487,
            "unit": "ns",
            "range": "± 3542158.7229698887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222731058,
            "unit": "ns",
            "range": "± 7758004.856471144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76646.56818181818,
            "unit": "ns",
            "range": "± 6110.00927214048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344236.7083333333,
            "unit": "ns",
            "range": "± 46808.3552568436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330213.3,
            "unit": "ns",
            "range": "± 40659.059812575026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322740.7365591398,
            "unit": "ns",
            "range": "± 32770.38008177966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259272.708955224,
            "unit": "ns",
            "range": "± 202060.21535345088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3725109.227272727,
            "unit": "ns",
            "range": "± 90005.89922739289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18574.32967032967,
            "unit": "ns",
            "range": "± 2628.552060461108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90296.24468085106,
            "unit": "ns",
            "range": "± 11339.486840227939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103150.61340206186,
            "unit": "ns",
            "range": "± 15927.705250911778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125456.59574468085,
            "unit": "ns",
            "range": "± 21724.43022654803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8233.876344086022,
            "unit": "ns",
            "range": "± 1826.010833305038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19668.80681818182,
            "unit": "ns",
            "range": "± 3055.118284513182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1842391.7826086956,
            "unit": "ns",
            "range": "± 432841.36163974676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3495945.4418604653,
            "unit": "ns",
            "range": "± 549167.0812985061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2819145.5689655175,
            "unit": "ns",
            "range": "± 486445.4144382203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7261812.28021978,
            "unit": "ns",
            "range": "± 995806.1328529187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3431558.575,
            "unit": "ns",
            "range": "± 178669.48610339148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3543668.5729166665,
            "unit": "ns",
            "range": "± 281034.59368336416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4529491.12,
            "unit": "ns",
            "range": "± 182801.42078299398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4440431,
            "unit": "ns",
            "range": "± 341592.27580432635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8003614.697916667,
            "unit": "ns",
            "range": "± 560512.2208247724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7500448.102640086,
            "unit": "ns",
            "range": "± 328410.3340781877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2176817.9426846593,
            "unit": "ns",
            "range": "± 92749.96377308396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400971.4517578124,
            "unit": "ns",
            "range": "± 31094.262442084895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3099661.328598485,
            "unit": "ns",
            "range": "± 212639.2057834746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 958902.4548177083,
            "unit": "ns",
            "range": "± 17903.259732347902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807064.0910500919,
            "unit": "ns",
            "range": "± 25939.834439509832"
          }
        ]
      }
    ]
  }
}