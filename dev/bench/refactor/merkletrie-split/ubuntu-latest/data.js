window.BENCHMARK_DATA = {
  "lastUpdate": 1703663199669,
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
          "id": "7a3491f87c033eb92dd2e1fd3ae6fec1187f2321",
          "message": "Remove no longer necessary comments",
          "timestamp": "2023-12-27T16:35:51+09:00",
          "tree_id": "e7541ac8b2d46dab6ea0d2bb84a32e1f2d35b86d",
          "url": "https://github.com/greymistcube/libplanet/commit/7a3491f87c033eb92dd2e1fd3ae6fec1187f2321"
        },
        "date": 1703663193537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758584.2672991073,
            "unit": "ns",
            "range": "± 15752.724566627014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219962.7340745192,
            "unit": "ns",
            "range": "± 5338.9707822249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768124.4224243164,
            "unit": "ns",
            "range": "± 14854.048914254437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954966.1106770833,
            "unit": "ns",
            "range": "± 3097.7796362977224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613218.3562825521,
            "unit": "ns",
            "range": "± 2630.422642920603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573294.5096905048,
            "unit": "ns",
            "range": "± 2785.779520455433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2350519.8,
            "unit": "ns",
            "range": "± 77101.34274782539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534286.5,
            "unit": "ns",
            "range": "± 49358.31207540766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3127511.7333333334,
            "unit": "ns",
            "range": "± 93597.94708437358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2879408.895522388,
            "unit": "ns",
            "range": "± 124556.82563868546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705383.033333333,
            "unit": "ns",
            "range": "± 117939.83329639291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42630.85051546392,
            "unit": "ns",
            "range": "± 5157.555826651396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203824.87333333332,
            "unit": "ns",
            "range": "± 10197.74951295672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194567.33333333334,
            "unit": "ns",
            "range": "± 8633.526615422521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166921.12903225806,
            "unit": "ns",
            "range": "± 4945.062107745702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991445.3076923075,
            "unit": "ns",
            "range": "± 47518.727654446266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825712.1333333333,
            "unit": "ns",
            "range": "± 38686.46065276708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12445.06976744186,
            "unit": "ns",
            "range": "± 843.628727799947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64563.71428571428,
            "unit": "ns",
            "range": "± 8149.024832241882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51292.346153846156,
            "unit": "ns",
            "range": "± 996.3831769879575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67078.98947368421,
            "unit": "ns",
            "range": "± 9318.6598131198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2950.8846153846152,
            "unit": "ns",
            "range": "± 545.214815345103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13820.010204081633,
            "unit": "ns",
            "range": "± 2524.2882685583677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5806940.8,
            "unit": "ns",
            "range": "± 18005.066343353792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13916020.076923076,
            "unit": "ns",
            "range": "± 71875.1391667772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38623095.538461536,
            "unit": "ns",
            "range": "± 200048.7471037228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77933731.34615384,
            "unit": "ns",
            "range": "± 453896.91111507657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150630815.66666666,
            "unit": "ns",
            "range": "± 422656.3862731937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955151.3202247191,
            "unit": "ns",
            "range": "± 72695.58374224947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858657.3773584906,
            "unit": "ns",
            "range": "± 76757.28875919573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1415335.8298969073,
            "unit": "ns",
            "range": "± 89636.09470668071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6014361.4,
            "unit": "ns",
            "range": "± 303394.6497793868"
          }
        ]
      }
    ]
  }
}