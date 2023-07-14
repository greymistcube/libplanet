window.BENCHMARK_DATA = {
  "lastUpdate": 1689323094507,
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
          "id": "0ee43d09d85c3cd2c092779fe5b704aa29c47f1a",
          "message": "Removed ExtractableException",
          "timestamp": "2023-07-14T17:03:42+09:00",
          "tree_id": "0a1ba4efd74af218d73d91db6b8377c76ab76028",
          "url": "https://github.com/greymistcube/libplanet/commit/0ee43d09d85c3cd2c092779fe5b704aa29c47f1a"
        },
        "date": 1689323067930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730940.625,
            "unit": "ns",
            "range": "± 208805.35059595577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3257534.0206185565,
            "unit": "ns",
            "range": "± 265397.8746172896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2247562.8865979384,
            "unit": "ns",
            "range": "± 222185.78764909203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6610573.958333333,
            "unit": "ns",
            "range": "± 500410.2458551366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55637.77777777778,
            "unit": "ns",
            "range": "± 8788.636403771798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8677918.518518519,
            "unit": "ns",
            "range": "± 239337.404317447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24963756,
            "unit": "ns",
            "range": "± 956709.0140770738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63276030,
            "unit": "ns",
            "range": "± 1394415.3398845207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132242460,
            "unit": "ns",
            "range": "± 5835392.6268845275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259280495.45454547,
            "unit": "ns",
            "range": "± 6217263.889746056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6161614.114583333,
            "unit": "ns",
            "range": "± 69616.66475644863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989029.8735119049,
            "unit": "ns",
            "range": "± 46252.6071663769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1506807.1354166667,
            "unit": "ns",
            "range": "± 22178.959905252163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335919.8016826925,
            "unit": "ns",
            "range": "± 19917.385240337837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1186374.1536458333,
            "unit": "ns",
            "range": "± 20807.969493265056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1007100.6556919643,
            "unit": "ns",
            "range": "± 11761.930742862482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3717344.6428571427,
            "unit": "ns",
            "range": "± 159549.66615690305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976614.736842105,
            "unit": "ns",
            "range": "± 274991.3812840597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5253858.536585365,
            "unit": "ns",
            "range": "± 274910.93594836275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4420716.842105263,
            "unit": "ns",
            "range": "± 290260.16123933985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8909798.630136987,
            "unit": "ns",
            "range": "± 441472.85637371195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325222.22222222225,
            "unit": "ns",
            "range": "± 19997.24013417277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315519.7916666667,
            "unit": "ns",
            "range": "± 34307.41095261969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260298.86363636365,
            "unit": "ns",
            "range": "± 19308.699095557953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4841290.697674419,
            "unit": "ns",
            "range": "± 175881.59682548544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4529701.754385965,
            "unit": "ns",
            "range": "± 196043.671784802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20088.043478260868,
            "unit": "ns",
            "range": "± 4030.702019167336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98455.91397849462,
            "unit": "ns",
            "range": "± 12433.855101623632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103540.625,
            "unit": "ns",
            "range": "± 20602.77742198852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130184.375,
            "unit": "ns",
            "range": "± 24512.642616134144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6593.684210526316,
            "unit": "ns",
            "range": "± 1512.2767481667877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18819.277108433736,
            "unit": "ns",
            "range": "± 1646.0935153565408"
          }
        ]
      }
    ]
  }
}