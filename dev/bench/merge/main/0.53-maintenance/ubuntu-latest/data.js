window.BENCHMARK_DATA = {
  "lastUpdate": 1680491255342,
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
          "id": "db57324e9925a094741d779a02c06a62b19bd4a0",
          "message": "Fix changelog",
          "timestamp": "2023-04-03T11:49:34+09:00",
          "tree_id": "118aa78362a7cfe4036b7151188443d5543a9b30",
          "url": "https://github.com/greymistcube/libplanet/commit/db57324e9925a094741d779a02c06a62b19bd4a0"
        },
        "date": 1680491246897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4334427.75,
            "unit": "ns",
            "range": "± 97233.78132211752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470944.173913044,
            "unit": "ns",
            "range": "± 107592.67097152371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5053104.125,
            "unit": "ns",
            "range": "± 130009.19454685821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5705887.413793104,
            "unit": "ns",
            "range": "± 166390.40529247498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9461860.476190476,
            "unit": "ns",
            "range": "± 198715.0077222702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9779940.444444444,
            "unit": "ns",
            "range": "± 203498.7951582261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25999654.933333334,
            "unit": "ns",
            "range": "± 331428.1015284928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70486044.06666666,
            "unit": "ns",
            "range": "± 550606.8534773332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130315321.6,
            "unit": "ns",
            "range": "± 825913.9841669608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278010510.15789473,
            "unit": "ns",
            "range": "± 6121672.602466513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730152.4659090908,
            "unit": "ns",
            "range": "± 94921.00669224958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3260315.45,
            "unit": "ns",
            "range": "± 115357.39590306251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2777094.051948052,
            "unit": "ns",
            "range": "± 134760.54285881505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6870291.452380952,
            "unit": "ns",
            "range": "± 251042.0134214447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57326.67391304348,
            "unit": "ns",
            "range": "± 3338.7337143856994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7120902.484375,
            "unit": "ns",
            "range": "± 55699.48120725482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2200759.63515625,
            "unit": "ns",
            "range": "± 8654.068925115978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1623971.8770926339,
            "unit": "ns",
            "range": "± 4046.937044917527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108619.842548077,
            "unit": "ns",
            "range": "± 7807.598060710395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992395.8986979167,
            "unit": "ns",
            "range": "± 4169.91370723293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919307.8083147322,
            "unit": "ns",
            "range": "± 380.3314365160767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 404439.2291666667,
            "unit": "ns",
            "range": "± 15800.05894176938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334791.36,
            "unit": "ns",
            "range": "± 8787.53004205391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287289.7419354839,
            "unit": "ns",
            "range": "± 8774.220880768624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6964833.769230769,
            "unit": "ns",
            "range": "± 67070.04011746954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5042355.4,
            "unit": "ns",
            "range": "± 51338.37814623398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26618.505376344085,
            "unit": "ns",
            "range": "± 2246.8769950642695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118715.22222222222,
            "unit": "ns",
            "range": "± 9991.03913979775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106701.80232558139,
            "unit": "ns",
            "range": "± 5787.128906806425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234170.89795918367,
            "unit": "ns",
            "range": "± 20232.09571753507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9131.663157894736,
            "unit": "ns",
            "range": "± 862.1852815946422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26572.97894736842,
            "unit": "ns",
            "range": "± 1694.3111006940403"
          }
        ]
      }
    ]
  }
}