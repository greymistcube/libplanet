window.BENCHMARK_DATA = {
  "lastUpdate": 1684330156967,
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
        "date": 1684330066258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10537507.489130436,
            "unit": "ns",
            "range": "± 2738933.9694258827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24065537.5,
            "unit": "ns",
            "range": "± 5879015.5098235635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53284160.82530121,
            "unit": "ns",
            "range": "± 4760661.185813715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110962171.08988763,
            "unit": "ns",
            "range": "± 14527269.63617672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281652620.5520833,
            "unit": "ns",
            "range": "± 37034137.32183241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 197824.87368421053,
            "unit": "ns",
            "range": "± 113903.29592612735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445558.30337078654,
            "unit": "ns",
            "range": "± 70193.47344878045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 431153.4090909091,
            "unit": "ns",
            "range": "± 61636.818988167666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 438393.7634408602,
            "unit": "ns",
            "range": "± 131484.96604327034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6741276.596774193,
            "unit": "ns",
            "range": "± 1231594.736653873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6032046.819148936,
            "unit": "ns",
            "range": "± 1157680.2232731583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30174.511904761905,
            "unit": "ns",
            "range": "± 8073.692925649816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130574.19512195123,
            "unit": "ns",
            "range": "± 22439.16095317392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96987.5125,
            "unit": "ns",
            "range": "± 16494.481993695594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271067.6853932584,
            "unit": "ns",
            "range": "± 86012.31754305409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9806.869047619048,
            "unit": "ns",
            "range": "± 3833.273412494081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29086.91489361702,
            "unit": "ns",
            "range": "± 8895.799465012198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3449641.8695652173,
            "unit": "ns",
            "range": "± 1147535.558995476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 6271328.357894737,
            "unit": "ns",
            "range": "± 1744702.021250815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4778447.416666667,
            "unit": "ns",
            "range": "± 827836.4251992331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14300535.709677419,
            "unit": "ns",
            "range": "± 2934914.4082575813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4775671.96969697,
            "unit": "ns",
            "range": "± 1311301.8993378724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4328396.263736264,
            "unit": "ns",
            "range": "± 958843.0424612991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 7058806.34375,
            "unit": "ns",
            "range": "± 1733338.6184537846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5748027.978021978,
            "unit": "ns",
            "range": "± 1144433.5255413868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14066166.925531914,
            "unit": "ns",
            "range": "± 1211452.8803907293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8385425.74900266,
            "unit": "ns",
            "range": "± 544884.6286630557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 3087589.62109375,
            "unit": "ns",
            "range": "± 912178.2572025002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2855062.3571134866,
            "unit": "ns",
            "range": "± 202428.55785824376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 12302231.743844697,
            "unit": "ns",
            "range": "± 3584683.5821807804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1547917.324621776,
            "unit": "ns",
            "range": "± 67607.22356251901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1198568.1115828804,
            "unit": "ns",
            "range": "± 42881.19681020613"
          }
        ]
      }
    ]
  }
}