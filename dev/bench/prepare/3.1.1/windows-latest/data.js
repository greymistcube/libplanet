window.BENCHMARK_DATA = {
  "lastUpdate": 1690509396829,
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
          "id": "a677c8c39ee17b94ce8e041afcbff558ff97f7c1",
          "message": "Prepare 3.1.1",
          "timestamp": "2023-07-28T10:36:34+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/greymistcube/libplanet/commit/a677c8c39ee17b94ce8e041afcbff558ff97f7c1"
        },
        "date": 1690509369889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1572648.9795918367,
            "unit": "ns",
            "range": "± 134069.2737117167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945476.595744681,
            "unit": "ns",
            "range": "± 219114.9369061434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1958673.469387755,
            "unit": "ns",
            "range": "± 159870.86834880878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5558764.285714285,
            "unit": "ns",
            "range": "± 418904.0778547028"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53777.41935483871,
            "unit": "ns",
            "range": "± 3469.2791204669993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8602804.761904761,
            "unit": "ns",
            "range": "± 389323.75756273215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22621817.391304348,
            "unit": "ns",
            "range": "± 866795.9986331137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57099138.18181818,
            "unit": "ns",
            "range": "± 2427094.4440940465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114219278.04878049,
            "unit": "ns",
            "range": "± 4055691.6697717663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222937127.7777778,
            "unit": "ns",
            "range": "± 3970099.460571494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5538438.984375,
            "unit": "ns",
            "range": "± 85457.28325250655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790358.8932291667,
            "unit": "ns",
            "range": "± 29866.068172933687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379605.9505208333,
            "unit": "ns",
            "range": "± 22797.60077586274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3039309.1015625,
            "unit": "ns",
            "range": "± 24315.253292732366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957301.1117788461,
            "unit": "ns",
            "range": "± 12317.545766533049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 895072.1419270834,
            "unit": "ns",
            "range": "± 11653.454895895446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3649753.0864197533,
            "unit": "ns",
            "range": "± 190925.16929835346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3685226.8041237113,
            "unit": "ns",
            "range": "± 220149.74189716487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4652272.527472528,
            "unit": "ns",
            "range": "± 259381.0474811716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4217659.433962264,
            "unit": "ns",
            "range": "± 174888.7165557561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7292236.082474227,
            "unit": "ns",
            "range": "± 431866.8381248936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304880,
            "unit": "ns",
            "range": "± 10790.31379501411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280568.47826086957,
            "unit": "ns",
            "range": "± 18280.96908333625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251961.70212765958,
            "unit": "ns",
            "range": "± 19460.536888697075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4623796.842105263,
            "unit": "ns",
            "range": "± 265523.3765613866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4190875,
            "unit": "ns",
            "range": "± 163395.19576780708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21380.645161290322,
            "unit": "ns",
            "range": "± 1832.8083739890467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95098.97959183673,
            "unit": "ns",
            "range": "± 8771.491954792029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85784.53608247422,
            "unit": "ns",
            "range": "± 8713.475438056965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101980.20833333333,
            "unit": "ns",
            "range": "± 17259.679937214587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5036.95652173913,
            "unit": "ns",
            "range": "± 847.714106807287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20546.236559139787,
            "unit": "ns",
            "range": "± 2297.283799724141"
          }
        ]
      }
    ]
  }
}