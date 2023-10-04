window.BENCHMARK_DATA = {
  "lastUpdate": 1696392949792,
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
          "id": "250e4a8e03fcdb06cb573e4e3b48f0e1adec3685",
          "message": "Changed Evaluate to require base state root hash",
          "timestamp": "2023-10-04T12:55:22+09:00",
          "tree_id": "5cc7f9988adcf7a5928fa466c2a438ae65723157",
          "url": "https://github.com/greymistcube/libplanet/commit/250e4a8e03fcdb06cb573e4e3b48f0e1adec3685"
        },
        "date": 1696392918653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583389.1304347827,
            "unit": "ns",
            "range": "± 109005.99585940894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3060555.263157895,
            "unit": "ns",
            "range": "± 142719.86350398633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393823.711340206,
            "unit": "ns",
            "range": "± 181621.75655121592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10628060.227272727,
            "unit": "ns",
            "range": "± 770657.254949854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61808.69565217391,
            "unit": "ns",
            "range": "± 4788.864192896147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9402873.684210526,
            "unit": "ns",
            "range": "± 192646.79782817644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25875773.880597014,
            "unit": "ns",
            "range": "± 1200505.0750324433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65379919.35483871,
            "unit": "ns",
            "range": "± 2968862.6417402485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126357491.66666667,
            "unit": "ns",
            "range": "± 1226960.6857881376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257722056,
            "unit": "ns",
            "range": "± 6669842.143564318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5679146.540178572,
            "unit": "ns",
            "range": "± 131743.99487182818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1778551.3802083333,
            "unit": "ns",
            "range": "± 25089.57365351185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286325.030048077,
            "unit": "ns",
            "range": "± 13003.378641027804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3349116.5660511362,
            "unit": "ns",
            "range": "± 80997.19268353387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002027.1344866072,
            "unit": "ns",
            "range": "± 17504.726936793293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945926.9670758928,
            "unit": "ns",
            "range": "± 12812.243057615127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3989721.4285714286,
            "unit": "ns",
            "range": "± 68114.79200665513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4332981.25,
            "unit": "ns",
            "range": "± 74313.75125103025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5062320,
            "unit": "ns",
            "range": "± 84553.03661016558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4939213.333333333,
            "unit": "ns",
            "range": "± 145629.52697319587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12296228.888888888,
            "unit": "ns",
            "range": "± 745125.2182294251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317253.0120481928,
            "unit": "ns",
            "range": "± 16908.868630925663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305646.8085106383,
            "unit": "ns",
            "range": "± 11929.846587151465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284608.77192982455,
            "unit": "ns",
            "range": "± 12346.706916388595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5068421.428571428,
            "unit": "ns",
            "range": "± 72190.89201630556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4692092.857142857,
            "unit": "ns",
            "range": "± 54162.4971627149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27675,
            "unit": "ns",
            "range": "± 2679.7878941988556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113619.58762886598,
            "unit": "ns",
            "range": "± 10618.180548545593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100371.57894736843,
            "unit": "ns",
            "range": "± 8694.185672142028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108035.05154639175,
            "unit": "ns",
            "range": "± 16638.259381850374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7757.894736842105,
            "unit": "ns",
            "range": "± 1188.381605321128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28042.268041237112,
            "unit": "ns",
            "range": "± 2220.774782759123"
          }
        ]
      }
    ]
  }
}