window.BENCHMARK_DATA = {
  "lastUpdate": 1696570813703,
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
          "id": "a7262433136bc8624a3b123bb7834f73ccd77f45",
          "message": "Remove more",
          "timestamp": "2023-10-06T14:17:58+09:00",
          "tree_id": "57f5b62f0971a37b87bbbfbace9bff439ab8d517",
          "url": "https://github.com/greymistcube/libplanet/commit/a7262433136bc8624a3b123bb7834f73ccd77f45"
        },
        "date": 1696570805999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53612.550561797754,
            "unit": "ns",
            "range": "± 3516.3049595331145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8458715.666666666,
            "unit": "ns",
            "range": "± 143042.0616929893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23245208.933333334,
            "unit": "ns",
            "range": "± 236156.16864828684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58423782.15384615,
            "unit": "ns",
            "range": "± 211031.0276751763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116373572.86666666,
            "unit": "ns",
            "range": "± 443392.9031054361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232265634.2142857,
            "unit": "ns",
            "range": "± 968527.0607395524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296743.94680851063,
            "unit": "ns",
            "range": "± 11528.19616495839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278893.4375,
            "unit": "ns",
            "range": "± 9826.13606859603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259532.56578947368,
            "unit": "ns",
            "range": "± 13118.58712548525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656544.133333334,
            "unit": "ns",
            "range": "± 48738.10879862561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257830.666666667,
            "unit": "ns",
            "range": "± 49915.79458114102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30154.225806451614,
            "unit": "ns",
            "range": "± 2302.1322400399017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107953.82291666667,
            "unit": "ns",
            "range": "± 8912.80002432314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83600.26804123711,
            "unit": "ns",
            "range": "± 6579.374318839558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91614.67010309278,
            "unit": "ns",
            "range": "± 9531.142540073623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6243.833333333333,
            "unit": "ns",
            "range": "± 1003.7160288979483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19997.147368421054,
            "unit": "ns",
            "range": "± 2127.0523404238493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483892.9655172413,
            "unit": "ns",
            "range": "± 80889.12925949482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861238.871794872,
            "unit": "ns",
            "range": "± 99232.36088096185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255185.5555555555,
            "unit": "ns",
            "range": "± 123822.04647918977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9600137.710144928,
            "unit": "ns",
            "range": "± 459032.2627980553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5112120.208333333,
            "unit": "ns",
            "range": "± 17689.738444704235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590347.5897042411,
            "unit": "ns",
            "range": "± 1924.2264574709977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089450.7992788462,
            "unit": "ns",
            "range": "± 740.352909144419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619085.061941964,
            "unit": "ns",
            "range": "± 2024.9032198020986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824466.9777994792,
            "unit": "ns",
            "range": "± 1719.2971761246451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771449.4440354567,
            "unit": "ns",
            "range": "± 758.6103405054245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3762952.8571428573,
            "unit": "ns",
            "range": "± 48075.76664912479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4035919.8947368423,
            "unit": "ns",
            "range": "± 81066.63393358352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4662766.8,
            "unit": "ns",
            "range": "± 123743.07001269473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4615663.552631579,
            "unit": "ns",
            "range": "± 159137.7431205343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10870452.621621622,
            "unit": "ns",
            "range": "± 357425.64415944926"
          }
        ]
      }
    ]
  }
}