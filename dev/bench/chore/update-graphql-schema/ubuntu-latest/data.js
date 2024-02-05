window.BENCHMARK_DATA = {
  "lastUpdate": 1707151692983,
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
          "id": "9f60eeef9e4d848990aa140c25ac59840172a624",
          "message": "Updated graphql schema",
          "timestamp": "2024-02-06T01:36:10+09:00",
          "tree_id": "04e35806d84d3c33f6d6c16daeafa124a4123e97",
          "url": "https://github.com/greymistcube/libplanet/commit/9f60eeef9e4d848990aa140c25ac59840172a624"
        },
        "date": 1707151685632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205649.48076923078,
            "unit": "ns",
            "range": "± 8475.389459477305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195100.4255319149,
            "unit": "ns",
            "range": "± 7493.987603825515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174335.35714285713,
            "unit": "ns",
            "range": "± 5960.737942617297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219398.466666667,
            "unit": "ns",
            "range": "± 30348.560062020984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2784208.785714286,
            "unit": "ns",
            "range": "± 25473.46831940598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13777.455555555556,
            "unit": "ns",
            "range": "± 1986.9765025278994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65135.22826086957,
            "unit": "ns",
            "range": "± 5848.732288871227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59561.70212765958,
            "unit": "ns",
            "range": "± 6475.209148994435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67087.58510638298,
            "unit": "ns",
            "range": "± 9298.685825068194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3672.7555555555555,
            "unit": "ns",
            "range": "± 644.6962582629334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16190.79347826087,
            "unit": "ns",
            "range": "± 1219.2078633370659"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42863.95698924731,
            "unit": "ns",
            "range": "± 4560.492536124031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2430151.8488372094,
            "unit": "ns",
            "range": "± 89152.85315544516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2603650.375,
            "unit": "ns",
            "range": "± 67011.09982896896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170522.45,
            "unit": "ns",
            "range": "± 59210.44695293044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3271154.342857143,
            "unit": "ns",
            "range": "± 99340.81821183393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13890782.590909092,
            "unit": "ns",
            "range": "± 1179469.1101305797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979071.6391752578,
            "unit": "ns",
            "range": "± 92583.89208309329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925655.9615384615,
            "unit": "ns",
            "range": "± 98466.7683022126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1689002.551020408,
            "unit": "ns",
            "range": "± 187293.5362447799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12862065.838709677,
            "unit": "ns",
            "range": "± 1052110.389176133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5516530.346153846,
            "unit": "ns",
            "range": "± 37283.49140447676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464334.807692308,
            "unit": "ns",
            "range": "± 106239.91658143736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37426598.8,
            "unit": "ns",
            "range": "± 345755.50636937487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75067684.71428572,
            "unit": "ns",
            "range": "± 478524.28611906234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148680918.7857143,
            "unit": "ns",
            "range": "± 430862.82385914156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3704384.021935096,
            "unit": "ns",
            "range": "± 19052.917938571158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184247.389811198,
            "unit": "ns",
            "range": "± 2014.5841116648362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755257.7786458334,
            "unit": "ns",
            "range": "± 2270.2965737013055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910925.3575846355,
            "unit": "ns",
            "range": "± 4050.735758123323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622733.5415736607,
            "unit": "ns",
            "range": "± 3393.1660226158633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587536.697265625,
            "unit": "ns",
            "range": "± 1150.6767802452673"
          }
        ]
      }
    ]
  }
}