window.BENCHMARK_DATA = {
  "lastUpdate": 1682073396969,
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
          "id": "fb1f05d14a652b8cf81d7e9cc57aa2bb7ee3e788",
          "message": "Simplify Json serialization",
          "timestamp": "2023-04-21T19:19:47+09:00",
          "tree_id": "eebad80cc7d31c5ff14e2488e3e233994bcd08dd",
          "url": "https://github.com/greymistcube/libplanet/commit/fb1f05d14a652b8cf81d7e9cc57aa2bb7ee3e788"
        },
        "date": 1682073390034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945937.666666667,
            "unit": "ns",
            "range": "± 144356.2870790119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21689359,
            "unit": "ns",
            "range": "± 308453.20554270694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54389566.5,
            "unit": "ns",
            "range": "± 578450.2524381222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108643151.46666667,
            "unit": "ns",
            "range": "± 1209347.6478446592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216567479.8,
            "unit": "ns",
            "range": "± 3683819.371269933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54450.26315789474,
            "unit": "ns",
            "range": "± 6227.266972007021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542287.4591836734,
            "unit": "ns",
            "range": "± 120262.0894845035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2720921.6363636362,
            "unit": "ns",
            "range": "± 85945.54106410137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2437648.075949367,
            "unit": "ns",
            "range": "± 122258.70395471428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5749038.193548387,
            "unit": "ns",
            "range": "± 174799.8224637579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5938270.874479166,
            "unit": "ns",
            "range": "± 73333.93316374671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849497.3173076923,
            "unit": "ns",
            "range": "± 4852.439103359896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366098.671875,
            "unit": "ns",
            "range": "± 3400.349624292058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618800.4505208335,
            "unit": "ns",
            "range": "± 5966.639739111509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831779.7862630208,
            "unit": "ns",
            "range": "± 2178.2469883562485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765025.0211588541,
            "unit": "ns",
            "range": "± 399.5221962439282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309916.2631578947,
            "unit": "ns",
            "range": "± 10576.886592137136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283890.7619047619,
            "unit": "ns",
            "range": "± 6483.494982683043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229903.7857142857,
            "unit": "ns",
            "range": "± 3871.3106740695503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4375923.533333333,
            "unit": "ns",
            "range": "± 62317.43497021252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039595.2666666666,
            "unit": "ns",
            "range": "± 39273.62945042797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21862.854166666668,
            "unit": "ns",
            "range": "± 1991.1873526229558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94864.26865671642,
            "unit": "ns",
            "range": "± 4523.682870693831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78370.67368421053,
            "unit": "ns",
            "range": "± 4470.096444392722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94255.42857142857,
            "unit": "ns",
            "range": "± 14403.99748065378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7325.8421052631575,
            "unit": "ns",
            "range": "± 1394.4249277244546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21510.479591836734,
            "unit": "ns",
            "range": "± 2560.509905039622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324285.777777778,
            "unit": "ns",
            "range": "± 69886.8531578054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3741692.4782608696,
            "unit": "ns",
            "range": "± 93534.3690366223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4380527.297297297,
            "unit": "ns",
            "range": "± 148232.8509672582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4916779.052631579,
            "unit": "ns",
            "range": "± 108529.64847986812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7318422.310344827,
            "unit": "ns",
            "range": "± 211564.5729698996"
          }
        ]
      }
    ]
  }
}