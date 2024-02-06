window.BENCHMARK_DATA = {
  "lastUpdate": 1707192661129,
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
          "id": "74d9178258a05ac1b256134fc8a92c69da9ea88f",
          "message": "Prepare 4.0.3",
          "timestamp": "2024-02-06T12:59:40+09:00",
          "tree_id": "a9aeb51f656297f693ffd7fd27d8441e992b96d3",
          "url": "https://github.com/greymistcube/libplanet/commit/74d9178258a05ac1b256134fc8a92c69da9ea88f"
        },
        "date": 1707192652612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197518.2972972973,
            "unit": "ns",
            "range": "± 5096.098741329625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196864.5172413793,
            "unit": "ns",
            "range": "± 4989.084525389185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164613.84615384616,
            "unit": "ns",
            "range": "± 2322.340301152907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3146896.25,
            "unit": "ns",
            "range": "± 27338.472113073047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762435.3125,
            "unit": "ns",
            "range": "± 50527.913498341026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13712.875,
            "unit": "ns",
            "range": "± 2978.2673212527625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64324.59375,
            "unit": "ns",
            "range": "± 6145.3213843894455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55195.82352941176,
            "unit": "ns",
            "range": "± 847.1757665394854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69046.16326530612,
            "unit": "ns",
            "range": "± 14827.491363091538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3456.0103092783506,
            "unit": "ns",
            "range": "± 707.384494323475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13185.173469387755,
            "unit": "ns",
            "range": "± 2488.5005288264024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39768.585106382976,
            "unit": "ns",
            "range": "± 4959.761632343661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383578.092592593,
            "unit": "ns",
            "range": "± 64808.04417381632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476404.0975609757,
            "unit": "ns",
            "range": "± 72377.78210915449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3116324.6428571427,
            "unit": "ns",
            "range": "± 39440.07335304293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3076679.4875,
            "unit": "ns",
            "range": "± 159900.36661653125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14031257.483516483,
            "unit": "ns",
            "range": "± 968309.4007192508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958238.0052631579,
            "unit": "ns",
            "range": "± 71811.40670517489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1909867.6444444444,
            "unit": "ns",
            "range": "± 71808.1618152129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589519.7368421052,
            "unit": "ns",
            "range": "± 141188.13988397925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12706474.117977528,
            "unit": "ns",
            "range": "± 1023890.9927137186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5601792.785714285,
            "unit": "ns",
            "range": "± 22897.36702760174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14117103.214285715,
            "unit": "ns",
            "range": "± 129167.55608923601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36279274.35714286,
            "unit": "ns",
            "range": "± 221353.52801748092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72629750.66666667,
            "unit": "ns",
            "range": "± 413184.2979618688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149384588.7142857,
            "unit": "ns",
            "range": "± 1083011.1043004433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3683921.237955729,
            "unit": "ns",
            "range": "± 10717.353267112216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196580.6606069712,
            "unit": "ns",
            "range": "± 5628.186515098359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755954.7376953125,
            "unit": "ns",
            "range": "± 13702.85980904687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949546.1050180288,
            "unit": "ns",
            "range": "± 10895.772800274426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628482.1776592548,
            "unit": "ns",
            "range": "± 1921.7436947146357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574980.1207932692,
            "unit": "ns",
            "range": "± 1861.0571182061785"
          }
        ]
      }
    ]
  }
}