window.BENCHMARK_DATA = {
  "lastUpdate": 1684328652704,
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
          "id": "86fbb2e8e588a7acdde12fa7ead91fded0db40f3",
          "message": "Release 1.2.1",
          "timestamp": "2023-05-17T21:48:04+09:00",
          "tree_id": "b2d3ed91786a1c1441663fba400fbb99f721c2ca",
          "url": "https://github.com/greymistcube/libplanet/commit/86fbb2e8e588a7acdde12fa7ead91fded0db40f3"
        },
        "date": 1684328630180,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442013.5416666667,
            "unit": "ns",
            "range": "± 138606.16726598665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2668546,
            "unit": "ns",
            "range": "± 106744.80192859749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2236176.3157894737,
            "unit": "ns",
            "range": "± 148883.34445987837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5262378.571428572,
            "unit": "ns",
            "range": "± 132343.7145582244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51514.43298969072,
            "unit": "ns",
            "range": "± 4023.2912959707105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7762640,
            "unit": "ns",
            "range": "± 70259.36439873539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20490540,
            "unit": "ns",
            "range": "± 169174.46953620733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51600056.666666664,
            "unit": "ns",
            "range": "± 306743.99858296604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104423061.90476191,
            "unit": "ns",
            "range": "± 2359739.512843778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202914028.57142857,
            "unit": "ns",
            "range": "± 2008163.56766711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4818453.046875,
            "unit": "ns",
            "range": "± 33961.663151517765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536453.7239583333,
            "unit": "ns",
            "range": "± 5190.715931699889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178519.5833333333,
            "unit": "ns",
            "range": "± 5386.523452405773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649903.290264423,
            "unit": "ns",
            "range": "± 10145.774023525086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833482.0768229166,
            "unit": "ns",
            "range": "± 3217.4643940535743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764947.3214285715,
            "unit": "ns",
            "range": "± 3070.312321927456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328379.3103448274,
            "unit": "ns",
            "range": "± 97100.61563476437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509783,
            "unit": "ns",
            "range": "± 252140.89898388964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4364295.652173913,
            "unit": "ns",
            "range": "± 108751.08558814846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379852.631578947,
            "unit": "ns",
            "range": "± 85547.82527543715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6875878.378378378,
            "unit": "ns",
            "range": "± 208326.60540487745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270490.56603773584,
            "unit": "ns",
            "range": "± 11180.99803153243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264238.9830508475,
            "unit": "ns",
            "range": "± 11196.212674754284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246104.05405405405,
            "unit": "ns",
            "range": "± 12202.025872546674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135114.285714286,
            "unit": "ns",
            "range": "± 49369.499415402955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781506.6666666665,
            "unit": "ns",
            "range": "± 66166.25668578754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22878.571428571428,
            "unit": "ns",
            "range": "± 1909.1343102131366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94715.55555555556,
            "unit": "ns",
            "range": "± 6230.13537305104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91412,
            "unit": "ns",
            "range": "± 11009.236526157883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101629.47368421052,
            "unit": "ns",
            "range": "± 13153.835082576461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5929.032258064516,
            "unit": "ns",
            "range": "± 1058.257452562763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21077.659574468085,
            "unit": "ns",
            "range": "± 1972.3439608923775"
          }
        ]
      }
    ]
  }
}