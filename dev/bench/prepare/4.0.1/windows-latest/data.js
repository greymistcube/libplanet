window.BENCHMARK_DATA = {
  "lastUpdate": 1705914910024,
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
          "id": "63dd3675c3120f11d2499b653d82e4c35fa8554a",
          "message": "Prepare 4.0.1",
          "timestamp": "2024-01-22T18:02:55+09:00",
          "tree_id": "944c887df52a61c35d84f4f3b2a40b6b0e31e8b6",
          "url": "https://github.com/greymistcube/libplanet/commit/63dd3675c3120f11d2499b653d82e4c35fa8554a"
        },
        "date": 1705914892330,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951320.618556701,
            "unit": "ns",
            "range": "± 110070.13856528059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1746013.9240506329,
            "unit": "ns",
            "range": "± 89851.4824930523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1587563.5416666667,
            "unit": "ns",
            "range": "± 98474.62523255919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10848848.888888888,
            "unit": "ns",
            "range": "± 940598.0163542439"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34730,
            "unit": "ns",
            "range": "± 2053.194277600888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5088528.571428572,
            "unit": "ns",
            "range": "± 55807.28417539207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13240153.333333334,
            "unit": "ns",
            "range": "± 109433.23383080054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32096200,
            "unit": "ns",
            "range": "± 150144.56110951616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66313406.666666664,
            "unit": "ns",
            "range": "± 1059121.4408088208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130719620,
            "unit": "ns",
            "range": "± 937173.1889037372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3333501.3997395835,
            "unit": "ns",
            "range": "± 15945.15006335609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1101596.71875,
            "unit": "ns",
            "range": "± 5726.0974554156355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758764.9283854166,
            "unit": "ns",
            "range": "± 2351.4244023445954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954680.5989583333,
            "unit": "ns",
            "range": "± 8852.675398737243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610319.0708705357,
            "unit": "ns",
            "range": "± 1076.0253448128772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558705.078125,
            "unit": "ns",
            "range": "± 1208.7456457933426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198233.3333333335,
            "unit": "ns",
            "range": "± 69126.66989829663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2356300,
            "unit": "ns",
            "range": "± 47780.37474242239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2799681.25,
            "unit": "ns",
            "range": "± 110149.5900770808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2827632,
            "unit": "ns",
            "range": "± 50190.93311213358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12399013.043478262,
            "unit": "ns",
            "range": "± 1665579.106643494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168054.16666666666,
            "unit": "ns",
            "range": "± 8277.441557171778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161431.3253012048,
            "unit": "ns",
            "range": "± 7332.83507065149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140345.45454545456,
            "unit": "ns",
            "range": "± 3402.90174112334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757764.285714286,
            "unit": "ns",
            "range": "± 34449.486032625915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2494185.714285714,
            "unit": "ns",
            "range": "± 25223.488965731834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9428.888888888889,
            "unit": "ns",
            "range": "± 803.3979025133165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54570.833333333336,
            "unit": "ns",
            "range": "± 5204.571202655293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45230,
            "unit": "ns",
            "range": "± 2519.47247911814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54969.69696969697,
            "unit": "ns",
            "range": "± 13381.562510161437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2558.762886597938,
            "unit": "ns",
            "range": "± 433.6743635589351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9601.136363636364,
            "unit": "ns",
            "range": "± 995.5642214956588"
          }
        ]
      }
    ]
  }
}