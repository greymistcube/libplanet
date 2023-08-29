window.BENCHMARK_DATA = {
  "lastUpdate": 1693274935627,
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
          "id": "8fd3f8d0796a07e1153001ede1da9fa89f348a4c",
          "message": "Added tests",
          "timestamp": "2023-08-29T10:41:31+09:00",
          "tree_id": "57e213a1dc4e272b185cdc5fe4d197ee3e2461d4",
          "url": "https://github.com/greymistcube/libplanet/commit/8fd3f8d0796a07e1153001ede1da9fa89f348a4c"
        },
        "date": 1693274906069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8638381.523809524,
            "unit": "ns",
            "range": "± 186256.00192976845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21650798,
            "unit": "ns",
            "range": "± 209071.15568907795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54720534.823529415,
            "unit": "ns",
            "range": "± 759860.5513844492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107437728.57142857,
            "unit": "ns",
            "range": "± 1078889.022960155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227227753.7857143,
            "unit": "ns",
            "range": "± 1828504.5029106408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75378.91578947369,
            "unit": "ns",
            "range": "± 11951.98339158958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344287.21276595746,
            "unit": "ns",
            "range": "± 33678.75112805761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325343.4666666667,
            "unit": "ns",
            "range": "± 21846.827630861742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305936.7156862745,
            "unit": "ns",
            "range": "± 12288.984331202842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189867.933333333,
            "unit": "ns",
            "range": "± 72503.23627010106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3852706.5625,
            "unit": "ns",
            "range": "± 73046.67189130408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25258.17525773196,
            "unit": "ns",
            "range": "± 3049.8785700223284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108403.93478260869,
            "unit": "ns",
            "range": "± 12066.790947262274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118664.18085106384,
            "unit": "ns",
            "range": "± 8139.228099002163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109788.47826086957,
            "unit": "ns",
            "range": "± 9734.411637207415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8545.78947368421,
            "unit": "ns",
            "range": "± 800.895680708405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24736.836734693876,
            "unit": "ns",
            "range": "± 3738.2209112513747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596480.319148936,
            "unit": "ns",
            "range": "± 169930.43795282207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3203771,
            "unit": "ns",
            "range": "± 261318.61364286393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169471.223529412,
            "unit": "ns",
            "range": "± 227597.5790935028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10690297.989795918,
            "unit": "ns",
            "range": "± 5041329.259725564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3428520.4375,
            "unit": "ns",
            "range": "± 89259.18662865392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471025.3227848103,
            "unit": "ns",
            "range": "± 179462.78305176852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4651399.469387755,
            "unit": "ns",
            "range": "± 184330.21275656158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4228380.378787879,
            "unit": "ns",
            "range": "± 195579.36646892247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920269.047169811,
            "unit": "ns",
            "range": "± 288466.4997592085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5949086.87109375,
            "unit": "ns",
            "range": "± 91388.48816946567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1669392.5475643382,
            "unit": "ns",
            "range": "± 32460.766217904664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1041240.8447265625,
            "unit": "ns",
            "range": "± 17922.93809231281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2914605.6316002156,
            "unit": "ns",
            "range": "± 127796.18778000063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806341.5658482143,
            "unit": "ns",
            "range": "± 19139.48154672275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741020.1415608724,
            "unit": "ns",
            "range": "± 18748.2514554886"
          }
        ]
      }
    ]
  }
}