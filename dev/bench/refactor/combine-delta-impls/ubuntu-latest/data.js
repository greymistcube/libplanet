window.BENCHMARK_DATA = {
  "lastUpdate": 1687232764533,
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
          "id": "7ab8839a22265afd7efcd957840a5738b5c60503",
          "message": "Reorganize tests",
          "timestamp": "2023-06-20T11:34:58+09:00",
          "tree_id": "81260a7a807266e524111433ca408a398f66a401",
          "url": "https://github.com/greymistcube/libplanet/commit/7ab8839a22265afd7efcd957840a5738b5c60503"
        },
        "date": 1687232757306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145546.2666666666,
            "unit": "ns",
            "range": "± 27944.980388681783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399144.5263157897,
            "unit": "ns",
            "range": "± 47302.38345224433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205486.4,
            "unit": "ns",
            "range": "± 44506.03434976944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3642700.296296296,
            "unit": "ns",
            "range": "± 100158.73057909892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6234866.318181818,
            "unit": "ns",
            "range": "± 149610.0380800784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959802.233816965,
            "unit": "ns",
            "range": "± 21928.742190701476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976137.6916666667,
            "unit": "ns",
            "range": "± 1670.2167427483826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356566.9145132212,
            "unit": "ns",
            "range": "± 1208.3124369796271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587141.2864583335,
            "unit": "ns",
            "range": "± 6368.509194665528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805124.8822265625,
            "unit": "ns",
            "range": "± 833.6346460262235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836051.817578125,
            "unit": "ns",
            "range": "± 521.4433750164087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270390.4,
            "unit": "ns",
            "range": "± 7467.784279247714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259073.88888888888,
            "unit": "ns",
            "range": "± 10048.889045263917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225078.16666666666,
            "unit": "ns",
            "range": "± 1336.249897241825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4121117.466666667,
            "unit": "ns",
            "range": "± 26346.20325551582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3755792.7333333334,
            "unit": "ns",
            "range": "± 29225.117774335988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16014.968421052632,
            "unit": "ns",
            "range": "± 1021.0608631351039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81598.97802197802,
            "unit": "ns",
            "range": "± 4501.13176379754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70093.30769230769,
            "unit": "ns",
            "range": "± 680.0263946611906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77439.05633802817,
            "unit": "ns",
            "range": "± 2654.3284697550366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4140.897959183673,
            "unit": "ns",
            "range": "± 595.9562097279616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14934.677777777777,
            "unit": "ns",
            "range": "± 914.709947614362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1327212.1195652173,
            "unit": "ns",
            "range": "± 78549.08890047953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536269.56,
            "unit": "ns",
            "range": "± 67678.61661871742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1715824.1630434783,
            "unit": "ns",
            "range": "± 94692.24950126851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4691460.5,
            "unit": "ns",
            "range": "± 124321.80096258258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44654.408602150535,
            "unit": "ns",
            "range": "± 2818.6863893779196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7707520.928571428,
            "unit": "ns",
            "range": "± 18236.675082685128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19300177.53846154,
            "unit": "ns",
            "range": "± 48938.92527360912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49601116.266666666,
            "unit": "ns",
            "range": "± 595467.9698392645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96637332.61538461,
            "unit": "ns",
            "range": "± 226735.19397913595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196314699,
            "unit": "ns",
            "range": "± 1512140.0550803582"
          }
        ]
      }
    ]
  }
}