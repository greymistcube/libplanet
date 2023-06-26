window.BENCHMARK_DATA = {
  "lastUpdate": 1687758469834,
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
          "id": "411675855d61636b9c11aae608da481940e88491",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T14:32:00+09:00",
          "tree_id": "c2d985f43f19e3af563e442baadc44551033d058",
          "url": "https://github.com/greymistcube/libplanet/commit/411675855d61636b9c11aae608da481940e88491"
        },
        "date": 1687758452525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1259397,
            "unit": "ns",
            "range": "± 121404.65307758549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2273340.625,
            "unit": "ns",
            "range": "± 70517.29076170587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1959464.5833333333,
            "unit": "ns",
            "range": "± 155720.85752813666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4632468,
            "unit": "ns",
            "range": "± 115944.70564310673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45712.244897959186,
            "unit": "ns",
            "range": "± 7888.949145470458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7352021.428571428,
            "unit": "ns",
            "range": "± 59533.40598833086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18753353.333333332,
            "unit": "ns",
            "range": "± 189219.3997403417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46274633.333333336,
            "unit": "ns",
            "range": "± 362416.69518991665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92295546.66666667,
            "unit": "ns",
            "range": "± 535514.2746752437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187127833.33333334,
            "unit": "ns",
            "range": "± 444418.29020267236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5032708.020833333,
            "unit": "ns",
            "range": "± 14431.894208328413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556066.875,
            "unit": "ns",
            "range": "± 2466.2314022601226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074527.0089285714,
            "unit": "ns",
            "range": "± 1294.5315025810169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615860.323660714,
            "unit": "ns",
            "range": "± 6599.840219096205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849032.5130208334,
            "unit": "ns",
            "range": "± 1688.1351492580332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778122.0442708334,
            "unit": "ns",
            "range": "± 1687.7505103233323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2955931.0344827585,
            "unit": "ns",
            "range": "± 83286.90989348754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3104380,
            "unit": "ns",
            "range": "± 150767.4844812753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3904642.8571428573,
            "unit": "ns",
            "range": "± 61393.25588476203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3917621.4285714286,
            "unit": "ns",
            "range": "± 42066.58053374671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6141778.378378378,
            "unit": "ns",
            "range": "± 205974.94067528262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227289.2857142857,
            "unit": "ns",
            "range": "± 12129.899510476222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218043.6170212766,
            "unit": "ns",
            "range": "± 13939.636058489765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200785.7142857143,
            "unit": "ns",
            "range": "± 11170.9401914926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3896893.3333333335,
            "unit": "ns",
            "range": "± 67065.26103800118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3591492.8571428573,
            "unit": "ns",
            "range": "± 47647.04308019244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13100,
            "unit": "ns",
            "range": "± 2412.162166146686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74143,
            "unit": "ns",
            "range": "± 9455.608725176628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61578,
            "unit": "ns",
            "range": "± 8338.817347050765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82926.5306122449,
            "unit": "ns",
            "range": "± 13971.027097122736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4065.979381443299,
            "unit": "ns",
            "range": "± 1011.7936422860378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12688.144329896908,
            "unit": "ns",
            "range": "± 2623.3901134381867"
          }
        ]
      }
    ]
  }
}