window.BENCHMARK_DATA = {
  "lastUpdate": 1695084845599,
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
          "id": "86231891c004ef7bec83a29f3f51478f5228fd50",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:40:37+09:00",
          "tree_id": "c1b09f4047d1684df6c3011fc1869c6becd44299",
          "url": "https://github.com/greymistcube/libplanet/commit/86231891c004ef7bec83a29f3f51478f5228fd50"
        },
        "date": 1695084838272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258273.11111111112,
            "unit": "ns",
            "range": "± 7586.355163912105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251674.1590909091,
            "unit": "ns",
            "range": "± 9302.26308034566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220353,
            "unit": "ns",
            "range": "± 3060.103065132083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155308.6153846155,
            "unit": "ns",
            "range": "± 23772.715945450513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825659.714285714,
            "unit": "ns",
            "range": "± 31580.164145402243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16211.355555555556,
            "unit": "ns",
            "range": "± 967.1353310495354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77891.01265822785,
            "unit": "ns",
            "range": "± 3741.237165093753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67615.21428571429,
            "unit": "ns",
            "range": "± 1109.9747868634347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72687.78571428571,
            "unit": "ns",
            "range": "± 13095.326977373645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4393.8877551020405,
            "unit": "ns",
            "range": "± 370.5045287549105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15997.882352941177,
            "unit": "ns",
            "range": "± 850.3167394700455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298136.1463414636,
            "unit": "ns",
            "range": "± 114300.48824907988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3488089.238095238,
            "unit": "ns",
            "range": "± 81912.0946294897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4142574.8571428573,
            "unit": "ns",
            "range": "± 63688.44329879774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3749129.75,
            "unit": "ns",
            "range": "± 64144.22749762185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5992067.666666667,
            "unit": "ns",
            "range": "± 157876.6619599274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354225.8723404256,
            "unit": "ns",
            "range": "± 82893.69495877845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2586322.023255814,
            "unit": "ns",
            "range": "± 84961.61626973744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660078.0975609757,
            "unit": "ns",
            "range": "± 80723.90943202865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4381648.236842105,
            "unit": "ns",
            "range": "± 150258.91740636088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46939.555555555555,
            "unit": "ns",
            "range": "± 2471.016030907125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7817287.928571428,
            "unit": "ns",
            "range": "± 15414.56800694263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21016967.266666666,
            "unit": "ns",
            "range": "± 151931.77593646935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51985218,
            "unit": "ns",
            "range": "± 521848.90254260675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103486554.66666667,
            "unit": "ns",
            "range": "± 1265814.245220763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205741692.2,
            "unit": "ns",
            "range": "± 2575878.559265063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4940481.043526785,
            "unit": "ns",
            "range": "± 14615.791746195668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1544099.8629807692,
            "unit": "ns",
            "range": "± 3816.4834132237725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1045071.6501302083,
            "unit": "ns",
            "range": "± 2478.458361293455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586003.027083333,
            "unit": "ns",
            "range": "± 7500.855218936086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801988.4000418527,
            "unit": "ns",
            "range": "± 1410.8513538127909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742020.3311244419,
            "unit": "ns",
            "range": "± 1291.058805084715"
          }
        ]
      }
    ]
  }
}