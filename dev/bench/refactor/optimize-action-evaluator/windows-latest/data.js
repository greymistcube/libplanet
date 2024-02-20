window.BENCHMARK_DATA = {
  "lastUpdate": 1708395568410,
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
          "id": "c1414e8ce929a1e5b5195134d44aef321b719aba",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T11:07:47+09:00",
          "tree_id": "4652084f03c64430ed32917042b6ade68d9df046",
          "url": "https://github.com/greymistcube/libplanet/commit/c1414e8ce929a1e5b5195134d44aef321b719aba"
        },
        "date": 1708395551034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967969.0721649484,
            "unit": "ns",
            "range": "± 119150.66037097103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692493.3333333333,
            "unit": "ns",
            "range": "± 75538.50262304036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553393.9393939395,
            "unit": "ns",
            "range": "± 170867.97613659702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6808718.571428572,
            "unit": "ns",
            "range": "± 221398.73767033272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34574.71264367816,
            "unit": "ns",
            "range": "± 1646.0819154222365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5328880,
            "unit": "ns",
            "range": "± 48825.05504349176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13196450,
            "unit": "ns",
            "range": "± 139568.56462244366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33240507.692307692,
            "unit": "ns",
            "range": "± 346747.43561065325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65405621.428571425,
            "unit": "ns",
            "range": "± 539670.1259937499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128404828.57142857,
            "unit": "ns",
            "range": "± 573578.2948078887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3256448.5576923075,
            "unit": "ns",
            "range": "± 4291.928943067805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059608.7076822917,
            "unit": "ns",
            "range": "± 3721.0244782059517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736620.3059895834,
            "unit": "ns",
            "range": "± 1165.8613017105401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961489.760044643,
            "unit": "ns",
            "range": "± 4186.285781246055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620823.6258370535,
            "unit": "ns",
            "range": "± 4043.925506818564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564916.6391225961,
            "unit": "ns",
            "range": "± 792.751768433677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113058,
            "unit": "ns",
            "range": "± 83279.15948231966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291372.222222222,
            "unit": "ns",
            "range": "± 94924.84100724937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764496.296296296,
            "unit": "ns",
            "range": "± 76131.54345494322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2790335.3846153845,
            "unit": "ns",
            "range": "± 122008.64906684027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777862.162162162,
            "unit": "ns",
            "range": "± 241886.8380408852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172165.59139784946,
            "unit": "ns",
            "range": "± 11453.284080233663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162134.66666666666,
            "unit": "ns",
            "range": "± 7631.239021876396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139650,
            "unit": "ns",
            "range": "± 3697.810162785537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2781907.1428571427,
            "unit": "ns",
            "range": "± 34584.22193129992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2550795,
            "unit": "ns",
            "range": "± 56256.073122445145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10786.458333333334,
            "unit": "ns",
            "range": "± 1582.6440096886945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52119.78021978022,
            "unit": "ns",
            "range": "± 3889.564950828756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44024.32432432433,
            "unit": "ns",
            "range": "± 1355.114879387108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54656.12244897959,
            "unit": "ns",
            "range": "± 11561.534752813823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2147.3684210526317,
            "unit": "ns",
            "range": "± 356.9498758730394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9726.595744680852,
            "unit": "ns",
            "range": "± 1314.123079939246"
          }
        ]
      }
    ]
  }
}