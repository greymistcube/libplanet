window.BENCHMARK_DATA = {
  "lastUpdate": 1684399586306,
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
          "id": "4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da",
          "message": "Cleanup",
          "timestamp": "2023-05-18T17:31:50+09:00",
          "tree_id": "b8f88932d597c482d3db31fe2450c40a34019690",
          "url": "https://github.com/greymistcube/libplanet/commit/4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da"
        },
        "date": 1684399567512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7548779.928571428,
            "unit": "ns",
            "range": "± 102847.97518852339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19014520.866666667,
            "unit": "ns",
            "range": "± 343986.0540636301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47785267.9117647,
            "unit": "ns",
            "range": "± 1514052.3779273145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92629862.5,
            "unit": "ns",
            "range": "± 861321.8272155884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187987137.92307693,
            "unit": "ns",
            "range": "± 1517706.7397312224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58491.71578947368,
            "unit": "ns",
            "range": "± 5658.413087932359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309304.7157894737,
            "unit": "ns",
            "range": "± 19249.36083308209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293603.2816091954,
            "unit": "ns",
            "range": "± 17604.107985449842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275336.4793814433,
            "unit": "ns",
            "range": "± 18425.66355147272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3979663.34,
            "unit": "ns",
            "range": "± 105476.89451039344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3507336.285714286,
            "unit": "ns",
            "range": "± 81940.4331402653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17404.761363636364,
            "unit": "ns",
            "range": "± 1400.814122846402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83023.4947368421,
            "unit": "ns",
            "range": "± 8108.229554468147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78732.42857142857,
            "unit": "ns",
            "range": "± 6853.572661422423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97582.09375,
            "unit": "ns",
            "range": "± 15484.989317725272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5083.212765957447,
            "unit": "ns",
            "range": "± 696.0890573405507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16271.5,
            "unit": "ns",
            "range": "± 1913.0388058080453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474226.177777778,
            "unit": "ns",
            "range": "± 147377.45424822328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2788184.590909091,
            "unit": "ns",
            "range": "± 130894.2290994441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2452699.7216494847,
            "unit": "ns",
            "range": "± 236447.59617318586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6463453.426666667,
            "unit": "ns",
            "range": "± 325850.920127975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331533.492063492,
            "unit": "ns",
            "range": "± 148691.11072382986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3223642,
            "unit": "ns",
            "range": "± 118409.94480940966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4280539.914634147,
            "unit": "ns",
            "range": "± 224848.2895333493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4164516.611111111,
            "unit": "ns",
            "range": "± 252826.6554853853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7353478.338709678,
            "unit": "ns",
            "range": "± 200865.4138262893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6038900.9453125,
            "unit": "ns",
            "range": "± 41624.00462731132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821760.204326923,
            "unit": "ns",
            "range": "± 3749.890743972986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225862.0319475445,
            "unit": "ns",
            "range": "± 4801.779022201682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526502.763802083,
            "unit": "ns",
            "range": "± 16167.070084750318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 754612.1839192709,
            "unit": "ns",
            "range": "± 3891.110135483127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754572.16875,
            "unit": "ns",
            "range": "± 4055.7405436067475"
          }
        ]
      }
    ]
  }
}