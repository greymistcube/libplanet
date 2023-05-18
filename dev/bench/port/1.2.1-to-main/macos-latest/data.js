window.BENCHMARK_DATA = {
  "lastUpdate": 1684377504695,
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
          "id": "146c3cce8685b6fddd790da5468455850ea6d7e8",
          "message": "Port 1.2.1 to main",
          "timestamp": "2023-05-18T11:19:38+09:00",
          "tree_id": "bea99444bda741c3202cf1b8d0c83d398b176647",
          "url": "https://github.com/greymistcube/libplanet/commit/146c3cce8685b6fddd790da5468455850ea6d7e8"
        },
        "date": 1684377488392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8392798.833333334,
            "unit": "ns",
            "range": "± 159041.01522239659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20764331.922222223,
            "unit": "ns",
            "range": "± 785083.8776305859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52384705.51923077,
            "unit": "ns",
            "range": "± 2125766.089172666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110389968.65384616,
            "unit": "ns",
            "range": "± 785742.2981922727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222327703.4642857,
            "unit": "ns",
            "range": "± 6243304.139296189"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71968.1914893617,
            "unit": "ns",
            "range": "± 8528.845182737788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320530.0520833333,
            "unit": "ns",
            "range": "± 22804.69724137865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288491.7752808989,
            "unit": "ns",
            "range": "± 17420.104727631657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287575.2826086957,
            "unit": "ns",
            "range": "± 18940.632483797563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4153874.552631579,
            "unit": "ns",
            "range": "± 83967.77544753814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3969417.7325581396,
            "unit": "ns",
            "range": "± 213882.75773668892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21429.275280898877,
            "unit": "ns",
            "range": "± 3329.9024956814665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110894.4945054945,
            "unit": "ns",
            "range": "± 15469.12685992014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105394.53125,
            "unit": "ns",
            "range": "± 14432.634867186915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103790.47368421052,
            "unit": "ns",
            "range": "± 15902.457565890198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6528.625,
            "unit": "ns",
            "range": "± 1212.9077827574874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17393.045977011494,
            "unit": "ns",
            "range": "± 2776.0363994164036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630075.329787234,
            "unit": "ns",
            "range": "± 201428.68106141876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017955.2473118277,
            "unit": "ns",
            "range": "± 170183.63569280965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2591188.1666666665,
            "unit": "ns",
            "range": "± 220409.42112313787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6674361.016853932,
            "unit": "ns",
            "range": "± 459199.02460359054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3465505.9239130435,
            "unit": "ns",
            "range": "± 309370.80968982354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3697495.89,
            "unit": "ns",
            "range": "± 285276.2335234592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4698594.704081632,
            "unit": "ns",
            "range": "± 316070.4854775018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4628691.840206185,
            "unit": "ns",
            "range": "± 412754.2251362054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8075492.051948052,
            "unit": "ns",
            "range": "± 410930.6696483668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6722305.257372359,
            "unit": "ns",
            "range": "± 327254.76106227847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2109657.355859375,
            "unit": "ns",
            "range": "± 55092.20516796047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385561.3415601326,
            "unit": "ns",
            "range": "± 80806.95572859788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3040458.589765625,
            "unit": "ns",
            "range": "± 202147.88206964743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821857.1005859375,
            "unit": "ns",
            "range": "± 12427.116428978918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820588.7330537684,
            "unit": "ns",
            "range": "± 26132.688035899453"
          }
        ]
      }
    ]
  }
}